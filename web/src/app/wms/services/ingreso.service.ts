import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Ingreso } from '../interfaces/ingreso';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private srvcErrHndl: ServiceErrorHandler;
  private areaUrl: string = 'area';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Ingreso[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Ingreso[]>(`${GLOBAL.urlMantenimientos}/${this.areaUrl}/get_ingresos?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getIngresosDePrueba(): Observable<Ingreso[]> {
    let lstIngresos: Ingreso[] = [];
    for (let i = 0; i < 10; i++) {
      lstIngresos.push({
        ingreso: Math.floor(Math.random() * 100),
        tipo_movimiento: Math.floor(Math.random() * 100)
      });
    }
    
    return of(lstIngresos);
  }
}
