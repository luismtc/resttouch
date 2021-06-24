<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Sede_vendor_tercero_model extends General_model
{
	public $sede_vendor_tercero;
	public $sede;
	public $vendor_tercero;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("sede_vendor_tercero");
		if (!empty($id)) {
			$this->cargar($id);
		}

        $this->load->model([
            'Sede_model',
            'Vendor_tercero_model'
        ]);
	}
    
    public function full_search($args = [])
    {        
        $datos = $this->buscar($args);        
        if(is_array($datos))
        {
            foreach($datos as $d) 
            {
                $d->sede = $this->Sede_model->buscar(['sede' => $d->sede, '_uno' => true]);
                $d->vendor_tercero = $this->Vendor_tercero_model->buscar(['vendor_tercero' => $d->vendor_tercero, '_uno' => true]);
            }
        } else {
            if($datos) {
                $datos->sede = $this->Sede_model->buscar(['sede' => $datos->sede, '_uno' => true]);
                $datos->vendor_tercero = $this->Vendor_tercero_model->buscar(['vendor_tercero' => $datos->vendor_tercero, '_uno' => true]);
            }
        }
        return $datos;
    }    
}
