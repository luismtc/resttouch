import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaPresentacionComponent } from '../lista-presentacion/lista-presentacion.component';
import { Presentacion } from '../../../interfaces/presentacion';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public presentacion: Presentacion;
  @ViewChild('lstPresentacion', { static: false }) lstMedidaComponent: ListaPresentacionComponent;

  constructor() {
    this.presentacion = {
      presentacion: null, medida: null, descripcion: null, cantidad: null
    };
  }

  ngOnInit() {
  }

  setPresentacion = (pres: any) => this.presentacion = {
    presentacion: pres.presentacion,
    medida: pres.medida.medida,
    descripcion: pres.descripcion,
    cantidad: pres.cantidad
  };

  refreshPresentacionList = () => this.lstMedidaComponent.loadPresentaciones();

}
