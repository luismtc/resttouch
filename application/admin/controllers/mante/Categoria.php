<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categoria extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Categoria_model');
        $headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']); 

        $this->output
		->set_content_type("application/json", "UTF-8");
	}


	public function guardar($id = "") 
	{
		$cat = new Categoria_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $cat->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} else {
				$datos['mensaje'] = $cat->getMensaje();
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$_GET['sede'] = $this->data->sede;
		$datos = $this->Categoria_model->buscar($_GET);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}
}

/* End of file Categoria.php */
/* Location: ./application/admin/controllers/Categoria.php */