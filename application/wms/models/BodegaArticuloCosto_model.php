<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class BodegaArticuloCosto_Model extends General_model {

	public $bodega_articulo_costo;
	public $bodega;
	public $articulo;
	public $costo_ultima_compra = 0.00;
	public $costo_promedio = 0.00;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("bodega_articulo_costo");

		if(!empty($id)) {
			$this->cargar($id);
        }
        
        $this->load->model([ 
            'Articulo_model',
            'Sede_model'
        ]);
    }
    
    public function guardar_costos($idBodega, $idArticulo)
    {
        $obj = $this->buscar(['bodega' => $idBodega, 'articulo' => $idArticulo, '_uno' => true]);
        $bac = new BodegaArticuloCosto_Model($obj ? $obj->bodega_articulo_costo : '');
        $art = new Articulo_model($idArticulo);

        if (!$bac->bodega_articulo_costo) {
            $bac->bodega = $idBodega;
            $bac->articulo = $idArticulo;
        }

        $bac->costo_ultima_compra = $art->getCosto(['bodega' => $idBodega, 'metodo_costeo' => 1]);
        $bac->costo_promedio = $art->getCosto(['bodega' => $idBodega, 'metodo_costeo' => 2]);

        return $bac->guardar();
    }

    public function get_costo($idBodega, $idArticulo)
    {        
        $sede = $this->db
            ->select("c.sede")
            ->join("categoria_grupo b", "a.categoria_grupo = b.categoria_grupo")
            ->join("categoria c", "c.categoria = b.categoria")
            ->where("a.articulo", $idArticulo)
            ->get("articulo a")
            ->row();

        $sede = new Sede_model($sede->sede);
        $emp = $sede->getEmpresa();

        $bac = $this->buscar(['bodega' => $idBodega, 'articulo' => $idArticulo, '_uno' => true]);

        if ($bac) {
            if ($emp->metodo_costeo == 1) {
                return $bac->costo_ultima_compra;
            } else if ($emp->metodo_costeo == 2) {
                return $bac->costo_promedio;
            }
        }

        return 0.00;
    }
}