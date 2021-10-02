import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductoSelected } from '../../../wms/interfaces/articulo';
import { DetalleCuentaSimplified } from '../../../restaurante/interfaces/cuenta';

export class ElminarProductoModel {
  constructor(
    public producto: (DetalleCuentaSimplified | ProductoSelected)
  ) { }
}

@Component({
  selector: 'app-dialog-elminar-producto',
  templateUrl: './dialog-elminar-producto.component.html',
  styleUrls: ['./dialog-elminar-producto.component.css']
})
export class DialogElminarProductoComponent implements OnInit {

  public prod: (DetalleCuentaSimplified | ProductoSelected)
  public datos: any = {};
  public cantidad;
  

  constructor(
    public dialogRef: MatDialogRef<DialogElminarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ElminarProductoModel,
    private snackBar: MatSnackBar
  ) {
    this.prod = data.producto
    this.cantidad = this.prod.cantidad
    this.datos = {
      respuesta: false,
      producto: null
    };
  }

  ngOnInit() {

  }

  onConfirm(): void {
    if (this.cantidad < 1 || this.cantidad > this.prod.cantidad){
      this.snackBar.open('La cantidad debe estar entre 1 y '+this.prod.cantidad, 'Error', { duration: 5000 });
    } else {
      this.datos.respuesta = true;
      this.prod.cantidad -= this.cantidad
      this.datos.producto = this.prod;
      this.dialogRef.close(this.datos);
    }
  }

  onDismiss(): void {
    this.datos.respuesta = false;
    this.dialogRef.close(this.datos);
  }

}
