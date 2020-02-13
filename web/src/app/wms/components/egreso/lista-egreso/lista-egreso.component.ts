import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Egreso } from '../../../interfaces/egreso';
import { EgresoService } from '../../../services/egreso.service';

@Component({
  selector: 'app-lista-egreso',
  templateUrl: './lista-egreso.component.html',
  styleUrls: ['./lista-egreso.component.css']
})
export class ListaEgresoComponent implements OnInit {

  public displayedColumns: string[] = ['egreso'];
  public dataSource: MatTableDataSource<Egreso>;

  public lstEgresos: Egreso[];
  @Output() getEgresoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private egresoSrvc: EgresoService
  ) { }

  ngOnInit() {
    this.loadEgresos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEgresos = () => {
    this.egresoSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstEgresos = lst;
          this.dataSource = new MatTableDataSource(this.lstEgresos);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getEgreso = (obj: any) => {
    this.getEgresoEv.emit({
      egreso: obj.egreso,
      tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
      bodega: obj.bodega.bodega,
      fecha: obj.fecha,
      usuario: obj.usuario.usuario,
      estatus_movimiento: obj.estatus_movimiento || 1,
      traslado: obj.traslado || 0
    });
  }

}
