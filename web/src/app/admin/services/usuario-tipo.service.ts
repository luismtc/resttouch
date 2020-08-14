import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { UsuarioTipo } from '../interfaces/usuario-tipo';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTipoService {

  private srvcErrHndl: ServiceErrorHandler;
  //private moduleUrl: string = 'turno';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<UsuarioTipo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<UsuarioTipo[]>(`${GLOBAL.urlCatalogos}/get_tipo_usuario?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  /*
  save(entidad: UsuarioTipo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };    
    return this.http.post<any>(`${GLOBAL.urlAppRestaurante}/${this.moduleUrl}/guardar_turno_tipo${entidad.turno_tipo ? ('/' + entidad.turno_tipo) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
  */
}
