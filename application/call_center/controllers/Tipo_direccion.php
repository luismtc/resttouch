<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Tipo_direccion extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model([
            'Tipo_direccion_model'
        ]);

        $this->load->helper(['jwt', 'authorization']);
        $headers = $this->input->request_headers();
        $this->data = new stdClass();
        if (isset($headers['Authorization'])) {
            $this->data = AUTHORIZATION::validateToken($headers['Authorization']);
        }
        $this->output->set_content_type("application/json", "UTF-8");
    }

    public function buscar()
    {
        $datos = $this->Tipo_direccion_model->buscar($_GET);
        $datos = ordenar_array_objetos($datos, 'descripcion');
        $this->output->set_output(json_encode($datos));
    }

    public function guardar($id = '')
    {
        $tipodir = new Tipo_direccion_model($id);
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            $datos['exito'] = $tipodir->guardar($req);
            if ($datos['exito']) {
                $datos['mensaje'] = "Datos actualizados con éxito.";
                $datos['cliente_master'] = $tipodir;
            } else {
                $datos['mensaje'] = $tipodir->getMensaje();
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }
}
