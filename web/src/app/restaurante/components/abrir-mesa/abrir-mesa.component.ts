import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PideDatosCuentasComponent } from '../pide-datos-cuentas/pide-datos-cuentas.component';

//import { Cuenta } from '../../interfaces/cuenta';
import { Comanda } from '../../interfaces/comanda';

/*
interface ICuenta {
  numero: number;
  nombre: string;
  productos: any[];
}
*/
/*
interface DialogData {
  nombreArea: string;
  area: number;
  mesa: number;
  numero: number;
  mesero: string;
  comensales: string;
  esEvento: boolean;
  dividirCuentasPorSillas: boolean;
  cuentas: ICuenta[]
}
*/

@Component({
  selector: 'app-abrir-mesa',
  templateUrl: './abrir-mesa.component.html',
  styleUrls: ['./abrir-mesa.component.css']
})
export class AbrirMesaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AbrirMesaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Comanda,
    public dialogDatosCuentas: MatDialog
  ) { }

  ngOnInit() {
  }

  pedirDatosDeCuentas(obj: Comanda) {

    const pideDatosCuentasRef = this.dialogDatosCuentas.open(PideDatosCuentasComponent, {
      width: '50%',
      disableClose: true,
      data: obj.cuentas
    });

    pideDatosCuentasRef.afterClosed().subscribe((result: any) => {
      obj.cuentas = result;
      this.dialogRef.close(obj);
    });

  }

  terminar(obj: Comanda = null) {
    if (!obj) {
      this.dialogRef.close();
    } else {
      if (!obj.dividirCuentasPorSillas) {
        this.dialogRef.close(obj);
      } else {
        this.pedirDatosDeCuentas(obj);
      }
    }
  }

}
