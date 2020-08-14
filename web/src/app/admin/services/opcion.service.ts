import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Opcion } from '../interfaces/opcion';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
	providedIn: 'root'
})
export class OpcionService {
	
	private srvcErrHndl: ServiceErrorHandler;
	private usrToken: string = null;

	constructor(
		private http: HttpClient,
		private ls: LocalstorageService
	) {
		this.srvcErrHndl = new ServiceErrorHandler();
		this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
	}

	get(idmodulo:number, idsubmodulo:number, fltr: any = {}): Observable<any[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};
		return this.http.get<any[]>(`${GLOBAL.urlCatalogos}/get_opcion/${idmodulo}/${idsubmodulo}/?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
	}
}
