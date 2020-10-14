<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dfactura_model extends General_model {

	public $detalle_factura;
	public $factura;
	public $articulo;
	public $cantidad;
	public $precio_unitario;
	//public $factura_
	public $total;
	public $monto_base;
	public $monto_iva;	
	public $bien_servicio = 'B';
	public $descuento = 0;
	public $presentacion;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("detalle_factura");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getArticulo() {
		return $this->db
					->where("articulo", $this->articulo)
					->get("articulo")
					->row();
	}

}

/* End of file Dfactura_model.php */
/* Location: ./application/restaurante/models/Dfactura_model.php */