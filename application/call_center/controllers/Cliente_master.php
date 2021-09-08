<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Cliente_master extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model([
            'Cliente_master_model',
            'Cliente_master_nota_model',
            'Telefono_model',
            'Cliente_master_telefono_model',
            'Cliente_master_direccion_model',
            'Tipo_direccion_model',
            'Cliente_model',
            'Cliente_master_cliente_model'
        ]);

        $this->load->helper(['jwt', 'authorization']);
        $headers = $this->input->request_headers();
        $this->data = new stdClass();
        if (isset($headers['Authorization'])) {
            $this->data = AUTHORIZATION::validateToken($headers['Authorization']);
        }
        $this->output->set_content_type("application/json", "UTF-8");
    }

    public function get_cliente_master()
    {
        if (isset($_GET['_parecido'])) {
            $_GET['_sin_escape'] = true;
            if (isset($_GET['nombre']) && !empty(trim($_GET['nombre']))) {
                $nombre = str_replace(' ', '%', trim($_GET['nombre']));
                unset($_GET['nombre']);
                $_GET['_like']['nombre'] = $nombre;
            }
        }
        $datos = $this->Cliente_master_model->buscar($_GET);
        $this->output->set_output(json_encode($datos));
    }

    public function guardar($id = '')
    {
        $clt = new Cliente_master_model($id);
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            $datos['exito'] = $clt->guardar($req);
            if ($datos['exito']) {
                $datos['mensaje'] = "Datos actualizados con éxito.";
                $datos['cliente_master'] = $clt;
            } else {
                $datos['mensaje'] = $clt->getMensaje();
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }

    public function get_cliente_master_nota()
    {
        $datos = $this->Cliente_master_nota_model->buscar($_GET);
        $this->output->set_output(json_encode($datos));
    }

    public function guardar_nota($id = '')
    {
        $cltNota = new Cliente_master_nota_model($id);
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            $datos['exito'] = $cltNota->guardar($req);
            if ($datos['exito']) {
                $datos['mensaje'] = "Datos actualizados con éxito.";
                $datos['cliente_master_nota'] = $cltNota;
            } else {
                $datos['mensaje'] = $cltNota->getMensaje();
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }

    private function srch_telefono($args = [])
    {
        if (isset($args['_parecido'])) {
            $args['_sin_escape'] = true;
            if (isset($args['numero']) && !empty(trim($args['numero']))) {
                $args['numero'] = strtoupper(preg_replace("/[^0-9?!]/", '', $args['numero']));
                $numero = str_replace(' ', '%', trim($args['numero']));
                unset($args['numero']);
                $args['_like']['numero'] = $numero;
            }
        }
        return $this->Telefono_model->buscar($args);
    }

    public function buscar_telefono()
    {
        $this->output->set_output(json_encode($this->srch_telefono($_GET)));
    }

    public function guardar_telefono()
    {
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            if (isset($req['numero'])) {
                $req['numero'] = strtoupper(preg_replace("/[^0-9?!]/", '', $req['numero']));
                $telefono = $this->Telefono_model->buscar(['numero' => $req['numero'], '_uno' => true]);
                if ($telefono) {
                    $req['telefono'] = $telefono->telefono;
                } else {
                    $tel = new Telefono_model();
                    $tel->guardar(['numero' => $req['numero']]);
                    $req['telefono'] = $tel->getPK();
                }
                unset($req['numero']);
            }

            $srch = $this->Cliente_master_telefono_model->buscar(['cliente_master' => $req['cliente_master'], 'telefono' => $req['telefono'], '_uno' => true]);
            if (!$srch) {
                $cmt = new Cliente_master_telefono_model();
                $datos['exito'] = $cmt->guardar([
                    'cliente_master' => $req['cliente_master'],
                    'telefono' => $req['telefono']
                ]);
                if ($datos['exito']) {
                    $datos['mensaje'] = 'Teléfono asociado al cliente con éxito.';
                } else {
                    $datos['mensaje'] = $cmt->getMensaje();
                }
            } else {
                $datos['exito'] = true;
                $datos['mensaje'] = 'Este cliente ya tiene asociado este número de teléfono.';
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }

    public function buscar_direccion()
    {
        $datos = $this->Cliente_master_direccion_model->buscar($_GET);

        if (is_array($datos)) {
            foreach ($datos as $row) {
                $row->tipo_direccion = $this->Tipo_direccion_model->buscar(['tipo_direccion' => $row->tipo_direccion, '_uno' => true]);
            }
        } else if (is_object($datos)) {
            $datos->tipo_direccion = $this->Tipo_direccion_model->buscar(['tipo_direccion' => $datos->tipo_direccion, '_uno' => true]);
        }

        $this->output->set_output(json_encode($datos));
    }

    public function guardar_direccion($id = '')
    {
        $cltDir = new Cliente_master_direccion_model($id);
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            $datos['exito'] = $cltDir->guardar($req);
            if ($datos['exito']) {
                $datos['mensaje'] = "Datos actualizados con éxito.";
                $datos['cliente_master'] = $cltDir;
            } else {
                $datos['mensaje'] = $cltDir->getMensaje();
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }

    private function srch_datos_facturacion($args = []) {
        if (isset($args['nit']) && !empty(trim($args['nit']))) {
            $args['nit'] = strtoupper(preg_replace("/[^0-9KkCcFf?!]/", '', $args['nit']));
        }

        if (isset($args['_parecido'])) {
            $args['_sin_escape'] = true;
            if (isset($args['nit']) && !empty(trim($args['nit']))) {
                $nit = $args['nit'];
                unset($args['nit']);
                $args['_like']['nit'] = $nit;
            }
            if (isset($args['nombre']) && !empty(trim($args['nombre']))) {
                $nombre = trim(str_replace(' ', '%', trim($args['nombre'])));                
                unset($args['nombre']);
                $args['_like']['nombre'] = $nombre;
            }
        }

        $datos = $this->Cliente_model->buscar($args);
        if (is_array($datos)) {
            $datos = ordenar_array_objetos($datos, 'nombre');
        }
        return $datos;
    }

    public function buscar_datos_facturacion()
    {        
        $this->output->set_output(json_encode($this->srch_datos_facturacion($_GET)));
    }

    public function guardar_datos_facturacion()
    {
        $req = json_decode(file_get_contents('php://input'), true);
        $datos = ['exito' => false];
        if ($this->input->method() == 'post') {
            if (isset($req['nit']) && isset($req['nombre'])) {
                $cliente = $this->srch_datos_facturacion(['nit' => $req['nit'], '_uno' => true]);
                if ($cliente) {
                    $req['cliente'] = $cliente->cliente;
                } else {
                    $cli = new Cliente_model();
                    $cli->guardar([
                        'nombre' => $req['nombre'],
                        'direccion' => isset($req['direccion']) && !empty(trim($req['direccion'])) ? trim($req['direccion']) : 'Ciudad',
                        'nit' => strtoupper(preg_replace("/[^0-9KkCcFf?!]/", '', $req['nit'])),
                        'correo' => isset($req['correo']) && !empty(trim($req['correo'])) ? trim($req['correo']) : null
                    ]);
                    $req['cliente'] = $cli->getPK();
                }
            }

            $srch = $this->Cliente_master_cliente_model->buscar(['cliente_master' => $req['cliente_master'], 'cliente' => $req['cliente'], '_uno' => true]);
            if (!$srch) {
                $cmc = new Cliente_master_cliente_model();
                $datos['exito'] = $cmc->guardar([
                    'cliente_master' => $req['cliente_master'],
                    'cliente' => $req['cliente']
                ]);
                if ($datos['exito']) {
                    $datos['mensaje'] = 'Datos de facturación asociados al cliente con éxito.';
                } else {
                    $datos['mensaje'] = $cmc->getMensaje();
                }
            } else {
                $datos['exito'] = true;
                $datos['mensaje'] = 'Este cliente ya tiene asociados estos datos de facturación.';
            }
        } else {
            $datos['mensaje'] = "Parámetros inválidos.";
        }
        $this->output->set_output(json_encode($datos));
    }
}
