import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Impresora } from '../../../interfaces/impresora';
import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sub-categoria-producto',
  templateUrl: './sub-categoria-producto.component.html',
  styleUrls: ['./sub-categoria-producto.component.css']
})
export class SubCategoriaProductoComponent implements OnInit, OnDestroy {

  public categoria: Categoria;
  public categorias: Categoria[] = [];
  public impresoras: Impresora[] = [];
  public categoriaGrupo: CategoriaGrupo;
  public categoriasGruposPadre: CategoriaGrupo[] = [];
  public categoriasGrupos: CategoriaGrupo[] = [];
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;
  public bodegas: Bodega[] = [];

  private endSubs = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private articuloSrvc: ArticuloService,
    private bodegaSrvc: BodegaService,
    private ls: LocalstorageService,
    public dialog: MatDialog
  ) {
    this.resetCategoriaGrupo();
  }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadCategorias();
    this.loadImpresoras();
    this.loadBodegas();
  }

  ngOnDestroy(): void {
    this.endSubs.unsubscribe();
  }

  loadCategorias = () => {
    this.endSubs.add(
      this.articuloSrvc.getCategorias({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0), _activos: true }).subscribe((res: Categoria[]) => {
        this.categorias = res;        
      })
    );
  }

  loadImpresoras = () => {
    this.endSubs.add(      
      this.articuloSrvc.getImpresoras({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe(res => {
        this.impresoras = res;
      })
    );
  }

  loadBodegas = () => {
    this.endSubs.add(      
      this.bodegaSrvc.get({ sede: (this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((res: Bodega[]) => {
        this.bodegas = res;      
      })
    );
  }

  loadSubCategorias = (idcategoria: number) => {
    this.resetCategoriaGrupo();
    this.categoriaGrupo.categoria = idcategoria;
    this.endSubs.add(      
      this.articuloSrvc.getCategoriasGrupos({ categoria: +idcategoria, _activos: true }).subscribe(res => {
        this.categoriasGruposPadre = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
        this.categoriasGrupos = JSON.parse(JSON.stringify(this.categoriasGruposPadre));                        
      })
    );
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
      antecesores: null,
      debaja: 0
    };
  }

  onSubmitSubCategoria = () => {
    this.endSubs.add(      
      this.articuloSrvc.saveCategoriaGrupo(this.categoriaGrupo).subscribe(res => {
        if (res.exito) {
          this.loadSubCategorias(+this.categoriaGrupo.categoria);
          this.resetCategoriaGrupo();
          this.snackBar.open('Grabada con éxito.', 'Sub - Categoría', { duration: 5000 });
        } else {
          this.snackBar.open(`ERROR: ${res.mensaje}`, 'Sub - Categoría', { duration: 5000 });
        }
      })
    );
  }

  setCatGrp = (obj: CategoriaGrupo) => {
    this.categoriaGrupo = obj;    
  }

  selectCategoria = (cat: Categoria) => {
    this.categoria = cat;
    this.loadSubCategorias(cat.categoria);
  }

  darDeBaja = () => {
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        this.categoriaGrupo.descripcion,
        `Esto dará de baja la subcategoría y sus artículos en TODAS las listas. Ya no podrá usarlos. ¿Desea continuar?`,
        'Sí',
        'No'
      )
    });

    this.endSubs.add(      
      confirmRef.afterClosed().subscribe((conf: boolean) => {
        if (conf) {
          this.endSubs.add(
            this.articuloSrvc.darDeBajaSubCategoria(+this.categoriaGrupo.categoria_grupo).subscribe(res => {
              if (res.exito && res.subcategoria) {
                this.categoriaGrupo = res.subcategoria;
                this.loadSubCategorias(+this.categoriaGrupo.categoria);
              }
              this.snackBar.open(`${res.exito ? '': 'ERROR:'} ${res.mensaje}`, 'Sub-categoría', { duration: 5000 });
            })
          );
        }
      })
    );    
  }

}
