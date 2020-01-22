<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Catalogo_model extends CI_Model {

	private function getCatalogo($datos, $args)
	{
		//if ($datos->num_rows() > 0) {
		return isset($args["_uno"]) ? $datos->row() : $datos->result();
		//}

		//return false;
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

	public function getTipoMovimiento($args=[])
	{
		if (isset($args["tipo_movimiento"])) {
			$this->db->where("tipo_movimiento", $args["tipo_movimiento"]);
		}

		$qry = $this->db
		->order_by("descripcion")
		->get("tipo_movimiento");

		return $this->getCatalogo($qry, $args);
	}

	public function getDocumentoTipo($args=[])
	{
		if (isset($args["documento_tipo"])) {
			$this->db->where("documento_tipo", $args["documento_tipo"]);
		}

		$qry = $this->db
		//->order_by()
		->get("documento_tipo");

		return $this->getCatalogo($qry, $args);
	}

	public function getBodega($args = []){
		if (isset($args["bodega"])) {
			$this->db->where("bodega", $args["bodega"]);
		}

		$qry = $this->db
		->order_by("descripcion")
		->get("bodega");

		return $this->getCatalogo($qry, $args);
	}

	public function getProveedor($args = [])
	{
		if (isset($args["proveedor"])) {
			$this->db->where("proveedor", $args["proveedor"]);
		}

		$qry = $this->db
		->order_by("razon_social")
		->get("proveedor");

		return $this->getCatalogo($qry, $args);
	}

	public function getArticulo($args = [])
	{
		if (isset($args["articulo"])) {
			$this->db->where("articulo", $args["articulo"]);
		}

		$qry = $this->db
		->order_by("articulo")
		->get("articulo");

		return $this->getCatalogo($qry, $args);
	}

	public function getUsuario($args = [])
	{
		if(count($args) > 0) {
			foreach ($args as $key => $row) {
				if ($key != '_uno') {
					$this->db->where($key, $row);
				}
			}
		}

		$qry = $this->db
		->order_by("nombres")
		->get("usuario");

		return $this->getCatalogo($qry, $args);
	}
}

/* End of file Catalogo_model.php */
/* Location: ./application/admin/models/Catalogo_model.php */