import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PaginarArray } from '../../../../shared/global';

import { Cliente } from '../../../interfaces/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { FormClienteDialogComponent } from '../form-cliente-dialog/form-cliente-dialog.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  public displayedColumns: string[] = ['cliente'];
  public dataSource: MatTableDataSource<Cliente>;

  public lstClientes: Cliente[];
  public lstClientesPaged: Cliente[];
  @Input() showAddButton: boolean = false;
  @Output() getClienteEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 25, 50];
  public pageEvent: PageEvent;

  constructor(
    public dialogAddCliente: MatDialog,
    private clienteSrvc: ClienteService
  ) { }

  ngOnInit() {
    this.loadClientes();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadClientes = () => {
    this.clienteSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstClientes = lst;
          this.length = this.lstClientes.length;
          this.lstClientesPaged = PaginarArray(this.lstClientes, this.pageSize, 1);
          this.dataSource = new MatTableDataSource(this.lstClientes);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }

  getCliente = (obj: Cliente) => {
    this.getClienteEv.emit(obj);
  }

  agregarCliente = () => {
    const addClienteRef = this.dialogAddCliente.open(FormClienteDialogComponent, {
      width: '50%',
      data: { esDialogo: true }
    });

    addClienteRef.afterClosed().subscribe(result => {
      if (result) {
        //console.log(result);
        this.loadClientes();
        this.getCliente(result);
      }
    });
  }

  pageChange = (e: PageEvent) => {
    // console.log(e);
    this.lstClientesPaged = PaginarArray(this.lstClientes, e.pageSize, e.pageIndex + 1);
  }
}
