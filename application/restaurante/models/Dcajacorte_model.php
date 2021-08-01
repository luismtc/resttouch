<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcajacorte_model extends General_model {
	
	public $caja_corte_detalle;
	public $caja_corte;
	public $cantidad = 0;
	public $total = 0;
	public $anulado = 0;
	public $caja_corte_nominacion;

	public function __construct($id='')
	{
		parent::__construct();
		$this->setTabla('caja_corte_detalle');

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function eliminaDetalle($idCajaCorte)
	{
		$this->db->where('caja_corte', $idCajaCorte)->delete('caja_corte_detalle');
	}

}

/* End of file Dcajacorte_model.php */
/* Location: ./application/restaurante/models/Dcajacorte_model.php */