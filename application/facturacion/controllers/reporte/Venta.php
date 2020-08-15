<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Venta extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Factura_model',
			'Dfactura_model',
			'Articulo_model',
			'Categoria_model',
			'Catalogo_model',
			'TurnoTipo_model'
		]);
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
	}

	public function categoria($pdf = 0)
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = $_GET;
		$req['sede'] = $this->data->sede;
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);

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

		$cat = $this->Categoria_model->buscar(["sede" => $this->data->sede]);		
		
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
			$row->subcategoria = buscar_articulo($row->categoria_grupo, $detalle);
			unset($row->categoria_grupo);
			$datos[] = $row;
		}
	
		$this->output
			->set_content_type("application/json")
			->set_output(json_encode($datos));	
	 
	}

	public function categoriapdf($pdf = 0)
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = $_GET;
		$req['sede'] = $this->data->sede;
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);

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

		$cat = $this->Categoria_model->buscar(["sede" => $this->data->sede]);		
		
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
			$row->subcategoria = buscar_articulo($row->categoria_grupo, $detalle);
			unset($row->categoria_grupo);
			$datos[] = $row;
		}
		
		$data = ["detalle" => $datos];

		if ($this->input->get('turno_tipo')) {
			$data["turno"] = new TurnoTipo_model($_GET["turno_tipo"]);
		}

		$vista = $this->load->view('reporte/venta/categoria', array_merge($data,$req), true);

		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //Produccion
			'format' => 'Legal'
		]);

		$mpdf->WriteHTML($vista);
		$mpdf->Output("Ventas_categoria.pdf", "D");
		
	}

	public function articulo($pdf = 0)
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = $_GET;
		$req['sede'] = $data->sede;
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);

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

	public function articulopdf($pdf = 0)
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = $_GET;
		$req['sede'] = $data->sede;

		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);

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

		
		$data = ["detalle" => $datos];

		if ($this->input->get('turno_tipo')) {
			$data["turno"] = new TurnoTipo_model($_GET["turno_tipo"]);
		}
		
		$vista = $this->load->view('reporte/venta/articulo', array_merge($data,$req), true);

		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //Produccion
			'format' => 'Legal'
		]);

		$mpdf->WriteHTML($vista);
		$mpdf->Output("Ventas_articulo.pdf", "D");
	
	}

	public function propina()
	{
		
		$_GET['sede'] = $this->data->sede;
		$_GET['_vivas'] = true;
		$facts = $this->Factura_model->get_facturas($_GET);
		$datos = $_GET;
		$datos['propina'] = [];
		foreach ($facts as $row) {
			$fac = new Factura_model($row->factura);
			$propina = $fac->getPropina();
			if ($propina) {
				$dato = [
					"cuentas" => $propina, 
					"factura" => [
						"numero" => $fac->numero_factura, "fecha" => $fac->fecha_factura
					], 
					"total" => [
						"monto" => number_format(suma_field($propina, "propina_monto"),2)
					]
				];
				$datos['propina'][] = $dato;
			}
		}
		
		$vista = $this->load->view('reporte/venta/propina', $datos, true);
		
		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(), //Produccion
			'format' => 'Legal'
		]);

		$mpdf->WriteHTML($vista);
		$mpdf->Output("Propinas.pdf", "D");
	}
}

/* End of file Ventas.php */
/* Location: ./application/facturacion/controllers/reporte/Ventas.php */