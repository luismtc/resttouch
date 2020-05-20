<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

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

	public function set_comanda()
	{
		$req = json_decode(file_get_contents('php://input'), true);

		$datos = ["exito" => false];
		
		if ($this->input->method() == 'post') {
			$datosComanda = ['usuario' => 1, 'sede' => 1, 'turno' => 1, 'estatus' => 1, 'domicilio' => 1];
			$datosCta = ['nombre' => $req['shipping_address']['name'], 'numero' => $req['order_number']];
			
			$usu = $this->Usuario_model->find([
				'usuario' => 1, 
				"_uno" => true
			]);

			if ($usu) {
				$turno = $this->Turno_model->getTurno([
					"sede" => 1,
					'abierto' => true, 
					"_uno" => true
				]);
				$comanda = new Comanda_model();
				
				$req['usuario'] = 1;
				$req['sede'] = 1;

				if ($turno) {
					$req['turno'] = $turno->turno;
					$datos['exito'] = $comanda->guardar($datosComanda);
	
					$cuenta = new Cuenta_model();
					
					if ($cuenta->cerrada == 0) {
						$datosCta['comanda'] = $comanda->comanda;
						$cuenta->guardar($datosCta);	
					}							
					foreach ($req['line_items'] as $row) {
						$art = $this->Articulo_model->buscar([
							'shopify_id' => $row['product_id'],
							'_uno' => true
						]);
						if ($art) {
							$datosDcomanda=['articulo' => 1
								,'cantidad' => $row['quantity']
								,'precio' => $row['price']
								,'impreso' => 0
								,'total' => $row['price'] * $row['quantity']
								,'notas' => ''
							];
							$det = $comanda->guardarDetalle($datosDcomanda);
							$id = '';
							if ($det) {
								$cuenta->guardarDetalle([
									'detalle_comanda' => $det->detalle_comanda
								]);	
								$datos['exito'] = true;
							} else {
								$datos['exito'] = false;						
							}	
						} else {
							$datos['exito'] = false;
						}				
					}
						
					if ($datos['exito']) {
						$datos['comanda'] = $comanda->getComanda();	
					} else {
						$datos['mensaje'] = implode("<br>", $comanda->getMensaje());
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
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));

	}

}

/* End of file Api.php */
/* Location: ./application/restaurante/controllers/Api.php */