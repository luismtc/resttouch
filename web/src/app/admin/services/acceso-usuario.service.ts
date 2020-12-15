import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Acceso, UsuarioSede } from '../interfaces/acceso';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
	providedIn: 'root'
})
export class AccesoUsuarioService {
	
	private srvcErrHndl: ServiceErrorHandler;
	private moduleUrl: string = 'acceso';
	private usrToken: string = null;

	constructor(
		private http: HttpClient,
		private ls: LocalstorageService
	) {
		this.srvcErrHndl = new ServiceErrorHandler();
		this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
	}

	get(fltr: any = {}): Observable<Acceso[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};
		return this.http.get<Acceso[]>(`${GLOBAL.urlMantenimientos}/${this.moduleUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
	}

	save(entidad: Acceso): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};

		return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.moduleUrl}/guardar${!!entidad.acceso ? ('/' + entidad.acceso) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
	}

	getSedes(fltr: any = {}): Observable<UsuarioSede[]> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};
		return this.http.get<UsuarioSede[]>(
			`${GLOBAL.urlMantenimientos}/sede/get_sede_usuario?${qs.stringify(fltr)}`, 
			httpOptions
		).pipe(
			retry(GLOBAL.reintentos), 
			catchError(this.srvcErrHndl.errorHandler)
		);
	}

	saveSedes(entidad: UsuarioSede): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.usrToken
			})
		};

		return this.http.post<any>(
			`${GLOBAL.urlMantenimientos}/sede/set_usuario_sede${!!entidad.usuario_sede ? ('/' + entidad.usuario_sede) : ''}`, 
			entidad, 
			httpOptions
		).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
	}
}
