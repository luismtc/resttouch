import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';

import { ArbolArticulos, ArbolCategoriaGrupo, Articulo, NodoProducto } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-lista-producto-alt',
  templateUrl: './lista-producto-alt.component.html',
  styleUrls: ['./lista-producto-alt.component.css']
})
export class ListaProductoAltComponent implements OnInit {

  @Output() productoClickedEv = new EventEmitter();
  @Output() categoriasFilledEv = new EventEmitter();
  public categorias: ArbolArticulos[] = [];
  public subcategorias: ArbolCategoriaGrupo[] = [];
  public articulos: Articulo[] = [];

  constructor(
    private articuloSrvc: ArticuloService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.loadArbolArticulos();
  }

  loadArbolArticulos = () => {
    this.articuloSrvc.getArbolArticulos((this.ls.get(GLOBAL.usrTokenVar).sede || 0)).subscribe((res: ArbolArticulos[]) => {
      this.fillCategorias(res);
    });
  }

  fillCategorias = (cats: ArbolArticulos[]) => {
    this.categorias = [];
    this.subcategorias = [];
    this.articulos = [];
    for (const cat of cats) {
      this.categorias.push(cat);
    }
    this.categoriasFilledEv.emit(this.categorias);
  }

  fillSubCategorias = (subcats: ArbolCategoriaGrupo[]) => {
    this.subcategorias = [];
    this.articulos = [];
    for (const subcat of subcats) {
      this.subcategorias.push(subcat);
    }
  }

  fillArticulos = (arts: Articulo[]) => {
    this.articulos = [];
    for (const a of arts) {
      this.articulos.push(a);
    }
  }

  clickOnCategoria = (cat: ArbolArticulos) => {
    if (cat.categoria_grupo.length > 0) {
      this.fillSubCategorias(cat.categoria_grupo);
    }
  }

  clickOnSubCategoria = (scat: ArbolCategoriaGrupo) => {
    if (scat.articulo.length > 0) {
      this.fillArticulos(scat.articulo);
    }
  }

  clickOnArticulo = (art: Articulo) => {
    const obj: NodoProducto = {
      id: +art.articulo,
      nombre: art.descripcion,
      precio: +art.precio,
      impresora: art.impresora,
      presentacion: art.presentacion,
      codigo: art.codigo
    };
    // console.log(obj);
    this.productoClickedEv.emit(obj);
    // this.subcategorias = [];
    // this.articulos = [];
  }
}
