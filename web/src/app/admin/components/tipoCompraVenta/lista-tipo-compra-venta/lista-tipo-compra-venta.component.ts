import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { TipoCompraVenta } from '../../../interfaces/tipo-compra-venta';
import { TipoCompraVentaService } from '../../../services/tipo-compra-venta.service';

@Component({
  selector: 'app-lista-tipo-compra-venta',
  templateUrl: './lista-tipo-compra-venta.component.html',
  styleUrls: ['./lista-tipo-compra-venta.component.css']
})
export class ListaTipoCompraVentaComponent implements OnInit {

  public lstTiposCompraVenta: TipoCompraVenta[];
  public lstTiposCompraVentaPaged: TipoCompraVenta[];
  @Output() getTipoCompraVentaEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private tipoCompraVentaSrvc: TipoCompraVentaService
  ) { }

  ngOnInit(): void {
    this.loadTiposCompraVenta();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstTiposCompraVenta, this.txtFiltro);
      this.length = tmpList.length;
      this.lstTiposCompraVentaPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstTiposCompraVenta.length;
      this.lstTiposCompraVentaPaged = PaginarArray(this.lstTiposCompraVenta, this.pageSize, this.pageIndex + 1);
    }
  }

  loadTiposCompraVenta = () => {
    this.tipoCompraVentaSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstTiposCompraVenta = lst;
          this.applyFilter();
        }
      }
    });
  }

  getTipoCompraVenta = (obj: TipoCompraVenta) => {
    this.getTipoCompraVentaEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
