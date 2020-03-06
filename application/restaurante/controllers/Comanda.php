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
			"Area_model",
			"Articulo_model",
			"Catalogo_model",
			"Turno_model"
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

				$usu = $this->Usuario_model->find([
					'usuario' => $req['mesero'], 
					"_uno" => true
				]);

				if ($usu) {
					$turno = $this->Turno_model->getTurno(['abierto' => true, "_uno" => true]);
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

	public function guardar_detalle($com, $cuenta='')
	{
		$comanda = new Comanda_model($com);
		$cuenta = new Cuenta_model($cuenta);
		$req = json_decode(file_get_contents('php://input'), true);
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$datos = ["exito" => false];
		if ($this->input->method() == 'post') {
			if ($cuenta->cerrada == 0) {
				$req['comanda'] = $comanda->comanda;
				$cuenta->guardar($req);
				if(isset($req['productos'])) {									
					foreach ($req['productos'] as $prod) {
						$det = $comanda->guardarDetalle($prod);
						$id = isset($prod['detalle_cuenta']) ? $prod['detalle_cuenta'] : '';
						if ($det) {
							$cuenta->guardarDetalle([
								'detalle_comanda' => $det->detalle_comanda
							], $id);	
							$datos['exito'] = true;
						} else {
							$datos['exito'] = false;
							break;							
						}					
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