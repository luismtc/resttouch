import { Component, OnInit, ViewChild } from '@angular/core';

import { Transformacion } from '../../interfaces/transformacion';
import { TransformacionService } from '../../services/transformacion.service';
import { Ingreso } from '../../interfaces/ingreso';
import { Egreso } from '../../interfaces/egreso';

@Component({
  selector: 'app-transformacion',
  templateUrl: './transformacion.component.html',
  styleUrls: ['./transformacion.component.css']
})
export class TransformacionComponent implements OnInit {

  public transformacion: Transformacion;
  public ingreso: Ingreso;
  public egreso: Egreso;

  constructor(
    private transformacionSrvc: TransformacionService
  ) { }

  ngOnInit() {
  }

  doSomething() {}

  transformar = () => {
    console.log('EGRESO', this.egreso);
    console.log('INGRESO', this.ingreso);
  }

}
