import { Impresora } from '../../admin/interfaces/impresora';
import { Articulo, ArticuloImpresion } from '../../wms/interfaces/articulo';

export interface Cuenta {
    cuenta: number;
    comanda?: number;
    nombre: string;
    numero: number;
    propina_monto?: number;
    propina_porcentaje?: number;
    cerrada?: number;
    productos?: DetalleCuentaResponse[];
}

export interface DetalleCuentaResponse {
    detalle_comanda: number;
    comanda: number;
    articulo: Articulo;
    cantidad: number;
    precio: number;
    impreso: number;
    total: number;
    notas: string;
    cocinado: number;
    presentacion: number;
    numero: number;
    fecha?: string;
    tiempo_preparacion?: string;
    fecha_impresion?: string;
    fecha_proceso?: string;
    detalle_comanda_id?: number;
    bodega: number;
    descuento: number;
    detalle_cuenta: number;
    cuenta_cuenta: number;
    combo: number;
    categoria_grupo: number;
    numero_cuenta: number;
    detalle?: string[];
    monto_extra: number;
    detalle_impresion?: ArticuloImpresion[];
    impresoras_combo?: Impresora[];
}