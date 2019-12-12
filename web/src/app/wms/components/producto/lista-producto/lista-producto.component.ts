import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface nodoProducto {
  id: number;
  nombre: string;
  hijos?: nodoProducto[];
}

const TREE_DATA: nodoProducto[] = [
  {
    id: 1,
    nombre: 'Bebidas',
    hijos: [
      { id: 2, nombre: 'Apple' },
      { id: 3, nombre: 'Banana' },
      { id: 4, nombre: 'Fruit loops' },
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
          { id: 7, nombre: 'Personal' },
          { id: 8, nombre: 'Mediana' },
          { id: 9, nombre: 'Grande' },
        ]
      },
      {
        id: 10,
        nombre: 'Pasta',
        hijos: [
          { id: 11, nombre: 'Pomodoro' },
          { id: 12, nombre: 'Carbonara' },
        ]
      },
      {
        id: 13,
        nombre: 'Ensalda',
        hijos: [
          { id: 14, nombre: 'César' },
          { id: 15, nombre: 'Griega' },
          { id: 16, nombre: 'Oriental' },
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

  treeControl = new NestedTreeControl<nodoProducto>(node => node.hijos);
  dataSource = new MatTreeNestedDataSource<nodoProducto>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
  }

  hasChild = (_: number, node: nodoProducto) => !!node.hijos && node.hijos.length > 0;

  tieneHijos = (node: nodoProducto) => !!node.hijos && node.hijos.length > 0;

  onProductoClicked(producto: nodoProducto) {
    this.productoClickedEv.emit(producto);
  }

}
