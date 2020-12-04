import { Component, OnInit, ViewChild } from '@angular/core';
import { FormInventarioFisicoComponent } from '../form-inventario-fisico/form-inventario-fisico.component'
import { ReporteComponent } from '../reporte/reporte.component'
import { Articulo, ArticuloResponse } from '../../../interfaces/articulo';
import { ArticuloService } from '../../../services/articulo.service';

@Component({
  selector: 'app-fisico',
  templateUrl: './fisico.component.html',
  styleUrls: ['./fisico.component.css']
})
export class FisicoComponent implements OnInit {

  @ViewChild('rptInventario', { static: false }) rptInventarioComponent: ReporteComponent;
  @ViewChild('frmInventario', { static: false }) frmInventarioComponent: FormInventarioFisicoComponent;

  constructor() { }

  ngOnInit() {
  }

}
