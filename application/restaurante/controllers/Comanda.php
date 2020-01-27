<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comanda extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->datos = [];
		$this->load->model([
			"Comanda_model", 
			"Dcomanda_model", 
			"Cuenta_model", 
			"Dcuenta_model",
			"Usuario_model"
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}


	function guardar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ["exito" => false];

		if ($this->input->method() == 'post') {
			$usu = $this->Usuario_model->find(['usuario' => $req['mesero'], "_uno" => true]);
			$comanda = new Comanda_model($req['comanda']);
			$req['usuario'] = $usu->usuario;
			$req['sede'] = $usu->sede;
			$datos['exito'] = $comanda->guardar($req);

			

			if (empty($req['comanda'])) {
				$comanda->setMesa($req['mesa']);
			}

			if (count($req['cuentas']) > 0) {
				foreach ($req['cuentas'] as $row) {
					$cuenta = new Cuenta_model();
					if(isset($row['numero'])){
						$cuenta->cargar($row['numero']);
					}

					$row['comanda'] = $comanda->comanda;
					$row['cuenta'] = $row['numero'];
					
					$cuenta->guardar($row);
					if(count($row['productos']) > 0) {
						foreach ($row['productos'] as $prod) {
							$det = $comanda->guardarDetalle($prod);

							$cuenta->guardarDetalle([
								'detalle_comanda' => $det->detalle_comanda
							]);
						}
					}
				}
				$datos['exito'] = true;
			}			

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} 

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Comanda.php */
/* Location: ./application/restaurante/controllers/Comanda.php */