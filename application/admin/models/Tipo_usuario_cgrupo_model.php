<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tipo_usuario_cgrupo_model extends General_model {
    public $usuario_tipo_categoria_grupo;
    public $usuario_tipo;
    public $categoria_grupo;
    public $debaja = 0;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("usuario_tipo_categoria_grupo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}