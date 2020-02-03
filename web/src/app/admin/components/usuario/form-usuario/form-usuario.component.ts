import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() usrSavedEv = new EventEmitter();

  constructor(
    private _snackBar: MatSnackBar,
    private usuarioSrvc: UsuarioService
  ) { }

  ngOnInit() {
  }

  resetUsuario() {
    this.usuario = new Usuario(null, null, null, null, null, null, 0);
  }

  onSubmit() {
    this.usuarioSrvc.save(this.usuario).subscribe((res) => {
      if(res){
        this.resetUsuario();
        this.usrSavedEv.emit();
        this._snackBar.open('Grabado con éxito.', 'Usuario', { duration: 5000 });
      }
    });
  }

}
