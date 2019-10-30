import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { usrLogin, usrLogInResponse, Usuario } from '../models/usuario';
import { LocalstorageService } from '../services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'usuario';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar, false);
  }

  login(usr: usrLogin): Observable<usrLogInResponse> {
    const obj = {
      usr: usr.usuario,
      pwd: usr.contrasenia
    };    
    return this.http.post<usrLogInResponse>(`${GLOBAL.url}/${this.moduleUrl}/login.json`, JSON.stringify(obj), GLOBAL.httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getAll(debaja: number = 0): Observable<Usuario> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.ls.get(GLOBAL.usrTokenVar, false)
      })
    };
    return this.http.get<Usuario>(`${GLOBAL.url}/${this.moduleUrl}/usuarios.json?debaja=${debaja}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

}
