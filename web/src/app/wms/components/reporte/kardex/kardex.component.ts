import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { AccesoUsuarioService } from '../../../../admin/services/acceso-usuario.service';
import { Bodega } from '../../../interfaces/bodega';
import { Articulo } from '../../../interfaces/articulo';
import { BodegaService } from '../../../services/bodega.service';
import { ArticuloService } from '../../../services/articulo.service';
import { UsuarioSede } from '../../../../admin/interfaces/acceso';
import { ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';
import { saveAs } from 'file-saver';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  public bodegas: Bodega[] = [];
  public sedes: UsuarioSede[] = [];
  public articulos: Articulo[] = [];
  public filteredArticulos: Articulo[] = [];
  public txtArticuloSelected: (Articulo | string) = undefined;
  public params: any = {};
  public titulo: string = "Kardex";
  public cargando = false;
  public configBotones: ConfiguracionBotones = {
    showPdf: true, showHtml: false, showExcel: true
  };

  constructor(
  	private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private sedeSrvc: AccesoUsuarioService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService
  ) { }

  ngOnInit() {
  	this.getSede();
  	//this.getBodega();
    this.getArticulo();
    this.txtArticuloSelected = undefined;
    this.params.fdel = moment().format(GLOBAL.dbDateFormat);
    this.params.fal = moment().format(GLOBAL.dbDateFormat);
  }

  getDescripcionArticulo = (idarticulo: number) => this.articulos.find(art => +art.articulo === +idarticulo).descripcion || '';

  filtrarArticulos = (value: (Articulo | string)) => {
    if (value && (typeof value === 'string')) {
      const filterValue = value.toLowerCase();
      this.filteredArticulos =
        this.articulos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredArticulos = this.articulos;
    }
  }

  displayArticulo = (art: Articulo) => {
    if (art) {
      this.params.articulo = art.articulo;
      return art.descripcion;
    }
    return undefined;
  }

  getSede = (params: any = {}) => {
    this.sedeSrvc.getSedes(params).subscribe(res => {
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
    this.params._excel = 0;
  	this.pdfServicio.getReporteKardex(this.params).subscribe(res => {
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
    this.pdfServicio.getReporteKardex(this.params).subscribe(res => {
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
