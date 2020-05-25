import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import * as moment from 'moment';

import { CobrarPedidoComponent } from '../../../pos/components/cobrar-pedido/cobrar-pedido.component';

// import { Comanda } from '../../interfaces/comanda';
import { Impresora } from '../../../admin/interfaces/impresora';
import { ComandaService } from '../../services/comanda.service';
import { FacturaService } from '../../../pos/services/factura.service';

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
  selector: 'app-comanda-en-linea',
  templateUrl: './comanda-en-linea.component.html',
  styleUrls: ['./comanda-en-linea.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ComandaEnLineaComponent implements OnInit, OnDestroy {

  public dataSource: any[] = [];
  public columnsToDisplay = ['comanda', 'nombre', 'total', 'imprimir', 'facturar'];
  public expandedElement: any | null;

  public comandasEnLinea: any[] = [];
  // public intervalId: any;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private socket: Socket,
    private ls: LocalstorageService,
    private comandaSrvc: ComandaService,
    private facturaSrvc: FacturaService
  ) { }

  ngOnInit() {
    if (!!this.ls.get(GLOBAL.usrTokenVar).sede_uuid) {
      this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid);
      this.socket.on('shopify:updlist', () => {
        this.loadComandasEnLinea();
        console.log(`${moment().format(GLOBAL.dateTimeFormat)}: Actualizando lista de ordenes en linea...`);
      });
    }

    this.loadComandasEnLinea();
    // this.intervalId = setInterval(() => this.loadComandasEnLinea(), 30000); // Ejecución cada 30s
  }

  ngOnDestroy() {
    /*
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    */
  }

  loadComandasEnLinea = () => {
    this.comandaSrvc.getComandasOnLIne().subscribe((res: any[]) => {
      this.comandasEnLinea = res;
      this.dataSource = this.comandasEnLinea;
      // console.log(this.comandasEnLinea);
    });
  }

  setToPrint = (articulos: any[]) => {
    const lstArticulos: any[] = [];
    articulos.forEach(item => {
      lstArticulos.push({
        id: item.articulo.articulo,
        nombre: item.articulo.descripcion,
        cantidad: item.cantidad,
        notas: item.notas,
        impresora: item.articulo.impresora
      });
    });
    return lstArticulos;
  }

  imprimir = (obj: any) => {

    /*
    const objCmd: Comanda = {
      area: obj.mesa.area.area,
      mesa: obj.mesa.mesa,
      mesero: obj.usuario,
      comanda: obj.comanda,
      cuentas: obj.cuentas
    };
    */

    /*
    this.comandaSrvc.save(objCmd).subscribe((res) => {
      if (res.exito) {
        this.comandaSrvc.setProductoImpreso(this.cuentaActiva.cuenta).subscribe(resImp => {
          this.llenaProductosSeleccionados(resImp.comanda);
          this.setSelectedCuenta(this.cuentaActiva.numero);
          this._snackBar.open('Cuenta actualizada', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
        });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
      }
    });
    */
    const listaProductos = this.setToPrint(obj.cuentas[0].productos);
    // console.log('Lista = ', listaProductos);
    const AImpresoraNormal: productoSelected[] = listaProductos.filter(p => +p.impresora.bluetooth === 0);
    // console.log('IMPRESORA = ', AImpresoraNormal);
    const AImpresoraBT: productoSelected[] = listaProductos.filter(p => +p.impresora.bluetooth === 1);
    // console.log('BT = ', AImpresoraBT);

    let objToPrint = {};

    if (AImpresoraNormal.length > 0) {
      objToPrint = {
        Tipo: 'Comanda',
        Nombre: obj.cuentas[0].nombre,
        Numero: obj.comanda,
        DetalleCuenta: AImpresoraNormal,
        Total: null
      };
      // console.log(objToPrint);
      this.socket.emit('print:comanda', `${JSON.stringify(objToPrint)}`);
    }

    if (AImpresoraBT.length > 0) {
      objToPrint = {
        Tipo: 'Comanda',
        Nombre: obj.cuentas[0].nombre,
        Numero: obj.comanda,
        DetalleCuenta: AImpresoraBT,
        Total: null
      };
      // console.log(objToPrint);
      this.printToBT(JSON.stringify(objToPrint));
    }
  }

  printToBT = (msgToPrint: string = '') => {
    const AppHref = `com.restouch.impresion://impresion/${msgToPrint}`;
    const wref = window.open(AppHref, 'PrntBT', 'height=200,width=200,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
    setTimeout(() => wref.close(), 1000);
  }

  firmar = (obj: any) => {
    console.log(obj);
    this.facturaSrvc.firmar(+obj.factura.factura).subscribe((res: any) => {
      console.log(res);
      if (res.exito) {
        this.loadComandasEnLinea();
        this.printFactura(res.factura);
      }
      this.snackBar.open('Facturación', res.mensaje, { duration: 3000 });
    });
  }

  printFactura = (fact: any) => {
    const dataToPrint = {
      NombreEmpresa: fact.empresa.nombre_comercial,
      NitEmpresa: fact.empresa.nit,
      SedeEmpresa: fact.sedeFactura.nombre,
      DireccionEmpresa: fact.empresa.direccion,
      Fecha: moment(fact.fecha_factura).format(GLOBAL.dateFormat),
      Nit: fact.receptor.nit,
      Nombre: fact.receptor.nombre,
      Direccion: fact.receptor.direccion,
      Serie: fact.serie_factura,
      Numero: fact.numero_factura,
      Total: 0.00,
      NoAutorizacion: fact.fel_uuid,
      NombreCertificador: fact.certificador_fel.nombre,
      DetalleFactura: []
    };

    for (const det of fact.detalle) {
      dataToPrint.DetalleFactura.push({
        Cantidad: det.cantidad,
        Descripcion: det.articulo.descripcion,
        Total: parseFloat(det.total)
      });
      dataToPrint.Total += parseFloat(det.total);
    }

    this.socket.emit('print:factura', JSON.stringify(dataToPrint));
  }

  /*
  facturar = (obj: any) => {
    // console.log(obj);
    const productosACobrar = obj.cuentas[0].productos;
    if (productosACobrar.length > 0) {
      const cobrarCtaRef = this.dialog.open(CobrarPedidoComponent, {
        width: '95%',
        data: {
          cuenta: obj.cuentas[0].nombre,
          idcuenta: obj.cuentas[0].cuenta,
          productosACobrar: productosACobrar,
          porcentajePropina: 10
        }
      });

      cobrarCtaRef.afterClosed().subscribe(res => {
        if (res) {
          // console.log(res);
          obj.cuentas[0].cerrada = +res.cerrada;
        }
        this.loadComandasEnLinea();
      });
    } else {
      this.snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
    }
  }
  */
}