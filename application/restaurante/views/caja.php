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
		</div>
	</div>
	
	<div class="row">
		<div class="col-sm-12 text-center">
			<h5><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></h5>
			<span>De comanda: <?php echo $comanda->minComanda ?> a comanda: <?php echo $comanda->maxComanda ?></span>
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
							<th style="padding: 5px;" class="text-center">Ret.</th>
							<th style="padding: 5px;" class="text-center">Comision</th>
							<th style="padding: 5px;" class="text-center">Propina</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="padding: 10px;" colspan="5"><b>Ingresos</b></td>
						</tr>
						<?php foreach ($ingresos as $row): ?>
							<tr>
								<td style="padding: 5px;"><?php echo $row->descripcion ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo $row->monto ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo "0.00" ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo "0.00" ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo "0.00" ?></td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td style="padding: 5px;" class="text-right"><b>Total:</b></td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format(suma_field($ingresos,"monto"),2) ?></td>
							<td style="padding: 5px;" class="text-right">0.00</td>
							<td style="padding: 5px;" class="text-right">0.00</td>
							<td style="padding: 5px;" class="text-right">0.00</td>
						</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>