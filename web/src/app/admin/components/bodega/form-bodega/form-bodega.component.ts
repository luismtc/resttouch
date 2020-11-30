import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {BodegaService} from '../../../../wms/services/bodega.service'
import {Bodega} from '../../../../wms/interfaces/bodega'

@Component({
  selector: 'app-form-bodega',
  templateUrl: './form-bodega.component.html',
  styleUrls: ['./form-bodega.component.css']
})
export class FormBodegaComponent implements OnInit {

  @Input() bodega: Bodega;
  @Output() bodegaSavedEv = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private srvBodega: BodegaService
  ) { }

  ngOnInit() {
  }

  resetBodega = () => this.bodega = {
    bodega: null, descripcion: null,  sede: null, merma: null
  }

  onSubmit = () => {
    this.srvBodega.save(this.bodega).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.bodegaSavedEv.emit();
        this.resetBodega();
        this.snackBar.open('Bodega agregada...', 'Bodega', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Bodega', { duration: 3000 });
      }
    });
  }

}
