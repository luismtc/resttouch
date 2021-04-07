import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { AnulacionService } from '../../../services/anulacion.service';
import { RazonAnulacion } from '../../../interfaces/razon-anulacion';

@Component({
  selector: 'app-form-razon-anulacion',
  templateUrl: './form-razon-anulacion.component.html',
  styleUrls: ['./form-razon-anulacion.component.css']
})
export class FormRazonAnulacionComponent implements OnInit {

  @Input() razon: RazonAnulacion;
  @Output() razonAnulacionSavedEv = new EventEmitter();
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private snackBar: MatSnackBar,
    private anulacionSrvc: AnulacionService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  resetForm = () => this.razon = { razon_anulacion: null, descripcion: null, anulado: 0 };

  onSubmit = () => {
    this.anulacionSrvc.save(this.razon).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.razonAnulacionSavedEv.emit();
        this.resetForm();
        this.snackBar.open('Razon de Anulación Guardada...', 'Razon de Anulacion', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Razon de Anulacion', { duration: 3000 });
      }
    });
  }

}
