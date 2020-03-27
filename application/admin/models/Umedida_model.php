<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Umedida_model extends General_model {

	public $medida;
	public $descripcion;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("medida");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Umedida_model.php */
/* Location: ./application/admin/models/Umedida_model.php */