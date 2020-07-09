import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { ccGeneral, ccDetalle, ccTipo, ccNominacion } from '../interfaces/cajacorte';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class CajacorteService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'cajacorte';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  buscar(fltr: any = {}): Observable<ccGeneral[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ccGeneral[]>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getCajaCorteTipo(fltr: any = {}): Observable<ccTipo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ccTipo[]>(`${GLOBAL.urlCatalogos}/get_caja_corte_tipo?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getCajaCorteNominacion(fltr: any = {}): Observable<ccNominacion[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ccNominacion[]>(`${GLOBAL.urlCatalogos}/get_caja_corte_nominacion?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  guardar(entidad: ccGeneral): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };    
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  anularCorte(entidad: ccGeneral): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };    
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/anular_caja`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler)); 
  }

  anularDetalle(entidad: ccDetalle): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };    
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/anular_caja_detalle`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler)); 
  }
}