export interface CobroFormaPago {
    forma_pago: number;
    monto: number;
    propina?: number;
    documento?: string;
    comision_monto?: number;
}

export interface Cobro {
    cuenta: number;
    total: number;
    forma_pago: CobroFormaPago[];
    propina_monto: number;
    propina_porcentaje: number;
    comision_monto?: number;
}
