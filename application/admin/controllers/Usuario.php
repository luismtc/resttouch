<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Usuario extends CI_Controller
{
    public function __construct()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
        parent::__construct();
        $this->load->model(['Usuario_model', 'Catalogo_model']);
        $this->output
        ->set_content_type("application/json", "UTF-8");
    }

    public function login()
    {
        $this->load->model('Acceso_model');
        $logged = ['status' => false];
        if ($this->input->method() == 'post') {

            $credenciales = json_decode(file_get_contents('php://input'), true);
            $usr = explode("@", $credenciales['usr']);

            $credenciales['usr'] = $usr[0];

            $usr = explode(".", $usr[1]);

            $datosDb = $this->Catalogo_model->getCredenciales(['dominio' => $usr[0]]);
            $conn = [
                'host' => $datosDb->db_hostname,
                'user' => $datosDb->db_username,
                'password' => $datosDb->db_password,
                'database' => $datosDb->db_database
            ];

            $db = conexion_db($conn);
            
            $this->db = $this->load->database($db, true);

            $credenciales['dominio'] = $usr[0];
            $logged = $this->Usuario_model->logIn($credenciales);
            
            if (!empty($logged['token'])) {            
                $datos = [];
                $tmp = [];
                $menu = $this->config->item("menu");
                $args = ['activo' => 1, 'usuario' => $logged['idusr']];            
                $acceso = $this->Acceso_model->buscar($args);    
                foreach ($acceso as $row) {
                    $tmp[$row->modulo]['nombre'] = $menu[$row->modulo]['nombre'];

                    $tmp[$row->modulo]['submodulo'][$row->submodulo]['nombre'] = $menu[$row->modulo]['submodulo'][$row->submodulo]['nombre'];

                    $tmp[$row->modulo]['submodulo'][$row->submodulo]['opciones'][] = $menu[$row->modulo]['submodulo'][$row->submodulo]['opciones'][$row->opcion];
                }

                foreach ($tmp as $row) {
                    $row['submodulo'] = array_values($row['submodulo']);
                    $datos[] = $row;
                }
                
                $logged['acceso'] = array_values($datos);
                $logged['status'] = true;
            }
            //if (!$logged['token']) { $status = parent::HTTP_NOT_FOUND; }
        } else {
            $logged['error'] = "Parametros invalidos";
        }
        
        $this->output
        ->set_output(json_encode($logged));
    }

    public function obtener_usuarios()
    {
        $debaja = 0;

        if(isset($_GET['debaja'])) {
            $debaja = 1;
        }

        $this->output
        ->set_output(json_encode($this->Usuario_model->findAll($debaja)));
    }

    public function guardar_usuario($id = '')
    {
        $datos = ['status' => false];
        if ($this->input->method() == 'post') {
            $req = json_decode(file_get_contents('php://input'), true);
            //$status = parent::HTTP_OK;
            if (empty($id)) {                
                $datos = $this->Usuario_model->crear($req);
            } else {
                $datos = $this->Usuario_model->actualizar($id, $req);
            }
        } else {
            $datos['error'] = "Parametros invalidos";
        }

        $this->output
        ->set_output(json_encode($datos));
    }
    
    public function usuarios_post()
    {
        $datos = json_decode(file_get_contents('php://input'), true);
        
        $nuevo = $this->Usuario_model->find($datos);
        
        $this->output->set_output(json_encode($nuevo));
    }

    public function checktoken_get(){
        $this->output->set_output(json_encode(['valido' => true]));
    }
}
