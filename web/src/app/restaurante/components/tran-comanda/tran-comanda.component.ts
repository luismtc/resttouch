import { Component, OnInit, Input } from '@angular/core';
import { WindowConfiguration } from '../../../shared/interfaces/window-configuration';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Socket } from 'ngx-socket-io';
//import { SignalRService } from '../../../shared/services/signal-r.service';

import { UnirCuentaComponent } from '../unir-cuenta/unir-cuenta.component';
import { CobrarPedidoComponent } from '../../../pos/components/cobrar-pedido/cobrar-pedido.component';
import { Cuenta } from '../../interfaces/cuenta';

/*
const infoMesaTest = {
  area: 'Area 01',
  noMesa: 1,
  cuentas: [
    { numero: 1, nombre: 'Juan' },
    { numero: 2, nombre: 'Pedro' },
    { numero: 3, nombre: 'Pablo' }
  ]
};
*/
/*
    this.mesaSeleccionada = {
      mesa: +m.numero,
      mesero: '',
      comensales: '1',
      esEvento: false,
      dividirCuentasPorSillas: false,
      cuentas: [
        {
          numero: 1,
          nombre: '1',
          productos: []
        }
      ]
    }
*/

interface productoSelected {
  id: number;
  nombre: string;
  cuenta?: number;
  cantidad: number;
  impreso: boolean;
  precio?: number;
  total?: number;
  notas?: string;
  showInputNotas: boolean;
  itemListHeight: string;
}

@Component({
  selector: 'app-tran-comanda',
  templateUrl: './tran-comanda.component.html',
  styleUrls: ['./tran-comanda.component.css']
})
export class TranComandaComponent implements OnInit {

  @Input() mesaEnUso: any;
  private lstProductosSeleccionados: productoSelected[];
  private lstProductosDeCuenta: productoSelected[];
  private lstProductosAImprimir: productoSelected[];
  private cuentaSeleccionada: string = null;
  private noCuentaSeleccionada: number = null;
  private showPortalComanda: boolean = false;
  private showPortalCuenta: boolean = false;
  private windowConfig: WindowConfiguration;
  private noComanda: number = 0;
  private sumCuenta: number = 0;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    //private socket: Socket,
    //private signalRSrvc: SignalRService
  ) { }

  ngOnInit() {
    // this.mesaEnUso = infoMesaTest;
    this.mesaEnUso = { cuentas: [] };
    this.resetLstProductosSeleccionados();
    this.resetLstProductosDeCuenta();
    this.noComanda = this.mesaEnUso.comanda || 0;
    //this.signalRSrvc.startConnection(`restaurante_01`);
    // this.signalRSrvc.addBroadcastDataListener();
  }

  resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
  resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];

  setSelectedCuenta(noCuenta: number) {
    const ctaSel = this.mesaEnUso.cuentas.find((c: Cuenta) => +c.numero === +noCuenta);
    this.cuentaSeleccionada = ctaSel.nombre;
    this.noCuentaSeleccionada = noCuenta;
    this.setLstProductosDeCuenta();
  }

  setSumaCuenta(lista: productoSelected[]) {
    let suma: number = 0.00;
    for (let i = 0; i < lista.length; i++) {
      suma += (lista[i].precio * lista[i].cantidad);
    }
    this.sumCuenta = suma;
  }

  setLstProductosDeCuenta() {
    this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => p.cuenta == this.noCuentaSeleccionada);
  }

  addProductoSelected(producto: any) {
    if (this.noCuentaSeleccionada) {
      const idx = this.lstProductosSeleccionados.findIndex(p => p.id == producto.id && p.cuenta == this.noCuentaSeleccionada && p.impreso == false);

      if (idx < 0) {
        this.lstProductosSeleccionados.push({
          id: producto.id, nombre: producto.nombre, cuenta: this.noCuentaSeleccionada, cantidad: 1, impreso: false, precio: producto.precio,
          notas: '', showInputNotas: false, itemListHeight: '70px', total: 1 * producto.precio
        });
      } else {
        this.lstProductosSeleccionados[idx].cantidad++;
        this.lstProductosSeleccionados[idx].total = this.lstProductosSeleccionados[idx].cantidad * this.lstProductosSeleccionados[idx].precio;
      }

      this.setLstProductosDeCuenta();
    }
  }

  updProductosCuenta(nvaLista: productoSelected[] = []) {
    let lstTemp: productoSelected[] = this.lstProductosSeleccionados.filter(p => p.cuenta != this.noCuentaSeleccionada);
    if (nvaLista.length > 0) {
      this.lstProductosSeleccionados = lstTemp.concat(nvaLista);
    } else {
      this.lstProductosSeleccionados = lstTemp;
    }
  }

  prepProductosComanda(prods: productoSelected[]) {
    let tmp: any[] = [];
    for (let i = 0; i < prods.length; i++) {
      tmp.push({
        id: prods[i].id,
        cantidad: prods[i].cantidad,
        precio: prods[i].precio,
        total: prods[i].total,
        notas: prods[i].notas,
        impreso: true
      });
    }
    return tmp;
  }

  printComanda() {
    this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => !p.impreso);
    this.lstProductosDeCuenta.map(p => p.impreso = true);
    this.noComanda = this.mesaEnUso.comanda;
    this.windowConfig = { width: 325, height: 550, left: 200, top: 200, menubar: 'no', resizable: 'no', titlebar: 'no', toolbar: 'no' };
    this.showPortalComanda = true;

    const dataComanda = {
      area: this.mesaEnUso.area,
      mesa: this.mesaEnUso.mesa,
      cuenta: this.noCuentaSeleccionada,
      comanda: this.noComanda,
      productos: this.prepProductosComanda(this.lstProductosAImprimir)
    };
    console.log(dataComanda, JSON.stringify(dataComanda));
    // this.socket.emit("print:comanda", `Imprimiendo comanda de ${this.cuentaSeleccionada}`);
    /*
    this.signalRSrvc.broadcastData(`restaurante_01`, `${JSON.stringify({
      Tipo: 'Comanda', 
      Nombre: this.cuentaSeleccionada, 
      Numero: this.noComanda, 
      DetalleCuenta: this.lstProductosAImprimir,
      Total: null
    })}`);
    */
  }

  private sumaDetalle = (detalle: productoSelected[]) => {
    let total = 0.00;
    for (let i = 0; i < detalle.length; i++) {
      total += detalle[i].total || 0.00;
    }
    return total;
  }

  printCuenta() {
    this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => p.impreso);
    this.setSumaCuenta(this.lstProductosAImprimir);
    this.windowConfig = { width: 325, height: 550, left: 200, top: 200, menubar: 'no', resizable: 'no', titlebar: 'no', toolbar: 'no' };
    this.showPortalCuenta = true;
    // this.socket.emit("print:cuenta", `Imprimiendo cuenta de ${this.cuentaSeleccionada}`);
    /*
    this.signalRSrvc.broadcastData(`restaurante_01`, `${JSON.stringify({
      Tipo: 'Cuenta', 
      Nombre: this.cuentaSeleccionada, 
      Numero: null, 
      DetalleCuenta: this.lstProductosAImprimir,
      Total: this.sumaDetalle(this.lstProductosAImprimir)
    })}`);
    */
  }

  unirCuentas() {
    const unirCuentaRef = this.dialog.open(UnirCuentaComponent, {
      width: '55%',
      data: { lstProductosSeleccionados: this.lstProductosSeleccionados, mesaEnUso: this.mesaEnUso }
    });

    unirCuentaRef.afterClosed().subscribe(result => {
      if (result) {
        this.lstProductosSeleccionados = result;
        this.setLstProductosDeCuenta();
      }
    });
  }

  cobrarCuenta() {
    const productosACobrar = this.lstProductosDeCuenta.filter(p => p.impreso);
    if (productosACobrar.length > 0) {
      const cobrarCtaRef = this.dialog.open(CobrarPedidoComponent, {
        width: '650px',
        data: {
          cuenta: this.cuentaSeleccionada,
          productosACobrar: productosACobrar,
          porcentajePropina: 10
        }
      });

      cobrarCtaRef.afterClosed().subscribe(res => {
        if (res) {
          console.log(res);
          //this.socket.emit('print:doccontable', JSON.stringify(res));
        }
      });
    } else {
      this._snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
    }
  }

}
