<?php
defined('BASEPATH') or exit('No direct script access allowed');
//use Restserver\Libraries\REST_Controller;
//require APPPATH . '/libraries/REST_Controller.php';
//require APPPATH . '/libraries/Format.php';

class Welcome extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Config_model');
	}

	public function guardar_tipo_usuario()
	{
		$this->Config_model->guardar_tipo_usuario();
	}

	public function guardar_jerarquia()
	{
		$this->Config_model->guardar_jerarquia();
	}
}
