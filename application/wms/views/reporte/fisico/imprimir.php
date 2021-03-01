<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Reporte_de_existencias_<?php echo rand()?></title>
</head>
<body>
	<table class="tabla-contenido">
		<?php $col = ($inventario->confirmado == 1) ? '5' : '4'; ?>
		<tr>
			<td colspan="<?php echo $col ?>" class="text-center"><h1>Inventario Fisico # <?php echo $inventario->inventario_fisico ?></h1></td>
			<td colspan="2" class="text-center">Fecha <?php echo formatoFecha($inventario->fhcreacion, 2)?></td>
		</tr>
	
		<tr>
			<td class="titulo">Descripcion</td>
			<td class="titulo">Código</td>
			<td class="titulo">Presentación</td>
			<td class="titulo">Precio</td>
			<td class="titulo">Existencia Sistema</td>
			<td class="titulo">Existencia Fisica</td>
			<?php if ($inventario->confirmado): ?>
				<td class="titulo">Diferencia</td>
			<?php endif ?>
		</tr>
			<?php 
				$col = ($inventario->confirmado == 1) ? '7' : '6';
				foreach ($detalle as $key => $cat): 
			?>
				<tr>
					<td class="titulo" style="text-align: left;background-color: #E5E5E5; font-weight: bold;" colspan="<?php echo $col ?>">
						<?php echo $cat['descripcion']?>
					</td>
				</tr>
				<?php foreach ($cat['datos'] as $gcat): ?>
					<tr>
						<td class="titulo" style="text-align: left;background-color: #E5E5E5; font-weight: bold;" colspan="<?php echo $col ?>">
							<?php echo $gcat['descripcion']?>
						</td>
					</tr>	
					<?php foreach ($gcat['datos'] as $art): ?>
						<?php 
							$articulo = new Articulo_model($art->articulo);
							$pres = $articulo->getPresentacionReporte(); 
						?>
						<tr>
							<td>
								<?php echo $art->narticulo?>
							</td>
							<td>
								<?php echo empty($art->codigo) ? $art->articulo : $art->codigo ?>
							</td>
							<td>
								<?php echo $pres->descripcion ?>
							</td>
							<td class="text-right">
								<?php echo $art->precio ?>
							</td>
							<td class="text-center">
								<?php echo number_format($art->existencia_sistema/$pres->cantidad, 2) ?>
							</td>
							<td class="text-center">
								<?php if (isset($existencia_fisica)): ?>
									<?php echo number_format($art->existencia_fisica, 2) ?>
								<?php endif ?>
							</td>
							<?php if ($inventario->confirmado): ?>
								<td class="text-center">
									<?php echo number_format($art->existencia_fisica - $art->existencia_sistema/$pres->cantidad, 2); ?>
								</td>
							<?php endif ?>
						</tr>	
					<?php endforeach ?>
				<?php endforeach ?>
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