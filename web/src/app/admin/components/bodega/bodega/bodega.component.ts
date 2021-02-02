import { Component, OnInit, ViewChild } from '@angular/core';
import {ListaBodegaComponent} from '../lista-bodega/lista-bodega.component';
import {BodegaService} from '../../../../wms/services/bodega.service'
import {Bodega} from '../../../../wms/interfaces/bodega'

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})

export class BodegaComponent implements OnInit {

  public bodega: Bodega;
  @ViewChild('lstBodega') lstBodegaComponent: ListaBodegaComponent;

  constructor() {
    this.bodega = {
      bodega: null,
      descripcion: "",
      sede: null,
      merma: null
    }
   }

  ngOnInit() {
  }

  setBodega = (cli: Bodega) => this.bodega = cli;
  refreshBodegaList = () => this.lstBodegaComponent.getBodegas();

}
