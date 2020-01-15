<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mesa_model extends General_Model {

	public $mesa;
	public $area;
	public $numero;
	public $posx;
	public $posy;
	public $tamanio;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.mesa");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}
}

/* End of file Mesa_model.php */
/* Location: ./application/admin/models/Mesa_model.php */