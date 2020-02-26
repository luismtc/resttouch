import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Medida } from '../../../interfaces/medida';
import { MedidaService } from '../../../services/medida.service';

@Component({
  selector: 'app-lista-medida',
  templateUrl: './lista-medida.component.html',
  styleUrls: ['./lista-medida.component.css']
})
export class ListaMedidaComponent implements OnInit {

  public displayedColumns: string[] = ['medida'];
  public dataSource: MatTableDataSource<Medida>;

  public lstMedidas: Medida[];
  @Output() getMedidaEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private medidaSrvc: MedidaService
  ) { }

  ngOnInit() {
    this.loadMedidas();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadMedidas = () => {
    this.medidaSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstMedidas = lst;
          this.dataSource = new MatTableDataSource(this.lstMedidas);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getMedida = (obj: Medida) => {
    this.getMedidaEv.emit(obj);
  }

}
