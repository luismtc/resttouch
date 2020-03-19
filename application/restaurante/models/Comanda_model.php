<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Comanda_model extends General_Model {

	public $comanda;
	public $usuario;
	public $sede;
	public $estatus;
	public $turno;

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
		->get("resttouch.comanda_has_mesa a")
		->row();
	}

	public function setMesa($mesa)
	{
		$this->db
		->set("comanda", $this->comanda)
		->set("mesa", $mesa)
		->insert("resttouch.comanda_has_mesa");

		return $this->db->affected_rows() > 0;

	}

	public function guardarDetalle(Array $args)
	{
		$id = isset($args['detalle_comanda']) ? $args['detalle_comanda'] : '';
		$det = new Dcomanda_model($id);
		$args['comanda'] = $this->comanda;
		$menu = $this->Catalogo_model->getModulo(["modulo" => 4, "_uno" => true]);
		$validar = true;
		$cantidad = 0;
		$articulo = null;
		if (empty($id)) {
			$articulo = $args['articulo'];
			$cantidad = $args['cantidad'];
		} else {
			if (isset($args['articulo'])) {
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
		}
		$art = new Articulo_model($articulo);
		$oldart = new Articulo_model($det->articulo);
		if (empty($menu) || (!$validar || $art->existencias >= $cantidad)) {
			$result = $det->guardar($args);
			if($result) {
				if (isset($args['articulo'])) {
					$art->actualizarExistencia();
					if ($oldart->articulo) {					
						$oldart->actualizarExistencia();
					}
				}
				return $det;
			}
			$this->mensaje = $det->getMensaje();

			return $result;	
		} else {
			$this->setMensaje("No hay existencias suficientes para este articulo, existencia {$art->existencias}");
		}
	}

	public function getDetalle($args = [])
	{
		$args['comanda'] = $this->comanda;
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
		$cuentas = [];
		$tmp = $this->db
		->where("comanda", $this->comanda)
		->get("resttouch.cuenta")
		->result();

		foreach ($tmp as $row) {
			$cta = new Cuenta_model($row->cuenta);
			$row->productos = $cta->getDetalle();
			$cuentas[] = $row;
		}

		return $cuentas;
	}

	public function getComanda()
	{
		$tmp = $this->db
		->where("comanda", $this->comanda)
		->get("resttouch.comanda")
		->row();

		$mesa = $this->getMesas();
		$mesa->area = $this->Area_model->buscar(["area" => $mesa->area, "_uno" => true]);
		$tmp->mesa = $mesa;		
		$tmp->cuentas = $this->getCuentas();
		return $tmp;
	}

}

/* End of file Comanda_model.php */
/* Location: ./application/restaurante/models/Comanda_model.php */