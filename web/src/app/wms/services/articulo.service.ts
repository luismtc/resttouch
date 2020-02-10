import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Categoria } from '../interfaces/categoria';
import { CategoriaGrupo } from '../interfaces/categoria-grupo';
import { Articulo, ArbolArticulos, NodoProducto, ArbolCategoriaGrupo } from '../interfaces/articulo';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private srvcErrHndl: ServiceErrorHandler;
  private categoriaUrl: string = 'categoria';
  private categoriaGrupoUrl: string = 'categoria_grupo';
  private usrToken: string = null;

  constructor(
    private http: HttpClient,
    private ls: LocalstorageService
  ) {
    this.srvcErrHndl = new ServiceErrorHandler();
    this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
  }

  getCategorias(fltr: any = {}): Observable<Categoria[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Categoria[]>(`${GLOBAL.urlMantenimientos}/${this.categoriaUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  saveCategoria(entidad: Categoria) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.categoriaUrl}/guardar${+entidad.categoria > 0 ? ('/' + entidad.categoria) : ''}`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getCategoriasGrupos(fltr: any = {}): Observable<CategoriaGrupo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<CategoriaGrupo[]>(`${GLOBAL.urlMantenimientos}/${this.categoriaGrupoUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  saveCategoriaGrupo(entidad: CategoriaGrupo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.categoriaGrupoUrl}/guardar`, entidad, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getArticulos(fltr: any = {}): Observable<Articulo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<Articulo[]>(`${GLOBAL.urlCatalogos}/get_articulo?${qs.stringify(fltr)}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  getArbolArticulos(idsede: number): Observable<ArbolArticulos[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.usrToken
      })
    };
    return this.http.get<ArbolArticulos[]>(`${GLOBAL.urlCatalogos}/get_lista_articulo/${idsede}`, httpOptions).pipe(retry(1), catchError(this.srvcErrHndl.errorHandler));
  }

  transformArticuloToNodo = (grps: ArbolCategoriaGrupo[]): NodoProducto[] => {
    let np: NodoProducto[] = [];

    for (let i = 0; i < grps.length; i++) {
      let grp = grps[i];

      if (!!grp.articulo && grp.articulo.length > 0) {
        np.push({
          id: grp.categoria_grupo,
          nombre: grp.descripcion,
          precio: null,
          hijos: []
        });

        for (let j = 0; j < grp.articulo.length; j++) {
          let art = grp.articulo[j];
          np[np.length - 1].hijos.push({
            id: art.articulo,
            nombre: art.descripcion,
            precio: art.precio,
            hijos: null
          });
        }
      }

      if (!!grp.categoria_grupo_grupo && grp.categoria_grupo_grupo.length > 0) {
        np.push({
          id: grp.categoria_grupo,
          nombre: grp.descripcion,
          precio: null,
          hijos: []
        });
        np[np.length - 1].hijos = this.transformArticuloToNodo(grp.categoria_grupo_grupo);
      }
    }

    return np;
  }

  convertToArbolNodoProducto(articulos: ArbolArticulos[]): NodoProducto[] {
    let arbol: NodoProducto[] = [];

    for (let i = 0; i < articulos.length; i++) {
      let articulo = articulos[i];
      arbol.push({
        id: articulo.categoria,
        nombre: articulo.descripcion,
        precio: null,
        hijos: this.transformArticuloToNodo(articulo.categoria_grupo)
      });
    }

    return arbol;
  }

}
