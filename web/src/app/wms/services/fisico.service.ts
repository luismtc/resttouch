import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class FisicoService {

  private srvcErrHndl: ServiceErrorHandler;
  private fisicoUrl = 'fisico';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  generarInventarioFisico(params: Object) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlWms}/${this.fisicoUrl}/generar`,
      params
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  confirmar(entidad: any) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlWms}/${this.fisicoUrl}/confirmar/${+entidad.inventario_fisico > 0 ? ('/' + entidad.inventario_fisico) : ''}`,
      {}
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idingreso: number, fltr: any = {}): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<any>(
      `${GLOBAL.urlWms}/${this.fisicoUrl}/buscar_detalle/${idingreso}?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(params: any) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlWms}/${this.fisicoUrl}/actualizar/`,
      params
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
