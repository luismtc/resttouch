<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcomanda_model extends General_Model {

	public $detalle_comanda;
	public $comanda;
	public $articulo;
	public $cantidad;
	public $precio;
	public $impreso = false;
	public $total;
	public $notas;
	public $cocinado = 0;
	public $presentacion;
	public $numero;
	public $fecha;
	public $tiempo_preparacion;
	public $fecha_impresion;
	public $fecha_proceso;
	public $detalle_comanda_id;

	public function __construct($id = '')
	{
		parent::__construct();
		$this->setTabla("detalle_comanda");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getArticulo() {
		$datos = [];
		$tmp = $this->db
					->where("articulo", $this->articulo)
					->get("articulo")
					->row();
		$tmp->impresora = $this->db
		->select("b.*")
		->join("impresora b", "b.impresora = a.impresora")
		->where("a.categoria_grupo", $tmp->categoria_grupo)
		->get("categoria_grupo a")
		->row();

		return $tmp;
	}

	public function getDescripcionCombo()
	{
		$descripcion = "";
		$tmp = $this->db
					->select("a.detalle_comanda, b.descripcion")
					->join("articulo b", "a.articulo = b.articulo")
					->where("a.detalle_comanda_id", $this->getPK())
					->get("detalle_comanda a")
					->result();

		foreach ($tmp as $row) {
			$det = new Dcomanda_model($row->detalle_comanda);
			$descripcion .= "  {$row->descripcion} |";
			$descripcion.=$det->getDescripcionCombo();
		}

		return $descripcion;
	}

	public function getPrecioExtraCombo()
	{
		$montoExtra = 0.00;
		$tmp = $this->db
					->select("a.detalle_comanda, a.precio")
					->join("articulo b", "a.articulo = b.articulo")
					->where("a.detalle_comanda_id", $this->getPK())
					->get("detalle_comanda a")
					->result();

		foreach ($tmp as $row) {
			$det = new Dcomanda_model($row->detalle_comanda);
			$montoExtra += $row->precio ? (float)$row->precio : 0.00;
			$montoExtra += $det->getPrecioExtraCombo();
		}

		return $montoExtra;
	}

	public function actualizarCantidadHijos()
	{
		$tmp = $this->db
					->select("a.detalle_comanda, b.articulo")
					->join("articulo b", "a.articulo = b.articulo")
					->where("a.detalle_comanda_id", $this->getPK())
					->get("detalle_comanda a")
					->result();

		foreach ($tmp as $row) {
			$det = new Dcomanda_model($row->detalle_comanda);
			$art = new Articulo_model($this->articulo);
			$rec = $art->getReceta([
				"articulo" => $row->articulo,
				"_uno" => true
			]);
			$det->guardar(['cantidad' => $this->cantidad * $rec[0]->cantidad]);
			$det->actualizarCantidadHijos();
		}
	}

	public function distribuir_cuenta($args)
	{
		if (verDato($args, "cuenta")) {
			$tmp = $this->db
						->where("detalle_comanda", $this->getPK())
						->get("detalle_cuenta")
						->row();
			if($tmp){
				$dcta = new Dcuenta_model($tmp->detalle_cuenta);
				$exito = $dcta->guardar([
					"cuenta_cuenta" => $args['cuenta']
				]); 

				if ($exito) {
					$tmp = $this->db
								->select("a.detalle_comanda, b.articulo")
								->join("articulo b", "a.articulo = b.articulo")
								->where("a.detalle_comanda_id", $this->getPK())
								->get("detalle_comanda a")
								->result();

					foreach ($tmp as $row) {
						$det = new Dcomanda_model($row->detalle_comanda);
						$exito = $det->distribuir_cuenta($args);
						if (!$exito) {
							$this->setMensaje(implode("", $det->getMensaje()));
						}
					}

					return $exito;	
				} else {
					$this->setMensaje("Nada que actualizar");
				}
			}
		} else {
			$this->setMensaje("Hacen falta datos obligatorios para poder continuar");
		}

		return true;
	}
}

/* End of file Dcomanda_model.php */
/* Location: ./application/restaurante/models/Dcomanda_model.php */