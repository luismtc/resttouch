export interface CobroFormaPago {
    forma_pago: number;
    monto: number;
    propina?: number;
    documento?: string;
}

export interface Cobro {
    cuenta: number;
    total: number;
    forma_pago: CobroFormaPago[];
    propina_monto: number;
    propina_porcentaje: number;
}
