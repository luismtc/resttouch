import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private _snackBar: MatSnackBar,
    private anulacionSrvc: AnulacionService
  ) { }

  ngOnInit() {
  }

  resetForm = () => this.razon = { 
    razon_anulacion: null, descripcion: null, anulado: 0
  };

  onSubmit = () => {
    this.anulacionSrvc.save(this.razon).subscribe(res => {
      //console.log(res);
      if (res.exito) {
        this.razonAnulacionSavedEv.emit();
        this.resetForm();
        this._snackBar.open('Razon de Anulación Guardada...', 'Razon de Anulacion', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Razon de Anulacion', { duration: 3000 });        
      }
    });
  }

}
