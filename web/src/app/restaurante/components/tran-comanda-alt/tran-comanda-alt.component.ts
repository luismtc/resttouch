import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Cuenta } from '../../interfaces/cuenta';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { DetalleComanda } from '../../interfaces/detalle-comanda';
import { Impresora } from '../../../admin/interfaces/impresora';
import { Categoria } from '../../../wms/interfaces/categoria';
import { CategoriaGrupoImpresora } from '../../../wms/interfaces/categoria-grupo';
import { ArbolArticulos, Articulo } from '../../../wms/interfaces/articulo';

import { ComandaService } from '../../services/comanda.service';
import { ArticuloService } from '../../../wms/services/articulo.service';

interface IDatosTranComanda {
  mesa: ComandaGetResponse;
}

@Component({
  selector: 'app-tran-comanda-alt',
  templateUrl: './tran-comanda-alt.component.html',
  styleUrls: ['./tran-comanda-alt.component.css']
})
export class TranComandaAltComponent implements OnInit {

  public mesaEnUso: ComandaGetResponse;

  public categorias: Categoria[] = [];
  public subCategorias: CategoriaGrupoImpresora[] = [];
  public listaSubCategorias: any[] = [];
  public articulos: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<TranComandaAltComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosTranComanda,
    private articuloSrvc: ArticuloService,
  ) {
    this.setDatos();
  }

  ngOnInit() {
    this.loadCategorias();
  }

  setDatos = () => {
    if (this.data) {
      if (this.data.mesa) {
        this.mesaEnUso = this.data.mesa;
      }
    }
  }

  cerrar = () => this.dialogRef.close();

  resetArticulos = () => this.articulos = [];
  resetListaSubCategorias = () => this.listaSubCategorias = [];

  loadCategorias = () => this.articuloSrvc.getCategorias().subscribe((res: Categoria[]) => this.categorias = res);

  loadSubcategorias = (cat: Categoria, subcat: CategoriaGrupoImpresora = null, idx: number = 0) => {
    this.resetArticulos();
    const fltr: any = { categoria: cat.categoria };

    if (!!subcat) {
      fltr.categoria_grupo_grupo = subcat.categoria_grupo;
    } else {
      this.resetListaSubCategorias();
    }

    if (this.listaSubCategorias.length > 0) {
      this.listaSubCategorias.splice((idx + 1));
    }

    this.articuloSrvc.getCategoriaGrupoImpresora(fltr).subscribe((res: CategoriaGrupoImpresora[]) => {
      if (res.length > 0) {
        this.listaSubCategorias.push(res);
      } else {
        this.loadArticulos(subcat.categoria_grupo);
      }
    });
  }

  loadArticulos = (idsubcategoria: number) => {
    this.articuloSrvc.getArticulos({ categoria_grupo: idsubcategoria }).subscribe((res: Articulo[]) => {
      console.log(res);
      this.articulos = res;
    });
  }

}
