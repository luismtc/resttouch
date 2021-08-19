<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Categoria_model extends General_Model
{

	public $categoria;
	public $descripcion;
	public $sede;
	public $debaja = 0;
	public $fechabaja = null;
	public $usuariobaja = null;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("categoria");

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function dar_de_baja_subcategorias_articulos()
	{
		$subcategorias = $this->db
			->select("GROUP_CONCAT(categoria_grupo SEPARATOR ',') AS subcategorias")
			->where('categoria', $this->getPK())
			->get('categoria_grupo')
			->row();

		if ($subcategorias) {
			$this->load->model('Cgrupo_model');
			$subcats = explode(',', $subcategorias->subcategorias);
			foreach($subcats as $sc) {
				$tmpSc = new Cgrupo_model($sc);
				$tmpSc->dar_de_baja_articulos($this->usuariobaja);
				$tmpSc->debaja = 1;
				$tmpSc->fechabaja = $this->fechabaja;
				$tmpSc->usuariobaja = $this->usuariobaja;
				$tmpSc->guardar();
			}			
		}
	}
}

/* End of file Categoria_model.php */
/* Location: ./application/admin/models/Categoria_model.php */