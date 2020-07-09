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
