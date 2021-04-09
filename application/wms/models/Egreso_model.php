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
	//public $idcomandafox = null;

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

	public function getDetalleDatos($item)
	{
		$datos = [
			"cantidad" => $item->cantidad,
			"articulo" => "",
			"precio_unitario" => $item->precio_unitario,
			"precio_total" => $item->cantidad * $item->precio_unitario,
			"presentacion" => "" 
		];

		$art = $this->Articulo_model->buscar([
			"codigo" => $item->articulo,
			"_uno" => true
		]);

		if ($art) {

			$datos['articulo'] = $art->articulo;
		}

		return $datos;
	}

	public function checkDetalleApi($idbodega, $codigo) {		
		$sede = $this->db->query("SELECT sede FROM bodega WHERE bodega = $idbodega")->row();
		$query = "SELECT a.articulo	";
		$query.= "FROM articulo a INNER JOIN categoria_grupo b ON b.categoria_grupo = a.categoria_grupo INNER JOIN categoria c ON c.categoria = b.categoria	";
		$query.= "WHERE c.sede = $sede->sede AND TRIM(a.codigo) = '$codigo' ";
		$query.= "LIMIT 1";
		$art = $this->db->query($query)->row();
		if($art) {
			return true;
		}
		return false;
	}

	public function guardarDetalleApi($item)
	{
		$art = new Articulo_model();
		$tmpArt = $art->buscar([
			"codigo" => $item->articulo,
			"_uno" => true
		]);

		$particion = (isset($item->particion)) ? $item->particion : 1;


		if ($tmpArt) {
			$art = new Articulo_model($tmpArt->articulo);
			$receta = $art->getReceta();
			if (count($receta) > 0) {
				foreach ($receta as $rec) {
					$bac = new BodegaArticuloCosto_model();
					$tmp = new Presentacion_model();
					$precio_unitario = $bac->get_costo($this->bodega, $rec->articulo->articulo);
					$pres = $tmp->buscar([
						"medida" => $rec->medida->medida,
						"cantidad" => 1,
						"_uno" => true
					]);

					$datos = [
						"cantidad" => $rec->cantidad/$particion,
						"articulo" => $rec->articulo->articulo,
						"precio_unitario" => $precio_unitario*1,
						"precio_total" => $rec->cantidad * $precio_unitario/$particion,
						"presentacion" => $pres->presentacion
					];
					$this->setDetalle($datos);
				}
			} else {
				$datos = [
					"cantidad" => $item->cantidad/$particion,
					"articulo" => $art->getPK(),
					"precio_unitario" => $item->precio_unitario*1,
					"precio_total" => $item->cantidad * $item->precio_unitario/$particion,
					"presentacion" => $art->presentacion
				];
				$this->setDetalle($datos);
			}
		}
	}

	public function setDetalle(Array $args, $id = "")
	{
		$tmp = new Configuracion_model();
		$config = $tmp->buscar();
		$vnegativo = get_configuracion($config, "RT_VENDE_NEGATIVO", 3);
		$det = new EDetalle_Model($id);
		$tmp = new Catalogo_model();
		$menu = $tmp->getModulo(["modulo" => 4, "_uno" => true]);
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
		$tmp = new Presentacion_model();
		$pres = $tmp->buscar([
			"presentacion" => $args['presentacion'],
			"_uno" => true
			]);
			
		$args['precio_total'] = ((float)$args['precio_unitario'] * (float)$args['cantidad'] * (float)$pres->cantidad);

		$art->actualizarExistencia();
		$oldart = new Articulo_model($det->articulo);
		if (empty($menu) || (!$validar || $art->existencias >= $cantidad * $pres->cantidad) ||$vnegativo) {
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
				$row->presentacion = $detalle->getPresentacion();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new EDetalle_Model($det->egreso_detalle);
			$det->articulo = $detalle->getArticulo();
			$det->presentacion = $detalle->getPresentacion();
			$datos[] = $det;
		}

		usort($datos, function ($a, $b) {
			return strcmp(trim(strtoupper($a->articulo->descripcion)), trim(strtoupper($b->articulo->descripcion)));
		});
		
		return $datos;
	}

	public function trasladar($args = []){
		$prov = $this->Proveedor_model->buscar([
			"razon_social" => "Interno",
			"_uno" => true
		]);
		if (!$prov) {
			$obj = new Proveedor_model();
			$obj->guardar([
				"razon_social" => "Interno",
				"nit" => "cf",
				"corporacion" => 1
			]);
			$idProv = $obj->getPK();
		} else {
			$idProv = $prov->proveedor;
		}
		$ing = new Ingreso_model();
		$datos = [
			'tipo_movimiento' => $args['tipo_movimiento_destino'],
			'fecha' => $this->fecha,
			'bodega' => $args['bodega_destino'],
			'usuario' => $this->usuario,
			'bodega_origen' => $this->bodega,
			'comentario' => isset($args['comentario']) ? $args['comentario'] : '',
			'proveedor' => $idProv,
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