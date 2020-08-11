import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import { Impresora } from '../../../admin/interfaces/impresora';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidaPwdGerenteTurnoComponent } from '../valida-pwd-gerente-turno/valida-pwd-gerente-turno.component';

import { DetalleComanda } from '../../interfaces/detalle-comanda';
import { ComandaService } from '../../services/comanda.service';

interface productoSelected {
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
}

@Component({
  selector: 'app-lista-productos-comanda',
  templateUrl: './lista-productos-comanda.component.html',
  styleUrls: ['./lista-productos-comanda.component.css']
})
export class ListaProductosComandaComponent implements OnInit, DoCheck {

  @Input() listaProductos: productoSelected[] = [];
  @Input() noCuenta: number = null;
  @Input() listHeight: string = '450px';
  @Input() IdComanda: number = 0;
  @Input() IdCuenta: number = 0;
  @Output() productoRemovedEv = new EventEmitter();
  public esMovil: boolean = false;
  public detalleComanda: DetalleComanda;

  constructor(
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private comandaSrvc: ComandaService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  ngDoCheck() {
    // console.log('Desde lista productos comanda = ', this.listaProductos);
  }

  removeProducto = (p: productoSelected, idx: number) => {

    this.detalleComanda = {
      detalle_cuenta: p.detalle_cuenta,
      detalle_comanda: p.detalle_comanda,
      articulo: p.id,
      cantidad: +p.cantidad > 1 ? (+p.cantidad) - 1 : 0,
      precio: +p.precio,
      total: +p.cantidad > 1 ? ((+p.cantidad) - 1) * (+p.precio) : 0,
      notas: p.notas
    };

    this.comandaSrvc.saveDetalle(this.IdComanda, this.IdCuenta, this.detalleComanda).subscribe(res => {
      if (res.exito) {
        p.cantidad = this.detalleComanda.cantidad;
        this.productoRemovedEv.emit({listaProductos: this.listaProductos, comanda: res.comanda});
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 3000 });
      }
    });
  }

  deleteProductoFromList = (p: productoSelected, idx: number) => {
    p.cantidad = 0;
    p.notas = '';
    this.removeProducto(p, idx);
  }

  deleteProductoFromListAfterPrinted = (p: productoSelected, idx: number) => {
    const dialogoRef = this.dialog.open(ValidaPwdGerenteTurnoComponent, {
      width: '20%', disableClose: true
    });

    dialogoRef.afterClosed().subscribe(res => {
      // console.log(res);
      if (res) {
        this.deleteProductoFromList(p, idx);
        this.snackBar.open('Se eliminará el producto seleccionado.', 'Comanda', { duration: 5000 });
      } else {
        this.snackBar.open('La contraseña no es correcta', 'Comanda', { duration: 5000 });
      }
    });
  }

  toggleShowInputNotas(p: productoSelected) {
    p.showInputNotas = !p.showInputNotas;
    if (p.showInputNotas) {
      p.itemListHeight = '140px';
    } else {
      p.itemListHeight = '70px';
    }
  }

  doAction(ev: string) {
    console.log(ev);
  }

}
