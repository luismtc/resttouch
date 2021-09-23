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
            ->select("GROUP_CONCAT(DISTINCT a.comanda ORDER BY a.comanda SEPARATOR ',') AS comandas, GROUP_CONCAT(DISTINCT f.factura ORDER BY f.factura SEPARATOR ',') AS facturas")
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

        $data['facturas'] = $facturadas && $facturadas->facturas ? $facturadas->facturas : '';

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

        $data['comandas'] = $comandas;

        return (object)$data;
    }


    public function get_ventas_articulos($comandas = '', $facturas = '', $args = [])
    {
        $combos = [];
        $multiples = [];
        $directos = [];

        if (!empty($comandas)) {
            $combos = $this->db
                ->select('a.articulo, b.descripcion, SUM(a.cantidad) AS cantidad, SUM(a.total) AS total')
                ->join('articulo b', 'b.articulo = a.articulo')
                ->where("a.comanda IN({$comandas})")
                ->where('b.multiple', 0)
                ->where('b.combo', 1)
                ->where('a.cantidad >', 0)
                ->group_by('a.articulo, b.descripcion')
                // ->get_compiled_select('detalle_comanda a');
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
                // ->get_compiled_select('detalle_comanda a');
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
                // ->get_compiled_select('detalle_comanda a');
                ->get('detalle_comanda a')
                ->result();
        }

        $facturas_manuales = [];

        if(!empty($facturas)) {            
            $this->db->where("b.factura NOT IN({$facturas})");
        }

        $facturas_manuales = $this->db
            ->select('a.articulo, c.descripcion, SUM(a.cantidad) AS cantidad, SUM(a.total) AS total')
            ->join('factura b', 'b.factura = a.factura')
            ->join('articulo c', 'c.articulo = a.articulo')            
            ->where('b.sede', $args['idsede'])
            ->where('b.numero_factura IS NOT NULL')
            ->where('b.fel_uuid_anulacion IS NULL')
            ->where('b.fecha_factura >=', $args['fdel'])
            ->where('b.fecha_factura <=', $args['fal'])
            ->group_by('a.articulo, c.descripcion')
            // ->get_compiled_select('detalle_factura a');
            ->get('detalle_factura a')
            ->result();

        $articulos = array_merge($combos, $multiples, $directos, $facturas_manuales);
        if (!empty($articulos)) {
            $articulos = ordenar_array_objetos($articulos, 'descripcion');
        }

        return $articulos;
    }
}
