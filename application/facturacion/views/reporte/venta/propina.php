<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Propinas</title>
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
			<h3>Reporte de propinas</h3>
		</div>
	</div>
	
	<div class="row">
		<div class="col-sm-12 text-center">
			<span><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></span>
		</div>
	</div>
	<br>
	
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<?php $total = 0; $ptotal = 0; ?>
					<?php foreach ($propina as $row): ?>
						<?php 
							$monto = suma_field($row['cuentas'], "propina_monto");
						 ?>
						<?php if ($monto > 0): ?>
						<?php $total += $row['total']['monto'] ?>
						<tr>
							<th>
								Factura: <?php echo $row['factura']['numero'] ?>
							</th>
							<th class="text-center">Monto</th>
						</tr>
						<?php foreach ($row['cuentas'] as $det): ?>
							<tr>
								<td>Cuenta: <?php echo $det->nombre ?></td>
								<td class="text-right"><?php echo number_format($det->propina_monto,2) ?></td>
								</td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td class="text-right">Total</td>
							<td class="text-right"><?php echo number_format($row['total']['monto'], 2) ?></td>
						</tr>
						<?php endif ?>
					<?php endforeach ?>
					<tfoot>
						<tr>
							<th class="text-right">Total:</th>
							<td class="text-right"><?php echo number_format($total, 2); ?></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>