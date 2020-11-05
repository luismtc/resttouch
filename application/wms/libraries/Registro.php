<?php 
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * summary
 */
class Registro
{
    private $enca;
    private $detalle;
    private $sede;
    private $cat;
    private $egr;
    private $ci;

    public function __construct()
    {

    }

    public function setCatalogo($cat)
    {
    	$this->cat = $cat;
    }

    public function setEgreso($egreso)
    {
    	$this->egr = $egreso;
    }

    public function guardarEgreso()
    {
    	$bodega = $this->cat->getBodega([
			"sede" => $this->sede->sede,
			"_uno" => true
		]);
		$mov = $this->cat->getTipoMovimiento([
			"egreso" => 1,
			"_uno" => true
		]);

		$enca = [
			"tipo_movimiento" => $mov->tipo_movimiento,
			"bodega" => $bodega->bodega,
			"usuario" => 1,
			"estatus_movimiento" => 2,
			"fecha" => Hoy(3)
		];

		return $this->egr->guardar($enca);
    }

    public function getEgreso()
    {
    	return $this->egr;
    }

    public function setDB($key)
    {
    	$ci =& get_instance();
    	
		$datosDb = $this->cat->getCredenciales([
			"llave" => $key
		]);

		if ($datosDb) {
			$conn = [
	            'host' => $datosDb->db_hostname,
	            'user' => $datosDb->db_username,
	            'password' => $datosDb->db_password,
	            'database' => $datosDb->db_database
	        ];
			$db = conexion_db($conn);
			$ci->db = $ci->load->database($db, true);

			$this->sede = $this->cat->getSede([
				"admin_llave" => $key,
				"_uno" => true
			]);	

			if ($this->sede) {
				return true;
			}
		}

		return false;
        
    }
}

 ?>