<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cliente_model extends General_model {

	public $cliente;
	public $nombre;
	public $direccion;
	public $nit;
	public $telefono;
	public $correo;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.cliente");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}


}

/* End of file Cliente_model.php */
/* Location: ./application/admin/models/Cliente_model.php */