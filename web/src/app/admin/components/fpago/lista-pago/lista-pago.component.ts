import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { FormaPago } from '../../../interfaces/forma-pago';
import { FpagoService } from '../../../services/fpago.service';

@Component({
  selector: 'app-lista-pago',
  templateUrl: './lista-pago.component.html',
  styleUrls: ['./lista-pago.component.css']
})
export class ListaPagoComponent implements OnInit {

  public listaFpago: FormaPago[];
  public listaFpagoPaged: FormaPago[];
  @Output() getFpagoEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private fpagoSrvc: FpagoService
  ) { }

  ngOnInit() {
    this.getFormasPago();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaFpago, this.txtFiltro);
      this.length = tmpList.length;
      this.listaFpagoPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaFpago.length;
      this.listaFpagoPaged = PaginarArray(this.listaFpago, this.pageSize, this.pageIndex + 1);
    }
  }

  getFormasPago = () => {
    this.fpagoSrvc.get().subscribe((lst: FormaPago[]) => {
      if (lst) {
        if (lst.length > 0) {
          lst = lst.map(fp => {
            fp.pedirdocumento = +fp.pedirdocumento;
            fp.adjuntararchivo = +fp.adjuntararchivo;
            fp.pedirautorizacion = +fp.pedirautorizacion;
            fp.sinfactura = +fp.sinfactura;
            fp.activo = +fp.activo;
            return fp;
          });
          this.listaFpago = lst;
          this.applyFilter();
        }
      }
    });
  }

  getFpago = (obj: FormaPago) => {
    this.getFpagoEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }
}
