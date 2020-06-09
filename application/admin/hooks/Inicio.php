<?php 

if (!defined( 'BASEPATH')) exit('No direct script access allowed');

class Inicio
{
    public function verificarSesion()
    {
    	$this->ci =& get_instance();
    	$this->ci->load->helper(['jwt', 'authorization']);
    	$this->libres = ['/usuario/login'];
 
        if(!in_array($_SERVER['PATH_INFO'], $this->libres)) {
        	$headers = $this->ci->input->request_headers();
        	$response = ['mensaje' => '¡Acceso no autorizado!', 'valido' => false];
        	$continuar = true;
			if (array_key_exists('Authorization', $headers)) {
				$token = $headers['Authorization'];
				try {
					$data = AUTHORIZATION::validateToken($token);
					if ($data === false) {
						$continuar = false;
					} else {
						$now = new DateTime(date('Y-m-d H:i:s'));
						$hasta = new DateTime($data->hasta);						

						if ($now->format('Y-m-d H:i:s') > $hasta->format('Y-m-d H:i:s')) {
							$response['mensaje'] = 'El token ya se venció. Debe loggearse de nuevo, por favor.';
							$continuar = false;
						} else {
							$db = conexion_db([
				                'host' => $data->host,
				                'user' => $data->user,
				                'password' => $data->password,
				                'database' => $data->database
				            ]);
							$this->ci->db = $this->ci->load->database($db, true);
						}
					}
				} catch (Exception $e) {
					$continuar = false;
				}
			} else {
				$continuar = false;
			}

			if(!$continuar) {
				header('Content-type: application/json');
			 	echo json_encode($response);
			 	exit();	 	
			}
        }
    }

    public function headers()
    {
    	header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
		header('Allow: GET, POST, OPTIONS, PUT, DELETE');
    }
}