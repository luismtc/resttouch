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
    this.articulo = {
      articulo: null, categoria_grupo: null, presentacion: null, descripcion: null, precio: null, bien_servicio: 'B',
      produccion: 0, presentacion_reporte: null, mostrar_pos: 0, impuesto_especial: null
    };
  }

  ngOnInit() {
  }

  setArticulo = (art: any) => {
    this.articuloSrvc.getArticulo({ articulo: art.id }).subscribe(res => {
      if (!!res && res.length > 0) {
        const obj: ArticuloResponse = res[0];
        this.articulo = {
          articulo: +obj.articulo,
          categoria_grupo: +obj.categoria_grupo.categoria_grupo,
          presentacion: obj.presentacion.presentacion,
          descripcion: obj.descripcion,
          precio: +obj.precio,
          codigo: obj.codigo,
          produccion: obj.produccion,
          presentacion_reporte: obj.presentacion_reporte.presentacion,
          mostrar_pos: obj.mostrar_pos,
          impuesto_especial: obj.impuesto_especial,
          shopify_id: obj.shopify_id,
          multiple:obj.multiple,
          cantidad_minima: obj.cantidad_minima,
          cantidad_maxima: obj.cantidad_maxima,
          combo: obj.combo
        };
        this.frmProductoComponent.loadRecetas(+this.articulo.articulo);
        this.frmProductoComponent.resetReceta();
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
