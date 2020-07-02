<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Propina_model extends General_model {

	public $usuario_tipo;
	public $porcentaje;
	public $anulado = 0;

	public function __construct($id = null)
	{
		parent::__construct();
		$this->setTabla("propina_distribucion");

		if($id !== null) {
			$this->cargar($id);
		}
	}

	function getUsuario()
	{
		return $this->db
					->where("usuario_tipo", $this->usuario_tipo)
					->get("usuario_tipo")
					->row();
	}

}

/* End of file Propina_model.php */
/* Location: ./application/admin/models/Propina_model.php */