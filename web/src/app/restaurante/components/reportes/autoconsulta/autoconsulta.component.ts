import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../services/reporte-pdf.service';
import { AutoconsultaService } from '../../../services/autoconsulta.service';
import { Campo } from '../../../interfaces/autoconsulta';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-autoconsulta',
  templateUrl: './autoconsulta.component.html',
  styleUrls: ['./autoconsulta.component.css']
})
export class AutoconsultaComponent implements OnInit {
  public params: any = {campos: [], datos:[]};
  public titulo: string = 'Autoconsulta';
  public campos: Campo[] = [];
  public fechas: Campo[] = [];
  public orden: Campo[] = [];

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private autoconsultaSrvc: AutoconsultaService
  ) { }

  ngOnInit() {
    this.getCampos();
    this.getCampos({por_fecha: 1},2);
    this.getCampos({ordenar_por: 1},3);
  }

  getReporte = () => {
    for (var key in this.params.campos) {
      this.params.datos.push(this.params.campos[key])
    }
    this.autoconsultaSrvc.getReporte(this.params).subscribe(res => {
      if (res) {
        const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        saveAs(blob, `${this.titulo}.xls`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  getCampos = (params: any = {}, tipo:number = 1) => {
    this.autoconsultaSrvc.getCampos(params).subscribe(res => {
      switch (tipo) {
        case 1 : this.campos = res; break;
        case 2 : this.fechas = res; break;
        case 3 : this.orden = res; break;
      }
    });
  }
}
