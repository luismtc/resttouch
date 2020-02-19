<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cliente extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Cliente_model');
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = "") 
	{
		$clt = new Cliente_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $clt->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['cliente'] = $clt;
			} else {
				$datos['mensaje'] = $clt->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$datos = $this->Cliente_model->buscar($_GET);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}
}

/* End of file Cliente.php */
/* Location: ./application/admin/controllers/mante/Cliente.php */