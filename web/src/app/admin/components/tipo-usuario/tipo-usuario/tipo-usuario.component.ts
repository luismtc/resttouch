import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaTipoUsuarioComponent } from '../lista-tipo-usuario/lista-tipo-usuario.component';
import { FormTipoUsuarioComponent } from '../form-tipo-usuario/form-tipo-usuario.component';
import { UsuarioTipo } from '../../../interfaces/usuario-tipo';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  public usuarioTipo: UsuarioTipo;
  @ViewChild('lstTipoUsuario', { static: false }) lstUsuarioTipo: ListaTipoUsuarioComponent;
  @ViewChild('frmTipoUsuario', { static: false }) frmTipoUsuario: FormTipoUsuarioComponent;
  constructor() {
    this.usuarioTipo = {
      usuario_tipo: null, descripcion: null, jerarquia: null
    };
  }

  ngOnInit() {
  }

  setTipoUsuario = (pres: any) => {
    this.usuarioTipo = {
      usuario_tipo: pres.usuario_tipo,
      descripcion: pres.descripcion,
      jerarquia: pres.jerarquia.jerarquia
    };
    this.frmTipoUsuario.loadUTCGrupos(this.usuarioTipo.usuario_tipo);
  }

  refreshtipoUsuarioList = () => this.lstUsuarioTipo.loadTipoUsuario();
}
