import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { ArbolArticulos, NodoProducto } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

const TREE_DATA: NodoProducto[] = [
  {
    id: 1,
    nombre: 'Bebidas',
    hijos: [
      { id: 2, nombre: 'Apple', precio: 10.00 },
      { id: 3, nombre: 'Banana', precio: 10.00 },
      { id: 4, nombre: 'Fruit loops', precio: 10.00 },
    ]
  },
  {
    id: 5,
    nombre: 'Comida',
    hijos: [
      {
        id: 6,
        nombre: 'Pizza',
        hijos: [
          { id: 7, nombre: 'Personal', precio: 50 },
          { id: 8, nombre: 'Mediana', precio: 60 },
          { id: 9, nombre: 'Grande', precio: 70 },
        ]
      },
      {
        id: 10,
        nombre: 'Pasta',
        hijos: [
          { id: 11, nombre: 'Pomodoro', precio: 45 },
          { id: 12, nombre: 'Carbonara', precio: 45 },
        ]
      },
      {
        id: 13,
        nombre: 'Ensalda',
        hijos: [
          { id: 14, nombre: 'César', precio: 35 },
          { id: 15, nombre: 'Griega', precio: 35 },
          { id: 16, nombre: 'Oriental', precio: 35 },
        ]
      },      
    ]
  },
];

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
    this.articuloSrvc.getArbolArticulos(1).subscribe(res => {
      if (res) {
        this.arbol = this.articuloSrvc.convertToArbolNodoProducto(res);
        //console.log(this.arbol);
        this.dataSource.data = this.arbol;
      }
    });
  }
}
