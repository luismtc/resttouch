<?php
defined('BASEPATH') or exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

class Articulo extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model(['Articulo_model', 'Receta_model']);
		$this->output
			->set_content_type("application/json", "UTF-8");
	}

	public function chkCodigoExistente($codigo = '')
	{
		$art = $this->Articulo_model->buscar(['codigo' => $codigo, '_uno' => true]);
		return $art ? true : false;
	}

	public function guardar($id = "")
	{
		$art = new Articulo_model($id);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {

			$existeCodigo = false;

			if (empty($id)) {
				$req['existencias'] = 0;
				$existeCodigo = $this->chkCodigoExistente($req['codigo']);
			} else {
				$req['existencias'] = $art->existencias;
				$tmpArt = $this->Articulo_model->buscar(['articulo' => $id, '_uno' => true]);
				if($tmpArt) {
					if($req['codigo'] !== $tmpArt->codigo) {
						$existeCodigo = $this->chkCodigoExistente($req['codigo']);
					}
				}
			}

			if (!$existeCodigo) {
				$datos['exito'] = $art->guardar($req);

				if ($datos['exito']) {
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['articulo'] = $art;
				} else {
					$datos['mensaje'] = $art->getMensaje();
				}
			} else {
				$datos['mensaje'] = 'El código '.$req['codigo'].' ya existe. Intente otro, por favor.';
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
		$tmp = $this->Articulo_model->buscar($_GET);

		if (is_array($tmp)) {
			foreach ($tmp as $row) {
				$art = new Articulo_model($row->articulo);
				$row->categoria_grupo = $art->getCategoriaGrupo();
				$row->presentacion = $art->getPresentacion();
				$datos[] = $row;
			}
		} else if (is_object($tmp)) {
			$art = new Articulo_model($tmp->articulo);
			$tmp->categoria_grupo = $art->getCategoriaGrupo();
			$tmp->presentacion = $art->getPresentacion();
			$datos = $tmp;
		}

		$this->output
			->set_content_type("application/json")
			->set_output(json_encode($datos));
	}

	public function guardar_receta($articulo, $id = '')
	{
		$art = new Articulo_model($articulo);
		$req = json_decode(file_get_contents('php://input'), true);
		$datos = ['exito' => false];
		if ($this->input->method() == 'post') {
			if ($req['cantidad'] > 0) {
				$det = $art->guardarReceta($req, $id);
				if ($det) {
					$datos['exito'] = true;
					$datos['mensaje'] = "Datos Actualizados con Exito";
					$datos['detalle'] = $det;
				} else {
					$datos['mensaje'] = implode("<br>", $egr->getMensaje());
				}
			} else {
				$datos['mensaje'] = "La cantidad debe ser mayor a cero";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function buscar_receta($id)
	{
		$art = new Articulo_model($id);

		$this->output
			->set_content_type("application/json")
			->set_output(json_encode($art->getReceta($_GET)));
	}
}

/* End of file Articulo.php */
/* Location: ./application/admin/controllers/mante/Articulo.php */