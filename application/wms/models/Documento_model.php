<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Documento_model extends General_model {

	public $documento;
	public $ingreso;
	public $documento_tipo;
	public $serie;
	public $numero;
    public $fecha;
    public $tipo_compra_venta;
	public $enviado = 0;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("documento");

		if(!empty($id)) {
			$this->cargar($id);
        }
    }    

}