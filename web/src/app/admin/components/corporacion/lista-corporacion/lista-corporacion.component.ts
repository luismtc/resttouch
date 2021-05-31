import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Corporacion } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';

@Component({
  selector: 'app-list-corporacion',
  templateUrl: './lista-corporacion.component.html',
  styleUrls: ['./lista-corporacion.component.css']
})
export class ListaCorporacionComponent implements OnInit {

  public listaCorporacion: Corporacion[];
  public listaCorporacionPaged: Corporacion[];
  @Output() getCorporacionEv = new EventEmitter();
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
    this.getCorporaciones();
  }

  applyFilter(cambioPagina = false) {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaCorporacion, this.txtFiltro);
      this.length = tmpList.length;
      this.listaCorporacionPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaCorporacion.length;
      this.listaCorporacionPaged = PaginarArray(this.listaCorporacion, this.pageSize, this.pageIndex + 1);
    }
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter(true);
  }

  getCorporaciones = () => {
    this.sedeSrv.getCorporacion().subscribe((lst: Corporacion[]) => {
      if (lst) {
        if (lst.length > 0) {
          this.listaCorporacion = lst;
          this.applyFilter();
        }
      }
    });
  }

  getCorporacion = (obj: Corporacion) => {
    this.getCorporacionEv.emit(obj);
  }

}
