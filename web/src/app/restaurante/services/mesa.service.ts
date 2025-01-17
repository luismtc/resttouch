import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Mesa, MesaDisponible } from '../interfaces/mesa';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'mesa';

  constructor(
    private http: HttpClient,
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
  }

  get(fltr: any = {}): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Mesa) {
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/mesa/guardar${entidad.mesa ? ('/' + entidad.mesa) : ''}`,
      entidad
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getDisponibles(): Observable<MesaDisponible[]> {
    return this.http.get<MesaDisponible[]>(
      `${GLOBAL.urlMantenimientos}/area/get_mesas_disponibles?`
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
