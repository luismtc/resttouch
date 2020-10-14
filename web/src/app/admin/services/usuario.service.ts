import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { usrLogin, usrLogInResponse, Usuario } from '../models/usuario';
import { AccesoUsuario, SubModulo, NodoAppMenu } from '../interfaces/acceso-usuario';
import { LocalstorageService } from '../services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

export interface IAppMenu {
  modulo: number;
  descripcion: string;
  icono: string;
  url?: string;
  rol?: string;
}

export interface IBtnModulo {
  boton: IAppMenu[];
}

const APPMENU: IBtnModulo[] = [
  {
    boton: [
      { modulo: 1, descripcion: 'Cuenta', icono: 'person', url: '/admin/dashboard' },
      { modulo: 2, descripcion: 'POS', icono: 'restaurant', url: '/restaurante/tranareas' },
      { modulo: 3, descripcion: 'WMS', icono: 'store', url: '/wms/ingresos' },
    ]
  },
  {
    boton: [
      { modulo: 4, descripcion: 'OCS', icono: 'account_balance_wallet', url: '/ordcomp/ordcomp' },
      { modulo: 5, descripcion: 'ADMIN', icono: 'supervisor_account', url: '/admin/dashboard' },
      { modulo: 6, descripcion: 'Salir', icono: 'power_settings_new', url: '/admin/login', rol: 'LOGOUT' }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'usuario';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  private setToken() {
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  login(usr: usrLogin): Observable<usrLogInResponse> {
    const obj = {
      usr: usr.usuario,
      pwd: usr.contrasenia
    };

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<usrLogInResponse>(
      `${GLOBAL.url}/${this.moduleUrl}/login`,
      JSON.stringify(obj),
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  desbloquear = (pindesbloqueo: number) => {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };

    return this.http.post<any>(
      `${GLOBAL.url}/${this.moduleUrl}/desbloqueo_usuario`,
      { pindesbloqueo },
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getAll(debaja: number = 0): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Usuario[]>(
      `${GLOBAL.url}/${this.moduleUrl}/obtener_usuarios`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  async checkUserToken() {
    this.setToken();
    if (this.usrToken) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.usrToken
        })
      };
      const resp: any = await this.http.get(`${GLOBAL.url}/${this.moduleUrl}/checktoken_get`, httpOptions).toPromise();
      if (resp.valido) {
        return resp.valido;
      } else {
        return false;
      }
    }
    return false;
  }

  get(filtros: any): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<Usuario[]>(
      `${GLOBAL.url}/${this.moduleUrl}/usuarios_post`,
      filtros,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getMeserosTurno(): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Usuario[]>(
      `${GLOBAL.urlCatalogos}/get_mesero`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Usuario): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };

    if (entidad.usuario) {
      return this.http.post<Usuario>(
        `${GLOBAL.url}/${this.moduleUrl}/guardar_usuario/${entidad.usuario}`,
        entidad,
        httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
    } else {
      if (!entidad.contrasenia) {
        delete entidad.contrasenia;
      }
      return this.http.post<Usuario>(
        `${GLOBAL.url}/${this.moduleUrl}/guardar_usuario`,
        entidad,
        httpOptions
      ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
    }

  }

  getUserAppMenu = (): IBtnModulo[] => APPMENU;

  getAppMenu = (): AccesoUsuario[] => this.ls.get(GLOBAL.usrTokenVar).acceso || [];

  transformSubModule = (subModulos: SubModulo[]): NodoAppMenu[] => {
    const objMenu: NodoAppMenu[] = [];
    subModulos.forEach(sm => objMenu.push({ nombre: sm.nombre, link: null, hijos: sm.opciones }));
    return objMenu;
  }
}
