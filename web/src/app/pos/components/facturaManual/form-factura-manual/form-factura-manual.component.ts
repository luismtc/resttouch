import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { GLOBAL } from '../../../../shared/global';
import * as moment from 'moment';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { SignalRService } from '../../../../shared/services/signal-r.service';

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

  public showForm: boolean = true;
  public showFormDetalle: boolean = true;
  public facturaSeries: FacturaSerie[] = [];
  public clientes: Cliente[] = [];
  public monedas: Moneda[] = [];
  public detallesFactura: DetalleFactura[] = [];
  public detalleFactura: DetalleFactura;
  public articulos: Articulo[] = [];
  public displayedColumns: string[] = ['articulo', 'cantidad', 'precio_unitario', 'total', 'editItem'];
  public dataSource: MatTableDataSource<DetalleFactura>;

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private facturaSrvc: FacturaService,
    private facturaSerieSrvc: FacturaSerieService,
    private clienteSrvc: ClienteService,
    private monedaSrvc: MonedaService,
    private articuloSrvc: ArticuloService,
    private signalRSrvc: SignalRService
  ) { }

  ngOnInit() {
    this.resetFactura();
    this.loadFacturaSeries();
    this.loadClientes();
    this.loadMonedas();
    this.loadArticulos();
    this.signalRSrvc.startConnection(`restaurante_01`);
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

  resetFactura = () => {
    this.factura = {
      factura: null, factura_serie: null, cliente: null, fecha_factura: moment().format(GLOBAL.dbDateFormat), moneda: null, exenta: 0, notas: null,
      fel_uuid: null, fel_uuid_anulacion: null
    };
    this.resetDetalleFactura();
    this.detallesFactura = [];
  }

  onSubmit = () => {
    //console.log(this.factura); return;
    this.facturaSrvc.save(this.factura).subscribe(res => {
      //console.log(res);
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
        this._snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
      }
    });
  }

  firmarFactura = () => {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialogModel('Firmar factura', 'Luego de firmar la factura no podrá hacer ninguna modificación. ¿Desea continuar?', 'Sí', 'No')
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
            this._snackBar.open('Factura firmada con éxito...', 'Firmar', { duration: 3000 });
          } else {
            this._snackBar.open(`ERROR: ${resFirma.mensaje}`, 'Firmar', { duration: 3000 });
          }
        });
      }
    });
  }

  procesaDetalleFactura = (detalle: any[]) => {
    let detFact: any[] = [];
    detalle.forEach(d => detFact.push({
      Cantidad: +d.cantidad,
      Descripcion: d.articulo.descripcion,
      Total: +d.total
    }));
    return detFact;
  }

  getTotalDetalle = (detalle: any[]): Number => {
    let suma: number = 0.00;
    detalle.forEach(d => suma += +d.total);
    return suma;
  }

  imprimirFactura = () => {
    //console.log(this.factura);
    this.facturaSrvc.imprimir(+this.factura.factura).subscribe(res => {
      if (res.factura) {
        this.signalRSrvc.broadcastData(`restaurante_01`, `${JSON.stringify({
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
          Total: this.getTotalDetalle(res.factura.detalle),
          NoAutorizacion: res.factura.fel_uuid,
          NombreCertificador: res.factura.certificador_fel.nombre,
          DetalleFactura: this.procesaDetalleFactura(res.factura.detalle)
        })}`, 'SendFactura');
        this._snackBar.open(`Imprimiendo factura ${this.factura.serie_factura}-${this.factura.numero_factura}`, 'Impresión', { duration: 3000 });
      } else {
        this._snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 3000 });
      }
    })
  }

  loadArticulos = () => {
    this.articuloSrvc.getArticulos().subscribe(res => {
      if (res) {
        this.articulos = res;
      }
    });
  }

  setPrecioUnitario = (obj: any) => {
    const idxArticulo = this.articulos.findIndex(a => +a.articulo === +obj.value);
    if (idxArticulo > -1) {
      this.detalleFactura.precio_unitario = +this.articulos[idxArticulo].precio;
      this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
    }
  }

  resetDetalleFactura = () => this.detalleFactura = {
    detalle_factura: null, factura: (this.factura.factura || 0), articulo: null, cantidad: 1, precio_unitario: null, total: null
  };

  loadDetalleFactura = (idfactura: number = +this.factura.factura) => {
    this.facturaSrvc.getDetalle(idfactura, { factura: idfactura }).subscribe(res => {
      //console.log(res);
      if (res) {
        this.detallesFactura = res;
        this.updateTableDataSource();
      }
    });
  }

  getDetalleFactura = (idfactura: number = +this.factura.factura, iddetalle: number) => {
    this.facturaSrvc.getDetalle(idfactura, { detalle_factura: iddetalle }).subscribe((res: any[]) => {
      //console.log(res);
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
    //console.log(this.detalleFactura);
    this.facturaSrvc.saveDetalle(this.detalleFactura).subscribe(res => {
      //console.log(res);
      if (res) {
        this.loadDetalleFactura();
        this.resetDetalleFactura();
      }
    });
  }

  updateTableDataSource = () => this.dataSource = new MatTableDataSource(this.detallesFactura);

}
