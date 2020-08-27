import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormaPago } from '../../../interfaces/forma-pago';
import { FpagoService } from '../../../services/fpago.service';

@Component({
  selector: 'app-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.css']
})
export class FormPagoComponent implements OnInit {

  @Input() fpago: FormaPago;
  @Output() fpagoSavedEv = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private fpagoSrvc: FpagoService
  ) { }

  ngOnInit() {
  }

  resetFormaPago = () => this.fpago = {
    forma_pago: null, descripcion: null, activo: 1, descuento: 0, comision_porcentaje: 0.00,
    retencion_porcentaje: 0.00, pedirdocumento: 0, adjuntararchivo: 0, pedirautorizacion: 0
  }

  onSubmit = () => {
    this.fpagoSrvc.save(this.fpago).subscribe(res => {
      if (res.exito) {
        this.fpagoSavedEv.emit();
        this.resetFormaPago();
        this.snackBar.open('Forma de pago agregada...', 'Forma de pago', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Forma de pago', { duration: 3000 });
      }
    });
  }
}
