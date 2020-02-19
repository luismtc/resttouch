import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

/*
const SUB_CATEGORIAS: CategoriaGrupo[] = [
  {
    categoria_grupo: 1, categoria: 1, categoria_grupo_grupo: null, descripcion: 'Coca-cola', receta: 0, antecesores: null
  },
  {
    categoria_grupo: 2, categoria: 1, categoria_grupo_grupo: null, descripcion: 'Alcohólicas', receta: 0, antecesores: null
  },
  {
    categoria_grupo: 3, categoria: 2, categoria_grupo_grupo: null, descripcion: 'Pastas', receta: 0, antecesores: null
  },
  {
    categoria_grupo: 4, categoria: 2, categoria_grupo_grupo: 3, descripcion: 'Alfredo', receta: 0, antecesores: 'Pastas'
  },
  {
    categoria_grupo: 5, categoria: 1, categoria_grupo_grupo: 2, descripcion: 'Zacapa', receta: 0, antecesores: 'Alcohólicas'
  },
];
*/

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent implements OnInit {

  @Output() categoriaGrupoSvd = new EventEmitter();
  @Output() onChangeSubCategoriaEv = new EventEmitter();
  
  public categoria: Categoria;
  public categorias: Categoria[] = [];
  public categoriaGrupo: CategoriaGrupo;
  public categoriasGruposPadre: CategoriaGrupo[] = [];
  public categoriasGrupos: CategoriaGrupo[] = [];
  public editCategoriaMode = false;
  public editSubCategoriaMode = false;
  public showCategoriasForm = false;

  constructor(
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
    this.resetCategoria();
    this.loadCategorias();
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
      antecesores: null
    };
    this.editSubCategoriaMode = false;
  }

  loadCategorias = () => {
    this.articuloSrvc.getCategorias().subscribe(res => {
      //console.log(res);
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
        this.categoriaGrupoSvd.emit();
        this._snackBar.open('Grabada con éxito.', 'Categoría', { duration: 5000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Categoría', { duration: 5000 });
      }
    })
  }

  onSubCategoriaSelected = (obj: any) => this.onChangeSubCategoriaEv.emit(+obj.value.categoria_grupo);

  onSubmitSubCategoria = () => {
    this.articuloSrvc.saveCategoriaGrupo(this.categoriaGrupo).subscribe(res => {
      if (res.exito) {
        this.resetCategoriaGrupo();
        this.loadSubCategorias(+this.categoria.categoria);
        this.categoriaGrupoSvd.emit();
        this._snackBar.open('Grabada con éxito.', 'Sub - Categoría', { duration: 5000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Sub - Categoría', { duration: 5000 });
      }
    })
  }
}
