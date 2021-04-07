import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { Presentacion } from '../../../interfaces/presentacion';
import { PresentacionService } from '../../../services/presentacion.service';

@Component({
  selector: 'app-lista-presentacion',
  templateUrl: './lista-presentacion.component.html',
  styleUrls: ['./lista-presentacion.component.css']
})
export class ListaPresentacionComponent implements OnInit {

  public lstPresentacion: Presentacion[];
  public lstPresentacionPaged: Presentacion[];
  @Output() getPresentacionEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private presentacionSrvc: PresentacionService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadPresentaciones();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstPresentacion, this.txtFiltro);
      this.length = tmpList.length;
      this.lstPresentacionPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstPresentacion.length;
      this.lstPresentacionPaged = PaginarArray(this.lstPresentacion, this.pageSize, this.pageIndex + 1);
    }
  }

  loadPresentaciones = () => {
    this.presentacionSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstPresentacion = lst;
          this.applyFilter();
        }
      }
    });
  }

  getPresentacion = (obj: Presentacion) => {
    this.getPresentacionEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }
}
