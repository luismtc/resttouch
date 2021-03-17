<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_compra_venta_model extends General_model {

    public $tipo_compra_venta;
	public $descripcion;
	public $abreviatura;
	public $codigo = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("tipo_compra_venta");

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

}