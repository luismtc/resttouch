import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Campo } from '../interfaces/autoconsulta';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})

export class AutoconsultaService {
  private srvcErrHndl: ServiceErrorHandler;
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  getCampos(fltr: any = {}): Observable<Campo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Campo[]>(`${GLOBAL.urlCatalogos}/get_campos?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getReporte(fltr:any={}) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken,
        'Accept': 'application/vnd.ms-excel'
      }),
      responseType:'blob' as 'json'
    };    
    return this.http.post<string>(`${GLOBAL.urlAppRestaurante}/reporte/autoconsulta`, fltr, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
