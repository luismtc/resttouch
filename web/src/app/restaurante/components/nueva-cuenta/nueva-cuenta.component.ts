import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { Cuenta } from '../../interfaces/cuenta';

import { ComandaService } from '../../services/comanda.service';

interface INuevaCuenta {
  mesaEnUso: ComandaGetResponse;
}

@Component({
  selector: 'app-nueva-cuenta',
  templateUrl: './nueva-cuenta.component.html',
  styleUrls: ['./nueva-cuenta.component.css']
})
export class NuevaCuentaComponent implements OnInit {

  public comanda: Comanda;
  public nuevaCuenta: Cuenta;

  constructor(
    public dialogRef: MatDialogRef<NuevaCuentaComponent>,
    private snackBar: MatSnackBar,
    private comandaSrvc: ComandaService,
    @Inject(MAT_DIALOG_DATA) public data: INuevaCuenta
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
      this.nuevaCuenta = {
        cuenta: 0,
        numero: this.comanda.cuentas.length + 1,
        nombre: undefined,
        productos: []
      };
    }
  }

  cancelar = () => this.dialogRef.close(false);

  guardar = () => {
    if (this.nuevaCuenta.nombre) {
      const idx = this.comanda.cuentas.findIndex(c => c.nombre.toUpperCase().trim() === this.nuevaCuenta.nombre.toUpperCase().trim());
      if (idx < 0) {
        this.comanda.cuentas.push(this.nuevaCuenta);
        this.comandaSrvc.save(this.comanda).subscribe(res => {
          if (res.exito) {
            this.snackBar.open('Cuenta agregada con éxito', 'Cuentas', { duration: 3000 });
            this.dialogRef.close(true);
          } else {
            this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cuentas', { duration: 7000 });
          }
        });
      } else {
        this.snackBar.open('Ya existe una cuenta con ese nombre. Por favor ingrese otro nombre.', 'Cuentas', { duration: 7000 });
      }
    }
  }
}
