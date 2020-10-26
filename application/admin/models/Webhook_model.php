<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Webhook_model extends General_model {
	public $evento;
	public $link;
	public $token;
	public $tipo_llamada;
	public $metodo;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("webhook");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

}

/* End of file Webhook_model.php */
/* Location: ./application/admin/models/Webhook_model.php */