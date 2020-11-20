// const urlBase = 'http://localhost/resttouch'; // Desarrollo local
// const urlBase = 'http://192.168.1.11/resttouch'; // Desarrollo local 2
// const urlBase = `${location.origin}/api`; // Desarrollo - Producción C807
const urlBase = location.origin; // Producción GCP
export const GLOBAL = {
    dbDateFormat: 'YYYY-MM-DD',
    dbDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    dateFormat: 'DD/MM/YYYY',
    dateFormatBT: 'DD-MM-YYYY',
    dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
    dateTimeFormatBT: 'DD-MM-YYYY HH:mm:ss',
    url: `${urlBase}/index.php`,
    urlAppRestaurante: `${urlBase}/restaurante.php`,
    urlCatalogos: `${urlBase}/index.php/catalogo`,
    urlMantenimientos: `${urlBase}/index.php/mante`,
    urlWms: `${urlBase}/wms.php`,
    urlFacturacion: `${urlBase}/facturacion.php`,
    usrTokenVar: 'rttoken',
    usrUnlockVar: 'rtunlock',
    reintentos: 0,
    infilePdfUrl: 'https://report.feel.com.gt/ingfacereport/ingfacereport_documento?uuid=',
    CONSTANTES: {
        RT_IMPRESORA_DEFECTO: 'RT_IMPRESORA_DEFECTO',
        RT_PANTALLA_TOMA_COMANDA: 'RT_PANTALLA_TOMA_COMANDA',
        RT_HABILITA_BLOQUEO_INACTIVIDAD: 'RT_HABILITA_BLOQUEO_INACTIVIDAD',
        RT_SEGUNDOS_INACTIVIDAD: 'RT_SEGUNDOS_INACTIVIDAD',
        RT_FACTURA_PROPINA: 'RT_FACTURA_PROPINA',
        RT_CONCEPTO_MAYOR_VENTA: 'RT_CONCEPTO_MAYOR_VENTA',
        RT_CUENTA_CONTABLE_IVA_VENTA: 'RT_CUENTA_CONTABLE_IVA_VENTA',
        RT_INGRESO_NUMERO_PEDIDO: 'RT_INGRESO_NUMERO_PEDIDO',
        RT_TOTAL_NUMEROS_PEDIDO: 'RT_TOTAL_NUMEROS_PEDIDO',
        RT_VENDE_NEGATIVO: 'RT_VENDE_NEGATIVO',
        RT_MODO_COMANDA: 'RT_MODO_COMANDA',
        RT_COMANDA_SIN_FACTURA: 'RT_COMANDA_SIN_FACTURA'
    }
};

export const PaginarArray = (array: any[], pageSize: number, pageNumber: number) =>
    array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

export const CheckObjectType = (objeto, tipo: string) =>
    Object.prototype.toString.call(objeto).toLowerCase().substring(7).indexOf(tipo.trim().toLowerCase()) > -1;

export const MultiFiltro = (array: any[], filtro: any) => {
    if (array.length > 0) {
        const keys = Object.keys(array[0]);
        const tmp: any[] = [];
        let valor: any;
        array.forEach(item => {
            for (const key of keys) {
                if (!!item[key]) {
                    if (CheckObjectType(item[key], 'array') || CheckObjectType(item[key], 'object')) {
                        valor = JSON.stringify(item[key]);
                    } else {
                        valor = item[key].toString();
                    }
                    if (valor.trim().toLowerCase().indexOf(filtro.trim().toLowerCase()) > -1) {
                        tmp.push(item);
                        break;
                    }
                }
            }
        });
        return tmp;
    }
    return array;
};
