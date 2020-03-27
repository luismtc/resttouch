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
						 	sum(ifnull(cantidad, 0)) as total")
						 ->where("articulo", $this->articulo)
						 ->get("ingreso_detalle")
						 ->row(); //total ingresos

		$egresos = $this->db
						->select("sum(ifnull(cantidad, 0)) as total")
						->where("articulo", $this->articulo)
						->get("egreso_detalle")
						->row();//total egresos wms

		$comandas = $this->db
						 ->select("sum(ifnull(cantidad, 0)) as total")
						 ->where("articulo", $this->articulo)
						 ->get("detalle_comanda")
						 ->row();//total ventas comanda

		$facturas = $this->db
						 ->select("sum(ifnull(a.cantidad, 0)) as total")
						 ->join("detalle_factura_detalle_cuenta b", "a.detalle_factura = b.detalle_factura", "left")
						 ->where("articulo", $this->articulo)
						 ->where("b.detalle_factura_detalle_cuenta is null")
						 ->get("detalle_factura a")
						 ->row();//total ventas factura manual

		$exist = $ingresos->total - ($egresos->total + $comandas->total + $facturas->total);

		return $this->guardar(['existencias' => $exist]);
	}

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */