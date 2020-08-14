import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { PorCategoria, PorArticulo } from '../interfaces/reporte-ventas';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ReporteVentasService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'reporte/venta';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  porCategoria(params: any): Observable<PorCategoria[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };

    return this.http.get<PorCategoria[]>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/categoria?${qs.stringify(params)}`,
      httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  porArticulo(params: any): Observable<PorArticulo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };

    return this.http.get<PorArticulo[]>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/articulo?${qs.stringify(params)}`,
      httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  porCategoriaPdf(params: Object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken,
        'Accept': 'application/pdf'
      }),
      responseType: 'blob' as 'json'
    };

    return this.http.get<string>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/categoriapdf/1?${qs.stringify(params)}`,
      httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  porArticuloPdf(params: Object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken,
        'Accept': 'application/pdf'
      }),
      responseType:'blob' as 'json'
    };

    return this.http.get<string>(
      `${GLOBAL.urlFacturacion}/${this.moduleUrl}/articulopdf/1?${qs.stringify(params)}`,
      httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
