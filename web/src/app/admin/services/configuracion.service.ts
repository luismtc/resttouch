import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { LocalstorageService } from '../../admin/services/localstorage.service';
// import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Configuracion } from '../interfaces/configuracion';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl = 'configuracion';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  load = () => {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };

    this.http.get<Configuracion[]>(
      `${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler)).subscribe((cnf: Configuracion[]) => {
      const tmp = this.ls.get(GLOBAL.usrTokenVar);
      tmp.configuracion = cnf;
      this.ls.set(GLOBAL.usrTokenVar, tmp);
    });
  }

  getConfig = (configName: string): any => {
    const configuraciones: Configuracion[] = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).configuracion : [];
    let valor: any = null;
    for (const cnf of configuraciones) {
      if (cnf.campo === configName) {
        switch (+cnf.tipo) {
          case 1: valor = +cnf.valor; break;
          case 2: valor = cnf.valor; break;
          case 3: valor = (+cnf.valor === 1); break;
        }
        break;
      }
    }
    return valor;
  }
}
