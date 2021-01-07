<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bitacora_model extends General_model {

	public $accion;
	public $usuario;
	public $fecha;
	public $tabla;
	public $registro;
	public $comentario;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("bitacora");

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function buscarBitacora($args = [])
	{
		if (isset($args['comentario'])) {
			$this->db->like("comentario", $args['comentario']);
			unset($args['comentario']);
		}

		return $this->buscar($args);
	}

}

/* End of file Bitacora_model.php */
/* Location: ./application/admin/models/Bitacora_model.php */