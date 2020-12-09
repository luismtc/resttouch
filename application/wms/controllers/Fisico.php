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
			"Articulo_model"
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
				"categoria_grupo" => $req['categoria_grupo_grupo']
			]);

			$req['categoria_grupo'] = $req['categoria_grupo_grupo'];

		} else {
			$arts = $this->Catalogo_model->getArticulo(["sede" => $req['sede']]);
		}

		if (count($arts) > 0) {
			if ($fisico->guardar($req)) {
				foreach ($arts as $row) {
					$fisico->setDetalle([
						"articulo" => $row->articulo,
						"precio" => $row->precio,
						"existencia_sistema" => $row->existencias
					]);
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
			
			$pdf   = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //produccion
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