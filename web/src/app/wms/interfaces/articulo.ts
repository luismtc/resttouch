import { CategoriaGrupo } from './categoria-grupo';
import { Impresora } from '../../admin/interfaces/impresora';

export interface Articulo {
    articulo: number;
    categoria_grupo: number;
    presentacion: number;
    descripcion: string;
    precio: number;
    bien_servicio?: string;
    impresora?: Impresora;
    existencias?: number;
    codigo?: string;
    produccion: number;
}

export interface ArticuloResponse {
    articulo: number;
    categoria_grupo: CategoriaGrupo;
    presentacion: any;
    descripcion: string;
    precio: number;
    codigo?: string;
    produccion: number;
}

export interface ArbolCategoriaGrupo {
    categoria_grupo: number;
    categoria: number;
    categoria_grupo_grupo: ArbolCategoriaGrupo[];
    descripcion: string;
    receta: number;
    articulo: Articulo[];
}

export interface ArbolArticulos {
    categoria: number;
    sede: number;
    descripcion: string;
    categoria_grupo: ArbolCategoriaGrupo[];
}

export interface NodoProducto {
    id: number;
    nombre: string;
    precio?: number;
    impresora?: Impresora;
    presentacion?: number;
    codigo?: string;
    hijos?: NodoProducto[];
}
