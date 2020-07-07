<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

$config['campos'] = [
	[
		"tabla_campo"=> 1,
		"tabla"=>2,
		"campo" => "descripcion", 
		"descripcion" => "articulo", 
		"ordenar_por" => 0, 
		"por_fecha" => 0, 
		"compuesto" => 0
	],
	[
		"tabla_campo"=> 2,
		"tabla"=>4,
		"campo" => "nombre", 
		"descripcion" => "cliente", 
		"ordenar_por" => 1, 
		"por_fecha" => 0, 
		"compuesto" => 0
	],
	[
		"tabla_campo"=> 3,
		"tabla"=>3,
		"campo" => "fecha_factura", 
		"descripcion" => "Fecha Factura", 
		"ordenar_por" => 1, 
		"por_fecha" => 1, 
		"compuesto" => 0
	]
];

$config['tabla'] = [
	[
		"tabla"=> 1,
		"entidad" => "detalle_factura", 
		"orden" => 1, 
		"accion" => "", 
		"condicion" => ""
	],
	[
		"tabla"=> 2,
		"entidad" => "articulo", 
		"orden" => 2, 
		"accion" => "inner", 
		"condicion" => "articulo.articulo = detalle_factura.articulo"
	],
	[
		"tabla"=> 3,
		"entidad" => "factura", 
		"orden" => 3, 
		"accion" => "inner", 
		"condicion" => "factura.factura = detalle_factura.factura"
	],
	[
		"tabla"=> 4,
		"entidad" => "cliente", 
		"orden" => 4, 
		"accion" => "inner", 
		"condicion" => "cliente.cliente = factura.cliente"
	],
	[
		"tabla"=> 5,
		"entidad" => "detalle_factura_detalle_cuenta", 
		"orden" => 5, 
		"accion" => "left", 
		"condicion" => "detalle_factura_detalle_cuenta.detalle_factura = detalle_factura.detalle_factura"
	],
	[
		"tabla"=> 6,
		"entidad" => "detalle_cuenta", 
		"orden" => 6, 
		"accion" => "left", 
		"condicion" => "detalle_factura_detalle_cuenta.detalle_cuenta = detalle_cuenta.detalle_cuenta"
	],
	[
		"tabla"=> 7,
		"entidad" => "cuenta", 
		"orden" => 7, 
		"accion" => "left", 
		"condicion" => "detalle_cuenta.cuenta_cuenta = cuenta.cuenta"
	],
	[
		"tabla"=> 8,
		"entidad" => "comanda", 
		"orden" => 8, 
		"accion" => "left", 
		"condicion" => "cuenta.comanda = comanda.comanda"
	],
	[
		"tabla"=> 9,
		"entidad" => "turno", 
		"orden" => 9, 
		"accion" => "left", 
		"condicion" => "comanda.turno = turno.turno"
	],
];