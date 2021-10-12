import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { saveAs } from 'file-saver';

import { BitacoraService } from '../../../services/bitacora.service';

@Component({
  selector: 'app-reporte-bitacora',
  templateUrl: './reporte-bitacora.component.html',
  styleUrls: ['./reporte-bitacora.component.css']
})
export class ReporteBitacoraComponent implements OnInit {

  get configBotones() {
    const deshabilitar = !moment(this.params.fdel).isValid() || !moment(this.params.fal).isValid();
    return {
      showPdf: false, showHtml: false, showExcel: true, isExcelDisabled: deshabilitar
    }
  };

  public params: any = {};
  public cargando = false;
  public tablas: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private bitacoraSrvc: BitacoraService
  ) { }

  ngOnInit(): void {
    this.resetParams();
    this.loadTablas();
  }

  loadTablas = () => this.bitacoraSrvc.getTablas().subscribe(res => this.tablas = res);

  resetParams = () => {
    this.params = {      
      fdel: moment().startOf('month').format(GLOBAL.dbDateFormat),
      fal: moment().format(GLOBAL.dbDateFormat),
      tabla: null,
      comentario: null,
      ultimos: 500,
      usrname: null
    };
    this.cargando = false;
  }

  getReporte = () => {    
    this.cargando = true;    
    this.bitacoraSrvc.reporte(this.params).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        saveAs(blob, `Bitacora_${moment().format(GLOBAL.dateTimeFormatRptName)}.xls`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', 'Bitácora', { duration: 3000 });
      }
    });
  }

}
