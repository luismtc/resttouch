import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Medida } from '../interfaces/medida';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'umedida';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Medida[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Medida[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Medida): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/guardar${!!entidad.medida ? ('/' + entidad.medida) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
