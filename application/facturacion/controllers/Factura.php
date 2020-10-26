<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->add_package_path('application/admin');
		$this->load->add_package_path('application/restaurante');
		$this->load->helper('api');
        $this->load->model([
			'Dfactura_model',
			'Usuario_model',
			'Catalogo_model',
			'Cuenta_model',
			'Dcomanda_model',
			'Dcuenta_model',
			'Factura_model',
			'Articulo_model',
			'Comanda_model',
			'Cliente_model',
			'Receta_model'
		]);
		$this->load->helper(['jwt', 'authorization']);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = '')
	{
		
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$fac = new Factura_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (empty($id) || empty($fac->numero_factura)) {				
				$sede = $this->Catalogo_model->getSede(['sede' => $data->sede, '_uno' => true]);
				$clt = new Cliente_model($req['cliente']);

				$req['usuario'] = $data->idusuario;
				$req['certificador_fel'] = $sede->certificador_fel;	
				$req['sede'] = $data->sede;
				$req["correo_receptor"] = $clt->correo;
				
				$datos['exito'] = $fac->guardar($req);

				if($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['factura'] = $fac;
				} else {
					$datos['mensaje'] = implode("<br>", $fac->getMensaje());
				}
			} else {
				$datos['mensaje'] = "La factura ya fue firmada por la SAT, no se puede modificar";
			}

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function guardar_detalle($factura, $id = '') {
		$fac = new Factura_model($factura);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (empty($fac->numero_factura)) {
				$fac->cargarEmpresa();
				$pimpuesto = $fac->empresa->porcentaje_iva +1;
				$art = new Articulo_model($req['articulo']);
				if ($fac->exenta) {
					$req['monto_base'] = $req['total'];
				} else {
					$req['monto_base'] = $req['total'] / $pimpuesto;
				}
				
				$req['presentacion'] = $art->presentacion;
				$req['monto_iva'] = $req['total'] - $req['monto_base'];	
				$req['bien_servicio'] = $art->bien_servicio;
				$det = $fac->setDetalle($req, $id);
				
				if($det) {
					$datos['exito'] = true;
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['detalle'] = $det;
				} else {
					$datos['mensaje'] = implode("<br>", $fac->getMensaje());
				}	
			} else {
				$datos['mensaje'] = "La factura ya fue firmada por la SAT, no se puede modificar";
			}

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar_factura(){		
		$headers = $this->input->request_headers();
        $data = AUTHORIZATION::validateToken($headers['Authorization']); 
        $_GET['sede'] = $data->sede;

		// $facturas = $this->Factura_model->buscar($_GET);
		$facturas = $this->Factura_model->filtrar_facturas($_GET);
		$datos = [];
		if(is_array($facturas)) {
			foreach ($facturas as $row) {
				$tmp = new Factura_model($row->factura);
				$tmp->cargarReceptor();
				$tmp->cargarMoneda();
				$tmp->cargarCertificadorFel();
				$row->cliente = $tmp->receptor;
				$row->factura_serie = $this->Catalogo_model->getFacturaSerie(["factura_serie" => $tmp->factura_serie, "_uno" => true]);
				$row->certificador_fel = $tmp->certificador_fel;
				$row->moneda = $tmp->moneda;
				$row->usuario = $this->Usuario_model->find([
					'usuario' => $tmp->usuario, "_uno" => true
				]);
				$datos[] = $row;
			}
		} else if($facturas){
			$tmp = new Factura_model($facturas->factura);
			$tmp = new Factura_model($facturas->factura);
			$tmp->cargarReceptor();
			$tmp->cargarMoneda();
			$tmp->cargarCertificadorFel();
			$facturas->cliente = $tmp->receptor;
			$facturas->factura_serie = $this->Catalogo_model->getFacturaSerie(["factura_serie" => $tmp->factura_serie, "_uno" => true]);
			$facturas->certificador_fel = $tmp->certificador_fel;
			$facturas->moneda = $tmp->moneda;
			$facturas->usuario = $this->Usuario_model->find([
				'usuario' => $tmp->usuario, "_uno" => true
			]);
			$datos[] = $facturas;
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function buscar_detalle($factura)
	{
		$fac = new Factura_model($factura);

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($fac->getDetalle($_GET)));
	}

	public function facturar($factura)
	{
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$fac = new Factura_model($factura);

			if (empty($fac->numero_factura)) {
				$fac->cargarFacturaSerie();
				$fac->cargarEmpresa();
				$fac->cargarMoneda();
				$fac->cargarReceptor();
				$fac->cargarSede();
				$fac->cargarCertificadorFel();
				$fac->procesar_factura();
				
				$cer = $fac->getCertificador();

				$funcion = $cer->metodo_factura;
				$resp = $fac->$funcion();
				$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
				
				if (!empty($fac->numero_factura)) {
					$fac->certificador_fel = $cer;
					$fac->detalle = $fac->getDetalle();
					$fac->fecha_autorizacion = $resp->fecha;

					$comanda = $fac->getComanda();
					$fac->origen_datos = ($comanda) ? $comanda->getOrigenDatos() : null;

					$datos['exito'] = true;
					$datos['factura'] = $fac;
					$datos['mensaje'] = "Datos actualizados con exito";	
				} else {
					$datos['mensaje'] = implode(". ", $fac->getMensaje());
				}
			} else {
				$datos['mensaje'] = "Ya cuenta con factura.";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}

	public function refacturar($factura)
	{
		$datos = ["exito" => false];
		if ($this->input->method() == 'post') {
			$fac = new Factura_model($factura);
			$req = json_decode(file_get_contents('php://input'), true);
			if (!empty($fac->fel_uuid_anulacion)) {
				$refac = new Factura_model();
				$headers = $this->input->request_headers();
				$data = AUTHORIZATION::validateToken($headers['Authorization']);

				$sede = $this->Catalogo_model->getSede(['sede' => $data->sede, '_uno' => true]);
				$clt = new Cliente_model($req['cliente']);

				$req['usuario'] = $data->idusuario;
				$req['certificador_fel'] = $sede->certificador_fel;	
				$req['sede'] = $data->sede;
				$req["correo_receptor"] = $clt->correo;
				unset($req['factura']);
				if ($refac->guardar($req)) {
					$fac->copiarDetalle($refac->getPK());
					$datos = facturar($refac);
				} else {
					$datos['mensaje'] = "Ocurrió un error al guardar la factura";
				}
			} else {
				$datos['mensaje'] = "La factura debe estar anulada";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}

	public function anular($factura)
	{
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$fac = new Factura_model($factura);

			if (empty($fac->fel_uuid_anulacion)) {
				$fac->cargarFacturaSerie();
				$fac->cargarEmpresa();
				$fac->cargarMoneda();
				$fac->cargarReceptor();
				$fac->cargarCertificadorFel();
				$fac->procesarAnulacion($_POST);

				$cer = $fac->getCertificador();
				$funcion = $cer->metodo_anulacion;
				
				$resp = $fac->$funcion();

				$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
				if (!empty($fac->fel_uuid_anulacion)) {
					//$fac->anularComandas();

					$datos['exito'] = true;
					$datos['factura'] = $fac;
					$datos['mensaje'] = "Datos actualizados con exito";	
				} else {
					$datos['mensaje'] = implode(". ", $fac->getMensaje());
				}
			} else {
				$datos["mensaje"] = "Documento ya se encuentra anulado.";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function imprimir($factura)
	{
		$datos = [];
		$fac = new Factura_model($factura);
		$fac->cargarFacturaSerie();
		$fac->cargarEmpresa();
		$fac->cargarSede();
		$fac->cargarMoneda();
		$fac->cargarReceptor();
		$fac->cargarCertificadorFel();
		$fac->serie->xmldte = '';
		$fac->serie->xmldte_anulacion = '';
		$fac->detalle = $fac->getDetalle(["_imprimir" => true]);
		$fac->certificador_fel = $fac->getCertificador();

		$resp = $fac->getFelRespuesta();

		if ($resp) {
			$fac->fecha_autorizacion = $resp->fecha;
		} else {
			$fac->fecha_autorizacion = '';
		}

		$comanda = $fac->getComanda();

		$fac->origen_datos = ($comanda) ? $comanda->getOrigenDatos() : null;

		$datos['factura'] = $fac;
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}
	
	public function xml($factura)
	{
		$this->output
		->set_content_type("application/xml", "UTF-8");

		$fac = new Factura_model($factura);
		$fac->cargarFacturaSerie();
		$fac->cargarEmpresa();
		$fac->cargarMoneda();
		$fac->cargarReceptor();
		$fac->procesar_factura();
		$fac->cargarCertificadorFel();

		echo $fac->getXml();
	}
}

/* End of file Factura.php */
/* Location: ./application/facturacion/controllers/Factura.php */