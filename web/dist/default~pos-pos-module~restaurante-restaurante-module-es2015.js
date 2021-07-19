(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pos-pos-module~restaurante-restaurante-module"],{

/***/ "2Oj6":
/*!*******************************************!*\
  !*** ./src/app/pos/pos-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRoutingModule", function() { return PosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/services/authguard.service */ "0T/Q");
/* harmony import */ var _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/formaPago/forma-pago/forma-pago.component */ "ISOR");
/* harmony import */ var _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/facturaManual/factura-manual/factura-manual.component */ "jIqO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'fpago', component: _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_2__["FormaPagoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: 'factman', component: _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_3__["FacturaManualComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]] },
    { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];
class PosRoutingModule {
}
PosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PosRoutingModule });
PosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function PosRoutingModule_Factory(t) { return new (t || PosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "3Lgi":
/*!*****************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaFormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFormaPagoComponent", function() { return ListaFormaPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/forma-pago.service */ "KZK3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function ListaFormaPagoComponent_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaFormaPagoComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const element_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getFormaPago(element_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_balance_wallet");
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
class ListaFormaPagoComponent {
    constructor(formaPagoSrvc) {
        this.formaPagoSrvc = formaPagoSrvc;
        this.getFormaPagoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadFormasPago = () => {
            this.formaPagoSrvc.buscar().subscribe(lst => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstFormasPago = lst;
                        this.applyFilter();
                    }
                }
            });
        };
        this.getFormaPago = (obj) => {
            this.getFormaPagoEv.emit(obj);
        };
        this.pageChange = (e) => {
            this.pageSize = e.pageSize;
            this.pageIndex = e.pageIndex;
            this.applyFilter();
        };
    }
    ngOnInit() {
        this.loadFormasPago();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstFormasPago, this.txtFiltro);
            this.length = tmpList.length;
            this.lstFormasPagoPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstFormasPago.length;
            this.lstFormasPagoPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstFormasPago, this.pageSize, this.pageIndex + 1);
        }
    }
}
ListaFormaPagoComponent.ɵfac = function ListaFormaPagoComponent_Factory(t) { return new (t || ListaFormaPagoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forma_pago_service__WEBPACK_IMPORTED_MODULE_2__["FormaPagoService"])); };
ListaFormaPagoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaFormaPagoComponent, selectors: [["app-lista-forma-pago"]], outputs: { getFormaPagoEv: "getFormaPagoEv" }, decls: 7, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListaFormaPagoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaFormaPagoComponent_Template_input_keyup_3_listener() { return ctx.applyFilter(); })("ngModelChange", function ListaFormaPagoComponent_Template_input_ngModelChange_3_listener($event) { return ctx.txtFiltro = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListaFormaPagoComponent_mat_list_item_5_Template, 5, 1, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaFormaPagoComponent_Template_mat_paginator_page_6_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstFormasPagoPaged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"]], styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWZvcm1hLXBhZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJsaXN0YS1mb3JtYS1wYWdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "52Kp":
/*!*******************************************!*\
  !*** ./node_modules/js-base64/base64.mjs ***!
  \*******************************************/
/*! exports provided: version, VERSION, atob, atobPolyfill, btoa, btoaPolyfill, fromBase64, toBase64, utob, encode, encodeURI, encodeURL, btou, decode, isValid, fromUint8Array, toUint8Array, extendString, extendUint8Array, extendBuiltins, Base64 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atob", function() { return _atob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atobPolyfill", function() { return atobPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return _btoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoaPolyfill", function() { return btoaPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBase64", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utob", function() { return utob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURI", function() { return encodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeURL", function() { return encodeURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btou", function() { return btou; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromUint8Array", function() { return fromUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8Array", function() { return toUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendString", function() { return extendString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendUint8Array", function() { return extendUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendBuiltins", function() { return extendBuiltins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return gBase64; });
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.6.0';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = [...b64ch];
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) => src
    .replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_')
    .replace(/=+$/m, '');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a), c => c.charCodeAt(0));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/=+$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins,
};
// makecjs:CUT //




















// and finally,



/***/ }),

/***/ "HdiG":
/*!**************************************************!*\
  !*** ./src/app/admin/services/moneda.service.ts ***!
  \**************************************************/
/*! exports provided: MonedaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonedaService", function() { return MonedaService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class MonedaService {
    constructor(http) {
        this.http = http;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    get(fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos}/get_moneda?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
MonedaService.ɵfac = function MonedaService_Factory(t) { return new (t || MonedaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
MonedaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MonedaService, factory: MonedaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ISOR":
/*!*****************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/forma-pago/forma-pago.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagoComponent", function() { return FormaPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lista-forma-pago/lista-forma-pago.component */ "3Lgi");
/* harmony import */ var _form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-forma-pago/form-forma-pago.component */ "oJLn");



const _c0 = ["lstFormaPago"];
class FormaPagoComponent {
    constructor() {
        this.setFormaPago = (fp) => this.formaPago = fp;
        this.refreshFormaPagoList = () => this.lstFormaPagoComponent.loadFormasPago();
        this.formaPago = { forma_pago: null, descripcion: null, activo: 1 };
    }
    ngOnInit() {
    }
}
FormaPagoComponent.ɵfac = function FormaPagoComponent_Factory(t) { return new (t || FormaPagoComponent)(); };
FormaPagoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormaPagoComponent, selectors: [["app-forma-pago"]], viewQuery: function FormaPagoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lstFormaPagoComponent = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getFormaPagoEv"], ["lstFormaPago", ""], [1, "col", "m7", "s12"], [3, "formaPago", "formaPagoSavedEv"], ["frmIngreso", ""]], template: function FormaPagoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-lista-forma-pago", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getFormaPagoEv", function FormaPagoComponent_Template_app_lista_forma_pago_getFormaPagoEv_2_listener($event) { return ctx.setFormaPago($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-form-forma-pago", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formaPagoSavedEv", function FormaPagoComponent_Template_app_form_forma_pago_formaPagoSavedEv_5_listener() { return ctx.refreshFormaPagoList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formaPago", ctx.formaPago);
    } }, directives: [_lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_1__["ListaFormaPagoComponent"], _form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_2__["FormFormaPagoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYS1wYWdvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "KFbY":
/*!*************************************************!*\
  !*** ./src/app/pos/services/factura.service.ts ***!
  \*************************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class FacturaService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'factura';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    facturar(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    get(fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/buscar_factura?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    imprimir(idfactura) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/imprimir/${idfactura}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/guardar${!!entidad.factura ? ('/' + entidad.factura) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    refacturar(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/refacturar${!!entidad.factura ? ('/' + entidad.factura) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    firmar(identidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/facturar/${identidad}`, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anular(identidad, params = {}) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/anular/${identidad}`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getDetalle(idfactura, fltr = {}) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/buscar_detalle/${idfactura}?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    saveDetalle(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/guardar_detalle/${entidad.factura}${!!entidad.detalle_factura ? ('/' + entidad.detalle_factura) : ''}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getGrafo(idfactura) {
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/get_grafo_factura/${idfactura}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
FacturaService.ɵfac = function FacturaService_Factory(t) { return new (t || FacturaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
FacturaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FacturaService, factory: FacturaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KZK3":
/*!****************************************************!*\
  !*** ./src/app/pos/services/forma-pago.service.ts ***!
  \****************************************************/
/*! exports provided: FormaPagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagoService", function() { return FormaPagoService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class FormaPagoService {
    // private usrToken: string = null;
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'catalogo';
        this.manteUrl = 'fpago';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
    }
    get(fltr = {}) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].url}/${this.moduleUrl}/get_forma_pago?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    buscar(fltr = {}) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.manteUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        /* const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': this.usrToken
          })
        }; */
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlMantenimientos}/${this.manteUrl}/guardar${!!entidad.forma_pago ? ('/' + entidad.forma_pago) : ''}`, entidad
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
FormaPagoService.ɵfac = function FormaPagoService_Factory(t) { return new (t || FormaPagoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
FormaPagoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FormaPagoService, factory: FormaPagoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XI40":
/*!***************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FormFacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFacturaManualComponent", function() { return FormFacturaManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/factura.service */ "KFbY");
/* harmony import */ var _services_factura_serie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/factura-serie.service */ "ro7O");
/* harmony import */ var _admin_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../admin/services/cliente.service */ "M8s9");
/* harmony import */ var _admin_services_moneda_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../admin/services/moneda.service */ "HdiG");
/* harmony import */ var _wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../wms/services/articulo.service */ "NGYs");
/* harmony import */ var _admin_services_anulacion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../admin/services/anulacion.service */ "X/K6");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var _admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../admin/services/impresora.service */ "qMXL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
































function FormFacturaManualComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*** ANULADA ***");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_form_8_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fs_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fs_r19.factura_serie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", fs_r19.serie, " (", fs_r19.tipo, ") ");
} }
function FormFacturaManualComponent_form_8_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cli_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cli_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", cli_r20.nombre, " (", cli_r20.nit, ") ");
} }
function FormFacturaManualComponent_form_8_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mon_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mon_r21.moneda);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", mon_r21.nombre, " (", mon_r21.simbolo, ") ");
} }
function FormFacturaManualComponent_form_8_input_30_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_input_30_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.factura.notas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r15.keyboardLayout)("ngModel", ctx_r15.factura.notas);
} }
function FormFacturaManualComponent_form_8_input_31_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_input_31_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.factura.notas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.factura.notas);
} }
function FormFacturaManualComponent_form_8_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.refacturar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Refacturar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_form_8_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.resetFactura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nueva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function FormFacturaManualComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormFacturaManualComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _r10.form.valid && ctx_r30.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Serie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_Template_mat_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.factura.factura_serie = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormFacturaManualComponent_form_8_mat_option_7_Template, 2, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.clienteSelected = $event; })("keyup", function FormFacturaManualComponent_form_8_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.filtrar(ctx_r34.clienteSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-autocomplete", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormFacturaManualComponent_form_8_mat_option_15_Template, 2, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.factura.fecha_factura = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Moneda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_Template_mat_select_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.factura.moneda = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FormFacturaManualComponent_form_8_mat_option_24_Template, 2, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_form_8_Template_mat_checkbox_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return +(ctx_r37.factura.exenta = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Exenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FormFacturaManualComponent_form_8_input_30_Template, 1, 2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormFacturaManualComponent_form_8_input_31_Template, 1, 1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.firmarFactura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Firmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.imprimirFactura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Imprimir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.representacionGrafica(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_form_8_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.anularFactura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FormFacturaManualComponent_form_8_button_43_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormFacturaManualComponent_form_8_button_44_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.factura.factura_serie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.facturaSeries);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.clienteSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("matAutocomplete", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r3.displayCliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filteredClientes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.factura.fecha_factura);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.factura.moneda);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.monedas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r3.factura.exenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.esMovil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.esMovil);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || !!ctx_r3.factura.fel_uuid || !!ctx_r3.factura.fel_uuid_anulacion || !ctx_r3.factura.cliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || !!ctx_r3.factura.fel_uuid || !!ctx_r3.factura.fel_uuid_anulacion || ctx_r3.detallesFactura.length === 0 || ctx_r3.refacturacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || ctx_r3.factura.fel_uuid == undefined || ctx_r3.factura.fel_uuid == null || !!ctx_r3.factura.fel_uuid_anulacion || ctx_r3.detallesFactura.length === 0 || ctx_r3.refacturacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || ctx_r3.factura.fel_uuid == undefined || ctx_r3.factura.fel_uuid == null || ctx_r3.detallesFactura.length === 0 || ctx_r3.refacturacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || ctx_r3.factura.fel_uuid == undefined || ctx_r3.factura.fel_uuid == null || !!ctx_r3.factura.fel_uuid_anulacion || ctx_r3.detallesFactura.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r3.factura.fel_uuid_anulacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.factura.factura);
} }
function FormFacturaManualComponent_hr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function FormFacturaManualComponent_mat_card_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_mat_card_10_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.showFormDetalle = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_mat_card_10_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.showFormDetalle = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_form_7_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r55.descripcion, " ");
} }
function FormFacturaManualComponent_mat_card_10_form_7_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_mat_card_10_form_7_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r56.resetDetalleFactura(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormFacturaManualComponent_mat_card_10_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _r51.form.valid && ctx_r58.onSubmitDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.txtArticuloSelected = $event; })("keyup", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.filtrarArticulos(ctx_r61.txtArticuloSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-autocomplete", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function FormFacturaManualComponent_mat_card_10_form_7_Template_mat_autocomplete_optionSelected_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.setPrecioUnitario($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormFacturaManualComponent_mat_card_10_form_7_mat_option_9_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.detalleFactura.cantidad = $event; })("change", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.detalleFactura.total = +ctx_r64.detalleFactura.precio_unitario * +ctx_r64.detalleFactura.cantidad; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.detalleFactura.precio_unitario = $event; })("change", function FormFacturaManualComponent_mat_card_10_form_7_Template_input_change_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.detalleFactura.total = +ctx_r66.detalleFactura.precio_unitario * +ctx_r66.detalleFactura.cantidad; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormFacturaManualComponent_mat_card_10_form_7_button_19_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.txtArticuloSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("matAutocomplete", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r44.displayArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r44.filteredArticulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.detalleFactura.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.detalleFactura.precio_unitario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r51.form.valid || !!ctx_r44.factura.fel_uuid || !!ctx_r44.factura.fel_uuid_anulacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r44.detalleFactura.detalle_factura);
} }
function FormFacturaManualComponent_mat_card_10_hr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function FormFacturaManualComponent_mat_card_10_table_9_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_table_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r79.articulo.descripcion);
} }
function FormFacturaManualComponent_mat_card_10_table_9_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_table_9_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r80.cantidad, "1.2-2"));
} }
function FormFacturaManualComponent_mat_card_10_table_9_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_table_9_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r81.precio_unitario, "1.2-2"), " ");
} }
function FormFacturaManualComponent_mat_card_10_table_9_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_table_9_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r82.total, "1.2-2"));
} }
function FormFacturaManualComponent_mat_card_10_table_9_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormFacturaManualComponent_mat_card_10_table_9_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFacturaManualComponent_mat_card_10_table_9_td_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const element_r83 = ctx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r84.getDetalleFactura(element_r83.factura, element_r83.detalle_factura); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !!ctx_r76.factura.fel_uuid || !!ctx_r76.factura.fel_uuid_anulacion || ctx_r76.refacturacion);
} }
function FormFacturaManualComponent_mat_card_10_table_9_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
} }
function FormFacturaManualComponent_mat_card_10_table_9_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
} }
function FormFacturaManualComponent_mat_card_10_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormFacturaManualComponent_mat_card_10_table_9_th_2_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormFacturaManualComponent_mat_card_10_table_9_td_3_Template, 2, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormFacturaManualComponent_mat_card_10_table_9_th_5_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormFacturaManualComponent_mat_card_10_table_9_td_6_Template, 3, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormFacturaManualComponent_mat_card_10_table_9_th_8_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormFacturaManualComponent_mat_card_10_table_9_td_9_Template, 3, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormFacturaManualComponent_mat_card_10_table_9_th_11_Template, 2, 0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormFacturaManualComponent_mat_card_10_table_9_td_12_Template, 3, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormFacturaManualComponent_mat_card_10_table_9_th_14_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormFacturaManualComponent_mat_card_10_table_9_td_15_Template, 3, 1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormFacturaManualComponent_mat_card_10_table_9_tr_16_Template, 1, 0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormFacturaManualComponent_mat_card_10_table_9_tr_17_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r46.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r46.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r46.displayedColumns);
} }
function FormFacturaManualComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormFacturaManualComponent_mat_card_10_button_4_Template, 3, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormFacturaManualComponent_mat_card_10_button_5_Template, 3, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormFacturaManualComponent_mat_card_10_form_7_Template, 20, 10, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormFacturaManualComponent_mat_card_10_hr_8_Template, 1, 0, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormFacturaManualComponent_mat_card_10_table_9_Template, 18, 3, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Detalle de factura No. ", !!ctx_r5.factura.serie_factura ? ctx_r5.factura.serie_factura + " " + ctx_r5.factura.numero_factura : "Pendiente de firmar.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.showFormDetalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFormDetalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFormDetalle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.detallesFactura.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.detallesFactura.length > 0);
} }
class FormFacturaManualComponent {
    constructor(snackBar, dialog, facturaSrvc, facturaSerieSrvc, clienteSrvc, monedaSrvc, articuloSrvc, anulacionSrvc, socket, ls, configSrvc, impresoraSrvc) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.facturaSrvc = facturaSrvc;
        this.facturaSerieSrvc = facturaSerieSrvc;
        this.clienteSrvc = clienteSrvc;
        this.monedaSrvc = monedaSrvc;
        this.articuloSrvc = articuloSrvc;
        this.anulacionSrvc = anulacionSrvc;
        this.socket = socket;
        this.ls = ls;
        this.configSrvc = configSrvc;
        this.impresoraSrvc = impresoraSrvc;
        this.facturaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showForm = true;
        this.showFormDetalle = true;
        this.facturaSeries = [];
        this.clientes = [];
        this.filteredClientes = [];
        this.monedas = [];
        this.detallesFactura = [];
        this.articulos = [];
        this.filteredArticulos = [];
        this.displayedColumns = ['articulo', 'cantidad', 'precio_unitario', 'total', 'editItem'];
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].IDIOMA_TECLADO;
        this.esMovil = false;
        this.refacturacion = false;
        this.txtArticuloSelected = undefined;
        this.clienteSelected = undefined;
        this.razonAnulacion = [];
        this.impresoraPorDefecto = null;
        this.getRazonAnulacion = () => {
            this.anulacionSrvc.get().subscribe(res => {
                this.razonAnulacion = res;
            });
        };
        this.filtrar = (value) => {
            if (value && (typeof value === 'string')) {
                const filterValue = value.toLowerCase();
                this.filteredClientes =
                    this.clientes.filter(c => c.nombre.toLowerCase().includes(filterValue) || c.nit.toLowerCase().includes(filterValue));
            }
            else {
                this.filteredClientes = this.clientes;
            }
        };
        this.loadImpresoraDefecto = () => {
            const idImpresoraDefecto = +this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].CONSTANTES.RT_IMPRESORA_DEFECTO) || 0;
            if (idImpresoraDefecto > 0) {
                this.impresoraSrvc.get({ impresora: idImpresoraDefecto }).subscribe((res) => {
                    if (res && res.length > 0) {
                        this.impresoraPorDefecto = res[0];
                    }
                    else {
                        this.impresoraPorDefecto = null;
                    }
                });
            }
        };
        this.loadFacturaSeries = () => {
            this.facturaSerieSrvc.get().subscribe(res => {
                if (res) {
                    this.facturaSeries = res;
                }
            });
        };
        this.loadClientes = () => {
            this.clienteSrvc.get().subscribe(res => {
                if (res) {
                    this.clientes = res;
                    this.filteredClientes = this.clientes;
                }
            });
        };
        this.loadMonedas = () => {
            this.monedaSrvc.get().subscribe(res => {
                if (res) {
                    this.monedas = res;
                }
            });
        };
        this.refacturar = () => {
            this.factura = {
                factura: this.factura.factura, factura_serie: null, cliente: null,
                fecha_factura: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0, notas: null,
                fel_uuid: null, fel_uuid_anulacion: null
            };
            this.refacturacion = true;
        };
        this.resetFactura = () => {
            this.factura = {
                factura: null, factura_serie: null, cliente: null,
                fecha_factura: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0, notas: null,
                fel_uuid: null, fel_uuid_anulacion: null
            };
            this.clienteSelected = undefined;
            this.resetDetalleFactura();
            this.detallesFactura = [];
        };
        this.displayCliente = (cli) => {
            if (cli) {
                this.factura.cliente = cli.cliente;
                return cli.nombre;
            }
            return undefined;
        };
        this.onSubmit = () => {
            // console.log(this.factura); return;
            if (this.refacturacion) {
                this.facturaSrvc.refacturar(this.factura).subscribe(res => {
                    if (res.exito) {
                        this.facturaSavedEv.emit();
                        this.resetFactura();
                        this.refacturacion = false;
                        this.factura = {
                            factura: res.factura.factura,
                            factura_serie: res.factura.factura_serie,
                            cliente: res.factura.cliente,
                            fecha_factura: res.factura.fecha_factura,
                            moneda: res.factura.moneda,
                            exenta: +res.factura.exenta,
                            notas: res.factura.notas,
                            fel_uuid: res.factura.fel_uuid
                        };
                        this.snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
                    }
                });
            }
            else {
                this.facturaSrvc.save(this.factura).subscribe(res => {
                    if (res.exito) {
                        this.facturaSavedEv.emit();
                        this.resetFactura();
                        this.factura = {
                            factura: res.factura.factura,
                            factura_serie: res.factura.factura_serie,
                            cliente: res.factura.cliente,
                            fecha_factura: res.factura.fecha_factura,
                            moneda: res.factura.moneda,
                            exenta: +res.factura.exenta,
                            notas: res.factura.notas,
                            fel_uuid: res.factura.fel_uuid
                        };
                        this.snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
                    }
                });
            }
        };
        this.firmarFactura = () => {
            const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModel"]('Firmar factura', 'Luego de firmar la factura no podrá hacer ninguna modificación. ¿Desea continuar?', 'Sí', 'No')
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res) {
                    this.facturaSrvc.firmar(+this.factura.factura).subscribe(resFirma => {
                        if (resFirma.exito) {
                            this.factura.numero_factura = resFirma.factura.numero_factura;
                            this.factura.serie_factura = resFirma.factura.serie_factura;
                            this.factura.certificador_fel = resFirma.factura.certificador_fel;
                            this.factura.fel_uuid = resFirma.factura.fel_uuid;
                            this.facturaSavedEv.emit();
                            this.snackBar.open('Factura firmada con éxito...', 'Firmar', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(`ERROR: ${resFirma.mensaje}`, 'Firmar', { duration: 3000 });
                        }
                    });
                }
            });
        };
        this.procesaDetalleFactura = (detalle) => {
            const detFact = [];
            detalle.forEach(d => detFact.push({
                Cantidad: parseInt(d.cantidad),
                Descripcion: d.articulo.descripcion,
                Total: +d.total,
                PrecioUnitario: +d.precio_unitario
            }));
            return detFact;
        };
        this.getTotalDetalle = (detalle) => {
            let suma = 0.00;
            detalle.forEach(d => suma += +d.total);
            return suma;
        };
        this.getTotalImpuestosAdicionales = (impuestos) => {
            let suma = 0.00;
            impuestos.forEach(i => suma += +i.total);
            return suma;
        };
        this.imprimirFactura = () => {
            // console.log(this.factura);
            this.facturaSrvc.imprimir(+this.factura.factura).subscribe(res => {
                if (res.factura) {
                    // console.log(res.factura);
                    const datosAImprimir = {
                        NombreEmpresa: res.factura.empresa.nombre,
                        NitEmpresa: res.factura.empresa.nit,
                        SedeEmpresa: res.factura.sedeFactura.nombre,
                        DireccionEmpresa: res.factura.empresa.direccion,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_3__(res.factura.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dateFormat),
                        Nit: res.factura.receptor.nit,
                        Nombre: res.factura.receptor.nombre,
                        Direccion: res.factura.receptor.direccion,
                        Serie: res.factura.serie_factura,
                        Numero: res.factura.numero_factura,
                        Total: this.getTotalDetalle(res.factura.detalle) + this.getTotalImpuestosAdicionales((res.factura.impuestos_adicionales || [])),
                        NoAutorizacion: res.factura.fel_uuid,
                        NombreCertificador: res.factura.certificador_fel.nombre,
                        NitCertificador: res.factura.certificador_fel.nit,
                        FechaDeAutorizacion: res.factura.fecha_autorizacion,
                        NoOrdenEnLinea: '',
                        FormaDePago: '',
                        DetalleFactura: this.procesaDetalleFactura(res.factura.detalle),
                        ImpuestosAdicionales: (res.factura.impuestos_adicionales || []),
                        Impresora: this.impresoraPorDefecto
                    };
                    if (this.impresoraPorDefecto) {
                        if (+this.impresoraPorDefecto.bluetooth === 0) {
                            this.socket.emit(`print:factura`, `${JSON.stringify(datosAImprimir)}`);
                        }
                        else {
                            this.printToBT(JSON.stringify(datosAImprimir));
                        }
                    }
                    else {
                        delete datosAImprimir.Impresora;
                        this.socket.emit(`print:factura`, `${JSON.stringify(datosAImprimir)}`);
                    }
                    this.snackBar.open(`Imprimiendo factura ${this.factura.serie_factura}-${this.factura.numero_factura}`, 'Impresión', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 3000 });
                }
            });
        };
        this.printToBT = (msgToPrint = '') => {
            const convertir = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].CONSTANTES.RT_ENVIA_COMO_BASE64);
            const data = convertir ? js_base64__WEBPACK_IMPORTED_MODULE_5__["Base64"].encode(msgToPrint, true) : msgToPrint;
            // const AppHref = `${GLOBAL.DEEP_LINK_ANDROID}${data}`;
            const AppHref = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].DEEP_LINK_ANDROID.replace('__INFOBASE64__', data);
            try {
                window.location.href = AppHref;
            }
            catch (error) {
                this.snackBar.open('No se pudo conectar con la aplicación de impresión', 'Comanda', { duration: 3000 });
            }
        };
        this.anularFactura = () => {
            const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModel"]('Anular factura', 'Luego de anular la factura no podrá hacer ninguna modificación. ¿Desea continuar?', 'Sí', 'No', {
                    input: [
                        {
                            select: true,
                            label: 'Motivo',
                            datos: this.razonAnulacion,
                            valor: null,
                            id: 'razon_anulacion',
                            descripcion: 'descripcion',
                            requerido: true
                        },
                        {
                            select: false,
                            label: 'Comentario',
                            valor: null,
                            id: 'comentario_anulacion',
                            requerido: false
                        }
                    ]
                })
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res.resultado) {
                    const params = {};
                    for (let i = 0; i < res.config.input.length; i++) {
                        const input = res.config.input[i];
                        params[input.id] = input.valor;
                    }
                    this.facturaSrvc.anular(+this.factura.factura, params).subscribe(resAnula => {
                        if (resAnula.exito) {
                            this.factura.fel_uuid_anulacion = resAnula.factura.fel_uuid_anulacion;
                            this.facturaSavedEv.emit();
                            this.snackBar.open('Factura anulada con éxito...', 'Firmar', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open(`ERROR: ${resAnula.mensaje}`, 'Firmar', { duration: 10000 });
                        }
                    });
                }
            });
        };
        this.loadArticulos = () => {
            this.articuloSrvc.getArticulos().subscribe(res => {
                if (res) {
                    this.articulos = res;
                    this.filteredArticulos = this.articulos;
                }
            });
        };
        this.displayArticulo = (art) => {
            if (art) {
                this.detalleFactura.articulo = art.articulo;
                return art.descripcion;
            }
            return undefined;
        };
        this.filtrarArticulos = (value) => {
            if (value && (typeof value === 'string')) {
                const filterValue = value.toLowerCase();
                this.filteredArticulos =
                    this.articulos.filter(a => a.descripcion.toLowerCase().includes(filterValue));
            }
            else {
                this.filteredArticulos = this.articulos;
            }
        };
        this.setPrecioUnitario = (ev) => {
            const obj = ev.option.value;
            this.detalleFactura.precio_unitario = +obj.precio;
            this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
        };
        this.resetDetalleFactura = () => {
            this.detalleFactura = {
                detalle_factura: null, factura: (this.factura.factura || 0), articulo: null, cantidad: 1, precio_unitario: null, total: null
            };
            this.txtArticuloSelected = undefined;
        };
        this.loadDetalleFactura = (idfactura = +this.factura.factura) => {
            this.facturaSrvc.getDetalle(idfactura, { factura: idfactura }).subscribe(res => {
                // console.log(res);
                if (res) {
                    this.detallesFactura = res;
                    this.updateTableDataSource();
                }
            });
        };
        this.getDetalleFactura = (idfactura = +this.factura.factura, iddetalle) => {
            this.facturaSrvc.getDetalle(idfactura, { detalle_factura: iddetalle }).subscribe((res) => {
                // console.log(res);
                if (res) {
                    this.detalleFactura = {
                        detalle_factura: res[0].detalle_factura,
                        factura: res[0].factura,
                        articulo: res[0].articulo.articulo,
                        cantidad: +res[0].cantidad,
                        precio_unitario: +res[0].precio_unitario,
                        total: +res[0].total
                    };
                    this.txtArticuloSelected = res[0].articulo;
                    this.showFormDetalle = true;
                }
            });
        };
        this.onSubmitDetail = () => {
            this.detalleFactura.factura = this.factura.factura;
            this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
            // console.log(this.detalleFactura);
            this.facturaSrvc.saveDetalle(this.detalleFactura).subscribe(res => {
                // console.log(res);
                if (res) {
                    this.loadDetalleFactura();
                    this.resetDetalleFactura();
                }
            });
        };
        this.updateTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.detallesFactura);
        this.representacionGrafica = () => {
            this.facturaSrvc.getGrafo(this.factura.factura).subscribe(res => {
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
            try {
                pdfWindow.document.write('<iframe width="100%" style="margin: -8px;border: none;" height="100%" src="data:application/pdf;base64, ' +
                    encodeURI(pdf) +
                    '"></iframe>');
            }
            catch (e) {
                this.snackBar.open('No se pudo abrir la ventana emergente para ver la representación gráfica. Revise la configuración de su explorador, por favor.', 'PDF', { duration: 7000 });
            }
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
        this.refacturacion = false;
        this.resetFactura();
        this.loadFacturaSeries();
        this.loadClientes();
        this.loadMonedas();
        this.loadArticulos();
        this.getRazonAnulacion();
        this.loadImpresoraDefecto();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede_uuid));
        }
    }
}
FormFacturaManualComponent.ɵfac = function FormFacturaManualComponent_Factory(t) { return new (t || FormFacturaManualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_factura_service__WEBPACK_IMPORTED_MODULE_8__["FacturaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_factura_serie_service__WEBPACK_IMPORTED_MODULE_9__["FacturaSerieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_cliente_service__WEBPACK_IMPORTED_MODULE_10__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_moneda_service__WEBPACK_IMPORTED_MODULE_11__["MonedaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_12__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_anulacion_service__WEBPACK_IMPORTED_MODULE_13__["AnulacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_14__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_15__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_16__["ConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_impresora_service__WEBPACK_IMPORTED_MODULE_17__["ImpresoraService"])); };
FormFacturaManualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFacturaManualComponent, selectors: [["app-form-factura-manual"]], inputs: { factura: "factura" }, outputs: { facturaSavedEv: "facturaSavedEv" }, decls: 11, vars: 7, consts: [[1, "mat-elevation-z4", "fullWidth"], ["style", "background-color: lightcoral;", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mat-elevation-z4 fullWidth", 4, "ngIf"], [2, "background-color", "lightcoral"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmFactura", "ngForm"], [1, "form-group"], [1, "fullWidth"], ["name", "factura_serie", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Cliente", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith"], ["auto", "matAutocomplete"], ["matInput", "", "type", "date", "placeholder", "Fecha", "name", "fecha_factura", "required", "", 3, "ngModel", "ngModelChange"], ["name", "moneda", "required", "", 3, "ngModel", "ngModelChange"], ["name", "exenta", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Notas", "name", "notas", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Notas", "name", "notas", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], [3, "value"], ["matInput", "", "type", "text", "placeholder", "Notas", "name", "notas", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Notas", "name", "notas", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["mat-table", "", "class", "mat-elevation-z4 full-width", 3, "dataSource", 4, "ngIf"], ["frmDetalleFactura", "ngForm"], ["type", "text", "placeholder", "Art\u00EDculo", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith", "optionSelected"], ["autoArticulos", "matAutocomplete"], ["matInput", "", "placeholder", "Cantidad", "name", "cantidad", "type", "number", "step", "0.01", "required", "", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "placeholder", "Precio unitario", "name", "precio_unitario", "type", "number", "step", "0.01", "required", "", 3, "ngModel", "ngModelChange", "change"], ["mat-table", "", 1, "mat-elevation-z4", "full-width", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-wrap", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "precio_unitario"], ["matColumnDef", "total"], ["matColumnDef", "editItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-wrap"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function FormFacturaManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormFacturaManualComponent_h4_2_Template, 2, 0, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormFacturaManualComponent_button_5_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormFacturaManualComponent_button_6_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormFacturaManualComponent_form_8_Template, 45, 21, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormFacturaManualComponent_hr_9_Template, 1, 0, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormFacturaManualComponent_mat_card_10_Template, 10, 6, "mat-card", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.factura.fel_uuid_anulacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Factura ", !!ctx.factura.factura ? !!ctx.factura.serie_factura ? ctx.factura.serie_factura + " " + ctx.factura.numero_factura : "Pendiente de firmar." : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.factura.factura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.factura.factura);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocomplete"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_29__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NumberValueAccessor"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DecimalPipe"]], styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZmFjdHVyYS1tYW51YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiZm9ybS1mYWN0dXJhLW1hbnVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbkZvbnRTaXplIHtcbiAgICBmb250LXNpemU6IDI0cHQ7XG59Il19 */"] });


/***/ }),

/***/ "XklP":
/*!***********************************************!*\
  !*** ./src/app/pos/services/cobro.service.ts ***!
  \***********************************************/
/*! exports provided: CobroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobroService", function() { return CobroService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CobroService {
    constructor(http) {
        this.http = http;
        this.moduleUrl = 'cuenta';
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
    }
    save(entidad) {
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/cobrar/${entidad.cuenta}`, entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
CobroService.ɵfac = function CobroService_Factory(t) { return new (t || CobroService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CobroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CobroService, factory: CobroService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fn6i":
/*!*************************************************************************!*\
  !*** ./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.ts ***!
  \*************************************************************************/
/*! exports provided: CobrarPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobrarPedidoComponent", function() { return CobrarPedidoComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ "IJgu");
/* harmony import */ var _shared_components_check_password_check_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/check-password/check-password.component */ "mTQG");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-base64 */ "52Kp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/forma-pago.service */ "KZK3");
/* harmony import */ var _services_cobro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/cobro.service */ "XklP");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/factura.service */ "KFbY");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../admin/services/sede.service */ "IHy4");
/* harmony import */ var _restaurante_services_comanda_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../restaurante/services/comanda.service */ "JKh+");
/* harmony import */ var _admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../admin/services/configuracion.service */ "qXgu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_components_cliente_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../admin/components/cliente/lista-cliente/lista-cliente.component */ "FjVI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/cargando/cargando.component */ "TOq3");





























function CobrarPedidoComponent_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" - Factura a nombre de ", ctx_r0.clienteSelected.nombre, " ");
} }
function CobrarPedidoComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", p_r15.cantidad, "\u00A0", p_r15.nombre || p_r15.articulo.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 3, p_r15.cantidad * p_r15.precio + p_r15.monto_extra, "1.2-2"));
} }
function CobrarPedidoComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", fp_r17.forma_pago);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fp_r17.descripcion, " ");
} }
function CobrarPedidoComponent_input_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_input_21_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r18.formaPago.monto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matKeyboard", ctx_r5.keyboardLayout)("ngModel", ctx_r5.formaPago.monto);
} }
function CobrarPedidoComponent_input_22_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_input_22_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r20.formaPago.monto = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r6.formaPago.monto);
} }
function CobrarPedidoComponent_input_24_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_input_24_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.formaPago.propina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matKeyboard", ctx_r7.keyboardLayout)("ngModel", ctx_r7.formaPago.propina);
} }
function CobrarPedidoComponent_input_25_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_input_25_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.formaPago.propina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.formaPago.propina);
} }
function CobrarPedidoComponent_mat_form_field_26_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_mat_form_field_26_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.formaPago.documento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matKeyboard", ctx_r26.keyboardLayout)("ngModel", ctx_r26.formaPago.documento)("required", ctx_r26.pideDocumento);
} }
function CobrarPedidoComponent_mat_form_field_26_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_mat_form_field_26_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r30.formaPago.documento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r27.formaPago.documento)("required", ctx_r27.pideDocumento);
} }
function CobrarPedidoComponent_mat_form_field_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CobrarPedidoComponent_mat_form_field_26_input_1_Template, 1, 3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CobrarPedidoComponent_mat_form_field_26_input_2_Template, 1, 2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.esMovil);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.esMovil);
} }
function CobrarPedidoComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CobrarPedidoComponent_tr_41_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const i_r33 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.delFormaPago(i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fpCta_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](fpCta_r32.forma_pago.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](5, 3, fpCta_r32.monto, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 6, fpCta_r32.propina, "1.2-2"));
} }
function CobrarPedidoComponent_table_44_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", s_r37.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", s_r37.nombre, " ");
} }
function CobrarPedidoComponent_table_44_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Datos de env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Atiende:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_table_44_Template_mat_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r38.datosPedido.sede = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CobrarPedidoComponent_table_44_mat_option_11_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_table_44_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r40.datosPedido.direccion_entrega = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_table_44_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r41.datosPedido.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_table_44_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r42.datosPedido.telefono = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.datosPedido.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r11.sedes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.datosPedido.direccion_entrega);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.datosPedido.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r11.datosPedido.telefono);
} }
function CobrarPedidoComponent_app_cargando_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-cargando", 53);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("configuracion", ctx_r12.cargandoConf);
} }
function CobrarPedidoComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CobrarPedidoComponent_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r43.cobrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Facturar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r13.formasPagoDeCuenta.length == 0 || +ctx_r13.inputData.saldo > 0 || !ctx_r13.factReq.cliente || ctx_r13.facturando);
} }
function CobrarPedidoComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CobrarPedidoComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r45.cobrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enviar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r14.formasPagoDeCuenta.length == 0 || +ctx_r14.inputData.saldo > 0 || !ctx_r14.factReq.cliente || ctx_r14.facturando || !ctx_r14.datosPedido.sede);
} }
const _c0 = function (a0, a1, a2) { return { "saldo-pendiente": a0, "saldo-exacto": a1, "saldo-extra": a2 }; };
class CobrarPedidoComponent {
    constructor(dialog, dialogRef, data, snackBar, formaPagoSrvc, cobroSrvc, facturaSrvc, ls, socket, sedeSrvc, comandaSrvc, configSrvc) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.formaPagoSrvc = formaPagoSrvc;
        this.cobroSrvc = cobroSrvc;
        this.facturaSrvc = facturaSrvc;
        this.ls = ls;
        this.socket = socket;
        this.sedeSrvc = sedeSrvc;
        this.comandaSrvc = comandaSrvc;
        this.configSrvc = configSrvc;
        this.inputData = {};
        this.lstFormasPago = [];
        this.formaPago = {};
        this.formasPagoDeCuenta = [];
        this.esMovil = false;
        this.facturando = false;
        this.cargandoConf = { w: 75, h: 75 };
        this.pideDocumento = false;
        this.sedes = [];
        this.datosPedido = { sede: null, direccion_entrega: null, telefono: null, nombre: null, cliente: null };
        this.endSubs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.resetFactReq = () => {
            this.factReq = { cuentas: [], factura_serie: 1, cliente: null, fecha_factura: moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat), moneda: 1 };
        };
        this.processData = () => {
            if (this.data) {
                this.inputData = this.data;
            }
            else {
                this.data = this.inputData;
            }
            // console.log('MESA = ', this.data.mesaenuso);
            this.inputData.totalDeCuenta = 0.00;
            this.inputData.productosACobrar.forEach((item) => {
                this.inputData.totalDeCuenta += (item.precio * item.cantidad) + (item.monto_extra);
            });
            this.calculaPropina();
            this.actualizaSaldo();
            this.formaPago.monto = parseFloat(this.inputData.saldo).toFixed(2);
            // console.log('INPUT DATA = ', this.inputData);
            if (this.inputData.clientePedido) {
                this.setClienteFacturar(this.inputData.clientePedido);
            }
        };
        this.loadSedes = () => {
            this.endSubs.add(this.sedeSrvc.get().subscribe(res => {
                if (res) {
                    this.sedes = res;
                }
            }));
        };
        this.calculaPropina = () => {
            this.inputData.montoPropina = parseFloat((this.inputData.porcentajePropina * this.inputData.totalDeCuenta / 100).toFixed(2));
            this.actualizaSaldo();
        };
        this.loadFormasPago = () => {
            this.endSubs.add(this.formaPagoSrvc.get({ activo: 1 }).subscribe((res) => {
                if (!!res && res.length > 0) {
                    this.lstFormasPago = res;
                }
            }));
        };
        this.addFormaPago = () => {
            const fp = this.lstFormasPago.filter(f => +f.forma_pago === +this.formaPago.forma_pago)[0];
            if (+fp.pedirautorizacion === 1) {
                const vpgtRef = this.dialog.open(_shared_components_check_password_check_password_component__WEBPACK_IMPORTED_MODULE_4__["CheckPasswordComponent"], {
                    width: '40%',
                    disableClose: true,
                    data: new _shared_components_check_password_check_password_component__WEBPACK_IMPORTED_MODULE_4__["ConfigCheckPasswordModel"](1)
                });
                this.endSubs.add(vpgtRef.afterClosed().subscribe(res => {
                    if (res) {
                        this.agregaFormaPago(fp);
                    }
                    else {
                        this.snackBar.open('La contraseña no es correcta', 'Formas de pago', { duration: 5000 });
                    }
                }));
            }
            else {
                this.agregaFormaPago(fp);
            }
        };
        this.agregaFormaPago = (fp) => {
            this.formasPagoDeCuenta.push({
                forma_pago: fp,
                monto: parseFloat(this.formaPago.monto).toFixed(2),
                propina: (this.formaPago.propina || 0.00),
                documento: (this.formaPago.documento || null),
                comision_monto: +this.formaPago.monto * +fp.comision_porcentaje / 100
            });
            this.actualizaSaldo();
            this.pideDocumento = false;
        };
        this.delFormaPago = (idx) => {
            this.formasPagoDeCuenta.splice(idx, 1);
            this.actualizaSaldo();
        };
        this.actualizaSaldo = () => {
            let sumFormasPago = 0.00;
            this.formasPagoDeCuenta.forEach(fp => sumFormasPago += +fp.monto);
            // this.inputData.saldo = this.inputData.totalDeCuenta + this.inputData.montoPropina - sumFormasPago;
            this.inputData.saldo = (+this.inputData.totalDeCuenta - sumFormasPago).toFixed(2);
            this.formaPago = { monto: this.inputData.saldo };
        };
        this.cancelar = () => this.dialogRef.close();
        this.setClienteFacturar = (obj) => {
            this.clienteSelected = obj;
            this.factReq.cliente = +obj.cliente;
            if (+this.data.mesaenuso.mesa.escallcenter === 1) {
                this.datosPedido.nombre = obj.nombre;
                this.datosPedido.direccion_entrega = obj.direccion;
                this.datosPedido.telefono = obj.telefono;
            }
        };
        this.cobrar = () => {
            this.facturando = true;
            const objCobro = {
                cuenta: this.inputData.idcuenta,
                forma_pago: [],
                total: this.inputData.totalDeCuenta + this.inputData.montoPropina,
                propina_monto: this.inputData.montoPropina,
                propina_porcentaje: this.inputData.porcentajePropina,
                comision_monto: 0.00
            };
            let sumaMontoComision = 0.00;
            for (const fp of this.formasPagoDeCuenta) {
                sumaMontoComision += (fp.comision_monto || 0);
                objCobro.forma_pago.push({
                    forma_pago: +fp.forma_pago.forma_pago,
                    monto: +fp.monto + +fp.comision_monto,
                    propina: (fp.propina || 0.00),
                    documento: fp.documento,
                    comision_monto: fp.comision_monto
                });
            }
            objCobro.comision_monto = sumaMontoComision;
            objCobro.total += sumaMontoComision;
            if (+this.data.mesaenuso.mesa.escallcenter === 1) {
                this.enviarPedido(objCobro);
                return;
            }
            this.factReq.cuentas.push({ cuenta: +this.inputData.idcuenta });
            this.endSubs.add(this.cobroSrvc.save(objCobro).subscribe(res => {
                if (res.exito && !res.facturada) {
                    this.snackBar.open('Cobro', `${res.mensaje}`, { duration: 3000 });
                    if (res.facturar) {
                        this.endSubs.add(this.facturaSrvc.facturar(this.factReq).subscribe(resFact => {
                            // console.log('RESPUESTA DE FACTURAR = ', resFact);
                            if (resFact.exito) {
                                const confirmRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
                                    maxWidth: '400px',
                                    data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Imprimir factura', '¿Desea imprimir la factura?', 'Sí', 'No')
                                });
                                this.endSubs.add(confirmRef.afterClosed().subscribe((confirma) => {
                                    if (confirma) {
                                        this.printFactura(resFact.factura);
                                    }
                                    this.resetFactReq();
                                    this.snackBar.open('Factura', `${resFact.mensaje}`, { duration: 3000 });
                                    this.facturando = false;
                                    this.dialogRef.close(res.cuenta);
                                    this.socket.emit('refrescar:mesa', { mesaenuso: this.data.mesaenuso });
                                }));
                            }
                            else {
                                this.facturando = false;
                                this.snackBar.open('Factura', `ERROR: ${res.mensaje}`, { duration: 7000 });
                                this.socket.emit('refrescar:mesa', { mesaenuso: this.data.mesaenuso });
                                this.dialogRef.close(res.cuenta);
                            }
                        }));
                    }
                    else {
                        this.socket.emit('refrescar:mesa', { mesaenuso: this.data.mesaenuso });
                        this.dialogRef.close(res.cuenta);
                    }
                }
                else {
                    this.facturando = false;
                    this.snackBar.open('Cobro', `ERROR: ${res.mensaje}`, { duration: 7000 });
                    this.socket.emit('refrescar:mesa', { mesaenuso: this.data.mesaenuso });
                    this.dialogRef.close('closePanel');
                }
            }));
        };
        this.enviarPedido = (cobro) => {
            this.datosPedido.cliente = {
                nombre: this.clienteSelected.nombre,
                apellidos: '',
                correo: this.clienteSelected.correo,
                telefono: this.datosPedido.telefono,
                nit: this.clienteSelected.nit,
                direccion: this.datosPedido.direccion_entrega
            };
            const obj = {
                cobro,
                pedido: this.datosPedido,
                factura: {
                    cuentas: [
                        {
                            cuenta: cobro.cuenta
                        }
                    ],
                    factura_serie: 1,
                    cliente: this.clienteSelected.cliente,
                    fecha_factura: moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat),
                    moneda: 1
                }
            };
            // console.log('PEDIDO = ', obj);
            this.endSubs.add(this.comandaSrvc.enviarPedido(+this.data.mesaenuso.comanda, obj).subscribe(res => {
                if (res.exito) {
                    this.snackBar.open('Pedido', `#${res.pedido}. ${res.mensaje}`, { duration: 3000 });
                    this.dialogRef.close('closePanel');
                }
                else {
                    this.snackBar.open('Pedido', `ERROR: ${res.mensaje}`, { duration: 7000 });
                }
                this.facturando = false;
                this.socket.emit('refrescar:mesa', { mesaenuso: this.data.mesaenuso });
            }));
        };
        this.procesaDetalleFactura = (detalle) => {
            const detFact = [];
            detalle.forEach(d => detFact.push({
                Cantidad: parseInt(d.cantidad),
                Descripcion: d.articulo.descripcion,
                Total: +d.total,
                PrecioUnitario: +d.precio_unitario
            }));
            return detFact;
        };
        this.getTotalDetalle = (detalle) => {
            let suma = 0.00;
            detalle.forEach(d => suma += +d.total);
            return suma;
        };
        this.getTotalImpuestosAdicionales = (impuestos) => {
            let suma = 0.00;
            impuestos.forEach(i => suma += +i.total);
            return suma;
        };
        this.printFactura = (factura) => {
            // console.log('FACTURA = ', factura);
            this.endSubs.add(this.facturaSrvc.imprimir(+factura.factura).subscribe(res => {
                if (res.factura) {
                    const msgToPrint = {
                        NombreEmpresa: res.factura.empresa.nombre,
                        NitEmpresa: res.factura.empresa.nit,
                        SedeEmpresa: res.factura.sedeFactura.nombre,
                        DireccionEmpresa: res.factura.empresa.direccion,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_2__(res.factura.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dateFormat),
                        Nit: res.factura.receptor.nit,
                        Nombre: res.factura.receptor.nombre,
                        Direccion: res.factura.receptor.direccion,
                        Serie: res.factura.serie_factura,
                        Numero: res.factura.numero_factura,
                        Total: this.getTotalDetalle(res.factura.detalle) + this.getTotalImpuestosAdicionales((res.factura.impuestos_adicionales || [])),
                        NoAutorizacion: res.factura.fel_uuid,
                        NombreCertificador: res.factura.certificador_fel.nombre,
                        NitCertificador: res.factura.certificador_fel.nit,
                        FechaDeAutorizacion: res.factura.fecha_autorizacion,
                        NoOrdenEnLinea: '',
                        FormaDePago: '',
                        DetalleFactura: this.procesaDetalleFactura(res.factura.detalle),
                        Impresora: this.data.impresora,
                        ImpuestosAdicionales: (res.factura.impuestos_adicionales || [])
                    };
                    if (!!this.data.impresora) {
                        if (+this.data.impresora.bluetooth === 0) {
                            this.socket.emit(`print:factura`, `${JSON.stringify(msgToPrint)}`);
                        }
                        else {
                            msgToPrint.Fecha = moment__WEBPACK_IMPORTED_MODULE_2__(res.factura.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dateFormatBT);
                            this.printToBT(JSON.stringify(msgToPrint));
                        }
                    }
                    else {
                        this.socket.emit(`print:factura`, `${JSON.stringify(msgToPrint)}`);
                    }
                    this.snackBar.open(`Imprimiendo factura ${res.factura.serie_factura}-${res.factura.numero_factura}`, 'Impresión', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 7000 });
                }
            }));
        };
        this.printToBT = (msgToPrint = '') => {
            const convertir = this.configSrvc.getConfig(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].CONSTANTES.RT_ENVIA_COMO_BASE64);
            const data = convertir ? js_base64__WEBPACK_IMPORTED_MODULE_5__["Base64"].encode(msgToPrint, true) : msgToPrint;
            // const AppHref = `${GLOBAL.DEEP_LINK_ANDROID}${data}`;
            const AppHref = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].DEEP_LINK_ANDROID.replace('__INFOBASE64__', data);
            try {
                window.location.href = AppHref;
            }
            catch (error) {
                this.snackBar.open('No se pudo conectar con la aplicación de impresión', 'Comanda', { duration: 3000 });
            }
        };
        this.onSelectionChangeFP = (msc) => {
            const idx = this.lstFormasPago.findIndex(lfp => +lfp.forma_pago === +msc.value);
            if (idx > -1) {
                this.pideDocumento = +this.lstFormasPago[idx].pedirdocumento === 1;
            }
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
        this.resetFactReq();
        this.processData();
        this.loadFormasPago();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('reconnect', () => this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid));
        }
        this.loadSedes();
    }
    ngOnDestroy() {
        this.endSubs.unsubscribe();
    }
    calculaPorcentajePropina() {
        this.inputData.porcentajePropina = parseFloat((this.inputData.montoPropina * 100 / this.inputData.totalDeCuenta).toFixed(2));
        this.actualizaSaldo();
    }
}
CobrarPedidoComponent.ɵfac = function CobrarPedidoComponent_Factory(t) { return new (t || CobrarPedidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_forma_pago_service__WEBPACK_IMPORTED_MODULE_9__["FormaPagoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_cobro_service__WEBPACK_IMPORTED_MODULE_10__["CobroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_factura_service__WEBPACK_IMPORTED_MODULE_11__["FacturaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_12__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_13__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_admin_services_sede_service__WEBPACK_IMPORTED_MODULE_14__["SedeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_restaurante_services_comanda_service__WEBPACK_IMPORTED_MODULE_15__["ComandaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_admin_services_configuracion_service__WEBPACK_IMPORTED_MODULE_16__["ConfiguracionService"])); };
CobrarPedidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CobrarPedidoComponent, selectors: [["app-cobrar-pedido"]], inputs: { inputData: "inputData" }, decls: 67, vars: 31, consts: [["mat-dialog-title", ""], [4, "ngIf"], ["mat-dialog-content", "", 2, "height", "650px"], [1, "row"], [1, "col", "m5", "s12", "mat-elevation-z4", "colHeight", 2, "overflow-y", "auto"], [3, "showAddButton", "getClienteEv"], ["lstClientes", ""], [1, "col", "m3", "s12", "mat-elevation-z4", "colHeight", 2, "overflow-y", "auto"], [1, "table", "table-sm", "table-borderless", "table-striped"], [4, "ngFor", "ngForOf"], [1, "col", "m4", "s12", "mat-elevation-z4", "colHeight", 2, "overflow-y", "auto"], ["novalidate", ""], ["frmFormasPago", "ngForm"], [1, "fullWidth"], ["name", "forma_pago", "cdkFocusInitial", "", "required", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "monto", "name", "monto", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "monto", "name", "monto", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Propina", "name", "propina", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Propina", "name", "propina", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "fullWidth", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [1, "table", "table-sm"], [1, "text-left"], [1, "text-right"], [1, "col", "m8", "s8"], ["class", "table table-sm table-borderless", 4, "ngIf"], [1, "col", "m4", "s4"], [1, "table", "table-sm", "table-borderless"], [1, "text-right", "font-weight-bold"], [1, "text-right", "font-weight-bold", "totalCuenta", 2, "max-width", "15%"], [1, "text-right", "font-weight-bold", 2, "max-width", "15%"], [3, "ngClass"], ["mat-dialog-actions", "", "align", "end"], [3, "configuracion", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], [3, "value"], ["matInput", "", "placeholder", "monto", "name", "monto", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "monto", "name", "monto", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Propina", "name", "propina", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Propina", "name", "propina", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Documento", "name", "documento", 3, "matKeyboard", "ngModel", "required", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Documento", "name", "documento", 3, "ngModel", "required", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Documento", "name", "documento", 3, "matKeyboard", "ngModel", "required", "ngModelChange"], ["matInput", "", "placeholder", "Documento", "name", "documento", 3, "ngModel", "required", "ngModelChange"], [1, "text-center"], ["mat-icon-button", "", "type", "button", "color", "warn", 3, "click"], ["name", "sede", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Direcci\u00F3n de entrega", "name", "direccion_entrega", "maxlength", "1000", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Nombre", "name", "nombre", "maxlength", "1000", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Tel\u00E9fono", "name", "telefono", "maxlength", "1000", 3, "ngModel", "ngModelChange"], [3, "configuracion"]], template: function CobrarPedidoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CobrarPedidoComponent_small_2_Template, 2, 1, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-lista-cliente", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("getClienteEv", function CobrarPedidoComponent_Template_app_lista_cliente_getClienteEv_6_listener($event) { return ctx.setClienteFacturar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, CobrarPedidoComponent_tr_11_Template, 6, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "form", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Forma de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CobrarPedidoComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.formaPago.forma_pago = $event; })("selectionChange", function CobrarPedidoComponent_Template_mat_select_selectionChange_18_listener($event) { return ctx.onSelectionChangeFP($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CobrarPedidoComponent_mat_option_19_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CobrarPedidoComponent_input_21_Template, 1, 2, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CobrarPedidoComponent_input_22_Template, 1, 1, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CobrarPedidoComponent_input_24_Template, 1, 2, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CobrarPedidoComponent_input_25_Template, 1, 1, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CobrarPedidoComponent_mat_form_field_26_Template, 3, 2, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CobrarPedidoComponent_Template_button_click_28_listener() { return ctx.addFormaPago(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "FP");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Mon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Prop");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, CobrarPedidoComponent_tr_41_Template, 13, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CobrarPedidoComponent_table_44_Template, 22, 5, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "TOTAL DE CUENTA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "PENDIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](60, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, CobrarPedidoComponent_app_cargando_62_Template, 1, 1, "app-cargando", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CobrarPedidoComponent_Template_button_click_63_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, CobrarPedidoComponent_button_65_Template, 2, 1, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, CobrarPedidoComponent_button_66_Template, 2, 1, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Cobrar cuenta de ", ctx.data.cuenta, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.clienteSelected && !!ctx.clienteSelected.cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showAddButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.inputData.productosACobrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.formaPago.forma_pago);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.lstFormasPago);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.pideDocumento);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r3.form.valid || ctx.inputData.saldo <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.formasPagoDeCuenta);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", +ctx.data.mesaenuso.mesa.escallcenter === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](53, 21, ctx.inputData.totalDeCuenta, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](27, _c0, +ctx.inputData.saldo > 0, +ctx.inputData.saldo == 0, +ctx.inputData.saldo < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](60, 24, ctx.inputData.saldo, "1.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.facturando);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.facturando);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", +ctx.data.mesaenuso.mesa.escallcenter === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", +ctx.data.mesaenuso.mesa.escallcenter === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _admin_components_cliente_lista_cliente_lista_cliente_component__WEBPACK_IMPORTED_MODULE_18__["ListaClienteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_25__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_27__["CargandoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DecimalPipe"]], styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.totalCuenta[_ngcontent-%COMP%] {\n    border-top: solid 1px black;\n    border-bottom: double 5px black;\n}\n\n.colHeight[_ngcontent-%COMP%] {\n    height: 400px;\n}\n\n.saldo-pendiente[_ngcontent-%COMP%] {\n    color: #DA332D;\n    border-bottom: double 5px #DA332D;\n}\n\n.saldo-extra[_ngcontent-%COMP%] {\n    color: skyblue;\n    border-bottom: double 5px skyblue;\n}\n\n.saldo-exacto[_ngcontent-%COMP%] {\n    color: green;\n    border-bottom: double 5px green;\n}\n\n.propina[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYnJhci1wZWRpZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjb2JyYXItcGVkaWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLnRvdGFsQ3VlbnRhIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlIDVweCBibGFjaztcbn1cblxuLmNvbEhlaWdodCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnNhbGRvLXBlbmRpZW50ZSB7XG4gICAgY29sb3I6ICNEQTMzMkQ7XG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlIDVweCAjREEzMzJEO1xufVxuXG4uc2FsZG8tZXh0cmEge1xuICAgIGNvbG9yOiBza3libHVlO1xuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZSA1cHggc2t5Ymx1ZTtcbn1cblxuLnNhbGRvLWV4YWN0byB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1ib3R0b206IGRvdWJsZSA1cHggZ3JlZW47XG59XG5cbi5wcm9waW5hIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"] });


/***/ }),

/***/ "jIqO":
/*!*****************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaManualComponent", function() { return FacturaManualComponent; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lista-factura-manual/lista-factura-manual.component */ "wKdv");
/* harmony import */ var _form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-factura-manual/form-factura-manual.component */ "XI40");





const _c0 = ["lstFacturaManual"];
const _c1 = ["frmFacturaManual"];
class FacturaManualComponent {
    constructor() {
        this.setFactura = (fact) => {
            this.factura = {
                factura: fact.factura,
                factura_serie: fact.factura_serie.factura_serie,
                cliente: fact.cliente.cliente,
                fecha_factura: fact.fecha_factura,
                moneda: fact.moneda.moneda,
                exenta: fact.exenta,
                notas: fact.notas,
                usuario: fact.usuario.usuario,
                numero_factura: fact.numero_factura,
                serie_factura: fact.serie_factura,
                fel_uuid: fact.fel_uuid,
                fel_uuid_anulacion: fact.fel_uuid_anulacion,
                certificador_fel: fact.certificador_fel
            };
            this.frmFactura.clienteSelected = fact.cliente;
            this.frmFactura.loadDetalleFactura(+this.factura.factura);
            this.frmFactura.resetDetalleFactura();
        };
        this.refreshFacturaList = () => this.lstFacturaComponent.loadFacturas();
        this.factura = {
            factura: null, factura_serie: null, cliente: null, fecha_factura: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0,
            notas: null
        };
    }
    ngOnInit() {
    }
}
FacturaManualComponent.ɵfac = function FacturaManualComponent_Factory(t) { return new (t || FacturaManualComponent)(); };
FacturaManualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FacturaManualComponent, selectors: [["app-factura-manual"]], viewQuery: function FacturaManualComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lstFacturaComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmFactura = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getFacturaEv"], ["lstFacturaManual", ""], [1, "col", "m7", "s12"], [3, "factura", "facturaSavedEv"], ["frmFacturaManual", ""]], template: function FacturaManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-lista-factura-manual", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getFacturaEv", function FacturaManualComponent_Template_app_lista_factura_manual_getFacturaEv_2_listener($event) { return ctx.setFactura($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-form-factura-manual", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("facturaSavedEv", function FacturaManualComponent_Template_app_form_factura_manual_facturaSavedEv_5_listener() { return ctx.refreshFacturaList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("factura", ctx.factura);
    } }, directives: [_lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_3__["ListaFacturaManualComponent"], _form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_4__["FormFacturaManualComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWN0dXJhLW1hbnVhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "oJLn":
/*!***************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormFormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFormaPagoComponent", function() { return FormFormaPagoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forma-pago.service */ "KZK3");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");














function FormFormaPagoComponent_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFormaPagoComponent_input_9_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.formaPago.descripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r1.keyboardLayout)("ngModel", ctx_r1.formaPago.descripcion);
} }
function FormFormaPagoComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFormaPagoComponent_input_10_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.formaPago.descripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.formaPago.descripcion);
} }
function FormFormaPagoComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormFormaPagoComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.resetFormaPago(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nueva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormFormaPagoComponent {
    constructor(snackBar, formaPagoSrvc, ls) {
        this.snackBar = snackBar;
        this.formaPagoSrvc = formaPagoSrvc;
        this.ls = ls;
        this.formaPagoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
        this.esMovil = false;
        this.resetFormaPago = () => this.formaPago = { forma_pago: null, descripcion: null, activo: 1 };
        this.onSubmit = () => {
            this.formaPagoSrvc.save(this.formaPago).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.formaPagoSavedEv.emit();
                    this.resetFormaPago();
                    this.snackBar.open('Forma de pago agregada...', 'Forma de pago', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
    }
}
FormFormaPagoComponent.ɵfac = function FormFormaPagoComponent_Factory(t) { return new (t || FormFormaPagoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forma_pago_service__WEBPACK_IMPORTED_MODULE_3__["FormaPagoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"])); };
FormFormaPagoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFormaPagoComponent, selectors: [["app-form-forma-pago"]], inputs: { formaPago: "formaPago" }, outputs: { formaPagoSavedEv: "formaPagoSavedEv" }, decls: 18, vars: 6, consts: [[1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmFormaPago", "ngForm"], [1, "form-group"], [1, "fullWidth"], ["matInput", "", "type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "activo", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Descripci\u00F3n", "name", "descripcion", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"]], template: function FormFormaPagoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormFormaPagoComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.form.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormFormaPagoComponent_input_9_Template, 1, 2, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormFormaPagoComponent_input_10_Template, 1, 1, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormFormaPagoComponent_Template_mat_checkbox_ngModelChange_12_listener($event) { return +(ctx.formaPago.activo = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormFormaPagoComponent_button_17_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Forma de pago ", !!ctx.formaPago.forma_pago ? ctx.formaPago.descripcion : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx.formaPago.activo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formaPago.forma_pago);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]], styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZm9ybWEtcGFnby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJmb3JtLWZvcm1hLXBhZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb25Gb250U2l6ZSB7XG4gICAgZm9udC1zaXplOiAyNHB0O1xufSJdfQ== */"] });


/***/ }),

/***/ "qodq":
/*!***********************************!*\
  !*** ./src/app/pos/pos.module.ts ***!
  \***********************************/
/*! exports provided: PosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosModule", function() { return PosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/admin.module */ "jkDv");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "JbvS");
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pos-routing.module */ "2Oj6");
/* harmony import */ var _components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/cobrar-pedido/cobrar-pedido.component */ "fn6i");
/* harmony import */ var _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/formaPago/forma-pago/forma-pago.component */ "ISOR");
/* harmony import */ var _components_formaPago_lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/formaPago/lista-forma-pago/lista-forma-pago.component */ "3Lgi");
/* harmony import */ var _components_formaPago_form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/formaPago/form-forma-pago/form-forma-pago.component */ "oJLn");
/* harmony import */ var _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/facturaManual/factura-manual/factura-manual.component */ "jIqO");
/* harmony import */ var _components_facturaManual_lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/facturaManual/lista-factura-manual/lista-factura-manual.component */ "wKdv");
/* harmony import */ var _components_facturaManual_form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/facturaManual/form-factura-manual/form-factura-manual.component */ "XI40");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");



































class PosModule {
}
PosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: PosModule });
PosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ factory: function PosModule_Factory(t) { return new (t || PosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pos_routing_module__WEBPACK_IMPORTED_MODULE_26__["PosRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_24__["MatKeyboardModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__["AdminModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
            _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_25__["EcoFabSpeedDialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](PosModule, { declarations: [_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_27__["CobrarPedidoComponent"], _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_28__["FormaPagoComponent"], _components_formaPago_lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_29__["ListaFormaPagoComponent"], _components_formaPago_form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_30__["FormFormaPagoComponent"], _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_31__["FacturaManualComponent"],
        _components_facturaManual_lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_32__["ListaFacturaManualComponent"], _components_facturaManual_form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_33__["FormFacturaManualComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pos_routing_module__WEBPACK_IMPORTED_MODULE_26__["PosRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_24__["MatKeyboardModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__["AdminModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_25__["EcoFabSpeedDialModule"]], exports: [_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_27__["CobrarPedidoComponent"]] }); })();


/***/ }),

/***/ "ro7O":
/*!*******************************************************!*\
  !*** ./src/app/pos/services/factura-serie.service.ts ***!
  \*******************************************************/
/*! exports provided: FacturaSerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaSerieService", function() { return FacturaSerieService; });
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/global */ "sKxO");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/error-handler */ "R5jZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "Qyje");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class FacturaSerieService {
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos}/get_factura_serie?${qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)}`
        // , httpOptions
        ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
    }
}
FacturaSerieService.ɵfac = function FacturaSerieService_Factory(t) { return new (t || FacturaSerieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
FacturaSerieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FacturaSerieService, factory: FacturaSerieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wKdv":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListaFacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFacturaManualComponent", function() { return ListaFacturaManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/global */ "sKxO");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/factura.service */ "KFbY");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "FY0D");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-onscreen-material-keyboard */ "uM5D");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















const _c0 = function () { return { standalone: true }; };
function ListaFacturaManualComponent_input_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ListaFacturaManualComponent_input_11_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.applyFilter(); })("ngModelChange", function ListaFacturaManualComponent_input_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.txtFiltro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r0.keyboardLayout)("ngModel", ctx_r0.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function ListaFacturaManualComponent_input_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaFacturaManualComponent_input_12_Template_input_keyup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.applyFilter(); })("ngModelChange", function ListaFacturaManualComponent_input_12_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.txtFiltro = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function ListaFacturaManualComponent_mat_list_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaFacturaManualComponent_mat_list_item_14_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const element_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.getFactura(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", element_r9.serie_factura, "\u00A0", element_r9.numero_factura, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fecha: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, element_r9.fecha_factura, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cliente: ", element_r9.cliente.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("NIT: ", element_r9.cliente.nit, "");
} }
class ListaFacturaManualComponent {
    constructor(facturaSrvc, ls) {
        this.facturaSrvc = facturaSrvc;
        this.ls = ls;
        this.esMovil = false;
        this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
        this.getFacturaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.verTodas = false;
        this.rango = { fdel: null, fal: null };
        this.loadFacturas = () => {
            const fltr = {};
            if (this.verTodas) {
                fltr._todas = true;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_2__(this.rango.fdel).isValid()) {
                fltr._fdel = this.rango.fdel;
            }
            if (moment__WEBPACK_IMPORTED_MODULE_2__(this.rango.fal).isValid()) {
                fltr._fal = this.rango.fal;
            }
            this.facturaSrvc.get(fltr).subscribe(lst => {
                // console.log(lst);
                if (lst) {
                    if (lst.length > 0) {
                        this.lstFacturas = lst;
                    }
                    else {
                        this.lstFacturas = [];
                    }
                    this.applyFilter();
                }
            });
        };
        this.cargarFacturas = (obj) => this.loadFacturas();
        this.getFactura = (obj) => {
            this.getFacturaEv.emit(obj);
        };
        this.pageChange = (e) => {
            this.pageSize = e.pageSize;
            this.pageIndex = e.pageIndex;
            this.applyFilter();
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
        this.rango.fdel = moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
        this.rango.fal = moment__WEBPACK_IMPORTED_MODULE_2__().endOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
        this.loadFacturas();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstFacturas, this.txtFiltro);
            this.length = tmpList.length;
            this.lstFacturasPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstFacturas.length;
            this.lstFacturasPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstFacturas, this.pageSize, this.pageIndex + 1);
        }
    }
}
ListaFacturaManualComponent.ɵfac = function ListaFacturaManualComponent_Factory(t) { return new (t || ListaFacturaManualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_factura_service__WEBPACK_IMPORTED_MODULE_3__["FacturaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"])); };
ListaFacturaManualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaFacturaManualComponent, selectors: [["app-lista-factura-manual"]], outputs: { getFacturaEv: "getFacturaEv" }, decls: 16, vars: 15, consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Del", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "pedirdocumento", 1, "btnAccion", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Filtrar...", 3, "matKeyboard", "ngModel", "ngModelOptions", "input", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Filtrar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["matInput", "", "placeholder", "Filtrar...", 3, "matKeyboard", "ngModel", "ngModelOptions", "input", "ngModelChange"], ["matInput", "", "placeholder", "Filtrar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListaFacturaManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaFacturaManualComponent_Template_input_ngModelChange_3_listener($event) { return ctx.rango.fdel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaFacturaManualComponent_Template_input_ngModelChange_5_listener($event) { return ctx.rango.fal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaFacturaManualComponent_Template_mat_checkbox_ngModelChange_6_listener($event) { return ctx.verTodas = $event; })("change", function ListaFacturaManualComponent_Template_mat_checkbox_change_6_listener($event) { return ctx.cargarFacturas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Todas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaFacturaManualComponent_Template_button_click_8_listener() { return ctx.loadFacturas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListaFacturaManualComponent_input_11_Template, 1, 4, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaFacturaManualComponent_input_12_Template, 1, 3, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListaFacturaManualComponent_mat_list_item_14_Template, 12, 8, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaFacturaManualComponent_Template_mat_paginator_page_15_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rango.fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rango.fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verTodas)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esMovil);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstFacturasPaged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_14__["MatKeyboardDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWZhY3R1cmEtbWFudWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoibGlzdGEtZmFjdHVyYS1tYW51YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsV2lkdGgge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=default~pos-pos-module~restaurante-restaurante-module-es2015.js.map