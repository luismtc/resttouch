<?php 

if (!function_exists('guardar_comanda')) {
	function guardar_comanda($req=[])
	{
		$datos = ["exito" => false, "mensaje" => "Error"];
		$ci =& get_instance();
		$usu = $ci->Usuario_model->find([
			'usuario' => $req['mesero'], 
			"_uno" => true
		]);

		if ($usu) {
			$turno = $ci->Turno_model->getTurno([
				"sede" => $req['data']->sede,
				'abierto' => true, 
				"_uno" => true
			]);
			$comanda = new Comanda_model($req['comanda']);
			$mesa = new Mesa_model($req['mesa']);
			$req['usuario'] = $req['data']->idusuario;
			$req['sede'] = $req['data']->sede;
			$continuar = true;

			if ($turno) {
				$req['turno'] = $turno->turno;
				if ($mesa->estatus == 2 && empty($req['comanda'])) {
					$continuar = false;
				}
				if ($continuar) {
					# $comanda->comandaenuso = 1;
					$datos['exito'] = $comanda->guardar($req);

					if (empty($req['comanda'])) {
						$comanda->setMesa($req['mesa']);
						$mesa->guardar(["estatus" => 2]);
					}

					if (count($req['cuentas']) > 0) {
						foreach ($req['cuentas'] as $row) {
							$cuenta = new Cuenta_model();

							if (isset($row['cuenta']) && !empty($row['cuenta']) && $row['cuenta'] > 0) {
								$cuenta->cargar($row['cuenta']);
							} else {
								$tmpCuenta = $ci->Cuenta_model->buscar([
									"nombre" => trim($row["nombre"]),
									"comanda" => $comanda->comanda,
									"_uno" => true
								]);

								if ($tmpCuenta) {
									$cuenta->cargar($tmpCuenta->cuenta);
								} else if(count($comanda->getCuentas()) == 1){

									$tmpCuenta = $ci->Cuenta_model->buscar([
										"nombre" => "Unica",
										"comanda" => $comanda->comanda,
										"_uno" => true
									]);

									if ($tmpCuenta) {
										$cuenta->cargar($tmpCuenta->cuenta);
									}
								}
							}

							if ($cuenta->cerrada == 0) {
								$row['comanda'] = $comanda->comanda;
								if (isset($row['cuenta'])) {
									unset($row['cuenta']);
								}
								$cuenta->guardarCuenta($row);
								if (isset($row['productos'])) {
									foreach ($row['productos'] as $prod) {
										if (isset($prod['detalle_comanda']) && !empty($prod['detalle_comanda'])) {
											$det = new Dcomanda_model($prod['detalle_comanda']);
											$det->guardar([
												"notas" => $prod['notas']
											]);
										}
										
									}
								}
							}							
						}
						$datos['exito'] = true;
					}	

					if($datos['exito']) {
						$datos['mensaje'] = "Datos Actualizados con Exito";
						$datos['comanda'] = $comanda->getComanda();	
					} else {
						$datos['mensaje'] = implode("<br>", $comanda->getMensaje());
					}	
				} else {
					$datos['mensaje'] = "La mesa ya fue abierta en otra estación, por favor actualice la pantalla.";
				}
			} else {
				$datos['mensaje'] = "No existe ningun turno abierto";
			}
		} else {
			$datos['mensaje'] = "Mesero Invalido";
		}

		return $datos;
	}
}

if( ! function_exists('suma_field')){
	function suma_field($datos, $campo, $filtro = []) {
		$suma_campo = 0;

		foreach ($datos as $row) {
			if (isset($row->$campo) && is_numeric($row->$campo)) {
				
				$suma_campo += $row->$campo;
			}
		}

		return round($suma_campo,2);
	}
}

if( ! function_exists('url_base')){
	function url_base($url) {
		if (in_array($_SERVER["HTTP_HOST"], ["localhost", "127.0.0.1"])) {
			return base_url("resttouch/{$url}");
		}
		
		return base_url($url);
	}
}

if ( ! function_exists("array_result")) {
	function array_result($result, $campo)
	{
		$datos = array();

		foreach ($result as $row) {
			if(is_array($row)){
				if(isset($row[$campo])){
					$datos[] = $row[$campo];
				}
			}else{
				$datos[] = $row->$campo;
			}
		}

		return $datos;
	}
}

if( ! function_exists('insertar_articulo')){
	function buscar_articulo($datos, $articulos, $descripcion='', $result=[]) {
		$cat = [];
		foreach ($datos as $row) {
			if (!empty($descripcion)) {				
				$row->descripcion = $descripcion." - ".$row->descripcion;
			}
			
			if (count($row->articulo) > 0) {
				$art = [];
				$cantidad = 0;
				foreach ($row->articulo as $value) {
					if (isset($articulos[$value->articulo])) {
						$value = (object) $articulos[$value->articulo];
						$art[] = $value;
						$cantidad += $value->cantidad;
					}
				}
				$tmp = [];
				foreach ($art as $value) {
					$value->porcentaje = number_format($value->cantidad*100/$cantidad, 2);
					$tmp[] = $value;
				}
				usort($tmp, function($a, $b) {return (int)$a->cantidad < (int)$b->cantidad;});
				$row->articulo = $tmp;
				
				$row->total = suma_field($row->articulo, 'total');	
				$result[] = [
					"articulos" => $row->articulo, 
					"descripcion" => $row->descripcion,
					"total" => $row->total
				];
			} 	
			$tmp = buscar_articulo($row->categoria_grupo_grupo, $articulos, $row->descripcion);
			if (count($tmp) > 0) {
				$result = array_merge($result, $tmp);
			}
		}

		return $result;
	}
}

if (! function_exists("arrayToXml")) {
	function arrayToXml($array, $rootElement = null, $xml = null) { 
	    $_xml = $xml; 
	      
	    // If there is no Root Element then insert root 
	    if ($_xml === null) { 
	        $_xml = new SimpleXMLElement($rootElement !== null ? $rootElement : '<root/>'); 
	    } 
	      
	    // Visit all key value pair 
	    foreach ($array as $k => $v) { 
	          
	        // If there is nested array then 
	        if (is_array($v)) {  
	            if (is_numeric($k)) {
	            	$k = "cuenta";
	            }
	            // Call function for nested array 
	            arrayToXml($v, $k, $_xml->addChild($k)); 
	            } 
	              
	        else { 
	            // Simply add child element. 
	            if (is_numeric($k)) {
	             	$k = "cuenta";
	             } 
	            $_xml->addChild($k, $v); 
	        } 
	    } 
	      
	    return $_xml->asXML(); 
	} 
}

if (! function_exists('get_configuracion')) {
	function get_configuracion($config, $campo, $tipo=0)
	{
		if (is_array($config)) {
			foreach ($config as $row) {
				if (strtolower(trim($row->campo)) == strtolower(trim($campo))) {
					return $row->valor;
				}		
			}	
		}

		switch ($tipo) {
			case 1:
				return 0;
				break;
			case 2:
				return "";
			case 3:
				return false;
			default:
				return false;
				break;
		}
	}
}

if ( ! function_exists('formatoFecha')) {
	function formatoFecha($fecha = '', $tipo = '') {

		if (empty($fecha)) {
			return $fecha;
		}

		try {
			$date    = new DateTime($fecha);
			$formato = '';

			switch ($tipo) {
				case 1:
					$formato = "d/m/Y H:i";
					break;
				case 2:
					$formato = 'd/m/Y';
					break;
				case 3: # Devuelve el día
					$formato = 'd';
					break;
				case 4: # Devuelve mes
					$formato = 'm';
					break;
				case 5: # Devuelve año
					$formato = 'Y';
					break;
				case 6: # Gringo AWB
					$formato = 'M-d-Y';
					break;
				case 7:
					$formato = "Y-m-d H:i:s";
					break;
				case 8:
					$formato = "Y-m-d";
					break;
				case 9: #devuelve hora
					$formato = "H:i:s";
					break;
				case 10:
					$formato = "n";
					break;
				default:
					$formato = "d/m/Y H:i";
					break;
			}

			return $date->format($formato);

		} catch (Exception $e) {
		    return $fecha;
		}
	}
}

if (! function_exists('conexion_db')) {
	function conexion_db($args = [])
	{
		$db = [
			'dsn'	=> '',
			'hostname' => $args['host'],
			'username' => $args['user'],
			'password' => $args['password'],
			'database' => $args['database'],

			'dbdriver' => 'mysqli',
			'dbprefix' => '',
			'pconnect' => FALSE,
			'db_debug' => (ENVIRONMENT !== 'production'),
			'cache_on' => FALSE,
			'cachedir' => '',
			'char_set' => 'utf8',
			'dbcollat' => 'utf8_general_ci',
			'swap_pre' => '',
			'encrypt' => FALSE,
			'compress' => FALSE,
			'stricton' => FALSE,
			'failover' => array(),
			'save_queries' => TRUE
		];
		return $db;
	}
}

if ( ! function_exists('enviarCorreo')) {
	function enviarCorreo(Array $datos) {
		/*
		$url = "http://intranet.c807.com/grupo_c807/mtm/contactos/index.php/envio/general";
		$postdata = http_build_query(array('datos' => $datos));

		$opts = array('http' =>
			array(
				'method'  => 'POST',
				'header'  => "Content-Type: application/x-www-form-urlencoded; charset=utf8",
				'content' => $postdata
			)
		);

		$context   = stream_context_create($opts);
		$resultado = file_get_contents($url, false, $context);

		$obj = (object)json_decode($resultado);
		return $obj->exito;
		*/
		return true;
	}
}

if ( ! function_exists('Hoy')) {
	function Hoy($tipo = '') {
		switch ($tipo) {
			case 1:
				return date('d/m/Y');
			case 2:
				return date('d/m/Y H:i');
			case 3:
				return date('Y-m-d H:i:s');
			case 4:
				return date('H:i:s');
			default:
				return date('Y-m-d');
		}
	}
}

if ( ! function_exists("validarCantidades")) {
	function validarCantidades($args = [])
	{

		$combo = new Articulo_model($args['articulo']);
		$dato = ["exito" => false, "mensaje" => ""];

		if ($combo->combo || $combo->multiple) {
			if (count($args['receta']) >= $combo->cantidad_minima && count($args['receta']) <= $combo->cantidad_maxima) {
				foreach ($args['receta'] as $row) {
					$dato = validarCantidades($row);
					if (!$dato['exito']) {
						break;
					}
				}
			} else {
				$dato['mensaje'] = "La cantidad del articulo {$combo->descripcion} debe estar entre {$combo->cantidad_minima} y {$combo->cantidad_maxima}";
			}
		} else {
			$dato['exito'] = true;
		}
		
		return $dato;	
	}
}