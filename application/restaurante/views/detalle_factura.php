<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Detalle Facturas</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2>Detalle de Facturas</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h5><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></h5>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-3">
			<span>Facturas</span><br>
			<span>FEL</span>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<thead>
						<tr>
							<th style="padding: 5px;" class="text-center">Factura</th>
							<th style="padding: 5px;" class="text-center">Mesa</th>
							<th style="padding: 5px;" class="text-center">Fecha</th>
							<th style="padding: 5px;" class="text-center">NIT</th>
							<th style="padding: 5px;" class="text-center">Cliente</th>
							<th style="padding: 5px;" class="text-center">Total</th>
							<th style="padding: 5px;" class="text-center">Propina</th>
							<th style="padding: 5px;" class="text-center">Descuento</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($facturas as $row): ?>
							<tr>
								<td style="padding: 5px;"><?php echo $row->numero_factura ?></td>
								<td style="padding: 5px;" class="text-center"><?php echo isset($row->mesa->mesa) ? $row->mesa->mesa : '' ?></td>
								<td style="padding: 5px;"><?php echo formatoFecha($row->fecha_factura,2) ?></td>
								<td style="padding: 5px;"><?php echo $row->receptor->nit ?></td>
								<td style="padding: 5px;"><?php echo $row->receptor->nombre ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo $row->total ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo $row->propina ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo "0.00" ?></td>
							</tr>
						<?php endforeach ?>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5" style="padding: 5px;" class="text-right">Total:</td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format(suma_field($facturas, "total"),2) ?></td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format(suma_field($facturas, "propina"),2) ?></td>
							<td style="padding: 5px;" class="text-right">0.00</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>