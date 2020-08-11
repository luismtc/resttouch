import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ComandaService } from '../../services/comanda.service';

@Component({
  selector: 'app-valida-pwd-gerente-turno',
  templateUrl: './valida-pwd-gerente-turno.component.html',
  styleUrls: ['./valida-pwd-gerente-turno.component.css']
})
export class ValidaPwdGerenteTurnoComponent implements OnInit {

  public data: any = { pwd: undefined };

  constructor(
    public dialogRef: MatDialogRef<ValidaPwdGerenteTurnoComponent>,
    private comandaSrvc: ComandaService
  ) { }

  ngOnInit() {
  }

  cancelar = () => this.dialogRef.close();

  terminar = () => {
    this.comandaSrvc.validaPwdGerenteTurno(this.data.pwd).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.dialogRef.close(res.esgerente);
      } else {
        this.dialogRef.close(false);
      }
    });
  }
}
