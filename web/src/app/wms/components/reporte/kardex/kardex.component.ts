import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { SedeService } from '../../../../admin/services/sede.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { Sede } from '../../../../admin/interfaces/sede';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  public bodegas: Bodega[] = [];
  public sedes: Sede[] = [];
  public params: any = {};
  public titulo: string = "Kardex";

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
  	this.pdfServicio.getReporteKardex(this.params).subscribe(res => {
  		if (res) {
	        const blob = new Blob([res], { type: 'application/pdf' });
	        saveAs(blob, `${this.titulo}.pdf`);
	      } else {
	        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
	      }
  	});
  }

}
