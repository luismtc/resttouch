<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Corporacion_model extends General_model {

	public $admin_llave;
	public $nombre;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("corporacion");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Corporacion_model.php */
/* Location: ./application/admin/models/Corporacion_model.php */