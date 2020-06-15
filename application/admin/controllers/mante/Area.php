<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

class Area extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Area_model');

        $headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']); 

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

			if($datos['exito']) {
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
		$_GET['sede'] = $this->data->sede;
		$areas = $this->Area_model->buscar($_GET);
		$datos = [];
		if(is_array($areas)) {
			foreach ($areas as $row) {
				$area = new Area_model($row->area);
				$row->mesas = $area->get_mesas();
				$datos[] = $row;
			}
		} else {
			$area = new Area_model($areas->area);
			$areas->mesas = $area->get_mesas();
			$datos[] = $areas;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Area.php */
/* Location: ./application/admin/controllers/mante/Area.php */