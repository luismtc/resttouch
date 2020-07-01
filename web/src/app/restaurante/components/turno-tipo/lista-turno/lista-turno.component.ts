import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TipoTurno } from '../../../interfaces/tipo-turno';
import { TipoTurnoService } from '../../../services/tipo-turno.service';

@Component({
  selector: 'app-lista-turno-tipo',
  templateUrl: './lista-turno.component.html',
  styleUrls: ['./lista-turno.component.css']
})
export class ListaTurnoTipoComponent implements OnInit {

  public displayedColumns: string[] = ['turno'];
  public dataSource: MatTableDataSource<TipoTurno>;

  public lstTurnos: TipoTurno[];
  @Output() getTurnoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(private turnoSrvc: TipoTurnoService) { }

  ngOnInit() {
  	this.loadTurnos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadTurnos = () => {
    this.turnoSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstTurnos = lst;
          this.dataSource = new MatTableDataSource(this.lstTurnos);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getTurno = (obj: TipoTurno) => {
    this.getTurnoEv.emit(obj);
  }

}
