import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})

export class TableroService {
  private srvcErrHndl: ServiceErrorHandler;  
  private httpOptions: object = { responseType: 'json' };

  constructor(
    private http: HttpClient,    
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.httpOptions['headers'] = new HttpHeaders({      
      Accept: 'application/pdf'
    });
  }

  getTableroDatos(params: object) {
    this.httpOptions['params'] = params;
    return this.http.get<any>(
      `${GLOBAL.url}/tablero/get_datos`,
      this.httpOptions
    ).pipe(
      retry(GLOBAL.reintentos),
      catchError(this.srvcErrHndl.errorHandler)
    );
  }

  getDataGraficas = (params: object) => {   
    return this.http.get<any>(`${GLOBAL.url}/tablero/get_datos_graficas_ventas?${qs.stringify(params)}`    
    ).pipe( retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }
}
