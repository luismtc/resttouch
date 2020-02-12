import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Ingreso } from '../interfaces/ingreso';
import { DetalleIngreso } from '../interfaces/detalle-ingreso';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private srvcErrHndl: ServiceErrorHandler;
  private ingresoUrl: string = 'ingreso';
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
    return this.http.get<Ingreso[]>(`${GLOBAL.urlWms}/${this.ingresoUrl}/buscar_ingreso?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  save(entidad: Ingreso) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlWms}/${this.ingresoUrl}/guardar${+entidad.ingreso > 0 ? ('/' + entidad.ingreso) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getDetalle(idingreso: number, fltr: any = {}): Observable<DetalleIngreso[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<DetalleIngreso[]>(`${GLOBAL.urlWms}/${this.ingresoUrl}/buscar_detalle/${idingreso}?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  saveDetalle(entidad: DetalleIngreso){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlWms}/${this.ingresoUrl}/guardar_detalle/${entidad.ingreso}${+entidad.ingreso_detalle > 0 ? ('/' + entidad.ingreso_detalle) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }


  /*
  getIngresosDePrueba(): Observable<Ingreso[]> {
    let lstIngresos: Ingreso[] = [];
    for (let i = 0; i < 10; i++) {
      lstIngresos.push({
        ingreso: Math.floor(Math.random() * 100),
        tipo_movimiento: Math.floor(Math.random() * 100),
        fecha: '2020-01-01',
        bodega: 1,
        usuario: 1,
        bodega_origen: null,
        comentario: '',
        proveedor: 1
      });
    }
    
    return of(lstIngresos);
  }
  */
}
