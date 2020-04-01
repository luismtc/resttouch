<?php 

if( ! function_exists('suma_field')){
	function suma_field($datos, $campo, $filtro = []) {
		$suma_campo = 0;

		foreach ($datos as $row) {
			$suma_campo += $row->$campo;
		}

		return round($suma_campo,2);
	}
}

if( ! function_exists('insertar_articulo')){
	function buscar_articulo($datos, $articulos, $descripcion='', $result=[]) {
		$cat = [];
		foreach ($datos as $row) {
			$row->descripcion = $descripcion." - ".$row->descripcion;
			
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