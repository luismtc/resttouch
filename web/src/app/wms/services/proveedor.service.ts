import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Proveedor } from '../interfaces/proveedor';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private srvcErrHndl: ServiceErrorHandler;
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Proveedor[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Proveedor[]>(
      `${GLOBAL.urlCatalogos}/get_proveedor?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Proveedor): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/proveedor/guardar${!!entidad.proveedor ? ('/' + entidad.proveedor) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
