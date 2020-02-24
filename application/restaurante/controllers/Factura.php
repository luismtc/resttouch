<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
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
			if (isset($req['cliente']) && isset($req['moneda']) && isset($req['factura_serie']) && isset($req['certificador_fel'])) {
				$req['usuario'] = $data->idusuario;
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
					$resp = $fac->enviar();
					$fac->setBitacoraFel(['resultado' => json_encode($resp)]);

					$datos['exito'] = true;
					$datos['factura'] = $fac;
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
		$resp = $fac->enviar();

		echo "<pre>";
		print_r ($resp);
		echo "</pre>";
		$fac->setBitacoraFel(['resultado' => json_encode($resp)]);

	}*/
}

/* End of file Factura.php */
/* Location: ./application/restaurante/controllers/Factura.php */