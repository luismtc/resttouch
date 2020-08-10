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
			"Receta_model"
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
					$req['usuario'] = $usu->usuario;
					$req['sede'] = $usu->sede;

					if ($turno) {
						$req['turno'] = $turno->turno;
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

	public function guardar_detalle($com, $cuenta)
	{
		$comanda = new Comanda_model($com);
		$cuenta = new Cuenta_model($cuenta);
		$req = json_decode(file_get_contents('php://input'), true);
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$datos = ["exito" => false];
		if ($this->input->method() == 'post') {
			if ($cuenta->cerrada == 0) {
				
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

			} else {
				$datos['mensaje'] = "La cuenta ya esta cerrada";
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
				$datos[] = $comanda->getComanda();
			}
		} else {
			$mesa = new Mesa_model($mesa);
			$tmp = $mesa->get_comanda(["estatus" => 1]);

			if ($tmp) {
				$comanda = new Comanda_model($tmp->comanda);
				$datos = $comanda->getComanda();
			}
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function imprimir($idCta, $pdf = 0)
	{
		$cta = new Cuenta_model($idCta);
		$cta->imprimirDetalle();
		$com = new Comanda_model($cta->comanda);
		$datos = [
			'exito' => true, 
			'mensaje' => 'Datos Actualizados con exito',
			'comanda' => $com->getComanda()
		];

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
}

/* End of file Comanda.php */
/* Location: ./application/restaurante/controllers/Comanda.php */