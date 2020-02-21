import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { FormaPago } from '../../../interfaces/forma-pago';
import { FormaPagoService } from '../../../services/forma-pago.service';

@Component({
  selector: 'app-lista-forma-pago',
  templateUrl: './lista-forma-pago.component.html',
  styleUrls: ['./lista-forma-pago.component.css']
})
export class ListaFormaPagoComponent implements OnInit {

  public displayedColumns: string[] = ['formaPago'];
  public dataSource: MatTableDataSource<FormaPago>;

  public lstFormasPago: FormaPago[];
  @Output() getFormaPagoEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private formaPagoSrvc: FormaPagoService
  ) { }

  ngOnInit() {
    this.loadFormasPago();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadFormasPago = () => {
    this.formaPagoSrvc.buscar().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstFormasPago = lst;
          this.dataSource = new MatTableDataSource(this.lstFormasPago);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getFormaPago = (obj: FormaPago) => {
    this.getFormaPagoEv.emit(obj);
  }

}
