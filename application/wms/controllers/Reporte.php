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
			'Reporte_model', 
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
			$args["reg"][] = $art->getExistencias($_GET);
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
				"Descripcion",
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
			$fila = 4;
			foreach ($args["reg"] as $row) {
				$art = new Articulo_model($row->articulo->articulo);
				$rec = $art->getReceta();

				$reg = [
					(!empty($row->articulo->codigo) ? $row->articulo->codigo : $row->articulo->articulo),
					"{$row->articulo->articulo} ". $row->articulo->descripcion,
					$row->presentacion->descripcion,
					number_format($row->ingresos / $row->presentacion->cantidad,2),
					number_format($row->egresos / $row->presentacion->cantidad,2),
					number_format($row->comandas / $row->presentacion->cantidad,2),
					number_format($row->facturas / $row->presentacion->cantidad,2),
					number_format($row->total_egresos / $row->presentacion->cantidad,2),
					(count($rec) > 0 && $art->produccion == 0) ? 0 : number_format($row->existencia / $row->presentacion->cantidad,2)
				];

				$hoja->fromArray($reg, null, "A{$fila}");
				$fila++;
			}

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

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

		foreach ($exist as $row) {
			if ($row->existencia > 0) {
				$dato[$row->articulo] = [
					"codigo" => $row->codigo,
					"articulo" => $row->articulo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => $row->existencia,
					"ingresos"    => 0,
					"salidas"     => 0,
					"detalle" 	  => []
				];
			}
			
		}

		$rpt->setTipo(3);
		$reg = $rpt->getExistencias($_GET);

		foreach ($reg as $row) {
			$ingresos = ($row->tipo == 1) ? $row->cantidad : 0;
			$salidas  = ($row->tipo == 2) ? $row->cantidad : 0;

			if (isset($dato[$row->articulo])) {
				$dato[$row->articulo]['ingresos'] += $ingresos;
				$dato[$row->articulo]['salidas'] += $salidas;
				$dato[$row->articulo]['detalle'][] = $row;

			} else{
				$dato[$row->articulo] = [
					"articulo" => $row->articulo,
					"codigo" => $row->codigo,
					"descripcion" => $row->descripcion,
					"antiguedad"  => 0,
					"ingresos"    => $ingresos,
					"salidas"     => $salidas,
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
			
			$detalle[$art->getPK()] = [
				"cantidad" => $art->existencias, 
				"total" => $art->existencias * $row->precio_unitario,
				"descripcion" => $art->descripcion,
				"precio_unitario" => $row->precio_unitario,
				"ultima_compra" => formatoFecha($row->fecha, 2)
			];
			
		}

		$buscar = [];
		if (isset($_GET['sede'])) {
			$buscar['sede'] = $this->input->get('sede');
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
				"Descripcion",
				"Existencia",
				"Fecha Ultima Compra",
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
			$fila = 8;
			$granTotal = 0;
			foreach ($data["detalle"] as $det) {
				if (count($det->subcategoria) > 0) {
					$hoja->fromArray([$det->descripcion], null, "A{$fila}");
					$fila++;
					foreach ($det->subcategoria as $sub) {
						if (count($sub['articulos']) > 0) {
							$hoja->fromArray([$sub['descripcion']], null, "A{$fila}");
							$fila++;

							$total = 0;
							foreach ($sub['articulos'] as $row) {
								$reg = [
									$row->descripcion,
									$row->cantidad,
									$row->ultima_compra,
									number_format($row->precio_unitario, 2),
									number_format($row->total, 2)
								];

								$hoja->fromArray($reg, null, "A{$fila}");
								$fila++;

								$total += $row->total;
								$granTotal += $row->total;
							}
							
							$hoja->setCellValue("D{$fila}", "Total subcategoria");
							$hoja->setCellValue("E{$fila}", $total);
							$fila++;
						}
					}
				} 
			}
			
			$fila++;
			$hoja->setCellValue("D{$fila}", "TOTAL");
			$hoja->setCellValue("E{$fila}", number_format($granTotal, 2));

			for ($i=0; $i <= count($nombres) ; $i++) { 
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}
			
			$hoja->setTitle("Inventario Valorizado");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Valorizado.xlsx");
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