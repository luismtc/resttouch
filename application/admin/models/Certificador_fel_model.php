<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Certificador_fel_model extends General_model {

	public $llave;
	public $usuario;
	public $firma_llave;
	public $firma_codigo;
	public $firma_alias;
	public $nit;
	public $correo_emisor;
	public $frase_retencion_isr;
	public $frase_retencion_iva;
	public $certificador_configuracion;
	public $nombre;
	public $vinculo_factura;
	public $vinculo_firma;
	public $metodo_factura;
	public $vinculo_anulacion;
	public $metodo_anulacion;
	public $vinculo_grafo;
	public $metodo_grafo;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("certificador_fel");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function cargarConfiguracion()
	{
		
	}

}

/* End of file Certificador_fel_model.php */
/* Location: ./application/admin/models/Certificador_fel_model.php */