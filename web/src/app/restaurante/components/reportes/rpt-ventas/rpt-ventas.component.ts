import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { PorCategoria, PorArticulo } from '../../../interfaces/reporte-ventas';
import { ReporteVentasService } from '../../../services/reporte-ventas.service';

@Component({
  selector: 'app-rpt-ventas',
  templateUrl: './rpt-ventas.component.html',
  styleUrls: ['./rpt-ventas.component.css']
})
export class RptVentasComponent implements OnInit {

  public tiposReporte: any[] = [];
  public params: any = {};
  public msgGenerandoReporte: string = null;
  public porCategoria: PorCategoria[] = [];
  public porArticulo: PorArticulo[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private rptVentasSrvc: ReporteVentasService
  ) { }

  ngOnInit() {
    this.resetParams();
    this.loadTiposReporte();
  }

  loadTiposReporte = () => {
    this.tiposReporte = [
      { tipo_reporte: 1, descripcion: 'Por categoría' },
      { tipo_reporte: 2, descripcion: 'Por artículo' }
    ];
  }

  resetParams = () => {
    this.porCategoria = [];
    this.porArticulo = [];
    this.msgGenerandoReporte = null;
    this.params = {
      tipo_reporte: undefined,
      fdel: moment().startOf('week').format(GLOBAL.dbDateFormat),
      fal: moment().endOf('week').format(GLOBAL.dbDateFormat)
    };
  }

  getReporte = (tipo: number = 1) => {
    this.msgGenerandoReporte = 'GENERANDO REPORTE EN ';
    switch (tipo) {
      case 1 : this.getEnPantalla(); break;
      case 2 : this.msgGenerandoReporte += 'PDF.'; break;
      case 3 : this.msgGenerandoReporte += 'EXCEL.'; break;
    }
  }

  getEnPantalla = () => {
    switch (this.params.tipo_reporte) {
      case 1: this.getPorCategoriaEnPantalla(); break;
      case 2: this.getPorArticuloEnPantalla(); break;
    }
  }

  cleanParams = () => delete this.params.tipo_reporte;

  getPorCategoriaEnPantalla = () => {
    this.cleanParams();
    this.rptVentasSrvc.porCategoria(this.params).subscribe(res => {
      if (res) {
        this.porCategoria = res;
      } else {
        this.snackBar.open('No se pudo generar el reporte...', 'Ventas por categoría', { duration: 3000 });
      }
    });
  }

  getPorArticuloEnPantalla = () => {
    this.cleanParams();
    this.rptVentasSrvc.porArticulo(this.params).subscribe(res => {
      if (res) {
        this.porArticulo = res;
      } else {
        this.snackBar.open('No se pudo generar el reporte...', 'Ventas por artículo', { duration: 3000 });
      }
    });
  }
}
