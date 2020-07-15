import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaPropinaComponent } from '../lista-propina/lista-propina.component';
import { Propina } from '../../../interfaces/propina';

@Component({
  selector: 'app-propina',
  templateUrl: './propina.component.html',
  styleUrls: ['./propina.component.css']
})
export class PropinaComponent implements OnInit {
public propina: Propina;
@ViewChild('lstPropina', { static: false }) lstPropinaComponent: ListaPropinaComponent;
  constructor() {
  	this.propina = { 
      propina_distribucion: null, usuario_tipo: null, porcentaje:null, anulado:null
    };
  }

  ngOnInit() {
  }

  setPropina = (pres: any) => this.propina = {
    propina_distribucion: pres.propina_distribucion,
    usuario_tipo: pres.usuario_tipo.usuario_tipo,
    porcentaje: pres.porcentaje,
    anulado: pres.anulado
  };
  refreshPropinaList = () => this.lstPropinaComponent.loadPropinas();
}