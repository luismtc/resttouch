import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';

// import { ArbolArticulos, NodoProducto } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-lista-producto-alt',
  templateUrl: './lista-producto-alt.component.html',
  styleUrls: ['./lista-producto-alt.component.css']
})
export class ListaProductoAltComponent implements OnInit {

  @Output() productoClickedEv = new EventEmitter();
  public categorias: any[];
  public subcategorias: any[];
  public articulos: any[];

  constructor(
    private articuloSrvc: ArticuloService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.loadArbolArticulos();
  }

  loadArbolArticulos = () => {
    this.articuloSrvc.getArbolArticulos((this.ls.get(GLOBAL.usrTokenVar).sede || 0)).subscribe(res => {
      console.log(res);
    });
  }
}
