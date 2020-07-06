import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UsuarioTipo } from '../../../interfaces/usuario-tipo';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';

@Component({
  selector: 'app-lista-tipo-usuario',
  templateUrl: './lista-tipo-usuario.component.html',
  styleUrls: ['./lista-tipo-usuario.component.css']
})
export class ListaTipoUsuarioComponent implements OnInit {

	public displayedColumns: string[] = ['usuario_tipo'];
	public dataSource: MatTableDataSource<UsuarioTipo>;
	public lstUsuarioTipo: UsuarioTipo[];
	@Output() getTipoUsuarioEv = new EventEmitter();
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(private tipoUsuarioSrvc: TipoUsuarioService) { }

	ngOnInit() {
		this.loadTipoUsuario();
	}

	loadTipoUsuario = () => {
		this.tipoUsuarioSrvc.get().subscribe(lst => {
			if (lst) {
				if (lst.length > 0) {
					this.lstUsuarioTipo = lst;
					this.dataSource = new MatTableDataSource(this.lstUsuarioTipo);
					this.dataSource.paginator = this.paginator;
				}
			}
		});
	}

	getTipoUsuario = (obj: UsuarioTipo) => {
		this.getTipoUsuarioEv.emit(obj);
	}
}
