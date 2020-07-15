import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaPagoComponent } from '../lista-pago/lista-pago.component';
import { FormaPago } from '../../../interfaces/forma-pago';

@Component({
  selector: 'app-fpago',
  templateUrl: './fpago.component.html',
  styleUrls: ['./fpago.component.css']
})
export class FpagoComponent implements OnInit {

  public fpago: FormaPago;
  @ViewChild('lstFPago', { static: false }) lstFpagoComponent: ListaPagoComponent;

   constructor() {
    this.fpago = {
      forma_pago: null,
      descripcion: null,
      activo: 1
    };
  }

  ngOnInit() {
  }

  setFormPago = (cli: FormaPago) => this.fpago = cli;
  refreshFpagoList = () => this.lstFpagoComponent.getFormasPago();
}