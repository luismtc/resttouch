import { Component, OnInit, ViewChild } from '@angular/core';

import { CajacorteListaComponent } from '../cajacorte-lista/cajacorte-lista.component';
import { ccGeneral } from '../../../interfaces/cajacorte';

@Component({
  selector: 'app-cajacorte',
  templateUrl: './cajacorte.component.html',
  styleUrls: ['./cajacorte.component.css']
})
export class CajacorteComponent implements OnInit {
  public ccorte: ccGeneral;
  @ViewChild('lstCortecaja', { static: false }) lstCajacorteComponent: CajacorteListaComponent;

  constructor() {
    this.ccorte = {
      caja_corte: 0,
      creacion: null,
      usuario: 0,
      turno: 0,
      confirmado: null,
      anulado: 0,
      caja_corte_tipo: 0,
      descripcion: null,
      detalle: []
    };
  }

  ngOnInit() {
  }

  editarCajaCorte = (pres: any) => this.ccorte = pres;

  actualizaLista = () => this.lstCajacorteComponent.getCajascortes();

}
