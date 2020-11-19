import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaImpuestoEspecialComponent } from '../lista-impuesto-especial/lista-impuesto-especial.component';
import { ImpuestoEspecial } from '../../../interfaces/impuesto-especial';


@Component({
  selector: 'app-impuesto-especial',
  templateUrl: './impuesto-especial.component.html',
  styleUrls: ['./impuesto-especial.component.css']
})
export class ImpuestoEspecialComponent implements OnInit {

  public impuestoEspecial: ImpuestoEspecial;
  @ViewChild('lstImpuestoEspecial', { static: false }) lstImpuestoEspecial: ListaImpuestoEspecialComponent;

  constructor() {
    this.impuestoEspecial = { impuesto_especial: null, descripcion: null, porcentaje: null };
  }

  ngOnInit() {
  }

  setImpuestoEspecial = (impesp: ImpuestoEspecial) => this.impuestoEspecial = impesp;

  refreshImpuestoEspecialList = () => this.lstImpuestoEspecial.loadImpuestosEspeciales();

}
