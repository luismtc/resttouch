<?php
if (!function_exists('get_dato_from_object')) {    
    function get_dato_from_object($obj, $ruta)
    {
        $dato = null;
        foreach (explode("->", $ruta) as $row) {
            $dato = verDato($obj, $row);
            if (is_object($dato)) {
                $obj = $dato;
                $dato = null;
            } else {
                break;
            }
        }
        return $dato;
    }
}

if (!function_exists('get_dato_from_paths')) {    
    function get_dato_from_paths($obj, $rutas)
    {
        $dato = null;
        foreach (explode("|", $rutas) as $row) {
            $dato = get_dato_from_object($obj, $row);
            if ($dato) {
                break;
            }
        }
        return $dato;
    }
}

