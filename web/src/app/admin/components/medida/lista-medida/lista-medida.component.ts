import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Medida } from '../../../interfaces/medida';
import { MedidaService } from '../../../services/medida.service';

@Component({
  selector: 'app-lista-medida',
  templateUrl: './lista-medida.component.html',
  styleUrls: ['./lista-medida.component.css']
})
export class ListaMedidaComponent implements OnInit {

  public lstMedidas: Medida[];
  public lstMedidasPaged: Medida[];
  @Output() getMedidaEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private medidaSrvc: MedidaService
  ) { }

  ngOnInit() {
    this.loadMedidas();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstMedidas, this.txtFiltro);
      this.length = tmpList.length;
      this.lstMedidasPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstMedidas.length;
      this.lstMedidasPaged = PaginarArray(this.lstMedidas, this.pageSize, this.pageIndex + 1);
    }
  }

  loadMedidas = () => {
    this.medidaSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstMedidas = lst;
          this.applyFilter();
        }
      }
    });
  }

  getMedida = (obj: Medida) => {
    this.getMedidaEv.emit(obj);
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

}
