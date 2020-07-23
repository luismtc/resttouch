<p>Se ha generado una comanda desde <?php echo $datos->origen_datos["nombre"]?></p>
<table style="width: 100%;">
	<tr>
		<td><b>Numero de orden: </b></td>
		<td><?php echo $datos->origen_datos["numero_orden"]?></td>
	</tr>
	<tr>
		<td><b>Sede: </b></td>
		<td><?php echo $this->Catalogo_model->getSede([
			"sede" => $datos->sede, 
			"_uno" => true
			])->nombre?>		
		</td>
	</tr>
	<tr>
		<td><b>Origen: </b></td>
		<td><?php echo $datos->origen_datos["nombre"]?></td>
	</tr>
	<?php if (!empty($datos->origen_datos["direccion_entrega"]) && isset($datos->origen_datos["direccion_entrega"]->direccion)): ?>
		<tr>
			<td><b>Dirección de Entrega: </b></td>
			<td><?php echo $datos->origen_datos["direccion_entrega"]->direccion?></td>
		</tr>
	<?php endif ?>
	<tr>
		<td colspan="2"><br></td>
	</tr>
	<tr>
		<td><b>Cuenta</b></td>
		<td><b>Productos</b></td>
	</tr>
	<?php foreach ($datos->cuentas as $key => $row): ?>
		<tr>
			<td><b>Cliente: </b> <?php echo $row->nombre?></td>
			<td>
				<table style="width: 100%;">
					<tr>
						<td><b>Descripcion</b></td>
						<td style="text-align: right;"><b>Total</b></td>
					</tr>
					<?php foreach ($row->productos as $indice => $fila): ?>
						<tr>
							<td><?php echo $fila->articulo->descripcion?></td>
							<td style="text-align: right;"><?php echo number_format($fila->total, 2)?></td>
						</tr>
					<?php endforeach ?>
				</table>
			</td>
		</tr>
	<?php endforeach ?>
</table>