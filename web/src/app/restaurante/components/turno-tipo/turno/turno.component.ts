import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaTurnoComponent } from '../lista-turno/lista-turno.component';
import { TipoTurno } from '../../../interfaces/tipo-turno';

@Component({
  selector: 'app-turno-tipo',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoTipoComponent implements OnInit {

  public turno: TipoTurno;
  @ViewChild('lstTurno', { static: false }) lstTurnoComponent: ListaTurnoComponent;

  constructor() {
    this.turno = { 
      turno_tipo: null, descripcion: null, activo: 1
    };
  }

  ngOnInit() {
  }

  setTurno = (cli: TipoTurno) => this.turno = cli;

  refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();

}
