<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Compra extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model([
        	'Compra_model',
        	'CDetalle_model',
        	'Ingreso_model',
        	'IDetalle_Model'
        ]);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = ''){
		$ocs = new Compra_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (empty($id) || $ocs->estatus_movimiento == 1) {
				$datos['exito'] = $ocs->guardar($req);
				if ($ocs->estatus_movimiento == 2) {
					$ing = $ocs->generarIngreso($req);
					if ($ing) {
						$ing->detalle = $ing->getDetalle();
						$datos['ingreso'] = $ing;
					} else {
						$datos['exito'] = false;
					}
				}
				if($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['compra'] = $ocs;
				} else {
					$datos['mensaje'] = implode("<br>", $ocs->getMensaje());
				}		
			} else {
				$datos['mensaje'] = "Solo se pueden modificar ordenes en estatus abierto";
			}	
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function guardar_detalle($orden, $id = '')
	{
		$ocs = new Compra_model($orden);
		$req = json_decode(file_get_contents('php://input'), true);
		if ($this->input->method() == 'post') {
			$det = $ocs->setDetalle($req, $id);;

			if($det) {
				$datos['exito'] = true;
				$datos['mensaje'] = "Datos Actualizados con Exito";		
				$datos['detalle'] = $det;		
			} else {
				$datos['mensaje'] = implode("<br>", $ocs->getMensaje());
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$compras = $this->Compra_model->buscar($_GET);
		$datos = [];
		if(is_array($compras)) {
			foreach ($compras as $row) {
				$tmp = new Compra_model($row->orden_compra);
				$datos[] = $row;
			}
		} else if($compras){
			$tmp = new Compra_model($compras->orden_compra);
			$datos[] = $compras;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function buscar_detalle($compra)
	{
		$compra = new Compra_model($compra);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($compra->getDetalle($_GET)));
	}

}

/* End of file Compra.php */
/* Location: ./application/wms/controllers/Compra.php */