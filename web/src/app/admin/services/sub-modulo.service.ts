import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { SubModulo } from '../interfaces/sub-modulo';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
	providedIn: 'root'
})
export class SubModuloService {

	private srvcErrHndl: ServiceErrorHandler;
	private usrToken: string = null;

	constructor(
		private http: HttpClient,
		private ls: LocalstorageService
	) {
		this.srvcErrHndl = new ServiceErrorHandler();
		this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
	}

	get(idmodulo:number, fltr: any = {}): Observable<any[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};
		return this.http.get<any[]>(`${GLOBAL.urlCatalogos}/get_sub_modulo/${idmodulo}/?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
	}
}
