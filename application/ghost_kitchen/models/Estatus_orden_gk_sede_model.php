<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estatus_orden_gk_sede_model extends General_model {

	public $estatus_orden_gk_sede;
    public $orden_gk;
    public $sede;
    public $estatus_orden_gk;
	public $comentario;
    public $fhestatus;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("estatus_orden_gk_sede");
		if (!empty($id)) {
			$this->cargar($id);
		}
		
		$this->load->model('Estatus_orden_gk_model');

	}

	public function ultimo_estatus_sede($orden_gk, $sede)
	{

		$estatus = null;

		$ues = $this->db
		->select('estatus_orden_gk')
		->from($this->_tabla)
		->where('orden_gk', $orden_gk)
		->where('sede', $sede)
		->order_by('fhestatus', 'DESC')
		->get()
		->row();

		if ($ues)
		{
			$estatus = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => $ues->estatus_orden_gk, '_uno' => true]);
		}

		return $estatus;
	}
}
