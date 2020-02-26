import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Medida } from '../../../interfaces/medida';
import { MedidaService } from '../../../services/medida.service';

@Component({
  selector: 'app-form-medida',
  templateUrl: './form-medida.component.html',
  styleUrls: ['./form-medida.component.css']
})
export class FormMedidaComponent implements OnInit {

  @Input() medida: Medida;
  @Output() medidaSavedEv = new EventEmitter();

  constructor(
    private _snackBar: MatSnackBar,
    private medidaSrvc: MedidaService
  ) { }

  ngOnInit() {
  }

  resetMedida = () => this.medida = { 
    medida: null, descripcion: null
  };

  onSubmit = () => {
    this.medidaSrvc.save(this.medida).subscribe(res => {
      console.log(res);
      if (res.exito) {
        this.medidaSavedEv.emit();
        this.resetMedida();
        this._snackBar.open('Medida agregada...', 'Unida de medida', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Unida de medida', { duration: 3000 });        
      }
    });
  }

}
