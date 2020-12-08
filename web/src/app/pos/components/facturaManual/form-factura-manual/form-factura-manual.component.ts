import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { Socket } from 'ngx-socket-io';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';

import { Factura } from '../../../interfaces/factura';
import { DetalleFactura } from '../../../interfaces/detalle-factura';
import { FacturaService } from '../../../services/factura.service';

import { FacturaSerie } from '../../../interfaces/factura-serie';
import { FacturaSerieService } from '../../../services/factura-serie.service';
import { Cliente } from '../../../../admin/interfaces/cliente';
import { ClienteService } from '../../../../admin/services/cliente.service';
import { Moneda } from '../../../../admin/interfaces/moneda';
import { MonedaService } from '../../../../admin/services/moneda.service';
import { Articulo } from '../../../../wms/interfaces/articulo';
import { ArticuloService } from '../../../../wms/services/articulo.service';

@Component({
  selector: 'app-form-factura-manual',
  templateUrl: './form-factura-manual.component.html',
  styleUrls: ['./form-factura-manual.component.css']
})
export class FormFacturaManualComponent implements OnInit {

  @Input() factura: Factura;
  @Output() facturaSavedEv = new EventEmitter();
  @ViewChild('txtArticulo', { static: false }) txtArticulo: HTMLInputElement;

  public showForm = true;
  public showFormDetalle = true;
  public facturaSeries: FacturaSerie[] = [];
  public clientes: Cliente[] = [];
  public filteredClientes: Cliente[] = [];
  public monedas: Moneda[] = [];
  public detallesFactura: DetalleFactura[] = [];
  public detalleFactura: DetalleFactura;
  public articulos: Articulo[] = [];
  public filteredArticulos: Articulo[] = [];
  public displayedColumns: string[] = ['articulo', 'cantidad', 'precio_unitario', 'total', 'editItem'];
  public dataSource: MatTableDataSource<DetalleFactura>;
  public esMovil = false;
  public refacturacion = false;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private facturaSrvc: FacturaService,
    private facturaSerieSrvc: FacturaSerieService,
    private clienteSrvc: ClienteService,
    private monedaSrvc: MonedaService,
    private articuloSrvc: ArticuloService,
    private socket: Socket,
    private ls: LocalstorageService
  ) { }

  ngOnInit() {
    this.esMovil = this.ls.get(GLOBAL.usrTokenVar).enmovil || false;
    this.refacturacion = false;
    this.resetFactura();
    this.loadFacturaSeries();
    this.loadClientes();
    this.loadMonedas();
    this.loadArticulos();
    if (!!this.ls.get(GLOBAL.usrTokenVar).sede_uuid) {
      this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid);
      this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(GLOBAL.usrTokenVar).sede_uuid));
    }
  }

  filtrar = (value: string) => {
    if (value) {
      const filterValue = value.toLowerCase();
      this.filteredClientes =
        this.clientes.filter(c => c.nombre.toLowerCase().includes(filterValue) || c.nit.toLowerCase().includes(filterValue));
    } else {
      this.filteredClientes = this.clientes;
    }
  }

  loadFacturaSeries = () => {
    this.facturaSerieSrvc.get().subscribe(res => {
      if (res) {
        this.facturaSeries = res;
      }
    });
  }

  loadClientes = () => {
    this.clienteSrvc.get().subscribe(res => {
      if (res) {
        this.clientes = res;
        this.filteredClientes = this.clientes;
      }
    });
  }

  loadMonedas = () => {
    this.monedaSrvc.get().subscribe(res => {
      if (res) {
        this.monedas = res;
      }
    });
  }

  refacturar = () => {
    this.factura = {
      factura: this.factura.factura, factura_serie: null, cliente: null,
      fecha_factura: moment().format(GLOBAL.dbDateFormat), moneda: null, exenta: 0, notas: null,
      fel_uuid: null, fel_uuid_anulacion: null
    };
    this.refacturacion = true;
  }

  resetFactura = () => {
    this.factura = {
      factura: null, factura_serie: null, cliente: null,
      fecha_factura: moment().format(GLOBAL.dbDateFormat), moneda: null, exenta: 0, notas: null,
      fel_uuid: null, fel_uuid_anulacion: null
    };
    this.resetDetalleFactura();
    this.detallesFactura = [];
  }

  displayCliente = (cli: Cliente) => {
    if (cli) {
      this.factura.cliente = cli.cliente;
      return cli.nombre;
    }
    return undefined;
  }

  onSubmit = () => {
    // console.log(this.factura); return;
    if (this.refacturacion) {
      this.facturaSrvc.refacturar(this.factura).subscribe(res => {
        if (res.exito) {
          this.facturaSavedEv.emit();
          this.resetFactura();
          this.refacturacion = false;
          this.factura = {
            factura: res.factura.factura,
            factura_serie: res.factura.factura_serie,
            cliente: res.factura.cliente,
            fecha_factura: res.factura.fecha_factura,
            moneda: res.factura.moneda,
            exenta: +res.factura.exenta,
            notas: res.factura.notas,
            fel_uuid: res.factura.fel_uuid
          };
          this.snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
        }
      });
    } else {
      this.facturaSrvc.save(this.factura).subscribe(res => {
        if (res.exito) {
          this.facturaSavedEv.emit();
          this.resetFactura();
          this.factura = {
            factura: res.factura.factura,
            factura_serie: res.factura.factura_serie,
            cliente: res.factura.cliente,
            fecha_factura: res.factura.fecha_factura,
            moneda: res.factura.moneda,
            exenta: +res.factura.exenta,
            notas: res.factura.notas,
            fel_uuid: res.factura.fel_uuid
          }
          this.snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
        }
      });
    }

  }

  firmarFactura = () => {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        'Firmar factura',
        'Luego de firmar la factura no podrá hacer ninguna modificación. ¿Desea continuar?',
        'Sí', 'No'
      )
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.facturaSrvc.firmar(+this.factura.factura).subscribe(resFirma => {
          if (resFirma.exito) {
            this.factura.numero_factura = resFirma.factura.numero_factura;
            this.factura.serie_factura = resFirma.factura.serie_factura;
            this.factura.certificador_fel = resFirma.factura.certificador_fel;
            this.factura.fel_uuid = resFirma.factura.fel_uuid;
            this.facturaSavedEv.emit();
            this.snackBar.open('Factura firmada con éxito...', 'Firmar', { duration: 3000 });
          } else {
            this.snackBar.open(`ERROR: ${resFirma.mensaje}`, 'Firmar', { duration: 3000 });
          }
        });
      }
    });
  }

  procesaDetalleFactura = (detalle: any[]) => {
    const detFact: any[] = [];
    detalle.forEach(d => detFact.push({
      Cantidad: +d.cantidad,
      Descripcion: d.articulo.descripcion,
      Total: +d.total
    }));
    return detFact;
  }

  getTotalDetalle = (detalle: any[]): number => {
    let suma = 0.00;
    detalle.forEach(d => suma += +d.total);
    return suma;
  }

  getTotalImpuestosAdicionales = (impuestos: any[]) => {
    let suma = 0.00;
    impuestos.forEach(i => suma += +i.total);
    return suma;
  }

  imprimirFactura = () => {
    // console.log(this.factura);
    this.facturaSrvc.imprimir(+this.factura.factura).subscribe(res => {
      if (res.factura) {
        console.log(res.factura);
        this.socket.emit(`print:factura`, `${JSON.stringify({
          NombreEmpresa: res.factura.empresa.nombre,
          NitEmpresa: res.factura.empresa.nit,
          SedeEmpresa: res.factura.sedeFactura.nombre,
          DireccionEmpresa: res.factura.empresa.direccion,
          Fecha: moment(res.factura.fecha_factura).format(GLOBAL.dateFormat),
          Nit: res.factura.receptor.nit,
          Nombre: res.factura.receptor.nombre,
          Direccion: res.factura.receptor.direccion,
          Serie: res.factura.serie_factura,
          Numero: res.factura.numero_factura,
          Total: this.getTotalDetalle(res.factura.detalle) + this.getTotalImpuestosAdicionales((res.factura.impuestos_adicionales || [])),
          NoAutorizacion: res.factura.fel_uuid,
          NombreCertificador: res.factura.certificador_fel.nombre,
          NitCertificador: res.factura.certificador_fel.nit,
          FechaDeAutorizacion: res.factura.fecha_autorizacion,
          NoOrdenEnLinea: '',
          FormaDePago: '',
          DetalleFactura: this.procesaDetalleFactura(res.factura.detalle),
          ImpuestosAdicionales: (res.factura.impuestos_adicionales || [])
        })}`);
        this.snackBar.open(
          `Imprimiendo factura ${this.factura.serie_factura}-${this.factura.numero_factura}`,
          'Impresión', { duration: 3000 }
        );
      } else {
        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 3000 });
      }
    });
  }

  anularFactura = () => {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel(
        'Anular factura',
        'Luego de anular la factura no podrá hacer ninguna modificación. ¿Desea continuar?',
        'Sí',
        'No'
      )
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.facturaSrvc.anular(+this.factura.factura).subscribe(resAnula => {
          if (resAnula.exito) {
            this.factura.fel_uuid_anulacion = resAnula.factura.fel_uuid_anulacion;
            this.facturaSavedEv.emit();
            this.snackBar.open('Factura anulada con éxito...', 'Firmar', { duration: 3000 });
          } else {
            this.snackBar.open(`ERROR: ${resAnula.mensaje}`, 'Firmar', { duration: 10000 });
          }
        });
      }
    });
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
        this.filteredArticulos = this.articulos;
      }
    });
  }

  displayArticulo = (art: Articulo) => {
    if (art) {
      this.detalleFactura.articulo = art.articulo;
      return art.descripcion;
    }
    return undefined;
  }

  filtrarArticulos = (value: string) => {
    if (value) {
      const filterValue = value.toLowerCase();
      this.filteredArticulos =
        this.articulos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
    } else {
      this.filteredArticulos = this.articulos;
    }
  }

  setPrecioUnitario = (obj: any) => {
    const idxArticulo = this.articulos.findIndex(a => +a.articulo === +obj.value);
    if (idxArticulo > -1) {
      this.detalleFactura.precio_unitario = +this.articulos[idxArticulo].precio;
      this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
    }
  }

  resetDetalleFactura = () => {
    this.detalleFactura = {
      detalle_factura: null, factura: (this.factura.factura || 0), articulo: null, cantidad: 1, precio_unitario: null, total: null
    };
    if (this.txtArticulo !== null && this.txtArticulo !== undefined) {
      console.log('txtArticulo está definido...');
      this.txtArticulo.innerText = null;
    }
  }

  loadDetalleFactura = (idfactura: number = +this.factura.factura) => {
    this.facturaSrvc.getDetalle(idfactura, { factura: idfactura }).subscribe(res => {
      // console.log(res);
      if (res) {
        this.detallesFactura = res;
        this.updateTableDataSource();
      }
    });
  }

  getDetalleFactura = (idfactura: number = +this.factura.factura, iddetalle: number) => {
    this.facturaSrvc.getDetalle(idfactura, { detalle_factura: iddetalle }).subscribe((res: any[]) => {
      // console.log(res);
      if (res) {
        this.detalleFactura = {
          detalle_factura: res[0].detalle_factura,
          factura: res[0].factura,
          articulo: res[0].articulo.articulo,
          cantidad: +res[0].cantidad,
          precio_unitario: +res[0].precio_unitario,
          total: +res[0].total
        };
        this.showFormDetalle = true;
      }
    });
  }

  onSubmitDetail = () => {
    this.detalleFactura.factura = this.factura.factura;
    this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
    // console.log(this.detalleFactura);
    this.facturaSrvc.saveDetalle(this.detalleFactura).subscribe(res => {
      // console.log(res);
      if (res) {
        this.loadDetalleFactura();
        this.resetDetalleFactura();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesFactura);

  representacionGrafica = () => {

    this.facturaSrvc.getGrafo(this.factura.factura).subscribe(res => {
      if (res.exito) {
        switch (res.tipo) {
          case 'link': this.openLinkWindow(res.documento); break;
          case 'pdf': this.openPdfDocument(res.documento); break;
        }
      }
    });
  }

  openLinkWindow = (url: string) =>
    window.open(url, 'winFactPdf', 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no')

  openPdfDocument = (pdf: string) => {
    const pdfWindow = window.open('', 'winFactPdf', 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
    pdfWindow.document.write(
      '<iframe width="100%" style="margin: -8px;border: none;" height="100%" src="data:application/pdf;base64, ' +
      encodeURI(pdf) +
      '"></iframe>');
  }
}
