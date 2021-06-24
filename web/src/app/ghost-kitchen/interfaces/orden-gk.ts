import { Corporacion, Sede } from '../../admin/interfaces/sede';
import { ComandaOrigen } from '../../admin/interfaces/comanda-origen';
import { EstatusOrdenGk } from '../interfaces/estatus-orden-gk';

export interface OrdenGk {
    orden_gk: number;
    corporacion: number;
    protocolo?: string;
    host?: string;
    ip?: string;
    url_original?: string;
    comanda_origen: number;
    fhcreacion: string;
    numero_orden: string;
    estatus_orden_gk: number;
    raw_orden?: string;
    orden_rt?: string;    
}

export interface articulo_gk {
    id_tercero: string;
    descripcion: string;
    vendor: string;
    atiende: Sede;
    precio: number;
    cantidad: number;
    descuento: number;
    total: number;
}

export interface OrdenRT {
    numero_orden: string;
    total_orden: number;    
    articulos: articulo_gk[];
}

export interface OrdenGkResponse {
    orden_gk: number;
    corporacion: Corporacion;
    protocolo?: string;
    host?: string;
    ip?: string;
    url_original?: string;
    comanda_origen: ComandaOrigen;
    fhcreacion: string;
    numero_orden: string;
    estatus_orden_gk: EstatusOrdenGk;
    raw_orden?: string;
    orden_rt?: OrdenRT;
}
