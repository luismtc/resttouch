<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Articulo_vendor_tercero_model extends General_Model {

	public $articulo_vendor_tercero;
	public $articulo;
	public $vendor_tercero;
	public $codigo;	

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("articulo_vendor_tercero");

		if(!empty($id)) {
			$this->cargar($id);
		}

        $this->load->model([
            'Articulo_model',
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
                $d->articulo = $this->Articulo_model->buscar(['articulo' => $d->articulo, '_uno' => true]);
                $d->vendor_tercero = $this->Vendor_tercero_model->buscar(['vendor_tercero' => $d->vendor_tercero, '_uno' => true]);
            }
        } else {
            if($datos) {
                $datos->sede = $this->Articulo_model->buscar(['articulo' => $datos->sede, '_uno' => true]);
                $datos->vendor_tercero = $this->Vendor_tercero_model->buscar(['vendor_tercero' => $datos->vendor_tercero, '_uno' => true]);
            }
        }
        return $datos;
    }

    public function get_articulo_vendor($idVendor, $idTercero)
	{
		$idArticulo = 0;
		$artVendor = $this->buscar([
			'vendor_tercero' => $idVendor,
			'TRIM(codigo)' => trim($idTercero),
			'_uno' => true
		]);

		if ($artVendor) {
			$idArticulo = $artVendor->articulo;									
		} else {																		
			$art = $this->Articulo_model->buscar(['TRIM(shopify_id)' => trim($idTercero), '_uno' => true]);
			if ($art) 
			{
				$idArticulo = $art->articulo;										
			} else {
				$art = $this->Articulo_model->buscar(['TRIM(codigo)' => trim($idTercero), '_uno' => true]);
				if ($art) 
				{
					$idArticulo = $art->articulo;
				}
			}

			if ($art) {
				$avt = new Articulo_vendor_tercero_model();
				$avt->articulo = $art->articulo;
				$avt->vendor_tercero = $idVendor;
				$avt->codigo = $idTercero;
				$avt->guardar();
			}
		}
		return (int)$idArticulo;
	}
}