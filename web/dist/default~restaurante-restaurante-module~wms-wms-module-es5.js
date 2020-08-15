(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~restaurante-restaurante-module~wms-wms-module"], {
        /***/ "./node_modules/file-saver/dist/FileSaver.min.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function (a, b) {
                if (true)
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
                        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                else { }
            })(this, function () {
                "use strict";
                function b(a, b) { return "undefined" == typeof b ? b = { autoBom: !1 } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = { autoBom: !b }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], { type: a.type }) : a; }
                function c(b, c, d) { var e = new XMLHttpRequest; e.open("GET", b), e.responseType = "blob", e.onload = function () { a(e.response, c, d); }, e.onerror = function () { console.error("could not download file"); }, e.send(); }
                function d(a) { var b = new XMLHttpRequest; b.open("HEAD", a, !1); try {
                    b.send();
                }
                catch (a) { } return 200 <= b.status && 299 >= b.status; }
                function e(a) { try {
                    a.dispatchEvent(new MouseEvent("click"));
                }
                catch (c) {
                    var b = document.createEvent("MouseEvents");
                    b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
                } }
                var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.saveAs || ("object" != typeof window || window !== f ? function () { } : "download" in HTMLAnchorElement.prototype ? function (b, g, h) { var i = f.URL || f.webkitURL, j = document.createElement("a"); g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () { i.revokeObjectURL(j.href); }, 4E4), setTimeout(function () { e(j); }, 0)); } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) { if (g = g || f.name || "download", "string" != typeof f)
                    navigator.msSaveOrOpenBlob(b(f, h), g);
                else if (d(f))
                    c(f, g, h);
                else {
                    var i = document.createElement("a");
                    i.href = f, i.target = "_blank", setTimeout(function () { e(i); });
                } } : function (a, b, d, e) { if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a)
                    return c(a, b, d); var g = "application/octet-stream" === a.type, h = /constructor/i.test(f.HTMLElement) || f.safari, i = /CriOS\/[\d]+/.test(navigator.userAgent); if ((i || g && h) && "object" == typeof FileReader) {
                    var j = new FileReader;
                    j.onloadend = function () { var a = j.result; a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null; }, j.readAsDataURL(a);
                }
                else {
                    var k = f.URL || f.webkitURL, l = k.createObjectURL(a);
                    e ? e.location = l : location.href = l, e = null, setTimeout(function () { k.revokeObjectURL(l); }, 4E4);
                } });
                f.saveAs = a.saveAs = a, true && (module.exports = a);
            });
            //# sourceMappingURL=FileSaver.min.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/egreso/egreso.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/egreso/egreso.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-egreso #lstEgreso (getEgresoEv)=\"setEgreso($event)\"></app-lista-egreso>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-egreso #frmEgreso [egreso]=\"egreso\" (egresoSavedEv)=\"refreshEgresoList()\"></app-form-egreso>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/form-egreso/form-egreso.component.html": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/form-egreso/form-egreso.component.html ***!
          \********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Egreso{{!!egreso.egreso ? (' No. ' + egreso.egreso) : ''}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showEgresoForm = true;\"\n                *ngIf=\"!showEgresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showEgresoForm = false;\"\n                *ngIf=\"showEgresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmEgreso=\"ngForm\" *ngIf=\"showEgresoForm\" (ngSubmit)=\"frmEgreso.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Tipo de movimiento</mat-label>\n                <mat-select name=\"tipo_movimiento\" [(ngModel)]=\"egreso.tipo_movimiento\" required>\n                    <mat-option *ngFor=\"let tm of tiposMovimiento\" [value]=\"tm.tipo_movimiento\">\n                        {{tm.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <input matInput type=\"date\" placeholder=\"Fecha\" name=\"fecha\" [(ngModel)]=\"egreso.fecha\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Bodega</mat-label>\n                <mat-select name=\"bodega\" [(ngModel)]=\"egreso.bodega\" required>\n                    <mat-option *ngFor=\"let bode of bodegas\" [value]=\"bode.bodega\">\n                        {{bode.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-checkbox name=\"traslado\" class=\"fullWidth\" [(ngModel)]=\"+egreso.traslado\">¿Es traslado?</mat-checkbox>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Tipo de movimiento destino</mat-label>\n                <mat-select name=\"tipo_movimiento_destino\" [(ngModel)]=\"egreso.tipo_movimiento_destino\"\n                    [required]=\"+egreso.traslado == 1\">\n                    <mat-option *ngFor=\"let tmD of tiposMovimiento\" [value]=\"tmD.tipo_movimiento\">\n                        {{tmD.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Proveedor</mat-label>\n                <mat-select name=\"proveedor\" [(ngModel)]=\"egreso.proveedor\" [required]=\"+egreso.traslado == 1\">\n                    <mat-option *ngFor=\"let prov of proveedores\" [value]=\"prov.proveedor\">\n                        ({{prov.nit}}) {{prov.razon_social}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Bodega destino</mat-label>\n                <mat-select name=\"bodega_destino\" [(ngModel)]=\"egreso.bodega_destino\"\n                    [required]=\"+egreso.traslado == 1\">\n                    <mat-option *ngFor=\"let bodeDest of bodegas\" [value]=\"bodeDest.bodega\">\n                        {{bodeDest.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\"\n                    [disabled]=\"!frmEgreso.form.valid || [2, 3].indexOf(+egreso.estatus_movimiento) >= 0\"\n                    *ngIf=\"saveToDB\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" (click)=\"confirmarEgreso()\"\n                    *ngIf=\"egreso.egreso && detallesEgreso.length > 0\"\n                    [disabled]=\"!frmEgreso.form.valid || [2, 3].indexOf(+egreso.estatus_movimiento) >= 0\">Confirmar</button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetEgreso()\" *ngIf=\"egreso.egreso\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n<hr *ngIf=\"egreso.egreso || !saveToDB\" />\n<mat-card class=\"mat-elevation-z4 fullWidth\" *ngIf=\"egreso.egreso || !saveToDB\">\n    <mat-card-title>\n        <h4>\n            Detalle del egreso {{saveToDB ? 'No.' : ''}} {{egreso.egreso}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleEgresoForm = true;\"\n                *ngIf=\"!showDetalleEgresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleEgresoForm = false;\"\n                *ngIf=\"showDetalleEgresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmDetalleEgreso=\"ngForm\" *ngIf=\"showDetalleEgresoForm\"\n            (ngSubmit)=\"frmDetalleEgreso.form.valid && onSubmitDetail()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Artículo</mat-label>\n                <mat-select name=\"articulo\" [(ngModel)]=\"detalleEgreso.articulo\" required>\n                    <mat-option *ngFor=\"let a of articulos\" [value]=\"a.articulo\">\n                        {{a.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Presentación</mat-label>\n                <mat-select name=\"presentacion\" [(ngModel)]=\"detalleEgreso.presentacion\" required>\n                    <mat-option *ngFor=\"let p of presentaciones\" [value]=\"p.presentacion\">\n                        {{p.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Cantidad\" name=\"cantidad\" [(ngModel)]=\"detalleEgreso.cantidad\"\n                    (change)=\"detalleEgreso.precio_total = +detalleEgreso.precio_unitario * +detalleEgreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Cantidad\" placeholder=\"Cantidad\" name=\"cantidad\"\n                    [(ngModel)]=\"detalleEgreso.cantidad\"\n                    (change)=\"detalleEgreso.precio_total = +detalleEgreso.precio_unitario * +detalleEgreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Costo unitario\" name=\"precio_unitario\"\n                    [(ngModel)]=\"detalleEgreso.precio_unitario\"\n                    (change)=\"detalleEgreso.precio_total = +detalleEgreso.precio_unitario * +detalleEgreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Costo unitario\" placeholder=\"Costo unitario\" name=\"precio_unitario\"\n                    [(ngModel)]=\"detalleEgreso.precio_unitario\"\n                    (change)=\"detalleEgreso.precio_total = +detalleEgreso.precio_unitario * +detalleEgreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\"\n                    [disabled]=\"!frmDetalleEgreso.form.valid || [2, 3].indexOf(+egreso.estatus_movimiento) >= 0\"\n                    *ngIf=\"saveToDB\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"addToDetail()\"\n                    [disabled]=\"!frmDetalleEgreso.form.valid || [2, 3].indexOf(+egreso.estatus_movimiento) >= 0\"\n                    *ngIf=\"!saveToDB\">\n                    Nuevo\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetDetalleEgreso()\"\n                    *ngIf=\"detalleEgreso.egreso_detalle\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n        <hr *ngIf=\"detallesEgreso.length > 0\" />\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4 full-width\"\n            *ngIf=\"detallesEgreso.length > 0\">\n            <ng-container matColumnDef=\"articulo\">\n                <th mat-header-cell *matHeaderCellDef>Artículo</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    {{saveToDB ? element.articulo.descripcion : getDescripcionArticulo(element.articulo)}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"articulo\">\n                <th mat-header-cell *matHeaderCellDef>Presentación</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    {{saveToDB ? element.presentacion.descripcion : getDescripcionPresentacion(element.presentacion)}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"cantidad\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Cantidad</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.cantidad | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"precio_unitario\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Costo Unitario</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.precio_unitario | number:'1.2-2'}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"precio_total\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Costo Total</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.precio_total | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"editItem\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\"\n                        (click)=\"getDetalleEgreso(element.egreso, element.egreso_detalle)\"\n                        [disabled]=\"[2, 3].indexOf(+egreso.estatus_movimiento) >= 0\" *ngIf=\"saveToDB\">\n                        Editar\n                    </button>\n                    <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"removeFromDetail(element.articulo)\"\n                        [disabled]=\"[2, 3].indexOf(+egreso.estatus_movimiento) >= 0\" *ngIf=\"!saveToDB\">\n                        Eliminar\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n    </mat-card-content>\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstEgresosPaged\" (click)=\"getEgreso(element)\">\n                <mat-icon mat-list-icon>trending_down</mat-icon>\n                <h5 mat-line>No. {{element.egreso}}</h5><br/>\n                <p mat-line>\n                    Fecha: {{element.fecha | date: 'dd/MM/yyyy'}}<br/>\n                    Bodega: {{element.bodega.descripcion}}<br/>\n                </p>\n            </mat-list-item>\n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Ingreso{{!!ingreso.ingreso ? (' No. ' + ingreso.ingreso) : ''}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showIngresoForm = true;\"\n                *ngIf=\"!showIngresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showIngresoForm = false;\"\n                *ngIf=\"showIngresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmIngreso=\"ngForm\" *ngIf=\"showIngresoForm\" (ngSubmit)=\"frmIngreso.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Tipo de movimiento</mat-label>\n                <mat-select name=\"tipo_movimiento\" [(ngModel)]=\"ingreso.tipo_movimiento\" required>\n                    <mat-option *ngFor=\"let tm of tiposMovimiento\" [value]=\"tm.tipo_movimiento\">\n                        {{tm.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <input matInput type=\"date\" placeholder=\"Fecha\" name=\"fecha\" [(ngModel)]=\"ingreso.fecha\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Bodega</mat-label>\n                <mat-select name=\"bodega\" [(ngModel)]=\"ingreso.bodega\" required>\n                    <mat-option *ngFor=\"let bode of bodegas\" [value]=\"bode.bodega\">\n                        {{bode.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Bodega de origen</mat-label>\n                <mat-select name=\"bodega_origen\" [(ngModel)]=\"ingreso.bodega_origen\">\n                    <mat-option *ngFor=\"let bodeO of bodegas\" [value]=\"bodeO.bodega\">\n                        {{bodeO.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Proveedor</mat-label>\n                <mat-select name=\"proveedor\" [(ngModel)]=\"ingreso.proveedor\" required>\n                    <mat-option *ngFor=\"let prov of proveedores\" [value]=\"prov.proveedor\">\n                        ({{prov.nit}}) {{prov.razon_social}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Comentarios\" name=\"comentario\" [(ngModel)]=\"ingreso.comentario\">\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                    ng-virtual-keyboard-placeholder=\"Comentarios\" placeholder=\"Comentarios\" name=\"comentario\"\n                    [(ngModel)]=\"ingreso.comentario\">\n            </mat-form-field>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmIngreso.form.valid\"\n                    *ngIf=\"saveToDB\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetIngreso()\" *ngIf=\"ingreso.ingreso\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n<hr *ngIf=\"ingreso.ingreso || !saveToDB\" />\n<mat-card class=\"mat-elevation-z4 fullWidth\" *ngIf=\"ingreso.ingreso || !saveToDB\">\n    <mat-card-title>\n        <h4>\n            Detalle del ingreso {{saveToDB ? 'No.' : ''}} {{ingreso.ingreso}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleIngresoForm = true;\"\n                *ngIf=\"!showDetalleIngresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleIngresoForm = false;\"\n                *ngIf=\"showDetalleIngresoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmDetalleIngreso=\"ngForm\" *ngIf=\"showDetalleIngresoForm\" (ngSubmit)=\"frmDetalleIngreso.form.valid && onSubmitDetail()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Artículo</mat-label>\n                <mat-select name=\"articulo\" [(ngModel)]=\"detalleIngreso.articulo\" required>\n                    <mat-option *ngFor=\"let a of articulos\" [value]=\"a.articulo\">\n                        {{a.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Presentación</mat-label>\n                <mat-select name=\"presentacion\" [(ngModel)]=\"detalleIngreso.presentacion\" required>\n                    <mat-option *ngFor=\"let p of presentaciones\" [value]=\"p.presentacion\">\n                        {{p.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Cantidad\" name=\"cantidad\" [(ngModel)]=\"detalleIngreso.cantidad\"\n                    (change)=\"detalleIngreso.precio_total = +detalleIngreso.precio_unitario * +detalleIngreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Cantidad\" placeholder=\"Cantidad\" name=\"cantidad\"\n                    [(ngModel)]=\"detalleIngreso.cantidad\"\n                    (change)=\"detalleIngreso.precio_total = +detalleIngreso.precio_unitario * +detalleIngreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Costo unitario\" name=\"precio_unitario\"\n                    [(ngModel)]=\"detalleIngreso.precio_unitario\"\n                    (change)=\"detalleIngreso.precio_total = +detalleIngreso.precio_unitario * +detalleIngreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Costo unitario\" placeholder=\"Costo unitario\" name=\"precio_unitario\"\n                    [(ngModel)]=\"detalleIngreso.precio_unitario\"\n                    (change)=\"detalleIngreso.precio_total = +detalleIngreso.precio_unitario * +detalleIngreso.cantidad\"\n                    required>\n            </mat-form-field>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmDetalleIngreso.form.valid\"\n                    *ngIf=\"saveToDB\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"addToDetail()\"\n                    [disabled]=\"!frmDetalleIngreso.form.valid || [2, 3].indexOf(+ingreso.estatus_movimiento) >= 0\"\n                    *ngIf=\"!saveToDB\">\n                    Nuevo\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetDetalleIngreso()\"\n                    *ngIf=\"detalleIngreso.ingreso_detalle\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n        <hr *ngIf=\"detallesIngreso.length > 0\" />\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4 full-width\"\n            *ngIf=\"detallesIngreso.length > 0\">\n            <ng-container matColumnDef=\"articulo\">\n                <th mat-header-cell *matHeaderCellDef>Artículo</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    {{saveToDB ? element.articulo.descripcion : getDescripcionArticulo(element.articulo)}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"presentacion\">\n                <th mat-header-cell *matHeaderCellDef>Presentación</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    {{saveToDB ? element.presentacion.descripcion : getDescripcionPresentacion(element.presentacion)}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"cantidad\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Cantidad</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.cantidad | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"costo_unitario\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Costo Unitario</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.precio_unitario | number:'1.2-2'}}\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"costo_total\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Costo Total</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.precio_total | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"deleteItem\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    <button mat-raised-button type=\"button\" color=\"accent\"\n                        (click)=\"getDetalleIngreso(element.ingreso, element.ingreso_detalle)\" *ngIf=\"saveToDB\">\n                        Editar\n                    </button>\n                    <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"removeFromDetail(element.articulo)\"\n                        [disabled]=\"[2, 3].indexOf(+ingreso.estatus_movimiento) >= 0\" *ngIf=\"!saveToDB\">\n                        Editar\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n    </mat-card-content>\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/ingreso/ingreso.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/ingreso/ingreso.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-ingreso #lstIngreso (getIngresoEv)=\"setIngreso($event)\"></app-lista-ingreso>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-ingreso #frmIngreso [ingreso]=\"ingreso\" (ingresoSavedEv)=\"refreshIngresoList()\"></app-form-ingreso>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\" style=\"height: 100% important;\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\">\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstIngresosPaged\" (click)=\"getIngreso(element)\">\n                <mat-icon mat-list-icon>trending_up</mat-icon>\n                <h5 mat-line>No. {{element.ingreso}}</h5><br/>\n                <p mat-line>\n                    Fecha: {{element.fecha | date: 'dd/MM/yyyy'}}<br/>\n                    Bodega: {{element.bodega.descripcion}}<br/>\n                </p>\n                <p mat-line>\n                    Proveedor: {{element.proveedor.razon_social}}\n                </p>\n            </mat-list-item>                        \n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/categoria-producto/categoria-producto.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/categoria-producto/categoria-producto.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div *ngIf=\"!showCategoriasForm\">\n        <div align=\"center\">\n            <button mat-button type=\"button\" color=\"accent\" (click)=\"showCategoriasForm = true; resetCategoria();\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>&nbsp;Categorías y sub-categorías\n            </button>\n        </div>\n    </div>\n    <div *ngIf=\"showCategoriasForm\">\n        <div align=\"center\">\n            <button mat-button type=\"button\" color=\"accent\" (click)=\"showCategoriasForm = false; resetCategoria();\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>&nbsp;Categorías y sub-categorías\n            </button>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"showCategoriasForm\">\n    <div>\n        <form #frmCategoria=\"ngForm\" novalidate>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!editCategoriaMode\">\n                <mat-label>Categoría</mat-label>\n                <mat-select name=\"categoria\" [(ngModel)]=\"categoria\" (selectionChange)=\"onCategoriaSelected($event)\">\n                    <mat-option *ngFor=\"let cat of categorias\" [value]=\"cat\">\n                        {{cat.descripcion}}\n                    </mat-option>\n                </mat-select>\n                <!--Inicio de botones para edición y nueva-->\n                <button mat-raised-button type=\"button\" matSuffix color=\"accent\" class=\"btnAccion\"\n                    (click)=\"editCategoriaMode = true;\" *ngIf=\"!editCategoriaMode && +categoria.categoria > 0\">\n                    Editar\n                </button>\n                <button mat-raised-button type=\"button\" matSuffix color=\"accent\"\n                    (click)=\"resetCategoria(); editCategoriaMode = true;\" *ngIf=\"!editCategoriaMode\">\n                    Nueva\n                </button>\n                <!--Fin de botones para edición y nueva-->\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil && editCategoriaMode\">\n                <input matInput placeholder=\"Descripcion de la categoría\" name=\"descripcion\"\n                    [(ngModel)]=\"categoria.descripcion\" [required]=\"editCategoriaMode\">\n                <!--Inicia botones de guardar y cancelar-->\n                <button mat-raised-button type=\"button\" matSuffix color=\"accent\" class=\"btnAccion\"\n                    (click)=\"onSubmitCategoria()\" [disabled]=\"!frmCategoria.form.valid\" *ngIf=\"editCategoriaMode\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" matSuffix color=\"warn\" (click)=\"resetCategoria()\"\n                    *ngIf=\"editCategoriaMode\">\n                    Cancelar\n                </button>\n                <!--Fin de botones de guardar y cancelar-->\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil && editCategoriaMode\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                    ng-virtual-keyboard-placeholder=\"Descripcion de la categoría\"\n                    placeholder=\"Descripcion de la categoría\" name=\"descripcion\" [(ngModel)]=\"categoria.descripcion\"\n                    [required]=\"editCategoriaMode\">\n                <!--Inicia botones de guardar y cancelar cuando no es móvil-->\n                <button mat-raised-button type=\"button\" matSuffix color=\"accent\" class=\"btnAccion\"\n                    (click)=\"onSubmitCategoria()\" [disabled]=\"!frmCategoria.form.valid\" *ngIf=\"editCategoriaMode\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" matSuffix color=\"warn\" (click)=\"resetCategoria()\"\n                    *ngIf=\"editCategoriaMode\">\n                    Cancelar\n                </button>\n                <!--Fin de botones de guardar y cancelar cuando no es móvil-->\n            </mat-form-field>\n        </form>\n    </div>\n</div>\n<div *ngIf=\"showCategoriasForm\">\n    <form #frmCategoriaGrupo=\"ngForm\" novalidate>\n        <mat-form-field class=\"fullWidth\">\n            <mat-label>Sub-categoría Padre</mat-label>\n            <mat-select name=\"categoriaGrupoPadre\" [(ngModel)]=\"categoriaGrupo.categoria_grupo_grupo\"\n                (selectionChange)=\"onSubCategoriaPadreSelected($event)\">\n                <mat-option *ngFor=\"let subcatpadre of categoriasGruposPadre\" [value]=\"subcatpadre.categoria_grupo\">\n                    {{subcatpadre.descripcion}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"fullWidth\" *ngIf=\"!editSubCategoriaMode\">\n            <mat-label>Sub-categoría</mat-label>\n            <mat-select name=\"categoriaGrupo\" [(ngModel)]=\"categoriaGrupo\"\n                (selectionChange)=\"onSubCategoriaSelected($event)\">\n                <mat-option *ngFor=\"let subcat of categoriasGrupos\" [value]=\"subcat\">\n                    {{subcat.descripcion}}\n                </mat-option>\n            </mat-select>\n            <button mat-raised-button type=\"button\" matSuffix color=\"accent\" class=\"btnAccion\"\n                (click)=\"editSubCategoriaMode = true;\"\n                *ngIf=\"!editSubCategoriaMode && +categoriaGrupo.categoria_grupo > 0\">\n                Editar\n            </button>\n            <button mat-raised-button type=\"button\" matSuffix color=\"accent\"\n                (click)=\"resetCategoriaGrupo(); editSubCategoriaMode = true;\" *ngIf=\"!editSubCategoriaMode\">\n                Nueva\n            </button>\n        </mat-form-field>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil && editSubCategoriaMode\">\n            <input matInput placeholder=\"Descripcion de la sub - categoría\" name=\"descripcion\"\n                [(ngModel)]=\"categoriaGrupo.descripcion\" [required]=\"editCategoriaMode\">\n        </mat-form-field>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil && editSubCategoriaMode\">\n            <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                ng-virtual-keyboard-placeholder=\"Descripcion de la sub - categoría\"\n                placeholder=\"Descripcion de la sub - categoría\" name=\"descripcion\"\n                [(ngModel)]=\"categoriaGrupo.descripcion\" [required]=\"editCategoriaMode\">\n        </mat-form-field>\n        <mat-checkbox name=\"descuento\" class=\"fullWidth\" [(ngModel)]=\"+categoriaGrupo.descuento\">¿Aplica Descuento?\n        </mat-checkbox>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"editSubCategoriaMode\">\n            <mat-label>Impresora</mat-label>\n            <mat-select name=\"impresora\" [(ngModel)]=\"categoriaGrupo.impresora\" im>\n                <mat-option *ngFor=\"let imp of impresoras\" [value]=\"imp.impresora\">\n                    {{imp.nombre}}\n                </mat-option>\n            </mat-select>\n            <button mat-raised-button type=\"button\" matSuffix color=\"accent\" class=\"btnAccion\" (click)=\"onSubmitSubCategoria()\"\n                [disabled]=\"!frmCategoriaGrupo.form.valid\" *ngIf=\"editSubCategoriaMode\">\n                Guardar\n            </button>\n            <button mat-raised-button type=\"button\" matSuffix color=\"warn\" (click)=\"resetCategoriaGrupo()\"\n                *ngIf=\"editSubCategoriaMode\">\n                Cancelar\n            </button>\n        </mat-form-field>\n    </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/form-producto/form-producto.component.html": 
        /*!**************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/form-producto/form-producto.component.html ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Artículo {{!!articulo.articulo ? articulo.descripcion: ''}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showArticuloForm = true;\"\n                *ngIf=\"!showArticuloForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showArticuloForm = false;\"\n                *ngIf=\"showArticuloForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmArticulo=\"ngForm\" *ngIf=\"showArticuloForm\" (ngSubmit)=\"frmArticulo.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput type=\"text\" placeholder=\"Descripcion\" name=\"descripcion\"\n                    [(ngModel)]=\"articulo.descripcion\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                    ng-virtual-keyboard-placeholder=\"Descripción\" type=\"text\" placeholder=\"Descripción\"\n                    name=\"descripcion\" [(ngModel)]=\"articulo.descripcion\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput type=\"number\" placeholder=\"Precio\" name=\"precio\" [(ngModel)]=\"articulo.precio\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Precio\" type=\"number\" placeholder=\"Precio\" name=\"precio\"\n                    [(ngModel)]=\"articulo.precio\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Presentación</mat-label>\n                <mat-select name=\"presentacion\" [(ngModel)]=\"articulo.presentacion\">\n                    <mat-option *ngFor=\"let p of presentaciones\" [value]=\"p.presentacion\">\n                        {{p.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput type=\"text\" placeholder=\"Código\" name=\"codigo\" [(ngModel)]=\"articulo.codigo\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Código\" type=\"text\" placeholder=\"Código\" name=\"codigo\"\n                    [(ngModel)]=\"articulo.codigo\" required>\n            </mat-form-field>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmArticulo.form.valid || !articulo.categoria_grupo\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetArticulo()\" *ngIf=\"articulo.articulo\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n<hr *ngIf=\"articulo.articulo\" />\n<mat-card class=\"mat-elevation-z4 fullWidth\" *ngIf=\"articulo.articulo\">\n    <mat-card-title>\n        <h4>\n            Detalle del artículo {{articulo.descripcion}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleForm = true;\"\n                *ngIf=\"!showDetalleForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleForm = false;\"\n                *ngIf=\"showDetalleForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmDetalleArticulo=\"ngForm\" *ngIf=\"showDetalleForm\" (ngSubmit)=\"frmDetalleArticulo.form.valid && onSubmitDetail()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Artículo</mat-label>\n                <mat-select name=\"articulo\" [(ngModel)]=\"receta.articulo\" required>\n                    <mat-option *ngFor=\"let a of articulos\" [value]=\"a.articulo\">\n                        {{a.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Cantidad\" name=\"cantidad\" [(ngModel)]=\"receta.cantidad\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                    ng-virtual-keyboard-placeholder=\"Cantidad\" placeholder=\"Cantidad\" name=\"cantidad\"\n                    [(ngModel)]=\"receta.cantidad\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Unidad de medida</mat-label>\n                <mat-select name=\"medida\" [(ngModel)]=\"receta.medida\" required>\n                    <mat-option *ngFor=\"let m of medidas\" [value]=\"m.medida\">\n                        {{m.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-checkbox name=\"racionable\" class=\"fullWidth\" [(ngModel)]=\"+receta.racionable\">¿Es racionable?</mat-checkbox>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmDetalleArticulo.form.valid\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetReceta()\" *ngIf=\"receta.articulo_detalle\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n        <hr *ngIf=\"recetas.length > 0\" />\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4 full-width\" *ngIf=\"recetas.length > 0\">\n            <ng-container matColumnDef=\"articulo\">\n                <th mat-header-cell *matHeaderCellDef>Artículo</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">{{element.articulo.descripcion}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"cantidad\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Cantidad</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.cantidad | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"medida\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Unida de medida</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.medida.descripcion}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"editItem\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"getReceta(element.receta, element.articulo_detalle)\">\n                        Editar\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n    </mat-card-content>\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <button mat-raised-button class=\"btnAccion\" color=\"primary\" *ngFor=\"let sc of subcategorias\"\n            (click)=\"clickOnSubCategoria(sc)\">\n            {{sc.descripcion}}\n        </button>\n    </div>\n</div>\n<hr *ngIf=\"articulos.length > 0\" />\n<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <button mat-raised-button class=\"btnAccion\" color=\"warn\" *ngFor=\"let art of articulos\"\n            (click)=\"clickOnArticulo(art)\">\n            {{art.descripcion}}\n        </button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto/lista-producto.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto/lista-producto.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\" [style.height]=\"treeHeight\">\n    <!-- This is the tree node template for leaf nodes -->\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n        <li class=\"mat-tree-node\">\n            <!-- use a disabled button to provide padding for tree leaf -->\n            <button mat-icon-button disabled></button>\n            <span *ngIf=\"tieneHijos(node)\">{{node.nombre}}</span>\n            <button mat-raised-button type=\"button\" *ngIf=\"!tieneHijos(node)\"\n                (click)=\"onProductoClicked(node)\">{{node.nombre}}</button>\n        </li>\n    </mat-tree-node>\n    <!-- This is the tree node template for expandable nodes -->\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n        <li>\n            <div class=\"mat-tree-node\">\n                <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.nombre\">\n                    <mat-icon class=\"mat-icon-rtl-mirror\" style=\"font-size: 24pt !important;\">\n                        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                    </mat-icon>\n                </button>\n                <span *ngIf=\"tieneHijos(node)\">{{node.nombre}}</span>\n                <button mat-raised-button type=\"button\" *ngIf=\"!tieneHijos(node)\" (click)=\"onProductoClicked(node);\">{{node.nombre}}</button>\n            </div>\n            <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n                <ng-container matTreeNodeOutlet></ng-container>\n            </ul>\n        </li>\n    </mat-nested-tree-node>\n</mat-tree>\n<!--\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n    \n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n        <li class=\"mat-tree-node\">\n            \n            <button mat-icon-button disabled></button>\n            {{node.nombre}}\n        </li>\n    </mat-tree-node>\n    \n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n        <li>\n            <div class=\"mat-tree-node\">\n                <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.nombre\">\n                    <mat-icon class=\"mat-icon-rtl-mirror\">\n                        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                    </mat-icon>\n                </button>\n                {{node.nombre}}\n            </div>\n            <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n                <ng-container matTreeNodeOutlet></ng-container>\n            </ul>\n        </li>\n    </mat-nested-tree-node>\n</mat-tree>\n-->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/producto/producto.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/producto/producto.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-categoria-producto (categoriaGrupoSvd)=\"refreshArticuloList($event)\"\n            (onChangeSubCategoriaEv)=\"setArticuloCategoriaGrupo($event)\"></app-categoria-producto>\n        <app-lista-producto #lstProducto [treeHeight]=\"'100%'\" (productoClickedEv)=\"setArticulo($event)\">\n        </app-lista-producto>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-producto #frmProducto [articulo]=\"articulo\" (articuloSvd)=\"refreshArticuloList($event)\">\n        </app-form-producto>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/existencias/existencias.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/existencias/existencias.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m12 s12\">\n    <mat-card class=\"mat-elevation-z4 fullWidth\">\n      <mat-card-title>\n        <h4>Reporte de existencias</h4>\n      </mat-card-title>\n      <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" novalidate>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Bodega</mat-label>\n              <mat-select name=\"bodega\" [(ngModel)]=\"params.bodega\">\n                  <mat-option *ngFor=\"let bod of bodegas\" [value]=\"bod.bodega\">\n                      {{bod.descripcion}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Sede</mat-label>\n              <mat-select name=\"sede\" [(ngModel)]=\"params.sede\">\n                  <mat-option *ngFor=\"let sede of sedes\" [value]=\"sede.sede\">\n                      {{sede.nombre}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Al\" [(ngModel)]=\"params.fecha\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <div align=\"end\">\n            <button mat-button color=\"accent\" type=\"submit\">GENERAR</button>\n          </div>\n        </form>        \n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/kardex/kardex.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/kardex/kardex.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m12 s12\">\n    <mat-card class=\"mat-elevation-z4 fullWidth\">\n      <mat-card-title>\n        <h4>Kardex</h4>\n      </mat-card-title>\n      <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" novalidate>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Articulo</mat-label>\n              <mat-select name=\"articulo\" [(ngModel)]=\"params.articulo\" required>\n                  <mat-option *ngFor=\"let art of articulos\" [value]=\"art.articulo\">\n                      {{art.descripcion}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Bodega</mat-label>\n              <mat-select name=\"bodega\" [(ngModel)]=\"params.bodega\">\n                  <mat-option *ngFor=\"let bod of bodegas\" [value]=\"bod.bodega\">\n                      {{bod.descripcion}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Sede</mat-label>\n              <mat-select name=\"sede\" [(ngModel)]=\"params.sede\">\n                  <mat-option *ngFor=\"let sede of sedes\" [value]=\"sede.sede\">\n                      {{sede.nombre}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Del\" [(ngModel)]=\"params.fdel\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Al\" [(ngModel)]=\"params.fal\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <div align=\"end\">\n            <button mat-button color=\"accent\" type=\"submit\">GENERAR</button>\n          </div>\n        </form>        \n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/transformacion/transformacion.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/transformacion/transformacion.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\" style=\"padding-bottom: 5px !important;\">\n        <div align=\"end\">\n            <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"transformar()\">\n                <mat-icon style=\"font-size: 18pt;\">transform</mat-icon>&nbsp;Transformar\n            </button>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col m6 s12\">\n        <app-form-egreso #frmEgreso [(egreso)]=\"egreso\" [saveToDB]=\"false\" (egresoSavedEv)=\"doSomething()\">\n        </app-form-egreso>\n    </div>\n    <div class=\"col m6 s12\">\n        <app-form-ingreso #frmIngreso [(ingreso)]=\"ingreso\" [saveToDB]=\"false\" (ingresoSavedEv)=\"doSomething()\">\n        </app-form-ingreso>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/restaurante/services/reporte-pdf.service.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/restaurante/services/reporte-pdf.service.ts ***!
          \*************************************************************/
        /*! exports provided: ReportePdfService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportePdfService", function () { return ReportePdfService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ReportePdfService = /** @class */ (function () {
                function ReportePdfService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.usrToken = null;
                    this.httpOptions = { responseType: 'blob' };
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                    this.httpOptions['headers'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Authorization': this.usrToken,
                        'Accept': 'application/pdf'
                    });
                }
                ReportePdfService.prototype.getReporteCaja = function (params) {
                    this.httpOptions['params'] = params;
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante + "/reporte/caja", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                ReportePdfService.prototype.getReporteExistencia = function (params) {
                    this.httpOptions['params'] = params;
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/reporte/existencia", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                ReportePdfService.prototype.getReporteKardex = function (params) {
                    this.httpOptions['params'] = params;
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/reporte/kardex", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                ReportePdfService.prototype.getReporteFactura = function (params) {
                    this.httpOptions['params'] = params;
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante + "/reporte/factura", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                ReportePdfService.prototype.getReportePropina = function (params) {
                    this.httpOptions['params'] = params;
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion + "/reporte/venta/propina", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                ReportePdfService.prototype.getComanda = function (idcuenta) {
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante + "/comanda/imprimir/" + idcuenta + "/1", this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return ReportePdfService;
            }());
            ReportePdfService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            ReportePdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ReportePdfService);
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/egreso/egreso.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/wms/components/egreso/egreso/egreso.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL2VncmVzby9lZ3Jlc28vZWdyZXNvLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/egreso/egreso.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/wms/components/egreso/egreso/egreso.component.ts ***!
          \******************************************************************/
        /*! exports provided: EgresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresoComponent", function () { return EgresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
            var EgresoComponent = /** @class */ (function () {
                function EgresoComponent(ls) {
                    var _this = this;
                    this.ls = ls;
                    this.setEgreso = function (egr) {
                        _this.egreso = egr;
                        _this.frmEgreso.loadDetalleEgreso(+_this.egreso.egreso);
                    };
                    this.refreshEgresoList = function () {
                        _this.lstEgresoComponent.loadEgresos();
                    };
                    this.egreso = {
                        egreso: null, tipo_movimiento: null, bodega: null, fecha: moment__WEBPACK_IMPORTED_MODULE_4__().format(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].dbDateFormat), usuario: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).idusr || 0), estatus_movimiento: 1, traslado: 0
                    };
                }
                EgresoComponent.prototype.ngOnInit = function () {
                };
                return EgresoComponent;
            }());
            EgresoComponent.ctorParameters = function () { return [
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstEgreso', { static: false })
            ], EgresoComponent.prototype, "lstEgresoComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmEgreso', { static: false })
            ], EgresoComponent.prototype, "frmEgreso", void 0);
            EgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-egreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./egreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/egreso/egreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./egreso.component.css */ "./src/app/wms/components/egreso/egreso/egreso.component.css")).default]
                })
            ], EgresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/form-egreso/form-egreso.component.css": 
        /*!*****************************************************************************!*\
          !*** ./src/app/wms/components/egreso/form-egreso/form-egreso.component.css ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvZWdyZXNvL2Zvcm0tZWdyZXNvL2Zvcm0tZWdyZXNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd21zL2NvbXBvbmVudHMvZWdyZXNvL2Zvcm0tZWdyZXNvL2Zvcm0tZWdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/form-egreso/form-egreso.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/wms/components/egreso/form-egreso/form-egreso.component.ts ***!
          \****************************************************************************/
        /*! exports provided: FormEgresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEgresoComponent", function () { return FormEgresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _services_egreso_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/egreso.service */ "./src/app/wms/services/egreso.service.ts");
            /* harmony import */ var _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tipo-movimiento.service */ "./src/app/wms/services/tipo-movimiento.service.ts");
            /* harmony import */ var _services_bodega_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/bodega.service */ "./src/app/wms/services/bodega.service.ts");
            /* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/proveedor.service */ "./src/app/wms/services/proveedor.service.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            /* harmony import */ var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/transformacion.service */ "./src/app/wms/services/transformacion.service.ts");
            /* harmony import */ var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../admin/services/presentacion.service */ "./src/app/admin/services/presentacion.service.ts");
            var FormEgresoComponent = /** @class */ (function () {
                function FormEgresoComponent(_snackBar, ls, egresoSrvc, tipoMovimientoSrvc, bodegaSrvc, articuloSrvc, proveedorSrvc, transformacionSrvc, presentacionSrvc) {
                    var _this = this;
                    this._snackBar = _snackBar;
                    this.ls = ls;
                    this.egresoSrvc = egresoSrvc;
                    this.tipoMovimientoSrvc = tipoMovimientoSrvc;
                    this.bodegaSrvc = bodegaSrvc;
                    this.articuloSrvc = articuloSrvc;
                    this.proveedorSrvc = proveedorSrvc;
                    this.transformacionSrvc = transformacionSrvc;
                    this.presentacionSrvc = presentacionSrvc;
                    this.saveToDB = true;
                    this.egresoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showEgresoForm = true;
                    this.showDetalleEgresoForm = true;
                    this.detallesEgreso = [];
                    this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'precio_unitario', 'precio_total', 'editItem'];
                    this.tiposMovimiento = [];
                    this.bodegas = [];
                    this.articulos = [];
                    this.proveedores = [];
                    this.presentaciones = [];
                    this.esMovil = false;
                    this.loadTiposMovimiento = function () {
                        _this.tipoMovimientoSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.tiposMovimiento = res;
                            }
                        });
                    };
                    this.loadBodegas = function () {
                        _this.bodegaSrvc.get({ sede: (_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(function (res) {
                            if (res) {
                                _this.bodegas = res;
                            }
                        });
                    };
                    this.loadProveedores = function () {
                        _this.proveedorSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.proveedores = res;
                            }
                        });
                    };
                    this.loadPresentaciones = function () {
                        _this.presentacionSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.presentaciones = res;
                            }
                        });
                    };
                    this.resetEgreso = function () {
                        _this.egreso = {
                            egreso: null, tipo_movimiento: null, bodega: null, fecha: moment__WEBPACK_IMPORTED_MODULE_6__().format(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].dbDateFormat), usuario: (_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).idusr || 0), estatus_movimiento: 1, traslado: 0
                        };
                        _this.resetDetalleEgreso();
                    };
                    this.onSubmit = function () {
                        _this.egresoSrvc.save(_this.egreso).subscribe(function (res) {
                            if (res.exito) {
                                _this.egresoSavedEv.emit();
                                _this.resetEgreso();
                                _this.egreso = {
                                    egreso: res.egreso.egreso,
                                    tipo_movimiento: res.egreso.tipo_movimiento,
                                    fecha: res.egreso.fecha,
                                    bodega: res.egreso.bodega,
                                    creacion: res.egreso.creacion,
                                    usuario: res.egreso.usuario,
                                    estatus_movimiento: res.egreso.estatus_movimiento,
                                    traslado: res.egreso.traslado
                                };
                                _this.loadDetalleEgreso(_this.egreso.egreso);
                            }
                        });
                    };
                    this.confirmarEgreso = function () {
                        _this.egreso.estatus_movimiento = 2;
                        _this.onSubmit();
                    };
                    this.loadArticulos = function () {
                        _this.articuloSrvc.getArticulos().subscribe(function (res) {
                            if (res) {
                                _this.articulos = res;
                            }
                        });
                    };
                    this.resetDetalleEgreso = function () { return _this.detalleEgreso = {
                        egreso_detalle: null, egreso: (!!_this.egreso.egreso ? _this.egreso.egreso : null), articulo: null, cantidad: null, precio_unitario: null, precio_total: null, presentacion: 0
                    }; };
                    this.loadDetalleEgreso = function (idegreso) {
                        if (idegreso === void 0) { idegreso = +_this.egreso.egreso; }
                        _this.egresoSrvc.getDetalle(idegreso, { egreso: idegreso }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.detallesEgreso = res;
                                _this.updateTableDataSource();
                            }
                        });
                    };
                    this.getDetalleEgreso = function (idegreso, iddetalle) {
                        if (idegreso === void 0) { idegreso = +_this.egreso.egreso; }
                        _this.egresoSrvc.getDetalle(idegreso, { egreso_detalle: iddetalle }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.detalleEgreso = {
                                    egreso_detalle: res[0].egreso_detalle,
                                    egreso: res[0].egreso,
                                    articulo: res[0].articulo.articulo,
                                    cantidad: +res[0].cantidad,
                                    precio_unitario: +res[0].precio_unitario,
                                    precio_total: +res[0].precio_total,
                                    presentacion: res[0].presentacion.presentacion
                                };
                                _this.showDetalleEgresoForm = true;
                            }
                        });
                    };
                    this.onSubmitDetail = function () {
                        _this.detalleEgreso.egreso = _this.egreso.egreso;
                        //console.log(this.detalleEgreso);
                        _this.egresoSrvc.saveDetalle(_this.detalleEgreso).subscribe(function (res) {
                            //console.log(res);
                            if (res.exito) {
                                _this.loadDetalleEgreso();
                                _this.resetDetalleEgreso();
                                _this._snackBar.open('Egreso guardado con éxito...', 'Egreso', { duration: 3000 });
                            }
                            else {
                                _this._snackBar.open("ERROR: " + res.mensaje, 'Egreso', { duration: 3000 });
                            }
                        });
                    };
                    this.addToDetail = function () {
                        _this.detallesEgreso.push(_this.detalleEgreso);
                        _this.resetDetalleEgreso();
                        _this.updateTableDataSource();
                    };
                    this.removeFromDetail = function (idarticulo) { return _this.detallesEgreso.splice(_this.detallesEgreso.findIndex(function (de) { return +de.articulo === +idarticulo; }), 1); };
                    this.getDescripcionArticulo = function (idarticulo) { return _this.articulos.find(function (art) { return +art.articulo === +idarticulo; }).descripcion || ''; };
                    this.getDescripcionPresentacion = function (idpresentacion) { return _this.presentaciones.find(function (p) { return +p.presentacion === +idpresentacion; }).descripcion || ''; };
                    this.updateTableDataSource = function () { return _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.detallesEgreso); };
                }
                FormEgresoComponent.prototype.ngOnInit = function () {
                    this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
                    this.resetEgreso();
                    this.loadTiposMovimiento();
                    this.loadBodegas();
                    this.loadArticulos();
                    this.loadProveedores();
                    this.loadPresentaciones();
                };
                return FormEgresoComponent;
            }());
            FormEgresoComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
                { type: _services_egreso_service__WEBPACK_IMPORTED_MODULE_7__["EgresoService"] },
                { type: _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_8__["TipoMovimientoService"] },
                { type: _services_bodega_service__WEBPACK_IMPORTED_MODULE_9__["BodegaService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_11__["ArticuloService"] },
                { type: _services_proveedor_service__WEBPACK_IMPORTED_MODULE_10__["ProveedorService"] },
                { type: _services_transformacion_service__WEBPACK_IMPORTED_MODULE_12__["TransformacionService"] },
                { type: _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_13__["PresentacionService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormEgresoComponent.prototype, "egreso", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormEgresoComponent.prototype, "saveToDB", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FormEgresoComponent.prototype, "egresoSavedEv", void 0);
            FormEgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-egreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-egreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/form-egreso/form-egreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-egreso.component.css */ "./src/app/wms/components/egreso/form-egreso/form-egreso.component.css")).default]
                })
            ], FormEgresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvZWdyZXNvL2xpc3RhLWVncmVzby9saXN0YS1lZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL2VncmVzby9saXN0YS1lZ3Jlc28vbGlzdGEtZWdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.ts ***!
          \******************************************************************************/
        /*! exports provided: ListaEgresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEgresoComponent", function () { return ListaEgresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _services_egreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/egreso.service */ "./src/app/wms/services/egreso.service.ts");
            var ListaEgresoComponent = /** @class */ (function () {
                function ListaEgresoComponent(egresoSrvc) {
                    var _this = this;
                    this.egresoSrvc = egresoSrvc;
                    this.getEgresoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.length = 0;
                    this.pageSize = 5;
                    this.pageSizeOptions = [5, 10, 15];
                    this.pageIndex = 0;
                    this.txtFiltro = '';
                    this.loadEgresos = function () {
                        _this.egresoSrvc.get().subscribe(function (lst) {
                            if (lst) {
                                if (lst.length > 0) {
                                    _this.lstEgresos = lst;
                                    _this.applyFilter();
                                }
                            }
                        });
                    };
                    this.getEgreso = function (obj) {
                        _this.getEgresoEv.emit({
                            egreso: obj.egreso,
                            tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
                            bodega: obj.bodega.bodega,
                            fecha: obj.fecha,
                            usuario: obj.usuario.usuario,
                            estatus_movimiento: obj.estatus_movimiento || 1,
                            traslado: obj.traslado || 0
                        });
                    };
                    this.pageChange = function (e) {
                        _this.pageSize = e.pageSize;
                        _this.pageIndex = e.pageIndex;
                        _this.applyFilter();
                    };
                }
                ListaEgresoComponent.prototype.ngOnInit = function () {
                    this.loadEgresos();
                };
                ListaEgresoComponent.prototype.applyFilter = function () {
                    if (this.txtFiltro.length > 0) {
                        var tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["MultiFiltro"])(this.lstEgresos, this.txtFiltro);
                        this.length = tmpList.length;
                        this.lstEgresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
                    }
                    else {
                        this.length = this.lstEgresos.length;
                        this.lstEgresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(this.lstEgresos, this.pageSize, this.pageIndex + 1);
                    }
                };
                return ListaEgresoComponent;
            }());
            ListaEgresoComponent.ctorParameters = function () { return [
                { type: _services_egreso_service__WEBPACK_IMPORTED_MODULE_3__["EgresoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ListaEgresoComponent.prototype, "getEgresoEv", void 0);
            ListaEgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lista-egreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-egreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-egreso.component.css */ "./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.css")).default]
                })
            ], ListaEgresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.css": 
        /*!********************************************************************************!*\
          !*** ./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.css ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvaW5ncmVzby9mb3JtLWluZ3Jlc28vZm9ybS1pbmdyZXNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd21zL2NvbXBvbmVudHMvaW5ncmVzby9mb3JtLWluZ3Jlc28vZm9ybS1pbmdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: FormIngresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormIngresoComponent", function () { return FormIngresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _services_ingreso_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/ingreso.service */ "./src/app/wms/services/ingreso.service.ts");
            /* harmony import */ var _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/tipo-movimiento.service */ "./src/app/wms/services/tipo-movimiento.service.ts");
            /* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/proveedor.service */ "./src/app/wms/services/proveedor.service.ts");
            /* harmony import */ var _services_bodega_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/bodega.service */ "./src/app/wms/services/bodega.service.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            /* harmony import */ var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../admin/services/presentacion.service */ "./src/app/admin/services/presentacion.service.ts");
            var FormIngresoComponent = /** @class */ (function () {
                function FormIngresoComponent(_snackBar, ls, ingresoSrvc, proveedorSrvc, tipoMovimientoSrvc, bodegaSrvc, articuloSrvc, presentacinSrvc) {
                    var _this = this;
                    this._snackBar = _snackBar;
                    this.ls = ls;
                    this.ingresoSrvc = ingresoSrvc;
                    this.proveedorSrvc = proveedorSrvc;
                    this.tipoMovimientoSrvc = tipoMovimientoSrvc;
                    this.bodegaSrvc = bodegaSrvc;
                    this.articuloSrvc = articuloSrvc;
                    this.presentacinSrvc = presentacinSrvc;
                    this.saveToDB = true;
                    this.ingresoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showIngresoForm = true;
                    this.showDetalleIngresoForm = true;
                    this.detallesIngreso = [];
                    this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'costo_unitario', 'costo_total', 'deleteItem'];
                    this.tiposMovimiento = [];
                    this.proveedores = [];
                    this.bodegas = [];
                    this.articulos = [];
                    this.presentaciones = [];
                    this.esMovil = false;
                    this.loadTiposMovimiento = function () {
                        _this.tipoMovimientoSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.tiposMovimiento = res;
                            }
                        });
                    };
                    this.loadProveedores = function () {
                        _this.proveedorSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.proveedores = res;
                            }
                        });
                    };
                    this.loadBodegas = function () {
                        _this.bodegaSrvc.get({ sede: (+_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(function (res) {
                            if (res) {
                                _this.bodegas = res;
                            }
                        });
                    };
                    this.loadPresentaciones = function () {
                        _this.presentacinSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.presentaciones = res;
                            }
                        });
                    };
                    this.resetIngreso = function () {
                        _this.ingreso = {
                            ingreso: null, tipo_movimiento: null, fecha: moment__WEBPACK_IMPORTED_MODULE_6__().format(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].dbDateFormat), bodega: null, usuario: (_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).idusr || 0), comentario: null, proveedor: null,
                            estatus_movimiento: 1
                        };
                        _this.resetDetalleIngreso();
                    };
                    this.onSubmit = function () {
                        _this.ingresoSrvc.save(_this.ingreso).subscribe(function (res) {
                            //console.log(res);
                            _this.ingresoSavedEv.emit();
                            _this.resetIngreso();
                        });
                    };
                    this.loadArticulos = function () {
                        _this.articuloSrvc.getArticulos().subscribe(function (res) {
                            if (res) {
                                _this.articulos = res;
                            }
                        });
                    };
                    this.resetDetalleIngreso = function () { return _this.detalleIngreso = {
                        ingreso_detalle: null, ingreso: (!!_this.ingreso.ingreso ? _this.ingreso.ingreso : null), articulo: null, cantidad: null, precio_unitario: null, precio_total: null, presentacion: 0
                    }; };
                    this.loadDetalleIngreso = function (idingreso) {
                        if (idingreso === void 0) { idingreso = +_this.ingreso.ingreso; }
                        _this.ingresoSrvc.getDetalle(idingreso, { ingreso: idingreso }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.detallesIngreso = res;
                                _this.updateTableDataSource();
                            }
                        });
                    };
                    this.getDetalleIngreso = function (idingreso, iddetalle) {
                        if (idingreso === void 0) { idingreso = +_this.ingreso.ingreso; }
                        _this.ingresoSrvc.getDetalle(idingreso, { ingreso_detalle: iddetalle }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.detalleIngreso = {
                                    ingreso_detalle: res[0].ingreso_detalle,
                                    ingreso: res[0].ingreso,
                                    articulo: res[0].articulo.articulo,
                                    cantidad: +res[0].cantidad,
                                    precio_unitario: +res[0].precio_unitario,
                                    precio_total: +res[0].precio_total,
                                    presentacion: res[0].presentacion.presentacion
                                };
                                _this.showDetalleIngresoForm = true;
                            }
                        });
                    };
                    this.onSubmitDetail = function () {
                        _this.detalleIngreso.ingreso = _this.ingreso.ingreso;
                        _this.detalleIngreso.precio_total = +_this.detalleIngreso.cantidad * +_this.detalleIngreso.precio_unitario;
                        //console.log(this.detalleIngreso);
                        _this.ingresoSrvc.saveDetalle(_this.detalleIngreso).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.loadDetalleIngreso();
                                _this.resetDetalleIngreso();
                            }
                        });
                    };
                    this.addToDetail = function () {
                        _this.detallesIngreso.push(_this.detalleIngreso);
                        _this.resetDetalleIngreso();
                        _this.updateTableDataSource();
                    };
                    this.removeFromDetail = function (idarticulo) { return _this.detallesIngreso.splice(_this.detallesIngreso.findIndex(function (de) { return +de.articulo === +idarticulo; }), 1); };
                    this.getDescripcionArticulo = function (idarticulo) { return _this.articulos.find(function (art) { return +art.articulo === +idarticulo; }).descripcion || ''; };
                    this.getDescripcionPresentacion = function (idpresentacion) { return _this.presentaciones.find(function (p) { return +p.presentacion === +idpresentacion; }).descripcion || ''; };
                    this.updateTableDataSource = function () { return _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.detallesIngreso); };
                    this.eliminarArticulo = function (element) {
                        //const idx = this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle);
                        _this.detallesIngreso.splice(_this.detallesIngreso.findIndex(function (d) { return d.ingreso_detalle === element.ingreso_detalle; }), 1);
                        _this.updateTableDataSource();
                    };
                }
                FormIngresoComponent.prototype.ngOnInit = function () {
                    this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
                    this.resetIngreso();
                    this.loadTiposMovimiento();
                    this.loadProveedores();
                    this.loadBodegas();
                    this.loadArticulos();
                    this.loadPresentaciones();
                };
                return FormIngresoComponent;
            }());
            FormIngresoComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
                { type: _services_ingreso_service__WEBPACK_IMPORTED_MODULE_7__["IngresoService"] },
                { type: _services_proveedor_service__WEBPACK_IMPORTED_MODULE_9__["ProveedorService"] },
                { type: _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_8__["TipoMovimientoService"] },
                { type: _services_bodega_service__WEBPACK_IMPORTED_MODULE_10__["BodegaService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_11__["ArticuloService"] },
                { type: _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__["PresentacionService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormIngresoComponent.prototype, "ingreso", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormIngresoComponent.prototype, "saveToDB", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FormIngresoComponent.prototype, "ingresoSavedEv", void 0);
            FormIngresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-ingreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-ingreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-ingreso.component.css */ "./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.css")).default]
                })
            ], FormIngresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/ingreso/ingreso.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/wms/components/ingreso/ingreso/ingreso.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n.mat-grid-list {\n    display: flex;\n    align-items: flex-start !important;\n    vertical-align: top !important;\n }\n*/\n/*\n .mat-grid-tile .mat-figure {\n    align-items: flex-start !important;\n }\n*/\n/*\n ::ng-deep md-grid-tile.mat-grid-tile .mat-figure {\n    align-items: flex-start;  \n    justify-content: flex-start;  \n}\n*/\n/*\nmat-grid-tile >::ng-deep .mat-figure {\n    align-items: flex-start;\n    overflow-y: auto;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvaW5ncmVzby9pbmdyZXNvL2luZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7QUFDRDs7OztDQUlDO0FBQ0Q7Ozs7O0NBS0M7QUFDRDs7Ozs7Q0FLQyIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL2luZ3Jlc28vaW5ncmVzby9pbmdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuLm1hdC1ncmlkLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG4gfVxuKi9cbi8qXG4gLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gfVxuKi9cbi8qXG4gOjpuZy1kZWVwIG1kLWdyaWQtdGlsZS5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgIFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgIFxufVxuKi9cbi8qXG5tYXQtZ3JpZC10aWxlID46Om5nLWRlZXAgLm1hdC1maWd1cmUge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4qLyJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/ingreso/ingreso.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/wms/components/ingreso/ingreso/ingreso.component.ts ***!
          \*********************************************************************/
        /*! exports provided: IngresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoComponent", function () { return IngresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
            var IngresoComponent = /** @class */ (function () {
                // public tamFila: number;
                function IngresoComponent(ls) {
                    var _this = this;
                    this.ls = ls;
                    this.breakpoint = 2;
                    this.onWindowResize = function (ev) {
                        _this.breakpoint = (ev.target.innerWidth <= 360) ? 1 : 2;
                        // this.tamFila = ev.target.innerHeight - 64;
                        // console.log(this.tamFila);
                    };
                    this.setIngreso = function (ing) {
                        _this.ingreso = ing;
                        _this.frmIngreso.loadDetalleIngreso(+_this.ingreso.ingreso);
                    };
                    this.refreshIngresoList = function () {
                        _this.lstIngresoComponent.loadIngresos();
                    };
                    this.ingreso = {
                        ingreso: null, tipo_movimiento: null, fecha: moment__WEBPACK_IMPORTED_MODULE_4__().format(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].dbDateFormat), bodega: null,
                        usuario: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).idusr || 0), comentario: null, proveedor: null
                    };
                }
                IngresoComponent.prototype.ngOnInit = function () {
                    this.breakpoint = (window.innerWidth <= 360) ? 1 : 2;
                    // this.tamFila = window.innerHeight - 64;
                    // console.log(this.tamFila);
                };
                return IngresoComponent;
            }());
            IngresoComponent.ctorParameters = function () { return [
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstIngreso', { static: false })
            ], IngresoComponent.prototype, "lstIngresoComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmIngreso', { static: false })
            ], IngresoComponent.prototype, "frmIngreso", void 0);
            IngresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ingreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ingreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/ingreso/ingreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ingreso.component.css */ "./src/app/wms/components/ingreso/ingreso/ingreso.component.css")).default]
                })
            ], IngresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvaW5ncmVzby9saXN0YS1pbmdyZXNvL2xpc3RhLWluZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL2luZ3Jlc28vbGlzdGEtaW5ncmVzby9saXN0YS1pbmdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: ListaIngresoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaIngresoComponent", function () { return ListaIngresoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _services_ingreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ingreso.service */ "./src/app/wms/services/ingreso.service.ts");
            var ListaIngresoComponent = /** @class */ (function () {
                function ListaIngresoComponent(ingresoSrvc) {
                    var _this = this;
                    this.ingresoSrvc = ingresoSrvc;
                    this.getIngresoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.length = 0;
                    this.pageSize = 5;
                    this.pageSizeOptions = [5, 10, 15];
                    this.pageIndex = 0;
                    this.txtFiltro = '';
                    this.loadIngresos = function () {
                        _this.ingresoSrvc.get().subscribe(function (lst) {
                            if (lst) {
                                if (lst.length > 0) {
                                    _this.lstIngresos = lst;
                                    _this.applyFilter();
                                }
                            }
                        });
                    };
                    this.getIngreso = function (obj) {
                        _this.getIngresoEv.emit({
                            ingreso: obj.ingreso,
                            tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
                            fecha: obj.fecha,
                            bodega_origen: !!obj.bodega_origen && !!obj.bodega_origen.bodega ? obj.bodega_origen.bodega : null,
                            bodega: obj.bodega.bodega,
                            usuario: obj.usuario.usuario,
                            comentario: obj.comentario,
                            proveedor: obj.proveedor.proveedor
                        });
                    };
                    this.pageChange = function (e) {
                        _this.pageSize = e.pageSize;
                        _this.pageIndex = e.pageIndex;
                        _this.applyFilter();
                    };
                }
                ListaIngresoComponent.prototype.ngOnInit = function () {
                    this.loadIngresos();
                };
                ListaIngresoComponent.prototype.applyFilter = function () {
                    if (this.txtFiltro.length > 0) {
                        var tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["MultiFiltro"])(this.lstIngresos, this.txtFiltro);
                        this.length = tmpList.length;
                        this.lstIngresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
                    }
                    else {
                        this.length = this.lstIngresos.length;
                        this.lstIngresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(this.lstIngresos, this.pageSize, this.pageIndex + 1);
                    }
                };
                return ListaIngresoComponent;
            }());
            ListaIngresoComponent.ctorParameters = function () { return [
                { type: _services_ingreso_service__WEBPACK_IMPORTED_MODULE_3__["IngresoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ListaIngresoComponent.prototype, "getIngresoEv", void 0);
            ListaIngresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lista-ingreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-ingreso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-ingreso.component.css */ "./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.css")).default]
                })
            ], ListaIngresoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/categoria-producto/categoria-producto.component.css": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/wms/components/producto/categoria-producto/categoria-producto.component.css ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fullWidth { width: 100%; }\n.iconFontSize{ font-size: 18pt; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvcHJvZHVjdG8vY2F0ZWdvcmlhLXByb2R1Y3RvL2NhdGVnb3JpYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsV0FBVyxFQUFFO0FBQzFCLGVBQWUsZUFBZSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvd21zL2NvbXBvbmVudHMvcHJvZHVjdG8vY2F0ZWdvcmlhLXByb2R1Y3RvL2NhdGVnb3JpYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7IHdpZHRoOiAxMDAlOyB9XG4uaWNvbkZvbnRTaXpleyBmb250LXNpemU6IDE4cHQ7IH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/categoria-producto/categoria-producto.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/wms/components/producto/categoria-producto/categoria-producto.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: CategoriaProductoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaProductoComponent", function () { return CategoriaProductoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            var CategoriaProductoComponent = /** @class */ (function () {
                function CategoriaProductoComponent(_snackBar, ls, articuloSrvc) {
                    var _this = this;
                    this._snackBar = _snackBar;
                    this.ls = ls;
                    this.articuloSrvc = articuloSrvc;
                    this.categoriaGrupoSvd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.onChangeSubCategoriaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.categorias = [];
                    this.categoriasGruposPadre = [];
                    this.categoriasGrupos = [];
                    this.editCategoriaMode = false;
                    this.editSubCategoriaMode = false;
                    this.showCategoriasForm = false;
                    this.esMovil = false;
                    this.impresoras = [];
                    this.resetCategoria = function () {
                        _this.categoria = { categoria: null, sede: (_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0), descripcion: null };
                        _this.resetCategoriaGrupo();
                        _this.editCategoriaMode = false;
                    };
                    this.resetCategoriaGrupo = function () {
                        _this.categoriaGrupo = {
                            categoria_grupo: null,
                            categoria: _this.categoria.categoria,
                            categoria_grupo_grupo: null,
                            descripcion: null,
                            receta: 0,
                            impresora: null,
                            descuento: 0,
                            antecesores: null
                        };
                        _this.editSubCategoriaMode = false;
                    };
                    this.loadCategorias = function () {
                        _this.articuloSrvc.getCategorias({ sede: (+_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.categorias = res;
                            }
                        });
                    };
                    this.onCategoriaSelected = function (obj) { return _this.loadSubCategorias(+obj.value.categoria); };
                    this.loadSubCategorias = function (idcategoria) {
                        _this.articuloSrvc.getCategoriasGrupos({ categoria: +idcategoria }).subscribe(function (res) {
                            if (res) {
                                _this.categoriasGruposPadre = _this.articuloSrvc.adaptCategoriaGrupoResponse(res);
                                _this.categoriasGrupos = _this.categoriasGruposPadre;
                            }
                        });
                    };
                    this.loadImpresoras = function () {
                        _this.articuloSrvc.getImpresoras({ sede: (+_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(function (res) {
                            //console.log(res);
                            if (res) {
                                _this.impresoras = res;
                            }
                        });
                    };
                    this.onSubCategoriaPadreSelected = function (obj) { return _this.loadSubCategoriasSubcategorias(+obj.value); };
                    this.loadSubCategoriasSubcategorias = function (idsubcat) {
                        _this.articuloSrvc.getCategoriasGrupos({ categoria_grupo_grupo: idsubcat }).subscribe(function (res) {
                            if (res) {
                                _this.categoriasGrupos = _this.articuloSrvc.adaptCategoriaGrupoResponse(res);
                            }
                        });
                    };
                    this.onSubmitCategoria = function () {
                        _this.articuloSrvc.saveCategoria(_this.categoria).subscribe(function (res) {
                            if (res.exito) {
                                _this.editCategoriaMode = false;
                                _this.resetCategoria();
                                _this.loadCategorias();
                                _this.categoriaGrupoSvd.emit();
                                _this._snackBar.open('Grabada con éxito.', 'Categoría', { duration: 5000 });
                            }
                            else {
                                _this._snackBar.open("ERROR: " + res.mensaje, 'Categoría', { duration: 5000 });
                            }
                        });
                    };
                    this.onSubCategoriaSelected = function (obj) { return _this.onChangeSubCategoriaEv.emit(+obj.value.categoria_grupo); };
                    this.onSubmitSubCategoria = function () {
                        _this.articuloSrvc.saveCategoriaGrupo(_this.categoriaGrupo).subscribe(function (res) {
                            if (res.exito) {
                                _this.resetCategoriaGrupo();
                                _this.loadSubCategorias(+_this.categoria.categoria);
                                _this.categoriaGrupoSvd.emit();
                                _this._snackBar.open('Grabada con éxito.', 'Sub - Categoría', { duration: 5000 });
                            }
                            else {
                                _this._snackBar.open("ERROR: " + res.mensaje, 'Sub - Categoría', { duration: 5000 });
                            }
                        });
                    };
                }
                CategoriaProductoComponent.prototype.ngOnInit = function () {
                    this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
                    this.resetCategoria();
                    this.loadCategorias();
                    this.loadImpresoras();
                };
                return CategoriaProductoComponent;
            }());
            CategoriaProductoComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_3__["ArticuloService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CategoriaProductoComponent.prototype, "categoriaGrupoSvd", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CategoriaProductoComponent.prototype, "onChangeSubCategoriaEv", void 0);
            CategoriaProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-categoria-producto',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categoria-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/categoria-producto/categoria-producto.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categoria-producto.component.css */ "./src/app/wms/components/producto/categoria-producto/categoria-producto.component.css")).default]
                })
            ], CategoriaProductoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/form-producto/form-producto.component.css": 
        /*!***********************************************************************************!*\
          !*** ./src/app/wms/components/producto/form-producto/form-producto.component.css ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvcHJvZHVjdG8vZm9ybS1wcm9kdWN0by9mb3JtLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd21zL2NvbXBvbmVudHMvcHJvZHVjdG8vZm9ybS1wcm9kdWN0by9mb3JtLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/form-producto/form-producto.component.ts": 
        /*!**********************************************************************************!*\
          !*** ./src/app/wms/components/producto/form-producto/form-producto.component.ts ***!
          \**********************************************************************************/
        /*! exports provided: FormProductoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function () { return FormProductoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            /* harmony import */ var _admin_services_medida_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/services/medida.service */ "./src/app/admin/services/medida.service.ts");
            /* harmony import */ var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../admin/services/presentacion.service */ "./src/app/admin/services/presentacion.service.ts");
            var FormProductoComponent = /** @class */ (function () {
                function FormProductoComponent(snackBar, ls, articuloSrvc, medidaSrvc, presentacionSrvc) {
                    var _this = this;
                    this.snackBar = snackBar;
                    this.ls = ls;
                    this.articuloSrvc = articuloSrvc;
                    this.medidaSrvc = medidaSrvc;
                    this.presentacionSrvc = presentacionSrvc;
                    this.articuloSvd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showArticuloForm = true;
                    this.medidas = [];
                    this.presentaciones = [];
                    this.articulos = [];
                    this.recetas = [];
                    this.showDetalleForm = true;
                    this.displayedColumns = ['articulo', 'cantidad', 'medida', 'editItem'];
                    this.esMovil = false;
                    this.resetArticulo = function () {
                        _this.articulo = {
                            articulo: null,
                            categoria_grupo: _this.articulo.categoria_grupo,
                            presentacion: null,
                            descripcion: null,
                            precio: null,
                            bien_servicio: 'B'
                        };
                        _this.resetReceta();
                    };
                    this.setArticuloCategoriaGrupo = function (idcatgrp) { return _this.articulo.categoria_grupo = +idcatgrp; };
                    this.onSubmit = function () {
                        // console.log(this.articulo);
                        _this.articuloSrvc.saveArticulo(_this.articulo).subscribe(function (res) {
                            // console.log(res);
                            if (res.exito) {
                                _this.articuloSvd.emit();
                                _this.resetArticulo();
                                _this.articulo = res.articulo;
                                _this.loadArticulos();
                                _this.snackBar.open('Articulo guardado con éxito...', 'Articulo', { duration: 3000 });
                            }
                            else {
                                _this.snackBar.open("ERROR: " + res.mensaje, 'Articulo', { duration: 3000 });
                            }
                        });
                    };
                    this.loadMedidas = function () {
                        _this.medidaSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.medidas = res;
                            }
                        });
                    };
                    this.loadPresentaciones = function () {
                        _this.presentacionSrvc.get().subscribe(function (res) {
                            if (res) {
                                _this.presentaciones = res;
                            }
                        });
                    };
                    this.loadArticulos = function () {
                        _this.articuloSrvc.getArticulos().subscribe(function (res) {
                            if (res) {
                                _this.articulos = res;
                            }
                        });
                    };
                    this.resetReceta = function () {
                        _this.receta = {
                            articulo_detalle: null, receta: (_this.articulo.articulo || 0), racionable: 0, articulo: null, cantidad: 1.00, medida: null
                        };
                        _this.recetas = [];
                        _this.updateTableDataSource();
                    };
                    this.loadRecetas = function (idarticulo) {
                        if (idarticulo === void 0) { idarticulo = +_this.articulo.articulo; }
                        _this.articuloSrvc.getArticuloDetalle(+idarticulo, { receta: +idarticulo }).subscribe(function (res) {
                            if (res) {
                                _this.recetas = res;
                                _this.updateTableDataSource();
                            }
                        });
                    };
                    this.getReceta = function (idarticulo, iddetalle) {
                        if (idarticulo === void 0) { idarticulo = +_this.articulo.articulo; }
                        _this.articuloSrvc.getArticuloDetalle(idarticulo, { articulo_detalle: iddetalle }).subscribe(function (res) {
                            console.log(res);
                            if (res) {
                                _this.receta = {
                                    articulo_detalle: res[0].articulo_detalle,
                                    receta: res[0].receta.articulo,
                                    racionable: res[0].articulo.articulo,
                                    articulo: res[0].articulo.articulo,
                                    cantidad: +res[0].cantidad,
                                    medida: res[0].medida.medida
                                };
                                _this.showDetalleForm = true;
                            }
                        });
                    };
                    this.onSubmitDetail = function () {
                        _this.receta.receta = _this.articulo.articulo;
                        // console.log(this.articulo);
                        // console.log(this.receta); return;
                        _this.articuloSrvc.saveArticuloDetalle(_this.receta).subscribe(function (res) {
                            // console.log(res);
                            if (res) {
                                _this.loadRecetas();
                                _this.resetReceta();
                            }
                        });
                    };
                    this.updateTableDataSource = function () { return _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.recetas); };
                }
                FormProductoComponent.prototype.ngOnInit = function () {
                    this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
                    this.resetArticulo();
                    this.loadMedidas();
                    this.loadArticulos();
                    this.loadPresentaciones();
                };
                return FormProductoComponent;
            }());
            FormProductoComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__["ArticuloService"] },
                { type: _admin_services_medida_service__WEBPACK_IMPORTED_MODULE_7__["MedidaService"] },
                { type: _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_8__["PresentacionService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FormProductoComponent.prototype, "articulo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FormProductoComponent.prototype, "articuloSvd", void 0);
            FormProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-producto',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/form-producto/form-producto.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-producto.component.css */ "./src/app/wms/components/producto/form-producto/form-producto.component.css")).default]
                })
            ], FormProductoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.css": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.css ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3Byb2R1Y3RvL2xpc3RhLXByb2R1Y3RvLWFsdC9saXN0YS1wcm9kdWN0by1hbHQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: ListaProductoAltComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductoAltComponent", function () { return ListaProductoAltComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            var ListaProductoAltComponent = /** @class */ (function () {
                function ListaProductoAltComponent(articuloSrvc, ls) {
                    var _this = this;
                    this.articuloSrvc = articuloSrvc;
                    this.ls = ls;
                    this.productoClickedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.categoriasFilledEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.categorias = [];
                    this.subcategorias = [];
                    this.articulos = [];
                    this.loadArbolArticulos = function () {
                        _this.articuloSrvc.getArbolArticulos((_this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede || 0)).subscribe(function (res) {
                            _this.fillCategorias(res);
                        });
                    };
                    this.fillCategorias = function (cats) {
                        _this.categorias = [];
                        _this.subcategorias = [];
                        _this.articulos = [];
                        for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
                            var cat = cats_1[_i];
                            _this.categorias.push(cat);
                        }
                        _this.categoriasFilledEv.emit(_this.categorias);
                    };
                    this.fillSubCategorias = function (subcats) {
                        _this.subcategorias = [];
                        _this.articulos = [];
                        for (var _i = 0, subcats_1 = subcats; _i < subcats_1.length; _i++) {
                            var subcat = subcats_1[_i];
                            _this.subcategorias.push(subcat);
                        }
                    };
                    this.fillArticulos = function (arts) {
                        _this.articulos = [];
                        for (var _i = 0, arts_1 = arts; _i < arts_1.length; _i++) {
                            var a = arts_1[_i];
                            _this.articulos.push(a);
                        }
                    };
                    this.clickOnCategoria = function (cat) {
                        if (cat.categoria_grupo.length > 0) {
                            _this.fillSubCategorias(cat.categoria_grupo);
                        }
                    };
                    this.clickOnSubCategoria = function (scat) {
                        if (scat.articulo.length > 0) {
                            _this.fillArticulos(scat.articulo);
                        }
                    };
                    this.clickOnArticulo = function (art) {
                        var obj = {
                            id: +art.articulo,
                            nombre: art.descripcion,
                            precio: +art.precio,
                            impresora: art.impresora,
                            presentacion: art.presentacion,
                            codigo: art.codigo
                        };
                        // console.log(obj);
                        _this.productoClickedEv.emit(obj);
                        // this.subcategorias = [];
                        // this.articulos = [];
                    };
                }
                ListaProductoAltComponent.prototype.ngOnInit = function () {
                    this.loadArbolArticulos();
                };
                return ListaProductoAltComponent;
            }());
            ListaProductoAltComponent.ctorParameters = function () { return [
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_4__["ArticuloService"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ListaProductoAltComponent.prototype, "productoClickedEv", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ListaProductoAltComponent.prototype, "categoriasFilledEv", void 0);
            ListaProductoAltComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lista-producto-alt',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-producto-alt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-producto-alt.component.css */ "./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.css")).default]
                })
            ], ListaProductoAltComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/lista-producto/lista-producto.component.css": 
        /*!*************************************************************************************!*\
          !*** ./src/app/wms/components/producto/lista-producto/lista-producto.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-tree-invisible {\n    display: none;\n}\n\n.example-tree ul, .example-tree li {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n\n.tabulacion {\n    padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd21zL2NvbXBvbmVudHMvcHJvZHVjdG8vbGlzdGEtcHJvZHVjdG8vbGlzdGEtcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3Byb2R1Y3RvL2xpc3RhLXByb2R1Y3RvL2xpc3RhLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmV4YW1wbGUtdHJlZSB1bCwgLmV4YW1wbGUtdHJlZSBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnRhYnVsYWNpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/lista-producto/lista-producto.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/wms/components/producto/lista-producto/lista-producto.component.ts ***!
          \************************************************************************************/
        /*! exports provided: ListaProductoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductoComponent", function () { return ListaProductoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
            /* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            var ListaProductoComponent = /** @class */ (function () {
                function ListaProductoComponent(ls, articuloSrvc) {
                    this.ls = ls;
                    this.articuloSrvc = articuloSrvc;
                    this.treeHeight = '450px';
                    this.productoClickedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["NestedTreeControl"](function (node) { return node.hijos; });
                    this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeNestedDataSource"]();
                    this.hasChild = function (_, node) { return !!node.hijos && node.hijos.length > 0; };
                    this.tieneHijos = function (node) { return !!node.hijos && node.hijos.length > 0; };
                    // this.dataSource.data = TREE_DATA;
                }
                ListaProductoComponent.prototype.ngOnInit = function () {
                    this.loadArbolArticulos();
                };
                ListaProductoComponent.prototype.onProductoClicked = function (producto) {
                    this.productoClickedEv.emit(producto);
                };
                ListaProductoComponent.prototype.loadArbolArticulos = function () {
                    var _this = this;
                    this.articuloSrvc.getArbolArticulos((this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede || 0)).subscribe(function (res) {
                        // console.log(res);
                        if (res) {
                            _this.arbol = _this.articuloSrvc.convertToArbolNodoProducto(res);
                            // console.log(this.arbol);
                            _this.dataSource.data = _this.arbol;
                        }
                    });
                };
                return ListaProductoComponent;
            }());
            ListaProductoComponent.ctorParameters = function () { return [
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__["ArticuloService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ListaProductoComponent.prototype, "treeHeight", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ListaProductoComponent.prototype, "productoClickedEv", void 0);
            ListaProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lista-producto',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/lista-producto/lista-producto.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-producto.component.css */ "./src/app/wms/components/producto/lista-producto/lista-producto.component.css")).default]
                })
            ], ListaProductoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/producto/producto.component.css": 
        /*!*************************************************************************!*\
          !*** ./src/app/wms/components/producto/producto/producto.component.css ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3Byb2R1Y3RvL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/producto/producto/producto.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/wms/components/producto/producto/producto.component.ts ***!
          \************************************************************************/
        /*! exports provided: ProductoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function () { return ProductoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            var ProductoComponent = /** @class */ (function () {
                function ProductoComponent(articuloSrvc) {
                    var _this = this;
                    this.articuloSrvc = articuloSrvc;
                    this.setArticulo = function (art) {
                        _this.articuloSrvc.getArticulo({ articulo: art.id }).subscribe(function (res) {
                            if (!!res && res.length > 0) {
                                var obj = res[0];
                                _this.articulo = {
                                    articulo: +obj.articulo,
                                    categoria_grupo: +obj.categoria_grupo.categoria_grupo,
                                    presentacion: obj.presentacion.presentacion,
                                    descripcion: obj.descripcion,
                                    precio: +obj.precio,
                                    codigo: obj.codigo
                                };
                                _this.frmProductoComponent.loadRecetas(+_this.articulo.articulo);
                                _this.frmProductoComponent.resetReceta();
                            }
                        });
                    };
                    this.setArticuloCategoriaGrupo = function (idcategoriagrupo) {
                        _this.articulo.categoria_grupo = +idcategoriagrupo;
                        _this.frmProductoComponent.setArticuloCategoriaGrupo(+idcategoriagrupo);
                    };
                    this.refreshArticuloList = function (obj) {
                        _this.lstProductoComponent.loadArbolArticulos();
                    };
                    this.articulo = { articulo: null, categoria_grupo: null, presentacion: null, descripcion: null, precio: null, bien_servicio: 'B' };
                }
                ProductoComponent.prototype.ngOnInit = function () {
                };
                return ProductoComponent;
            }());
            ProductoComponent.ctorParameters = function () { return [
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_2__["ArticuloService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstProducto', { static: false })
            ], ProductoComponent.prototype, "lstProductoComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmProducto', { static: false })
            ], ProductoComponent.prototype, "frmProductoComponent", void 0);
            ProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-producto',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/producto/producto/producto.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./producto.component.css */ "./src/app/wms/components/producto/producto/producto.component.css")).default]
                })
            ], ProductoComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/reporte/existencias/existencias.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/wms/components/reporte/existencias/existencias.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3JlcG9ydGUvZXhpc3RlbmNpYXMvZXhpc3RlbmNpYXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/reporte/existencias/existencias.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/wms/components/reporte/existencias/existencias.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: ExistenciasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistenciasComponent", function () { return ExistenciasComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../restaurante/services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
            /* harmony import */ var _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/sede.service */ "./src/app/admin/services/sede.service.ts");
            /* harmony import */ var _services_bodega_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/bodega.service */ "./src/app/wms/services/bodega.service.ts");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
            var ExistenciasComponent = /** @class */ (function () {
                function ExistenciasComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc) {
                    var _this = this;
                    this.snackBar = snackBar;
                    this.pdfServicio = pdfServicio;
                    this.sedeSrvc = sedeSrvc;
                    this.bodegaSrvc = bodegaSrvc;
                    this.bodegas = [];
                    this.sedes = [];
                    this.params = {};
                    this.titulo = "Existencias";
                    this.getSede = function (params) {
                        if (params === void 0) { params = {}; }
                        _this.sedeSrvc.get(params).subscribe(function (res) {
                            _this.sedes = res;
                        });
                    };
                    this.getBodega = function (params) {
                        if (params === void 0) { params = {}; }
                        _this.bodegaSrvc.get(params).subscribe(function (res) {
                            _this.bodegas = res;
                        });
                    };
                }
                ExistenciasComponent.prototype.ngOnInit = function () {
                    this.getSede();
                    this.getBodega();
                };
                ExistenciasComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.pdfServicio.getReporteExistencia(this.params).subscribe(function (res) {
                        if (res) {
                            var blob = new Blob([res], { type: 'application/pdf' });
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, _this.titulo + ".pdf");
                        }
                        else {
                            _this.snackBar.open('No se pudo generar el reporte...', _this.titulo, { duration: 3000 });
                        }
                    });
                };
                return ExistenciasComponent;
            }());
            ExistenciasComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] },
                { type: _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_4__["SedeService"] },
                { type: _services_bodega_service__WEBPACK_IMPORTED_MODULE_5__["BodegaService"] }
            ]; };
            ExistenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-existencias',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./existencias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/existencias/existencias.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./existencias.component.css */ "./src/app/wms/components/reporte/existencias/existencias.component.css")).default]
                })
            ], ExistenciasComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/reporte/kardex/kardex.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/wms/components/reporte/kardex/kardex.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3JlcG9ydGUva2FyZGV4L2thcmRleC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/reporte/kardex/kardex.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/wms/components/reporte/kardex/kardex.component.ts ***!
          \*******************************************************************/
        /*! exports provided: KardexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KardexComponent", function () { return KardexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../restaurante/services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
            /* harmony import */ var _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/sede.service */ "./src/app/admin/services/sede.service.ts");
            /* harmony import */ var _services_bodega_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/bodega.service */ "./src/app/wms/services/bodega.service.ts");
            /* harmony import */ var _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/articulo.service */ "./src/app/wms/services/articulo.service.ts");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
            /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
            var KardexComponent = /** @class */ (function () {
                function KardexComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc, articuloSrvc) {
                    var _this = this;
                    this.snackBar = snackBar;
                    this.pdfServicio = pdfServicio;
                    this.sedeSrvc = sedeSrvc;
                    this.bodegaSrvc = bodegaSrvc;
                    this.articuloSrvc = articuloSrvc;
                    this.bodegas = [];
                    this.sedes = [];
                    this.articulos = [];
                    this.params = {};
                    this.titulo = "Kardex";
                    this.getSede = function (params) {
                        if (params === void 0) { params = {}; }
                        _this.sedeSrvc.get(params).subscribe(function (res) {
                            _this.sedes = res;
                        });
                    };
                    this.getArticulo = function (params) {
                        if (params === void 0) { params = {}; }
                        _this.articuloSrvc.getArticulos(params).subscribe(function (res) {
                            _this.articulos = res;
                        });
                    };
                    this.getBodega = function (params) {
                        if (params === void 0) { params = {}; }
                        _this.bodegaSrvc.get(params).subscribe(function (res) {
                            _this.bodegas = res;
                        });
                    };
                }
                KardexComponent.prototype.ngOnInit = function () {
                    this.getSede();
                    this.getBodega();
                    this.getArticulo();
                };
                KardexComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.pdfServicio.getReporteKardex(this.params).subscribe(function (res) {
                        if (res) {
                            var blob = new Blob([res], { type: 'application/pdf' });
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, _this.titulo + ".pdf");
                        }
                        else {
                            _this.snackBar.open('No se pudo generar el reporte...', _this.titulo, { duration: 3000 });
                        }
                    });
                };
                return KardexComponent;
            }());
            KardexComponent.ctorParameters = function () { return [
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] },
                { type: _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_4__["SedeService"] },
                { type: _services_bodega_service__WEBPACK_IMPORTED_MODULE_5__["BodegaService"] },
                { type: _services_articulo_service__WEBPACK_IMPORTED_MODULE_6__["ArticuloService"] }
            ]; };
            KardexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kardex',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kardex.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/reporte/kardex/kardex.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kardex.component.css */ "./src/app/wms/components/reporte/kardex/kardex.component.css")).default]
                })
            ], KardexComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/components/transformacion/transformacion.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/wms/components/transformacion/transformacion.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dtcy9jb21wb25lbnRzL3RyYW5zZm9ybWFjaW9uL3RyYW5zZm9ybWFjaW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/wms/components/transformacion/transformacion.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/wms/components/transformacion/transformacion.component.ts ***!
          \***************************************************************************/
        /*! exports provided: TransformacionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformacionComponent", function () { return TransformacionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/transformacion.service */ "./src/app/wms/services/transformacion.service.ts");
            var TransformacionComponent = /** @class */ (function () {
                function TransformacionComponent(ls, _snackBar, transformacionSrvc) {
                    var _this = this;
                    this.ls = ls;
                    this._snackBar = _snackBar;
                    this.transformacionSrvc = transformacionSrvc;
                    this.transformar = function () {
                        _this.egreso = _this.frmEgreso.egreso;
                        _this.ingreso = _this.frmIngreso.ingreso;
                        _this.transformacion = {
                            egreso: {
                                tipo_movimiento: _this.egreso.tipo_movimiento,
                                fecha: _this.egreso.fecha,
                                proveedor: 0,
                                bodega: _this.egreso.bodega,
                                usuario: _this.egreso.usuario,
                                estatus_movimiento: _this.egreso.estatus_movimiento,
                                bodega_destino: _this.egreso.bodega_destino,
                                tipo_movimiento_destino: _this.egreso.tipo_movimiento_destino,
                                detalle: []
                            },
                            ingreso: {
                                tipo_movimiento: _this.ingreso.tipo_movimiento,
                                fecha: _this.ingreso.fecha,
                                proveedor: _this.ingreso.proveedor,
                                bodega: _this.ingreso.bodega,
                                usuario: _this.ingreso.usuario,
                                bodega_origen: _this.ingreso.bodega_origen,
                                comentario: _this.ingreso.comentario,
                                detalle: []
                            }
                        };
                        _this.frmEgreso.detallesEgreso.forEach(function (de) { return _this.transformacion.egreso.detalle.push({
                            articulo: de.articulo,
                            cantidad: de.cantidad,
                            precio_unitario: de.precio_unitario,
                            precio_total: de.precio_total
                        }); });
                        _this.frmIngreso.detallesIngreso.forEach(function (di) { return _this.transformacion.ingreso.detalle.push({
                            articulo: di.articulo,
                            cantidad: di.cantidad,
                            precio_unitario: di.precio_unitario,
                            precio_total: di.precio_total
                        }); });
                        if (!!_this.transformacion.egreso && !!_this.transformacion.egreso.detalle && _this.transformacion.egreso.detalle.length > 0 &&
                            !!_this.transformacion.ingreso && !!_this.transformacion.ingreso.detalle && _this.transformacion.ingreso.detalle.length > 0) {
                            _this.transformacionSrvc.transformar(_this.transformacion).subscribe(function (res) {
                                if (res.exito) {
                                    _this.frmEgreso.resetEgreso();
                                    _this.frmEgreso.detallesEgreso = [];
                                    _this.frmIngreso.resetIngreso();
                                    _this.frmIngreso.detallesIngreso = [];
                                    _this._snackBar.open('Transformación generada con éxito...', 'Transformación', { duration: 5000 });
                                }
                                else {
                                    _this._snackBar.open("ERROR: " + res.mensaje, 'Transformación', { duration: 3000 });
                                }
                            });
                        }
                        else {
                            _this._snackBar.open("Faltan datos necesario. Favor complete los datos e intente de nuevo.", 'Transformación', { duration: 3000 });
                        }
                    };
                }
                TransformacionComponent.prototype.ngOnInit = function () {
                    this.egreso = {
                        egreso: null, tipo_movimiento: null, bodega: null, fecha: moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dbDateFormat), usuario: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).idusr || 0), estatus_movimiento: 1, traslado: 0
                    };
                    this.ingreso = {
                        ingreso: null, tipo_movimiento: null, fecha: moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dbDateFormat), bodega: null, usuario: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).idusr || 0), comentario: null, proveedor: null
                    };
                };
                TransformacionComponent.prototype.doSomething = function () { };
                return TransformacionComponent;
            }());
            TransformacionComponent.ctorParameters = function () { return [
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: _services_transformacion_service__WEBPACK_IMPORTED_MODULE_6__["TransformacionService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmEgreso', { static: false })
            ], TransformacionComponent.prototype, "frmEgreso", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmIngreso', { static: false })
            ], TransformacionComponent.prototype, "frmIngreso", void 0);
            TransformacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-transformacion',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transformacion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wms/components/transformacion/transformacion.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transformacion.component.css */ "./src/app/wms/components/transformacion/transformacion.component.css")).default]
                })
            ], TransformacionComponent);
            /***/ 
        }),
        /***/ "./src/app/wms/services/bodega.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/wms/services/bodega.service.ts ***!
          \************************************************/
        /*! exports provided: BodegaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodegaService", function () { return BodegaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
            var BodegaService = /** @class */ (function () {
                function BodegaService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.usrToken = null;
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                }
                BodegaService.prototype.get = function (fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos + "/get_bodega?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return BodegaService;
            }());
            BodegaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            BodegaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BodegaService);
            /***/ 
        }),
        /***/ "./src/app/wms/services/egreso.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/wms/services/egreso.service.ts ***!
          \************************************************/
        /*! exports provided: EgresoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresoService", function () { return EgresoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
            var EgresoService = /** @class */ (function () {
                function EgresoService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.egresoUrl = 'egreso';
                    this.usrToken = null;
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                }
                EgresoService.prototype.get = function (fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.egresoUrl + "/buscar_egreso?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                EgresoService.prototype.save = function (entidad) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.egresoUrl + "/guardar" + (+entidad.egreso > 0 ? ('/' + entidad.egreso) : ''), entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                EgresoService.prototype.getDetalle = function (idegreso, fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.egresoUrl + "/buscar_detalle/" + idegreso + "?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                EgresoService.prototype.saveDetalle = function (entidad) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.egresoUrl + "/guardar_detalle/" + entidad.egreso + (+entidad.egreso_detalle > 0 ? ('/' + entidad.egreso_detalle) : ''), entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return EgresoService;
            }());
            EgresoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            EgresoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EgresoService);
            /***/ 
        }),
        /***/ "./src/app/wms/services/ingreso.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/wms/services/ingreso.service.ts ***!
          \*************************************************/
        /*! exports provided: IngresoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoService", function () { return IngresoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
            var IngresoService = /** @class */ (function () {
                function IngresoService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.ingresoUrl = 'ingreso';
                    this.usrToken = null;
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                }
                IngresoService.prototype.get = function (fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.ingresoUrl + "/buscar_ingreso?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                IngresoService.prototype.save = function (entidad) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.ingresoUrl + "/guardar" + (+entidad.ingreso > 0 ? ('/' + entidad.ingreso) : ''), entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                IngresoService.prototype.getDetalle = function (idingreso, fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.ingresoUrl + "/buscar_detalle/" + idingreso + "?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                IngresoService.prototype.saveDetalle = function (entidad) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.ingresoUrl + "/guardar_detalle/" + entidad.ingreso + (+entidad.ingreso_detalle > 0 ? ('/' + entidad.ingreso_detalle) : ''), entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return IngresoService;
            }());
            IngresoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            IngresoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], IngresoService);
            /***/ 
        }),
        /***/ "./src/app/wms/services/tipo-movimiento.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/wms/services/tipo-movimiento.service.ts ***!
          \*********************************************************/
        /*! exports provided: TipoMovimientoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMovimientoService", function () { return TipoMovimientoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
            /* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);
            var TipoMovimientoService = /** @class */ (function () {
                function TipoMovimientoService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.usrToken = null;
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                }
                TipoMovimientoService.prototype.get = function (fltr) {
                    if (fltr === void 0) { fltr = {}; }
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos + "/get_tipo_movimiento?" + qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return TipoMovimientoService;
            }());
            TipoMovimientoService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            TipoMovimientoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TipoMovimientoService);
            /***/ 
        }),
        /***/ "./src/app/wms/services/transformacion.service.ts": 
        /*!********************************************************!*\
          !*** ./src/app/wms/services/transformacion.service.ts ***!
          \********************************************************/
        /*! exports provided: TransformacionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformacionService", function () { return TransformacionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
            /* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
            /* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            // import * as qs from 'qs';
            var TransformacionService = /** @class */ (function () {
                function TransformacionService(http, ls) {
                    this.http = http;
                    this.ls = ls;
                    this.conversorUrl = 'conversor';
                    this.usrToken = null;
                    this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
                    this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
                }
                TransformacionService.prototype.transformar = function (entidad) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': this.usrToken
                        })
                    };
                    return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlWms + "/" + this.conversorUrl + "/transformar", entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
                };
                return TransformacionService;
            }());
            TransformacionService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
            ]; };
            TransformacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TransformacionService);
            /***/ 
        }),
        /***/ "./src/app/wms/wms-routing.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/wms/wms-routing.module.ts ***!
          \*******************************************/
        /*! exports provided: WmsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmsRoutingModule", function () { return WmsRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/authguard.service */ "./src/app/admin/services/authguard.service.ts");
            /* harmony import */ var _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ingreso/ingreso/ingreso.component */ "./src/app/wms/components/ingreso/ingreso/ingreso.component.ts");
            /* harmony import */ var _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/egreso/egreso/egreso.component */ "./src/app/wms/components/egreso/egreso/egreso.component.ts");
            /* harmony import */ var _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/producto/producto/producto.component */ "./src/app/wms/components/producto/producto/producto.component.ts");
            /* harmony import */ var _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/transformacion/transformacion.component */ "./src/app/wms/components/transformacion/transformacion.component.ts");
            /* harmony import */ var _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reporte/existencias/existencias.component */ "./src/app/wms/components/reporte/existencias/existencias.component.ts");
            /* harmony import */ var _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reporte/kardex/kardex.component */ "./src/app/wms/components/reporte/kardex/kardex.component.ts");
            var routes = [
                { path: 'ingresos', component: _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_4__["IngresoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: 'egresos', component: _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_5__["EgresoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: 'articulos', component: _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_6__["ProductoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: 'transformaciones', component: _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_7__["TransformacionComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: 'rptexistencia', component: _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_8__["ExistenciasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: 'rptkardex', component: _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_9__["KardexComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
                { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
            ];
            var WmsRoutingModule = /** @class */ (function () {
                function WmsRoutingModule() {
                }
                return WmsRoutingModule;
            }());
            WmsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], WmsRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/wms/wms.module.ts": 
        /*!***********************************!*\
          !*** ./src/app/wms/wms.module.ts ***!
          \***********************************/
        /*! exports provided: WmsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WmsModule", function () { return WmsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
            /* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm2015/ngx-material-keyboard-core.js");
            /* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @protacon/ng-virtual-keyboard */ "./node_modules/@protacon/ng-virtual-keyboard/dist/index.js");
            /* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(_protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_26__);
            /* harmony import */ var _wms_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./wms-routing.module */ "./src/app/wms/wms-routing.module.ts");
            /* harmony import */ var _components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/producto/lista-producto/lista-producto.component */ "./src/app/wms/components/producto/lista-producto/lista-producto.component.ts");
            /* harmony import */ var _components_ingreso_lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/ingreso/lista-ingreso/lista-ingreso.component */ "./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.ts");
            /* harmony import */ var _components_ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/ingreso/form-ingreso/form-ingreso.component */ "./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.ts");
            /* harmony import */ var _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ingreso/ingreso/ingreso.component */ "./src/app/wms/components/ingreso/ingreso/ingreso.component.ts");
            /* harmony import */ var _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/producto/producto/producto.component */ "./src/app/wms/components/producto/producto/producto.component.ts");
            /* harmony import */ var _components_producto_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/producto/form-producto/form-producto.component */ "./src/app/wms/components/producto/form-producto/form-producto.component.ts");
            /* harmony import */ var _components_producto_categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/producto/categoria-producto/categoria-producto.component */ "./src/app/wms/components/producto/categoria-producto/categoria-producto.component.ts");
            /* harmony import */ var _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/egreso/egreso/egreso.component */ "./src/app/wms/components/egreso/egreso/egreso.component.ts");
            /* harmony import */ var _components_egreso_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/egreso/lista-egreso/lista-egreso.component */ "./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.ts");
            /* harmony import */ var _components_egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/egreso/form-egreso/form-egreso.component */ "./src/app/wms/components/egreso/form-egreso/form-egreso.component.ts");
            /* harmony import */ var _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/transformacion/transformacion.component */ "./src/app/wms/components/transformacion/transformacion.component.ts");
            /* harmony import */ var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/transformacion.service */ "./src/app/wms/services/transformacion.service.ts");
            /* harmony import */ var _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/reporte/existencias/existencias.component */ "./src/app/wms/components/reporte/existencias/existencias.component.ts");
            /* harmony import */ var _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/reporte/kardex/kardex.component */ "./src/app/wms/components/reporte/kardex/kardex.component.ts");
            /* harmony import */ var _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/producto/lista-producto-alt/lista-producto-alt.component */ "./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.ts");
            var WmsModule = /** @class */ (function () {
                function WmsModule() {
                }
                return WmsModule;
            }());
            WmsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__["ListaProductoComponent"], _components_ingreso_lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_29__["ListaIngresoComponent"], _components_ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_30__["FormIngresoComponent"], _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_31__["IngresoComponent"], _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_32__["ProductoComponent"], _components_producto_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_33__["FormProductoComponent"], _components_producto_categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_34__["CategoriaProductoComponent"], _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_35__["EgresoComponent"], _components_egreso_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_36__["ListaEgresoComponent"], _components_egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_37__["FormEgresoComponent"], _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_38__["TransformacionComponent"], _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_40__["ExistenciasComponent"], _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_41__["KardexComponent"], _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_42__["ListaProductoAltComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _wms_routing_module__WEBPACK_IMPORTED_MODULE_27__["WmsRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                        _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_25__["MatKeyboardModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_24__["MatTreeModule"],
                        _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_26__["NgVirtualKeyboardModule"]
                    ],
                    providers: [
                        _services_transformacion_service__WEBPACK_IMPORTED_MODULE_39__["TransformacionService"]
                    ],
                    exports: [
                        _components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__["ListaProductoComponent"], _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_42__["ListaProductoAltComponent"]
                    ]
                })
            ], WmsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~restaurante-restaurante-module~wms-wms-module-es2015.js.map
//# sourceMappingURL=default~restaurante-restaurante-module~wms-wms-module-es5.js.map
//# sourceMappingURL=default~restaurante-restaurante-module~wms-wms-module-es5.js.map