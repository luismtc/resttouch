import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { Articulo } from '../../../interfaces/articulo';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public articulo: Articulo;
  @ViewChild('lstProducto', { static: false }) lstProductoComponent: ListaProductoComponent;
  
  constructor() {
    this.articulo = { articulo: null, categoria_grupo: null, presentacion: null, descripcion: null, precio: null  };
  }

  ngOnInit() {
  }

  setArticulo = (art: any) => {
    console.log(art);
  }

  refreshArticuloList = () => { }

}
