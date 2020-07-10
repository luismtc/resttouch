import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Area } from '../../../interfaces/area';
import { AreaService } from '../../../services/area.service';

@Component({
  selector: 'app-lista-area',
  templateUrl: './lista-area.component.html',
  styleUrls: ['./lista-area.component.css']
})
export class ListaAreaComponent implements OnInit {

  public lstEntidades: Area[];
  public lstEntidadesPaged: Area[];
  @Output() getEntidadEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    public areaSrvc: AreaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.loadEntidades();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstEntidades, this.txtFiltro);
      this.length = tmpList.length;
      this.lstEntidadesPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstEntidades.length;
      this.lstEntidadesPaged = PaginarArray(this.lstEntidades, this.pageSize, this.pageIndex + 1);
    }
  }

  loadEntidades = () => {
    this.areaSrvc.get({ sede: (this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.lstEntidades = lst;
          this.applyFilter();
        }
      }
    });
  }

  getEntidad = (id: number) => {
    this.areaSrvc.get({ area: id }).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.getEntidadEv.emit(lst[0]);
        }
      }
    });
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }
}
