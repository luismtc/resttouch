import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TranComanda } from '../../classes/tran-comanda';

import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { ConfiguracionService } from '../../../admin/services/configuracion.service';

// import { Cuenta } from '../../interfaces/cuenta';
import { ComandaGetResponse } from '../../interfaces/comanda';
// import { DetalleComanda } from '../../interfaces/detalle-comanda';
// import { Impresora } from '../../../admin/interfaces/impresora';
// import { Categoria } from '../../../wms/interfaces/categoria';
// import { CategoriaGrupoImpresora } from '../../../wms/interfaces/categoria-grupo';
import { Articulo, NodoProducto } from '../../../wms/interfaces/articulo';

import { ComandaService } from '../../services/comanda.service';
import { ArticuloService } from '../../../wms/services/articulo.service';
import { ReportePdfService } from '../../services/reporte-pdf.service';
// import { Cliente } from '../../../admin/interfaces/cliente';

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
  // @Output() closeSideNavEv = new EventEmitter();
  // @Output() mesaSavedEv: EventEmitter<any> = new EventEmitter();
  @ViewChild('txtCodigoBarras') txtCodigoBarras: MatInput;

  public categorias: any[] = [];
  public subCategorias: any[] = [];
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
    protected articuloSrvc: ArticuloService,
    protected bsAccionesCmd: MatBottomSheet
  ) {
    super(dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc, bsAccionesCmd);
  }

  ngOnInit() {
    this.loadArticulosDePOS();
    this.setDatos();
  }

  setDatos = () => {
    if (this.data) {
      if (this.data.mesa) {
        this.mesaEnUso = this.data.mesa;
        this.alIniciar();
        this.setSelectedCuenta(this.mesaEnUso.cuentas[0].numero);
        // console.log('CTA = ', this.cuentaActiva);
        // console.log(this.mesaEnUso);
      }
    }
  }

  cerrar = () => this.dialogRef.close();

  resetArticulos = () => this.articulos = [];
  resetListaSubCategorias = () => this.listaSubCategorias = [];

  loadArticulosDePOS = () => {
    this.articuloSrvc.getArticulosDePOS().subscribe((res: any) => {
      if (res) {
        this.categorias = res.categorias;
        this.subCategorias = res.subcategorias;
        this.articulos = res.articulos;
        this.fullListArticulos = JSON.parse(JSON.stringify(this.articulos));
      }
    });
  }

  loadSubcategorias = (cat: any, subcat: any = null, idx: number = 0) => {
    if (!this.bloqueoBotones) {
      // console.log('CAT = ', cat); console.log('SUB = ', subcat); // return;
      if (!subcat) {
        this.resetListaSubCategorias();
        this.resetArticulos();
        this.listaSubCategorias.push(this.subCategorias.filter(sc => +sc.categoria === +cat.categoria));
      } else {
        if (this.listaSubCategorias.length > 0) {
          this.listaSubCategorias.splice((idx + 1));
        }

        if (subcat.subcategorias) {
          if (subcat.subcategorias.length === 0) {
            this.filterArticulos(+subcat.categoria_grupo);
          } else {
            this.listaSubCategorias.push(subcat.subcategorias);
          }
        }
      }
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
