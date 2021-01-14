<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Articulo_model extends General_model {

	public $articulo;
	public $categoria_grupo;
	public $presentacion;
	public $descripcion;
	public $precio;
	public $bien_servicio;
	public $existencias = 0;
	public $shopify_id;
	public $codigo = '';
	public $produccion = 0;
	public $presentacion_reporte;
	public $mostrar_pos = 1;
	public $impuesto_especial;	
	public $combo = 0;
	public $multiple = 0;
	public $cantidad_minima = 1;
	public $cantidad_maxima = 1;
	public $rendimiento = 1;
	public $costo = 0;

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
					->select("a.*, b.descripcion as ncategoria")
					->where("categoria_grupo", $this->categoria_grupo)
					->join("categoria b", "a.categoria = b.categoria")
					->get("categoria_grupo a")
					->row();
	}

	public function getPresentacion()
	{
		return $this->db
					->where("presentacion", $this->presentacion)
					->get("presentacion")
					->row();
	}

	public function getPresentacionReporte()
	{
		return $this->db
					->where("presentacion", $this->presentacion_reporte)
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
		$rec = new Receta_model();
		$det = $rec->buscar($args);
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

	public function getVentaReceta($art = null, $args = [])
	{
		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		$articulo = $this->articulo;
		if ($art !== null) {
			$articulo = $art;
		}

		$comandas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("comanda e", "e.comanda = a.comanda")
						 ->join("turno f", "e.turno = f.turno and f.sede = d.sede")
						 ->join("presentacion p", "a.presentacion = p.presentacion")
						 ->where("a.articulo", $articulo)
						 ->get("detalle_comanda a")
						 ->row();//total ventas comanda

		$facturas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("detalle_factura_detalle_cuenta e", "a.detalle_factura = e.detalle_factura", "left")
						 ->join("factura f", "a.factura = f.factura and f.sede = d.sede")
						 ->join("presentacion p", "a.presentacion = p.presentacion")
						 ->where("a.articulo", $articulo)
						 ->where("e.detalle_factura_detalle_cuenta is null")
						 ->get("detalle_factura a")
						 ->row();//total ventas factura manual
		return $comandas->total + $facturas->total;
	}

	function getVentaRecetas($art, $args = [])
	{
		$rec = new Articulo_model($art);
		$principal = $rec->getReceta(["_principal" => true]);
		$exist = 0;

		foreach ($principal as $row) {
			if ($row->receta != $this->getPK()) {
				$exist += $rec->getVentaReceta($row->receta) * $row->cantidad;
			}
		}

		return $exist;
	}

	function actualizarExistencia($args = [])
	{
		if ($this->getPK()) {
			$receta = $this->getReceta();
			$principal = $this->getReceta(["_principal" => true]);
			if (count($receta) > 0 && $this->produccion == 0) {
				$grupos = [];
				//$venta = $this->getVentaReceta();
				foreach ($receta as $row) {		
					$art = new Articulo_model($row->articulo->articulo);
					$art->actualizarExistencia();		
					$existR = $art->existencias;

					$grupos[] = (int)($art->existencias / $row->cantidad);
				}

				$exist = min($grupos);
			} else {
				$exist = $this->obtenerExistencia($args, $this->articulo);
			}

			return $this->guardar(['existencias' => $exist]);
		}
	}

	public function obtenerExistencia($args = [], $articulo, $receta = false)
	{
		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		if (isset($args['bodega'])) {
			$this->db->where('f.bodega', $args['bodega']);
		} else {
			$this->db->where("f.merma", 0);
		}

		$ingresos = $this->db
						 ->select("
						 	sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("ingreso e", "e.ingreso = a.ingreso")
						 ->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						 ->join("presentacion p", "a.presentacion = p.presentacion")
						 ->where("a.articulo", $articulo)
						 ->get("ingreso_detalle a")
						 ->row(); //total ingresos

		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		if (isset($args['bodega'])) {
			$this->db->where('f.bodega', $args['bodega']);
		}

		$egresos = $this->db
						->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						->join("articulo b", "a.articulo = b.articulo")
						->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						->join("categoria d", "d.categoria = c.categoria")
						->join("egreso e", "e.egreso = a.egreso")
						->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						->join("presentacion p", "a.presentacion = p.presentacion")
						->where("a.articulo", $articulo)
						->get("egreso_detalle a")
						->row();//total egresos wms

		//if (!$receta) {
		$venta = $this->getVentaReceta();

		//} else {
			//$venta = 0;
		//}


		return $ingresos->total - ($egresos->total + $venta);
	}

	function getIngresoEgreso($articulo, $args=[])
	{
		if (isset($args['sede'])) {
			$this->db->where('f.sede', $args['sede']);
		}

		if (isset($args['bodega'])) {
			$this->db->where('f.bodega', $args['bodega']);
		}

		if ($args['tipo'] == 1) {
			$ingresos = $this->db
						 ->select("
						 	sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("ingreso e", "e.ingreso = a.ingreso")
						 ->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						 ->join("presentacion p", "a.presentacion = p.presentacion")
						 ->where("a.articulo", $articulo)
						 ->where("date(e.fecha) <= ", $args['fecha'])
						 ->get("ingreso_detalle a")
						 ->row(); //total ingresos

			return $ingresos->total;
		} else {
			$egresos = $this->db
						->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						->join("articulo b", "a.articulo = b.articulo")
						->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						->join("categoria d", "d.categoria = c.categoria")
						->join("egreso e", "e.egreso = a.egreso")
						->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						->join("presentacion p", "a.presentacion = p.presentacion")
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
						 ->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("comanda e", "e.comanda = a.comanda")
						 ->join("turno f", "e.turno = f.turno and f.sede = d.sede")
						 ->join("presentacion p", "a.presentacion = p.presentacion")
						 ->where("a.articulo", $articulo)
						 ->get("detalle_comanda a")
						 ->row();//total ventas comanda	

			return $comandas->total;
		} else {
			$facturas = $this->db
							 ->select("sum(ifnull(a.cantidad, 0) * p.cantidad) as total")
							 ->join("articulo b", "a.articulo = b.articulo")
							 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
							 ->join("categoria d", "d.categoria = c.categoria")
							 ->join("detalle_factura_detalle_cuenta e", "a.detalle_factura = e.detalle_factura", "left")
							 ->join("factura f", "a.factura = f.factura and f.sede = d.sede")
							 ->join("presentacion p", "a.presentacion = p.presentacion")
							 ->where("a.articulo", $articulo)
							 ->where("e.detalle_factura_detalle_cuenta is null")
							 ->get("detalle_factura a")
							 ->row();//total ventas factura manual

			return $facturas->total;
		}
	}

	public function getExistencias($args)
	{
		$this->load->model('Presentacion_model');
		$receta = $this->getReceta();
		$principal = $this->getReceta(["_principal" => true]);
		$ingresos = 0;
		$egresos = 0;
		$comandas = 0;
		$facturas = 0;

		if (count($receta) > 0 && $this->produccion == 0) {
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

				$ingresos = 0;
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
			"presentacion" => new Presentacion_model($this->presentacion_reporte),
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

	public function getImpuestoEspecial() {
		$impesp = null;
		if ((int)$this->impuesto_especial > 0) {
			$this->load->model('ImpuestoEspecial_model');
			$impesp = $this->ImpuestoEspecial_model->buscar(['impuesto_especial' => $this->impuesto_especial, '_uno' => true]);
		}
		return $impesp;
	}

	public function getCosto()
	{
		$tmp = $this->db
					->select("max(c.ingreso_detalle), c.articulo, c.precio_unitario, a.fecha")
					->join("bodega b", "a.bodega = b.bodega")
					->join("ingreso_detalle c", "a.ingreso = c.ingreso")
					->where("c.articulo", $this->getPK())
					->group_by("c.articulo")
					->get("ingreso a")
					->row();

		if ($tmp) {
			return $tmp->precio_unitario;
		}

		return 0;
	}

	public function getCostoReceta()
	{
		$this->actualizarExistencia();
		$receta = $this->getReceta();
		$costo = 0;
		if (count($receta) > 0) {

			foreach ($receta as $row) {				
				$art = new Articulo_model($row->articulo->articulo);				
				$costo += $art->getCostoReceta();
			}

		} else {
			$costo = $this->getCosto();
		}

		return $costo;
	}

	public function copiar($sede)
	{
		$art = new Articulo_model();
		$tmp = $this->buscarArticulo([
			"sede" => $sede,
			"codigo" => $this->codigo
		]);
		if ($tmp) {
			$art->cargar($tmp->articulo);
		}

		$grupo = $this->getCategoriaGrupo();

		$cgrupo = $this->db
					   ->select("a.*")
					   ->join("categoria b", "a.categoria = b.categoria")
					   ->where("a.descripcion", $grupo->descripcion)
					   ->where("b.sede", $sede)
					   ->get("categoria_grupo a");
		if ($cgrupo->num_rows() > 0) {
			$cgrupo = $cgrupo->row();
			$categoria_grupo = $cgrupo->categoria_grupo;

		} else {
			$cat = $this->db
							  ->where("descripcion", $grupo->ncategoria)
							  ->where("sede", $sede)
							  ->get("categoria");
			if ($cat->num_rows() > 0) {
				$cat = $cat->row();
				$categoria = $cat->categoria;
			} else {
				$cat = new Categoria_model();
				$cat->guardar([
					"descripcion" => $grupo->ncategoria,
					"sede" => $sede
				]);
				$categoria = $cat->getPK();
			}

			$cgrupo = new Cgrupo_model();
			$cgrupo->guardar([
				"descripcion" => $grupo->descripcion,
				"categoria" => $categoria,
				"categoria_grupo_grupo" => $grupo->categoria_grupo_grupo,
				"receta" => $grupo->receta,
				"impresora" => $grupo->impresora,
				"descuento" => $grupo->descuento
			]);

			$categoria_grupo = $cgrupo->getPK();
		}


		$datos = [
			"categoria_grupo" => $categoria_grupo,
			"presentacion" => $this->presentacion,
			"descripcion" => $this->descripcion,
			"precio" => $this->precio,
			"bien_servicio" => $this->bien_servicio,
			"existencias" => $this->existencias,
			"shopify_id" => $this->shopify_id,
			"codigo" => $this->codigo,
			"produccion" => $this->produccion,
			"presentacion_reporte" => $this->presentacion_reporte,
			"mostrar_pos" => $this->mostrar_pos,
			"impuesto_especial" => $this->impuesto_especial,
			"combo" => $this->combo,
			"multiple" => $this->multiple,
			"cantidad_minima" => $this->cantidad_minima,
			"cantidad_maxima" => $this->cantidad_maxima,
			"rendimiento" => $this->rendimiento
		];

		$art->guardar($datos);
	}

	public function copiarDetalle($sede)
	{
		$receta = $this->getReceta();
		$articulo = $this->buscarArticulo([
			"sede" => $sede,
			"codigo" => $this->codigo
		]);

		if ($articulo) {
			$art = new Articulo_model($articulo->articulo);
			$art->eliminarDetalle();

			foreach ($receta as $row) {
				$detalle = $this->buscarArticulo([
					"sede" => $sede,
					"codigo" => $row->articulo->codigo
				]);
				if (!$detalle) {
					$rec = new Articulo_model($row->articulo->articulo);
					$rec->copiar($sede);
					$detalle = $this->buscarArticulo([
						"sede" => $sede,
						"codigo" => $rec->codigo
					]);
				}

				$art->guardarReceta([
					"racionable" => $row->racionable,
					"articulo" => $detalle->articulo,
					"cantidad" => $row->cantidad,
					"medida" => $row->medida->medida,
					"anulado" => $row->anulado,
					"precio_extra" => $row->precio_extra,
					"precio" => $row->precio,
				]);
			}
		}
	}

	public function eliminarDetalle()
	{
		$this->db
			 ->where("receta", $this->getPK())
			 ->delete("articulo_detalle");
	}

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */