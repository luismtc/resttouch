<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Comanda extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->add_package_path('application/facturacion');

		$this->load->model([
			'Comanda_model',
			'Dcomanda_model',
			'Cuenta_model',
			'Dcuenta_model',
			'Usuario_model',
			'Mesa_model',
			'Area_model',
			'Articulo_model',
			'Catalogo_model',
			'Turno_model',
			'Factura_model',
			'Receta_model',
			'Impresora_model',
			'Presentacion_model',
			'Configuracion_model',
			'Tipo_usuario_cgrupo_model',
			'Accion_model'
		]);

		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$this->data = AUTHORIZATION::validateToken($headers['Authorization']);

		$this->output->set_content_type('application/json', 'UTF-8');
	}


	function guardar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		if ($this->input->method() == 'post') {
			if (isset($req['mesa']) && isset($req['comanda']) && isset($req['cuentas'])) {
				$req['data'] = $data;
				$datos = guardar_comanda($req);
			} else {
				$datos['mensaje'] = 'Hacen falta datos obligatorios para poder continuar';
			}
		} else {
			$datos['mensaje'] = 'Parametros Invalidos';
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function guardar_notas_generales($comanda)
	{
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);
			if (isset($req['notas_generales'])) {
				if (trim($req['notas_generales']) !== '') {
					$com = new Comanda_model($comanda);
					$datos['exito'] = $com->guardar($req);
					if ($datos['exito']) {
						$datos['mensaje'] = 'Notas generales actualizadas con éxito.';
					} else {
						$datos['mensaje'] = implode('<br>', $com->getMensaje());;
					}
				}
			}
		}
		$this->output->set_output(json_encode($datos));
	}

	public function cerrar_estacion($comanda)
	{
		/*
		$datos = ['exito' => false];		
		$com = new Comanda_model($comanda);
		$com->comandaenuso = 0;
		if ($com->guardar()) {
			$datos['exito'] = true;
			$datos['mensaje'] = 'Datos actualizados con exito';
		} else {			
			$datos['mensaje'] = $com->getMensaje();
		}
		*/

		$datos = ['exito' => false];
		$com = new Comanda_model($comanda);
		if ($com->cierra_estacion($comanda)) {
			$datos['exito'] = true;
			$datos['mensaje'] = 'Datos actualizados con exito';
		} else {
			$datos['mensaje'] = "No se pudo habilitar la comanda $comanda. Por favor comuníquese con el administrador del sistema.";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function unir_cuentas($cuentaDe, $cuentaA)
	{
		$deCuenta = new Cuenta_model($cuentaDe);
		$aCuenta = new Cuenta_model($cuentaA);
		$datos = ['exito' => false];
		if ($deCuenta->cerrada == 0) {
			if ($aCuenta->cerrada == 0) {
				// $detOrigen = $deCuenta->getDetalle(['_es_unificacion' => true, '_for_print' => true, '_totalCero' => true]);
				$detOrigen = $deCuenta->get_plain_detalle_cuenta();
				if (count($detOrigen) > 0) {
					foreach ($detOrigen as $do) {
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

	public function trasladar_mesa($comanda, $origen, $destino)
	{
		$cmd = new Comanda_model($comanda);
		$mesaOrigen = new Mesa_model($origen);
		$mesaDestino = new Mesa_model($destino);

		$datos = ['exito' => true, 'mensaje' => 'Mesa trasladada con éxito.'];
		if ((int)$mesaDestino->estatus === 1) {
			$mesaDestino->guardar(['estatus' => 2]);
			$cmd->trasladar_mesa($destino, $comanda);
			$mesaOrigen->guardar(['estatus' => 1]);
		} else {
			$cmdDestino = $mesaDestino->get_comanda(['estatus' => 1, 'sede' => $this->data->sede]);
			if ($cmdDestino) {
				$datos['exito'] = $cmd->trasladar_cuentas_a_comanda($cmdDestino->comanda);
				if ($datos['exito']) {
					$cmd->guardar(['estatus' => 2]);
					$mesaOrigen->guardar(['estatus' => 1]);
				} else {
					$datos['mensaje'] = $cmd->getMensaje();
				}
			} else {
				$datos['exito'] = false;
				$datos['mensaje'] = 'La comanda de la mesa destino ya fue cerrada, no puede realizarse el traslado de cuentas.';
			}
		}
		$this->output->set_output(json_encode($datos));
	}

	public function guardar_detalle_combo($com, $cuenta)
	{
		// set_time_limit(600);
		$comanda = new Comanda_model($com);
		$mesa = $comanda->getMesas();
		$cuenta = new Cuenta_model($cuenta);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];

		if ($this->input->method() == 'post') {
			if ($mesa->estatus == 2) {
				if ($cuenta->cerrada == 0) {
					$val = validarCantidades($req);
					if ($val['exito']) {
						$det = $comanda->guardarDetalleCombo($req, $cuenta->getPK());
						if ($det) {
							$datos['exito'] = true;
							$datos['comanda'] = $comanda->getComanda([
								'_cuenta' => $cuenta->cuenta, 'articulo' => $det->articulo, 'detalle_comanda' => $det->detalle_comanda
							]);
						} else {
							$datos['exito'] = false;
							$datos['mensaje'] = $comanda->getMensaje();
						}
					} else {
						$datos['mensaje'] = $val['mensaje'];
					}
				} else {
					$datos['mensaje'] = 'La cuenta ya esta cerrada';
				}
			} else {
				$datos['mensaje'] = 'La mesa debe estar en estatus abierto';
			}
		} else {
			$datos['mensaje'] = 'Parametros Invalidos';
		}

		$this->output
			->set_output(json_encode($datos));
	}

	private function add_bitacora_elimina_detalle_comanda($dcom, $req)
	{
		$articuloAEliminar = new Articulo_model($dcom->articulo);
		$usuarioElimino = new Usuario_model($this->data->idusuario);
		$usuarioAutoriza = new Usuario_model($req['gerente']);
		$comentarioBitacora = "{$usuarioElimino->apellidos}, {$usuarioElimino->nombres} eliminó el artículo {$articuloAEliminar->descripcion} después de comandar, autorizado por {$usuarioAutoriza->apellidos}, {$usuarioAutoriza->nombres}.";
		$bitComanda = new Bitacora_model();
		$acc = $this->Accion_model->buscar(['descripcion' => 'Modificacion', '_uno' => true]);
		$bitComanda->guardar([
			'accion' => $acc->accion,
			'usuario' => $this->data->idusuario,
			'tabla' => 'detalle_comanda',
			'registro' => $dcom->detalle_comanda,
			'comentario' => "{$comentarioBitacora} Quedaron " . number_format((float)$req['cantidad'], 2) . " y originalmente habían " . number_format((float)$dcom->cantidad, 2) . ". Precio unitario: " . number_format((float)$dcom->precio, 2) . ".".(isset($req['regresa_inventario']) && $req['regresa_inventario'] ? ' Se reversó el inventario.' : '')
		]);
	}

	public function guardar_detalle($com, $cuenta)
	{
		$comanda = new Comanda_model($com);
		$mesa = $comanda->getMesas();
		$cuenta = new Cuenta_model($cuenta);
		$req = json_decode(file_get_contents('php://input'), true);
		// $menu = $this->Catalogo_model->getModulo(['modulo' => 4, '_uno' => true]);
		$datos = ['exito' => false];

		if ($this->input->method() == 'post') {
			if ((int)$mesa->estatus === 2) {
				if ((int)$cuenta->cerrada === 0) {
					$datos['exito'] = true;
					if (isset($req['detalle_comanda'])) {
						$dcom = new Dcomanda_model($req['detalle_comanda']);
						$datos['exito'] = $dcom->impreso == 0;

						if ($dcom->impreso == 1) {
							if (isset($req['autorizado']) && $req['autorizado'] == true) {
								$datos['exito'] = true;
								$this->add_bitacora_elimina_detalle_comanda($dcom, $req);
							} else {
								$datos['mensaje'] = 'El producto ya ha sido impreso, por favor cierre el panel y vuelva a entrar.';
							}

							unset($req['autorizado']);
						}
					}

					if ($datos['exito']) {
						// $det = $comanda->guardarDetalle($req);
						// $inicia = time();
						$det = $comanda->guardarDetalleMejorado($req);
						// $finaliza = time();

						// $datos['inicia'] = $inicia;
						// $datos['finaliza'] = $finaliza;
						// $datos['segundos'] = $finaliza - $inicia;

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
							$datos['comanda'] = $comanda->getComanda([
								'_cuenta' => $cuenta->cuenta, 'articulo' => $det->articulo, 'detalle_comanda' => $det->detalle_comanda
							]);
						} else {
							$datos['mensaje'] = implode('<br>', $comanda->getMensaje());
						}
					}
				} else {
					$datos['mensaje'] = 'La cuenta ya esta cerrada';
				}
			} else {
				$datos['mensaje'] = 'La mesa debe estar en estatus abierto';
			}
		} else {
			$datos['mensaje'] = 'Parametros Invalidos';
		}

		$this->output->set_output(json_encode($datos));
	}

	public function distribuir_cuentas()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];

		if ($this->input->method() == 'post') {


			foreach ($req as $row) {
				$det = new Dcomanda_model($row['detalle_comanda']);

				$datos['exito'] = $det->distribuir_cuenta($row);

				if (!$datos['exito']) {
					$datos['mensaje'] = implode('<br>', $det->getMensaje());
				}
			}

			if ($datos['exito']) {
				$datos['mensaje'] = 'Datos Actualizados con exito';
			}

			$datos['exito'] = true;
		} else {
			$datos['mensaje'] = 'Parametros Invalidos';
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function guardar_notas_producto($dcomanda)
	{
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);
			if (isset($req['notas'])) {
				$dcom = new Dcomanda_model($dcomanda);
				$req['notas'] = trim($req['notas']) !== '' ? trim($req['notas']) : null;
				$datos['exito'] = $dcom->guardar($req);
				if ($datos['exito']) {
					$datos['mensaje'] = 'Notas de producto actualizadas con éxito.';
				} else {
					$datos['mensaje'] = implode('<br>', $dcom->getMensaje());
				}
			}
		}
		$this->output->set_output(json_encode($datos));
	}

	public function set_detalle_comanda($com, $cuenta)
	{
		$comanda = new Comanda_model($com);
		$cuenta = new Cuenta_model($cuenta);
		$data = json_decode(file_get_contents('php://input'), true);
		$menu = $this->Catalogo_model->getModulo(['modulo' => 4, '_uno' => true]);
		$datos = ['exito' => false];

		if ($this->input->method() == 'post') {
			if ($cuenta->cerrada == 0) {
				foreach ($data['articulos'] as $key => $req) {
					$art = $this->Articulo_model->buscarArticulo([
						'codigo' => $req['codigo'],
						'sede' => $comanda->sede,
						'_uno' => true
					]);

					if ($art) {
						$req['articulo'] = $art->articulo;

						unset($req['codigo']);

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
						$datos['mensaje'] = 'Producto no encontrado en restaurante, por favor comuníquese con el mesero de turno.';
					}
				}

				if ($datos['exito']) {
					$datos['mensaje'] = 'Productos agregados con éxito.';
					$datos['comanda'] = $comanda->getComanda();
					$datos['mensaje'] = 'Detalle cuenta cargada correctamente.';
				} else {
					$datos['mensaje'] = implode('<br>', $comanda->getMensaje());
				}
			} else {
				$datos['mensaje'] = 'La cuenta ya esta cerrada';
			}
		} else {
			$datos['mensaje'] = 'Error en comunicación, por favor comuníquese con el mesero de turno.';
		}

		$this->output
			->set_output(json_encode($datos));
	}

	function get_comanda($mesa = '')
	{
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
				$datos[] = $comanda->getComanda(['_usuario' => $data->idusuario]);
			}
		} else {
			$mesa = new Mesa_model($mesa);
			$tmp = $mesa->get_comanda(['estatus' => 1, 'sede' => $data->sede]);

			if ($tmp) {
				$comanda = new Comanda_model($tmp->comanda);
				$comanda->comandaenuso = 0;

				$_GET['_usuario'] = $data->idusuario;

				// $datos = $comanda->getComanda(['_usuario' => $data->idusuario]);
				$datos = $comanda->getComanda($_GET);
				$datos->exito = true;
			} else if ($this->input->get('qr')) {
				$com = new Comanda_model();
				$config = $this->Configuracion_model->buscar();
				$mesero = get_configuracion($config, 'RT_MESERO_POR_DEFECTO', 1);

				$res = guardar_comanda([
					'comanda' => '',
					'estatus' => 1,
					'data' => $data,
					'mesero' => $mesero,
					'cuentas' => [['nombre' => 'Unica']],
					'mesa' => $mesa->getPK()
				]);
				if ($res['exito']) {
					$this->load->helper('api');
					$tmp = $mesa->get_comanda(['estatus' => 1, 'sede' => $data->sede]);
					$comanda = new Comanda_model($tmp->comanda);
					$comanda->comandaenuso = 0;

					$datos = $comanda->getComanda(['_usuario' => $data->idusuario]);
					$datos->exito = true;
					$updlst = json_decode(get_request('https://resttouch.c807.com:8988/api/updlstareas', []));
					$datos->msgws = $updlst;
				}
			}
		}

		$this->output->set_output(json_encode($datos));
	}

	public function get_comanda_cocina()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$datos = [
			'pendientes' => [],
			'enproceso' => []
		];

		$turno = $this->Turno_model->getTurno([
			'sede' => $data->sede,
			'abierto' => true,
			'_uno' => true
		]);

		if ($turno) {

			$tur = new Turno_model($turno->turno);
			$usu = $tur->getUsuarios(['usuario' => $data->idusuario]);
			if ($usu) {
				$cgrupo = [];
				foreach ($usu as $row) {
					$grupos = $this->Tipo_usuario_cgrupo_model->buscar([
						'usuario_tipo' => $row->usuario_tipo->usuario_tipo,
						'debaja' => 0
					]);

					$tmp = array_result($grupos, 'categoria_grupo');

					$cgrupo = array_merge($cgrupo, $tmp);
				}

				$filtro = [
					'sede' => $data->sede,
					'cocinado' => 0,
					'categoria_grupo' => $cgrupo,
					'order_by' => 'fecha_impresion'
				];

				if (isset($_GET['comanda'])) {
					$filtro['comanda'] = $_GET['comanda'];
				}

				$tmp = $this->Comanda_model->getComandas($filtro);

				$filtro['cocinado'] = 1;
				$filtro['order_by'] = 'fecha_proceso';

				$enProceso = $this->Comanda_model->getComandas($filtro);

				foreach ($tmp as $row) {
					$comanda = new Comanda_model($row->comanda);
					$datos['pendientes'][] = $comanda->getComanda([
						'_usuario' => $data->idusuario,
						'cocinado' => 0,
						'_numero' => $row->numero,
						'_categoria_grupo' => count($cgrupo) > 0 ? $cgrupo : null,
						'_for_prnt_recibo' => true
					]);
				}

				foreach ($enProceso as $row) {
					$comanda = new Comanda_model($row->comanda);
					$datos['enproceso'][] = $comanda->getComanda([
						'_usuario' => $data->idusuario,
						'cocinado' => 1,
						'_numero' => $row->numero,
						'_categoria_grupo' => count($cgrupo) > 0 ? $cgrupo : null,
						'_for_prnt_recibo' => true
					]);
				}
			}
		}

		$this->output->set_output(json_encode($datos));
	}

	public function set_cocinado($idcomanda)
	{
		$datos = ['exito' => true];
		$errores = '';
		$data = json_decode(file_get_contents('php://input'), true);
		if (isset($data['tiempo'])) {
			if ((int)$data['tiempo'] >= 0 && (int)$data['tiempo'] < 60) {
				$com = new Comanda_model($idcomanda);
				$detalle = $com->getDetalleComandaSimplified([
					'cocinado' => ((int)$data['estatus'] === 1 ? 0 : 1),
					'numero' => $data['numero']
				]);

				foreach ($detalle as $det) {
					$ld = new Dcomanda_model($det->detalle_comanda);
					$args = ['cocinado' => $data['estatus']];

					if ((int)$data['estatus'] === 1) {
						// if ((int)$data['tiempo'] < 10) {
						// 	$data['tiempo'] = "0" . $data['tiempo'];
						// }
						// if (isset($data['tiempo'])) {
						// 	$args['tiempo_preparacion'] = "00:{$data['tiempo']}";
						// }
						$args['tiempo_preparacion'] = "00:00";
						$args['fecha_proceso'] = isset($data['fecha_proceso']) ? $data['fecha_proceso'] : Hoy(3);
					}

					$exito = $ld->guardar($args);
					if (!$exito) {
						$datos['exito'] = false;
						if ($errores !== '') {
							$errores .= '; ';
						}
						$errores .= implode('; ', $ld->getMensaje());
					}
				}
				$datos['mensaje'] = $datos['exito'] ? 'Datos actualizados con éxito.' : $errores;
			} else {
				$datos['mensaje'] = 'El tiempo debe estar entre 0 y 59 minutos.';
			}
		} else {
			$datos['mensaje'] = 'Hacen falta datos obligatorios para poder continuar.';
		}


		$this->output->set_output(json_encode($datos));
	}

	public function imprimir($idCta, $pdf = 0, $no_get_comanda = 0)
	{
		$cta = new Cuenta_model($idCta);
		$com = new Comanda_model($cta->comanda);
		$req = json_decode(file_get_contents('php://input'), true);

		$datos = [
			'exito' => true,
			'mensaje' => 'Datos Actualizados con exito'
		];

		if ((int)$pdf === 0) {
			if ($pdf != 2) {
				$cta->imprimirDetalle();
			}
			$datos['comanda'] = (int)$no_get_comanda === 0 ? $com->getComanda() : (object)[];
		} else {
			$datos['comanda'] = $com->getComanda([
				'impreso' => '0',
				'_cuenta' => $cta->getPK()
			]);
			$cta->imprimirDetalle();
			$det = 0;
			foreach ($datos['comanda']->cuentas as $cta) {
				foreach ($cta->productos as $prod) {
					$det += 1;
					if (isset($prod->detalle)) {
						$det += count($prod->detalle);
					}
					if (!empty($prod->notas)) {
						$det += 1;
					}
				}
			}
		}

		if ((int)$pdf === 1) {

			$mpdf = new \Mpdf\Mpdf([
				'mode' => 'utf-8',
				'tempDir' => sys_get_temp_dir(), //produccion
				'format' => [80, 100 + $det * 2]
			]);

			$mpdf->WriteHTML($this->load->view('impresion/comanda', $datos, true));
			$mpdf->Output('Detalle de Comandas.pdf', 'D');
		} else {
			$this->output
				->set_output(json_encode($datos));
		}
	}

	public function cerrar_mesa($mesa = null)
	{
		$res = ["exito" => false];
		if ($this->input->method() == 'post') {
			$this->load->helper(['jwt', 'authorization']);
			$headers = $this->input->request_headers();
			$data = AUTHORIZATION::validateToken($headers['Authorization']);
			if ($mesa !== null) {
				$_mesa = new Mesa_model($mesa);
				if ($_mesa->estatus == 2) {
					$comanda = $_mesa->get_comanda(["estatus" => 1, 'sede' => $data->sede]);
					if ($comanda) {
						$com = new Comanda_model($comanda->comanda);
						$det = $com->get_articulos_pendientes();
						$cntConCantidad = 0;
						if ($det) {
							$cntConCantidad = count($det);
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

		$this->output->set_content_type('application/json')->set_output(json_encode($res));
	}

	public function validapwdgerenteturno()
	{
		$res = ["exito" => false];
		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);
			$gerente = $this->Usuario_model->validaPwdGerenteTurno($req['pwd'], $this->data->sede);
			$res['esgerente'] = $gerente->esgerente;
			$res['gerente_turno'] = $gerente->usuario;
			$res['exito'] = true;
			$res['mensaje'] = 'Datos validados con éxito.';
		}
		$this->output->set_content_type('application/json')->set_output(json_encode($res));
	}

	public function anular_pedido($comanda = null)
	{
		$datos = ["exito" => false];

		if ($this->input->method() == 'post') {
			if ($comanda !== null) {
				$com = new Comanda_model($comanda);
				$bitComanda = new Bitacora_model();
				$usu = new Usuario_model($this->data->idusuario);
				if ($com->getPK()) {
					$req = json_decode(file_get_contents('php://input'), true);
					$com->guardar(["estatus" => 2]);
					$fac = $com->getFactura();
					$acc = $this->Accion_model->buscar([
						"descripcion" => "Modificacion",
						"_uno" => true
					]);

					$comentario = "Anulación: El usuario {$usu->nombres} {$usu->apellidos} anuló la comanda {$comanda} Motivo: {$req['comentario']}";

					$bitComanda->guardar([
						"accion" => $acc->accion,
						"usuario" => $this->data->idusuario,
						"tabla" => "comanda",
						"registro" => $com->getPK(),
						"comentario" => $comentario
					]);
					if ($fac) {
						unset($fac->total);
						$bitFac = new Bitacora_model();
						$fac->guardar([
							"serie_factura" => "***PEDIDO CANCELADO***",
							"numero_factura" => $fac->getPK(),
							"fel_uuid" => "***PEDIDO CANCELADO***",
							"fel_uuid_anulacion" => "***PEDIDO CANCELADO***"
						]);

						$comentario = "Anulación: El usuario {$usu->nombres} {$usu->apellidos} anuló la factura {$fac->numero_factura} Serie {$fac->serie_factura} Motivo: {$req['comentario']}";

						$bitFac->guardar([
							"accion" => $acc->accion,
							"usuario" => $this->data->idusuario,
							"tabla" => "factura",
							"registro" => $fac->getPK(),
							"comentario" => $comentario
						]);

						$datos['exito'] = true;
						$datos['mensaje'] = "Datos actualizados con exito";
					}
				} else {
					$datos['mensaje'] = "No existe ninguna comanda con este numero {$comanda}";
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

	public function lista_comandas()
	{
		if (!isset($_GET['sede'])) {
			$_GET['sede'] = $this->data->sede;
		}
		$datos = $this->Comanda_model->getComandas($_GET);

		$datos = ordenar_array_objetos($datos, 'comanda', 1);

		foreach ($datos as $comanda) {
			unset($comanda->origen_datos);
			$cmd = new Comanda_model($comanda->comanda);
			$mesero = $this->Usuario_model->buscar(['usuario' => $comanda->mesero, '_uno' => true]);
			$comanda->mesero = (object)[
				'usuario' => $mesero->usuario,
				'nombre' => $mesero->nombres,
				'apellidos' => $mesero->apellidos,
				'usrname' => $mesero->usrname
			];
			$comanda->detalle = $cmd->getDetalle();
			$comanda->total = 0;
			foreach ($comanda->detalle as $det) {
				$comanda->total += (float)$det->total;
			}
		}

		$this->output->set_output(json_encode($datos));
	}

	public function anular_comanda($comanda)
	{
		$datos = new stdClass();
		$datos->exito = false;
		if ($comanda) {
			$req = json_decode(file_get_contents('php://input'));
			if (isset($req->razon_anulacion) && (int)$req->razon_anulacion > 0) {
				$cmd = new Comanda_model($comanda);
				$factura = $cmd->getFactura();
				$tieneFactura = $factura && !empty($factura->fel_uuid) && empty($factura->fel_uuid_anulacion);
				if (!$tieneFactura) {
					$detComanda = $cmd->getDetalle();
					foreach ($detComanda as $det) {
						$dc = new Dcomanda_model($det->detalle_comanda);
						$dc->cantidad = 0;
						$dc->total = 0;
						$dc->guardar();
					}
					$cmd->notas_generales = "Comanda anulada el " . date('d/m/Y') . " por el usuario {$this->data->usuario}.";
					$cmd->notas_generales .= isset($req->comentario_anulacion) && !empty($req->comentario_anulacion) ? (' ' . trim($req->comentario_anulacion)) : '';
					$cmd->estatus = 3;
					$cmd->razon_anulacion = $req->razon_anulacion;

					$bitComanda = new Bitacora_model();
					$acc = $this->Accion_model->buscar([
						"descripcion" => "Modificacion",
						"_uno" => true
					]);
					$bitComanda->guardar([
						"accion" => $acc->accion,
						"usuario" => $this->data->idusuario,
						"tabla" => "comanda",
						"registro" => $cmd->getPK(),
						"comentario" => $cmd->notas_generales
					]);

					$datos->exito = $cmd->guardar();
					$datos->mensaje = $datos->exito ? "La comanda {$comanda} fue anulada con éxito." : $cmd->getMensaje();
				} else {
					$datos->mensaje = "La comanda {$comanda} tiene la factura '{$factura->serie_factura}-{$factura->numero_factura}' vigente. Debe anular primero la factura.";
				}
			} else {
				$datos->mensaje = 'Por favor seleccione una razón de anulación.';
			}
		} else {
			$datos->mensaje = 'Debe mandar el número de comanda para que sea anulada.';
		}

		$this->output->set_output(json_encode($datos));
	}

	public function ver_comanda($idcomanda)
	{
		$com = new Comanda_model($idcomanda);
		$datos = new stdClass();
		$datos->comanda = $com->getComanda($_GET);
		$this->output->set_output(json_encode($datos->comanda->cuentas));
	}

	public function eliminar_detalle()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$detalle = $this->Dcomanda_model->get_detalle_comanda_and_childs(['detalle_comanda' => $req['detalle_comanda']]);
		$datos = ['exito' => false];
		$errores = [];

		if(count($detalle) > 0) {
			$pasa = true;
			if ((int)$detalle[0]->impreso === 1) {
				if (isset($req['autorizado']) && $req['autorizado'] == true) {					
					$this->add_bitacora_elimina_detalle_comanda((object)$detalle[0], $req);
				} else {
					$pasa = false;
					$errores[] = 'El producto ya ha sido impreso, por favor cierre el panel y vuelva a entrar.';
				}				
			} else {
				$req['regresa_inventario'] = true;
			}

			if ($pasa) {
				foreach ($detalle as $det) {
					$dc = new Dcomanda_model($det->detalle_comanda);
					$dc->cantidad = (float)$req['cantidad'];
					$dc->total = (float)$req['total'];
					if($req['regresa_inventario'] || (int)$det->mostrar_inventario === 0) {
						$dc->cantidad_inventario = (float)$req['cantidad'];
					}
					$exito = $dc->guardar();
					if(!$exito) {
						$errores[] = implode('; ', $dc->getMensaje());
					}

					// if((int)$det->combo === 0 && (int)$det->multiple === 0) {
					// 	$dc->actualizarCantidadHijos($req['regresa_inventario']);						
					// }
				}
			}
		} else {
			$errores[] = 'No se encontró ningún detalle con esos parámetros.';
		}

		if(count($errores) === 0) {
			$datos['exito'] = true;
			$datos['mensaje'] = 'Producto eliminado con éxito.';
		} else {
			$datos['mensaje'] = implode(',', $errores);
		}

		$this->output->set_output(json_encode($datos));
	}

	public function test()
	{
		$detalle = $this->Dcomanda_model->get_detalle_comanda_and_childs($_GET);
		$this->output->set_output(json_encode($detalle));
	}
}

/* End of file Comanda.php */
/* Location: ./application/restaurante/controllers/Comanda.php */