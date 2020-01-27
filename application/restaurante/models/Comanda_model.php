<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comanda_model extends General_Model {

	public $comanda;
	public $usuario;
	public $sede;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("resttouch.comanda");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getMesas()
	{
		return $this->db
		->select("
			b.mesa,
			b.area,
			b.numero,
			b.posx,
			b.posy,
			b.tamanio,
			b.estatus")
		->join("resttouch.mesa b", "a.mesa = b.mesa")
		->where("a.comanda", $this->comanda)
		->get("resttouch.comanda_has_mesa a");
	}

	public function setMesa($mesa)
	{
		$this->db
		->set("comanda", $this->comanda)
		->set("mesa", $mesa)
		->insert("resttouch.comanda_has_mesa");

		return $this->db->affected_rows() > 0;

	}

	public function guardarDetalle(Array $args, $id = '')
	{
		$det = new Dcomanda_model($id);
		$args['comanda'] = $this->comanda;
		$result = $det->guardar($args);

		if(!$result) {
			$this->mensaje = $det->getMensaje();
		}

		return $det;
	}

	public function getDetalle($args = [])
	{
		$det = $this->Dcomanda_model->buscar($args);
		$datos = [] ;
		if(is_array($det)) {
			foreach ($det as $row) {
				$detalle = new Dcomanda_model($row->detalle_comanda);
				$row->articulo = $detalle->getArticulo();
				$datos[] = $row;
			}
		} else if($det) {
			$detalle = new Dcomanda_model($det->detalle_comanda);
			$det->articulo = $detalle->getArticulo();
			$datos[] = $det;
		}

		return $datos;
	}

	public function getCuentas(){
		return $this->db
		->where("comanda", $this->comanda)
		->get("restaurante.cuenta")
		->result();
	}

}

/* End of file Comanda_model.php */
/* Location: ./application/restaurante/models/Comanda_model.php */