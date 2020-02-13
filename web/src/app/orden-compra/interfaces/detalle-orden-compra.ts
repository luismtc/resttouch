export interface DetalleOrdenCompra {
    orden_compra_detalle: number;
    orden_compra: number;
    articulo: number;
    cantidad?: number;
    monto?: number;
    total?: number;
}
