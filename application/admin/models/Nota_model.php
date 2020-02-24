<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Nota_model extends General_model {

	public $notas;
	public $titulo;
	public $detalle;
	public $sede;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.notas");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}	

}

/* End of file Nota_model.php */
/* Location: ./application/admin/models/Nota_model.php */