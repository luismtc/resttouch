<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->model("Catalogo_model");
		$headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']); 
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
		$_GET['sede'] = $this->data->sede;
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
		$_GET['sede'] = $this->data->sede;
		$this->output
		->set_output(json_encode($this->Catalogo_model->getArticulo($_GET)));
	}

	public function get_usuario()
	{
		$_GET['sede'] = $this->data->sede;
		$this->output
		->set_output(json_encode($this->Catalogo_model->getUsuario($_GET)));
	}

	public function get_sede()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getSede($_GET)));
	}

	public function get_tipo_usuario()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getTipoUsuario($_GET)));
	}

	public function get_lista_articulo($sede)
	{
		$this->load->model('Categoria_model');
		$_GET['sede'] = $sede;
		$cat = $this->Categoria_model->buscar($_GET);		
		$datos = [];
		foreach ($cat as $row) {
			$grupo = $this->Catalogo_model->getCategoriaGrupo([
				"categoria" => $row->categoria,
				"categoria_grupo_grupo" => null			
			]);
			$row->categoria_grupo = $grupo;

			$datos[] = $row;
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function get_modulo()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getModulo($_GET)));
	}

	public function get_sub_modulo($modulo)
	{		
		$menu = $this->config->item("menu");
		$datos = $menu[$modulo]['submodulo'];

		$this->output
		->set_output(json_encode($datos));
	}

	public function get_opcion($modulo, $submodulo)
	{
		$menu = $this->config->item("menu");
		$datos = [];
		if (isset($menu[$modulo]) && isset($menu[$modulo]['submodulo'][$submodulo])) {
			$datos = $menu[$modulo]['submodulo'][$submodulo]['opciones'];	
		}		
		
		$this->output
		->set_output(json_encode($datos));
	}

	public function get_moneda()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getMoneda($_GET)));
	}

	public function get_factura_serie()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getFacturaSerie($_GET)));
	}

	public function get_mesero()
	{
		$this->load->model(['Turno_model', 'Usuario_model']);
		$datos = [];
		
		$tmp = $this->Turno_model->getTurno([
			"sede" => $this->data->sede,
			'abierto' => true, 
			"_uno" => true
		]);
		if ($tmp) {
			$turno = new Turno_model($tmp->turno);
			$datos = $turno->getUsuarios(["usuario_tipo" => 1]);
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function get_jerarquia()
	{
		$this->output
		->set_output(json_encode($this->Catalogo_model->getJerarquia($_GET)));
	}
}

/* End of file Catalogo.php */
/* Location: ./application/admin/controllers/Catalogo.php */