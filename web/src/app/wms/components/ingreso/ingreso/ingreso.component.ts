import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaIngresoComponent } from '../lista-ingreso/lista-ingreso.component';
import { Ingreso } from '../../../interfaces/ingreso';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public ingreso: Ingreso;
  @ViewChild('lstIngreso', { static: false }) lstIngresoComponent: ListaIngresoComponent;

  constructor() {
    this.ingreso = { ingreso: null, tipo_movimiento: null };
  }

  ngOnInit() {
  }

  setIngreso = (ing: Ingreso) => this.ingreso = ing;

  refreshIngresoList = () => {}
}
