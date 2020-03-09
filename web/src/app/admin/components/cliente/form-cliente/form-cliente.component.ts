import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../services/localstorage.service';

import { Cliente } from '../../../interfaces/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  @Input() cliente: Cliente;
  @Output() clienteSavedEv = new EventEmitter();
  public esDialogo: boolean = false;
  public esMovil: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private clienteSrvc: ClienteService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.resetCliente();
  }

  resetCliente = () => this.cliente = {
    cliente: null, nombre: null, direccion: null, nit: null, telefono: null, correo: null,
    codigo_postal: null, municipio: null, departamento: null, pais_iso_dos: null
  };

  onSubmit = () => {
    this.clienteSrvc.save(this.cliente).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.clienteSavedEv.emit(res.cliente);
        this.resetCliente();
        this._snackBar.open('Cliente agregado...', 'Cliente', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Cliente', { duration: 3000 });
      }
    });
  }

}
