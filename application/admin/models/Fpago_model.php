<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fpago_model extends General_model {

	public $forma_pago;
	public $descripcion;
	public $activo = 1;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.forma_pago");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Fpago_model.php */
/* Location: ./application/admin/models/Fpago_model.php */