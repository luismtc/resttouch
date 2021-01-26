<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
        	'Egreso_model', 
        	'EDetalle_model',
        	'Ingreso_model',
        	'IDetalle_Model',
        	'Receta_model',
        	'Articulo_model',
        	'Presentacion_model',
        	'Configuracion_model'
        ]);
	}

	function test()
	{
		$registro = new Registro();
		echo 'string';
	}

	public function index()
	{	
		//require FCPATH.'application/wms/controllers/Api.php';
		$server = new SOAPServer(
			FCPATH.'application/wms/libraries/rtapi.wsdl', 
			[
				'uri' => url_base("wms.php/api")
			]
		);
		//$server->addFunction("set_egreso");
		$server->setClass('Api');
		//$server->setObject($this);
	    //start the SOAP requests handler
	    $server->handle();
	}

	public function set_egreso($egreso, $key = "")
	{	
		$ci =& get_instance();
		$res = ["exito" => 0, "mensaje" => $key];
		$req = simplexml_load_string($egreso);
		if (!empty($key)) {
			$ci->load->library('Registro');
			$registro = new Registro($egreso);
			$registro->setCatalogo(new Catalogo_model());
			//$res['mensaje'] = $registro->setDB($key);
			if ($registro->setDB($key)) {
				$egr = new Egreso_model();

				$egr->bodega = isset($req->encabezado->bodega) ? $req->encabezado->bodega : 1;
				
				if (empty($id) || $egr->estatus_movimiento == 1) {
					

					$registro->setEgreso($egr);

					$res['exito'] = $registro->guardarEgreso();					
					if($res['exito']) {
						$egr = $registro->getEgreso();
						$res['mensaje'] = "Datos Actualizados con Exito";
						$res['egreso'] = $egr;
						if (isset($req->detalle) && isset($req->detalle->item)) {
							
							for ($i = 0; $i < count($req->detalle->item); $i++) {
								$row = $req->detalle->item[$i];
								$egr->guardarDetalleApi($row);
							}
							
						}
					} else {
						$res['mensaje'] = implode(",", $registro->getEgreso()->getMensaje());
					}	
				} else {
					$res['mensaje'] = "Solo puede editar egresos en estatus Abierto";
				}
			} else {
				$res['mensaje'] = "Llave invalida";
			}
		} else {
			$res['mensaje'] = "Hacen falta datos obligatorios para poder continuar, apikey";
		}

		$xml = new DOMDocument('1.0');
		$xml->loadXML(arrayToXml($res, "<resultado/>"));

		return $xml->saveXML();
	}

}

/* End of file Api.php */
/* Location: ./application/wms/controllers/Api.php */