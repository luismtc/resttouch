<?php
defined('BASEPATH') or exit('No direct script access allowed');

// error_reporting(-1);
// ini_set('display_errors', 1);

class Venta extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/restaurante');

		$this->load->model([
			'Comanda_model',
			'Dcomanda_model',
			'Factura_model',
			'Dfactura_model',
			'Articulo_model',
			'Categoria_model',
			'Catalogo_model',
			'TurnoTipo_model',
			'Sede_model',
			'Configuracion_model',
			'Rpt_model',
			'Sede_model'
		]);
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
	}

	private function getEsRangoPorFechaDeTurno()
	{
		$config = $this->Configuracion_model->buscar();
		return get_configuracion($config, "RT_REPORTES_FECHAS_TURNOS", 3);
	}

	public function categoria()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = $_GET;
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}

		$req["_vivas"] = true;
		$req['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();
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
		$req['_vivas'] = true;
		$req['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();
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
					$detalle[$art->articulo]['cantidad'] += $det->cantidad;
					$detalle[$art->articulo]['total'] += $det->total;
				} else {
					$detalle[$art->articulo] = [
						'cantidad' => $det->cantidad,
						'total' => $det->total,
						'descripcion' => $art->descripcion,
						'precio_unitario' => $det->precio_unitario
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
		// foreach ($_GET['sede'] as $row) {
		foreach ($req['sede'] as $row) {
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

		$cntCategorias = count($datos);
		$quitar = [];
		for ($i = 0; $i < $cntCategorias; $i++) {			
			$cntSubcats = count($datos[$i]->subcategoria);
			$sumaSubcats = 0;
			for ($j = 0; $j < $cntSubcats; $j++) {
				$sumaSubcats += (float)$datos[$i]->subcategoria[$j]['total'];
			}
			if ($sumaSubcats == 0) {
				$quitar[] = $i;
			}
		}

		foreach($quitar as $quita){
			unset($datos[$quita]);
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

		if (verDato($req, "_excel")) {
			$fdel = formatoFecha($_GET['fdel'], 2);
			$fal = formatoFecha($_GET['fal'], 2);

			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				->setCreator("Restouch")
				->setTitle("Office 2007 xlsx Ventas por Categoria")
				->setSubject("Office 2007 xlsx Ventas por Categoria")
				->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Descripcion",
				"Cantidad",
				"Porcentaje",
				"Precio Unitario",
				"Total"
			];
			/*Encabezado*/
			$hoja->setCellValue("A1", $data["empresa"]->nombre);
			$hoja->setCellValue("A2", $data["nsede"]);
			$hoja->setCellValue("A4", "Reporte de Ventas");
			$hoja->setCellValue("A5", "Por Categoria");
			$hoja->setCellValue("A6", "Del: {$fdel} al: {$fal}");

			$hoja->fromArray($nombres, null, "A8");
			$hoja->getStyle("A1:A6")->getFont()->setBold(true);
			$hoja->getStyle("A8:E8")->getFont()->setBold(true);

			$fila = 9;
			$granTotal = 0;

			if (!isset($data['detalle']['grupo'])) {
				foreach ($data['detalle'] as $det) {
					$hoja->fromArray([$det->descripcion], null, "A{$fila}");
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;

					foreach ($det->subcategoria as $sub) {
						if (count($sub['articulos']) > 0) {
							$hoja->fromArray([$sub['descripcion']], null, "A{$fila}");
							$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
							$fila++;
							$total = 0;
							foreach ($sub['articulos'] as $row) {
								$reg = [
									$row->descripcion,
									$row->cantidad,
									$row->porcentaje,
									$row->precio_unitario,
									round($row->total, 2)
								];
								$hoja->fromArray($reg, null, "A{$fila}");
								$total += $row->total;
								$granTotal += $row->total;
								$fila++;
							}

							$hoja->setCellValue("D{$fila}", "Total Subcategoria");
							$hoja->setCellValue("E{$fila}", $total);
							$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
							$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
					}
				}

				$fila++;
				$hoja->setCellValue("D{$fila}", "TOTAL");
				$hoja->setCellValue("E{$fila}", $granTotal);
				$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
			} else {
				foreach ($data['detalle']['datos'] as $sede) {
					$totalSede = 0;
					$hoja->fromArray([$sede['sede']], null, "A{$fila}");
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;
					foreach ($sede['articulos'] as $det) {
						//
						$hoja->fromArray([$det->descripcion], null, "A{$fila}");
						$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
						$fila++;

						foreach ($det->subcategoria as $sub) {
							if (count($sub['articulos']) > 0) {
								$hoja->fromArray([$sub['descripcion']], null, "A{$fila}");
								$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
								$fila++;
								$total = 0;
								foreach ($sub['articulos'] as $row) {
									$reg = [
										$row->descripcion,
										$row->cantidad,
										$row->porcentaje,
										$row->precio_unitario,
										round($row->total, 2)
									];
									$hoja->fromArray($reg, null, "A{$fila}");
									$total += $row->total;
									$totalSede += $row->total;
									$granTotal += $row->total;
									$fila++;
								}

								$hoja->setCellValue("D{$fila}", "Total Subcategoria");
								$hoja->setCellValue("E{$fila}", $total);
								$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
								$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$fila++;
							}
						}
					}
					$hoja->setCellValue("D{$fila}", "Total Sede");
					$hoja->setCellValue("E{$fila}", $totalSede);
					$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				}

				$fila++;
				$hoja->setCellValue("D{$fila}", "TOTAL");
				$hoja->setCellValue("E{$fila}", $granTotal);
				$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
			}

			for ($i = 0; $i <= count($nombres); $i++) {
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

			$fila++;
			$hoja->setTitle("Ventas por Categoria");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Ventas.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");
		} else {
			$vista = $this->load->view('reporte/venta/categoria', array_merge($data, $req), true);

			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //Produccion
				'format' => 'Legal'
			]);

			$mpdf->WriteHTML($vista);
			$mpdf->Output("Ventas_categoria.pdf", "D");

			// $this->output->set_content_type("application/json")->set_output(json_encode(['data' => $data, 'req' => $req]));
		}
	}

	public function articulo($pdf = 0)
	{
		$req = $_GET;
		if (!$this->input->get('sede')) {
			$req['sede'] = [$this->data->sede];
		}
		$req["_vivas"] = true;
		$req['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();
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
						"sede" => $com->sede
					];
				}
			}
		}

		$datos = ["grupo" => 1, "datos" => array_values($detalle)];
		usort($datos["datos"], function ($a, $b) {
			return (int)$a['cantidad'] < (int)$b['cantidad'];
		});

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
		$req['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();
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
						"sede" => $com->sede
					];
				}
			}
		}

		$datos = ["grupo" => 1, "datos" => array_values($detalle)];
		usort($datos["datos"], function ($a, $b) {
			return (int)$a['cantidad'] < (int)$b['cantidad'];
		});

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


		if (verDato($_GET, "_excel")) {
			$fdel = formatoFecha($_GET['fdel'], 2);
			$fal = formatoFecha($_GET['fal'], 2);

			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				->setCreator("Restouch")
				->setTitle("Office 2007 xlsx Articulo")
				->setSubject("Office 2007 xlsx Articulo")
				->setKeywords("office 2007 openxml php");

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				"Descripcion",
				"Cantidad",
				"Total"
			];

			/*Encabezado*/
			$hoja->setCellValue("A1", $data["empresa"]->nombre);
			$hoja->setCellValue("A2", $data["nsede"]);
			$hoja->setCellValue("A4", "Reporte de Ventas");
			$hoja->setCellValue("A5", "Por Articulo");
			$hoja->setCellValue("A6", "Del: {$fdel} al: {$fal}");

			$hoja->fromArray($nombres, null, "A8");
			$hoja->getStyle("A1:A6")->getFont()->setBold(true);
			$hoja->getStyle("A8:C8")->getFont()->setBold(true);

			$fila = 9;
			$total = 0;

			if ($data['detalle']['grupo'] == 1) {
				foreach ($data['detalle']['datos'] as $det) {
					$total += $det['total'];
					$reg = [
						$det['articulo']->descripcion,
						$det['cantidad'],
						round($det['total'], 2)
					];
					$hoja->fromArray($reg, null, "A{$fila}");
					$fila++;
				}

				$fila++;
				$hoja->setCellValue("B{$fila}", "TOTAL");
				$hoja->getStyle("B{$fila}:C{$fila}")->getFont()->setBold(true);
				$hoja->setCellValue("C{$fila}", round($total, 2));
			} else {
				foreach ($data['detalle']['datos'] as $sede) {
					$totalSede = 0;
					$hoja->fromArray([$sede['sede']], null, "A{$fila}");
					$hoja->getStyle("A{$fila}")->getFont()->setBold(true);
					$fila++;
					foreach ($sede['articulos'] as $det) {
						$total += $det['total'];
						$totalSede += $det['total'];

						$reg = [
							$det['articulo']->descripcion,
							$det['cantidad'],
							round($det['total'], 2)
						];
						$hoja->fromArray($reg, null, "A{$fila}");
						$fila++;
					}
					$hoja->setCellValue("B{$fila}", "Total Sede");
					$hoja->getStyle("B{$fila}:C{$fila}")->getFont()->setBold(true);
					$hoja->setCellValue("C{$fila}", round($totalSede, 2));
					$fila++;
				}

				$fila++;
				$hoja->setCellValue("B{$fila}", "TOTAL");
				$hoja->getStyle("B{$fila}:C{$fila}")->getFont()->setBold(true);
				$hoja->setCellValue("C{$fila}", round($total, 2));
			}

			for ($i = 0; $i <= count($nombres); $i++) {
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

			$hoja->setTitle("Ventas por Articulo");

			header("Content-Type: application/vnd.ms-excel");
			header("Content-Disposition: attachment;filename=Ventas.xlsx");
			header("Cache-Control: max-age=1");
			header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
			header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
			header("Cache-Control: cache, must-revalidate");
			header("Pragma: public");

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save("php://output");
		} else {
			$vista = $this->load->view('reporte/venta/articulo', array_merge($data, $req), true);

			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //Produccion
				'format' => 'Legal'
			]);

			$mpdf->WriteHTML($vista);
			$mpdf->Output("Ventas_articulo.pdf", "D");
		}
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
						"monto" => number_format(suma_field($propina, "propina_monto"), 2)
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

	public function ventas_articulo()
	{

		$datos = [];

		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);
			$req['_rango_turno'] = $this->getEsRangoPorFechaDeTurno();
			if (!isset($req['sede']) || count($req['sede']) === 0) {
				$req['sede'] = [$this->data->sede];
			}
			if (!isset($req['fdel'])) {
				$req['fdel'] = date('Y-m-d');
			}
			if (!isset($req['fal'])) {
				$req['fal'] = date('Y-m-d');
			}
			$rpt = new Rpt_model();

			foreach ($req['sede'] as $s) {
				$sedeObj = new Sede_model($s);
				$sede = new stdClass();

				$sede->sede = $sedeObj->getPK();
				$req['idsede'] = $sede->sede;
				$sede->nombre = $sedeObj->nombre;
				$obj = $rpt->get_lista_comandas($req);
				$sede->ventas = [];
				if ($obj) {
					$sede->ventas = $rpt->get_ventas_articulos($obj->comandas, $obj->facturas, $req);
				}
				$datos[] = $sede;
			}

			$data = [
				'fdel' => $req['fdel'],
				'fal' => $req['fal'],
				'turno' => isset($req['turno_tipo']) && (int)$req['turno_tipo'] > 0 ? new TurnoTipo_model($req['turno_tipo']) : null,
				'sedes' => $datos
			];

			if (verDato($req, "_excel")) {
				$data = (object)$data;
				$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
				$excel->getProperties()
					->setCreator("Restouch")
					->setTitle("Office 2007 xlsx Ventas por artículo")
					->setSubject("Office 2007 xlsx Ventas por artículo")
					->setKeywords("office 2007 openxml php");

				$excel->setActiveSheetIndex(0);
				$hoja = $excel->getActiveSheet();
				
				$hoja->setCellValue('A1', 'Reporte de ventas');				
				$hoja->setCellValue('A2', isset($data->turno) ? "Turno: {$data->turno->descripcion}" : '');				
				$hoja->setCellValue('A3', 'Por artículo');				
				$hoja->setCellValue('A4', 'Del: ' . formatoFecha($data->fdel, 2) . ' al: ' . formatoFecha($data->fal, 2));

				$hoja->setCellValue('A6', 'Sede');
				$hoja->setCellValue('B6', 'Descripción');
				$hoja->setCellValue('C6', 'Cantidad');
				$hoja->setCellValue('D6', 'Total');
				$hoja->getStyle('A6:B6')->getAlignment()->setHorizontal('center');
				$hoja->getStyle('C6:D6')->getAlignment()->setHorizontal('right');
				$hoja->getStyle('A6:D6')->getFont()->setBold(true);
				$hoja->setAutoFilter('A6:D6');

				$fila = 7;
				foreach ($data->sedes as $sede) {
					foreach ($sede->ventas as $venta) {
						$hoja->setCellValue("A{$fila}", $sede->nombre);
						$hoja->setCellValue("B{$fila}", $venta->descripcion);
						$hoja->setCellValue("C{$fila}", number_format($venta->cantidad, 2));
						$hoja->setCellValue("D{$fila}", number_format($venta->total, 2));
						$fila++;
					}
				}
				$fila--;
				$hoja->getStyle("C7:D{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$hoja->getStyle("A6:D{$fila}")->getBorders()->getAllBorders()
					->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN)
					->setColor(new \PhpOffice\PhpSpreadsheet\Style\Color('Black'));

				foreach (range('A', 'D') as $col) {
					$hoja->getColumnDimension($col)->setAutoSize(true);
				}

				$hoja->mergeCells('A1:D1');
				$hoja->mergeCells('A2:D2');
				$hoja->mergeCells('A3:D3');
				$hoja->mergeCells('A4:D4');

				$hoja->setTitle("Ventas por artículo");

				header("Content-Type: application/vnd.ms-excel");
				header("Content-Disposition: attachment;filename=Ventas_Articulo.xls");
				header("Cache-Control: max-age=1");
				header("Expires: Mon, 26 Jul 1997 05:00:00 GTM");
				header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GTM");
				header("Cache-Control: cache, must-revalidate");
				header("Pragma: public");

				$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
				$writer->save("php://output");
			} else {
				$vista = $this->load->view('reporte/venta/articulo', $data, true);

				$mpdf = new \Mpdf\Mpdf([
					'tempDir' => sys_get_temp_dir(), //Produccion
					'format' => 'Legal'
				]);

				$mpdf->WriteHTML($vista);
				$mpdf->Output("Ventas_articulo.pdf", "D");

				// $this->output->set_content_type("application/json")->set_output(json_encode($data));
			}
		}
	}
}

/* End of file Ventas.php */
/* Location: ./application/facturacion/controllers/reporte/Ventas.php */