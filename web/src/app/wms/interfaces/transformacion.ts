export interface Transformacion {
    egreso: TransformacionEgreso;
    ingreso: TransformacionIngreso;
}

export interface TransformacionDetalleMovimiento {
    articulo: number;
    cantidad: number;
    precio_unitario: number;
    precio_total: number;
}

export interface TransformacionEgreso {
    tipo_movimiento: number;
    fecha: string;
    proveedor: number;
    bodega: number;
    usuario: number;
    estatus_movimiento: number;
    bodega_destino: number;
    tipo_movimiento_destino: number;
    detalle: TransformacionDetalleMovimiento[];
}

export interface TransformacionIngreso {
    tipo_movimiento: number;
    fecha: string;
    proveedor: number;
    bodega: number;
    usuario: number;
    bodega_origen: number;
    comentario: string;
    detalle: TransformacionDetalleMovimiento[];
}