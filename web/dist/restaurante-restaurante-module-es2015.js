(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurante-restaurante-module"],{

/***/ "+Q77":
/*!************************************************************!*\
  !*** ./src/app/restaurante/services/tipo-turno.service.ts ***!
  \************************************************************/
/*! exports provided: TipoTurnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTurnoService", function() { return TipoTurnoService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class TipoTurnoService {
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'turno';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    get(fltr = {}) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/get_turno_tipo?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/guardar_turno_tipo${entidad.turno_tipo ? ('/' + entidad.turno_tipo) : ''}`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
TipoTurnoService.ɵfac = function TipoTurnoService_Factory(t) { return new (t || TipoTurnoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
TipoTurnoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TipoTurnoService, factory: TipoTurnoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+csC":
/*!**************************************************************!*\
  !*** ./src/app/restaurante/services/autoconsulta.service.ts ***!
  \**************************************************************/
/*! exports provided: AutoconsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoconsultaService", function() { return AutoconsultaService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AutoconsultaService {
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    getCampos(fltr = {}) {
        /*const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        };*/
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlCatalogos}/get_campos?${qs__WEBPACK_IMPORTED_MODULE_4__["stringify"](fltr)}`
        // httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getReporte(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                // 'Authorization': this.usrToken,
                Accept: 'application/vnd.ms-excel'
            }),
            responseType: 'blob'
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAppRestaurante}/reporte/autoconsulta`, fltr, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
AutoconsultaService.ɵfac = function AutoconsultaService_Factory(t) { return new (t || AutoconsultaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AutoconsultaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AutoconsultaService, factory: AutoconsultaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+grV":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/lista-propina/lista-propina.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaPropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPropinaComponent", function() { return ListaPropinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_propina_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/propina.service */ "dkRY");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function ListaPropinaComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaPropinaComponent_td_6_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getPropina(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "line_weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r2.porcentaje, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.usuario_tipo.descripcion);
} }
function ListaPropinaComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
const _c0 = function () { return [5, 10, 20]; };
class ListaPropinaComponent {
    constructor(propinaSrvc) {
        this.propinaSrvc = propinaSrvc;
        this.displayedColumns = ['propina'];
        this.getPropinaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadPropinas = () => {
            this.propinaSrvc.get().subscribe(lst => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstPropinas = lst;
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.lstPropinas);
                        this.dataSource.paginator = this.paginator;
                    }
                }
            });
        };
        this.getPropina = (obj) => {
            this.getPropinaEv.emit(obj);
        };
    }
    ngOnInit() {
        this.loadPropinas();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
ListaPropinaComponent.ɵfac = function ListaPropinaComponent_Factory(t) { return new (t || ListaPropinaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_propina_service__WEBPACK_IMPORTED_MODULE_3__["PropinaService"])); };
ListaPropinaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaPropinaComponent, selectors: [["app-lista-propina"]], viewQuery: function ListaPropinaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { getPropinaEv: "getPropinaEv" }, decls: 9, vars: 4, consts: [[1, "mat-elevation-z4", "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "propina"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-cell", "", 3, "click"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-icon-button", "", "type", "button", "color", "accent"], ["mat-row", ""]], template: function ListaPropinaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaPropinaComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListaPropinaComponent_td_6_Template, 12, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListaPropinaComponent_tr_7_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-paginator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1wcm9waW5hLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "/xGI":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/factura/factura.component.ts ***!
  \******************************************************************************/
/*! exports provided: FacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function() { return FacturaComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");














function FacturaComponent_app_cargando_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
} }
class FacturaComponent {
    constructor(snackBar, pdfServicio) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.params = {};
        this.titulo = 'Facturas';
        this.cargando = false;
        this.configBotones = {
            showPdf: true, showHtml: false, showExcel: true, isPdfDisabled: false, isExcelDisabled: false
        };
        this.resetParams = () => {
            this.params = {
                fdel: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat),
                fal: moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat)
            };
            this.cargando = false;
        };
        this.chkDates = () => {
            this.configBotones.isPdfDisabled = (!this.params.fdel || !this.params.fal);
            this.configBotones.isExcelDisabled = (!this.params.fdel || !this.params.fal);
        };
    }
    ngOnInit() {
        this.resetParams();
    }
    onSubmit() {
        this.cargando = true;
        this.params._excel = 0;
        this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
            this.cargando = false;
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
    excelClick() {
        this.cargando = true;
        this.params._excel = 1;
        this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
            this.cargando = false;
            if (res) {
                const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.xls`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
}
FacturaComponent.ɵfac = function FacturaComponent_Factory(t) { return new (t || FacturaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ReportePdfService"])); };
FacturaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FacturaComponent, selectors: [["app-factura"]], decls: 22, vars: 6, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmRptFactura", "ngForm"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Del", "name", "fdel", "required", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "date", "placeholder", "Al", "name", "fal", "required", "", 3, "ngModel", "ngModelChange", "change"], [1, "col"], ["name", "detalle", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["name", "anuladas", 1, "fullWidth", 3, "ngModel", "ngModelChange"], [3, "configuracion", "excelClick", "pdfClick", "resetParamsClick"], [4, "ngIf"]], template: function FacturaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Reporte de facturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FacturaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.fdel = $event; })("change", function FacturaComponent_Template_input_change_10_listener() { return ctx.chkDates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FacturaComponent_Template_input_ngModelChange_12_listener($event) { return ctx.params.fal = $event; })("change", function FacturaComponent_Template_input_change_12_listener() { return ctx.chkDates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FacturaComponent_Template_mat_checkbox_ngModelChange_15_listener($event) { return +(ctx.params._detalle = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Mostrar Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FacturaComponent_Template_mat_checkbox_ngModelChange_18_listener($event) { return +(ctx.params._anuladas = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Mostrar \u00DAnicamente Anuladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "app-rpt-botones", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("excelClick", function FacturaComponent_Template_app_rpt_botones_excelClick_20_listener() { return ctx.excelClick(); })("pdfClick", function FacturaComponent_Template_app_rpt_botones_pdfClick_20_listener() { return ctx.onSubmit(); })("resetParamsClick", function FacturaComponent_Template_app_rpt_botones_resetParamsClick_20_listener() { return ctx.resetParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FacturaComponent_app_cargando_21_Template, 1, 0, "app-cargando", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fdel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", +ctx.params._detalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", +ctx.params._anuladas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_11__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_13__["CargandoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWN0dXJhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "1ngy":
/*!************************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CajacorteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteListaComponent", function() { return CajacorteListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cajacorte.service */ "Gbtp");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function CajacorteListaComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajacorteListaComponent_td_6_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.anularCaja(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajacorteListaComponent_td_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const element_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getCajacorte(element_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.creacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", element_r2.total, "");
} }
function CajacorteListaComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
const _c0 = function () { return [5, 10, 20]; };
class CajacorteListaComponent {
    constructor(ccorteSrvc, _snackBar) {
        this.ccorteSrvc = ccorteSrvc;
        this._snackBar = _snackBar;
        this.displayedColumns = ['ccGeneral'];
        this.getCajacorteEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getCajascortes = () => {
            this.ccorteSrvc.buscar().subscribe(lst => {
                this.listacc = lst;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.listacc);
                this.dataSource.paginator = this.paginator;
            });
        };
        this.anularCaja = (obj) => {
            if (confirm('¿Si anula este corte, se anulará también las nominaciones.?')) {
                this.ccorteSrvc.anularCorte(obj).subscribe(res => {
                    if (res.exito) {
                        this.getCajascortes();
                    }
                    this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
                });
            }
        };
        this.getCajacorte = (obj) => {
            this.getCajacorteEv.emit(obj);
        };
    }
    ngOnInit() {
        this.getCajascortes();
    }
    filtrar(filtro) {
        this.dataSource.filter = filtro.trim().toLowerCase();
    }
    ;
}
CajacorteListaComponent.ɵfac = function CajacorteListaComponent_Factory(t) { return new (t || CajacorteListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cajacorte_service__WEBPACK_IMPORTED_MODULE_3__["CajacorteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
CajacorteListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CajacorteListaComponent, selectors: [["app-cajacorte-lista"]], viewQuery: function CajacorteListaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, outputs: { getCajacorteEv: "getCajacorteEv" }, decls: 9, vars: 4, consts: [[1, "mat-elevation-z4", "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "ccGeneral"], ["mat-cell", "", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-cell", ""], ["mat-list-icon", "", 1, "anulaicon", 3, "click"], ["mat-line", ""], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], ["mat-row", ""]], template: function CajacorteListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CajacorteListaComponent_Template_input_keyup_3_listener($event) { return ctx.filtrar($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CajacorteListaComponent_td_6_Template, 14, 3, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CajacorteListaComponent_tr_7_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-paginator", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".anulaicon[_ngcontent-%COMP%] {\n\tcursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhamFjb3J0ZS1saXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJjYWphY29ydGUtbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbnVsYWljb24ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "2fnC":
/*!***********************************************************************!*\
  !*** ./src/app/restaurante/components/turno/turno/turno.component.ts ***!
  \***********************************************************************/
/*! exports provided: TurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoComponent", function() { return TurnoComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lista-turno/lista-turno.component */ "rwi4");
/* harmony import */ var _form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-turno/form-turno.component */ "suWU");
//import { LocalstorageService } from '../../../../admin/services/localstorage.service';





const _c0 = ["lstTurno"];
const _c1 = ["frmTurno"];
class TurnoComponent {
    constructor() {
        this.setTurno = (trn) => {
            //console.log(trn); 
            this.turno = trn;
            this.frmTurno.loadDetalleTurno(+this.turno.turno);
            this.frmTurno.pendientes = false;
            this.frmTurno.comandas = [];
            this.frmTurno.facturas = [];
        };
        this.refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();
        this.turno = {
            turno: null, turno_tipo: null, inicio: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateTimeFormat), fin: null
        };
    }
    ngOnInit() {
    }
}
TurnoComponent.ɵfac = function TurnoComponent_Factory(t) { return new (t || TurnoComponent)(); };
TurnoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TurnoComponent, selectors: [["app-turno"]], viewQuery: function TurnoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lstTurnoComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmTurno = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getTurnoEv"], ["lstTurno", ""], [1, "col", "m7", "s12"], [3, "turno", "turnoSavedEv"], ["frmTurno", ""]], template: function TurnoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-lista-turno", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getTurnoEv", function TurnoComponent_Template_app_lista_turno_getTurnoEv_2_listener($event) { return ctx.setTurno($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-form-turno", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("turnoSavedEv", function TurnoComponent_Template_app_form_turno_turnoSavedEv_5_listener() { return ctx.refreshTurnoList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("turno", ctx.turno);
    } }, directives: [_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_3__["ListaTurnoComponent"], _form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_4__["FormTurnoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJuby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "2gci":
/*!***************************************************************************!*\
  !*** ./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.ts ***!
  \***************************************************************************/
/*! exports provided: AbrirMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirMesaComponent", function() { return AbrirMesaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pide-datos-cuentas/pide-datos-cuentas.component */ "UEEt");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/services/usuario.service */ "K9lQ");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
















function AbrirMesaComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usr_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", usr_r4.usuario.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", usr_r4.usuario.nombres, " ", usr_r4.usuario.apellidos, " ");
} }
function AbrirMesaComponent_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AbrirMesaComponent_input_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.data.comensales = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matKeyboard", ctx_r2.keyboardLayout)("ngModel", ctx_r2.data.comensales);
} }
function AbrirMesaComponent_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AbrirMesaComponent_input_12_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.data.comensales = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.data.comensales);
} }
class AbrirMesaComponent {
    constructor(dialogRef, data, dialogDatosCuentas, usuarioSrvc, ls) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogDatosCuentas = dialogDatosCuentas;
        this.usuarioSrvc = usuarioSrvc;
        this.ls = ls;
        this.lstMeseros = [];
        this.esMovil = false;
        this.loadMeseros = () => {
            this.usuarioSrvc.getMeserosTurno().subscribe(res => {
                if (res) {
                    this.lstMeseros = res;
                }
            });
        };
        this.toNumber = (valor) => +valor;
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].IDIOMA_TECLADO;
        this.loadMeseros();
    }
    pedirDatosDeCuentas(obj) {
        const pideDatosCuentasRef = this.dialogDatosCuentas.open(_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_1__["PideDatosCuentasComponent"], {
            width: '50%',
            disableClose: true,
            data: { cuentas: obj.cuentas, comensales: this.data.comensales }
        });
        pideDatosCuentasRef.afterClosed().subscribe((result) => {
            obj.cuentas = result;
            this.dialogRef.close(obj);
        });
    }
    terminar(obj = null) {
        if (!obj) {
            this.dialogRef.close();
        }
        else {
            if (!obj.dividirCuentasPorSillas) {
                this.dialogRef.close(obj);
            }
            else {
                this.pedirDatosDeCuentas(obj);
            }
        }
    }
}
AbrirMesaComponent.ɵfac = function AbrirMesaComponent_Factory(t) { return new (t || AbrirMesaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"])); };
AbrirMesaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AbrirMesaComponent, selectors: [["app-abrir-mesa"]], decls: 22, vars: 8, consts: [["mat-dialog-title", ""], ["novalidate", "", 3, "ngSubmit"], ["frmAbrirMesa", "ngForm"], [1, "separatorMargin"], ["name", "mesero", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "placeholder", "# Comensales", "name", "comensales", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "# Comensales", "name", "comensales", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "esEvento", 1, "separatorMargin", 3, "ngModel", "ngModelChange"], ["name", "dividirCuentasPorSillas", 1, "separatorMargin", 3, "ngModel", "disabled", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "color", "secondary", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [3, "value"], ["type", "text", "matInput", "", "placeholder", "# Comensales", "name", "comensales", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "# Comensales", "name", "comensales", "required", "", 3, "ngModel", "ngModelChange"]], template: function AbrirMesaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Abrir mesa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AbrirMesaComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return _r0.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Mesero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AbrirMesaComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.data.mesero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AbrirMesaComponent_mat_option_9_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AbrirMesaComponent_input_11_Template, 1, 2, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AbrirMesaComponent_input_12_Template, 1, 1, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AbrirMesaComponent_Template_mat_checkbox_ngModelChange_13_listener($event) { return +(ctx.data.esEvento = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u00BFEs evento?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AbrirMesaComponent_Template_mat_checkbox_ngModelChange_15_listener($event) { return +(ctx.data.dividirCuentasPorSillas = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u00BFDividir cuentas?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AbrirMesaComponent_Template_button_click_18_listener() { return ctx.terminar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AbrirMesaComponent_Template_button_click_20_listener() { return ctx.terminar(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Abrir mesa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.data.mesero);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lstMeseros);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", +ctx.data.esEvento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", +ctx.data.dividirCuentasPorSillas)("disabled", +ctx.data.comensales <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_14__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], styles: [".contenido[_ngcontent-%COMP%] {\r\n    height: 50% !important;\r\n}\r\n\r\n.separatorMargin[_ngcontent-%COMP%] {\r\n    margin-right: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFicmlyLW1lc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhYnJpci1tZXNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuaWRvIHtcclxuICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3JNYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "31FO":
/*!********************************************************!*\
  !*** ./src/app/admin/services/usuario-tipo.service.ts ***!
  \********************************************************/
/*! exports provided: UsuarioTipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioTipoService", function() { return UsuarioTipoService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UsuarioTipoService {
    // private moduleUrl: string = 'turno';
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    get(fltr = {}) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos}/get_tipo_usuario?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
UsuarioTipoService.ɵfac = function UsuarioTipoService_Factory(t) { return new (t || UsuarioTipoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
UsuarioTipoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsuarioTipoService, factory: UsuarioTipoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4w7o":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListaProductosComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductosComandaComponent", function() { return ListaProductosComandaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valida-pwd-gerente-turno/valida-pwd-gerente-turno.component */ "vjxo");
/* harmony import */ var src_app_shared_components_dialog_elminar_producto_dialog_elminar_producto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/dialog-elminar-producto/dialog-elminar-producto.component */ "odaM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "JbvS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















function ListaProductosComandaComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.cantidadDeProductos, " ", ctx_r0.cantidadDeProductos > 1 ? "art\u00EDculos" : "art\u00EDculo", " por ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx_r0.totalDeProductos, "1.2-2"), " ");
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2.cantidad);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const det_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r12);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductosComandaComponent_mat_list_item_2_div_1_ng_container_6_div_1_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r2.detalle);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const p_r2 = ctx_r16.$implicit; const i_r3 = ctx_r16.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.removeProducto(p_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "remove_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.bloqueoBotones);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eco-fab-speed-dial", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eco-fab-speed-dial-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "eco-fab-speed-dial-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const p_r2 = ctx_r19.$implicit; const i_r3 = ctx_r19.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.deleteProductoFromList(p_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_button_9_Template, 3, 1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toggleShowInputNotas(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.bloqueoBotones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r2.detalle.length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.bloqueoBotones);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "eco-fab-speed-dial", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "eco-fab-speed-dial-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "eco-fab-speed-dial-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const p_r2 = ctx_r25.$implicit; const i_r3 = ctx_r25.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.deleteProductoFromListAfterPrinted(p_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.bloqueoBotones);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListaProductosComandaComponent_mat_list_item_2_div_1_span_4_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListaProductosComandaComponent_mat_list_item_2_div_1_ng_container_6_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_12_Template, 13, 3, "eco-fab-speed-dial", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListaProductosComandaComponent_mat_list_item_2_div_1_eco_fab_speed_dial_13_Template, 9, 1, "eco-fab-speed-dial", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.multiple === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", p_r2.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.combo === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, p_r2.cantidad * p_r2.precio + p_r2.monto_extra, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.impreso === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.impreso === 1);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; return p_r2.notas = $event; })("keyup.enter", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_1_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.toggleShowInputNotas(p_r2); })("blur", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_1_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.saveNotasProducto(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r29.keyboardLayout)("ngModel", p_r2.notas);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; return p_r2.notas = $event; })("keyup.enter", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_2_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.toggleShowInputNotas(p_r2); })("blur", function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_2_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.saveNotasProducto(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", p_r2.notas);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_1_Template, 1, 2, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_input_2_Template, 1, 1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r28.esMovil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.esMovil);
} }
function ListaProductosComandaComponent_mat_list_item_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductosComandaComponent_mat_list_item_2_div_2_mat_form_field_1_Template, 3, 2, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r2.showInputNotas);
} }
const _c0 = function (a0) { return { "noImpreso": a0 }; };
function ListaProductosComandaComponent_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductosComandaComponent_mat_list_item_2_div_1_Template, 14, 9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListaProductosComandaComponent_mat_list_item_2_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, +p_r2.impreso === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.cantidad > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +p_r2.cantidad > 0);
} }
class ListaProductosComandaComponent {
    constructor(snackBar, ls, comandaSrvc, socket, dialog) {
        this.snackBar = snackBar;
        this.ls = ls;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.dialog = dialog;
        this.listaProductos = [];
        this.noCuenta = null;
        this.listHeight = '450px';
        this.IdComanda = 0;
        this.IdCuenta = 0;
        this.bloqueoBotones = false;
        this.mesaEnUso = {};
        this.productoRemovedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.esMovil = false;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
        this.totalDeProductos = 0.00;
        this.cantidadDeProductos = 0;
        this.removeProducto = (p, idx, estaAutorizado = false, cantidad) => {
            this.bloqueoBotones = true;
            this.detalleComanda = {
                detalle_cuenta: p.detalle_cuenta,
                detalle_comanda: p.detalle_comanda,
                articulo: p.id,
                cantidad: +p.cantidad > 1 ? (+p.cantidad) - 1 : 0,
                precio: +p.precio,
                total: +p.cantidad > 1 ? ((+p.cantidad) - 1) * (+p.precio) : 0,
                notas: p.notas,
                autorizado: estaAutorizado
            };
            if (cantidad) {
                this.detalleComanda.cantidad = cantidad;
                this.detalleComanda.total = (cantidad * this.detalleComanda.precio);
            }
            this.comandaSrvc.saveDetalle(this.IdComanda, this.IdCuenta, this.detalleComanda).subscribe(res => {
                if (res.exito) {
                    p.cantidad = this.detalleComanda.cantidad;
                    this.productoRemovedEv.emit({ listaProductos: this.listaProductos, comanda: res.comanda });
                    if (+p.cantidad === 0) {
                        this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
                        this.socket.emit('refrescar:listaCocina', { mesaenuso: this.mesaEnUso });
                    }
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 3000 });
                }
                this.bloqueoBotones = false;
            });
        };
        this.deleteProductoFromList = (p, idx, estaAutorizado = false) => {
            p.cantidad = 0;
            p.notas = '';
            this.removeProducto(p, idx, estaAutorizado);
        };
        this.deleteProductoFromListAfterPrinted = (p, idx) => {
            this.bloqueoBotones = true;
            const dialogoRef = this.dialog.open(_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_2__["ValidaPwdGerenteTurnoComponent"], {
                width: '40%', disableClose: true
            });
            dialogoRef.afterClosed().subscribe(res => {
                // console.log(res);
                if (res) {
                    // this.autorizar = true;
                    //this.deleteProductoFromList(p, idx, true);
                    const dialogDelete = this.dialog.open(src_app_shared_components_dialog_elminar_producto_dialog_elminar_producto_component__WEBPACK_IMPORTED_MODULE_3__["DialogElminarProductoComponent"], {
                        width: '40%', disableClose: true, data: new src_app_shared_components_dialog_elminar_producto_dialog_elminar_producto_component__WEBPACK_IMPORTED_MODULE_3__["ElminarProductoModel"](p)
                    });
                    dialogDelete.afterClosed().subscribe(res => {
                        if (res && res.respuesta) {
                            this.removeProducto(res.producto, idx, true, res.producto.cantidad);
                            this.snackBar.open('Se eliminará el producto seleccionado.', 'Comanda', { duration: 5000 });
                        }
                    });
                }
                else {
                    this.snackBar.open('La contraseña no es correcta', 'Comanda', { duration: 5000 });
                }
                this.bloqueoBotones = false;
            });
        };
        this.saveNotasProducto = (p) => {
            this.comandaSrvc.saveNotasProducto({ detalle_comanda: p.detalle_comanda, notas: p.notas }).subscribe(res => {
                if (res.exito) {
                    this.snackBar.open('Notas de producto guardadas con éxito...', 'Producto', { duration: 3000 });
                }
            });
        };
        this.getTotalProductos = () => {
            this.totalDeProductos = 0.00;
            this.cantidadDeProductos = 0;
            for (const p of this.listaProductos) {
                this.totalDeProductos += ((p.cantidad * p.precio) + p.monto_extra);
                this.cantidadDeProductos += p.cantidad;
            }
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
    }
    ngOnChanges(changes) {
        if (this.listaProductos && this.listaProductos.length > 0) {
            this.getTotalProductos();
        }
    }
    toggleShowInputNotas(p) {
        console.log('ARTICULO = ', p);
        p.showInputNotas = !p.showInputNotas;
        if (p.showInputNotas) {
            p.itemListHeight = '140px';
        }
        else {
            p.itemListHeight = '70px';
            this.saveNotasProducto(p);
        }
    }
    doAction(ev) {
        console.log(ev);
    }
}
ListaProductosComandaComponent.ɵfac = function ListaProductosComandaComponent_Factory(t) { return new (t || ListaProductosComandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_6__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
ListaProductosComandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaProductosComandaComponent, selectors: [["app-lista-productos-comanda"]], inputs: { listaProductos: "listaProductos", noCuenta: "noCuenta", listHeight: "listHeight", IdComanda: "IdComanda", IdCuenta: "IdCuenta", bloqueoBotones: "bloqueoBotones", mesaEnUso: "mesaEnUso" }, outputs: { productoRemovedEv: "productoRemovedEv" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [[1, "fullWidth"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["matLine", ""], [1, "lineaDeTotal"], [3, "ngClass"], ["matLine", "", "class", "fullWidth", 4, "ngIf"], ["matLine", "", 1, "fullWidth"], [1, "row"], [1, "col", "m6", "s12"], ["align", "end", 1, "col", "m6", "s12"], ["direction", "left", 4, "ngIf"], ["matLine", "", 4, "ngFor", "ngForOf"], [1, "tabulador"], ["direction", "left"], ["mat-fab", ""], [2, "font-size", "18pt !important"], ["mat-mini-fab", "", "color", "warn", 3, "disabled", "click"], [2, "font-size", "16pt !important"], ["mat-mini-fab", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], ["class", "fullWidth", 4, "ngIf"], ["matInput", "", "placeholder", "Notas de producto", "maxlength", "1000", 3, "matKeyboard", "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["matInput", "", "placeholder", "Notas de producto", "maxlength", "1000", 3, "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["matInput", "", "placeholder", "Notas de producto", "maxlength", "1000", 3, "matKeyboard", "ngModel", "ngModelChange", "keyup.enter", "blur"], ["matInput", "", "placeholder", "Notas de producto", "maxlength", "1000", 3, "ngModel", "ngModelChange", "keyup.enter", "blur"]], template: function ListaProductosComandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductosComandaComponent_mat_list_item_1_Template, 5, 6, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListaProductosComandaComponent_mat_list_item_2_Template, 3, 5, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listaProductos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listaProductos);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_13__["EcoFabSpeedDialComponent"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_13__["EcoFabSpeedDialTriggerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_13__["EcoFabSpeedDialActionsComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_18__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n}\n\n.noImpreso[_ngcontent-%COMP%] {\n    background-color: #c7c7c7;\n}\n\n.text-pre-wrap[_ngcontent-%COMP%]{\n    white-space: pre-wrap !important;\n}\n\n.lineaDeTotal[_ngcontent-%COMP%] {\n    font-weight: bold !important;\n    font-size: 11pt !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXByb2R1Y3Rvcy1jb21hbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6Imxpc3RhLXByb2R1Y3Rvcy1jb21hbmRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubm9JbXByZXNvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3O1xufVxuXG4udGV4dC1wcmUtd3JhcHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbn1cblxuLmxpbmVhRGVUb3RhbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDExcHQgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "866G":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/propina/propina.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaComponent", function() { return PropinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lista-propina/lista-propina.component */ "+grV");
/* harmony import */ var _form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-propina/form-propina.component */ "He6H");



const _c0 = ["lstPropina"];
class PropinaComponent {
    constructor() {
        this.setPropina = (pres) => this.propina = {
            propina_distribucion: pres.propina_distribucion,
            usuario_tipo: pres.usuario_tipo.usuario_tipo,
            porcentaje: pres.porcentaje,
            anulado: pres.anulado,
            sede: pres.sede,
            grupal: pres.grupal
        };
        this.refreshPropinaList = () => this.lstPropinaComponent.loadPropinas();
        this.propina = {
            propina_distribucion: null, usuario_tipo: null, porcentaje: null, anulado: null, sede: null, grupal: null
        };
    }
    ngOnInit() {
    }
}
PropinaComponent.ɵfac = function PropinaComponent_Factory(t) { return new (t || PropinaComponent)(); };
PropinaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropinaComponent, selectors: [["app-propina"]], viewQuery: function PropinaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lstPropinaComponent = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getPropinaEv"], ["lstPropina", ""], [1, "col", "m7", "s12"], [3, "propina", "propinaSavedEv"], ["frmPropina", ""]], template: function PropinaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-lista-propina", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getPropinaEv", function PropinaComponent_Template_app_lista_propina_getPropinaEv_2_listener($event) { return ctx.setPropina($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-form-propina", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("propinaSavedEv", function PropinaComponent_Template_app_form_propina_propinaSavedEv_5_listener() { return ctx.refreshPropinaList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("propina", ctx.propina);
    } }, directives: [_lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_1__["ListaPropinaComponent"], _form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_2__["FormPropinaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9waW5hLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "8slz":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurante/components/area/area-designer/area-designer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AreaDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaDesignerComponent", function() { return AreaDesignerComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _configura_mesa_configura_mesa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configura-mesa/configura-mesa.component */ "Vy/R");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/mesa.service */ "dv7o");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mesa_mesa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mesa/mesa.component */ "UBc4");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");














function AreaDesignerComponent_app_mesa_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-mesa", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClickMesa", function AreaDesignerComponent_app_mesa_22_Template_app_mesa_onClickMesa_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return !ctx_r4.cargando && ctx_r4.onClickMesa($event); })("moviendoMesa", function AreaDesignerComponent_app_mesa_22_Template_app_mesa_moviendoMesa_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.cargando = $event; })("contextmenu", function AreaDesignerComponent_app_mesa_22_Template_app_mesa_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const m_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return !ctx_r7.cargando && ctx_r7.onContextMenu($event, m_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("configuracion", m_r3)("dontAllowDrag", ctx_r0.cargando);
} }
function AreaDesignerComponent_ng_template_26_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_ng_template_26_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.configurarMesa(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Configuracion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreaDesignerComponent_ng_template_26_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_ng_template_26_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.toggleDeBaja(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Dar de baja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", +item_r8.estatus === 2);
} }
function AreaDesignerComponent_ng_template_26_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_ng_template_26_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.toggleDeBaja(item_r8, 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Habilitar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", +item_r8.estatus === 2);
} }
function AreaDesignerComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AreaDesignerComponent_ng_template_26_button_3_Template, 4, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AreaDesignerComponent_ng_template_26_button_4_Template, 4, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AreaDesignerComponent_ng_template_26_button_5_Template, 4, 1, "button", 15);
} if (rf & 2) {
    const item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Mesa #", item_r8.numero, " (", item_r8.mesa, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", +item_r8.debaja === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", +item_r8.debaja === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", +item_r8.debaja === 1);
} }
// import { ImpresoraService } from '../../../../admin/services/impresora.service';
class AreaDesignerComponent {
    constructor(snackBar, mesaSrvc, dialogRef, dialog, 
    // public impresoraSrvc: ImpresoraService,
    data) {
        this.snackBar = snackBar;
        this.mesaSrvc = mesaSrvc;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.mesas = [];
        this.contextMenuPosition = { x: '0px', y: '0px' };
        // public impresoras: Impresora[] = [];
        this.cargando = false;
        // loadImpresoras = () => this.impresoraSrvc.get().subscribe(res => this.impresoras = res);
        this.getNextTableNumber = () => this.mesas.length > 0 ?
            (this.mesas.reduce((max, p) => +p.numero > max ? +p.numero : max, (!!this.mesas[0].numero ? +this.mesas[0].numero : 0)) + 1) :
            1;
        this.addTable = (w = 72, h = 72, esmostrador = 0, vertical = 0, escallcenter = 0) => {
            this.cargando = true;
            this.mesas.push({
                mesa: null,
                area: this.data.area,
                numero: this.getNextTableNumber(),
                posx: 1,
                posy: 1,
                tamanio: 72,
                estatus: 1,
                ancho: w,
                alto: h,
                esmostrador,
                vertical,
                escallcenter
            });
            this.saveNewMesa(this.mesas[this.mesas.length - 1], this.mesas.length - 1);
        };
        this.addMostrador = (esVertical = false) => this.addTable((esVertical ? 72 : 144), (esVertical ? 144 : 72), 1, (esVertical ? 1 : 0));
        this.addCallCenter = () => this.addTable(72, 72, 1, 0, 1);
        this.saveNewMesa = (mesa, pos) => {
            this.mesaSrvc.save(mesa).subscribe(res => {
                if (res.exito) {
                    if (!!res.mesa) {
                        this.mesas[pos] = res.mesa;
                    }
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Mesa', { duration: 7000 });
                }
                this.cargando = false;
            });
        };
        this.onClickMesa = (obj) => { };
        this.terminar = () => this.dialogRef.close(this.mesas);
        this.configurarMesa = (item) => {
            const configMesaRef = this.dialog.open(_configura_mesa_configura_mesa_component__WEBPACK_IMPORTED_MODULE_2__["ConfiguraMesaComponent"], {
                width: '50%',
                data: { mesa: item }
            });
            configMesaRef.afterClosed().subscribe(res => {
            });
        };
        this.toggleDeBaja = (item, deBaja = 1) => {
            const confBajaMesa = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"](+item.esmostrador === 0 ? 'Mesa' : 'Mostrador', `¿Seguro que desea ${deBaja === 1 ? 'dar de baja' : 'habilitar'} ${+item.esmostrador === 0 ? 'la mesa' : 'el mostrador'} #${item.numero}?`, 'Sí', 'No')
            });
            confBajaMesa.afterClosed().subscribe((conf) => {
                if (conf) {
                    item.debaja = deBaja;
                    this.mesaSrvc.save(item).subscribe(res => {
                        if (res.exito) {
                            if (!!res.mesa) {
                                const idx = this.mesas.findIndex(m => +m.mesa === +res.mesa.mesa);
                                if (idx > -1) {
                                    this.mesas[idx] = res.mesa;
                                }
                                this.snackBar.open(res.mensaje, 'Mesa', { duration: 3000 });
                            }
                        }
                        else {
                            this.snackBar.open(`ERROR: ${res.mensaje}`, 'Mesa', { duration: 7000 });
                        }
                    });
                }
            });
        };
    }
    ngOnInit() {
        // console.log(this.data);
        this.mesas = this.data.mesas;
        // console.log(this.mesas);
        // this.loadImpresoras();
    }
    onContextMenu(event, item) {
        event.preventDefault();
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        this.contextMenu.menuData = { item };
        this.contextMenu.menu.focusFirstItem('mouse');
        this.contextMenu.openMenu();
    }
}
AreaDesignerComponent.ɵfac = function AreaDesignerComponent_Factory(t) { return new (t || AreaDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_mesa_service__WEBPACK_IMPORTED_MODULE_6__["MesaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
AreaDesignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AreaDesignerComponent, selectors: [["app-area-designer"]], viewQuery: function AreaDesignerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, decls: 27, vars: 11, consts: [[1, "diseniador"], ["align", "center", 2, "height", "55px"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], [1, "btnIconSize"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [2, "height", "5px", "width", "100%"], ["id", "divAreaPosicionamiento", 1, "areaPosicionamiento"], [3, "configuracion", "dontAllowDrag", "onClickMesa", "moviendoMesa", "contextmenu", 4, "ngFor", "ngForOf"], [2, "visibility", "hidden", "position", "fixed", 3, "matMenuTriggerFor"], ["contextMenu", "matMenu"], ["matMenuContent", ""], [3, "configuracion", "dontAllowDrag", "onClickMesa", "moviendoMesa", "contextmenu"], ["mat-menu-item", "", "disableRipple", "true", 1, "mesaTitle"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "class", "customize", 3, "disabled", "click", 4, "ngIf"], ["mat-menu-item", "", "class", "customizeUp", 3, "disabled", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "customize", 3, "disabled", "click"], ["mat-menu-item", "", 1, "customizeUp", 3, "disabled", "click"]], template: function AreaDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_Template_button_click_2_listener() { return ctx.addTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0Mesa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_Template_button_click_6_listener() { return ctx.addMostrador(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u00A0Mostrador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_Template_button_click_10_listener() { return ctx.addMostrador(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u00A0Mostrador vertical ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_Template_button_click_14_listener() { return ctx.addCallCenter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u00A0Call center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaDesignerComponent_Template_button_click_18_listener() { return ctx.terminar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Terminar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AreaDesignerComponent_app_mesa_22_Template, 1, 2, "app-mesa", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AreaDesignerComponent_ng_template_26_Template, 6, 5, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mesas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.contextMenuPosition.x)("top", ctx.contextMenuPosition.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuContent"], _mesa_mesa_component__WEBPACK_IMPORTED_MODULE_10__["MesaComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".diseniador[_ngcontent-%COMP%] {\n    width: 750px;\n    height: 650px;\n    overflow: hidden !important;\n    padding: 0 !important;\n    \n}\n\n.areaPosicionamiento[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 600px;\n    overflow: hidden !important;\n    background-color: #c7c7c749;\n    padding: 0 !important;\n    position: relative;\n}\n\n.btnIconSize[_ngcontent-%COMP%] {\n    font-size: 17pt !important;\n}\n\n  .customize {    \n    background: lightyellow;\n}\n\n  .customizeUp {    \n    background: lightgreen;\n}\n\n.mesaTitle[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtZGVzaWduZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7Q0FLQyIsImZpbGUiOiJhcmVhLWRlc2lnbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzZW5pYWRvciB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAvKmJvcmRlcjogZGFzaGVkIDFweCAjYzdjN2M3NDk7Ki9cbn1cblxuLmFyZWFQb3NpY2lvbmFtaWVudG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2M3Yzc0OTtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuSWNvblNpemUge1xuICAgIGZvbnQtc2l6ZTogMTdwdCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbWl6ZSB7ICAgIFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbWl6ZVVwIHsgICAgXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbn1cblxuLm1lc2FUaXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qXG46Om5nLWRlZXAgLm1hdC1tZW51LXBhbmVsIHsgICAgXG4gICAgaGVpZ2h0OiAxMjVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7ICAgIFxufVxuKi8iXX0= */"] });


/***/ }),

/***/ "9epx":
/*!******************************************************!*\
  !*** ./src/app/restaurante/services/area.service.ts ***!
  \******************************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AreaService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'area';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    get(fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/get_areas?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/guardar${entidad.area ? ('/' + entidad.area) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
AreaService.ɵfac = function AreaService_Factory(t) { return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AreaService, factory: AreaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9x1t":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/area/form-area/form-area.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAreaComponent", function() { return FormAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../area-designer/area-designer.component */ "8slz");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/area.service */ "9epx");
/* harmony import */ var _admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../admin/services/impresora.service */ "qMXL");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function FormAreaComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormAreaComponent_mat_form_field_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.entidad.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.entidad.nombre);
} }
function FormAreaComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ar_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ar_r9.area);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ar_r9.nombre, " ");
} }
function FormAreaComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imp_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", imp_r10.impresora);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", imp_r10.nombre, " ");
} }
function FormAreaComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imp_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", imp_r11.impresora);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", imp_r11.nombre, " ");
} }
function FormAreaComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormAreaComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDesigner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dise\u00F1ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormAreaComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormAreaComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.resetEntidad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormAreaComponent {
    constructor(snackBar, dialog, entidadSrvc, impresoraSrvc, ls) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.entidadSrvc = entidadSrvc;
        this.impresoraSrvc = impresoraSrvc;
        this.ls = ls;
        this.entidadSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sedeUsr = 0;
        this.lstAreas = [];
        this.esMovil = false;
        this.impresoras = [];
        this.loadAreas = () => this.entidadSrvc.get({ sede: this.sedeUsr, debaja: 1 }).subscribe(res => this.lstAreas = res);
        this.loadImpresoras = () => this.impresoraSrvc.get().subscribe(res => this.impresoras = res);
        this.resetEntidad = () => this.entidad = { area: null, sede: this.sedeUsr, nombre: null, mesas: [], impresora_factura: null, impresora: null };
        this.onSubmit = () => {
            // console.log(this.entidad); return;
            this.entidadSrvc.save(this.entidad).subscribe(res => {
                if (res.exito) {
                    this.snackBar.open(`${res.mensaje}`, 'Área', { duration: 3000 });
                    this.resetEntidad();
                    this.loadAreas();
                    this.entidadSavedEv.emit();
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Área', { duration: 3000 });
                }
            });
        };
        this.openDesigner = () => {
            const areaDesignerRef = this.dialog.open(_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_2__["AreaDesignerComponent"], {
                width: '800px',
                disableClose: true,
                data: { area: +this.entidad.area, mesas: this.entidad.mesas || [] }
            });
            areaDesignerRef.afterClosed().subscribe((result) => {
                if (result) {
                    // console.log(result);
                    this.entidadSavedEv.emit();
                    this.entidadSrvc.get({ area: +this.entidad.area, debaja: 1 }).subscribe(res => {
                        if (res && res.length > 0) {
                            this.entidad = res[0];
                        }
                    });
                }
            });
        };
    }
    ngOnInit() {
        this.sedeUsr = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0;
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
        this.resetEntidad();
        this.loadAreas();
        this.loadImpresoras();
    }
}
FormAreaComponent.ɵfac = function FormAreaComponent_Factory(t) { return new (t || FormAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_6__["ImpresoraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"])); };
FormAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormAreaComponent, selectors: [["app-form-area"]], inputs: { entidad: "entidad" }, outputs: { entidadSavedEv: "entidadSavedEv" }, decls: 30, vars: 11, consts: [[1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmEntidad", "ngForm"], ["class", "fullWidth", 4, "ngIf"], [1, "fullWidth"], ["name", "area_padre", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "impresora", "required", "", 3, "ngModel", "ngModelChange"], ["name", "impresora_factura", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Nombre", "name", "nombre", "minlength", "1", "maxlength", "100", "required", "", 3, "ngModel", "ngModelChange"], [3, "value"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"]], template: function FormAreaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00C1rea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormAreaComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormAreaComponent_mat_form_field_7_Template, 2, 1, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00C1rea padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormAreaComponent_Template_mat_select_ngModelChange_11_listener($event) { return ctx.entidad.area_padre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormAreaComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Impresora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormAreaComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.entidad.impresora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormAreaComponent_mat_option_17_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Impresora de factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormAreaComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.entidad.impresora_factura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormAreaComponent_mat_option_22_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FormAreaComponent_button_28_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FormAreaComponent_button_29_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entidad.area_padre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstAreas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entidad.impresora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.impresoras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.entidad.impresora_factura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.impresoras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mesas en el \u00E1rea: ", ctx.entidad.mesas.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entidad.area);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entidad.area);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImZvcm0tYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ "AopW":
/*!***********************************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/selecciona-turno-previo/selecciona-turno-previo.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SeleccionaTurnoPrevioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionaTurnoPrevioComponent", function() { return SeleccionaTurnoPrevioComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_turno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/turno.service */ "iDsI");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function SeleccionaTurnoPrevioComponent_ng_container_4_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeleccionaTurnoPrevioComponent_ng_container_4_mat_list_item_1_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const element_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.turnoSelected = element_r2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Inicio: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, element_r2.inicio, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fin: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 5, element_r2.fin, "dd/MM/yyyy HH:mm:ss"), "");
} }
function SeleccionaTurnoPrevioComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SeleccionaTurnoPrevioComponent_ng_container_4_mat_list_item_1_Template, 10, 8, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", +element_r2.turno !== +ctx_r0.data.turnoCopia.turno);
} }
function SeleccionaTurnoPrevioComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Seleccion\u00F3 el turno que inicia el ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 2, ctx_r1.turnoSelected.inicio, "dd/MM/yyyy HH:mm:ss"), " y finaliza el ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 5, ctx_r1.turnoSelected.fin, "dd/MM/yyyy HH:mm:ss"), "");
} }
class SeleccionaTurnoPrevioComponent {
    constructor(dialogRef, data, ls, snackBar, turnoSrvc, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ls = ls;
        this.snackBar = snackBar;
        this.turnoSrvc = turnoSrvc;
        this.dialog = dialog;
        this.lstTurnos = [];
        this.loadTurnos = () => {
            this.lstTurnos = [];
            this.turnoSrvc.get({ sede: (+this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe((lst) => {
                if (lst && lst.length > 0) {
                    const limite = lst.length >= 11 ? 11 : lst.length;
                    for (let i = 0; i < limite; i++) {
                        this.lstTurnos.push(lst[i]);
                    }
                }
            });
        };
        this.cancelar = () => this.dialogRef.close();
        this.copiar = () => {
            if (this.turnoSelected) {
                const confDialog = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
                    maxWidth: '400px',
                    data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogModel"]('Detalle de turno', 'Esto copiará el detalle del turno que seleccionó. ¿Desea continuar?', 'Sí', 'No')
                });
                confDialog.afterClosed().subscribe(resConf => {
                    if (resConf) {
                        this.turnoSrvc.replicaDetalleTurno(this.turnoSelected.turno, this.data.turnoCopia.turno).subscribe(res => {
                            if (res.exito) {
                                this.snackBar.open('Turno copiado con éxito', 'Detalle turno', { duration: 3000 });
                            }
                            else {
                                this.snackBar.open(`ERROR: ${res.mensaje}`, 'Detalle turno', { duration: 7000 });
                            }
                            this.dialogRef.close();
                        });
                    }
                });
            }
        };
    }
    ngOnInit() {
        this.loadTurnos();
    }
}
SeleccionaTurnoPrevioComponent.ɵfac = function SeleccionaTurnoPrevioComponent_Factory(t) { return new (t || SeleccionaTurnoPrevioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_turno_service__WEBPACK_IMPORTED_MODULE_6__["TurnoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
SeleccionaTurnoPrevioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SeleccionaTurnoPrevioComponent, selectors: [["app-selecciona-turno-previo"]], decls: 11, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [3, "click", 4, "ngIf"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function SeleccionaTurnoPrevioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00BFDe qu\u00E9 turno quiere copiar el detalle?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SeleccionaTurnoPrevioComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SeleccionaTurnoPrevioComponent_small_5_Template, 6, 8, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeleccionaTurnoPrevioComponent_Template_button_click_7_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SeleccionaTurnoPrevioComponent_Template_button_click_9_listener() { return ctx.copiar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Copiar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lstTurnos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.turnoSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.turnoSelected);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY2Npb25hLXR1cm5vLXByZXZpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "BJCR":
/*!***************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PorArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorArticuloComponent", function() { return PorArticuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PorArticuloComponent_mat_card_content_10_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const art_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](art_r3.articulo.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, art_r3.cantidad, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, art_r3.total, "1.2-2"));
} }
function PorArticuloComponent_mat_card_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PorArticuloComponent_mat_card_content_10_ng_container_11_Template, 10, 9, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data.datos);
} }
function PorArticuloComponent_mat_card_content_11_ng_container_11_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const art_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](art_r7.articulo.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, art_r7.cantidad, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, art_r7.total, "1.2-2"));
} }
function PorArticuloComponent_mat_card_content_11_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PorArticuloComponent_mat_card_content_11_ng_container_11_tr_4_Template, 9, 9, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sede_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sede_r5.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sede_r5.articulos);
} }
function PorArticuloComponent_mat_card_content_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PorArticuloComponent_mat_card_content_11_ng_container_11_Template, 5, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data.datos);
} }
// import { PorArticulo } from '../../../../interfaces/reporte-ventas';
class PorArticuloComponent {
    constructor() {
        this.params = {};
        this.data = {};
    }
    ngOnInit() {
    }
}
PorArticuloComponent.ɵfac = function PorArticuloComponent_Factory(t) { return new (t || PorArticuloComponent)(); };
PorArticuloComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PorArticuloComponent, selectors: [["app-por-articulo"]], inputs: { params: "params", data: "data" }, decls: 12, vars: 10, consts: [[1, "mat-elevation-z4", "fullWidth"], [4, "ngIf"], [1, "tbl"], [1, "brdTSingleBSingle"], [1, "rtxt", "numWidth", "brdTSingleBSingle"], [4, "ngFor", "ngForOf"], [1, "doubleTab", "brdBSingle"], [1, "rtxt", "numWidth", "brdBSingle"], ["colspan", "3", 1, "brdTSingleBSingle"]], template: function PorArticuloComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reporte de ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Por art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PorArticuloComponent_mat_card_content_10_Template, 12, 1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PorArticuloComponent_mat_card_content_11_Template, 12, 1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Del ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx.params.fdel, "dd/MM/yyyy"), " al ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, ctx.params.fal, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.grupo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.grupo == 2);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".numWidth[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvci1hcnRpY3Vsby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoicG9yLWFydGljdWxvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtV2lkdGgge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxudHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "BQSQ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/notas-generales-comanda/notas-generales-comanda.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NotasGeneralesComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasGeneralesComandaComponent", function() { return NotasGeneralesComandaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");











function NotasGeneralesComandaComponent_textarea_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasGeneralesComandaComponent_textarea_6_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.data.notasGenerales = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matKeyboard", ctx_r1.keyboardLayout)("ngModel", ctx_r1.data.notasGenerales);
} }
function NotasGeneralesComandaComponent_textarea_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NotasGeneralesComandaComponent_textarea_7_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.data.notasGenerales = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.data.notasGenerales);
} }
class NotasGeneralesComandaComponent {
    constructor(dialogRef, data, ls) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ls = ls;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
        this.esMovil = false;
        this.terminar = (obj = null) => this.dialogRef.close(obj);
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
    }
}
NotasGeneralesComandaComponent.ɵfac = function NotasGeneralesComandaComponent_Factory(t) { return new (t || NotasGeneralesComandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"])); };
NotasGeneralesComandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NotasGeneralesComandaComponent, selectors: [["app-notas-generales-comanda"]], decls: 13, vars: 2, consts: [["mat-dialog-title", ""], ["novalidate", ""], ["frmNotasGenCom", "ngForm"], [1, "fullWidth"], ["matInput", "", "placeholder", "Notas generales", "name", "notasGenerales", "maxlength", "1000", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Notas generales", "name", "notasGenerales", "maxlength", "1000", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "color", "secondary", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Notas generales", "name", "notasGenerales", "maxlength", "1000", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Notas generales", "name", "notasGenerales", "maxlength", "1000", 3, "ngModel", "ngModelChange"]], template: function NotasGeneralesComandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Notas generales de comanda");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NotasGeneralesComandaComponent_textarea_6_Template, 1, 2, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NotasGeneralesComandaComponent_textarea_7_Template, 1, 1, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotasGeneralesComandaComponent_Template_button_click_9_listener() { return ctx.terminar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotasGeneralesComandaComponent_Template_button_click_11_listener() { return ctx.terminar(ctx.data.notasGenerales); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.esMovil);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_9__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rhcy1nZW5lcmFsZXMtY29tYW5kYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "BXCb":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurante/components/traslado-mesa/traslado-mesa.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TrasladoMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrasladoMesaComponent", function() { return TrasladoMesaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mesa.service */ "dv7o");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function TrasladoMesaComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mDispon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mDispon_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", mDispon_r2.area.nombre, " - ", mDispon_r2.etiqueta || mDispon_r2.numero, " ");
} }
class TrasladoMesaComponent {
    constructor(dialogRef, snackBar, mesaSrvc, comandaSrvc, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.mesaSrvc = mesaSrvc;
        this.comandaSrvc = comandaSrvc;
        this.data = data;
        this.mesasDisponibles = [];
        this.loadMesasDisponibles = () => this.mesaSrvc.getDisponibles().subscribe((res) => this.mesasDisponibles = res);
        this.cancelar = () => this.dialogRef.close(false);
        this.trasladar = () => {
            this.comandaSrvc.trasladarMesa(+this.data.mesaEnUso.comanda, +this.data.mesaEnUso.mesa.mesa, +this.destino.mesa).subscribe(res => {
                if (res.exito) {
                    this.snackBar.open(res.mensaje, 'Traslado de mesa', { duration: 3000 });
                    this.dialogRef.close(true);
                }
                else {
                    this.snackBar.open(`ERROR:${res.mensaje}`, 'Traslado de mesa', { duration: 7000 });
                }
            });
        };
    }
    ngOnInit() {
        this.loadMesasDisponibles();
    }
}
TrasladoMesaComponent.ɵfac = function TrasladoMesaComponent_Factory(t) { return new (t || TrasladoMesaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mesa_service__WEBPACK_IMPORTED_MODULE_3__["MesaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_4__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
TrasladoMesaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrasladoMesaComponent, selectors: [["app-traslado-mesa"]], decls: 15, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", ""], ["frmTrasladarMesa", "ngForm"], [1, "fullWidth"], ["name", "destino", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [3, "value"]], template: function TrasladoMesaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trasladar a otra mesa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Trasladar a mesa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TrasladoMesaComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.destino = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TrasladoMesaComponent_mat_option_9_Template, 2, 3, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrasladoMesaComponent_Template_button_click_11_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TrasladoMesaComponent_Template_button_click_13_listener() { return ctx.trasladar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Trasladar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.destino);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mesasDisponibles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFzbGFkby1tZXNhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "EBRK":
/*!****************************************************************!*\
  !*** ./src/app/restaurante/services/reporte-ventas.service.ts ***!
  \****************************************************************/
/*! exports provided: ReporteVentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteVentasService", function() { return ReporteVentasService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ReporteVentasService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'reporte/venta';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorHandler"]();
    }
    porCategoria(params) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/categoria?${qs__WEBPACK_IMPORTED_MODULE_4__["stringify"](params)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porArticulo(params) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/articulo?${qs__WEBPACK_IMPORTED_MODULE_4__["stringify"](params)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porCategoriaPdf(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: 'application/pdf'
            }),
            responseType: 'blob'
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/categoriapdf/1?${qs__WEBPACK_IMPORTED_MODULE_4__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porArticuloPdf(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Accept: 'application/pdf'
            }),
            responseType: 'blob'
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/articulopdf/1?${qs__WEBPACK_IMPORTED_MODULE_4__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
ReporteVentasService.ɵfac = function ReporteVentasService_Factory(t) { return new (t || ReporteVentasService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ReporteVentasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ReporteVentasService, factory: ReporteVentasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Gbtp":
/*!***********************************************************!*\
  !*** ./src/app/restaurante/services/cajacorte.service.ts ***!
  \***********************************************************/
/*! exports provided: CajacorteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteService", function() { return CajacorteService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class CajacorteService {
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'cajacorte';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    buscar(fltr = {}) {
        /*const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.usrToken
          })
        };*/
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getCajaCorteTipo(fltr = {}) {
        /*const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.usrToken
          })
        };*/
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos}/get_caja_corte_tipo?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getCajaCorteNominacion(fltr = {}) {
        /*const httpOptions = {
          headers: new HttpHeaders({
            Authorization: this.usrToken
          })
        };*/
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos}/get_caja_corte_nominacion?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    guardar(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularCorte(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/anular_caja`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularDetalle(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/anular_caja_detalle`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
CajacorteService.ɵfac = function CajacorteService_Factory(t) { return new (t || CajacorteService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CajacorteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CajacorteService, factory: CajacorteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "He6H":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/form-propina/form-propina.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormPropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropinaComponent", function() { return FormPropinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_propina_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/propina.service */ "dkRY");
/* harmony import */ var _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/usuario-tipo.service */ "31FO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function FormPropinaComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r3.usuario_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r3.descripcion, " ");
} }
function FormPropinaComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormPropinaComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.resetPropina(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormPropinaComponent {
    constructor(snackBar, propinaSrvc, usuarioSrvc) {
        this.snackBar = snackBar;
        this.propinaSrvc = propinaSrvc;
        this.usuarioSrvc = usuarioSrvc;
        this.propinaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usuarios = [];
        this.loadUsuario = () => {
            this.usuarioSrvc.get().subscribe(res => {
                this.usuarios = res;
            });
        };
        this.resetPropina = () => this.propina = {
            propina_distribucion: null, usuario_tipo: null, porcentaje: null, anulado: 0, sede: null, grupal: 0
        };
        this.onSubmit = () => {
            this.propinaSrvc.save(this.propina).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.propinaSavedEv.emit();
                    this.resetPropina();
                    this.snackBar.open('Propina agregada...', 'Distribucion de propinas', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Distribucion de propinas', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.resetPropina();
        this.loadUsuario();
    }
}
FormPropinaComponent.ɵfac = function FormPropinaComponent_Factory(t) { return new (t || FormPropinaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_propina_service__WEBPACK_IMPORTED_MODULE_2__["PropinaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioTipoService"])); };
FormPropinaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormPropinaComponent, selectors: [["app-form-propina"]], inputs: { propina: "propina" }, outputs: { propinaSavedEv: "propinaSavedEv" }, decls: 24, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmPropina", "ngForm"], [1, "fullWidth"], ["name", "usuario", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "step", "0.01", "placeholder", "Porcentaje", "name", "porcentaje", "required", "", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col", "m6", "s6"], ["name", "grupal", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["name", "anulado", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-icon-button", "", "type", "submit", "color", "accent", 3, "disabled"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], [3, "value"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"]], template: function FormPropinaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormPropinaComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tipo Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormPropinaComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.propina.usuario_tipo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormPropinaComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormPropinaComponent_Template_input_ngModelChange_11_listener($event) { return ctx.propina.porcentaje = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormPropinaComponent_Template_mat_checkbox_ngModelChange_14_listener($event) { return +(ctx.propina.grupal = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Propina Grupal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormPropinaComponent_Template_mat_checkbox_ngModelChange_17_listener($event) { return +(ctx.propina.anulado = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Anulado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormPropinaComponent_button_23_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propina.usuario_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usuarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propina.porcentaje);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx.propina.grupal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx.propina.anulado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.propina.propina_distribucion);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXByb3BpbmEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "IdLv":
/*!***************************************************************************************************************!*\
  !*** ./src/app/restaurante/components/distribuir-productos-cuentas/distribuir-productos-cuentas.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DistribuirProductosCuentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuirProductosCuentasComponent", function() { return DistribuirProductosCuentasComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function DistribuirProductosCuentasComponent_tr_11_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cta_r4 = ctx.$implicit;
    const prod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", +cta_r4.cuenta)("disabled", +cta_r4.cerrada === 1 || +prod_r1.idcuenta === +cta_r4.cuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cta_r4.nombre, " ");
} }
function DistribuirProductosCuentasComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DistribuirProductosCuentasComponent_tr_11_Template_input_ngModelChange_5_listener($event) { const prod_r1 = ctx.$implicit; return prod_r1.cantidad = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DistribuirProductosCuentasComponent_tr_11_Template_mat_select_ngModelChange_7_listener($event) { const prod_r1 = ctx.$implicit; return prod_r1.idcuenta = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DistribuirProductosCuentasComponent_tr_11_mat_option_8_Template, 2, 3, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prod_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", ctx_r0.cantidadProducto[i_r2])("ngModel", prod_r1.cantidad)("disabled", +prod_r1.combo === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", prod_r1.idcuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.comanda.cuentas);
} }
class DistribuirProductosCuentasComponent {
    constructor(dialogRef, snackBar, comandaSrvc, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.comandaSrvc = comandaSrvc;
        this.data = data;
        this.cantidadProducto = [];
        this.cpLstProductos = [];
        this.compLstProductos = [];
        this.cancelar = () => this.dialogRef.close(false);
        this.guardar = () => {
            const lstObj = [];
            let idx = 0;
            for (const p of this.cpLstProductos) {
                if (+p.idcuenta !== +this.compLstProductos[idx].idcuenta) {
                    lstObj.push({
                        detalle_comanda: +p.detalle_comanda,
                        cuenta: +p.idcuenta,
                        cantidad: +p.cantidad
                    });
                }
                idx++;
            }
            if (lstObj.length > 0) {
                this.comandaSrvc.distribuirCuentas(lstObj).subscribe(res => {
                    if (res.exito) {
                        this.snackBar.open('Productos redistribuidos', 'Cuentas', { duration: 3000 });
                        this.dialogRef.close(true);
                    }
                    else {
                        this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cuentas', { duration: 7000 });
                        this.cancelar();
                    }
                });
            }
            else {
                this.snackBar.open('Sin cambios en las cuentas.', 'Cuentas', { duration: 7000 });
                this.dialogRef.close(true);
            }
        };
    }
    ngOnInit() {
        if (+this.data.mesaEnUso.comanda > 0) {
            const meu = this.data.mesaEnUso;
            this.comanda = {
                area: +meu.mesa.area.area,
                mesa: +meu.mesa.mesa,
                mesero: +meu.mesero.usuario,
                comensales: meu.cuentas.length + 1,
                dividirCuentasPorSillas: 1,
                comanda: +meu.comanda,
                cuentas: meu.cuentas,
                replaceUnica: false
            };
        }
        this.cpLstProductos = [];
        if (this.data.lstProductos.length > 0) {
            // console.log(this.data.lstProductos);
            // console.log(this.data.mesaEnUso.cuentas);
            this.data.lstProductos.forEach(item => {
                const laCta = this.data.mesaEnUso.cuentas.find(c => +c.cuenta === +item.idcuenta);
                if (+laCta.cerrada === 0) {
                    this.cpLstProductos.push(item);
                    this.cantidadProducto.push(+item.cantidad);
                }
            });
            this.cpLstProductos = JSON.parse(JSON.stringify(this.cpLstProductos));
            this.compLstProductos = JSON.parse(JSON.stringify(this.cpLstProductos));
        }
    }
}
DistribuirProductosCuentasComponent.ɵfac = function DistribuirProductosCuentasComponent_Factory(t) { return new (t || DistribuirProductosCuentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_3__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
DistribuirProductosCuentasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DistribuirProductosCuentasComponent, selectors: [["app-distribuir-productos-cuentas"]], decls: 17, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "rtxt", "size-cantidad"], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], [1, "rtxt"], [1, "size-cantidad"], ["type", "number", "matInput", "", "name", "cantidad", "min", "1", "required", "", 3, "max", "ngModel", "disabled", "ngModelChange"], ["name", "cuenta", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"]], template: function DistribuirProductosCuentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DistribuirProductosCuentasComponent_tr_11_Template, 9, 6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DistribuirProductosCuentasComponent_Template_button_click_13_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DistribuirProductosCuentasComponent_Template_button_click_15_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Distribuci\u00F3n de productos - Comanda #", ctx.data.mesaEnUso.comanda, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cpLstProductos);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".size-cantidad[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWJ1aXItcHJvZHVjdG9zLWN1ZW50YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJkaXN0cmlidWlyLXByb2R1Y3Rvcy1jdWVudGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZS1jYW50aWRhZCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59Il19 */"] });


/***/ }),

/***/ "PKcf":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-comanda-alt/tran-comanda-alt.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TranComandaAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranComandaAltComponent", function() { return TranComandaAltComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _classes_tran_comanda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/tran-comanda */ "s/4k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var _wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../wms/services/articulo.service */ "NGYs");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lista-productos-comanda/lista-productos-comanda.component */ "4w7o");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_barcodeput__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-barcodeput */ "pY9A");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");























const _c0 = ["txtCodigoBarras"];
function TranComandaAltComponent_mat_chip_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_mat_chip_12_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const cta_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return +cta_r7.cerrada === 0 && ctx_r8.setSelectedCuenta(cta_r7.numero); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cta_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", +cta_r7.cerrada === 1 || ctx_r0.bloqueoBotones)("selected", +cta_r7.cerrada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cta_r7.nombre, " ");
} }
function TranComandaAltComponent_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_mat_chip_13_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.nuevaCuenta(ctx_r10.dialogRef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nueva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { standalone: true }; };
function TranComandaAltComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TranComandaAltComponent_mat_form_field_14_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.codigoBarras = $event; })("onDetected", function TranComandaAltComponent_mat_form_field_14_Template_input_onDetected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.buscarArticulo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.codigoBarras)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
} }
function TranComandaAltComponent_br_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function TranComandaAltComponent_mat_chip_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_mat_chip_18_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const cat_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.loadSubcategorias(cat_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.bloqueoBotones);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r16.descripcion, " ");
} }
function TranComandaAltComponent_div_19_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_div_19_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const subcat_r23 = ctx.$implicit; const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.loadSubcategorias({ categoria: subcat_r23.categoria }, subcat_r23, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcat_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r22.bloqueoBotones);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subcat_r23.descripcion, " ");
} }
function TranComandaAltComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TranComandaAltComponent_div_19_mat_chip_2_Template, 2, 2, "mat-chip", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lstSubCat_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", lstSubCat_r19);
} }
function TranComandaAltComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_div_22_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const producto_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return !ctx_r28.bloqueoBotones && ctx_r28.addArticulo(producto_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producto_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](producto_r27.descripcion);
} }
class TranComandaAltComponent extends _classes_tran_comanda__WEBPACK_IMPORTED_MODULE_2__["TranComanda"] {
    constructor(dialogRef, data, dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc, bsAccionesCmd) {
        super(dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc, bsAccionesCmd);
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.ls = ls;
        this.pdfServicio = pdfServicio;
        this.configSrvc = configSrvc;
        this.articuloSrvc = articuloSrvc;
        this.bsAccionesCmd = bsAccionesCmd;
        this.categorias = [];
        this.subCategorias = [];
        this.listaSubCategorias = [];
        this.articulos = [];
        this.fullListArticulos = [];
        this.setDatos = () => {
            if (this.data) {
                if (this.data.mesa) {
                    this.mesaEnUso = this.data.mesa;
                    this.alIniciar();
                    this.setSelectedCuenta(this.mesaEnUso.cuentas[0].numero);
                    // console.log('CTA = ', this.cuentaActiva);
                    // console.log(this.mesaEnUso);
                }
            }
        };
        this.cerrar = () => this.dialogRef.close();
        this.resetArticulos = () => this.articulos = [];
        this.resetListaSubCategorias = () => this.listaSubCategorias = [];
        this.loadArticulosDePOS = () => {
            this.endSubs.add(this.articuloSrvc.getArticulosDePOS().subscribe((res) => {
                if (res) {
                    this.categorias = res.categorias;
                    this.subCategorias = res.subcategorias;
                    this.articulos = res.articulos;
                    this.fullListArticulos = JSON.parse(JSON.stringify(this.articulos));
                }
            }));
        };
        this.loadSubcategorias = (cat, subcat = null, idx = 0) => {
            if (!this.bloqueoBotones) {
                // console.log('CAT = ', cat); console.log('SUB = ', subcat); // return;
                if (!subcat) {
                    this.resetListaSubCategorias();
                    this.resetArticulos();
                    this.listaSubCategorias.push(this.subCategorias.filter(sc => +sc.categoria === +cat.categoria));
                }
                else {
                    if (this.listaSubCategorias.length > 0) {
                        this.listaSubCategorias.splice((idx + 1));
                    }
                    if (subcat.subcategorias) {
                        if (subcat.subcategorias.length === 0) {
                            this.filterArticulos(+subcat.categoria_grupo);
                        }
                        else {
                            this.listaSubCategorias.push(subcat.subcategorias);
                        }
                    }
                }
            }
        };
        this.filterArticulos = (idsubcat = null) => {
            if (!this.bloqueoBotones) {
                if (idsubcat) {
                    this.articulos = this.fullListArticulos.filter(a => +a.categoria_grupo === +idsubcat);
                }
                else {
                    this.articulos = this.fullListArticulos;
                }
            }
        };
        this.addArticulo = (art) => {
            if (!this.bloqueoBotones) {
                const obj = {
                    id: +art.articulo,
                    nombre: art.descripcion,
                    precio: +art.precio,
                    impresora: art.impresora,
                    presentacion: art.presentacion,
                    codigo: art.codigo,
                    combo: art.combo,
                    multiple: art.multiple
                };
                // console.log(obj); return;
                // console.log(this.cuentaActiva); return;
                this.agregarProductos(obj);
            }
        };
    }
    ngOnInit() {
        this.usaCodigoBarras = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_USA_CODIGO_BARRAS);
        this.loadArticulosDePOS();
        this.setDatos();
    }
    ngOnDestroy() {
        this.endSubs.unsubscribe();
    }
}
TranComandaAltComponent.ɵfac = function TranComandaAltComponent_Factory(t) { return new (t || TranComandaAltComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_5__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_8__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_9__["ConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_10__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"])); };
TranComandaAltComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TranComandaAltComponent, selectors: [["app-tran-comanda-alt"]], viewQuery: function TranComandaAltComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.txtCodigoBarras = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 18, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "50%", "fxFelx.xs", "100%", "fxLayoutAlign", "start start"], [1, "bld", 2, "font-size", "16pt", "margin-left", "10px"], ["fxFlex", "50%", "fxFelx.xs", "100%", "fxLayoutAlign", "end start"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 2, "margin-left", "8px", 3, "disabled", "click"], ["mat-dialog-content", "", 1, "contenido"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "center center", 1, "divSeparacion"], ["color", "accent", 3, "disabled", "selected", "click", 4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], ["style", "width: 25%;", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start center"], ["selected", "", "color", "accent", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start center", "class", "divSubCategorias", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start start"], ["fxFlex", "55%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxLayout", "row wrap", "fxLayoutGap", "8px grid", "fxLayoutAlign", "start start", 1, "divArticulos"], ["fxFlex", "20%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", "fxFlex.md", "25%", 4, "ngFor", "ngForOf"], ["fxFlex", "45%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", 1, "divArticulos"], [3, "listaProductos", "noCuenta", "IdComanda", "IdCuenta", "bloqueoBotones", "mesaEnUso", "productoRemovedEv"], ["color", "accent", 3, "disabled", "selected", "click"], [3, "click"], [2, "width", "25%"], ["matInput", "", "cdkFocusInitial", "", "ngxBarCodePut", "", "type", "text", "placeholder", "C\u00F3digo", "name", "codigoBarras", 3, "ngModel", "ngModelOptions", "ngModelChange", "onDetected"], ["txtCodigoBarras", "matInput"], ["selected", "", "color", "accent", 3, "disabled", "click"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start center", 1, "divSubCategorias"], ["selected", "", "color", "warn", "class", "btnAccion", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["selected", "", "color", "warn", 1, "btnAccion", 3, "disabled", "click"], ["fxFlex", "20%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", "fxFlex.md", "25%"], [1, "mat-elevation-z4", 3, "click"]], template: function TranComandaAltComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_Template_button_click_5_listener() { return ctx.abrirAccionesComanda(ctx.dialogRef); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranComandaAltComponent_Template_button_click_7_listener() { return ctx.cerrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Cerrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TranComandaAltComponent_mat_chip_12_Template, 2, 3, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TranComandaAltComponent_mat_chip_13_Template, 2, 0, "mat-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TranComandaAltComponent_mat_form_field_14_Template, 3, 3, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TranComandaAltComponent_br_15_Template, 1, 0, "br", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, TranComandaAltComponent_mat_chip_18_Template, 2, 2, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TranComandaAltComponent_div_19_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TranComandaAltComponent_div_22_Template, 5, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "app-lista-productos-comanda", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("productoRemovedEv", function TranComandaAltComponent_Template_app_lista_productos_comanda_productoRemovedEv_24_listener($event) { return ctx.updProductosCuenta($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.mesaEnUso.mesa.area.nombre, " - Mesa", ctx.mesaEnUso.mesa.numero, " - Comanda ", ctx.mesaEnUso.comanda, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.mesaEnUso.cuentas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", +ctx.mesaEnUso.mesa.esmostrador === 0 && +ctx.mesaEnUso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.usaCodigoBarras);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.usaCodigoBarras);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listaSubCategorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.articulos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listaProductos", ctx.lstProductosDeCuenta)("noCuenta", +ctx.cuentaActiva.numero)("IdComanda", ctx.mesaEnUso.comanda)("IdCuenta", ctx.cuentaActiva.cuenta)("bloqueoBotones", ctx.bloqueoBotones)("mesaEnUso", ctx.mesaEnUso);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_16__["ListaProductosComandaComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], ngx_barcodeput__WEBPACK_IMPORTED_MODULE_20__["NgxBarCodePutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardContent"]], styles: [".contenido[_ngcontent-%COMP%] {\r\n    max-height: 80vh !important;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    padding: 0 5px;\r\n}\r\n\r\n.divSubCategorias[_ngcontent-%COMP%] {\r\n    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.divArticulos[_ngcontent-%COMP%] {\r\n    padding: 3px 8px;\r\n    overflow-y: auto;\r\n    margin: 0;\r\n    height: 73vh;\r\n}\r\n\r\n.divArticulos[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    max-height:95px;\r\n}\r\n\r\n.divSeparacion[_ngcontent-%COMP%] {\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.bordeTest2[_ngcontent-%COMP%] {\r\n    border: 1px solid blue;   \r\n}\r\n\r\n.bordeTest3[_ngcontent-%COMP%] {\r\n    border: 1px solid lightgreen;   \r\n}\r\n\r\n@media (max-height: 768px) {\r\n    .divArticulos[_ngcontent-%COMP%] {\r\n        height: 60vh;\r\n    }    \r\n}\r\n\r\n@media (min-height: 769px) and (max-height: 960px) {\r\n    .divArticulos[_ngcontent-%COMP%] {\r\n        height: 69vh;\r\n    }    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW4tY29tYW5kYS1hbHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InRyYW4tY29tYW5kYS1hbHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xyXG4gICAgbWF4LWhlaWdodDogODB2aCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4uZGl2U3ViQ2F0ZWdvcmlhcyB7XHJcbiAgICAvKmJvcmRlci1ib3R0b206ICNFMEUwRTAgc29saWQgMXB4OyovXHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmRpdkFydGljdWxvcyB7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNzN2aDtcclxufVxyXG5cclxuLmRpdkFydGljdWxvcyA+IG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6OTVweDtcclxufVxyXG5cclxuLmRpdlNlcGFyYWNpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5ib3JkZVRlc3QyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAgXHJcbn1cclxuXHJcbi5ib3JkZVRlc3QzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47ICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNzY4cHgpIHtcclxuICAgIC5kaXZBcnRpY3Vsb3Mge1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLWhlaWdodDogNzY5cHgpIGFuZCAobWF4LWhlaWdodDogOTYwcHgpIHtcclxuICAgIC5kaXZBcnRpY3Vsb3Mge1xyXG4gICAgICAgIGhlaWdodDogNjl2aDtcclxuICAgIH0gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "SNic":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListaTurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTurnoTipoComponent", function() { return ListaTurnoTipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "+Q77");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function ListaTurnoTipoComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaTurnoTipoComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const element_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getTurno(element_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "line_weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.descripcion);
} }
const _c0 = function () { return { standalone: true }; };
class ListaTurnoTipoComponent {
    constructor(turnoSrvc) {
        this.turnoSrvc = turnoSrvc;
        this.getTurnoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadTurnos = () => {
            this.turnoSrvc.get().subscribe(lst => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstTurnos = lst;
                        this.applyFilter();
                    }
                }
            });
        };
        this.getTurno = (obj) => {
            this.getTurnoEv.emit(obj);
        };
        this.pageChange = (e) => {
            this.pageSize = e.pageSize;
            this.pageIndex = e.pageIndex;
            this.applyFilter();
        };
    }
    ngOnInit() {
        this.loadTurnos();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstTurnos, this.txtFiltro);
            this.length = tmpList.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstTurnos.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstTurnos, this.pageSize, this.pageIndex + 1);
        }
    }
}
ListaTurnoTipoComponent.ɵfac = function ListaTurnoTipoComponent_Factory(t) { return new (t || ListaTurnoTipoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_2__["TipoTurnoService"])); };
ListaTurnoTipoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaTurnoTipoComponent, selectors: [["app-lista-turno-tipo"]], outputs: { getTurnoEv: "getTurnoEv" }, decls: 7, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListaTurnoTipoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaTurnoTipoComponent_Template_input_keyup_3_listener() { return ctx.applyFilter(); })("ngModelChange", function ListaTurnoTipoComponent_Template_input_ngModelChange_3_listener($event) { return ctx.txtFiltro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListaTurnoTipoComponent_mat_list_item_5_Template, 5, 1, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaTurnoTipoComponent_Template_mat_paginator_page_6_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstTurnosPaged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS10dXJuby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "UBc4":
/*!***************************************************************!*\
  !*** ./src/app/restaurante/components/mesa/mesa.component.ts ***!
  \***************************************************************/
/*! exports provided: MesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaComponent", function() { return MesaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mesa.service */ "dv7o");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







const _c0 = ["divMesa"];
const _c1 = function (a0, a1, a2, a3, a4) { return { "disponible": a0, "ocupada": a1, "debaja": a2, "call-center-ocupado": a3, "call-center-disponible": a4 }; };
class MesaComponent {
    constructor(snackBar, mesaSrvc) {
        this.snackBar = snackBar;
        this.mesaSrvc = mesaSrvc;
        this.configuracion = {
            mesa: 0,
            area: 0,
            numero: 0,
            posx: 0.0000,
            posy: 0.0000,
            tamanio: 48,
            estatus: 1,
            ancho: null,
            alto: null,
            esmostrador: 0,
            vertical: 0,
            etiqueta: null,
            escallcenter: 0
        };
        this.dontAllowDrag = true;
        this.isDisabled = false;
        // tslint:disable-next-line: no-output-on-prefix
        this.onClickMesa = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moviendoMesa = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.urlImage = '/assets/img/mesas/';
        this.ngAfterViewInit = () => this.objMesa = this.divMesa.nativeElement;
        this.clickMesa = () => this.onClickMesa.emit({ mesaSelected: this.configuracion });
        this.getAncho = () => {
            if (this.configuracion.ancho && +this.configuracion.ancho > 0) {
                return this.configuracion.ancho;
            }
            return this.configuracion.tamanio;
        };
        this.getAlto = () => {
            if (this.configuracion.alto && +this.configuracion.alto > 0) {
                return this.configuracion.alto;
            }
            return this.configuracion.tamanio;
        };
        this.dragEnded = (obj) => {
            this.dontAllowDrag = true;
            // console.log('Drag ended = ', obj);
            const item = obj.source.element.nativeElement;
            // console.log('HTML ITEM: ', item);
            const parentSize = { x: item.offsetParent.scrollWidth, y: item.offsetParent.scrollHeight };
            // console.log('Parent Size = ', parentSize);
            const distancia = obj.distance;
            // console.log('Distancia = ', distancia);
            const updMesa = {
                mesa: this.configuracion.mesa,
                area: this.configuracion.area,
                numero: this.configuracion.numero,
                posx: Math.abs((item.offsetLeft + distancia.x) * 100 / parentSize.x),
                posy: Math.abs((item.offsetTop + distancia.y) * 100 / parentSize.y),
                tamanio: this.configuracion.tamanio,
                estatus: this.configuracion.estatus
            };
            // console.log(updMesa);
            this.mesaSrvc.save(updMesa).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    if (!!res.mesa) {
                        this.configuracion.mesa = res.mesa.mesa;
                        this.snackBar.open(`Mesa #${res.mesa.numero} actualizada...`, 'Diseño de área', { duration: 3000 });
                    }
                    else {
                        this.snackBar.open(`Mesa #${this.configuracion.numero} actualizada...`, 'Diseño de área', { duration: 3000 });
                    }
                }
                else {
                    this.snackBar.open(`ERROR:${res.mensaje}.`, 'Diseño de área', { duration: 3000 });
                }
                this.dontAllowDrag = false;
                this.moviendoMesa.emit(false);
            });
        };
        this.dragStarted = (obj) => {
            this.moviendoMesa.emit(true);
        };
    }
    ngOnInit() {
        if (+this.configuracion.esmostrador === 0) {
            this.urlImage += 'table_03.svg';
        }
        else {
            if (+this.configuracion.escallcenter === 0) {
                if (+this.configuracion.vertical === 0) {
                    this.urlImage += 'mostrador_horizontal.svg';
                }
                else {
                    this.urlImage += 'mostrador_vertical.svg';
                }
            }
            else {
                this.urlImage += 'callcenter.svg';
            }
        }
        // console.log(this.configuracion, this.urlImage);
    }
}
MesaComponent.ɵfac = function MesaComponent_Factory(t) { return new (t || MesaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mesa_service__WEBPACK_IMPORTED_MODULE_2__["MesaService"])); };
MesaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MesaComponent, selectors: [["app-mesa"]], viewQuery: function MesaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.divMesa = _t.first);
    } }, inputs: { configuracion: "configuracion", dontAllowDrag: "dontAllowDrag", isDisabled: "isDisabled" }, outputs: { onClickMesa: "onClickMesa", moviendoMesa: "moviendoMesa" }, decls: 4, vars: 20, consts: [["cdkDrag", "", "cdkDragBoundary", ".areaPosicionamiento", 1, "divMesa", "mat-elevation-z6", 3, "cdkDragDisabled", "ngClass", "cdkDragEnded", "cdkDragStarted", "click"], ["divMesa", ""]], template: function MesaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragEnded", function MesaComponent_Template_div_cdkDragEnded_0_listener($event) { return ctx.dragEnded($event); })("cdkDragStarted", function MesaComponent_Template_div_cdkDragStarted_0_listener($event) { return ctx.dragStarted($event); })("click", function MesaComponent_Template_div_click_0_listener() { return ctx.clickMesa(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.getAncho(), "px")("height", ctx.getAlto(), "px")("left", ctx.configuracion.posx, "%")("top", ctx.configuracion.posy, "%")("background-image", "url(" + ctx.urlImage + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", ctx.dontAllowDrag)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](14, _c1, +ctx.configuracion.estatus == 1 && +ctx.configuracion.debaja === 0, +ctx.configuracion.estatus == 2 && +ctx.configuracion.debaja === 0, +ctx.configuracion.debaja === 1, +ctx.configuracion.estatus === 2 && +ctx.configuracion.escallcenter === 1, +ctx.configuracion.estatus === 1 && +ctx.configuracion.escallcenter === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isDisabled ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.configuracion.etiqueta || ctx.configuracion.numero);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"]], styles: [".divMesa[_ngcontent-%COMP%] {\n    background-repeat: no-repeat;\n    background-position: center;\n    position: absolute;\n    text-align: right;\n    padding-top: 0;\n    background-size: 90% 90%\n}\n\nspan[_ngcontent-%COMP%] {\n    font-size: 12pt;\n    font-weight: bold;\n    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;\n}\n\n.disponible[_ngcontent-%COMP%] {\n    background-color: lightgreen;\n}\n\n.ocupada[_ngcontent-%COMP%] {    \n    background-color: #da332d;\n}\n\n.debaja[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\n.call-center-ocupado[_ngcontent-%COMP%] {\n    background-color: #da332d;\n    background-image: url('/assets/img/mesas/callcenter_alt.svg');\n}\n\n.call-center-disponible[_ngcontent-%COMP%] {\n    background-color: lightgreen;\n    background-image: url('/assets/img/mesas/callcenter.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix5REFBeUQ7QUFDN0QiLCJmaWxlIjoibWVzYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdk1lc2Ege1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJSA5MCVcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgd2hpdGUsIDAgMXB4IHdoaXRlLCAxcHggMCB3aGl0ZSwgMCAtMXB4IHdoaXRlO1xufVxuXG4uZGlzcG9uaWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLm9jdXBhZGEgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGEzMzJkO1xufVxuXG4uZGViYWphIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmNhbGwtY2VudGVyLW9jdXBhZG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTMzMmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9tZXNhcy9jYWxsY2VudGVyX2FsdC5zdmcnKTtcbn1cblxuLmNhbGwtY2VudGVyLWRpc3BvbmlibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9tZXNhcy9jYWxsY2VudGVyLnN2ZycpO1xufSJdfQ== */"] });


/***/ }),

/***/ "UEEt":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PideDatosCuentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PideDatosCuentasComponent", function() { return PideDatosCuentasComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");















function PideDatosCuentasComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PideDatosCuentasComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r7.numero);
} }
function PideDatosCuentasComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PideDatosCuentasComponent_td_10_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PideDatosCuentasComponent_td_10_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return element_r8.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", element_r8.nombre);
} }
function PideDatosCuentasComponent_td_10_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PideDatosCuentasComponent_td_10_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return element_r8.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matKeyboard", ctx_r10.keyboardLayout)("ngModel", element_r8.nombre);
} }
function PideDatosCuentasComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PideDatosCuentasComponent_td_10_input_2_Template, 1, 1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PideDatosCuentasComponent_td_10_input_3_Template, 1, 2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PideDatosCuentasComponent_td_10_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const element_r8 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.eliminarFila(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.esMovil);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.esMovil);
} }
function PideDatosCuentasComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 21);
} }
function PideDatosCuentasComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 22);
} }
class PideDatosCuentasComponent {
    constructor(dialogRef, data, snackBar, ls) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.ls = ls;
        this.displayedColumns = ['numero', 'nombre'];
        this.esMovil = false;
        this.terminar = () => {
            const tcn = this.todosConNombre(this.data.cuentas);
            if (tcn < 0) {
                this.dialogRef.close(this.data.cuentas);
            }
            else {
                this.snackBar.open(`Favor ingresar nombre a la cuenta #${this.data.cuentas[tcn].cuenta}...`, 'Cuentas', { duration: 5000 });
            }
        };
        this.setTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.data.cuentas);
        this.eliminarFila = (obj) => {
            const idx = this.data.cuentas.findIndex(cta => +cta.numero === +obj.numero);
            if (idx > 0) {
                this.data.cuentas.splice(idx, 1);
                this.data.cuentas.map((cta, i) => cta.numero = (i + 1));
                this.dataSource.data = this.data.cuentas;
            }
            else {
                // console.log('ELIMINAR = ', obj);
                // console.log('CUENTAS = ', this.data.cuentas);
                console.log('No se encuentra esta cuenta...');
            }
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].IDIOMA_TECLADO;
        this.setTableDataSource();
        for (let i = 0; i < (+this.data.comensales - 1); i++) {
            this.agregarFila();
        }
        // console.log(this.data);
    }
    todosConNombre(ctas) {
        for (let i = 0; i < ctas.length; i++) {
            if (!ctas[i].nombre) {
                return i;
            }
        }
        return -1;
    }
    agregarFila() {
        this.data.cuentas.push({
            cuenta: 0,
            numero: this.data.cuentas.length + 1,
            nombre: null,
            productos: []
        });
        this.dataSource.data = this.data.cuentas;
    }
}
PideDatosCuentasComponent.ɵfac = function PideDatosCuentasComponent_Factory(t) { return new (t || PideDatosCuentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"])); };
PideDatosCuentasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PideDatosCuentasComponent, selectors: [["app-pide-datos-cuentas"]], decls: 18, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-table", "", 1, "fullWidth", 3, "dataSource"], ["tblCuentas", ""], ["matColumnDef", "numero"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "fullWidth"], ["type", "text", "matInput", "", "name", "nombre", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "matInput", "", "name", "nombre", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], [1, "iconFontSize"], ["type", "text", "matInput", "", "name", "nombre", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "name", "nombre", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""]], template: function PideDatosCuentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ingreso de datos de cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PideDatosCuentasComponent_th_6_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PideDatosCuentasComponent_td_7_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PideDatosCuentasComponent_th_9_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PideDatosCuentasComponent_td_10_Template, 7, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PideDatosCuentasComponent_tr_11_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PideDatosCuentasComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PideDatosCuentasComponent_Template_button_click_14_listener() { return ctx.agregarFila(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PideDatosCuentasComponent_Template_button_click_16_listener() { return ctx.terminar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Terminar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.cuentas.length === +ctx.data.comensales);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.cuentas.length !== +ctx.data.comensales);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__["MatKeyboardDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".fullWidth[_ngcontent-%COMP%] { width: 100%; }\r\n.iconFontSize[_ngcontent-%COMP%] {\r\n    font-size: 34pt !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZGUtZGF0b3MtY3VlbnRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsV0FBVyxFQUFFO0FBQzFCO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InBpZGUtZGF0b3MtY3VlbnRhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7IHdpZHRoOiAxMDAlOyB9XHJcbi5pY29uRm9udFNpemUge1xyXG4gICAgZm9udC1zaXplOiAzNHB0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Vy/R":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/area/configura-mesa/configura-mesa.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfiguraMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguraMesaComponent", function() { return ConfiguraMesaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mesa.service */ "dv7o");
/* harmony import */ var _admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/impresora.service */ "qMXL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function ConfiguraMesaComponent_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", imp_r3.impresora);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", imp_r3.nombre, " ");
} }
function ConfiguraMesaComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Impresora");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfiguraMesaComponent_mat_form_field_7_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.mesa.impresora = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfiguraMesaComponent_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.mesa.impresora);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.impresoras);
} }
class ConfiguraMesaComponent {
    constructor(mesaSrvc, impresoraSrvc, snackBar, dialogRef, data) {
        this.mesaSrvc = mesaSrvc;
        this.impresoraSrvc = impresoraSrvc;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.impresoras = [];
        this.mesa = {};
        this.loadImpresoras = () => this.impresoraSrvc.get().subscribe(res => this.impresoras = res);
        this.cancelar = () => this.dialogRef.close(false);
        this.guardarConfiguracion = () => {
            this.mesaSrvc.save(this.mesa).subscribe(res => {
                if (res.exito) {
                    if (!!res.mesa) {
                        this.snackBar.open(`Mesa #${res.mesa.numero} actualizada...`, 'Configuración de mesa', { duration: 3000 });
                    }
                    else {
                        this.snackBar.open(`Mesa #${this.mesa.numero} actualizada...`, 'Configuración de mesa', { duration: 3000 });
                    }
                }
                else {
                    this.snackBar.open(`ERROR:${res.mensaje}.`, 'Configuración de mesa', { duration: 7000 });
                }
                this.dialogRef.close(true);
            });
        };
    }
    ngOnInit() {
        this.mesa = this.data.mesa;
        this.loadImpresoras();
    }
}
ConfiguraMesaComponent.ɵfac = function ConfiguraMesaComponent_Factory(t) { return new (t || ConfiguraMesaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mesa_service__WEBPACK_IMPORTED_MODULE_2__["MesaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_3__["ImpresoraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfiguraMesaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfiguraMesaComponent, selectors: [["app-configura-mesa"]], decls: 13, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", ""], ["frmConfigMesa", "ngForm"], [1, "fullWidth"], ["type", "text", "matInput", "", "placeholder", "Etiqueta", "name", "etiqueta", "maxlength", "3", 3, "ngModel", "ngModelChange"], ["class", "fullWidth", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["name", "impresora", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ConfiguraMesaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ConfiguraMesaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.mesa.etiqueta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ConfiguraMesaComponent_mat_form_field_7_Template, 5, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfiguraMesaComponent_Template_button_click_9_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfiguraMesaComponent_Template_button_click_11_listener() { return ctx.guardarConfiguracion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Configuraci\u00F3n de mesa ", ctx.mesa.numero, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mesa.etiqueta);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.mesa.esmostrador === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmEtbWVzYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "W57H":
/*!************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/caja/caja.component.ts ***!
  \************************************************************************/
/*! exports provided: CajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajaComponent", function() { return CajaComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "+Q77");
/* harmony import */ var _admin_services_fpago_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../admin/services/fpago.service */ "roIu");
/* harmony import */ var _admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/services/acceso-usuario.service */ "2qVp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");


















function CajaComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tt_r7.turno_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tt_r7.descripcion, " ");
} }
function CajaComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sede_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", sede_r8.sede.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sede_r8.sede.nombre, " ");
} }
function CajaComponent_mat_form_field_23_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", grp_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", grp_r10.descripcion, " ");
} }
function CajaComponent_mat_form_field_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Agrupar por");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_mat_form_field_23_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.params._grupo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CajaComponent_mat_form_field_23_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.params._grupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.grupos);
} }
function CajaComponent_hr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
} }
const _c0 = function () { return { standalone: true }; };
function CajaComponent_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_form_32_div_1_Template_input_ngModelChange_2_listener($event) { const fp_r14 = ctx.$implicit; return fp_r14.monto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", fp_r14.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", fp_r14.monto)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
} }
function CajaComponent_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CajaComponent_form_32_div_1_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.fpagos);
} }
function CajaComponent_app_cargando_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cargando");
} }
class CajaComponent {
    constructor(snackBar, pdfServicio, tipoTurnoSrvc, fpagoSrvc, sedeSrvc) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.fpagoSrvc = fpagoSrvc;
        this.sedeSrvc = sedeSrvc;
        this.params = {
            _validar: false,
            sede: []
        };
        this.titulo = 'Resumen de caja';
        this.tiposTurno = [];
        this.cargando = false;
        this.fpagos = [];
        this.sedes = [];
        this.grupos = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].grupos;
        this.configBotones = {
            showPdf: true, showHtml: false, showExcel: true
        };
        this.loadFormaPago = () => {
            this.fpagoSrvc.get().subscribe(res => {
                if (res) {
                    this.fpagos = res;
                }
            });
        };
        this.loadSedes = () => {
            this.sedeSrvc.getSedes({ reporte: true }).subscribe(res => {
                if (res) {
                    this.sedes = res;
                }
            });
        };
        this.loadTiposTurno = () => {
            this.tipoTurnoSrvc.get().subscribe(res => {
                if (res) {
                    this.tiposTurno = res;
                }
            });
        };
        this.resetParams = () => {
            this.params = {};
            this.cargando = false;
        };
        this.excelClick = () => {
            this.cargando = true;
            this.params._pagos = this.fpagos;
            this.params._excel = 1;
            this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.xls`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.loadTiposTurno();
        this.loadFormaPago();
        this.loadSedes();
    }
    onSubmit() {
        this.cargando = true;
        this.params._pagos = this.fpagos;
        this.params._excel = 0;
        this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
            this.cargando = false;
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
}
CajaComponent.ɵfac = function CajaComponent_Factory(t) { return new (t || CajaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_4__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_5__["TipoTurnoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_fpago_service__WEBPACK_IMPORTED_MODULE_6__["FpagoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_7__["AccesoUsuarioService"])); };
CajaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CajaComponent, selectors: [["app-caja"]], decls: 35, vars: 17, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmRptCaja", "ngForm"], [1, "fullWidth"], ["name", "turno_tipo", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "date", "placeholder", "Del", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "sede", "multiple", "", 3, "ngModel", "ngModelChange"], ["class", "fullWidth", 4, "ngIf"], [1, "col"], ["name", "mostrar_detalle", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["name", "validar", 1, "fullWidth", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "configuracion", "excelClick", "pdfClick", "resetParamsClick"], [3, "value"], ["name", "grupo", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "step", "0.01", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"]], template: function CajaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reporte de caja");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Tipo de turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.params.turno_tipo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CajaComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_input_ngModelChange_15_listener($event) { return ctx.params.fdel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_input_ngModelChange_17_listener($event) { return ctx.params.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Sede");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.params.sede = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CajaComponent_mat_option_22_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CajaComponent_mat_form_field_23_Template, 5, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_mat_checkbox_ngModelChange_26_listener($event) { return +(ctx.params._detalle = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Mostrar Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CajaComponent_Template_mat_checkbox_ngModelChange_29_listener($event) { return +(ctx.params._validar = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Validar Montos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CajaComponent_hr_31_Template, 1, 0, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, CajaComponent_form_32_Template, 2, 1, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "app-rpt-botones", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("excelClick", function CajaComponent_Template_app_rpt_botones_excelClick_33_listener() { return ctx.excelClick(); })("pdfClick", function CajaComponent_Template_app_rpt_botones_pdfClick_33_listener() { return ctx.onSubmit(); })("resetParamsClick", function CajaComponent_Template_app_rpt_botones_resetParamsClick_33_listener() { return ctx.resetParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CajaComponent_app_cargando_34_Template, 1, 0, "app-cargando", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.turno_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tiposTurno);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.sede);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.params.sede && ctx.params.sede.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", +ctx.params._detalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", +ctx.params._validar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.params._validar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.params._validar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_15__["RptBotonesComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_17__["CargandoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWphLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZCoE":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AutoconsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoconsultaComponent", function() { return AutoconsultaComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_autoconsulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/autoconsulta.service */ "+csC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");













function AutoconsultaComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campo_r5.tabla_campo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campo_r5.descripcion, " ");
} }
function AutoconsultaComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campo_r6.tabla_campo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campo_r6.descripcion, " ");
} }
function AutoconsultaComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campo_r7.tabla_campo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campo_r7.descripcion, " ");
} }
function AutoconsultaComponent_app_cargando_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-cargando");
} }
class AutoconsultaComponent {
    constructor(snackBar, 
    // private pdfServicio: ReportePdfService,
    autoconsultaSrvc) {
        this.snackBar = snackBar;
        this.autoconsultaSrvc = autoconsultaSrvc;
        this.params = { campos: [], datos: [] };
        this.titulo = 'Autoconsulta';
        this.campos = [];
        this.fechas = [];
        this.orden = [];
        this.cargando = false;
        this.configBotones = {
            showPdf: false, showHtml: false, showExcel: true
        };
        this.resetParams = () => {
            this.params = { campos: [], datos: [] };
            this.cargando = false;
        };
        this.getReporte = () => {
            this.cargando = true;
            // tslint:disable-next-line: forin
            for (const key in this.params.campos) {
                this.params.datos.push(this.params.campos[key]);
            }
            this.autoconsultaSrvc.getReporte(this.params).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.xls`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
                }
            });
        };
        this.getCampos = (params = {}, tipo = 1) => {
            this.cargando = true;
            this.autoconsultaSrvc.getCampos(params).subscribe(res => {
                this.cargando = false;
                switch (tipo) {
                    case 1:
                        this.campos = res;
                        break;
                    case 2:
                        this.fechas = res;
                        break;
                    case 3:
                        this.orden = res;
                        break;
                }
            });
        };
    }
    ngOnInit() {
        this.getCampos();
        this.getCampos({ por_fecha: 1 }, 2);
        this.getCampos({ ordenar_por: 1 }, 3);
    }
}
AutoconsultaComponent.ɵfac = function AutoconsultaComponent_Factory(t) { return new (t || AutoconsultaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_autoconsulta_service__WEBPACK_IMPORTED_MODULE_3__["AutoconsultaService"])); };
AutoconsultaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AutoconsultaComponent, selectors: [["app-autoconsulta"]], decls: 30, vars: 10, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmEntidad", "ngForm"], [1, "fullWidth"], ["name", "campos", "multiple", "multiple", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "matInput", "", "placeholder", "Del", "name", "fdel", "required", "", 3, "ngModel", "ngModelChange"], ["type", "date", "matInput", "", "placeholder", "Al", "name", "fal", "required", "", 3, "ngModel", "ngModelChange"], ["name", "campos", "required", "", 3, "ngModel", "ngModelChange"], ["name", "campos", 3, "ngModel", "ngModelChange"], [3, "configuracion", "excelClick", "resetParamsClick"], [4, "ngIf"], [3, "value"]], template: function AutoconsultaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Autoconsulta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Campos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutoconsultaComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.params.campos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AutoconsultaComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutoconsultaComponent_Template_input_ngModelChange_15_listener($event) { return ctx.params.fdel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutoconsultaComponent_Template_input_ngModelChange_17_listener($event) { return ctx.params.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Filtrar Por");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutoconsultaComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.params.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AutoconsultaComponent_mat_option_22_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Ordenar Por");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AutoconsultaComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.params.orden = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AutoconsultaComponent_mat_option_27_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-rpt-botones", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("excelClick", function AutoconsultaComponent_Template_app_rpt_botones_excelClick_28_listener() { return ctx.getReporte(); })("resetParamsClick", function AutoconsultaComponent_Template_app_rpt_botones_resetParamsClick_28_listener() { return ctx.resetParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AutoconsultaComponent_app_cargando_29_Template, 1, 0, "app-cargando", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.campos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.campos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.fdel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.fal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.fecha);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fechas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.orden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_10__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_12__["CargandoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvY29uc3VsdGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZWNR":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FormTurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTurnoTipoComponent", function() { return FormTurnoTipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "+Q77");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FormTurnoTipoComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoTipoComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.resetTurno(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormTurnoTipoComponent {
    constructor(_snackBar, turnoSrvc) {
        this._snackBar = _snackBar;
        this.turnoSrvc = turnoSrvc;
        this.turnoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetTurno = () => this.turno = {
            turno_tipo: null, descripcion: null, activo: 1
        };
        this.onSubmit = () => {
            this.turnoSrvc.save(this.turno).subscribe(res => {
                //console.log(res);
                if (res.exito) {
                    this.turnoSavedEv.emit();
                    this.resetTurno();
                    this._snackBar.open('Tipo de Turno agregado...', 'Turno', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
    }
}
FormTurnoTipoComponent.ɵfac = function FormTurnoTipoComponent_Factory(t) { return new (t || FormTurnoTipoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_2__["TipoTurnoService"])); };
FormTurnoTipoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTurnoTipoComponent, selectors: [["app-form-turno-tipo"]], inputs: { turno: "turno" }, outputs: { turnoSavedEv: "turnoSavedEv" }, decls: 15, vars: 5, consts: [[1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmTurno", "ngForm"], [1, "fullWidth"], ["matInput", "", "type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "required", "", 3, "ngModel", "ngModelChange"], ["name", "activo", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"]], template: function FormTurnoTipoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTurnoTipoComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoTipoComponent_Template_input_ngModelChange_8_listener($event) { return ctx.turno.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoTipoComponent_Template_mat_checkbox_ngModelChange_9_listener($event) { return +(ctx.turno.activo = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormTurnoTipoComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Tipo de Turno ", !!ctx.turno.turno_tipo ? ctx.turno.descripcion : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.turno.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx.turno.activo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.turno.turno_tipo);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXR1cm5vLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "bKsA":
/*!************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.ts ***!
  \************************************************************************************/
/*! exports provided: RptVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RptVentasComponent", function() { return RptVentasComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_reporte_ventas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/reporte-ventas.service */ "EBRK");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "+Q77");
/* harmony import */ var _admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/services/acceso-usuario.service */ "2qVp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");
/* harmony import */ var _por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./por-categoria/por-categoria.component */ "qD6S");
/* harmony import */ var _por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./por-articulo/por-articulo.component */ "BJCR");



















function RptVentasComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tr_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", tr_r8.tipo_reporte);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tr_r8.descripcion, " ");
} }
function RptVentasComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tt_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", tt_r9.turno_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tt_r9.descripcion, " ");
} }
function RptVentasComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sede_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sede_r10.sede.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sede_r10.sede.nombre, " ");
} }
function RptVentasComponent_mat_form_field_28_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grp_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", grp_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", grp_r12.descripcion, " ");
} }
function RptVentasComponent_mat_form_field_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Agrupar por");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_mat_form_field_28_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.params._grupo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RptVentasComponent_mat_form_field_28_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.params._grupo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.grupos);
} }
function RptVentasComponent_app_cargando_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
} }
function RptVentasComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-por-categoria", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("params", ctx_r6.params)("data", ctx_r6.porCategoria);
} }
function RptVentasComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-por-articulo", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("params", ctx_r7.params)("data", ctx_r7.porArticulo);
} }
class RptVentasComponent {
    constructor(snackBar, rptVentasSrvc, tipoTurnoSrvc, sedeSrvc) {
        this.snackBar = snackBar;
        this.rptVentasSrvc = rptVentasSrvc;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.sedeSrvc = sedeSrvc;
        this.tiposReporte = [];
        this.params = {};
        this.paramsToSend = {};
        this.msgGenerandoReporte = null;
        this.porCategoria = [];
        this.porArticulo = { datos: [] };
        this.tiposTurno = [];
        this.sedes = [];
        this.grupos = _shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].grupos;
        this.tituloCategoria = 'Ventas por categoria';
        this.tituloArticulo = 'Ventas por articulo';
        this.cargando = false;
        this.configBotones = {
            showPdf: true, showHtml: true, showExcel: true
        };
        this.loadSedes = () => {
            this.sedeSrvc.getSedes({ reporte: true }).subscribe(res => {
                if (res) {
                    this.sedes = res;
                }
            });
        };
        this.loadTiposTurno = () => {
            this.tipoTurnoSrvc.get().subscribe(res => {
                if (res) {
                    this.tiposTurno = res;
                }
            });
        };
        this.loadTiposReporte = () => {
            this.tiposReporte = [
                { tipo_reporte: 1, descripcion: 'Por categoría' },
                { tipo_reporte: 2, descripcion: 'Por artículo' }
            ];
        };
        this.resetParams = () => {
            this.porCategoria = [];
            this.porArticulo = [];
            this.msgGenerandoReporte = null;
            this.params = {
                tipo_reporte: undefined,
                fdel: moment__WEBPACK_IMPORTED_MODULE_1__().startOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
                fal: moment__WEBPACK_IMPORTED_MODULE_1__().endOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat)
            };
            this.cargando = false;
        };
        this.getReporte = (tipo = 1) => {
            this.paramsToSend = JSON.parse(JSON.stringify(this.params));
            this.msgGenerandoReporte = 'GENERANDO REPORTE EN ';
            switch (tipo) {
                case 1:
                    this.getEnPantalla();
                    break;
                case 2:
                    this.getPdf();
                    break;
                case 3:
                    this.getExcel();
                    break;
            }
        };
        this.getPdf = () => {
            switch (this.params.tipo_reporte) {
                case 1:
                    this.getPorCategoriaPdf();
                    break;
                case 2:
                    this.getPorArticuloPdf();
                    break;
            }
        };
        this.getExcel = () => {
            switch (this.params.tipo_reporte) {
                case 1:
                    this.getPorCategoriaExcel();
                    break;
                case 2:
                    this.getPorArticuloExcel();
                    break;
            }
        };
        this.getPorCategoriaExcel = () => {
            this.paramsToSend._excel = 1;
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porCategoriaPdf(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${this.tituloCategoria}.xls`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.tituloCategoria, { duration: 3000 });
                }
            });
        };
        this.getPorCategoriaPdf = () => {
            this.paramsToSend._excel = 0;
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porCategoriaPdf(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${this.tituloCategoria}.pdf`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.tituloCategoria, { duration: 3000 });
                }
            });
        };
        this.getPorArticuloPdf = () => {
            this.paramsToSend._excel = 0;
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porArticuloPdf(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${this.tituloArticulo}.pdf`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.tituloArticulo, { duration: 3000 });
                }
            });
        };
        this.getPorArticuloExcel = () => {
            this.paramsToSend._excel = 1;
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porArticuloPdf(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, `${this.tituloArticulo}.xls`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.tituloArticulo, { duration: 3000 });
                }
            });
        };
        this.getEnPantalla = () => {
            switch (this.params.tipo_reporte) {
                case 1:
                    this.getPorCategoriaEnPantalla();
                    break;
                case 2:
                    this.getPorArticuloEnPantalla();
                    break;
            }
        };
        this.cleanParams = () => delete this.paramsToSend.tipo_reporte;
        this.getPorCategoriaEnPantalla = () => {
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porCategoria(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    this.porCategoria = res;
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', 'Ventas por categoría', { duration: 3000 });
                }
            });
        };
        this.getPorArticuloEnPantalla = () => {
            this.cargando = true;
            this.cleanParams();
            this.rptVentasSrvc.porArticulo(this.paramsToSend).subscribe(res => {
                this.cargando = false;
                if (res) {
                    this.porArticulo = res;
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', 'Ventas por artículo', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.resetParams();
        this.loadTiposReporte();
        this.loadTiposTurno();
        this.loadSedes();
    }
}
RptVentasComponent.ɵfac = function RptVentasComponent_Factory(t) { return new (t || RptVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_reporte_ventas_service__WEBPACK_IMPORTED_MODULE_5__["ReporteVentasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_6__["TipoTurnoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_7__["AccesoUsuarioService"])); };
RptVentasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RptVentasComponent, selectors: [["app-rpt-ventas"]], decls: 33, vars: 13, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmEntidad", "ngForm"], [1, "fullWidth"], ["name", "tipo_reporte", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "turno_tipo", 3, "ngModel", "ngModelChange"], ["type", "date", "matInput", "", "placeholder", "Del", "name", "fdel", "required", "", 3, "ngModel", "ngModelChange"], ["type", "date", "matInput", "", "placeholder", "Al", "name", "fal", "required", "", 3, "ngModel", "ngModelChange"], ["name", "sede", "multiple", "", 3, "ngModel", "ngModelChange"], ["class", "fullWidth", 4, "ngIf"], [3, "configuracion", "excelClick", "htmlClick", "pdfClick", "resetParamsClick"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "value"], ["name", "grupo", 3, "ngModel", "ngModelChange"], [3, "params", "data"]], template: function RptVentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Reporte de ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.params.tipo_reporte = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RptVentasComponent_mat_option_13_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Tipo de turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_Template_mat_select_ngModelChange_17_listener($event) { return ctx.params.turno_tipo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RptVentasComponent_mat_option_18_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_Template_input_ngModelChange_20_listener($event) { return ctx.params.fdel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_Template_input_ngModelChange_22_listener($event) { return ctx.params.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Sede");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RptVentasComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.params.sede = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, RptVentasComponent_mat_option_27_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RptVentasComponent_mat_form_field_28_Template, 5, 2, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "app-rpt-botones", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("excelClick", function RptVentasComponent_Template_app_rpt_botones_excelClick_29_listener() { return ctx.getReporte(3); })("htmlClick", function RptVentasComponent_Template_app_rpt_botones_htmlClick_29_listener() { return ctx.getReporte(1); })("pdfClick", function RptVentasComponent_Template_app_rpt_botones_pdfClick_29_listener() { return ctx.getReporte(2); })("resetParamsClick", function RptVentasComponent_Template_app_rpt_botones_resetParamsClick_29_listener() { return ctx.resetParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RptVentasComponent_app_cargando_30_Template, 1, 0, "app-cargando", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, RptVentasComponent_div_31_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, RptVentasComponent_div_32_Template, 3, 2, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.tipo_reporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tiposReporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.turno_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tiposTurno);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fdel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.sede);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sedes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.params.sede && ctx.params.sede.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.params.tipo_reporte === 1 && ctx.porCategoria.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.params.tipo_reporte === 2);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__["RptBotonesComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__["CargandoComponent"], _por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_17__["PorCategoriaComponent"], _por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_18__["PorArticuloComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJycHQtdmVudGFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "byCI":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/acciones-comanda/acciones-comanda.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AccionesComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccionesComandaComponent", function() { return AccionesComandaComponent; });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AccionesComandaComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.comandar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Comanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.data.tranComanda.cuentaActiva.nombre || ctx_r0.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.imprimirCuenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.data.tranComanda.cuentaActiva.nombre || ctx_r1.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.distribuirProductos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Distribuir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.data.tranComanda.mesaEnUso.cuentas.length < 2 || ctx_r2.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.unirCuentas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unir cuentas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.data.tranComanda.mesaEnUso.cuentas.length < 2 || ctx_r3.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.cobrarCuenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cobrar cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r4.data.tranComanda.cuentaActiva.nombre || ctx_r4.data.tranComanda.esCajero() || ctx_r4.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.enviarPedido(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enviar pedido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.data.tranComanda.cuentaActiva.nombre || ctx_r5.data.tranComanda.esCajero() || ctx_r5.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.trasladarMesa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Trasladar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.data.tranComanda.bloqueoBotones);
} }
function AccionesComandaComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.cerrarMesa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cerrar ", +ctx_r7.data.tranComanda.mesaEnUso.mesa.esmostrador === 0 ? "Mesa" : +ctx_r7.data.tranComanda.mesaEnUso.mesa.escallcenter === 0 ? "Mostrador" : "Pedido", "");
} }
class AccionesComandaComponent {
    constructor(bsAccionesComanda, data) {
        this.bsAccionesComanda = bsAccionesComanda;
        this.data = data;
        this.cerrar = (obj = { cerrar: false }) => this.bsAccionesComanda.dismiss(obj);
        this.notasGenerales = () => {
            this.data.tranComanda.getNotasGenerales();
            this.cerrar();
        };
        this.comandar = () => {
            this.data.tranComanda.validarImpresion(false, this.data.dialogRef);
            this.cerrar();
        };
        this.imprimirCuenta = () => {
            this.data.tranComanda.printCuenta(this.data.dialogRef);
            this.cerrar();
        };
        this.distribuirProductos = () => {
            this.data.tranComanda.distribuirProductos(this.data.dialogRef);
            this.cerrar();
        };
        this.unirCuentas = () => {
            this.data.tranComanda.unirCuentas(this.data.dialogRef);
            this.cerrar();
        };
        this.cobrarCuenta = () => {
            this.data.tranComanda.cobrarCuenta(this.data.dialogRef);
            this.cerrar();
        };
        this.enviarPedido = () => {
            this.data.tranComanda.enviarPedido(this.data.dialogRef);
            this.cerrar();
        };
        this.trasladarMesa = () => {
            this.data.tranComanda.trasladoMesa(this.data.dialogRef);
            this.cerrar();
        };
        this.cerrarMesa = () => {
            this.data.tranComanda.cerrarMesa();
            this.cerrar({
                cerrar: true,
                mesaEnUso: this.data.tranComanda.mesaEnUso
            });
        };
    }
    ngOnInit() {
    }
}
AccionesComandaComponent.ɵfac = function AccionesComandaComponent_Factory(t) { return new (t || AccionesComandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MatBottomSheetRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_0__["MAT_BOTTOM_SHEET_DATA"])); };
AccionesComandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccionesComandaComponent, selectors: [["app-acciones-comanda"]], decls: 11, vars: 9, consts: [["mat-list-item", "", 1, "accion-comanda", "mat-elevation-z4", 3, "disabled", "click"], ["class", "accion-comanda mat-elevation-z4", "mat-list-item", "", 3, "disabled", "click", 4, "ngIf"], ["class", "accion-comanda mat-elevation-z4", "mat-list-item", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", 1, "accion-comanda", "mat-elevation-z4", 3, "click"]], template: function AccionesComandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccionesComandaComponent_Template_button_click_1_listener() { return ctx.notasGenerales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Notas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AccionesComandaComponent_button_3_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AccionesComandaComponent_button_4_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AccionesComandaComponent_button_5_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AccionesComandaComponent_button_6_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AccionesComandaComponent_button_7_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccionesComandaComponent_button_8_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AccionesComandaComponent_button_9_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AccionesComandaComponent_button_10_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.data.tranComanda.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.escallcenter === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", +ctx.data.tranComanda.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.tranComanda.lstProductosSeleccionados.length <= 0);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".accion-comanda[_ngcontent-%COMP%] {\r\n    background-color: #F3D852;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2lvbmVzLWNvbWFuZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoiYWNjaW9uZXMtY29tYW5kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2lvbi1jb21hbmRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4NTI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "dBZW":
/*!********************************************************************************!*\
  !*** ./src/app/restaurante/components/area/lista-area/lista-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListaAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAreaComponent", function() { return ListaAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/area.service */ "9epx");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function ListaAreaComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaAreaComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const element_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getEntidad(element_r1.area); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r1.nombre);
} }
const _c0 = function () { return { standalone: true }; };
class ListaAreaComponent {
    constructor(areaSrvc, ls) {
        this.areaSrvc = areaSrvc;
        this.ls = ls;
        this.getEntidadEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadEntidades = () => {
            this.areaSrvc.get({ sede: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0), debaja: 1 }).subscribe((lst) => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstEntidades = lst;
                        this.applyFilter();
                    }
                }
            });
        };
        this.getEntidad = (id) => {
            this.areaSrvc.get({ area: id, debaja: 1 }).subscribe((lst) => {
                if (lst) {
                    if (lst.length > 0) {
                        this.getEntidadEv.emit(lst[0]);
                    }
                }
            });
        };
        this.pageChange = (e) => {
            this.pageSize = e.pageSize;
            this.pageIndex = e.pageIndex;
            this.applyFilter();
        };
    }
    ngOnInit() {
        this.loadEntidades();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstEntidades, this.txtFiltro);
            this.length = tmpList.length;
            this.lstEntidadesPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstEntidades.length;
            this.lstEntidadesPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstEntidades, this.pageSize, this.pageIndex + 1);
        }
    }
}
ListaAreaComponent.ɵfac = function ListaAreaComponent_Factory(t) { return new (t || ListaAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"])); };
ListaAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaAreaComponent, selectors: [["app-lista-area"]], outputs: { getEntidadEv: "getEntidadEv" }, decls: 7, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], ["matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["matRipple", "", 3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListaAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaAreaComponent_Template_input_keyup_3_listener() { return ctx.applyFilter(); })("ngModelChange", function ListaAreaComponent_Template_input_ngModelChange_3_listener($event) { return ctx.txtFiltro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListaAreaComponent_mat_list_item_5_Template, 5, 1, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaAreaComponent_Template_mat_paginator_page_6_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstEntidadesPaged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"]], styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJsaXN0YS1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "dHBS":
/*!********************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/propinas/propinas.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinasComponent", function() { return PropinasComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");












function PropinasComponent_app_cargando_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-cargando");
} }
const _c0 = function () { return { standalone: true }; };
class PropinasComponent {
    constructor(snackBar, pdfServicio) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.params = {};
        this.titulo = 'Propinas';
        this.configBotones = {
            isHtmlDisabled: true, isPdfDisabled: false, isExcelDisabled: false, showHtml: false, showExcel: true, showPdf: true
        };
        this.cargando = false;
        this.resetParams = () => {
            this.params = {};
            this.cargando = false;
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.params._excel = 0;
        this.cargando = true;
        this.pdfServicio.getReportePropina(this.params).subscribe(res => {
            this.cargando = false;
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
    excelClick() {
        this.params._excel = 1;
        this.cargando = true;
        this.pdfServicio.getReportePropina(this.params).subscribe(res => {
            this.cargando = false;
            if (res) {
                const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, `${this.titulo}.xls`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
}
PropinasComponent.ɵfac = function PropinasComponent_Factory(t) { return new (t || PropinasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"])); };
PropinasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PropinasComponent, selectors: [["app-propinas"]], decls: 17, vars: 9, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmRptPropinas", "ngForm"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Del", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "mostrar_detalle", 1, "fullWidth", 3, "ngModel", "ngModelChange"], [3, "configuracion", "pdfClick", "resetParamsClick", "excelClick"], [4, "ngIf"]], template: function PropinasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reporte de propinas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropinasComponent_Template_input_ngModelChange_10_listener($event) { return ctx.params.fdel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropinasComponent_Template_input_ngModelChange_12_listener($event) { return ctx.params.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PropinasComponent_Template_mat_checkbox_ngModelChange_13_listener($event) { return +(ctx.params._detalle = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mostrar Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-rpt-botones", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pdfClick", function PropinasComponent_Template_app_rpt_botones_pdfClick_15_listener() { return ctx.onSubmit(); })("resetParamsClick", function PropinasComponent_Template_app_rpt_botones_resetParamsClick_15_listener() { return ctx.resetParams(); })("excelClick", function PropinasComponent_Template_app_rpt_botones_excelClick_15_listener() { return ctx.excelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PropinasComponent_app_cargando_16_Template, 1, 0, "app-cargando", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", +ctx.params._detalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_9__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_11__["CargandoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9waW5hcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "dkRY":
/*!*********************************************************!*\
  !*** ./src/app/restaurante/services/propina.service.ts ***!
  \*********************************************************/
/*! exports provided: PropinaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaService", function() { return PropinaService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PropinaService {
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'propina';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    get(fltr = {}) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar${!!entidad.propina_distribucion ? ('/' + entidad.propina_distribucion) : ''}`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
PropinaService.ɵfac = function PropinaService_Factory(t) { return new (t || PropinaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
PropinaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PropinaService, factory: PropinaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dv7o":
/*!******************************************************!*\
  !*** ./src/app/restaurante/services/mesa.service.ts ***!
  \******************************************************/
/*! exports provided: MesaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaService", function() { return MesaService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class MesaService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'mesa';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    get(fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/mesa/guardar${entidad.mesa ? ('/' + entidad.mesa) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getDisponibles() {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/area/get_mesas_disponibles?`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
MesaService.ɵfac = function MesaService_Factory(t) { return new (t || MesaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
MesaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MesaService, factory: MesaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eu3z":
/*!***************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-areas/tran-areas.component.ts ***!
  \***************************************************************************/
/*! exports provided: TranAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranAreasComponent", function() { return TranAreasComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _callcenter_components_pide_telefono_dialog_pide_telefono_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../callcenter/components/pide-telefono-dialog/pide-telefono-dialog.component */ "ealK");
/* harmony import */ var _abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abrir-mesa/abrir-mesa.component */ "2gci");
/* harmony import */ var _tran_comanda_alt_tran_comanda_alt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tran-comanda-alt/tran-comanda-alt.component */ "PKcf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/area.service */ "9epx");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tran-comanda/tran-comanda.component */ "ngV9");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mesa_mesa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../mesa/mesa.component */ "UBc4");


















const _c0 = ["matTabArea"];
const _c1 = ["rightSidenav"];
const _c2 = ["tabArea"];
const _c3 = ["snTranComanda"];
function TranAreasComponent_mat_tab_7_app_mesa_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-mesa", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickMesa", function TranAreasComponent_mat_tab_7_app_mesa_4_Template_app_mesa_onClickMesa_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return !ctx_r8.cargando && ctx_r8.onClickMesa($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("configuracion", m_r7)("isDisabled", ctx_r6.cargando);
} }
function TranAreasComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-tab", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function TranAreasComponent_mat_tab_7_Template_div_resize_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TranAreasComponent_mat_tab_7_app_mesa_4_Template, 1, 2, "app-mesa", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tabA_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", tabA_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", tabA_r3.mesas);
} }
// import * as moment from 'moment';
class TranAreasComponent {
    constructor(dialog, snackBar, ls, areaSrvc, comandaSrvc, configSrvc, socket) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.ls = ls;
        this.areaSrvc = areaSrvc;
        this.comandaSrvc = comandaSrvc;
        this.configSrvc = configSrvc;
        this.socket = socket;
        this.divSize = { h: 0, w: 0 };
        this.cargando = false;
        this.lstTabsAreas = [];
        this.lstTabsAreasForUpdate = [];
        this.configTipoPantalla = 1;
        this.clientePedido = null;
        this.endSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.actualizar = () => {
            // console.log('MESA SELECCIONADA = ', this.mesaSeleccionada);
            const area = this.lstTabsAreas.find((c) => +c.area === +this.mesaSeleccionada.mesa.area.area);
            // console.log('AREA = ', area);
            const areaIndex = this.lstTabsAreas.findIndex((c) => +c.area === +this.mesaSeleccionada.mesa.area.area);
            // console.log('AREA IDX = ', areaIndex);
            const mesaIndex = area.mesas.findIndex(x => +x.mesa === +this.mesaSeleccionada.mesa.mesa);
            // console.log('MESA IDX = ', mesaIndex);
            this.lstTabsAreas[areaIndex].mesas[mesaIndex].estatus = 1;
            // console.log('MESA = ', this.lstTabsAreas[areaIndex].mesas[mesaIndex]);
            this.toggleRightSidenav();
            /*switch (this.configTipoPantalla) {
              case 1: this.toggleRightSidenav(); break;
              // case 2: this.openTranComandaAlt(); break;
              // default: this.toggleRightSidenav();
            }*/
        };
        this.resetMesaSeleccionada = () => this.mesaSeleccionada = {
            comanda: null, usuario: null, sede: null, estatus: null,
            mesa: {
                mesa: null,
                area: { area: null, sede: null, area_padre: null, nombre: null },
                numero: null, posx: null, posy: null, tamanio: null, estatus: null
            },
            cuentas: []
        };
        this.loadAreas = (saveOnTemp = false, objMesaEnUso = {}) => {
            this.cargando = true;
            this.endSubs.add(this.areaSrvc.get({ sede: (+this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe((res) => {
                if (!saveOnTemp) {
                    this.lstTabsAreas = res;
                    this.cargando = false;
                }
                else {
                    this.lstTabsAreasForUpdate = res;
                    this.updateTableStatus(objMesaEnUso.mesaenuso);
                }
            }));
        };
        this.updateTableStatus = (objMesaEnUso = {}) => {
            for (const a of this.lstTabsAreasForUpdate) {
                for (const m of a.mesas) {
                    this.setEstatusMesa({ area: +a.area, mesa: +m.mesa }, +m.estatus);
                }
            }
            this.cargando = false;
            if (this.rightSidenav.opened) {
                if (+this.mesaSeleccionada.comanda === +objMesaEnUso.comanda) {
                    this.toggleRightSidenav();
                }
            }
        };
        this.onResize = (event) => this.setDivSize();
        this.aperturaCargaMesa = (m) => {
            switch (+m.mesaSelected.estatus) {
                case 1:
                    this.openAbrirMesaDialog(m.mesaSelected);
                    break;
                case 2:
                    this.loadComandaMesa(m.mesaSelected);
                    break;
            }
        };
        this.setEstatusMesa = (m, estatus) => {
            // console.log('Mesa = ', m);
            // console.log('Estatus solicitado = ', estatus);
            const idxArea = this.lstTabsAreas.findIndex(a => +a.area === +m.area);
            // console.log(`Area = ${idxArea}`);
            if (idxArea > -1) {
                const idxMesa = this.lstTabsAreas[idxArea].mesas.findIndex(l => +l.mesa === +m.mesa);
                // console.log(`Mesa = ${idxMesa}`);
                if (idxMesa > -1) {
                    this.lstTabsAreas[idxArea].mesas[idxMesa].estatus = estatus;
                }
            }
        };
        this.guardarMesa = (m) => {
            this.endSubs.add(this.comandaSrvc.save(this.mesaSeleccionadaToOpen).subscribe(res => {
                // console.log(res);
                this.cargando = false;
                if (res.exito) {
                    this.socket.emit('refrescar:mesa', {});
                    this.mesaSeleccionada = res.comanda;
                    // console.log('m', m);
                    this.setEstatusMesa(m, +res.comanda.mesa.estatus);
                    this.snTrancomanda.llenaProductosSeleccionados(this.mesaSeleccionada);
                    this.snTrancomanda.setSelectedCuenta(this.mesaSeleccionada.cuentas[0].numero);
                    this.snTrancomanda.rolesUsuario = this.mesaSeleccionada.turno_rol;
                    // this.toggleRightSidenav();
                    switch (this.configTipoPantalla) {
                        case 1:
                            this.toggleRightSidenav();
                            break;
                        case 2:
                            this.openTranComandaAlt();
                            break;
                        default: this.toggleRightSidenav();
                    }
                }
                else {
                    this.snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
                }
            }));
        };
        this.toggleRightSidenav = (obj = null) => {
            this.rightSidenav.toggle().then((res) => {
                if (res === 'close') {
                    // this.checkEstatusMesa();
                    if (obj) {
                        this.loadAreas(true, { mesaenuso: obj });
                    }
                    else {
                        // console.log('MESA EN MEMORIA: ', this.mesaSeleccionada);
                        // console.log(`TOGGLE SIDE NAV ${moment().format(GLOBAL.dateTimeFormatMilli)}`);
                        this.cargando = false;
                    }
                }
                else if (res === 'open') {
                    // console.log('MESA SELECTED: ', this.mesaSeleccionada);
                    if (this.mesaSeleccionada.cuentas.length === 1) {
                        this.snTrancomanda.setSelectedCuenta(this.mesaSeleccionada.cuentas[0].numero);
                    }
                }
            });
        };
        this.cerrandoRightSideNav = () => {
            // console.log('Antes de "resetMesaEnUso"');
            this.snTrancomanda.resetMesaEnUso();
            // console.log('Antes de "resetLstProductosDeCuenta"');
            this.snTrancomanda.resetLstProductosDeCuenta();
            // console.log('Antes de "resetLstProductosSeleccionados"');
            this.snTrancomanda.resetLstProductosSeleccionados();
            // console.log('Antes de "resetCuentaActiva"');
            this.snTrancomanda.resetCuentaActiva();
            // console.log('Antes de "loadComandaMesa"');
            this.snTrancomanda.resetListadoArticulos();
            // console.log('MESA SELECCIONADA EN CERRANDO RIGHT SIDE PANEL = ', this.mesaSeleccionada);    
            // console.log(`CERRANDO ${moment().format(GLOBAL.dateTimeFormatMilli)}`);    
            // this.fuerzaCierreComanda(false);
            this.checkEstatusMesa();
            this.resetMesaSeleccionada();
            // this.cargando = false;
        };
        this.msnOpenedChange = (abierto) => {
            if (!abierto) {
                this.cerrandoRightSideNav();
            }
        };
        this.checkEstatusMesa = () => {
            // console.log('MESA EN CHECK ESTATUS MESA = ', this.mesaSeleccionada);
            if (!!this.mesaSeleccionada && !!this.mesaSeleccionada.cuentas && this.mesaSeleccionada.cuentas.length > 0) {
                const abiertas = this.mesaSeleccionada.cuentas.filter(cta => +cta.cerrada === 0).length || 0;
                // console.log('ABIERTAS = ', abiertas);
                if (abiertas === 0) {
                    this.setEstatusMesa({
                        area: this.mesaSeleccionada.mesa.area.area,
                        mesa: this.mesaSeleccionada.mesa.mesa
                    }, 1);
                }
            }
        };
        this.fuerzaCierreComanda = (shouldToggle) => {
            this.endSubs.add(this.comandaSrvc.cerrarEstacion(this.mesaSeleccionada.comanda).subscribe(resCierre => {
                this.loadComandaMesa(this.mesaSeleccionada.mesa, shouldToggle);
            }));
        };
        this.openTranComandaAlt = () => {
            const tranComandaRef = this.dialog.open(_tran_comanda_alt_tran_comanda_alt_component__WEBPACK_IMPORTED_MODULE_3__["TranComandaAltComponent"], {
                maxWidth: '100vw', maxHeight: '85vh', width: '99vw', height: '85vh',
                disableClose: true,
                data: { mesa: this.mesaSeleccionada }
            });
            this.endSubs.add(tranComandaRef.afterClosed().subscribe((res) => {
                this.checkEstatusMesa();
                if (res) {
                    this.loadAreas(true, { mesaenuso: res });
                }
                else {
                    this.cargando = false;
                }
            }));
        };
        this.loadComandaMesa = (obj, shouldToggle = true) => {
            // console.log('OBJETO = ', obj);
            if (shouldToggle && this.cargando) {
                this.snackBar.open('El sistema está terminando de cargar información. Por favor intente de nuevo.', 'Áreas', { duration: 5000 });
                return;
            }
            this.cargando = true;
            this.endSubs.add(this.comandaSrvc.getComandaDeMesa(obj.mesa).subscribe((res) => {
                // console.log('RESPUESTA DE GET COMANDA = ', res);
                // this.cargando = false;
                if (res.exito) {
                    if (!Array.isArray(res)) {
                        this.mesaSeleccionada = res;
                        this.snTrancomanda.rolesUsuario = this.mesaSeleccionada.turno_rol;
                    }
                    else {
                        if (res.length === 0) {
                            this.mesaSeleccionada = {
                                mesa: this.mesaSeleccionada.mesa,
                                cuentas: [
                                    { cerrada: 1 }
                                ]
                            };
                        }
                        this.checkEstatusMesa();
                    }
                    // console.log('MESA SELECTED = ', this.mesaSeleccionada);
                    this.checkEstatusMesa();
                    if (shouldToggle) {
                        // const cuentas = this.mesaSeleccionada.cuentas;
                        this.snTrancomanda.llenaProductosSeleccionados(this.mesaSeleccionada);
                        switch (this.configTipoPantalla) {
                            case 1:
                                this.toggleRightSidenav();
                                break;
                            case 2:
                                this.openTranComandaAlt();
                                break;
                            default: this.toggleRightSidenav();
                        }
                    }
                    else {
                        // console.log(`SIN TOGGLE RIGHT PANEL ${moment().format(GLOBAL.dateTimeFormat)}`);
                        this.checkEstatusMesa();
                        this.cargando = false;
                    }
                }
                else {
                    if (res.mensaje) {
                        this.snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
                    }
                    if (Array.isArray(res)) {
                        if (res.length === 0) {
                            this.mesaSeleccionada = {
                                mesa: this.mesaSeleccionada.mesa,
                                cuentas: [
                                    { cerrada: 1 }
                                ]
                            };
                        }
                    }
                    this.checkEstatusMesa();
                    this.cargando = false;
                }
                this.checkEstatusMesa();
            }));
        };
    }
    ngOnInit() {
        this.loadAreas();
        this.resetMesaSeleccionada();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede_uuid));
            this.socket.on('refrescar:mesa', (obj) => {
                // console.log(obj);
                this.loadAreas(true, obj);
            });
        }
        this.configTipoPantalla = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].CONSTANTES.RT_PANTALLA_TOMA_COMANDA);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setDivSize();
            this.snTrancomanda.resetMesaEnUso();
        }, 600);
    }
    ngOnDestroy() {
        this.endSubs.unsubscribe();
    }
    setDivSize() {
        // this.divSize.w = this.pestania.nativeElement.offsetWidth;
        // this.divSize.h = this.pestania.nativeElement.offsetHeight;
    }
    onClickMesa(m) {
        // console.log(m.mesaSelected); return;
        if (!this.cargando) {
            if (+m.mesaSelected.escallcenter === 0) {
                this.aperturaCargaMesa(m);
            }
            else {
                const varCliPedido = `${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].rtClientePedido}_${m.mesaSelected.mesa}`;
                if (+m.mesaSelected.estatus === 1) {
                    this.ls.clear(varCliPedido);
                    const pideTelefonoRef = this.dialog.open(_callcenter_components_pide_telefono_dialog_pide_telefono_dialog_component__WEBPACK_IMPORTED_MODULE_1__["PideTelefonoDialogComponent"], {
                        width: '50%',
                        disableClose: true,
                        data: { mesa: m.mesaSelected }
                    });
                    this.endSubs.add(pideTelefonoRef.afterClosed().subscribe((cli) => {
                        if (cli) {
                            this.clientePedido = cli;
                            this.ls.set(varCliPedido, this.clientePedido);
                            this.aperturaCargaMesa(m);
                        }
                    }));
                }
                else {
                    this.clientePedido = this.ls.get(varCliPedido);
                    this.aperturaCargaMesa(m);
                }
            }
        }
        else {
            this.snackBar.open('El sistema está terminando de cargar información. Por favor intente de nuevo.', 'Áreas', { duration: 5000 });
        }
    }
    openAbrirMesaDialog(m) {
        var _a;
        // console.log(m);
        this.cargando = true;
        this.mesaSeleccionadaToOpen = {
            nombreArea: this.tabArea.textLabel,
            area: +m.area,
            mesa: +m.mesa,
            numero: +m.numero,
            mesero: '',
            comensales: '1',
            comanda: 0,
            esEvento: false,
            dividirCuentasPorSillas: false,
            estatus: 1,
            clientePedido: this.clientePedido || null,
            cuentas: [
                {
                    numero: 1,
                    nombre: ((_a = this.clientePedido) === null || _a === void 0 ? void 0 : _a.nombre) || 'Única',
                    productos: []
                }
            ]
        };
        if (+m.esmostrador === 0) {
            const abrirMesaRef = this.dialog.open(_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_2__["AbrirMesaComponent"], {
                width: '50%',
                height: 'auto',
                disableClose: true,
                data: this.mesaSeleccionadaToOpen
            });
            this.endSubs.add(abrirMesaRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.mesaSeleccionadaToOpen = result;
                    // console.log(JSON.stringify(this.mesaSeleccionada));
                    this.guardarMesa(m);
                }
                else {
                    this.cargando = false;
                }
            }));
        }
        else {
            this.mesaSeleccionadaToOpen.mesero = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr;
            this.guardarMesa(m);
        }
    }
}
TranAreasComponent.ɵfac = function TranAreasComponent_Factory(t) { return new (t || TranAreasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_area_service__WEBPACK_IMPORTED_MODULE_9__["AreaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_10__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_11__["ConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__["Socket"])); };
TranAreasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TranAreasComponent, selectors: [["app-tran-areas"]], viewQuery: function TranAreasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pestania = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rightSidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tabArea = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.snTrancomanda = _t.first);
    } }, decls: 8, vars: 4, consts: [[1, "matSideNavContainer"], ["mode", "over", "position", "end", "disableClose", "", 3, "opened", "openedChange"], ["rightSidenav", ""], [3, "mesaEnUso", "clientePedido", "mesaSavedEv", "closeSideNavEv"], ["snTranComanda", ""], ["dynamicHeight", "", "backgroundColor", "primary"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["tabArea", ""], [1, "divAreaMesa", 3, "resize"], ["matTabArea", ""], [3, "configuracion", "isDisabled", "onClickMesa", 4, "ngFor", "ngForOf"], [3, "configuracion", "isDisabled", "onClickMesa"]], template: function TranAreasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openedChange", function TranAreasComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.openedRightPanel = $event; })("openedChange", function TranAreasComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.msnOpenedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-tran-comanda", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mesaSavedEv", function TranAreasComponent_Template_app_tran_comanda_mesaSavedEv_3_listener() { return ctx.actualizar(); })("closeSideNavEv", function TranAreasComponent_Template_app_tran_comanda_closeSideNavEv_3_listener($event) { return ctx.toggleRightSidenav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TranAreasComponent_mat_tab_7_Template, 5, 2, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("opened", ctx.openedRightPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mesaEnUso", ctx.mesaSeleccionada)("clientePedido", ctx.clientePedido);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lstTabsAreas);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenav"], _tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_14__["TranComandaComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTab"], _mesa_mesa_component__WEBPACK_IMPORTED_MODULE_17__["MesaComponent"]], styles: [".matSideNavContainer[_ngcontent-%COMP%] {\n    height: 90%;\n    overflow: hidden !important; \n}\n\n.divAreaMesa[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 90vh;\n    background-color: #c7c7c749;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    width: 97vw;\n    \n    \n}\n\n  .mat-drawer-inner-container {\n    overflow-y: auto !important;\n    overflow-x: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW4tYXJlYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFFQTs7Ozs7OztDQU9DIiwiZmlsZSI6InRyYW4tYXJlYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRTaWRlTmF2Q29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7IFxufVxuXG4uZGl2QXJlYU1lc2Ege1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNzQ5O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDk3dnc7XG4gICAgLypib3JkZXI6IDFweCBibGFjayBzb2xpZDsqL1xuICAgIFxufVxuXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi8qXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICA6Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB9XG59XG4qLyJdfQ== */"] });


/***/ }),

/***/ "f5RA":
/*!***********************************************************!*\
  !*** ./src/app/restaurante/restaurante-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RestauranteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestauranteRoutingModule", function() { return RestauranteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/services/authguard.service */ "0T/Q");
/* harmony import */ var _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/area/area/area.component */ "ytk9");
/* harmony import */ var _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tran-areas/tran-areas.component */ "eu3z");
/* harmony import */ var _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/turno/turno/turno.component */ "2fnC");
/* harmony import */ var _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/rpt-ventas.component */ "bKsA");
/* harmony import */ var _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/reportes/turnos/turnos.component */ "rnyF");
/* harmony import */ var _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reportes/propinas/propinas.component */ "dHBS");
/* harmony import */ var _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comanda-en-linea/comanda-en-linea.component */ "r2eK");
/* harmony import */ var _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reportes/caja/caja.component */ "W57H");
/* harmony import */ var _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/reportes/factura/factura.component */ "/xGI");
/* harmony import */ var _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/turno-tipo/turno/turno.component */ "nOUb");
/* harmony import */ var _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/propina/propina/propina.component */ "866G");
/* harmony import */ var _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reportes/autoconsulta/autoconsulta.component */ "ZCoE");
/* harmony import */ var _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/caja-corte/cajacorte/cajacorte.component */ "f8x4");
/* harmony import */ var _components_tran_cocina_tran_cocina_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tran-cocina/tran-cocina.component */ "xul/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");













// import { FormPropinaComponent } from './components/propina/form-propina/form-propina.component';
// import { ListaPropinaComponent } from './components/propina/lista-propina/lista-propina.component';





const routes = [
    { path: 'mantareas', component: _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_2__["AreaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'tranareas', component: _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_3__["TranAreasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'turno', component: _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_4__["TurnoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'rptvtascat', component: _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_5__["RptVentasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'rptturnos', component: _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_6__["TurnosComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'rptpropinas', component: _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_7__["PropinasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'rptcaja', component: _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_9__["CajaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'rptfactura', component: _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_10__["FacturaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'cmdonline', component: _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_8__["ComandaEnLineaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'tipoturno', component: _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_11__["TurnoTipoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'propina', component: _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_12__["PropinaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'autoconsulta', component: _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_13__["AutoconsultaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'cajacorte', component: _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_14__["CajacorteComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'trancocina', component: _components_tran_cocina_tran_cocina_component__WEBPACK_IMPORTED_MODULE_15__["TranCocinaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];
class RestauranteRoutingModule {
}
RestauranteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: RestauranteRoutingModule });
RestauranteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function RestauranteRoutingModule_Factory(t) { return new (t || RestauranteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](RestauranteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "f8x4":
/*!************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.ts ***!
  \************************************************************************************/
/*! exports provided: CajacorteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteComponent", function() { return CajacorteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cajacorte-lista/cajacorte-lista.component */ "1ngy");
/* harmony import */ var _cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cajacorte-form/cajacorte-form.component */ "qh9x");



const _c0 = ["lstCortecaja"];
class CajacorteComponent {
    constructor() {
        this.editarCajaCorte = (pres) => this.ccorte = pres;
        this.actualizaLista = () => this.lstCajacorteComponent.getCajascortes();
        this.ccorte = {
            caja_corte: 0,
            creacion: null,
            usuario: 0,
            turno: 0,
            confirmado: null,
            anulado: 0,
            caja_corte_tipo: 0,
            descripcion: null,
            detalle: []
        };
    }
    ngOnInit() {
    }
}
CajacorteComponent.ɵfac = function CajacorteComponent_Factory(t) { return new (t || CajacorteComponent)(); };
CajacorteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CajacorteComponent, selectors: [["app-cajacorte"]], viewQuery: function CajacorteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lstCajacorteComponent = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getCajacorteEv"], ["lstCortecaja", ""], [1, "col", "m7", "s12"], [3, "ccorte", "cajacorteSavedEv"], ["frmCortecaja", ""]], template: function CajacorteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-cajacorte-lista", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getCajacorteEv", function CajacorteComponent_Template_app_cajacorte_lista_getCajacorteEv_2_listener($event) { return ctx.editarCajaCorte($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-cajacorte-form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cajacorteSavedEv", function CajacorteComponent_Template_app_cajacorte_form_cajacorteSavedEv_5_listener() { return ctx.actualizaLista(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ccorte", ctx.ccorte);
    } }, directives: [_cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_1__["CajacorteListaComponent"], _cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_2__["CajacorteFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWphY29ydGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fD0e":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurante/components/nueva-cuenta/nueva-cuenta.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NuevaCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaCuentaComponent", function() { return NuevaCuentaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class NuevaCuentaComponent {
    constructor(dialogRef, snackBar, comandaSrvc, data) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.comandaSrvc = comandaSrvc;
        this.data = data;
        this.cancelar = () => this.dialogRef.close(false);
        this.guardar = () => {
            if (this.nuevaCuenta.nombre) {
                const idx = this.comanda.cuentas.findIndex(c => c.nombre.toUpperCase().trim() === this.nuevaCuenta.nombre.toUpperCase().trim());
                if (idx < 0) {
                    this.comanda.cuentas.push(this.nuevaCuenta);
                    this.comandaSrvc.save(this.comanda).subscribe(res => {
                        if (res.exito) {
                            this.snackBar.open('Cuenta agregada con éxito', 'Cuentas', { duration: 3000 });
                            this.dialogRef.close(true);
                        }
                        else {
                            this.snackBar.open(`ERROR: ${res.mensaje}`, 'Cuentas', { duration: 7000 });
                        }
                    });
                }
                else {
                    this.snackBar.open('Ya existe una cuenta con ese nombre. Por favor ingrese otro nombre.', 'Cuentas', { duration: 7000 });
                }
            }
        };
    }
    ngOnInit() {
        if (+this.data.mesaEnUso.comanda > 0) {
            const meu = this.data.mesaEnUso;
            this.comanda = {
                area: +meu.mesa.area.area,
                mesa: +meu.mesa.mesa,
                mesero: +meu.mesero.usuario,
                comensales: meu.cuentas.length + 1,
                dividirCuentasPorSillas: 1,
                comanda: +meu.comanda,
                cuentas: meu.cuentas,
                replaceUnica: false
            };
            this.nuevaCuenta = {
                cuenta: 0,
                numero: this.comanda.cuentas.length + 1,
                nombre: undefined,
                productos: []
            };
        }
    }
}
NuevaCuentaComponent.ɵfac = function NuevaCuentaComponent_Factory(t) { return new (t || NuevaCuentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_3__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
NuevaCuentaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NuevaCuentaComponent, selectors: [["app-nueva-cuenta"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", ""], ["frmNuevaCuenta", "ngForm"], [1, "fullWidth"], ["type", "text", "matInput", "", "placeholder", "Nombre", "name", "nombre", "required", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"]], template: function NuevaCuentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NuevaCuentaComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nuevaCuenta.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaCuentaComponent_Template_button_click_8_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NuevaCuentaComponent_Template_button_click_10_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Nueva cuenta - Comanda #", ctx.data.mesaEnUso.comanda, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nuevaCuenta.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2YS1jdWVudGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "fHc6":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UnirCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirCuentaComponent", function() { return UnirCuentaComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function UnirCuentaComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctaDe_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctaDe_r3)("disabled", +ctaDe_r3.cerrada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctaDe_r3.nombre, " ");
} }
function UnirCuentaComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctaA_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctaA_r4)("disabled", +ctaA_r4.cerrada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctaA_r4.nombre, " ");
} }
class UnirCuentaComponent {
    constructor(dialogRef, comandaSrvc, snackBar, data) {
        this.dialogRef = dialogRef;
        this.comandaSrvc = comandaSrvc;
        this.snackBar = snackBar;
        this.data = data;
    }
    ngOnInit() {
        // console.log('Productos enviados = ', this.data.lstProductosSeleccionados);
    }
    cancelar() {
        this.dialogRef.close(false);
    }
    unirCuentas(deCuenta, aCuenta) {
        // console.log('ORIGEN', deCuenta);
        // console.log('DESTINO', aCuenta);
        this.comandaSrvc.unificarCuentas(deCuenta.cuenta, aCuenta.cuenta).subscribe(res => {
            // console.log(res);
            if (res.exito) {
                this.snackBar.open(res.mensaje, 'Cuentas', { duration: 3000 });
                this.dialogRef.close(true);
            }
            else {
                this.snackBar.open(`ERROR:${res.mensaje}`, 'Cuentas', { duration: 7000 });
            }
        });
        /*
        if (+deCuenta.numero !== +aCuenta.numero) {
          this.data.lstProductosSeleccionados.map((p) => {
            if (+p.cuenta === +deCuenta.cuenta) {
              p.cuenta = aCuenta.cuenta;
            }
          });
          console.log('Productos seleccionados (Después) = ', this.data.lstProductosSeleccionados);
        } else {
          this.data.lstProductosSeleccionados.map(p => p.cuenta = +deCuenta.cuenta);
        }
        this.dialogRef.close(this.data.lstProductosSeleccionados);
        */
    }
    unirTodas() {
        // this.unirCuentas();
    }
}
UnirCuentaComponent.ɵfac = function UnirCuentaComponent_Factory(t) { return new (t || UnirCuentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_2__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
UnirCuentaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnirCuentaComponent, selectors: [["app-unir-cuenta"]], decls: 20, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["novalidate", ""], ["frmUnirCuenta", "ngForm"], ["name", "cuentaDe", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["name", "cuentaA", "required", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [3, "value", "disabled"]], template: function UnirCuentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unir cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Unir cuenta de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UnirCuentaComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.cuentaDe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UnirCuentaComponent_mat_option_9_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "con la cuenta de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UnirCuentaComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.cuentaA = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnirCuentaComponent_mat_option_14_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnirCuentaComponent_Template_button_click_16_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnirCuentaComponent_Template_button_click_18_listener() { return ctx.unirCuentas(ctx.cuentaDe, ctx.cuentaA); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Unir cuentas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cuentaDe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.mesaEnUso.cuentas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cuentaA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.mesaEnUso.cuentas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid || !ctx.cuentaDe || !ctx.cuentaA || +ctx.cuentaDe.numero === +ctx.cuentaA.numero);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlyLWN1ZW50YS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "iDsI":
/*!*******************************************************!*\
  !*** ./src/app/restaurante/services/turno.service.ts ***!
  \*******************************************************/
/*! exports provided: TurnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoService", function() { return TurnoService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class TurnoService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'turno';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    get(fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/guardar${entidad.turno ? ('/' + entidad.turno) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getDetalle(idturno, fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar_usuario/${idturno}?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    saveDetalle(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/agregar_usuario/${entidad.turno}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularDetalle(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/anular_usuario/${entidad.turno}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    replicaDetalleTurno(idTurnoOriginal, idTurnoCopia) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/replica_detalle_turno/${idTurnoOriginal}/${idTurnoCopia}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
TurnoService.ɵfac = function TurnoService_Factory(t) { return new (t || TurnoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
TurnoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TurnoService, factory: TurnoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "k2MF":
/*!***************************************************!*\
  !*** ./src/app/restaurante/restaurante.module.ts ***!
  \***************************************************/
/*! exports provided: RestauranteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestauranteModule", function() { return RestauranteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _wms_wms_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wms/wms.module */ "vtFA");
/* harmony import */ var _pos_pos_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pos/pos.module */ "qodq");
/* harmony import */ var _callcenter_callcenter_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../callcenter/callcenter.module */ "Kr0P");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "JbvS");
/* harmony import */ var ngx_barcodeput__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-barcodeput */ "pY9A");
/* harmony import */ var _restaurante_routing_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./restaurante-routing.module */ "f5RA");
/* harmony import */ var _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/tran-areas/tran-areas.component */ "eu3z");
/* harmony import */ var _components_mesa_mesa_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/mesa/mesa.component */ "UBc4");
/* harmony import */ var _components_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/abrir-mesa/abrir-mesa.component */ "2gci");
/* harmony import */ var _components_tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/tran-comanda/tran-comanda.component */ "ngV9");
/* harmony import */ var _components_lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/lista-productos-comanda/lista-productos-comanda.component */ "4w7o");
/* harmony import */ var _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/unir-cuenta/unir-cuenta.component */ "fHc6");
/* harmony import */ var _components_area_lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/area/lista-area/lista-area.component */ "dBZW");
/* harmony import */ var _components_area_form_area_form_area_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/area/form-area/form-area.component */ "9x1t");
/* harmony import */ var _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/area/area/area.component */ "ytk9");
/* harmony import */ var _components_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/pide-datos-cuentas/pide-datos-cuentas.component */ "UEEt");
/* harmony import */ var _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/turno/turno/turno.component */ "2fnC");
/* harmony import */ var _components_turno_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/turno/lista-turno/lista-turno.component */ "rwi4");
/* harmony import */ var _components_turno_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/turno/form-turno/form-turno.component */ "suWU");
/* harmony import */ var _components_area_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/area/area-designer/area-designer.component */ "8slz");
/* harmony import */ var _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/rpt-ventas.component */ "bKsA");
/* harmony import */ var _components_reportes_rpt_ventas_por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/por-categoria/por-categoria.component */ "qD6S");
/* harmony import */ var _components_reportes_rpt_ventas_por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/por-articulo/por-articulo.component */ "BJCR");
/* harmony import */ var _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/reportes/turnos/turnos.component */ "rnyF");
/* harmony import */ var _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/reportes/propinas/propinas.component */ "dHBS");
/* harmony import */ var _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/comanda-en-linea/comanda-en-linea.component */ "r2eK");
/* harmony import */ var _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/reportes/caja/caja.component */ "W57H");
/* harmony import */ var _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/reportes/factura/factura.component */ "/xGI");
/* harmony import */ var _components_turno_tipo_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/turno-tipo/lista-turno/lista-turno.component */ "SNic");
/* harmony import */ var _components_turno_tipo_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/turno-tipo/form-turno/form-turno.component */ "ZWNR");
/* harmony import */ var _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/turno-tipo/turno/turno.component */ "nOUb");
/* harmony import */ var _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/propina/propina/propina.component */ "866G");
/* harmony import */ var _components_propina_form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/propina/form-propina/form-propina.component */ "He6H");
/* harmony import */ var _components_propina_lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/propina/lista-propina/lista-propina.component */ "+grV");
/* harmony import */ var _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/reportes/autoconsulta/autoconsulta.component */ "ZCoE");
/* harmony import */ var _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/caja-corte/cajacorte/cajacorte.component */ "f8x4");
/* harmony import */ var _components_caja_corte_cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/caja-corte/cajacorte-lista/cajacorte-lista.component */ "1ngy");
/* harmony import */ var _components_caja_corte_cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/caja-corte/cajacorte-form/cajacorte-form.component */ "qh9x");
/* harmony import */ var _components_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component */ "vjxo");
/* harmony import */ var _components_traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/traslado-mesa/traslado-mesa.component */ "BXCb");
/* harmony import */ var _components_area_configura_mesa_configura_mesa_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/area/configura-mesa/configura-mesa.component */ "Vy/R");
/* harmony import */ var _components_tran_cocina_tran_cocina_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/tran-cocina/tran-cocina.component */ "xul/");
/* harmony import */ var _components_tran_comanda_alt_tran_comanda_alt_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/tran-comanda-alt/tran-comanda-alt.component */ "PKcf");
/* harmony import */ var _components_notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/notas-generales-comanda/notas-generales-comanda.component */ "BQSQ");
/* harmony import */ var _components_nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/nueva-cuenta/nueva-cuenta.component */ "fD0e");
/* harmony import */ var _components_distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/distribuir-productos-cuentas/distribuir-productos-cuentas.component */ "IdLv");
/* harmony import */ var _components_acciones_comanda_acciones_comanda_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/acciones-comanda/acciones-comanda.component */ "byCI");
/* harmony import */ var _components_turno_selecciona_turno_previo_selecciona_turno_previo_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/turno/selecciona-turno-previo/selecciona-turno-previo.component */ "AopW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/core */ "fXoL");















































































class RestauranteModule {
}
RestauranteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_78__["ɵɵdefineNgModule"]({ type: RestauranteModule });
RestauranteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_78__["ɵɵdefineInjector"]({ factory: function RestauranteModule_Factory(t) { return new (t || RestauranteModule)(); }, providers: [
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _restaurante_routing_module__WEBPACK_IMPORTED_MODULE_35__["RestauranteRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_barcodeput__WEBPACK_IMPORTED_MODULE_34__["NgxBarCodePutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _wms_wms_module__WEBPACK_IMPORTED_MODULE_4__["WmsModule"],
            _pos_pos_module__WEBPACK_IMPORTED_MODULE_5__["PosModule"],
            _callcenter_callcenter_module__WEBPACK_IMPORTED_MODULE_6__["CallcenterModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_33__["EcoFabSpeedDialModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_31__["MatBottomSheetModule"],
            angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_32__["MatKeyboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_78__["ɵɵsetNgModuleScope"](RestauranteModule, { declarations: [_components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_36__["TranAreasComponent"], _components_mesa_mesa_component__WEBPACK_IMPORTED_MODULE_37__["MesaComponent"], _components_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_38__["AbrirMesaComponent"], _components_tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_39__["TranComandaComponent"], _components_lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_40__["ListaProductosComandaComponent"], _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_41__["UnirCuentaComponent"],
        _components_area_lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_42__["ListaAreaComponent"], _components_area_form_area_form_area_component__WEBPACK_IMPORTED_MODULE_43__["FormAreaComponent"], _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_44__["AreaComponent"], _components_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_45__["PideDatosCuentasComponent"], _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_46__["TurnoComponent"], _components_turno_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_47__["ListaTurnoComponent"],
        _components_turno_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_48__["FormTurnoComponent"], _components_area_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_49__["AreaDesignerComponent"], _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_50__["RptVentasComponent"], _components_reportes_rpt_ventas_por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_51__["PorCategoriaComponent"], _components_reportes_rpt_ventas_por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_52__["PorArticuloComponent"], _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_53__["TurnosComponent"],
        _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_54__["PropinasComponent"], _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_55__["ComandaEnLineaComponent"], _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_56__["CajaComponent"], _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_57__["FacturaComponent"], _components_turno_tipo_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_58__["ListaTurnoTipoComponent"], _components_turno_tipo_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_59__["FormTurnoTipoComponent"],
        _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_60__["TurnoTipoComponent"], _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_61__["PropinaComponent"], _components_propina_form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_62__["FormPropinaComponent"], _components_propina_lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_63__["ListaPropinaComponent"], _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_64__["AutoconsultaComponent"],
        _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_65__["CajacorteComponent"], _components_caja_corte_cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_66__["CajacorteListaComponent"], _components_caja_corte_cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_67__["CajacorteFormComponent"], _components_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_68__["ValidaPwdGerenteTurnoComponent"], _components_traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_69__["TrasladoMesaComponent"],
        _components_area_configura_mesa_configura_mesa_component__WEBPACK_IMPORTED_MODULE_70__["ConfiguraMesaComponent"], _components_tran_cocina_tran_cocina_component__WEBPACK_IMPORTED_MODULE_71__["TranCocinaComponent"], _components_tran_comanda_alt_tran_comanda_alt_component__WEBPACK_IMPORTED_MODULE_72__["TranComandaAltComponent"], _components_notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_73__["NotasGeneralesComandaComponent"], _components_nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_74__["NuevaCuentaComponent"],
        _components_distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_75__["DistribuirProductosCuentasComponent"],
        _components_acciones_comanda_acciones_comanda_component__WEBPACK_IMPORTED_MODULE_76__["AccionesComandaComponent"],
        _components_turno_selecciona_turno_previo_selecciona_turno_previo_component__WEBPACK_IMPORTED_MODULE_77__["SeleccionaTurnoPrevioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _restaurante_routing_module__WEBPACK_IMPORTED_MODULE_35__["RestauranteRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ngx_barcodeput__WEBPACK_IMPORTED_MODULE_34__["NgxBarCodePutModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _wms_wms_module__WEBPACK_IMPORTED_MODULE_4__["WmsModule"],
        _pos_pos_module__WEBPACK_IMPORTED_MODULE_5__["PosModule"],
        _callcenter_callcenter_module__WEBPACK_IMPORTED_MODULE_6__["CallcenterModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_33__["EcoFabSpeedDialModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_31__["MatBottomSheetModule"],
        angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_32__["MatKeyboardModule"]] }); })();


/***/ }),

/***/ "nOUb":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/turno/turno.component.ts ***!
  \****************************************************************************/
/*! exports provided: TurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoTipoComponent", function() { return TurnoTipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lista-turno/lista-turno.component */ "SNic");
/* harmony import */ var _form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-turno/form-turno.component */ "ZWNR");



const _c0 = ["lstTurno"];
class TurnoTipoComponent {
    constructor() {
        this.setTurno = (cli) => this.turno = cli;
        this.refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();
        this.turno = {
            turno_tipo: null, descripcion: null, activo: 1
        };
    }
    ngOnInit() {
    }
}
TurnoTipoComponent.ɵfac = function TurnoTipoComponent_Factory(t) { return new (t || TurnoTipoComponent)(); };
TurnoTipoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TurnoTipoComponent, selectors: [["app-turno-tipo"]], viewQuery: function TurnoTipoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lstTurnoComponent = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getTurnoEv"], ["lstTurno", ""], [1, "col", "m7", "s12"], [3, "turno", "turnoSavedEv"], ["frmTurno", ""]], template: function TurnoTipoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-lista-turno-tipo", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getTurnoEv", function TurnoTipoComponent_Template_app_lista_turno_tipo_getTurnoEv_2_listener($event) { return ctx.setTurno($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-form-turno-tipo", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("turnoSavedEv", function TurnoTipoComponent_Template_app_form_turno_tipo_turnoSavedEv_5_listener() { return ctx.refreshTurnoList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("turno", ctx.turno);
    } }, directives: [_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_1__["ListaTurnoTipoComponent"], _form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_2__["FormTurnoTipoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJuby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ngV9":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-comanda/tran-comanda.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TranComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranComandaComponent", function() { return TranComandaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unir-cuenta/unir-cuenta.component */ "fHc6");
/* harmony import */ var _traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../traslado-mesa/traslado-mesa.component */ "BXCb");
/* harmony import */ var _pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pos/components/cobrar-pedido/cobrar-pedido.component */ "fn6i");
/* harmony import */ var _shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dialog-pedido/dialog-pedido.component */ "d/pK");
/* harmony import */ var _shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dialog-combo/dialog-combo.component */ "LnBW");
/* harmony import */ var _notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notas-generales-comanda/notas-generales-comanda.component */ "BQSQ");
/* harmony import */ var _nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nueva-cuenta/nueva-cuenta.component */ "fD0e");
/* harmony import */ var _distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../distribuir-productos-cuentas/distribuir-productos-cuentas.component */ "IdLv");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var _wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../wms/services/articulo.service */ "NGYs");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "JbvS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _wms_components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../wms/components/producto/lista-producto-alt/lista-producto-alt.component */ "E6Vq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_barcodeput__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-barcodeput */ "pY9A");
/* harmony import */ var _lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../lista-productos-comanda/lista-productos-comanda.component */ "4w7o");










// import { saveAs } from 'file-saver';





















const _c0 = ["appLstProdAlt"];
const _c1 = ["txtCodigoBarras"];
function TranComandaComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.mesaEnUso.mesa.area.nombre, " - Mesa ", ctx_r0.mesaEnUso.mesa.etiqueta || ctx_r0.mesaEnUso.mesa.numero, " - Comanda ", ctx_r0.mesaEnUso.comanda, " ");
} }
function TranComandaComponent_div_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_div_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const cta_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.setSelectedCuenta(cta_r19.numero); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cta_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", +cta_r19.cerrada == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cta_r19.nombre, " ");
} }
function TranComandaComponent_div_8_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_div_8_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.nuevaCuenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nueva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TranComandaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TranComandaComponent_div_8_button_1_Template, 2, 2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TranComandaComponent_div_8_button_2_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mesaEnUso.cuentas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mesaEnUso && +ctx_r1.mesaEnUso.mesa.esmostrador === 0 && +ctx_r1.mesaEnUso.mesa.escallcenter === 0);
} }
const _c2 = function () { return { standalone: true }; };
function TranComandaComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranComandaComponent_mat_form_field_14_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.codigoBarras = $event; })("onDetected", function TranComandaComponent_mat_form_field_14_Template_input_onDetected_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.buscarArticulo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.codigoBarras)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
} }
function TranComandaComponent_br_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function TranComandaComponent_ng_container_16_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_ng_container_16_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const c_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.clickOnCategoria(c_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r29.cuentaActiva || ctx_r29.bloqueoBotones || !ctx_r29.cuentaActiva.cuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r28.descripcion, " ");
} }
function TranComandaComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TranComandaComponent_ng_container_16_button_1_Template, 2, 2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r28.mostrarEnPos);
} }
function TranComandaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cuenta de ", ctx_r5.cuentaActiva.nombre, "");
} }
function TranComandaComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Por favor seleccione una cuenta. Gracias.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TranComandaComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.validarImpresion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Comanda ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.cuentaActiva.nombre || ctx_r7.bloqueoBotones);
} }
function TranComandaComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.printCuenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r8.cuentaActiva.nombre || ctx_r8.bloqueoBotones);
} }
function TranComandaComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.distribuirProductos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Distribuir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.mesaEnUso.cuentas.length < 2 || ctx_r9.bloqueoBotones);
} }
function TranComandaComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.unirCuentas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unir cuentas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.mesaEnUso.cuentas.length < 2 || ctx_r10.bloqueoBotones);
} }
function TranComandaComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.cobrarCuenta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cobrar cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.cuentaActiva.nombre || ctx_r11.esCajero() || ctx_r11.bloqueoBotones);
} }
function TranComandaComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.enviarPedido(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enviar pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r12.cuentaActiva.nombre || ctx_r12.esCajero() || ctx_r12.bloqueoBotones);
} }
function TranComandaComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.trasladoMesa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Trasladar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.bloqueoBotones);
} }
function TranComandaComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.cerrarMesa(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cerrar ", +ctx_r14.mesaEnUso.mesa.esmostrador === 0 ? "Mesa" : +ctx_r14.mesaEnUso.mesa.escallcenter === 0 ? "Mostrador" : "Pedido", " ");
} }
function TranComandaComponent_app_lista_productos_comanda_42_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-lista-productos-comanda", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productoRemovedEv", function TranComandaComponent_app_lista_productos_comanda_42_Template_app_lista_productos_comanda_productoRemovedEv_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.updProductosCuenta($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listaProductos", ctx_r16.lstProductosDeCuenta)("noCuenta", ctx_r16.cuentaActiva && +ctx_r16.cuentaActiva.numero ? +ctx_r16.cuentaActiva.numero : 1)("IdComanda", ctx_r16.mesaEnUso.comanda)("IdCuenta", ctx_r16.cuentaActiva.cuenta)("bloqueoBotones", ctx_r16.bloqueoBotones)("mesaEnUso", ctx_r16.mesaEnUso);
} }
class TranComandaComponent {
    constructor(
    // private router: Router,
    dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.ls = ls;
        this.pdfServicio = pdfServicio;
        this.configSrvc = configSrvc;
        this.articuloSrvc = articuloSrvc;
        this.clientePedido = null;
        this.closeSideNavEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mesaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPortalComanda = false;
        this.showPortalCuenta = false;
        this.noComanda = 0;
        this.sumCuenta = 0;
        this.categorias = [];
        this.bloqueoBotones = false;
        this.rolesUsuario = [];
        this.impreso = 0;
        this.usaCodigoBarras = false;
        this.codigoBarras = null;
        this.imprimeRecetaEnComanda = true;
        this.resetMesaEnUso = () => this.mesaEnUso = {
            exito: true,
            comanda: null, usuario: null, sede: null, estatus: null,
            mesa: {
                mesa: null,
                area: { area: null, sede: null, area_padre: null, nombre: null },
                numero: null, posx: null, posy: null, tamanio: null, estatus: null
            },
            numero_pedido: null,
            cuentas: []
        };
        this.resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
        this.resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];
        this.resetCuentaActiva = () => this.cuentaActiva = { cuenta: null, numero: null, nombre: null, productos: [] };
        this.resetListadoArticulos = () => this.appLstProdAlt.loadArbolArticulos();
        this.setListaCategorias = (cats = []) => this.categorias = this.setVerBotones(cats);
        this.setVerBotones = (cats) => {
            for (const cat of cats) {
                loopSubCategoria: for (const subcat of cat.categoria_grupo) {
                    for (const art of subcat.articulo) {
                        if (+art.mostrar_pos === 1) {
                            subcat.mostrarEnPos = true;
                            cat.mostrarEnPos = true;
                            continue loopSubCategoria;
                        }
                    }
                }
            }
            return cats;
        };
        this.clickOnCategoria = (c) => this.appLstProdAlt.fillSubCategorias(c.categoria_grupo);
        this.buscarArticulo = () => {
            // console.log(`CODIGO BARRAS = ${this.codigoBarras}`);
            if (this.codigoBarras && this.codigoBarras.trim().length > 0) {
                this.articuloSrvc.getArticulos({ codigo: this.codigoBarras.trim() }).subscribe((arts) => {
                    if (arts && arts.length > 0) {
                        const art = arts[0];
                        const obj = {
                            id: +art.articulo,
                            nombre: art.descripcion,
                            precio: +art.precio,
                            impresora: art.impresora,
                            presentacion: art.presentacion,
                            codigo: art.codigo,
                            combo: art.combo,
                            multiple: art.multiple
                        };
                        this.agregarProductos(obj);
                    }
                    this.codigoBarras = null;
                    this.txtCodigoBarras.focus();
                });
            }
        };
        this.llenaProductosSeleccionados = (conQueMesa = this.mesaEnUso) => {
            if (this.mesaEnUso.comanda == null) {
                this.mesaEnUso = conQueMesa;
            }
            this.lstProductosSeleccionados = [];
            for (const ctas of conQueMesa.cuentas) {
                for (const p of ctas.productos) {
                    this.lstProductosSeleccionados.push({
                        id: +p.articulo.articulo,
                        nombre: p.articulo.descripcion,
                        cuenta: +p.numero_cuenta || 1,
                        idcuenta: +ctas.cuenta,
                        cantidad: +p.cantidad,
                        impreso: +p.impreso,
                        precio: parseFloat(p.precio) || 10.00,
                        total: parseFloat(p.total) || (parseFloat(p.cantidad) * parseFloat(p.precio)),
                        notas: p.notas || '',
                        showInputNotas: false,
                        itemListHeight: '70px',
                        detalle_comanda: +p.detalle_comanda,
                        detalle_cuenta: +p.detalle_cuenta,
                        impresora: p.articulo.impresora,
                        detalle: p.detalle,
                        monto_extra: +p.monto_extra || 0.00,
                        multiple: +p.articulo.multiple,
                        combo: +p.articulo.combo,
                        esreceta: +p.articulo.esreceta || 0
                    });
                }
            }
            // console.log('SELECCIONADOS = ', this.lstProductosSeleccionados);
        };
        this.cerrarMesa = () => {
            // console.log('CERRAR MESA; MESA EN USO = ', this.mesaEnUso);
            this.comandaSrvc.cerrarMesa(this.mesaEnUso.mesa.mesa).subscribe(res => {
                // console.log('RESPUESTA DE CERRAR MESA = ', res);
                if (res.exito) {
                    // console.log('EXITO PARA CERRAR LA MESA...', res);
                    this.snackBar.open(res.mensaje, 'Comanda', { duration: 3000 });
                    this.mesaEnUso.mesa.estatus = 1;
                    this.mesaSavedEv.emit();
                    this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
                }
                else {
                    // console.log('FALLA PARA CERRAR LA MESA...', res);
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 7000 });
                }
            });
        };
        this.printToBT = (msgToPrint = '') => {
            const convertir = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_ENVIA_COMO_BASE64);
            const data = convertir ? js_base64__WEBPACK_IMPORTED_MODULE_10__["Base64"].encode(msgToPrint, true) : msgToPrint;
            // const AppHref = `${GLOBAL.DEEP_LINK_ANDROID}${data}`;
            const AppHref = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].DEEP_LINK_ANDROID.replace('__INFOBASE64__', data);
            try {
                window.location.href = AppHref;
            }
            catch (error) {
                this.snackBar.open('No se pudo conectar con la aplicación de impresión', 'Comanda', { duration: 3000 });
            }
            // const a = document.createElement('a');
            // document.body.appendChild(a);
            // a.href = AppHref;
            // a.click();
            // document.body.removeChild(a);
            // setTimeout(() => wref.close(), 3000);
            this.bloqueoBotones = false;
        };
        this.printComandaPDF = () => {
            const noCuenta = +this.cuentaActiva.cuenta;
            this.pdfServicio.getComanda(noCuenta).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    window.open(url, `cuenta_${noCuenta}`, 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
                }
                else {
                    this.snackBar.open('No se pudo generar la comanda...', 'Comanda', { duration: 3000 });
                }
            });
        };
        this.sumaDetalle = (detalle) => {
            let total = 0.00;
            // for (let i = 0; i < detalle.length; i++) { total += detalle[i].total || 0.00; }
            for (const item of detalle) {
                total += +item.total || 0.00;
                total += +item.monto_extra || 0.00;
            }
            return total;
        };
        this.enviarPedido = () => {
            const cuenta = this.mesaEnUso.cuentas[0];
            this.cuentaActiva = this.mesaEnUso.cuentas.find((c) => +c.numero === +cuenta.numero);
            const lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +this.cuentaActiva.numero);
            lstProductosDeCuenta.map(p => p.impreso = 1);
            this.noComanda = this.mesaEnUso.comanda;
            this.cuentaActiva.productos = this.prepProductosComanda(lstProductosDeCuenta);
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
            if (idxCta > -1) {
                const objCmd = {
                    area: this.mesaEnUso.mesa.area.area,
                    mesa: this.mesaEnUso.mesa.mesa,
                    mesero: this.mesaEnUso.usuario,
                    comanda: this.mesaEnUso.comanda,
                    cuentas: this.mesaEnUso.cuentas,
                    numero_pedido: this.mesaEnUso.numero_pedido
                };
                this.comandaSrvc.save(objCmd).subscribe((res) => {
                    if (res.exito) {
                        this.mesaEnUso.numero_pedido = res.comanda.numero_pedido;
                        this.comandaSrvc.setProductoImpreso(cuenta.cuenta).subscribe(resImp => {
                            this.llenaProductosSeleccionados(resImp.comanda);
                            this.setSelectedCuenta(cuenta.numero);
                            this.cobrarCuenta();
                        });
                    }
                });
            }
        };
        this.cambiarEstatusCuenta = (obj) => {
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +obj.cuenta);
            this.mesaEnUso.cuentas[idxCta].cerrada = +obj.cerrada;
        };
        // esCajero = () => (this.rolesUsuario || []).find(r => r.trim().toLocaleLowerCase() === 'cajero') === undefined;
        this.esCajero = () => false;
        this.trasladoMesa = () => {
            const trasladoRef = this.dialog.open(_traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_3__["TrasladoMesaComponent"], {
                width: '55%',
                data: { mesaEnUso: this.mesaEnUso }
            });
            trasladoRef.afterClosed().subscribe(result => {
                if (result) {
                    this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
                    this.closeSideNavEv.emit(this.mesaEnUso);
                }
            });
        };
        this.getNotasGenerales = () => {
            const ngenDialog = this.dialog.open(_notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_7__["NotasGeneralesComandaComponent"], {
                width: '50%',
                data: { notasGenerales: (this.mesaEnUso.notas_generales || '') }
            });
            ngenDialog.afterClosed().subscribe((notasGen) => {
                if (notasGen !== null) {
                    if (notasGen.trim().length > 0) {
                        this.comandaSrvc.saveNotasGenerales({ comanda: this.mesaEnUso.comanda, notas_generales: notasGen }).subscribe(res => {
                            if (res.exito) {
                                this.mesaEnUso.notas_generales = notasGen;
                                this.snackBar.open(res.mensaje, 'Comanda', { duration: 3000 });
                            }
                            else {
                                this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 7000 });
                            }
                        });
                    }
                }
            });
        };
        this.nuevaCuenta = () => {
            const nuevaCuentaRef = this.dialog.open(_nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_8__["NuevaCuentaComponent"], {
                width: '50%',
                data: { mesaEnUso: this.mesaEnUso }
            });
            nuevaCuentaRef.afterClosed().subscribe(result => {
                if (result) {
                    this.closeSideNavEv.emit();
                }
            });
        };
        this.distribuirProductos = () => {
            const distProdCtaRef = this.dialog.open(_distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_9__["DistribuirProductosCuentasComponent"], {
                width: '50%',
                data: { mesaEnUso: this.mesaEnUso, lstProductos: (this.lstProductosSeleccionados || []) }
            });
            distProdCtaRef.afterClosed().subscribe(result => {
                if (result) {
                    this.closeSideNavEv.emit();
                }
            });
        };
    }
    ngOnInit() {
        this.resetMesaEnUso();
        this.resetLstProductosSeleccionados();
        this.resetLstProductosDeCuenta();
        this.resetCuentaActiva();
        this.impreso = 0;
        this.noComanda = this.mesaEnUso.comanda || 0;
        this.llenaProductosSeleccionados();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid));
        }
        this.usaCodigoBarras = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_USA_CODIGO_BARRAS);
        this.imprimeRecetaEnComanda = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_IMPRIME_RECETA_EN_COMANDA);
        // console.log('MESA EN USO = ', this.mesaEnUso);
    }
    setSelectedCuenta(noCuenta) {
        this.bloqueoBotones = true;
        this.cuentaActiva = this.mesaEnUso.cuentas.find((c) => +c.numero === +noCuenta);
        this.setLstProductosDeCuenta();
        this.bloqueoBotones = false;
    }
    setSumaCuenta(lista) {
        let suma = 0.00;
        // for (let i = 0; i < lista.length; i++) { suma += (lista[i].precio * lista[i].cantidad); }
        for (const item of lista) {
            suma += (item.precio * item.cantidad);
        }
        this.sumCuenta = suma;
    }
    setLstProductosDeCuenta() {
        var _a;
        const noCta = ((_a = this.cuentaActiva) === null || _a === void 0 ? void 0 : _a.numero) || 1;
        this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +noCta);
        // console.log(this.lstProductosDeCuenta);
    }
    agregarProductos(producto) {
        // console.log(producto);
        if (+producto.combo === 1 || +producto.multiple === 1) {
            this.bloqueoBotones = true;
            const confirmRef = this.dialog.open(_shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__["DialogComboComponent"], {
                maxWidth: '50%',
                data: new _shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComboModel"](producto, 'Sí', 'No')
            });
            confirmRef.afterClosed().subscribe((res) => {
                // console.log(res);
                if (res && res.respuesta && res.seleccion.receta.length > 0) {
                    // console.log(res.seleccion); // this.bloqueoBotones = false; return;
                    this.comandaSrvc.saveDetalleCombo(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, res.seleccion).subscribe(resSaveDetCmb => {
                        // console.log('NUEVO DETALLE COMANDA = ', res);
                        if (resSaveDetCmb.exito) {
                            this.mesaEnUso = resSaveDetCmb.comanda;
                            this.llenaProductosSeleccionados(this.mesaEnUso);
                            this.setSelectedCuenta(+this.cuentaActiva.numero);
                        }
                        else {
                            this.snackBar.open(`ERROR:${resSaveDetCmb.mensaje}`, 'Comanda', { duration: 3000 });
                        }
                        this.bloqueoBotones = false;
                    });
                }
                else {
                    this.bloqueoBotones = false;
                    this.snackBar.open('Error, Debe seleccionar los productos del combo', 'Comanda', { duration: 7000 });
                }
            });
        }
        else {
            this.addProductoSelected(producto);
        }
    }
    addProductoSelected(producto) {
        // console.log('PRODUCTO = ', producto);
        // return;
        this.bloqueoBotones = true;
        if (+this.cuentaActiva.numero) {
            const idx = this.lstProductosSeleccionados
                .findIndex(p => +p.id === +producto.id && +p.cuenta === +this.cuentaActiva.numero && +p.impreso === 0);
            if (idx < 0) {
                this.detalleComanda = {
                    articulo: producto.id, cantidad: 1, precio: +producto.precio, total: 1 * +producto.precio, notas: ''
                };
                this.comandaSrvc.saveDetalle(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, this.detalleComanda).subscribe(res => {
                    // console.log('NUEVO DETALLE COMANDA = ', res);
                    if (res.exito) {
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this.snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
                    this.bloqueoBotones = false;
                });
            }
            else {
                const tmp = this.lstProductosSeleccionados[idx];
                this.detalleComanda = {
                    detalle_cuenta: tmp.detalle_cuenta, detalle_comanda: tmp.detalle_comanda, articulo: tmp.id, cantidad: (+tmp.cantidad) + 1,
                    precio: +tmp.precio, total: ((+tmp.cantidad) + 1) * (+tmp.precio), notas: tmp.notas
                };
                this.comandaSrvc.saveDetalle(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, this.detalleComanda).subscribe(res => {
                    // console.log('UPDATE DETALLE COMANDA = ', res);
                    if (res.exito) {
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this.snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
                    this.bloqueoBotones = false;
                });
            }
            this.setLstProductosDeCuenta();
        }
    }
    updProductosCuenta(obj) {
        const nvaLista = obj.listaProductos || [];
        const lstTemp = this.lstProductosSeleccionados.filter(p => +p.cuenta !== +this.cuentaActiva.numero);
        if (nvaLista.length > 0) {
            this.lstProductosSeleccionados = lstTemp.concat(nvaLista);
        }
        else {
            this.lstProductosSeleccionados = lstTemp;
        }
        if (obj.comanda) {
            this.mesaEnUso = obj.comanda;
            this.llenaProductosSeleccionados(this.mesaEnUso);
            this.setSelectedCuenta(+this.cuentaActiva.numero);
        }
    }
    prepProductosComanda(prods) {
        // console.log(prods);
        const tmp = [];
        for (let i = 0; i < prods.length; i++) {
            tmp.push({
                articulo: prods[i].id,
                cantidad: prods[i].cantidad,
                precio: prods[i].precio,
                total: prods[i].total,
                notas: prods[i].notas,
                impreso: 1,
                detalle_comanda: prods[i].detalle_comanda,
                detalle_cuenta: prods[i].detalle_cuenta,
            });
        }
        return tmp;
    }
    validarImpresion(toPdf = false) {
        const ingresarPedido = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_INGRESO_NUMERO_PEDIDO);
        // this.mesaEnUso.mesa.esmostrador;
        // console.log(this.mesaEnUso);
        if (+this.mesaEnUso.mesa.esmostrador === 1 && ingresarPedido && !this.mesaEnUso.numero_pedido) {
            let pedidos = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_TOTAL_NUMEROS_PEDIDO);
            if (!pedidos || pedidos <= 0) {
                pedidos = 30;
            }
            const confirmRef = this.dialog.open(_shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__["DialogPedidoComponent"], {
                maxWidth: '50%',
                data: new _shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Numero de Pedido', pedidos, 'Sí', 'No')
            });
            confirmRef.afterClosed().subscribe((conf) => {
                // console.log(conf);
                if (conf && conf.respuesta && conf.pedido) {
                    this.mesaEnUso.numero_pedido = conf.pedido;
                    this.printComanda(toPdf);
                }
                else {
                    this.snackBar.open('Error, Debe seleccionar un numero de pedido', 'Comanda', { duration: 7000 });
                }
            });
        }
        else {
            this.printComanda(toPdf);
        }
    }
    printComanda(toPdf = false) {
        // solicitar numero de pedido
        const meu = JSON.parse(JSON.stringify(this.mesaEnUso));
        this.bloqueoBotones = true;
        this.impreso = 0;
        const modoComanda = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_MODO_COMANDA) || 1;
        for (let i = 0; i < meu.cuentas.length; i++) {
            const cuenta = meu.cuentas[i];
            // console.log(cuenta);
            this.cuentaActiva = meu.cuentas.find((c) => +c.numero === +cuenta.numero);
            const lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +this.cuentaActiva.numero);
            const lstProductosAImprimir = lstProductosDeCuenta.filter(p => +p.impreso === 0 && +p.cantidad > 0);
            if (lstProductosAImprimir.length > 0) {
                lstProductosDeCuenta.map(p => p.impreso = 1);
                this.noComanda = meu.comanda;
                // console.log(this.cuentaActiva.cuenta);
                this.cuentaActiva.productos = this.prepProductosComanda(lstProductosDeCuenta);
                const idxCta = meu.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
                // console.log(meu.cuentas)
                // console.log(idxCta)
                if (idxCta > -1) {
                    // meu.cuentas[idxCta] = this.cuentaActiva;
                    const objCmd = {
                        area: meu.mesa.area.area,
                        mesa: meu.mesa.mesa,
                        mesero: meu.mesero.usuario,
                        comanda: meu.comanda,
                        cuentas: meu.cuentas,
                        numero_pedido: meu.numero_pedido
                    };
                    // console.log('Comanda a guardar = ', objCmd);
                    this.comandaSrvc.save(objCmd).subscribe((res) => {
                        // console.log('Respuesta del save = ', res);
                        if (res.exito) {
                            meu.numero_pedido = res.comanda.numero_pedido;
                            // console.log(this.cuentaActiva);
                            this.comandaSrvc.setProductoImpreso(cuenta.cuenta).subscribe(resImp => {
                                // console.log('Respuesta de poner impreso = ', resImp);
                                if (resImp.exito) {
                                    this.impreso++;
                                }
                                this.llenaProductosSeleccionados(resImp.comanda);
                                this.setSelectedCuenta(cuenta.numero);
                                this.snackBar.open('Cuenta actualizada', `Cuenta #${cuenta.numero}`, { duration: 3000 });
                                // Inicio de impresión de comanda
                                let AImpresoraNormal = [];
                                let AImpresoraBT = [];
                                try {
                                    AImpresoraNormal = lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 0);
                                    AImpresoraBT = lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 1);
                                    // console.log('PRODUCTOS A IMPRIMIR = ', lstProductosAImprimir);
                                }
                                catch (error) {
                                    console.log('PRODUCTOS A IMPRIMIR = ', lstProductosAImprimir);
                                    console.log('NORMAL = ', AImpresoraNormal);
                                    console.log('BT = ', AImpresoraBT);
                                    console.log(error);
                                }
                                if (!toPdf) {
                                    if (AImpresoraNormal.length > 0) {
                                        if (modoComanda !== 3) {
                                            if (!this.imprimeRecetaEnComanda) {
                                                AImpresoraNormal.map(d => {
                                                    if (+d.combo === 0 && +d.esreceta === 1) {
                                                        d.detalle = [];
                                                    }
                                                    return d;
                                                });
                                            }
                                            this.socket.emit('print:comanda', `${JSON.stringify({
                                                Tipo: 'Comanda',
                                                Nombre: this.cuentaActiva.nombre,
                                                Numero: this.noComanda,
                                                DetalleCuenta: AImpresoraNormal,
                                                Ubicacion: `${meu.mesa.area.nombre} - Mesa ${meu.mesa.etiqueta || meu.mesa.numero}`,
                                                Mesero: `${meu.mesero.nombres} ${meu.mesero.apellidos}`,
                                                Total: null,
                                                NumeroPedido: meu.numero_pedido,
                                                NotasGenerales: (meu.notas_generales || '')
                                            })}`);
                                            this.snackBar.open(`Imprimiendo comanda #${this.noComanda}`, 'Comanda', { duration: 7000 });
                                        }
                                        else {
                                            this.snackBar.open(`Comanda #${this.noComanda} enviada a cocina`, 'Comanda', { duration: 7000 });
                                        }
                                        this.bloqueoBotones = false;
                                        // console.log("imprimiendo")
                                    }
                                    if (AImpresoraBT.length > 0) {
                                        if (modoComanda !== 3) {
                                            if (!this.imprimeRecetaEnComanda) {
                                                AImpresoraBT.map(d => {
                                                    if (+d.combo === 0 && +d.esreceta === 1) {
                                                        d.detalle = [];
                                                    }
                                                    return d;
                                                });
                                            }
                                            this.printToBT(JSON.stringify({
                                                Tipo: 'Comanda',
                                                Nombre: this.cuentaActiva.nombre,
                                                Numero: this.noComanda,
                                                DetalleCuenta: AImpresoraBT,
                                                Ubicacion: `${meu.mesa.area.nombre} - Mesa ${meu.mesa.etiqueta || meu.mesa.numero}`,
                                                Mesero: `${meu.mesero.nombres} ${meu.mesero.apellidos}`,
                                                Total: null,
                                                NumeroPedido: meu.numero_pedido
                                            }));
                                        }
                                    }
                                }
                                else {
                                    this.printComandaPDF();
                                }
                                if (+this.impreso === meu.cuentas.length) {
                                    this.impreso = 0;
                                    this.socket.emit('refrescar:mesa', { mesaenuso: meu });
                                    this.socket.emit('refrescar:listaCocina', { mesaenuso: meu });
                                    if (+meu.mesa.esmostrador === 0) {
                                        this.closeSideNavEv.emit();
                                    }
                                    else {
                                        this.cobrarCuenta();
                                    }
                                }
                                // Fin de impresión de comanda
                            });
                        }
                        else {
                            this.snackBar.open(`ERROR: ${res.mensaje}`, `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                        }
                        this.bloqueoBotones = false;
                    });
                }
            }
            else {
                this.impreso++;
                // this.snackBar.open('Nada para enviar...', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                this.bloqueoBotones = false;
            }
        }
        // console.log('Productos a imprimir = ', this.lstProductosAImprimir);
    }
    printCuenta() {
        this.bloqueoBotones = true;
        this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
        // console.log(this.lstProductosAImprimir);
        if (this.lstProductosAImprimir.length > 0) {
            this.setSumaCuenta(this.lstProductosAImprimir);
            const totalCuenta = this.sumaDetalle(this.lstProductosAImprimir);
            const printerToUse = this.mesaEnUso.mesa.impresora || this.mesaEnUso.mesa.area.impresora;
            const imprimePropSugerida = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_IMPRIME_PROPINA_SUGERIDA);
            const msgToPrint = {
                Tipo: 'Cuenta',
                Nombre: this.cuentaActiva.nombre,
                Numero: null,
                DetalleCuenta: this.lstProductosAImprimir,
                Total: totalCuenta,
                Empresa: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).empresa,
                Restaurante: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).restaurante,
                PropinaSugerida: imprimePropSugerida ? (totalCuenta * 0.10).toFixed(2) : null,
                Impresora: printerToUse,
                Ubicacion: `${this.mesaEnUso.mesa.area.nombre} - Mesa ${this.mesaEnUso.mesa.etiqueta || this.mesaEnUso.mesa.numero} - Comanda ${this.mesaEnUso.comanda}`,
                Mesero: `${this.mesaEnUso.mesero.nombres} ${this.mesaEnUso.mesero.apellidos}`
            };
            if (+printerToUse.bluetooth === 0) {
                this.socket.emit(`print:cuenta`, `${JSON.stringify(msgToPrint)}`);
            }
            else {
                this.printToBT(JSON.stringify(msgToPrint));
            }
            this.snackBar.open(`Imprimiendo cuenta de ${this.cuentaActiva.nombre}`, 'Cuenta', { duration: 7000 });
            this.closeSideNavEv.emit();
        }
        else {
            this.snackBar.open(`La cuenta de ${this.cuentaActiva.nombre} no tiene ningún artículo.`, 'Cuenta', { duration: 7000 });
        }
        this.bloqueoBotones = false;
    }
    unirCuentas() {
        const unirCuentaRef = this.dialog.open(_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_2__["UnirCuentaComponent"], {
            width: '55%',
            data: { lstProductosSeleccionados: this.lstProductosSeleccionados, mesaEnUso: this.mesaEnUso }
        });
        unirCuentaRef.afterClosed().subscribe(result => {
            if (result) {
                this.closeSideNavEv.emit();
            }
        });
    }
    cobrarCuenta() {
        this.comandaSrvc.getCuenta(this.cuentaActiva.cuenta).subscribe(res => {
            if (res.pendiente.length > 0) {
                this.snackBar.open('Cobro', 'Tiene productos sin comandar', { duration: 3000 });
            }
            else {
                const productosACobrar = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
                if (productosACobrar.length > 0) {
                    const cobrarCtaRef = this.dialog.open(_pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_4__["CobrarPedidoComponent"], {
                        width: '95%',
                        data: {
                            mesaenuso: this.mesaEnUso,
                            cuenta: this.cuentaActiva.nombre,
                            idcuenta: this.cuentaActiva.cuenta,
                            productosACobrar,
                            porcentajePropina: 0.00,
                            impresora: +this.mesaEnUso.mesa.esmostrador === 0 ?
                                (this.mesaEnUso.mesa.area.impresora_factura || null) :
                                (this.mesaEnUso.mesa.impresora || this.mesaEnUso.mesa.area.impresora),
                            clientePedido: this.clientePedido
                        }
                    });
                    cobrarCtaRef.afterClosed().subscribe(resAC => {
                        // console.log(resAC);
                        if (resAC && resAC !== 'closePanel') {
                            // console.log(res);
                            this.cambiarEstatusCuenta(resAC);
                            this.closeSideNavEv.emit(this.mesaEnUso);
                        }
                        else {
                            if (resAC === 'closePanel') {
                                this.closeSideNavEv.emit();
                            }
                        }
                    });
                }
                else {
                    this.snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
                }
            }
        });
    }
}
TranComandaComponent.ɵfac = function TranComandaComponent_Factory(t) { return new (t || TranComandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_13__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_15__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_16__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_17__["ConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_18__["ArticuloService"])); };
TranComandaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TranComandaComponent, selectors: [["app-tran-comanda"]], viewQuery: function TranComandaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appLstProdAlt = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.txtCodigoBarras = _t.first);
    } }, inputs: { mesaEnUso: "mesaEnUso", clientePedido: "clientePedido" }, outputs: { closeSideNavEv: "closeSideNavEv", mesaSavedEv: "mesaSavedEv" }, decls: 43, vars: 19, consts: [["fxLayout", "row", "fxLayout.xs", "column"], ["fxFlex", "50%", "fxFelx.xs", "100%", "fxLayoutAlign", "center start"], ["class", "bld", "style", "font-size: 16pt; margin-left: 10px;", 4, "ngIf"], ["fxFlex", "50%", "fxFelx.xs", "100%", "fxLayoutAlign", "end start"], ["mat-raised-button", "", "type", "button", "color", "accent", 2, "margin-left", "8px", 3, "disabled", "click"], [1, "divFullSize"], [1, "row"], ["class", "col m12 s12", "align", "center", "style", "padding: 0 !important;", 4, "ngIf"], ["align", "center", 1, "col", "m6", "s12", 2, "padding", "0 !important"], [1, "bld"], ["class", "fullWidth", "style", "margin-left: 10px; margin-right: 10px;", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "bld", 4, "ngIf"], ["align", "center"], ["direction", "down"], ["mat-fab", "", "color", "warn"], [2, "font-size", "18pt !important"], ["mat-mini-fab", "", "type", "button", "color", "warn", 1, "btnAccion", "btnAccionComanda", 3, "disabled", "click"], ["mat-mini-fab", "", "type", "button", "color", "warn", "class", "btnAccion btnAccionComanda", 3, "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", "type", "button", "color", "warn", "class", "btnAccionComanda", 3, "click", 4, "ngIf"], [1, "col", "m6", "s12", "mat-elevation-z3", "colProductos"], [3, "bloqueoBotones", "productoClickedEv", "categoriasFilledEv"], ["appLstProdAlt", ""], [3, "listaProductos", "noCuenta", "IdComanda", "IdCuenta", "bloqueoBotones", "mesaEnUso", "productoRemovedEv", 4, "ngIf"], [1, "bld", 2, "font-size", "16pt", "margin-left", "10px"], ["align", "center", 1, "col", "m12", "s12", 2, "padding", "0 !important"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "class", "btnAccion", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", 1, "btnAccion", 3, "click"], [1, "fullWidth", 2, "margin-left", "10px", "margin-right", "10px"], ["matInput", "", "cdkFocusInitial", "", "ngxBarCodePut", "", "type", "text", "placeholder", "C\u00F3digo", "name", "codigoBarras", 3, "ngModel", "ngModelOptions", "ngModelChange", "onDetected"], ["txtCodigoBarras", "matInput"], ["mat-raised-button", "", "class", "btnAccion", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-mini-fab", "", "type", "button", "color", "warn", 1, "btnAccionComanda", 3, "click"], [3, "listaProductos", "noCuenta", "IdComanda", "IdCuenta", "bloqueoBotones", "mesaEnUso", "productoRemovedEv"]], template: function TranComandaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TranComandaComponent_span_2_Template, 2, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_Template_button_click_4_listener() { return ctx.closeSideNavEv.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cerrar Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TranComandaComponent_div_8_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TranComandaComponent_mat_form_field_14_Template, 3, 3, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TranComandaComponent_br_15_Template, 1, 0, "br", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TranComandaComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TranComandaComponent_span_18_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TranComandaComponent_span_19_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "eco-fab-speed-dial", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "eco-fab-speed-dial-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "eco-fab-speed-dial-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranComandaComponent_Template_button_click_27_listener() { return ctx.getNotasGenerales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Notas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TranComandaComponent_button_29_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TranComandaComponent_button_30_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TranComandaComponent_button_31_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TranComandaComponent_button_32_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TranComandaComponent_button_33_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TranComandaComponent_button_34_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TranComandaComponent_button_35_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TranComandaComponent_button_36_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-lista-producto-alt", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productoClickedEv", function TranComandaComponent_Template_app_lista_producto_alt_productoClickedEv_39_listener($event) { return ctx.agregarProductos($event); })("categoriasFilledEv", function TranComandaComponent_Template_app_lista_producto_alt_categoriasFilledEv_39_listener($event) { return ctx.setListaCategorias($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TranComandaComponent_app_lista_productos_comanda_42_Template, 1, 6, "app-lista-productos-comanda", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usaCodigoBarras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usaCodigoBarras);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cuentaActiva && ctx.cuentaActiva.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cuentaActiva || !ctx.cuentaActiva.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cuentaActiva && ctx.mesaEnUso && +ctx.mesaEnUso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cuentaActiva && ctx.mesaEnUso && +ctx.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso && +ctx.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso && +ctx.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cuentaActiva && ctx.mesaEnUso && +ctx.mesaEnUso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cuentaActiva && ctx.mesaEnUso && +ctx.mesaEnUso.mesa.escallcenter === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso && +ctx.mesaEnUso.mesa.esmostrador === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso && ctx.lstProductosSeleccionados.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bloqueoBotones", ctx.bloqueoBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mesaEnUso && ctx.cuentaActiva);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_22__["EcoFabSpeedDialComponent"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_22__["EcoFabSpeedDialTriggerComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_22__["EcoFabSpeedDialActionsComponent"], _wms_components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_24__["ListaProductoAltComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["DefaultValueAccessor"], ngx_barcodeput__WEBPACK_IMPORTED_MODULE_28__["NgxBarCodePutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__["NgModel"], _lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_29__["ListaProductosComandaComponent"]], styles: [".divFullSize[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    overflow-y: hidden;\n    \n}\n\n.col[_ngcontent-%COMP%] {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n\n.btnAccionComanda[_ngcontent-%COMP%] {\n    width: 135px;\n}\n\n.colProductos[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    height: 450px !important;\n}\n\n@media (max-width: 400px) {\n    .colProductos[_ngcontent-%COMP%] {     \n        height: 300px !important;\n    }\n}\n\n@media (min-width: 401px) and (max-width: 1024px) {\n    .colProductos[_ngcontent-%COMP%] {     \n        height: 450px !important;\n    }\n}\n\n@media (min-height: 985px) {\n    .colProductos[_ngcontent-%COMP%] {     \n        height: 600px !important;\n    }\n}\n\n@media (max-height: 768px) {\n    .colProductos[_ngcontent-%COMP%] {     \n        height: 400px !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW4tY29tYW5kYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJ0cmFuLWNvbWFuZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZGdWxsU2l6ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAvKmJvcmRlcjogMXB4IGJsYWNrIGRvdHRlZDsqL1xufVxuXG4uY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi5idG5BY2Npb25Db21hbmRhIHtcbiAgICB3aWR0aDogMTM1cHg7XG59XG5cbi5jb2xQcm9kdWN0b3Mge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAuY29sUHJvZHVjdG9zIHsgICAgIFxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuY29sUHJvZHVjdG9zIHsgICAgIFxuICAgICAgICBoZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDk4NXB4KSB7XG4gICAgLmNvbFByb2R1Y3RvcyB7ICAgICBcbiAgICAgICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgIC5jb2xQcm9kdWN0b3MgeyAgICAgXG4gICAgICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "pY9A":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-barcodeput/__ivy_ngcc__/fesm2015/ngx-barcodeput.js ***!
  \*****************************************************************************/
/*! exports provided: NgxBarCodePutDirective, NgxBarCodePutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBarCodePutDirective", function() { return NgxBarCodePutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBarCodePutModule", function() { return NgxBarCodePutModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class NgxBarCodePutDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Input delay
         */
        this.debounce = 0;
        /**
         * After how many characters start search
         */
        this.skipStart = 0;
        /**
         * Data cleansing event
         */
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event after data entry
         */
        this.onDetected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Use for unsubscribe
         */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngAfterViewInit() {
        /**
         * Often the code scanner is connected to the computer.
         * It emulates a press key, so we use keyboard events to press and release keys.
         */
        const events = ['keydown', 'keyup'];
        /**
         * Empty object for delay logic
         */
        const pressed = {};
        /**
         * Look at the
         * {@Link http://reactivex.io/documentation/operators/from.html}
         */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(events)
            .pipe(
        /**
         * Look at the
         * {@Link https://rxjs-dev.firebaseapp.com/api/operators/mergeMap}
         */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((event) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.elementRef.nativeElement, event)), 
        /**
         * Prepare input data
         */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => {
            switch (event.type) {
                case 'keydown':
                    /**
                     * Since "which" is deprecated, we use it for a temporary variable
                     * and set the processing time keydown.
                     */
                    pressed[event.which] = event.timeStamp;
                    break;
                case 'keyup':
                    /**
                     * In the delay set the difference between keydown and keyup events.
                     */
                    Object.assign(event, { duration: (event.timeStamp - pressed[event.which]) / 1000 });
                    break;
            }
            /**
             * @return {event: KeyboardEvent}
             */
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => {
            if (event.keyCode === 8 || event.code === 'Backspace' || event.which === 8) {
                /**
                 * Used to clear data.
                 */
                this.onDelete.emit({ event, value: event.target.value, type: 'delete' });
            }
            /**
             * Return data after typed in two characters.
             */
            return event.target.value.length > this.skipStart;
        }), 
        /**
         * Data entry delay is used to limit requests.
         */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(this.debounce), 
        /**
         * Look at the
         * {@Link http://reactivex.io/documentation/operators/distinct.html}
         */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            /**
             * Use for unsubscribe
             */
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            /**
             * Subscribe to the input data and determine the delay time for our purposes.
             */
            .subscribe((event) => {
            if (event.duration > 0.02) {
                /**
                 * Keyboard input.
                 */
                this.onDetected.emit({ event, value: event.target.value, time: event.duration, type: 'keyboard' });
            }
            else if (event.duration <= 0.02) {
                /**
                 * Input from the scanner.
                 */
                this.onDetected.emit({ event, value: event.target.value, time: event.duration, type: 'scanner' });
            }
        });
    }
    /**
     * Use for unsubscribe
     */
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
NgxBarCodePutDirective.ɵfac = function NgxBarCodePutDirective_Factory(t) { return new (t || NgxBarCodePutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NgxBarCodePutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NgxBarCodePutDirective, selectors: [["", "ngxBarCodePut", ""]], inputs: { debounce: "debounce", skipStart: "skipStart" }, outputs: { onDelete: "onDelete", onDetected: "onDetected" } });
NgxBarCodePutDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NgxBarCodePutDirective.propDecorators = {
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    skipStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    onDetected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxBarCodePutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxBarCodePut]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], skipStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onDetected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();

class NgxBarCodePutModule {
}
NgxBarCodePutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NgxBarCodePutModule });
NgxBarCodePutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NgxBarCodePutModule_Factory(t) { return new (t || NgxBarCodePutModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxBarCodePutModule, { declarations: [NgxBarCodePutDirective], exports: [NgxBarCodePutDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxBarCodePutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NgxBarCodePutDirective],
                exports: [NgxBarCodePutDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-barcodeput
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-barcodeput.js.map

/***/ }),

/***/ "qD6S":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PorCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorCategoriaComponent", function() { return PorCategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const art_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](art_r7.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, art_r7.cantidad, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, art_r7.porcentaje, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 11, art_r7.precio_unitario, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 14, art_r7.total, "1.2-2"));
} }
function PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_ng_container_1_ng_container_4_Template, 16, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total de subcategor\u00EDa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subcat_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subcat_r4.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subcat_r4.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, subcat_r4.total, "1.2-2"));
} }
function PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_ng_container_1_Template, 11, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subcat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subcat_r4.articulos.length > 0);
} }
function PorCategoriaComponent_ng_container_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PorCategoriaComponent_ng_container_25_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r1.subcategoria);
} }
function PorCategoriaComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PorCategoriaComponent_ng_container_25_ng_container_1_Template, 5, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cat_r1.subcategoria.length > 0);
} }
class PorCategoriaComponent {
    constructor() {
        this.params = {};
        this.data = [];
    }
    ngOnInit() {
    }
}
PorCategoriaComponent.ɵfac = function PorCategoriaComponent_Factory(t) { return new (t || PorCategoriaComponent)(); };
PorCategoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PorCategoriaComponent, selectors: [["app-por-categoria"]], inputs: { params: "params", data: "data" }, decls: 26, vars: 9, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "tbl"], [1, "brdTSingleBSingle"], [1, "rtxt", "numWidth", "brdTSingleBSingle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "5"], ["colspan", "5", 1, "tab"], ["colspan", "4", 1, "rtxt"], [1, "rtxt", "brdTSingleBDouble", "numWidth"], [1, "doubleTab", "brdBSingle"], [1, "rtxt", "numWidth", "brdBSingle"]], template: function PorCategoriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reporte de ventas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Por categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Porcentaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Precio unitario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PorCategoriaComponent_ng_container_25_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Del ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx.params.fdel, "dd/MM/yyyy"), " al ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.params.fal, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".numWidth[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    border: none;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvci1jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InBvci1jYXRlZ29yaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1XaWR0aCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "qh9x":
/*!**********************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CajacorteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteFormComponent", function() { return CajacorteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cajacorte.service */ "Gbtp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");















function CajacorteFormComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r5.caja_corte_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r5.descripcion, " ");
} }
function CajacorteFormComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r6.caja_corte_nominacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r6.nombre, " ");
} }
function CajacorteFormComponent_mat_grid_list_42_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajacorteFormComponent_mat_grid_list_42_Template_mat_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const m_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.anularCajaDetalle(m_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7.total);
} }
function CajacorteFormComponent_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajacorteFormComponent_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.reseteGeneral(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CajacorteFormComponent {
    constructor(_snackBar, cajacorteSrvc) {
        this._snackBar = _snackBar;
        this.cajacorteSrvc = cajacorteSrvc;
        this.cajacorteSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ccorteTipo = [];
        this.ccorteNomi = [];
        this.detalle = {
            caja_corte_detalle: 0,
            caja_corte: 0,
            cantidad: 0,
            total: 0,
            anulado: 0,
            caja_corte_nominacion: 0,
            nombre: null
        };
        this.getCajaCorteTipo = () => {
            this.cajacorteSrvc.getCajaCorteTipo().subscribe(res => {
                this.ccorteTipo = res;
            });
        };
        this.getCajaCorteNominacion = () => {
            this.cajacorteSrvc.getCajaCorteNominacion().subscribe(res => {
                this.ccorteNomi = res;
            });
        };
        this.setTotal = () => {
            if (this.detalle.caja_corte_nominacion) {
                let tmp = this.ccorteNomi.filter(o => {
                    return o.caja_corte_nominacion == this.detalle.caja_corte_nominacion;
                })[0];
                if (tmp.calcula == 1) {
                    this.detalle.total = this.detalle.cantidad * tmp.valor;
                }
                else {
                    this.detalle.total = this.detalle.cantidad;
                }
            }
        };
        this.setNamenomi = () => {
            let tmp = this.ccorteNomi.filter(o => {
                return o.caja_corte_nominacion == this.detalle.caja_corte_nominacion;
            })[0];
            console.log(tmp, this.detalle.caja_corte_nominacion);
            this.detalle.nombre = tmp.nombre;
        };
        this.setNameTipo = () => {
            let tmp = this.ccorteTipo.filter(o => {
                return o.caja_corte_tipo == this.ccorte.caja_corte_tipo;
            })[0];
            console.log(tmp, this.ccorte.caja_corte_tipo);
            this.ccorte.descripcion = tmp.descripcion;
        };
        this.reseteGeneral = () => this.ccorte = {
            caja_corte: 0,
            creacion: null,
            usuario: 0,
            turno: 0,
            confirmado: null,
            anulado: 0,
            caja_corte_tipo: 0,
            descripcion: null,
            detalle: []
        };
        this.resetDetalle = () => this.detalle = {
            caja_corte_detalle: 0,
            caja_corte: 0,
            cantidad: 0,
            total: 0,
            anulado: 0,
            caja_corte_nominacion: 0,
            nombre: null
        };
        this.agregarDetalle = () => {
            if (this.detalle.caja_corte_nominacion &&
                this.detalle.cantidad &&
                this.detalle.total) {
                this.ccorte.detalle.push(this.detalle);
                this.resetDetalle();
            }
            else {
                this._snackBar.open(`Complete los datos de nominaciones`, 'Corte de caja', { duration: 3000 });
            }
        };
        this.guardar = () => {
            if (confirm('¿Está seguro?')) {
                if (this.ccorte.detalle.length == 0) {
                    this._snackBar.open(`Por favor agregue las nominaciones`, 'Corte de caja', { duration: 3000 });
                    return false;
                }
                if (!this.ccorte.caja_corte_tipo) {
                    this._snackBar.open(`Seleccione el tipo de corte de caja.`, 'Corte de caja', { duration: 3000 });
                    return false;
                }
                this.cajacorteSrvc.guardar(this.ccorte).subscribe(res => {
                    if (res.exito) {
                        this.cajacorteSavedEv.emit();
                        this.reseteGeneral();
                    }
                    this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
                });
            }
        };
        this.anularCajaDetalle = (obj) => {
            if (confirm('¿Está seguro.?')) {
                if (obj.caja_corte_detalle) {
                    this.cajacorteSrvc.anularDetalle(obj).subscribe(res => {
                        if (res.exito) {
                            let key = this.ccorte.detalle.indexOf(obj);
                            this.ccorte.detalle.splice(key, 1);
                        }
                        this._snackBar.open(`${res.mensaje}`, 'Corte de caja', { duration: 3000 });
                    });
                }
                else {
                    let key = this.ccorte.detalle.indexOf(obj);
                    this.ccorte.detalle.splice(key, 1);
                }
            }
        };
    }
    ngOnInit() {
        this.getCajaCorteTipo();
        this.getCajaCorteNominacion();
    }
}
CajacorteFormComponent.ɵfac = function CajacorteFormComponent_Factory(t) { return new (t || CajacorteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cajacorte_service__WEBPACK_IMPORTED_MODULE_2__["CajacorteService"])); };
CajacorteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CajacorteFormComponent, selectors: [["app-cajacorte-form"]], inputs: { ccorte: "ccorte" }, outputs: { cajacorteSavedEv: "cajacorteSavedEv" }, decls: 49, vars: 9, consts: [[1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmcc", "ngForm"], [1, "fullWidth"], ["name", "tipo", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-container"], ["name", "nominacion", 3, "ngModel", "ngModelChange", "selectionChange"], ["matInput", "", "type", "number", "step", "0.01", "name", "cantidad", 3, "ngModel", "ngModelChange", "blur"], ["matInput", "", "type", "number", "step", "0.01", "name", "total", "readonly", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "type", "button", "color", "accent", "title", "Agregar el detalle", 3, "click"], ["cols", "4", "rowHeight", "7:1"], ["cols", "4", "rowHeight", "7:1", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "type", "submit", "color", "accent", "title", "Guardar corte de caja", 3, "disabled"], [3, "value"], ["mat-list-icon", "", 1, "anulacion", 3, "click"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"]], template: function CajacorteFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Corte de caja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CajacorteFormComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tipo de Corte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CajacorteFormComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.ccorte.caja_corte_tipo = $event; })("selectionChange", function CajacorteFormComponent_Template_mat_select_selectionChange_10_listener() { return ctx.setNameTipo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CajacorteFormComponent_mat_option_11_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Agregar nominaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nominaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CajacorteFormComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.detalle.caja_corte_nominacion = $event; })("selectionChange", function CajacorteFormComponent_Template_mat_select_selectionChange_18_listener() { return ctx.setNamenomi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CajacorteFormComponent_mat_option_19_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cantidad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CajacorteFormComponent_Template_input_ngModelChange_23_listener($event) { return ctx.detalle.cantidad = $event; })("blur", function CajacorteFormComponent_Template_input_blur_23_listener() { return ctx.setTotal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CajacorteFormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.detalle.total = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajacorteFormComponent_Template_button_click_28_listener() { return ctx.agregarDetalle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-grid-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nominaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CajacorteFormComponent_mat_grid_list_42_Template, 10, 3, "mat-grid-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CajacorteFormComponent_button_45_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ccorte.caja_corte_tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ccorteTipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detalle.caja_corte_nominacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ccorteNomi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detalle.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detalle.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ccorte.detalle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ccorte.caja_corte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListIconCssMatStyler"]], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.anulacion[_ngcontent-%COMP%] {\n\tcursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhamFjb3J0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6ImNhamFjb3J0ZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxubWF0LWdyaWQtdGlsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbnVsYWNpb24ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "r2eK":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComandaEnLineaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandaEnLineaComponent", function() { return ComandaEnLineaComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _pos_services_factura_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pos/services/factura.service */ "KFbY");
/* harmony import */ var _shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/desktop-notification.service */ "+iZS");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/reporte-pdf.service */ "FHMA");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var _ghost_kitchen_services_orden_gk_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ghost-kitchen/services/orden-gk.service */ "u0wK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function ComandaEnLineaComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", element_r20.comanda, " ");
} }
function ComandaEnLineaComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r21.origen_datos.numero_orden || "");
} }
function ComandaEnLineaComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Fecha/Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r22.fhcreacion, "dd/MM/yyyy HH:mm:ss") || "");
} }
function ComandaEnLineaComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r23.cuentas[0].nombre);
} }
function ComandaEnLineaComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r24.total, "1.2-2"));
} }
function ComandaEnLineaComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Imprimir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComandaEnLineaComponent_td_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const element_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.imprimir(element_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Imprimir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComandaEnLineaComponent_td_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const element_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.cancelarPedido(element_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Facturar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComandaEnLineaComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.firmar(element_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Facturar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComandaEnLineaComponent_td_28_h6_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Orden #", element_r34.origen_datos.numero_orden, "");
} }
function ComandaEnLineaComponent_td_28_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r34.notas_generales);
} }
function ComandaEnLineaComponent_td_28_ng_container_14_br_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br");
} }
function ComandaEnLineaComponent_td_28_ng_container_14_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const det_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0", det_r40.notas, "");
} }
function ComandaEnLineaComponent_td_28_ng_container_14_ng_container_9_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dc_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", dc_r45, " ");
} }
function ComandaEnLineaComponent_td_28_ng_container_14_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ComandaEnLineaComponent_td_28_ng_container_14_ng_container_9_tr_1_Template, 3, 1, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const dc_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", dc_r45.length > 0);
} }
function ComandaEnLineaComponent_td_28_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ComandaEnLineaComponent_td_28_ng_container_14_br_4_Template, 1, 0, "br", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ComandaEnLineaComponent_td_28_ng_container_14_span_5_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ComandaEnLineaComponent_td_28_ng_container_14_ng_container_9_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const det_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", det_r40.cantidad, " ", det_r40.articulo.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", det_r40.notas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", det_r40.notas.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 6, +det_r40.precio * +det_r40.cantidad + +det_r40.monto_extra, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", det_r40.detalle);
} }
function ComandaEnLineaComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ComandaEnLineaComponent_td_28_h6_6_Template, 2, 1, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ComandaEnLineaComponent_td_28_tr_13_Template, 4, 1, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ComandaEnLineaComponent_td_28_ng_container_14_Template, 10, 9, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r16.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@detailExpand", element_r34 == ctx_r16.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Detalle del pedido #", element_r34.comanda, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r34.origen_datos.numero_orden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r34.notas_generales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r34.cuentas[0].productos);
} }
function ComandaEnLineaComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 32);
} }
function ComandaEnLineaComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComandaEnLineaComponent_tr_30_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const element_r48 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r49.expandedElement = ctx_r49.expandedElement === element_r48 ? null : element_r48; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("example-expanded-row", ctx_r18.expandedElement === element_r48);
} }
function ComandaEnLineaComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
const _c0 = function () { return ["expandedDetail"]; };
class ComandaEnLineaComponent {
    constructor(dialog, snackBar, socket, ls, comandaSrvc, facturaSrvc, dns, pdfServicio, configSrvc, ordenGkSrvc) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.socket = socket;
        this.ls = ls;
        this.comandaSrvc = comandaSrvc;
        this.facturaSrvc = facturaSrvc;
        this.dns = dns;
        this.pdfServicio = pdfServicio;
        this.configSrvc = configSrvc;
        this.ordenGkSrvc = ordenGkSrvc;
        this.dataSource = [];
        this.columnsToDisplay = ['comanda', 'orden', 'fechahora', 'nombre', 'total', 'imprimir', 'cancelar', 'facturar'];
        this.comandasEnLinea = [];
        // public intervalId: any;
        this.params = { de: 0, a: 99 };
        this.avisoSocketIOEvent = (aviso = '') => {
            const confirmRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Socket.IO', aviso, 'Aceptar', 'Cancelar')
            });
            confirmRef.afterClosed().subscribe((confirma) => { });
        };
        this.notificarUsuario = () => {
            const opciones = {
                icon: 'assets/img/minilogo.png',
                body: `Se recibió una nueva orden a las ${moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dateTimeFormat)}.`,
                dir: 'auto'
            };
            this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
        };
        this.loadComandasEnLinea = () => {
            this.comandaSrvc.getComandasOnLIne().subscribe((res) => {
                /*this.comandasEnLinea = res.map(cel => {
                  cel.fhcreacion = moment.utc(cel.fhcreacion).local().format(GLOBAL.dbDateTimeFormat);
                  return cel;
                });*/
                this.comandasEnLinea = res;
                this.dataSource = this.comandasEnLinea;
            });
        };
        this.setToPrint = (articulos) => {
            const lstArticulos = [];
            articulos.forEach(item => {
                lstArticulos.push({
                    id: +item.articulo.articulo,
                    nombre: item.articulo.descripcion,
                    cantidad: +item.cantidad,
                    total: +item.total,
                    notas: item.notas || '',
                    impresora: {
                        bluetooth: +item.articulo.impresora.bluetooth,
                        direccion_ip: item.articulo.impresora.direccion_ip || '',
                        impresora: +item.articulo.impresora.impresora,
                        nombre: item.articulo.impresora.nombre || '',
                        sede: +item.articulo.impresora.sede,
                        ubicacion: item.articulo.impresora.ubicacion || ''
                    },
                    detalle: item.detalle
                });
            });
            return lstArticulos;
        };
        this.getPdf = (obj) => {
            const noCuenta = +obj.cuentas[0].cuenta;
            this.pdfServicio.getComanda(noCuenta).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    window.open(url, `cuenta_${noCuenta}`, 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
                }
                else {
                    this.snackBar.open('No se pudo generar la comanda...', 'Comanda', { duration: 3000 });
                }
            });
        };
        this.imprimir = (obj, idx = 0) => {
            // console.log(obj); // return;
            const listaProductos = this.setToPrint(obj.cuentas[0].productos);
            const AImpresoraNormal = listaProductos.filter(p => +p.impresora.bluetooth === 0);
            const AImpresoraBT = listaProductos.filter(p => +p.impresora.bluetooth === 1);
            let objToPrint = {};
            if (AImpresoraNormal.length > 0) {
                // console.log(AImpresoraNormal);
                objToPrint = {
                    Indice: (idx + 1),
                    Tipo: 'Comanda',
                    Nombre: obj.cuentas[0].nombre,
                    Numero: obj.comanda,
                    NoOrdenEnLinea: obj.origen_datos.numero_orden,
                    DireccionEntrega: obj.origen_datos.direccion_entrega,
                    DetalleCuenta: AImpresoraNormal,
                    Total: 0.00,
                    NotasGenerales: obj.notas_generales || ''
                };
                // console.log('STRING (IN) = ', JSON.stringify(objToPrint));
                // console.log('OBJETO (IN) = ', objToPrint);
                this.socket.emit('print:comanda', `${JSON.stringify(objToPrint)}`);
            }
            if (AImpresoraBT.length > 0) {
                objToPrint = {
                    Tipo: 'Comanda',
                    Nombre: obj.cuentas[0].nombre,
                    Numero: obj.comanda,
                    NoOrdenEnLinea: obj.origen_datos.numero_orden,
                    DireccionEntrega: obj.origen_datos.direccion_entrega,
                    DetalleCuenta: AImpresoraBT,
                    Total: 0.00
                };
                // console.log('STRING (BT) = ', JSON.stringify(objToPrint));
                // console.log('OBJETO (BT) = ', objToPrint);
                this.printToBT(JSON.stringify(objToPrint));
            }
            if (+obj.orden_gk > 0) {
                const params = {
                    orden_gk: +obj.orden_gk,
                    estatus_orden_gk: 5,
                    sede: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede,
                    comentario: `Se mandó a imprimir la comanda #${obj.comanda} de la orden #${obj.orden_gk} de Ghost Kitchen.`
                };
                this.cambiarEstatusOrdenGK(params);
            }
        };
        this.printToBT = (msgToPrint = '') => {
            const AppHref = `com.restouch.impresion://impresion/${msgToPrint}`;
            const wref = window.open(AppHref, 'PrntBT', 'height=200,width=200,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
            setTimeout(() => wref.close(), 1000);
        };
        this.firmar = (obj) => {
            // console.log(obj);
            this.facturaSrvc.firmar(+obj.factura.factura).subscribe((res) => {
                // console.log(res);
                if (res.exito) {
                    this.loadComandasEnLinea();
                    if (+obj.orden_gk > 0) {
                        const params = {
                            orden_gk: +obj.orden_gk,
                            estatus_orden_gk: 6,
                            sede: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede,
                            comentario: `Se firmó la factura de la comanda #${obj.comanda} de la orden #${obj.orden_gk} de Ghost Kitchen.`
                        };
                        this.cambiarEstatusOrdenGK(params);
                    }
                    const confirmRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                        maxWidth: '400px',
                        data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Imprimir factura', '¿Desea imprimir la factura?', 'Sí', 'No')
                    });
                    confirmRef.afterClosed().subscribe((confirma) => {
                        if (confirma) {
                            const modoFactura = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_MODO_FACTURA) || 1;
                            // console.log(`MODO FACTURA = ${modoFactura}`);
                            if (modoFactura === 1) {
                                this.printFactura(res.factura, obj.origen_datos);
                            }
                            else {
                                this.representacionGrafica(+obj.factura.factura);
                            }
                        }
                    });
                }
                this.snackBar.open(res.mensaje, 'Facturación', { duration: (res.exito ? 3000 : 10000) });
            });
        };
        this.printFactura = (fact, datosOrigen = {}) => {
            const dataToPrint = {
                NombreEmpresa: fact.empresa.nombre_comercial,
                NitEmpresa: fact.empresa.nit,
                SedeEmpresa: fact.sedeFactura.nombre,
                DireccionEmpresa: fact.empresa.direccion,
                Fecha: moment__WEBPACK_IMPORTED_MODULE_2__(fact.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dateFormat),
                Nit: fact.receptor.nit,
                Nombre: fact.receptor.nombre,
                Direccion: fact.receptor.direccion,
                Serie: fact.serie_factura,
                Numero: fact.numero_factura,
                Total: 0.00,
                NoAutorizacion: fact.fel_uuid,
                NombreCertificador: fact.certificador_fel.nombre,
                NitCertificador: fact.certificador_fel.nit,
                FechaDeAutorizacion: fact.fecha_autorizacion,
                NoOrdenEnLinea: datosOrigen.numero_orden,
                FormaDePago: (datosOrigen.metodo_pago && datosOrigen.metodo_pago.length > 0) ? datosOrigen.metodo_pago.join(', ') : '',
                DetalleFactura: []
            };
            for (const det of fact.detalle) {
                dataToPrint.DetalleFactura.push({
                    Cantidad: parseInt(det.cantidad),
                    Descripcion: det.articulo.descripcion,
                    Total: parseFloat(det.total),
                    PrecioUnitario: +det.precio_unitario
                });
                dataToPrint.Total += parseFloat(det.total);
            }
            this.socket.emit('print:factura', JSON.stringify(dataToPrint));
        };
        this.representacionGrafica = (idfactura) => {
            this.facturaSrvc.getGrafo(idfactura).subscribe(res => {
                if (res.exito) {
                    switch (res.tipo) {
                        case 'link':
                            this.openLinkWindow(res.documento);
                            break;
                        case 'pdf':
                            this.openPdfDocument(res.documento);
                            break;
                    }
                }
            });
        };
        this.openLinkWindow = (url) => window.open(url, 'winFactPdf', 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
        this.openPdfDocument = (pdf) => {
            const pdfWindow = window.open('', 'winFactPdf', 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
            pdfWindow.document.write('<iframe width="100%" style="margin: -8px;border: none;" height="100%" src="data:application/pdf;base64, ' +
                encodeURI(pdf) +
                '"></iframe>');
        };
        this.imprimirLote = () => {
            for (let i = this.params.de; i <= this.params.a; i++) {
                this.imprimir(this.comandasEnLinea[i], i);
            }
        };
        this.cancelarPedido = (obj) => {
            // console.log(obj);
            const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Cancelar pedido', 'Si cancela el pedido, será necesario volver a ingresarlo. ¿Desea continuar?', 'Sí', 'No', {
                    input: [
                        {
                            select: false,
                            label: 'Comentario',
                            valor: null,
                            id: 'comentario',
                            requerido: false
                        }
                    ]
                })
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res.resultado) {
                    const params = {};
                    for (const input of res.config.input) {
                        params[input.id] = input.valor;
                    }
                    this.comandaSrvc.cancelarPedido(obj.comanda, params).subscribe(resAnula => {
                        if (resAnula.exito) {
                            if (+obj.orden_gk > 0) {
                                const params = {
                                    orden_gk: +obj.orden_gk,
                                    estatus_orden_gk: 2,
                                    sede: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede,
                                    comentario: `Se canceló la comanda #${obj.comanda} de la orden #${obj.orden_gk} de Ghost Kitchen.`
                                };
                                this.cambiarEstatusOrdenGK(params);
                            }
                            this.snackBar.open('Pedido cancelado con éxito...', 'Pedido', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(`ERROR: ${resAnula.mensaje}`, 'Pedido', { duration: 7000 });
                        }
                        this.loadComandasEnLinea();
                    });
                }
            });
        };
        this.cambiarEstatusOrdenGK = (params) => {
            this.ordenGkSrvc.cambiarEstatus(params).subscribe(res => {
                if (res.exito) {
                    this.socket.emit('gk:updEstatusOrden', `${JSON.stringify({ orden_gk: params.orden_gk, estatus_orden_gk: res.estatus_orden_gk, sede_uuid: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid })}`);
                }
                else {
                    this.snackBar.open(`ERROR:${res.mensaje}`, 'Orden de Ghost Kitchen', { duration: 7000 });
                }
            });
        };
    }
    ngOnInit() {
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('shopify:updlist', (obj = null) => {
                if (obj && obj.corporacion) {
                    const suuid = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid;
                    if (suuid.indexOf(obj.corporacion) > -1) {
                        this.loadComandasEnLinea();
                        this.notificarUsuario();
                    }
                }
                else {
                    this.loadComandasEnLinea();
                    this.notificarUsuario();
                }
            });
            this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid));
            this.socket.on('connect_timeout', () => {
                const msg = 'DESCONECTADO DEL SERVIDOR (TIMEOUT)';
                this.snackBar.open(msg, 'ERROR', { duration: 5000 });
                this.avisoSocketIOEvent(msg);
            });
            // this.socket.on('pong', (ms: number) => this.snackBar.open(`PONG: ${ms}ms`, 'Pong', { duration: 5000 }));
            this.socket.on('reconnect_attempt', (attempt) => this.snackBar.open(`INTENTO DE RECONEXIÓN #${attempt}`, 'ERROR', { duration: 10000 }));
            this.socket.on('shopify:error', (mensaje) => {
                this.loadComandasEnLinea();
                this.snackBar.open(`ERROR: ${mensaje}`, 'Firmar', { duration: 10000 });
            });
        }
        this.loadComandasEnLinea();
    }
    ngOnDestroy() { }
}
ComandaEnLineaComponent.ɵfac = function ComandaEnLineaComponent_Factory(t) { return new (t || ComandaEnLineaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_9__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_pos_services_factura_service__WEBPACK_IMPORTED_MODULE_10__["FacturaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_11__["DesktopNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_12__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_13__["ConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ghost_kitchen_services_orden_gk_service__WEBPACK_IMPORTED_MODULE_14__["OrdenGkService"])); };
ComandaEnLineaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ComandaEnLineaComponent, selectors: [["app-comanda-en-linea"]], decls: 32, vars: 5, consts: [[1, "row"], [1, "col", "m12", "s12"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "comanda"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orden"], ["matColumnDef", "fechahora"], ["matColumnDef", "nombre"], ["matColumnDef", "total"], ["matColumnDef", "imprimir"], ["mat-header-cell", "", "style", "width: 10%;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "tamanioAmigable", "style", "width: 10%;", 4, "matCellDef"], ["matColumnDef", "cancelar"], ["matColumnDef", "facturar"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 2, "width", "10%"], ["mat-cell", "", 1, "tamanioAmigable", 2, "width", "10%"], ["mat-flat-button", "", "type", "button", "color", "accent", 1, "btnCelSize", 3, "click"], [1, "example-element-detail"], [2, "width", "75%", "background-color", "#f5f5f5", "table-layout", "fixed"], [4, "ngIf"], [1, "rtxt"], [4, "ngFor", "ngForOf"], ["colspan", "2"], [1, "long-notes"], ["colspan", "2", 1, "tabulador-doble"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function ComandaEnLineaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ComandaEnLineaComponent_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ComandaEnLineaComponent_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ComandaEnLineaComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ComandaEnLineaComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ComandaEnLineaComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ComandaEnLineaComponent_td_11_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ComandaEnLineaComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ComandaEnLineaComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ComandaEnLineaComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ComandaEnLineaComponent_td_17_Template, 3, 4, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ComandaEnLineaComponent_th_19_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ComandaEnLineaComponent_td_20_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ComandaEnLineaComponent_th_22_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ComandaEnLineaComponent_td_23_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ComandaEnLineaComponent_th_25_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ComandaEnLineaComponent_td_26_Template, 3, 0, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ComandaEnLineaComponent_td_28_Template, 15, 6, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ComandaEnLineaComponent_tr_29_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ComandaEnLineaComponent_tr_30_Template, 1, 2, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ComandaEnLineaComponent_tr_31_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DecimalPipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n    height: 0;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n    background: #777;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n}\r\n\r\n.tamanioAmigable[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  width: 10% !important;  \r\n  min-height: 55px;  \r\n}\r\n\r\n.btnCelSize[_ngcontent-%COMP%] { \r\n    min-width: 55px;   \r\n    width: 100%;\r\n}\r\n\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n}\r\n\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n}\r\n\r\n.example-element-description[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n}\r\n\r\n.long-notes[_ngcontent-%COMP%] {\r\n    overflow-wrap: break-word;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWFuZGEtZW4tbGluZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7OztLQUdDO0FBQ0w7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6ImNvbWFuZGEtZW4tbGluZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi50YW1hbmlvQW1pZ2FibGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7ICBcclxuICBtaW4taGVpZ2h0OiA1NXB4OyAgXHJcbn1cclxuXHJcbi5idG5DZWxTaXplIHsgXHJcbiAgICBtaW4td2lkdGg6IDU1cHg7ICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKlxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JheTtcclxuICAgICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmxvbmctbm90ZXMge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])
        ] } });


/***/ }),

/***/ "rnyF":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/turnos/turnos.component.ts ***!
  \****************************************************************************/
/*! exports provided: TurnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnosComponent", function() { return TurnosComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_rpt_fechas_rpt_fechas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/rpt-fechas/rpt-fechas.component */ "EwG7");
/* harmony import */ var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/rpt-botones/rpt-botones.component */ "NU9O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/cargando/cargando.component */ "TOq3");









function TurnosComponent_app_cargando_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cargando");
} }
class TurnosComponent {
    constructor() {
        this.params = {};
        this.configParams = {
            isRequiredFDel: true, isRequiredFAl: true
        };
        this.configBotones = {
            isHtmlDisabled: false, isPdfDisabled: false, isExcelDisabled: false
        };
        this.cargando = false;
        this.resetParams = () => {
            this.params = {
                fdel: moment__WEBPACK_IMPORTED_MODULE_1__().startOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
                fal: moment__WEBPACK_IMPORTED_MODULE_1__().endOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat)
            };
            // console.log(this.params);
        };
        this.getReporte = () => {
            console.log('GENERANDO CON PARAMETROS = ', this.params);
        };
    }
    ngOnInit() {
        this.resetParams();
    }
}
TurnosComponent.ɵfac = function TurnosComponent_Factory(t) { return new (t || TurnosComponent)(); };
TurnosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TurnosComponent, selectors: [["app-turnos"]], decls: 12, vars: 5, consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmEntidad", "ngForm"], [3, "fdel", "fal", "configuracion", "fdelChange", "falChange"], [3, "configuracion", "htmlClick", "pdfClick", "excelClick", "resetParamsClick"], [4, "ngIf"]], template: function TurnosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reporte de Turnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "app-rpt-fechas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("fdelChange", function TurnosComponent_Template_app_rpt_fechas_fdelChange_9_listener($event) { return ctx.params.fdel = $event; })("falChange", function TurnosComponent_Template_app_rpt_fechas_falChange_9_listener($event) { return ctx.params.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-rpt-botones", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("htmlClick", function TurnosComponent_Template_app_rpt_botones_htmlClick_10_listener() { return ctx.getReporte(); })("pdfClick", function TurnosComponent_Template_app_rpt_botones_pdfClick_10_listener() { return ctx.getReporte(); })("excelClick", function TurnosComponent_Template_app_rpt_botones_excelClick_10_listener() { return ctx.getReporte(); })("resetParamsClick", function TurnosComponent_Template_app_rpt_botones_resetParamsClick_10_listener() { return ctx.resetParams(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, TurnosComponent_app_cargando_11_Template, 1, 0, "app-cargando", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fdel", ctx.params.fdel)("fal", ctx.params.fal)("configuracion", ctx.configParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuracion", ctx.configBotones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _shared_components_rpt_fechas_rpt_fechas_component__WEBPACK_IMPORTED_MODULE_5__["RptFechasComponent"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_6__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_8__["CargandoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dXJub3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rwi4":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/lista-turno/lista-turno.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTurnoComponent", function() { return ListaTurnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_turno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/turno.service */ "iDsI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function ListaTurnoComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaTurnoComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const element_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getTurno(element_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inicio: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, element_r1.inicio, "dd/MM/yyyy HH:mm:ss"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fin: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, element_r1.fin, "dd/MM/yyyy HH:mm:ss"), " ");
} }
const _c0 = function () { return { standalone: true }; };
class ListaTurnoComponent {
    constructor(ls, turnoSrvc) {
        this.ls = ls;
        this.turnoSrvc = turnoSrvc;
        this.getTurnoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadTurnos = () => {
            this.turnoSrvc.get({ sede: (+this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(lst => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstTurnos = lst;
                        this.applyFilter();
                    }
                }
            });
        };
        this.getTurno = (obj) => {
            this.getTurnoEv.emit({
                turno: obj.turno,
                turno_tipo: obj.turno_tipo.turno_tipo,
                fecha: obj.fecha,
                inicio: obj.inicio,
                fin: obj.fin
            });
        };
        this.pageChange = (e) => {
            this.pageSize = e.pageSize;
            this.pageIndex = e.pageIndex;
            this.applyFilter();
        };
    }
    ngOnInit() {
        this.loadTurnos();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstTurnos, this.txtFiltro);
            this.length = tmpList.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstTurnos.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstTurnos, this.pageSize, this.pageIndex + 1);
        }
    }
}
ListaTurnoComponent.ɵfac = function ListaTurnoComponent_Factory(t) { return new (t || ListaTurnoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_turno_service__WEBPACK_IMPORTED_MODULE_3__["TurnoService"])); };
ListaTurnoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaTurnoComponent, selectors: [["app-lista-turno"]], outputs: { getTurnoEv: "getTurnoEv" }, decls: 7, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListaTurnoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaTurnoComponent_Template_input_keyup_3_listener() { return ctx.applyFilter(); })("ngModelChange", function ListaTurnoComponent_Template_input_ngModelChange_3_listener($event) { return ctx.txtFiltro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListaTurnoComponent_mat_list_item_5_Template, 10, 8, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaTurnoComponent_Template_mat_paginator_page_6_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstTurnosPaged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXR1cm5vLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoibGlzdGEtdHVybm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsV2lkdGgge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "s/4k":
/*!*****************************************************!*\
  !*** ./src/app/restaurante/classes/tran-comanda.ts ***!
  \*****************************************************/
/*! exports provided: TranComanda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranComanda", function() { return TranComanda; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/unir-cuenta/unir-cuenta.component */ "fHc6");
/* harmony import */ var _components_traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/traslado-mesa/traslado-mesa.component */ "BXCb");
/* harmony import */ var _pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pos/components/cobrar-pedido/cobrar-pedido.component */ "fn6i");
/* harmony import */ var _shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/dialog-pedido/dialog-pedido.component */ "d/pK");
/* harmony import */ var _shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/dialog-combo/dialog-combo.component */ "LnBW");
/* harmony import */ var _components_notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/notas-generales-comanda/notas-generales-comanda.component */ "BQSQ");
/* harmony import */ var _components_nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nueva-cuenta/nueva-cuenta.component */ "fD0e");
/* harmony import */ var _components_distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/distribuir-productos-cuentas/distribuir-productos-cuentas.component */ "IdLv");
/* harmony import */ var _components_acciones_comanda_acciones_comanda_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/acciones-comanda/acciones-comanda.component */ "byCI");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");













class TranComanda {
    constructor(dialog, snackBar, comandaSrvc, socket, ls, pdfServicio, configSrvc, articuloSrvc, bsAccionesCmd) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.ls = ls;
        this.pdfServicio = pdfServicio;
        this.configSrvc = configSrvc;
        this.articuloSrvc = articuloSrvc;
        this.bsAccionesCmd = bsAccionesCmd;
        this.clientePedido = null;
        this.closeSideNavEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mesaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPortalComanda = false;
        this.showPortalCuenta = false;
        this.noComanda = 0;
        this.sumCuenta = 0;
        this.categorias = [];
        this.bloqueoBotones = false;
        this.rolesUsuario = [];
        this.impreso = 0;
        this.usaCodigoBarras = false;
        this.codigoBarras = null;
        this.imprimeRecetaEnComanda = true;
        this.endSubs = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subscription"]();
        this.alIniciar = () => {
            // this.resetMesaEnUso();
            this.resetLstProductosSeleccionados();
            this.resetLstProductosDeCuenta();
            this.resetCuentaActiva();
            this.impreso = 0;
            this.noComanda = this.mesaEnUso.comanda || 0;
            this.llenaProductosSeleccionados();
            if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid) {
                this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
                this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid));
            }
            this.usaCodigoBarras = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_USA_CODIGO_BARRAS);
            this.imprimeRecetaEnComanda = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_IMPRIME_RECETA_EN_COMANDA);
            // console.log('MESA EN USO = ', this.mesaEnUso);
        };
        this.resetMesaEnUso = () => this.mesaEnUso = {
            exito: true,
            comanda: null, usuario: null, sede: null, estatus: null,
            mesa: {
                mesa: null,
                area: { area: null, sede: null, area_padre: null, nombre: null },
                numero: null, posx: null, posy: null, tamanio: null, estatus: null
            },
            numero_pedido: null,
            cuentas: []
        };
        this.resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
        this.resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];
        this.resetCuentaActiva = () => this.cuentaActiva = { cuenta: null, numero: null, nombre: null, productos: [] };
        this.resetListadoArticulos = () => this.appLstProdAlt.loadArbolArticulos();
        this.setListaCategorias = (cats = []) => this.categorias = this.setVerBotones(cats);
        this.setVerBotones = (cats) => {
            for (const cat of cats) {
                loopSubCategoria: for (const subcat of cat.categoria_grupo) {
                    for (const art of subcat.articulo) {
                        if (+art.mostrar_pos === 1) {
                            subcat.mostrarEnPos = true;
                            cat.mostrarEnPos = true;
                            continue loopSubCategoria;
                        }
                    }
                }
            }
            return cats;
        };
        this.clickOnCategoria = (c) => this.appLstProdAlt.fillSubCategorias(c.categoria_grupo);
        this.buscarArticulo = () => {
            // console.log(`CODIGO BARRAS = ${this.codigoBarras}`);
            if (this.codigoBarras && this.codigoBarras.trim().length > 0) {
                this.endSubs.add(this.articuloSrvc.getArticulos({ codigo: this.codigoBarras.trim() }).subscribe((arts) => {
                    if (arts && arts.length > 0) {
                        const art = arts[0];
                        const obj = {
                            id: +art.articulo,
                            nombre: art.descripcion,
                            precio: +art.precio,
                            impresora: art.impresora,
                            presentacion: art.presentacion,
                            codigo: art.codigo,
                            combo: art.combo,
                            multiple: art.multiple
                        };
                        this.agregarProductos(obj);
                    }
                    this.codigoBarras = null;
                    this.txtCodigoBarras.focus();
                }));
            }
        };
        this.llenaProductosSeleccionados = (conQueMesa = this.mesaEnUso) => {
            if (this.mesaEnUso.comanda == null) {
                this.mesaEnUso = conQueMesa;
            }
            this.lstProductosSeleccionados = [];
            for (const ctas of conQueMesa.cuentas) {
                for (const p of ctas.productos) {
                    this.lstProductosSeleccionados.push({
                        id: +p.articulo.articulo,
                        nombre: p.articulo.descripcion,
                        cuenta: +p.numero_cuenta || 1,
                        idcuenta: +ctas.cuenta,
                        cantidad: +p.cantidad,
                        impreso: +p.impreso,
                        precio: parseFloat(p.precio) || 10.00,
                        total: parseFloat(p.total) || (parseFloat(p.cantidad) * parseFloat(p.precio)),
                        notas: p.notas || '',
                        showInputNotas: false,
                        itemListHeight: '70px',
                        detalle_comanda: +p.detalle_comanda,
                        detalle_cuenta: +p.detalle_cuenta,
                        impresora: p.articulo.impresora,
                        detalle: p.detalle,
                        monto_extra: +p.monto_extra || 0.00,
                        multiple: +p.articulo.multiple,
                        combo: +p.articulo.combo
                    });
                }
            }
            // console.log('SELECCIONADOS = ', this.lstProductosSeleccionados);
        };
        this.cerrarMesa = () => {
            // console.log('CERRAR MESA; MESA EN USO = ', this.mesaEnUso);
            this.endSubs.add(this.comandaSrvc.cerrarMesa(this.mesaEnUso.mesa.mesa).subscribe(res => {
                // console.log('RESPUESTA DE CERRAR MESA = ', res);
                if (res.exito) {
                    // console.log('EXITO PARA CERRAR LA MESA...', res);
                    this.snackBar.open(res.mensaje, 'Comanda', { duration: 3000 });
                    this.mesaEnUso.mesa.estatus = 1;
                    // this.closeSideNavEv.emit();
                    this.mesaSavedEv.emit();
                    this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
                }
                else {
                    // console.log('FALLA PARA CERRAR LA MESA...', res);
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 7000 });
                }
            }));
        };
        this.printToBT = (msgToPrint = '') => {
            const convertir = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_ENVIA_COMO_BASE64);
            const data = convertir ? js_base64__WEBPACK_IMPORTED_MODULE_11__["Base64"].encode(msgToPrint, true) : msgToPrint;
            // const AppHref = `${GLOBAL.DEEP_LINK_ANDROID}${data}`;
            const AppHref = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].DEEP_LINK_ANDROID.replace('__INFOBASE64__', data);
            try {
                window.location.href = AppHref;
            }
            catch (error) {
                this.snackBar.open('No se pudo conectar con la aplicación de impresión', 'Comanda', { duration: 3000 });
            }
            this.bloqueoBotones = false;
        };
        this.printComandaPDF = () => {
            const noCuenta = +this.cuentaActiva.cuenta;
            this.endSubs.add(this.pdfServicio.getComanda(noCuenta).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    window.open(url, `cuenta_${noCuenta}`, 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
                    // this.closeSideNavEv.emit();
                }
                else {
                    this.snackBar.open('No se pudo generar la comanda...', 'Comanda', { duration: 3000 });
                }
            }));
        };
        this.sumaDetalle = (detalle) => {
            let total = 0.00;
            // for (let i = 0; i < detalle.length; i++) { total += detalle[i].total || 0.00; }
            for (const item of detalle) {
                total += +item.total || 0.00;
                total += +item.monto_extra || 0.00;
            }
            return total;
        };
        this.enviarPedido = (dialogRef = null) => {
            const cuenta = this.mesaEnUso.cuentas[0];
            this.cuentaActiva = this.mesaEnUso.cuentas.find((c) => +c.numero === +cuenta.numero);
            const lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +this.cuentaActiva.numero);
            lstProductosDeCuenta.map(p => p.impreso = 1);
            this.noComanda = this.mesaEnUso.comanda;
            this.cuentaActiva.productos = this.prepProductosComanda(lstProductosDeCuenta);
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
            if (idxCta > -1) {
                const objCmd = {
                    area: this.mesaEnUso.mesa.area.area,
                    mesa: this.mesaEnUso.mesa.mesa,
                    mesero: this.mesaEnUso.usuario,
                    comanda: this.mesaEnUso.comanda,
                    cuentas: this.mesaEnUso.cuentas,
                    numero_pedido: this.mesaEnUso.numero_pedido
                };
                this.endSubs.add(this.comandaSrvc.save(objCmd).subscribe((res) => {
                    if (res.exito) {
                        this.mesaEnUso.numero_pedido = res.comanda.numero_pedido;
                        this.endSubs.add(this.comandaSrvc.setProductoImpreso(cuenta.cuenta).subscribe(resImp => {
                            this.llenaProductosSeleccionados(resImp.comanda);
                            this.setSelectedCuenta(cuenta.numero);
                            this.cobrarCuenta(dialogRef);
                        }));
                    }
                }));
            }
        };
        this.cambiarEstatusCuenta = (obj) => {
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +obj.cuenta);
            this.mesaEnUso.cuentas[idxCta].cerrada = +obj.cerrada;
        };
        // esCajero = () => (this.rolesUsuario || []).find(r => r.trim().toLocaleLowerCase() === 'cajero') === undefined;
        this.esCajero = () => false;
        this.trasladoMesa = (dialogRef = null) => {
            const trasladoRef = this.dialog.open(_components_traslado_mesa_traslado_mesa_component__WEBPACK_IMPORTED_MODULE_3__["TrasladoMesaComponent"], {
                width: '55%',
                data: { mesaEnUso: this.mesaEnUso }
            });
            this.endSubs.add(trasladoRef.afterClosed().subscribe(result => {
                if (result) {
                    this.socket.emit('refrescar:mesa', { mesaenuso: this.mesaEnUso });
                    if (dialogRef) {
                        dialogRef.close(this.mesaEnUso);
                    }
                    else {
                        this.closeSideNavEv.emit(this.mesaEnUso);
                    }
                }
            }));
        };
        this.getNotasGenerales = () => {
            const ngenDialog = this.dialog.open(_components_notas_generales_comanda_notas_generales_comanda_component__WEBPACK_IMPORTED_MODULE_7__["NotasGeneralesComandaComponent"], {
                width: '50%',
                data: { notasGenerales: (this.mesaEnUso.notas_generales || '') }
            });
            this.endSubs.add(ngenDialog.afterClosed().subscribe((notasGen) => {
                if (notasGen !== null) {
                    if (notasGen.trim().length > 0) {
                        this.endSubs.add(this.comandaSrvc.saveNotasGenerales({ comanda: this.mesaEnUso.comanda, notas_generales: notasGen }).subscribe(res => {
                            if (res.exito) {
                                this.mesaEnUso.notas_generales = notasGen;
                                this.snackBar.open(res.mensaje, 'Comanda', { duration: 3000 });
                            }
                            else {
                                this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 7000 });
                            }
                        }));
                    }
                }
            }));
        };
        this.nuevaCuenta = (dialogRef = null) => {
            const nuevaCuentaRef = this.dialog.open(_components_nueva_cuenta_nueva_cuenta_component__WEBPACK_IMPORTED_MODULE_8__["NuevaCuentaComponent"], {
                width: '50%',
                data: { mesaEnUso: this.mesaEnUso }
            });
            this.endSubs.add(nuevaCuentaRef.afterClosed().subscribe(result => {
                if (result) {
                    if (dialogRef) {
                        dialogRef.close();
                    }
                    else {
                        this.closeSideNavEv.emit();
                    }
                }
            }));
        };
        this.distribuirProductos = (dialogRef = null) => {
            const distProdCtaRef = this.dialog.open(_components_distribuir_productos_cuentas_distribuir_productos_cuentas_component__WEBPACK_IMPORTED_MODULE_9__["DistribuirProductosCuentasComponent"], {
                width: '50%',
                data: { mesaEnUso: this.mesaEnUso, lstProductos: (this.lstProductosSeleccionados || []) }
            });
            this.endSubs.add(distProdCtaRef.afterClosed().subscribe(result => {
                if (result) {
                    if (dialogRef) {
                        dialogRef.close();
                    }
                    else {
                        this.closeSideNavEv.emit();
                    }
                }
            }));
        };
        this.abrirAccionesComanda = (dialogRef) => {
            const bs = this.bsAccionesCmd.open(_components_acciones_comanda_acciones_comanda_component__WEBPACK_IMPORTED_MODULE_10__["AccionesComandaComponent"], {
                autoFocus: false,
                data: {
                    tranComanda: this,
                    dialogRef
                }
            });
            this.endSubs.add(bs.afterDismissed().subscribe((result) => {
                if (result === null || result === void 0 ? void 0 : result.cerrar) {
                    dialogRef.close(result.mesaEnUso || null);
                }
            }));
        };
    }
    setSelectedCuenta(noCuenta) {
        this.bloqueoBotones = true;
        this.cuentaActiva = this.mesaEnUso.cuentas.find((c) => +c.numero === +noCuenta);
        this.setLstProductosDeCuenta();
        this.bloqueoBotones = false;
    }
    setSumaCuenta(lista) {
        let suma = 0.00;
        // for (let i = 0; i < lista.length; i++) { suma += (lista[i].precio * lista[i].cantidad); }
        for (const item of lista) {
            suma += (item.precio * item.cantidad);
        }
        this.sumCuenta = suma;
    }
    setLstProductosDeCuenta() {
        this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +this.cuentaActiva.numero);
        // console.log(this.lstProductosDeCuenta);
    }
    agregarProductos(producto) {
        // console.log(producto);
        if (+producto.combo === 1 || +producto.multiple === 1) {
            this.bloqueoBotones = true;
            const confirmRef = this.dialog.open(_shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__["DialogComboComponent"], {
                maxWidth: '50%',
                data: new _shared_components_dialog_combo_dialog_combo_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComboModel"](producto, 'Sí', 'No')
            });
            this.endSubs.add(confirmRef.afterClosed().subscribe((res) => {
                // console.log(res);
                if (res && res.respuesta && res.seleccion.receta.length > 0) {
                    // console.log(res.seleccion); // this.bloqueoBotones = false; return;
                    this.endSubs.add(this.comandaSrvc.saveDetalleCombo(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, res.seleccion).subscribe(resSaveDetCmb => {
                        // console.log('NUEVO DETALLE COMANDA = ', res);
                        if (resSaveDetCmb.exito) {
                            this.mesaEnUso = resSaveDetCmb.comanda;
                            this.llenaProductosSeleccionados(this.mesaEnUso);
                            this.setSelectedCuenta(+this.cuentaActiva.numero);
                        }
                        else {
                            this.snackBar.open(`ERROR:${resSaveDetCmb.mensaje}`, 'Comanda', { duration: 3000 });
                        }
                        this.bloqueoBotones = false;
                    }));
                }
                else {
                    this.bloqueoBotones = false;
                    this.snackBar.open('Error, Debe seleccionar los productos del combo', 'Comanda', { duration: 7000 });
                }
            }));
        }
        else {
            this.addProductoSelected(producto);
        }
    }
    addProductoSelected(producto) {
        // console.log('PRODUCTO = ', producto);
        // return;
        this.bloqueoBotones = true;
        if (+this.cuentaActiva.numero) {
            const idx = this.lstProductosSeleccionados
                .findIndex(p => +p.id === +producto.id && +p.cuenta === +this.cuentaActiva.numero && +p.impreso === 0);
            if (idx < 0) {
                this.detalleComanda = {
                    articulo: producto.id, cantidad: 1, precio: +producto.precio, total: 1 * +producto.precio, notas: ''
                };
                this.endSubs.add(this.comandaSrvc.saveDetalle(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, this.detalleComanda).subscribe(res => {
                    // console.log('NUEVO DETALLE COMANDA = ', res);
                    if (res.exito) {
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this.snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
                    this.bloqueoBotones = false;
                }));
            }
            else {
                const tmp = this.lstProductosSeleccionados[idx];
                this.detalleComanda = {
                    detalle_cuenta: tmp.detalle_cuenta, detalle_comanda: tmp.detalle_comanda, articulo: tmp.id,
                    cantidad: (+tmp.cantidad) + 1, precio: +tmp.precio, total: ((+tmp.cantidad) + 1) * (+tmp.precio),
                    notas: tmp.notas
                };
                this.endSubs.add(this.comandaSrvc.saveDetalle(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, this.detalleComanda).subscribe(res => {
                    // console.log('UPDATE DETALLE COMANDA = ', res);
                    if (res.exito) {
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this.snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
                    this.bloqueoBotones = false;
                }));
            }
            this.setLstProductosDeCuenta();
        }
    }
    updProductosCuenta(obj) {
        const nvaLista = obj.listaProductos || [];
        const lstTemp = this.lstProductosSeleccionados.filter(p => +p.cuenta !== +this.cuentaActiva.numero);
        if (nvaLista.length > 0) {
            this.lstProductosSeleccionados = lstTemp.concat(nvaLista);
        }
        else {
            this.lstProductosSeleccionados = lstTemp;
        }
        if (obj.comanda) {
            this.mesaEnUso = obj.comanda;
            this.llenaProductosSeleccionados(this.mesaEnUso);
            this.setSelectedCuenta(+this.cuentaActiva.numero);
        }
    }
    prepProductosComanda(prods) {
        // console.log(prods);
        const tmp = [];
        for (const p of prods) {
            tmp.push({
                articulo: p.id,
                cantidad: p.cantidad,
                precio: p.precio,
                total: p.total,
                notas: p.notas,
                impreso: 1,
                detalle_comanda: p.detalle_comanda,
                detalle_cuenta: p.detalle_cuenta
            });
        }
        return tmp;
    }
    validarImpresion(toPdf = false, dialogRef = null) {
        const ingresarPedido = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_INGRESO_NUMERO_PEDIDO);
        // this.mesaEnUso.mesa.esmostrador;
        // console.log(this.mesaEnUso);
        if (+this.mesaEnUso.mesa.esmostrador === 1 && ingresarPedido && !this.mesaEnUso.numero_pedido) {
            let pedidos = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_TOTAL_NUMEROS_PEDIDO);
            if (!pedidos || pedidos <= 0) {
                pedidos = 30;
            }
            const confirmRef = this.dialog.open(_shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__["DialogPedidoComponent"], {
                maxWidth: '50%',
                data: new _shared_components_dialog_pedido_dialog_pedido_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Numero de Pedido', pedidos, 'Sí', 'No')
            });
            this.endSubs.add(confirmRef.afterClosed().subscribe((conf) => {
                // console.log(conf);
                if (conf && conf.respuesta && conf.pedido) {
                    this.mesaEnUso.numero_pedido = conf.pedido;
                    this.printComanda(toPdf, dialogRef);
                }
                else {
                    this.snackBar.open('Error, Debe seleccionar un numero de pedido', 'Comanda', { duration: 7000 });
                }
            }));
        }
        else {
            this.printComanda(toPdf, dialogRef);
        }
    }
    printComanda(toPdf = false, dialogRef = null) {
        // solicitar numero de pedido
        const meu = JSON.parse(JSON.stringify(this.mesaEnUso));
        this.bloqueoBotones = true;
        this.impreso = 0;
        const modoComanda = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_MODO_COMANDA) || 1;
        for (let i = 0; i < meu.cuentas.length; i++) {
            const cuenta = meu.cuentas[i];
            // console.log(cuenta);
            this.cuentaActiva = meu.cuentas.find((c) => +c.numero === +cuenta.numero);
            const lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => +p.cuenta === +this.cuentaActiva.numero);
            const lstProductosAImprimir = lstProductosDeCuenta.filter(p => +p.impreso === 0 && +p.cantidad > 0);
            if (lstProductosAImprimir.length > 0) {
                lstProductosDeCuenta.map(p => p.impreso = 1);
                this.noComanda = meu.comanda;
                // console.log(this.cuentaActiva.cuenta);
                this.cuentaActiva.productos = this.prepProductosComanda(lstProductosDeCuenta);
                const idxCta = meu.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
                // console.log(meu.cuentas)
                // console.log(idxCta)
                if (idxCta > -1) {
                    // meu.cuentas[idxCta] = this.cuentaActiva;
                    const objCmd = {
                        area: meu.mesa.area.area,
                        mesa: meu.mesa.mesa,
                        mesero: meu.usuario,
                        comanda: meu.comanda,
                        cuentas: meu.cuentas,
                        numero_pedido: meu.numero_pedido
                    };
                    // console.log('Comanda a guardar = ', objCmd);
                    this.endSubs.add(this.comandaSrvc.save(objCmd).subscribe((res) => {
                        // console.log('Respuesta del save = ', res);
                        if (res.exito) {
                            meu.numero_pedido = res.comanda.numero_pedido;
                            // console.log(this.cuentaActiva);
                            this.endSubs.add(this.comandaSrvc.setProductoImpreso(cuenta.cuenta).subscribe(resImp => {
                                // console.log('Respuesta de poner impreso = ', resImp);
                                if (resImp.exito) {
                                    this.impreso++;
                                }
                                this.llenaProductosSeleccionados(resImp.comanda);
                                this.setSelectedCuenta(cuenta.numero);
                                this.snackBar.open('Cuenta actualizada', `Cuenta #${cuenta.numero}`, { duration: 3000 });
                                // Inicio de impresión de comanda
                                let AImpresoraNormal = [];
                                let AImpresoraBT = [];
                                try {
                                    AImpresoraNormal = lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 0);
                                    AImpresoraBT = lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 1);
                                    // console.log('PRODUCTOS A IMPRIMIR = ', lstProductosAImprimir);
                                }
                                catch (error) {
                                    console.log('PRODUCTOS A IMPRIMIR = ', lstProductosAImprimir);
                                    console.log('NORMAL = ', AImpresoraNormal);
                                    console.log('BT = ', AImpresoraBT);
                                    console.log(error);
                                }
                                if (!toPdf) {
                                    if (AImpresoraNormal.length > 0) {
                                        if (modoComanda !== 3) {
                                            if (!this.imprimeRecetaEnComanda) {
                                                AImpresoraNormal.map(d => {
                                                    if (+d.combo === 0 && +d.esreceta === 1) {
                                                        d.detalle = [];
                                                    }
                                                    return d;
                                                });
                                            }
                                            this.socket.emit('print:comanda', `${JSON.stringify({
                                                Tipo: 'Comanda',
                                                Nombre: this.cuentaActiva.nombre,
                                                Numero: this.noComanda,
                                                DetalleCuenta: AImpresoraNormal,
                                                Ubicacion: `${meu.mesa.area.nombre} - Mesa ${meu.mesa.etiqueta || meu.mesa.numero}`,
                                                Mesero: `${meu.mesero.nombres} ${meu.mesero.apellidos}`,
                                                Total: null,
                                                NumeroPedido: meu.numero_pedido,
                                                NotasGenerales: (meu.notas_generales || '')
                                            })}`);
                                            this.snackBar.open(`Imprimiendo comanda #${this.noComanda}`, 'Comanda', { duration: 7000 });
                                        }
                                        else {
                                            this.snackBar.open(`Comanda #${this.noComanda} enviada a cocina`, 'Comanda', { duration: 7000 });
                                        }
                                        this.bloqueoBotones = false;
                                        // console.log("imprimiendo")
                                    }
                                    if (AImpresoraBT.length > 0) {
                                        if (modoComanda !== 3) {
                                            if (!this.imprimeRecetaEnComanda) {
                                                AImpresoraNormal.map(d => {
                                                    if (+d.combo === 0 && +d.esreceta === 1) {
                                                        d.detalle = [];
                                                    }
                                                    return d;
                                                });
                                            }
                                            this.printToBT(JSON.stringify({
                                                Tipo: 'Comanda',
                                                Nombre: this.cuentaActiva.nombre,
                                                Numero: this.noComanda,
                                                DetalleCuenta: AImpresoraBT,
                                                Ubicacion: `${meu.mesa.area.nombre} - Mesa ${meu.mesa.etiqueta || meu.mesa.numero}`,
                                                Mesero: `${meu.mesero.nombres} ${meu.mesero.apellidos}`,
                                                Total: null,
                                                NumeroPedido: meu.numero_pedido
                                            }));
                                        }
                                    }
                                }
                                else {
                                    this.printComandaPDF();
                                }
                                if (+this.impreso === meu.cuentas.length) {
                                    this.impreso = 0;
                                    this.socket.emit('refrescar:mesa', { mesaenuso: meu });
                                    this.socket.emit('refrescar:listaCocina', { mesaenuso: meu });
                                    if (+meu.mesa.esmostrador === 0) {
                                        if (dialogRef) {
                                            dialogRef.close();
                                        }
                                        else {
                                            this.closeSideNavEv.emit();
                                        }
                                    }
                                    else {
                                        this.cobrarCuenta(dialogRef);
                                    }
                                }
                                // Fin de impresión de comanda
                            }));
                        }
                        else {
                            this.snackBar.open(`ERROR: ${res.mensaje}`, `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                        }
                        this.bloqueoBotones = false;
                    }));
                }
            }
            else {
                this.impreso++;
                // this.snackBar.open('Nada para enviar...', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                this.bloqueoBotones = false;
            }
        }
        // console.log('Productos a imprimir = ', this.lstProductosAImprimir);
    }
    printCuenta(dialogRef = null) {
        this.bloqueoBotones = true;
        this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
        // console.log(this.lstProductosAImprimir);
        if (this.lstProductosAImprimir.length > 0) {
            this.setSumaCuenta(this.lstProductosAImprimir);
            const totalCuenta = this.sumaDetalle(this.lstProductosAImprimir);
            const printerToUse = this.mesaEnUso.mesa.impresora || this.mesaEnUso.mesa.area.impresora;
            const imprimePropSugerida = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_IMPRIME_PROPINA_SUGERIDA);
            const msgToPrint = {
                Tipo: 'Cuenta',
                Nombre: this.cuentaActiva.nombre,
                Numero: null,
                DetalleCuenta: this.lstProductosAImprimir,
                Total: totalCuenta,
                Empresa: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).empresa,
                Restaurante: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).restaurante,
                PropinaSugerida: imprimePropSugerida ? (totalCuenta * 0.10).toFixed(2) : null,
                Impresora: printerToUse,
                Ubicacion: `${this.mesaEnUso.mesa.area.nombre} - Mesa ${this.mesaEnUso.mesa.etiqueta || this.mesaEnUso.mesa.numero} - Comanda ${this.mesaEnUso.comanda}`,
                Mesero: `${this.mesaEnUso.mesero.nombres} ${this.mesaEnUso.mesero.apellidos}`
            };
            if (+printerToUse.bluetooth === 0) {
                this.socket.emit(`print:cuenta`, `${JSON.stringify(msgToPrint)}`);
            }
            else {
                this.printToBT(JSON.stringify(msgToPrint));
            }
            this.snackBar.open(`Imprimiendo cuenta de ${this.cuentaActiva.nombre}`, 'Cuenta', { duration: 7000 });
            if (dialogRef) {
                dialogRef.close();
            }
            else {
                this.closeSideNavEv.emit();
            }
        }
        else {
            this.snackBar.open(`La cuenta de ${this.cuentaActiva.nombre} no tiene ningún artículo.`, 'Cuenta', { duration: 7000 });
        }
        this.bloqueoBotones = false;
    }
    unirCuentas(dialogRef = null) {
        const unirCuentaRef = this.dialog.open(_components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_2__["UnirCuentaComponent"], {
            width: '55%',
            data: { lstProductosSeleccionados: this.lstProductosSeleccionados, mesaEnUso: this.mesaEnUso }
        });
        this.endSubs.add(unirCuentaRef.afterClosed().subscribe(result => {
            if (result) {
                if (dialogRef) {
                    dialogRef.close();
                }
                else {
                    this.closeSideNavEv.emit();
                }
            }
        }));
    }
    cobrarCuenta(dialogRef = null) {
        this.endSubs.add(this.comandaSrvc.getCuenta(this.cuentaActiva.cuenta).subscribe(res => {
            if (res.pendiente.length > 0) {
                this.snackBar.open('Cobro', 'Tiene productos sin comandar', { duration: 3000 });
            }
            else {
                const productosACobrar = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
                if (productosACobrar.length > 0) {
                    const cobrarCtaRef = this.dialog.open(_pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_4__["CobrarPedidoComponent"], {
                        width: '95%',
                        data: {
                            mesaenuso: this.mesaEnUso,
                            cuenta: this.cuentaActiva.nombre,
                            idcuenta: this.cuentaActiva.cuenta,
                            productosACobrar,
                            porcentajePropina: 0.00,
                            impresora: +this.mesaEnUso.mesa.esmostrador === 0 ?
                                (this.mesaEnUso.mesa.area.impresora_factura || null) :
                                (this.mesaEnUso.mesa.impresora || this.mesaEnUso.mesa.area.impresora),
                            clientePedido: this.clientePedido
                        }
                    });
                    this.endSubs.add(cobrarCtaRef.afterClosed().subscribe(resAC => {
                        // console.log(resAC);
                        if (resAC && resAC !== 'closePanel') {
                            // console.log(res);
                            this.cambiarEstatusCuenta(resAC);
                            if (dialogRef) {
                                dialogRef.close(this.mesaEnUso);
                            }
                            else {
                                this.closeSideNavEv.emit(this.mesaEnUso);
                            }
                        }
                        else {
                            if (resAC === 'closePanel') {
                                if (dialogRef) {
                                    dialogRef.close(this.mesaEnUso);
                                }
                                else {
                                    this.closeSideNavEv.emit();
                                }
                            }
                        }
                    }));
                }
                else {
                    this.snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
                }
            }
        }));
    }
}


/***/ }),

/***/ "suWU":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/form-turno/form-turno.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTurnoComponent", function() { return FormTurnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var _selecciona_turno_previo_selecciona_turno_previo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selecciona-turno-previo/selecciona-turno-previo.component */ "AopW");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "+Q77");
/* harmony import */ var _services_turno_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/turno.service */ "iDsI");
/* harmony import */ var _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../admin/services/usuario-tipo.service */ "31FO");
/* harmony import */ var _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../admin/services/usuario.service */ "K9lQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function FormTurnoComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.showTurnoForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showTurnoForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tt_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tt_r17.turno_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tt_r17.descripcion, " ");
} }
function FormTurnoComponent_form_8_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_form_8_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.turno.inicio = ctx_r18.getNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "query_builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_form_8_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.turno.inicio = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_form_8_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.turno.fin = ctx_r22.getNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "query_builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_form_8_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.turno.fin = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_form_8_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.resetTurno(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_form_8_div_22_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](com_r30);
} }
function FormTurnoComponent_form_8_div_22_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fac_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fac_r31);
} }
function FormTurnoComponent_form_8_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Documentos Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comandas sin facturar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormTurnoComponent_form_8_div_22_li_9_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Facturas sin firmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormTurnoComponent_form_8_div_22_li_15_Template, 2, 1, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.comandas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.facturas);
} }
function FormTurnoComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTurnoComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r9.form.valid && ctx_r32.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tipo de turno");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoComponent_form_8_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.turno.turno_tipo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormTurnoComponent_form_8_mat_option_7_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoComponent_form_8_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.turno.inicio = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormTurnoComponent_form_8_button_11_Template, 3, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormTurnoComponent_form_8_button_12_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoComponent_form_8_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.turno.fin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormTurnoComponent_form_8_button_16_Template, 3, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormTurnoComponent_form_8_button_17_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormTurnoComponent_form_8_button_21_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormTurnoComponent_form_8_div_22_Template, 16, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.turno.turno_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tiposTurno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.turno.inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.turno.inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.turno.inicio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.turno.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.turno.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.turno.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r9.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.turno.turno);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pendientes);
} }
function FormTurnoComponent_hr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function FormTurnoComponent_mat_card_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_mat_card_10_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.showDetalleTurnoForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_mat_card_10_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_mat_card_10_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.showDetalleTurnoForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_mat_card_10_form_8_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tu_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tu_r49.usuario_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tu_r49.descripcion, " ");
} }
function FormTurnoComponent_mat_card_10_form_8_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", u_r50.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", u_r50.nombres, " ", u_r50.apellidos, " ");
} }
function FormTurnoComponent_mat_card_10_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTurnoComponent_mat_card_10_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _r46.form.valid && ctx_r51.onSubmitDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoComponent_mat_card_10_form_8_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.detalleTurno.usuario_tipo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormTurnoComponent_mat_card_10_form_8_mat_option_7_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTurnoComponent_mat_card_10_form_8_Template_mat_select_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.detalleTurno.usuario = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormTurnoComponent_mat_card_10_form_8_mat_option_13_Template, 2, 3, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_mat_card_10_form_8_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.copiaDetalleTurno(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Copiar de turno anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.detalleTurno.usuario_tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.tiposUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.detalleTurno.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.usuarios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!ctx_r39.turno.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r46.form.valid || !!ctx_r39.turno.fin);
} }
function FormTurnoComponent_mat_card_10_hr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function FormTurnoComponent_mat_card_10_table_10_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_mat_card_10_table_10_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r64.usuario_tipo.descripcion);
} }
function FormTurnoComponent_mat_card_10_table_10_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_mat_card_10_table_10_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r65.usuario.nombres, " ", element_r65.usuario.apellidos, "");
} }
function FormTurnoComponent_mat_card_10_table_10_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTurnoComponent_mat_card_10_table_10_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTurnoComponent_mat_card_10_table_10_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const element_r66 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r67.anularDetalleTurno(element_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!ctx_r61.turno.fin);
} }
function FormTurnoComponent_mat_card_10_table_10_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 48);
} }
function FormTurnoComponent_mat_card_10_table_10_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 49);
} }
function FormTurnoComponent_mat_card_10_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormTurnoComponent_mat_card_10_table_10_th_2_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormTurnoComponent_mat_card_10_table_10_td_3_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormTurnoComponent_mat_card_10_table_10_th_5_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormTurnoComponent_mat_card_10_table_10_td_6_Template, 2, 2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormTurnoComponent_mat_card_10_table_10_th_8_Template, 2, 0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormTurnoComponent_mat_card_10_table_10_td_9_Template, 3, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormTurnoComponent_mat_card_10_table_10_tr_10_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormTurnoComponent_mat_card_10_table_10_tr_11_Template, 1, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r41.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r41.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r41.displayedColumns);
} }
function FormTurnoComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormTurnoComponent_mat_card_10_button_5_Template, 3, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormTurnoComponent_mat_card_10_button_6_Template, 3, 0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormTurnoComponent_mat_card_10_form_8_Template, 19, 6, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormTurnoComponent_mat_card_10_hr_9_Template, 1, 0, "hr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormTurnoComponent_mat_card_10_table_10_Template, 12, 3, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Detalle del turno ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r4.turno.inicio, "dd/MM/yyyy HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.showDetalleTurnoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleTurnoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleTurnoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesTurno.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesTurno.length > 0);
} }
class FormTurnoComponent {
    constructor(snackBar, ls, tipoTurnoSrvc, turnoSrvc, usuarioTipoSrvc, usuarioSrvc, dialog) {
        this.snackBar = snackBar;
        this.ls = ls;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.turnoSrvc = turnoSrvc;
        this.usuarioTipoSrvc = usuarioTipoSrvc;
        this.usuarioSrvc = usuarioSrvc;
        this.dialog = dialog;
        this.turnoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showTurnoForm = true;
        this.showDetalleTurnoForm = true;
        this.detallesTurno = [];
        this.displayedColumns = ['usuario_tipo', 'usuario', 'editItem'];
        this.tiposTurno = [];
        this.tiposUsuario = [];
        this.usuarios = [];
        this.esMovil = false;
        this.comandas = [];
        this.facturas = [];
        this.pendientes = false;
        this.loadTiposTurno = () => {
            this.tipoTurnoSrvc.get().subscribe(res => {
                if (res) {
                    this.tiposTurno = res;
                }
            });
        };
        this.loadTiposUsuario = () => {
            this.usuarioTipoSrvc.get().subscribe(res => {
                if (res) {
                    this.tiposUsuario = res;
                }
            });
        };
        this.loadUsuarios = () => {
            this.usuarioSrvc.get({ sede: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(res => {
                if (res) {
                    this.usuarios = res;
                }
            });
        };
        this.resetTurno = () => {
            this.pendientes = false;
            this.comandas = [];
            this.facturas = [];
            this.turno = {
                turno: null, turno_tipo: null, inicio: moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateTimeFormat), fin: null
            };
            this.resetDetalleTurno();
            this.detallesTurno = [];
            this.updateTableDataSource();
        };
        this.saveInfoTurno = () => {
            this.pendientes = false;
            this.turnoSrvc.save(this.turno).subscribe(res => {
                if (res.exito) {
                    this.turnoSavedEv.emit();
                    this.resetTurno();
                    this.turno = res.turno;
                    this.snackBar.open('Turno modificado con éxito...', 'Turno', { duration: 3000 });
                }
                else {
                    // console.log(res.mensaje);
                    if (res.pendientes) {
                        this.snackBar.open(`ERROR: Error al cerrar el turno`, 'Turno', { duration: 3000 });
                        this.pendientes = true;
                        this.comandas = res.comandas;
                        this.facturas = res.facturas;
                    }
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.onSubmit = () => {
            if (moment__WEBPACK_IMPORTED_MODULE_5__(this.turno.fin).isValid()) {
                const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                    maxWidth: '400px',
                    data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Cerrar turno', 'La fecha de finalización cerrará el turno. ¿Desea continuar?', 'Sí', 'No')
                });
                dialogRef.afterClosed().subscribe(res => {
                    if (res) {
                        this.saveInfoTurno();
                    }
                });
            }
            else {
                this.saveInfoTurno();
            }
        };
        this.resetDetalleTurno = () => this.detalleTurno = { turno: !!this.turno.turno ? this.turno.turno : null, usuario: null, usuario_tipo: null };
        this.loadDetalleTurno = (idturno = +this.turno.turno) => {
            this.turnoSrvc.getDetalle(idturno, { turno: idturno }).subscribe(res => {
                // console.log(res);
                if (res) {
                    this.detallesTurno = res;
                    this.updateTableDataSource();
                }
            });
        };
        this.onSubmitDetail = () => {
            this.detalleTurno.turno = this.turno.turno;
            // console.log(this.detalleTurno); return;
            this.turnoSrvc.saveDetalle(this.detalleTurno).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.loadDetalleTurno();
                    this.resetDetalleTurno();
                    this.snackBar.open('Usuario agregado al turno...', 'Turno', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.anularDetalleTurno = (obj) => {
            // console.log(obj);
            this.turnoSrvc.anularDetalle({
                turno: obj.turno, usuario: obj.usuario.usuario, usuario_tipo: obj.usuario_tipo.usuario_tipo
            }).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.loadDetalleTurno();
                    this.resetDetalleTurno();
                    this.snackBar.open('Se quitó al usuario del turno...', 'Turno', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.updateTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.detallesTurno);
        this.getNow = () => moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateTimeFormat);
        this.copiaDetalleTurno = () => {
            const dialogRef = this.dialog.open(_selecciona_turno_previo_selecciona_turno_previo_component__WEBPACK_IMPORTED_MODULE_4__["SeleccionaTurnoPrevioComponent"], {
                maxWidth: '400px',
                data: { turnoCopia: this.turno }
            });
            dialogRef.afterClosed().subscribe(() => this.loadDetalleTurno(+this.turno.turno));
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
        this.resetTurno();
        this.loadTiposTurno();
        this.loadTiposUsuario();
        this.loadUsuarios();
    }
}
FormTurnoComponent.ɵfac = function FormTurnoComponent_Factory(t) { return new (t || FormTurnoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_8__["TipoTurnoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_turno_service__WEBPACK_IMPORTED_MODULE_9__["TurnoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_10__["UsuarioTipoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"])); };
FormTurnoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTurnoComponent, selectors: [["app-form-turno"]], inputs: { turno: "turno" }, outputs: { turnoSavedEv: "turnoSavedEv" }, decls: 11, vars: 9, consts: [[1, "mat-elevation-z4", "fullWidth"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mat-elevation-z4 fullWidth", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmTurno", "ngForm"], [1, "form-group"], [1, "fullWidth"], ["name", "turno_tipo", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "datetime-locale", "placeholder", "Inicio", "name", "inicio", "required", "", 3, "ngModel", "ngModelChange"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matInput", "", "type", "datetime-locale", "placeholder", "Fin", "name", "fin", 3, "ngModel", "ngModelChange"], ["role", "group", "align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], [3, "value"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", 3, "click"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], [1, "row"], [1, "col"], [4, "ngFor", "ngForOf"], ["mat-table", "", "class", "mat-elevation-z4 full-width", 3, "dataSource", 4, "ngIf"], ["frmDetalleTurno", "ngForm"], ["name", "usuario_tipo", "required", "", 3, "ngModel", "ngModelChange"], ["name", "usuario", "required", "", 3, "ngModel", "ngModelChange"], ["align", "right"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z4", "full-width", 3, "dataSource"], ["matColumnDef", "usuario_tipo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-wrap", 4, "matCellDef"], ["matColumnDef", "usuario"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "editItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-wrap"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function FormTurnoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormTurnoComponent_button_5_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormTurnoComponent_button_6_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormTurnoComponent_form_8_Template, 23, 11, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormTurnoComponent_hr_9_Template, 1, 0, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormTurnoComponent_mat_card_10_Template, 11, 9, "mat-card", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Turno ", !!ctx.turno.turno ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx.turno.inicio, "dd/MM/yyyy HH:mm:ss") : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTurnoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTurnoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTurnoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.turno.turno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.turno.turno);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 34pt !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdHVybm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJmb3JtLXR1cm5vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMzRwdCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "vjxo":
/*!*******************************************************************************************************!*\
  !*** ./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ValidaPwdGerenteTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidaPwdGerenteTurnoComponent", function() { return ValidaPwdGerenteTurnoComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");











function ValidaPwdGerenteTurnoComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidaPwdGerenteTurnoComponent_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.data.pwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matKeyboard", ctx_r1.keyboardLayout)("ngModel", ctx_r1.data.pwd);
} }
function ValidaPwdGerenteTurnoComponent_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ValidaPwdGerenteTurnoComponent_input_7_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.data.pwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.data.pwd);
} }
class ValidaPwdGerenteTurnoComponent {
    constructor(dialogRef, comandaSrvc, ls) {
        this.dialogRef = dialogRef;
        this.comandaSrvc = comandaSrvc;
        this.ls = ls;
        this.data = { pwd: undefined };
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].IDIOMA_TECLADO;
        this.esMovil = false;
        this.cancelar = () => this.dialogRef.close();
        this.terminar = () => {
            this.comandaSrvc.validaPwdGerenteTurno(this.data.pwd).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.dialogRef.close(res.esgerente);
                }
                else {
                    this.dialogRef.close(false);
                }
            });
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).enmovil || false;
    }
}
ValidaPwdGerenteTurnoComponent.ɵfac = function ValidaPwdGerenteTurnoComponent_Factory(t) { return new (t || ValidaPwdGerenteTurnoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_3__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"])); };
ValidaPwdGerenteTurnoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidaPwdGerenteTurnoComponent, selectors: [["app-valida-pwd-gerente-turno"]], decls: 13, vars: 3, consts: [["mat-dialog-title", ""], ["novalidate", "", 3, "ngSubmit"], ["frmValidarPwdGerenteTurno", "ngForm"], [1, "fullWidth"], ["type", "password", "matInput", "", "placeholder", "Contrase\u00F1a del gerente de turno", "name", "pwd", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Contrase\u00F1a del gerente de turno", "name", "pwd", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "color", "secondary", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["type", "password", "matInput", "", "placeholder", "Contrase\u00F1a del gerente de turno", "name", "pwd", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["type", "password", "matInput", "", "placeholder", "Contrase\u00F1a del gerente de turno", "name", "pwd", "required", "", 3, "ngModel", "ngModelChange"]], template: function ValidaPwdGerenteTurnoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contrase\u00F1a del gerente de turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ValidaPwdGerenteTurnoComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return _r0.form.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValidaPwdGerenteTurnoComponent_input_6_Template, 1, 2, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ValidaPwdGerenteTurnoComponent_input_7_Template, 1, 1, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidaPwdGerenteTurnoComponent_Template_button_click_9_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ValidaPwdGerenteTurnoComponent_Template_button_click_11_listener() { return ctx.terminar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Eliminar producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_10__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGEtcHdkLWdlcmVudGUtdHVybm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "xul/":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-cocina/tran-cocina.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TranCocinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranCocinaComponent", function() { return TranCocinaComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var _shared_components_dialog_cocina_dialog_cocina_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dialog-cocina/dialog-cocina.component */ "NqNw");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/comanda.service */ "JKh+");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/desktop-notification.service */ "+iZS");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");















function TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_br_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const specs_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](specs_r12.trim());
} }
function TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_br_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Notas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", prod_r7.notas, " ");
} }
function TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_br_3_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_ng_container_4_Template, 4, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_br_5_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_span_6_Template, 4, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", prod_r7.cantidad, " ", prod_r7.articulo.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", prod_r7.detalle.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", prod_r7.detalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!prod_r7.notas && prod_r7.notas.length > 0 && !prod_r7.detalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!prod_r7.notas && prod_r7.notas.length > 0);
} }
function TranCocinaComponent_div_6_ng_container_10_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TranCocinaComponent_div_6_ng_container_10_table_1_tr_1_Template, 7, 6, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cta_r4.productos);
} }
function TranCocinaComponent_div_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TranCocinaComponent_div_6_ng_container_10_table_1_Template, 2, 1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cta_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cta_r4.productos.length > 0);
} }
function TranCocinaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TranCocinaComponent_div_6_ng_container_10_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranCocinaComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const cmd_r2 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.setCocinado(cmd_r2, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Vista");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Comanda #", cmd_r2.comanda, " - ", cmd_r2.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Area ", cmd_r2.mesa.area.nombre, " - Mesa #", cmd_r2.mesa.etiqueta || cmd_r2.mesa.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Atiende: ", cmd_r2.mesero.nombres, " ", cmd_r2.mesero.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cmd_r2.cuentas);
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_br_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const specs_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](specs_r27.trim());
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_br_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Notas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", prod_r22.notas, " ");
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_br_3_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_ng_container_4_Template, 4, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_br_5_Template, 1, 0, "br", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_span_6_Template, 4, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", prod_r22.cantidad, " ", prod_r22.articulo.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", prod_r22.detalle.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", prod_r22.detalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!prod_r22.notas && prod_r22.notas.length > 0 && !prod_r22.detalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!prod_r22.notas && prod_r22.notas.length > 0);
} }
function TranCocinaComponent_div_12_ng_container_14_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TranCocinaComponent_div_12_ng_container_14_table_1_tr_1_Template, 7, 6, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cta_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cta_r19.productos);
} }
function TranCocinaComponent_div_12_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TranCocinaComponent_div_12_ng_container_14_table_1_Template, 2, 1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cta_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cta_r19.productos.length > 0);
} }
const _c0 = function (a0) { return { "text-danger": a0 }; };
function TranCocinaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TranCocinaComponent_div_12_ng_container_14_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-card-actions", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TranCocinaComponent_div_12_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const cmdEnProceso_r17 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.setCocinado(cmdEnProceso_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Cocinado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmdEnProceso_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Comanda #", cmdEnProceso_r17.comanda, " - ", cmdEnProceso_r17.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Area ", cmdEnProceso_r17.mesa.area.nombre, " - Mesa #", cmdEnProceso_r17.mesa.etiqueta || cmdEnProceso_r17.mesa.numero, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Atiende: ", cmdEnProceso_r17.mesero.nombres, " ", cmdEnProceso_r17.mesero.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx_r1.comparaFecha(cmdEnProceso_r17)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 9, cmdEnProceso_r17.tiempo_transcurrido, "HH:mm:ss"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", cmdEnProceso_r17.cuentas);
} }
class TranCocinaComponent {
    constructor(ls, comandaSrvc, socket, dns, snackBar, dialog) {
        this.ls = ls;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.dns = dns;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.lstComandasCocina = [];
        this.lstComandasCocinaEnProceso = [];
        this.notificarUsuario = () => {
            const opciones = {
                icon: 'assets/img/minilogo.png',
                body: `Se recibió una nueva orden a las ${moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dateTimeFormat)}.`,
                dir: 'auto'
            };
            this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
        };
        this.loadComandasCocina = () => this.comandaSrvc.getComandasCocina().subscribe(res => {
            this.lstComandasCocina = res.pendientes;
            this.lstComandasCocinaEnProceso = res.enproceso;
            this.setTiempo();
        });
        this.setTiempo = () => {
            if (this.lstComandasCocinaEnProceso) {
                for (let i = 0; i < this.lstComandasCocinaEnProceso.length; i++) {
                    const comanda = this.lstComandasCocinaEnProceso[i];
                    const msecPerMinute = 1000 * 60;
                    const msecPerHour = msecPerMinute * 60;
                    const msecPerDay = msecPerHour * 24;
                    // asignar la fecha en milisegundos
                    let date = new Date(comanda.fecha_proceso);
                    this.lstComandasCocinaEnProceso[i].inicio_proceso = date;
                    comanda.inicio = date;
                    const dateMsec = date.getTime();
                    // asignar la fecha el 1 de enero del a la media noche
                    date = new Date();
                    // Obtener la diferencia en milisegundos
                    let interval = date.getTime() - dateMsec;
                    // Calcular cuentos días contiene el intervalo. Substraer cuantos días
                    // tiene el intervalo para determinar el sobrante
                    const days = Math.floor(interval / msecPerDay);
                    interval = interval - (days * msecPerDay);
                    // Calcular las horas , minutos y segundos
                    const hours = Math.floor(interval / msecPerHour);
                    interval = interval - (hours * msecPerHour);
                    const minutes = Math.floor(interval / msecPerMinute);
                    interval = interval - (minutes * msecPerMinute);
                    const seconds = Math.floor(interval / 1000);
                    const tiempo = new Date();
                    tiempo.setHours(hours);
                    tiempo.setMinutes(minutes);
                    tiempo.setSeconds(seconds);
                    this.lstComandasCocinaEnProceso[i].tiempo_transcurrido = tiempo;
                    if (comanda.tiempo_preparacion) {
                        // tslint:disable-next-line: variable-name
                        const tiempo_preparacion = comanda.tiempo_preparacion.split(':');
                        comanda.inicio.setHours(comanda.inicio.getHours() + (+tiempo_preparacion[0]));
                        comanda.inicio.setMinutes(comanda.inicio.getMinutes() + (+tiempo_preparacion[1]));
                        this.lstComandasCocinaEnProceso[i].fin_proceso = comanda.inicio;
                    }
                    else {
                        this.lstComandasCocinaEnProceso[i].fin_proceso = date;
                    }
                }
            }
        };
        this.comparaFecha = (cmd) => {
            const date = new Date();
            return date > cmd.fin_proceso;
        };
        this.setCocinado = (cmd, estatus = 2) => {
            const res = { respuesta: false, tiempo: '' };
            const confirmRef = this.dialog.open(_shared_components_dialog_cocina_dialog_cocina_component__WEBPACK_IMPORTED_MODULE_1__["DialogCocinaComponent"], {
                maxWidth: '400px',
                data: new _shared_components_dialog_cocina_dialog_cocina_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogModel"]('Cocina', `¿Seguro de marcar como '${+estatus === 1 ? 'vista' : 'cocinada'}' la comanda #${cmd.comanda}?`, 'Sí', 'No', res, +estatus === 1 ? true : false)
            });
            confirmRef.afterClosed().subscribe((conf) => {
                if (conf && conf.respuesta && conf.tiempo) {
                    // console.log(conf);
                    const datos = {
                        numero: +cmd.numero,
                        estatus: estatus,
                        tiempo: conf.tiempo
                    };
                    this.comandaSrvc.setComandaCocinada(+cmd.comanda, datos).subscribe((respuesta) => {
                        if (respuesta.exito) {
                            this.snackBar.open(respuesta.mensaje, 'Cocina', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(`ERROR: ${respuesta.mensaje}`, 'Cocina', { duration: 7000 });
                        }
                        this.loadComandasCocina();
                    });
                }
            });
        };
    }
    ngOnInit() {
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('refrescar:listaCocina', () => {
                this.loadComandasCocina();
                this.notificarUsuario();
            });
            setInterval(() => {
                this.setTiempo();
            }, 1000);
        }
        this.loadComandasCocina();
    }
}
TranCocinaComponent.ɵfac = function TranCocinaComponent_Factory(t) { return new (t || TranCocinaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_comanda_service__WEBPACK_IMPORTED_MODULE_5__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_7__["DesktopNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
TranCocinaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TranCocinaComponent, selectors: [["app-tran-cocina"]], decls: 13, vars: 2, consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxFlexFill", ""], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "bordeRght"], ["fxLayout", "row wrap", "fxLayoutGap", "10px grid", "fxFlexFill", "", "fxLayoutAlign", "start start", 1, "divContenedor"], ["fxFlex", "100%", "fxLayoutAlign", "center start"], ["fxFlex", "33%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxFlex.md", "50%", 4, "ngFor", "ngForOf"], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "bordeLft"], ["fxFlex", "33%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxFlex.md", "50%"], [1, "mat-elevation-z4"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [4, "ngIf"], ["align", "center"], [3, "ngClass"]], template: function TranCocinaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TranCocinaComponent_div_6_Template, 14, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "En Proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TranCocinaComponent_div_12_Template, 18, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lstComandasCocina);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lstComandasCocinaEnProceso);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".divContenedor[_ngcontent-%COMP%] {\n    margin-left: 5px !important;\n}\n\n.bordeRght[_ngcontent-%COMP%] {\n    border-right: solid 1.5px black;    \n}\n\n.bordeLft[_ngcontent-%COMP%] {\n    border-left: solid 1.5px black;    \n}\n\n.text-danger[_ngcontent-%COMP%] {\n    color: crimson;\n}\n\n.item[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n    white-space: nowrap;\n    word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW4tY29jaW5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InRyYW4tY29jaW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2Q29udGVuZWRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVSZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDEuNXB4IGJsYWNrOyAgICBcbn1cblxuLmJvcmRlTGZ0IHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMS41cHggYmxhY2s7ICAgIFxufVxuXG4udGV4dC1kYW5nZXIge1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufSJdfQ== */"] });


/***/ }),

/***/ "ytk9":
/*!********************************************************************!*\
  !*** ./src/app/restaurante/components/area/area/area.component.ts ***!
  \********************************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lista-area/lista-area.component */ "dBZW");
/* harmony import */ var _form_area_form_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-area/form-area.component */ "9x1t");



const _c0 = ["listaAreas"];
class AreaComponent {
    constructor() {
        this.setArea = (obj) => this.area = obj;
        this.refreshAreaList = () => {
            this.lstAreasComponent.loadEntidades();
        };
        this.area = { area: null, sede: null, nombre: null, impresora: null, impresora_factura: null };
    }
    ngOnInit() {
    }
}
AreaComponent.ɵfac = function AreaComponent_Factory(t) { return new (t || AreaComponent)(); };
AreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreaComponent, selectors: [["app-area"]], viewQuery: function AreaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lstAreasComponent = _t.first);
    } }, decls: 6, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getEntidadEv"], ["listaAreas", ""], [1, "col", "m7", "s12"], [3, "entidad", "entidadSavedEv"]], template: function AreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-lista-area", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getEntidadEv", function AreaComponent_Template_app_lista_area_getEntidadEv_2_listener($event) { return ctx.setArea($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-form-area", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("entidadSavedEv", function AreaComponent_Template_app_form_area_entidadSavedEv_5_listener() { return ctx.refreshAreaList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entidad", ctx.area);
    } }, directives: [_lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_1__["ListaAreaComponent"], _form_area_form_area_component__WEBPACK_IMPORTED_MODULE_2__["FormAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=restaurante-restaurante-module-es2015.js.map