<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bitacora extends CI_Controller {

	public function __construct()
	{
		parent::__construct();		
		$this->load->model([
			'Bitacora_model'
		]);
		$headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']); 
		$this->output->set_content_type("application/json", "UTF-8");
	}

    public function reporte() {
        $this->output->set_output(json_encode($this->Bitacora_model->reporte($_GET)));
    }
}