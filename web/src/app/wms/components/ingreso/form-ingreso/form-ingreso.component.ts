import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Ingreso } from '../../../interfaces/ingreso';
import { DetalleIngreso } from '../../../interfaces/detalle-ingreso';
import { IngresoService } from '../../../services/ingreso.service';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

  @Input() ingreso: Ingreso;
  @Output() ingresoSavedEv = new EventEmitter();

  private detallesIngreso: DetalleIngreso[] = [];
  private detalleIngreso: DetalleIngreso;
  public displayedColumns: string[] = ['articulo', 'cantidad', 'costo_unitario', 'costo_total', 'deleteItem'];
  public dataSource: MatTableDataSource<DetalleIngreso>;

  constructor(
    private _snackBar: MatSnackBar,
    private ingresoSrvc: IngresoService
  ) { }

  ngOnInit() {
    this.resetIngreso();
  }

  resetIngreso = () => {
    this.ingreso = { ingreso: null, tipo_movimiento: null };
    this.resetDetalleIngreso();
  }

  onSubmit = () => {
    console.log(this.ingreso);
  }

  resetDetalleIngreso = () => this.detalleIngreso = { 
    ingreso_detalle: !!this.ingreso.ingreso ? this.ingreso.ingreso : null, ingreso: null, articulo: null, cantidad: null, costo_unitario: null, costo_total: null 
  };

  onSubmitDetail = () => {
    this.detalleIngreso.ingreso = this.ingreso.ingreso;
    // console.log(this.detalleIngreso);
    this.detallesIngreso.push(this.detalleIngreso);
    this.updateTableDataSource();
    this.resetDetalleIngreso();
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesIngreso);

  eliminarArticulo = (element: DetalleIngreso) => {
    //const idx = this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle);
    this.detallesIngreso.splice(this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle), 1);  
    this.updateTableDataSource();
  }
}
