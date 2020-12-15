import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import * as moment from 'moment';
import { SedeService } from '../../../services/sede.service';
import { Sede } from '../../../interfaces/sede'
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioSede } from '../../../interfaces/acceso';
import { AccesoUsuarioService } from '../../../services/acceso-usuario.service';

@Component({
  selector: 'app-usuario-sede-form',
  templateUrl: './usuario-sede-form.component.html',
  styleUrls: ['./usuario-sede-form.component.css']
})
export class UsuarioSedeFormComponent implements OnInit {

  @Input() usuario: Usuario;
	@Output() AccesoUsuarioSavedEv = new EventEmitter();

  public accesos: UsuarioSede[] = [];
  public sedes: Sede[] = []
  public acceso: UsuarioSede;
  public displayedColumns: string[] = ['sede', 'editItem'];
  public dataSource: MatTableDataSource<UsuarioSede>;

	constructor(
		private _snackBar: MatSnackBar,
    private accesoUsuarioSrvc: AccesoUsuarioService,
    private sedeSrvc: SedeService
	) {
		this.resetAcceso();
	}

  ngOnInit() {
    this.loadSedes()
  }

  loadAccesos = (idusuario: number = +this.usuario.usuario) => {
		this.accesoUsuarioSrvc.getSedes({usuario:idusuario}).subscribe((res: any[]) => {
			if (res) {
				this.accesos = res
				this.updateTableDataSource();
			}
		});
	}

	loadSedes = () => {
		this.sedeSrvc.get().subscribe(res => {
			if (res) {
				this.sedes = res;
			}
		});
	}

	resetAcceso = () => {
		this.acceso = {
			usuario_sede: null, sede: null, usuario: null, anulado: 0 
		};
	}

	setAcceso = (pres: any) => {
		this.acceso =  {
			usuario_sede: pres.usuario_sede,
			sede: pres.sede.sede,
			usuario: pres.usuario.usuario,
			anulado: pres.anulado
		};
	}

  	onSubmit = () => {
  		this.acceso.usuario = this.usuario.usuario;

  		this.accesoUsuarioSrvc.saveSedes(this.acceso).subscribe(res => {
  			if (res.exito) {
  				//this.resetAcceso();
  				this.loadAccesos(this.usuario.usuario);
  				this._snackBar.open('Acceso guardado con éxito...', 'Sede Usuario', { duration: 3000 });
  			} else {
  				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Sede Usuario', { duration: 3000 });
  			}
  		})
  	}

  	removerAcceso = (pres: any) => {
  		pres.anulado = 1;
  		this.accesoUsuarioSrvc.saveSedes(pres).subscribe(res => {
  			if (res.exito) {
  				this.resetAcceso();
  				this.loadAccesos(this.usuario.usuario);
  				this._snackBar.open('Removido con éxito...', 'Sede Usuario', { duration: 3000 });
  			} else {
  				this._snackBar.open(`ERROR: ${res.mensaje}`, 'Sede Usuario', { duration: 3000 });
  			}
  		})
  	}

	updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.accesos);

}
