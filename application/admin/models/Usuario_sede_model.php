<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario_sede_model extends General_model {

	public $sede;
	public $usuario;
	public $anulado = 0;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("usuario_sede");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Usuario_sede.php */
/* Location: ./application/admin/models/Usuario_sede.php */