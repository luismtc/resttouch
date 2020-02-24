<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Presentacion_model extends General_model {

	public $presentacion;
	public $medida;
	public $descripcion;
	public $cantidad;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.presentacion");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Presentacion_model.php */
/* Location: ./application/admin/models/Presentacion_model.php */