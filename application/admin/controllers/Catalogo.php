<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->model("Catalogo_model");

		$this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function index()
	{
		die("Forbidden");
	}

	public function get_forma_pago()
	{
		$this->output
		->set_output(json_encode([
			"forma_pago" => $this->Catalogo_model->getFormaPago($_GET)
		]));
	}

	public function get_serie_factura()
	{
		$this->output
		->set_output(json_encode([
			"serie_factura" => $this->Catalogo_model->getSerieFactura($_GET)
		]));
	}

}

/* End of file Catalogo.php */
/* Location: ./application/admin/controllers/Catalogo.php */