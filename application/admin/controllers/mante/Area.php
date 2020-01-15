<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Area extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Area_model');
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = "") 
	{
		$mesa = new Area_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $mesa->guardar($req);;

			if($dato['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} else {
				$datos['mensaje'] = $mesa->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function get_areas()
	{
		$this->load->model('Mesa_model');
		$areas = $this->Area_model->buscar($_GET);
		$datos = [];
		if(is_array($areas)) {
			foreach ($areas as $row) {
				$row->mesas = $this->Mesa_model->buscar(['area' => $row->area]);
				$datos[] = $row;
			}
		} else {
			$areas->mesas = $this->Mesa_model->buscar(['area' => $areas->area]);
			$datos[] = $areas;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Area.php */
/* Location: ./application/admin/controllers/mante/Area.php */