<?php
defined('BASEPATH') or exit('No direct script access allowed');
require FCPATH . 'application/admin/controllers/Restserver.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

class Usuario extends Restserver
{
    public function __construct()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
        parent::__construct();
        $this->load->model('Usuario_model');
    }

    public function login_post()
    {
        $credenciales = array(
            'usr' => $this->post('usr'),
            'pwd' => $this->post('pwd')
        );

        $status = parent::HTTP_OK;
        $logged = $this->Usuario_model->logIn($credenciales);
        //if (!$logged['token']) { $status = parent::HTTP_NOT_FOUND; }
        $this->response($logged, $status);
    }

    public function usuarios_get()
    {
        if ($this->status_verification_request) {
            $debaja = (int) $this->get('debaja');
            $this->response($this->Usuario_model->findAll($debaja));
        } else {
            $this->noAutorizado();
        }
    }

    public function usuario_post()
    {
        if ($this->status_verification_request) {
            $datos = $this->getValidData($this->post(), $this->Usuario_model->columnas);
            $status = parent::HTTP_OK;
            $nuevo = $this->Usuario_model->crear($datos);
            //if (!$nuevo['id']) { $status = parent::HTTP_NOT_FOUND; }
            $this->response($nuevo, $status);
        } else {
            $this->noAutorizado();
        }
    }

    public function usuario_put()
    {
        if ($this->status_verification_request) {
            $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
            $datos = $this->getValidData($this->put(), $this->Usuario_model->columnas);
            $status = parent::HTTP_OK;
            $nuevo = $this->Usuario_model->actualizar($id, $datos);
            //if (!$nuevo['id']) { $status = parent::HTTP_NOT_FOUND; }
            $this->response($nuevo, $status);
        } else {
            $this->noAutorizado();
        }
    }

    public function checktoken_get(){
        $this->response(['valido' => $this->status_verification_request ? true : false]);
    }
}
