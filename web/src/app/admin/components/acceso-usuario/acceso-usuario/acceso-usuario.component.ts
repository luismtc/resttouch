import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { ListaAccesoUsuarioComponent } from '../lista-acceso-usuario/lista-acceso-usuario.component';
import { FormAccesoUsuarioComponent } from '../form-acceso-usuario/form-acceso-usuario.component';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-acceso-usuario',
  templateUrl: './acceso-usuario.component.html',
  styleUrls: ['./acceso-usuario.component.css']
})
export class AccesoUsuarioComponent implements OnInit {

	public usuario: Usuario;

	@ViewChild('lstUsuario') lstUsuarioComponent: ListaAccesoUsuarioComponent;
	@ViewChild('frmAccesoUsuario') frmAccesoUsuario: FormAccesoUsuarioComponent;

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
		this.frmAccesoUsuario.loadAccesos(+this.usuario.usuario);
		this.frmAccesoUsuario.resetAcceso();
	}
	refreshUsuarioList = () => this.lstUsuarioComponent.loadUsuario();
}
