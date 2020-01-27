import { Cuenta } from './cuenta';

export interface Comanda {
    area: number;
    mesa: number;
    mesero: number;
    comensales: number;
    esEvento: boolean;
    dividirCuentasPorSillas: boolean;
    comanda?: number;
    cuentas: Cuenta[];
}
