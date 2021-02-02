import { Component, OnInit, ViewChild } from '@angular/core';
//import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { ListaTurnoComponent } from '../lista-turno/lista-turno.component';
import { FormTurnoComponent } from '../form-turno/form-turno.component';
import { Turno } from '../../../interfaces/turno';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  public turno: Turno;
  @ViewChild('lstTurno') lstTurnoComponent: ListaTurnoComponent;
  @ViewChild('frmTurno') frmTurno: FormTurnoComponent;

  constructor(
    //private ls: LocalstorageService
  ) {
    this.turno = {
      turno: null, turno_tipo: null, inicio: moment().format(GLOBAL.dbDateTimeFormat), fin: null
    };
  }

  ngOnInit() {
  }

  setTurno = (trn: Turno) => {
    //console.log(trn); 
    this.turno = trn;
    this.frmTurno.loadDetalleTurno(+this.turno.turno);
    this.frmTurno.pendientes = false;
    this.frmTurno.comandas = []
    this.frmTurno.facturas = []
  }

  refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();
}
