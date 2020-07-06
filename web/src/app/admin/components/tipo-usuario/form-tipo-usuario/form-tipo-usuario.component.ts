import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { UsuarioTipo } from '../../../interfaces/usuario-tipo';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';

import { Jerarquia } from '../../../interfaces/jerarquia';
import { JerarquiaService } from '../../../services/jerarquia.service';

@Component({
  selector: 'app-form-tipo-usuario',
  templateUrl: './form-tipo-usuario.component.html',
  styleUrls: ['./form-tipo-usuario.component.css']
})
export class FormTipoUsuarioComponent implements OnInit {

	@Input() usuarioTipo: UsuarioTipo;
	@Output() usuarioTipoSavedEv = new EventEmitter();
	public jerarquias: Jerarquia[] = [];

	constructor(
		private _snackBar: MatSnackBar,
    	private tipoUsuarioSrvc: TipoUsuarioService,
    	private jerarquiaSrvc: JerarquiaService
	) { }

	ngOnInit() {
		this.loadJerarquia();
	}

	loadJerarquia = () => {
		this.jerarquiaSrvc.get().subscribe(res => {
			this.jerarquias = res;
		});
	}

	resetTipoUsuario = () => this.usuarioTipo = {
		usuario_tipo: null, descripcion: null, jerarquia: null
	}

	onSubmit = () => {
		this.tipoUsuarioSrvc.save(this.usuarioTipo).subscribe(res => {
			if (res.exito) {
				this.usuarioTipoSavedEv.emit();
				this.resetTipoUsuario();
				this._snackBar.open('Tipo agregado...', 'Tipo Usuario', { duration: 3000 });
			} else {
				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Tipo Usuario', { duration: 3000 });
			}
		});
	}

}
