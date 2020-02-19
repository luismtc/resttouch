<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

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
		$turno = new Turno_model($id);
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
				}
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
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
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($this->TurnoTipo_model->buscar($_GET)));
	}

	public function buscar()
	{
		$datos = [];
		$tmp = $this->Turno_model->buscar($_GET);

		if(is_array($tmp)) {
			foreach ($tmp as $row) {
				$turno = new Turno_model($row->articulo);
				$row->categoria_grupo = $turno->getCategoriaGrupo();
				$row->presentacion = $turno->getPresentacion();
				$datos[] = $row;
			}
		} else if(is_object($tmp)) {
			$turno = new Turno_model($tmp->articulo);
			$tmp->categoria_grupo = $turno->getCategoriaGrupo();
			$tmp->presentacion = $turno->getPresentacion();
			$datos = $tmp;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Turno.php */
/* Location: ./application/admin/controllers/mante/Turno.php */