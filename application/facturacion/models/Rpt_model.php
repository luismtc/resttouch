<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Rpt_model extends General_model
{

    public function __construct()
    {
        parent::__construct();
    }


    public function get_lista_comandas($args = [])
    {
        $comandas = '';
        if (isset($args['_rango_turno']) && $args['_rango_turno']) {
            $this->db->where('DATE(g.fecha) >=', $args['fdel']);
            $this->db->where('DATE(g.fecha) <=', $args['fal']);
        } else {
            $this->db->where('f.fecha_factura >=', $args['fdel']);
            $this->db->where('f.fecha_factura <=', $args['fal']);
        }

        if (isset($args['turno_tipo'])) {
            $this->db->where('g.turno_tipo', $args['turno_tipo']);
        }

        $facturadas = $this->db
            ->select("GROUP_CONCAT(DISTINCT a.comanda ORDER BY a.comanda SEPARATOR ', ') AS comandas")
            ->join('detalle_comanda b', 'a.comanda = b.comanda')
            ->join('detalle_cuenta c', 'b.detalle_comanda = c.detalle_comanda')
            ->join('detalle_factura_detalle_cuenta d', 'c.detalle_cuenta = d.detalle_cuenta')
            ->join('detalle_factura e', 'e.detalle_factura = d.detalle_factura')
            ->join('factura f', 'f.factura = e.factura')
            ->join('turno g', 'g.turno = a.turno')
            ->where('f.numero_factura IS NOT NULL')
            ->where('f.fel_uuid_anulacion IS NULL')
            ->where('f.sede', $args['idsede'])
            ->where('a.sede', $args['idsede'])
            // ->get_compiled_select('comanda a');
            ->get('comanda a')
            ->row();

        if ($facturadas && $facturadas->comandas) {
            $comandas = $facturadas->comandas;
        }

        if (isset($args['_rango_turno']) && $args['_rango_turno']) {
            $this->db->where('DATE(e.fecha) >=', $args['fdel']);
            $this->db->where('DATE(e.fecha) <=', $args['fal']);
        } else {
            $this->db->where('DATE(a.fhcreacion) >=', $args['fdel']);
            $this->db->where('DATE(a.fhcreacion) <=', $args['fal']);
        }

        if (isset($args['turno_tipo'])) {
            $this->db->where('e.turno_tipo', $args['turno_tipo']);
        }

        $sinfactura = $this->db
            ->select("GROUP_CONCAT(DISTINCT a.comanda ORDER BY a.comanda SEPARATOR ', ') AS comandas")
            ->join('cuenta b', 'a.comanda = b.cuenta')
            ->join('cuenta_forma_pago c', 'b.cuenta = c.cuenta')
            ->join('forma_pago d', 'd.forma_pago = c.forma_pago')
            ->join('turno e', 'e.turno = a.turno')
            ->where('a.sede', $args['idsede'])
            ->where('d.sinfactura', 1)
            ->get('comanda a')
            ->row();

        if ($sinfactura && $sinfactura->comandas) {
            if ($comandas !== '') {
                $comandas .= ', ';
            }
            $comandas .= $sinfactura->comandas;
        }

        return $comandas;
    }


    public function get_ventas_articulos($comandas)
    {
        $combos = $this->db
            ->select('a.articulo, b.descripcion, SUM(a.cantidad) AS cantidad, SUM(a.total) AS total')
            ->join('articulo b', 'b.articulo = a.articulo')
            ->where("a.comanda IN({$comandas})")
            ->where('b.multiple', 0)
            ->where('b.combo', 1)
            ->where('a.cantidad >', 0)
            ->group_by('a.articulo, b.descripcion')
            ->get('detalle_comanda a')
            ->result();

        $multiples = $this->db
            ->select('a.articulo, b.descripcion, COUNT(a.articulo) AS cantidad, 0.00 AS total', false)
            ->join('articulo b', 'b.articulo = a.articulo')
            ->where("a.comanda IN({$comandas})")
            ->where('b.multiple', 0)
            ->where('b.combo', 0)
            ->where('a.total', 0)
            ->group_by('a.articulo, b.descripcion')
            ->get('detalle_comanda a')
            ->result();

        $directos = $this->db
            ->select('a.articulo, b.descripcion, SUM(a.cantidad) AS cantidad, SUM(a.total) AS total')
            ->join('articulo b', 'b.articulo = a.articulo')
            ->where("a.comanda IN({$comandas})")
            ->where('b.multiple', 0)
            ->where('b.combo', 0)
            ->where('a.total >', 0)
            ->where('a.cantidad >', 0)
            ->group_by('a.articulo, b.descripcion')
            ->get('detalle_comanda a')
            ->result();

        $articulos = array_merge($combos, $multiples, $directos);
        $articulos = ordenar_array_objetos($articulos, 'descripcion');

        return $articulos;
    }
}
