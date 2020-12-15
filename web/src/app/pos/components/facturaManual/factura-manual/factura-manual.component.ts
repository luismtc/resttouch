import { Component, OnInit, ViewChild } from '@angular/core';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { ListaFacturaManualComponent } from '../lista-factura-manual/lista-factura-manual.component';
import { FormFacturaManualComponent } from '../form-factura-manual/form-factura-manual.component';
import { Factura } from '../../../interfaces/factura';

@Component({
  selector: 'app-factura-manual',
  templateUrl: './factura-manual.component.html',
  styleUrls: ['./factura-manual.component.css']
})
export class FacturaManualComponent implements OnInit {

  public factura: Factura;
  @ViewChild('lstFacturaManual', { static: false }) lstFacturaComponent: ListaFacturaManualComponent;
  @ViewChild('frmFacturaManual', { static: false }) frmFactura: FormFacturaManualComponent;

  constructor( ) {
    this.factura = {
      factura: null, factura_serie: null, cliente: null, fecha_factura: moment().format(GLOBAL.dbDateFormat), moneda: null, exenta: 0,
      notas: null
    };
  }

  ngOnInit() {
  }

  setFactura = (fact: any) => { 
    this.factura = {
      factura: fact.factura,
      factura_serie: fact.factura_serie.factura_serie,
      cliente: fact.cliente.cliente,
      fecha_factura: fact.fecha_factura,
      moneda: fact.moneda.moneda,
      exenta: fact.exenta,
      notas: fact.notas,
      usuario: fact.usuario.usuario,
      numero_factura: fact.numero_factura,
      serie_factura: fact.serie_factura,
      fel_uuid: fact.fel_uuid,
      fel_uuid_anulacion: fact.fel_uuid_anulacion,
      certificador_fel: fact.certificador_fel
    };
    this.frmFactura.clienteSelected = fact.cliente;
    this.frmFactura.loadDetalleFactura(+this.factura.factura);
    this.frmFactura.resetDetalleFactura();
  }

  refreshFacturaList = () => this.lstFacturaComponent.loadFacturas();

}
