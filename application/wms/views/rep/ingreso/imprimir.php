<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Detalle de ingreso</title>
	<style type="text/css">
		body {font-family: sans-serif;}
		table {width: 100%; border-collapse: collapse; border: 1px solid black;}
		td {width: auto; border-collapse: collapse; border: 1px solid black;}

		.text-right {text-align: right;}
		.text-center {text-align: center;}
		.tabla-contenido {font-size: 0.65em;}
		.titulo {text-align: center; vertical-align: middle; background-color: #E5E5E5; font-weight: bold;}
		.num { width: 14.28%; }
	</style>
</head>
<body>
	<h3 class="text-center">Detalle de ingreso</h3>
	<div class="text-center"><b>Del</b> <?php echo formatoFecha($args["fdel"], 2)?> <b>al</b> <?php echo formatoFecha($args["fal"], 2)?> </div>
	<table class="tabla-contenido">
		<tr>
			<td class="titulo">Fecha</td>
			<td class="titulo"># Documento</td>
			<td class="titulo">Bodega </td>
			<td class="titulo">Producto</td>
			<td class="titulo">Cantidad</td>
			<td class="titulo">Costo</td>
			<td class="titulo">Total</td>
		</tr>
		<?php if ($lista): ?>
			<?php $total = 0; ?>
			<?php foreach ($lista as $row): ?>
				<tr>
					<td><?php echo formatoFecha($row->fecha, 1); ?></td>
					<td><?php echo $row->num_documento; ?></td>
					<td><?php echo $row->bodega; ?> </td>
					<td><?php echo $row->producto; ?></td>
					<td class="text-right"><?php echo number_format($row->cantidad, 2); ?></td>
					<td class="text-right"><?php echo number_format($row->costo, 2); ?></td>
					<td class="text-right"><?php echo number_format($row->cantidad * $row->costo, 2); ?></td>
				</tr>
				<?php $total += $row->cantidad * $row->costo; ?>
			<?php endforeach ?>
			<tr>
				<td colspan="6" class="text-right"><b>Total</b></td>
				<td class="text-right"><b><?php echo number_format($total, 2); ?></b></td>
			</tr>
		<?php endif ?>

	</table>
</body>
</html>