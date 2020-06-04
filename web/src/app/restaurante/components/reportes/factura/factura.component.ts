import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  public params: any = {};
  public titulo: string = 'Facturas';

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
      if (res) {
        const blob = new Blob([res], { type: 'application/pdf' });
        saveAs(blob, `${this.titulo}.pdf`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }
}
