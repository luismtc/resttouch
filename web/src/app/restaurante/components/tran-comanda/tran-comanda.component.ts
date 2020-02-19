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
  detalle_comanda?: number;
  detalle_cuenta?: number;
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

  llenaProductosSeleccionados = (conQueMesa: ComandaGetResponse = this.mesaEnUso) => {
    this.lstProductosSeleccionados = [];
    for (let i = 0; i < conQueMesa.cuentas.length; i++) {
      let cta = conQueMesa.cuentas[i];
      for (let j = 0; j < cta.productos.length; j++) {
        let p = cta.productos[j];
        //console.log(p);
        this.lstProductosSeleccionados.push({
          id: +p.articulo.articulo,
          nombre: p.articulo.descripcion,
          cuenta: +p.numero_cuenta || 1,
          cantidad: +p.cantidad || 1,
          impreso: (+p.impreso === 1) || true,
          precio: parseFloat(p.precio) || 10.00,
          total: parseFloat(p.total) || (parseFloat(p.cantidad) * parseFloat(p.precio)),
          notas: p.notas || '',
          showInputNotas: false,
          itemListHeight: '70px',
          detalle_comanda: +p.detalle_comanda,
          detalle_cuenta: +p.detalle_cuenta
        });
      }
    }
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
    //console.log(prods);
    let tmp: any[] = [];
    for (let i = 0; i < prods.length; i++) {
      tmp.push({
        articulo: prods[i].id,
        cantidad: prods[i].cantidad,
        precio: prods[i].precio,
        total: prods[i].total,
        notas: prods[i].notas,
        impreso: true,
        detalle_comanda: prods[i].detalle_comanda,
        detalle_cuenta: prods[i].detalle_cuenta,
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
      //console.log(objCmd);
      this.comandaSrvc.save(objCmd).subscribe(res => {
        if (res.exito) {
          this.llenaProductosSeleccionados(res.comanda);
          this.setSelectedCuenta(this.cuentaActiva.numero);
          this._snackBar.open('Cuenta actualizada', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
        } else {
          this._snackBar.open(`ERROR: ${res.mensaje}`, `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });          
        }
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
          idcuenta: this.cuentaActiva.cuenta,
          productosACobrar: productosACobrar,
          porcentajePropina: 10
        }
      });

      cobrarCtaRef.afterClosed().subscribe(res => {
        if (res) {
          console.log(res);
          this.cambiarEstatusCuenta(res);
          //this.socket.emit('print:doccontable', JSON.stringify(res));
        }
      });
    } else {
      this._snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
    }
  }

  cambiarEstatusCuenta = (obj: any) => {
    const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +obj.cuenta);
    this.mesaEnUso.cuentas[idxCta].cerrada = +obj.cerrada === 1;
  }
}
