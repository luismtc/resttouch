<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuenta extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			"Comanda_model", 
			"Dcomanda_model", 
			"Cuenta_model", 
			"Dcuenta_model",
			"Mesa_model"
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function index()
	{
		die("Forbidden");		
	}

	public function cobrar($cuenta)
	{
		$req =  json_decode(file_get_contents('php://input'));
		$datos = ["exito" => false];
		if ($this->input->method() == 'post') {
			if (isset($req->forma_pago)) {		
				$cta = new Cuenta_model($cuenta);
				$det = $cta->getDetalle();
				$total = 0;
				if ($cta->cerrada == 0) {
					foreach ($det as $row) {
						$total+= ($row->cantidad * $row->precio);
					}

					$total += $req->propina_monto;
					if($total == $req->total) {
						$exito = true;
						foreach ($req->forma_pago as $row) {
							if(!$cta->cobrar($row)) {
								$exito = false;
							} 	
						}			

						if ($exito) {
							$cta->guardar([
								"cerrada" => 1,
								"propina_monto" => $req->propina_monto,
								"propina_porcentaje" => $req->propina_porcentaje
							]);
							$com = new Comanda_model($cta->comanda);
							$cuentas = $com->getCuentas();
							$cerrada = 0;
							foreach ($cuentas as $row) {
								if ($row->cerrada == 1) {
									$cerrada++;
								}
							}
							if ($cerrada == count($cuentas)) {
								$tmp = $com->getMesas();
								$mesa = new Mesa_model($tmp->mesa);
								$com->guardar(["estatus" => 2]);
								$mesa->guardar(["estatus" => 1]);
							}
							$datos['exito'] = true;
							$datos['mensaje'] = "Cobro realizado exitosamente";
							$datos['cuenta'] = $cta;							
						} else {
							$datos['mensaje'] = "Ocurrio un error al realizar el cobro, intentelo nuevamente";
						}

					} else {
						$datos['mensaje'] = "El monto no conincide con el total de la cuenta";
					}	
				} else {
					$datos['mensaje'] = "La cuenta ya esta cerrada";
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

}

/* End of file Cuenta.php */
/* Location: ./application/restaurante/controllers/Cuenta.php */