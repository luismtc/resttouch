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
			'Factura_model'
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
				$req['usuario'] = $data->idusuario;
				$req['certificador_fel'] = $sede->certificador_fel;
				
				$fac = new Factura_model();
				$result = $fac->guardar($req);
				$fac->cargarEmpresa();
				$pimpuesto = $fac->empresa->porcentaje_iva +1;
				if($result) {
					foreach ($req['cuentas'] as $row) {
						$cta = new Cuenta_model($row['cuenta']);
						foreach ($cta->getDetalle() as $det) {
							$det->bien_servicio = $det->articulo->bien_servicio;
							$det->articulo = $det->articulo->articulo;
							$det->precio_unitario = $det->precio;
							$det->monto_base = number_format($det->total / $pimpuesto, 2);
							$det->monto_iva = $det->total - $det->monto_base;	
							$fac->setDetalle((array) $det);
						}
					}
					$fac->cargarFacturaSerie();
					$fac->cargarMoneda();
					$fac->cargarReceptor();
					$fac->procesar_factura();
					$fac->cargarCertificadorFel();
					$funcion = $fac->certificador_fel->metodo_factura;
					$resp = $fac->$funcion();
					$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
					if (!empty($fac->numero_factura)) {
						$fact = new Factura_model($fac->factura);
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
					$datos['factura'] = $fact;
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