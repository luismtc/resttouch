import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  public params: any = {};
  public titulo: string = 'Resumen de caja';

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() { }

  onSubmit () {
    this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
      if (res) {
        var blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

}
