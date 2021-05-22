<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte_model extends CI_Model {

	public function get_ingresos($args = [])
	{
		$group = "";
		if (isset($args['turno_tipo'])) {
			$this->db->where('i.turno_tipo', $args['turno_tipo']);
		}

		if (isset($args['descuento'])) {
			$this->db->where('f.descuento', $args['descuento']);
		}

		if (isset($args['facturadas'])) {
			$this->db->where('e.numero_factura is not null');
			$this->db->where("e.fel_uuid_anulacion is null");
		}

		if (isset($args['detalle'])) {
			$group .= ", a.factura";
		}

		if (isset($args['_grupo']) && $args['_grupo'] == 2) {
			$this->db->group_by("h.sede");
			$group .= ", a.sede";
		}

		if (isset($args['sede'])) {
			if (is_array($args['sede'])) {
				$this->db->where_in("h.sede", $args['sede']);
			} else {
				$this->db->where("h.sede", $args['sede']);
			}
		}

		if (!isset($args['comandas'])) {
			$this->db->where("e.fel_uuid_anulacion is null");

			if (isset($args['_rango_turno']) && $args['_rango_turno']) {
				$this->db
					->where("f.sinfactura", 0)
					->where("date(i.fecha) >=", $args['fdel'])
					->where("date(i.fecha) <=", $args['fal']);
			} else {
				$this->db
				 ->where("e.fecha_factura >=", $args['fdel'])
				 ->where("e.fecha_factura <=", $args['fal']);	
			}		
		} else {
			$this->db->where("f.sinfactura", 1);
			
			if (isset($args['_rango_turno']) && $args['_rango_turno']) {
				$this->db
					->where("date(i.fecha) >=", $args['fdel'])
					->where("date(i.fecha) <=", $args['fal']);
			} else {
				$this->db
				 ->where("date(h.fhcreacion) >=", $args['fdel'])
				 ->where("date(h.fhcreacion) <=", $args['fal']);
			}				 
		}

		$tmp = $this->db
		->select("
			a.forma_pago, 
			a.documento,
			f.descripcion, 
			a.monto, 
			a.propina,
			ifnull(e.factura, concat('Comanda ', h.comanda)) as factura,
			ifnull(e.numero_factura, concat('Comanda ', h.comanda)) as numero_factura,
			ifnull(e.fecha_factura, date(h.fhcreacion)) as fecha_factura,
			h.sede,
			j.nombre as nsede")
		->from("cuenta_forma_pago a")
		->join("detalle_cuenta b", "a.cuenta = b.cuenta_cuenta")
		->join("detalle_factura_detalle_cuenta c", "b.detalle_cuenta = c.detalle_cuenta", "left")
		->join("detalle_factura d", "c.detalle_factura = d.detalle_factura", "left")
		->join("factura e", "d.factura = e.factura", "left")
		->join("forma_pago f", "a.forma_pago = f.forma_pago")
		->join("cuenta g", "g.cuenta = b.cuenta_cuenta")
		->join("comanda h", "h.comanda = g.comanda")
		->join("turno i", "i.turno = h.turno")
		->join("sede j", "j.sede = h.sede")		
		->group_by("a.cuenta_forma_pago")
		->get_compiled_select();

		return $this->db->query("
			select 
				a.forma_pago,
				a.documento,
				a.descripcion, 
				sum(a.monto) as monto, 
				sum(a.propina) as propina,
				a.fecha_factura,
				a.numero_factura,
				a.sede,
				nsede
			from ( {$tmp} ) a
			group by a.forma_pago {$group}")
			->result();
	}

	public function getRangoComandas($args)
	{
		if (isset($args['turno_tipo'])) {
			$this->db->where('b.turno_tipo', $args['turno_tipo']);
		}

		if (is_array($args['sede'])) {
			$this->db
				 ->where_in("b.sede", $args['sede'])
				 ->group_by("b.sede");
		} else {
			$this->db->where("b.sede", $args['sede']);
		}
		
		return $this->db
					->select("
						max(comanda) as maxComanda, 
						min(comanda) as minComanda")
					->join("turno b", "b.turno = a.turno")
					->where("b.inicio >=", $args['fdel'])
				 	->where("b.fin <=", $args['fal'])
					->get("comanda a")
					->row();	
	}

	public function getTablas($args = [])
	{
		$tab = $this->config->item("tabla");
		$datos = [];
		$datos = [];
		if (empty($args)) {
			$datos = $tab;
		} else {
			foreach ($tab as $row) {
				if (isset($args['tabla']) && $row['tabla'] == $args['tabla']) {
					$datos = $row;
				} 
			}
		}

		return $datos;
	}

	public function getCampos($args = [])
	{
		$campo = $this->config->item("campos");
		$datos = [];
		if (empty($args)) {
			$datos = $campo;
		} else {
			foreach ($campo as $row) {
				$tabla = $this->getTablas(["tabla" => $row['tabla']]);
				$row['columna'] = "{$tabla['entidad']}.{$row['campo']}";

				if (isset($args['campos']) && in_array($row['tabla_campo'],$args['campos'])){
					$datos[] = $row;
				} else {
					if (isset($args['por_fecha']) && $row['por_fecha'] == 1) {
						$datos[] = $row;
					} else if(isset($args['ordenar_por']) && $row['ordenar_por'] == 1){
						$datos[] = $row;
					}
				}
			}
		}

		return isset($args['uno']) ? $datos[0] :$datos;
	}

	public function autoconsulta($args = [])
	{
		$campos = $this->getCampos($args);
		$tablas = $this->getTablas();
		$temp   = $this->getCampos(["campos" => [$args["fecha"]], "uno" => true]);
		$xfecha = "{$temp['columna']}";

		$this->db
			 ->where("date({$xfecha}) between '{$args["fdel"]}' and '{$args["fal"]}'")
			 ->where("factura.sede", $args['sede']);

		if (isset($args["orden"])) {
			$temp = $this->getCampos(["campos" => [$args["orden"]], "uno" => true]);
			$xorden = "{$temp['columna']}";
		}

		foreach ($campos as $row) {
			if ($row['compuesto'] == 1) {
				$this->db->select("{$row['campo']} as {$row['descripcion']}");
			} else {
				$this->db->select("{$row['columna']} as {$row['descripcion']}");
			}
		}

		foreach ($tablas as $row) {
			$tbl = $row['entidad'];

			if ($row['orden'] == 1) {
				$this->db->from($tbl);
			} else {
				$this->db->join($tbl, $row['condicion'], $row['accion']);
			}
		}
		
		# $this->db->group_by("detalle_factura.detalle_factura");

		$tmp = $this->db->get();
		if ($tmp) {
			return $tmp->result();
		}

		return [];
	}

}

/* End of file Reporte_model.php */
/* Location: ./application/restaurante/models/Reporte_model.php */