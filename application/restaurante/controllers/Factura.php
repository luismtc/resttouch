<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
			'Dfactura_model',
			'Usuario_model',
			'Catalogo_model',
			'Cuenta_model',
			'Dcomanda_model',
			'Dcuenta_model',
			'Factura_model',
			'Articulo_model',
			'Cliente_model',
			'Receta_model',
			'Configuracion_model',
			'Webhook_model',
			'ImpuestoEspecial_model'
		]);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}	

	public function guardar()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		$continuar = true;
		if ($this->input->method() == 'post') {
			if (isset($req['cliente']) && isset($req['moneda']) && isset($req['factura_serie'])) {
				$sede = $this->Catalogo_model->getSede(['sede' => $data->sede, '_uno' => true]);
				$clt = new Cliente_model($req['cliente']);
				$config = $this->Configuracion_model->buscar([
					"campo" => "RT_FACTURA_PROPINA",
					"_uno" => true
				]);

				foreach ($req['cuentas'] as $row) {
					$cta = new Cuenta_model($row['cuenta']);
					$empresa = $cta->getEmpresa();
					$fpago = $cta->get_forma_pago(["_sinFactura" => 1]);
					$data->sede = $empresa->sede;
					if (count($fpago) > 0) {
						$continuar = false;
					}
				}
				
				$req['usuario'] = $data->idusuario;
				$req['sede'] = $data->sede;
				$req['certificador_fel'] = $sede->certificador_fel;
				$req["correo_receptor"] = $clt->correo;
				
				if($continuar){
					$fac = new Factura_model();
					$result = $fac->guardar($req);
					$fac->cargarEmpresa();
					$pimpuesto = $fac->empresa->porcentaje_iva +1;
					if($result) {
						foreach ($req['cuentas'] as $row) {
							$cta = new Cuenta_model($row['cuenta']);
							$pdesc = $cta->get_descuento();

							foreach ($cta->getDetalle(["impreso" => 1]) as $det) {
								$det->bien_servicio = $det->articulo->bien_servicio;
								$det->articulo = $det->articulo->articulo;								
								
								$det->precio_unitario = (float)$det->precio;
								$det->total = ($det->precio_unitario * $det->cantidad) + (float)$det->monto_extra;
								// $det->total = ($det->precio_unitario * $det->cantidad);
								$det->precio_unitario = round($det->total / $det->cantidad, 2);

								$det->descuento = $pdesc > 0 ? ($det->total * $pdesc) : 0;
								
								$total = $det->total - (float)$det->descuento;

								if ($fac->exenta) {
									$det->monto_base = $total;
								} else {
									$det->monto_base = $total / $pimpuesto;
								}
								$art = new Articulo_model($det->articulo);
								$impuesto_especial = $art->getImpuestoEspecial();
								if ($impuesto_especial) {
									$det->impuesto_especial = $impuesto_especial->impuesto_especial;
									$det->porcentaje_impuesto_especial = $impuesto_especial->porcentaje;
									$det->valor_impuesto_especial = $det->monto_base * ((float)$impuesto_especial->porcentaje / 100);
								}
								$det->monto_iva = $total - $det->monto_base;	
								$fac->setDetalle((array) $det);
							}
						}
						if ($config && $config->valor == 1) {
							#Facturar Propina;
							$art = $this->Articulo_model->buscar([
								"descripcion" => "Propina",
								"_uno" => true
							]);

							$prop = $fac->getPropina();

							if (!$art) {
								$art = new Articulo_model();
								$art->guardar([
									"categoria_grupo" => 1,
									"presentacion" => 1,
									"descripcion" => "Propina",
									"mostrar_pos" => 0,
									"bien_servicio" => "B",
									"precio" => 0,
									"existencias" => 0
								]);
							}

							$total = suma_field($prop, "propina_monto");
							if ($total > 0) {
								if ($fac->exenta) {
									$monto_base = $total;
								} else {
									$monto_base = $total / $pimpuesto;
								}

								$fac->setDetalle([
									"articulo" => $art->articulo,
									"cantidad" => 1,
									"precio_unitario" => $total,
									"total" => $total,
									"monto_base" => $monto_base,
									"monto_iva" => $total - $monto_base,
									"bien_servicio" => $art->bien_servicio,
									"presentacion" => $art->presentacion
								]);
							}
						}

						if (!isset($req['sinfirma'])) {
							$fac->cargarFacturaSerie();
							$fac->cargarMoneda();
							$fac->cargarReceptor();
							$fac->cargarSede();
							$fac->cargarCertificadorFel();
							$fac->procesar_factura();
							
							$funcion = $fac->getCertificador()->metodo_factura;
							$resp = $fac->$funcion();
							$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
							if (!empty($fac->numero_factura)) {
								$webhook = $this->Webhook_model->buscar([
									"evento" => "RTEV_FIRMA_FACTURA",
									"_uno" => true
								]);

								$fact = new Factura_model($fac->factura);
								$fac->cargarSede();
								$fac->detalle = $fac->getDetalle();
								$fact->guardar([
									"numero_factura" => $fac->numero_factura,
									"serie_factura" => $fac->serie_factura,
									"fel_uuid" => $fac->fel_uuid
								]);
								if ($webhook) {
									$this->load->library('Webhook');
									if (strtolower(trim($webhook->tipo_llamada)) == "soap") {
										$req = $fac->getXmlWebhook();

									} else if(strtolower(trim($webhook->tipo_llamada)) == "json") {
										$req = "";
									}

									$web = new Webhook($webhook);
									$web->setRequest($req);
									$web->setEvento();
								}


								$datos['exito'] = true;
								$datos['mensaje'] = "Datos actualizados con exito";	
							} else {						
								$datos['mensaje'] = "Ocurrio un error al enviar la factura, intente nuevamente";			
							}
							$fac->empresa->direccion = !empty($fac->sedeFactura->direccion) ? $fac->sedeFactura->direccion : $fac->empresa->direccion;
							$datos['factura'] = $fac;
						} else {
							$datos['exito'] = true;
							$datos['mensaje'] = "Datos actualizados con exito";
						}
					} else {
						$datos['mensaje'] = "Ocurrio un error al guardar la factura, intente nuevamente";	
					}
				} else {
					$datos['mensaje'] = "La forma de pago de la cuenta no genera factura";	
				}

			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";	
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}	

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}

	public function guardar_test()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		$continuar = true;
		if ($this->input->method() == 'post') {
			if (isset($req['cliente']) && isset($req['moneda']) && isset($req['factura_serie'])) {
				$sede = $this->Catalogo_model->getSede(['sede' => $data->sede, '_uno' => true]);
				$clt = new Cliente_model($req['cliente']);
				$config = $this->Configuracion_model->buscar([
					"campo" => "RT_FACTURA_PROPINA",
					"_uno" => true
				]);

				
				$req['usuario'] = $data->idusuario;
				$req['sede'] = $data->sede;
				$req['certificador_fel'] = $sede->certificador_fel;
				$req["correo_receptor"] = $clt->correo;

				foreach ($req['cuentas'] as $row) {
					$cta = new Cuenta_model($row['cuenta']);
					$fpago = $cta->get_forma_pago(["_sinFactura" => 1]);

					if (count($fpago) > 0) {
						$continuar = false;
					}

				}
				
				if($continuar){
					$fac = new Factura_model();
					$result = $fac->guardar($req);
					$fac->cargarEmpresa();
					$pimpuesto = $fac->empresa->porcentaje_iva +1;
					if($result) {
						foreach ($req['cuentas'] as $row) {
							$cta = new Cuenta_model($row['cuenta']);
							$pdesc = $cta->get_descuento();

							foreach ($cta->getDetalle(["impreso" => 1]) as $det) {
								$det->bien_servicio = $det->articulo->bien_servicio;
								$det->articulo = $det->articulo->articulo;
								
								$det->descuento = $pdesc > 0 ? ($det->total * $pdesc) : 0;
								
								$det->precio_unitario = $det->precio;
								$total = $det->total - $det->descuento;

								if ($fac->exenta) {
									$det->monto_base = $total;
								} else {
									$det->monto_base = $total / $pimpuesto;
								}
								$art = new Articulo_model($det->articulo);
								$impuesto_especial = $art->getImpuestoEspecial();
								if ($impuesto_especial) {
									$det->impuesto_especial = $impuesto_especial->impuesto_especial;
									$det->porcentaje_impuesto_especial = $impuesto_especial->porcentaje;
									$det->valor_impuesto_especial = $det->monto_base * ((float)$impuesto_especial->porcentaje / 100);
								}
								$det->monto_iva = $total - $det->monto_base;	
								$fac->setDetalle((array) $det);
							}
						}
						if ($config && $config->valor == 1) {
							#Facturar Propina;
							$art = $this->Articulo_model->buscar([
								"descripcion" => "Propina",
								"_uno" => true
							]);

							$prop = $fac->getPropina();

							if (!$art) {
								$art = new Articulo_model();
								$art->guardar([
									"categoria_grupo" => 1,
									"presentacion" => 1,
									"descripcion" => "Propina",
									"mostrar_pos" => 0,
									"bien_servicio" => "B",
									"precio" => 0,
									"existencias" => 0
								]);
							}

							$total = suma_field($prop, "propina_monto");
							if ($total > 0) {
								if ($fac->exenta) {
									$monto_base = $total;
								} else {
									$monto_base = $total / $pimpuesto;
								}

								$fac->setDetalle([
									"articulo" => $art->articulo,
									"cantidad" => 1,
									"precio_unitario" => $total,
									"total" => $total,
									"monto_base" => $monto_base,
									"monto_iva" => $total - $monto_base,
									"bien_servicio" => $art->bien_servicio,
									"presentacion" => $art->presentacion
								]);
							}
						}
						$fac->cargarFacturaSerie();
						$fac->cargarMoneda();
						$fac->cargarReceptor();
						$fac->cargarSede();
						$fac->cargarCertificadorFel();
						$fac->procesar_factura();
						
						$funcion = $fac->getCertificador()->metodo_factura;
						$resp = $fac->$funcion();
						$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
						if (!empty($fac->numero_factura)) {
							$webhook = $this->Webhook_model->buscar([
								"evento" => "RTEV_FIRMA_FACTURA",
								"_uno" => true
							]);

							$fact = new Factura_model($fac->factura);
							$fac->cargarSede();
							$fac->detalle = $fac->getDetalle();
							$fact->guardar([
								"numero_factura" => $fac->numero_factura,
								"serie_factura" => $fac->serie_factura,
								"fel_uuid" => $fac->fel_uuid
							]);
							if ($webhook) {
								$this->load->library('Webhook');
								if (strtolower(trim($webhook->tipo_llamada)) == "soap") {
									$req = $fac->getXmlWebhook();

								} else if(strtolower(trim($webhook->tipo_llamada)) == "json") {
									$req = "";
								}

								$web = new Webhook($webhook);
								$web->setRequest($req);
								$web->setEvento();
							}


							$datos['exito'] = true;
							$datos['mensaje'] = "Datos actualizados con exito";	
						} else {						
							$datos['mensaje'] = "Ocurrio un error al enviar la factura, intente nuevamente";			
						}
						$fac->empresa->direccion = !empty($fac->sedeFactura->direccion) ? $fac->sedeFactura->direccion : $fac->empresa->direccion;
						$datos['factura'] = $fac;
					} else {
						$datos['mensaje'] = "Ocurrio un error al guardar la factura, intente nuevamente";	
					}
				} else {
					$datos['mensaje'] = "La forma de pago de la cuenta no genera factura";	
				}

			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";	
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}	

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}

	public function test($fact = null)
	{
		set_time_limit(0);
		$laFactura = $fact;
		$listaFacturas = [];

		$yaPasaron = [
			11780, 11991, 11996, 11998, 12001, 12002, 12009, 12010, 12011, 12013, 12015, 12016, 12026, 12030, 12031, 12033, 12034, 12036, 12037, 12041, 12043, 12045, 12047, 12050, 12052, 12053, 12058, 12061, 12063, 12068, 
			12069, 12070, 12071, 12074, 12081, 12082, 12083, 12086, 12087, 12090, 12093, 12101, 12105, 12106, 12107, 12108, 12114, 12117, 12129, 12138, 12140, 12143, 12152, 12159, 12166, 12169, 12171, 12174, 12181, 12190, 
			12192, 12193, 12194, 12198, 12199, 12202, 12203, 12204, 12205, 12206, 12209, 12212, 12214, 12223, 12225, 12228, 12229, 12233, 12235, 12236, 12241, 12251, 12252, 12254, 12256, 12259, 12261, 12266, 12268, 12271, 
			12273, 12274, 12275, 12277, 12283, 12287, 12302, 12309, 12326, 12336, 12338, 12341, 12344, 12347, 12351, 12353, 12356, 12366, 12367, 12371, 12372, 12378, 12379, 12381, 12392, 12396, 12397, 12408, 12412, 12415, 
			12416, 12417, 12420, 12421, 12422, 12424, 12425, 12426, 12429, 12434, 12439, 12440, 12442, 12445, 12452, 12454, 12455, 12457, 12458, 12459, 12460, 12462, 12468, 12471, 12483, 12485, 12492, 12494, 12509, 12510, 
			12513, 12532, 12541, 12554, 12555, 12559, 12562, 12564, 12566, 12577, 12595, 12611, 12621, 12622, 12626, 12633, 12637, 12652, 12662, 12668, 12669, 12676, 12679, 12688, 12691, 12694, 12696, 12698, 12708, 12712, 
			12714, 12728, 12731, 12736, 12738, 12739, 12741, 12753, 12754, 12758, 12761, 12765, 12770, 12772, 12773, 12796, 12800, 12814, 12821, 12828, 12836, 12837, 12846, 12852, 12855, 12857, 12858, 12882, 12886, 12889, 
			12890, 12894, 12904, 12907, 12928, 12929, 12931, 12936, 12944, 12950, 12951, 12964, 12970, 12975, 12982, 12983, 12989, 12993, 12997, 12999, 13003, 13011, 13013, 13016, 13018, 13023, 13032, 13040, 13046, 13050, 
			13057, 13060, 13062, 13064, 13065, 13067, 13070, 13074, 13078, 13079, 13080, 13082, 13086, 13088, 13089, 13090, 13091, 13092, 13094, 13095, 13098, 13099, 13100, 13122, 13124, 13137, 13155, 13159, 13161, 13162, 
			13164, 13167, 13171, 13176, 13184, 13186, 13192, 13200, 13201, 13208, 13210, 13216, 13218, 13221, 13237, 13244, 13249, 13250, 13255, 13256, 13261, 13279, 13290, 13300, 13301, 13308, 13320, 13322, 13327, 13330, 
			13333, 13338, 13342, 13357, 13359, 13360, 13365, 13367, 13370, 13372, 13374, 13378, 13396, 13398, 13403, 13419, 13420, 13423, 13424, 13428, 13436, 13444, 13454, 13459, 13477, 13483, 13485, 13488, 13493, 13495, 
			13501, 13504, 13506, 13510, 13512, 13529, 13536, 13538, 13540, 13541, 13556, 13561, 13564, 13573, 13590, 13601, 13602, 13605, 13606, 13610
		];

		$noPasaron = [];

		if(!isset($laFactura)) {
			$body = json_decode(file_get_contents('php://input'));
			if(isset($body->facturas)) {
				$listaFacturas = explode(',', $body->facturas);
			}
		} else {
			$listaFacturas[] = [$laFactura];
		}

		// $elxml = null;

		foreach ($listaFacturas as $qFact) {
			if(!in_array((int)$qFact, $yaPasaron)){
				try {
					$webhook = $this->Webhook_model->buscar([
						"evento" => "RTEV_FIRMA_FACTURA",
						"_uno" => true
					]);
					$this->load->library('Webhook');
					$fac = new Factura_model($qFact);
					$fac->cargarFacturaSerie();
					$fac->cargarEmpresa();
					$fac->cargarMoneda();
					$fac->cargarReceptor();
					$fac->cargarSede();
					//$fac->procesar_factura();
					//$resp = $fac->enviarDigiFact();
			
					$req = $fac->getXmlWebhook();
					// $elxml = $req;
					$client = new SoapClient("http://52.35.3.1/jk/php/ws/organization.wsdl");
			
					//$res = $client->setVenta($req);
					$web = new Webhook($webhook);
					$web->setRequest($req);
					$res = $web->setEvento();
					echo "<pre> $qFact - ";
					print_r ($res);
					echo "</pre>";				
				} catch(Exception $e) {
					// echo "<pre> $qFact - ".$e->getMessage()."</pre>";
					$noPasaron[] = $qFact;
				}
			}
		}

		// $this->output->set_content_type("application/xlm")->set_output($elxml);

		echo "<pre>NO PASARON: ";print_r($noPasaron);echo "</pre>";
	}
}

/* End of file Factura.php */
/* Location: ./application/restaurante/controllers/Factura.php */