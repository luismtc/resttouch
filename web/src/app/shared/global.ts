const LOCALHOST = ['localhost', '127.0.0.1'];
export const PROTOCOLO = window.location.protocol;
export const ANFITRION = window.location.hostname;
const urlBase = `${PROTOCOLO}//${ANFITRION}/${LOCALHOST.indexOf(ANFITRION) < 0 ? 'api' : 'resttouch'}`;

export const GLOBAL = {
    dbDateFormat: 'YYYY-MM-DD',
    dbDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    dbDateTimeFormatMilli: 'YYYY-MM-DD HH:mm:ss.SSS',
    dateFormat: 'DD/MM/YYYY',
    dateFormatBT: 'DD-MM-YYYY',
    dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
    dateTimeFormatMilli: 'DD/MM/YYYY HH:mm:ss.SSS',
    dateTimeFormatBT: 'DD-MM-YYYY HH:mm:ss',
    dateTimeFormatBTMilli: 'DD-MM-YYYY HH:mm:ss.SSS',
    url: `${urlBase}/index.php`,
    urlAppRestaurante: `${urlBase}/restaurante.php`,
    urlCatalogos: `${urlBase}/index.php/catalogo`,
    urlMantenimientos: `${urlBase}/index.php/mante`,
    urlWms: `${urlBase}/wms.php`,
    urlFacturacion: `${urlBase}/facturacion.php`,
    usrTokenVar: 'rttoken',
    usrUnlockVar: 'rtunlock',
    rtClientePedido: 'rt_cliente_pedido',
    usrLastModuleVar: 'rtlastmodule',
    reintentos: 0,
    IDIOMA_TECLADO: 'Español',
    DEEP_LINK_ANDROID: 'intent://scan/impresion/__INFOBASE64__#Intent;scheme=restouch;package=com.restouch.impresion;end',
    FORMATO_EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
        RT_COMANDA_SIN_FACTURA: 'RT_COMANDA_SIN_FACTURA',
        RT_MODO_FACTURA: 'RT_MODO_FACTURA',
        RT_MESERO_POR_DEFECTO: 'RT_MESERO_POR_DEFECTO',
        RT_FIRMA_DTE_AUTOMATICA: 'RT_FIRMA_DTE_AUTOMATICA',
        RT_CAMPO_NIT: 'RT_CAMPO_NIT',
        RT_ORDER_ITEMS_FULLFILLED: 'RT_ORDER_ITEMS_FULLFILLED',
        RT_CUENTA_CONTABLE_PROPINA: 'RT_CUENTA_CONTABLE_PROPINA',
        RT_CUENTA_CONTABLE_IVA_PROPINA: 'RT_CUENTA_CONTABLE_IVA_PROPINA',
        RT_IMPRIME_PROPINA_SUGERIDA: 'RT_IMPRIME_PROPINA_SUGERIDA',
        RT_USA_CODIGO_BARRAS: 'RT_USA_CODIGO_BARRAS',
        RT_ENVIA_COMO_BASE64: 'RT_ENVIA_COMO_BASE64',
        RT_IMPRIME_RECETA_EN_COMANDA: 'RT_IMPRIME_RECETA_EN_COMANDA'
    },
    grupos: [
        {
            id: 1,
            descripcion: 'General'
        },
        {
            id: 2,
            descripcion: 'Sede'
        }
    ],
    frases_isr: [
        {
            id: 1,
            descripcion: 'Sujeto a pagos trimestrales I.S.R.'
        },
        {
            id: 2,
            descripcion: 'Sujeto a retención definitiva I.S.R.'
        },
        {
            id: 3,
            descripcion: 'Sujeto a pago directo I.S.R.'
        }
    ],
    frases_iva: [
        {
            id: 1,
            descripcion: 'Agente de retención del I.V.A.'
        }
    ]
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

export const OrdenarArrayObjetos = (objs: any[], campo: string, tipo = 2) => {
    if (tipo === 2) {
        return objs.sort((a, b) => a[campo].localeCompare(b[campo]));
    } else {
        return objs.sort((a, b) => (a[campo] > b[campo]) ? 1 : ((b[campo] > a[campo]) ? -1 : 0));
    }
};

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
