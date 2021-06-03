import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInput } from '@angular/material/input';
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
  @Input() inicializoCliente = true;
  @Input() verTodos = true;
  @Output() clienteSavedEv = new EventEmitter();
  @ViewChild('txtNitCliente') txtNitCliente: MatInput;
  public esDialogo = false;
  public esMovil = false;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;

  constructor(
    private snackBar: MatSnackBar,
    private clienteSrvc: ClienteService,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    if (this.inicializoCliente) {
      this.resetCliente();
    }
  }

  resetCliente = () => this.cliente = {
    cliente: null, nombre: null, direccion: null, nit: null, telefono: null, correo: null,
    codigo_postal: null, municipio: null, departamento: null, pais_iso_dos: null
  }

  onSubmit = () => {
    if (this.cliente.correo && this.cliente.correo.length > 0) {
      if (this.cliente.correo.match(GLOBAL.FORMATO_EMAIL)) {
        this.guardarCliente();
      } else {
        this.snackBar.open(`El correo '${this.cliente.correo}' no es válido.`, 'Cliente', { duration: 3000 });
      }
    } else {
      this.guardarCliente();
    }
  }

  guardarCliente = () => {
    this.clienteSrvc.save(this.cliente).subscribe(res => {
      // console.log(res);
      if (res.exito) {
        this.clienteSavedEv.emit(res.cliente);
        this.resetCliente();
        this.snackBar.open(res.mensaje, 'Cliente', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cliente', { duration: 7000 });
      }
    });
  }

  loadInfoContribuyente = (nit: string) => {
    const tmpnit = nit.trim().toUpperCase().replace(/[^0-9KkcCfF]/gi, '');
    if (tmpnit !== 'CF') {
      this.clienteSrvc.getInfoContribuyente(tmpnit).subscribe(res => {
        if (res.exito) {
          this.cliente.nombre = res.contribuyente.nombre;
          this.cliente.nit = tmpnit;
          this.cliente.direccion = res.contribuyente.direccion;
        } else {
          this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cliente', { duration: 7000 });
          this.cliente.nombre = null;
          this.cliente.nit = tmpnit;
          this.cliente.direccion = null;
          this.txtNitCliente.focus();
        }
      });
    }
  }

  validatePhone = (e: any) => {
    const inp = String.fromCharCode(e.keyCode);
    if (/[0-9 +()-]/.test(inp)) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

  validateEmail = (e: any) => {
    const inp = String.fromCharCode(e.keyCode);
    if (/[a-zA-Z0-9_@.]/.test(inp)) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

}
