<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orden_gk_model extends General_model {

	public $orden_gk;
	public $corporacion;
    public $protocolo;
    public $host;
    public $ip;
    public $url_original;
    public $fhcreacion;
    public $numero_orden;
    public $estatus_orden_gk;
    public $raw_orden;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("orden_gk");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}
}
