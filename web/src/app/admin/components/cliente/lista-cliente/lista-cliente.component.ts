import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PaginarArray, MultiFiltro } from '../../../../shared/global';

import { Cliente } from '../../../interfaces/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { FormClienteDialogComponent } from '../form-cliente-dialog/form-cliente-dialog.component';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  public lstClientes: Cliente[];
  public lstClientesPaged: Cliente[];
  @Input() showAddButton = false;
  @Output() getClienteEv = new EventEmitter();

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';

  constructor(
    public dialogAddCliente: MatDialog,
    private clienteSrvc: ClienteService
  ) { }

  ngOnInit() {
    this.loadClientes();
  }

  applyFilter() {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstClientes, this.txtFiltro);
      this.length = tmpList.length;
      this.lstClientesPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);
    } else {
      this.length = this.lstClientes.length;
      this.lstClientesPaged = PaginarArray(this.lstClientes, this.pageSize, this.pageIndex + 1);
    }
  }

  loadClientes = () => {
    this.clienteSrvc.get().subscribe(lst => {
      if (lst) {
        if (lst.length > 0) {
          this.lstClientes = lst;
          this.applyFilter();
        }
      }
    });
  }

  getCliente = (obj: Cliente) => this.getClienteEv.emit(obj);

  agregarCliente = () => {
    const addClienteRef = this.dialogAddCliente.open(FormClienteDialogComponent, {
      width: '50%',
      data: { esDialogo: true }
    });

    addClienteRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result);
        this.loadClientes();
        this.getCliente(result);
      }
    });
  }

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter();
  }
}
