<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_usuario_model extends General_model {

	public $descripcion = null;
	public $jerarquia   = null;

	public function __construct($id="")
	{
		parent::__construct();
		$this->setTabla("usuario_tipo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getJerarquia()
	{
		return $this->db
		->where("jerarquia", $this->jerarquia)
		->get("jerarquia")
		->row();
	}

}

/* End of file Tipo_usuario_model.php */
/* Location: ./application/admin/models/Tipo_usuario_model.php */