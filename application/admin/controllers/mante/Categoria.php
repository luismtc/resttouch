<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categoria extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Categoria_model');
        $this->output
			 ->set_content_type("application/json", "UTF-8");
	}


	public function guardar($id = "") 
	{
		$cat = new Categoria_model($id);
		$exito = $cat->guardar($_POST);
		$datos = ["exito" => $exito];

		if($exito) {
			$datos['mensaje'] = "Datos Actualizados con Exito";
		} else {
			$datos['mensaje'] = $cat->getMensaje();
		}

		$this->output
			 ->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$datos = $this->Categoria_model->buscar($_GET);

		$this->output
			 ->set_content_type("application/json")
			 ->set_output(json_encode($datos));
	}
}

/* End of file Categoria.php */
/* Location: ./application/admin/controllers/Categoria.php */