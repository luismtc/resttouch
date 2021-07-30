import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CheckPasswordComponent, ConfigCheckPasswordModel } from '../../../../shared/components/check-password/check-password.component';
import { CajacorteFormComponent } from '../cajacorte-form/cajacorte-form.component';

import { ccGeneral, ccTipo } from '../../../interfaces/cajacorte';
import { CajacorteService } from '../../../services/cajacorte.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cajacorte-lista',
  templateUrl: './cajacorte-lista.component.html',
  styleUrls: ['./cajacorte-lista.component.css']
})
export class CajacorteListaComponent implements OnInit, OnDestroy {  

  get deshabilitaTipoCC() {    
    return (tipo: ccTipo) => {
      if (tipo.unico && this.listacc?.findIndex(cct => +cct.caja_corte_tipo === +tipo.caja_corte_tipo && +cct.anulado === 0 ) > -1 ) {
        return true;
      }
      return false;
    };
  }
  
  @Output() getCajacorteEv = new EventEmitter();  
  public idTurno: number = null;
  public listacc: ccGeneral[];
  public ccorteTipo: ccTipo[] = [];

  private endSubs = new Subscription();

  constructor(
    private ccorteSrvc: CajacorteService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
   ) { }

  ngOnInit() {
    this.loadCajaCorteTipo();
  }

  ngOnDestroy(): void {
    this.endSubs.unsubscribe();
  }

  loadCajaCorteTipo = () => {
    this.endSubs.add(      
      this.ccorteSrvc.getCajaCorteTipo().subscribe(res => {
        this.ccorteTipo = res;
      })
    );
  }

  nuevaTranCC = (tipo: ccTipo): void => {
    if (+tipo.pedirautorizacion === 0) {
      this.addTranCC(tipo);
    } else {
      const dialogChkPass = this.dialog.open(CheckPasswordComponent, {
        width: '40%',
        disableClose: true,
        data: new ConfigCheckPasswordModel(1)
      });

      this.endSubs.add(
        dialogChkPass.afterClosed().subscribe(res => {          
          if (res) {
            this.addTranCC(tipo);                    
          } else {
            this.snackBar.open('La contraseña no es correcta.', 'Caja', { duration: 7000 });
          }        
        })
      );
    }
  }

  addTranCC = (tipo: ccTipo): void => {
    const dialogCCF = this.dialog.open(CajacorteFormComponent, {
      width: '50%',
      disableClose: true,
      data: { tipo }
    });

    this.endSubs.add(
      dialogCCF.afterClosed().subscribe(() => this.getCajascortes())
    );
  }
  
  getCajascortes = () => {
    this.endSubs.add(      
      this.ccorteSrvc.buscar({ turno: this.idTurno }).subscribe(lst => {
        this.listacc = lst;
      })
    );
  }

  anularCaja = (obj: ccGeneral) => {
    if (confirm('¿Si anula este corte, se anulará también las nominaciones.?')) {
      this.endSubs.add(        
        this.ccorteSrvc.anularCorte(obj).subscribe(res => {
          if (res.exito) {
            this.getCajascortes();
          }
          this.snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
        })
      );
    }
  }

  getCajacorte = (obj: ccGeneral) => {
    this.getCajacorteEv.emit(obj);
  }
}
