import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

import { OrdenCompra } from '../../../interfaces/orden-compra';
import { DetalleOrdenCompra } from '../../../interfaces/detalle-orden-compra';
import { OrdenCompraService } from '../../../services/orden-compra.service';
import { Proveedor } from '../../../../wms/interfaces/proveedor';
import { ProveedorService } from '../../../../wms/services/proveedor.service';
import { Articulo } from '../../../../wms/interfaces/articulo';
import { ArticuloService } from '../../../../wms/services/articulo.service';
import { TipoMovimiento } from '../../../../wms/interfaces/tipo-movimiento';
import { TipoMovimientoService } from '../../../../wms/services/tipo-movimiento.service';
import { Bodega } from '../../../../wms/interfaces/bodega';
import { BodegaService } from '../../../../wms/services/bodega.service';

@Component({
  selector: 'app-form-orden-compra',
  templateUrl: './form-orden-compra.component.html',
  styleUrls: ['./form-orden-compra.component.css']
})
export class FormOrdenCompraComponent implements OnInit {

  @Input() ordenCompra: OrdenCompra;
  @Output() ordenCompraSavedEv = new EventEmitter();

  public showOrdenCompraForm: boolean = true;
  public showDetalleOrdenCompraForm: boolean = true;

  public detallesOrdenCompra: DetalleOrdenCompra[] = [];
  public detalleOrdenCompra: DetalleOrdenCompra;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'monto', 'total', 'editItem'];
  public dataSource: MatTableDataSource<DetalleOrdenCompra>;
  public proveedores: Proveedor[] = [];
  public articulos: Articulo[] = [];
  public tiposMovimiento: TipoMovimiento[] = [];
  public bodegas: Bodega[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private ordenCompraSrvc: OrdenCompraService,
    private proveedorSrvc: ProveedorService,
    private articuloSrvc: ArticuloService,
    private tipoMovimientoSrvc: TipoMovimientoService,
    private bodegaSrvc: BodegaService
  ) { }

  ngOnInit() {
    this.resetOrdenCompra();
    this.loadProveedores();
    this.loadArticulos();
    this.loadBodegas();
    this.loadTiposMovimiento();
  }

  loadProveedores = () => {
    this.proveedorSrvc.get().subscribe(res => {
      if (res) {
        this.proveedores = res;
      }
    });
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

  resetOrdenCompra = () => {
    this.ordenCompra = {
      orden_compra: null, proveedor: null, usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), notas: null, estatus_movimiento: 1, bodega: null, tipo_movimiento: null
    }
    this.resetDetalleOrdenCompra();
  }

  onSubmit = () => {
    this.ordenCompraSrvc.save(this.ordenCompra).subscribe(res => {
      //console.log(res);
      if (res.exito) {
        this.ordenCompraSavedEv.emit();
        this.resetOrdenCompra();
        this.ordenCompra = {
          orden_compra: +res.compra.orden_compra,
          proveedor: res.compra.proveedor,
          fecha: res.compra.fecha,
          usuario: res.compra.usuario,
          notas: res.compra.notas,
          estatus_movimiento: 1
        }
        this.loadDetalleOrdenCompra(this.ordenCompra.orden_compra);
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

  resetDetalleOrdenCompra = () => this.detalleOrdenCompra = {
    orden_compra_detalle: null, orden_compra: (!!this.ordenCompra.orden_compra ? this.ordenCompra.orden_compra : null), articulo: null, cantidad: null, monto: null, total: null
  };

  loadDetalleOrdenCompra = (idoc: number = +this.ordenCompra.orden_compra) => {
    this.ordenCompraSrvc.getDetalle(idoc, {orden_compra: idoc}).subscribe(res => {
      //console.log(res);
      if (res) {
        this.detallesOrdenCompra = res;
        this.updateTableDataSource();
      }      
    });
  }

  getDetalleOrdenCompra = (idoc: number = +this.ordenCompra.orden_compra, iddetalle: number) => {
    this.ordenCompraSrvc.getDetalle(idoc, {orden_compra_detalle: iddetalle}).subscribe((res: any[]) => {
      //console.log(res);
      if (res) {        
        this.detalleOrdenCompra = {
          orden_compra_detalle: res[0].orden_compra_detalle,
          orden_compra: res[0].orden_compra,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          monto: +res[0].monto,
          total: +res[0].total
        };
        this.showDetalleOrdenCompraForm = true;
      }      
    });
  }

  onSubmitDetail = () => {
    this.detalleOrdenCompra.orden_compra = this.ordenCompra.orden_compra;
    this.ordenCompraSrvc.saveDetalle(this.detalleOrdenCompra).subscribe(res => {
      //console.log(res);
      if (res) {
        this.loadDetalleOrdenCompra();
        this.resetDetalleOrdenCompra();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesOrdenCompra);

  generarIngreso = () => {
    this.ordenCompra.estatus_movimiento = 2;
    this.onSubmit();
  }
}
