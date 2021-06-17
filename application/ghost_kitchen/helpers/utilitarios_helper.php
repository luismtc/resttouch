<?php
if (!function_exists('get_dato_from_object')) {
    /* Verifica que un índice se encuentre dentro de un arreglo. o una propiedad en un objeto */
    function get_dato_from_object($obj, $ruta)
    {
        $dato = null;
        foreach (explode("->", $ruta) as $row) {
            $dato = verDato($obj, $row);
            if (is_object($dato)) {
                $obj = $dato;
                $dato = null;
            }
        }

        if ($dato !== null) {
            return $dato;
        }

        return false;
    }
}
