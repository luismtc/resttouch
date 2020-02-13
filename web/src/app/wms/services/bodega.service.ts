import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Bodega } from '../interfaces/bodega';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private srvcErrHndl: ServiceErrorHandler;
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService    
  ) { 
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  get(fltr: any = {}): Observable<Bodega[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Bodega[]>(`${GLOBAL.urlCatalogos}/get_bodega?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }
}
