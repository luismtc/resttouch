import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { TipoTurno } from '../../../interfaces/tipo-turno';
import { TipoTurnoService } from '../../../services/tipo-turno.service';
import { saveAs } from 'file-saver';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  public params: any = {};
  public titulo = 'Resumen de caja';
  public tiposTurno: TipoTurno[] = [];
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: false, showExcel: false
  };

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private tipoTurnoSrvc: TipoTurnoService,
  ) { }

  ngOnInit() {
    this.loadTiposTurno();
  }

  loadTiposTurno = () => {
    this.tipoTurnoSrvc.get().subscribe(res => {
      if (res) {
        this.tiposTurno = res;
      }
    });
  }

  resetParams = () => {
    this.params = {};
    this.cargando = false;
  }

  onSubmit() {
    this.cargando = true;
    this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
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
