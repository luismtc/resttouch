import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Comanda, ComandaGetResponse } from '../interfaces/comanda';
import { DetalleComanda } from '../interfaces/detalle-comanda';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'comanda';

  constructor(
    private http: HttpClient,
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
  }

  get(fltr: any = {}): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandaDeMesa(idmesa: number): Observable<ComandaGetResponse> {
    return this.http.get<ComandaGetResponse>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda/${idmesa}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Comanda) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar${entidad.comanda ? ('/' + entidad.comanda) : ''}`,
      entidad
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  enviarPedido(idcomanda: number, pedido: any) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/callcenter/guardar_pedido/${idcomanda}`,
      pedido
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalleCombo(idcomanda: number, idcuenta: number, detalle: DetalleComanda) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_detalle_combo/${idcomanda}/${idcuenta}`,
      detalle
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveNotasGenerales(entidad: any) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_notas_generales/${entidad.comanda}`,
      entidad
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveNotasProducto(entidad: any) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_notas_producto/${entidad.detalle_comanda}`,
      entidad
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(idcomanda: number, idcuenta: number, detalle: DetalleComanda) {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_detalle/${idcomanda}/${idcuenta}`,
      detalle
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  setProductoImpreso(idcuenta: number = 0) {
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/imprimir/${idcuenta}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  cerrarMesa(idMesa: number): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/cerrar_mesa/${idMesa}`,
      null
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandasOnLIne(): Observable<ComandaGetResponse[]> {
    return this.http.get<ComandaGetResponse[]>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  validaPwdGerenteTurno(pwd: string): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/validapwdgerenteturno`,
      { pwd }
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  cerrarEstacion(idcomanda: number): Observable<any> {
    return this.http.get<ComandaGetResponse[]>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/cerrar_estacion/${idcomanda}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getCuenta(idcuenta: number): Observable<any> {
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/cuenta/get_cuenta/${idcuenta}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  unificarCuentas(deCuenta: number, aCuenta: number): Observable<any> {
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/unir_cuentas/${deCuenta}/${aCuenta}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  trasladarMesa(idComanda: number, idMesaOrigen: number, idMesaDestino: number): Observable<any> {
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/trasladar_mesa/${idComanda}/${idMesaOrigen}/${idMesaDestino}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandasCocina(): Observable<any> {
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda_cocina`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  setComandaCocinada(idcomanda: number, datos: any): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/set_cocinado/${idcomanda}`,
      datos
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  distribuirCuentas(datos: any): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/distribuir_cuentas`,
      datos
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  cancelarPedido(idComanda: number, datos: any): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/anular_pedido/${idComanda}`,
      datos
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandasOnLine_Test(): any[] {
    const comandasOnLine: any[] = [
      {
        comanda: 37,
        total: 8,
        usuario: 6,
        sede: 1,
        estatus: 1,
        turno: 2,
        mesa: {
          mesa: 1,
          area: {
            area: 1,
            sede: 1,
            area_padre: null,
            nombre: 'Bar'
          },
          numero: 1,
          posx: 23.8667,
          posy: 18.8333,
          tamanio: 72.0000,
          estatus: 2
        },
        cuentas: [
          {
            cuenta: 31,
            comanda: 37,
            nombre: 'Única',
            numero: 1,
            propina_monto: 0.80,
            propina_porcentaje: 10.00,
            cerrada: 1,
            productos: [
              {
                detalle_cuenta: 75,
                cuenta_cuenta: 31,
                detalle_comanda: 79,
                comanda: 37,
                articulo: {
                  articulo: 1,
                  categoria_grupo: 21,
                  presentacion: null,
                  descripcion: 'Original',
                  precio: 8.00,
                  bien_servicio: 'B',
                  existencias: 969.00,
                  impresora: {
                    impresora: 1,
                    sede: 1,
                    nombre: 'EPSON L120 Series',
                    direccion_ip: null,
                    ubicacion: null,
                    bluetooth: 0
                  }
                },
                cantidad: 1,
                precio: 8.00,
                impreso: 1,
                total: 8.00,
                notas: '',
                numero_cuenta: 1
              }
            ]
          }
        ]
      },
      {
        comanda: 45,
        total: 76,
        usuario: 2,
        sede: 1,
        estatus: 1,
        turno: 2,
        mesa: {
          mesa: 3,
          area: {
            area: 1,
            sede: 1,
            area_padre: null,
            nombre: 'Bar'
          },
          numero: 3,
          posx: 11.0667,
          posy: 41.5000,
          tamanio: 72.0000,
          estatus: 2
        },
        cuentas: [
          {
            cuenta: 39,
            comanda: 45,
            nombre: 'uno',
            numero: 1,
            propina_monto: 0.80,
            propina_porcentaje: 10.00,
            cerrada: 1,
            productos: [
              {
                detalle_cuenta: 84,
                cuenta_cuenta: 39,
                detalle_comanda: 88,
                comanda: 45,
                articulo: {
                  articulo: 1,
                  categoria_grupo: 21,
                  presentacion: null,
                  descripcion: 'Original',
                  precio: 8.00,
                  bien_servicio: 'B',
                  existencias: 969.00,
                  impresora: {
                    impresora: 1,
                    sede: 1,
                    nombre: 'EPSON L120 Series',
                    direccion_ip: null,
                    ubicacion: null,
                    bluetooth: 0
                  }
                },
                cantidad: 1,
                precio: 8.00,
                impreso: 1,
                total: 8.00,
                notas: '',
                numero_cuenta: 1
              },
              {
                detalle_cuenta: 85,
                cuenta_cuenta: 40,
                detalle_comanda: 89,
                comanda: 45,
                articulo: {
                  articulo: 2,
                  categoria_grupo: 21,
                  presentacion: null,
                  descripcion: 'Zero',
                  precio: 8.00,
                  bien_servicio: 'B',
                  existencias: 984.00,
                  impresora: {
                    impresora: 1,
                    sede: 1,
                    nombre: 'EPSON L120 Series',
                    direccion_ip: null,
                    ubicacion: null,
                    bluetooth: 0
                  }
                },
                cantidad: 1,
                precio: 8.00,
                impreso: 1,
                total: 8.00,
                notas: '',
                numero_cuenta: 1
              },
              {
                detalle_cuenta: 86,
                cuenta_cuenta: 40,
                detalle_comanda: 90,
                comanda: 45,
                articulo: {
                  articulo: 6,
                  categoria_grupo: 23,
                  presentacion: null,
                  descripcion: 'Fettuccine',
                  precio: 60.00,
                  bien_servicio: 'B',
                  existencias: 995.00,
                  impresora: {
                    impresora: 2,
                    sede: 1,
                    nombre: 'EPSON L120 Series',
                    direccion_ip: null,
                    ubicacion: null,
                    bluetooth: 0
                  }
                },
                cantidad: 1,
                precio: 60.00,
                impreso: 1,
                total: 60.00,
                notas: '',
                numero_cuenta: 1
              }
            ]
          }
        ]
      }
    ];
    return comandasOnLine;
  }

}
