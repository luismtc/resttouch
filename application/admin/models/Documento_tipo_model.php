<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Documento_tipo_model extends General_model {

    public $documento_tipo;
	public $descripcion;	
	public $codigo = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("documento_tipo");

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

}