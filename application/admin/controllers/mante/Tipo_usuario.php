<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_usuario extends CI_Controller {

	public function __construct()
	{

		parent::__construct();
		$this->load->model([
			"Tipo_usuario_model"
		]);
		$this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id="")
	{
		$datos = ["exito" => false];

		if ($this->input->method() == "post") {
			$datos          = json_decode(file_get_contents("php://input"), true);
			$tusuario       = new Tipo_usuario_model($id);
			$datos["exito"] = $tusuario->guardar($datos);;

			if($datos["exito"]) {
				$datos["mensaje"]   = "Datos Actualizados con Exito";
				$datos["categoria"] = $tusuario;
			} else {
				$datos["mensaje"] = $tusuario->getMensaje();
			}	

		} else {
			$datos["mensaje"] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$datos = $this->Tipo_usuario_model->buscar($_GET);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Tipo_usuario.php */
/* Location: ./application/admin/controllers/mante/Tipo_usuario.php */