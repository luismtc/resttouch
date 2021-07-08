import { ComandaOrigen } from './comanda-origen';

export interface VendorTercero {
    vendor_tercero: number;
    nombre: string;
    comanda_origen: number;
}

export interface VendorTerceroResponse {
    vendor_tercero: number;
    nombre: string;
    comanda_origen: ComandaOrigen;
}

export interface SedeVendorTercero {
    sede_vendor_tercero: number;
    sede: number;
    vendor_tercero: number;
}