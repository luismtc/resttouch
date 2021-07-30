import { Component, OnInit, Input, Output, EventEmitter, Inject, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GLOBAL } from '../../../../shared/global';

import { ccGeneral, ccDetalle, ccTipo, ccNominacion, ccDocumentoRetiro } from '../../../interfaces/cajacorte';
import { CajacorteService } from '../../../services/cajacorte.service';
import { FormaPago } from '../../../../admin/interfaces/forma-pago';
import { FpagoService } from '../../../../admin/services/fpago.service';
import * as moment from 'moment';


interface IDataCC {  
  tipo: ccTipo
}

@Component({
  selector: 'app-cajacorte-form',
  templateUrl: './cajacorte-form.component.html',
  styleUrls: ['./cajacorte-form.component.css']
})
export class CajacorteFormComponent implements OnInit, OnDestroy {

  get totalEfectivo(){
    let tot = 0.00
    this.ccorteNomi.forEach(ccn => tot += +ccn.total);
    return tot;
  }

  get totalFormasPago() {
    let tot = 0.00;
    this.formasPago.forEach(fp => tot += +fp.montocc);
    return tot;
  }

  get granTotal() {
    return this.totalEfectivo + this.totalFormasPago;
  }

  get verDocumento() {
    return +this.data.tipo.pedirdocumento === 1 && this.ccorteNomi.length > 0
  }

  @Input() ccorte: ccGeneral;
  @Output() cajacorteSavedEv = new EventEmitter();
  public ccorteTipo: ccTipo[] = [];
  public ccorteNomi: ccNominacion[] = [];
  public formasPago: FormaPago[] = [];
  public documento: ccDocumentoRetiro = {
    serie: null, numero: null, fecha: moment().format(GLOBAL.dbDateFormat)
  };

  private endSubs = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private cajacorteSrvc: CajacorteService,
    private fpagoSrvc: FpagoService,
    public dialogRef: MatDialogRef<CajacorteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDataCC
  ) {}

  ngOnInit() {    
    this.loadNominaciones();
    this.loadFormasPago();
  } 

  ngOnDestroy(): void {
    this.endSubs.unsubscribe();
  }

  loadNominaciones = () => {
    this.endSubs.add(      
      this.cajacorteSrvc.getCajaCorteNominacion().subscribe(res => {
        this.ccorteNomi = res.map(r => {
          r.cantidad = null;
          r.total = 0;
          return r;
        });        
        setTimeout(() => document.getElementById(`txtCantidad_${this.ccorteNomi[0].caja_corte_nominacion}`).focus());
      })
    );
  }

  loadFormasPago = () => {
    this.endSubs.add(
      this.fpagoSrvc.get({ activo: 1, esefectivo: 0 }).subscribe(res => {
        this.formasPago = res.map( r => {
          r.montocc = null;
          return r;
        });
      })
    );
  }  

  guardar = () => {
    const params = {
      efectivo: this.ccorteNomi,
      formas_pago: this.formasPago,
      documento: this.documento
    }
    console.log(params);
  }

  cancelar = () => this.dialogRef.close();

}
    
