import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Ingreso } from '../../../interfaces/ingreso';
import { IngresoService } from '../../../services/ingreso.service';

@Component({
  selector: 'app-lista-ingreso',
  templateUrl: './lista-ingreso.component.html',
  styleUrls: ['./lista-ingreso.component.css']
})
export class ListaIngresoComponent implements OnInit {

  public displayedColumns: string[] = ['ingreso'];
  public dataSource: MatTableDataSource<Ingreso>;

  public lstIngresos: Ingreso[];
  @Output() getIngresoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private ingresoSrvc: IngresoService
  ) { }

  ngOnInit() {
    this.loadIngresos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadIngresos = () => {
    this.ingresoSrvc.getIngresosDePrueba().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstIngresos = lst;
          this.dataSource = new MatTableDataSource(this.lstIngresos);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getIngreso = (id: number) => {
    this.getIngresoEv.emit(this.lstIngresos.filter(i => i.ingreso === id)[0]);
    /*
    this.ingresoSrvc.getIngresosDePrueba().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.getIngresoEv.emit(lst[0]);
        }
      }
    });        
    */
  }

}
