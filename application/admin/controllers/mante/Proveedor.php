<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Proveedor extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model(['Proveedor_model', 'Catalogo_model']);

        $this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$sede = $this->Catalogo_model->getSede([
			"sede" => $data->sede,
			"_uno" => true
		]);

		$this->corpo = $this->Catalogo_model->getEmpresa([
			"empresa" => $sede->empresa,
			"_uno" => true
		]);

        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = "") 
	{
		$prov = new Proveedor_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$req['corporacion'] = $this->corpo->corporacion;
			$datos['exito'] = $prov->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['proveedor'] = $this->Proveedor_model->buscar([
					'proveedor' => $prov->getPK(), 
					"_uno" => true
				]);
			} else {
				$datos['mensaje'] = $prov->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{	
		$_GET['corporacion'] = $this->corpo->corporacion;
		$datos = $this->Proveedor_model->buscar($_GET);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

}

/* End of file Proveedor.php */
/* Location: ./application/admin/controllers/mante/Proveedor.php */