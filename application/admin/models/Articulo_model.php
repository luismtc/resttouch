<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Articulo_model extends General_model {

	public $articulo;
	public $categoria_grupo;
	public $presentacion;
	public $descripcion;
	public $precio;
	public $bien_servicio;
	public $existencias;
	public $shopify_id;
	public $codigo = '';

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("articulo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getCategoriaGrupo()
	{
		return $this->db
					->where("categoria_grupo", $this->categoria_grupo)
					->get("categoria_grupo")
					->row();
	}

	public function getPresentacion()
	{
		return $this->db
					->where("presentacion", $this->presentacion)
					->get("presentacion")
					->row();
	}

	public function guardarReceta(Array $args, $id = '')
	{
		$rec = new Receta_model($id);
		$args['receta'] = $this->articulo;
		$result = $rec->guardar($args);

		if($result) {
			return $rec;
		}

		$this->mensaje = $rec->getMensaje();

		return $result;
	}

	public function getReceta($args = [])
	{
		if (isset($args['_principal'])) {
			$args['articulo'] = $this->articulo;
		} else {
			$args['receta'] = $this->articulo;
		}
		$args['anulado'] = 0;
		$det = $this->Receta_model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new Receta_model($row->articulo_detalle);
				$row->articulo = $detalle->getArticulo();
				$row->medida = $detalle->getMedida();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new Receta_model($det->articulo_detalle);
			$det->articulo = $detalle->getArticulo();
			$det->medida = $detalle->getMedida();
			$datos[] = $det;
		}

		return $datos;
	}

	public function getVentaReceta($art = null)
	{
		$articulo = $this->articulo;
		if ($art !== null) {
			$articulo = $art;
		}

		$comandas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("comanda e", "e.comanda = a.comanda")
						 ->join("turno f", "e.turno = f.turno and f.sede = d.sede")
						 ->where("a.articulo", $articulo)
						 ->get("detalle_comanda a")
						 ->row();//total ventas comanda

		$facturas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("detalle_factura_detalle_cuenta e", "a.detalle_factura = e.detalle_factura", "left")
						 ->join("factura f", "a.factura = f.factura and f.sede = d.sede")
						 ->where("a.articulo", $articulo)
						 ->where("e.detalle_factura_detalle_cuenta is null")
						 ->get("detalle_factura a")
						 ->row();//total ventas factura manual
		return $comandas->total + $facturas->total;
	}

	function actualizarExistencia()
	{
		if ($this->getPK()) {
			$receta = $this->getReceta();
			$principal = $this->getReceta(["_principal" => true]);
			if (count($receta) > 0) {
				$grupos = [];
				$venta = $this->getVentaReceta();
				foreach ($receta as $row) {				
					$ventaR = $this->getVentaReceta($row->articulo->articulo);
					$existR = $this->obtenerExistencia($row->articulo->articulo, true);
					$existR = $existR - ($venta * $row->cantidad) - $ventaR;
					$art = new Articulo_model($row->articulo->articulo);
					$art->guardar(['existencias' => $existR]);

					$grupos[] = (int)($art->existencias / $row->cantidad);
				}

				$exist = min($grupos);
			} else if (count($principal) > 0){
				$grupos = [];
				$exist = $this->obtenerExistencia($this->articulo);
				foreach ($principal as $row) {
					$venta = $this->getVentaReceta($row->receta);
					$egr = $venta * $row->cantidad;
					$exist = $exist - $egr;
				}
			} else {
				$exist = $this->obtenerExistencia($this->articulo);
			}

			return $this->guardar(['existencias' => $exist]);
		}
	}

	public function obtenerExistencia($articulo, $receta = false)
	{

		$ingresos = $this->db
						 ->select("
						 	sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("ingreso e", "e.ingreso = a.ingreso")
						 ->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						 ->where("a.articulo", $articulo)
						 ->get("ingreso_detalle a")
						 ->row(); //total ingresos

		$egresos = $this->db
						->select("sum(ifnull(cantidad, 0)) as total")
						->where("articulo", $articulo)
						->get("egreso_detalle")
						->row();//total egresos wms

		if (!$receta) {
			$venta = $this->getVentaReceta();
		} else {
			$venta = 0;
		}


		return $ingresos->total - ($egresos->total + $venta);
	}

	function getIngresoEgreso($articulo, $args=[])
	{
		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		if ($args['tipo'] == 1) {
			$ingresos = $this->db
						 ->select("
						 	sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("ingreso e", "e.ingreso = a.ingreso")
						 ->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						 ->where("a.articulo", $articulo)
						 ->where("date(e.fecha) <= ", $args['fecha'])
						 ->get("ingreso_detalle a")
						 ->row(); //total ingresos

			return $ingresos->total;
		} else {
			$egresos = $this->db
						->select("sum(ifnull(cantidad, 0)) as total")
						->join("articulo b", "a.articulo = b.articulo")
						->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						->join("categoria d", "d.categoria = c.categoria")
						->join("egreso e", "e.egreso = a.egreso")
						->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						->where("a.articulo", $articulo)
						->get("egreso_detalle a")
						->row();//total egresos wms

			return $egresos->total;
		}
	}

	function getComandaFactura($articulo, $args = [])
	{
		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		if ($args['tipo'] == 1) {
			$comandas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("comanda e", "e.comanda = a.comanda")
						 ->join("turno f", "e.turno = f.turno and f.sede = d.sede")
						 ->where("a.articulo", $articulo)
						 ->get("detalle_comanda a")
						 ->row();//total ventas comanda	

			return $comandas->total;
		} else {
			$facturas = $this->db
							 ->select("sum(ifnull(a.cantidad, 0)) as total")
							 ->join("articulo b", "a.articulo = b.articulo")
							 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
							 ->join("categoria d", "d.categoria = c.categoria")
							 ->join("detalle_factura_detalle_cuenta e", "a.detalle_factura = e.detalle_factura", "left")
							 ->join("factura f", "a.factura = f.factura and f.sede = d.sede")
							 ->where("a.articulo", $articulo)
							 ->where("e.detalle_factura_detalle_cuenta is null")
							 ->get("detalle_factura a")
							 ->row();//total ventas factura manual

			return $facturas->total;
		}
	}

	public function getExistencias($args)
	{
		$receta = $this->getReceta();
		$principal = $this->getReceta(["_principal" => true]);
		$ingresos = 0;
		$egresos = 0;
		$comandas = 0;
		$facturas = 0;

		if (count($receta) > 0) {
			$grupos = [];
			$args['tipo'] = 1;
			$comandas = $this->getComandaFactura($this->getPK(), $args);
			$args['tipo'] = 2;
			$facturas = $this->getComandaFactura($this->getPK(), $args);
				foreach ($receta as $row) {				
					$args['tipo'] = 1;
					$ingr = $this->getIngresoEgreso($row->articulo->articulo, $args);
					$args['tipo'] = 2;
					$egr = $this->getIngresoEgreso($row->articulo->articulo, $args);

					$grupos[] = (int)($ingr / $row->cantidad);
				}

				$ingresos = min($grupos);
		} else if (count($principal) > 0) {
			$grupos = [];
			$args['tipo'] = 1;
			$ingresos = $this->getIngresoEgreso($this->getPK(), $args);
			$comandas = $this->getComandaFactura($this->getPK(), $args);
			$args['tipo'] = 2;
			$egresos = $this->getIngresoEgreso($this->getPK(), $args);
			$facturas = $this->getComandaFactura($this->getPK(), $args);

			
		} else {
			$args['tipo'] = 1;
			$ingresos = $this->getIngresoEgreso($this->getPK(), $args);
			$comandas = $this->getComandaFactura($this->getPK(), $args);
			$args['tipo'] = 2;
			$egresos = $this->getIngresoEgreso($this->getPK(), $args);
			$facturas = $this->getComandaFactura($this->getPK(), $args);
		}

		return (object)[
			"articulo" => $this,
			"ingresos" => $ingresos,
			"egresos" => $egresos,
			"comandas" => $comandas,
			"facturas" => $facturas,
			"total_egresos" => $comandas + $facturas + $egresos,
			"existencia" => $this->existencias 
		];
	}

	public function buscarArticulo($args = [])
	{
		if (isset($args['codigo'])) {
			$this->db->where('a.codigo', $args['codigo']);
		}

		if(isset($args['sede'])){
			$this->db->where('c.sede', $args['sede']);
		}

		$tmp = $this->db
					->select("a.*")
					->from("articulo a")
					->join("categoria_grupo b", "a.categoria_grupo = b.categoria_grupo")
					->join("categoria c","b.categoria = c.categoria")
					->get();

		if ($tmp && $tmp->num_rows() > 0) {
			return $tmp->row();
		}

		return false;
	}

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */