import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { ClienteMaster } from '../interfaces/cliente-master';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ClienteMasterService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'cliente_master';

  constructor(
    private http: HttpClient,
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
  }

  get(fltr: any = {}): Observable<ClienteMaster[]> {
    return this.http.get<ClienteMaster[]>(
      `${GLOBAL.urlCallCenter}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: ClienteMaster): Observable<any> {
    return this.http.post<any>(
      `${GLOBAL.urlCallCenter}/${this.moduleUrl}/guardar${!!entidad.cliente_master ? ('/' + entidad.cliente_master) : ''}`,
      entidad
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
