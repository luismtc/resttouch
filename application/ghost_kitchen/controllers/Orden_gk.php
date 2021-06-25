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
            'Estatus_orden_gk_model',
            'Usuario_model',
            'Bitacora_model',
            'Accion_model',
            'Turno_model',
            'Articulo_model',
            'Articulo_vendor_tercero_model',
            'Comanda_model',
            'Cuenta_model',
            'Dcomanda_model',
            'Dcuenta_model',
            'Receta_model'
        ]);

        $this->load->helper(['jwt', 'authorization']);
        $headers = $this->input->request_headers();
        $this->data = AUTHORIZATION::validateToken($headers['Authorization']);

        $this->output->set_content_type("application/json", "UTF-8");
    }

    public function seguimiento()
    {
        $datos = $this->Orden_gk_model->buscar($_GET);
        if (is_array($datos)) {
            foreach ($datos as $d) {
                $d->corporacion = $this->Catalogo_model->getCorporacion(['corporacion' => $d->corporacion, '_uno' => true]);
                $d->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $d->comanda_origen, '_uno' => true]);
                $d->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => $d->estatus_orden_gk, '_uno' => true]);
                $d->orden_rt = json_decode($d->orden_rt);
                unset($d->raw_orden);
            }
        } else {
            if ($datos) {
                $datos->corporacion = $this->Catalogo_model->getCorporacion(['corporacion' => $datos->corporacion, '_uno' => true]);
                $datos->comanda_origen = $this->Catalogo_model->getComandaOrigen(['comanda_origen' => $datos->comanda_origen, '_uno' => true]);
                $datos->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => $datos->estatus_orden_gk, '_uno' => true]);
                $datos->orden_rt = json_decode($datos->orden_rt);
                unset($datos->raw_orden);
            }
        }
        $this->output->set_output(json_encode($datos));
    }

    public function anular_orden_gk()
    {
        $datos = new stdClass();
        $datos->exito = false;

        if ($this->input->method() == 'post') {
            $req = json_decode(file_get_contents('php://input'));
            $bitComanda = new Bitacora_model();
            $usuario = new Usuario_model($this->data->idusuario);
            $accion = $this->Accion_model->buscar(["descripcion" => "Modificacion", "_uno" => true]);
            $ordenGk = new Orden_gk_model($req->orden_gk);
            $ordenGk->guardar(['estatus_orden_gk' => 2]);

            $comentario = "Anulación: El usuario {$usuario->nombres} {$usuario->apellidos} anuló la orden {$ordenGk->numero_orden} de {$req->origen}. Motivo: {$req->comentario}";

            $bitComanda->guardar([
                "accion" => $accion->accion,
                "usuario" => $this->data->idusuario,
                "tabla" => "orden_gk",
                "registro" => $req->orden_gk,
                "comentario" => $comentario
            ]);

            $datos->exito = true;
            $datos->mensaje = 'Orden anulada con éxito.';
            $datos->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => 2, '_uno' => true]);
        } else {
            $datos->mensaje = 'El método de llamada no es válido.';
        }
        $this->output->set_output(json_encode($datos));
    }

    private function get_distinct_sedes($articulos = [])
    {
        $sedes = [];
        foreach ($articulos as $art) {
            if (!in_array($art->atiende, $sedes)) {
                $sedes[] = $art->atiende;
            }
        }
        return $sedes;
    }

    private function get_turnos_sedes($sedes)
    {
        $datos = new stdClass();
        $datos->faltantes = '';
        $datos->exito = true;
        foreach ($sedes as $sede) {
            $turno = $this->Turno_model->getTurno(['sede' => $sede->sede, 'abierto' => true, '_uno' => true]);
            if ($turno) {
                $sede->turno = $turno;
            } else {
                $datos->exito = false;
                if ($datos->faltantes !== '') {
                    $datos->faltantes .= ', ';
                }
                $datos->faltantes .= $sede->nombre;
            }
        }
        $datos->sedes = $sedes;
        return $datos;
    }

    private function get_meseros_turnos($sedes)
    {
        $datos = new stdClass();
        $datos->faltantes = '';
        $datos->exito = true;

        foreach ($sedes as $sede) {
            $tmp = new Turno_model($sede->turno->turno);
            $usrs_turno = $tmp->getUsuarios();
            $found = false;
            foreach ($usrs_turno as $usr) {
                if (strtolower(trim($usr->usuario_tipo->descripcion)) == 'mesero') {
                    $sede->turno->mesero = $usr;
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                $datos->exito = false;
                if ($datos->faltantes !== '') {
                    $datos->faltantes .= ', ';
                }
                $datos->faltantes .= $sede->nombre;
            }
        }
        $datos->sedes = $sedes;
        return $datos;
    }

    private function genera_comanda_sede($sede, $ordenrt)
    {
        $datos = new stdClass();
        $datos->exito = false;
        $datos->mensaje = '';

        $comandaHeader = [
            'usuario' => $sede->turno->mesero->usuario->usuario,
            'sede' => $sede->sede,
            'estatus' => 1,
            'turno' => $sede->turno->turno,
            'domicilio' => 1,
            'comanda_origen' => $ordenrt->comanda_origen,
            'comanda_origen_datos' => json_encode($ordenrt),
            'mesero' => $sede->turno->mesero->usuario->usuario,
            'notas_generales' => "Pedido #{$ordenrt->numero_orden}",
            'orden_gk' => $ordenrt->orden_gk
        ];

        $cuentaHeader = [
            'comanda' => null,
            'nombre' => $ordenrt->datos_entrega->nombre ? $ordenrt->datos_entrega->nombre : 'Unica',
            'numero' => 1
        ];


        $articulos = [];
        $datos->articulosFaltantes = '';
        foreach ($ordenrt->articulos as $articulo) {
            if ((int)$articulo->atiende->sede === (int)$sede->sede) {
                $idArticulo = $this->Articulo_vendor_tercero_model->get_articulo_vendor($articulo->vendor->vendor_tercero, $articulo->id_tercero);
                if ($idArticulo > 0) {
                    $art = new Articulo_model($idArticulo);
                    $articulos[] = [
                        'articulo' => $idArticulo,
                        'cantidad' => $articulo->cantidad,
                        'precio' => $articulo->precio,
                        'impreso' => 0,
                        'total' => (float)$articulo->precio * (float)$articulo->cantidad,
                        'notas' => '',
                        'bodega' => $art->getBodega()
                    ];
                } else {
                    if ($datos->articulosFaltantes !== '') {
                        $datos->articulosFaltantes .= ', ';
                    }
                    $datos->articulosFaltantes .= "{$articulo->descripcion} de {$articulo->vendor->nombre}";
                }
            }
        }

        if ($datos->articulosFaltantes !== '') {
            $datos->exito = false;

            if ($datos->mensaje !== '') {
                $datos->mensaje .= '; ';
            }

            $datos->mensaje .= "No se encontraron los siguientes artículos: {$datos->articulosFaltantes}.";

            return $datos;
        }


        $comanda = new Comanda_model();

        if ($comanda->guardar($comandaHeader)) {
            $cuentaHeader['comanda'] = $comanda->comanda;
            $cuenta = new Cuenta_model();
            if ($cuenta->guardar($cuentaHeader)) {
                foreach ($articulos as $articulo) {
                    $det = $comanda->guardarDetalle($articulo);
                    if ($det) {
                        $cuenta->guardarDetalle(['detalle_comanda' => $det->detalle_comanda]);
                        $datos->exito = true;
                        $datos->mensaje = "Se generó la comanda #{$comanda->comanda} de {$sede->nombre}.";
                    } else {
                        $datos->exito = false;
                        $datos->mensaje = $comanda->getMensaje();
                        return $datos;
                    }
                }
            } else {
                $datos->exito = false;
                $datos->mensaje = $cuenta->getMensaje();
            }
        } else {
            $datos->exito = false;
            $datos->mensaje = $comanda->getMensaje();
        }

        return $datos;
    }

    public function envio_vendors()
    {
        $datos = new stdClass();
        $datos->exito = false;
        $datos->mensaje = '';

        if ($this->input->method() == 'post') {
            $req = json_decode(file_get_contents('php://input'));
            $ordenGk = new Orden_gk_model($req->orden_gk);
            if ((int)$ordenGk->estatus_orden_gk === 1) {

                $ordenrt = json_decode($ordenGk->orden_rt);
                $ordenrt->orden_gk = $ordenGk->orden_gk;

                if (count($ordenrt->articulos) > 0) {
                    $sedes = $this->get_distinct_sedes($ordenrt->articulos);
                    $dataTurnos = $this->get_turnos_sedes($sedes);
                    if ($dataTurnos->exito) {
                        $sedes = $dataTurnos->sedes;
                        $dataMeseros = $this->get_meseros_turnos($sedes);
                        if ($dataMeseros->exito) {
                            $sedes = $dataMeseros->sedes;
                            $datos->sedes = $sedes;
                            foreach ($sedes as $sede) {
                                $cmdGenerada = $this->genera_comanda_sede($sede, $ordenrt);
                                $datos->exito = $cmdGenerada->exito;
                                if ($datos->mensaje !== '') {
                                    $datos->mensaje .= '. ';
                                }
                                $datos->mensaje .= $cmdGenerada->mensaje;
                                if (!$cmdGenerada->exito) {
                                    $datos->exito = false;
                                    break;
                                }
                            }
                            if ($datos->exito) {
                                $ordenGk->guardar(['estatus_orden_gk' => 3]);
                                $datos->estatus_orden_gk = $this->Estatus_orden_gk_model->buscar(['estatus_orden_gk' => 3, '_uno' => true]);
                            }
                        } else {
                            $datos->mensaje = "Los siguientes vendors no tienen meseros en su turno: {$dataMeseros->faltantes}.";
                        }
                    } else {
                        $datos->mensaje = "Los siguientes vendors no han abierto turno: {$dataTurnos->faltantes}.";
                    }
                } else {
                    $datos->mensaje = 'La orden debe tener 1 artículo por lo menos.';
                }
            } else if ((int)$ordenGk->estatus_orden_gk === 2) {
                $datos->mensaje = 'Esta orden ya fue anulada.';
            } else {
                $datos->mensaje = 'Esta orden ya fue enviada a los vendors.';
            }
        } else {
            $datos->mensaje = 'El método de llamada no es válido.';
        }
        $this->output->set_output(json_encode($datos));
    }
}
