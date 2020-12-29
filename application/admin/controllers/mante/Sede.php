<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sede extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			"Usuario_sede_model",
			"Sede_model"
		]);

		$headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']); 

		$this->output->set_content_type('application/json');
	}

	public function guardar($id = "")
	{
		$sede = new Sede_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $sede->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['sede'] = $this->Sede_model->buscar(["sede" => $sede->getPK(), "_uno" => true]);
			} else {
				$datos['mensaje'] = $sede->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($this->Sede_model->buscar($_GET)));
	}

	public function get_sede_usuario()
	{
		$datos = [];
		if (!$this->input->get('usuario')) {
			$_GET['usuario'] = $this->data->idusuario;
		}
			$tmp = $this->Usuario_sede_model->buscar([
				"usuario" => $this->input->get('usuario'),
				"anulado" => 0
			]);

			foreach ($tmp as $row) {
				$row->sede = $this->Sede_model->buscar([
					"sede" => $row->sede,
					"_uno" => true
				]);

				$datos[] = $row;
			}

			if (count($datos) == 0 && $this->input->get('reporte')) {
				$datos[] = [
					"sede" => $this->Sede_model->buscar([
						"sede" => $this->data->sede,
						"_uno" => true
					])
				];
			}
		

		$this->output->set_output(json_encode($datos));
	}

	public function set_usuario_sede($id = "")
	{
		$acceso = new Usuario_sede_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $acceso->guardar($req);;

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['sede'] = $acceso;
			} else {
				$datos['mensaje'] = $acceso->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Sede.php */
/* Location: ./application/admin/controllers/mante/Sede.php */