import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';

import { ArbolArticulos, NodoProducto } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  @Input() treeHeight: string = '450px';
  @Output() productoClickedEv = new EventEmitter();

  treeControl = new NestedTreeControl<NodoProducto>(node => node.hijos);
  dataSource = new MatTreeNestedDataSource<NodoProducto>();
  public arbol: NodoProducto[];

  constructor(
    private ls: LocalstorageService,
    private articuloSrvc: ArticuloService
  ) {
    //this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.loadArbolArticulos();
  }

  hasChild = (_: number, node: NodoProducto) => !!node.hijos && node.hijos.length > 0;

  tieneHijos = (node: NodoProducto) => !!node.hijos && node.hijos.length > 0;

  onProductoClicked(producto: NodoProducto) {
    this.productoClickedEv.emit(producto);
  }

  loadArbolArticulos() {
    this.articuloSrvc.getArbolArticulos((this.ls.get(GLOBAL.usrTokenVar).sede || 0)).subscribe(res => {
      //console.log(res);
      if (res) {
        this.arbol = this.articuloSrvc.convertToArbolNodoProducto(res);
        //console.log(this.arbol);
        this.dataSource.data = this.arbol;
      }
    });
  }
}
