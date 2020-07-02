import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Propina } from '../../../interfaces/propina';
import { PropinaService } from '../../../services/propina.service';

@Component({
  selector: 'app-lista-propina',
  templateUrl: './lista-propina.component.html',
  styleUrls: ['./lista-propina.component.css']
})
export class ListaPropinaComponent implements OnInit {

  public displayedColumns: string[] = ['propina'];
  public dataSource: MatTableDataSource<Propina>;
  public lstPropinas: Propina[];
  @Output() getPropinaEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private propinaSrvc: PropinaService) { }

  ngOnInit() {
  	this.loadPropinas();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadPropinas = () => {
    this.propinaSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstPropinas = lst;
          this.dataSource = new MatTableDataSource(this.lstPropinas);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getPropina = (obj: Propina) => {
    this.getPropinaEv.emit(obj);
  }
}
