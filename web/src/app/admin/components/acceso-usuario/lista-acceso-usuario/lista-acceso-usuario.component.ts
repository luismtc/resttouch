import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
	selector: 'app-lista-acceso-usuario',
	templateUrl: './lista-acceso-usuario.component.html',
	styleUrls: ['./lista-acceso-usuario.component.css']
})
export class ListaAccesoUsuarioComponent implements OnInit {

	public lstUsuario: Usuario[];
	public lstUsuarioPaged: Usuario[];
	@Output() getUsuarioEv = new EventEmitter();

	public length = 0;
	public pageSize = 5;
	public pageSizeOptions: number[] = [5, 10, 15];
	public pageIndex = 0;
	public pageEvent: PageEvent;
	public txtFiltro = '';

	constructor(private UsuarioSrvc: UsuarioService) { }

	ngOnInit() {
		this.loadUsuario();
	}

	applyFilter() {
		if (this.txtFiltro.length > 0) {
			const tmpList = MultiFiltro(this.lstUsuario, this.txtFiltro);
			this.length = tmpList.length;
			this.lstUsuarioPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
		} else {
			this.length = this.lstUsuario.length;
			this.lstUsuarioPaged = PaginarArray(this.lstUsuario, this.pageSize, this.pageIndex + 1);
		}
	}

	loadUsuario = () => {
		this.UsuarioSrvc.getAll().subscribe(lst => {
			if (lst) {
				if (lst.length > 0) {
					this.lstUsuario = lst;
					this.applyFilter();
				}
			}
		});
	}

	getUsuario = (obj: Usuario) => {
		this.getUsuarioEv.emit(obj);
	}

	pageChange = (e: PageEvent) => {
		this.pageSize = e.pageSize;
		this.pageIndex = e.pageIndex;
		this.applyFilter();
	}
}