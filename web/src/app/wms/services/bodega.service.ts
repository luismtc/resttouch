import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Bodega } from '../interfaces/bodega';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private srvcErrHndl: ServiceErrorHandler;
  private usrToken: string = null;
  private httpOptions: Object;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }
  }

  get(fltr: any = {}): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(`${GLOBAL.urlCatalogos}/get_bodega?${qs.stringify(fltr)}`, this.httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Bodega){
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/bodega/guardar${entidad.bodega ? ('/' + entidad.bodega) : ''}`, 
    entidad, this.httpOptions)
    .pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler))
  }
}
