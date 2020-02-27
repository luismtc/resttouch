import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Presentacion } from '../../../interfaces/presentacion';
import { PresentacionService } from '../../../services/presentacion.service';

@Component({
  selector: 'app-lista-presentacion',
  templateUrl: './lista-presentacion.component.html',
  styleUrls: ['./lista-presentacion.component.css']
})
export class ListaPresentacionComponent implements OnInit {

  public displayedColumns: string[] = ['presentacion'];
  public dataSource: MatTableDataSource<Presentacion>;

  public lstPresentacion: Presentacion[];
  @Output() getPresentacionEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private presentacionSrvc: PresentacionService
  ) { }

  ngOnInit() {
    this.loadPresentaciones();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadPresentaciones = () => {
    this.presentacionSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstPresentacion = lst;
          this.dataSource = new MatTableDataSource(this.lstPresentacion);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getPresentacion = (obj: Presentacion) => {
    this.getPresentacionEv.emit(obj);
  }

}
