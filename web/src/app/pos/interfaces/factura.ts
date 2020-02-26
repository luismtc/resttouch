export interface Factura {
}

interface ctaFactReq {
    cuenta: number;
}

export interface FacturaRequest {
    cuentas?: ctaFactReq[];
    factura_serie?: number;
    cliente?: number;
    fecha_factura?: string;
    moneda?: number;
}