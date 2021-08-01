<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dcajacortefpago_model extends General_model {
	
	public $caja_corte_detalle_forma_pago;
	public $caja_corte;
	public $forma_pago;
	public $total = 0;	

	public function __construct($id='')
	{
		parent::__construct();
		$this->setTabla('caja_corte_detalle_forma_pago');

		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function eliminaDetalleFPago($idCajaCorte)
	{
		$this->db->where('caja_corte', $idCajaCorte)->delete('caja_corte_detalle_forma_pago');
	}

}

/* End of file Dcajacorte_model.php */
/* Location: ./application/restaurante/models/Dcajacorte_model.php */