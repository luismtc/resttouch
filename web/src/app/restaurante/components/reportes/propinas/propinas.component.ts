import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';

import { ConfiguracionFechas, ConfiguracionBotones } from '../../../../shared/interfaces/config-reportes';

@Component({
  selector: 'app-propinas',
  templateUrl: './propinas.component.html',
  styleUrls: ['./propinas.component.css']
})
export class PropinasComponent implements OnInit {

  public params: any = {};
  public configParams: ConfiguracionFechas = {
    isRequiredFDel: true, isRequiredFAl: true
  };
  public configBotones: ConfiguracionBotones = {
    isHtmlDisabled: false, isPdfDisabled: false, isExcelDisabled: false
  };

  constructor() { }

  ngOnInit() {
    this.resetParams();
  }

  resetParams = () => {
    this.params = {
      fdel: moment().startOf('month').format(GLOBAL.dbDateFormat),
      fal: moment().endOf('month').format(GLOBAL.dbDateFormat)
    };
    // console.log(this.params);
  }

  getReporte = () => {
    console.log('GENERANDO CON PARAMETROS = ', this.params);
  }

}
