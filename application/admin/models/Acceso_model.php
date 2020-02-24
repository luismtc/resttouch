<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Acceso_model extends General_model {

	public $acceso;
	public $modulo;
	public $usuario;
	public $submodulo;
	public $opcion;
	public $activo = 1;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.acceso");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getUsuario()
	{
		return $this->db
					->select("usuario, nombres")
					->where("usuario", $this->usuario)
					->get("usuario")
					->row();
	}

	public function getModulo()
	{
		return $this->db
					->where("modulo", $this->modulo)
					->get("modulo")
					->row();
	}

	public function getSubModulo()
	{
		$menu = $this->config->item("menu");
		return ["nombre" => $menu[$this->modulo]['submodulo'][$this->submodulo]['nombre']];
	}

	public function getOpcion()
	{
		$menu = $this->config->item("menu");
		return $menu[$this->modulo]['submodulo'][$this->submodulo]['opciones'][$this->opcion];
	}
}

/* End of file Acceso_model.php */
/* Location: ./application/admin/models/Acceso_model.php */