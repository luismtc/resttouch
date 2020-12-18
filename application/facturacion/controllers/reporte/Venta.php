<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Venta extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/restaurante');

		$this->load->model([
			'Comanda_model',
			'Factura_model',
			'Dfactura_model',
			'Articulo_model',
			'Categoria_model',
			'Catalogo_model',
			'TurnoTipo_model',
			'Sede_model'
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
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}

		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);
		$comandas = $this->Comanda_model->get_sin_factura($req);

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

		foreach ($comandas as $row) {
			$com = new Comanda_model($row->comanda);

			foreach ($com->getDetalle() as $det) {
				$art = new Articulo_model($det->articulo->articulo);
				
				if (isset($detalle[$art->articulo])) {
					$detalle[$art->articulo]["cantidad"] += $det->cantidad;
					$detalle[$art->articulo]["total"] += $det->total;
				} else {
					$detalle[$art->articulo] = [
						"cantidad" => $det->cantidad, 
						"total" => $det->total,
						"descripcion" => $art->descripcion,
						"precio_unitario" => $det->precio
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
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);
		$comandas = $this->Comanda_model->get_sin_factura($req);

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

		foreach ($comandas as $row) {
			$com = new Comanda_model($row->comanda);

			foreach ($com->getDetalle() as $det) {
				$art = new Articulo_model($det->articulo->articulo);
				
				if (isset($detalle[$art->articulo])) {
					$detalle[$art->articulo]["cantidad"] += $det->cantidad;
					$detalle[$art->articulo]["total"] += $det->total;
				} else {
					$detalle[$art->articulo] = [
						"cantidad" => $det->cantidad, 
						"total" => $det->total,
						"descripcion" => $art->descripcion,
						"precio_unitario" => $det->precio
					];
				}
			}
		}

		$cat = [];		
		foreach ($_GET['sede'] as $row) {
			$tmp = $this->Categoria_model->buscar(["sede" => $row]);
			$cat = array_merge($cat, $tmp);
		}
		
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

		if (isset($_GET['_grupo']) && $_GET['_grupo'] == 2) {
			$tmp = [];
			foreach ($datos as $row) {
				if (isset($tmp[$row->sede])) {
					$tmp[$row->sede]['articulos'][] = $row;
				} else {
					$tmpSede = $this->Sede_model->buscar([
						"sede" => $row->sede,
						"_uno" => true
					]);
					$tmp[$row->sede] = [
						"sede" => $tmpSede->nombre,
						"articulos" => [$row]
					];
				}
			}
			$datos = ["grupo" => 2, "datos" => array_values($tmp)];
		}
		
		$data = [
			"detalle" => $datos
		];

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		$tmp = [];
		foreach ($req['sede'] as $row) {
			$sede = $this->Catalogo_model->getSede([
				'sede' => $row,
				"_uno" => true
			]);
			
			$tmp[] = $sede->nombre;
		}

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$data['empresa'] = $emp;
				$data['nsede'] = implode(", ", $tmp);
			}
		}

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
		$req = $_GET;
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);
		$comandas = $this->Comanda_model->get_sin_factura($req);

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
						"articulo" => $det->articulo,
						"sede" => $fac->sede
					];
				}
			}
		}

		foreach ($comandas as $row) {
			$com = new Comanda_model($row->comanda);
			foreach ($com->getDetalle() as $det) {
				$key = $det->articulo->articulo;	
				if (isset($detalle[$key])) {
					$detalle[$key]['cantidad'] += $det->cantidad;
					$detalle[$key]['total'] += $det->total;
				} else {
					$detalle[$key] = [
						"cantidad" => $det->cantidad,
						"total" => $det->total,
						"articulo" => $det->articulo,
						"sede" => $fac->sede
					];
				}
			}
		}

		$datos = ["grupo" => 1, "datos" => array_values($detalle)];
		usort($datos["datos"], function($a, $b) {return (int)$a['cantidad'] < (int)$b['cantidad'];});

		if (isset($_GET['_grupo']) && $_GET['_grupo'] == 2) {
			$tmp = [];
			foreach ($datos["datos"] as $row) {
				if (isset($tmp[$row['sede']])) {
					$tmp[$row['sede']]['articulos'][] = $row;
				} else {
					$tmpSede = $this->Sede_model->buscar([
						"sede" => $row['sede'],
						"_uno" => true
					]);
					$tmp[$row['sede']] = [
						"sede" => $tmpSede->nombre,
						"articulos" => [$row]
					];
				}
			}
			$datos = ["grupo" => 2, "datos" => array_values($tmp)];
		}

		$this->output
			 ->set_content_type("application/json")
			 ->set_output(json_encode($datos));	
		
	}

	public function articulopdf($pdf = 0)
	{
		$req = $_GET;
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}
		$req["_vivas"] = true;
		$facts = $this->Factura_model->get_facturas($req);
		$comandas = $this->Comanda_model->get_sin_factura($req);
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
						"articulo" => $det->articulo,
						"sede" => $fac->sede
					];
				}
			}
		}

		foreach ($comandas as $row) {
			$com = new Comanda_model($row->comanda);
			foreach ($com->getDetalle() as $det) {
				$key = $det->articulo->articulo;	
				if (isset($detalle[$key])) {
					$detalle[$key]['cantidad'] += $det->cantidad;
					$detalle[$key]['total'] += $det->total;
				} else {
					$detalle[$key] = [
						"cantidad" => $det->cantidad,
						"total" => $det->total,
						"articulo" => $det->articulo,
						"sede" => $fac->sede
					];
				}
			}
		}

		$datos = ["grupo" => 1, "datos" => array_values($detalle)];
		usort($datos["datos"], function($a, $b) {return (int)$a['cantidad'] < (int)$b['cantidad'];});

		if (isset($_GET['_grupo']) && $_GET['_grupo'] == 2) {
			$tmp = [];
			foreach ($datos["datos"] as $row) {
				if (isset($tmp[$row['sede']])) {
					$tmp[$row['sede']]['articulos'][] = $row;
				} else {
					$tmpSede = $this->Sede_model->buscar([
						"sede" => $row['sede'],
						"_uno" => true
					]);
					$tmp[$row['sede']] = [
						"sede" => $tmpSede->nombre,
						"articulos" => [$row]
					];
				}
			}
			$datos = ["grupo" => 2, "datos" => array_values($tmp)];
		}

		
		$data = ["detalle" => $datos];

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);
		$emp = $this->Catalogo_model->getEmpresa([
			"empresa" => $sede->empresa,
			"_uno" => true
		]);

		$tmp = [];
		foreach ($req['sede'] as $row) {
			$sede = $this->Catalogo_model->getSede([
				'sede' => $row,
				"_uno" => true
			]);
			
			$tmp[] = $sede->nombre;
		}

		if ($emp) {
			$data['empresa'] = $emp;
			$data['nsede'] = implode(",", $tmp);
		}

		if ($this->input->get('turno_tipo')) {
			$data["turno"] = new TurnoTipo_model($_GET["turno_tipo"]);
		}
		
		$vista = $this->load->view('reporte/venta/articulo', array_merge($data,$req), true);

		$mpdf = new \Mpdf\Mpdf([
			//'tempDir' => sys_get_temp_dir(), //Produccion
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

		$sede = $this->Catalogo_model->getSede([
			'sede' => $this->data->sede,
			"_uno" => true
		]);

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$datos['empresa'] = $emp;
				$datos['sede'] = $sede;
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