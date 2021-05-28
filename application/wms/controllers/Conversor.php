<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Conversor extends CI_Controller {

	public function __construct()
	{
        parent::__construct();
        $this->load->model([
        	'Sede_model',
        	'Empresa_model',
        	'Egreso_model', 
        	'EDetalle_model',
        	'Ingreso_model',
        	'IDetalle_Model',
        	'Catalogo_model',
        	'Articulo_model',
        	'Receta_model',
        	'Presentacion_model',
        	'Proveedor_model',
        	'Tipo_movimiento_model',
        	'BodegaArticuloCosto_model',
        	'Bodega_model'
        ]);

        $this->load->helper(['jwt', 'authorization']);
		$headers = $this->input->request_headers();
		if (isset($headers['Authorization'])) {
			$this->data = AUTHORIZATION::validateToken($headers['Authorization']);
		}

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

				$sede = new Sede_model($this->data->sede);
				$emp = $sede->getEmpresa();

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
				$req['egreso']['proveedor'] = $idProv;
				$req['ingreso']['bodega'] = $req['egreso']['bodega'];
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
							$costo = 0;
							if (isset($req['egreso']['detalle'])) {					
								foreach ($req['egreso']['detalle'] as $det) {
									$det['vnegativo'] = false;
									$bcosto = $this->BodegaArticuloCosto_model->buscar([
										'bodega' => $req['egreso']['bodega'], 
										'articulo' => $det['articulo'], 
										'_uno' => true
									]);

									if ($bcosto) {
										$pres = new Presentacion_model($det['presentacion']);
										if ($emp->metodo_costeo == 1) {
											$det['precio_unitario'] = $bcosto->costo_ultima_compra * $pres->cantidad;
											
										} else if ($emp->metodo_costeo == 2) {
											$det['precio_unitario'] = $bcosto->costo_promedio * $pres->cantidad;
										} else {
											$det['precio_unitario'] = 0;
										}
									} else {
										$det['precio_unitario'] = 0;
									}

									$costo = $det['precio_unitario'];

									$egr->setDetalle($det, $egr->egreso);
								}
							}

							$ing = new Ingreso_model();

							$datos['exito'] = $ing->guardar($req['ingreso']);

							if (isset($req['ingreso']['detalle'])) {					
								foreach ($req['ingreso']['detalle'] as $det) {	
									$art = new Articulo_model($det['articulo']);
									$det['precio_total'] = $costo * (double)$det['cantidad_utilizada'];
									$det['precio_unitario'] = $det['precio_total']/$det['cantidad'];
									$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;						
									$ing->setDetalle($det);
									$bac = new BodegaArticuloCosto_model();
									$bac->guardar_costos($ing->bodega, $det['articulo']);
								}
							}

							if (isset($req['merma'])) {
								$req['egreso']['bodega'] = $bod->bodega;
								$merma = new Ingreso_model();						
								$merma->guardar($req['egreso']);
								foreach ($req['merma'] as $det) {
									$det['precio_total'] = $costo * (double)$det['cantidad_utilizada'];
									$det['precio_unitario'] = $det['precio_total']/$det['cantidad'];
									$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;							
									$merma->setDetalle($det);
									$bac = new BodegaArticuloCosto_model();
									$bac->guardar_costos($merma->bodega, $det['articulo']);
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
		$conReceta = false;
		$costo = true;
		$sede = new Sede_model($this->data->sede);
        $emp = $sede->getEmpresa();
        $bod = new Bodega_model($req['bodega']);

		foreach ($req['detalle'] as $det) {
			$art = new Articulo_model($det['articulo']);
			$receta = $art->getReceta();

			if (count($receta) > 0) {
				$conReceta = true;
			}

			foreach ($receta as $row) {
				$rec = new Articulo_model($row->articulo->articulo);
				$args = [
					"bodega" => $req['bodega'],
					"sede" => $bod->sede
				];
				$rec->actualizarExistencia($args);
				if(($rec->existencias < ($row->cantidad * $det['cantidad']/$art->rendimiento))){
					$continuar = false;
				}
			}

			$pres = new Presentacion_model($art->presentacion_reporte);
			$precio = $art->getCostoReceta();
			
			if ($precio <= 0) {
				$costo = false;
			}
		}

		if ($costo) {
			if ($conReceta) {
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
							$pres = new Presentacion_model($det['presentacion']);
							$costoIngr = 0;
							foreach ($art->getReceta() as $row) {
								$presR = $this->Presentacion_model->buscar([
									"medida" => $row->medida->medida,
									"cantidad" => 1,
									"_uno" => true
								]);

								if (!$presR) {
									$presR = new Presentacion_model();
									$presR->guardar([
										"medida" => $row->medida->medida,
										"descripcion" => $row->medida->descripcion,
										"cantidad" => 1
									]);

									$presR->presentacion = $presR->getPK();
								}

								$bac = $this->BodegaArticuloCosto_model->buscar([
									"articulo" => $row->articulo->articulo,
									"bodega" => $egr->bodega,
									"_uno" => true
								]);
								$bac = new BodegaArticuloCosto_model($bac->bodega_articulo_costo);
								$rec = new Articulo_model($row->articulo->articulo);
								$row->cantidad = $row->cantidad * $det['cantidad'] / $art->rendimiento;
								$costo = $bac->get_costo($egr->bodega, $rec->getPK(), $presR->presentacion);
								$total = ($costo * $row->cantidad);
								$costoIngr += $total;
								$egr->setDetalle([
									"articulo" => $row->articulo->articulo,
									"cantidad" => $row->cantidad,
									"precio_unitario" => $costo,
									"precio_total" => $total,
									"presentacion" => $presR->presentacion,
									"vnegativo" => false
								]);
							}
							$pres = new Presentacion_model($art->presentacion_reporte);

							$det['cantidad'] = $det['cantidad'];
							$det['precio_total'] = $costoIngr * $pres->cantidad;
							$det['precio_unitario'] = $det['precio_total'] / $det['cantidad'];
							$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;

							$det["presentacion"] = $art->presentacion_reporte;
							$ingr->setDetalle($det);
							$bac = new BodegaArticuloCosto_model();
							$bac->guardar_costos($ingr->bodega, $det['articulo']);
						}
						$datos['exito'] = true;
						$datos['mensaje'] = "Datos Actualizados con Exito";
					} else {
						$datos['mensaje'] = "Ocurrio un error al guardar el ingreso";	
					}
				} else {
					$datos['mensaje'] = "No hay suficientes ingredientes para producir la receta";
				}
			} else {
				$datos['mensaje'] = "El artículo debe tener una receta para realizar la produccion";
			}
		} else {
			$datos['mensaje'] = "El artículo debe tener costo para realizar la produccion";
		}	
		
		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Conversor.php */
/* Location: ./application/wms/controllers/Conversor.php */