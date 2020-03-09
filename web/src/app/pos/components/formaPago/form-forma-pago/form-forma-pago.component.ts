import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { MatTableDataSource } from '@angular/material/table';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

import { FormaPago } from '../../../interfaces/forma-pago';
import { FormaPagoService } from '../../../services/forma-pago.service';

@Component({
  selector: 'app-form-forma-pago',
  templateUrl: './form-forma-pago.component.html',
  styleUrls: ['./form-forma-pago.component.css']
})
export class FormFormaPagoComponent implements OnInit {

  @Input() formaPago: FormaPago;
  @Output() formaPagoSavedEv = new EventEmitter();
  public esMovil: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private formaPagoSrvc: FormaPagoService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  resetFormaPago = () => this.formaPago = { forma_pago: null, descripcion: null, activo: 1 };

  onSubmit = () => {
    this.formaPagoSrvc.save(this.formaPago).subscribe(res => {
      //console.log(res);
      if (res.exito) {
        this.formaPagoSavedEv.emit();
        this.resetFormaPago();
        this._snackBar.open('Forma de pago agregada...', 'Forma de pago', { duration: 3000 });
      }
    });
  }

}
