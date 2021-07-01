<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estatus_orden_gk_sede_model extends General_model {

	public $estatus_orden_gk_sede;
    public $orden_gk;
    public $sede;
    public $estatus_orden_gk;
	public $comentario;
    public $fhestatus;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("estatus_orden_gk_sede");
		if (!empty($id)) {
			$this->cargar($id);
		}        
	}
}
