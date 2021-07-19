import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { AccesoUsuarioService } from '../../../../admin/services/acceso-usuario.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { UsuarioSede } from '../../../../admin/interfaces/acceso';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';
import { saveAs } from 'file-saver';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

@Component({
  selector: 'app-existencias',
  templateUrl: './existencias.component.html',
  styleUrls: ['./existencias.component.css']
})

export class ExistenciasComponent implements OnInit {

  public bodegas: Bodega[] = [];
  public sedes: UsuarioSede[] = [];
  public params: any = {};
  public titulo: string = "Existencias";
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: false, showExcel: true
  };

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private sedeSrvc: AccesoUsuarioService,
    private bodegaSrvc: BodegaService
  ) { }

  ngOnInit() {
    this.params.fecha = moment().format(GLOBAL.dbDateFormat);
  	this.getSede();
  	//this.getBodega();
  }

  getSede = (params: any = {}) => {
    this.sedeSrvc.getSedes(params).subscribe(res => {
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
	        saveAs(blob, `${this.titulo}_${moment().format(GLOBAL.dateTimeFormatRptName)}.pdf`);
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
        saveAs(blob, `${this.titulo}_${moment().format(GLOBAL.dateTimeFormatRptName)}.xls`);
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

  onSedesSelected = (obj: any) => {
    this.getBodega({sede: this.params.sede});
  }

  resetParams = () => {
    this.params = {};
    this.cargando = false;
  }

}
