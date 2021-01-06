<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ranulacion extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Razon_anulacion_model');
	}

	public function guardar($id = "") 
	{
		$razon = new Razon_anulacion_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $razon->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['razon_anulacion'] = $this->Razon_anulacion_model->buscar([
					"razon_anulacion" => $razon->getPK(),
					"_uno" => true
				]);
			} else {
				$datos['mensaje'] = $razon->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$_GET['anulado'] = 0;
		$datos = $this->Razon_anulacion_model->buscar($_GET);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Ranulacion.php */
/* Location: ./application/admin/controllers/mante/Ranulacion.php */