<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TurnoTipo_model extends General_model {

	public $turno_tipo;
	public $descripcion;
	public $activo = 1;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("turno_tipo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file TurnoTipo_model.php */
/* Location: ./application/admin/models/TurnoTipo_model.php */