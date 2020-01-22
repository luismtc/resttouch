import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

import { Area } from '../../../interfaces/area';
import { AreaService } from '../../../services/area.service';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.css']
})
export class FormAreaComponent implements OnInit {

  @Input() entidad: Area;
  @Output() entidadSavedEv = new EventEmitter();
  private sedeUsr: number = 0;
  private lstAreas: Area[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private entidadSrvc: AreaService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.sedeUsr = this.ls.get(GLOBAL.usrTokenVar).sede || 0;
    this.resetEntidad();
    this.loadAreas();
  }

  loadAreas = () => this.entidadSrvc.get({ sede: this.sedeUsr }).subscribe(res => this.lstAreas = res);

  resetEntidad = () => this.entidad = { area: null, sede: this.sedeUsr, nombre: null, mesas: [] };

  onSubmit = () => {
    //console.log(this.entidad); return;
    this.entidadSrvc.save(this.entidad).subscribe(res => {
      if (res) {
        this._snackBar.open('Guardado con éxito...', 'Guardar', { duration: 3000 });
        this.resetEntidad();
        this.loadAreas();
        this.entidadSavedEv.emit();        
      }
    });
  }

}
