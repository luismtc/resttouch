import { Jerarquia } from './jerarquia';

export interface UsuarioTipo {
    usuario_tipo: number;
    descripcion: string;
    jerarquia: number;
}

export interface UsuarioTipoJerarquia {
    usuario_tipo: number;
    descripcion: string;
    jerarquia: Jerarquia;
}
