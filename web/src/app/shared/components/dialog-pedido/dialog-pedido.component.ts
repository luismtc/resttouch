import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmDialogModel {
  constructor(
    public titlew: string,
    public cantidadPedido: string,
    public lblBtnConfirm: string,
    public lblBtnDeny: string
  ) { }
}

@Component({
  selector: 'app-dialog-pedido',
  templateUrl: './dialog-pedido.component.html',
  styleUrls: ['./dialog-pedido.component.css']
})
export class DialogPedidoComponent implements OnInit {

  public title: string;
  public message: string;
  public lblBtnConfirm: string;
  public lblBtnDeny: string;
  public datos: any;
  public cantidadPedido: string;
  public pedidos: any[] = []

  constructor(
    public dialogRef: MatDialogRef<DialogPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) { 
    this.datos = {
      respuesta: false,
      pedido: ""
    }
    this.title = data.titlew
    this.lblBtnConfirm = data.lblBtnConfirm
    this.lblBtnDeny = data.lblBtnDeny
    this.cantidadPedido = data.cantidadPedido
    console.log(+this.cantidadPedido)
    for (let i = 0; i < +this.cantidadPedido; i++) {
      console.log("asdf")
      this.pedidos.push({numero: i+1})
    }
    console.log(this.pedidos)
  }

  ngOnInit() {
    
  }

  onConfirm(pedido: string): void {
    this.datos.respuesta = true;
    this.datos.pedido = pedido;
    this.dialogRef.close(this.datos);
  }

  onDismiss(): void {
    this.datos.respuesta = false;
    this.dialogRef.close(this.datos);
  }

}
