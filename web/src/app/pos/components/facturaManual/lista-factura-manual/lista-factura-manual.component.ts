import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Factura } from '../../../interfaces/factura';
import { FacturaService } from '../../../services/factura.service';

import * as moment from 'moment';

@Component({
  selector: 'app-lista-factura-manual',
  templateUrl: './lista-factura-manual.component.html',
  styleUrls: ['./lista-factura-manual.component.css']
})
export class ListaFacturaManualComponent implements OnInit {

  public esMovil = false;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;

  public lstFacturas: Factura[];
  public lstFacturasPaged: Factura[];
  @Output() getFacturaEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';
  public verTodas = false;
  public rango = { fdel: null, fal: null };

  constructor(
    private facturaSrvc: FacturaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.rango.fdel = moment().startOf('month').format(GLOBAL.dbDateFormat);
    this.rango.fal = moment().endOf('month').format(GLOBAL.dbDateFormat);
    this.loadFacturas();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstFacturas, this.txtFiltro);
      this.length = tmpList.length;
      this.lstFacturasPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstFacturas.length;
      this.lstFacturasPaged = PaginarArray(this.lstFacturas, this.pageSize, this.pageIndex + 1);
    }
  }

  loadFacturas = () => {
    const fltr: any = {};
    if (this.verTodas) {
      fltr._todas = true;
    }

    if (moment(this.rango.fdel).isValid()) {
      fltr._fdel = this.rango.fdel
    }

    if (moment(this.rango.fal).isValid()) {
      fltr._fal = this.rango.fal
    }

    this.facturaSrvc.get(fltr).subscribe(lst => {
      // console.log(lst);
      if (lst) {
        if (lst.length > 0) {
          this.lstFacturas = lst;
        } else {
          this.lstFacturas = [];
        }
        this.applyFilter();
      }
    });
  }

  cargarFacturas = (obj: any) => this.loadFacturas();

  getFactura = (obj: Factura) => {
    this.getFacturaEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
