import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Sede } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';
import { ConfiguracionService } from '../../../services/configuracion.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() usrSavedEv = new EventEmitter();
  public sedes: Sede[] = [];
  public habilitaBloqueo = false;

  constructor(
    private snackBar: MatSnackBar,
    private usuarioSrvc: UsuarioService,
    private sedeSrvc: SedeService,
    private configSrvc: ConfiguracionService
  ) { }

  ngOnInit() {
    this.loadSedes();
    this.habilitaBloqueo = this.configSrvc.getConfig(GLOBAL.CONSTANTES.RT_HABILITA_BLOQUEO_INACTIVIDAD);
  }

  loadSedes = () => {
    this.sedeSrvc.get().subscribe(res => {
      if (res) {
        this.sedes = res;
      }
    });
  }

  resetUsuario() {
    this.usuario = new Usuario(null, null, null, null, null, null, 0, null, 0);
  }

  onSubmit() {
    this.usuarioSrvc.save(this.usuario).subscribe((res) => {
      if (res) {
        this.resetUsuario();
        this.usrSavedEv.emit();
        this.snackBar.open('Grabado con éxito.', 'Usuario', { duration: 5000 });
      }
    });
  }

}
