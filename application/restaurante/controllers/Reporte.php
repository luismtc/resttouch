<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

ini_set('memory_limit', -1);
set_time_limit(0);

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
			'Reporte_model', 
			'Factura_model', 
			'Dfactura_model', 
			'Comanda_model',
			'Area_model',
			'Dcomanda_model',
			'Cuenta_model',
			'Usuario_model',
			'TurnoTipo_model',
			'Catalogo_model',
			'Configuracion_model'
		]);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
	}

	private function getEsRangoPorFechaDeTurno()
	{
		$config = $this->Configuracion_model->buscar();
		return get_configuracion($config, "RT_REPORTES_FECHAS_TURNOS", 3);
	}

	public function caja()
	{
		ini_set("pcre.backtrack_limit", "15000000");

		$ingresos = $this->Catalogo_model->getFormaPago([
			"descuento" => 0
		]);
		$descuentos = $this->Catalogo_model->getFormaPago([
			"descuento" => 1
		]);

		$data = json_decode(file_get_contents('php://input'), true);

		$data['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();

		if (!verDato($data, 'sede')) {
			$data['sede'] = [$this->data->sede];
		}  
		$data["_facturadas"] = true;
		
		$data["descuento"] = 0;
		$data['ingresos'] = $this->Reporte_model->get_ingresos($data);
		$data['comandas'] = true;
		$tmp = $this->Reporte_model->get_ingresos($data);
		unset($data['comandas']);
		$data['ingresos'] = array_merge($data['ingresos'], $tmp);

		$ingr = array_result($data['ingresos'], "forma_pago");
		$data['ingreso_sin_fact'] = [];
		foreach ($ingresos as $row) {
			if (!in_array($row->forma_pago, $ingr)) {
				$data['ingreso_sin_fact'][] = $row;
			}
		}

		//$data['ingreso_sin_fact'] = $this->Reporte_model->get_ingresos_sin_fac($data);
		$data["descuento"] = 1;
		$data['descuentos'] = $this->Reporte_model->get_ingresos($data);
		$data['comandas'] = true;
		$tmp = $this->Reporte_model->get_ingresos($data);
		unset($data['comandas']);
		$data['descuentos'] = array_merge($data['descuentos'], $tmp);

		$desc = array_result($data['descuentos'], "forma_pago");
		$data['descuento_sin_fact'] = [];
		foreach ($descuentos as $row) {
			if (!in_array($row->forma_pago, $desc)) {
				$data['descuento_sin_fact'][] = $row;
			}
		}

		if (isset($data['_grupo']) && $data['_grupo'] == 2) {
			$tmpIngreso = [];
			foreach ($data['ingresos'] as $row) {
				$tmpIngreso[$row->sede][] = $row;
			}
			$data['ingresos'] = $tmpIngreso;

			$tmpDescuento = [];
			foreach ($data['descuentos'] as $row) {
				$tmpDescuento[$row->sede][] = $row;
			}

			$data['descuentos'] = $tmpDescuento;
		}

		$data['comanda'] = $this->Reporte_model->getRangoComandas($data);
		
		if (isset($data['_detalle']) && filter_var($data['_detalle'], FILTER_VALIDATE_BOOLEAN)) {
			$data['detalle'] = 1;
			unset($data['descuento']);
			$det = $this->Reporte_model->get_ingresos($data);
			$data['comandas'] = true;
			$tmp = $this->Reporte_model->get_ingresos($data);
			$det = array_merge($det, $tmp);
			$data['detalle'] = [];
			foreach ($det as $row) {
				if (isset($_GET['_grupo']) && $_GET['_grupo'] == 2) {
					$data['detalle'][$row->sede][$row->descripcion][] = $row;
				} else {
					$data['detalle'][$row->descripcion][] = $row;
				}
			}
		}

		// var_dump($data['detalle']['Efectivo']);

		if (isset($data['_validar']) && $data['_validar'] !== "false") {
			$data['pagos'] = [];
			foreach ($data['_pagos'] as $row) {
				if (isset($row['monto'])) {
					$data['pagos'][$row['forma_pago']] = $row['monto'];
				}
			}
		} else {
			$data['_validar'] = false;
		}
		
		if ($this->input->get('turno_tipo')) {
			$data["turno"] = new TurnoTipo_model($data["turno_tipo"]);
		}

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		$tmp = [];
		foreach ($data['sede'] as $row) {
			$sede = $this->Catalogo_model->getSede([
				'sede' => $row,
				"_uno" => true
			]);
			
			$tmp[] = $sede->nombre;
		}

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$data['empresa'] = $emp;
				$data['nsede'] = implode(", ", $tmp);
			}
		}

		if (verDato($data, "_excel")) {
			$fdel = formatoFecha($data['fdel'],2);
			$fal = formatoFecha($data['fal'],2);

			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				  ->setCreator("Restouch")
				  ->setTitle("Office 2007 xlsx Articulo")
				  ->setSubject("Office 2007 xlsx Articulo")
				  ->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Descripción",
				"Monto",
				"Propina",
				"Total"
			];

			/*Encabezado*/
			$hoja->setCellValue("A1", $data['empresa']->nombre);
			$hoja->setCellValue("A2", $data['nsede']);
			$hoja->setCellValue("B3", "Reporte de Caja");

			if (isset($data['detalle'])) {
				$hoja->setCellValue("B4", "--Detalle--");
			} else {
				$hoja->setCellValue("B4", "--Resumen--");
			}

			if (isset($data['turno'])) {
				$hoja->setCellValue("B5", "--Resumen--");	
			}

			$hoja->setCellValue("A6", "Del: {$fdel}");
			$hoja->setCellValue("B6", "Al: {$fal}");

			if ($data['_validar']) {
				array_push($nombres, "Monto Recibido");
				array_push($nombres, "Diferencia");
			}

			$hoja->fromArray($nombres, null, "A8");
			$hoja->getStyle("A1:F8")->getFont()->setBold(true);
			$hoja->getStyle('A8:F8')->getAlignment()->setHorizontal('center');

			$fila = 9;
			$recIng = 0;
			$recDesc = 0;

			if (!isset($data['_grupo']) || $data['_grupo'] == 1) {
				$hoja->setCellValue("A{$fila}", "Ingresos");
				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('center');
				$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
				$fila++;

				foreach ($data['ingresos'] as $row) {
					$regs = [
						$row->descripcion,
						$row->monto,
						$row->propina,
						$row->monto + $row->propina
					];

					if ($data['_validar']){
						$rec = verDato($data['pagos'], $row->forma_pago, "0");
						$recIng += $rec;
						array_push($regs, round($rec, 2));

						$clase = "";
						$ing=$row->monto + $row->propina;
						$dif = $ing - $rec;

						array_push($regs, round($dif,2));
					}

					$hoja->fromArray($regs, null, "A{$fila}");
					$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				}

				if ($data['_validar']) {
					foreach ($data['ingreso_sin_fact'] as $row) {
						$regs = [
							$row->descripcion,
							"0.00",
							"0.00",
							"0.00"
						];

						$rec = verDato($data['pagos'], $row->forma_pago, "0");
						$recIng += $rec;
						array_push($regs, round($rec, 2));

						$clase = "";
						$ing=$row->monto + $row->propina;
						$dif = $ing - $rec;

						array_push($regs, round($dif,2));

						$hoja->fromArray($regs, null, "A{$fila}");
						$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
						$fila++;
					}
				}

				$hoja->setCellValue("A{$fila}", "Total ingresos: ");
				
				$ing = suma_field($data['ingresos'], "monto");
				$hoja->setCellValue("B{$fila}", round($ing,2));

				$prop = suma_field($data['ingresos'], "propina");
				$hoja->setCellValue("C{$fila}", round($prop,2));

				$hoja->setCellValue("D{$fila}", round($ing+$prop,2));				
				
				if ($data['_validar']){
					$hoja->setCellValue("E{$fila}", round($recIng,2));

					$hoja->setCellValue("F{$fila}", round($ing+$prop - $recIng,2));
				}

				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$fila++;

				$hoja->setCellValue("A{$fila}", "Descuentos");
				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('center');
				$hoja->getStyle("A{$fila}")->getFont()->setBold(true);

				foreach ($data['descuentos'] as $row) {
					$fila++;
					$hoja->setCellValue("A{$fila}", $row->descripcion);

					$hoja->setCellValue("B{$fila}", round($row->monto,2));
					
					$hoja->setCellValue("D{$fila}", round($row->monto,2));
					
					if ($data['_validar']) {
						$rec = verDato($data['pagos'], $row->forma_pago, "0");
						$recDesc += $rec;
						$hoja->setCellValue("E{$fila}", round($rec,2));

						$dif = abs($row->monto - $rec);
						$hoja->setCellValue("F{$fila}", round($dif,2));
					}
					$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				}

				if ($data['_validar']) {
					$fila++;
					foreach ($data['descuento_sin_fact'] as $row) {
						$hoja->setCellValue("A{$fila}", $row->descripcion);
						$hoja->setCellValue("B{$fila}", round("0.00",2));

						if ($data['_validar']) {
							$rec = verDato($data['pagos'], $row->forma_pago, "0");
							$recDesc += $rec;
							$hoja->setCellValue("E{$fila}", $rec);

							$dif = abs(0 - $rec);
							$hoja->setCellValue("F{$fila}", round($dif,2));
						}
						$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					}
				}

				$fila++;

				$hoja->setCellValue("A{$fila}", "Total Descuentos: ");

				$desc = suma_field($data['descuentos'], "monto");
				$hoja->setCellValue("B{$fila}", round($desc,2));

				$hoja->setCellValue("D{$fila}", round($desc,2));

				if ($data['_validar']) {
					$hoja->setCellValue("E{$fila}", round($recDesc,2));

					$hoja->setCellValue("F{$fila}", round($desc - $recDesc,2));
				}

				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$fila++;

				$hoja->setCellValue("A{$fila}", "TOTAL: ");
				$hoja->setCellValue("B{$fila}", round(($desc+$ing),2));
				$hoja->setCellValue("C{$fila}", round($prop,2));
				$hoja->setCellValue("D{$fila}", round(($desc+$ing+$prop),2));

				if ($data['_validar']) {
					$hoja->setCellValue("E{$fila}", round($recIng+$recDesc,2));
					$hoja->setCellValue("F{$fila}", round($ing+$prop+$desc - ($recIng+$recDesc),2));
				}

				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
			} else {
				$totalIngresos = 0;
				$totalDescuentos = 0;
				$totalPropinas = 0;

				foreach ($data['ingresos'] as $value) {
					$hoja->setCellValue("A{$fila}", $value[0]->nsede);
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('center');
					$fila++;

					$hoja->setCellValue("A{$fila}", "Ingresos");
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$fila++;

					foreach ($value as $row) {
						$hoja->setCellValue("A{$fila}", $row->descripcion);
						$hoja->setCellValue("B{$fila}", round($row->monto,2));
						$hoja->setCellValue("C{$fila}", round($row->propina,2));
						$total = $row->monto + $row->propina;
						$hoja->setCellValue("D{$fila}", round($total,2));

						if ($data['_validar']) {
							$rec = verDato($datos['pagos'], $row->forma_pago, "0");
							$recIng += $rec;
							$hoja->setCellValue("E{$fila}", round($rec,2));

							$dif = abs($ing - $rec);
							$hoja->setCellValue("F{$fila}", round($dif,2));
						}
						$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
						$fila++;
					}
					$ing = suma_field($value,"monto");
					$prop = suma_field($value,"propina");
					$totalIngresos += $ing;
					$totalPropinas += $prop;

					$hoja->setCellValue("A{$fila}", "Total Ingresos ".$value[0]->nsede);
					$hoja->setCellValue("B{$fila}", round($ing,2));
					$hoja->setCellValue("C{$fila}", round($prop,2));
					$hoja->setCellValue("D{$fila}", round($prop+$ing,2));

					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
					$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				}

				$hoja->setCellValue("A{$fila}", "Total Ingresos: ");
				$hoja->setCellValue("B{$fila}", round($totalIngresos,2));
				$hoja->setCellValue("C{$fila}", round($totalPropinas,2));
				$hoja->setCellValue("D{$fila}", round($totalPropinas+$totalIngresos,2));
				
				$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$fila++;

				foreach ($data['descuentos'] as $value) {
					$fila++;
					$hoja->setCellValue("A{$fila}", $value[0]->nsede);
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('center');

					$fila++;
					$hoja->setCellValue("A{$fila}", "Descuentos");
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);

					foreach ($value as $row) {
						$fila++;
						$hoja->setCellValue("A{$fila}", $row->descripcion);
						$hoja->setCellValue("B{$fila}", round($row->monto,2));
						$hoja->setCellValue("C{$fila}", "0.00");
						$hoja->setCellValue("D{$fila}", round($row->monto,2));

						$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					}
					$fila++;
					$hoja->setCellValue("A{$fila}", "Total Descuentos ".$value[0]->nsede);
					$desc = suma_field($value,"monto");
					$totalDescuentos += $desc;
					$hoja->setCellValue("B{$fila}", round($desc,2));
					$hoja->setCellValue("C{$fila}", round("0.00",2));
					$hoja->setCellValue("D{$fila}", round($desc,2));

					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
					$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				}
				$fila++;
				$hoja->setCellValue("A{$fila}", "Total Descuentos: ");
				$hoja->setCellValue("B{$fila}", round($totalDescuentos,2));
				$hoja->setCellValue("C{$fila}", round("0",2));
				$hoja->setCellValue("D{$fila}", round($totalDescuentos,2));

				$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("B{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$fila++;
			}

			if (verDato($data, 'detalle')) {
				$fila+= 2;
				foreach ($data['detalle'] as $key => $row) {
					$hoja->setCellValue("A{$fila}", $key);
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);
					$fila++;

					$hoja->setCellValue("A{$fila}", "Factura");
					$hoja->setCellValue("B{$fila}", "Fecha");
					$hoja->setCellValue("C{$fila}", "Documento");
					$hoja->setCellValue("D{$fila}", "Monto");
					$hoja->getStyle("A{$fila}:F{$fila}")->getFont()->setBold(true);	
					$fila++;

					foreach ($row as $det) {
						$hoja->setCellValue("A{$fila}", $det->numero_factura);
						$hoja->setCellValue("B{$fila}", formatoFecha($det->fecha_factura,2));
						$hoja->setCellValue("B{$fila}", $det->documento);
						$hoja->setCellValue("D{$fila}", round($det->monto,2));
						$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('left');
						$hoja->getStyle("D{$fila}")->getNumberFormat()->setFormatCode('0.00');
						$fila++;
					}
				}
				
			}

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
			
			$hoja->setTitle("Corte de caja");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Ventas.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");

		} else {
			$mpdf = new \Mpdf\Mpdf([
				// 'tempDir' => sys_get_temp_dir(),
				'format' => 'Legal'
			]);
			$mpdf->WriteHTML($this->load->view('caja', $data, true));
			$mpdf->Output("Reporte de Caja.pdf", "D");	
		}
	}

	public function factura()
	{
		ini_set("pcre.backtrack_limit", "15000000");
		$_GET['sede'] = $this->data->sede;
		$_GET["_facturadas"] = true;

		$facts = $this->Factura_model->get_facturas($_GET);
		
		$data = $_GET;
		$data['impuesto_especial'] = false;
		
		$data['facturas'] = [];
		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$fac->mesa = $fac->getMesa();
			$fac->cargarReceptor();
			$prop = $fac->getPropina();
			$det = $fac->getDetalle();
			$fac->total = number_format(suma_field($det, "total"),2);
			$fac->propina = number_format(suma_field($prop, "propina_monto"),2);
			$data['facturas'][] = $fac;
			if (isset($_GET['_anuladas']) && filter_var($_GET['_anuladas'], FILTER_VALIDATE_BOOLEAN)) {
				$bit = $this->Bitacora_model->buscarBitacora([
					"comentario" => "Anulación", 
					"_uno" => true, 
					"tabla" => "factura",
					"registro" => $fac->getPK()
				]);
				$bit->usuario = $this->Usuario_model->buscar([
					"usuario" => $bit->usuario,
					"_uno" => true
				]);
				$fac->bitacora = $bit;
				$fac->razon_anulacion = $fac->getRazonAnulacion();
			}
			if (suma_field($det, "valor_impuesto_especial") > 0) {
				$data['impuesto_especial'] = true;
			}
		}

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$data['empresa'] = $emp;
				$data['sede'] = $sede;
			}
		}

		if (verDato($_GET, "_excel")) {
			$fdel = formatoFecha($_GET['fdel'],2);
			$fal = formatoFecha($_GET['fal'],2);
			$anuladas = isset($data['_anuladas']) && filter_var($data['_anuladas'], FILTER_VALIDATE_BOOLEAN);
			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				  ->setCreator("Restouch")
				  ->setTitle("Office 2007 xlsx Articulo")
				  ->setSubject("Office 2007 xlsx Articulo")
				  ->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Factura",
				"Mesa",
				"Fecha",
				"NIT",
				"Cliente"
			];

			if ($data['impuesto_especial']) {
				$nombres[] = "Impuesto Especial";
			}

			if ($anuladas) {
				array_push($nombres, "Fecha Anulacion");
				array_push($nombres, "Usuario Anulacion");
				array_push($nombres, "Motivo");
			}

			array_push($nombres, "Total");
			array_push($nombres, "Propina");
			array_push($nombres, "Descuento");

			/*Encabezado*/
			$hoja->setCellValue("A1", $data["empresa"]->nombre);
			$hoja->setCellValue("A2", $data["sede"]->nombre);
			$hoja->setCellValue("A4", "Detalle de Facturas");
			$hoja->setCellValue("A5", "Del: {$fdel} al: {$fal}");

			$hoja->fromArray($nombres, null, "A9");
			$hoja->getStyle('A9:L9')->getAlignment()->setHorizontal('center');
			$hoja->getStyle("A1:A5")->getFont()->setBold(true);
			$hoja->getStyle("A9:L9")->getFont()->setBold(true);
			$hoja->setCellValue("A7", "Facturas");
			$hoja->setCellValue("A8", "FEL");

			$fila = 11;
			$totalFactura = 0;
			$totalPropina = 0;
			$totalDescuento = 0;

			foreach ($data['facturas'] as $row) {
				$detalle = $row->getDetalle();
				$desc = suma_field($detalle, "descuento");
				$total = suma_field($detalle, "total");
				$imp = suma_field($detalle, "valor_impuesto_especial");
				$total += $imp;
				$totalPropina += $row->propina;
				$totalDescuento += $desc;
				$totalFactura += ($total - $desc);

				$reg = [
					$row->numero_factura,
					isset($row->mesa->mesa) ? $row->mesa->mesa : '',
					formatoFecha($row->fecha_factura,2),
					(empty($row->fel_uuid_anulacion) ? $row->receptor->nit : ''),
					(empty($row->fel_uuid_anulacion) ? $row->receptor->nombre : 'ANULADA')
				];

				if ($data['impuesto_especial']) {
					$reg[] = (empty($row->fel_uuid_anulacion) ? round($imp, 2) : 0);
				}

				if ($anuladas) {
					array_push($reg, formatoFecha($row->bitacora->fecha));
					array_push($reg, "{$row->bitacora->usuario->nombres} {$row->bitacora->usuario->apellidos}");
					array_push($reg, $row->razon_anulacion->descripcion);
				}

				array_push($reg, (empty($row->fel_uuid_anulacion) ? round($total, 2) : 0));
				array_push($reg, (empty($row->fel_uuid_anulacion) ? round($row->propina, 2) : 0));
				array_push($reg, (empty($row->fel_uuid_anulacion) ? round($desc, 2) : 0));

				$hoja->fromArray($reg, null, "A{$fila}");
				$fila++;

				if (isset($data['_detalle']) && $data['_detalle'] !== "false") {
					$tituloDet = [
						"",
						"",
						"",
						"Articulo",
						"Cantidad"
					];

					if ($data['impuesto_especial']) {
						$tituloDet[] = "Impuesto Especial";
					}

					array_push($tituloDet, "Total");
					array_push($tituloDet, "Descuento");
					$hoja->fromArray($tituloDet, null, "A{$fila}");
					$hoja->getStyle("A{$fila}:L{$fila}")->getFont()->setBold(true);
					$fila++;

					foreach ($detalle as $det) {
						$reg = [
							"",
							"",
							"",
							$det->articulo->descripcion,
							$det->cantidad,
							round($det->total,2)
						];
						$hoja->fromArray($reg, null, "A{$fila}");
						$fila++;
					}
				}
			}

			$col = 5;

			if ($anuladas) {
				$col += 3;
			}

			if ($data['impuesto_especial']) {
				$col += 1;
			}

			$total = [];
			for ($i = 0; $i < $col-1; $i++) {
				$total[$i] = "";
			}

			array_push($total, "Total");
			array_push($total, round($totalFactura,2));
			array_push($total, round($totalPropina,2));
			array_push($total, round($totalDescuento, 2));

			$fila++;
			$hoja->fromArray($total, null, "A{$fila}");
			$hoja->getStyle("A{$fila}:L{$fila}")->getFont()->setBold(true);

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
			
			$hoja->setTitle("Ventas por Articulo");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Ventas.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");
		} else {

			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(),
				'format' => 'Legal'
			]);
			$mpdf->WriteHTML($this->load->view('detalle_factura', $data, true));
			$mpdf->Output("Detalle de Facturas.pdf", "D");	
		}
		//$mpdf->AddPage();
	}

	public function comanda()
	{
		$_GET['sede'] = $this->data->sede;
		$tmp = $this->Comanda_model->getComandas($_GET);
		$datos = [];
		$data = $_GET;
		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		foreach ($tmp as $row) {
			$comanda = new Comanda_model($row->comanda);
			$datos[] = $comanda->getComanda();

		}

		$data['comanda'] = $datos;

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$data['empresa'] = $emp;
				$data['sede'] = $sede;
			}
		}

			
		$mpdf->WriteHTML($this->load->view('comanda', $data, true));
		$mpdf->Output("Detalle de Comandas.pdf", "D");	
	}

	public function autoconsulta()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$req['sede'] = $this->data->sede;
		$datos = $this->Reporte_model->autoconsulta($req);
		$excel = new Spreadsheet();
		$excel->getProperties()
			  ->setCreator("Restouch")
			  ->setTitle("Office 2007 xlsx Dinamico")
			  ->setSubject("Office 2007 xlsx Dinamico")
			  ->setKeywords("office 2007 openxml php");

		$excel->setActiveSheetIndex(0);
		$hoja = $excel->getActiveSheet();
		if ($datos) {
			$nombres    = array_keys((array)$datos[0]);
			$cntnombres = count($nombres);

			$hoja->fromArray($nombres, null, "A5");
			
			$pos = 6;
			foreach ($datos as $key => $row) {
				$hoja->fromArray((array) $row, null, "A{$pos}");
				$pos+=1;
			}

			$hoja->setTitle("Dinamico");

			for ($i=0; $i <= $cntnombres ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
		}
		
		header("Content-Type: application/vnd.ms-excel");
		header("Content-Disposition: attachment;filename=Dinamico.xlsx");
		header("Cache-Control: max-age=1");
		header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
		header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
		header("Cache-Control: cache, must-revalidate");
		header("Pragma: public");

		$writer = new Xlsx($excel);
		$writer->save("php://output");

		#$obwrite = PHPExcel_IOFactory::createWriter($excel, "Excel5");
		#$obwrite->save("php://output");
	}

	public function distribucion_propina()
	{
		$this->load->model(['Propina_model', 'Tipo_usuario_model']);
		$_GET['sede'] = $this->data->sede;
		$_GET['_vivas'] = true;
		$facts = $this->Factura_model->get_facturas($_GET);
		$distProp = $this->Propina_model->buscar([
			"sede" => $this->data->sede,
			"grupal" => 1
		]);

		$grupos = array_result($distProp, "usuario_tipo");
		$datos = $_GET;
		
		$datos['detalle'] = (isset($_GET['_detalle']) && $_GET['_detalle'] !="false");
		
		$datos['datos'] = [];

		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$propina = suma_field($fac->getPropina(), "propina_monto");
			$comanda = $fac->getComanda();
			$fac->propina = $propina;
			
			if ($comanda->getPK() && $fac->propina > 0) {
				$tmp = $comanda->getTurno();
				$turno = new Turno_model($tmp->turno);
				$usuarios = $turno->getUsuarios();// obtener usuarios del turno
				foreach ($distProp as $prop) {
					$tusuario = $this->Tipo_usuario_model->buscar([
						"usuario_tipo" => $prop->usuario_tipo,
						"_uno" => true
					]);

					if (isset($datos['datos'][$tusuario->usuario_tipo])) {
						$datos['datos'][$tusuario->usuario_tipo]['facturas'][] = $fac;
						$datos['datos'][$tusuario->usuario_tipo]['propina'] += $propina * $prop->porcentaje / 100;
					} else {
						$datos['datos'][$tusuario->usuario_tipo] = [
							"descripcion" => $tusuario->descripcion,
							"facturas" => [$fac],
							"porcentaje" => $prop->porcentaje,
							"propina" => $propina * $prop->porcentaje / 100
						];
					}
				}
				
				foreach ($usuarios as $usu) {
					$dist = $this->Propina_model->buscar([
						"sede" => $this->data->sede,
						"usuario_tipo" => $usu->usuario_tipo->usuario_tipo,
						"_uno" => true
					]);

					if ($dist) {
						if (strtolower(trim($usu->usuario_tipo->descripcion)) == 'mesero') {
							if ($comanda->mesero == $usu->usuario->usuario) {
								if (!isset($datos['datos'][$usu->usuario_tipo->usuario_tipo])) {
									$datos['datos'][$usu->usuario_tipo->usuario_tipo] = [
										"descripcion" => $usu->usuario_tipo->descripcion,
										"porcentaje" => $dist->porcentaje,
										"usuario" => []
									];
								}
								if (isset($datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario])) {
									$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario]['facturas'][] = $fac;
									$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario]['propina'] += $propina*$dist->porcentaje / 100;
								} else {
									$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario] = [
										"nombre" => $usu->usuario->nombres." ".$usu->usuario->apellidos,
										"facturas" => [$fac],
										"propina" => $propina * $dist->porcentaje / 100
									];
								}
							}
						} else {
							if (!isset($datos['datos'][$usu->usuario_tipo->usuario_tipo])) {
								$datos['datos'][$usu->usuario_tipo->usuario_tipo] = [
									"descripcion" => $usu->usuario_tipo->descripcion,
									"porcentaje" => $dist->porcentaje,
									"usuario" => []
								];
							}

							if (isset($datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario])) {
								$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario]['facturas'][] = $fac;
								$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario]['propina'] += $propina*$dist->porcentaje / 100;
							} else {
								$datos['datos'][$usu->usuario_tipo->usuario_tipo]['usuario'][$usu->usuario->usuario] = [
									"nombre" => $usu->usuario->nombres." ".$usu->usuario->apellidos,
									"facturas" => [$fac],
									"propina" => $propina * $dist->porcentaje / 100
								];
							}
						}
					}
				}
			}
		}

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$datos['empresa'] = $emp;
				$datos['sede'] = $sede;
			}
		}

		if (verDato($_GET, "_excel")) {
			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				  ->setCreator("Restouch")
				  ->setTitle("Office 2007 xlsx Existencias")
				  ->setSubject("Office 2007 xlsx Existencias")
				  ->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();

			/*Encabezado*/
			$hoja->setCellValue("A1", $emp->nombre);
			$hoja->setCellValue("A2", $sede->nombre);
			$hoja->setCellValue("A3", "Distribución de Propinas");
			$hoja->setCellValue("B4", "Del: ".formatoFecha($datos['fdel']) ." Al: ".formatoFecha($datos['fal']));

			$hoja->getStyle("A1:C4")->getFont()->setBold(true);
			$coltotal= "A";
			$coltotalVal = "B";
			$totalprop = 0;

			if ($datos['detalle']) {
				$coltotal= "E";
				$coltotalVal = "F";

				$nombres = [
					"",
					"",
					"Fecha",
					"Comanda",
					"Facturas",
					"Propina"
				];

				$hoja->fromArray($nombres, null, "A6");
				$hoja->getStyle("A6:F6")->getFont()->setBold(true);
				$hoja->getStyle('A6:F6')->getAlignment()->setHorizontal('center');
				$fila = 7;				
				foreach ($datos['datos'] as $row) {
					$hoja->setCellValue("A{$fila}", $row['descripcion']);
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;
					if (verDato($row, "usuario")) {
						foreach ($row["usuario"] as $key => $usu) {
							$hoja->setCellValue("A{$fila}", $usu['nombre']);
							$fila++;

							foreach ($usu['facturas'] as $fac) {
								$reg = [
									"",
									"",
									$fac->fecha_factura,
									$fac->getComanda()->comanda,
									$fac->numero_factura,
									round($fac->propina * $row['porcentaje']/100,2)
								];

								$hoja->fromArray($reg, null, "A{$fila}");
								$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$fila++;
							}
							$totalprop+=$usu['propina'];
							$hoja->setCellValue("E{$fila}", "Total Empleado");
							$hoja->setCellValue("F{$fila}", round($usu['propina'],2));
							$hoja->getStyle("E{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
						}
					} else {
						$hoja->setCellValue("A{$fila}", "N/A");
						$fila++;
						foreach ($row['facturas'] as $fac) {
							$reg = [
								"",
								"",
								$fac->fecha_factura,
								$fac->getComanda()->comanda,
								$fac->numero_factura,
								round($fac->propina * $row['porcentaje']/100,2)
							];

							$hoja->fromArray($reg, null, "A{$fila}");
							$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
						$totalprop+=$row['propina'];
						$hoja->setCellValue("E{$fila}", "Total Empleado");
						$hoja->setCellValue("F{$fila}", round($row['propina'],2));
						$hoja->getStyle("E{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					}
				}
			} else {
				$nombres = [
					"Empleado",
					"Propina"
				];

				$hoja->fromArray($nombres, null, "A6");
				$hoja->getStyle("A6:B6")->getFont()->setBold(true);
				$hoja->getStyle('A6:F6')->getAlignment()->setHorizontal('center');
				$fila = 7;

				foreach ($datos['datos'] as $row) {
					$totalTipo = 0;
					$hoja->setCellValue("A{$fila}", $row['descripcion']);
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;

					if (isset($row['usuario'])) {
						foreach ($row['usuario'] as $usu) {
							$totalTipo+= $usu['propina'];
							$totalprop+=$usu['propina'];
							$hoja->setCellValue("A{$fila}", $usu['nombre']);
							$hoja->setCellValue("B{$fila}", round($usu['propina'],2));
							$hoja->getStyle("B{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
					} else {
						$totalTipo+= $row['propina'];
						$totalprop+=$row['propina'];
						$hoja->setCellValue("A{$fila}", "N/A");
						$hoja->setCellValue("B{$fila}", round($row['propina'],2));
						$hoja->getStyle("B{$fila}")->getNumberFormat()->setFormatCode('0.00');
						$fila++;
					}
					$hoja->setCellValue("A{$fila}", "Total por tipo:");
					$hoja->setCellValue("B{$fila}", round($totalTipo,2));
					$hoja->getStyle("A{$fila}:B{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("A{$fila}:B{$fila}")
					->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				}
			}

			$hoja->setCellValue("{$coltotal}{$fila}", "Total general:");
			$hoja->setCellValue("{$coltotalVal}{$fila}", round($totalprop,2));

			$hoja->getStyle("{$coltotal}{$fila}:{$coltotalVal}{$fila}")
			->getNumberFormat()->setFormatCode('0.00');

			$hoja->getStyle("{$coltotal}{$fila}:{$coltotalVal}{$fila}")->getFont()->setBold(true);

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Kardex.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");
		} else {
			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(),
				'format' => 'Legal'
			]);
			
			$mpdf->WriteHTML($this->load->view('propina', $datos, true));
			$mpdf->Output("Distribucion de Propina.pdf", "D");
		}
	}

}

/* End of file Reporte.php */
/* Location: ./application/restaurante/controllers/Reporte.php */