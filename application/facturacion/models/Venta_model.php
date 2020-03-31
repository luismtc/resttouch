<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Venta_model extends CI_Model {

	public function categorias($args = [])
	{
		$this->db
			 ->select()
			 ->from()
			 ->join()
			 ->where()
			 ->get()
			 ->result();
	}	

}

/* End of file Venta_model.php */
/* Location: ./application/facturacion/models/Venta_model.php */