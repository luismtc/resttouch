import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportePdfService {
  private srvcErrHndl: ServiceErrorHandler;
  private usrToken: string = null;
  private httpOptions: Object = {responseType:'blob'};

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;

    this.httpOptions['headers'] = new HttpHeaders({
      'Authorization': this.usrToken,
      'Accept': 'application/pdf'
    });
  }

  getReporteCaja(params: Object) {
    this.httpOptions['params'] = params;

    return this.http.get<string>(
        `${GLOBAL.urlAppRestaurante}/reporte/caja`,
        this.httpOptions
        ).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getReporteFactura(params: Object) {
    this.httpOptions['params'] = params;

    return this.http.get<string>(
      `${GLOBAL.urlAppRestaurante}/reporte/factura`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getReportePropina(params: Object) {
    this.httpOptions['params'] = params;

    return this.http.get<string>(
      `${GLOBAL.urlFacturacion}/reporte/venta/propina`,
      this.httpOptions
    ).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }
}
