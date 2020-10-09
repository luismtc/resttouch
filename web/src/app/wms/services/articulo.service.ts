import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../../shared/global';
import { ServiceErrorHandler } from '../../shared/error-handler';
import { Categoria } from '../interfaces/categoria';
import { Impresora } from '../interfaces/impresora';
import { CategoriaGrupo, CategoriaGrupoResponse, CategoriaGrupoImpresora } from '../interfaces/categoria-grupo';
import { Articulo, ArbolArticulos, NodoProducto, ArbolCategoriaGrupo, ArticuloResponse } from '../interfaces/articulo';
import { ArticuloDetalle } from '../interfaces/articulo-detalle';
import { LocalstorageService } from '../../admin/services/localstorage.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private srvcErrHndl: ServiceErrorHandler;
  private articuloUrl: string = 'articulo';
  private categoriaUrl: string = 'categoria';
  private categoriaGrupoUrl: string = 'cgrupo';
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
        Authorization: this.usrToken
      })
    };
    return this.http.get<Categoria[]>(
      `${GLOBAL.urlMantenimientos}/${this.categoriaUrl}/buscar?${qs.stringify(fltr)}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getImpresoras(fltr: any = {}): Observable<Impresora[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<Impresora[]>(`${GLOBAL.urlMantenimientos}/impresora/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveCategoria(entidad: Categoria) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.categoriaUrl}/guardar${+entidad.categoria > 0 ? ('/' + entidad.categoria) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getCategoriasGrupos(fltr: any = {}): Observable<CategoriaGrupoResponse[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<CategoriaGrupoResponse[]>(
      `${GLOBAL.urlMantenimientos}/${this.categoriaGrupoUrl}/buscar?${qs.stringify(fltr)}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getCategoriaGrupoImpresora(fltr: any = {}): Observable<CategoriaGrupoImpresora[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<CategoriaGrupoImpresora[]>(
      `${GLOBAL.urlMantenimientos}/${this.categoriaGrupoUrl}/get_categoria_grupo?${qs.stringify(fltr)}`,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  adaptCategoriaGrupoResponse(lista: CategoriaGrupoResponse[]): CategoriaGrupo[] {
    let lst: CategoriaGrupo[] = [];
    lista.forEach(item => lst.push({
      categoria_grupo: +item.categoria_grupo,
      categoria: +item.categoria.categoria,
      categoria_grupo_grupo: !!item.categoria_grupo_grupo && item.categoria_grupo_grupo.length > 0 ? +item.categoria_grupo_grupo[0].categoria_grupo : null,
      descripcion: item.descripcion,
      receta: +item.receta,
      impresora: item.impresora,
      descuento: item.descuento,
      antecesores: null
    }));
    return lst;
  }

  saveCategoriaGrupo(entidad: CategoriaGrupo) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.categoriaGrupoUrl}/guardar${entidad.categoria_grupo ? ('/' + entidad.categoria_grupo) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getArticulos(fltr: any = {}): Observable<Articulo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<Articulo[]>(`${GLOBAL.urlCatalogos}/get_articulo?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getArticulo(fltr: any = {}): Observable<ArticuloResponse[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<ArticuloResponse[]>(`${GLOBAL.urlMantenimientos}/${this.articuloUrl}/buscar?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getArbolArticulos(idsede: number): Observable<ArbolArticulos[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<ArbolArticulos[]>(`${GLOBAL.urlCatalogos}/get_lista_articulo/${idsede}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
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
            impresora: art.impresora,
            codigo: art.codigo,
            presentacion: art.presentacion,
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

  saveArticulo(entidad: Articulo) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(
      `${GLOBAL.urlMantenimientos}/${this.articuloUrl}/guardar${entidad.articulo ? ('/' + entidad.articulo) : ''}`,
      entidad,
      httpOptions
    ).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  getArticuloDetalle(idarticulo: number, fltr: any = {}): Observable<ArticuloDetalle[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.get<ArticuloDetalle[]>(`${GLOBAL.urlMantenimientos}/${this.articuloUrl}/buscar_receta/${idarticulo}?${qs.stringify(fltr)}`, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

  saveArticuloDetalle(entidad: ArticuloDetalle) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.usrToken
      })
    };
    return this.http.post<any>(`${GLOBAL.urlMantenimientos}/${this.articuloUrl}/guardar_receta/${entidad.receta}${entidad.articulo_detalle ? ('/' + entidad.articulo_detalle) : ''}`, entidad, httpOptions).pipe(retry(GLOBAL.reintentos), catchError(this.srvcErrHndl.errorHandler));
  }

}
