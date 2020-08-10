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
			<?php if (isset($comanda->origen_datos) && isset($comanda->origen_datos['numero_orden'])): ?>
				<span>Número de Orden <?php echo $comanda->origen_datos['numero_orden'] ?></span><br>
			<?php endif ?>
			<?php if (isset($comanda->mesa) && isset($comanda->mesa->numero)): ?>
				<span>Mesa Número: <?php echo $comanda->mesa->numero ?></span>
			<?php endif ?>
		</div>
	</div>
	<?php foreach ($comanda->cuentas as $cuenta): ?>
	<div class="row">
		<div class="col-sm-12 text-center">
			<span>Cuenta: <?php echo $cuenta->nombre ?></span><br>
		</div>
	</div>
	<br>
	<?php if (isset($comanda->origen_datos)): ?>
	<div>
		<span><b>Datos del Cliente</b></span>
	</div>
	<table class="table">
	<?php if (isset($comanda->origen_datos) && isset($comanda->origen_datos['direccion_entrega']) && isset($comanda->origen_datos['metodo_pago'])): ?>
	<tr>
		<?php if (isset($comanda->origen_datos['direccion_entrega']->direccion)): ?>
			<td><b>Dirección de Entrega:</b> <?php echo $comanda->origen_datos['direccion_entrega']->direccion ?></td>
		<?php endif ?>
		<?php if (isset($comanda->origen_datos['direccion_entrega']->telefono)): ?>
			<td><b>Teléfono:</b> <?php echo $comanda->origen_datos['direccion_entrega']->telefono ?></td>	
		<?php endif ?>
		
	</tr>
	<?php endif ?>
	<?php if (isset($comanda->origen_datos['direccion_entrega']->nombre) && isset($comanda->origen_datos['direccion_entrega']->correo) && isset($comanda->origen_datos['direccion_entrega']->apellidos)): ?>
		<tr>
			<td><b>Nombre entrega:</b> <?php echo $comanda->origen_datos['direccion_entrega']->nombre." ".$comanda->origen_datos['direccion_entrega']->apellidos ?></td>
			<td><b>Correo:</b> <?php echo $comanda->origen_datos['direccion_entrega']->correo ?></td>
		</tr>
	<?php endif ?>
	<?php if (isset($comanda->origen_datos['metodo_pago']->nombre)): ?>
		<tr>
			<td><b>Metodo de Pago:</b> <?php echo $comanda->origen_datos['metodo_pago']->nombre ?>
			</td>	
	<?php if (isset($comanda->origen_datos, $comanda->origen_datos['transferencia'], $comanda->origen_datos['transferencia']->documento)): ?>
			<td>
				<span>Detalle de Transferencia: <?php echo $comanda->origen_datos['transferencia']->documento ?></span><br>
				<?php if (isset($comanda->origen_datos['transferencia']->observaciones)): ?>
					<span>
						Observaciones: <?php echo $comanda->origen_datos['transferencia']->observaciones ?>	
					</span>	
				<?php endif ?>
			</td>
		<?php endif ?>
		</tr>
	<?php endif ?>
	
	</table>
	<?php endif ?>
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
						<?php foreach ($cuenta->productos as $key => $det): ?>
							<?php if ($det->impreso == 0): ?>
								<tr>
									<td style="padding: 5px;" class="text-center"><?php echo $det->cantidad ?></td>
									<td style="padding: 5px;"><?php echo $det->articulo->descripcion ?></td>
								</tr>
								<?php if (!empty($det->notas)): ?>
									<tr>
										<td colspan="2" style="padding: 8px; margin: 10px;">
											<?php echo "<b>Notas:</b> {$det->notas}" ?>
										</td>
									</tr>
								<?php endif ?>
							<?php endif ?>							
						<?php endforeach ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<hr>
	<br>
	<?php endforeach ?>
</body>
</html>