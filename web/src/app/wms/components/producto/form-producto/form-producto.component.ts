import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import { saveAs } from 'file-saver';

import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { Articulo } from '../../../interfaces/articulo';
import { ArticuloDetalle } from '../../../interfaces/articulo-detalle';
import { ArticuloService } from '../../../services/articulo.service';
import { Medida } from '../../../../admin/interfaces/medida';
import { MedidaService } from '../../../../admin/services/medida.service';
import { Presentacion } from '../../../../admin/interfaces/presentacion';
import { PresentacionService } from '../../../../admin/services/presentacion.service';
import { ImpuestoEspecial } from '../../../../admin/interfaces/impuesto-especial';
import { ImpuestoEspecialService } from '../../../../admin/services/impuesto-especial.service';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ReplicarASedesDialogComponent } from '../replicar-a-sedes-dialog/replicar-a-sedes-dialog.component';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  @Input() articulo: Articulo;
  @Input() categoria: Categoria = null;
  @Input() subcategoria: CategoriaGrupo = null;
  @Output() articuloSvd = new EventEmitter();
  private titulo = 'Receta';
  public showArticuloForm = true;
  public medidas: Medida[] = [];
  public medidasFull: Medida[] = [];
  public presentaciones: Presentacion[] = [];
  public articulos: Articulo[] = [];
  public filteredArticulos: Articulo[] = [];
  public recetas: ArticuloDetalle[] = [];
  public receta: ArticuloDetalle;
  public impuestosEspeciales: ImpuestoEspecial[] = [];
  public showDetalleForm = true;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'medida', 'precio', 'editItem'];
  public dataSource: MatTableDataSource<ArticuloDetalle>;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;
  public txtArticuloSelected: (Articulo | string) = undefined;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private articuloSrvc: ArticuloService,
    private medidaSrvc: MedidaService,
    private presentacionSrvc: PresentacionService,
    private impuestoEspecialSrvc: ImpuestoEspecialService,
    private rptSrvc: ReportePdfService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetArticulo();
    this.loadMedidas();
    this.loadArticulos();
    this.loadPresentaciones();
    this.loadImpuestosEspeciales();
  }

  resetArticulo = () => {
    this.articulo = {
      articulo: null,
      categoria_grupo: this.articulo.categoria_grupo,
      presentacion: null,
      descripcion: null,
      precio: null,
      bien_servicio: 'B',
      produccion: 0,
      mostrar_pos: 1,
      presentacion_reporte: null,
      impuesto_especial: null,
      shopify_id: null,
      multiple: 0,
      cantidad_minima: 1,
      cantidad_maxima: 1,
      combo: 0,
      rendimiento: 0.00,
      mostrar_inventario: 0
    };
    this.recetas = [];
    this.resetReceta();
  }

  setArticuloCategoriaGrupo = (idcatgrp: number) => this.articulo.categoria_grupo = +idcatgrp;

  onSubmit = () => {
    // console.log(this.articulo);
    this.articuloSrvc.saveArticulo(this.articulo).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.articuloSvd.emit();
        this.resetArticulo();
        this.articulo = res.articulo;
        this.loadRecetas(this.articulo.articulo);
        this.loadArticulos();
        this.snackBar.open('Artículo guardado con éxito...', 'Artículo', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Articulo', { duration: 3000 });
      }
    });
  }

  loadMedidas = () => {
    this.medidaSrvc.get().subscribe(res => {
      if (res) {
        this.medidasFull = res;
      }
    });
  }

  loadPresentaciones = () => {
    this.presentacionSrvc.get().subscribe(res => {
      if (res) {
        this.presentaciones = res;
      }
    });
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    });
  }

  loadImpuestosEspeciales = () => {
    this.impuestoEspecialSrvc.get().subscribe(res => {
      if (res) {
        this.impuestosEspeciales = res;
      }
    });
  }

  displayArticulo = (art: Articulo) => {
    if (art) {
      this.receta.articulo = art.articulo;
      this.filtrarMedidas(art);
      return art.descripcion;
    }
    this.medidas = [];
    return undefined;
  }

  filtrarMedidas = (art: Articulo) => {
    const pres: Presentacion = this.presentaciones.find(p => +p.presentacion === +art.presentacion_reporte);
    if (pres) {
      this.medidas = this.medidasFull.filter(m => +m.medida === +pres.medida.medida);
    } else {
      this.medidas = [];
    }
  }

  filtrarArticulos = (value: (Articulo | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredArticulos = this.articulos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredArticulos = JSON.parse(JSON.stringify(this.articulos));
    }
    // console.log(this.filteredArticulos);
  }

  resetReceta = () => {
    this.receta = {
      articulo_detalle: null,
      receta: (this.articulo.articulo || 0),
      racionable: 0,
      articulo: null,
      cantidad: 1.00,
      medida: null,
      anulado: 0,
      precio_extra: 0,
      precio: 0
    };
    this.txtArticuloSelected = undefined;
    // this.recetas = [];
    this.updateTableDataSource();
  }

  loadRecetas = (idarticulo: number = +this.articulo.articulo) => {
    this.articuloSrvc.getArticuloDetalle(+idarticulo, { receta: +idarticulo }).subscribe(res => {
      if (res) {
        this.recetas = res;
        this.updateTableDataSource();
      }
    });
  }

  getReceta = (idarticulo: number = +this.articulo.articulo, iddetalle: number) => {
    this.articuloSrvc.getArticuloDetalle(idarticulo, { articulo_detalle: iddetalle }).subscribe((res: any[]) => {
      // console.log(res);
      if (res) {
        this.receta = {
          articulo_detalle: res[0].articulo_detalle,
          receta: res[0].receta.articulo,
          racionable: res[0].articulo.articulo,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          medida: res[0].medida.medida,
          anulado: res[0].anulado || 0,
          precio_extra: res[0].precio_extra || 0,
          precio: +res[0].precio
        };
        this.txtArticuloSelected = res[0].articulo;
        this.showDetalleForm = true;
      }
    });
  }

  eliminaReceta = (item: any) => {
    // console.log('ITEM A ELIMINAR = ', item);
    const confirmRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        'Eliminar detalle',
        `¿Desea eliminar '${item.cantidad} de ${item.articulo.descripcion}' de la receta?`,
        'Sí',
        'No'
      )
    });

    confirmRef.afterClosed().subscribe((conf: boolean) => {
      if (conf) {
        item.anulado = 1;
        item.articulo = item.articulo.articulo;
        this.articuloSrvc.saveArticuloDetalle(item).subscribe(res => {
          // console.log(res);
          this.loadRecetas();
          this.resetReceta();
        });
      }
    });
  }

  onSubmitDetail = () => {
    this.receta.receta = this.articulo.articulo;
    // console.log(this.articulo);
    // console.log(this.receta); return;
    this.articuloSrvc.saveArticuloDetalle(this.receta).subscribe(res => {
      // console.log(res);
      if (res) {
        if (res.exito) {
          this.loadRecetas();
          this.resetReceta();
        } else {
          this.snackBar.open(`ERROR: ${res.mensaje}`, 'Artículo', { duration: 3000 });
        }
      }
    });
  }

  imprimirReceta = () => {
    this.rptSrvc.imprimirReceta(this.articulo.articulo).subscribe(res => {
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}_${this.articulo.descripcion}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  updateTableDataSource = () => {
    this.dataSource = new MatTableDataSource(this.recetas);
    this.dataSource.filterPredicate = (data: ArticuloDetalle, filter: string) => {
      return data.articulo.descripcion.toLowerCase().includes(filter);
    };
  }

  replicarASedes = () => {
    const replicarASedesRef = this.dialog.open(ReplicarASedesDialogComponent, {
      width: '50%',
      data: { articulo: this.articulo }
    });

    replicarASedesRef.afterClosed().subscribe((conf: boolean) => {
      if (conf) {
      }
    });
  }

  applyFilter = (filter: string) => {
    this.dataSource.filter = filter.toLocaleLowerCase();
  }
  
}
