<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fisico extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			"Catalogo_model",
			"Fisico_model",
			"Fisico_detalle_model",
			"Articulo_model",
			"Receta_model"
		]);

		$this->load->helper(['jwt', 'authorization']);

		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}

		$this->output->set_content_type('application/json');
	}

	public function generar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		$arts = [];
		$fisico = new Fisico_model();
		$req['usuario'] = $this->data->idusuario;

		if (!isset($req['sede'])) {
			$req['sede'] = $this->data->sede;
		}

		if (isset($req['categoria_grupo_grupo'])) {
			$arts = $this->Articulo_model->buscar([
				"categoria_grupo" => $req['categoria_grupo_grupo'],
				"mostrar_inventario" => 1
			]);

			$req['categoria_grupo'] = $req['categoria_grupo_grupo'];

		} else {
			$arts = $this->Catalogo_model->getArticulo([
				"sede" => $req['sede'],
				"mostrar_inventario" => 1
			]);
		}

		$articulos = [];
		foreach ($arts as $row) {
			$art = new Articulo_model($row->articulo);
			$rec = $art->getReceta();
			if (count($req) == 0 || $art->produccion) {
				$articulos[] = $row;
			}
		}

		$arts = $articulos;

		if (count($arts) > 0) {
			if ($fisico->guardar($req)) {
				foreach ($arts as $row) {
					$art = new Articulo_model($row->articulo);
					if ($art->mostrar_inventario == 1) {
						$art->actualizarExistencia($req);
						$fisico->setDetalle([
							"articulo" => $row->articulo,
							"precio" => $row->precio,
							"existencia_sistema" => $art->existencias
						]);
					}
				}
				$datos['exito'] = true;
				$datos['inventario'] = $fisico->getPK();
				$datos['mensaje'] = "Proceso realizado exitosamente";
			} else {
				$datos['mensaje'] = "Ocurrio un error al generar el proceso";	
			}
		} else {
			$datos['mensaje'] = "No hay articulos en la categoria seleccionada";
		}
		
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function imprimir($id = '')
	{
		if (!empty($id)) {
			$fisico = new Fisico_model($id);
			$args = $_GET;
			$args['inventario'] = $this->Fisico_model->buscar([
				"inventario_fisico" => $fisico->getPK(),
				"_uno" => true
			]);

			foreach ($fisico->getDetalle() as $row) {
				if (!isset($args['detalle'][$row->categoria])) {
					$args['detalle'][$row->categoria] = [
						"descripcion" => $row->ncategoria,
						"datos" => []
					];
				} 

				if (!isset($args['detalle'][$row->categoria]['datos'][$row->categoria_grupo])) {
					$args['detalle'][$row->categoria]['datos'][$row->categoria_grupo] = [
						"descripcion" => $row->ncategoria_grupo,
						"datos" => []
					];
				}

				$args['detalle'][$row->categoria]['datos'][$row->categoria_grupo]['datos'][] = $row;
			}
			
			if (verDato($_GET, "_excel")) {
				$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
				$excel->getProperties()
					  ->setCreator("Restouch")
					  ->setTitle("Office 2007 xlsx Fisico")
					  ->setSubject("Office 2007 xlsx Fisico")
					  ->setKeywords("office 2007 openxml php");

				$excel->setActiveSheetIndex(0);
				$hoja = $excel->getActiveSheet();
				$nombres = [
					"Descripción",
					"Código",
					"Presentación",
					"Precio",
					"Existencia Sistema",
					"Existencia Fisica"
				];

				if ($args['inventario']->confirmado) {
					array_push($nombres, "Diferencia");
				}
				/*Encabezado*/
				$hoja->setCellValue("A1", "Inventario Fisico #{$args['inventario']->inventario_fisico}");
				$hoja->setCellValue("D1", "Fecha: ".formatoFecha($args['inventario']->fhcreacion, 2));

				$hoja->fromArray($nombres, null, "A3");
				$hoja->getStyle("A1:F3")->getFont()->setBold(true);
				$hoja->getStyle('A1:F3')->getAlignment()->setHorizontal('center');

				$fila = 4;
				foreach ($args["detalle"] as $key => $cat) {
					$hoja->setCellValue("A{$fila}", $cat['descripcion']);
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;

					foreach ($cat['datos'] as $gcat) {
						$hoja->setCellValue("A{$fila}", $gcat['descripcion']);
						$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
						$fila++;

						foreach ($gcat['datos'] as $art) {
							$articulo = new Articulo_model($art->articulo);
							$pres = $articulo->getPresentacionReporte();
							$existencias = $art->existencia_sistema/$pres->cantidad;
							$reg = [
								$art->narticulo,
								empty($art->codigo) ? $art->articulo : $art->codigo,
								$pres->descripcion,
								$art->precio,
								($existencias == 0) ? "0.00" : $existencias
							];

							if (isset($args['existencia_fisica'])) {
								if ($art->existencia_fisica == 0) {
									array_push($reg, "0.00");
								} else {
									array_push($reg, $art->existencia_fisica);
								}								
							}

							if ($args['inventario']->confirmado) {
								array_push($nombres, $art->existencia_sistema/$pres->cantidad - $art->existencia_fisica);
							}

							$hoja->fromArray($reg, null, "A{$fila}");
							$hoja->getStyle("C{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
					}
				}

				for ($i=0; $i <= count($nombres) ; $i++) { 
					$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
				}

				$hoja->getStyle("B4:A{$fila}")->getAlignment()->setHorizontal('left');

				$hoja->setTitle("Inventario_Fisico");

				header("Content-Type: application/vnd.ms-excel");
				header("Content-Disposition: attachment;filename=Inventario_Fisico.xlsx");
				header("Cache-Control: max-age=1");
				header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
				header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
				header("Cache-Control: cache, must-revalidate");
				header("Pragma: public");

				$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
				$writer->save("php://output");

			} else {
				$pdf   = new \Mpdf\Mpdf([
					//'tempDir' => sys_get_temp_dir(), //produccion
					"format" => "letter", 
					"lands"
				]);
				$vista = $this->load->view('reporte/fisico/imprimir', $args, true);
				$rand  = rand();
				$pdf->AddPage();
				$pdf->WriteHTML($vista);
				$pdf->setFooter("Página {PAGENO} de {nb}  {DATE j/m/Y H:i:s}");
				$pdf->Output("Fisico_{$rand}.pdf", "D");
			}
		}
	}

	public function buscar_detalle($inv)
	{
		$fisico = new Fisico_model($inv);
		$datos = [];
		$data = [];
		foreach ($fisico->getDetalle() as $row) {
			if (!isset($datos[$row->categoria])) {
				$datos[$row->categoria] = [
					"descripcion" => $row->ncategoria,
					"datos" => []
				];
			} 

			if (!isset($datos[$row->categoria]['datos'][$row->categoria_grupo])) {
				$datos[$row->categoria]['datos'][$row->categoria_grupo] = [
					"descripcion" => $row->ncategoria_grupo,
					"datos" => []
				];
			}

			$datos[$row->categoria]['datos'][$row->categoria_grupo]['datos'][] = $row;
		}

		foreach ($datos as $row) {
			$row['datos'] = array_values($row['datos']);
			$data['detalle'][] = $row;
		}

		$data['inventario'] = $this->Fisico_model->buscar([
			"inventario_fisico" => $fisico->getPK(),
			"_uno" => true
		]);
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($data));
	}

	public function actualizar()
	{
		$datos = ["exito" => false, "mensaje" => ""];
		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);
			$contunuar = true;
			foreach ($req as $cat) {
				foreach ($cat['datos'] as $gcat) {
					foreach ($gcat['datos'] as $art) {
						$det = new Fisico_detalle_model($art['id']);
						$fisico = new Fisico_model($det->inventario_fisico);
						if ($fisico->confirmado == 0) {
							$det->guardar([
								"existencia_fisica" => $art['existencia_fisica']
							]);
						} else {
							$contunuar = false;
							break;
						}
					}
				}
			}

			if ($contunuar) {
				$datos['exito'] = true;
				$datos['mensaje'] = "Datos actualizados con exito";				
			} else {
				$datos['mensaje'] = "El inventario ya está confirmado no es posible modificarlo";
			}

		} else {
            $datos['mensaje'] = "Parametros invalidos";
        }

        $this->output
        	 ->set_output(json_encode($datos));
	}

	public function confirmar($id)
	{
		$datos = ["exito" => false, "mensaje" => ""];
		if ($this->input->method() == 'post') {
			$args = [
				"confirmado_fecha" => Hoy(3),
				"confirmado" => 1
			];

			$inv = new Fisico_model($id);
			if ($inv->guardar($args)) {
				$datos['exito'] = true;
				$datos['inventario'] = $this->Fisico_model->buscar([
					"inventario_fisico" => $inv->getPK(),
					"_uno" => true
				]);
				$datos['mensaje'] = "Datos actualizados con exito";	
			} else {
				$datos['mensaje'] = "Ocurrio un error al guardar el registro";	
			}
		} else {
            $datos['mensaje'] = "Parametros invalidos";
        }

        $this->output
        	 ->set_output(json_encode($datos));
	}

}

/* End of file Fisico.php */
/* Location: ./application/wms/controllers/Fisico.php */