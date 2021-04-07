import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

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
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private snackBar: MatSnackBar,
    private medidaSrvc: MedidaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  resetMedida = () => this.medida = { medida: null, descripcion: null };

  onSubmit = () => {
    this.medidaSrvc.save(this.medida).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.medidaSavedEv.emit();
        this.resetMedida();
        this.snackBar.open('Medida agregada...', 'Unida de medida', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Unida de medida', { duration: 3000 });
      }
    });
  }

}
