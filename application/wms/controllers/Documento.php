<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Documento extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model(['Documento_model', 'Documento_tipo_model', 'Tipo_compra_venta_model', 'Ingreso_model']);
        $this->output->set_content_type("application/json", "UTF-8");
	}

    public function getForeignData($doc) {
        $doc->ingreso = new Ingreso_model($doc->ingreso);
        $doc->documento_tipo = new Documento_tipo_model($doc->documento_tipo);
        $doc->tipo_compra_venta = new Tipo_compra_venta_model($doc->tipo_compra_venta);
        return $doc;
    }

	public function guardar($id = "") 
	{
		$doc = new Documento_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $doc->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos actualizados con éxito";
				$datos['documento'] = $this->getForeignData($doc);
			} else {
				$datos['mensaje'] = $doc->getMensaje();
			}	
		} else {
			$datos['mensaje'] = "Parametros inválidos";
		}
		
		$this->output->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$datos = $this->Documento_model->buscar($_GET);

        foreach($datos as $dato) {
            $dato = (object)$this->getForeignData($dato);
        }

		$this->output->set_output(json_encode($datos));
	}

}