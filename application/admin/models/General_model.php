<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class General_model extends CI_Model {

	protected $_tabla = "";
	protected $_llave = "id";
	protected $_pk = null;
	protected $mensaje = [];

	public function __construct()
	{
		parent::__construct();
		$this->_tabla = $this->getTabla();
	}

	public function getPK()
	{
		return $this->_pk;
	}

	public function getMensaje()
	{
	    return $this->mensaje;
	}
	
	public function setMensaje($mensaje)
	{
	    $this->mensaje[] = $mensaje;
	    return $this;
	}

	public function setTabla($nombre)
	{
		$this->_tabla = $nombre;

		$tmp = explode(".", $nombre);

		$this->_llave = count($tmp) > 1 ? $tmp[1] : $nombre;
	}

	public function setLlave($nombre)
	{
		$this->_llave = $nombre;
	}

	private function getTabla()
	{
		return str_replace("_model", "", strtolower(get_class($this)));
	}

	public function setDatos($args)
	{
		foreach ($args as $campo => $valor) {
			if (property_exists($this, $campo)) {
				$this->$campo = $valor;
			}
		}
	}

	public function cargar($valor)
	{
		$this->db->where($this->_llave, $valor);

		$tmp = $this->db
		->get($this->_tabla)
		->row();
		
		if($tmp){
			$var = $this->_llave;
			$this->_pk = $tmp->$var;
			$this->setDatos($tmp);
		}
	}

	public function guardar($args=[])
	{
		if (count($args) > 0) { $this->setDatos($args); }

		$exito = FALSE;

		if ($this->_pk === null) {			

			$this->db->insert($this->_tabla, $this);

			$exito = $this->db->affected_rows() > 0;

			if ($exito) { 
				$this->_pk = $this->db->insert_id(); 
			} else {
				$this->setMensaje("No pude guardar los datos, por favor intente nuevamente.");
			}
		} else {
			$this->db
			->where($this->_llave, $this->_pk)
			->update($this->_tabla, $this);

			$exito = $this->db->affected_rows() > 0;

			if (!$exito) {
				$this->setMensaje("Nada que actualizar");
			}
		}

		if ($this->_pk !== null) {
			$this->cargar($this->_pk);
		}

		return $exito;
	}

	public function buscar($args = [])
	{
		if (isset($args["_like"])) {
        	foreach ($args["_like"] as $campo => $valor) {
        		$this->db->like($campo, $valor);
        	}
        }

        if (isset($args["_in"])) {
        	foreach ($args["_in"] as $campo => $valor) {
        		$this->db->where_in($campo, $valor);
        	}
        }

		if (count($args) > 0) {
			foreach ($args as $key => $row) {
				if (substr($key, 0, 1) != "_") {
					$this->db->where($key, $row);
				}
			}	
		}

		$tmp = $this->db->get($this->_tabla);

		if(isset($args['_uno'])) {
			return $tmp->row();
		}

		return $tmp->result();
	}
}

/* End of file General_model.php */
/* Location: ./application/admin/models/General_model.php */