<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mesa_model extends General_Model {

	public $mesa;
	public $area;
	public $numero;
	public $posx;
	public $posy;
	public $tamanio;
	public $estatus;
	public $ancho = 72.0000;
	public $alto = 72.0000;
	public $esmostrador = 0;
	public $vertical = 0;
	public $impresora = 0;
	public $debaja = 0;
	public $etiqueta = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("mesa");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function get_comanda($args = []){

		if(isset($args['estatus'])) {
			$this->db->where("b.estatus", 1);
		}

		return $this->db
		->select("
			b.comanda,
			b.usuario,
			b.sede,
			b.estatus")
		->join("comanda b", "a.comanda = b.comanda")
		->where("a.mesa", $this->mesa)		
		->get("comanda_has_mesa a")
		->row();
	}
}

/* End of file Mesa_model.php */
/* Location: ./application/admin/models/Mesa_model.php */