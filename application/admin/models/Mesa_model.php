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

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.mesa");

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
		->join("resttouch.comanda b", "a.comanda = b.comanda")
		->where("a.mesa", $this->mesa)		
		->get("resttouch.comanda_has_mesa a")
		->row();
	}
}

/* End of file Mesa_model.php */
/* Location: ./application/admin/models/Mesa_model.php */