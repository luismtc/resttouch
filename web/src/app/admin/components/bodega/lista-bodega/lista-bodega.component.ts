import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import {BodegaService} from '../../../../wms/services/bodega.service'
import {Bodega} from '../../../../wms/interfaces/bodega'

@Component({
  selector: 'app-lista-bodega',
  templateUrl: './lista-bodega.component.html',
  styleUrls: ['./lista-bodega.component.css']
})
export class ListaBodegaComponent implements OnInit {

  public listaBodega: Bodega[];
  public listaBodegaPaged: Bodega[];
  @Output() getBodegaEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private srvBodega: BodegaService
  ) { }

  ngOnInit() {
    this.getBodegas();
  }

  getBodegas = () => {
    this.srvBodega.get().subscribe((res:Bodega[]) => {
      this.listaBodega = res;
      this.applyFilter();
    })
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaBodega, this.txtFiltro);
      this.length = tmpList.length;
      this.listaBodegaPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaBodega.length;
      this.listaBodegaPaged = PaginarArray(this.listaBodega, this.pageSize, this.pageIndex + 1);
    }
  }

  getBodega = (obj: Bodega) => {
    this.getBodegaEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
