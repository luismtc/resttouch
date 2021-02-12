import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { ProductoSelected } from '../../../wms/interfaces/articulo';

import { ComandaService } from '../../services/comanda.service';

interface IDialogComanda {
  mesaEnUso: ComandaGetResponse;
  lstProductos: ProductoSelected[];
}

@Component({
  selector: 'app-distribuir-productos-cuentas',
  templateUrl: './distribuir-productos-cuentas.component.html',
  styleUrls: ['./distribuir-productos-cuentas.component.css']
})
export class DistribuirProductosCuentasComponent implements OnInit {

  public comanda: Comanda;
  public cantidadProducto: number[] = [];
  public cpLstProductos: ProductoSelected[] = [];

  constructor(
    public dialogRef: MatDialogRef<DistribuirProductosCuentasComponent>,
    private snackBar: MatSnackBar,
    private comandaSrvc: ComandaService,
    @Inject(MAT_DIALOG_DATA) public data: IDialogComanda
  ) { }

  ngOnInit() {
    if (+this.data.mesaEnUso.comanda > 0) {
      const meu = this.data.mesaEnUso;
      this.comanda = {
        area: +meu.mesa.area.area,
        mesa: +meu.mesa.mesa,
        mesero: +meu.mesero.usuario,
        comensales: meu.cuentas.length + 1,
        dividirCuentasPorSillas: 1,
        comanda: +meu.comanda,
        cuentas: meu.cuentas,
        replaceUnica: false
      };
    }

    this.cpLstProductos = [];

    if (this.data.lstProductos.length > 0) {
      this.cpLstProductos = JSON.parse(JSON.stringify(this.data.lstProductos));
      this.data.lstProductos.forEach(item => {
        this.cantidadProducto.push(+item.cantidad);
      });
    }
  }

  cancelar = () => this.dialogRef.close(false);

  guardar = () => {
    const lstObj: any = [];
    for (const p of this.cpLstProductos) {
      lstObj.push({
        detalle_comanda: +p.detalle_comanda,
        cuenta: +p.idcuenta,
        cantidad: +p.cantidad
      });
    }
    this.comandaSrvc.distribuirCuentas(lstObj).subscribe(res => {
      if (res.exito) {
        this.snackBar.open('Productos redistribuidos', 'Cuentas', { duration: 3000 });
        this.dialogRef.close(true);
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cuentas', { duration: 7000 });
        this.cancelar();
      }
    });
  }
}
