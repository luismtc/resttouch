<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estatus_orden_gk_model extends General_model {

	public $estatus_orden_gk;
	public $descripcion;
    public $color = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("estatus_orden_gk");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}
}
