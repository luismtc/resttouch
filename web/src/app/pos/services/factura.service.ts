import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { FacturaRequest, Factura } from '../interfaces/factura';
import { DetalleFactura } from '../interfaces/detalle-factura';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'factura';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  facturar(entidad: FacturaRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar`,
      entidad,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  get(fltr: any = {}): Observable<Factura[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<Factura[]>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/buscar_factura?${qs.stringify(fltr)}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  imprimir(idfactura: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<any>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/imprimir/${idfactura}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Factura): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/guardar${!!entidad.factura ? ('/' + entidad.factura) : ''}`,
      entidad,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  refacturar(entidad: Factura): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/refacturar${!!entidad.factura ? ('/' + entidad.factura) : ''}`,
      entidad,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  firmar(identidad: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlFacturacion}/${this.moduleUrl}/facturar/${identidad}`,
      {},
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  anular(identidad: number, params: any = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlFacturacion}/${this.moduleUrl}/anular/${identidad}`, params, httpOptions)
      .pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idfactura: number, fltr: any = {}): Observable<DetalleFactura[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<DetalleFactura[]>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/buscar_detalle/${idfactura}?${qs.stringify(fltr)}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(entidad: DetalleFactura): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/guardar_detalle/${entidad.factura}${!!entidad.detalle_factura ? ('/' + entidad.detalle_factura) : ''}`,
      entidad,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getGrafo(idfactura: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<DetalleFactura[]>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/get_grafo_factura/${idfactura}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
