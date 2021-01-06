import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { Ingreso } from '../../../interfaces/ingreso';
import { DetalleIngreso } from '../../../interfaces/detalle-ingreso';
import { IngresoService } from '../../../services/ingreso.service';
import { TipoMovimiento } from '../../../interfaces/tipo-movimiento';
import { TipoMovimientoService } from '../../../services/tipo-movimiento.service';
import { Proveedor } from '../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { Articulo } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { Presentacion } from '../../../../admin/interfaces/presentacion';
import { PresentacionService } from '../../../../admin/services/presentacion.service';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

  @Input() ingreso: Ingreso;
  @Input() saveToDB = true;
  @Output() ingresoSavedEv = new EventEmitter();

  public showIngresoForm = true;
  public showDetalleIngresoForm = true;

  public detallesIngreso: DetalleIngreso[] = [];
  public detalleIngreso: DetalleIngreso;
  public displayedColumns: string[] = ['articulo', 'presentacion', 'cantidad', 'costo_unitario', 'costo_total', 'deleteItem'];
  public dataSource: MatTableDataSource<DetalleIngreso>;
  public tiposMovimiento: TipoMovimiento[] = [];
  public proveedores: Proveedor[] = [];
  public filteredProveedores: Proveedor[] = [];
  public bodegas: Bodega[] = [];
  public articulos: Articulo[] = [];
  public filteredArticulos: Articulo[] = [];
  public presentaciones: Presentacion[] = [];
  public esMovil = false;
  public bloqueoBotones = false;
  public txtArticuloSelected: (Articulo | string) = undefined;
  public txtProveedorSelected: (Proveedor | string) = undefined;

  constructor(
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private ingresoSrvc: IngresoService,
    private proveedorSrvc: ProveedorService,
    private tipoMovimientoSrvc: TipoMovimientoService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService,
    private presentacinSrvc: PresentacionService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetIngreso();
    this.loadTiposMovimiento();
    this.loadProveedores();
    this.loadBodegas();
    this.loadArticulos();
    this.loadPresentaciones();
  }

  loadTiposMovimiento = () => {
    this.tipoMovimientoSrvc.get({ ingreso: 1 }).subscribe(res => {
      if (res) {
        this.tiposMovimiento = res;
      }
    });
  }

  loadProveedores = () => {
    this.proveedorSrvc.get().subscribe(res => {
      if (res) {
        this.proveedores = res;
      }
    });
  }

  loadBodegas = () => {
    this.bodegaSrvc.get({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe(res => {
      if (res) {
        this.bodegas = res;
      }
    });
  }

  loadPresentaciones = () => {
    this.presentacinSrvc.get().subscribe(res => {
      if (res) {
        this.presentaciones = res;
      }
    });
  }

  resetIngreso = () => {
    this.ingreso = {
      ingreso: null, tipo_movimiento: null, fecha: moment().format(GLOBAL.dbDateFormat), bodega: null,
      usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), comentario: null, proveedor: null,
      estatus_movimiento: 1
    };
    this.resetDetalleIngreso();
    this.detallesIngreso = [];
    this.updateTableDataSource();
    this.txtProveedorSelected = undefined;
  }

  onSubmit = () => {
    this.bloqueoBotones = true;
    this.ingresoSrvc.save(this.ingreso).subscribe(res => {
      // console.log(res);
      this.resetIngreso();
      if (res.exito) {
        this.ingreso = res.ingreso;
        this.setProveedor(+this.ingreso.proveedor);
      }
      this.ingresoSavedEv.emit();
      this.bloqueoBotones = false;
    });
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    });
  }

  resetDetalleIngreso = () => {
    this.detalleIngreso = {
      ingreso_detalle: null, ingreso: (!!this.ingreso.ingreso ? this.ingreso.ingreso : null), articulo: null,
      cantidad: null, precio_unitario: null, precio_total: null, presentacion: 0
    };
    this.txtArticuloSelected = undefined;
  }

  loadDetalleIngreso = (idingreso: number = +this.ingreso.ingreso) => {
    this.ingresoSrvc.getDetalle(idingreso, { ingreso: idingreso }).subscribe(res => {
      // console.log(res);
      if (res) {
        this.detallesIngreso = res;
        this.updateTableDataSource();
      }
    });
  }

  getDetalleIngreso = (idingreso: number = +this.ingreso.ingreso, iddetalle: number) => {
    this.ingresoSrvc.getDetalle(idingreso, { ingreso_detalle: iddetalle }).subscribe((res: any[]) => {
      // console.log(res);
      if (res) {
        this.detalleIngreso = {
          ingreso_detalle: res[0].ingreso_detalle,
          ingreso: res[0].ingreso,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          precio_unitario: +res[0].precio_unitario,
          precio_total: +res[0].precio_total,
          presentacion: res[0].presentacion.presentacion
        };
        this.txtArticuloSelected = res[0].articulo;
        this.showDetalleIngresoForm = true;
      }
    });
  }

  onSubmitDetail = () => {
    this.bloqueoBotones = true;
    this.detalleIngreso.ingreso = this.ingreso.ingreso;
    this.detalleIngreso.precio_total = +this.detalleIngreso.cantidad * +this.detalleIngreso.precio_unitario;
    // console.log(this.detalleIngreso);
    this.ingresoSrvc.saveDetalle(this.detalleIngreso).subscribe(res => {
      // console.log(res);
      if (res) {
        this.loadDetalleIngreso();
        this.resetDetalleIngreso();
      }
      this.bloqueoBotones = false;
    });
  }

  addToDetail = () => {
    this.detallesIngreso.push(this.detalleIngreso);
    this.resetDetalleIngreso();
    this.updateTableDataSource();
  }

  removeFromDetail = (idarticulo: number) =>
    this.detallesIngreso.splice(this.detallesIngreso.findIndex(de => +de.articulo === +idarticulo), 1);

  getDescripcionArticulo = (idarticulo: number) => this.articulos.find(art => +art.articulo === +idarticulo).descripcion || '';

  getDescripcionPresentacion = (idpresentacion: number) =>
    this.presentaciones.find(p => +p.presentacion === +idpresentacion).descripcion || '';

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesIngreso);

  eliminarArticulo = (element: DetalleIngreso) => {
    // const idx = this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle);
    this.detallesIngreso.splice(this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle), 1);
    this.updateTableDataSource();
  }

  filtrarArticulos = (value: (Articulo | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredArticulos =
        this.articulos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredArticulos = this.articulos;
    }
  }

  displayArticulo = (art: Articulo) => {
    if (art) {
      this.detalleIngreso.articulo = art.articulo;
      return art.descripcion;
    }
    return undefined;
  }

  filtrarProveedores = (value: (Proveedor | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredProveedores =
        this.proveedores.filter(a => a.razon_social.toLowerCase().includes(filterValue) || a.nit.toLowerCase().includes(filterValue));
    } else {
      this.filteredProveedores = this.proveedores;
    }
  }

  displayProveedor = (p: Proveedor) => {
    if (p) {
      this.ingreso.proveedor = p.proveedor;
      return `(${p.nit}) ${p.razon_social}`;
    }
    return undefined;
  }

  setProveedor = (idProveedor: number) => this.txtProveedorSelected = this.proveedores.find(p => +p.proveedor === idProveedor);

}
