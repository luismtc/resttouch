import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface datosCuentas {
  lstProductosSeleccionados: [{
    id: number;
    nombre: string;
    noCuenta?: number;
    cantidad: number;
    impreso: boolean;
    precio?: number;
    notas?: string;
    showInputNotas: boolean;
    itemListHeight: string;
  }],
  mesaEnUso: {
    area: string;
    noMesa: number;
    cuentas: [{
      numero: number,
      nombre: string
    }];
  }
}

@Component({
  selector: 'app-unir-cuenta',
  templateUrl: './unir-cuenta.component.html',
  styleUrls: ['./unir-cuenta.component.css']
})
export class UnirCuentaComponent implements OnInit {

  private cuentaDe: number = null;
  private cuentaA: number = null;

  constructor(
    public dialogRef: MatDialogRef<UnirCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: datosCuentas
  ) { }

  ngOnInit() {
    // console.log(this.data.lstProductosSeleccionados);
  }

  cancelar() {
    this.dialogRef.close();
  }

  unirCuentas(deCuenta: number = 1, aCuenta: number = 1) {
    if (+deCuenta !== +aCuenta) {
      this.data.lstProductosSeleccionados.map((p) => {
        if (+p.noCuenta === +deCuenta) {
          p.noCuenta = aCuenta
        }
      });
    } else {
      this.data.lstProductosSeleccionados.map(p => p.noCuenta = +deCuenta);
    }
    this.dialogRef.close(this.data.lstProductosSeleccionados);
  }

  unirTodas() {
    this.unirCuentas()
  }

}
