<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cajacorte extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		
		$this->load->model([
			'Cajacorte_model',
			'Dcajacorte_model',
			'Turno_model'
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar()
	{
		$data = ['exito' => 0];

		$datos = json_decode(file_get_contents("php://input"), true);

		if ($this->input->method() == "post") {
			if (isset($datos['caja_corte_tipo']) && isset($datos['detalle'])) {

				$this->load->helper(['jwt', 'authorization']);
				$headers = $this->input->request_headers();
				$user = AUTHORIZATION::validateToken($headers['Authorization']);

				$continuar = true;
				$detalle = $datos['detalle'];
				unset($datos['detalle']);
				unset($datos['descripcion']);

				$cc = new Cajacorte_model();
				if (isset($datos['caja_corte']) && $datos['caja_corte']) {
					$cc->cargar($datos['caja_corte']);
				} else {
					$turno = $this->Turno_model->getTurno([
						"sede" => $user->sede,
						'abierto' => true, 
						"_uno" => true
					]);

					if ($turno) {
						$datos['usuario'] = $user->idusuario;
						$datos['turno'] = $turno->turno;
					}else {
						$continuar = false;
						$data['mensaje'] = 'No existe un turno abierto.';
					}
				}

				if ($continuar) {
					$cc->guardar($datos);
					if ($cc->getPk()) {
						foreach ($detalle as $key => $row) {
							$detalle = (array) $row;
							unset($row['nombre']);

							$detalle['caja_corte'] = $cc->getPk();

							$ccd = new Dcajacorte_model();
							if (isset($detalle['caja_corte_detalle']) && $detalle['caja_corte_detalle']) {
								$ccd->cargar($detalle['caja_corte_detalle']);
							}

							$ccd->guardar($detalle);
						}

						$data['mensaje'] = 'Corte de caja procesada correctamente.';
						$data['exito'] = 1;

					} else {
						$data['mensaje'] = 'No se guardó.';
					}
				}
			} else {
				$data['mensaje'] = 'Debe seleccionar un tipo y agregar el detalle.';
			}
		} else {
			$data['mensaje'] = 'Método de envío incorrecto.';
		}

		$this->output
		->set_output(json_encode($data));
	}

	public function buscar()
	{
		$datos = [];
		$cajas = $this->Cajacorte_model->getCajaCorte($_GET);
		if ($cajas) {
			foreach ($cajas as $key => $row) {
				$cc = new Cajacorte_model($row->caja_corte);
				$detalle = $cc->getDetalleCajaCorte();

				$row->detalle = [];
 				$row->total   = 0;

				if ($detalle) {
 					$row->detalle = $detalle;
 					foreach ($detalle as $value) {
 						$row->total += $value->total;
 					}
 				}

				$datos[] = $row;
			}
		}
		
		$this->output->set_output(json_encode($datos));
	}

	public function anular_caja()
	{
		$datos = json_decode(file_get_contents('php://input'), true);
		$data  = ['exito' => 0];

		if (isset($datos['caja_corte']) && !empty($datos['caja_corte'])) {
			$cc = new Cajacorte_model($datos['caja_corte']);
			if ($cc->guardar(['anulado' => 1])) {
				foreach ($cc->getDetalleCajaCorte() as $key => $value) {
					$dcc = new Dcajacorte_model($value->caja_corte_detalle);
					$dcc->guardar(['anulado' => 1]);
				}
				$data['mensaje'] = 'Proceso correctamente.';
				$data['exito'] = 1;
			} else {
				$data['mensaje'] = $cc->getMensaje();
			}
		} else {
			$data['mensaje'] = 'Debe seleccionar un corte de caja';
		}

		$this->output->set_output(json_encode($data));
	}

	public function anular_caja_detalle()
	{
		$datos = json_decode(file_get_contents('php://input'), true);
		$data  = ['exito' => 0];

		if (isset($datos['caja_corte_detalle']) && !empty($datos['caja_corte_detalle'])) {
			$dcc = new Dcajacorte_model($datos['caja_corte_detalle']);
			if ($dcc->guardar(['anulado' => 1])) {
				$data['mensaje'] = 'Proceso correctamente.';
				$data['exito'] = 1;
			} else {
				$data['mensaje'] = $dcc->getMensaje();
			}
		} else {
			$data['mensaje'] = 'Debe seleccionar un corte de caja';
		}

		$this->output->set_output(json_encode($data));
	}
}

/* End of file Cajacorte.php */
/* Location: ./application/restaurante/controllers/Cajacorte.php */