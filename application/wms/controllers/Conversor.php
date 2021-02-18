<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Conversor extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model([
        	'Egreso_model', 
        	'EDetalle_model',
        	'Ingreso_model',
        	'IDetalle_Model',
        	'Catalogo_model',
        	'Articulo_model',
        	'Receta_model',
        	'Presentacion_model',
        	'Proveedor_model',
        	'Tipo_movimiento_model'
        ]);
        $this->output
		->set_content_type("application/json", "UTF-8");
	}

	public function transformar()
	{
		$req = json_decode(file_get_contents('php://input'), true);
		$egr = new Egreso_model();
		$datos = ['exito' => false];
		$idProv = null;
		$tipoMov = null;
		if ($this->input->method() == 'post') {
			if (isset($req['egreso']) && isset($req['ingreso'])) {
				$prov = $this->Proveedor_model->buscar([
					"razon_social" => "Interno",
					"_uno" => true
				]);

				$mov = $this->Tipo_movimiento_model->buscar([
					"descripcion" => "Transformacion",					
					"_uno" => true
				]);

				if (!$prov) {
					$obj = new Proveedor_model();
					$obj->guardar([
						"razon_social" => "Interno",
						"nit" => "cf",
						"corporacion" => 1
					]);
					$idProv = $obj->getPK();
				} else {
					$idProv = $prov->proveedor;
				}

				if (!$mov) {
					$obj = new Tipo_movimiento_model();
					$obj->guardar([
						"descripcion" => "Transformacion",
						"ingreso" => 1,
						"egreso" => 1
					]);
					$tipoMov = $obj->getPK();
				} else {
					$tipoMov = $mov->tipo_movimiento;
				}

				$req['ingreso']['proveedor'] = $idProv;
				$req['egreso']['estatus_movimiento'] = 2;
				$req['ingreso']['estatus_movimiento'] = 2;
				$req['ingreso']['tipo_movimiento'] = $tipoMov;
				$req['egreso']['tipo_movimiento'] = $tipoMov;

				$continuar = true;
				if (isset($req['merma']) && is_array($req['merma'])) {
					$bod = $this->Catalogo_model->getBodega(['merma' => 1, "_uno" => true]);
					if(!$bod) {
						$continuar = false;
					}
				}
				if ($continuar) {			
					foreach ($req['egreso']['detalle'] as $det) {
						$art = new Articulo_model($det['articulo']);
						$art->actualizarExistencia();
						if ($art->existencias < $det['cantidad']) {
							$continuar = false;
						}
					}		
					if ($continuar) {
						$continuar = $egr->guardar($req['egreso']);
						if ($continuar) {
							if (isset($req['egreso']['detalle'])) {					
								foreach ($req['egreso']['detalle'] as $det) {
									$egr->setDetalle($det, $egr->egreso);
								}
							}

							$ing = new Ingreso_model();
							$datos['exito'] = $ing->guardar($req['ingreso']);

							if (isset($req['ingreso']['detalle'])) {					
								foreach ($req['ingreso']['detalle'] as $det) {	
									$art = new Articulo_model($det['articulo']);
									$det['precio_unitario'] = $art->getCostoReceta();						
									$ing->setDetalle($det, $ing->ingreso);
								}
							}

							if (isset($req['merma'])) {
								$req['egreso']['bodega'] = $bod->bodega;
								$merma = new Ingreso_model();						
								$merma->guardar($req['egreso']);
								foreach ($req['merma'] as $det) {							
									$merma->setDetalle($det, $merma->ingreso);
								}
							}
							if($datos['exito']) {
								$datos['mensaje'] = "Datos Actualizados con Exito";
							} 
						} else {
							$datos['mensaje'] = 'Ocurrio un error al guardar el egreso';
						}
					} else {
						$datos['mensaje'] = 'No hay existencias suficientes para realizar la transformación';
					}
						
				} else {
					$datos['mensaje'] = 'No existe una bodega para merma';
				}
			} else {
				$datos['mensaje'] = "Hacen falta datos obligatorios para continuar";
			}
		} else {
			$datos['mensaje'] = "Parametros Invalidos";
		}

		$this->output
		->set_output(json_encode($datos));
	}

	function producir()
	{
		$tmp = new Configuracion_model();
		$config = $tmp->buscar();
		$vnegativo = get_configuracion($config, "RT_VENDE_NEGATIVO", 3);
		$req = json_decode(file_get_contents('php://input'), true);
		$req['estatus_movimiento'] = 2;
		$datos = ['exito' => false];
		$ingr = new Ingreso_model();
		$continuar = true;
		$idProv = null;
		$tipoMov = null;

		foreach ($req['detalle'] as $det) {
			$art = new Articulo_model($det['articulo']);
			foreach ($art->getReceta() as $row) {
				$rec = new Articulo_model($row->articulo->articulo);
				$rec->actualizarExistencia();
				if(($rec->existencias < $row->cantidad * $det['cantidad']) && !$vnegativo){
					$continuar = false;
				}
			}
		}

		if ($continuar) {
			$mov = $this->Tipo_movimiento_model->buscar([
				"descripcion" => "Produccion",					
				"_uno" => true
			]);

			$prov = $this->Proveedor_model->buscar([
				"razon_social" => "Interno",
				"_uno" => true
			]);

			if (!$prov) {
				$obj = new Proveedor_model();
				$obj->guardar([
					"razon_social" => "Interno",
					"nit" => "cf",
					"corporacion" => 1
				]);
				$idProv = $obj->getPK();
			} else {
				$idProv = $prov->proveedor;
			}

			if (!$mov) {
				$obj = new Tipo_movimiento_model();
				$obj->guardar([
					"descripcion" => "Produccion",
					"ingreso" => 1,
					"egreso" => 1
				]);
				$tipoMov = $obj->getPK();
			} else {
				$tipoMov = $mov->tipo_movimiento;
			}

			$req['proveedor'] = $idProv;
			$req['tipo_movimiento'] = $tipoMov;

			if($ingr->guardar($req)){
				$egr = new Egreso_model();
				$egr->guardar($req);
				foreach ($req['detalle'] as $det) {
					$art = new Articulo_model($det['articulo']);
					$pres = $art->getPresentacion();
					foreach ($art->getReceta() as $row) {
						$rec = new Articulo_model($row->articulo->articulo);
						$row->cantidad = $row->cantidad * $det['cantidad'];
						$total = ($row->articulo->precio * $row->cantidad);

						$egr->setDetalle([
							"articulo" => $row->articulo->articulo,
							"cantidad" => $row->cantidad,
							"precio_unitario" => $rec->precio,
							"precio_total" => $total,
							"presentacion" => 1
						]);
					}
					$det['cantidad'] = $det['cantidad'] * $art->rendimiento * $pres->cantidad;
					$det['precio_unitario'] = $art->getCostoReceta();
					$det["presentacion"] = $art->presentacion;
					$ingr->setDetalle($det);
				}
				$datos['exito'] = true;
				$datos['mensaje'] = "Datos Actualizados con Exito";
			} else {
				$datos['mensaje'] = "Ocurrio un error al guardar el ingreso";	
			}
		} else {
			$datos['mensaje'] = "No hay suficientes ingredientes para producir la receta";
		}
		
		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Conversor.php */
/* Location: ./application/wms/controllers/Conversor.php */