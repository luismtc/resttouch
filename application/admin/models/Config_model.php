<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Config_model extends CI_Model {

	function guardar_jerarquia()
	{
		$datos = [
			['jerarquia' => 1, 'descripcion' => 'Gerente'],
			['jerarquia' => 2, 'descripcion' => 'Usuario'],
			['jerarquia' => 3, 'descripcion' => 'Usuario Supremo']
		];

		foreach ($datos as $row) {
			$this->db->insert('jerarquia', $row);
		}
	}

	function guardar_tipo_usuario() {
		$datos = [
			['usuario_tipo' => 1, 'descripcion' => 'Mesero', 'jerarquia' => 2],
			['usuario_tipo' => 2, 'descripcion' => 'CallCenter', 'jerarquia' => 2],
			['usuario_tipo' => 3, 'descripcion' => 'Gerente', 'jerarquia' => 1],
			['usuario_tipo' => 4, 'descripcion' => 'Anfitrion', 'jerarquia' => 2],
			['usuario_tipo' => 5, 'descripcion' => 'Cocinero', 'jerarquia' => 2],
			['usuario_tipo' => 6, 'descripcion' => 'Bodeguero', 'jerarquia' => 2],
			['usuario_tipo' => 7, 'descripcion' => 'Jefe de Bodega', 'jerarquia' => 2],
			['usuario_tipo' => 8, 'descripcion' => 'Cajero', 'jerarquia' => 2],
			['usuario_tipo' => 9, 'descripcion' => 'Motorista', 'jerarquia' => 2],
			['usuario_tipo' => 10, 'descripcion' => 'Tendero', 'jerarquia' => 2],
			['usuario_tipo' => 11, 'descripcion' => 'Garrotero', 'jerarquia' => 2],
		];

		foreach ($datos as $row) {
			$this->db->insert('usuario_tipo', $row);
		}
	}

}

/* End of file Config_model.php */
/* Location: ./application/admin/models/Config_model.php */