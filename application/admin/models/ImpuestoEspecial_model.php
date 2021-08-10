<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ImpuestoEspecial_model extends General_model {
	public $impuesto_especial;
	public $descripcion;
	public $porcentaje;
	public $descripcion_interna;
	public $codigo_sat = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("impuesto_especial");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}
