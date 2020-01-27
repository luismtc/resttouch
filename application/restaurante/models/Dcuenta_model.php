<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcuenta_model extends General_Model {

	public $detalle_cuenta;
	public $cuenta_cuenta;
	public $detalle_comanda;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.detalle_cuenta");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Dcuenta_model.php */
/* Location: ./application/restaurante/models/Dcuenta_model.php */