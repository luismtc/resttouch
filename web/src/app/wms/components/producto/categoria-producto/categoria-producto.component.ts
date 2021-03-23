import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Impresora } from '../../../interfaces/impresora';
import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent implements OnInit {

  @Output() categoriaGrupoSvd = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChangeSubCategoriaEv = new EventEmitter();

  public categoria: Categoria;
  public categorias: Categoria[] = [];
  public categoriaGrupo: CategoriaGrupo;
  public categoriasGruposPadre: CategoriaGrupo[] = [];
  public categoriasGrupos: CategoriaGrupo[] = [];
  public editCategoriaMode = false;
  public editSubCategoriaMode = false;
  public showCategoriasForm = true;
  public esMovil = false;
  public impresoras: Impresora[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetCategoria();
    this.loadCategorias();
    this.loadImpresoras();
  }

  resetCategoria = () => {
    this.categoria = { categoria: null, sede: (this.ls.get(GLOBAL.usrTokenVar).sede || 0), descripcion: null };
    this.resetCategoriaGrupo();
    this.editCategoriaMode = false;
  }

  resetCategoriaGrupo = () => {
    this.categoriaGrupo = {
      categoria_grupo: null,
      categoria: this.categoria.categoria,
      categoria_grupo_grupo: null,
      descripcion: null,
      receta: 0,
      impresora: null,
      descuento: 0,
      antecesores: null
    };
    this.editSubCategoriaMode = false;
  }

  loadCategorias = () => {
    this.articuloSrvc.getCategorias({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe(res => {
      // console.log(res);
      if (res) {
        this.categorias = res;
      }
    });
  }

  onCategoriaSelected = (obj: any) => this.loadSubCategorias(+obj.value.categoria);

  loadSubCategorias = (idcategoria: number) => {
    this.articuloSrvc.getCategoriasGrupos({ categoria: +idcategoria }).subscribe(res => {
      if (res) {
        this.categoriasGruposPadre = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
        this.categoriasGrupos = this.categoriasGruposPadre;
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

  onSubCategoriaPadreSelected = (obj: any) => this.loadSubCategoriasSubcategorias(+obj.value);

  loadSubCategoriasSubcategorias = (idsubcat: number) => {
    this.articuloSrvc.getCategoriasGrupos({ categoria_grupo_grupo: idsubcat }).subscribe(res => {
      if (res) {
        this.categoriasGrupos = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
      }
    });
  }

  onSubmitCategoria = () => {
    this.articuloSrvc.saveCategoria(this.categoria).subscribe(res => {
      if (res.exito) {
        this.editCategoriaMode = false;
        this.resetCategoria();
        this.loadCategorias();
        // this.categoriaGrupoSvd.emit();
        this.snackBar.open('Grabada con éxito.', 'Categoría', { duration: 5000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Categoría', { duration: 5000 });
      }
    })
  }

  onSubCategoriaSelected = (obj: any) => this.onChangeSubCategoriaEv.emit(+obj.value.categoria_grupo);

  onSubmitSubCategoria = () => {
    this.articuloSrvc.saveCategoriaGrupo(this.categoriaGrupo).subscribe(res => {
      if (res.exito) {
        this.resetCategoriaGrupo();
        this.loadSubCategorias(+this.categoria.categoria);
        // this.categoriaGrupoSvd.emit();
        this.snackBar.open('Grabada con éxito.', 'Sub - Categoría', { duration: 5000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Sub - Categoría', { duration: 5000 });
      }
    })
  }
}
