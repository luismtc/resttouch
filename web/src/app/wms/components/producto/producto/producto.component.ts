import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { Articulo, ArticuloResponse } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public articulo: Articulo;
  @ViewChild('lstProducto', { static: false }) lstProductoComponent: ListaProductoComponent;
  @ViewChild('frmProducto', { static: false }) frmProductoComponent: FormProductoComponent;
  
  constructor(
    private articuloSrvc: ArticuloService
  ) {
    this.articulo = { articulo: null, categoria_grupo: null, presentacion: null, descripcion: null, precio: null  };
  }

  ngOnInit() {
  }

  setArticulo = (art: any) => {
    this.articuloSrvc.getArticulo({ articulo: art.id }).subscribe(res => {
      if (!!res && res.length > 0) {
        let obj: ArticuloResponse = res[0];
        this.articulo = {
          articulo: +obj.articulo,
          categoria_grupo: +obj.categoria_grupo.categoria_grupo,
          presentacion: obj.presentacion,
          descripcion: obj.descripcion,
          precio: +obj.precio          
        }
      }
    });
  }

  setArticuloCategoriaGrupo = (idcategoriagrupo: number) => {
    this.articulo.categoria_grupo = +idcategoriagrupo;
    this.frmProductoComponent.setArticuloCategoriaGrupo(+idcategoriagrupo);
  }

  refreshArticuloList = (obj: any) => {
    this.lstProductoComponent.loadArbolArticulos();
  }

}
