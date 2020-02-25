<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Receta_model extends CI_Model {

	public $articulo_detalle;
	public $receta;
	public $racionable = 0;
	public $articulo;
	public $cantidad;
	public $medida

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.articulo_detalle");

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

	public function getMedida()
	{
		return $this->db
					->where("medida", $this->medida)
					->get("resttouch.medida")
					->row();
	}

}

/* End of file Receta_model.php */
/* Location: ./application/admin/models/Receta_model.php */