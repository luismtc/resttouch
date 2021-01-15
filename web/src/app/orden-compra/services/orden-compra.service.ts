import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { OrdenCompra } from '../interfaces/orden-compra';
import { DetalleOrdenCompra } from '../interfaces/detalle-orden-compra';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class OrdenCompraService {

  private srvcErrHndl: ServiceErrorHandler;
  private ordenCompraUrl = 'compra';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<OrdenCompra[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<OrdenCompra[]>(
      `${GLOBAL.urlWms}/${this.ordenCompraUrl}/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: OrdenCompra) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlWms}/${this.ordenCompraUrl}/guardar${+entidad.orden_compra > 0 ? ('/' + entidad.orden_compra) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idoc: number, fltr: any = {}): Observable<DetalleOrdenCompra[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<DetalleOrdenCompra[]>(
      `${GLOBAL.urlWms}/${this.ordenCompraUrl}/buscar_detalle/${idoc}?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(entidad: DetalleOrdenCompra) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlWms}/${this.ordenCompraUrl}/guardar_detalle/${entidad.orden_compra}${+entidad.orden_compra_detalle > 0 ? ('/' + entidad.orden_compra_detalle) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
