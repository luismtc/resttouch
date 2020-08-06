import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Impresora } from '../../../admin/interfaces/impresora';

interface IDatosCuentas {
  lstProductosSeleccionados: [{
    id: number;
    nombre: string;
    cuenta?: number;
    cantidad: number;
    impreso: number;
    precio?: number;
    total?: number;
    notas?: string;
    showInputNotas: boolean;
    itemListHeight: string;
    detalle_comanda?: number;
    detalle_cuenta?: number;
    impresora?: Impresora;
  }];
  mesaEnUso: {
    area: string;
    noMesa: number;
    cuentas: [{
      numero: number,
      nombre: string
    }];
  };
}

@Component({
  selector: 'app-unir-cuenta',
  templateUrl: './unir-cuenta.component.html',
  styleUrls: ['./unir-cuenta.component.css']
})
export class UnirCuentaComponent implements OnInit {

  public cuentaDe: number = null;
  public cuentaA: number = null;

  constructor(
    public dialogRef: MatDialogRef<UnirCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosCuentas
  ) { }

  ngOnInit() {
    console.log('Productos enviados = ', this.data.lstProductosSeleccionados);
  }

  cancelar() {
    this.dialogRef.close();
  }

  unirCuentas(deCuenta: number = 1, aCuenta: number = 1) {
    console.log(`De cuenta = ${deCuenta} a cuenta ${aCuenta}`);
    if (+deCuenta !== +aCuenta) {
      console.log('deCuenta y aCuenta son diferentes');
      console.log('Productos seleccionados (Antes) = ', this.data.lstProductosSeleccionados);
      this.data.lstProductosSeleccionados.map((p) => {
        if (+p.cuenta === +deCuenta) {
          p.cuenta = aCuenta;
        }
      });
      console.log('Productos seleccionados (Después) = ', this.data.lstProductosSeleccionados);
    } else {
      this.data.lstProductosSeleccionados.map(p => p.cuenta = +deCuenta);
    }
    this.dialogRef.close(this.data.lstProductosSeleccionados);
  }

  unirTodas() {
    this.unirCuentas();
  }

}
