import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { SedeService } from '../../../../admin/services/sede.service';
import { Bodega } from '../../../interfaces/bodega';
import { Articulo } from '../../../interfaces/articulo';
import { BodegaService } from '../../../services/bodega.service';
import { ArticuloService } from '../../../services/articulo.service';
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
  public articulos: Articulo[] = [];
  public params: any = {};
  public titulo: string = "Kardex";

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private sedeSrvc: SedeService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
  	this.getSede();
  	this.getBodega();
    this.getArticulo();
  }

  getSede = (params: any = {}) => {
    this.sedeSrvc.get(params).subscribe(res => {
      this.sedes = res;
    });
  }

  getArticulo = (params: any= {}) => {
    this.articuloSrvc.getArticulosIngreso(params).subscribe(res => {
      this.articulos = res;
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
