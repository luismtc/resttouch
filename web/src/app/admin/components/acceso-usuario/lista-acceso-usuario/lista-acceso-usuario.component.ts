import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-lista-acceso-usuario',
  templateUrl: './lista-acceso-usuario.component.html',
  styleUrls: ['./lista-acceso-usuario.component.css']
})
export class ListaAccesoUsuarioComponent implements OnInit {

	public displayedColumns: string[] = ['usuarios'];
	public dataSource: MatTableDataSource<Usuario>;
	public lstUsuario: Usuario[];
	@Output() getUsuarioEv = new EventEmitter();
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(private UsuarioSrvc: UsuarioService) { }

	ngOnInit() {
		this.loadUsuario();
	}

	loadUsuario = () => {
		this.UsuarioSrvc.getAll().subscribe(lst => {
			if (lst) {
				if (lst.length > 0) {
					this.lstUsuario           = lst;
					this.dataSource           = new MatTableDataSource(this.lstUsuario);
					this.dataSource.paginator = this.paginator;
				}
			}
		});
	}

	getUsuario = (obj: Usuario) => {
		this.getUsuarioEv.emit(obj);
	}
}