import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../shared/global';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import * as moment from 'moment';

import { FormaPago } from '../../interfaces/forma-pago';
import { Cobro } from '../../interfaces/cobro';
import { FormaPagoService } from '../../services/forma-pago.service';
import { CobroService } from '../../services/cobro.service';
import { Cliente } from '../../../admin/interfaces/cliente';
import { FacturaRequest } from '../../interfaces/factura';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-cobrar-pedido',
  templateUrl: './cobrar-pedido.component.html',
  styleUrls: ['./cobrar-pedido.component.css']
})
export class CobrarPedidoComponent implements OnInit {

  @Input() inputData: any = {};
  public lstFormasPago: FormaPago[] = [];
  public formaPago: any = {};
  public formasPagoDeCuenta: any[] = [];
  public factReq: FacturaRequest;
  public esMovil: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CobrarPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    public formaPagoSrvc: FormaPagoService,
    public cobroSrvc: CobroService,
    public facturaSrvc: FacturaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.processData();
    this.loadFormasPago();
    this.resetFactReq();
  }

  resetFactReq = () => {
    this.factReq = { cuentas: [], factura_serie: 1, cliente: null, fecha_factura: moment().format(GLOBAL.dbDateFormat), moneda: 1 };
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
      if (!!res && res.length > 0) {
        this.lstFormasPago = res;
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

  setClienteFacturar = (obj: Cliente) => this.factReq.cliente = +obj.cliente;

  cobrar = () => {
    const objCobro: Cobro = {
      cuenta: this.inputData.idcuenta,
      forma_pago: [],
      total: this.inputData.totalDeCuenta + this.inputData.montoPropina,
      propina_monto: this.inputData.montoPropina,
      propina_porcentaje: this.inputData.porcentajePropina
    };
    for (let i = 0; i < this.formasPagoDeCuenta.length; i++) {
      objCobro.forma_pago.push({
        forma_pago: +this.formasPagoDeCuenta[i].forma_pago.forma_pago,
        monto: this.formasPagoDeCuenta[i].monto
      });
    }
    this.factReq.cuentas.push({ cuenta: +this.inputData.idcuenta });
    this.cobroSrvc.save(objCobro).subscribe(res => {
      if (res.exito) {
        this._snackBar.open('Cobro', `${res.mensaje}`, { duration: 3000 });
        this.facturaSrvc.facturar(this.factReq).subscribe(resFact => {
          if (resFact.exito) {
            this.resetFactReq();
            this._snackBar.open('Factura', `${resFact.mensaje}`, { duration: 3000 });
            this.dialogRef.close(res.cuenta);
          } else {
            this._snackBar.open('Factura', `ERROR: ${res.mensaje}`, { duration: 3000 });
          }
        });
      } else {
        this._snackBar.open('Cobro', `ERROR: ${res.mensaje}`, { duration: 3000 });
      }      
    });
  };
}
