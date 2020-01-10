<?php 

if (!defined( 'BASEPATH')) exit('No direct script access allowed');

class Inicio
{
    
    public function __construct()
    {
    	$this->ci =& get_instance();
    	$this->ci->load->helper(['jwt', 'authorization']);
    	$this->libres = ['/usuario/login.json'];
    }

    public function verificarSesion()
    {
        if(!in_array($_SERVER['PATH_INFO'], $this->libres)) {
        	$headers = $this->ci->input->request_headers();
        	$response = ['mensaje' => '¡Acceso no autorizado!', 'valido' => false];
        	$continuar = true;
			if (array_key_exists('Authorization', $headers)) {
				$token = $headers['Authorization'];
			} else {
				$continuar = false;
			}

			try {
				$data = AUTHORIZATION::validateToken($token);
				if ($data === false) {
					$continuar = false;
				} else {
					$now = new DateTime(date('Y-m-d H:i:s'));
					$hasta = new DateTime($data->hasta);
					$interval = $now->diff($hasta);
					$diff = $interval->format('%a');

					if ($now->format('Y-m-d H:i:s') > $hasta->format('Y-m-d H:i:s')) {
						$response['mensaje'] = 'El token ya se venció. Debe loggearse de nuevo, por favor.';
						$continuar = false;
					}
				}
			} catch (Exception $e) {
				$continuar = false;
			}

			if(!$continuar) {
				header('Content-type: application/json');
			 	echo json_encode($response);
			 	exit();	 	
			}
        }
    }
}