import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Egreso } from '../interfaces/egreso';
import { DetalleEgreso } from '../interfaces/detalle-egreso';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  private srvcErrHndl: ServiceErrorHandler;
  private egresoUrl: string = 'egreso';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Egreso[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Egreso[]>(`${GLOBAL.urlWms}/${this.egresoUrl}/buscar_egreso?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Egreso) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlWms}/${this.egresoUrl}/guardar${+entidad.egreso > 0 ? ('/' + entidad.egreso) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idegreso: number, fltr: any = {}): Observable<DetalleEgreso[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<DetalleEgreso[]>(`${GLOBAL.urlWms}/${this.egresoUrl}/buscar_detalle/${idegreso}?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(entidad: DetalleEgreso){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlWms}/${this.egresoUrl}/guardar_detalle/${entidad.egreso}${+entidad.egreso_detalle > 0 ? ('/' + entidad.egreso_detalle) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }
}
