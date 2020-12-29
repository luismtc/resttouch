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
		]);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
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
		$data = json_decode(file_get_contents('php://input'), true);;
		if (!isset($data['sede'])) {
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

		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		$mpdf->WriteHTML($this->load->view('caja', $data, true));
		$mpdf->Output("Reporte de Caja.pdf", "D");	
	}

	public function factura()
	{
		ini_set("pcre.backtrack_limit", "15000000");
		$_GET['sede'] = $this->data->sede;
		$_GET["_facturadas"] = true;

		$facts = $this->Factura_model->get_facturas($_GET);
		
		$data = $_GET;
		$data['impuesto_especial'] = false;
		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
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

		//$mpdf->AddPage();
		$mpdf->WriteHTML($this->load->view('detalle_factura', $data, true));
		$mpdf->Output("Detalle de Facturas.pdf", "D");	
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

		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		
		$mpdf->WriteHTML($this->load->view('propina', $datos, true));
		$mpdf->Output("Distribucion de Propina.pdf", "D");
	}

}

/* End of file Reporte.php */
/* Location: ./application/restaurante/controllers/Reporte.php */