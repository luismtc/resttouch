<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class EDetalle_model extends General_Model {

	public $egreso_detalle;
	public $egreso;
	public $articulo;
	public $cantidad;
	public $precio_unitario;
	public $precio_total;
	public $presentacion;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("egreso_detalle");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}
	

	public function getArticulo() {
		return $this->db
					->where("articulo", $this->articulo)
					->get("articulo")
					->row();
	}

}

/* End of file EDetalle_model.php */
/* Location: ./application/wms/models/EDetalle_model.php */