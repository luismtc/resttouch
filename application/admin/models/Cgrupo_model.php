<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cgrupo_model extends General_model {

	public $categoria_grupo;
	public $descripcion;
	public $categoria;
	public $categoria_grupo_grupo;
	public $receta = 0;
	public $impresora;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("categoria_grupo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Cgrupo_model.php */
/* Location: ./application/admin/models/Cgrupo_model.php */