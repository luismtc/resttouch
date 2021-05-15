import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
// import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { OrdenarArrayObjetos } from '../../../../shared/global';
// import * as moment from 'moment';

import { Usuario } from '../../../interfaces/usuario';
import { Acceso } from '../../../interfaces/acceso';
import { AccesoUsuarioService } from '../../../services/acceso-usuario.service';
import { Modulo } from '../../../interfaces/modulo';
import { ModuloService } from '../../../services/modulo.service';
import { SubModulo } from '../../../interfaces/sub-modulo';
import { SubModuloService } from '../../../services/sub-modulo.service';
import { Opcion } from '../../../interfaces/opcion';
import { OpcionService } from '../../../services/opcion.service';

@Component({
	selector: 'app-form-acceso-usuario',
	templateUrl: './form-acceso-usuario.component.html',
	styleUrls: ['./form-acceso-usuario.component.css']
})

export class FormAccesoUsuarioComponent implements OnInit {

	@Input() usuario: Usuario;
	@Output() AccesoUsuarioSavedEv = new EventEmitter();

	public accesos: Acceso[] = [];
	public acceso: Acceso;
	public displayedColumns: string[] = ['modulo', 'submodulo', 'opcion', 'editItem'];
	public dataSource: MatTableDataSource<Acceso>;
	public modulos: Modulo[] = [];
	public submodulos: SubModulo[] = [];
	public opciones: Opcion[] = [];

	constructor(
		private _snackBar: MatSnackBar,
		private accesoUsuarioSrvc: AccesoUsuarioService,
		private moduloSrvc: ModuloService,
		private subModuloSrvc: SubModuloService,
		private opcionSrvc: OpcionService
	) {
		this.acceso = {
			acceso: null, modulo: null, usuario: null, submodulo: null, opcion: null, activo: 1
		};
	}

	ngOnInit() {
		this.loadAccesos(this.usuario.usuario);
		this.loadModulos();
	}

	loadAccesos = (idusuario: number = +this.usuario.usuario) => {
		this.accesoUsuarioSrvc.get({ usuario: idusuario }).subscribe((res: any[]) => {
			if (res) {
				this.accesos = res
				this.updateTableDataSource();
			}
		});
	}

	loadModulos = () => {
		this.moduloSrvc.get().subscribe(res => {
			if (res) {
				this.modulos = res;
			}
		});
	}

	loadSubModulos = (idmodulo: number) => {
		if (idmodulo) {
			this.subModuloSrvc.get(idmodulo).subscribe(res => {
				if (res) {
					let temp = [];
					for (let x in res) {
						temp.push({
							sub_modulo: x,
							descripcion: res[x].nombre
						});
					}
					this.submodulos = OrdenarArrayObjetos(temp, 'descripcion');
				}
			});
		}
	}

	loadOpciones = (idsubmodulo) => {
		let temp = [];

		if (idsubmodulo && this.acceso.modulo) {
			this.opcionSrvc.get(this.acceso.modulo, idsubmodulo).subscribe(res => {
				for (let x in res) {
					temp.push({
						opcion: x,
						descripcion: res[x].nombre
					});
				}
				this.opciones = OrdenarArrayObjetos(temp, 'descripcion');
			});
		}		
	}

	resetAcceso = () => {
		this.acceso = {
			acceso: null, modulo: null, usuario: null, submodulo: null, opcion: null, activo: 1
		};
	}

	setAcceso = (pres: any) => {
		this.acceso = {
			acceso: pres.acceso,
			modulo: pres.modulo.modulo,
			usuario: pres.usuario.usuario,
			submodulo: pres.submodulo.submodulo,
			opcion: pres.opcion.opcion,
			activo: pres.activo
		};

		this.loadSubModulos(this.acceso.modulo);
		this.loadOpciones(this.acceso.submodulo);
	}

	onSubmit = () => {
		this.acceso.usuario = this.usuario.usuario;
		const cp: any = JSON.parse(JSON.stringify(this.accesos));
		const idx = cp.findIndex(a => +a.usuario.usuario === +this.acceso.usuario && +a.modulo.modulo === +this.acceso.modulo && +a.submodulo.submodulo === +this.acceso.submodulo && +a.opcion.opcion === +this.acceso.opcion);
		if (idx < 0) {
			this.accesoUsuarioSrvc.save(this.acceso).subscribe(res => {
				if (res.exito) {
					this.resetAcceso();
					this.loadAccesos(this.usuario.usuario);
					this._snackBar.open('Acceso guardado con éxito...', 'Acceso Usuario', { duration: 3000 });
				} else {
					this._snackBar.open(`ERROR: ${res.mensaje}`, 'Acceso Usuario', { duration: 3000 });
				}
			})
		} else {
			this._snackBar.open('Este usuario ya cuenta con este permiso.', 'Acceso Usuario', { duration: 3000 });
		}
	}

	removerAcceso = (pres: any) => {
		pres.activo = 0;
		this.accesoUsuarioSrvc.save(pres).subscribe(res => {
			if (res.exito) {
				this.resetAcceso();
				this.loadAccesos(this.usuario.usuario);
				this._snackBar.open('Removido con éxito...', 'Acceso Usuario', { duration: 3000 });
			} else {
				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Acceso Usuario', { duration: 3000 });
			}
		})
	}

	updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.accesos);

}
