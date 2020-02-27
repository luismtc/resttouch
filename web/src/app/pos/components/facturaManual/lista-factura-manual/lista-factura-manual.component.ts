import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Factura } from '../../../interfaces/factura';
import { FacturaService } from '../../../services/factura.service';

@Component({
  selector: 'app-lista-factura-manual',
  templateUrl: './lista-factura-manual.component.html',
  styleUrls: ['./lista-factura-manual.component.css']
})
export class ListaFacturaManualComponent implements OnInit {

  public displayedColumns: string[] = ['factura'];
  public dataSource: MatTableDataSource<Factura>;

  public lstFacturas: Factura[];
  @Output() getFacturaEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private facturaSrvc: FacturaService
  ) { }

  ngOnInit() {
    this.loadFacturas();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadFacturas = () => {
    this.facturaSrvc.get().subscribe(lst => {
      //console.log(lst);
      if (lst) {
        if (lst.length > 0) {
          this.lstFacturas = lst;
          this.dataSource = new MatTableDataSource(this.lstFacturas);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getFactura = (obj: Factura) => {
    this.getFacturaEv.emit(obj);
  }

}
