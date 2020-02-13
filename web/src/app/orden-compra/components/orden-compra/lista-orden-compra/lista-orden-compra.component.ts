import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { OrdenCompra } from '../../../interfaces/orden-compra';
import { OrdenCompraService } from '../../../services/orden-compra.service';

@Component({
  selector: 'app-lista-orden-compra',
  templateUrl: './lista-orden-compra.component.html',
  styleUrls: ['./lista-orden-compra.component.css']
})
export class ListaOrdenCompraComponent implements OnInit {

  public displayedColumns: string[] = ['ordencompra'];
  public dataSource: MatTableDataSource<OrdenCompra>;

  public lstOrdenesCompra: OrdenCompra[];
  @Output() getOrdenCompraEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private ordenCompraSrvc: OrdenCompraService
  ) { }

  ngOnInit() {
    this.loadOrdenesCompra();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadOrdenesCompra = () => {
    this.ordenCompraSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstOrdenesCompra = lst;
          this.dataSource = new MatTableDataSource(this.lstOrdenesCompra);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getOrdenCompra = (obj: any) => {
    this.getOrdenCompraEv.emit({
      orden_compra: obj.orden_compra,
      proveedor: obj.proveedor || 0,
      fecha: obj.fecha,
      usuario: obj.usuario || 0,
      notas: obj.notas,
      estatus_movimiento: obj.estatus_movimiento || 1
    });
  }
}
