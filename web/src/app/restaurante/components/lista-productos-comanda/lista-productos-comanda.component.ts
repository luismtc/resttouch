import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidaPwdGerenteTurnoComponent } from '../valida-pwd-gerente-turno/valida-pwd-gerente-turno.component';
import { Socket } from 'ngx-socket-io';

import { ProductoSelected } from '../../../wms/interfaces/articulo';

import { DetalleComanda } from '../../interfaces/detalle-comanda';
import { ComandaService } from '../../services/comanda.service';

@Component({
  selector: 'app-lista-productos-comanda',
  templateUrl: './lista-productos-comanda.component.html',
  styleUrls: ['./lista-productos-comanda.component.css']
})
export class ListaProductosComandaComponent implements OnInit {

  @Input() listaProductos: ProductoSelected[] = [];
  @Input() noCuenta: number = null;
  @Input() listHeight = '450px';
  @Input() IdComanda = 0;
  @Input() IdCuenta = 0;
  @Input() bloqueoBotones = false;
  @Input() mesaEnUso: any = {};
  @Output() productoRemovedEv = new EventEmitter();
  public esMovil = false;
  public detalleComanda: DetalleComanda;

  constructor(
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private comandaSrvc: ComandaService,
    private socket: Socket,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  removeProducto = (p: ProductoSelected, idx: number, estaAutorizado = false) => {
    this.bloqueoBotones = true;
    this.detalleComanda = {
      detalle_cuenta: p.detalle_cuenta,
      detalle_comanda: p.detalle_comanda,
      articulo: p.id,
      cantidad: +p.cantidad > 1 ? (+p.cantidad) - 1 : 0,
      precio: +p.precio,
      total: +p.cantidad > 1 ? ((+p.cantidad) - 1) * (+p.precio) : 0,
      notas: p.notas,
      autorizado: estaAutorizado
    };

    this.comandaSrvc.saveDetalle(this.IdComanda, this.IdCuenta, this.detalleComanda).subscribe(res => {
      if (res.exito) {
        p.cantidad = this.detalleComanda.cantidad;
        this.productoRemovedEv.emit({ listaProductos: this.listaProductos, comanda: res.comanda });
        if (+p.cantidad === 0) {
          this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
          this.socket.emit('refrescar:listaCocina', { mesaenuso: this.mesaEnUso });
        }
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 3000 });
      }
      this.bloqueoBotones = false;
    });
  }

  deleteProductoFromList = (p: ProductoSelected, idx: number, estaAutorizado = false) => {
    p.cantidad = 0;
    p.notas = '';
    this.removeProducto(p, idx, estaAutorizado);
  }

  deleteProductoFromListAfterPrinted = (p: ProductoSelected, idx: number) => {
    this.bloqueoBotones = true;
    const dialogoRef = this.dialog.open(ValidaPwdGerenteTurnoComponent, {
      width: '40%', disableClose: true
    });

    dialogoRef.afterClosed().subscribe(res => {
      // console.log(res);
      if (res) {
        // this.autorizar = true;
        this.deleteProductoFromList(p, idx, true);
        this.snackBar.open('Se eliminará el producto seleccionado.', 'Comanda', { duration: 5000 });
      } else {
        this.snackBar.open('La contraseña no es correcta', 'Comanda', { duration: 5000 });
      }
      this.bloqueoBotones = false;
    });
  }

  toggleShowInputNotas(p: ProductoSelected) {
    console.log('ARTICULO = ', p);
    p.showInputNotas = !p.showInputNotas;
    if (p.showInputNotas) {
      p.itemListHeight = '140px';
    } else {
      p.itemListHeight = '70px';
      this.saveNotasProducto(p);
    }
  }

  saveNotasProducto = (p: ProductoSelected) => {
    this.comandaSrvc.saveNotasProducto({ detalle_comanda: p.detalle_comanda, notas: p.notas }).subscribe(res => {
      if (res.exito) {
        this.snackBar.open('Notas de producto guardadas con éxito...', 'Producto', { duration: 3000 });
      }
    });
  }

  doAction(ev: string) {
    console.log(ev);
  }

}
