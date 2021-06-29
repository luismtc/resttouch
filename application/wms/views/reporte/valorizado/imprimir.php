<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Categoria</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12">
			<table class="tabla-contenido">
				<tr>
					<td><?php echo $empresa->nombre ?></td>
				</tr>
				<tr>
					<td><?php echo $nsede ?></td>
				</tr>
			</table>
		</div>
	</div>
	<br>

	<table class="tabla-contenido">
		<tr>
			<td colspan="6" class="text-center"><h1>Reporte de Inventario Valorizado</h1></td>
			<td colspan="2" class="text-center">Fecha <?php echo $fecha?></td>
		</tr>
		<tr>
			<th class="titulo" colspan="8">Bodega: <?php echo $nbodega ?> </th>
		</tr>
	</table>
	<table class="tabla-contenido" style="padding: 5px; border: 1px solid black">
		<thead>
			<tr>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Descripción</th>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Presentación</th>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Existencia</th>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Fecha Última Compra</th>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Costo</th>
				<th class="titulo" style="border: 1px solid black;padding: 5px;" class="text-center">Valor</th>
			</tr>
		</thead>

		<?php $granTotal = 0; ?>

		<tbody>
			<?php foreach ($bodega as $bodegas): ?>
				<?php $bod = new Bodega_model($bodegas); ?>
					<tr>
						<td class="titulo" colspan="6"><?php echo $bod->descripcion ?></td>
					</tr>
			
				<?php foreach ($detalle[$bodegas] as $det): ?>
					<?php $totalCat = 0; ?>
					<?php if (count($det->subcategoria) > 0): ?>
					<tr>
						<td style="border: 1px solid black;padding: 5px;"><b><?php echo $det->descripcion ?></b></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
					</tr>
					<?php foreach ($det->subcategoria as $sub): ?>
						<?php if (count($sub['articulos']) > 0): ?>
							<tr>
								<td style="border: 1px solid black;padding: 5px; margin-left: 5px;"><b><?php echo $sub['descripcion'] ?></b></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right"></td>
							</tr>
							<?php $total = 0 ?>
							<?php foreach ($sub['articulos'] as $row): ?>
								<tr>
									<td style="border: 1px solid black;padding: 5px; margin-left: 10px;"><?php echo $row->descripcion ?></td>
									<td style="border: 1px solid black;padding: 5px; margin-left: 10px;"><?php echo $row->presentacion ?></td>
									<td style="border: 1px solid black;padding: 5px;" class="text-right"><?php echo number_format($row->cantidad, 2) ?></td>
									<td style="border: 1px solid black;padding: 5px;" class="text-right">
										<?php echo $row->ultima_compra ?></td>
									<td style="border: 1px solid black;padding: 5px;" class="text-right">
										<?php echo number_format($row->precio_unitario, 2) ?></td>
									<td style="border: 1px solid black;padding: 5px;" class="text-right"><?php echo number_format($row->total, 2) ?></td>
								</tr>	
								<?php 
									$total += $row->total;
									$granTotal += $row->total;
									$totalCat += $row->total;
								?>	
							<?php endforeach ?>
							<tr>
								<td style="border: 1px solid black;padding: 5px; margin-left: 5px;" class="text-right" colspan="5"><b>Total subcategoría <?php echo $sub['descripcion'] ?></b></td>
								<td style="border: 1px solid black;padding: 5px;" class="text-right">
									<?php echo number_format($total, 2) ?>
								</td>
							</tr>
						<?php endif ?>
					<?php endforeach ?>
					<tr>
						<td style="border: 1px solid black;padding: 5px; margin-left: 5px;" class="text-right" colspan="5"><b>Total Categoría <?php echo $det->descripcion ?></b></td>
						<td style="border: 1px solid black;padding: 5px;" class="text-right">
							<?php echo number_format($totalCat, 2) ?>
						</td>
					</tr>
					<?php endif ?>
				<?php endforeach ?>
			<?php endforeach ?>
		</tbody>
		<tfoot>
			<tr>
				<td style="border: 1px solid black;padding: 5px; margin-left: 5px;" class="text-right" colspan="5">
					<h4>TOTAL</h4>
				</td>
				<td style="border: 1px solid black;padding: 5px;" class="text-right">
					<?php echo number_format($granTotal, 2) ?>
				</td>
			</tr>
		</tfoot>
	</table>
			
</body>
</body>
</html>
<style type="text/css">
	body {font-family: sans-serif;}
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