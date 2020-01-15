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
}

/* End of file Area_model.php */
/* Location: ./application/admin/models/Area_model.php */