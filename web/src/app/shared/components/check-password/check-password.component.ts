import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ComandaService } from '../../../restaurante/services/comanda.service';

export class ConfigCheckPasswordModel {
  constructor(
    public tipo: number,
    public subtitulo?: string,
    public etiquetaAceptar?: string
  ) { }
}

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.css']
})
export class CheckPasswordComponent implements OnInit {

  public pwd: string = undefined;

  constructor(
    private comandaSrvc: ComandaService,
    public dialogRef: MatDialogRef<CheckPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfigCheckPasswordModel
  ) { }

  ngOnInit() {
  }

  cancelar = () => this.dialogRef.close();

  terminar = () => {
    switch (+this.data.tipo) {
      case 1: this.validarPwdGerenteTurno(); break;
    }
  }

  validarPwdGerenteTurno = () => {

    this.comandaSrvc.validaPwdGerenteTurno(this.pwd).subscribe(res => {
      if (res.exito) {
        this.dialogRef.close(res.esgerente);
      } else {
        this.dialogRef.close(false);
      }
    });
  }

}
