import { Impresora } from '../../admin/interfaces/impresora';
import { Categoria } from './categoria';
import { Articulo } from './articulo';

export interface CategoriaGrupo {
    categoria_grupo: number;
    categoria: number;
    categoria_grupo_grupo?: number;
    descripcion: string;
    receta: number;
    impresora: number;
    descuento: number;
    antecesores?: string;
}

export interface CategoriaGrupoResponse {
    categoria_grupo: number;
    categoria: Categoria;
    categoria_grupo_grupo: CategoriaGrupoResponse[];
    descripcion: string;
    receta: number;
    impresora: number;
    descuento: number;
    articulo: Articulo[];
}

export interface CategoriaGrupoImpresora {
    categoria_grupo: number;
    categoria: number;
    categoria_grupo_grupo?: number;
    descripcion: string;
    receta: number;
    impresora?: Impresora;
    descuento: number;
}
