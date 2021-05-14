<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Acceso extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Acceso_model');
		$this->output
			->set_content_type("application/json", "UTF-8");
	}

	public function guardar($id = "")
	{
		$acceso = new Acceso_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$datos['exito'] = $acceso->guardar($req);;

			if ($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['acceso'] = $acceso;
			} else {
				$datos['mensaje'] = $acceso->getMensaje();
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$menu = $this->config->item("menu");
		$_GET['activo'] = 1;
		$acceso = $this->Acceso_model->buscar($_GET);
		$datos = [];

		if (is_array($acceso)) {
			foreach ($acceso as $row) {
				$tmp = new Acceso_model($row->acceso);
				$row->modulo = $tmp->getModulo();
				$row->usuario = $tmp->getUsuario();
				$row->submodulo = $tmp->getSubModulo();
				$row->opcion = $tmp->getOpcion();
				$datos[] = $row;
			}

			usort($datos, function ($a, $b) {
				if (strcasecmp(quitar_acentos($a->modulo->descripcion), quitar_acentos($b->modulo->descripcion)) === 0) {
					if (strcasecmp(quitar_acentos($a->submodulo['nombre']), quitar_acentos($b->submodulo['nombre'])) === 0) {
						return strcasecmp(quitar_acentos($a->opcion['nombre']), quitar_acentos($b->opcion['nombre']));
					}
					return strcasecmp(quitar_acentos($a->submodulo['nombre']), quitar_acentos($b->submodulo['nombre']));
				}
				return strcasecmp(quitar_acentos($a->modulo->descripcion), quitar_acentos($b->modulo->descripcion));
			});
		} else if ($acceso) {
			$tmp = new Acceso_model($acceso->acceso);
			$acceso->modulo = $tmp->getModulo();
			$acceso->submodulo = $tmp->getSubModulo();
			$acceso->opcion = $tmp->getOpcion();
			$datos[] = $acceso;
		}

		$this->output
			->set_output(json_encode($datos));
	}
}

/* End of file Acceso.php */
/* Location: ./application/admin/controllers/mante/Acceso.php */