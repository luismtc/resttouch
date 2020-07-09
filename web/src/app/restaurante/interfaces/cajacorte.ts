export interface ccGeneral {
	caja_corte: number,
	creacion: string,
	usuario: number,
	turno: number,
	confirmado: string,
	anulado: number,
	caja_corte_tipo: number,
	descripcion: string,
	detalle: ccDetalle[]
}

export interface ccDetalle {
	caja_corte_detalle: number,
	caja_corte: number,
	cantidad: number,
	total: number,
	anulado: number,
	caja_corte_nominacion: number,
	nombre: string
}

export interface ccTipo {
	caja_corte_tipo: number,
	descripcion: string
}

export interface ccNominacion {
	caja_corte_nominacion: number,
	nombre: string,
	valor: number,
	calcula: number
}