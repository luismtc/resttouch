<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo_model extends CI_Model {

	private function getCatalogo($datos, $args)
	{
		if ($datos->num_rows() > 0) {
			return isset($args["uno"]) ? $datos->row() : $datos->result();
		}

		return false;
	}

	public function getFormaPago($args=[])
	{
		if (isset($args["forma_pago"])) {
			$this->db->where("forma_pago", $args["forma_pago"]);
		} else {
			$this->db->where("activo", 1);
		}

		$qry = $this->db
		->order_by("descripcion")
		->get("forma_pago");

		return $this->getCatalogo($qry, $args);
	}

	public function getSerieFactura($args=[])
	{
		if (isset($args["factura_serie"])) {
			$this->db->where("factura_serie", $args["factura_serie"]);
		} else {
			$this->db->where("activo", 1);
		}

		$qry = $this->db
		->order_by("serie")
		->get("factura_serie");

		return $this->getCatalogo($qry, $args);
	}
}

/* End of file Catalogo_model.php */
/* Location: ./application/admin/models/Catalogo_model.php */