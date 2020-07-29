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
					],
					7  => [
						'nombre' => 'Impresoras',
						'link' => '/admin/impresora'
					],
					8  => [
						'nombre' => 'Tipo de Usuario',
						'link' => '/admin/tipo_usuario'
					],
					9  => [
						'nombre' => 'Acceso',
						'link' => '/admin/acceso'
					],
					10  => [
						'nombre' => 'Forma de Pago',
						'link' => '/admin/formapago'
					],
					11  => [
						'nombre' => 'Proveedores',
						'link' => '/admin/proveedor'
					]
				]
			],
			2 => [
				'nombre' => 'Reportes',
				'opciones' => [
					1 => [
						'nombre' => 'Tablero',
						'link' => '/admin/tablero'
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
					],
					4 => [
						'nombre' => 'Comanda en línea',
						'link' => '/restaurante/cmdonline'
					],
					5 => [
						'nombre' => 'Corte de caja',
						'link' => '/restaurante/cajacorte'
					]
				]
			],
			2 => [
				'nombre' => 'Reportes',
				'opciones' => [
					1 => [
						'nombre' => 'Ventas por categoría',
						'link' => '/restaurante/rptvtascat'
					],
					2 => [
						'nombre' => 'Turnos',
						'link' => '/restaurante/rptturnos'
					],
					3 => [
						'nombre' => 'Propinas',
						'link' => '/restaurante/rptpropinas'
					],
					4 => [
						'nombre' => 'Caja',
						'link' => '/restaurante/rptcaja'
					],
					5 => [
						'nombre' => 'Factura',
						'link' => '/restaurante/rptfactura'
					],
					6 => [
						'nombre' => 'Autoconsulta',
						'link' => '/restaurante/autoconsulta'
					]
				]
			],
			3 => [
				'nombre' => 'Mantenimiento',
				'opciones' => [
					1 => [
						'nombre' => 'Tipo de Turno',
						'link' => '/restaurante/tipoturno'
					],
					2 => [
						'nombre' => 'Distribución de propinas',
						'link' => '/restaurante/propina'
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
			],
			2 => [
				'nombre' => 'Reportes',
				'opciones' => [
					1 => [
						'nombre' => 'Existencias',
						'link' => '/wms/rptexistencia'
					],
					2 => [
						'nombre' => 'Kardex',
						'link' => '/wms/rptkardex'
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
