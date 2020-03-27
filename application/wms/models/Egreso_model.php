<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Egreso_model extends General_Model {

	public $egreso;
	public $tipo_movimiento;
	public $fecha;
	public $bodega;
	public $creacion;
	public $usuario;
	public $estatus_movimiento;
	public $traslado = 0;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("egreso");

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

	public function getUsuario()
	{
		return $this->db
					->where("usuario", $this->usuario)
					->get("usuario")
					->row();
	}

	public function getBodega()
	{
		return $this->db
					->where("bodega", $this->bodega)
					->get("bodega")
					->row();
	}

	public function setDetalle(Array $args, $id = "")
	{
		$det = new EDetalle_Model($id);
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$validar = true;
		$cantidad = 0;
		$articulo = null;
		if (empty($id)) {
			$articulo = $args['articulo'];
			$cantidad = $args['cantidad'];
		} else {
			if($det->articulo == $args['articulo'] && $det->cantidad < $args['cantidad']){
				$articulo = $det->articulo;
				$cantidad = $args['cantidad'] - $det->cantidad;
			} else if($det->articulo != $args['articulo']){				
				$articulo = $args['articulo'];
				$cantidad = $args['cantidad'];
			} else {
				$articulo = $args['articulo'];
				$validar = false;
			}
		}
		$art = new Articulo_model($articulo);
		$oldart = new Articulo_model($det->articulo);
		if (empty($menu) || (!$validar || $art->existencias >= $cantidad)) {
			$args['egreso'] = $this->egreso;
			$result = $det->guardar($args);

			if($result) {
				$art->actualizarExistencia();
				if ($oldart->articulo) {					
					$oldart->actualizarExistencia();
				}
				return $det;
			}

			$this->mensaje = $det->getMensaje();

			return $result;	
		} else {
			$this->setMensaje("No hay existencias suficientes para este articulo, existencia {$art->existencias}");
		}
		
		return false;
	}

	public function getDetalle($args = [])
	{
		$args['egreso'] = $this->egreso;
		$det = $this->EDetalle_model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new EDetalle_Model($row->egreso_detalle);
				$row->articulo = $detalle->getArticulo();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new EDetalle_Model($det->egreso_detalle);
			$det->articulo = $detalle->getArticulo();
			$datos[] = $det;
		}

		return $datos;
	}

	public function trasladar($args = []){
		$ing = new Ingreso_model();
		$datos = [
			'tipo_movimiento' => $args['tipo_movimiento_destino'],
			'fecha' => $this->fecha,
			'bodega' => $args['bodega_destino'],
			'usuario' => $this->usuario,
			'bodega_origen' => $this->bodega,
			'comentario' => isset($args['comentario']) ? $args['comentario'] : '',
			'proveedor' => $args['proveedor'],
			'estatus_movimiento' => 2
		];

		if($ing->guardar($datos)) {
			foreach ($this->getDetalle() as $row) {
				$row->articulo = $row->articulo->articulo;
				$det = $ing->setDetalle((array) $row);
				if($det) {
					$this->db
						 ->set("egreso_detalle", $row->egreso_detalle)
						 ->set("ingreso_detalle", $det->ingreso_detalle)
						 ->insert("traslado_detalle");
				}
			}
			return $ing;
		} else {
			$this->mensaje = $det->getMensaje();
		}

		return false;
	}
}

/* End of file Egreso_model.php */
/* Location: ./application/wms/models/Egreso_model.php */