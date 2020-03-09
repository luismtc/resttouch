import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

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
  @Input() showAddButton: boolean = false;
  @Output() getClienteEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
}
