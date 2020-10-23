<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<table class="tabla-contenido">
		<tr>
			<td colspan="4" class="text-center"><h1>Distribucion de propinas</h1></td>
			<td colspan="1" class="text-center">
				<h3>
				Del: <?php echo formatoFecha($fdel,2) ?> al: <?php echo formatoFecha($fal,2) ?>
				</h3>
			</td>
		</tr>
		<?php foreach ($datos as $row): ?>
			<tr>
				<td class="text-center" colspan="5">
					<h2><?php echo $row['descripcion'] ?></h2>
				</td>
			</tr>
			<tr>
				<th class="text-center">Empleado</th>
				<th class="text-center">Porcentaje Propina</th>
				<th class="text-center" colspan="2">Facturas</th>
				<th class="text-center">Total de Propina</th>
			</tr>
			<?php if (isset($row['usuario'])): ?>
				<?php foreach ($row['usuario'] as $key => $usu): ?>
					<?php $rows = count($usu['facturas'])+1 ?>
					<tr>
						<td rowspan="<?php echo $rows ?>"><?php echo $usu['nombre'] ?></td>
						<td rowspan="<?php echo $rows ?>">
							<?php echo "{$row['porcentaje']}%" ?>
						</td>
						<td><b>Número</b></td>
						<td><b>Propina</b></td>
						<td rowspan="<?php echo $rows ?>" class="text-right">
							<?php echo number_format($usu['propina'],2) ?>
						</td>
					</tr>
					<?php foreach ($usu['facturas'] as $fac): ?>
						<tr>
							<td><?php echo $fac->numero_factura ?></td>
							<td class="text-right"><?php echo $fac->propina ?></td>
						</tr>
					<?php endforeach ?>
					
				<?php endforeach ?>
			<?php else: ?>
				<?php $rows = count($row['facturas'])+1 ?>
				<tr>
					<td rowspan="<?php echo $rows ?>">N/A</td>
					<td rowspan="<?php echo $rows ?>">
						<?php echo "{$row['porcentaje']}%" ?>
						
					</td>
					<td><b>Número</b></td>
					<td><b>Propina</b></td>
					<td rowspan="<?php echo $rows ?>" class="text-right">
						<?php echo number_format($row['propina'],2) ?>
					</td>
				</tr>
				<?php foreach ($row['facturas'] as $fac): ?>
					<tr>
						<td><?php echo $fac->numero_factura ?></td>
						<td class="text-right"><?php echo $fac->propina ?></td>
					</tr>
				<?php endforeach ?>
			<?php endif ?>
		<?php endforeach ?>
	</table>
</body>
</html>
<style type="text/css">
	body {font-family: sans-serif;}
	table {width: 100%; border-collapse: collapse; border: 1px solid black;}
	td {width: auto; border-collapse: collapse; border: 1px solid black;}

	.text-right {text-align: right;}
	.text-center {text-align: center;}
	.tabla-contenido {font-size: 0.65em;}
	.tabla-firma {font-size: 0.90em;}
	.tabla-firma-td {border: none; text-align:center;padding: 15px 1px 15 1px;}
	.titulo {text-align: center; vertical-align: middle; background-color: #E5E5E5; font-weight: bold;}
	.totales {text-align: right; background-color: #E5E5E5; }
</style>