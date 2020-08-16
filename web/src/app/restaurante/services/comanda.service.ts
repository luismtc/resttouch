import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Comanda, ComandaGetResponse } from '../interfaces/comanda';
import { DetalleComanda } from '../interfaces/detalle-comanda';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'comanda';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Comanda[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Comanda[]>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandaDeMesa(idmesa: number): Observable<ComandaGetResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ComandaGetResponse>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda/${idmesa}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Comanda) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar${entidad.comanda ? ('/' + entidad.comanda) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(idcomanda: number, idcuenta: number, detalle: DetalleComanda) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    // const urlComplement = detalle.detalle_comanda && detalle.detalle_cuenta  ? `/${detalle.detalle_cuenta}` : '';
    return this.http
      .post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_detalle/${idcomanda}/${idcuenta}`, detalle, httpOptions)
      .pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  setProductoImpreso(idcuenta: number = 0) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/imprimir/${idcuenta}`,
      httpOptions
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

  cerrarMesa(idMesa: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/cerrar_mesa/${idMesa}`,
      null,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandasOnLIne(): Observable<ComandaGetResponse[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ComandaGetResponse[]>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  validaPwdGerenteTurno(pwd: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/validapwdgerenteturno`,
      { pwd },
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  cerrarEstacion(idcomanda: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ComandaGetResponse[]>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/cerrar_estacion/${idcomanda}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getCuenta(idcuenta: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<any>(
      `${GLOBAL.urlAppRestaurante}/cuenta/get_cuenta/${idcuenta}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
