import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { GLOBAL, PaginarArray, MultiFiltro } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  public lstUsuarios: Usuario[];
  public lstUsuariosPaged: Usuario[];
  @Output() getUsuarioEv = new EventEmitter();
  @ViewChild('paginador') paginador: MatPaginator;

  public length = 0;
  public pageSize = 5;
  public pageSizeOptions: number[] = [5, 10, 15];
  public pageIndex = 0;
  public pageEvent: PageEvent;
  public txtFiltro = '';
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private usuarioSrvc: UsuarioService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadUsuarios();
  }

  applyFilter(cambioPagina = false) {
    if (this.txtFiltro.length > 0) {
      const tmpList = MultiFiltro(this.lstUsuarios, this.txtFiltro);
      this.length = tmpList.length;
      this.lstUsuariosPaged = PaginarArray(tmpList, this.pageSize, this.pageIndex + 1);      
    } else {
      this.length = this.lstUsuarios.length;
      this.lstUsuariosPaged = PaginarArray(this.lstUsuarios, this.pageSize, this.pageIndex + 1);
    }
    if (!cambioPagina) {
      this.paginador.firstPage();
    }
  }

  loadUsuarios() {
    this.usuarioSrvc.getAll(3).subscribe((lst) => {
      if (lst) {
        if (lst.length > 0) {
          this.lstUsuarios = lst;
          this.applyFilter();
        }
      }
    });
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

  pageChange = (e: PageEvent) => {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.applyFilter(true);
  }
}
