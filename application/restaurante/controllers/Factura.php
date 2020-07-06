<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->add_package_path('application/facturacion');
		$this->load->model([
			'Dfactura_model',
			'Usuario_model',
			'Catalogo_model',
			'Cuenta_model',
			'Dcomanda_model',
			'Dcuenta_model',
			'Factura_model',
			'Articulo_model',
			'Cliente_model'
		]);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (isset($req['cliente']) && isset($req['moneda']) && isset($req['factura_serie'])) {
				$sede = $this->Catalogo_model->getSede(['sede' => $data->sede, '_uno' => true]);
				$clt = new Cliente_model($req['cliente']);

				$req['usuario'] = $data->idusuario;
				$req['sede'] = $data->sede;
				$req['certificador_fel'] = $sede->certificador_fel;
				$req["correo_receptor"] = $clt->correo;
				
				$fac = new Factura_model();
				$result = $fac->guardar($req);
				$fac->cargarEmpresa();
				$pimpuesto = $fac->empresa->porcentaje_iva +1;
				if($result) {
					foreach ($req['cuentas'] as $row) {
						$cta = new Cuenta_model($row['cuenta']);
						$pdesc = $cta->get_descuento();
						foreach ($cta->getDetalle() as $det) {
							$det->bien_servicio = $det->articulo->bien_servicio;
							$det->articulo = $det->articulo->articulo;
							
							if ($det->descuento == 1) {
								$det->descuento = $det->total * $pdesc;	
							} else {
								$det->descuento = 0;
							}
							
							$det->precio_unitario = $det->precio;
							$total = $det->total - $det->descuento;

							if ($fac->exenta) {
								$det->monto_base = $total;
							} else {
								$det->monto_base = $total / $pimpuesto;
							}
							$det->monto_iva = $total - $det->monto_base;	
							$fac->setDetalle((array) $det);
						}
					}
					$fac->cargarFacturaSerie();
					$fac->cargarMoneda();
					$fac->cargarReceptor();
					$fac->cargarSede();
					$fac->cargarCertificadorFel();
					$fac->procesar_factura();
					
					$funcion = $fac->getCertificador()->metodo_factura;
					$resp = $fac->$funcion();
					$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
					if (!empty($fac->numero_factura)) {
						$fact = new Factura_model($fac->factura);
						$fac->cargarSede();
						$fac->detalle = $fac->getDetalle();
						$fact->guardar([
							"numero_factura" => $fac->numero_factura,
							"serie_factura" => $fac->serie_factura,
							"fel_uuid" => $fac->fel_uuid
						]);
						$datos['exito'] = true;
						$datos['mensaje'] = "Datos actualizados con exito";	
					} else {						
						$datos['mensaje'] = "Ocurrio un error al enviar la factura, intente nuevamente";			
					}
					$datos['factura'] = $fac;
				} else {
					$datos['mensaje'] = "Ocurrio un error al guardar la factura, intente nuevamente";	
				}

			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";	
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}	

		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));	
	}

	/*public function test($fact)
	{
		$fac = new Factura_model($fact);
		$fac->cargarFacturaSerie();
		$fac->cargarEmpresa();
		$fac->cargarMoneda();
		$fac->cargarReceptor();
		$fac->procesar_factura();
		$resp = $fac->enviarDigiFact();

		

	}*/
}

/* End of file Factura.php */
/* Location: ./application/restaurante/controllers/Factura.php */