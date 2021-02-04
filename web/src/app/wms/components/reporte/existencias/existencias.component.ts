import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { SedeService } from '../../../../admin/services/sede.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { Sede } from '../../../../admin/interfaces/sede';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css']
})

export class ExistenciasComponent implements OnInit {

  public bodegas: Bodega[] = [];
  public sedes: Sede[] = [];
  public params: any = {};
  public titulo: string = "Existencias";
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: false, showExcel: true
  };

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private sedeSrvc: SedeService,
    private bodegaSrvc: BodegaService
  ) { }

  ngOnInit() {
  	this.getSede();
  	this.getBodega();
  }

  getSede = (params: any = {}) => {
    this.sedeSrvc.get(params).subscribe(res => {
      this.sedes = res;
    });
  }

  getBodega = (params: any = {}) => {
    this.bodegaSrvc.get(params).subscribe(res => {
      this.bodegas = res;
    });
  }

  onSubmit() {
    this.params._excel = 0;
    this.cargando = true;
  	this.pdfServicio.getReporteExistencia(this.params).subscribe(res => {
      this.cargando = false;
  		if (res) {
	        const blob = new Blob([res], { type: 'application/pdf' });
	        saveAs(blob, `${this.titulo}.pdf`);
	      } else {
	        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
	      }
  	});
  }

  excelClick = () => {
    this.params._excel = 1;
    this.cargando = true;
    this.pdfServicio.getReporteExistencia(this.params).subscribe(res => {
      this.cargando = false;
      if (res) {
        const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        saveAs(blob, `${this.titulo}.xls`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  resetParams = () => {
    this.params = {};
    this.cargando = false;
  }

}
