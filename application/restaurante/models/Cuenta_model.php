<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuenta_model extends General_Model {

	public $cuenta;
	public $forma_pago;
	public $comanda;
	public $nombre;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("resttouch.cuenta");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function guardarDetalle(Array $args, $id = '')
	{
		$det = new Dcuenta_model($id);
		$args['cuenta_cuenta'] = $this->cuenta;
		$result = $det->guardar($args);

		if(!$result) {
			$this->mensaje = $det->getMensaje();
		}

		return $result;
	}

	public function getDetalle($args = [])
	{
		return $this->db
		->join("resttouch.detalle_comanda b", "a.detalle_comanda = b.detalle_comanda")
		->where("a.cuenta_cuenta", $this->cuenta)
		->get("resttouch.detalle_cuenta a")
		->result();
	}


}

/* End of file Cuenta_model.php */
/* Location: ./application/restaurante/models/Cuenta_model.php */