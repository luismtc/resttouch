<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Cuenta extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Comanda_model',
			'Dcomanda_model',
			'Cuenta_model',
			'Dcuenta_model',
			'Mesa_model',
			'Sede_model'
		]);

		$this->output->set_content_type('application/json', 'UTF-8');
	}

	public function index()
	{
		die('Forbidden');
	}

	public function crear_nueva()
	{
		$req =  json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $this->Cuenta_model->guardarCuenta($req);
			if ($datos['exito']) {
				$datos['mensaje'] = "Cuenta {$req['nombre']} creada con éxito.";
			} else {
				$datos['mensaje'] = "Error al crear la cuenta {$req['nombre']}.";
			}
		} else {
			$datos['mensaje'] = 'Parámetros inválidos';
		}
		$this->output->set_output(json_encode($datos));
	}

	public function cobrar($cuenta)
	{
		$req =  json_decode(file_get_contents('php://input'));
		$datos = ['exito' => false, 'facturada' => false];

		if ($this->input->method() == 'post') {
			if (isset($req->forma_pago)) {
				$cta = new Cuenta_model($cuenta);
				$pagos = $cta->get_forma_pago();

				if (count($pagos) === 0) {
					$datos['facturada'] = $cta->facturada();

					if ($cta->cerrada == 0) {
						$det = $cta->getDetalle(['impreso' => 1, '_for_print' => true]);
						$total = 0;
						foreach ($det as $row) {
							$total += (((float)$row->cantidad * (float)$row->precio) + ((float)$row->monto_extra));
						}

						$total += $req->propina_monto;

						if (isset($req->comision_monto)) {
							$total += $req->comision_monto;
						}

						if ($total == $req->total) {
							$exito = true;
							$continuar = true;
							$facturar = true;
							$fpagos = [];
							foreach ($req->forma_pago as $row) {
								$fpago = $this->Catalogo_model->getFormaPago([
									'forma_pago' => $row->forma_pago,
									'_uno' => true
								]);
								if ($fpago->sinfactura == 1) {
									$facturar = false;
								}
								$fpagos[] = $fpago->sinfactura;
							}

							$fpagos = array_unique($fpagos);
							if (count($fpagos) > 1) {
								$continuar = false;
							}

							if ($continuar) {
								foreach ($req->forma_pago as $row) {
									if (!$cta->cobrar($row)) {
										$exito = false;
									}
								}

								if ($exito) {
									$cta->guardar(['cerrada' => 1]);
									$com = new Comanda_model($cta->comanda);
									$cuentas = $com->getCuentas(['_sin_detalle' => true]);
									$cerrada = 0;
									foreach ($cuentas as $row) {
										if ($row->cerrada == 1) {
											$cerrada++;
										}
									}
									if ($cerrada === count($cuentas)) {
										$tmp = $com->getMesas();

										if ($tmp) {
											$mesa = new Mesa_model($tmp->mesa);
											$mesa->guardar(['estatus' => 1]);
										}

										$com->guardar(['estatus' => 2]);
									}
									$datos['exito'] = true;
									$datos['mensaje'] = 'Cobro realizado exitosamente';
									$datos['cuenta'] = $cta;
									$datos['facturar'] = $facturar;
									$datos['entidad'] = $facturar ? null : $this->getDatosRecibo($cta->cuenta);
								} else {
									$datos['mensaje'] = 'Ocurrio un error al realizar el cobro, intentelo nuevamente';
								}
							} else {
								$datos['mensaje'] = 'No puede combinar pago con factura y sin factura';
							}
						} else {
							$datos['mensaje'] = 'El monto no conincide con el total de la cuenta';
						}
					} else {
						$datos['mensaje'] = 'La cuenta ya esta cerrada';
					}
				} else {
					$datos['mensaje'] = 'La cuenta ya fue cobrada en otra estación.';
				}
			} else {
				$datos['mensaje'] = 'Hacen falta datos obligatorios para poder continuar';
			}
		} else {
			$datos['mensaje'] = 'Parametros Invalidos';
		}
		$this->output->set_output(json_encode($datos));
	}

	private function getDatosRecibo($idCta)
	{
		$cuenta = new Cuenta_model($idCta);
		$detalle = $cuenta->getDetalle(['_for_prnt_recibo' => true]);
		$empresa = $cuenta->getEmpresa();
		$formas_pago = $cuenta->get_forma_pago();
		$sede = new Sede_model($empresa->sede);

		$propina = 0.00;
		foreach ($formas_pago as $fp) {
			$propina += (float)$fp->propina;
		}

		return [
			'empresa' => $empresa,
			'sede' => $sede,
			'comanda' => $cuenta->comanda,
			'numero' => $cuenta->numero,
			'nombre' => $cuenta->nombre,
			'propina' => $propina,
			'detalle' => $detalle
		];
	}

	public function get_cuenta($id)
	{
		$cuenta = new Cuenta_model($id);
		$detalle = $cuenta->getDetalle($_GET);
		$_GET['impreso'] = 0;
		$pendiente = $cuenta->getDetalle($_GET);

		$this->output
			->set_output(json_encode([
				'cuenta' => [
					'nombre' => $cuenta->nombre,
					'numero' => $cuenta->numero,
					'cerrada' => $cuenta->cerrada
				],
				'detalle' => $detalle,
				'pendiente' => $pendiente
			]));
	}

	public function get_detalle_cuenta($idcuenta)
	{
		$cuenta = new Cuenta_model($idcuenta);
		$detalle = $cuenta->getDetalleSimplified($_GET);
		$this->output->set_output(json_encode($detalle));
	}

	public function obtener_detalle_cuenta()
	{
		$detalle = $this->Cuenta_model->obtener_detalle($_GET);
		$this->output->set_output(json_encode($detalle));
	}
}

/* End of file Cuenta.php */
/* Location: ./application/restaurante/controllers/Cuenta.php */