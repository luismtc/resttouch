<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Articulo extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model([
			'Articulo_model', 
			'Receta_model',
			'Presentacion_model'
		]);
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

				$pre = new Presentacion_model($req['presentacion']);
				$preRep = new Presentacion_model($req['presentacion_reporte']);
				if ($pre->medida == $preRep->medida) {
					$datos['exito'] = $art->guardar($req);

					if ($datos['exito']) {
						$datos['mensaje'] = "Datos Actualizados con Exito";
						$datos['articulo'] = $art;
					} else {
						$datos['mensaje'] = $art->getMensaje();
					}
				} else {
					$datos['mensaje'] = "Las unidades de medida no coinciden";		
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
				$row->presentacion_reporte = $art->getPresentacionReporte();
				$datos[] = $row;
			}
		} else if (is_object($tmp)) {
			$art = new Articulo_model($tmp->articulo);
			$tmp->categoria_grupo = $art->getCategoriaGrupo();
			$tmp->presentacion = $art->getPresentacion();
			$datos = $tmp;
		}

		usort($datos, function ($a, $b) {
			return strcmp($a->descripcion, $b->descripcion);
		});

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
				if((int)$articulo !== (int)$req['articulo']) {
					$rec = new Articulo_model($req['articulo']);
					if ($art->combo == 1 && $rec->combo == 1) {
						$datos['mensaje'] = "No es posible agregar un combo a un combo como detalle.";
					} else {
						$det = $art->guardarReceta($req, $id);
						if ($det) {
							$datos['exito'] = true;
							$datos['mensaje'] = "Datos Actualizados con Exito";
							$datos['detalle'] = $det;
						} else {
							$datos['mensaje'] = implode("<br>", $art->getMensaje());
						}
					}
				} else {
					$datos['mensaje'] = "No se puede agregar un producto a si mismo como parte de una receta/detalle.";
				}				
			} else {
				$datos['mensaje'] = "La cantidad debe ser mayor a cero.";
			}
		} else {
			$datos['mensaje'] = "Parametros invalidos.";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function imprimir_receta($articulo)
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);
		$art = new Articulo_model($articulo);
		$datos = [];

		$sede = $this->Catalogo_model->getSede([
			'sede' => $data->sede,
			"_uno" => true
		]);

		$datos["articulo"] = $art;
		$datos["costo"] = $art->getCostoReceta();
		foreach ($art->getReceta() as $row) {
			$rec = new Articulo_model($row->articulo->articulo);
			$row->costo = $rec->getCostoReceta();
			$datos["receta"][] = $row;
		}

		if ($sede) {
			$emp = $this->Catalogo_model->getEmpresa([
				"empresa" => $sede->empresa,
				"_uno" => true
			]);
			if ($emp) {
				$datos['empresa'] = $emp;
				$datos['nsede'] = $sede->nombre;
			}
		}

		$mpdf = new \Mpdf\Mpdf([
			'tempDir' => sys_get_temp_dir(),
			'format' => 'Legal'
		]);
		
		$mpdf->WriteHTML($this->load->view('reporte/receta', $datos, true));
		$mpdf->Output("Receta.pdf", "D");
	}

	public function buscar_receta($id)
	{
		$art = new Articulo_model($id);

		$this->output
			->set_content_type("application/json")
			->set_output(json_encode($art->getReceta($_GET)));
	}

	public function copiar()
	{
		ini_set('memory_limit', -1);
		set_time_limit(0);
		$this->load->model(["Categoria_model", "Cgrupo_model"]);
		$datos = ["exito" => false, "mensaje" => "Error"];
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);

		if ($this->input->method() == 'post') {
			$req = json_decode(file_get_contents('php://input'), true);

			if (verDato($req, "sedes")) {
				if (verDato($req, "articulo")) {
					$tmp = $this->Articulo_model->buscar([
						"articulo" => $req['articulo'],
						"_uno" => true
					]);
					$articulos[] = $tmp;
					
				} else {
					$articulos = $this->Catalogo_model->getArticulo(["sede" => $data->sede]);
				}

				foreach ($req["sedes"] as $sede) {
					foreach ($articulos as $row) {
						$art = new Articulo_model($row->articulo);
						if (!empty($art->codigo)) {
							$art->copiar($sede['sede']);
						}
					}

					foreach ($articulos as $row) {
						$art = new Articulo_model($row->articulo);
						if (!empty($art->codigo)) {
							$art->copiarDetalle($sede['sede']);
						}
					}
				}

				$datos["exito"] = true;
				$datos['mensaje'] = "Datos actualizados con exito";
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar";
			}

		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
			->set_output(json_encode($datos));
	}

	public function actualizar_costos()
	{
		$arts = $this->Articulo_model->buscar();
		$datos = [];
		$datos['exito'] = true;
		$datos['mensaje'] = "Datos Actualizados con Exito";
		foreach ($arts as $row) {
			$art = new Articulo_model($row->articulo);
			$costo = $art->getCosto();
			$art->guardar(["costo" => $costo]);
		}

		$this->output
			->set_content_type("application/json")
			->set_output(json_encode($datos));
	}

	public function articulos_de_pos()
	{
		$this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		$data = AUTHORIZATION::validateToken($headers['Authorization']);

		$datos = $this->Articulo_model->articulosParaPOS(['sede' => $data->sede]);

		$this->output->set_content_type("application/json")->set_output(json_encode($datos));
	}
}

/* End of file Articulo.php */
/* Location: ./application/admin/controllers/mante/Articulo.php */