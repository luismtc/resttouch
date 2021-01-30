<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingreso_model extends General_Model {

	public $ingreso;
	public $tipo_movimiento;
	public $fecha;
	public $bodega;
	public $usuario;
	public $bodega_origen;
	public $comentario;
	public $proveedor;
	public $estatus_movimiento;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("ingreso");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getTipoMovimiento() {
		return $this->db
					->where("tipo_movimiento", $this->tipo_movimiento)
					->get("tipo_movimiento")
					->row();
	}

	public function getProveedor()
	{
		return $this->db
					->where("proveedor", $this->proveedor)
					->get("proveedor")
					->row();
	}

	public function getBodega()
	{
		return $this->db
					->where("bodega", $this->bodega)
					->get("bodega")
					->row();
	}

	public function getBodegaOrigen()
	{
		return $this->db
					->where("bodega", $this->bodega_origen)
					->get("bodega")
					->row();
	}

	public function getUsuario()
	{
		return $this->db
					->where("usuario", $this->usuario)
					->get("usuario")
					->row();
	}

	public function setDetalle(Array $args, $id = "")
	{
		$det = new IDetalle_Model($id);
		$args['ingreso'] = $this->ingreso;

		if(is_object($args['presentacion'])) {
			$args['presentacion'] = $args['presentacion']->presentacion;
		}

		$result = $det->guardar($args);

		if($result) {
			return $det;
		}

		$this->mensaje = $det->getMensaje();

		return $result;
	}

	public function getDetalle($args = [])
	{
		$args['ingreso'] = $this->ingreso;
		$det = $this->IDetalle_Model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new IDetalle_Model($row->ingreso_detalle);
				$row->articulo = $detalle->getArticulo();
				$row->presentacion = $detalle->getPresentacion();
				
				if (verDato($args, "_costo")) {
					$row->precio_total = $row->precio_total + $row->precio_costo_iva;
					$row->precio_unitario = (int)$row->cantidad !== 0 ? ($row->precio_total / $row->cantidad) : 0.00;
				}
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new IDetalle_Model($det->ingreso_detalle);
			$det->articulo = $detalle->getArticulo();
			$det->presentacion = $detalle->getPresentacion();

			$datos[] = $det;
		}

		usort($datos, function ($a, $b) {
			return strcmp(trim(strtoupper($a->articulo->descripcion)), trim(strtoupper($b->articulo->descripcion)));
		});

		return $datos;
	}

	public function get_ultima_compra($args = [])
	{
		if (isset($args['sede'])) {
			$this->db->where('b.sede', $args['sede']);
		}

		if (isset($args['bodega'])) {
			$this->db->where('a.bodega', $args['bodega']);
		}

		return $this->db
					->select("max(c.ingreso_detalle), c.articulo, c.precio_unitario, a.fecha")
					->join("bodega b", "a.bodega = b.bodega")
					->join("ingreso_detalle c", "a.ingreso = c.ingreso")
					->join("articulo d", "c.articulo = d.articulo")
					->where("date(a.fecha) <= '{$args['fecha']}'")
					->where("d.mostrar_inventario", 1)
					->group_by("c.articulo")
					->get("ingreso a")
					->result();
	}

	public function get_costo_promedio($args = [])
	{
		if (isset($args['sede'])) {
			$this->db->where('b.sede', $args['sede']);
		}

		if (isset($args['bodega'])) {
			$this->db->where('a.bodega', $args['bodega']);
		}

		return $this->db
					->select("
						sum(c.precio_total)/sum(c.cantidad*e.cantidad) as precio_unitario, 
						c.articulo, 
						a.fecha")
					->join("bodega b", "a.bodega = b.bodega")
					->join("ingreso_detalle c", "a.ingreso = c.ingreso")
					->join("articulo d", "c.articulo = d.articulo")
					->join("presentacion e", "c.presentacion = e.presentacion")
					->where("date(a.fecha) <= '{$args['fecha']}'")
					->where("d.mostrar_inventario", 1)
					->group_by("c.articulo")
					->get("ingreso a")
					->result();
	}
}

/* End of file Ingreso_model.php */
/* Location: ./application/wms/models/Ingreso_model.php */