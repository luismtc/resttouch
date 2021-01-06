<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Razon_anulacion_model extends General_model {

	public $descripcion;
	public $anulado = 0;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("razon_anulacion");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Razon_anulacion_model.php */
/* Location: ./application/admin/models/Razon_anulacion_model.php */