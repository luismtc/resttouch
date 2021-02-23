import { Component, OnInit, Inject, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';
import { TranComanda } from '../../classes/tran-comanda';

import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { ConfiguracionService } from '../../../admin/services/configuracion.service';

import { Cuenta } from '../../interfaces/cuenta';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { DetalleComanda } from '../../interfaces/detalle-comanda';
import { Impresora } from '../../../admin/interfaces/impresora';
import { Categoria } from '../../../wms/interfaces/categoria';
import { CategoriaGrupoImpresora } from '../../../wms/interfaces/categoria-grupo';
import { ArbolArticulos, Articulo, NodoProducto } from '../../../wms/interfaces/articulo';

import { ComandaService } from '../../services/comanda.service';
import { ArticuloService } from '../../../wms/services/articulo.service';
import { ReportePdfService } from '../../services/reporte-pdf.service';
import { Cliente } from '../../../admin/interfaces/cliente';

interface IDatosTranComanda {
  mesa: ComandaGetResponse;
}

@Component({
  selector: 'app-tran-comanda-alt',
  templateUrl: './tran-comanda-alt.component.html',
  styleUrls: ['./tran-comanda-alt.component.css']
})
export class TranComandaAltComponent extends TranComanda implements OnInit {

  // @Input() mesaEnUso: ComandaGetResponse;
  // @Input() clientePedido: Cliente = null;
  @Output() closeSideNavEv = new EventEmitter();
  @Output() mesaSavedEv: EventEmitter<any> = new EventEmitter();
  @ViewChild('txtCodigoBarras') txtCodigoBarras: MatInput;

  // public categorias: Categoria[] = [];
  public subCategorias: CategoriaGrupoImpresora[] = [];
  public listaSubCategorias: any[] = [];
  public articulos: Articulo[] = [];
  public fullListArticulos: Articulo[] = [];

  constructor(
    public dialogRef: MatDialogRef<TranComandaAltComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDatosTranComanda,
    public dialog: MatDialog,
    protected snackBar: MatSnackBar,
    public comandaSrvc: ComandaService,
    protected socket: Socket,
    protected ls: LocalstorageService,
    protected pdfServicio: ReportePdfService,
    protected configSrvc: ConfiguracionService,
    protected articuloSrvc: ArticuloService
  ) {
    super(dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc);
  }

  ngOnInit() {
    this.alIniciar();
    this.loadCategorias();
    this.loadArticulos();
    this.setDatos();
  }

  setDatos = () => {
    if (this.data) {
      if (this.data.mesa) {
        this.mesaEnUso = this.data.mesa;
        this.setSelectedCuenta(this.mesaEnUso.cuentas[0].numero);
        // console.log('DATA.MESA = ', this.data.mesa);
        // console.log('MESA EN USO', this.mesaEnUso);
      }
    }
  }

  cerrar = () => this.dialogRef.close();

  resetArticulos = () => this.articulos = [];
  resetListaSubCategorias = () => this.listaSubCategorias = [];

  loadCategorias = () => this.articuloSrvc.getCategorias().subscribe((res: Categoria[]) => this.categorias = res);

  loadSubcategorias = (cat: any, subcat: CategoriaGrupoImpresora = null, idx: number = 0) => {
    if (!this.bloqueoBotones) {
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
          this.filterArticulos(+subcat.categoria_grupo);
        }
      });
    }
  }

  loadArticulos = (idsubcategoria: number = null) => {
    if (!this.bloqueoBotones) {
      const fltr = {
        mostrar_pos: 1,
        categoria_grupo: null
      };

      if (idsubcategoria) {
        fltr.categoria_grupo = idsubcategoria;
      } else {
        delete fltr.categoria_grupo;
      }

      this.articuloSrvc.getArticulos(fltr).subscribe((res: Articulo[]) => {
        // console.log(res);
        this.articulos = res;
        if (!idsubcategoria) {
          this.fullListArticulos = JSON.parse(JSON.stringify(this.articulos));
        }
      });
    }
  }

  filterArticulos = (idsubcat: number = null) => {
    if (!this.bloqueoBotones) {
      if (idsubcat) {
        this.articulos = this.fullListArticulos.filter(a => +a.categoria_grupo === +idsubcat);
      } else {
        this.articulos = this.fullListArticulos;
      }
    }
  }

  addArticulo = (art: Articulo) => {
    if (!this.bloqueoBotones) {
      const obj: NodoProducto = {
        id: +art.articulo,
        nombre: art.descripcion,
        precio: +art.precio,
        impresora: art.impresora,
        presentacion: art.presentacion,
        codigo: art.codigo,
        combo: art.combo,
        multiple: art.multiple
      };
      // console.log(obj); return;
      // console.log(this.cuentaActiva); return;
      this.agregarProductos(obj);
    }
  }
}
