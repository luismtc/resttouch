import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public areaSrvc: AreaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.loadEntidades();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEntidades = () => {
    this.areaSrvc.get({ sede: (this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.lstEntidades = lst;
          this.dataSource = new MatTableDataSource(this.lstEntidades);
          this.dataSource.paginator = this.paginator;          
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
