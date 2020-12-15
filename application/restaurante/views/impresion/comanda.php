<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Comanda</title>
</head>

<body lang="es-GT" dir="ltr">
	<table class="tabla-contenido">
		<tr>
			<td colspan="2" class="text-center"><?php echo "{$comanda->mesa->area->nombre} - {$comanda->mesa->numero}" ?></td>
		</tr>
		<tr>
			<td colspan="2" class="text-center">
				Atiende <?php echo $comanda->mesero['nombres']." ".$comanda->mesero['apellidos'] ?>
			</td>	
		</tr>
		<tr>
			<td colspan="2" class="text-center">
				<?php echo "Comanda #{$comanda->comanda} de {$comanda->cuentas[0]->nombre}" ?>
			</td>
		</tr>
		<tr><td colspan="2" class="text-center"><?php echo str_repeat("-", 50) ?></td></tr>
		<?php foreach ($comanda->cuentas as $cta): ?>
			<?php foreach ($cta->productos as $prod): ?>
				<tr>
					<td class="text-center">
						<?php echo $prod->cantidad ?>
					</td>
					<td>
						<?php echo $prod->articulo->descripcion ?>
					</td>
				</tr>
				<?php if (isset($prod->detalle)): ?>
					<?php foreach ($prod->detalle as $det): ?>
						<?php if (!empty($det)): ?>
							<tr>
								<td class="text-right">
									&nbsp;->
								</td>
								<td>
									&nbsp;<?php echo $det ?>
								</td>
							</tr>
						<?php endif ?>
					<?php endforeach ?>
				<?php endif ?>
				<?php if (!empty($prod->notas)): ?>
					<tr>
						<td class="text-right">
							->
						</td>
						<td>
							&nbsp;&nbsp;&nbsp;
							<?php echo $prod->notas ?>
						</td>
					</tr>
				<?php endif ?>
			<?php endforeach ?>
		<?php endforeach ?>
		<tr><td colspan="2" class="text-center"><?php echo str_repeat("-", 50) ?></td></tr>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2" class="text-center">
				<?php echo formatoFecha(Hoy(3)) ?>
			</td>
		</tr>
	</table>
	
</body>
</html>
<style type="text/css">
	body {font-family: sans-serif;margin: auto;}
	table {width: 100%; border-collapse: collapse; border: 0px solid black;}
	td {width: auto; border-collapse: collapse; border: 0px solid black;}

	.text-right {text-align: right;}
	.text-center {text-align: center;}
	.tabla-contenido {font-size: 0.65em;}
	.tabla-firma {font-size: 0.90em;}
	.tabla-firma-td {border: none; text-align:center;padding: 15px 1px 15 1px;}
	.titulo {text-align: center; vertical-align: middle; background-color: #E5E5E5; font-weight: bold;}
	.totales {text-align: right; background-color: #E5E5E5; }
</style>