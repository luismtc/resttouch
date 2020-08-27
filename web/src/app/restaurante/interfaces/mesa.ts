export interface Mesa {
    mesa: number;
    area: number;
    numero: number;
    posx: number;
    posy: number;
    tamanio: number;
    estatus: number;
}

export interface MesaDisponible {
    mesa: number;
    area: {
        area: number;
        sede: number;
        area_padre: number;
        nombre: string;
        impresora: number;
    };
    numero: number;
    posx: number;
    posy: number;
    tamanio: number;
    estatus: number;
}