import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { FormaPagoComandaOrigen, FormaPago } from '../../../interfaces/forma-pago';
import { ComandaOrigen } from '../../../interfaces/comanda-origen';
import { FpagoService } from '../../../services/fpago.service';
import { ComandaOrigenService } from '../../../services/comanda-origen.service';

@Component({
  selector: 'app-form-forma-pago-comanda-origen',
  templateUrl: './form-forma-pago-comanda-origen.component.html',
  styleUrls: ['./form-forma-pago-comanda-origen.component.css']
})
export class FormFormaPagoComandaOrigenComponent implements OnInit {

  @Input() formaPagoComandaOrigen: FormaPagoComandaOrigen;
  @Output() formaPagoComandaOrigenSavedEv = new EventEmitter();
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  public lstFormasPago: FormaPago[] = [];
  public lstComandaOrigen: ComandaOrigen[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private fpagoSrvc: FpagoService,
    private comandOrigenSrvc: ComandaOrigenService,
    private ls: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.loadFormasPago();
    this.loadComandaOrigen();
  }  

  loadFormasPago = () => {
    this.fpagoSrvc.get({ activo: 1 }).subscribe(res => {
      if (res) {
        this.lstFormasPago = res;
      }
    });
  }

  loadComandaOrigen = () => {
    this.comandOrigenSrvc.get().subscribe(res => {
      if (res) {
        this.lstComandaOrigen = res;
      }
    });
  }

  resetFormaPagoComandaOrigen = () => this.formaPagoComandaOrigen = {
    forma_pago_comanda_origen: null, forma_pago: null, comanda_origen: null, codigo: null
  }

  onSubmit = () => {
    this.fpagoSrvc.saveFormaPagoComandaOrigen(this.formaPagoComandaOrigen).subscribe(res => {      
      if (res.exito) {
        this.formaPagoComandaOrigenSavedEv.emit();
        this.resetFormaPagoComandaOrigen();
        this.snackBar.open('Forma de pago relacionada con el origen de pedidos...', 'Forma de pago por origen', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Forma de pago por origen', { duration: 3000 });
      }
    });
  }
}
