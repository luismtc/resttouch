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
		$args['receta'] = $this->articulo;
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

	public function actualizarExistencia()
	{
		$ingresos = $this->db
						 ->select("
						 	sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("ingreso e", "e.ingreso = a.ingreso")
						 ->join("bodega f", "f.bodega = e.bodega and f.sede = d.sede")
						 ->where("a.articulo", $this->articulo)
						 ->get("ingreso_detalle a")
						 ->row(); //total ingresos

		$egresos = $this->db
						->select("sum(ifnull(cantidad, 0)) as total")
						->where("articulo", $this->articulo)
						->get("egreso_detalle")
						->row();//total egresos wms

		$comandas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("comanda e", "e.comanda = a.comanda")
						 ->join("turno f", "e.turno = f.turno and f.sede = d.sede")
						 ->where("a.articulo", $this->articulo)
						 ->get("detalle_comanda a")
						 ->row();//total ventas comanda

		$facturas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("articulo b", "a.articulo = b.articulo")
						 ->join("categoria_grupo c", "c.categoria_grupo = b.categoria_grupo")
						 ->join("categoria d", "d.categoria = c.categoria")
						 ->join("detalle_factura_detalle_cuenta e", "a.detalle_factura = e.detalle_factura", "left")
						 ->join("factura f", "a.factura = f.factura and f.sede = d.sede")
						 ->where("a.articulo", $this->articulo)
						 ->where("e.detalle_factura_detalle_cuenta is null")
						 ->get("detalle_factura a")
						 ->row();//total ventas factura manual

		$exist = $ingresos->total - ($egresos->total + $comandas->total + $facturas->total);

		return $this->guardar(['existencias' => $exist]);
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
					->group_by("a.articulo")
					->get();

		if ($tmp && $tmp->num_rows() > 0) {
			return $tmp->row();
		}

		return false;
	}

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */