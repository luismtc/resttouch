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
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (true) {

				$fac = new Factura_model();
				$result = $fac->guardar($req);

				if($result) {
					foreach ($req['cuentas'] as $row) {
						$cta = new Cuenta_model($row['cuenta']);
						foreach ($cta->getDetalle() as $det) {
							$det->bien_servicio = $det->articulo->bien_servicio;
							$det->articulo = $det->articulo->articulo;
							$det->precio_unitario = $det->precio;
							$det->monto_base = number_format($det->total / 1.12, 2);
							$det->monto_iva = $det->total - $det->monto_base;

							$fac->setDetalle((array) $det);
						}
					}
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

	public function test($fact)
	{
		$fac = new Factura_model($fact);
		$fac->cargarFacturaSerie();
		$fac->cargarEmpresa();
		$fac->cargarMoneda();
		$fac->cargarReceptor();
		$fac->procesar_factura();
		/*
			GT.000000123456.FEL2019
			nit 000000123456
			clave de usuario FEL2019
			CONTRASEÑA Eh14%46_
			vigencia 19/03/2020
		*/
		$ch = curl_init("https://felgttestaws.digifact.com.gt/felapi/FelRequest?NIT=000000123456&TIPO=CERTIFICATE_DTE_XML_TOSIGN");
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $fac->getXml());
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
		curl_setopt($ch, CURLOPT_USERAGENT, "C807");
		$res = curl_exec($ch);
		curl_close($ch);

	}
}

/* End of file Factura.php */
/* Location: ./application/restaurante/controllers/Factura.php */