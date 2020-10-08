<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcomanda_model extends General_Model {

	public $detalle_comanda;
	public $comanda;
	public $articulo;
	public $cantidad;
	public $precio;
	public $impreso = false;
	public $total;
	public $notas;
	public $cocinado = 0;
	public $presentacion;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("detalle_comanda");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getArticulo() {
		$datos = [];
		$tmp = $this->db
					->where("articulo", $this->articulo)
					->get("articulo")
					->row();
		$tmp->impresora = $this->db
		->select("b.*")
		->join("impresora b", "b.impresora = a.impresora")
		->where("a.categoria_grupo", $tmp->categoria_grupo)
		->get("categoria_grupo a")
		->row();

		return $tmp;
	}
}

/* End of file Dcomanda_model.php */
/* Location: ./application/restaurante/models/Dcomanda_model.php */