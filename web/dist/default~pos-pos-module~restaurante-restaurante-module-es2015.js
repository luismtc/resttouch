(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pos-pos-module~restaurante-restaurante-module"],{

/***/ "./node_modules/@ecodev/fab-speed-dial/fesm2015/ecodev-fab-speed-dial.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ecodev/fab-speed-dial/fesm2015/ecodev-fab-speed-dial.js ***!
  \*******************************************************************************/
/*! exports provided: EcoFabSpeedDialModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialModule", function() { return EcoFabSpeedDialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return EcoFabSpeedDialActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return EcoFabSpeedDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EcoFabSpeedDialTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Z_INDEX_ITEM = 23;
class EcoFabSpeedDialActionsComponent {
    /**
     * @param {?} injector
     * @param {?} renderer
     */
    constructor(injector, renderer) {
        this.renderer = renderer;
        /**
         * Whether the min-fab button exist in DOM
         */
        this.miniFabVisible = false;
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._buttons.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this.initButtonStates();
            this._parent.setActionsVisibility();
        }));
        this.initButtonStates();
    }
    /**
     * @private
     * @return {?}
     */
    initButtonStates() {
        this._buttons.forEach((/**
         * @param {?} button
         * @param {?} i
         * @return {?}
         */
        (button, i) => {
            this.renderer.addClass(button._getHostElement(), 'eco-fab-action-item');
            this.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
        }));
    }
    /**
     * @return {?}
     */
    show() {
        if (!this._buttons) {
            return;
        }
        this.resetAnimationState();
        this.miniFabVisible = true;
        this.showMiniFabAnimation = setTimeout((/**
         * @return {?}
         */
        () => {
            this._buttons.forEach((/**
             * @param {?} button
             * @param {?} i
             * @return {?}
             */
            (button, i) => {
                /** @type {?} */
                let transitionDelay = 0;
                /** @type {?} */
                let transform;
                if (this._parent.animationMode === 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + (65 * i);
                    transform = 'scale(1)';
                }
                else {
                    transform = this.getTranslateFunction('0');
                }
                /** @type {?} */
                const hostElement = button._getHostElement();
                this.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(hostElement, 'opacity', '1');
                this.changeElementStyle(hostElement, 'transform', transform);
            }));
        }), 50); // Be sure that *ngIf can show elements before trying to animate them
    }
    /**
     * @private
     * @return {?}
     */
    resetAnimationState() {
        clearTimeout(this.showMiniFabAnimation);
        if (this.hideMiniFab) {
            this.hideMiniFab.unsubscribe();
            this.hideMiniFab = null;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._buttons) {
            return;
        }
        this.resetAnimationState();
        /** @type {?} */
        const obs = this._buttons.map((/**
         * @param {?} button
         * @param {?} i
         * @return {?}
         */
        (button, i) => {
            /** @type {?} */
            let opacity = '1';
            /** @type {?} */
            let transitionDelay = 0;
            /** @type {?} */
            let transform;
            if (this._parent.animationMode === 'scale') {
                transitionDelay = 3 - (65 * i);
                transform = 'scale(0)';
                opacity = '0';
            }
            else {
                transform = this.getTranslateFunction((55 * (i + 1) - (i * 5)) + 'px');
            }
            /** @type {?} */
            const hostElement = button._getHostElement();
            this.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');
            this.changeElementStyle(hostElement, 'opacity', opacity);
            this.changeElementStyle(hostElement, 'transform', transform);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(hostElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        }));
        // Wait for all animation to finish, then destroy their elements
        this.hideMiniFab = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs).subscribe((/**
         * @return {?}
         */
        () => this.miniFabVisible = false));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getTranslateFunction(value) {
        /** @type {?} */
        const dir = this._parent.direction;
        /** @type {?} */
        const translateFn = (dir === 'up' || dir === 'down') ? 'translateY' : 'translateX';
        /** @type {?} */
        const sign = (dir === 'down' || dir === 'right') ? '-' : '';
        return translateFn + '(' + sign + value + ')';
    }
    /**
     * @private
     * @param {?} elem
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    changeElementStyle(elem, style, value) {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setStyle(elem, style, value);
    }
}
EcoFabSpeedDialActionsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'eco-fab-speed-dial-actions',
                template: `
        <ng-content select="[mat-mini-fab]" *ngIf="miniFabVisible"></ng-content>`
            }] }
];
/** @nocollapse */
EcoFabSpeedDialActionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
EcoFabSpeedDialActionsComponent.propDecorators = {
    _buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"],] }]
};
/**
 * \@dynamic \@see https://github.com/angular/angular/issues/20351#issuecomment-344009887
 */
class EcoFabSpeedDialComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} document
     */
    constructor(elementRef, renderer, document) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.isInitialized = false;
        this._direction = 'up';
        this._open = false;
        this._animationMode = 'fling';
        this._fixed = false;
        this._documentClickUnlistener = null;
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Whether this speed dial is fixed on screen (user cannot change it by clicking)
     * @return {?}
     */
    get fixed() {
        return this._fixed;
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    set fixed(fixed) {
        this._fixed = fixed;
        this._processOutsideClickState();
    }
    /**
     * Whether this speed dial is opened
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set open(open) {
        /** @type {?} */
        const previousOpen = this._open;
        this._open = open;
        if (previousOpen !== this._open) {
            this.openChange.emit(this._open);
            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }
    /**
     * The direction of the speed dial. Can be 'up', 'down', 'left' or 'right'
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        /** @type {?} */
        const previousDirection = this._direction;
        this._direction = direction;
        if (previousDirection !== this.direction) {
            this._setElementClass(previousDirection, false);
            this._setElementClass(this.direction, true);
            if (this.isInitialized) {
                this.setActionsVisibility();
            }
        }
    }
    /**
     * The animation mode to open the speed dial. Can be 'fling' or 'scale'
     * @return {?}
     */
    get animationMode() {
        return this._animationMode;
    }
    /**
     * @param {?} animationMode
     * @return {?}
     */
    set animationMode(animationMode) {
        /** @type {?} */
        const previousAnimationMode = this._animationMode;
        this._animationMode = animationMode;
        if (previousAnimationMode !== this._animationMode) {
            this._setElementClass(previousAnimationMode, false);
            this._setElementClass(this.animationMode, true);
            if (this.isInitialized) {
                // To start another detect lifecycle and force the "close" on the action buttons
                Promise.resolve(null).then((/**
                 * @return {?}
                 */
                () => this.open = false));
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInitialized = true;
        this.setActionsVisibility();
        this._setElementClass(this.direction, true);
        this._setElementClass(this.animationMode, true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsetDocumentClickListener();
    }
    /**
     * Toggle the open state of this speed dial
     * @return {?}
     */
    toggle() {
        this.open = !this.open;
    }
    /**
     * @return {?}
     */
    _onClick() {
        if (!this.fixed && this.open) {
            this.open = false;
        }
    }
    /**
     * @return {?}
     */
    setActionsVisibility() {
        if (!this._childActions) {
            return;
        }
        if (this.open) {
            this._childActions.show();
        }
        else {
            this._childActions.hide();
        }
        this._processOutsideClickState();
    }
    /**
     * @private
     * @param {?} elemClass
     * @param {?} isAdd
     * @return {?}
     */
    _setElementClass(elemClass, isAdd) {
        /** @type {?} */
        const finalClass = `eco-${elemClass}`;
        if (isAdd) {
            this.renderer.addClass(this.elementRef.nativeElement, finalClass);
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _processOutsideClickState() {
        if (!this.fixed && this.open) {
            this._setDocumentClickListener();
        }
        else {
            this._unsetDocumentClickListener();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setDocumentClickListener() {
        if (!this._documentClickUnlistener) {
            this._documentClickUnlistener = this.renderer.listen(this.document, 'click', (/**
             * @return {?}
             */
            () => {
                this.open = false;
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _unsetDocumentClickListener() {
        if (this._documentClickUnlistener) {
            this._documentClickUnlistener();
            this._documentClickUnlistener = null;
        }
    }
}
EcoFabSpeedDialComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'eco-fab-speed-dial',
                template: `
        <div class="eco-fab-speed-dial-container">
            <ng-content select="eco-fab-speed-dial-trigger"></ng-content>
            <ng-content select="eco-fab-speed-dial-actions"></ng-content>
        </div>
    `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(360deg)}eco-fab-speed-dial .eco-fab-speed-dial-container{position:relative;display:flex;align-items:center;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:.6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;position:absolute;height:0;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:.3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:.3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{top:2px;left:7px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{top:7px;left:2px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{top:7px;right:2px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}"]
            }] }
];
/** @nocollapse */
EcoFabSpeedDialComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
EcoFabSpeedDialComponent.propDecorators = {
    fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.eco-opened',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _childActions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [EcoFabSpeedDialActionsComponent, { static: false },] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
class EcoFabSpeedDialTriggerComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.spin = false;
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }
    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     * @return {?}
     */
    get sp() {
        return this.spin;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onClick(event) {
        if (!this._parent.fixed) {
            this._parent.toggle();
            event.stopPropagation();
        }
    }
}
EcoFabSpeedDialTriggerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'eco-fab-speed-dial-trigger',
                template: `
        <ng-content select="[mat-fab]"></ng-content>`
            }] }
];
/** @nocollapse */
EcoFabSpeedDialTriggerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
EcoFabSpeedDialTriggerComponent.propDecorators = {
    sp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.eco-spin',] }],
    spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EcoFabSpeedDialModule {
}
EcoFabSpeedDialModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    EcoFabSpeedDialActionsComponent,
                    EcoFabSpeedDialComponent,
                    EcoFabSpeedDialTriggerComponent,
                ],
                exports: [
                    EcoFabSpeedDialActionsComponent,
                    EcoFabSpeedDialComponent,
                    EcoFabSpeedDialTriggerComponent,
                ],
            },] }
];


//# sourceMappingURL=ecodev-fab-speed-dial.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\n  Cobrar cuenta de {{data.cuenta}}\n  <small *ngIf=\"clienteSelected && !!clienteSelected.cliente\">\n     - Factura a nombre de {{clienteSelected.nombre}}\n  </small>\n</h1>\n<div mat-dialog-content style=\"height: 650px;\">\n  <div class=\"row\">\n    <div class=\"col m5 s12 mat-elevation-z4 colHeight\" style=\"overflow-y: auto;\">\n      <app-lista-cliente #lstClientes (getClienteEv)=\"setClienteFacturar($event)\" [showAddButton]=\"true\"></app-lista-cliente>\n    </div>\n    <div class=\"col m3 s12 mat-elevation-z4 colHeight\" style=\"overflow-y: auto;\">\n      <table class=\"table table-sm table-borderless table-striped\">\n        <tbody>\n          <tr *ngFor=\"let p of inputData.productosACobrar; let i = index;\">\n            <td>{{p.cantidad}}&nbsp;{{p.nombre || p.articulo.descripcion}}</td>\n            <td class=\"text-right\">{{(p.cantidad * p.precio) | number: '1.2-2'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col m4 s12 mat-elevation-z4 colHeight\" style=\"overflow-y: auto;\">\n      <form #frmFormasPago=\"ngForm\" novalidate>\n        <mat-form-field class=\"fullWidth\">\n          <mat-label>Forma de pago</mat-label>\n          <mat-select name=\"forma_pago\" [(ngModel)]=\"formaPago.forma_pago\" cdkFocusInitial required>\n            <mat-option *ngFor=\"let fp of lstFormasPago\" [value]=\"fp.forma_pago\">\n              {{fp.descripcion}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!--Inicia input de monto por forma de pago-->\n        <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n          <input matInput placeholder=\"monto\" name=\"monto\" [(ngModel)]=\"formaPago.monto\" required>\n        </mat-form-field>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n          <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"Monto\" placeholder=\"monto\" name=\"monto\" [(ngModel)]=\"formaPago.monto\" required>\n        </mat-form-field>\n        <!--Fin de input de monto por forma de pago-->\n        <!--Inicia input de propina por forma de pago-->\n        <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n          <input matInput placeholder=\"Propina\" name=\"propina\" [(ngModel)]=\"formaPago.propina\">\n        </mat-form-field>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n          <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"Propina\" placeholder=\"Propina\" name=\"propina\" [(ngModel)]=\"formaPago.propina\">\n        </mat-form-field>\n        <!--Fin de input de propina por forma de pago-->\n        <div align=\"end\">\n          <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"addFormaPago()\" [disabled]=\"!frmFormasPago.form.valid || inputData.saldo <= 0\">\n            Agregar\n          </button>\n        </div>\n      </form>\n      <hr />\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th class=\"text-left\">FP</th>\n            <th class=\"text-right\">Mon</th>\n            <th class=\"text-right\">Prop</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let fpCta of formasPagoDeCuenta; let i = index\">\n            <td>{{fpCta.forma_pago.descripcion}}</td>\n            <td class=\"text-right\">{{fpCta.monto | number:'1.2-2'}}</td>\n            <td class=\"text-right\">{{fpCta.propina | number:'1.2-2'}}</td>\n            <td class=\"text-center\">\n              <button mat-icon-button type=\"button\" color=\"warn\" (click)=\"delFormaPago(i)\">\n                <mat-icon>delete_forever</mat-icon>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col m12 s12 overflow-auto d-flex justify-content-end\">\n      <table class=\"table table-sm table-borderless\">\n        <tbody>\n          <!--\n          <tr class=\"propina\">\n            <td class=\"text-right\" style=\"max-width: 15%;\">\n              <mat-form-field *ngIf=\"esMovil\">\n                <input matInput placeholder=\"% propina\" name=\"monto\" type=\"number\"\n                  [(ngModel)]=\"inputData.porcentajePropina\" (keyup.enter)=\"calculaPropina()\" (blur)=\"calculaPropina()\">\n              </mat-form-field>\n              <mat-form-field *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"% propina\" placeholder=\"% propina\" name=\"monto\" type=\"number\"\n                  [(ngModel)]=\"inputData.porcentajePropina\" (keyup.enter)=\"calculaPropina()\" (blur)=\"calculaPropina()\">\n              </mat-form-field>\n            </td>\n            <td class=\"text-right\" style=\"max-width: 15%;\">\n              <mat-form-field *ngIf=\"esMovil\">\n                <input matInput placeholder=\"Propina\" name=\"monto\" type=\"number\"\n                  [(ngModel)]=\"inputData.montoPropina\" (keyup.enter)=\"calculaPorcentajePropina()\" (blur)=\"calculaPorcentajePropina()\">\n              </mat-form-field>\n              <mat-form-field *ngIf=\"!esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"Propina\" placeholder=\"Propina\" name=\"monto\" type=\"number\"\n                  [(ngModel)]=\"inputData.montoPropina\" (keyup.enter)=\"calculaPorcentajePropina()\" (blur)=\"calculaPorcentajePropina()\">\n              </mat-form-field>\n            </td>\n          </tr>\n          -->\n          <tr>\n            <td class=\"text-right font-weight-bold\">TOTAL DE CUENTA:</td>\n            <td class=\"text-right font-weight-bold totalCuenta\" style=\"max-width: 15%;\">{{inputData.totalDeCuenta | number:'1.2-2'}}</td>\n          </tr>\n          <tr>\n            <td class=\"text-right font-weight-bold\">PENDIENTE:</td>\n            <td class=\"text-right font-weight-bold\" style=\"max-width: 15%;\">\n              <span\n                [ngClass]=\"{'saldo-pendiente': +inputData.saldo > 0, 'saldo-exacto': +inputData.saldo == 0, 'saldo-extra': +inputData.saldo < 0 }\">{{inputData.saldo | number:'1.2-2'}}</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions class=\"d-flex justify-content-end\">\n  <button mat-raised-button color=\"accent\" (click)=\"cancelar()\" [disabled]=\"facturando\">Cancelar</button>\n  <button mat-raised-button color=\"accent\" (click)=\"cobrar()\" [disabled]=\"formasPagoDeCuenta.length == 0 || +inputData.saldo > 0 || !factReq.cliente || facturando\">Facturar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-factura-manual #lstFacturaManual (getFacturaEv)=\"setFactura($event)\"></app-lista-factura-manual>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-factura-manual #frmFacturaManual [factura]=\"factura\" (facturaSavedEv)=\"refreshFacturaList()\">\n        </app-form-factura-manual>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4 *ngIf=\"!!factura.fel_uuid_anulacion\" style=\"background-color: lightcoral;\">*** ANULADA ***</h4>\n        <h4>\n            Factura {{!!factura.factura ? (!!factura.serie_factura ? (factura.serie_factura + ' ' + factura.numero_factura) : 'Pendiente de firmar.') : ''}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showForm = true;\" *ngIf=\"!showForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showForm = false;\" *ngIf=\"showForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmFactura=\"ngForm\" *ngIf=\"showForm\" (ngSubmit)=\"frmFactura.form.valid && onSubmit()\" novalidate>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Serie</mat-label>\n                    <mat-select name=\"factura_serie\" [(ngModel)]=\"factura.factura_serie\" required>\n                        <mat-option *ngFor=\"let fs of facturaSeries\" [value]=\"fs.factura_serie\">\n                            {{fs.serie}} ({{fs.tipo}})\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Cliente</mat-label>\n                    <mat-select name=\"cliente\" [(ngModel)]=\"factura.cliente\" required>\n                        <mat-option *ngFor=\"let cli of clientes\" [value]=\"cli.cliente\">\n                            {{cli.nombre}} ({{cli.nit}})\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <input matInput type=\"date\" placeholder=\"Fecha\" name=\"fecha_factura\" [(ngModel)]=\"factura.fecha_factura\" required>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Moneda</mat-label>\n                    <mat-select name=\"moneda\" [(ngModel)]=\"factura.moneda\" required>\n                        <mat-option *ngFor=\"let mon of monedas\" [value]=\"mon.moneda\">\n                            {{mon.nombre}} ({{mon.simbolo}})\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-checkbox name=\"exenta\" class=\"fullWidth\" [(ngModel)]=\"+factura.exenta\">Exenta</mat-checkbox>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput type=\"text\" placeholder=\"Notas\" name=\"notas\" [(ngModel)]=\"factura.notas\">\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\" ng-virtual-keyboard-placeholder=\"Notas\" type=\"text\" placeholder=\"Notas\" name=\"notas\" [(ngModel)]=\"factura.notas\">\n                </mat-form-field>\n            </div>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFactura.form.valid || !!factura.fel_uuid || !!factura.fel_uuid_anulacion\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFactura.form.valid || !!factura.fel_uuid || !!factura.fel_uuid_anulacion || detallesFactura.length === 0 || refacturacion\" (click)=\"firmarFactura()\">\n                    Firmar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFactura.form.valid || factura.fel_uuid == undefined || factura.fel_uuid == null || !!factura.fel_uuid_anulacion || detallesFactura.length === 0 || refacturacion\" (click)=\"imprimirFactura()\">\n                    Imprimir\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFactura.form.valid || factura.fel_uuid == undefined || factura.fel_uuid == null || detallesFactura.length === 0 || refacturacion\" (click)=\"representacionGrafica()\">\n                    PDF\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFactura.form.valid || factura.fel_uuid == undefined || factura.fel_uuid == null || !!factura.fel_uuid_anulacion || detallesFactura.length === 0\" (click)=\"anularFactura()\">\n                    Anular\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" *ngIf=\"!!factura.fel_uuid_anulacion\" (click)=\"refacturar()\">\n                    Refacturar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetFactura()\" *ngIf=\"factura.factura\">\n                    Nueva\n                </button>\n\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n<hr *ngIf=\"factura.factura\" />\n<mat-card class=\"mat-elevation-z4 fullWidth\" *ngIf=\"factura.factura\">\n    <mat-card-title>\n        <h4>\n            Detalle de factura No. {{(!!factura.serie_factura ? (factura.serie_factura + ' ' + factura.numero_factura) : 'Pendiente de firmar.')}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showFormDetalle = true;\" *ngIf=\"!showFormDetalle\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showFormDetalle = false;\" *ngIf=\"showFormDetalle\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmDetalleFactura=\"ngForm\" *ngIf=\"showFormDetalle\" (ngSubmit)=\"frmDetalleFactura.form.valid && onSubmitDetail()\" novalidate>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Artículo</mat-label>\n                    <mat-select name=\"articulo\" [(ngModel)]=\"detalleFactura.articulo\" (selectionChange)=\"setPrecioUnitario($event)\" required>\n                        <mat-option *ngFor=\"let a of articulos\" [value]=\"a.articulo\">\n                            {{a.descripcion}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput placeholder=\"Cantidad\" name=\"cantidad\" [(ngModel)]=\"detalleFactura.cantidad\"\n                        (change)=\"detalleFactura.total = +detalleFactura.precio_unitario * +detalleFactura.cantidad\"\n                        required>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"Cantidad\" placeholder=\"Cantidad\" name=\"cantidad\" [(ngModel)]=\"detalleFactura.cantidad\"\n                        (change)=\"detalleFactura.total = +detalleFactura.precio_unitario * +detalleFactura.cantidad\"\n                        required>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput placeholder=\"Precio unitario\" name=\"precio_unitario\"\n                        [(ngModel)]=\"detalleFactura.precio_unitario\"\n                        (change)=\"detalleFactura.total = +detalleFactura.precio_unitario * +detalleFactura.cantidad\"\n                        required>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\" ng-virtual-keyboard-placeholder=\"Precio unitario\" placeholder=\"Precio unitario\" name=\"precio_unitario\"\n                        [(ngModel)]=\"detalleFactura.precio_unitario\"\n                        (change)=\"detalleFactura.total = +detalleFactura.precio_unitario * +detalleFactura.cantidad\"\n                        required>\n                </mat-form-field>\n            </div>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmDetalleFactura.form.valid || !!factura.fel_uuid || !!factura.fel_uuid_anulacion\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetDetalleFactura()\" *ngIf=\"detalleFactura.detalle_factura\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n        <hr *ngIf=\"detallesFactura.length > 0\"/>\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4 full-width\" *ngIf=\"detallesFactura.length > 0\">\n            <ng-container matColumnDef=\"articulo\">\n                <th mat-header-cell *matHeaderCellDef>Artículo</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">{{element.articulo.descripcion}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"cantidad\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Cantidad</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.cantidad | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"precio_unitario\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Precio Unitario</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.precio_unitario | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"total\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Total</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.total | number:'1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"editItem\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"getDetalleFactura(element.factura, element.detalle_factura)\" [disabled]=\"!!factura.fel_uuid || !!factura.fel_uuid_anulacion || refacturacion\">\n                        Editar\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n            <input matInput (keyup)=\"applyFilter()\" (change)=\"applyFilter($event.target.value)\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n            <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\" ng-virtual-keyboard-placeholder=\"Buscar...\" (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstFacturasPaged\" (click)=\"getFactura(element)\">\n                <mat-icon mat-list-icon>receipt</mat-icon>\n                <h5 mat-line>{{element.serie_factura}}&nbsp;{{element.numero_factura}}</h5>\n                <span mat-line>Fecha: {{element.fecha_factura | date:'dd/MM/yyyy'}}</span>\n                <span mat-line>Cliente: {{element.cliente.nombre}}</span>\n                <span mat-line>NIT: {{element.cliente.nit}}</span>\n            </mat-list-item>\n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>        \n        <!--\n        <table mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"factura\">                \n                <td mat-cell *matCellDef=\"let element\" (click)=\"getFactura(element)\">\n                    <mat-list>\n                        <mat-list-item>\n                            <mat-icon mat-list-icon>receipt</mat-icon>\n                            <h5 mat-line>{{element.serie_factura}}&nbsp;{{element.numero_factura}}</h5>\n                            <span mat-line>Fecha: {{element.fecha_factura | date:'dd/MM/yyyy'}}</span>\n                            <span mat-line>Cliente: {{element.cliente.nombre}}</span>\n                            <span mat-line>NIT: {{element.cliente.nit}}</span>\n                            <button mat-icon-button type=\"button\" color=\"accent\">\n                                <mat-icon>arrow_right_alt</mat-icon>\n                            </button>\n                        </mat-list-item>\n                    </mat-list>\n                </td>\n            </ng-container>            \n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        -->\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Forma de pago {{!!formaPago.forma_pago ? formaPago.descripcion : ''}}\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmFormaPago=\"ngForm\" (ngSubmit)=\"frmFormaPago.form.valid && onSubmit()\" novalidate>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput type=\"text\" placeholder=\"Descripción\" name=\"descripcion\" [(ngModel)]=\"formaPago.descripcion\" required>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\" ng-virtual-keyboard-placeholder=\"Descripcion\" type=\"text\" placeholder=\"Descripción\" name=\"descripcion\" [(ngModel)]=\"formaPago.descripcion\" required>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-checkbox name=\"activo\" class=\"fullWidth\" [(ngModel)]=\"+formaPago.activo\">Activo</mat-checkbox>\n            </div>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmFormaPago.form.valid\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetFormaPago()\" *ngIf=\"formaPago.forma_pago\">\n                    Nueva\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/forma-pago/forma-pago.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/forma-pago/forma-pago.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-forma-pago #lstFormaPago (getFormaPagoEv)=\"setFormaPago($event)\"></app-lista-forma-pago>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-forma-pago #frmIngreso [formaPago]=\"formaPago\" (formaPagoSavedEv)=\"refreshFormaPagoList()\">\n        </app-form-forma-pago>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\">\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstFormasPagoPaged\" (click)=\"getFormaPago(element)\">\n                <mat-icon mat-list-icon>account_balance_wallet</mat-icon>\n                <h5 mat-line>{{element.descripcion}}</h5>\n            </mat-list-item>            \n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./src/app/admin/services/moneda.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/services/moneda.service.ts ***!
  \**************************************************/
/*! exports provided: MonedaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonedaService", function() { return MonedaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let MonedaService = class MonedaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        //private moduleUrl: string = 'turno';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    get(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_moneda?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
MonedaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
MonedaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MonedaService);



/***/ }),

/***/ "./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n    flex: 1 1 auto;\n}\n\n.totalCuenta {\n    border-top: solid 1px black;\n    border-bottom: double 5px black;\n}\n\n.colHeight {\n    height: 400px;\n}\n\n.saldo-pendiente {\n    color: #DA332D;\n    border-bottom: double 5px #DA332D;\n}\n\n.saldo-extra {\n    color: skyblue;\n    border-bottom: double 5px skyblue;\n}\n\n.saldo-exacto {\n    color: green;\n    border-bottom: double 5px green;\n}\n\n.propina {\n    font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL2NvbXBvbmVudHMvY29icmFyLXBlZGlkby9jb2JyYXItcGVkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wb3MvY29tcG9uZW50cy9jb2JyYXItcGVkaWRvL2NvYnJhci1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udG90YWxDdWVudGEge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGUgNXB4IGJsYWNrO1xufVxuXG4uY29sSGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uc2FsZG8tcGVuZGllbnRlIHtcbiAgICBjb2xvcjogI0RBMzMyRDtcbiAgICBib3JkZXItYm90dG9tOiBkb3VibGUgNXB4ICNEQTMzMkQ7XG59XG5cbi5zYWxkby1leHRyYSB7XG4gICAgY29sb3I6IHNreWJsdWU7XG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlIDVweCBza3libHVlO1xufVxuXG4uc2FsZG8tZXhhY3RvIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogZG91YmxlIDVweCBncmVlbjtcbn1cblxuLnByb3BpbmEge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.ts ***!
  \*************************************************************************/
/*! exports provided: CobrarPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobrarPedidoComponent", function() { return CobrarPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/forma-pago.service */ "./src/app/pos/services/forma-pago.service.ts");
/* harmony import */ var _services_cobro_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/cobro.service */ "./src/app/pos/services/cobro.service.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/factura.service */ "./src/app/pos/services/factura.service.ts");












let CobrarPedidoComponent = class CobrarPedidoComponent {
    constructor(dialog, dialogRef, data, snackBar, formaPagoSrvc, cobroSrvc, facturaSrvc, ls, socket) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.formaPagoSrvc = formaPagoSrvc;
        this.cobroSrvc = cobroSrvc;
        this.facturaSrvc = facturaSrvc;
        this.ls = ls;
        this.socket = socket;
        this.inputData = {};
        this.lstFormasPago = [];
        this.formaPago = {};
        this.formasPagoDeCuenta = [];
        this.esMovil = false;
        this.facturando = false;
        this.resetFactReq = () => {
            this.factReq = { cuentas: [], factura_serie: 1, cliente: null, fecha_factura: moment__WEBPACK_IMPORTED_MODULE_6__().format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dbDateFormat), moneda: 1 };
        };
        this.processData = () => {
            if (this.data) {
                this.inputData = this.data;
            }
            else {
                this.data = this.inputData;
            }
            this.inputData.totalDeCuenta = 0.00;
            this.inputData.productosACobrar.forEach((item) => {
                this.inputData.totalDeCuenta += (item.precio * item.cantidad);
            });
            this.calculaPropina();
            this.actualizaSaldo();
            this.formaPago.monto = this.inputData.saldo;
        };
        this.calculaPropina = () => {
            this.inputData.montoPropina = parseFloat((this.inputData.porcentajePropina * this.inputData.totalDeCuenta / 100).toFixed(2));
            this.actualizaSaldo();
        };
        this.loadFormasPago = () => {
            this.formaPagoSrvc.get({ activo: 1 }).subscribe((res) => {
                if (!!res && res.length > 0) {
                    this.lstFormasPago = res;
                }
            });
        };
        this.addFormaPago = () => {
            this.formasPagoDeCuenta.push({
                forma_pago: this.lstFormasPago.filter(f => +f.forma_pago === +this.formaPago.forma_pago)[0],
                monto: this.formaPago.monto,
                propina: (this.formaPago.propina || 0.00)
            });
            this.actualizaSaldo();
        };
        this.delFormaPago = (idx) => {
            this.formasPagoDeCuenta.splice(idx, 1);
            this.actualizaSaldo();
        };
        this.actualizaSaldo = () => {
            let sumFormasPago = 0.00;
            this.formasPagoDeCuenta.forEach(fp => sumFormasPago += +fp.monto);
            this.inputData.saldo = this.inputData.totalDeCuenta + this.inputData.montoPropina - sumFormasPago;
            this.formaPago = { monto: this.inputData.saldo };
        };
        this.cancelar = () => this.dialogRef.close();
        this.setClienteFacturar = (obj) => {
            this.clienteSelected = obj;
            this.factReq.cliente = +obj.cliente;
        };
        this.cobrar = () => {
            this.facturando = true;
            const objCobro = {
                cuenta: this.inputData.idcuenta,
                forma_pago: [],
                total: this.inputData.totalDeCuenta + this.inputData.montoPropina,
                propina_monto: this.inputData.montoPropina,
                propina_porcentaje: this.inputData.porcentajePropina
            };
            for (const fp of this.formasPagoDeCuenta) {
                objCobro.forma_pago.push({
                    forma_pago: +fp.forma_pago.forma_pago,
                    monto: fp.monto,
                    propina: (fp.propina || 0.00)
                });
            }
            this.factReq.cuentas.push({ cuenta: +this.inputData.idcuenta });
            this.cobroSrvc.save(objCobro).subscribe(res => {
                if (res.exito || !res.facturada) {
                    this.snackBar.open('Cobro', `${res.mensaje}`, { duration: 3000 });
                    this.facturaSrvc.facturar(this.factReq).subscribe(resFact => {
                        // console.log('RESPUESTA DE FACTURAR = ', resFact);
                        if (resFact.exito) {
                            const confirmRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
                                maxWidth: '400px',
                                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]('Imprimir factura', '¿Desea imprimir la factura?', 'Sí', 'No')
                            });
                            confirmRef.afterClosed().subscribe((confirma) => {
                                if (confirma) {
                                    this.printFactura(resFact.factura);
                                }
                                this.resetFactReq();
                                this.snackBar.open('Factura', `${resFact.mensaje}`, { duration: 3000 });
                                this.facturando = false;
                                this.dialogRef.close(res.cuenta);
                            });
                        }
                        else {
                            this.facturando = false;
                            this.snackBar.open('Factura', `ERROR: ${res.mensaje}`, { duration: 7000 });
                            this.dialogRef.close(res.cuenta);
                        }
                    });
                }
                else {
                    this.facturando = false;
                    this.snackBar.open('Cobro', `ERROR: ${res.mensaje}`, { duration: 7000 });
                }
            });
        };
        this.procesaDetalleFactura = (detalle) => {
            const detFact = [];
            detalle.forEach(d => detFact.push({
                Cantidad: +d.cantidad,
                Descripcion: d.articulo.descripcion,
                Total: +d.total
            }));
            return detFact;
        };
        this.getTotalDetalle = (detalle) => {
            let suma = 0.00;
            detalle.forEach(d => suma += +d.total);
            return suma;
        };
        this.printFactura = (factura) => {
            // console.log('FACTURA = ', factura);
            this.facturaSrvc.imprimir(+factura.factura).subscribe(res => {
                if (res.factura) {
                    this.socket.emit(`print:factura`, `${JSON.stringify({
                        NombreEmpresa: res.factura.empresa.nombre,
                        NitEmpresa: res.factura.empresa.nit,
                        SedeEmpresa: res.factura.sedeFactura.nombre,
                        DireccionEmpresa: res.factura.empresa.direccion,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_6__(res.factura.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dateFormat),
                        Nit: res.factura.receptor.nit,
                        Nombre: res.factura.receptor.nombre,
                        Direccion: res.factura.receptor.direccion,
                        Serie: res.factura.serie_factura,
                        Numero: res.factura.numero_factura,
                        Total: this.getTotalDetalle(res.factura.detalle),
                        NoAutorizacion: res.factura.fel_uuid,
                        NombreCertificador: res.factura.certificador_fel.nombre,
                        NitCertificador: res.factura.certificador_fel.nit,
                        FechaDeAutorizacion: res.factura.fecha_autorizacion,
                        NoOrdenEnLinea: '',
                        FormaDePago: '',
                        DetalleFactura: this.procesaDetalleFactura(res.factura.detalle)
                    })}`);
                    this.snackBar.open(`Imprimiendo factura ${res.factura.serie_factura}-${res.factura.numero_factura}`, 'Impresión', { duration: 3000 });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 7000 });
                }
            });
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).enmovil || false;
        this.processData();
        this.loadFormasPago();
        this.resetFactReq();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede_uuid);
        }
    }
    calculaPorcentajePropina() {
        this.inputData.porcentajePropina = parseFloat((this.inputData.montoPropina * 100 / this.inputData.totalDeCuenta).toFixed(2));
        this.actualizaSaldo();
    }
};
CobrarPedidoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_9__["FormaPagoService"] },
    { type: _services_cobro_service__WEBPACK_IMPORTED_MODULE_10__["CobroService"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_11__["FacturaService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CobrarPedidoComponent.prototype, "inputData", void 0);
CobrarPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cobrar-pedido',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cobrar-pedido.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cobrar-pedido.component.css */ "./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CobrarPedidoComponent);



/***/ }),

/***/ "./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvcy9jb21wb25lbnRzL2ZhY3R1cmFNYW51YWwvZmFjdHVyYS1tYW51YWwvZmFjdHVyYS1tYW51YWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaManualComponent", function() { return FacturaManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




let FacturaManualComponent = class FacturaManualComponent {
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
            this.frmFactura.loadDetalleFactura(+this.factura.factura);
            this.frmFactura.resetDetalleFactura();
        };
        this.refreshFacturaList = () => this.lstFacturaComponent.loadFacturas();
        this.factura = {
            factura: null, factura_serie: null, cliente: null, fecha_factura: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0, notas: null
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstFacturaManual', { static: false })
], FacturaManualComponent.prototype, "lstFacturaComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmFacturaManual', { static: false })
], FacturaManualComponent.prototype, "frmFactura", void 0);
FacturaManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factura-manual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factura-manual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factura-manual.component.css */ "./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.css")).default]
    })
], FacturaManualComponent);



/***/ }),

/***/ "./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZmFjdHVyYU1hbnVhbC9mb3JtLWZhY3R1cmEtbWFudWFsL2Zvcm0tZmFjdHVyYS1tYW51YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3MvY29tcG9uZW50cy9mYWN0dXJhTWFudWFsL2Zvcm0tZmFjdHVyYS1tYW51YWwvZm9ybS1mYWN0dXJhLW1hbnVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbkZvbnRTaXplIHtcbiAgICBmb250LXNpemU6IDI0cHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FormFacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFacturaManualComponent", function() { return FormFacturaManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/factura.service */ "./src/app/pos/services/factura.service.ts");
/* harmony import */ var _services_factura_serie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/factura-serie.service */ "./src/app/pos/services/factura-serie.service.ts");
/* harmony import */ var _admin_services_cliente_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../admin/services/cliente.service */ "./src/app/admin/services/cliente.service.ts");
/* harmony import */ var _admin_services_moneda_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../admin/services/moneda.service */ "./src/app/admin/services/moneda.service.ts");
/* harmony import */ var _wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../wms/services/articulo.service */ "./src/app/wms/services/articulo.service.ts");








// import { SignalRService } from '../../../../shared/services/signal-r.service';







let FormFacturaManualComponent = class FormFacturaManualComponent {
    constructor(_snackBar, dialog, facturaSrvc, facturaSerieSrvc, clienteSrvc, monedaSrvc, articuloSrvc, 
    //private signalRSrvc: SignalRService,
    socket, ls) {
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.facturaSrvc = facturaSrvc;
        this.facturaSerieSrvc = facturaSerieSrvc;
        this.clienteSrvc = clienteSrvc;
        this.monedaSrvc = monedaSrvc;
        this.articuloSrvc = articuloSrvc;
        this.socket = socket;
        this.ls = ls;
        this.facturaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showForm = true;
        this.showFormDetalle = true;
        this.facturaSeries = [];
        this.clientes = [];
        this.monedas = [];
        this.detallesFactura = [];
        this.articulos = [];
        this.displayedColumns = ['articulo', 'cantidad', 'precio_unitario', 'total', 'editItem'];
        this.esMovil = false;
        this.refacturacion = false;
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
                fecha_factura: moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0, notas: null,
                fel_uuid: null, fel_uuid_anulacion: null
            };
            this.refacturacion = true;
        };
        this.resetFactura = () => {
            this.factura = {
                factura: null, factura_serie: null, cliente: null,
                fecha_factura: moment__WEBPACK_IMPORTED_MODULE_5__().format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dbDateFormat), moneda: null, exenta: 0, notas: null,
                fel_uuid: null, fel_uuid_anulacion: null
            };
            this.resetDetalleFactura();
            this.detallesFactura = [];
        };
        this.onSubmit = () => {
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
                        this._snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
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
                        this._snackBar.open('Factura manual agregada...', 'Factura', { duration: 3000 });
                    }
                });
            }
        };
        this.firmarFactura = () => {
            const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]('Firmar factura', 'Luego de firmar la factura no podrá hacer ninguna modificación. ¿Desea continuar?', 'Sí', 'No')
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
                            this._snackBar.open('Factura firmada con éxito...', 'Firmar', { duration: 3000 });
                        }
                        else {
                            this._snackBar.open(`ERROR: ${resFirma.mensaje}`, 'Firmar', { duration: 3000 });
                        }
                    });
                }
            });
        };
        this.procesaDetalleFactura = (detalle) => {
            const detFact = [];
            detalle.forEach(d => detFact.push({
                Cantidad: +d.cantidad,
                Descripcion: d.articulo.descripcion,
                Total: +d.total
            }));
            return detFact;
        };
        this.getTotalDetalle = (detalle) => {
            let suma = 0.00;
            detalle.forEach(d => suma += +d.total);
            return suma;
        };
        this.imprimirFactura = () => {
            // console.log(this.factura);
            this.facturaSrvc.imprimir(+this.factura.factura).subscribe(res => {
                if (res.factura) {
                    this.socket.emit(`print:factura`, `${JSON.stringify({
                        NombreEmpresa: res.factura.empresa.nombre,
                        NitEmpresa: res.factura.empresa.nit,
                        SedeEmpresa: res.factura.sedeFactura.nombre,
                        DireccionEmpresa: res.factura.empresa.direccion,
                        Fecha: moment__WEBPACK_IMPORTED_MODULE_5__(res.factura.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].dateFormat),
                        Nit: res.factura.receptor.nit,
                        Nombre: res.factura.receptor.nombre,
                        Direccion: res.factura.receptor.direccion,
                        Serie: res.factura.serie_factura,
                        Numero: res.factura.numero_factura,
                        Total: this.getTotalDetalle(res.factura.detalle),
                        NoAutorizacion: res.factura.fel_uuid,
                        NombreCertificador: res.factura.certificador_fel.nombre,
                        NitCertificador: res.factura.certificador_fel.nit,
                        FechaDeAutorizacion: res.factura.fecha_autorizacion,
                        NoOrdenEnLinea: '',
                        FormaDePago: '',
                        DetalleFactura: this.procesaDetalleFactura(res.factura.detalle)
                    })}`);
                    this._snackBar.open(`Imprimiendo factura ${this.factura.serie_factura}-${this.factura.numero_factura}`, 'Impresión', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Impresión', { duration: 3000 });
                }
            });
        };
        this.anularFactura = () => {
            const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]('Anular factura', 'Luego de anular la factura no podrá hacer ninguna modificación. ¿Desea continuar?', 'Sí', 'No')
            });
            dialogRef.afterClosed().subscribe(res => {
                if (res) {
                    this.facturaSrvc.anular(+this.factura.factura).subscribe(resAnula => {
                        if (resAnula.exito) {
                            this.factura.fel_uuid_anulacion = resAnula.factura.fel_uuid_anulacion;
                            this.facturaSavedEv.emit();
                            this._snackBar.open('Factura anulada con éxito...', 'Firmar', { duration: 3000 });
                        }
                        else {
                            this._snackBar.open(`ERROR: ${resAnula.mensaje}`, 'Firmar', { duration: 10000 });
                        }
                    });
                }
            });
        };
        this.loadArticulos = () => {
            this.articuloSrvc.getArticulos().subscribe(res => {
                if (res) {
                    this.articulos = res;
                }
            });
        };
        this.setPrecioUnitario = (obj) => {
            const idxArticulo = this.articulos.findIndex(a => +a.articulo === +obj.value);
            if (idxArticulo > -1) {
                this.detalleFactura.precio_unitario = +this.articulos[idxArticulo].precio;
                this.detalleFactura.total = +this.detalleFactura.precio_unitario * +this.detalleFactura.cantidad;
            }
        };
        this.resetDetalleFactura = () => this.detalleFactura = {
            detalle_factura: null, factura: (this.factura.factura || 0), articulo: null, cantidad: 1, precio_unitario: null, total: null
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
        this.updateTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.detallesFactura);
        this.representacionGrafica = () => {
            window.open(`${_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].infilePdfUrl}${this.factura.fel_uuid}`, 'winFactPdf', 'height=700,width=800,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).enmovil || false;
        this.refacturacion = false;
        this.resetFactura();
        this.loadFacturaSeries();
        this.loadClientes();
        this.loadMonedas();
        this.loadArticulos();
        //this.signalRSrvc.startConnection(`restaurante_01`);
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede_uuid);
        }
    }
};
FormFacturaManualComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_10__["FacturaService"] },
    { type: _services_factura_serie_service__WEBPACK_IMPORTED_MODULE_11__["FacturaSerieService"] },
    { type: _admin_services_cliente_service__WEBPACK_IMPORTED_MODULE_12__["ClienteService"] },
    { type: _admin_services_moneda_service__WEBPACK_IMPORTED_MODULE_13__["MonedaService"] },
    { type: _wms_services_articulo_service__WEBPACK_IMPORTED_MODULE_14__["ArticuloService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormFacturaManualComponent.prototype, "factura", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormFacturaManualComponent.prototype, "facturaSavedEv", void 0);
FormFacturaManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-factura-manual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-factura-manual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-factura-manual.component.css */ "./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.css")).default]
    })
], FormFacturaManualComponent);



/***/ }),

/***/ "./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZmFjdHVyYU1hbnVhbC9saXN0YS1mYWN0dXJhLW1hbnVhbC9saXN0YS1mYWN0dXJhLW1hbnVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZmFjdHVyYU1hbnVhbC9saXN0YS1mYWN0dXJhLW1hbnVhbC9saXN0YS1mYWN0dXJhLW1hbnVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListaFacturaManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFacturaManualComponent", function() { return ListaFacturaManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _services_factura_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/factura.service */ "./src/app/pos/services/factura.service.ts");





let ListaFacturaManualComponent = class ListaFacturaManualComponent {
    constructor(facturaSrvc, ls) {
        this.facturaSrvc = facturaSrvc;
        this.ls = ls;
        this.esMovil = false;
        this.getFacturaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadFacturas = () => {
            this.facturaSrvc.get().subscribe(lst => {
                // console.log(lst);
                if (lst) {
                    if (lst.length > 0) {
                        this.lstFacturas = lst;
                        this.applyFilter();
                    }
                }
            });
        };
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
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).enmovil || false;
        this.loadFacturas();
    }
    applyFilter() {
        if (this.txtFiltro.length > 0) {
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["MultiFiltro"])(this.lstFacturas, this.txtFiltro);
            this.length = tmpList.length;
            this.lstFacturasPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstFacturas.length;
            this.lstFacturasPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["PaginarArray"])(this.lstFacturas, this.pageSize, this.pageIndex + 1);
        }
    }
};
ListaFacturaManualComponent.ctorParameters = () => [
    { type: _services_factura_service__WEBPACK_IMPORTED_MODULE_4__["FacturaService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaFacturaManualComponent.prototype, "getFacturaEv", void 0);
ListaFacturaManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-factura-manual',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-factura-manual.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-factura-manual.component.css */ "./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.css")).default]
    })
], ListaFacturaManualComponent);



/***/ }),

/***/ "./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZm9ybWFQYWdvL2Zvcm0tZm9ybWEtcGFnby9mb3JtLWZvcm1hLXBhZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3MvY29tcG9uZW50cy9mb3JtYVBhZ28vZm9ybS1mb3JtYS1wYWdvL2Zvcm0tZm9ybWEtcGFnby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbkZvbnRTaXplIHtcbiAgICBmb250LXNpemU6IDI0cHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormFormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFormaPagoComponent", function() { return FormFormaPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/forma-pago.service */ "./src/app/pos/services/forma-pago.service.ts");



//import { MatTableDataSource } from '@angular/material/table';



let FormFormaPagoComponent = class FormFormaPagoComponent {
    constructor(_snackBar, formaPagoSrvc, ls) {
        this._snackBar = _snackBar;
        this.formaPagoSrvc = formaPagoSrvc;
        this.ls = ls;
        this.formaPagoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.esMovil = false;
        this.resetFormaPago = () => this.formaPago = { forma_pago: null, descripcion: null, activo: 1 };
        this.onSubmit = () => {
            this.formaPagoSrvc.save(this.formaPago).subscribe(res => {
                //console.log(res);
                if (res.exito) {
                    this.formaPagoSavedEv.emit();
                    this.resetFormaPago();
                    this._snackBar.open('Forma de pago agregada...', 'Forma de pago', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).enmovil || false;
    }
};
FormFormaPagoComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_5__["FormaPagoService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormFormaPagoComponent.prototype, "formaPago", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormFormaPagoComponent.prototype, "formaPagoSavedEv", void 0);
FormFormaPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-forma-pago',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-forma-pago.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-forma-pago.component.css */ "./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.css")).default]
    })
], FormFormaPagoComponent);



/***/ }),

/***/ "./src/app/pos/components/formaPago/forma-pago/forma-pago.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/forma-pago/forma-pago.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvcy9jb21wb25lbnRzL2Zvcm1hUGFnby9mb3JtYS1wYWdvL2Zvcm1hLXBhZ28uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pos/components/formaPago/forma-pago/forma-pago.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/forma-pago/forma-pago.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagoComponent", function() { return FormaPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormaPagoComponent = class FormaPagoComponent {
    constructor() {
        this.setFormaPago = (fp) => this.formaPago = fp;
        this.refreshFormaPagoList = () => this.lstFormaPagoComponent.loadFormasPago();
        this.formaPago = { forma_pago: null, descripcion: null, activo: 1 };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstFormaPago', { static: false })
], FormaPagoComponent.prototype, "lstFormaPagoComponent", void 0);
FormaPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forma-pago',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forma-pago.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/forma-pago/forma-pago.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forma-pago.component.css */ "./src/app/pos/components/formaPago/forma-pago/forma-pago.component.css")).default]
    })
], FormaPagoComponent);



/***/ }),

/***/ "./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZm9ybWFQYWdvL2xpc3RhLWZvcm1hLXBhZ28vbGlzdGEtZm9ybWEtcGFnby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcG9zL2NvbXBvbmVudHMvZm9ybWFQYWdvL2xpc3RhLWZvcm1hLXBhZ28vbGlzdGEtZm9ybWEtcGFnby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaFormaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFormaPagoComponent", function() { return ListaFormaPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/forma-pago.service */ "./src/app/pos/services/forma-pago.service.ts");




let ListaFormaPagoComponent = class ListaFormaPagoComponent {
    constructor(formaPagoSrvc) {
        this.formaPagoSrvc = formaPagoSrvc;
        this.getFormaPagoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["MultiFiltro"])(this.lstFormasPago, this.txtFiltro);
            this.length = tmpList.length;
            this.lstFormasPagoPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstFormasPago.length;
            this.lstFormasPagoPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(this.lstFormasPago, this.pageSize, this.pageIndex + 1);
        }
    }
};
ListaFormaPagoComponent.ctorParameters = () => [
    { type: _services_forma_pago_service__WEBPACK_IMPORTED_MODULE_3__["FormaPagoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaFormaPagoComponent.prototype, "getFormaPagoEv", void 0);
ListaFormaPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-forma-pago',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-forma-pago.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-forma-pago.component.css */ "./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.css")).default]
    })
], ListaFormaPagoComponent);



/***/ }),

/***/ "./src/app/pos/pos-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pos/pos-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosRoutingModule", function() { return PosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/authguard.service */ "./src/app/admin/services/authguard.service.ts");
/* harmony import */ var _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formaPago/forma-pago/forma-pago.component */ "./src/app/pos/components/formaPago/forma-pago/forma-pago.component.ts");
/* harmony import */ var _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/facturaManual/factura-manual/factura-manual.component */ "./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.ts");






const routes = [
    { path: 'fpago', component: _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_4__["FormaPagoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'factman', component: _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_5__["FacturaManualComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];
let PosRoutingModule = class PosRoutingModule {
};
PosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PosRoutingModule);



/***/ }),

/***/ "./src/app/pos/pos.module.ts":
/*!***********************************!*\
  !*** ./src/app/pos/pos.module.ts ***!
  \***********************************/
/*! exports provided: PosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosModule", function() { return PosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm2015/ngx-material-keyboard-core.js");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "./node_modules/@ecodev/fab-speed-dial/fesm2015/ecodev-fab-speed-dial.js");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @protacon/ng-virtual-keyboard */ "./node_modules/@protacon/ng-virtual-keyboard/dist/index.js");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pos-routing.module */ "./src/app/pos/pos-routing.module.ts");
/* harmony import */ var _components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/cobrar-pedido/cobrar-pedido.component */ "./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.ts");
/* harmony import */ var _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/formaPago/forma-pago/forma-pago.component */ "./src/app/pos/components/formaPago/forma-pago/forma-pago.component.ts");
/* harmony import */ var _components_formaPago_lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/formaPago/lista-forma-pago/lista-forma-pago.component */ "./src/app/pos/components/formaPago/lista-forma-pago/lista-forma-pago.component.ts");
/* harmony import */ var _components_formaPago_form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/formaPago/form-forma-pago/form-forma-pago.component */ "./src/app/pos/components/formaPago/form-forma-pago/form-forma-pago.component.ts");
/* harmony import */ var _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/facturaManual/factura-manual/factura-manual.component */ "./src/app/pos/components/facturaManual/factura-manual/factura-manual.component.ts");
/* harmony import */ var _components_facturaManual_lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/facturaManual/lista-factura-manual/lista-factura-manual.component */ "./src/app/pos/components/facturaManual/lista-factura-manual/lista-factura-manual.component.ts");
/* harmony import */ var _components_facturaManual_form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/facturaManual/form-factura-manual/form-factura-manual.component */ "./src/app/pos/components/facturaManual/form-factura-manual/form-factura-manual.component.ts");




































let PosModule = class PosModule {
};
PosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_29__["CobrarPedidoComponent"], _components_formaPago_forma_pago_forma_pago_component__WEBPACK_IMPORTED_MODULE_30__["FormaPagoComponent"], _components_formaPago_lista_forma_pago_lista_forma_pago_component__WEBPACK_IMPORTED_MODULE_31__["ListaFormaPagoComponent"], _components_formaPago_form_forma_pago_form_forma_pago_component__WEBPACK_IMPORTED_MODULE_32__["FormFormaPagoComponent"], _components_facturaManual_factura_manual_factura_manual_component__WEBPACK_IMPORTED_MODULE_33__["FacturaManualComponent"], _components_facturaManual_lista_factura_manual_lista_factura_manual_component__WEBPACK_IMPORTED_MODULE_34__["ListaFacturaManualComponent"], _components_facturaManual_form_factura_manual_form_factura_manual_component__WEBPACK_IMPORTED_MODULE_35__["FormFacturaManualComponent"]],
        entryComponents: [
            _components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_29__["CobrarPedidoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pos_routing_module__WEBPACK_IMPORTED_MODULE_28__["PosRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_25__["MatKeyboardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_26__["EcoFabSpeedDialModule"],
            _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_27__["NgVirtualKeyboardModule"]
        ],
        exports: [_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_29__["CobrarPedidoComponent"]]
    })
], PosModule);



/***/ }),

/***/ "./src/app/pos/services/cobro.service.ts":
/*!***********************************************!*\
  !*** ./src/app/pos/services/cobro.service.ts ***!
  \***********************************************/
/*! exports provided: CobroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobroService", function() { return CobroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let CobroService = class CobroService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'cuenta';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/cobrar/${entidad.cuenta}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
CobroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
CobroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CobroService);



/***/ }),

/***/ "./src/app/pos/services/factura-serie.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pos/services/factura-serie.service.ts ***!
  \*******************************************************/
/*! exports provided: FacturaSerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaSerieService", function() { return FacturaSerieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let FacturaSerieService = class FacturaSerieService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        //private moduleUrl: string = 'turno';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    get(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_factura_serie?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
FacturaSerieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
FacturaSerieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FacturaSerieService);



/***/ }),

/***/ "./src/app/pos/services/factura.service.ts":
/*!*************************************************!*\
  !*** ./src/app/pos/services/factura.service.ts ***!
  \*************************************************/
/*! exports provided: FacturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaService", function() { return FacturaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let FacturaService = class FacturaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'factura';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    facturar(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    get(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/buscar_factura?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    imprimir(idfactura) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/imprimir/${idfactura}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/guardar${!!entidad.factura ? ('/' + entidad.factura) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    refacturar(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/refacturar${!!entidad.factura ? ('/' + entidad.factura) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    firmar(identidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/facturar/${identidad}`, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anular(identidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/anular/${identidad}`, {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getDetalle(idfactura, fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/buscar_detalle/${idfactura}?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    saveDetalle(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/guardar_detalle/${entidad.factura}${!!entidad.detalle_factura ? ('/' + entidad.detalle_factura) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
FacturaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
FacturaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FacturaService);



/***/ }),

/***/ "./src/app/pos/services/forma-pago.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pos/services/forma-pago.service.ts ***!
  \****************************************************/
/*! exports provided: FormaPagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagoService", function() { return FormaPagoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let FormaPagoService = class FormaPagoService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'catalogo';
        this.manteUrl = 'fpago';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    get(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/${this.moduleUrl}/get_forma_pago?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    buscar(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.manteUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.manteUrl}/guardar${!!entidad.forma_pago ? ('/' + entidad.forma_pago) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
FormaPagoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
FormaPagoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormaPagoService);



/***/ })

}]);
//# sourceMappingURL=default~pos-pos-module~restaurante-restaurante-module-es2015.js.map