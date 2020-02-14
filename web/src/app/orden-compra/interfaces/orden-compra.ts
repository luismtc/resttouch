export interface OrdenCompra {
    orden_compra: number;
    proveedor: number;
    fecha?: string;
    usuario: number;
    notas: string;
    estatus_movimiento?: number;
    tipo_movimiento?: number;
    bodega?: number;
}
