<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Egreso extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model([
        	'Egreso_model', 
        	'EDetalle_model',
        	'Ingreso_model',
        	'IDetalle_Model',
        	'Articulo_model',
        	'Catalogo_model'
        ]);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = '')
	{
		$egr = new Egreso_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (empty($id) || $egr->estatus_movimiento == 1) {
				$datos['exito'] = $egr->guardar($req);
				if ($egr->estatus_movimiento == 2 && $egr->traslado == 1) {
					$ing = $egr->trasladar($req);
					if ($ing) {
						$ing->detalle = $ing->getDetalle();
						$datos['ingreso'] = $ing;
					} else {
						$datos['exito'] = false;
					}
				}
				if($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['egreso'] = $egr;
				} else {
					$datos['mensaje'] = implode("<br>", $egr->getMensaje());
				}	
			} else {
				$datos['mensaje'] = "Solo puede editar egresos en estatus Abierto";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function guardar_detalle($egreso, $id = '') {
		$egr = new Egreso_model($egreso);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];		
		if ($this->input->method() == 'post') {
			if ($egr->estatus_movimiento == 1) {
				$art = new Articulo_model($req['articulo']);				
				$det = $egr->setDetalle($req, $id);;

				if($det) {
					$art->actualizarExistencia();
					$datos['exito'] = true;
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['detalle'] = $det;
				} else {
					$datos['mensaje'] = implode("<br>", $egr->getMensaje());
				}
					
			} else {
				$datos['mensaje'] = "Solo puede editar egresos en estatus Abierto";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar_egreso(){		
		$egresos = $this->Egreso_model->buscar($_GET);
		$datos = [];
		if(is_array($egresos)) {
			foreach ($egresos as $row) {
				$tmp = new Egreso_model($row->egreso);
				$row->tipo_movimiento = $tmp->getTipoMovimiento();
				$row->bodega = $tmp->getBodega();
				$row->usuario = $tmp->getUsuario();
				$datos[] = $row;
			}
		} else if($egresos){
			$tmp = new Egreso_model($egresos->egreso);
			$egresos->tipo_movimiento = $tmp->getTipoMovimiento();
			$egresos->bodega = $tmp->getBodega();
			$datos[] = $egresos;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function buscar_detalle($egreso)
	{
		$egreso = new Egreso_model($egreso);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($egreso->getDetalle($_GET)));
	}

}

/* End of file Egreso.php */
/* Location: ./application/wms/controllers/Egreso.php */