import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { CheckPasswordComponent, ConfigCheckPasswordModel } from '../../../../shared/components/check-password/check-password.component';
import { CajacorteFormComponent } from '../cajacorte-form/cajacorte-form.component';
import { ReportePdfService } from '../../../services/reporte-pdf.service';

import { ccGeneral, ccTipo } from '../../../interfaces/cajacorte';
import { CajacorteService } from '../../../services/cajacorte.service';
import { Turno } from '../../../interfaces/turno';
import * as moment from 'moment';
import { GLOBAL } from '../../../../shared/global';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-cajacorte-lista',
  templateUrl: './cajacorte-lista.component.html',
  styleUrls: ['./cajacorte-lista.component.css']
})
export class CajacorteListaComponent implements OnInit, OnDestroy {  

  get deshabilitaTipoCC() {    
    return (tipo: ccTipo) => {
      if (+tipo.unico === 1 && this.listacc?.findIndex(cct => +cct.caja_corte_tipo?.caja_corte_tipo === +tipo.caja_corte_tipo && +cct.anulado === 0 ) > -1 ) {
        return true;
      }
      return false;
    };
  }
  
  @Output() getCajacorteEv = new EventEmitter();  
  public idTurno: number = null;
  public turno: Turno = null;
  public listacc: ccGeneral[];
  public ccorteTipo: ccTipo[] = [];

  private endSubs = new Subscription();

  constructor(
    private ccorteSrvc: CajacorteService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private pdfServicio: ReportePdfService
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
      data: { turno: this.idTurno, tipo }
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
  
  imprimirCC = (obj: ccGeneral, _excel = 0) => {
    const params = {
      _validar: true,
      _excel,
      turno_tipo: this.turno.turno_tipo,
      fdel: moment(this.turno.fecha).format(GLOBAL.dbDateFormat),
      fal:  moment(this.turno.fecha).format(GLOBAL.dbDateFormat),
      sede: [this.turno.sede],
      _pagos: []
    }

    this.endSubs.add(
      this.ccorteSrvc.getDetalleCaja(obj.caja_corte).subscribe((det: any) => {
        det.formas_pago.detalle.forEach(fp => {
          fp.forma_pago.monto = fp.total;
          params._pagos.push(fp.forma_pago);
        });        
        this.endSubs.add(
          this.pdfServicio.getReporteCaja(params).subscribe(res => {
            if (res) {
              const blob = new Blob([res], { type: (_excel === 0 ? 'application/pdf' : 'application/vnd.ms-excel') });
              saveAs(blob, `Caja_${moment().format(GLOBAL.dateTimeFormatRptName)}.${_excel === 0 ? 'pdf' : 'xls'}`);
            } else {
              this.snackBar.open('No se pudo generar el reporte...', 'Caja', { duration: 7000 });
            }
          })          
        );        
      })
    );    
  }
}
