import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaMedidaComponent } from '../lista-medida/lista-medida.component';
import { Medida } from '../../../interfaces/medida';

@Component({
  selector: 'app-medida',
  templateUrl: './medida.component.html',
  styleUrls: ['./medida.component.css']
})
export class MedidaComponent implements OnInit {

  public medida: Medida;
  @ViewChild('lstMedida', { static: false }) lstMedidaComponent: ListaMedidaComponent;

  constructor() {
    this.medida = { 
      medida: null, descripcion: null
    };
  }

  ngOnInit() {
  }

  setMedida = (cli: Medida) => this.medida = cli;

  refreshMedidaList = () => this.lstMedidaComponent.loadMedidas();

}
