import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';

@Component({
  selector: 'app-propinas',
  templateUrl: './propinas.component.html',
  styleUrls: ['./propinas.component.css']
})

export class PropinasComponent implements OnInit {
  public params: any = {};
  public titulo = 'Propinas';
  public configBotones: ConfiguracionBotones = {
    isHtmlDisabled: true, isPdfDisabled: false, isExcelDisabled: true, showHtml: false, showExcel: false, showPdf: true
  };
  public cargando = false;

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() {
  }

  resetParams = () => {
    this.params = {};
    this.cargando = false;
  }

  onSubmit() {
    this.cargando = true;
    this.pdfServicio.getReportePropina(this.params).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

}
