import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Impresora } from '../../../interfaces/impresora';
import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';


@Component({
  selector: 'app-sub-categoria-producto',
  templateUrl: './sub-categoria-producto.component.html',
  styleUrls: ['./sub-categoria-producto.component.css']
})
export class SubCategoriaProductoComponent implements OnInit {

  public categoria: Categoria;
  public categorias: Categoria[] = [];
  public impresoras: Impresora[] = [];
  public categoriaGrupo: CategoriaGrupo;
  public categoriasGruposPadre: CategoriaGrupo[] = [];
  public categoriasGrupos: CategoriaGrupo[] = [];
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;
  public bodegas: Bodega[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private articuloSrvc: ArticuloService,
    private bodegaSrvc: BodegaService,
    private ls: LocalstorageService
  ) {
    this.resetCategoriaGrupo();
  }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadCategorias();
    this.loadImpresoras();
    this.loadBodegas();
  }

  loadCategorias = () => {
    this.articuloSrvc.getCategorias({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((res: Categoria[]) => {
      if (res) {
        this.categorias = res;
      }
    });
  }

  loadImpresoras = () => {
    this.articuloSrvc.getImpresoras({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe(res => {
      // console.log(res);
      if (res) {
        this.impresoras = res;
      }
    });
  }

  loadBodegas = () => {
    this.bodegaSrvc.get({ sede: (this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((res: Bodega[]) => {
      if (res) {
        this.bodegas = res;
      }
    });
  }

  loadSubCategorias = (idcategoria: number) => {
    this.resetCategoriaGrupo();
    this.categoriaGrupo.categoria = idcategoria;
    this.articuloSrvc.getCategoriasGrupos({ categoria: +idcategoria }).subscribe(res => {
      if (res) {
        this.categoriasGruposPadre = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
        this.categoriasGrupos = JSON.parse(JSON.stringify(this.categoriasGruposPadre));
        // console.log('CG PADRE = ', this.categoriasGruposPadre);
        // console.log('CG = ', this.categoriasGrupos);
      }
    });
  }

  resetCategoriaGrupo = () => {
    this.categoriaGrupo = {
      categoria_grupo: null,
      // categoria: this.categoria?.categoria || null,
      categoria: null,
      categoria_grupo_grupo: null,
      descripcion: null,
      receta: 0,
      impresora: null,
      descuento: 0,
      antecesores: null
    };
  }

  onSubmitSubCategoria = () => {
    this.articuloSrvc.saveCategoriaGrupo(this.categoriaGrupo).subscribe(res => {
      if (res.exito) {
        this.loadSubCategorias(+this.categoriaGrupo.categoria);
        this.resetCategoriaGrupo();
        this.snackBar.open('Grabada con éxito.', 'Sub - Categoría', { duration: 5000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Sub - Categoría', { duration: 5000 });
      }
    });
  }

  setCatGrp = (obj: CategoriaGrupo) => {
    this.categoriaGrupo = obj;
    // console.log(obj);
    // console.log(this.categoriaGrupo);
  }

}
