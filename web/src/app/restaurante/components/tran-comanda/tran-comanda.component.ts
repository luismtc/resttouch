import { Component, OnInit, Input } from '@angular/core';
import { WindowConfiguration } from '../../../shared/interfaces/window-configuration';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Socket } from 'ngx-socket-io';
//import { SignalRService } from '../../../shared/services/signal-r.service';

import { UnirCuentaComponent } from '../unir-cuenta/unir-cuenta.component';
import { CobrarPedidoComponent } from '../../../pos/components/cobrar-pedido/cobrar-pedido.component';
import { Cuenta } from '../../interfaces/cuenta';
import { Comanda, ComandaGetResponse } from '../../interfaces/comanda';

import { ComandaService } from '../../services/comanda.service';

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

  @Input() mesaEnUso: ComandaGetResponse;
  public lstProductosSeleccionados: productoSelected[];
  public lstProductosDeCuenta: productoSelected[];
  public lstProductosAImprimir: productoSelected[];
  //public noCuentaSeleccionada: number = null;
  public showPortalComanda: boolean = false;
  public showPortalCuenta: boolean = false;
  public windowConfig: WindowConfiguration;
  public noComanda: number = 0;
  public sumCuenta: number = 0;
  public cuentaActiva: Cuenta;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    public comandaSrvc: ComandaService,
    //private socket: Socket,
    //private signalRSrvc: SignalRService
  ) { }

  ngOnInit() {
    // this.mesaEnUso = infoMesaTest;
    this.resetMesaEnUso();
    this.resetLstProductosSeleccionados();
    this.resetLstProductosDeCuenta();
    this.resetCuentaActiva();
    this.noComanda = this.mesaEnUso.comanda || 0;
    this.llenaProductosSeleccionados();    
    //this.signalRSrvc.startConnection(`restaurante_01`);
    // this.signalRSrvc.addBroadcastDataListener();
  }

  resetMesaEnUso = () => this.mesaEnUso = {
    comanda: null, usuario: null, sede: null, estatus: null, 
    mesa: { 
      mesa: null, 
      area: { area: null, sede: null, area_padre: null, nombre: null }, 
      numero: null, posx: null, posy: null, tamanio: null, estatus: null 
    },
    cuentas: []    
  };
  resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
  resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];
  resetCuentaActiva = () => this.cuentaActiva = { cuenta: null, numero: null, nombre: null, productos: [] };

  llenaProductosSeleccionados = () => {
    this.mesaEnUso.cuentas.forEach(c => c.productos.forEach(p => this.lstProductosSeleccionados.push(p)));
    console.log('PRODUCTOS DE TODAS LAS CUENTAS = ', this.lstProductosSeleccionados);
  }

  setSelectedCuenta(noCuenta: number) {
    this.cuentaActiva = this.mesaEnUso.cuentas.find((c: Cuenta) => +c.numero === +noCuenta);
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
    this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => p.cuenta == +this.cuentaActiva.numero);
  }

  addProductoSelected(producto: any) {
    if (+this.cuentaActiva.numero) {
      const idx = this.lstProductosSeleccionados.findIndex(p => p.id == producto.id && p.cuenta == +this.cuentaActiva.numero && p.impreso == false);

      if (idx < 0) {
        this.lstProductosSeleccionados.push({
          id: producto.id, nombre: producto.nombre, cuenta: +this.cuentaActiva.numero, cantidad: 1, impreso: false, precio: producto.precio,
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
    let lstTemp: productoSelected[] = this.lstProductosSeleccionados.filter(p => p.cuenta != +this.cuentaActiva.numero);
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
        articulo: prods[i].id,
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
    /*
    const dataComanda = {
      area: this.mesaEnUso.mesa.area.nombre,
      mesa: this.mesaEnUso.mesa.numero,
      cuenta: +this.cuentaActiva.numero,
      comanda: this.noComanda,
      productos: this.prepProductosComanda(this.lstProductosAImprimir)
    };
    */
    this.cuentaActiva.productos = this.prepProductosComanda(this.lstProductosDeCuenta);
    const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
    if (idxCta > -1) {
      this.mesaEnUso.cuentas[idxCta] = this.cuentaActiva;
      const objCmd: Comanda = {
        area: this.mesaEnUso.mesa.area.area,
        mesa: this.mesaEnUso.mesa.mesa,
        mesero: this.mesaEnUso.usuario,
        comanda: this.mesaEnUso.comanda,
        cuentas: this.mesaEnUso.cuentas
      };      
      this.comandaSrvc.save(objCmd).subscribe(res => {
        console.log(res);
      });      
    }
    // this.socket.emit("print:comanda", `Imprimiendo comanda de ${this.cuentaActiva.nombre}`);
    /*
    this.signalRSrvc.broadcastData(`restaurante_01`, `${JSON.stringify({
      Tipo: 'Comanda', 
      Nombre: this.cuentaActiva.nombre, 
      Numero: this.noComanda, 
      DetalleCuenta: this.lstProductosAImprimir,
      Total: null
    })}`);
    */
  }

  sumaDetalle = (detalle: productoSelected[]) => {
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
    // this.socket.emit("print:cuenta", `Imprimiendo cuenta de ${this.cuentaActiva.nombre}`);
    /*
    this.signalRSrvc.broadcastData(`restaurante_01`, `${JSON.stringify({
      Tipo: 'Cuenta', 
      Nombre: this.cuentaActiva.nombre, 
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
          cuenta: this.cuentaActiva.nombre,
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
