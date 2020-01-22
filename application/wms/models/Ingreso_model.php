<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingreso_model extends General_Model {

	public $ingreso;
	public $tipo_movimiento;
	public $proveedor;
	public $bodega;
	public $nota;
	public $referencia;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.ingreso");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getTipoMovimiento() {
		return $this->db
					->where("tipo_movimiento", $this->tipo_movimiento)
					->get("resttouch.tipo_movimiento")
					->row();
	}

	public function getProveedor()
	{
		return $this->db
					->where("proveedor", $this->proveedor)
					->get("resttouch.proveedor")
					->row();
	}

	public function getBodega()
	{
		return $this->db
					->where("bodega", $this->bodega)
					->get("resttouch.bodega")
					->row();
	}

	public function setDetalle(Array $args, $id = "")
	{
		$det = new IDetalle_Model($id);
		$args['ingreso'] = $this->ingreso;
		$result = $det->guardar($args);

		if(!$result) {
			$this->mensaje = $det->getMensaje();
		}

		return $result;
	}

	public function getDetalle($args = [])
	{
		$det = $this->IDetalle_Model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new IDetalle_Model($row->ingreso_detalle);
				$row->articulo = $detalle->getArticulo();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new IDetalle_Model($det->ingreso_detalle);
			$det->articulo = $detalle->getArticulo();
			$datos[] = $det;
		}

		return $datos;
	}
}

/* End of file Ingreso_model.php */
/* Location: ./application/wms/models/Ingreso_model.php */