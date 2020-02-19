import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { Egreso } from '../../../interfaces/egreso';
import { DetalleEgreso } from '../../../interfaces/detalle-egreso';
import { EgresoService } from '../../../services/egreso.service';
import { TipoMovimiento } from '../../../interfaces/tipo-movimiento';
import { TipoMovimientoService } from '../../../services/tipo-movimiento.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { Proveedor } from '../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';
import { Articulo } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-form-egreso',
  templateUrl: './form-egreso.component.html',
  styleUrls: ['./form-egreso.component.css']
})
export class FormEgresoComponent implements OnInit {

  @Input() egreso: Egreso;
  @Output() egresoSavedEv = new EventEmitter();

  public showEgresoForm: boolean = true;
  public showDetalleEgresoForm: boolean = true;

  public detallesEgreso: DetalleEgreso[] = [];
  public detalleEgreso: DetalleEgreso;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'precio_unitario', 'precio_total', 'editItem'];
  public dataSource: MatTableDataSource<DetalleEgreso>;
  public tiposMovimiento: TipoMovimiento[] = [];
  public bodegas: Bodega[] = [];
  public articulos: Articulo[] = [];
  public proveedores: Proveedor[] = [];
  
  constructor(
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private egresoSrvc: EgresoService,
    private tipoMovimientoSrvc: TipoMovimientoService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService,
    private proveedorSrvc: ProveedorService,
  ) { }

  ngOnInit() {
    this.resetEgreso();
    this.loadTiposMovimiento();
    this.loadBodegas();
    this.loadArticulos();
    this.loadProveedores();
  }

  loadTiposMovimiento = () => {
    this.tipoMovimientoSrvc.get().subscribe(res => {
      if (res) {
        this.tiposMovimiento = res;
      }
    });
  }

  loadBodegas = () => {
    this.bodegaSrvc.get().subscribe(res => {
      if (res) {
        this.bodegas = res;
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

  resetEgreso = () => {
    this.egreso = { 
      egreso: null, tipo_movimiento: null, bodega: null, fecha: moment().format(GLOBAL.dbDateFormat), usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), estatus_movimiento: 1, traslado: 0
    };
    this.resetDetalleEgreso();
  }

  onSubmit = () => {
    this.egresoSrvc.save(this.egreso).subscribe(res => {
      if (res.exito) {
        this.egresoSavedEv.emit();
        this.resetEgreso();
        this.egreso = {
          egreso: res.egreso.egreso,
          tipo_movimiento: res.egreso.tipo_movimiento,
          fecha: res.egreso.fecha,
          bodega: res.egreso.bodega,
          creacion: res.egreso.creacion,
          usuario: res.egreso.usuario,
          estatus_movimiento: res.egreso.estatus_movimiento,
          traslado: res.egreso.traslado
        };
        this.loadDetalleEgreso(this.egreso.egreso);
      }
    });
  }

  confirmarEgreso = () => {
    this.egreso.estatus_movimiento = 2;
    this.onSubmit();
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    });
  }

  resetDetalleEgreso = () => this.detalleEgreso = { 
    egreso_detalle: null, egreso: (!!this.egreso.egreso ? this.egreso.egreso : null), articulo: null, cantidad: null, precio_unitario: null, precio_total: null 
  };

  loadDetalleEgreso = (idegreso: number = +this.egreso.egreso) => {
    this.egresoSrvc.getDetalle(idegreso, {egreso: idegreso}).subscribe(res => {
      //console.log(res);
      if (res) {
        this.detallesEgreso = res;
        this.updateTableDataSource();
      }      
    });
  }

  getDetalleEgreso = (idegreso: number = +this.egreso.egreso, iddetalle: number) => {
    this.egresoSrvc.getDetalle(idegreso, {egreso_detalle: iddetalle}).subscribe((res: any[]) => {
      //console.log(res);
      if (res) {        
        this.detalleEgreso = {
          egreso_detalle: res[0].egreso_detalle,
          egreso: res[0].egreso,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          precio_unitario: +res[0].precio_unitario,
          precio_total: +res[0].precio_total
        };
        this.showDetalleEgresoForm = true;
      }      
    });
  }

  onSubmitDetail = () => {
    this.detalleEgreso.egreso = this.egreso.egreso;
    //console.log(this.detalleEgreso);
    this.egresoSrvc.saveDetalle(this.detalleEgreso).subscribe(res => {
      //console.log(res);
      if (res) {
        this.loadDetalleEgreso();
        this.resetDetalleEgreso();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesEgreso);

}