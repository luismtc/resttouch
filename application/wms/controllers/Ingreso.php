<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingreso extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model('Ingreso_model');
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = '')
	{
		$ing = new Ingreso_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $ing->guardar($req);

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} else {
				$datos['mensaje'] = implode("<br>", $ing->getMensaje());
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function guardar_detalle($ingreso, $id = '') {
		$this->load->model('IDetalle_Model');
		$ing = new Ingreso_model($ingreso);
		$req = json_decode(file_get_contents('php://input'), true);
		if ($this->input->method() == 'post') {
			$datos['exito'] = $ing->setDetalle($req, $id);;

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} else {
				$datos['mensaje'] = implode("<br>", $ing->getMensaje());
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar_ingreso(){		
		$ingresos = $this->Ingreso_model->buscar($_GET);
		$datos = [];
		if(is_array($ingresos)) {
			foreach ($ingresos as $row) {
				$tmp = new Ingreso_model($row->ingreso);
				$row->tipo_movimiento = $tmp->getTipoMovimiento();
				$row->proveedor = $tmp->getProveedor();
				$row->bodega = $tmp->getBodega();
				$datos[] = $row;
			}
		} else if($ingreso){
			$tmp = new Ingreso_model($ingresos->ingreso);
			$ingresos->tipo_movimiento = $tmp->getTipoMovimiento();
			$ingresos->proveedor = $tmp->getProveedor();
			$ingresos->bodega = $tmp->getBodega();
			$datos[] = $ingresos;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function buscar_detalle($ingreso)
	{
		$this->load->model('IDetalle_Model');
		$ingreso = new Ingreso_model($ingreso);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($ingreso->getDetalle($_GET)));
	}
}

/* End of file Ingreso.php */
/* Location: ./application/wms/controllers/Ingreso.php */