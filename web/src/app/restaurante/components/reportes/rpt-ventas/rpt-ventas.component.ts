import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

@Component({
  selector: 'app-rpt-ventas',
  templateUrl: './rpt-ventas.component.html',
  styleUrls: ['./rpt-ventas.component.css']
})
export class RptVentasComponent implements OnInit {

  public tiposReporte: any[] = [];
  public params: any = {};
  public msgGenerandoReporte: string = null;

  constructor() { }

  ngOnInit() {
    this.resetParams();
    this.loadTiposReporte();
  }

  loadTiposReporte = () => {
    this.tiposReporte = [
      {
        tipo_reporte: 1,
        descripcion: 'Por categoría'
      }
    ];
  }

  resetParams = () => {
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
      case 1 : this.msgGenerandoReporte += 'PANTALLA.'; break;
      case 2 : this.msgGenerandoReporte += 'PDF.'; break;
      case 3 : this.msgGenerandoReporte += 'EXCEL.'; break;
    }
  }
}
