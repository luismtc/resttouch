import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { PorCategoria, PorArticulo } from '../../../interfaces/reporte-ventas';
import { ReporteVentasService } from '../../../services/reporte-ventas.service';
import { TipoTurno } from '../../../interfaces/tipo-turno';
import { TipoTurnoService } from '../../../services/tipo-turno.service';
import { saveAs } from 'file-saver';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';

@Component({
  selector: 'app-rpt-ventas',
  templateUrl: './rpt-ventas.component.html',
  styleUrls: ['./rpt-ventas.component.css']
})
export class RptVentasComponent implements OnInit {

  public tiposReporte: any[] = [];
  public params: any = {};
  public paramsToSend: any = {};
  public msgGenerandoReporte: string = null;
  public porCategoria: PorCategoria[] = [];
  public porArticulo: PorArticulo[] = [];
  public tiposTurno: TipoTurno[] = [];
  public tituloCategoria = 'Ventas por categoria';
  public tituloArticulo = 'Ventas por articulo';
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: true, showExcel: false
  };

  constructor(
    private snackBar: MatSnackBar,
    private rptVentasSrvc: ReporteVentasService,
    private tipoTurnoSrvc: TipoTurnoService,
  ) { }

  ngOnInit() {
    this.resetParams();
    this.loadTiposReporte();
    this.loadTiposTurno();
  }

  loadTiposTurno = () => {
    this.tipoTurnoSrvc.get().subscribe(res => {
      if (res) {
        this.tiposTurno = res;
      }
    });
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
    this.cargando = false;
  }

  getReporte = (tipo: number = 1) => {
    this.paramsToSend = JSON.parse(JSON.stringify(this.params));
    this.msgGenerandoReporte = 'GENERANDO REPORTE EN ';
    switch (tipo) {
      case 1 : this.getEnPantalla(); break;
      case 2 : this.getPdf(); break;
      case 3 : this.msgGenerandoReporte += 'EXCEL.'; break;
    }
  }

  getPdf = () => {
    switch (this.params.tipo_reporte) {
      case 1: this.getPorCategoriaPdf(); break;
      case 2: this.getPorArticuloPdf(); break;
    }
  }

  getPorCategoriaPdf = () => {
    this.cargando = true;
    this.cleanParams();
    this.rptVentasSrvc.porCategoriaPdf(this.paramsToSend).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.tituloCategoria}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.tituloCategoria, { duration: 3000 });
      }
    });
  }

  getPorArticuloPdf = () => {
    this.cargando = true;
    this.cleanParams();
    this.rptVentasSrvc.porArticuloPdf(this.paramsToSend).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.tituloArticulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.tituloArticulo, { duration: 3000 });
      }
    });
  }

  getEnPantalla = () => {
    switch (this.params.tipo_reporte) {
      case 1: this.getPorCategoriaEnPantalla(); break;
      case 2: this.getPorArticuloEnPantalla(); break;
    }
  }

  cleanParams = () => delete this.paramsToSend.tipo_reporte;

  getPorCategoriaEnPantalla = () => {
    this.cargando = true;
    this.cleanParams();
    this.rptVentasSrvc.porCategoria(this.paramsToSend).subscribe(res => {
      this.cargando = false;
      if (res) {
        this.porCategoria = res;
      } else {
        this.snackBar.open('No se pudo generar el reporte...', 'Ventas por categoría', { duration: 3000 });
      }
    });
  }

  getPorArticuloEnPantalla = () => {
    this.cargando = true;
    this.cleanParams();
    this.rptVentasSrvc.porArticulo(this.paramsToSend).subscribe(res => {
      this.cargando = false;
      if (res) {
        this.porArticulo = res;
      } else {
        this.snackBar.open('No se pudo generar el reporte...', 'Ventas por artículo', { duration: 3000 });
      }
    });
  }
}
