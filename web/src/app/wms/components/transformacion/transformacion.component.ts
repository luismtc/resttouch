import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import * as moment from 'moment';

import { FormEgresoComponent } from '../egreso/form-egreso/form-egreso.component';
import { FormIngresoComponent } from '../ingreso/form-ingreso/form-ingreso.component';

import { Transformacion } from '../../interfaces/transformacion';
import { TransformacionService } from '../../services/transformacion.service';
import { Ingreso } from '../../interfaces/ingreso';
import { Egreso } from '../../interfaces/egreso';

@Component({
  selector: 'app-transformacion',
  templateUrl: './transformacion.component.html',
  styleUrls: ['./transformacion.component.css']
})
export class TransformacionComponent implements OnInit {

  @ViewChild('frmEgreso', { static: false }) frmEgreso: FormEgresoComponent;
  @ViewChild('frmIngreso', { static: false }) frmIngreso: FormIngresoComponent;

  public transformacion: Transformacion;
  public ingreso: Ingreso;
  public egreso: Egreso;

  constructor(
    private ls: LocalstorageService,
    private _snackBar: MatSnackBar,
    private transformacionSrvc: TransformacionService
  ) { }

  ngOnInit() {
    this.egreso = {
      egreso: null, tipo_movimiento: null, bodega: null, fecha: moment().format(GLOBAL.dbDateFormat), usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), estatus_movimiento: 1, traslado: 0
    };

    this.ingreso = {
      ingreso: null, tipo_movimiento: null, fecha: moment().format(GLOBAL.dbDateFormat), bodega: null, usuario: (this.ls.get(GLOBAL.usrTokenVar).idusr || 0), comentario: null, proveedor: null
    };
  }

  doSomething() { }

  transformar = () => {
    this.egreso = this.frmEgreso.egreso;
    this.ingreso = this.frmIngreso.ingreso;

    this.transformacion = {
      egreso: {
        tipo_movimiento: this.egreso.tipo_movimiento,
        fecha: this.egreso.fecha,
        proveedor: 0,
        bodega: this.egreso.bodega,
        usuario: this.egreso.usuario,
        estatus_movimiento: this.egreso.estatus_movimiento,
        bodega_destino: this.egreso.bodega_destino,
        tipo_movimiento_destino: this.egreso.tipo_movimiento_destino,
        detalle: []
      },
      ingreso: {
        tipo_movimiento: this.ingreso.tipo_movimiento,
        fecha: this.ingreso.fecha,
        proveedor: this.ingreso.proveedor,
        bodega: this.ingreso.bodega,
        usuario: this.ingreso.usuario,
        bodega_origen: this.ingreso.bodega_origen,
        comentario: this.ingreso.comentario,
        detalle: []
      }
    }

    this.frmEgreso.detallesEgreso.forEach(de => this.transformacion.egreso.detalle.push({
      articulo: de.articulo,
      cantidad: de.cantidad,
      precio_unitario: de.precio_unitario,
      precio_total: de.precio_total
    }));

    this.frmIngreso.detallesIngreso.forEach(di => this.transformacion.ingreso.detalle.push({
      articulo: di.articulo,
      cantidad: di.cantidad,
      precio_unitario: di.precio_unitario,
      precio_total: di.precio_total
    }));

    if (
      !!this.transformacion.egreso && !!this.transformacion.egreso.detalle && this.transformacion.egreso.detalle.length > 0 &&
      !!this.transformacion.ingreso && !!this.transformacion.ingreso.detalle && this.transformacion.ingreso.detalle.length > 0
    ) {
      this.transformacionSrvc.transformar(this.transformacion).subscribe(res => {
        if (res.exito) {
          this.frmEgreso.resetEgreso();
          this.frmEgreso.detallesEgreso = [];
          this.frmIngreso.resetIngreso();
          this.frmIngreso.detallesIngreso = [];
          this._snackBar.open('Transformación generada con éxito...', 'Transformación', { duration: 5000 });
        } else {
          this._snackBar.open(`ERROR: ${res.mensaje}`, 'Transformación', { duration: 3000 });
        }
      });
    } else {
      this._snackBar.open(`Faltan datos necesario. Favor complete los datos e intente de nuevo.`, 'Transformación', { duration: 3000 });      
    }
  }
}