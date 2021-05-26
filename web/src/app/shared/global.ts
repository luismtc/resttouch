// import * as urls from '../../assets/json/cnfurls.json';
// const urlBase = urls.default.api;
const urlBase = `http://${window.location.hostname}/resttouch`; // Desarrollo
// const urlBase = 'http://192.168.18.241/api'; // RT - Dev
// const urlBase = 'https://resttouch.c807.com/api'; // RT - Prod

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
    rtClientePedido: 'rt_cliente_pedido',
    reintentos: 0,
    IDIOMA_TECLADO: 'Español',
    DEEP_LINK_ANDROID: 'intent://scan/impresion/__INFOBASE64__#Intent;scheme=restouch;package=com.restouch.impresion;end',
    // DEEP_LINK_ANDROID: 'com.restouch.impresion://com.restouch.impresion/impresion/',
    // DEEP_LINK_ANDROID: 'com.restouch.impresion://impresion/',
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
            descripcion: 'Sujeto a pagos trimestrales ISR'
        },
        {
            id: 2,
            descripcion: 'Sujeto a retención definitiva ISR'
        },
        {
            id: 3,
            descripcion: 'Sujeto a pago directo ISR'
        }
    ],
    frases_iva: [
        {
            id: 1,
            descripcion: 'Agente de Retención del IVA'
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
