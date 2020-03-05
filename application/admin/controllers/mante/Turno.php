<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Turno extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model(['Turno_model', 'TurnoTipo_model']);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}


	public function guardar($id = "") 
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$turno = new Turno_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$continuar = true;
			if (empty($id)) {
				$tmp = $this->Turno_model->getTurno([
					"sede" => $data->sede,
					'abierto' => true, 
					"_uno" => true
				]);
				if($tmp) {
					$continuar = false;
					$datos['mensaje'] = "Ya existe un turno abierto";
				}
			}

			if($continuar) {
				$req['sede'] = $data->sede;
				$datos['exito'] = $turno->guardar($req);		
				if($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['turno'] = $turno;
				} else {
					$datos['mensaje'] = $turno->getMensaje();
				}
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function agregar_usuario($turno)
	{
		$turno = new Turno_model($turno);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];

		if ($this->input->method() == 'post') {
			if(isset($req['usuario']) && isset($req['usuario_tipo'])) {
				$datos['exito'] = $turno->setUsuario($req);

				if($datos['exito']){
					$datos['mensaje'] = "Datos Actualizados con Exito";
				} else {
					$datos['mensaje'] = "Nada que actualizar";
				}
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function anular_usuario($turno)
	{
		$turno = new Turno_model($turno);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (isset($req['usuario']) && isset($req['usuario_tipo'])) {			
				$datos['exito'] = $turno->anularUsuario($req);
				if($datos['exito']){
					$datos['mensaje'] = "Datos Actualizados con Exito";
				} else {
					$datos['mensaje'] = "Nada que actualizar";
				}
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar_usuario($turno)
	{
		$this->load->model(['Usuario_model', 'Catalogo_model']);
		$turno = new Turno_model($turno);			
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($turno->getUsuarios($_GET)));
	}

	public function guardar_turno_tipo($id = "")
	{
		$turno = new TurnoTipo_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $turno->guardar($req);			
			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['turno'] = $turno;
			} else {
				$datos['mensaje'] = $turno->getMensaje();
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function get_turno_tipo()
	{
		if (count($_GET) == 0) {
			$_GET['activo'] = 1;
		}
		
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($this->TurnoTipo_model->buscar($_GET)));
	}

	public function buscar()
	{
		$datos = [];
		$tmp = $this->Turno_model->getTurno($_GET);

		if(is_array($tmp)) {
			foreach ($tmp as $row) {
				$turno = new Turno_model($row->turno);	
				$row->turno_tipo = $turno->getTurnoTipo();			
				$datos[] = $row;
			}
		} else if(is_object($tmp)) {
			$turno = new Turno_model($tmp->turno);
			$tmp->turno_tipo = $turno->getTurnoTipo();
			$datos = $tmp;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Turno.php */
/* Location: ./application/admin/controllers/mante/Turno.php */