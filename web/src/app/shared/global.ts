// const urlBase = 'http://localhost:8005'; // Desarrollo
const urlBase = location.origin; // Producción
export const GLOBAL = {
    dbDateFormat: 'YYYY-MM-DD',
    dbDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    dateFormat: 'DD/MM/YYYY',
    dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
    url: `${urlBase}/index.php`,
    urlAppRestaurante: `${urlBase}/restaurante.php`,
    urlCatalogos: `${urlBase}/index.php/catalogo`,
    urlMantenimientos: `${urlBase}/index.php/mante`,
    urlWms: `${urlBase}/wms.php`,
    urlFacturacion: `${urlBase}/facturacion.php`,
    usrTokenVar: 'rttoken'
};

export const PaginarArray = (array: any[], page_size: number, page_number: number) =>
    array.slice((page_number - 1) * page_size, page_number * page_size);

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
