<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<title>Detalle Facturas</title>
</head>

<body lang="es-GT" dir="ltr">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2>Detalle de Facturas</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 text-center">
			<h5><b>Del:</b> <?php echo formatoFecha($fdel,2) ?> <b>al:</b> <?php echo formatoFecha($fal,2) ?></h5>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-3">
			<span>Facturas</span><br>
			<span>FEL</span>
		</div>
	</div>
	<br>
	<div class="row">
		<div class="col-sm-12">
			<div class="table-responsive">
				<table class="table table-bordered" style="padding: 5px">
					<thead>
						<tr>
							<th style="padding: 5px;" class="text-center">Factura</th>
							<th style="padding: 5px;" class="text-center">Mesa</th>
							<th style="padding: 5px;" class="text-center">Fecha</th>
							<th style="padding: 5px;" class="text-center">NIT</th>
							<th style="padding: 5px;" class="text-center">Cliente</th>
							<th style="padding: 5px;" class="text-center">Total</th>
							<th style="padding: 5px;" class="text-center">Propina</th>
							<th style="padding: 5px;" class="text-center">Descuento</th>
						</tr>
					</thead>
					<tbody>
						<?php 
							$totalFactura = 0;
							$totalPropina = 0;
							$totalDescuento = 0;
						?>
						<?php foreach ($facturas as $row): ?>
							<?php $detalle = $row->getDetalle() ?>
							<tr>
								<td style="padding: 5px;">
									<?php echo $row->numero_factura ?>
								</td>
								<td style="padding: 5px;" class="text-center">
									<?php echo isset($row->mesa->mesa) ? $row->mesa->mesa : '' ?>
								</td>
								<td style="padding: 5px;"><?php echo formatoFecha($row->fecha_factura,2) ?></td>
								<td style="padding: 5px;">
									<?php echo (empty($row->fel_uuid_anulacion) ? $row->receptor->nit : '') ?>
								</td>
								<td style="padding: 5px;">
									<?php echo (empty($row->fel_uuid_anulacion) ? $row->receptor->nombre : 'ANULADA') ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php echo (empty($row->fel_uuid_anulacion) ? number_format($row->total, 2) : 0) ?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php 
										if (empty($row->fel_uuid_anulacion)) {
											echo number_format($row->propina, 2);
											$totalFactura += $row->total;
											$totalPropina += $row->propina;
										} else {
											echo 0;
										}
									?>
								</td>
								<td style="padding: 5px;" class="text-right">
									<?php 
										if (empty($row->fel_uuid_anulacion)) {
											$desc = suma_field($detalle, "descuento");
											echo number_format($desc, 2);
											$totalDescuento += $desc;
										} else {
											echo "0.00";
										}
									 ?>
								</td>
							</tr>
							<?php if (isset($_detalle) && $_detalle !== "false"): ?>
								<tr>
									<td class="text-center" colspan="3"></td>
									<td class="text-center">Articulo</td>
									<td class="text-center">Cantidad</td>
									<td class="text-center">Total</td>
									<td class="text-center"></td>
									<td class="text-center">Descuento</td>
								</tr>
								<?php foreach ($detalle as $det): ?>
									<tr>
										<td colspan="3"></td>
										<td style="padding: 5px;"><?php echo $det->articulo->descripcion ?></td>
										<td style="padding: 5px;" class="text-center"><?php echo $det->cantidad ?></td>
										<td style="padding: 5px;" class="text-right">
											<?php echo number_format($det->total,2) ?></td>
										<td style="padding: 5px;"></td>
										<td style="padding: 5px;" class="text-right">
											<?php echo number_format($det->descuento,2) ?>
										</td>
									</tr>
								<?php endforeach ?>
							<?php endif ?>
						<?php endforeach ?>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5" style="padding: 5px;" class="text-right">Total:</td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format($totalFactura,2) ?></td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format($totalPropina,2) ?></td>
							<td style="padding: 5px;" class="text-right"><?php echo number_format($totalDescuento, 2) ?></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</body>
</body>
</html>