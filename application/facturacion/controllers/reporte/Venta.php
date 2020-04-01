<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Venta extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Factura_model',
			'DFactura_model',
			'Articulo_model',
			'Categoria_model',
			'Catalogo_model'
		]);
	}

	public function categoria()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$_GET['sede'] = $data->sede;
		$facts = $this->Factura_model->buscar($_GET);

		$datos = [];
		$detalle = [];
		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$tmp = $fac->getDetalle();
			foreach ($tmp as $det) {
				$art = new Articulo_model($det->articulo->articulo);
				
				if (isset($detalle[$art->articulo])) {
					$detalle[$art->articulo]["cantidad"] += $det->cantidad;
					$detalle[$art->articulo]["total"] += $det->total;
				} else {
					$detalle[$art->articulo] = [
						"cantidad" => $det->cantidad, 
						"total" => $det->total,
						"descripcion" => $art->descripcion,
						"precio_unitario" => $det->precio_unitario
					];
				}
			}
		}

		$cat = $this->Categoria_model->buscar(["sede" => $data->sede]);		
		
		$categorias = [];
		foreach ($cat as $row) {
			$grupo = $this->Catalogo_model->getCategoriaGrupo([
				"categoria" => $row->categoria,
				"categoria_grupo_grupo" => null			
			]);
			$row->categoria_grupo = $grupo;

			$categorias[] = $row;
		}
		$datos = [];
		foreach ($categorias as $row) {
			$row->articulos = buscar_articulo($row->categoria_grupo, $detalle);
			unset($row->categoria_grupo);
			$datos[] = $row;
		}

		foreach ($datos as $row) {
			
		}
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function articulo()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$_GET['sede'] = $data->sede;
		$facts = $this->Factura_model->buscar($_GET);

		$datos = [];
		$detalle = [];
		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$tmp = $fac->getDetalle();
			foreach ($tmp as $det) {
				$key = $det->articulo->articulo;
				if (isset($detalle[$key])) {
					$detalle[$key]['cantidad'] += $det->cantidad;
					$detalle[$key]['total'] += $det->total;
				} else {
					$detalle[$key] = [
						"cantidad" => $det->cantidad,
						"total" => $det->total,
						"articulo" => $det->articulo
					];
				}
			}
		}
		$datos = array_values($detalle);
		usort($datos, function($a, $b) {return (int)$a['cantidad'] < (int)$b['cantidad'];});
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}
}

/* End of file Ventas.php */
/* Location: ./application/facturacion/controllers/reporte/Ventas.php */