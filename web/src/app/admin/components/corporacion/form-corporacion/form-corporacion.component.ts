import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Corporacion } from '../../../interfaces/sede';
import { SedeService } from '../../../services/sede.service';

@Component({
  selector: 'app-form-corporacion',
  templateUrl: './form-corporacion.component.html',
  styleUrls: ['./form-corporacion.component.css']
})
export class FormCorporacionComponent implements OnInit {

  @Input() corporacion: Corporacion;
  @Output() corporacionSavedEv = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private sedeSrvc: SedeService,
  ) { }

  ngOnInit() {
  }

  resetCorporacion = () => this.corporacion = {
    corporacion: null, admin_llave: null, nombre: null
  }

  onSubmit = () => {
    this.sedeSrvc.saveCorporacion(this.corporacion).subscribe(res => {
      if (res.exito) {
        this.corporacionSavedEv.emit();
        this.resetCorporacion();
        this.snackBar.open('Corporación guardada exitosamente.', 'Corporación', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Corporación', { duration: 3000 });
      }
    });
  }

}
