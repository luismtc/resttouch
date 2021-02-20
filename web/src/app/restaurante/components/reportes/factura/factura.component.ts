import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  public params: any = {};
  public titulo = 'Facturas';
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: false, showExcel: true, isPdfDisabled: false, isExcelDisabled: false
  };

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() {
    this.resetParams();
  }

  resetParams = () => {
    this.params = {
      fdel: moment().startOf('month').format(GLOBAL.dbDateFormat),
      fal: moment().format(GLOBAL.dbDateFormat)
    };
    this.cargando = false;
  }

  onSubmit() {
    this.cargando = true;
    this.params._excel = 0;
    this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  excelClick() {
    this.cargando = true;
    this.params._excel = 1;
    this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        saveAs(blob, `${this.titulo}.xls`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  chkDates = () => {
    this.configBotones.isPdfDisabled = (!this.params.fdel || !this.params.fal);
    this.configBotones.isExcelDisabled = (!this.params.fdel || !this.params.fal);
  }
}
