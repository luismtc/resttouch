import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { UsuarioTipo } from '../interfaces/usuario-tipo';
import { UsuarioTipoCategoriaGrupo, UsuarioTipoCGrupo } from '../interfaces/usuario-tipo-categoria-grupo';
// import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})

export class TipoUsuarioService {
  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'tipo_usuario';
  // private usrToken: string = null;

  constructor(
    private http: HttpClient,
    // private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<UsuarioTipo[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    }; */
    return this.http.get<UsuarioTipo[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: UsuarioTipo): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    }; */
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/guardar${!!entidad.usuario_tipo ? ('/' + entidad.usuario_tipo) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getUsuarioTipoCGrupo(fltr: any = {}): Observable<UsuarioTipoCGrupo[]> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    }; */

    return this.http.get<UsuarioTipoCGrupo[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar_cgrupo?${qs.stringify(fltr)}`
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveUsuarioTipoCGrupo(entidad: UsuarioTipoCategoriaGrupo): Observable<any> {
    /* const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    }; */

    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/guardar_cgrupo${!!entidad.usuario_tipo_categoria_grupo ? ('/' + entidad.usuario_tipo_categoria_grupo) : ''}`,
      entidad
      // , httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
