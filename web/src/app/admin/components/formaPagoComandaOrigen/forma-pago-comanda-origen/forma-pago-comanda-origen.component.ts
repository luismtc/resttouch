import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { ListaFormaPagoComandaOrigenComponent } from '../lista-forma-pago-comanda-origen/lista-forma-pago-comanda-origen.component';
import { FormFormaPagoComandaOrigenComponent } from '../form-forma-pago-comanda-origen/form-forma-pago-comanda-origen.component';
import { FormaPagoComandaOrigen, FormaPagoComandaOrigenResponse } from '../../../interfaces/forma-pago';

@Component({
  selector: 'app-forma-pago-comanda-origen',
  templateUrl: './forma-pago-comanda-origen.component.html',
  styleUrls: ['./forma-pago-comanda-origen.component.css']
})
export class FormaPagoComandaOrigenComponent implements OnInit {

  @Input() comanda_origen: number = null;
  @ViewChild('lstFormaPagoComandaOrigen') lstFormaPagoComandaOrigenComponent: ListaFormaPagoComandaOrigenComponent;
  @ViewChild('frmFormaPagoComandaOrigen') frmFormaPagoComandaOrigen: FormFormaPagoComandaOrigenComponent;
  public formaPagoComandaOrigen: FormaPagoComandaOrigen;

  constructor() {
    this.formaPagoComandaOrigen = {
      forma_pago_comanda_origen: null, forma_pago: null, comanda_origen: null, codigo: null
    }
  }

  ngOnInit(): void {
    // console.log('ORIGEN DESDE DIALGO FORMA PAGO', this.comanda_origen);
  }

  setFormaPagoComandaOrigen = (fpco: FormaPagoComandaOrigenResponse) => {
    this.formaPagoComandaOrigen = {
      forma_pago_comanda_origen: fpco.forma_pago_comanda_origen,
      forma_pago: fpco.forma_pago ? fpco.forma_pago.forma_pago : null,
      comanda_origen: fpco.comanda_origen.comanda_origen,
      codigo: fpco.codigo      
    }
    this.frmFormaPagoComandaOrigen.formaPagoComandaOrigen = this.formaPagoComandaOrigen;
  };

  refreshFormaPagoComandOrigenList = () => this.lstFormaPagoComandaOrigenComponent.loadFormasPagoComandaOrigen();

}
