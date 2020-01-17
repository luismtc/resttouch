<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

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

	public function get_tipo_movimiento()
	{
		$this->output
		->set_output(json_encode([
			"tipo_movimiento" => $this->Catalogo_model->getTipoMovimiento($_GET)
		]));
	}

	public function get_documento_tipo()
	{
		$this->output
		->set_output(json_encode([
			"documento_tipo" => $this->Catalogo_model->getDocumentoTipo($_GET)
		]));
	}

	public function get_bodega()
	{
		$this->output
		->set_output(json_encode([
			"bodega" => $this->Catalogo_model->getBodega($_GET)
		]));
	}

	public function get_proveedor()
	{
		$this->output
		->set_output(json_encode([
			"proveedor" => $this->Catalogo_model->getProveedor($_GET)
		]));
	}
}

/* End of file Catalogo.php */
/* Location: ./application/admin/controllers/Catalogo.php */