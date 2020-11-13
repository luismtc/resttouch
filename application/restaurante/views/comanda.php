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
		<div class="col-sm-12">
			<table style="width: 100%;">
				<tr>
					<td><?php echo $empresa->nombre ?></td>
				</tr>
				<tr>
					<td><?php echo $sede->nombre ?></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2>Detalle de Comandas</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h5><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></h5>
		</div>
	</div>
	<br>
	<div class="row">
		<hr>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<thead>
						<tr>
							<th style="padding: 5px;" class="text-center">Comanda</th>
							<th style="padding: 5px;" class="text-center">Fecha</th>
							<th style="padding: 5px;" class="text-center">Mesero</th>
							<th style="padding: 5px;" class="text-center">Venta</th>
							<th style="padding: 5px;" class="text-center">Descuento</th>
							<th style="padding: 5px;" class="text-center">Facturado</th>
						</tr>
					</thead>
					<tbody>
						<?php $facturado = 0 ?>
						<?php foreach ($comanda as $row): ?>
							<tr>
								<td style="padding: 5px;">
									<?php echo $row->comanda ?>
								</td>
								<td style="padding: 5px;">
									<?php echo formatoFecha($row->fecha,2) ?>
								</td>
								<td style="padding: 5px;" class="text-center">
									<?php echo (count($row->mesero) >0) ? $row->mesero[0]->nombre : '' ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo $row->total ?>
									</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo number_format(0, 2) ?>
									</td>
								<td style="padding: 5px;" class="text-right">
									<?php $facturado += ($row->factura) ? $row->factura->total:0  ?>
									<?php echo ($row->factura) ? number_format($row->factura->total,2): number_format(0,2) ?>
								</td>
							</tr>
						<?php endforeach ?>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3" style="padding: 5px;" class="text-right">Total:</td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format(suma_field($comanda, "total"),2) ?></td>
							<td style="padding: 5px;" class="text-right">0.00</td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format($facturado,2) ?></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>