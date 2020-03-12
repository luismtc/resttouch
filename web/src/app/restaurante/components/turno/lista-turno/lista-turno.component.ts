import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
//import * as moment from 'moment';

import { Turno } from '../../../interfaces/turno';
import { TurnoService } from '../../../services/turno.service';

@Component({
  selector: 'app-lista-turno',
  templateUrl: './lista-turno.component.html',
  styleUrls: ['./lista-turno.component.css']
})
export class ListaTurnoComponent implements OnInit {

  public displayedColumns: string[] = ['turno'];
  public dataSource: MatTableDataSource<Turno>;

  public lstTurnos: Turno[];
  @Output() getTurnoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private ls: LocalstorageService,
    private turnoSrvc: TurnoService
  ) { }

  ngOnInit() {
    this.loadTurnos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadTurnos = () => {
    this.turnoSrvc.get({sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0)}).subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstTurnos = lst;
          this.dataSource = new MatTableDataSource(this.lstTurnos);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getTurno = (obj: any) => {
    this.getTurnoEv.emit({
      turno: obj.turno,
      turno_tipo: obj.turno_tipo.turno_tipo,
      fecha: obj.fecha,
      inicio: obj.inicio,
      fin: obj.fin
    });
  }

}
