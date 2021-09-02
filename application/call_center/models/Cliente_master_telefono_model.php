<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cliente_master_telefono_model extends General_model {

	public $cliente_master_telefono;
	public $cliente_master;
    public $telefono;    

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("cliente_master_telefono");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}
}
