import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Proveedor } from '../../../../wms/interfaces/proveedor';
import { ProveedorService } from '../../../../wms/services/proveedor.service';

@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css']
})
export class FormProveedorComponent implements OnInit {

  @Input() proveedor: Proveedor;
  @Output() proveedorSavedEv = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar,
    private proveedorSrvc: ProveedorService
  ) { }

  ngOnInit() {
  }

  resetProveedor = () => this.proveedor = {
    proveedor: null,
    corporacion: null,
    razon_social: null,
    nit: null
  }

  onSubmit = () => {
    this.proveedorSrvc.save(this.proveedor).subscribe(res => {
      if (res.exito) {
        this.proveedorSavedEv.emit();
        this.resetProveedor();
        this.snackBar.open('Proveedor agregado...', 'Proveedores', { duration: 3000 });
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Proveedores', { duration: 3000 });
      }
    });
  }
}
