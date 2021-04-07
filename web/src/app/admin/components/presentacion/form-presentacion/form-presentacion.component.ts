import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { Presentacion } from '../../../interfaces/presentacion';
import { PresentacionService } from '../../../services/presentacion.service';
import { Medida } from '../../../interfaces/medida';
import { MedidaService } from '../../../services/medida.service';

@Component({
  selector: 'app-form-presentacion',
  templateUrl: './form-presentacion.component.html',
  styleUrls: ['./form-presentacion.component.css']
})
export class FormPresentacionComponent implements OnInit {

  @Input() presentacion: Presentacion;
  @Output() presentacionSavedEv = new EventEmitter();
  public medidas: Medida[] = [];
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public esMovil = false;

  constructor(
    private snackBar: MatSnackBar,
    private presentacionSrvc: PresentacionService,
    private medidaSrvc: MedidaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetPresentacion();
    this.loadMedidas();
  }

  loadMedidas = () => {
    this.medidaSrvc.get().subscribe(res => {
      if (res) {
        this.medidas = res;
      }
    });
  }

  resetPresentacion = () => this.presentacion = { presentacion: null, medida: null, descripcion: null, cantidad: null };

  onSubmit = () => {
    this.presentacionSrvc.save(this.presentacion).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.presentacionSavedEv.emit();
        this.resetPresentacion();
        this.snackBar.open('Presentación agregada...', 'Presentación', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Presentación', { duration: 3000 });
      }
    });
  }

}
