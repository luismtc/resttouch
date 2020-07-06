<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Categoria</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h3>Reporte de ventas</h3>
			<span>Por Categoria</span>
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
							<th style="padding: 5px;" class="text-center">Porcentaje</th>
							<th style="padding: 5px;" class="text-center">Precio Unitario</th>
							<th style="padding: 5px;" class="text-center">Total</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($detalle as $det): ?>
							<tr>
								<td style="padding: 5px;"><b><?php echo $det->descripcion ?></b></td>
								<td style="padding: 5px;" class="text-right"></td>
								<td style="padding: 5px;" class="text-right"></td>
								<td style="padding: 5px;" class="text-right"></td>
								<td style="padding: 5px;" class="text-right"></td>
							</tr>
							<?php foreach ($det->subcategoria as $sub): ?>
								<?php if (count($sub['articulos']) > 0): ?>
									<tr>
										<td style="padding: 5px; margin-left: 5px;"><b><?php echo $sub['descripcion'] ?></b></td>
										<td style="padding: 5px;" class="text-right"></td>
										<td style="padding: 5px;" class="text-right"></td>
										<td style="padding: 5px;" class="text-right"></td>
										<td style="padding: 5px;" class="text-right"></td>
									</tr>
									<?php $total = 0 ?>
									<?php foreach ($sub['articulos'] as $row): ?>
										<tr>
											<td style="padding: 5px; margin-left: 10px;"><?php echo $row->descripcion ?></td>
											<td style="padding: 5px;" class="text-right"><?php echo $row->cantidad ?></td>
											<td style="padding: 5px;" class="text-right"><?php echo $row->porcentaje ?></td>
											<td style="padding: 5px;" class="text-right"><?php echo $row->precio_unitario ?></td>
											<td style="padding: 5px;" class="text-right"><?php echo number_format($row->total, 2) ?></td>
										</tr>	
										<?php $total += $row->total ?>	
									<?php endforeach ?>
									<tr>
										<td style="padding: 5px; margin-left: 5px;" class="text-right" colspan="4"><b>Total subcategoria</b></td>
										<td style="padding: 5px;" class="text-right"><?php echo number_format($total, 2) ?></td>
									</tr>
								<?php endif ?>
									
							<?php endforeach ?>
						<?php endforeach ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>