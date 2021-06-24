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
	public $orden_rt = null;

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
			'Sede_vendor_tercero_model',
			'Articulo_model',
			'Sede_model'
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
		$ordenrt->numero_orden = $this->numero_orden;
		$ordenrt->total_orden = 0.00;		
		$ordenrt->comanda_origen = $this->comanda_origen;
		$orden_original = json_decode($this->raw_orden);

		$rutasEntrega = [
			'nombre' => $this->get_ruta(9),
			'direccion1' => $this->get_ruta(10),
			'direccion2' => $this->get_ruta(11),
			'pais' => $this->get_ruta(12),
			'departamento' => $this->get_ruta(13),
			'municipio' => $this->get_ruta(14),
			'telefono' => $this->get_ruta(15),
			'email' => $this->get_ruta(16)
		];

		$ordenrt->datos_entrega = new stdClass();
		$ordenrt->datos_entrega->nombre = $rutasEntrega['nombre'] ? get_dato_from_paths($orden_original, $rutasEntrega['nombre']) : null;
		$ordenrt->datos_entrega->direccion1 = $rutasEntrega['direccion1'] ? get_dato_from_paths($orden_original, $rutasEntrega['direccion1']) : null;
		$ordenrt->datos_entrega->direccion2 = $rutasEntrega['direccion2'] ? get_dato_from_paths($orden_original, $rutasEntrega['direccion2']) : null;
		$ordenrt->datos_entrega->pais = $rutasEntrega['pais'] ? get_dato_from_paths($orden_original, $rutasEntrega['pais']) : null;
		$ordenrt->datos_entrega->departamento = $rutasEntrega['departamento'] ? get_dato_from_paths($orden_original, $rutasEntrega['departamento']) : null;
		$ordenrt->datos_entrega->municipio = $rutasEntrega['municipio'] ? get_dato_from_paths($orden_original, $rutasEntrega['municipio']) : null;
		$ordenrt->datos_entrega->telefono = $rutasEntrega['telefono'] ? get_dato_from_paths($orden_original, $rutasEntrega['telefono']) : null;
		$ordenrt->datos_entrega->email = $rutasEntrega['email'] ? get_dato_from_paths($orden_original, $rutasEntrega['email']) : null;

		$rutasFacturacion = [
			'nit' => $this->get_ruta(17),
			'nombre' => $this->get_ruta(18),
			'direccion' => $this->get_ruta(19),
			'email' => $this->get_ruta(20)
		];

		$ordenrt->datos_factura = new stdClass();
		$ordenrt->datos_factura->nit = $rutasFacturacion['nit'] ? get_dato_from_paths($orden_original, $rutasFacturacion['nit']) : 'CF';
		if (!$ordenrt->datos_factura->nit) {
			$ordenrt->datos_factura->nit = 'CF';
		}
		$ordenrt->datos_factura->nombre = $rutasFacturacion['nombre'] ? get_dato_from_paths($orden_original, $rutasFacturacion['nombre']) : 'Consumidor Final';
		if (!$ordenrt->datos_factura->nombre) {
			$ordenrt->datos_factura->nombre = 'Consumidor Final';
		}
		$ordenrt->datos_factura->direccion = $rutasFacturacion['direccion'] ? get_dato_from_paths($orden_original, $rutasFacturacion['direccion']) : 'Ciudad';
		if (!$ordenrt->datos_factura->direccion) {
			$ordenrt->datos_factura->direccion = 'Ciudad';
		}
		$ordenrt->datos_factura->email = $rutasFacturacion['email'] ? get_dato_from_paths($orden_original, $rutasFacturacion['email']) : null;

		$ordenrt->articulos = [];
		$rutaArticulos = $this->get_ruta(2);
		if ($rutaArticulos) {
			$listaArticulos = get_dato_from_paths($orden_original, $rutaArticulos);
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
					$nombreVendor = $rutas->vendor ? get_dato_from_paths($art, $rutas->vendor) : null;
					$vendor = null;
					$sede = null;
					$obj->id_tercero = $rutas->id_tercero ? get_dato_from_paths($art, $rutas->id_tercero) : null;

					if ($nombreVendor)
					{
						$vendor = $this->Vendor_tercero_model->buscar_agregar($nombreVendor, $this->comanda_origen);
						if ($vendor) {
							$svt = $this->Sede_vendor_tercero_model->full_search(['vendor_tercero' => $vendor->vendor_tercero, '_uno' => true]);
							if ($svt) {
								$sede = $svt->sede;
							} else if(!empty($obj->id_tercero)) {
								$sede_articulo = $this->Articulo_model->get_sede_articulo(['TRIM(shopify_id)' => $obj->id_tercero]);
								if($sede_articulo) 
								{
									$nsvt = new Sede_vendor_tercero_model();
									$nsvt->sede = $sede_articulo->sede;
									$nsvt->vendor_tercero = $vendor->vendor_tercero;
									$nsvt->guardar();
									$sede = $this->Sede_model->buscar(['sede' => $sede_articulo->sede, '_uno' => true]);
								}
							}
						}
					}

					$obj->descripcion = $rutas->descripcion ? get_dato_from_paths($art, $rutas->descripcion) : null;
					$obj->vendor = $vendor;
					$obj->atiende = $sede;
					$obj->precio = $rutas->precio ? get_dato_from_paths($art, $rutas->precio) : null;
					$obj->cantidad = $rutas->cantidad ? get_dato_from_paths($art, $rutas->cantidad) : null;
					$obj->descuento = $rutas->descuento ? get_dato_from_paths($art, $rutas->descuento) : null;
					$obj->total = 0.00;

					if ($obj->precio && $obj->cantidad)
					{
						$obj->total = (float)$obj->precio * (float)$obj->cantidad;
						if ($obj->descuento)
						{
							$obj->total -= (float)$obj->descuento;
						}
					}

					$ordenrt->total_orden += $obj->total;

					$ordenrt->articulos[] = $obj;
					$obj = null;
				}
			}
		}		

		return $ordenrt;
	}
}
