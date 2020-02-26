export interface OpcionSubModulo {
    nombre: string;
    link: string;
}

export interface SubModulo {
    nombre: string;
    opciones: OpcionSubModulo[];
}

export interface AccesoUsuario {
    nombre: string;
    submodulo: SubModulo[];
}

export interface NodoAppMenu {
    nombre: string;
    link?: string;
    hijos?: NodoAppMenu[];
}