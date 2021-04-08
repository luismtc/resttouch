import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

import { NotificacionCliente } from '../../interfaces/notificacion-cliente';

@Component({
  selector: 'app-notificaciones-cliente',
  templateUrl: './notificaciones-cliente.component.html',
  styleUrls: ['./notificaciones-cliente.component.css']
})
export class NotificacionesClienteComponent implements OnInit {

  constructor(
    private snackBarRef: MatSnackBarRef<NotificacionesClienteComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificacionCliente[]
  ) { }

  ngOnInit(): void {
  }

  cerrar = () => this.snackBarRef.dismiss();

}
