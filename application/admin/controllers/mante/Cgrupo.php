<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

class Cgrupo extends CI_Controller {

public function __construct()
	{
        parent::__construct();
		$this->load->model(['Cgrupo_model', 'Catalogo_model', 'Categoria_model', 'Impresora_model']);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}


	public function guardar($id = "") 
	{
		$cat = new Cgrupo_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			$datos['exito'] = $cat->guardar($req);;

			if($datos['exito']) {
				$datos['mensaje'] = "Datos Actualizados con Exito";
				$datos['categoria'] = $cat;
			} else {
				$datos['mensaje'] = $cat->getMensaje();
			}	

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}
		

		$this->output
		->set_output(json_encode($datos));
	}

	public function buscar()
	{
		$datos = [];
		if (count($_GET) == 0) {
			$_GET['categoria_grupo_grupo'] = null;
		}
		$tmp = $this->Cgrupo_model->buscar($_GET);

		if(is_array($tmp)) {
			foreach ($tmp as $row) {
				$datos[] = $this->Catalogo_model->getCategoriaGrupo([
					"categoria_grupo" => $row->categoria_grupo,
					"raiz" => true,
					"_uno" => true
				]);
			}
			$datos = ordenar_array_objetos($datos, 'descripcion');
		} else if(is_object($tmp)) {
			$datos = $this->Catalogo_model->getCategoriaGrupo([
				"categoria_grupo" => $tmp->categoria_grupo,
				"raiz" => true,
			]);
		}
 
		$this->output
		->set_content_type("application/json")
		->set_output(json_encode($datos));
	}

	public function get_categoria_grupo()
	{
		if (!isset($_GET['categoria_grupo_grupo'])) {
			$_GET['categoria_grupo_grupo'] = null;
		}

		$datos = $this->Cgrupo_model->buscar($_GET);

		usort($datos, function ($a, $b) {
			return strcmp($a->descripcion, $b->descripcion);
		});

		foreach ($datos as $cg) {
			$cg->impresora = new Impresora_model($cg->impresora);
		}

		$this->output->set_content_type("application/json")->set_output(json_encode($datos));
	}

}

/* End of file Cgrupo.php */
/* Location: ./application/admin/controllers/mante/Cgrupo.php */