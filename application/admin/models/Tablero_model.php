<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tablero_model extends General_model {

	public function getServiciosFacturados($args = [])
	{
		$this->db->query("SET @@lc_time_names = 'es_GT'");
		
		if (isset($args["fdel"])) {
			$this->db->where('b.fecha_factura >= ', $args["fdel"]);
		}

		if (isset($args["fal"])) {
			$this->db->where('b.fecha_factura <= ', $args["fal"]);
		}

		return $this->db
		->select("
			(a.total-a.descuento) as total, 
		    a.bien_servicio,
		    b.fecha_factura,
		    monthname(b.fecha_factura) as mes,
		    dayname(b.fecha_factura) as dia,
		    c.descripcion,
		    d.descripcion as grupo,
		    e.nombre as sede,
		    if(f.detalle_factura is null, 'Manual','Comanda') as operacion,
		    if(i.domicilio=1,'SI','NO') as domicilio,
		    k.descripcion as turno")
		->from("detalle_factura a")
		->join("factura b", "b.factura = a.factura")
		->join("articulo c", "c.articulo = a.articulo")
		->join("categoria_grupo d", "d.categoria_grupo = c.categoria_grupo")
		->join("sede e", "e.sede = b.sede")
		->join("detalle_factura_detalle_cuenta f", "f.detalle_factura = a.detalle_factura", "left")
		->join("detalle_cuenta g", "g.detalle_cuenta = f.detalle_cuenta", "left")
		->join("detalle_comanda h", "h.detalle_comanda = g.detalle_comanda", "left")
		->join("comanda i", "i.comanda = h.comanda", "left")
		->join("turno j", "j.turno = i.turno", "left")
		->join("turno_tipo k", "k.turno_tipo = j.turno_tipo", "left")
		->where("b.fel_uuid is not null")
		->where("b.fel_uuid_anulacion is null")
		->get()
		->result();
	}

}

/* End of file Tipo_usuario_model.php */
/* Location: ./application/admin/models/Tipo_usuario_model.php */