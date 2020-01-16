<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Area_model extends General_Model {

	public $area;
	public $sede;
	public $area_padre;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.area");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function get_mesas() {
		return $this->db
					->where("area", $this->area)
					->get("resttouch.mesa")
					->result();
	}
}

/* End of file Area_model.php */
/* Location: ./application/admin/models/Area_model.php */