import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { FormaPago } from '../../../interfaces/forma-pago';
import { FpagoService } from '../../../services/fpago.service';

@Component({
  selector: 'app-lista-pago',
  templateUrl: './lista-pago.component.html',
  styleUrls: ['./lista-pago.component.css']
})
export class ListaPagoComponent implements OnInit {

  public displayedColumns: string[] = ['forma_pago'];
  public dataSource: MatTableDataSource<FormaPago>;

  public listaFpago: FormaPago[];
  @Output() getFpagoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private fpagoSrvc: FpagoService
  ) { }

  ngOnInit() {
    this.getFormasPago();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getFormasPago = () => {
    this.fpagoSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.listaFpago = lst;
          this.dataSource = new MatTableDataSource(this.listaFpago);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getFpago = (obj: FormaPago) => {
    this.getFpagoEv.emit(obj);
  }

}
