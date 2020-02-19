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
			"Usuario_model",
			"Mesa_model",
			"Area_model"
		]);

		$this->output
		->set_content_type("application/json", "UTF-8");
	}


	function guardar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ["exito" => false];

		if ($this->input->method() == 'post') {
			if (isset($req['mesa']) && isset($req['comanda']) && isset($req['cuentas'])) {

				$usu = $this->Usuario_model->find(['usuario' => $req['mesero'], "_uno" => true]);

				if ($usu) {
					$comanda = new Comanda_model($req['comanda']);
					$mesa = new Mesa_model($req['mesa']);
					$req['usuario'] = $usu->usuario;
					$req['sede'] = $usu->sede;
					$datos['exito'] = $comanda->guardar($req);

					if (empty($req['comanda'])) {
						$comanda->setMesa($req['mesa']);
						$mesa->guardar(["estatus" => 2]);
					}

					if (count($req['cuentas']) > 0) {
						foreach ($req['cuentas'] as $row) {
							$cuenta = new Cuenta_model();
							if(isset($row['cuenta'])){
								$cuenta->cargar($row['cuenta']);
							}
							if ($cuenta->cerrada == 0) {
								$row['comanda'] = $comanda->comanda;
							
								$cuenta->guardar($row);
								if(count($row['productos']) > 0) {
									foreach ($row['productos'] as $prod) {
										$det = $comanda->guardarDetalle($prod);
										$id = isset($prod['detalle_cuenta']) ? $prod['detalle_cuenta'] : '';
										$cuenta->guardarDetalle([
											'detalle_comanda' => $det->detalle_comanda
										], $id);
									}
								}	
							}							
						}
						$datos['exito'] = true;
						$datos['comanda'] = $comanda->getComanda();
					}			

					if($datos['exito']) {
						$datos['mensaje'] = "Datos Actualizados con Exito";
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

	function get_comanda($mesa){
		$mesa = new Mesa_model($mesa);
		$tmp = $mesa->get_comanda(["estatus" => 1]);
		$datos = [];
		if($tmp) {
			$comanda = new Comanda_model($tmp->comanda);
			$datos = $comanda->getComanda();
		}

		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Comanda.php */
/* Location: ./application/restaurante/controllers/Comanda.php */