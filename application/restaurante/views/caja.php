<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Reporte Caja</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2>Reporte de Caja</h2>
			<h3>--Resumen--</h3>
			<?php if (isset($turno)): ?>
				<h4>Turno: <?php echo $turno->descripcion ?> </h4>
			<?php endif ?>
		</div>
	</div>
	
	<div class="row">
		<div class="col-sm-12 text-center">
			<h5>
				<b>Del:</b> 
				<?php echo formatoFecha($fdel,2) ?> 
				<b>al:</b> 
				<?php echo formatoFecha($fal,2) ?>
			</h5>
		</div>
	</div>
	<br>
	
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<thead>
						<tr>
							<th style="padding: 5px;" class="text-center">Descripcion</th>
							<th style="padding: 5px;" class="text-center">Monto</th>
							<th style="padding: 5px;" class="text-center">Propina</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="padding: 10px;" colspan="3"><b>Ingresos</b></td>
						</tr>
						<?php foreach ($ingresos as $row): ?>
							<tr>
								<td style="padding: 5px;"><?php echo $row->descripcion ?></td>
								<td style="padding: 5px;" class="text-right">
									<?php echo number_format($row->monto, 2) ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo number_format($row->propina, 2) ?>
								</td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td style="padding: 5px;" class="text-right">
								<b>Total Ingresos:</b>
							</td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format(suma_field($ingresos,"monto"),2) ?>
							</td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format(suma_field($ingresos,"propina"),2) ?>
							</td>
						</tr>
						<tr>
							<td style="padding: 10px;" colspan="3"><b>Descuentos</b></td>
						</tr>
						<?php foreach ($descuentos as $row): ?>
							<tr>
								<td style="padding: 5px;"><?php echo $row->descripcion ?></td>
								<td style="padding: 5px;" class="text-right">
									<?php echo $row->monto ?>
								</td>
								<td></td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td style="padding: 5px;" class="text-right"><b>Total Descuentos:</b></td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format(suma_field($descuentos,"monto"),2) ?>
							</td>
							<td></td>
						</tr>
						<tr>
							<td style="padding: 5px;" class="text-right"><b>TOTAL:</b></td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format((suma_field($descuentos,"monto")+suma_field($ingresos,"monto")),2) ?>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<?php if (isset($detalle)): ?>
		<div class="row">
			<div class="col-sm-12">
				<table class="table table-bordered">
					<?php foreach ($detalle as $key => $row): ?>
						<tr>
							<th colspan="3"><?php echo $key ?></th>
						</tr>
						<tr>
							<td>Factura</td>
							<td>Fecha</td>
							<td>Monto</td>
						</tr>
						<?php foreach ($row as $det): ?>
							<tr>
								<td><?php echo $det->numero_factura ?></td>
								<td><?php echo formatoFecha($det->fecha_factura, 2) ?></td>
								<td class="text-right"><?php echo number_format($det->monto, 2) ?></td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td colspan="3"><p><br></p></td>
						</tr>
					<?php endforeach ?>
				</table>
			</div>
		</div>		
	<?php endif ?>

</body>
</html>