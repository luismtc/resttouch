import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Corporacion, Empresa } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit {

  public listaEmpresa: Empresa[];
  public listaEmpresaPaged: Empresa[];
  @Output() getEmpresaEv = new EventEmitter();
  @Input() corporacion: Corporacion;
  @ViewChild('paginador') paginador: MatPaginator;

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private sedeSrv: SedeService
  ) { }

  ngOnInit() {
    this.getEmpresas();
  }

  applyFilter(cambioPagina = false) {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaEmpresa, this.txtFiltro);
      this.length = tmpList.length;
      this.listaEmpresaPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaEmpresa.length;
      this.listaEmpresaPaged = PaginarArray(this.listaEmpresa, this.pageSize, this.pageIndex + 1);
    }
    if (!cambioPagina && this.paginador) {
      this.paginador.firstPage();
    }
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter(true);
  }

  getEmpresas = () => {
    this.listaEmpresa = [];
    this.applyFilter();
    
    this.sedeSrv.getEmpresa({ corporacion: this.corporacion.corporacion }).subscribe((lst: Empresa[]) => {
      if (lst) {
        if (lst.length > 0) {
          this.listaEmpresa = lst;
          this.applyFilter();
        }
      }
    });
  }

  getEmpresa = (obj: Empresa) => {
    this.getEmpresaEv.emit(obj);
  }

}
