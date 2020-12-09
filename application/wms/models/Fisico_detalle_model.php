<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fisico_detalle_model extends General_model {

	public $inventario_fisico;
	public $articulo;
	public $precio;
	public $existencia_sistema = 0;
	public $existencia_fisica = 0;
	public $diferencia = 0;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("detalle_inventario_fisico");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getArticulo()
	{
		return $this->db
					->where("articulo", $this->articulo)
					->get("articulo")
					->row();
	}

}

/* End of file Fisico_detalle_model.php */
/* Location: ./application/wms/models/Fisico_detalle_model.php */