<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Proveedor_model extends General_model {

	public $razon_social;
	public $nit;
	public $corporacion;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("proveedor");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}
}

/* End of file Proveedor_model.php */
/* Location: ./application/admin/models/Proveedor_model.php */