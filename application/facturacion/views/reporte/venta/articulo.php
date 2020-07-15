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
		<div class="col-sm-12 text-center">
			<h3>Reporte de ventas</h3>
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
						<?php foreach ($detalle as $det): ?>
							<?php $total+=$det['total'] ?>
							<tr>
								<td style="padding: 5px;" ><?php echo $det['articulo']->descripcion ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo $det['cantidad'] ?></td>
								<td style="padding: 5px;" class="text-right"><?php echo number_format($det['total'], 2) ?></td>
							</tr>
						<?php endforeach ?>
						<tr>
							<td style="padding: 5px;" colspan="2" class="text-right"><b>Total</b></td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format($total, 2
								) ?></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>