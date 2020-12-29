import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Sede, Empresa } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';

@Component({
  selector: 'app-lista-sede',
  templateUrl: './lista-sede.component.html',
  styleUrls: ['./lista-sede.component.css']
})
export class ListaSedeComponent implements OnInit {

  @Input() empresa: Empresa;
  public listaSede: Sede[];
  public listaSedePaged: Sede[];
  @Output() getSedeEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    private sedeSrv: SedeService
  ) { }

  ngOnInit() {
    this.getSedes();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.listaSede, this.txtFiltro);
      this.length = tmpList.length;
      this.listaSedePaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.listaSede.length;
      this.listaSedePaged = PaginarArray(this.listaSede, this.pageSize, this.pageIndex + 1);
    }
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }

  getSedes = () => {
    this.listaSede = []
    this.applyFilter();
    this.sedeSrv.get({ empresa: this.empresa.empresa }).subscribe((lst: Sede[]) => {
      if (lst) {
        if (lst.length > 0) {
          this.listaSede = lst;
          this.applyFilter();
        }
      }
    });
  }

  getSede = (obj: Sede) => {
    this.getSedeEv.emit(obj);
  }

}
