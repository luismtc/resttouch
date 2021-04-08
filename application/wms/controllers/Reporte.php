<?php
defined('BASEPATH') OR exit('No direct script access allowed');

ini_set('memory_limit', -1);
set_time_limit(0);

class Reporte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Sede_model',
			'Empresa_model',
			'reporte/Reporte_model', 
			'Articulo_model', 
			'Receta_model',
			'Ingreso_model',
			'Categoria_model',
			'Bodega_model'
		]);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}
	}

	public function existencia()
	{
		ini_set("pcre.backtrack_limit", "15000000");
		$rpt = new Reporte_model();
		$data = [];
		if (!isset($_GET['sede'])) {			
			$_GET['sede'] = $this->data->sede;
			$data['sede'] = $this->data->sede;
		} else {
			$data['sede'] = $_GET['sede'];
		}

		$data['mostrar_inventario'] = 1;
		$arts = $this->Catalogo_model->getArticulo($data);
		$args = [
			"cliente" => "",
			"sub_cuenta" => "",
			"fecha" => formatoFecha($this->input->get('fecha'), 2)
		];		

		foreach ($arts as $row) {
			$art = new Articulo_model($row->articulo);
			$art->actualizarExistencia($_GET);
			$rec = $art->getReceta();
			if (count($rec) == 0 || $art->produccion) {
				$args["reg"][] = $art->getExistencias($_GET);
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
			$nombres = [
				"Codigo",
				"Descripción",
				"Unidad",
				"Ingresos",
				"Egresos",
				"Comandas",
				"Factura Directa",
				"Total Egresos",
				"Existencia"
			];
			/*Encabezado*/
			$hoja->setCellValue("A1", "Reporte de Existencias");
			$hoja->setCellValue("G1", "Fecha: {$args['fecha']}");

			$hoja->fromArray($nombres, null, "A3");
			$hoja->getStyle("A3:I3")->getFont()->setBold(true);
			$hoja->getStyle('A3:I3')->getAlignment()->setHorizontal('center');
			$hoja->getStyle("A1")->getFont()->setBold(true);
			$fila = 4;
			foreach ($args["reg"] as $row) {
				$art = new Articulo_model($row->articulo->articulo);
				$rec = $art->getReceta();

				$reg = [
					(!empty($row->articulo->codigo) ? $row->articulo->codigo : $row->articulo->articulo),
					"{$row->articulo->articulo} ". $row->articulo->descripcion,
					$row->presentacion->descripcion,
					((float) $row->ingresos != 0) ? round($row->ingresos / $row->presentacion->cantidad,2) : "0.00",
					((float) $row->egresos != 0) ? round($row->egresos / $row->presentacion->cantidad,2) : "0.00",
					((float) $row->comandas != 0) ? round($row->comandas / $row->presentacion->cantidad,2) : "0.00",
					((float) $row->facturas != 0) ? round($row->facturas / $row->presentacion->cantidad,2) : "0.00",
					((float) $row->total_egresos != 0) ? round($row->total_egresos / $row->presentacion->cantidad,2) : "0.00",
					(count($rec) > 0 && $art->produccion == 0) ? "0.00" : (((float) $row->existencia != 0) ? round($row->existencia / $row->presentacion->cantidad,2) : "0.00")
				];

				$hoja->fromArray($reg, null, "A{$fila}");
				$hoja->getStyle("D{$fila}:I{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$fila++;
			}

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

			$hoja->getStyle("A4:A{$fila}")->getAlignment()->setHorizontal('left');

			$fila++;
			$hoja->setCellValue("A{$fila}", "Supervisor:");
			$hoja->setCellValue("D{$fila}", "Jefe de Almacenaje:");
			$hoja->setCellValue("F{$fila}", "Fecha:");
			$hoja->setCellValue("H{$fila}", "Hora:");
			$hoja->setTitle("Existencias");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Existencias.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");

		} else {

			$pdf = new \Mpdf\Mpdf([
				//'tempDir' => sys_get_temp_dir(), //produccion
				"format" => "letter", 
				"lands"
			]);


			$vista = $this->load->view('reporte/existencia/imprimir', $args, true);
			$rand  = rand();
			$pdf->AddPage("L");
			$pdf->WriteHTML($vista);
			$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
			$pdf->Output("Existencias_{$rand}.pdf", "D");
		}
	}

	public function kardex()
	{
		$datos = [];
		$rpt = new Reporte_model();
		$rpt->setTipo(2);
		$exist = $rpt->getExistencias($_GET);
		$dato = [];
		foreach ($exist as $row) {
			$art = new Articulo_model($row->articulo);
			$pres = $art->getPresentacionReporte();
			//$row->cantidad = $row->cantidad / $pres->cantidad;

			if ($row->existencia != 0) {
				$row->existencia = $row->existencia/$pres->cantidad;

				$dato[$row->articulo] = [
					"codigo" => $row->codigo,
					"articulo" => $row->articulo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => $row->existencia,
					"ingresos"    => 0,
					"salidas"     => 0,
					"presentacion" => $pres->descripcion,
					"detalle" 	  => []
				];
			}
			
		}

		$rpt->setTipo(3);
		$reg = $rpt->getExistencias($_GET);

		foreach ($reg as $row) {
			$art = new Articulo_model($row->articulo);
			$pres = $art->getPresentacionReporte();
			$row->cantidad = $row->cantidad / $pres->cantidad;

			$ingresos = ($row->tipo == 1) ? $row->cantidad : 0;
			$salidas  = ($row->tipo == 2) ? $row->cantidad : 0;

			if (isset($dato[$row->articulo])) {
				$dato[$row->articulo]['ingresos'] += ($ingresos);
				$dato[$row->articulo]['salidas'] += ($salidas);
				$dato[$row->articulo]['detalle'][] = $row;

			} else{
				$dato[$row->articulo] = [
					"articulo" => $row->articulo,
					"codigo" => $row->codigo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => 0,
					"ingresos"    => $ingresos,
					"salidas"     => $salidas ,
					"presentacion" => $pres->descripcion,
					"detalle"	  => [$row]
				];
			}
			usort($dato[$row->articulo]["detalle"], function($a, $b) {
				return strtotime($b->fecha) < strtotime($a->fecha);
			});
		}

		$args = [
			"articulos" => $dato,
			"fdel" => $this->input->get("fdel"),
			"fal" => $this->input->get("fal")
		];
		
		if (verDato($_GET, "_excel")) {
			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				  ->setCreator("Restouch")
				  ->setTitle("Office 2007 xlsx Existencias")
				  ->setSubject("Office 2007 xlsx Existencias")
				  ->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Código",
				"Descripción",
				"Presentación",
				"Saldo Anterior",
				"Ingresos",
				"Salidas",
				"Saldo Actual"
			];
			/*Encabezado*/
			$hoja->setCellValue("B1", "Kardex");
			$hoja->setCellValue("E1", "Del: ".formatoFecha($args['fdel'],2));
			$hoja->setCellValue("F1", "Al: ".formatoFecha($args['fal'],2));

			
			$hoja->getStyle("B1:F1")->getFont()->setBold(true);
			
			$fila = 4;

			foreach ($args["articulos"] as $row) {
				$hoja->fromArray($nombres, null, "A{$fila}");
				$hoja->getStyle("A{$fila}:G{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("A{$fila}:G{$fila}")->getAlignment()->setHorizontal('center');
				$fila++;

				$saldo = $row['antiguedad'] + $row['ingresos'] - $row['salidas'];

				$reg = [
					(!empty($row['codigo']) ? $row['codigo'] : $row['articulo']),
					$row['descripcion'],
					$row['presentacion'],
					round($row['antiguedad'],2),
					round($row['ingresos'],2),
					round($row['salidas'],2),
					round($saldo,2)
				];

				$hoja->fromArray($reg, null, "A{$fila}");
				$hoja->getStyle("C{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('left');
				$fila++;

				if (count($row['detalle']) > 0) {
					$sub = [
						"",
						"",
						"Fecha",
						"No",
						"Tipo Movimiento",
						"Ingreso",
						"Salida"
					];
					$hoja->fromArray($sub, null, "A{$fila}");
					$hoja->getStyle("B{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("B{$fila}:F{$fila}")->getAlignment()->setHorizontal('center');
					$fila++;

					foreach ($row['detalle'] as $det) {
						$detalle = [
							"",
							"",
							$row['descripcion'],
							formatoFecha($det->fecha,2),
							$det->id,
							($det->tipo == 1) ? round($det->cantidad,2) : "0.00",
							($det->tipo == 2) ? round($det->cantidad,2) : "0.00"
						];

						$hoja->fromArray($detalle, null, "A{$fila}");
						$hoja->getStyle("E{$fila}:F{$fila}")->getNumberFormat()->setFormatCode('0.00');
						$fila++;
					}
					$fila++;
				}
			}

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
			$vista = $this->load->view('reporte/kardex/imprimir', $args, true);
			$pdf   = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //produccion
				"format" => "letter", 
				"lands"
			]);

			$pdf->AddPage("L");
			$pdf->WriteHTML($vista);
			$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
			$pdf->Output("Kardex.pdf", "D");
		}

	}

	public function valorizado()
	{
		$req = $_GET;
		$sede = new Sede_model($this->data->sede);
		$emp = $sede->getEmpresa();
		if ($emp->metodo_costeo == 1) {
			$ingresos = $this->Ingreso_model->get_ultima_compra($req);
			
		} else if ($emp->metodo_costeo == 2) {
			$ingresos = $this->Ingreso_model->get_costo_promedio($req);
		} else {
			$ingresos = [];
		}
		
		$datos = [];
		$detalle = [];

		foreach ($ingresos as $row) {
			$art = new Articulo_model($row->articulo);
			$art->actualizarExistencia($_GET);
			$pres = $art->getPresentacionReporte();
			$art->existencias = $art->existencias/$pres->cantidad;
			$detalle[$art->getPK()] = [
				"presentacion" => $pres->descripcion,
				"cantidad" => $art->existencias, 
				"total" => (double) round($art->existencias,2) * (double) round($row->precio_unitario, 2),
				"descripcion" => $art->descripcion,
				"precio_unitario" => $row->precio_unitario,
				"ultima_compra" => formatoFecha($row->fecha, 2)
			];
			
		}

		$buscar = [];
		if (isset($_GET['sede'])) {
			$buscar['sede'] = $this->input->get('sede');
		} else {
			$buscar['sede'] = $this->data->sede;
		}
		$cat = $this->Categoria_model->buscar($buscar);		
		
		$categorias = [];
		foreach ($cat as $row) {
			$grupo = $this->Catalogo_model->getCategoriaGrupo([
				"categoria" => $row->categoria,
				"categoria_grupo_grupo" => null,
				"_todo" => true
			]);
			$row->categoria_grupo = $grupo;

			$categorias[] = $row;
		}
		$datos = [];
		foreach ($categorias as $row) {
			$row->subcategoria = buscar_articulo($row->categoria_grupo, $detalle);
			unset($row->categoria_grupo);
			$datos[] = $row;
		}
		
		$data = [
			"detalle" => $datos,
			"fecha" => formatoFecha($_GET['fecha'], 2)
		];

		if ($this->input->get('sede')) {
			$sede = $this->input->get('sede');
		} else {
			$sede = $this->data->sede;
		}

		$sede = $this->Catalogo_model->getSede([
			'sede' => $sede,
			"_uno" => true
		]);

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$data['empresa'] = $emp;
				$data['nsede'] = $sede;
			}
		}

		if ($this->input->get('bodega')) {
			$bod = $this->Bodega_model->buscar([
				"bodega" => $_GET['bodega'],
				"_uno" => true
			]);

			$data['nbodega'] = $bod->descripcion;
		} else {
			$data['nbodega'] = 'Todas';
		}

		if (verDato($_GET, "_excel")) {
			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				  ->setCreator("Restouch")
				  ->setTitle("Office 2007 xlsx Valorizado")
				  ->setSubject("Office 2007 xlsx Valorizado")
				  ->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Descripción",
				"Presentación",
				"Existencia",
				"Fecha Última Compra",
				"Costo",
				"Valor"
			];

			/*Encabezado*/
			$hoja->setCellValue("A1", $data["empresa"]->nombre);
			$hoja->setCellValue("A2", $data["nsede"]->nombre);
			$hoja->setCellValue("A4", "Reporte de Inventario Valorizado");
			$hoja->setCellValue("E4", "Fecha: {$data['fecha']}");
			$hoja->setCellValue("A5", "Bodega: {$data['nbodega']}");

			$hoja->fromArray($nombres, null, "A7");
			$hoja->getStyle("A1:A5")->getFont()->setBold(true);
			$hoja->getStyle("A7:F7")->getFont()->setBold(true);
			$hoja->getStyle('A7:F7')->getAlignment()->setHorizontal('center');
			$hoja->getStyle("E4")->getFont()->setBold(true);
			$fila = 8;
			$granTotal = 0;
			foreach ($data["detalle"] as $det) {
				$totalCat = 0;
				if (count($det->subcategoria) > 0) {
					$hoja->fromArray([$det->descripcion], null, "A{$fila}");
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;
					foreach ($det->subcategoria as $sub) {
						if (count($sub['articulos']) > 0) {
							$hoja->fromArray([$sub['descripcion']], null, "A{$fila}");
							$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
							$fila++;

							$total = 0;
							foreach ($sub['articulos'] as $row) {
								$reg = [
									$row->descripcion,
									$row->presentacion,
									((float) $row->cantidad != 0) ? round($row->cantidad, 2) : "0.00",
									$row->ultima_compra,
									((float) $row->precio_unitario != 0) ? round($row->precio_unitario, 2) : "0.00",
									((float) $row->total != 0) ? round($row->total, 2) : "0.00"
								];

								$hoja->fromArray($reg, null, "A{$fila}");
								$hoja->getStyle("C{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$fila++;

								$total += $row->total;
								$granTotal += $row->total;
								$totalCat += $row->total;
							}
							
							$hoja->setCellValue("E{$fila}", "Total subcategoría");
							$hoja->setCellValue("F{$fila}", $total);
							$hoja->getStyle("E{$fila}:F{$fila}")->getFont()->setBold(true);
							$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
					}
					$hoja->setCellValue("E{$fila}", "Total Categoría");
					$hoja->setCellValue("F{$fila}", $totalCat);
					$hoja->getStyle("E{$fila}:F{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				} 
			}
			
			$fila++;
			$hoja->setCellValue("E{$fila}", "TOTAL");
			$hoja->getStyle("E{$fila}:F{$fila}")->getFont()->setBold(true);
			$hoja->setCellValue("F{$fila}", round($granTotal, 2));
			$hoja->getStyle("F{$fila}")->getNumberFormat()->setFormatCode('0.00');

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
			
			$hoja->setTitle("Inventario Valorizado");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Valorizado.xls");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");

		} else {
			$vista = $this->load->view('reporte/valorizado/imprimir', $data, true);

			$mpdf = new \Mpdf\Mpdf([
				//'tempDir' => sys_get_temp_dir(), //Produccion
				'format' => 'Legal'
			]);

			$mpdf->WriteHTML($vista);
			$mpdf->Output("valorizado.pdf", "D");
		}	
	}

}

/* End of file Reporte.php */
/* Location: ./application/wms/controllers/Reporte.php */