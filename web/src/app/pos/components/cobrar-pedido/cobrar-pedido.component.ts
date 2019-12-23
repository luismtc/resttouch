import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormaPago } from '../../interfaces/forma-pago';
import { FormaPagoService } from '../../services/forma-pago.service';

@Component({
  selector: 'app-cobrar-pedido',
  templateUrl: './cobrar-pedido.component.html',
  styleUrls: ['./cobrar-pedido.component.css']
})
export class CobrarPedidoComponent implements OnInit {

  @Input() inputData: any = {};
  private lstFormasPago: FormaPago[] = [];
  private formaPago: any = {};
  private formasPagoDeCuenta: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<CobrarPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formaPagoSrvc: FormaPagoService
  ) { }

  ngOnInit() {
    this.processData();
    this.loadFormasPago();
  }

  processData = () => {
    if (this.data) {
      this.inputData = this.data;
    } else {
      this.data = this.inputData;
    }

    this.inputData.totalDeCuenta = 0.00;
    this.inputData.productosACobrar.forEach((item: any) => {
      this.inputData.totalDeCuenta += (item.precio * item.cantidad)
    });

    this.calculaPropina();
    this.actualizaSaldo();
    this.formaPago.monto = this.inputData.saldo;
  };

  calculaPropina = () => {
    this.inputData.montoPropina = parseFloat((this.inputData.porcentajePropina * this.inputData.totalDeCuenta / 100).toFixed(2));
    this.actualizaSaldo();
  }

  calculaPorcentajePropina() {
    this.inputData.porcentajePropina = parseFloat((this.inputData.montoPropina * 100 / this.inputData.totalDeCuenta).toFixed(2));
    this.actualizaSaldo();
  }

  loadFormasPago = () => {
    this.formaPagoSrvc.get({ activo: 1 }).subscribe((res: any) => {
      if (!!res.forma_pago && res.forma_pago.length > 0) {
        this.lstFormasPago = res.forma_pago;
      }
    });
  }

  addFormaPago = () => {
    this.formasPagoDeCuenta.push({
      forma_pago: this.lstFormasPago.filter(f => +f.forma_pago == +this.formaPago.forma_pago)[0],
      monto: this.formaPago.monto
    });
    this.actualizaSaldo();
  }

  delFormaPago = (idx: number) => {    
    this.formasPagoDeCuenta.splice(idx, 1);
    this.actualizaSaldo();
  }

  actualizaSaldo = () => {
    let sumFormasPago: number = 0.00;
    this.formasPagoDeCuenta.forEach(fp => sumFormasPago += +fp.monto);
    this.inputData.saldo = this.inputData.totalDeCuenta + this.inputData.montoPropina - sumFormasPago;
    this.formaPago = { monto: this.inputData.saldo };
  }

  cancelar = () => this.dialogRef.close();
}
