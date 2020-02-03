import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

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

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.css']
})
export class CategoriaProductoComponent implements OnInit {

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
      receta: null,
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
    this.categoriasGruposPadre = SUB_CATEGORIAS.filter(sc => sc.categoria == idcategoria);
    this.categoriasGrupos = this.categoriasGruposPadre;
  }

  onSubCategoriaPadreSelected = (obj: any) => this.loadSubCategoriasSubcategorias(+obj.value);

  loadSubCategoriasSubcategorias = (idsubcat: number) => {
    console.log(`IDSUBCAT = ${idsubcat}`);
    this.categoriasGrupos = this.categoriasGruposPadre.filter(sc => sc.categoria_grupo_grupo == idsubcat)
  }

  onSubmitCategoria = () => {
    this.articuloSrvc.saveCategoria(this.categoria).subscribe(res => {
      if (res.exito) {
        this.editCategoriaMode = false;
        this.resetCategoria();
        this.loadCategorias();
        this._snackBar.open('Grabada con éxito.', 'Categoría', { duration: 5000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Categoría', { duration: 5000 });
      }
    })
  }

  onSubmitSubCategoria = () => {
    console.log(this.categoriaGrupo);
  }
}
