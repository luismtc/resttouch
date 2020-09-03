<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comanda extends CI_Controller {

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
			"Receta_model",
			"Impresora_model"
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}


	function guardar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ["exito" => false];
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		if ($this->input->method() == 'post') {
			if (isset($req['mesa']) && isset($req['comanda']) && isset($req['cuentas'])) {

				$usu = $this->Usuario_model->find([
					'usuario' => $req['mesero'], 
					"_uno" => true
				]);

				if ($usu) {
					$turno = $this->Turno_model->getTurno([
						"sede" => $data->sede,
						'abierto' => true, 
						"_uno" => true
					]);
					$comanda = new Comanda_model($req['comanda']);
					$mesa = new Mesa_model($req['mesa']);
					$req['usuario'] = $data->idusuario;
					$req['sede'] = $data->sede;
					$continuar = true;

					if ($turno) {
						$req['turno'] = $turno->turno;
						if ($mesa->estatus == 2 && empty($req['comanda'])) {
							$continuar = false;
						}
						if ($continuar) {
							# $comanda->comandaenuso = 1;
							$datos['exito'] = $comanda->guardar($req);

							if (empty($req['comanda'])) {
								$comanda->setMesa($req['mesa']);
								$mesa->guardar(["estatus" => 2]);
							}

							if (count($req['cuentas']) > 0) {
								foreach ($req['cuentas'] as $row) {
									$cuenta = new Cuenta_model();

									if (isset($row['cuenta']) && !empty($row['cuenta'])) {
										$cuenta->cargar($row['cuenta']);
									} else {
										$tmpCuenta = $this->Cuenta_model->buscar([
											"nombre" => trim($row["nombre"]),
											"comanda" => $comanda->comanda,
											"_uno" => true
										]);

										if ($tmpCuenta) {
											$cuenta->cargar($tmpCuenta->cuenta);
										} else if(count($comanda->getCuentas()) == 1){

											$tmpCuenta = $this->Cuenta_model->buscar([
												"nombre" => "Unica",
												"comanda" => $comanda->comanda,
												"_uno" => true
											]);

											if ($tmpCuenta) {
												$cuenta->cargar($tmpCuenta->cuenta);
											}
										}
									}

									if ($cuenta->cerrada == 0) {
										$row['comanda'] = $comanda->comanda;
										$cuenta->guardarCuenta($row);	
									}							
								}
								$datos['exito'] = true;
							}	

							if($datos['exito']) {
								$datos['mensaje'] = "Datos Actualizados con Exito";
								$datos['comanda'] = $comanda->getComanda();	
							} else {
								$datos['mensaje'] = implode("<br>", $comanda->getMensaje());
							}	
						} else {
							$datos['mensaje'] = "La mesa ya fue abierta en otra estación, por favor actualice la pantalla.";
						}
					} else {
						$datos['mensaje'] = "No existe ningun turno abierto";
					}
				} else {
					$datos['mensaje'] = "Mesero Invalido";
				}
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function cerrar_estacion($comanda)
	{
		/*
		$datos = ["exito" => false];		
		$com = new Comanda_model($comanda);
		$com->comandaenuso = 0;
		if ($com->guardar()) {
			$datos['exito'] = true;
			$datos['mensaje'] = "Datos actualizados con exito";
		} else {			
			$datos['mensaje'] = $com->getMensaje();
		}
		*/

		$datos = ["exito" => false];
		$com = new Comanda_model($comanda);
		if($com->cierra_estacion($comanda)) {
			$datos['exito'] = true;
			$datos['mensaje'] = "Datos actualizados con exito";			
		} else {
			$datos['mensaje'] = "No se pudo habilitar la comanda $comanda. Por favor comuníquese con el administrador del sistema.";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function unir_cuentas($cuentaDe, $cuentaA) {
		$deCuenta = new Cuenta_model($cuentaDe);
		$aCuenta = new Cuenta_model($cuentaA);
		$datos = ['exito' => false];
		if ($deCuenta->cerrada == 0) {			
			if ($aCuenta->cerrada == 0) {
				$detOrigen = $deCuenta->getDetalle();				
				if (count($detOrigen) > 0) {
					foreach($detOrigen as $do) {
						$deCuenta->guardarDetalle(['cuenta_cuenta' => $cuentaA], $do->detalle_cuenta, true);
					}
					$datos['cuenta_origen'] = $deCuenta->guardarCuenta(['cerrada' => 1]);
					$datos['exito'] = true;
					$datos['mensaje'] = 'Unificación de cuentas con éxito.';
				} else {
					$datos['mensaje'] = 'No existe ningún producto para unificar en la cuenta de origen.';
				}
			} else {
				$datos['mensaje'] = 'La cuenta de destino ya está cerrada.';
			}
		} else {
			$datos['mensaje'] = 'La cuenta de origen ya está cerrada.';
		}
		$this->output->set_output(json_encode($datos));
	}

	public function trasladar_mesa($comanda, $origen, $destino) {		
		$cmd = new Comanda_model($comanda);
		$mesaOrigen = new Mesa_model($origen);
		$mesaDestino = new Mesa_model($destino);
		$mesaDestino->guardar(['estatus' => 2]);
		$cmd->trasladar_mesa($destino, $comanda);
		$mesaOrigen->guardar(['estatus' => 1]);
		$datos = ['exito' => true, 'mensaje' => 'Mesa trasladada con éxito.'];
		$this->output->set_output(json_encode($datos));
	}

	public function guardar_detalle($com, $cuenta)
	{
		$comanda = new Comanda_model($com);
		$mesa = $comanda->getMesas();
		$cuenta = new Cuenta_model($cuenta);
		$req = json_decode(file_get_contents('php://input'), true);
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$datos = ["exito" => false];

		if ($this->input->method() == 'post') {
			if ($mesa->estatus == 2) {
				if ($cuenta->cerrada == 0) {
					if (isset($req["detalle_comanda"])) {
						$dcom = new Dcomanda_model($req["detalle_comanda"]);
						$datos["exito"] = $dcom->impreso == 0;

						if ($dcom->impreso == 1) {
							if (isset($req["autorizado"]) && $req["autorizado"] == true) {
								$datos["exito"] = true;
							} else {
								$datos['mensaje'] = "El producto ya ha sido impreso, por favor cierre el panel y vuelva a entrar.";
							}

							unset($req["autorizado"]);
						}
					} else {
						$datos["exito"] = true;
					}

					if ($datos["exito"]) {
						$det = $comanda->guardarDetalle($req);
						$id = isset($req['detalle_cuenta']) ? $req['detalle_cuenta'] : '';
						if ($det) {
							$cuenta->guardarDetalle([
								'detalle_comanda' => $det->detalle_comanda
							], $id);	
							$datos['exito'] = true;
						} else {
							$datos['exito'] = false;						
						}

						if ($datos['exito']) {
							$datos['comanda'] = $comanda->getComanda();	
						} else {
							$datos['mensaje'] = implode("<br>", $comanda->getMensaje());
						}
					}
				} else {
					$datos['mensaje'] = "La cuenta ya esta cerrada";
				}
			} else {
				$datos['mensaje'] = "La mesa debe estar en estatus abierto";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function set_detalle_comanda($com, $cuenta)
	{
		$comanda = new Comanda_model($com);
		$cuenta = new Cuenta_model($cuenta);
		$data = json_decode(file_get_contents('php://input'), true);
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$datos = ["exito" => false];

		if ($this->input->method() == 'post') {
			if ($cuenta->cerrada == 0) {
				foreach ($data['articulos'] as $key => $req) {
					$art = $this->Articulo_model->buscarArticulo([
						'codigo' => $req['codigo'],
						'sede' => $comanda->sede,
						'_uno' => true
					]);

					if ($art) {
						$req["articulo"] = $art->articulo;

						unset($req["codigo"]);

						$det = $comanda->guardarDetalle($req);
						$id = isset($req['detalle_cuenta']) ? $req['detalle_cuenta'] : '';
						if ($det) {
							$cuenta->guardarDetalle([
								'detalle_comanda' => $det->detalle_comanda
							], $id);	
							$datos['exito'] = true;
						} else {
							$datos['exito'] = false;						
						}
					} else {
						$datos['mensaje'] = "Producto no encontrado en restaurante, por favor comuníquese con el mesero de turno.";
					}
				}

				if ($datos['exito']) {
					$datos['mensaje'] = "Productos agregados con éxito.";
					$datos['comanda'] = $comanda->getComanda();	
					$datos['mensaje'] = 'Detalle cuenta cargada correctamente.';	
				} else {
					$datos['mensaje'] = implode("<br>", $comanda->getMensaje());
				}

			} else {
				$datos['mensaje'] = "La cuenta ya esta cerrada";
			}
		} else {
			$datos['mensaje'] = "Error en comunicación, por favor comuníquese con el mesero de turno.";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	function get_comanda($mesa=''){
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);

		$datos = [];

		if (empty($mesa)) {			
			$tmp = $this->Comanda_model->getComandas([
				'domicilio' => 1, 
				'sede' => $data->sede
			]);

			foreach ($tmp as $row) {
				$comanda = new Comanda_model($row->comanda);
				$datos[] = $comanda->getComanda(["_usuario" => $data->idusuario]);
			}
		} else {
			$mesa = new Mesa_model($mesa);
			$tmp = $mesa->get_comanda(["estatus" => 1]);

			if ($tmp) {
				$comanda = new Comanda_model($tmp->comanda);
				$comanda->comandaenuso = 0;

				$datos = $comanda->getComanda(["_usuario" => $data->idusuario]);
				$datos->exito = true;
			}
		}

		$this->output
		->set_output(json_encode($datos));
	}

	function get_comanda_cocina() {
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$datos = [];

		$tmp = $this->Comanda_model->getComandas([
			'sede' => $data->sede,
			'cocinado' => 0
		]);

		foreach ($tmp as $row) {
			$comanda = new Comanda_model($row->comanda);
			$datos[] = $comanda->getComanda(["_usuario" => $data->idusuario, 'cocinado' => 0]);
		}

		$this->output->set_output(json_encode($datos));
	}

	public function imprimir($idCta, $pdf = 0)
	{
		$cta = new Cuenta_model($idCta);
		$com = new Comanda_model($cta->comanda);
		$req = json_decode(file_get_contents('php://input'), true);
		
		$datos = [
			'exito' => true, 
			'mensaje' => 'Datos Actualizados con exito'
		];

		if ($pdf === 0) {
			$cta->imprimirDetalle();
			$datos["comanda"] = $com->getComanda();
		} else {
			$datos["comanda"] = $com->getComanda(['impreso' => "0"]);
			$cta->imprimirDetalle();
		}

		if ($pdf === 0) {
			$this->output
			->set_output(json_encode($datos));	
		} else {
			$mpdf = new \Mpdf\Mpdf([
				'tempDir' => sys_get_temp_dir(), //produccion
				'format' => 'Legal'
			]);

			$mpdf->WriteHTML($this->load->view('impresion/comanda', $datos, true));
			$mpdf->Output("Detalle de Comandas.pdf", "D");
		}
	}

	public function cerrar_mesa($mesa = null)
	{
		$res = ["exito" => false];
		if ($this->input->method() == 'post') {
			if ($mesa !== null) {
				$_mesa = new Mesa_model($mesa);
				if ($_mesa->estatus == 2) {
					$comanda = $_mesa->get_comanda(["estatus" => 1]);
					if ($comanda) {
						$com = new Comanda_model($comanda->comanda);
						$det = $com->getDetalle();
						$cntConCantidad = 0;
						foreach($det as $d) {
							if ((float)$d->cantidad > 0) {
								$cntConCantidad++;
							}
						}
						if ($cntConCantidad == 0) {
							$_mesa->guardar(["estatus" => 1]);
							$com->guardar(["estatus" => 2]);
							$res['exito'] = true;
							$res['mensaje'] = "Datos actualizados con exito";
						} else {
							$res['mensaje'] = "La comanda no debe tener productos";
						}
					} else {
						$res['mensaje'] = "La mesa debe tener una comanda activa";
					}
				} else {
					$res['mensaje'] = "La mesa debe estar en estatus Abierto";
				}
			} else {
				$res['mensaje'] = "Debe seleccionar una mesa";
			}
		} else {
			$res['mensaje'] = "Metodo de envío invalido";
		}

		$this->output
			 ->set_content_type('application/json')
			 ->set_output(json_encode($res));
	}

	public function test_cobro()
	{
		$this->load->library('Cobro');
		$empresa = $this->Catalogo_model->getEmpresa([
			"empresa" => 1,
			"_uno" => true
		]);

		$cobro = new Cobro($empresa);

		$cobro->setTestVenta();
		$rep = $cobro->cobrar();

		echo "<pre>";
		print_r ($rep);
		echo "</pre>";
	}

	public function validapwdgerenteturno() {
		$res = ["exito" => false];
		if ($this->input->method() == 'post') {
			$data = json_decode(file_get_contents('php://input'), true);			
			$res['esgerente'] = $this->Usuario_model->validaPwdGerenteTurno($data['pwd']);
			$res['exito'] = true;
			$res['mensaje'] = 'Datos validados con éxito.';
		}
		$this->output->set_content_type('application/json')->set_output(json_encode($res));
	}
}

/* End of file Comanda.php */
/* Location: ./application/restaurante/controllers/Comanda.php */