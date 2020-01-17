import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Area } from '../../../interfaces/area';
import { AreaService } from '../../../services/area.service';

@Component({
  selector: 'app-lista-area',
  templateUrl: './lista-area.component.html',
  styleUrls: ['./lista-area.component.css']
})
export class ListaAreaComponent implements OnInit {

  public lstEntidades: Area[];
  public displayedColumns: string[] = ['nombre'];
  public dataSource: MatTableDataSource<Area>;

  @Output() getEntidadEv = new EventEmitter();
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public areaSrvc: AreaService
  ) { }

  ngOnInit() {
    this.loadEntidades();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEntidades = (fltr: any = {}) => {
    this.areaSrvc.get(fltr).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.lstEntidades = lst;
        }
      }
    })
  }

  getEntidad = (id: number) => {
    this.areaSrvc.get({ area: id }).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.getEntidadEv.emit(lst[0]);
        }
      }
    })
  }
}
