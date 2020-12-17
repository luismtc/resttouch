<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Certificador_configuracion_model extends General_model {

	public $nombre;
	public $vinculo_factura;
	public $vinculo_firma;
	public $metodo_factura;
	public $vinculo_anulacion;
	public $metodo_anulacion;
	public $vinculo_grafo;
	public $metodo_grafo;

	public function __construct($id="")
	{
		parent::__construct();
		$this->setTabla("certificador_configuracion");
		if (!empty($id)) {
			$this->cargar($id);
		}
	}

	public function actualizarCertificadores()
	{
		$tmp = $this->db
					->where("certificador_configuracion", $this->getPK())
					->get("certificador_fel")
					->result();
					
		$req = [
			"nombre" => $this->nombre,
			"vinculo_factura" => $this->vinculo_factura,
			"vinculo_firma" => $this->vinculo_firma,
			"metodo_factura" => $this->metodo_factura,
			"vinculo_anulacion" => $this->vinculo_anulacion,
			"metodo_anulacion" => $this->metodo_anulacion,
			"vinculo_grafo" => $this->vinculo_grafo,
			"metodo_grafo" => $this->metodo_grafo
		];

		foreach ($tmp as $row) {
			$cert = new Certificador_fel_model($row->certificador_fel);

			$cert->guardar($req);
		}
	}

}

/* End of file Certificador_configuracion_model.php */
/* Location: ./application/admin/models/Certificador_configuracion_model.php */