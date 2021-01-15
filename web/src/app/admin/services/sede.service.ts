import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Corporacion, Sede, Empresa } from '../interfaces/sede';
// import { LocalstorageService } from '../services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private srvcErrHndl: ServiceErrorHandler;
  // private sedeUrl: string = 'sede';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Sede[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Sede[]>(
      `${GLOBAL.urlCatalogos}/get_sede?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveSede(obj: Sede): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/sede/guardar${!!obj.sede ? ('/' + obj.sede) : ''}`,
      obj
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getCorporacion(fltr: any = {}): Observable<Corporacion[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Corporacion[]>(
      `${GLOBAL.urlMantenimientos}/corporacion/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveCorporacion(obj: Corporacion): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/corporacion/guardar${!!obj.corporacion ? ('/' + obj.corporacion) : ''}`,
      obj
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getEmpresa(fltr: any = {}): Observable<Empresa[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Empresa[]>(
      `${GLOBAL.urlMantenimientos}/empresa/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveEmpresa(obj: Empresa): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/empresa/guardar${!!obj.empresa ? ('/' + obj.empresa) : ''}`,
      obj
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
