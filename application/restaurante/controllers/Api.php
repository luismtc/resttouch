<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
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
			"Cliente_model"
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function set_comanda()
	{
		$req = json_decode(file_get_contents('php://input'), true);

		$datos = ["exito" => false, 'mensaje' => ''];

		if (isset($_GET['key'])) {
			if ($this->input->method() == 'post') {
				$sede = $this->Catalogo_model->getSede([
					"admin_llave" => $_GET['key'],
					"_uno" => true
				]);

				$datosCliente = false;
				$idCliente = false;
				if (isset($req['billing_address'])) {
					$datosCliente = $req['billing_address'];					
				} else if ($req['source_name'] == 'pos') {
					$datosCliente = $req['customer']['default_address'];
				}
				if ($datosCliente) {

					$nit = preg_replace("/[^0-9?!]/",'', $datosCliente['zip']);

					if (empty($nit)) {
						$nit = strtoupper(preg_replace("/[^A-Za-z?!]/",'',$datosCliente['zip']));
					}

					$cliente = $this->Cliente_model->buscar([
						"nit" => $nit,
						"_uno" => true
					]);

					$origen = $this->Catalogo_model->getComandaOrigen([
						"_uno" => true,
						"descripcion" => "Shopify"
					]);


					if (!$cliente) {
						$clt = new Cliente_model();
						$clt->guardar([
							"nombre" => $datosCliente['name'],
							"direccion" => $datosCliente['address1'],
							"nit" => $nit
						]);
						$idCliente = $clt->getPK();
					} else {
						$idCliente = $cliente->cliente;
					}
				}

				$cuenta = ["nombre" => "Unica"];
				if (isset($req['shipping_address'])) {
					$cuenta['nombre'] = $req['shipping_address']['name'];
				} else if (isset($req['customer'])) {
					$cuenta['nombre'] = "{$req['customer']['first_name']} {$req['customer']['last_name']}";
				}

				$datosCta = ['nombre' => $cuenta['nombre'], 'numero' => $req['order_number']];
				$datosFac = [
					"usuario" => 1,
					"factura_serie" => 1,
					"sede" => 1,
					"certificador_fel" => 1,
					"cliente" => $idCliente,
					"fecha_factura" => date('Y-m-d'),
					"moneda" => 1
				];
				$usu = $this->Usuario_model->find([
					'usuario' => 1, 
					"_uno" => true
				]);

				if($sede) {
					if ($origen) {
						if ($usu) {
							$turno = $this->Turno_model->getTurno([
								"sede" => 1,
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

							foreach ($req['line_items'] as $row) {
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
									foreach ($req['line_items'] as $row) {
										$art = $this->Articulo_model->buscar([
											'shopify_id' => $row['variant_id'],
											'_uno' => true
										]);
										if (strtolower($row['title']) != 'tip') {
											if ($art) {
												$datosDcomanda = [
													'articulo' => $art->articulo
													,'cantidad' => $row['quantity']
													,'precio' => $row['price']
													,'impreso' => 0
													,'total' => $row['price'] * $row['quantity']
													,'notas' => ''
												];
												$total += ($row['price'] * $row['quantity']);
												$det = $comanda->guardarDetalle($datosDcomanda);
												$id = '';
												if ($det) {
													$cuenta->guardarDetalle([
														'detalle_comanda' => $det->detalle_comanda
													]);	
													
												} else {
													$exito = false;
													$datos['mensaje'] .= "\nOcurrio un error al guardar el detalle";	
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
											'articulo' => $art->articulo
											,'cantidad' => 1
											,'precio' => $propinaMonto
											,'impreso' => 0
											,'total' => $propinaMonto
											,'notas' => ''
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
											'articulo' => $art->articulo
											,'cantidad' => 1
											,'precio' => $row['amount']
											,'impreso' => 0
											,'total' => $row['amount']
											,'notas' => ''
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
										$exito = $cuenta->cobrar((object)[
											"forma_pago" => 1,
											"monto" => $total
										]);									

										if($exito) {
											$cuenta->guardar(["cerrada" => 1]);
											if ($idCliente) {
												$fac = new Factura_model();
												$fac->guardar($datosFac);
												$fac->cargarEmpresa();
												$pimpuesto = $fac->empresa->porcentaje_iva +1;
												foreach ($cuenta->getDetalle() as $det) {
													$det->bien_servicio = $det->articulo->bien_servicio;
													$det->articulo = $det->articulo->articulo;
													$det->precio_unitario = $det->precio;
													if ($fac->exenta) {
														$det->monto_base = $det->total;
													} else {
														$det->monto_base = number_format($det->total / $pimpuesto, 2);
													}
													$det->monto_iva = $det->total - $det->monto_base;	
													$fac->setDetalle((array) $det);
												}
											} else {
												$datos['exito'] = false;
												$datos['mensaje'] .= "\nHacen falta datos para facturacion";
											}
											
										}
										$datos['comanda'] = $comanda->getComanda();	
									} 							
										
									if($datos['exito']) {
										$datos['mensaje'] = "Datos Actualizados con Exito";
										$datos['comanda'] = $comanda->getComanda();	
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

}

/* End of file Api.php */
/* Location: ./application/restaurante/controllers/Api.php */