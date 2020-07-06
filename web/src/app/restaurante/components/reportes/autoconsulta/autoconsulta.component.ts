import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-autoconsulta',
  templateUrl: './autoconsulta.component.html',
  styleUrls: ['./autoconsulta.component.css']
})
export class AutoconsultaComponent implements OnInit {
  public params: any = {};
  public titulo: string = 'Autoconsulta';

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

}
