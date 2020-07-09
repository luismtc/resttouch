import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ccGeneral } from '../../../interfaces/cajacorte';
import { CajacorteService } from '../../../services/cajacorte.service';

@Component({
  selector: 'app-cajacorte-lista',
  templateUrl: './cajacorte-lista.component.html',
  styleUrls: ['./cajacorte-lista.component.css']
})
export class CajacorteListaComponent implements OnInit {

  public displayedColumns: string[] = ['ccGeneral'];
  public dataSource: MatTableDataSource<ccGeneral>;
  public listacc: ccGeneral[];
  @Output() getCajacorteEv = new EventEmitter();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private ccorteSrvc: CajacorteService,
    private _snackBar: MatSnackBar
   ) { }

  ngOnInit() {
    this.getCajascortes();
  }

  filtrar (filtro: string) {
    this.dataSource.filter = filtro.trim().toLowerCase();
  };

  getCajascortes = () => {
    this.ccorteSrvc.buscar().subscribe(lst => {
      this.listacc = lst;
      this.dataSource = new MatTableDataSource(this.listacc);
      this.dataSource.paginator = this.paginator;
    });
  }

  anularCaja = (obj: ccGeneral) => {
    if (confirm('¿Si anula este corte, se anulará también las nominaciones.?')) {
      this.ccorteSrvc.anularCorte(obj).subscribe(res => {
        if (res.exito) {
          this.getCajascortes();
        }
        this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
      });
    }
  }

  getCajacorte = (obj: ccGeneral) => {
    this.getCajacorteEv.emit(obj);
  }
}
