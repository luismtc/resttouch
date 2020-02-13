<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Compra_model extends General_Model {

	public $orden_compra;
	public $proveedor;
	public $fecha;
	public $usuario;
	public $estatus_movimiento;
	public $notas;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.orden_compra");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getProveedor()
	{
		return $this->db
					->where("proveedor", $this->proveedor)
					->get("resttouch.proveedor")
					->row();
	}

	public function setDetalle(Array $args, $id = "")
	{
		$det = new CDetalle_Model($id);
		$args['orden_compra'] = $this->orden_compra;
		$result = $det->guardar($args);

		if($result) {
			return $det;
		}

		$this->mensaje = $det->getMensaje();

		return $result;
	}

	public function getDetalle($args = [])
	{
		$det = $this->CDetalle_model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new CDetalle_Model($row->orden_compra_detalle);
				$row->articulo = $detalle->getArticulo();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new CDetalle_Model($det->orden_compra_detalle);
			$det->articulo = $detalle->getArticulo();
			$datos[] = $det;
		}

		return $datos;
	}

}

/* End of file Compra_model.php */
/* Location: ./application/wms/models/Compra_model.php */