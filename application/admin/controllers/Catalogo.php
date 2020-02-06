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
		->set_output(json_encode($this->Catalogo_model->getFormaPago($_GET)));
	}

	public function get_serie_factura()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getSerieFactura($_GET)));
	}

	public function get_tipo_movimiento()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getTipoMovimiento($_GET)));
	}

	public function get_documento_tipo()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getDocumentoTipo($_GET)));
	}

	public function get_bodega()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getBodega($_GET)));
	}

	public function get_proveedor()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getProveedor($_GET)));
	}

	public function get_articulo()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getArticulo($_GET)));
	}

	public function get_usuario()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getUsuario($_GET)));
	}

	public function get_lista_articulo()
	{
		$this->load->model('Categoria_model');
		$cat = $this->Categoria_model->buscar($_GET);		
		$datos = [];
		foreach ($cat as $row) {
			$grupo = $this->Catalogo_model->getCategoriaGrupo([
				"categoria" => $row->categoria				
			]);
			$row->categoria_grupo = $grupo;

			$datos[] = $row;
		}

		$this->output
		->set_output(json_encode($datos));
	}
}

/* End of file Catalogo.php */
/* Location: ./application/admin/controllers/Catalogo.php */