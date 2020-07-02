import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Impresora } from '../../../interfaces/impresora';
import { ImpresoraService } from '../../../services/impresora.service';

@Component({
  selector: 'app-lista-impresora',
  templateUrl: './lista-impresora.component.html',
  styleUrls: ['./lista-impresora.component.css']
})
export class ListaImpresoraComponent implements OnInit {

  public displayedColumns: string[] = ['impresora'];
  public dataSource: MatTableDataSource<Impresora>;

  public lstImpresoras: Impresora[];
  @Output() getImpresoraEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
  	private impresoraSrvc: ImpresoraService
  ) { }

  ngOnInit() {
  	this.loadImpresoras();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadImpresoras = () => {
    this.impresoraSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstImpresoras = lst;
          this.dataSource = new MatTableDataSource(this.lstImpresoras);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getImpresora = (obj: Impresora) => {
    this.getImpresoraEv.emit(obj);
  }

}
