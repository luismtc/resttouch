<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class IDetalle_Model extends General_model {

	public $ingreso_detalle;
	public $ingreso;
	public $articulo;
	public $cantidad;
	public $precio_unitario;
	public $precio_total;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("ingreso_detalle");

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

/* End of file IDetalle_Model.php */
/* Location: ./application/wms/models/IDetalle_Model.php */