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
		set_time_limit(1800);
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		// $req = $_GET;
		$req = json_decode(file_get_contents('php://input'), true);
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

		foreach ($quitar as $quita) {
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
			$data['turno'] = new TurnoTipo_model($_GET['turno_tipo']);
		}

		if (verDato($req, '_excel')) {
			$fdel = formatoFecha($req['fdel'], 2);
			$fal = formatoFecha($req['fal'], 2);

			$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			$excel->getProperties()
				->setCreator('Restouch')
				->setTitle('Office 2007 xlsx Ventas por Categoria')
				->setSubject('Office 2007 xlsx Ventas por Categoria')
				->setKeywords('office 2007 openxml php');

			$excel->setActiveSheetIndex(0);
			$hoja = $excel->getActiveSheet();
			$nombres = [
				'Descripción',
				'Cantidad',
				'Porcentaje',
				'Precio Unitario',
				'Total'
			];
			/*Encabezado*/
			$hoja->setCellValue('A1', $data['empresa']->nombre);
			$hoja->setCellValue('A2', $data['nsede']);
			$hoja->setCellValue('A4', 'Reporte de Ventas');
			$hoja->setCellValue('A5', 'Por Categoría');
			$hoja->setCellValue('A6', "Del: {$fdel} al: {$fal}");

			$hoja->fromArray($nombres, null, 'A8');
			$hoja->getStyle('A1:A6')->getFont()->setBold(true);
			$hoja->getStyle('A8:E8')->getFont()->setBold(true);

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

							$hoja->setCellValue("D{$fila}", 'Total Subcategoría');
							$hoja->setCellValue("E{$fila}", $total);
							$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
							$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
							$fila++;
						}
					}
				}

				$fila++;
				$hoja->setCellValue("D{$fila}", 'TOTAL');
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

								$hoja->setCellValue("D{$fila}", 'Total Subcategoría');
								$hoja->setCellValue("E{$fila}", $total);
								$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
								$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
								$fila++;
							}
						}
					}
					$hoja->setCellValue("D{$fila}", 'Total Sede');
					$hoja->setCellValue("E{$fila}", $totalSede);
					$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
					$fila++;
				}

				$fila++;
				$hoja->setCellValue("D{$fila}", 'TOTAL');
				$hoja->setCellValue("E{$fila}", $granTotal);
				$hoja->getStyle("D{$fila}:E{$fila}")->getFont()->setBold(true);
				$hoja->getStyle("E{$fila}")->getNumberFormat()->setFormatCode('0.00');
			}

			for ($i = 0; $i <= count($nombres); $i++) {
				$hoja->getColumnDimensionByColumn($i)->setAutoSize(true);
			}

			$fila++;
			$hoja->setTitle('Ventas por Categoría');

			header('Content-Type: application/vnd.ms-excel');
			header('Content-Disposition: attachment;filename=Ventas.xlsx');
			header('Cache-Control: max-age=1');
			header('Expires: Mon, 26 Jul 1997 05:00:00 GTM');
			header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GTM');
			header('Cache-Control: cache, must-revalidate');
			header('Pragma: public');

			$writer = new \PhpOffice\PhpSpreadsheet\Writer\Xlsx($excel);
			$writer->save('php://output');
		} else {
			$vista = $this->load->view('reporte/venta/categoria', array_merge($data, $req), true);

			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //Produccion
				'format' => 'Legal'
			]);

			$mpdf->WriteHTML($vista);
			$mpdf->Output('Ventas_categoria.pdf', 'D');

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
						$hoja->setCellValue("C{$fila}", (float)$venta->cantidad);
						$hoja->setCellValue("D{$fila}", (float)$venta->total);
						$fila++;
					}
				}
				$fila--;
				$SUMRANGE = "D7:D{$fila}";
				$fila++;				
				$hoja->getStyle("C7:D{$fila}")->getNumberFormat()->setFormatCode(PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2);
				$hoja->getStyle("A6:D{$fila}")->getBorders()->getAllBorders()
				->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN)
				->setColor(new \PhpOffice\PhpSpreadsheet\Style\Color('Black'));
				
				$hoja->setCellValue("C{$fila}", "TOTAL:");
				$hoja->setCellValue("D{$fila}", "=SUM({$SUMRANGE})");
				$hoja->getStyle("C{$fila}:D{$fila}")->getAlignment()->setHorizontal('right');
				$hoja->getStyle("C{$fila}:D{$fila}")->getFont()->setBold(true);
				
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

	private function get_idx($datos, $campo, $id)
	{
		$cntDatos = count($datos);
		for ($i = 0; $i < $cntDatos; $i++) {
			if ((int)$datos[$i]->{$campo} === (int)$id) {
				return $i;
			}
		}
		return -1;
	}

	public function ventas_articulos_categoria()
	{
		set_time_limit(1800);
		ini_set('memory_limit', '512M');
		// $memBefore = round(memory_get_usage() / 1048576, 2);
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
				$sede->cantidad = 0;
				$sede->total = 0;
				if ($obj) {
					$rawVentas = $rpt->get_ventas_categorias($obj->comandas, $obj->facturas, $req);
					$ventas = [];
					foreach ($rawVentas as $rv) {

						$idxCategoria = $this->get_idx($ventas, 'idcat', $rv->idcat);
						if ($idxCategoria < 0) {
							$ventas[] = (object)[
								'idcat' => (int)$rv->idcat,
								'categoria' => trim($rv->categoria),
								'cantidad' => 0,
								'total' => 0,
								'subcategorias' => []
							];
							$idxCategoria = count($ventas) - 1;
						}

						$idxSubCategoria = $this->get_idx($ventas[$idxCategoria]->subcategorias, 'idsubcat', $rv->idsubcat);
						if ($idxSubCategoria < 0) {
							$ventas[$idxCategoria]->subcategorias[] = (object)[
								'idsubcat' => (int)$rv->idsubcat,
								'subcategoria' => trim($rv->subcategoria),
								'cantidad' => 0,
								'total' => 0,
								'articulos' => []
							];
							$idxSubCategoria = count($ventas[$idxCategoria]->subcategorias) - 1;
						}

						$idxArticulo = $this->get_idx($ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos, 'idarticulo', $rv->idarticulo);
						if ($idxArticulo < 0) {
							$ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[] = (object)[
								'idarticulo' => (int)$rv->idarticulo,
								'articulo' => trim($rv->articulo),
								'cantidad' => 0,
								'total' => 0,
								'precio' => (float)$rv->precio,
								'detalle_comanda' => '',
								'opciones' => []
							];
							$idxArticulo = count($ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos) - 1;
						}

						$ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[$idxArticulo]->cantidad += (float)$rv->cantidad;
						$ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[$idxArticulo]->total += (float)$rv->total;
						if ($ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[$idxArticulo]->detalle_comanda !== '') {
							$ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[$idxArticulo]->detalle_comanda .= ',';
						}
						$ventas[$idxCategoria]->subcategorias[$idxSubCategoria]->articulos[$idxArticulo]->detalle_comanda .= $rv->detalle_comanda;
					}

					// $memMiddle = round(memory_get_usage() / 1048576, 2);

					$ventas = ordenar_array_objetos($ventas, 'categoria');
					$cntVentas = count($ventas);
					for ($i = 0; $i < $cntVentas; $i++) {
						$ventas[$i]->subcategorias = ordenar_array_objetos($ventas[$i]->subcategorias, 'subcategoria');
						$cntSubcats = count($ventas[$i]->subcategorias);
						$sumCantCat = 0;
						$sumTotCat = 0;						
						for ($j = 0; $j < $cntSubcats; $j++) {
							$ventas[$i]->subcategorias[$j]->articulos = ordenar_array_objetos($ventas[$i]->subcategorias[$j]->articulos, 'cantidad', 1, 'desc');
							$cntArticulos = count($ventas[$i]->subcategorias[$j]->articulos);
							$sumCantSubcat = 0;
							$sumTotSubcat = 0;
							for ($k = 0; $k < $cntArticulos; $k++) {
								$articulo = $ventas[$i]->subcategorias[$j]->articulos[$k];
								$detalles_comanda = explode(',', $articulo->detalle_comanda);
								$lineasDetalle = [];
								foreach ($detalles_comanda as $dc) {
									$lineasDetalle = array_merge($lineasDetalle, $this->Dcomanda_model->get_detalle_comanda_and_childs(['detalle_comanda' => $dc]));
								}
								$opciones = [];
								$sumExtrasSubcat = 0;
								foreach ($lineasDetalle as $ld) {
									if ((int)$ld->multiple === 0 && (int)$ld->detalle_comanda_id > 0) {
										$idxOpcion = $this->get_idx($opciones, 'idopcion', $ld->articulo);
										if ($idxOpcion < 0) {
											$opciones[] = (object)[
												'idopcion' => (int)$ld->articulo,
												'opcion' => trim($ld->descripcion),
												'cantidad' => 0,
												'total' => 0,
												'precio' => $ld->precio
											];
											$idxOpcion = count($opciones) - 1;
										}
										$opciones[$idxOpcion]->cantidad++;
										// $opciones[$idxOpcion]->cantidad += (float)$ld->cantidad;
										$opciones[$idxOpcion]->total += (float)$ld->precio;
										// $articulo->total += (float)$ld->precio;
										$sumExtrasSubcat += (float)$ld->precio;
									}
								}
								$opciones = ordenar_array_objetos($opciones, 'cantidad', 1, 'desc');
								$articulo->opciones = $opciones;
								$sumCantSubcat += $articulo->cantidad;
								$sumTotSubcat += $articulo->total + $sumExtrasSubcat;								
							}
							$sumCantCat += $sumCantSubcat;
							$sumTotCat += $sumTotSubcat;
							$ventas[$i]->subcategorias[$j]->cantidad = $sumCantSubcat;
							$ventas[$i]->subcategorias[$j]->total = $sumTotSubcat;
						}
						$ventas[$i]->cantidad = $sumCantCat;
						$ventas[$i]->total = $sumTotCat;

						$sede->cantidad += $sumCantCat;
						$sede->total += $sumTotCat;
					}

					$sede->ventas = $ventas;
				}
				$datos[] = $sede;
			}

			$data = [
				'fdel' => $req['fdel'],
				'fal' => $req['fal'],
				'turno' => isset($req['turno_tipo']) && (int)$req['turno_tipo'] > 0 ? new TurnoTipo_model($req['turno_tipo']) : null,
				'sedes' => $datos
			];

			// $memAfter = round(memory_get_usage() / 1048576, 2);

			if (verDato($req, '_excel')) {
				$data = (object)$data;
				$excel = new PhpOffice\PhpSpreadsheet\Spreadsheet();
				$excel->getProperties()
					->setCreator("Restouch")
					->setTitle("Office 2007 xlsx Ventas por categoría")
					->setSubject("Office 2007 xlsx Ventas por categoría")
					->setKeywords("office 2007 openxml php");

				$excel->setActiveSheetIndex(0);
				$hoja = $excel->getActiveSheet();

				$hoja->setCellValue('A1', 'Reporte de ventas');
				$hoja->setCellValue('A2', isset($data->turno) ? "Turno: {$data->turno->descripcion}" : '');
				$hoja->setCellValue('A3', 'Por categoría');
				$hoja->setCellValue('A4', 'Del: ' . formatoFecha($data->fdel, 2) . ' al: ' . formatoFecha($data->fal, 2));
				$hoja->getStyle('A1:D4')->getFont()->setBold(true);

				$fila = 6;
				foreach ($data->sedes as $s) {
					$hoja->setCellValue("A{$fila}", $s->nombre);
					$hoja->mergeCells("A{$fila}:D{$fila}");
					$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setBold(true);
					$fila++;
					$hoja->setCellValue("A{$fila}", 'Descripción');
					$hoja->setCellValue("B{$fila}", 'Cantidad');
					$hoja->setCellValue("C{$fila}", 'Precio Unitario');
					$hoja->setCellValue("D{$fila}", 'Total');					
					$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setBold(true);
					$hoja->getStyle("B{$fila}:D{$fila}")->getAlignment()->setHorizontal('right');
					$fila++;
					foreach ($s->ventas as $cat) {
						$hoja->setCellValue("A{$fila}", $cat->categoria);
						$hoja->setCellValue("B{$fila}", $cat->cantidad);
						$hoja->setCellValue("D{$fila}", $cat->total);
						$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setBold(true);
						$fila++;
						foreach ($cat->subcategorias as $subcat) {
							$hoja->setCellValue("A{$fila}", "   {$subcat->subcategoria}");
							$hoja->setCellValue("B{$fila}", $subcat->cantidad);
							$hoja->setCellValue("D{$fila}", $subcat->total);
							$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setBold(true);
							$fila++;
							foreach ($subcat->articulos as $art) {
								$hoja->setCellValue("A{$fila}", "      {$art->articulo}");
								$hoja->setCellValue("B{$fila}", $art->cantidad);
								$hoja->setCellValue("C{$fila}", $art->precio);
								$hoja->setCellValue("D{$fila}", $art->total);
								$fila++;
								if (count($art->opciones) > 0) {
									foreach ($art->opciones as $opc) {
										$hoja->setCellValue("A{$fila}", "         {$opc->opcion}");
										$hoja->setCellValue("B{$fila}", $opc->cantidad);
										$hoja->setCellValue("C{$fila}", $opc->precio == 0 ? '' : $opc->precio);
										$hoja->setCellValue("D{$fila}", $opc->total == 0 ? '' : $opc->total);
										$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setItalic(true);
										$fila++;
									}
								}
							}
						}
					}
					$hoja->setCellValue("A{$fila}", "Totales de {$s->nombre}:");
					$hoja->getStyle("A{$fila}")->getAlignment()->setHorizontal('right');
					$hoja->setCellValue("B{$fila}", $s->cantidad);
					$hoja->setCellValue("D{$fila}", $s->total);
					$hoja->getStyle("A{$fila}:D{$fila}")->getFont()->setBold(true);
					$fila += 2;
				}

				$fila -= 2;
				// $hoja->getStyle("B8:D{$fila}")->getNumberFormat()->setFormatCode('0.00');
				$hoja->getStyle("B8:D{$fila}")->getNumberFormat()->setFormatCode(PhpOffice\PhpSpreadsheet\Style\NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED2);				

				foreach (range('A', 'D') as $col) {
					$hoja->getColumnDimension($col)->setAutoSize(true);
				}

				$hoja->mergeCells('A1:D1');
				$hoja->mergeCells('A2:D2');
				$hoja->mergeCells('A3:D3');
				$hoja->mergeCells('A4:D4');
				
				// $memAfterExcel = round(memory_get_usage() / 1048576, 2);
				
				// $fila += 4;
				// $hoja->setCellValue("A{$fila}", "Mem antes: {$memBefore}MB");
				// $hoja->setCellValue("B{$fila}", "Mem mitad: {$memMiddle}MB");				
				// $hoja->setCellValue("C{$fila}", "Mem datos: {$memAfter}MB");
				// $hoja->setCellValue("D{$fila}", "Mem excel: {$memAfterExcel}MB");

				$hoja->setTitle("Ventas por categoría");

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
				$vista = $this->load->view('reporte/venta/categoria_combo', array_merge($data, $req), true);

				$mpdf = new \Mpdf\Mpdf([
					'tempDir' => sys_get_temp_dir(), //Produccion
					'format' => 'Letter'
				]);

				$mpdf->WriteHTML($vista);
				$mpdf->Output('Ventas_categoria.pdf', 'D');

				// $this->output->set_content_type("application/json")->set_output(json_encode(array_merge($data, $req)));				
			}
		}
	}
}

/* End of file Ventas.php */
/* Location: ./application/facturacion/controllers/reporte/Ventas.php */