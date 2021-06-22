import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { OrdenGk, OrdenGkResponse } from '../interfaces/orden-gk';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class OrdenGkService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'orden_gk';

  constructor(
    private http: HttpClient,
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
  }

  seguimiento(fltr: any = {}): Observable<OrdenGkResponse[]> {
    return this.http.get<OrdenGkResponse[]>(
      `${GLOBAL.urlGhostKitchen}/${this.moduleUrl}/seguimiento?${qs.stringify(fltr)}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
