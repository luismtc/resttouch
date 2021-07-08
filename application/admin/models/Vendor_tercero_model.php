<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Vendor_tercero_model extends General_model
{
	public $vendor_tercero;
	public $nombre;
	public $comanda_origen;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("vendor_tercero");
		if (!empty($id)) {
			$this->cargar($id);
		}

        $this->load->model(['Catalogo_model']);
	}

    public function buscar_agregar($nombre, $comanda_origen)
    {
        $vendor = $this->buscar([
            'UPPER(TRIM(nombre))' => strtoupper(trim($nombre)),
            'comanda_origen' => $comanda_origen,
            '_uno' => true
        ]);

        if ($vendor) {
            return $vendor;
        } else {
            $nvo = new Vendor_tercero_model();
            $nvo->nombre = trim($nombre);
            $nvo->comanda_origen = $comanda_origen;
            if ($nvo->guardar()) {
                return $nvo;
            }
        }
        return null;
    }

    public function full_search($args = [])
    {
        $datos = $this->buscar($args);
        if(is_array($datos))
        {
            foreach($datos as $d) 
            {
                $d->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $d->comanda_origen, '_uno' => true]);
            }
        } else {
            if($datos) {
                $datos->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $datos->comanda_origen, '_uno' => true]);
            }
        }
        return $datos;
    }

}
