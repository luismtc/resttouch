import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Cuenta } from '../../interfaces/cuenta';

/*
interface ICuenta {
  numero: number;
  nombre: string;
  productos: any[];
}
*/

@Component({
  selector: 'app-pide-datos-cuentas',
  templateUrl: './pide-datos-cuentas.component.html',
  styleUrls: ['./pide-datos-cuentas.component.css']
})
export class PideDatosCuentasComponent implements OnInit {

  public displayedColumns: string[] = ['numero', 'nombre'];
  public dataSource: MatTableDataSource<Cuenta>;

  constructor(
    public dialogRef: MatDialogRef<PideDatosCuentasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cuenta[],
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.setTableDataSource();
  }

  todosConNombre(ctas: Cuenta[]): number {
    for (let i = 0; i < ctas.length; i++) {
      if (!ctas[i].nombre) {
        return i;
      }
    }
    return -1;
  }

  terminar = (obj: Cuenta[]) => {
    const tcn = this.todosConNombre(obj);
    if (tcn < 0) {
      this.dialogRef.close(obj);
    } else {
      this._snackBar.open(`Favor ingresar nombre a la cuenta #${obj[tcn].cuenta}...`, 'Cuentas', { duration: 5000 });
    }
  }

  setTableDataSource = () => this.dataSource = new MatTableDataSource(this.data);

  agregarFila() {
    this.data.push(
      {
        cuenta: 0,
        numero: this.data.length + 1,
        nombre: null,
        productos: []
      }
    );
    this.dataSource.data = this.data;
  }
}
