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
			"Dcuenta_model"
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
				foreach ($det as $row) {
					$total+= ($row->cantidad * $row->precio);
				}

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