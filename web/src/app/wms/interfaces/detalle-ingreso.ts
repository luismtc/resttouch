export interface DetalleIngreso {
    ingreso_detalle: number;
    ingreso: number;
    articulo: number;
    cantidad: number;
    precio_unitario: number;
    precio_total: number;
    presentacion?: number;
}
