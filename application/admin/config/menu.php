<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

$config['menu'] = [
	1 => [
		'nombre' => 'Configuración',
		'submodulo' => [
			1 => [
				'nombre' => 'Mantenimiento',
				'opciones' => [
					1 => [
						'nombre' => 'Cliente',
						'link' => '/admin/mante/cliente'
					],
					2 => [
						'nombre' => 'Artículos',
						'link' => '/admin/mante/articulo'
					],
					3 => [
						'nombre' => 'Áreas',
						'link' => '/admin/mante/areas'
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
						'link' => '/pos/trans/area'
					]
				]
			]
		]
	]
];
