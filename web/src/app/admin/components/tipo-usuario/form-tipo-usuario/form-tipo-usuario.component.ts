import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsuarioTipo } from '../../../interfaces/usuario-tipo';
import { UsuarioTipoCategoriaGrupo, UsuarioTipoCGrupo } from '../../../interfaces/usuario-tipo-categoria-grupo';
import { TipoUsuarioService } from '../../../services/tipo-usuario.service';

import { Jerarquia } from '../../../interfaces/jerarquia';
import { JerarquiaService } from '../../../services/jerarquia.service';

import { Categoria } from '../../../../wms/interfaces/categoria';
import { CategoriaGrupoResponse } from '../../../../wms/interfaces/categoria-grupo';
import { ArticuloService } from '../../../../wms/services/articulo.service';

@Component({
  selector: 'app-form-tipo-usuario',
  templateUrl: './form-tipo-usuario.component.html',
  styleUrls: ['./form-tipo-usuario.component.css']
})
export class FormTipoUsuarioComponent implements OnInit {

  @Input() usuarioTipo: UsuarioTipo;
  @Output() usuarioTipoSavedEv = new EventEmitter();
  public jerarquias: Jerarquia[] = [];
  public utcgrupos: UsuarioTipoCGrupo[] = [];
  public utcgrupo: UsuarioTipoCategoriaGrupo;
  public cgrupos: CategoriaGrupoResponse[] = [];
  public filteredCgrupos: CategoriaGrupoResponse[] = [];
  public categorias: Categoria[] = [];
  public filteredCategorias: Categoria[] = [];
  public categoria: (Categoria | string) = undefined;
  public txtSubCat: (CategoriaGrupoResponse | string) = undefined;

  constructor(
    private snackBar: MatSnackBar,
    private tipoUsuarioSrvc: TipoUsuarioService,
    private jerarquiaSrvc: JerarquiaService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
    this.loadJerarquia();
    this.loadCategorias();
    this.resetTipoUsuarioCGrupo();
  }

  loadJerarquia = () => {
    this.jerarquiaSrvc.get().subscribe(res => {
      this.jerarquias = res;
    });
  }

  resetTipoUsuario = () => {
    this.usuarioTipo = {
      usuario_tipo: null, descripcion: null, jerarquia: null
    };
    this.resetTipoUsuarioCGrupo();
  }

  onSubmit = () => {
    this.tipoUsuarioSrvc.save(this.usuarioTipo).subscribe(res => {
      if (res.exito) {
        this.usuarioTipoSavedEv.emit();
        this.resetTipoUsuario();
        this.snackBar.open('Tipo agregado...', 'Tipo Usuario', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Tipo Usuario', { duration: 3000 });
      }
    });
  }

  loadUTCGrupos = (idUsuarioTipo: number = null) => {
    this.tipoUsuarioSrvc.getUsuarioTipoCGrupo({ usuario_tipo: (idUsuarioTipo || this.usuarioTipo.usuario_tipo) }).subscribe(res => {
      if (res) {
        this.utcgrupos = res;
      }
    });
  }
  loadCategorias = () => {
    this.articuloSrvc.getCategorias().subscribe(res => {
      if (res) {
        this.categorias = res;
      }
    });
  }

  loadCatGrp = (idCategoria: number) => {
    this.articuloSrvc.getCategoriasGrupos({ categoria: idCategoria }).subscribe(res => {
      this.cgrupos = res;
    });
  }

  onSubmitUTCGrupo = () => {
    this.utcgrupo.usuario_tipo = this.usuarioTipo.usuario_tipo;
    this.tipoUsuarioSrvc.saveUsuarioTipoCGrupo(this.utcgrupo).subscribe(res => {
      if (res.exito) {
        this.resetTipoUsuarioCGrupo();
        this.loadUTCGrupos(this.utcgrupo.usuario_tipo);
        this.snackBar.open(res.mensaje, 'Categoria grupo', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Categoria grupo', { duration: 7000 });
      }
    });
  }

  resetTipoUsuarioCGrupo = () => {
    this.categoria = undefined;
    this.txtSubCat = undefined;
    this.cgrupos = [];
    this.filteredCgrupos = this.cgrupos;
    this.utcgrupo = {
      usuario_tipo_categoria_grupo: null, usuario_tipo: null, categoria_grupo: null, debaja: 0
    };
  }

  toggleDeBaja = (obj: UsuarioTipoCGrupo, db = 0) => {
    this.utcgrupo = {
      usuario_tipo_categoria_grupo: obj.usuario_tipo_categoria_grupo,
      usuario_tipo: obj.usuario_tipo.usuario_tipo,
      categoria_grupo: obj.categoria_grupo.categoria_grupo,
      debaja: db
    };
    this.onSubmitUTCGrupo();
  }

  filtrarCategorias = (value: (Categoria | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredCategorias =
        this.categorias.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredCategorias = this.categorias;
    }
  }

  displayCategoria = (c: Categoria) => {
    if (c) {
      this.categoria = c;
      this.loadCatGrp(+c.categoria);
      return c.descripcion;
    }
    return undefined;
  }

  filtrarSubCategorias = (value: (CategoriaGrupoResponse | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredCgrupos =
        this.cgrupos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredCgrupos = this.cgrupos;
    }
  }

  displaySubCategoria = (c: CategoriaGrupoResponse) => {
    if (c) {
      this.utcgrupo.categoria_grupo = c.categoria_grupo;
      return c.descripcion;
    }
    return undefined;
  }

}
