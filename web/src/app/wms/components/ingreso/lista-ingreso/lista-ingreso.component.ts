import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';
import * as moment from 'moment';

import { Ingreso } from '../../../interfaces/ingreso';
import { IngresoService } from '../../../services/ingreso.service';

@Component({
  selector: 'app-lista-ingreso',
  templateUrl: './lista-ingreso.component.html',
  styleUrls: ['./lista-ingreso.component.css']
})
export class ListaIngresoComponent implements OnInit {

  public lstIngresos: Ingreso[];
  public lstIngresosPaged: Ingreso[];
  @Output() getIngresoEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  public params = {
    _fdel: moment().startOf('month').format(GLOBAL.dbDateFormat),
    _fal: moment().endOf('month').format(GLOBAL.dbDateFormat)
  }

  constructor(
    private ingresoSrvc: IngresoService
  ) { }

  ngOnInit() {
    this.loadIngresos();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstIngresos, this.txtFiltro);
      this.length = tmpList.length;
      this.lstIngresosPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstIngresos.length;
      this.lstIngresosPaged = PaginarArray(this.lstIngresos, this.pageSize, this.pageIndex + 1);
    }
  }

  loadIngresos = () => {
    this.ingresoSrvc.get(this.params).subscribe(lst => {
      if (lst) {
        this.lstIngresos = lst;
        this.applyFilter();        
      }
    });
  }

  getIngreso = (obj: any) => {
    this.getIngresoEv.emit({
      ingreso: obj.ingreso,
      tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
      fecha: obj.fecha,
      bodega_origen: !!obj.bodega_origen && !!obj.bodega_origen.bodega ? obj.bodega_origen.bodega : null,
      bodega: obj.bodega.bodega,
      usuario: obj.usuario.usuario,
      comentario: obj.comentario,
      proveedor: obj.proveedor.proveedor
    });
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
