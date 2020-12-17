import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';
import { Cuenta } from '../../interfaces/cuenta';
import { Impresora } from '../../../admin/interfaces/impresora';

import { ComandaService } from '../../services/comanda.service';

interface IProductoSelected {
  id: number;
  nombre: string;
  cuenta?: number;
  cantidad: number;
  impreso: number;
  precio?: number;
  total?: number;
  notas?: string;
  showInputNotas: boolean;
  itemListHeight: string;
  detalle_comanda?: number;
  detalle_cuenta?: number;
  impresora?: Impresora;
  detalle?: [];
}

interface IDialogComanda {
  mesaEnUso: ComandaGetResponse;
  lstProductos: IProductoSelected[];
}

@Component({
  selector: 'app-distribuir-productos-cuentas',
  templateUrl: './distribuir-productos-cuentas.component.html',
  styleUrls: ['./distribuir-productos-cuentas.component.css']
})
export class DistribuirProductosCuentasComponent implements OnInit {

  public comanda: Comanda;

  constructor(
    public dialogRef: MatDialogRef<DistribuirProductosCuentasComponent>,
    private snackBar: MatSnackBar,
    private comandaSrvc: ComandaService,
    @Inject(MAT_DIALOG_DATA) public data: IDialogComanda
  ) { }

  ngOnInit() {
    if (+this.data.mesaEnUso.comanda > 0) {
      const meu = this.data.mesaEnUso;
      this.comanda = {
        area: +meu.mesa.area.area,
        mesa: +meu.mesa.mesa,
        mesero: +meu.mesero.usuario,
        comensales: meu.cuentas.length + 1,
        dividirCuentasPorSillas: 1,
        comanda: +meu.comanda,
        cuentas: meu.cuentas,
        replaceUnica: false
      };
      console.log(this.data.lstProductos);
    }
  }

  cancelar = () => this.dialogRef.close(false);

  guardar = () => { };
}
