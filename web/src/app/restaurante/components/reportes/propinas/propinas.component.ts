import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-propinas',
  templateUrl: './propinas.component.html',
  styleUrls: ['./propinas.component.css']
})

export class PropinasComponent implements OnInit {
  public params: any = {};
  public titulo: string = 'Propinas';

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.pdfServicio.getReportePropina(this.params).subscribe(res => {
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

}
