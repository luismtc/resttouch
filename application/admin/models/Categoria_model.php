<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Categoria_model extends General_Model {

	public $categoria;
	public $descripcion;
	public $sede;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.categoria");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Categoria_model.php */
/* Location: ./application/admin/models/Categoria_model.php */