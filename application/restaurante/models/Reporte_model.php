<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte_model extends CI_Model {

	public function get_ingresos($args = [])
	{
		$tmp = $this->db
					->select("f.*, sum(a.monto) as monto")					
					->join("detalle_cuenta b", "a.cuenta = b.cuenta_cuenta")
					->join("detalle_factura_detalle_cuenta c", "b.detalle_cuenta = c.detalle_cuenta")
					->join("detalle_factura d", "c.detalle_factura = d.detalle_factura")
					->join("factura e", "d.factura = e.factura")
					->join("forma_pago f", "a.forma_pago = f.forma_pago")
					->where("e.sede", $args['sede'])
					->where("e.fecha_factura >=", $args['fdel'])
				 	->where("e.fecha_factura <=", $args['fal'])
				 	->where("e.fel_uuid_anulacion is null")
					->group_by("a.forma_pago")
					->get("cuenta_forma_pago a");

		if ($tmp && $tmp->num_rows() > 0) {
			return $tmp->result();
		}

		return [];
	}	

	public function getRangoComandas($args)
	{
		return $this->db
					->select("
						max(comanda) as maxComanda, 
						min(comanda) as minComanda")
					->join("turno b", "b.turno = a.turno")
					->where("b.inicio >=", $args['fdel'])
				 	->where("b.fin <=", $args['fal'])
				 	->where("b.sede", $args['sede'])
					->get("comanda a")
					->row();	
	}

}

/* End of file Reporte_model.php */
/* Location: ./application/restaurante/models/Reporte_model.php */