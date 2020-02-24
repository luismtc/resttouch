<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Factura extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model(['Factura_model', 'Dfactura_model']);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = '')
	{
		$fac = new Factura_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if (empty($id) || empty($fac->numero_factura)) {				
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
				$det = $fac->setDetalle($req, $id);;

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
		$facturas = $this->Factura_model->buscar($_GET);
		$datos = [];
		if(is_array($facturas)) {
			foreach ($facturas as $row) {
				$tmp = new Factura_model($row->factura);
				$row->tipo_movimiento = $tmp->getTipoMovimiento();
				$row->proveedor = $tmp->getProveedor();
				$row->bodega = $tmp->getBodega();
				$row->bodega_origen = $tmp->getBodegaOrigen();
				$row->usuario = $tmp->getUsuario();
				$datos[] = $row;
			}
		} else if($factura){
			$tmp = new Factura_model($facturas->factura);
			$facturas->tipo_movimiento = $tmp->getTipoMovimiento();
			$facturas->proveedor = $tmp->getProveedor();
			$facturas->bodega = $tmp->getBodega();
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
		$fac = new Factura_model($factura);
		$fac->cargarFacturaSerie();
		$fac->cargarEmpresa();
		$fac->cargarMoneda();
		$fac->cargarReceptor();
		$fac->procesar_factura();
		$resp = $fac->enviar();
		$fac->setBitacoraFel(['resultado' => json_encode($resp)]);
		$datos['exito' => true, 'mensaje' => 'Datos actualizados con exito', 'factura' => $fac];
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode());	
	}

}

/* End of file Factura.php */
/* Location: ./application/facturacion/controllers/Factura.php */