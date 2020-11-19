export interface FormaPago {
    forma_pago: number;
    descripcion: string;
    activo: number;
    descuento?: number;
    comision_porcentaje?: number;
    retencion_porcentaje?: number;
    pedirdocumento?: number;
    adjuntararchivo?: number;
    pedirautorizacion?: number;
    sinfactura?: number;
}
