<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Api extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
			"Configuracion_model",
			"Comanda_model",
			"Dcomanda_model",
			"Cuenta_model",
			"Dcuenta_model",
			"Usuario_model",
			"Mesa_model",
			"Area_model",
			"Articulo_model",
			"Catalogo_model",
			"Turno_model",
			"Factura_model",
			"Dfactura_model",
			"Cliente_model",
			"Receta_model"
		]);

		$this->output
			->set_content_type("application/json", "UTF-8");
	}

	public function set_comanda()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$obj = json_decode(file_get_contents('php://input'));
		$datos = ["exito" => false, 'mensaje' => ''];

		if (isset($_GET['key'])) {
			if ($this->input->method() == 'post') {

				$datosDb = $this->Catalogo_model->getCredenciales([
					"llave" => $_GET['key']
				]);
				$conn = [
					'host' => $datosDb->db_hostname,
					'user' => $datosDb->db_username,
					'password' => $datosDb->db_password,
					'database' => $datosDb->db_database
				];
				$db = conexion_db($conn);
				$this->db = $this->load->database($db, true);
				$config = $this->Configuracion_model->buscar();

				$sede = $this->Catalogo_model->getSede([
					"admin_llave" => $_GET['key'],
					"_uno" => true
				]);

				$datosCliente = false;
				$idCliente = false;

				$rutas = get_configuracion($config, "RT_CAMPO_NIT", 2);
				if ($rutas) {
					foreach (explode("|", $rutas) as $row) {
						$dato = buscar_propiedad($obj, $row);
						if ($dato) {
							break;
						}
					}
				}

				if (isset($req['billing_address'])) {
					$datosCliente = $req['billing_address'];
				} else if ($req['source_name'] == 'pos') {
					$datosCliente = $req['customer']['default_address'];
				}

				if ($datosCliente) {

					if ($rutas) {
						if ($dato) {
							$nit = $dato;
						} else {
							$nit = "CF";
						}
					} else {
						if (validar_nit($datosCliente['zip'])) {
							$nit = $datosCliente['zip']; //Para cambios.	
						} else {
							$nit = "CF";
						}
					}

					$nit = strtoupper(preg_replace("/[^0-9Kk?!]/", '', $nit));

					if (empty($nit)) {
						$nit = "CF";
					}

					$cliente = $this->Cliente_model->buscar([
						"nit" => $nit,
						"_uno" => true
					]);

					$origen = $this->Catalogo_model->getComandaOrigen([
						"_uno" => true,
						"descripcion" => "Shopify"
					]);

					$clt = new Cliente_model();
					$guardar = [
						"direccion" => $datosCliente['address1'],
						"correo" => $req['email']
					];
					if (!$cliente) {
						$guardar['nombre'] = $datosCliente['name'];
						$guardar['nit'] = $nit;
					} else {
						$clt->cargar($cliente->cliente);
					}

					if (strtolower(trim($clt->nit)) != "cf" || get_configuracion($config, "RT_ACTUALIZA_CORREO_CF", 3)) {
						$clt->guardar($guardar);
					}
					$idCliente = $clt->getPK();
				}

				$cuenta = ["nombre" => "Unica"];
				if (isset($req['shipping_address'])) {
					$cuenta['nombre'] = $req['shipping_address']['name'];
				} else if (isset($req['customer'])) {
					$cuenta['nombre'] = "{$req['customer']['first_name']} {$req['customer']['last_name']}";
				}

				$datosCta = ['nombre' => $cuenta['nombre'], 'numero' => $req['order_number']];
				$usu = $this->Usuario_model->find([
					'usuario' => 1,
					"_uno" => true
				]);
				if ($sede) {
					if ($origen) {
						if ($usu) {

							$datosFac = [
								"usuario" => 1,
								"factura_serie" => 1,
								"sede" => $sede->sede,
								"certificador_fel" => $sede->certificador_fel,
								"cliente" => $idCliente,
								"fecha_factura" => date('Y-m-d'),
								"moneda" => 1,
								"correo_receptor" => $req['email']
							];

							$turno = $this->Turno_model->getTurno([
								"sede" => $sede->sede,
								'abierto' => true,
								"_uno" => true
							]);
							$comanda = new Comanda_model();
							$datosComanda = [
								'usuario' => $usu->usuario,
								'sede' => $sede->sede,
								'estatus' => 1,
								'domicilio' => 1,
								'comanda_origen' => $origen->comanda_origen,
								'comanda_origen_datos' => json_encode($req)
							];

							$propina = false;
							$insert = false;
							$propinaMonto = 0;

							$lineItems = $req['line_items'];
							if (get_configuracion($config, 'RT_ORDER_ITEMS_FULLFILLED', 3)) {
								if (is_array($req['fulfillments'])) {
									if (count($req['fulfillments']) > 0) {
										$lineItems = $req['fulfillments'][0]['line_items'];
									}
								}
							}

							foreach ($lineItems as $row) {
								if (strtolower($row['title']) != 'tip') {
									$art = $this->Articulo_model->buscar([
										'shopify_id' => $row['variant_id'],
										'_uno' => true
									]);

									if ($art) {
										$insert = true;
									}
								}
							}
							if ($insert) {
								if ($turno) {
									$datosComanda['turno'] = $turno->turno;
									$datos['exito'] = $comanda->guardar($datosComanda);

									$cuenta = new Cuenta_model();

									if ($cuenta->cerrada == 0) {
										$datosCta['comanda'] = $comanda->comanda;
										$cuenta->guardar($datosCta);
									}
									$total = 0;
									$exito = true;
									$descuentoArticulo = [];
									foreach ($lineItems as $row) {
										$art = $this->Articulo_model->buscar([
											'shopify_id' => $row['variant_id'],
											'_uno' => true
										]);
										if (strtolower($row['title']) != 'tip') {
											if ($art) {
												$shop_money = $row['total_discount_set']['shop_money'];
												$datosDcomanda = [
													'articulo' => $art->articulo, 'cantidad' => $row['quantity'], 'precio' => $row['price'], 'impreso' => 0, 'total' => $row['price'] * $row['quantity'], 'notas' => ''
												];
												$total += ($row['price'] * $row['quantity']);
												$det = $comanda->guardarDetalle($datosDcomanda);
												$id = '';
												if ($det) {
													if ((float)$shop_money['amount'] > 0) {
														$descuentoArticulo[] = [
															"detalle" => $det->detalle_comanda,
															"descuento" => (float)$shop_money['amount']
														];
													}
													$cuenta->guardarDetalle([
														'detalle_comanda' => $det->detalle_comanda
													]);
												} else {
													$exito = false;
													$datos['mensaje'] .= implode("\n", $comanda->getMensaje());
												}
											} else {
												$exito = false;
												$datos['mensaje'] .= "\nOcurrio un error al guardar el articulo {$row['title']} Id {$row['variant_id']}";
											}
										} else {
											$propina = true;
											$propinaMonto = $row['price'];
											$cuenta->guardar([
												"propina_monto" => $row['price']
											]);
										}
									}

									if ($propina) {
										$art = $this->Articulo_model->buscar([
											'descripcion' => 'Propina',
											'_uno' => true
										]);
										$datosDcomanda = [
											'articulo' => $art->articulo, 'cantidad' => 1, 'precio' => $propinaMonto, 'impreso' => 0, 'total' => $propinaMonto, 'notas' => ''
										];
										$total += $propinaMonto;
										$det = $comanda->guardarDetalle($datosDcomanda);
										$id = '';
										if ($det) {
											$cuenta->guardarDetalle([
												'detalle_comanda' => $det->detalle_comanda
											]);
										} else {
											$exito = false;
											$datos['mensaje'] .= "\nOcurrio un error al guardar la propina";
										}
									}

									if (isset($req['total_shipping_price_set']) && isset($req['total_shipping_price_set']['shop_money']) && $req['source_name'] != "pos") {
										$row = $req['total_shipping_price_set']['shop_money'];
										$art = $this->Articulo_model->buscar([
											'descripcion' => 'Entrega',
											'_uno' => true
										]);

										$datosDcomanda = [
											'articulo' => $art->articulo, 'cantidad' => 1, 'precio' => $row['amount'], 'impreso' => 0, 'total' => $row['amount'], 'notas' => ''
										];
										$total += ($row['amount']);
										$det = $comanda->guardarDetalle($datosDcomanda);
										$id = '';
										if ($det) {
											$cuenta->guardarDetalle([
												'detalle_comanda' => $det->detalle_comanda
											]);
											$datos['exito'] = true;
										} else {
											$datos['exito'] = false;
										}
									}

									$datos['exito'] = $exito;
									if ($datos['exito']) {
										$pagos = [];
										$descuento = 0;
										$pdescuento = 0;

										if (count($descuentoArticulo) == 0) {
											if (isset($req['discount_applications']) && is_array($req['discount_applications'])) {
												$totalProd = $total - $propinaMonto;
												if (count($req['discount_applications']) > 0) {
													foreach ($req['discount_applications'] as $desc) {
														$targetType = isset($desc['target_type']) ? strtolower($desc['target_type']) : '';
														if (strtolower($desc['value_type']) == 'percentage' && $targetType !== 'shipping_line') {
															$descuento += ($totalProd * $desc['value'] / 100);
															$pdescuento += $desc['value'];
														}
													}

													//Inicia fix para los descuentos que son por monto fijo. JA 20/08/2020.
													if (isset($req['discount_codes']) && is_array($req['discount_codes'])) {
														foreach ($req['discount_codes'] as $desc) {
															$tipos = ['fixed_amount', 'shipping'];
															if (in_array(strtolower($desc['type']), $tipos)) {
																$descuento += $desc['amount'];
																//$pdescuento += $desc['amount'];
															}
														}
													}

													$pdescuento = (float)$totalProd !== 0 ? ($descuento / $totalProd) : 0.00;
													//Fin del fix para los descuentos que son por monto fijo. JA 20/08/2020.
												}
											}
										} else {
											$shop_money = $req['total_discounts_set']['shop_money'];
											$descuento = (float) $shop_money['amount'];
										}

										if ((float) $descuento > 0) {
											$pagos[] = [
												"forma_pago" => 3,
												"monto" => $descuento
											];
										}


										array_push($pagos, [
											"forma_pago" => 1,
											"monto" => $total - $descuento
										]);

										foreach ($pagos as $pago) {
											$exito = $cuenta->cobrar((object) $pago);
										}

										if ($exito) {
											$cuenta->guardar(["cerrada" => 1]);
											if ($idCliente) {
												$fac = new Factura_model();
												$fac->guardar($datosFac);
												$fac->cargarEmpresa();
												$pimpuesto = $fac->empresa->porcentaje_iva + 1;
												foreach ($cuenta->getDetalle() as $det) {
													$det->bien_servicio = $det->articulo->bien_servicio;
													$det->articulo = $det->articulo->articulo;
													$artTmp = new Articulo_model($det->articulo);
													$det->total_ext = $det->total;

													if (count($descuentoArticulo) == 0) {
														$det->descuento = $det->total * $pdescuento;
														$det->descuento_ext = $det->total_ext * $pdescuento;
													} else {
														$det->descuento = 0;
														foreach ($descuentoArticulo as $desc) {
															if ($det->detalle_comanda == $desc["detalle"]) {
																$det->descuento += $desc["descuento"];
																$det->descuento_ext += $desc["descuento"];
															}
														}
													}

													$det->precio_unitario = $det->precio;
													$det->precio_unitario_ext = $det->precio;
													$total = $det->total - $det->descuento;
													$total_ext = $det->total_ext - $det->descuento_ext;
													if ($fac->exenta) {
														$det->monto_base = $total;
														$det->monto_base_ext = $total_ext;
													} else {
														$det->monto_base = $total / $pimpuesto;
														$det->monto_base_ext = $total_ext / $pimpuesto;
													}

													$impuesto_especial = $artTmp->getImpuestoEspecial();
													if ($impuesto_especial) {
														$det->impuesto_especial = $impuesto_especial->impuesto_especial;
														$det->porcentaje_impuesto_especial = $impuesto_especial->porcentaje;

														if ((float)$artTmp->cantidad_gravable > 0 && (float)$artTmp->precio_sugerido > 0) {
															$det->cantidad_gravable = (float)$artTmp->cantidad_gravable * (float)$det->cantidad;
															$det->precio_sugerido = $artTmp->precio_sugerido;
															$det->precio_sugerido_ext = $artTmp->precio_sugerido;
															$det->valor_impuesto_especial = $det->cantidad_gravable * (float)$artTmp->precio_sugerido * ((float)$impuesto_especial->porcentaje / 100);
															$det->valor_impuesto_especial_ext = $det->cantidad_gravable * (float)$artTmp->precio_sugerido * ((float)$impuesto_especial->porcentaje / 100);

															$det->precio_unitario = (float)$det->precio_unitario - ((float)$det->valor_impuesto_especial / (float)$det->cantidad);
															$det->precio_unitario_ext = $det->precio_unitario;

															$det->total = $det->precio_unitario * (float)$det->cantidad;
															$det->total_ext = $det->total;
															$total = $det->total;
															$total_ext = $det->total_ext;

															$det->monto_base = $total / $pimpuesto;
															$det->monto_base_ext = $total_ext / $pimpuesto;
														} else {
															$det->valor_impuesto_especial = $det->monto_base * ((float)$impuesto_especial->porcentaje / 100);
															$det->valor_impuesto_especial_ext = $det->monto_base_ext * ((float)$impuesto_especial->porcentaje / 100);
														}
													}

													$det->monto_iva = $total - $det->monto_base;
													$det->monto_iva_ext = $total_ext - $det->monto_base_ext;
													$fac->setDetalle((array) $det);
												}
												if (get_configuracion($config, "RT_FIRMA_DTE_AUTOMATICA", 3)) {
													$facturaRedondeaMontos = get_configuracion($config, "RT_FACTURA_REDONDEA_MONTOS", 3);
													$fac->firmar($facturaRedondeaMontos);
													if (!empty($fac->numero_factura)) {
														$fact = new Factura_model($fac->factura);
														$fact->guardar([
															"numero_factura" => $fac->numero_factura,
															"serie_factura" => $fac->serie_factura,
															"fel_uuid" => $fac->fel_uuid
														]);
													}
												}
											} else {
												$datos['exito'] = false;
												$datos['mensaje'] .= "\nHacen falta datos para facturacion";
											}
										}
										$datos['comanda'] = $comanda->getComanda();
									}

									if ($datos['exito']) {
										$datos['mensaje'] = "Datos Actualizados con Exito";
										$datos['comanda'] = $comanda->getComanda();
										$comanda->envioMail();
									}
								} else {
									$datos['mensaje'] = "No existe ningun turno abierto";
								}
							} else {
								$datos['mensaje'] = "No existen productos";
							}
						} else {
							$datos['mensaje'] = "Mesero Invalido";
						}
					} else {
						$datos['mensaje'] = "Origen desconocido";
					}
				} else {
					$datos['mensaje'] = "Llave invalida";
				}
			} else {
				$datos['mensaje'] = "Parametros Invalidos";
			}
		} else {
			$datos['mensaje'] = "Hacen falta datos obligatorios para continuar";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function guardar_comanda()
	{
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);

		$req = json_decode(file_get_contents('php://input'), true);

		$datos = ["exito" => false, 'mensaje' => ''];

		if (isset($_GET['key'])) {
			if ($this->input->method() == 'post') {

				$datosDb = $this->Catalogo_model->getCredenciales([
					"llave" => $_GET['key']
				]);
				$conn = [
					'host' => $datosDb->db_hostname,
					'user' => $datosDb->db_username,
					'password' => $datosDb->db_password,
					'database' => $datosDb->db_database
				];
				$db = conexion_db($conn);
				$this->db = $this->load->database($db, true);

				if (isset($req["sede"])) {
					$sede = $this->Catalogo_model->getSede([
						"sede" => $req["sede"],
						"_uno" => true
					]);
				} else {
					$sede = $this->Catalogo_model->getSede([
						"admin_llave" => $_GET['key'],
						"_uno" => true
					]);
				}

				$moneda = $this->Catalogo_model->getMoneda([
					'codigo' => $req['moneda'],
					'_uno' => true
				]);

				$datosCliente = $req['cliente'];

				if ($datosCliente) {
					$nit = preg_replace("/[^0-9?!]/", '', $datosCliente['nit']);

					if (empty($nit)) {
						$nit = strtoupper(preg_replace("/[^A-Za-z?!]/", '', $datosCliente['nit']));
					}

					$datosCliente['nit'] = $nit;

					$cliente = $this->Cliente_model->buscar([
						"nit" => $nit,
						"_uno" => true
					]);

					$origen = $this->Catalogo_model->getComandaOrigen([
						"_uno" => true,
						"descripcion" => "API"
					]);

					if (!$cliente) {
						$cliente = new Cliente_model();
						$cliente->guardar([
							"nombre" => $datosCliente['nombre'] . ' ' . $datosCliente['apellidos'],
							"direccion" => ($datosCliente['direccion'] ?? 'CIUDAD'),
							"correo" => $datosCliente['correo'],
							"telefono" => $datosCliente['telefono'],
							"nit" => $nit
						]);
						$idCliente = $cliente->getPK();
						$correoReceptor = $datosCliente['correo'];
					} else {
						$idCliente = $cliente->cliente;
						$correoReceptor = $cliente->correo;
					}
				}

				$datosCta = [
					'nombre' => $datosCliente['nombre'],
					'numero' => $req['numero_orden']
				];

				$datosFac = [
					"usuario" => 1,
					"factura_serie" => 1,
					"sede" => $sede->sede,
					"certificador_fel" => 1,
					"cliente" => $idCliente,
					"fecha_factura" => date('Y-m-d'),
					"moneda" => $moneda->moneda,
					"correo_receptor" => $correoReceptor
				];
				$usu = $this->Usuario_model->find([
					'usuario' => 1,
					"_uno" => true
				]);

				if ($sede) {
					if ($origen) {
						if ($usu) {
							$turno = $this->Turno_model->getTurno([
								"sede" => $sede->sede,
								'abierto' => true,
								"_uno" => true
							]);

							$comanda = new Comanda_model();
							$tmpTarjeta = $req["tarjeta"];

							if (isset($req["tarjeta"]["codigo_seguridad"])) {
								unset($req["tarjeta"]["codigo_seguridad"]);
							}

							if (isset($req["tarjeta"]["anio"])) {
								unset($req["tarjeta"]["anio"]);
							}

							if (isset($req["tarjeta"]["mes"])) {
								unset($req["tarjeta"]["mes"]);
							}

							$datosComanda = [
								'usuario' => $usu->usuario,
								'sede' => $sede->sede,
								'estatus' => 1,
								'domicilio' => 1,
								'comanda_origen' => $origen->comanda_origen,
								'comanda_origen_datos' => json_encode($req)
							];

							$propina = false;
							$insert = false;
							$propinaMonto = 0;
							$menu = $this->Catalogo_model->getModulo([
								"modulo" => 4,
								"_uno" => true
							]);

							$existencia = true;
							foreach ($req['detalle'] as $row) {

								$art = $this->Articulo_model->buscarArticulo([
									'codigo' => $row['codigo'],
									'sede' => $sede->sede,
									'_uno' => true
								]);

								if ($art) {
									$insert = true;
									$articulo = new Articulo_model($art->articulo);
									$articulo->actualizarExistencia();
									if (!empty($menu)) {
										if ($existencia) {
											$existencia = $articulo->existencias >= $row['cantidad'];
										}
									}
								}
							}
							if ($insert) {
								if ($existencia) {
									if ($turno) {
										$datosComanda['turno'] = $turno->turno;
										$datos['exito'] = $comanda->guardar($datosComanda);
										if (isset($req['mesa'])) {
											$mesa = new Mesa_model($req['mesa']);
											$comanda->setMesa($req['mesa']);
											$mesa->guardar(["estatus" => 2]);
										}
										$cuenta = new Cuenta_model();
										if ($cuenta->cerrada == 0) {
											$datosCta['comanda'] = $comanda->comanda;
											$cuenta->guardar($datosCta);
										}

										$total = 0;
										$total_ext = 0;
										$exito = true;
										foreach ($req['detalle'] as $row) {
											$art = $this->Articulo_model->buscarArticulo([
												'codigo' => $row['codigo'],
												'sede' => $sede->sede,
												'_uno' => true
											]);

											if ($art) {
												$datosDcomanda = [
													'articulo' => $art->articulo, 'cantidad' => $row['cantidad'], 'precio' => $row['precio'], 'impreso' => 0, 'total' => $row['total'], 'notas' => ($row['nota'] ?? '')
												];

												$total += $row['total'];
												$total_ext += $row['total'];

												$det = $comanda->guardarDetalle($datosDcomanda);
												$id = '';
												if ($det) {
													$cuenta->guardarDetalle([
														'detalle_comanda' => $det->detalle_comanda
													]);
												} else {
													$exito = false;
													$datos['mensaje'] .= implode("\n", $comanda->getMensaje());
												}
											} else {
												$exito = false;
												$datos['mensaje'] .= "\nArtículo no entrado.";
											}
										}

										$datos['exito'] = $exito;
										if ($datos['exito']) {
											$pagos = [];
											$descuento = 0;
											$descuento_ext = 0;
											if (isset($req['descuento']) && is_array($req['descuento'])) {

												foreach ($req['descuento'] as $desc) {
													$descuento += ($total * $desc['valor'] / 100);
													$descuento_ext += ($total_ext * $desc['valor'] / 100);
												}
												$pagos[] = [
													"forma_pago" => 3,
													"monto" => $descuento
												];
											}

											$tmpCobro = [
												"forma_pago" => $req['metodo_pago']['codigo'],
												"monto" => $total - $descuento
											];

											if (isset($req['transferencia']) && !empty($req['transferencia'])) {
												$tmpCobro["documento"] = $req['transferencia']["documento"];

												if (isset($req['transferencia']["observaciones"])) {
													$tmpCobro["observaciones"] = $req['transferencia']["observaciones"];
												}
											}

											array_push($pagos, $tmpCobro);

											if (isset($tmpTarjeta['numero']) && !empty($tmpTarjeta['numero'])) {
												$this->load->library('Cobro');

												$cobro = new Cobro($cuenta->getEmpresa());
												$cobro->setTarjeta($tmpTarjeta);
												$cobro->setCliente($datosCliente);

												if (isset($req["fingerprint"])) {
													$cobro->setFingerprint($req["fingerprint"]);
												}

												$cuenta->setCobro($cobro);
											}

											$pagosContador = 0;

											foreach ($pagos as $pago) {
												if ($cuenta->cobrar((object) $pago)) {
													$pagosContador++;
												} else {
													break;
												}
											}

											$datos['exito'] = count($pagos) == $pagosContador;

											if ($datos['exito']) {
												$cuenta->guardar(["cerrada" => 1]);
												$datos['pagos'] = [];

												foreach ($cuenta->get_forma_pago() as $fpago) {
													$tmpPago = [
														"monto" => $fpago->monto,
														"documento" => $fpago->documento,
														"forma_pago" => $fpago->forma_pago,
														"observaciones" => $fpago->observaciones
													];

													if (!empty($fpago->tarjeta_respuesta)) {
														$tmpPago["tarjeta_respuesta"] = json_decode($fpago->tarjeta_respuesta);
													}

													$datos['pagos'][] = $tmpPago;
												}

												$fac = new Factura_model();
												$fac->guardar($datosFac);
												$fac->cargarEmpresa();
												$pimpuesto = $fac->empresa->porcentaje_iva + 1;
												$detalle = $cuenta->getDetalle([
													"descuento" => 1
												]);

												foreach ($cuenta->getDetalle() as $det) {
													$det->bien_servicio = $det->articulo->bien_servicio;
													$det->articulo = $det->articulo->articulo;
													$det->precio_unitario = $det->precio;
													$det->precio_unitario_ext = $det->precio;
													if ($det->descuento == 1) {
														$det->descuento = 0; // $det->total * $pdescuento/100;	
														$det->descuento_ext = 0; // $det->total * $pdescuento/100;	
													} else {
														$det->descuento = 0;
														$det->descuento_ext = 0;
													}
													$det->total_ext = $det->total;
													$total = $det->total - $det->descuento;
													$total_ext = $det->total_ext - $det->descuento_ext;
													if ($fac->exenta) {
														$det->monto_base = $total;
														$det->monto_base_ext = $total_ext;
													} else {
														$det->monto_base = $total / $pimpuesto;
														$det->monto_base_ext = $total_ext / $pimpuesto;
													}
													$det->monto_iva = $total - $det->monto_base;
													$det->monto_iva_ext = $total_ext - $det->monto_base_ext;
													$fac->setDetalle((array) $det);
												}
											} else {
												$datos['mensaje'] = implode("\n", $cuenta->getMensaje());
											}
										}

										if ($datos['exito']) {
											$datos['mensaje'] = "Datos Actualizados con Exito";
											$datos['comanda'] = $comanda->getComanda();

											$sed = $comanda->getSede();
											$emp = $sed->getEmpresa();

											$datos["sede"] = [
												"nombre" => $sed->nombre,
												"direccion" => $sed->direccion,
												"telefono" => $sed->telefono,
												"correo" => $sed->correo,
												"empresa" => [
													"nombre" => $emp->nombre_comercial,
													"nit" => $emp->nit
												]
											];
										}
									} else {
										$datos['mensaje'] = "No existe ningun turno abierto";
									}
								} else {
									$datos['mensaje'] = "No hay existencia suficiente";
								}
							} else {
								$datos['mensaje'] = "No existen productos";
							}
						} else {
							$datos['mensaje'] = "Mesero Invalido";
						}
					} else {
						$datos['mensaje'] = "Origen desconocido";
					}
				} else {
					$datos['mensaje'] = "Llave invalida";
				}
			} else {
				$datos['mensaje'] = "Parametros Invalidos";
			}
		} else {
			$datos['mensaje'] = "Hacen falta datos obligatorios para continuar";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function comanda()
	{
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);

		$req = json_decode(file_get_contents('php://input'), true);

		$datos = ["exito" => false, 'mensaje' => ''];

		if (isset($req['key'], $req['sede'], $req['cliente'], $req['metodo_pago'], $req['detalle'])) {
			if ($this->input->method() == 'post') {

				$datosDb = $this->Catalogo_model->getCredenciales([
					"llave" => $req['key']
				]);
				$conn = [
					'host' => $datosDb->db_hostname,
					'user' => $datosDb->db_username,
					'password' => $datosDb->db_password,
					'database' => $datosDb->db_database
				];
				$db = conexion_db($conn);
				$this->db = $this->load->database($db, true);


				$sede = $this->Catalogo_model->getSede([
					"sede" => $req["sede"],
					"_uno" => true
				]);


				$moneda = $this->Catalogo_model->getMoneda([
					'codigo' => $req['moneda'],
					'_uno' => true
				]);

				$datosCliente = $req['cliente'];

				if ($datosCliente) {
					$nit = preg_replace("/[^0-9?!]/", '', $datosCliente['nit']);

					if (empty($nit)) {
						$nit = strtoupper(preg_replace("/[^A-Za-z?!]/", '', $datosCliente['nit']));
					}

					$datosCliente['nit'] = $nit;

					$cliente = $this->Cliente_model->buscar([
						"nit" => $nit,
						"_uno" => true
					]);

					$origen = $this->Catalogo_model->getComandaOrigen([
						"_uno" => true,
						"descripcion" => "API"
					]);

					if (!$cliente) {
						$cliente = new Cliente_model();
						$cliente->guardar([
							"nombre" => $datosCliente['nombre'] . ' ' . $datosCliente['apellidos'],
							"direccion" => ($datosCliente['direccion'] ?? 'CIUDAD'),
							"correo" => $datosCliente['correo'],
							"telefono" => $datosCliente['telefono'],
							"nit" => $nit
						]);
						$idCliente = $cliente->getPK();
						$correoReceptor = $datosCliente['correo'];
					} else {
						$idCliente = $cliente->cliente;
						$correoReceptor = $cliente->correo;
					}
				}

				$datosCta = [
					'nombre' => $datosCliente['nombre'],
					'numero' => $req['numero_orden']
				];

				$datosFac = [
					"usuario" => 1,
					"factura_serie" => 1,
					"sede" => $sede->sede,
					"certificador_fel" => 1,
					"cliente" => $idCliente,
					"fecha_factura" => date('Y-m-d'),
					"moneda" => $moneda->moneda,
					"correo_receptor" => $correoReceptor
				];
				$usu = $this->Usuario_model->find([
					'usuario' => 1,
					"_uno" => true
				]);

				if ($sede) {
					if ($origen) {
						if ($usu) {
							$turno = $this->Turno_model->getTurno([
								"sede" => $sede->sede,
								'abierto' => true,
								"_uno" => true
							]);

							$comanda = new Comanda_model();

							$datosComanda = [
								'usuario' => $usu->usuario,
								'sede' => $sede->sede,
								'estatus' => 1,
								'domicilio' => 1,
								'comanda_origen' => $origen->comanda_origen,
								'comanda_origen_datos' => json_encode($req),
								'notas_generales' => isset($req['notas_generales']) ? $req['notas_generales'] : null
							];

							$propina = false;
							$insert = false;
							$propinaMonto = 0;
							$menu = $this->Catalogo_model->getModulo([
								"modulo" => 4,
								"_uno" => true
							]);

							$existencia = true;
							foreach ($req['detalle'] as $row) {

								$art = $this->Articulo_model->buscarArticulo([
									'codigo' => $row['codigo'],
									'sede' => $sede->sede,
									'_uno' => true
								]);

								if ($art) {
									$insert = true;
									$articulo = new Articulo_model($art->articulo);
									$articulo->actualizarExistencia();
									if (!empty($menu)) {
										if ($existencia) {
											$existencia = $articulo->existencias >= $row['cantidad'];
										}
									}
								}
							}
							if ($insert) {
								if ($existencia) {
									if ($turno) {
										$datosComanda['turno'] = $turno->turno;
										$datos['exito'] = $comanda->guardar($datosComanda);
										if (isset($req['mesa'])) {
											$mesa = new Mesa_model($req['mesa']);
											$comanda->setMesa($req['mesa']);
											$mesa->guardar(["estatus" => 2]);
										}
										$cuenta = new Cuenta_model();
										if ($cuenta->cerrada == 0) {
											$datosCta['comanda'] = $comanda->comanda;
											$cuenta->guardar($datosCta);
										}

										$total = 0;
										$exito = true;
										foreach ($req['detalle'] as $row) {
											$art = $this->Articulo_model->buscarArticulo([
												'codigo' => $row['codigo'],
												'sede' => $sede->sede,
												'_uno' => true
											]);

											if ($art) {
												$datosDcomanda = [
													'articulo' => $art->articulo, 'cantidad' => $row['cantidad'], 'precio' => $row['precio'], 'impreso' => 0, 'total' => $row['total'], 'notas' => ($row['nota'] ?? ''), 'receta' => verDato($row, "receta")
												];

												$total += $row['total'];
												if (verDato($row, "combo")) {
													$det = $comanda->guardarDetalleCombo($datosDcomanda, $cuenta->getPK());
												} else {
													$det = $comanda->guardarDetalle($datosDcomanda);
													$id = '';
													if ($det) {
														$cuenta->guardarDetalle([
															'detalle_comanda' => $det->detalle_comanda
														]);
													} else {
														$exito = false;
														$datos['mensaje'] .= implode("\n", $comanda->getMensaje());
													}
												}
											} else {
												$exito = false;
												$datos['mensaje'] .= "\nArtículo no entrado.";
											}
										}

										$datos['exito'] = $exito;
										if ($datos['exito']) {
											$pagos = [];
											$descuento = 0;
											if (isset($req['descuento']) && is_array($req['descuento'])) {

												foreach ($req['descuento'] as $desc) {
													$descuento += ($total * $desc['valor'] / 100);
												}
												$pagos[] = [
													"forma_pago" => 3,
													"monto" => $descuento
												];
											}
											$tmpCobro = [];
											foreach ($req['metodo_pago'] as $mpago) {
												$tmpCobro[] = (object) [
													"forma_pago" => $mpago['codigo'],
													"monto" => $mpago['monto']
												];
											}

											$pagos = array_merge($pagos, $tmpCobro);

											$pagosContador = 0;

											foreach ($pagos as $pago) {
												if ($cuenta->cobrar((object) $pago)) {
													$pagosContador++;
												} else {
													break;
												}
											}

											$datos['exito'] = count($pagos) == $pagosContador;

											if ($datos['exito']) {
												$cuenta->guardar(["cerrada" => 1]);

												$fac = new Factura_model();
												$fac->guardar($datosFac);
												$fac->cargarEmpresa();
												$pimpuesto = $fac->empresa->porcentaje_iva + 1;
												$detalle = $cuenta->getDetalle([
													"descuento" => 1
												]);

												foreach ($cuenta->getDetalle() as $det) {
													$det->bien_servicio = $det->articulo->bien_servicio;
													$det->articulo = $det->articulo->articulo;
													$det->precio_unitario = $det->precio;
													$det->precio_unitario_ext = $det->precio;
													if ($det->descuento == 1) {
														$det->descuento = 0; // $det->total * $pdescuento/100;	
														$det->descuento_ext = 0; // $det->total * $pdescuento/100;	
													} else {
														$det->descuento = 0;
														$det->descuento_ext = 0;
													}
													$det->total_ext = $det->total;
													$total = $det->total - $det->descuento;
													$total_ext = $det->total_ext - $det->descuento_ext;
													if ($fac->exenta) {
														$det->monto_base = $total;
														$det->monto_base_ext = $total_ext;
													} else {
														$det->monto_base = $total / $pimpuesto;
														$det->monto_base_ext = $total_ext / $pimpuesto;
													}
													$det->monto_iva = $total - $det->monto_base;
													$det->monto_iva_ext = $total_ext - $det->monto_base_ext;
													$fac->setDetalle((array) $det);
												}
											} else {
												$datos['mensaje'] = implode("\n", $cuenta->getMensaje());
											}
										}

										if ($datos['exito']) {
											$datos['mensaje'] = "Datos Actualizados con Exito";
											$datos['comanda'] = $comanda->getComanda();
										}
									} else {
										$datos['mensaje'] = "No existe ningun turno abierto";
									}
								} else {
									$datos['mensaje'] = "No hay existencia suficiente";
								}
							} else {
								$datos['mensaje'] = "No existen productos";
							}
						} else {
							$datos['mensaje'] = "Mesero Invalido";
						}
					} else {
						$datos['mensaje'] = "Origen desconocido";
					}
				} else {
					$datos['mensaje'] = "Llave invalida";
				}
			} else {
				$datos['mensaje'] = "Parametros Invalidos";
			}
		} else {
			$datos['mensaje'] = "Hacen falta datos obligatorios para continuar";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function set_producto()
	{
		$this->load->model(['Categoria_model', 'Cgrupo_model']);

		$datos = ["exito" => false, 'mensaje' => ''];

		if (isset($_GET['key'])) {
			if ($this->input->method() == 'post') {

				$req = json_decode(file_get_contents('php://input'), true);
				$cat = new Categoria_model();
				$cgrupo = new Cgrupo_model();

				$datosDb = $this->Catalogo_model->getCredenciales([
					"llave" => $_GET['key']
				]);

				$conn = [
					'host' => $datosDb->db_hostname,
					'user' => $datosDb->db_username,
					'password' => $datosDb->db_password,
					'database' => $datosDb->db_database
				];

				$db = conexion_db($conn);
				$this->db = $this->load->database($db, true);

				$sede = $this->Catalogo_model->getSede([
					"admin_llave" => $_GET['key'],
					"_uno" => true
				]);

				$tmpcat = $this->Categoria_model->buscar([
					'descripcion' => $req['vendor'],
					"sede" => $sede->sede,
					'_uno' => true
				]);

				if ($tmpcat) {
					$cat->cargar($tmpcat->categoria);
				} else {
					$cat->guardar([
						"descripcion" => $req['vendor'],
						"sede" => $sede->sede,
					]);
				}

				$grupo = $this->Cgrupo_model->buscar([
					"categoria" => $cat->getPK(),
					"descripcion" => $req['tags'],
					"_uno" => true
				]);

				if ($grupo) {
					$cgrupo->cargar($grupo->categoria_grupo);
				} else {
					$cgrupo->guardar([
						"categoria" => $cat->getPK(),
						"descripcion" => $req['tags']
					]);
				}

				if (isset($req['variants'])) {
					foreach ($req['variants'] as $row) {
						$desc = $req['title'];
						if (count($req['variants']) > 1) {
							$desc .= " {$row['title']}";
						}

						$args = [
							"categoria_grupo" => $cgrupo->getPK(),
							"presentacion" => 1,
							"descripcion" => $desc,
							"precio" => $row['price'],
							"bien_servicio" => "B",
							"existencias" => 0,
							"shopify_id" => $row['id']
						];

						$tmpArt = $this->Articulo_model->buscar([
							"shopify_id" => $row['id'],
							"_uno" => true
						]);

						$art = new Articulo_model();
						if ($tmpArt) {
							$art->cargar($tmpArt->articulo);
						}

						$datos['exito'] = $art->guardar($args);
					}
				}

				if ($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con exito";
				} else {
					$datos['mensaje'] = "Ocurrio un erro al guardar el producto";
				}
			} else {
				$datos['mensaje'] = "Parametros Invalidos";
			}
		} else {
			$datos['mensaje'] = "Hacen falta datos obligatorios para continuar";
		}

		$this->output->set_output(json_encode($datos));
	}

	public function test()
	{
		$nit = "CF";
		$nit = strtoupper(preg_replace("/[CF]!|[^0-9Kk?!]/", '', $nit));
		echo "<pre>";
		print_r($nit);
		echo "</pre>";
	}

	public function fix_data_arts()
	{
		$vpnArr = [
			3983 => 'CON  JUGO CRANBERRY',
			3982 => 'CON  JUGO NARANJA',
			3989 => 'CON  MARTINI',
			3991 => 'CON  MARTINI LYCHEE',
			3990 => 'CON  MARTINI MANZANA',
			3918 => 'CON AGUA',
			4274 => 'CON AGUA',
			3454 => 'CON CAMARON GRANDE',
			3377 => 'CON CAMARONCITOS',
			3452 => 'CON CHAMPIÑON',
			3912 => 'CON COCA COLA',
			3925 => 'CON COLA',
			3524 => 'CON CREMA',
			3590 => 'CON ESPINACA GRATINADA',
			3525 => 'CON GELATO',
			4003 => 'CON GREY GOOSE',
			4622 => 'CON HIERBABUENA',
			3853 => 'CON MINERAL',
			4567 => 'CON O SIN ANACATES SALSA',
			3920 => 'CON PEPSI COLA',
			3284 => 'CON POLLO',
			4587 => 'CON POLLO Y CHAMPIÑON',
			3852 => 'CON QUINA',
			3636 => 'CON REDBULL',
			3662 => 'CON SANGRIA',
			3984 => 'CON SEVEN LIGHT',
			3919 => 'CON SEVEN UP',
			3862 => 'CON SODA',
			4275 => 'CON SODA',
			3635 => 'CON STRIKE',
			3861 => 'CON TONICA',
			3630 => 'CON TORTILLAS',
			3408 => 'FILET MIGÑON  10 ONZ',
			4092 => 'FILET MIGNON MARCHAND VIN PORCINI',
			4121 => 'OPCION  LASAGNA',
			4119 => 'OPCION -D- FETT ALFREDO',
			4636 => 'OPCION 9WINE CHARDONAY',
			3711 => 'OPCION ABSOLUT',
			4245 => 'OPCION AGUA MINERAL',
			4194 => 'OPCION AGUA PURA',
			3818 => 'OPCION AMARETTO',
			4385 => 'OPCION AMBO PINOT GRIGIO',
			4582 => 'OPCION ANACATES',
			4598 => 'OPCION ANACATES REY',
			3716 => 'OPCION ANT CERV',
			4400 => 'OPCION ARDUINI CUVÉE BLANC BRUT',
			3574 => 'OPCION ARROZ',
			4394 => 'OPCION AVELEDA ALVARINHO',
			4396 => 'OPCION AVELEDA VINHO VERDE',
			4346 => 'OPCION BALBAS VERDEJO',
			4348 => 'OPCION BOHIGAS BRUT CAVA RESERVA',
			4420 => 'OPCION BOHIGAS BRUT RESERVA',
			4350 => 'OPCION BOHIGAS XAREL-LO',
			3287 => 'OPCION BOQUITA CAMARONCITO',
			3229 => 'OPCIÓN BOQUITA NACHO',
			3302 => 'OPCION BOQUITA PATE',
			3307 => 'OPCION BOQUITA POLLO',
			3278 => 'OPCION BOQUITA STEAK',
			3235 => 'OPCIÓN BOQUITA TORT',
			3282 => 'OPCION BOQUITA TORTELLONI',
			4494 => 'OPCION BORDEAUX',
			4657 => 'OPCION BORSAO TRES PICOS',
			4203 => 'OPCION BOT AGUA ZENTRO',
			3917 => 'OPCION BOTRAN 12 AÑOS',
			3924 => 'OPCION BOTRAN 15 AÑOS',
			3927 => 'OPCION BOTRAN RES BLANCO',
			3929 => 'OPCION BOTRAN SOLERA',
			4661 => 'OPCION BOUCHARD PINOT NOIR',
			4024 => 'OPCION BOURBON',
			3577 => 'OPCION BROCOLI',
			4039 => 'OPCION BUCHANANS 12 AÑOS',
			4037 => 'OPCION BUCHANANS 18 AÑOS',
			4181 => 'OPCION BURGERS Q75',
			4112 => 'OPCION BURRATA',
			4451 => 'OPCION C Y T DON MELCHOR CABERNET SAUV. 2002',
			3726 => 'OPCION CABRO',
			3778 => 'OPCION CABRO OKT',
			3729 => 'OPCION CADEJO',
			4207 => 'OPCION CAFÉ CHEMEX',
			4215 => 'OPCION CAFÉ CHEMEX GEISHA',
			3418 => 'OPCION CALAMAR',
			4135 => 'OPCION CAMARONES',
			4219 => 'OPCION CAPUCCINO',
			3824 => 'OPCION CARAJILLO',
			3884 => 'OPCION CARAJILLO COLONIAL',
			4663 => 'OPCION CARNIVOR CABERNET SAUVIGNON',
			4445 => 'OPCION CASA SILVA RESERVA CABERNET ROSSE',
			4656 => 'OPCION CASA SILVA RESERVA CARMENERE',
			4447 => 'OPCION CASA SILVA RESERVA MALBEC',
			4449 => 'OPCION CASA SILVA RESERVA MERLOT',
			4424 => 'OPCION CATENA MALBEC',
			3582 => 'OPCION CEBOLLA',
			3720 => 'OPCION CERV ART',
			4320 => 'OPCION CHAMPAGNE DOM PERIGNON',
			4324 => 'OPCION CHAMPAGNE MOET CHANDON',
			3423 => 'OPCION CHAMPIÑONES',
			4499 => 'OPCION CHATEAU',
			3749 => 'OPCION CHELADA CABRO',
			3754 => 'OPCION CHELADA GALLO',
			3760 => 'OPCION CHELADA MOZA',
			4041 => 'OPCION CHIVAS REGAL 12',
			4236 => 'OPCION COCA COLA',
			3804 => 'OPCION COG V.S',
			3807 => 'OPCION COG V.S.O.P',
			4474 => 'OPCION CUNE RIOJA CRIANZA',
			4171 => 'OPCION D ENSALADA',
			4165 => 'OPCION D GUARNICIONES',
			4158 => 'OPCION D POSTRE',
			4125 => 'OPCION D- LINGUINE PESTO',
			4127 => 'OPCION D- RISOTTO',
			4146 => 'OPCION D- SOCKEYE SALMON',
			4431 => 'OPCION D. PAULA ESTATE CABERNET SAUVIGNON',
			4435 => 'OPCION D. PAULA LOS CARDOS CABERNET SAUV',
			4615 => 'OPCION DALMORE SINGLE MALT 12',
			4619 => 'OPCION DALMORE SINGLE MALT 15',
			4528 => 'OPCION DECOY',
			4405 => 'OPCION DECOY ROSE WINE',
			4407 => 'OPCION DECOY SAUVIGNON BLANC',
			4073 => 'OPCION DELMONICO ASADO',
			4454 => 'OPCION DOÑA DOMINGA RESERVA CARMENERE',
			4429 => 'OPCION DOÑA PAULA ESTATE BLACK EDITION',
			4433 => 'OPCION DOÑA PAULA ESTATE MALBEC',
			4514 => 'OPCION DONNA FUGATA SHERAZADE SICILIA DOC NERO D-AVOLA',
			4516 => 'OPCION DONNNA FUGATA SADARA',
			4336 => 'OPCION EMILIANA SAUVIGNON BLANC',
			4476 => 'OPCION EMILIO MORO',
			4087 => 'OPCION ENTRANA 10 Onz.',
			3589 => 'OPCIÓN ESPINACA',
			4224 => 'OPCION EXPRESSO',
			4240 => 'OPCION FANTA',
			3833 => 'OPCION FERNET',
			3451 => 'OPCION FETT. ALFREDO',
			3456 => 'OPCION FETT. CON SALSA',
			3460 => 'OPCION FETT. DIVINGO',
			3463 => 'OPCION FETTUCCINE ALFREDO',
			4079 => 'OPCION FILET MIGNON',
			4480 => 'OPCION FINCA VILLACRECES PRUNO',
			4482 => 'OPCION FLACO TEMPRANILLO',
			4369 => 'OPCION FORTANT GRENACHE ROSE',
			4639 => 'OPCION FUENTESECA SAUVIGNON BLANC',
			4520 => 'OPCION GABBIANO CHIANTI',
			3738 => 'OPCION GALLO',
			4503 => 'OPCION GERARD BERTRAND LANGUEDOC',
			3851 => 'OPCION GIN BEEFEATER',
			3856 => 'OPCION GIN BOM Y SAP',
			3860 => 'OPCION GIN HENDRICKS',
			3864 => 'OPCION GIN MARTINI',
			3871 => 'OPCION GIN TANQUERAY',
			3873 => 'OPCION GIN TANQUERAY TEN',
			4043 => 'OPCION GLENLIVET 12 YRS',
			4353 => 'OPCION GOTAS DE MAR',
			3375 => 'OPCION HUEVOS BENEDICTINOS',
			4256 => 'OPCION INDI',
			4355 => 'OPCION IZADI LARROSA -ROSE-',
			4422 => 'OPCION IZADI LARROSA GARNACHA',
			4047 => 'OPCION J.W. ETIQUETA NEGRA',
			4049 => 'OPCION J.W. ETIQUETA ROJA',
			4045 => 'OPCION JACK DANIELS',
			3639 => 'OPCION JAGER. SPICE',
			3634 => 'OPCION JAGERMAISTER',
			3660 => 'OPCION JAKES ULT',
			3438 => 'OPCION JAMON IBERICO',
			3431 => 'OPCION JAMON JOSELITO',
			3641 => 'OPCION JEREZ',
			4484 => 'OPCION JUAN GIL MONASTRELL SILVER 2013',
			4268 => 'OPCION JUGO DE TOMATE',
			4539 => 'OPCION JULIUSSPITAL',
			3664 => 'OPCION KIR',
			4437 => 'OPCION L.B. GALA 1 MALBEC-PETIT VERDOT-TANNAT',
			4440 => 'OPCION L.B. GALA 4 CABERNET FRANC-MALBEC',
			4372 => 'OPCION LA FLEUR RAINAISSANCE SAUTERNES 2011',
			4357 => 'OPCION LA VAL ALBARIÑO',
			4149 => 'OPCION LANGOSTA',
			4273 => 'OPCION LIMONADA',
			3468 => 'OPCION LINGUINE',
			4081 => 'OPCION LOMITO ASADO',
			4374 => 'OPCION LOUIS CHADOT CHABLIS',
			4507 => 'OPCION LOUIS JADOT',
			4376 => 'OPCION LOUIS JADOT MACON-VILLAGES',
			4378 => 'OPCION LOUIS JADOT POUILLY-FUISSÉ',
			4328 => 'OPCION LOUIS ROEDERER',
			4035 => 'OPCION MACALLAN 12 AÑOS',
			4511 => 'OPCION MAGNUMS TOUR DE CAPET SAINT EMILION GRAND CR',
			4456 => 'OPCION MARQUES DE CASA CONCHA',
			3844 => 'OPCION MART BLANCO',
			3766 => 'OPCION MICHELADA CABRO',
			3770 => 'OPCION MICHELADA GALLO',
			3775 => 'OPCION MICHELADA MOZA',
			3319 => 'OPCION MINI CAMARONCITOS',
			3335 => 'OPCION MINI PINCHOS',
			3343 => 'OPCION MINI SANDWICH',
			3492 => 'OPCION MOJARRA',
			4140 => 'OPCION MOJARRA A LA PLANCHA',
			4460 => 'OPCION MONTES ALPHA',
			4340 => 'OPCION MONTES CHERUB ROSE OF SYRAH',
			4464 => 'OPCION MORANDE ESTATE CARMENERE',
			4344 => 'OPCION MORANDE ESTATE CHARDONNAY',
			4409 => 'OPCION MOTTO ESSENCE SAUVIGNON BLAC',
			3744 => 'OPCION MOZA',
			3788 => 'OPCION MOZA OKT',
			4277 => 'OPCION NARANJADA',
			4052 => 'OPCION OLD PARR',
			4606 => 'Opcion Omelette Jakes',
			4532 => 'OPCION ORIN SWIFT',
			3813 => 'OPCION PACHON BOTRAN',
			3601 => 'OPCION PAPA',
			4361 => 'OPCION PASION DE BOBAL ROSADO',
			4486 => 'OPCION PASION DE BOBAL TINTO',
			3523 => 'OPCION PECAN PIE',
			3475 => 'OPCION PENNE',
			4230 => 'OPCION PEPSI COLA',
			3680 => 'OPCION PICHEL',
			4280 => 'OPCION PICHEL LIMONADA',
			4282 => 'OPCION PICHEL NARANJADA',
			3686 => 'OPCION PIÑA COLADA',
			4488 => 'OPCION PINGUS P.S.I. RIBERA DEL DUERO',
			3608 => 'OPCION PLATANO',
			4065 => 'OPCION POLLO A LA PLANCHA',
			4389 => 'OPCION PRINCIPATO PINOT GRIGIO',
			4102 => 'OPCION QUESADILLA',
			3480 => 'OPCION RISOTTO',
			4524 => 'OPCION ROBERT MONDAVI PINOT NOIR',
			3909 => 'OPCION ROMARIZ',
			3931 => 'OPCION RON COLONIAL',
			3933 => 'OPCION RON ZAC CENT',
			3935 => 'OPCION RON ZAC CENT XO',
			3911 => 'OPCION RON ZAPACA',
			3692 => 'OPCION RUSO',
			4442 => 'OPCION RUTINI ENCUENTRO CABERNET SAUVIGNON',
			3846 => 'OPCION SAMBUCA',
			3696 => 'OPCION SANGRIA',
			4285 => 'OPCION SANPELLEGRINO',
			4199 => 'OPCION SANTA DELFINA',
			4332 => 'OPCION SANTA MARGHERITA BRUT ROSE',
			4644 => 'OPCION SANTA MARGHERITA PINOT GRIGIO',
			4381 => 'OPCION SAUTERNES RIEUSSEC PRIMEUR',
			4334 => 'OPCION SEGURA VIUDAS BRUT ROSE',
			4233 => 'OPCION SEVEN UP',
			4414 => 'OPCION SILVA RESERVA MERLOT',
			3563 => 'OPCION SLIDER',
			4290 => 'OPCION SMOOTHIE',
			3628 => 'OPCION SOPA',
			3626 => 'OPCION SOPA CONSOME',
			4304 => 'OPCION TE DE INFUSION',
			4294 => 'OPCION TE HATSU',
			3946 => 'OPCION TEQUILA 1800 AÑ',
			3948 => 'OPCION TEQUILA 1800 CRIST',
			3950 => 'OPCION TEQUILA 1800 REP',
			3953 => 'OPCION TEQUILA BLC REV',
			3956 => 'OPCION TEQUILA CASA DRAG',
			3959 => 'OPCION TEQUILA DON JULIO 70',
			3961 => 'OPCION TEQUILA DON JULIO AÑEJO',
			3963 => 'OPCION TEQUILA DON JULIO BLANCO',
			3965 => 'OPCION TEQUILA DON JULIO REP',
			3968 => 'OPCION TEQUILA HERRADURA AÑEJO',
			3970 => 'OPCION TEQUILA HERRADURA BLANCO',
			3972 => 'OPCION TEQUILA HERRADURA REPOSADO',
			3944 => 'OPCION TEQUILA PAT SILV',
			3975 => 'OPCION TEQUILA PATRON REPOSADO',
			4392 => 'OPCION TORRESELLA PINOT GRIGIO VENEZIA',
			4403 => 'OPCION TORRESELLA PROSECCO',
			3500 => 'OPCION TRUCHA',
			4363 => 'OPCION TXOMIN ETXANIZ ROSE',
			3485 => 'OPCION ULTIMATE',
			4658 => 'OPCION ULTREIA ST. JACQUES MENCIA',
			3894 => 'OPCION VINO COPA',
			3898 => 'OPCION VINO LOS CARDOS',
			3704 => 'OPCION VODKA',
			3981 => 'OPCION VODKA ABSOLUT',
			3986 => 'OPCION VODKA ABSOLUT ELYX',
			3988 => 'OPCION VODKA BELUGA',
			3994 => 'OPCION VODKA FINLANDIA',
			3996 => 'OPCION VODKA GREY GOOSE',
			4000 => 'OPCION VODKA KETEL ONE',
			4002 => 'OPCION VODKA LYCHEE MARTINI',
			4006 => 'OPCION VODKA MARTINI',
			4015 => 'OPCION VODKA PRAVDA',
			4017 => 'OPCION VODKA STOLICHNAYA',
			4019 => 'OPCION VODKA STOLICHNAYA ELIT',
			4021 => 'OPCION VODKA TITOS',
			4029 => 'OPCION WHISKEY CHIVAS 18',
			4031 => 'OPCION WHISKEY J.W. GOLD RESERVA',
			4033 => 'OPCION WHISKEY J.W. PLATINUM',
			4613 => 'OPCION WHISKY JOHNNY WALKER ETIQUETA NEGRA',
			4383 => 'OPCION WHISPERING ANGEL',
			4055 => 'OPCION WILD TURKEY BOURBON',
			3877 => 'OPCION XIBAL',
			3937 => 'OPCION ZACAPA ROYAL',
		];

		$prodArr = [
			3609 => 'CON AGUA',
			3608 => 'CON AGUA',
			3610 => 'CON CAMARON GRANDE',
			3611 => 'CON CAMARONCITOS',
			3612 => 'CON CHAMPIÑON',
			3613 => 'CON COCA COLA',
			3614 => 'CON COLA',
			3615 => 'CON CREMA',
			3616 => 'CON ESPINACA GRATINADA',
			3617 => 'CON GELATO',
			3618 => 'CON GREY GOOSE',
			3619 => 'CON HIERBABUENA',
			3620 => 'CON MINERAL',
			3621 => 'CON O SIN ANACATES SALSA',
			3622 => 'CON PEPSI COLA',
			3623 => 'CON POLLO',
			3624 => 'CON POLLO Y CHAMPIÑON',
			3625 => 'CON QUINA',
			3626 => 'CON REDBULL',
			3627 => 'CON SANGRIA',
			3628 => 'CON SEVEN LIGHT',
			3629 => 'CON SEVEN UP',
			3631 => 'CON SODA',
			3630 => 'CON SODA',
			3632 => 'CON STRIKE',
			3633 => 'CON TONICA',
			3634 => 'CON TORTILLAS',
			3603 => 'CON  JUGO CRANBERRY',
			3604 => 'CON  JUGO NARANJA',
			3605 => 'CON  MARTINI',
			3606 => 'CON  MARTINI LYCHEE',
			3607 => 'CON  MARTINI MANZANA',
			3735 => 'FILET MIGNON MARCHAND VIN PORCINI',
			3734 => 'FILET MIGÑON  10 ONZ',
			3978 => 'OPCION -D- FETT ALFREDO',
			3979 => 'OPCION 9WINE CHARDONAY',
			3980 => 'OPCION ABSOLUT',
			3981 => 'OPCION AGUA MINERAL',
			3982 => 'OPCION AGUA PURA',
			3983 => 'OPCION AMARETTO',
			3984 => 'OPCION AMBO PINOT GRIGIO',
			3985 => 'OPCION ANACATES',
			3986 => 'OPCION ANACATES REY',
			3987 => 'OPCION ANT CERV',
			3988 => 'OPCION ARDUINI CUVÉE BLANC BRUT',
			3989 => 'OPCION ARROZ',
			3990 => 'OPCION AVELEDA ALVARINHO',
			3991 => 'OPCION AVELEDA VINHO VERDE',
			3992 => 'OPCION BALBAS VERDEJO',
			3993 => 'OPCION BOHIGAS BRUT CAVA RESERVA',
			3994 => 'OPCION BOHIGAS BRUT RESERVA',
			3995 => 'OPCION BOHIGAS XAREL-LO',
			3996 => 'OPCION BOQUITA CAMARONCITO',
			3997 => 'OPCIÓN BOQUITA NACHO',
			3998 => 'OPCION BOQUITA PATE',
			3999 => 'OPCION BOQUITA POLLO',
			4000 => 'OPCION BOQUITA STEAK',
			4001 => 'OPCIÓN BOQUITA TORT',
			4002 => 'OPCION BOQUITA TORTELLONI',
			4003 => 'OPCION BORDEAUX',
			4004 => 'OPCION BORSAO TRES PICOS',
			4005 => 'OPCION BOT AGUA ZENTRO',
			4006 => 'OPCION BOTRAN 12 AÑOS',
			4007 => 'OPCION BOTRAN 15 AÑOS',
			4008 => 'OPCION BOTRAN RES BLANCO',
			4009 => 'OPCION BOTRAN SOLERA',
			4010 => 'OPCION BOUCHARD PINOT NOIR',
			4011 => 'OPCION BOURBON',
			4012 => 'OPCION BROCOLI',
			4013 => 'OPCION BUCHANANS 12 AÑOS',
			4014 => 'OPCION BUCHANANS 18 AÑOS',
			4015 => 'OPCION BURGERS Q75',
			4016 => 'OPCION BURRATA',
			4017 => 'OPCION C Y T DON MELCHOR CABERNET SAUV. 2002',
			4018 => 'OPCION CABRO',
			4019 => 'OPCION CABRO OKT',
			4020 => 'OPCION CADEJO',
			4021 => 'OPCION CAFÉ CHEMEX',
			4022 => 'OPCION CAFÉ CHEMEX GEISHA',
			4023 => 'OPCION CALAMAR',
			4024 => 'OPCION CAMARONES',
			4025 => 'OPCION CAPUCCINO',
			4026 => 'OPCION CARAJILLO',
			4027 => 'OPCION CARAJILLO COLONIAL',
			4028 => 'OPCION CARNIVOR CABERNET SAUVIGNON',
			4029 => 'OPCION CASA SILVA RESERVA CABERNET ROSSE',
			4030 => 'OPCION CASA SILVA RESERVA CARMENERE',
			4031 => 'OPCION CASA SILVA RESERVA MALBEC',
			4032 => 'OPCION CASA SILVA RESERVA MERLOT',
			4033 => 'OPCION CATENA MALBEC',
			4034 => 'OPCION CEBOLLA',
			4035 => 'OPCION CERV ART',
			4036 => 'OPCION CHAMPAGNE DOM PERIGNON',
			4037 => 'OPCION CHAMPAGNE MOET CHANDON',
			4038 => 'OPCION CHAMPIÑONES',
			4039 => 'OPCION CHATEAU',
			4040 => 'OPCION CHELADA CABRO',
			4041 => 'OPCION CHELADA GALLO',
			4042 => 'OPCION CHELADA MOZA',
			4043 => 'OPCION CHIVAS REGAL 12',
			4044 => 'OPCION COCA COLA',
			4045 => 'OPCION COG V.S',
			4046 => 'OPCION COG V.S.O.P',
			4047 => 'OPCION CUNE RIOJA CRIANZA',
			4048 => 'OPCION D ENSALADA',
			4049 => 'OPCION D GUARNICIONES',
			4050 => 'OPCION D POSTRE',
			4051 => 'OPCION D- LINGUINE PESTO',
			4052 => 'OPCION D- RISOTTO',
			4053 => 'OPCION D- SOCKEYE SALMON',
			4054 => 'OPCION D. PAULA ESTATE CABERNET SAUVIGNON',
			4055 => 'OPCION D. PAULA LOS CARDOS CABERNET SAUV',
			4056 => 'OPCION DALMORE SINGLE MALT 12',
			4057 => 'OPCION DALMORE SINGLE MALT 15',
			4058 => 'OPCION DECOY',
			4059 => 'OPCION DECOY ROSE WINE',
			4060 => 'OPCION DECOY SAUVIGNON BLANC',
			4061 => 'OPCION DELMONICO ASADO',
			4062 => 'OPCION DOÑA DOMINGA RESERVA CARMENERE',
			4063 => 'OPCION DOÑA PAULA ESTATE BLACK EDITION',
			4064 => 'OPCION DOÑA PAULA ESTATE MALBEC',
			4065 => 'OPCION DONNA FUGATA SHERAZADE SICILIA DOC NERO D-AVOLA',
			4066 => 'OPCION DONNNA FUGATA SADARA',
			4067 => 'OPCION EMILIANA SAUVIGNON BLANC',
			4068 => 'OPCION EMILIO MORO',
			4069 => 'OPCION ENTRANA 10 Onz.',
			4070 => 'OPCIÓN ESPINACA',
			4071 => 'OPCION EXPRESSO',
			4072 => 'OPCION FANTA',
			4073 => 'OPCION FERNET',
			4074 => 'OPCION FETT. ALFREDO',
			4075 => 'OPCION FETT. CON SALSA',
			4076 => 'OPCION FETT. DIVINGO',
			4077 => 'OPCION FETTUCCINE ALFREDO',
			4078 => 'OPCION FILET MIGNON',
			4079 => 'OPCION FINCA VILLACRECES PRUNO',
			4081 => 'OPCION FLACO TEMPRANILLO',
			4082 => 'OPCION FORTANT GRENACHE ROSE',
			4083 => 'OPCION FUENTESECA SAUVIGNON BLANC',
			4084 => 'OPCION GABBIANO CHIANTI',
			4085 => 'OPCION GALLO',
			4086 => 'OPCION GERARD BERTRAND LANGUEDOC',
			4087 => 'OPCION GIN BEEFEATER',
			4088 => 'OPCION GIN BOM Y SAP',
			4089 => 'OPCION GIN HENDRICKS',
			4090 => 'OPCION GIN MARTINI',
			4091 => 'OPCION GIN TANQUERAY',
			4092 => 'OPCION GIN TANQUERAY TEN',
			4093 => 'OPCION GLENLIVET 12 YRS',
			4094 => 'OPCION GOTAS DE MAR',
			4095 => 'OPCION HUEVOS BENEDICTINOS',
			4096 => 'OPCION INDI',
			4097 => 'OPCION IZADI LARROSA -ROSE-',
			4098 => 'OPCION IZADI LARROSA GARNACHA',
			4099 => 'OPCION J.W. ETIQUETA NEGRA',
			4100 => 'OPCION J.W. ETIQUETA ROJA',
			4101 => 'OPCION JACK DANIELS',
			4102 => 'OPCION JAGER. SPICE',
			4103 => 'OPCION JAGERMAISTER',
			4104 => 'OPCION JAKES ULT',
			4105 => 'OPCION JAMON IBERICO',
			4106 => 'OPCION JAMON JOSELITO',
			4107 => 'OPCION JEREZ',
			4108 => 'OPCION JUAN GIL MONASTRELL SILVER 2013',
			4109 => 'OPCION JUGO DE TOMATE',
			4110 => 'OPCION JULIUSSPITAL',
			4111 => 'OPCION KIR',
			4112 => 'OPCION L.B. GALA 1 MALBEC-PETIT VERDOT-TANNAT',
			4113 => 'OPCION L.B. GALA 4 CABERNET FRANC-MALBEC',
			4114 => 'OPCION LA FLEUR RAINAISSANCE SAUTERNES 2011',
			4115 => 'OPCION LA VAL ALBARIÑO',
			4116 => 'OPCION LANGOSTA',
			4117 => 'OPCION LIMONADA',
			4118 => 'OPCION LINGUINE',
			4119 => 'OPCION LOMITO ASADO',
			4120 => 'OPCION LOUIS CHADOT CHABLIS',
			4121 => 'OPCION LOUIS JADOT',
			4122 => 'OPCION LOUIS JADOT MACON-VILLAGES',
			4123 => 'OPCION LOUIS JADOT POUILLY-FUISSÉ',
			4124 => 'OPCION LOUIS ROEDERER',
			4125 => 'OPCION MACALLAN 12 AÑOS',
			4126 => 'OPCION MAGNUMS TOUR DE CAPET SAINT EMILION GRAND CR',
			4127 => 'OPCION MARQUES DE CASA CONCHA',
			4128 => 'OPCION MART BLANCO',
			4129 => 'OPCION MICHELADA CABRO',
			4130 => 'OPCION MICHELADA GALLO',
			4131 => 'OPCION MICHELADA MOZA',
			4132 => 'OPCION MINI CAMARONCITOS',
			4133 => 'OPCION MINI PINCHOS',
			4134 => 'OPCION MINI SANDWICH',
			4135 => 'OPCION MOJARRA',
			4136 => 'OPCION MOJARRA A LA PLANCHA',
			4137 => 'OPCION MONTES ALPHA',
			4138 => 'OPCION MONTES CHERUB ROSE OF SYRAH',
			4139 => 'OPCION MORANDE ESTATE CARMENERE',
			4140 => 'OPCION MORANDE ESTATE CHARDONNAY',
			4141 => 'OPCION MOTTO ESSENCE SAUVIGNON BLAC',
			4142 => 'OPCION MOZA',
			4143 => 'OPCION MOZA OKT',
			4144 => 'OPCION NARANJADA',
			4145 => 'OPCION OLD PARR',
			4146 => 'Opcion Omelette Jakes',
			4147 => 'OPCION ORIN SWIFT',
			4148 => 'OPCION PACHON BOTRAN',
			4149 => 'OPCION PAPA',
			4150 => 'OPCION PASION DE BOBAL ROSADO',
			4152 => 'OPCION PASION DE BOBAL TINTO',
			4153 => 'OPCION PECAN PIE',
			4154 => 'OPCION PENNE',
			4155 => 'OPCION PEPSI COLA',
			4156 => 'OPCION PICHEL',
			4157 => 'OPCION PICHEL LIMONADA',
			4158 => 'OPCION PICHEL NARANJADA',
			4159 => 'OPCION PIÑA COLADA',
			4160 => 'OPCION PINGUS P.S.I. RIBERA DEL DUERO',
			4161 => 'OPCION PLATANO',
			4162 => 'OPCION POLLO A LA PLANCHA',
			4163 => 'OPCION PRINCIPATO PINOT GRIGIO',
			4164 => 'OPCION QUESADILLA',
			4165 => 'OPCION RISOTTO',
			4166 => 'OPCION ROBERT MONDAVI PINOT NOIR',
			4167 => 'OPCION ROMARIZ',
			4168 => 'OPCION RON COLONIAL',
			4169 => 'OPCION RON ZAC CENT',
			4170 => 'OPCION RON ZAC CENT XO',
			4171 => 'OPCION RON ZAPACA',
			4172 => 'OPCION RUSO',
			4173 => 'OPCION RUTINI ENCUENTRO CABERNET SAUVIGNON',
			4174 => 'OPCION SAMBUCA',
			4175 => 'OPCION SANGRIA',
			4176 => 'OPCION SANPELLEGRINO',
			4177 => 'OPCION SANTA DELFINA',
			4178 => 'OPCION SANTA MARGHERITA BRUT ROSE',
			4179 => 'OPCION SANTA MARGHERITA PINOT GRIGIO',
			4180 => 'OPCION SAUTERNES RIEUSSEC PRIMEUR',
			4181 => 'OPCION SEGURA VIUDAS BRUT ROSE',
			4182 => 'OPCION SEVEN UP',
			4183 => 'OPCION SILVA RESERVA MERLOT',
			4184 => 'OPCION SLIDER',
			4185 => 'OPCION SMOOTHIE',
			4186 => 'OPCION SOPA',
			4187 => 'OPCION SOPA CONSOME',
			4188 => 'OPCION TE DE INFUSION',
			4189 => 'OPCION TE HATSU',
			4190 => 'OPCION TEQUILA 1800 AÑ',
			4191 => 'OPCION TEQUILA 1800 CRIST',
			4192 => 'OPCION TEQUILA 1800 REP',
			4193 => 'OPCION TEQUILA BLC REV',
			4194 => 'OPCION TEQUILA CASA DRAG',
			4195 => 'OPCION TEQUILA DON JULIO 70',
			4196 => 'OPCION TEQUILA DON JULIO AÑEJO',
			4197 => 'OPCION TEQUILA DON JULIO BLANCO',
			4198 => 'OPCION TEQUILA DON JULIO REP',
			4199 => 'OPCION TEQUILA HERRADURA AÑEJO',
			4200 => 'OPCION TEQUILA HERRADURA BLANCO',
			4201 => 'OPCION TEQUILA HERRADURA REPOSADO',
			4202 => 'OPCION TEQUILA PAT SILV',
			4203 => 'OPCION TEQUILA PATRON REPOSADO',
			4204 => 'OPCION TORRESELLA PINOT GRIGIO VENEZIA',
			4205 => 'OPCION TORRESELLA PROSECCO',
			4206 => 'OPCION TRUCHA',
			4207 => 'OPCION TXOMIN ETXANIZ ROSE',
			4208 => 'OPCION ULTIMATE',
			4209 => 'OPCION ULTREIA ST. JACQUES MENCIA',
			4210 => 'OPCION VINO COPA',
			4211 => 'OPCION VINO LOS CARDOS',
			4212 => 'OPCION VODKA',
			4213 => 'OPCION VODKA ABSOLUT',
			4214 => 'OPCION VODKA ABSOLUT ELYX',
			4215 => 'OPCION VODKA BELUGA',
			4216 => 'OPCION VODKA FINLANDIA',
			4217 => 'OPCION VODKA GREY GOOSE',
			4218 => 'OPCION VODKA KETEL ONE',
			4219 => 'OPCION VODKA LYCHEE MARTINI',
			4220 => 'OPCION VODKA MARTINI',
			4221 => 'OPCION VODKA PRAVDA',
			4223 => 'OPCION VODKA STOLICHNAYA',
			4224 => 'OPCION VODKA STOLICHNAYA ELIT',
			4225 => 'OPCION VODKA TITOS',
			4226 => 'OPCION WHISKEY CHIVAS 18',
			4227 => 'OPCION WHISKEY J.W. GOLD RESERVA',
			4228 => 'OPCION WHISKEY J.W. PLATINUM',
			4229 => 'OPCION WHISKY JOHNNY WALKER ETIQUETA NEGRA',
			4230 => 'OPCION WHISPERING ANGEL',
			4231 => 'OPCION WILD TURKEY BOURBON',
			4232 => 'OPCION XIBAL',
			4233 => 'OPCION ZACAPA ROYAL',
			3977 => 'OPCION  LASAGNA'
		];

		$vpn = [];
		foreach ($vpnArr as $k => $v) {
			$vpn[] = (object)[
				'articulo' => $k,
				'descripcion' => $v,
				'articulo_prod' => null,
				'descripcion_prod' => null
			];
		}

		$prod = [];
		foreach ($prodArr as $k => $v) {
			$prod[] = (object)[
				'articulo' => $k,
				'descripcion' => $v,
				'usado' => false
			];
		}

		$cntVpn = count($vpn);
		$cntProd = count($prod);
		for ($i = 0; $i < $cntVpn; $i++) {
			$a = $vpn[$i];
			for ($j = 0; $j < $cntProd; $j++) {
				$b = $prod[$j];
				if (!$b->usado && strcasecmp(trim($a->descripcion), trim($b->descripcion)) == 0) {
					$a->articulo_prod = $b->articulo;
					$a->descripcion_prod = $b->descripcion;
					$b->usado = true;
					break;
				}
			}
		}

		$this->output->set_output(json_encode($vpn));
	}
}

/* End of file Api.php */
/* Location: ./application/restaurante/controllers/Api.php */