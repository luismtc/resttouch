<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Comanda</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12 text-right">
			<?php echo formatoFecha($comanda->fecha) ?>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h4>Comanda: <?php echo $comanda->comanda ?></h4>
			<span>Cuenta: <?php echo $comanda->cuentas[0]->nombre ?></span>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<thead>
						<tr>
							<th style="padding: 5px;" class="text-center">Cantidad</th>
							<th style="padding: 5px;" class="text-center">Descripcion</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($comanda->cuentas[0]->productos as $key => $det): ?>
							<tr>
								<td style="padding: 5px;" class="text-center"><?php echo $det->cantidad ?></td>
								<td style="padding: 5px;"><?php echo $det->articulo->descripcion ?></td>
							</tr>
							<?php if (empty($det->notas)): 
								$det->notas = "adsfa"?>
								<tr>
									<td colspan="2" style="padding: 8px; margin: 10px;">
										<?php echo "<b>Notas:</b> {$det->notas}" ?>
									</td>

								</tr>
							<?php endif ?>
						<?php endforeach ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>