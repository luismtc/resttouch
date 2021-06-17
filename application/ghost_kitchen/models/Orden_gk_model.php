<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Orden_gk_model extends General_model
{

	public $orden_gk;
	public $corporacion;
	public $protocolo = null;
	public $host = null;
	public $ip = null;
	public $url_original = null;
	public $comanda_origen;
	public $fhcreacion;
	public $numero_orden;
	public $estatus_orden_gk;
	public $raw_orden;

	public function __construct($id = "")
	{
		parent::__construct();
		$this->setTabla("orden_gk");
		if (!empty($id)) {
			$this->cargar($id);
		}
		$this->load->model([
			'Catalogo_model',
			'Vendor_tercero_model',
			'Sede_vendor_tercero_model'
		]);
	}

	private function get_ruta($configuracion)
	{
		$ruta = $this->Catalogo_model->getDetalleConfigComandaOrigen([
			'configuracion_comanda_origen' => $configuracion,
			'comanda_origen' => $this->comanda_origen,
			'_uno' => true
		]);

		if ($ruta) {
			return $ruta->ruta;
		}

		return null;
	}

	public function get_orden_rt()
	{
		$ordenrt = new stdClass();

		$ordenrt->orden_gk = $this->getPK();
		$ordenrt->fhcreacion = $this->fhcreacion;
		$ordenrt->numero_orden = $this->numero_orden;
		$ordenrt->articulos = [];

		$rutaArticulos = $this->get_ruta(2);

		if ($rutaArticulos) {
			$orden_original = json_decode($this->raw_orden);
			$listaArticulos = get_dato_from_object($orden_original, $rutaArticulos);
			$obj = new stdClass();
			if ($listaArticulos) {
				$rutas = [
					'id_tercero' => $this->get_ruta(3),
					'descripcion' => $this->get_ruta(4),
					'vendor' => $this->get_ruta(5),
					'precio' => $this->get_ruta(6),
					'cantidad' => $this->get_ruta(7),
					'descuento' => $this->get_ruta(8),
				];
				$rutas = (object)$rutas;
				foreach ($listaArticulos as $art) {
					$nombreVendor = $rutas->vendor ? get_dato_from_object($art, $rutas->vendor) : null;
					$vendor = null;
					$sede = null;
					if ($nombreVendor)
					{
						$vendor = $this->Vendor_tercero_model->buscar_agregar($nombreVendor, $this->comanda_origen);
						if ($vendor) {
							$svt = $this->Sede_vendor_tercero_model->full_search(['vendor_tercero' => $vendor->vendor_tercero, '_uno' => true]);
							if ($svt) {
								$sede = $svt->sede;
							}
						}
					}
					$obj->id_tercero = $rutas->id_tercero ? get_dato_from_object($art, $rutas->id_tercero) : null;
					$obj->descripcion = $rutas->descripcion ? get_dato_from_object($art, $rutas->descripcion) : null;
					$obj->vendor = $nombreVendor;
					$obj->atiende = $sede;
					$obj->precio = $rutas->precio ? get_dato_from_object($art, $rutas->precio) : null;
					$obj->cantidad = $rutas->cantidad ? get_dato_from_object($art, $rutas->cantidad) : null;
					$obj->descuento = $rutas->descuento ? get_dato_from_object($art, $rutas->descuento) : null;
					$ordenrt->articulos[] = $obj;
					$obj = null;
				}
			}
		}

		return $ordenrt;
	}
}
