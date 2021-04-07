import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';

import { Egreso } from '../../../interfaces/egreso';
import { EgresoService } from '../../../services/egreso.service';

@Component({
  selector: 'app-lista-egreso',
  templateUrl: './lista-egreso.component.html',
  styleUrls: ['./lista-egreso.component.css']
})
export class ListaEgresoComponent implements OnInit {

  public lstEgresos: Egreso[];
  public lstEgresosPaged: Egreso[];
  @Output() getEgresoEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private egresoSrvc: EgresoService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadEgresos();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstEgresos, this.txtFiltro);
      this.length = tmpList.length;
      this.lstEgresosPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstEgresos.length;
      this.lstEgresosPaged = PaginarArray(this.lstEgresos, this.pageSize, this.pageIndex + 1);
    }
  }

  loadEgresos = () => {
    this.egresoSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstEgresos = lst;
          this.applyFilter();
        }
      }
    });
  }

  getEgreso = (obj: any) => {
    this.getEgresoEv.emit({
      egreso: obj.egreso,
      tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
      bodega: obj.bodega.bodega,
      fecha: obj.fecha,
      usuario: obj.usuario.usuario,
      estatus_movimiento: obj.estatus_movimiento || 1,
      traslado: obj.traslado || 0,
      idcomandafox: obj.idcomandafox
    });
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }
}
