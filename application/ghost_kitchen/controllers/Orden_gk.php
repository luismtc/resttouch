<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Orden_gk extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model([
            'Catalogo_model',
            'Orden_gk_model',
            'Estatus_orden_gk_model'
        ]);
        $this->output->set_content_type("application/json", "UTF-8");
    }   

    public function seguimiento()
    {
        $datos = $this->Orden_gk_model->buscar($_GET);
        if(is_array($datos)) {
            foreach($datos as $d)
            {
                $d->corporacion = $this->Catalogo_model->getCorporacion(['corporacion' => $d->corporacion, '_uno' => true]);
                $d->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $d->comanda_origen, '_uno' => true]);
                $d->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => $d->estatus_orden_gk, '_uno' => true]);
                $d->orden_rt = json_decode($d->orden_rt);
                unset($d->raw_orden);
            }
        } else {
            if ($datos) 
            {
                $datos->corporacion = $this->Catalogo_model->getCorporacion(['corporacion' => $datos->corporacion, '_uno' => true]);
                $datos->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $datos->comanda_origen, '_uno' => true]);
                $datos->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => $datos->estatus_orden_gk, '_uno' => true]);                
                $datos->orden_rt = json_decode($datos->orden_rt);
                unset($datos->raw_orden);
            }
        }
        $this->output->set_output(json_encode($datos));
    }

}