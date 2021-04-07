import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsuarioService } from '../../services/usuario.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { GLOBAL } from '../../../shared/global';

@Component({
  selector: 'app-solicita-pin-inactividad',
  templateUrl: './solicita-pin-inactividad.component.html',
  styleUrls: ['./solicita-pin-inactividad.component.css']
})
export class SolicitaPinInactividadComponent implements OnInit {

  public pinDesbloqueo: string = undefined;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    public dialogRef: MatDialogRef<SolicitaPinInactividadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioSrvc: UsuarioService,
    private snackBar: MatSnackBar,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.ls.clear(GLOBAL.usrUnlockVar);
  }

  verificaPin = () => {
    const tmpPinDesbloqueo = +this.pinDesbloqueo.replace(/[^0-9]/gi, '').substr(0, 36).trim();
    this.usuarioSrvc.desbloquear(tmpPinDesbloqueo).subscribe(res => {
      if (res.exito && res.token) {
        this.ls.set(GLOBAL.usrUnlockVar, {
          token: res.token, usuario: res.usrname, nombres: res.nombres, apellidos: res.apellidos, sede: +res.sede,
          idusr: +res.idusr, sede_uuid: res.sede_uuid, empresa: res.empresa, restaurante: res.restaurante
        });
        this.dialogRef.close();
      } else {
        this.pinDesbloqueo = undefined;
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Desbloqueo', { duration: 7000 });
      }
    });
  }

}
