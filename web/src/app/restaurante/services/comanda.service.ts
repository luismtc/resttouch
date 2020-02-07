import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Comanda, ComandaGetResponse } from '../interfaces/comanda';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'comanda';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Comanda[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Comanda[]>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getComandaDeMesa(idmesa: number): Observable<ComandaGetResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ComandaGetResponse>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/get_comanda/${idmesa}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Comanda) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };    
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar${entidad.comanda ? ('/' + entidad.comanda) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }
}