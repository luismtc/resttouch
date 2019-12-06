import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  public displayedColumns: string[] = ['usuario'];
  public dataSource: MatTableDataSource<Usuario>;

  public lstUsuarios: Usuario[];
  @Output() getUsuarioEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private usuarioSrvc: UsuarioService
  ) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadUsuarios() {
    this.usuarioSrvc.getAll(3).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.lstUsuarios = lst;
          this.dataSource = new MatTableDataSource(this.lstUsuarios);
          this.dataSource.paginator = this.paginator;
        }
      }
    })
  }

  getUsuario(id: number) {
    this.usuarioSrvc.get({ usuario: id }).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.getUsuarioEv.emit(lst[0]);
        }
      }
    });

  }

}
