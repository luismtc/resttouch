// const urlBase = 'http://localhost/resttouch'; // Desarrollo
const urlBase = location.origin; // Producción
// const urlBase = 'https://resttouchapi.c807.com'; // Producción (Usado temporalmente en una VM)
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
