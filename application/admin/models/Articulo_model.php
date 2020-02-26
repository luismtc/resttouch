<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Articulo_model extends General_model {

	public $articulo;
	public $categoria_grupo;
	public $presentacion;
	public $descripcion;
	public $precio;
	public $bien_servicio;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.articulo");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getCategoriaGrupo()
	{
		return $this->db
					->where("categoria_grupo", $this->categoria_grupo)
					->get("resttouch.categoria_grupo")
					->row();
	}

	public function getPresentacion()
	{
		return $this->db
					->where("presentacion", $this->presentacion)
					->get("resttouch.presentacion")
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
				$detalle = new Receta_model($row->egreso_detalle);
				$row->articulo = $detalle->getArticulo();
				$row->medida = $detalle->getMedida();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new Receta_model($det->egreso_detalle);
			$det->articulo = $detalle->getArticulo();
			$det->medida = $detalle->getMedida();
			$datos[] = $det;
		}

		return $datos;
	}

	/*public function actualizarExistencia()
	{
		$ingresos = $this->db
						 ->select()
						 ->where()
						 ->get()
						 ->row(); //total ingresos
		$egresos = $this->db;//total egresos wms
		$comandas = $this->db;//total ventas comanda
		$facturas = $this->db;//total ventas factura manual
	}*/

}

/* End of file Articulo_model.php */
/* Location: ./application/admin/models/Articulo_model.php */