import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private _snackBar: MatSnackBar,
    private cienteSrvc: ClienteService
  ) { }

  ngOnInit() {
  }

  resetCliente = () => this.cliente = { 
    cliente: null, nombre: null, direccion: null, nit: null, telefono: null, correo: null, 
    codigo_postal: null, municipio: null, departamento: null, pais_iso_dos: null
  };

  onSubmit = () => {
    this.cienteSrvc.save(this.cliente).subscribe(res => {
      console.log(res);
      if (res.exito) {
        this.clienteSavedEv.emit();
        this.resetCliente();
        this._snackBar.open('Cliente agregado...', 'Cliente', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Cliente', { duration: 3000 });        
      }
    });
  }

}
