import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Propina } from '../../../interfaces/propina';
import { PropinaService } from '../../../services/propina.service';

import { UsuarioTipo } from '../../../../admin/interfaces/usuario-tipo';
import { UsuarioTipoService } from '../../../../admin/services/usuario-tipo.service';

@Component({
  selector: 'app-form-propina',
  templateUrl: './form-propina.component.html',
  styleUrls: ['./form-propina.component.css']
})
export class FormPropinaComponent implements OnInit {

  @Input() propina: Propina;
  @Output() propinaSavedEv = new EventEmitter();
  public usuarios: UsuarioTipo[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private propinaSrvc: PropinaService,
    private usuarioSrvc: UsuarioTipoService
  ) { }

  ngOnInit() {
    this.resetPropina();
    this.loadUsuario();
  }

  loadUsuario = () => {
    this.usuarioSrvc.get().subscribe(res => {
      this.usuarios = res;
    });
  }

  resetPropina = () => this.propina = {
    propina_distribucion: null, usuario_tipo: null, porcentaje: null, anulado: 0, sede: null, grupal: 0
  }

  onSubmit = () => {
    this.propinaSrvc.save(this.propina).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.propinaSavedEv.emit();
        this.resetPropina();
        this.snackBar.open('Propina agregada...', 'Distribucion de propinas', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Distribucion de propinas', { duration: 3000 });
      }
    });
  }
}
