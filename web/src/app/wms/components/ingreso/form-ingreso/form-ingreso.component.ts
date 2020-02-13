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

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

  @Input() ingreso: Ingreso;
  @Output() ingresoSavedEv = new EventEmitter();

  public showIngresoForm: boolean = true;
  public showDetalleIngresoForm: boolean = true;

  public detallesIngreso: DetalleIngreso[] = [];
  public detalleIngreso: DetalleIngreso;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'costo_unitario', 'costo_total', 'deleteItem'];
  public dataSource: MatTableDataSource<DetalleIngreso>;
  public tiposMovimiento: TipoMovimiento[] = [];
  public proveedores: Proveedor[] = [];  
  public bodegas: Bodega[] = [];
  public articulos: Articulo[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private ingresoSrvc: IngresoService,
    private proveedorSrvc: ProveedorService,
    private tipoMovimientoSrvc: TipoMovimientoService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
    this.resetIngreso();
    this.loadTiposMovimiento();
    this.loadProveedores();
    this.loadBodegas();
    this.loadArticulos();
  }

  loadTiposMovimiento = () => {
    this.tipoMovimientoSrvc.get().subscribe(res => {
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
    this.bodegaSrvc.get().subscribe(res => {
      if (res) {
        this.bodegas = res;
      }
    });
  }

  resetIngreso = () => {
    this.ingreso = { 
      ingreso: null, tipo_movimiento: null, fecha: moment().format(GLOBAL.dbDateFormat), bodega: null, usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), comentario: null, proveedor: null
    };
    this.resetDetalleIngreso();
  }

  onSubmit = () => {
    this.ingresoSrvc.save(this.ingreso).subscribe(res => {
      //console.log(res);
      this.ingresoSavedEv.emit();
      this.resetIngreso();
    });
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    });
  }

  resetDetalleIngreso = () => this.detalleIngreso = { 
    ingreso_detalle: null, ingreso: (!!this.ingreso.ingreso ? this.ingreso.ingreso : null), articulo: null, cantidad: null, precio_unitario: null, precio_total: null 
  };

  loadDetalleIngreso = (idingreso: number = +this.ingreso.ingreso) => {
    this.ingresoSrvc.getDetalle(idingreso, {ingreso: idingreso}).subscribe(res => {
      //console.log(res);
      if (res) {
        this.detallesIngreso = res;
        this.updateTableDataSource();
      }      
    });
  }

  getDetalleIngreso = (idingreso: number = +this.ingreso.ingreso, iddetalle: number) => {
    this.ingresoSrvc.getDetalle(idingreso, {ingreso_detalle: iddetalle}).subscribe((res: any[]) => {
      //console.log(res);
      if (res) {        
        this.detalleIngreso = {
          ingreso_detalle: res[0].ingreso_detalle,
          ingreso: res[0].ingreso,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          precio_unitario: +res[0].precio_unitario,
          precio_total: +res[0].precio_total
        };
        this.showDetalleIngresoForm = true;
      }      
    });
  }

  onSubmitDetail = () => {
    this.detalleIngreso.ingreso = this.ingreso.ingreso;
    //console.log(this.detalleIngreso);
    this.ingresoSrvc.saveDetalle(this.detalleIngreso).subscribe(res => {
      //console.log(res);
      if (res) {
        this.loadDetalleIngreso();
        this.resetDetalleIngreso();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesIngreso);

  eliminarArticulo = (element: DetalleIngreso) => {
    //const idx = this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle);
    this.detallesIngreso.splice(this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle), 1);  
    this.updateTableDataSource();
  }
}
