<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

$config['menu'] = [
	1 => [
		'nombre' => 'ADMIN',
		'submodulo' => [
			1 => [
				'nombre' => 'Mantenimiento',
				'opciones' => [
					1 => [
						'nombre' => 'Cliente',
						'link' => '/admin/cliente'
					],
					2 => [
						'nombre' => 'Artículos',
						'link' => '/wms/articulos'
					],
					3 => [
						'nombre' => 'Áreas',
						'link' => '/restaurante/mantareas'
					],
					4 => [
						'nombre' => 'Presentaciones',
						'link' => '/admin/presentacion'
					],
					5 => [
						'nombre' => 'Usuario',
						'link' => '/admin/usuario'
					],
					6 => [
						'nombre' => 'Medidas',
						'link' => '/admin/medida'
					]
				]
			]
		]
	],
	2 => [
		'nombre' => 'POS',
		'submodulo' => [
			1 => [
				'nombre' => 'Transacción',
				'opciones' => [
					1 => [
						'nombre' => 'Área',
						'link' => '/restaurante/tranareas'
					],
					2 => [
						'nombre' => 'Factura manual',
						'link' => '/pos/factman'
					],
					3 => [
						'nombre' => 'Turno',
						'link' => '/restaurante/turno'
					]
				]
			]
		]
	],
	3 => [
		'nombre' => 'FACT',
		'submodulo' => [
			1 => [
				'nombre' => 'Transacción',
				'opciones' => [
					1 => [
						'nombre' => 'Formas de pago',
						'link' => '/pos/fpago'
					]
				]
			]
		]
	],
	4 => [
		'nombre' => 'WMS',
		'submodulo' => [
			1 => [
				'nombre' => 'Transacción',
				'opciones' => [
					1 => [
						'nombre' => 'Ingresos',
						'link' => '/wms/ingresos'
					],
					2 => [
						'nombre' => 'Egresos',
						'link' => '/wms/egresos'
					],
					3 => [
						'nombre' => 'Transformaciones',
						'link' => '/wms/transformaciones'
					]
				]
			]
		]
	],
	5 => [
		'nombre' => 'OC',
		'submodulo' => [
			1 => [
				'nombre' => 'Transacción',
				'opciones' => [
					1 => [
						'nombre' => 'Órdenes de compra',
						'link' => '/ordcomp/ordcomp'
					]
				]
			]
		]
	]
];
