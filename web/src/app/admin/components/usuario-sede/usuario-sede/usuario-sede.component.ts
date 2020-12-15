import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { UsuarioSedeListaComponent } from '../usuario-sede-lista/usuario-sede-lista.component';
import { UsuarioSedeFormComponent } from '../usuario-sede-form/usuario-sede-form.component';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-usuario-sede',
  templateUrl: './usuario-sede.component.html',
  styleUrls: ['./usuario-sede.component.css']
})
export class UsuarioSedeComponent implements OnInit {

  public usuario: Usuario;

	@ViewChild('lstUsuario', { static: false }) lstUsuarioComponent: UsuarioSedeListaComponent;
	@ViewChild('frmUsuarioSede', { static: false }) frmUsuarioSede: UsuarioSedeFormComponent;

	constructor(
		private ls: LocalstorageService
	) {
		this.usuario = {
			usuario: null, nombres: null, apellidos: null 
		};
	}

  ngOnInit() {
  }

  setUsuario = (usr: Usuario) => {
		this.usuario = usr;
		this.frmUsuarioSede.loadAccesos(+this.usuario.usuario);
		this.frmUsuarioSede.resetAcceso();
  }
  
	refreshUsuarioList = () => this.lstUsuarioComponent.loadUsuario();

}
