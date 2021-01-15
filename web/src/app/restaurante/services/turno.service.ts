import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Turno } from '../interfaces/turno';
import { DetalleTurno } from '../interfaces/detalle-turno';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'turno';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Turno[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<Turno[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Turno) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/guardar${entidad.turno ? ('/' + entidad.turno) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idturno: number, fltr: any = {}): Observable<DetalleTurno[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.get<DetalleTurno[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar_usuario/${idturno}?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(entidad: DetalleTurno) {
    /*     const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/agregar_usuario/${entidad.turno}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  anularDetalle(entidad: DetalleTurno) {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/anular_usuario/${entidad.turno}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
