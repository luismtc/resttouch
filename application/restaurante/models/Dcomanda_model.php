<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcomanda_model extends General_Model {

	public $detalle_comanda;
	public $comanda;
	public $articulo;
	public $cantidad;
	public $precio;
	public $impreso;
	public $total;
	public $notas;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("resttouch.detalle_comanda");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getArticulo() {
		return $this->db
					->where("articulo", $this->articulo)
					->get("resttouch.articulo")
					->row();
	}
}

/* End of file Dcomanda_model.php */
/* Location: ./application/restaurante/models/Dcomanda_model.php */