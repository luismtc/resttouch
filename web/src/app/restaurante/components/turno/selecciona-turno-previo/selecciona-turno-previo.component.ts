import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GLOBAL } from '../../../../shared/global';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

import { Turno } from '../../../interfaces/turno';
import { TurnoService } from '../../../services/turno.service';

interface IDataCopiarTurno {
  turnoCopia: Turno;
}

@Component({
  selector: 'app-selecciona-turno-previo',
  templateUrl: './selecciona-turno-previo.component.html',
  styleUrls: ['./selecciona-turno-previo.component.css']
})
export class SeleccionaTurnoPrevioComponent implements OnInit {

  public lstTurnos: Turno[] = [];
  public turnoSelected: Turno;

  constructor(
    public dialogRef: MatDialogRef<SeleccionaTurnoPrevioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDataCopiarTurno,
    public ls: LocalstorageService,
    private snackBar: MatSnackBar,
    private turnoSrvc: TurnoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadTurnos();
  }

  loadTurnos = () => {
    this.lstTurnos = [];
    this.turnoSrvc.get({ sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0) }).subscribe((lst: Turno[]) => {
      if (lst && lst.length > 0) {
        const limite = lst.length >= 11 ? 11 : lst.length;
        for (let i = 0; i < limite; i++) {
          this.lstTurnos.push(lst[i]);
        }
      }
    });
  }

  cancelar = () => this.dialogRef.close();

  copiar = () => {
    if (this.turnoSelected) {
      const confDialog = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: '400px',
        data: new ConfirmDialogModel('Detalle de turno', 'Esto copiará el detalle del turno que seleccionó. ¿Desea continuar?', 'Sí', 'No')
      });

      confDialog.afterClosed().subscribe(resConf => {
        if (resConf) {
          this.turnoSrvc.replicaDetalleTurno(this.turnoSelected.turno, this.data.turnoCopia.turno).subscribe(res => {
            if (res.exito) {
              this.snackBar.open('Turno copiado con éxito', 'Detalle turno', { duration: 3000 });
            } else {
              this.snackBar.open(`ERROR: ${res.mensaje}`, 'Detalle turno', { duration: 7000 });
            }
            this.dialogRef.close();
          });
        }
      });
    }
  }
}
