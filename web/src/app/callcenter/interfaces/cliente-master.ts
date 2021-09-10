import { Telefono } from './telefono';

export interface ClienteMaster {
    cliente_master: number;
    nombre: string;
    correo?: string;
    fecha_nacimiento?: string;
}

export interface ClienteMasterTelefono extends ClienteMaster, Telefono {
    cliente_master_telefono: number;
}
