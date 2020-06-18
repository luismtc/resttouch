import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../shared/global';
import * as moment from 'moment';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

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
  public columnsToDisplay = ['comanda', 'orden', 'nombre', 'total', 'imprimir', 'facturar'];
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
      });

      this.socket.on('shopify:error', (mensaje: string) => {
        this.loadComandasEnLinea();
        this.snackBar.open(`ERROR: ${mensaje}`, 'Firmar', { duration: 10000 });
      });
    }

    this.loadComandasEnLinea();
  }

  ngOnDestroy() { }

  loadComandasEnLinea = () => {
    this.comandaSrvc.getComandasOnLIne().subscribe((res: any[]) => {
      this.comandasEnLinea = res;
      this.dataSource = this.comandasEnLinea;
    });
  }

  setToPrint = (articulos: any[]) => {
    const lstArticulos: any[] = [];
    articulos.forEach(item => {
      lstArticulos.push({
        id: item.articulo.articulo,
        nombre: item.articulo.descripcion,
        cantidad: item.cantidad,
        total: item.total,
        notas: item.notas,
        impresora: item.articulo.impresora
      });
    });
    return lstArticulos;
  }

  imprimir = (obj: any) => {
    // console.log(obj); // return;
    const listaProductos = this.setToPrint(obj.cuentas[0].productos);
    const AImpresoraNormal: productoSelected[] = listaProductos.filter(p => +p.impresora.bluetooth === 0);
    const AImpresoraBT: productoSelected[] = listaProductos.filter(p => +p.impresora.bluetooth === 1);

    let objToPrint = {};

    if (AImpresoraNormal.length > 0) {
      // console.log(AImpresoraNormal);
      objToPrint = {
        Tipo: 'Comanda',
        Nombre: obj.cuentas[0].nombre,
        Numero: obj.comanda,
        NoOrdenEnLinea: obj.origen_datos.numero_orden,
        DireccionEntrega: obj.origen_datos.direccion_entrega,
        DetalleCuenta: AImpresoraNormal,
        Total: null
      };
      this.socket.emit('print:comanda', `${JSON.stringify(objToPrint)}`);
    }

    if (AImpresoraBT.length > 0) {
      objToPrint = {
        Tipo: 'Comanda',
        Nombre: obj.cuentas[0].nombre,
        Numero: obj.comanda,
        NoOrdenEnLinea: obj.origen_datos.numero_orden,
        DireccionEntrega: obj.origen_datos.direccion_entrega,
        DetalleCuenta: AImpresoraBT,
        Total: null
      };
      this.printToBT(JSON.stringify(objToPrint));
    }
  }

  printToBT = (msgToPrint: string = '') => {
    const AppHref = `com.restouch.impresion://impresion/${msgToPrint}`;
    const wref = window.open(AppHref, 'PrntBT', 'height=200,width=200,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
    setTimeout(() => wref.close(), 1000);
  }

  firmar = (obj: any) => {
    // console.log(obj);
    this.facturaSrvc.firmar(+obj.factura.factura).subscribe((res: any) => {
      // console.log(res);
      if (res.exito) {
        this.loadComandasEnLinea();

        const confirmRef = this.dialog.open(ConfirmDialogComponent, {
          maxWidth: '400px',
          data: new ConfirmDialogModel('Imprimir factura', '¿Desea imprimir la factura?', 'Sí', 'No')
        });

        confirmRef.afterClosed().subscribe((confirma: boolean) => {
          if (confirma) {
            this.printFactura(res.factura, obj.origen_datos);
          }
        });
      }
      this.snackBar.open(res.mensaje, 'Facturación', { duration: (res.exito ? 3000 : 10000) });
    });
  }

  printFactura = (fact: any, datosOrigen: any = {}) => {
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
      NitCertificador: fact.certificador_fel.nit,
      FechaDeAutorizacion: fact.fecha_autorizacion,
      NoOrdenEnLinea: datosOrigen.numero_orden,
      FormaDePago: datosOrigen.metodo_pago.join(', '),
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
