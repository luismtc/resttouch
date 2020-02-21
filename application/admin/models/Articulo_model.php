<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Articulo_model extends General_model {

	public $articulo;
	public $categoria_grupo;
	public $presentacion;
	public $descripcion;
	public $precio;
	public $bien_servicio;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.articulo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getCategoriaGrupo()
	{
		return $this->db
					->where("categoria_grupo", $this->categoria_grupo)
					->get("resttouch.categoria_grupo")
					->row();
	}

	public function getPresentacion()
	{
		return $this->db
					->where("presentacion", $this->presentacion)
					->get("resttouch.presentacion")
					->row();
	}

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */