import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ICuenta {
  numero: number;
  nombre: string;
  productos: any[];
}

@Component({
  selector: 'app-pide-datos-cuentas',
  templateUrl: './pide-datos-cuentas.component.html',
  styleUrls: ['./pide-datos-cuentas.component.css']
})
export class PideDatosCuentasComponent implements OnInit {

  public displayedColumns: string[] = ['numero', 'nombre'];
  public dataSource: MatTableDataSource<ICuenta>;

  constructor(
    public dialogRef: MatDialogRef<PideDatosCuentasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICuenta[],
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.setTableDataSource();
  }

  todosConNombre(ctas: ICuenta[]): number {
    for (let i = 0; i < ctas.length; i++) {
      if (!ctas[i].nombre) {
        return i;
      }
    }
    return -1;
  }

  terminar = (obj: ICuenta[]) => {
    const tcn = this.todosConNombre(obj);
    if (tcn < 0) {
      this.dialogRef.close(obj);
    } else {
      this._snackBar.open(`Favor ingresar nombre a la cuenta #${obj[tcn].numero}...`, 'Cuentas', { duration: 5000 });
    }
  }

  setTableDataSource = () => this.dataSource = new MatTableDataSource(this.data);

  agregarFila() {
    this.data.push(
      {
        numero: this.data.length + 1,
        nombre: null,
        productos: []
      }
    );
    this.dataSource.data = this.data;
  }
}
