<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuenta_model extends General_Model {

	public $cuenta;
	public $comanda;
	public $nombre;
	public $numero;
	public $propina_monto;
	public $propina_porcentaje;
	public $cerrada;

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
		$datos = [];
		$tmp = $this->db
		->join("resttouch.detalle_comanda b", "a.detalle_comanda = b.detalle_comanda")
		->where("a.cuenta_cuenta", $this->cuenta)
		->get("resttouch.detalle_cuenta a")
		->result();

		foreach ($tmp as $row) {
			$row->numero_cuenta = $this->numero;
			$det = new Dcomanda_model($row->detalle_comanda);
			$row->articulo = $det->getArticulo();
			$datos[] = $row;
		}
		return $datos;
	}

	public function cobrar($pago)
	{
		if (is_object($pago) && isset($pago->forma_pago) && isset($pago->monto)) {	
			$this->db
			->set("cuenta", $this->cuenta)
			->set("forma_pago", $pago->forma_pago)
			->set("monto", $pago->monto)
			->insert("resttouch.cuenta_forma_pago");

			return $this->db->affected_rows() > 0;
		}

		return false;
	}
}

/* End of file Cuenta_model.php */
/* Location: ./application/restaurante/models/Cuenta_model.php */