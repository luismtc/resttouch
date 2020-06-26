<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reporte_model extends CI_Model {

	private $sqlIngreso;	
	private $sqlEgreso;
	private $sqlComanda;
	private $sqlFactura;
	private $filtros = [];

	public function __construct($args=[])
	{
		parent::__construct();
		if (!empty($args)) {
			$this->filtros = $args;
		}
	}

	function consultaIngresos($args = [])
	{
		$where = 'where ';

		if (isset($args['fecha'])) {
			$where .= " date(e.fecha) <= '{$args['fecha']}'";
		}

		$this->sqlIngreso = <<<EOT
select
	sum(ifnull(a.cantidad, 0)) as total_ingreso,
	b.articulo
from ingreso_detalle a
join articulo b on a.articulo = b.articulo
join categoria_grupo c on c.categoria_grupo = b.categoria_grupo
join categoria d on d.categoria = c.categoria
join ingreso e on e.ingreso = a.ingreso
join bodega f on f.bodega = e.bodega and f.sede = d.sede
{$where}
group by b.articulo
EOT;	
	}

	function consultaEgresos($args = [])
	{
		$where = 'where ';

		if (isset($args['fecha'])) {
			$where .= " date(e.fecha) <= '{$args['fecha']}'";
		}

		$this->sqlEgreso = <<<EOT
select
	sum(ifnull(a.cantidad, 0)) as total_egreso,
	b.articulo
from egreso_detalle a
join articulo b on a.articulo = b.articulo
join categoria_grupo c on c.categoria_grupo = b.categoria_grupo
join categoria d on d.categoria = c.categoria
join egreso e on e.egreso = a.egreso
join bodega f on f.bodega = e.bodega and f.sede = d.sede
{$where}
group by b.articulo
EOT;
	}

	function consultaComandas($args = [])
	{
		$where = 'where ';

		if (isset($args['fecha'])) {
			$where .= " date(f.inicio) <= '{$args['fecha']}'";
		}

		$this->sqlComanda = <<<EOT
select 
	sum(ifnull(a.cantidad, 0)) as total_comanda,
	b.articulo
from detalle_comanda a
join articulo b on a.articulo = b.articulo
join categoria_grupo c on c.categoria_grupo = b.categoria_grupo
join categoria d on d.categoria = c.categoria
join comanda e on e.comanda = a.comanda
join turno f on e.turno = f.turno and f.sede = d.sede 
{$where}
group by a.articulo
EOT;

	}

	function consultaFacturas($args = [])
	{
		$where = '';

		if (isset($args['fecha'])) {
			$where .= " and f.fecha_factura <= '{$args['fecha']}'";
		}

		$this->sqlFactura = <<<EOT
select
	sum(ifnull(a.cantidad, 0)) as total_factura,
	b.articulo
from detalle_factura a
join articulo b on a.articulo = b.articulo
join categoria_grupo c on c.categoria_grupo = b.categoria_grupo
join categoria d on d.categoria = c.categoria
left join detalle_factura_detalle_cuenta e on a.detalle_factura = e.detalle_factura
join factura f on a.factura = f.factura and f.sede = d.sede
where e.detalle_factura_detalle_cuenta is null 
{$where}
group by a.articulo
EOT;
	}

	function getExistencias($args = [])
	{
		$this->consultaIngresos($args);
		$this->consultaEgresos($args);
		$this->consultaComandas($args);
		$this->consultaFacturas($args);
		if (isset($args['sede'])) {
			$this->db->where('d.sede', $args['sede']);
		}
		$qry = $this->db
					->select("
						art.*,
						ifnull(ing.total_ingreso, 0) as ingresos,
						ifnull(com.total_comanda, 0) as comandas,
						ifnull(fac.total_factura, 0) as facturas,
						ifnull(egr.total_egreso, 0) as egresos,
						ifnull(egr.total_egreso, 0) + ifnull(com.total_comanda, 0) + ifnull(fac.total_factura, 0)  as total_egresos,
						(ifnull(ing.total_ingreso, 0) - ifnull(egr.total_egreso, 0) - ifnull(com.total_comanda, 0) - ifnull(fac.total_factura, 0)) as existencia
					")
					->from("articulo art")
					->join("({$this->sqlIngreso}) ing", "ing.articulo = art.articulo", "left")
					->join("({$this->sqlEgreso}) egr", "egr.articulo = art.articulo", "left")
					->join("({$this->sqlComanda}) com", "com.articulo = art.articulo", "left")
					->join("({$this->sqlFactura}) fac", "fac.articulo = art.articulo", "left")
					->join("categoria_grupo b", "art.categoria_grupo = b.categoria_grupo")
					->join("categoria d", "d.categoria = b.categoria")
					->order_by("art.articulo")
					->get();

		if ($qry) {
			return $qry->result();
		}

		return [];
	}
}

/* End of file Reporte_model.php */
/* Location: ./application/wms/models/Reporte_model.php */