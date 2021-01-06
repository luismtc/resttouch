<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Accion_model extends General_model {

	public $descripcion;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("accion");

		if (!empty($id)) {
			$this->cargar($id);
		}
	}
}

/* End of file Accion_model.php */
/* Location: ./application/admin/models/Accion_model.php */