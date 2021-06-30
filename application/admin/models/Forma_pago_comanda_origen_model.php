<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Forma_pago_comanda_origen_model extends General_model
{

    public $forma_pago_comanda_origen;
    public $forma_pago;
    public $comanda_origen;
    public $codigo;

    public function __construct($id = "")
    {
        parent::__construct();
        $this->setTabla("forma_pago_comanda_origen");

        if (!empty($id)) {
            $this->cargar($id);
        }

        $this->load->model([
            'Fpago_model'
        ]);
    }

    public function full_search($args = [])
    {
        $datos = $this->buscar($args);
        if (is_array($datos)) {
            foreach ($datos as $d) {
                $d->forma_pago = $this->Fpago_model->buscar(['forma_pago' => $d->forma_pago, '_uno' => true]);
            }
        } else {
            if ($datos) {
                $datos->forma_pago = $this->Fpago_model->buscar(['forma_pago' => $datos->forma_pago, '_uno' => true]);
            }
        }
        return $datos;
    }

    public function buscar_agregar($args = [])
    {
        $fpco = $this->buscar($args);
        if ($fpco) {
            return $this->full_search($args);
        } else {
            $nfpco = new Forma_pago_comanda_origen_model();
            $nfpco->guardar([
                'comanda_origen' => $args['comanda_origen'],
                'codigo' => trim($args['codigo'])
            ]);
        }
        return null;
    }
}
