import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../../shared/global';

import { Configuracion } from '../../../../interfaces/certificador';
import { CertificadorService } from '../../../../services/certificador.service';

@Component({
  selector: 'app-lista-certificador-configuracion',
  templateUrl: './lista-certificador-configuracion.component.html',
  styleUrls: ['./lista-certificador-configuracion.component.css']
})
export class ListaCertificadorConfiguracionComponent implements OnInit {

  public lstCertificador: Configuracion[];
	public lstCertificadorPaged: Configuracion[];
	@Output() getCertificadorEv = new EventEmitter();

	public length = 0;
	public pageSize = 5;
	public pageSizeOptions: number[] = [5, 10, 15];
	public pageIndex = 0;
	public pageEvent: PageEvent;
	public txtFiltro = '';

	constructor(private CertificadorSrvc: CertificadorService) { }

  ngOnInit() {
    this.loadCertificador();
  }

  applyFilter() {
		if (this.txtFiltro.length > 0) {
			const tmpList = MultiFiltro(this.lstCertificador, this.txtFiltro);
			this.length = tmpList.length;
			this.lstCertificadorPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
		} else {
			this.length = this.lstCertificador.length;
			this.lstCertificadorPaged = PaginarArray(this.lstCertificador, this.pageSize, this.pageIndex + 1);
		}
	}

	loadCertificador = () => {
		this.CertificadorSrvc.getConfig().subscribe(lst => {
			if (lst) {
				if (lst.length > 0) {
					this.lstCertificador = lst;
					this.applyFilter();
				}
			}
		});
	}

	getCertificador = (obj: Configuracion) => {
		this.getCertificadorEv.emit(obj);
	}

	pageChange = (e: PageEvent) => {
		this.pageSize = e.pageSize;
		this.pageIndex = e.pageIndex;
		this.applyFilter();
	}

}
