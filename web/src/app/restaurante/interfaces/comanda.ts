import { Cuenta } from './cuenta';

export interface Comanda {
    area: number;
    mesa: number;
    mesero: number;
    comensales?: number;
    esEvento?: boolean;
    dividirCuentasPorSillas?: boolean;
    comanda?: number;
    cuentas: Cuenta[];
}

export interface ComandaGetResponse {
    comanda: number;
    usuario: number;
    sede: number;
    estatus: number;
    mesa: {
        mesa: number;
        area: {
            area: number;
            sede: number;
            area_padre?: number;
            nombre: string;
        };
        numero: number;
        posx: number;
        posy: number;
        tamanio: number;
        estatus: number;
    };
    cuentas: Cuenta[];
}
