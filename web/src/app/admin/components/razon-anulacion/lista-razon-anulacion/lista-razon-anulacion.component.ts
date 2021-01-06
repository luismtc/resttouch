import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { AnulacionService } from '../../../services/anulacion.service';
import { RazonAnulacion } from '../../../interfaces/razon-anulacion';

@Component({
  selector: 'app-lista-razon-anulacion',
  templateUrl: './lista-razon-anulacion.component.html',
  styleUrls: ['./lista-razon-anulacion.component.css']
})
export class ListaRazonAnulacionComponent implements OnInit {

  public listaRazonAnulacion: RazonAnulacion[];
  public listaRazonAnulacionPaged: RazonAnulacion[];
  @Output() getRazonAnulacionEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private srvAnulacion: AnulacionService
  ) { }

  ngOnInit() {
    this.getRazones();
  }

  getRazones = () => {
    this.srvAnulacion.get().subscribe((res:RazonAnulacion[]) => {
      this.listaRazonAnulacion = res;
      this.applyFilter();
    })
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaRazonAnulacion, this.txtFiltro);
      this.length = tmpList.length;
      this.listaRazonAnulacionPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaRazonAnulacion.length;
      this.listaRazonAnulacionPaged = PaginarArray(this.listaRazonAnulacion, this.pageSize, this.pageIndex + 1);
    }
  }

  getRazonAnulacion = (obj: RazonAnulacion) => {
    this.getRazonAnulacionEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
