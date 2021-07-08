import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { VendorTerceroResponse, VendorTercero } from '../../../interfaces/vendor-tercero';
import { VendorTerceroService } from '../../../services/vendor-tercero.service';

@Component({
  selector: 'app-lista-vendor-tercero',
  templateUrl: './lista-vendor-tercero.component.html',
  styleUrls: ['./lista-vendor-tercero.component.css']
})
export class ListaVendorTerceroComponent implements OnInit {

  public lstVendorTercero: VendorTerceroResponse[];
  public lstVendorTerceroPaged: VendorTerceroResponse[];
  @Output() getVendorTerceroEv = new EventEmitter();
  @ViewChild('paginador') paginador: MatPaginator;

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private vendorTerceroSrvc: VendorTerceroService,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadVendorTercero();
  }

  applyFilter(cambioPagina = false) {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstVendorTercero, this.txtFiltro);
      this.length = tmpList.length;
      this.lstVendorTerceroPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstVendorTercero.length;
      this.lstVendorTerceroPaged = PaginarArray(this.lstVendorTercero, this.pageSize, this.pageIndex + 1);
    }
    if (!cambioPagina) {
      this.paginador.firstPage();
    }
  }

  loadVendorTercero = () => {
    this.vendorTerceroSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstVendorTercero = lst;
          this.applyFilter();
        }
      }
    });
  }

  getVendorTercero = (obj: VendorTerceroResponse) => {
    this.getVendorTerceroEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter(true);
  }

}
