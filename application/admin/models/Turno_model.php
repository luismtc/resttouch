<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Turno_model extends General_model {

	public $turno;
	public $turno_tipo;
	public $inicio;
	public $fin;
	public $sede;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("resttouch.turno");

		if(!empty($id)) {
			$this->cargar($id);
		}
	}

	public function getTurnoTipo()
	{
		return $this->db
					->where("turno_tipo", $this->turno_tipo)
					->get("resttouch.turno_tipo")
					->row();
	}

	public function getTurno($args = []) {

		if(isset($args['turno'])) {
			$this->db->where('turno', $args['turno']);
		}

		if (isset($args['sede'])) {
			$this->db->where('sede', $args['sede']);
		}

		if(isset($args['inicio'])) {
			$this->db
				 ->where('inicio', $args['inicio']);
		}

		if (isset($args['fin'])) {
			$this->db->where('fin', $args['fin']);
		}

		if (isset($args['abierto'])) {
			$this->db->where('fin is null');
		}

		$tmp = $this->db
					->get("resttouch.turno");

		if(isset($args['_uno'])) {
			return $tmp->row();
		}

		return $tmp->result();
	}

	public function setUsuario($args = [])
	{
		$tmp = $this->db
					->where("turno", $this->turno)
					->where("usuario", $args['usuario'])
					->where("usuario_tipo", $args['usuario_tipo'])
					->get("resttouch.turno_has_usuario");

		if($tmp->num_rows() == 0) {
			$this->db
				 ->set("turno", $this->turno)
				 ->set("usuario", $args['usuario'])
				 ->set("usuario_tipo", $args['usuario_tipo'])
				 ->insert("resttouch.turno_has_usuario");

			return $this->db->affected_rows() > 0;
		}

		return false;
	}

	public function getUsuarios($args = [])
	{
		$datos = [];
		if(count($args) > 0) {
			foreach ($args as $key => $row) {
				if ($key != '_uno') {
					$this->db->where($key, $row);
				}
			}
		}
		$tmp = $this->db
					->where("turno", $this->turno)
					->where("anulado", 0)
					->get("turno_has_usuario")
					->result();

		foreach ($tmp as $row) {
			$row->usuario = $this->Usuario_model->find(["usuario" => $row->usuario, "_uno" => true]);
			$row->usuario_tipo = $this->Catalogo_model->getTipoUsuario([
				"usuario_tipo" => $row->usuario_tipo,
				"_uno" => true
			]);
			$datos[] = $row;
		}

		return $datos;;
	}

	public function anularUsuario($args)
	{
		$this->db
			 ->set("anulado", 1)
			 ->where("turno", $this->turno)
			 ->where("usuario", $args['usuario'])
			 ->where("usuario_tipo", $args['usuario_tipo'])
			 ->update("resttouch.turno_has_usuario");

		return $this->db->affected_rows() > 0;
	}

}

/* End of file Turno_model.php */
/* Location: ./application/admin/models/Turno_model.php */