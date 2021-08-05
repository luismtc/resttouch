<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Articulo</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12">
			<table style="width: 100%;">
				<tr>
					<td><?php echo $empresa->nombre ?></td>
				</tr>
				<tr>
					<td><?php echo $nsede ?></td>
				</tr>
			</table>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h3>Reporte de ventas</h3>
			<?php if (isset($turno)): ?>
				<h4>Turno: <?php echo $turno->descripcion ?> </h4>
			<?php endif ?>
			<span>Por Articulo</span>
		</div>
	</div>
	
	<div class="row">
		<div class="col-sm-12 text-center">
			<span><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></span>
		</div>
	</div>
	<br>
	
	<br>
	<?php if ($detalle['grupo'] == 1): ?>
		<div class="row">
			<div class="col-sm-12">
				<div class="table-responsive">
					<table class="table table-bordered" style="padding: 5px">
						<thead>
							<tr>
								<th style="padding: 5px;" class="text-center">Descripcion</th>
								<th style="padding: 5px;" class="text-center">Cantidad</th>
								<th style="padding: 5px;" class="text-center">Total</th>
							</tr>
						</thead>
						<tbody>
							<?php $total = 0 ?>
							<?php foreach ($detalle['datos'] as $det): ?>
								<?php $total+=$det['total'] ?>
								<tr>
									<td style="padding: 5px;" >
										<?php echo $det['articulo']->descripcion ?>
									</td>
									<td style="padding: 5px;" class="text-right">
										<?php echo $det['cantidad'] ?>
									</td>
									<td style="padding: 5px;" class="text-right">
										<?php echo number_format($det['total'], 2) ?>
									</td>
								</tr>
							<?php endforeach ?>
							<tr>
								<td style="padding: 5px;" colspan="2" class="text-right">
									<b>Total</b>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo number_format($total, 2) ?>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	<?php else: ?>
		<div class="table-responsive">
			<table class="table table-bordered" style="padding: 5px">
				<thead>
					<tr>
						<th style="padding: 5px;" class="text-center">Descripcion</th>
						<th style="padding: 5px;" class="text-center">Cantidad</th>
						<th style="padding: 5px;" class="text-center">Total</th>
					</tr>
				</thead>
				<tbody>
					<?php $total = 0 ?>
					<?php foreach ($detalle['datos'] as $sede): ?>
						<tr>
							<th colspan="3" style="font-weight: bold;">
								<h4><?php echo $sede['sede'] ?></h4>
							</th>
						</tr>
						<?php $totalSede = 0 ?>
						<?php foreach ($sede['articulos'] as $det): ?>
							<?php $totalSede+=$det['total'] ?>
							<tr>
								<td style="padding: 5px;" >
									<?php echo $det['articulo']->descripcion ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo $det['cantidad'] ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo number_format($det['total'], 2) ?>
								</td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td style="padding: 5px;" colspan="2" class="text-right">
								<b>Total Sede</b>
							</td>
							<td style="padding: 5px;" class="text-right">
								<?php echo number_format($totalSede, 2) ?>
							</td>
						</tr>
						<?php $total += $totalSede ?>
					<?php endforeach ?>
					<tr>
						<td style="padding: 5px;font-weight: bold;" colspan="2" class="text-right">
							<b>Total</b>
						</td>
						<td style="padding: 5px;" class="text-right">
							<?php echo number_format($total, 2) ?>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	<?php endif ?>
</body>
</body>
</html>