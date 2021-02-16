import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ClienteService } from '../../../admin/services/cliente.service';
import { Cliente } from '../../../admin/interfaces/cliente';
import { FormClienteDialogComponent } from '../../../admin/components/cliente/form-cliente-dialog/form-cliente-dialog.component';

@Component({
  selector: 'app-pide-telefono-dialog',
  templateUrl: './pide-telefono-dialog.component.html',
  styleUrls: ['./pide-telefono-dialog.component.css']
})
export class PideTelefonoDialogComponent implements OnInit {

  public telefonoPedido: string = null;
  public clientes: Cliente[] = [];

  constructor(
    public dialogRef: MatDialogRef<PideTelefonoDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clienteSrvc: ClienteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  validateKey = (e: any) => {
    const inp = String.fromCharCode(e.keyCode);
    if (/[0-9]/.test(inp)) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

  cancelar = () => this.dialogRef.close();

  buscar = () => {
    if (this.telefonoPedido && this.telefonoPedido.length >= 8) {
      this.clienteSrvc.get({ telefono: this.telefonoPedido }).subscribe((res: Cliente[]) => {
        if (res && res.length > 0) {
          this.clientes = res;
        } else {
          const cliente: Cliente = { cliente: null, nombre: null, nit: null, telefono: this.telefonoPedido };
          const nvoClienteRef = this.dialog.open(FormClienteDialogComponent, {
            width: '50%',
            disableClose: true,
            data: { cliente }
          });

          nvoClienteRef.afterClosed().subscribe((cli: Cliente) => {
            if (cli?.cliente) {
              this.dialogRef.close(cli);
            }
          });
        }
      });
    } else {
      this.snackBar.open('Favor ingresar un número de teléfono válido.', 'Pedido', { duration: 5000 });
    }
  }

  seleccionarCliente = (cli: Cliente) => {
    // console.log(cli);
    this.dialogRef.close(cli);
  }

}
