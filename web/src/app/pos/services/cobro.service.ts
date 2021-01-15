import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Cobro } from '../interfaces/cobro';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'cuenta';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  save(entidad: Cobro): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/cobrar/${entidad.cuenta}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
