import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { ImpuestoEspecial } from '../../../interfaces/impuesto-especial';
import { ImpuestoEspecialService } from '../../../services/impuesto-especial.service';

@Component({
  selector: 'app-form-impuesto-especial',
  templateUrl: './form-impuesto-especial.component.html',
  styleUrls: ['./form-impuesto-especial.component.css']
})
export class FormImpuestoEspecialComponent implements OnInit {

  @Input() impuestoEspecial: ImpuestoEspecial;
  @Output() impuestoEspecialSavedEv = new EventEmitter();
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private snackBar: MatSnackBar,
    private impuestoEspecialSrvc: ImpuestoEspecialService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  resetImpuestoEspecial() {
    this.impuestoEspecial = { impuesto_especial: null, descripcion: null, porcentaje: null, descripcion_interna: null, codigo_sat: null };
  }

  onSubmit() {
    this.impuestoEspecialSrvc.save(this.impuestoEspecial).subscribe((res) => {
      if (res) {
        this.resetImpuestoEspecial();
        this.impuestoEspecialSavedEv.emit();
        this.snackBar.open('Grabado con éxito.', 'Impuesto especial', { duration: 5000 });
      }
    });
  }

}
