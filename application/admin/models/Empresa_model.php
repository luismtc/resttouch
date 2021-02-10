<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Empresa_model extends General_model {
	public $corporacion;
    public $nombre;
    public $numero_acceso;
    public $afiliacion_iva;
    public $codigo_establecimiento;
    public $correo_emisor;
    public $nit;
    public $nombre_comercial;
    public $direccion;
    public $codigo_postal;
    public $municipio;
    public $departamento;
    public $pais_iso_dos;
    public $agente_retenedor;
    public $porcentaje_iva;
    public $visa_merchant_id;
    public $visa_transaction_key;
    public $metodo_costeo;
    public $leyenda_isr;

	public function __construct($id = "")
	{
		parent::__construct();
        $this->setTabla("empresa");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}
}

/* End of file Empresa_model.php */
/* Location: ./application/admin/models/Empresa_model.php */