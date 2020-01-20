import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Proveedor } from '../interfaces/proveedor';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private srvcErrHndl: ServiceErrorHandler;
  private moduleUrl: string = 'mante/area';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Proveedor[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Proveedor[]>(`${GLOBAL.url}/${this.moduleUrl}/get_proveedor?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }
}
