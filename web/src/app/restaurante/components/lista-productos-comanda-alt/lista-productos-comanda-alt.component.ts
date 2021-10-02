import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';

import { ValidaPwdGerenteTurnoComponent } from '../valida-pwd-gerente-turno/valida-pwd-gerente-turno.component';
import { DialogElminarProductoComponent, ElminarProductoModel } from '../../../shared/components/dialog-elminar-producto/dialog-elminar-producto.component';
import { NotasGeneralesComandaComponent } from '../../components/notas-generales-comanda/notas-generales-comanda.component';
import { Socket } from 'ngx-socket-io';

import { DetalleCuentaSimplified } from '../../interfaces/cuenta';
import { DetalleComanda } from '../../interfaces/detalle-comanda';
import { ComandaService } from '../../services/comanda.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-productos-comanda-alt',
  templateUrl: './lista-productos-comanda-alt.component.html',
  styleUrls: ['./lista-productos-comanda-alt.component.css']
})
export class ListaProductosComandaAltComponent implements OnInit, OnDestroy {

  get cantidadDeProductos() {
    let cntProd = 0;
    for (const p of this.detalleCuenta) {
      cntProd += +p.cantidad;
    }
    return cntProd;
  }

  get totalDeProductos() {
    return (lista: DetalleCuentaSimplified[] = null) => {
      let totProd = 0.00;
      let lst: DetalleCuentaSimplified[] = lista || this.detalleCuenta;
      for (const p of lst) {
        totProd += ((p.cantidad * p.precio)) + this.totalDeProductos(p.detalle);
      }
      return totProd;
    }
  }

  @Input() detalleCuenta: DetalleCuentaSimplified[] = [];
  @Input() listHeight = '450px';
  @Input() bloqueoBotones = false;
  @Input() mesaEnUso: any = {};
  @Output() productoRemovedEv = new EventEmitter();

  public esMovil = false;
  public keyboardLayout = GLOBAL.IDIOMA_TECLADO;
  public detalleComanda: DetalleComanda;

  private endSubs = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private ls: LocalstorageService,
    private comandaSrvc: ComandaService,
    private socket: Socket,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
  }

  ngOnDestroy(): void {
    this.endSubs.unsubscribe();
  }

  toggleShowInputNotas = (p: DetalleCuentaSimplified) => {
    const ngenDialog = this.dialog.open(NotasGeneralesComandaComponent, {
      width: '50%',
      data: { 
        titulo: `artículo ${p.descripcion}`,
        notasGenerales: (p.notas || '')
      }
    });

    this.endSubs.add(      
      ngenDialog.afterClosed().subscribe((notasGen: string) => {
        if (notasGen !== null) {
          if (notasGen.trim().length > 0) {
            this.endSubs.add(              
              this.comandaSrvc.saveNotasProducto({ detalle_comanda: p.detalle_comanda, notas: notasGen.trim() }).subscribe(res => {
                if (res.exito) {
                  p.notas = notasGen.trim();                
                  this.snackBar.open(res.mensaje, 'Artículo', { duration: 3000 });
                } else {
                  this.snackBar.open(`ERROR: ${res.mensaje}`, 'Artículo', { duration: 7000 });
                }
              })
            );
          }
        }
      })
    );
  }

  removeProducto = (p: DetalleCuentaSimplified, idx: number, estaAutorizado = false, cantidad?: number) => {
    this.bloqueoBotones = true;
    this.detalleComanda = {
      detalle_cuenta: p.detalle_cuenta,
      detalle_comanda: p.detalle_comanda,
      articulo: p.articulo,
      cantidad: +p.cantidad > 1 ? (+p.cantidad) - 1 : 0,
      precio: +p.precio,
      total: +p.cantidad > 1 ? ((+p.cantidad) - 1) * (+p.precio) : 0,
      notas: p.notas,
      autorizado: estaAutorizado
    };

    if (cantidad) {
      this.detalleComanda.cantidad = cantidad;
      this.detalleComanda.total = (cantidad * this.detalleComanda.precio)
    }

    this.endSubs.add(      
      this.comandaSrvc.saveDetalle(p.comanda, p.cuenta_cuenta, this.detalleComanda).subscribe(res => {
        if (res.exito) {
          p.cantidad = this.detalleComanda.cantidad;
          // this.productoRemovedEv.emit({ listaProductos: this.detalleCuenta, comanda: res.comanda });
          this.productoRemovedEv.emit(+p.numero_cuenta);
          if (+p.cantidad === 0) {
            this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
            this.socket.emit('refrescar:listaCocina', { mesaenuso: this.mesaEnUso });
          }
        } else {
          this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 3000 });
        }
        this.bloqueoBotones = false;
      })
    );
  }

  deleteProductoFromList = (p: DetalleCuentaSimplified, idx: number, estaAutorizado = false) => {
    p.cantidad = 0;
    p.notas = '';
    this.removeProducto(p, idx, estaAutorizado);
  }

  deleteProductoFromListAfterPrinted = (p: DetalleCuentaSimplified, idx: number) => {
    this.bloqueoBotones = true;
    const dialogoRef = this.dialog.open(ValidaPwdGerenteTurnoComponent, {
      width: '40%', disableClose: true
    });

    this.endSubs.add(
      dialogoRef.afterClosed().subscribe(res => {
        // console.log(res);
        if (res) {
          // this.autorizar = true;
          //this.deleteProductoFromList(p, idx, true);
          const dialogDelete = this.dialog.open(DialogElminarProductoComponent, {
            width: '40%', disableClose: true, data: new ElminarProductoModel(p)
          });          
          this.endSubs.add(            
            dialogDelete.afterClosed().subscribe(res => {
              if (res && res.respuesta){
                this.removeProducto(res.producto, idx, true, res.producto.cantidad)
                this.snackBar.open('Se eliminará el producto seleccionado.', 'Comanda', { duration: 5000 });
              }
            })
          );
        } else {
          this.snackBar.open('La contraseña no es correcta', 'Comanda', { duration: 5000 });
        }
        this.bloqueoBotones = false;
      })    
    );
  }

}
