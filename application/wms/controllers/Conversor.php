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
					$bodMerma = $this->Catalogo_model->getBodega(['merma' => 1, "_uno" => true]);
					if(!$bodMerma) {
						$continuar = false;
					}
				}
				if ($continuar) {	
					$bod = new Bodega_model($req['egreso']['bodega']);		
					foreach ($req['egreso']['detalle'] as $det) {
						$pres = new Presentacion_model($det['presentacion']);
						$cantidad = 0;
						$cantEgreso = (float) $det['cantidad'];
						$art = new Articulo_model($det['articulo']);
						$args = [
							"bodega" => $bod->getPK(),
							"sede" => $bod->sede
						];
						$art->actualizarExistencia($args);
						$bac = new BodegaArticuloCosto_model();
						$costo = $bac->get_costo($bod->getPK(), $art->getPK(), $pres->getPK());

						if ($art->existencias/$pres->cantidad < $det['cantidad']) {
							$continuar = false;
							$datos['mensaje'] = 'No hay existencias suficientes para realizar la transformación';
						}

						foreach ($req['ingreso']['detalle'] as $det) {
							$cantidad += $det['cantidad_utilizada'];
						}

						if (isset($req['merma'])) {
							foreach ($req['merma'] as $det) {
								$cantidad += $det['cantidad_utilizada'];
							}
						}

						if ($cantidad < $cantEgreso || $cantidad > $cantEgreso) {
							$continuar = false;
							$datos['mensaje'] = 'La cantidad del producto original no coincide con la cantidad a utilizar en ingreso y merma';
						}

						if ($costo <= 0) {
							$continuar = false;
							$datos['mensaje'] = "El artículo {$art->descripcion} debe tener costo para realizar la transformación";;
						}
					}		
					if ($continuar) {
						$continuar = $egr->guardar($req['egreso']);
						if ($continuar) {
							$costoEgreso = 0;
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

									$costoEgreso = $det['precio_unitario'];

									$egr->setDetalle($det, $egr->egreso);
								}
							}

							$ing = new Ingreso_model();

							$datos['exito'] = $ing->guardar($req['ingreso']);
							$bodegaIng = new Bodega_model($ing->bodega);

							if (count(verDato($req['ingreso'], 'detalle', [])) > 0) {	
								foreach ($req['ingreso']['detalle'] as $det) {	
									$art = new Articulo_model($det['articulo']);
									$pres = new Presentacion_model($det['presentacion']);

									$det['precio_total'] = $costoEgreso * (double)$det['cantidad_utilizada'];
									$det['precio_unitario'] = $det['precio_total']/$det['cantidad'];
									$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;
									$art->actualizarExistencia([
										"bodega" => $ing->bodega,
										"sede" => $bodegaIng->sede
									]);			
									$ing->setDetalle($det);
									$bac = new BodegaArticuloCosto_model();
									//$bac->guardar_costos($ing->bodega, $det['articulo']);
									$bcosto = $this->BodegaArticuloCosto_model->buscar([
										'bodega' => $ing->bodega, 
										'articulo' => $art->getPK(), 
										'_uno' => true
									]);

									$costo = $art->getCosto(["bodega" => $ing->bodega]);

									if ($bcosto) {
										$bac->cargar($bcosto->bodega_articulo_costo);
										/*Ultima compra*/
										$costo_uc = $art->getCosto([
											"bodega" => $ing->bodega, 
											"metodo_costeo" => 1
										]);
										$bac->costo_ultima_compra = $costo_uc;

										/*Costo promedio*/
										$costo = $bcosto->costo_promedio * $art->existencias + $det['precio_total'];
										$existencia = $art->existencias + $det['cantidad']*$pres->cantidad;
										if ($existencia != 0) {
											$costo = $costo / $existencia;
										} 

										$bac->costo_promedio = $costo;
										
									} else {
										$bac->bodega = $ing->bodega;
										$bac->articulo = $art->getPK();
										$bac->costo_ultima_compra = $costo;
										$bac->costo_promedio = $costo;
									}

									$bac->guardar();
								}
							}

							if (count(verDato($req, 'merma', [])) > 0) {
								$req['egreso']['bodega'] = $bodMerma->bodega;
								$merma = new Ingreso_model();						
								$merma->guardar($req['egreso']);
								$bod = new Bodega_model($merma->bodega);

								foreach ($req['merma'] as $det) {
									$pres = new Presentacion_model($det['presentacion']);
									$det['precio_total'] = $costoEgreso * (double)$det['cantidad_utilizada'];
									$det['precio_unitario'] = $det['precio_total']/$det['cantidad'];
									$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;	
									$art = new Articulo_model($det['articulo']);

									$art->actualizarExistencia([
										"bodega" => $merma->bodega,
										"sede" => $bod->sede
									]);

									$merma->setDetalle($det);
									$bac = new BodegaArticuloCosto_model();
									
									$bcosto = $this->BodegaArticuloCosto_model->buscar([
										'bodega' => $merma->bodega, 
										'articulo' => $art->getPK(), 
										'_uno' => true
									]);

									$costo = $art->getCosto(["bodega" => $merma->bodega]);
									if ($bcosto) {
										$bac->cargar($bcosto->bodega_articulo_costo);
										/*Ultima compra*/
										$costo_uc = $art->getCosto([
											"bodega" => $merma->bodega, 
											"metodo_costeo" => 1
										]);
										$bac->costo_ultima_compra = $costo_uc;

										/*Costo promedio*/
										$costo = $bcosto->costo_promedio * $art->existencias + $det['precio_total'];
										$existencia = $art->existencias + $det['cantidad']*$pres->cantidad;
										if ($existencia != 0) {
											$costo = $costo / $existencia;
										} 

										$bac->costo_promedio = $costo;
										
									} else {
										$bac->bodega = $merma->bodega;
										$bac->articulo = $art->getPK();
										$bac->costo_ultima_compra = $costo;
										$bac->costo_promedio = $costo;
									}
									$bac->guardar();
								}
							}
							if($datos['exito']) {
								$datos['mensaje'] = "Datos Actualizados con Exito";
							} 
						} else {
							$datos['mensaje'] = 'Ocurrio un error al guardar el egreso';
						}
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

        if (verDato($req, "bodega")) {
        	$bod = new Bodega_model($req['bodega']);
        	if (verDato($req, "detalle")) {
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
										$rec = new Articulo_model($row->articulo->articulo);
										$presR = $rec->getPresentacionReporte();

										$bac = $this->BodegaArticuloCosto_model->buscar([
											"articulo" => $row->articulo->articulo,
											"bodega" => $egr->bodega,
											"_uno" => true
										]);

										$bac = new BodegaArticuloCosto_model($bac->bodega_articulo_costo);
										

										$row->cantidad = ($row->cantidad * $det['cantidad'] / $art->rendimiento)/ $presR->cantidad;
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
									$det['precio_total'] = $costoIngr;
									$det['precio_unitario'] = $det['precio_total'] / $det['cantidad'];
									$det['precio_costo_iva'] = $det['precio_total'] * $emp->porcentaje_iva;

									$det["presentacion"] = $art->presentacion_reporte;
									$art->actualizarExistencia([
										"bodega" => $ingr->bodega
									]);
									$ingr->setDetalle($det);
									$bcosto = $this->BodegaArticuloCosto_model->buscar([
										'bodega' => $ingr->bodega, 
										'articulo' => $art->getPK(), 
										'_uno' => true
									]);

									$costo = $art->getCosto(["bodega" => $ingr->bodega]);
									$bac = new BodegaArticuloCosto_model();
									if ($bcosto) {
										$bac->cargar($bcosto->bodega_articulo_costo);
										/*Ultima compra*/
										$costo_uc = $art->getCosto([
											"bodega" => $ingr->bodega, 
											"metodo_costeo" => 1
										]);
										$bac->costo_ultima_compra = $costo_uc;

										/*Costo promedio*/
										$costo = $bcosto->costo_promedio * $art->existencias + $det['precio_total'];
										$existencia = $art->existencias + $det['cantidad']*$pres->cantidad;
										if ($existencia != 0) {
											$costo = $costo / $existencia;
										} 

										$bac->costo_promedio = $costo;
										
									} else {
										$bac->bodega = $ingr->bodega;
										$bac->articulo = $art->getPK();
										$bac->costo_ultima_compra = $costo;
										$bac->costo_promedio = $costo;
									}

									$art->guardar(["costo" => $costo]);
									$bac->guardar();
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
						$datos['mensaje'] = "El artículo debe tener una receta para realizar la producción";
					}
				} else {
					$datos['mensaje'] = "El artículo debe tener costo para realizar la producción";
				}
        	} else {
        		$datos['mensaje'] = "Debe seleccionar un artículo para realizar la producción";
        	}
				
        } else {
        	$datos['mensaje'] = "Hacen falta datos obligatorios para poder continuar (Bodega)";
        }
	        	
		
		$this->output
		->set_output(json_encode($datos));
	}

}

/* End of file Conversor.php */
/* Location: ./application/wms/controllers/Conversor.php */