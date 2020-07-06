<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cuenta_model extends General_Model {

	public $cuenta;
	public $comanda;
	public $nombre;
	public $numero;
	public $propina_monto = 0;
	public $propina_porcentaje = 0;
	public $cerrada = 0;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("cuenta");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function imprimirDetalle()
	{
		$com = new Comanda_model($this->comanda);
		foreach ($this->getDetalle() as $row) {

			$com->guardarDetalle([
				'detalle_comanda' => $row->detalle_comanda,
				'impreso' => 1
			]);
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

	public function facturada()
	{
		$tmp = $this->db
					->select("count(a.detalle_cuenta) det, count(b.detalle_cuenta) fact")
					->from("detalle_cuenta a")
					->join("detalle_factura_detalle_cuenta b", "a.detalle_cuenta = b.detalle_cuenta", "left")
					->where("cuenta_cuenta", $this->getPK())
					->get()
					->row();

		return $tmp->det == $tmp->fact;
	}

	public function getDetalle($args = [])
	{
		$datos = [];
		if (isset($args['descuento'])) {
			$this->db->where('d.descuento', $args['descuento']);
		}
		$tmp = $this->db
		->select("b.*, d.descuento, a.*")
		->join("detalle_comanda b", "a.detalle_comanda = b.detalle_comanda")
		->join("articulo c", "b.articulo = c.articulo")
		->join("categoria_grupo d", "d.categoria_grupo = c.categoria_grupo")
		->where("a.cuenta_cuenta", $this->cuenta)
		->where("b.total >", 0)
		->get("detalle_cuenta a")
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
			if (isset($pago->documento)) {
				$this->db->set("documento", $pago->documento);
			}

			if (isset($pago->observaciones)) {
				$this->db->set("observaciones", $pago->observaciones);
			}

			$this->db
			->set("cuenta", $this->cuenta)
			->set("forma_pago", $pago->forma_pago)
			->set("monto", $pago->monto)
			->insert("cuenta_forma_pago");

			return $this->db->affected_rows() > 0;
		}

		return false;
	}

	public function get_descuento()
	{
		$total = $this->db
					->select("sum(monto) as total")
					->where("cuenta", $this->getPK())
					->get("cuenta_forma_pago")
					->row();

		$desc = $this->db
					 ->select("sum(monto) as descuento")
					 ->join("forma_pago b", "a.forma_pago = b.forma_pago")
					 ->where("cuenta", $this->getPK())
					 ->where("b.descuento", 1)
					 ->get("cuenta_forma_pago")
					 ->row();

		if ($desc->descuento) {
			return $desc->descuento / $total->total;	
		}
		
		return 0;
	}
}

/* End of file Cuenta_model.php */
/* Location: ./application/restaurante/models/Cuenta_model.php */