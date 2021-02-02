import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaTurnoTipoComponent } from '../lista-turno/lista-turno.component';
import { TipoTurno } from '../../../interfaces/tipo-turno';

@Component({
  selector: 'app-turno-tipo',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoTipoComponent implements OnInit {

  public turno: TipoTurno;
  @ViewChild('lstTurno') lstTurnoComponent: ListaTurnoTipoComponent;

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
