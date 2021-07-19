(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ghost-kitchen-ghost-kitchen-module~pos-pos-module~restaurante-restaurante-module"],{

/***/ "JbvS":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ecodev/fab-speed-dial/__ivy_ngcc__/fesm2015/ecodev-fab-speed-dial.js ***!
  \********************************************************************************************/
/*! exports provided: EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialModule, EcoFabSpeedDialTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialActionsComponent", function() { return EcoFabSpeedDialActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialComponent", function() { return EcoFabSpeedDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialModule", function() { return EcoFabSpeedDialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoFabSpeedDialTriggerComponent", function() { return EcoFabSpeedDialTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









function EcoFabSpeedDialActionsComponent_ng_content_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "miniFabVisible"]);
} }
const _c0 = [[["", "mat-mini-fab", ""]]];
const _c1 = ["[mat-mini-fab]"];
const _c2 = [[["eco-fab-speed-dial-trigger"]], [["eco-fab-speed-dial-actions"]]];
const _c3 = ["eco-fab-speed-dial-trigger", "eco-fab-speed-dial-actions"];
const _c4 = [[["", "mat-fab", ""]]];
const _c5 = ["[mat-fab]"];
const Z_INDEX_ITEM = 23;
class EcoFabSpeedDialActionsComponent {
    constructor(injector, renderer) {
        this.renderer = renderer;
        /**
         * Whether the min-fab button exist in DOM
         */
        this.miniFabVisible = false;
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }
    ngAfterContentInit() {
        this._buttons.changes.subscribe(() => {
            this.initButtonStates();
            this._parent.setActionsVisibility();
        });
        this.initButtonStates();
    }
    initButtonStates() {
        this._buttons.forEach((button, i) => {
            this.renderer.addClass(button._getHostElement(), 'eco-fab-action-item');
            this.changeElementStyle(button._getHostElement(), 'z-index', '' + (Z_INDEX_ITEM - i));
        });
    }
    show() {
        if (!this._buttons) {
            return;
        }
        this.resetAnimationState();
        this.miniFabVisible = true;
        this.showMiniFabAnimation = setTimeout(() => {
            this._buttons.forEach((button, i) => {
                let transitionDelay = 0;
                let transform;
                if (this._parent.animationMode === 'scale') {
                    // Incremental transition delay of 65ms for each action button
                    transitionDelay = 3 + 65 * i;
                    transform = 'scale(1)';
                }
                else {
                    transform = this.getTranslateFunction('0');
                }
                const hostElement = button._getHostElement();
                this.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');
                this.changeElementStyle(hostElement, 'opacity', '1');
                this.changeElementStyle(hostElement, 'transform', transform);
            });
        }, 50); // Be sure that *ngIf can show elements before trying to animate them
    }
    resetAnimationState() {
        clearTimeout(this.showMiniFabAnimation);
        if (this.hideMiniFab) {
            this.hideMiniFab.unsubscribe();
            this.hideMiniFab = null;
        }
    }
    hide() {
        if (!this._buttons) {
            return;
        }
        this.resetAnimationState();
        const obs = this._buttons.map((button, i) => {
            let opacity = '1';
            let transitionDelay = 0;
            let transform;
            if (this._parent.animationMode === 'scale') {
                transitionDelay = 3 - 65 * i;
                transform = 'scale(0)';
                opacity = '0';
            }
            else {
                transform = this.getTranslateFunction(55 * (i + 1) - i * 5 + 'px');
            }
            const hostElement = button._getHostElement();
            this.changeElementStyle(hostElement, 'transition-delay', transitionDelay + 'ms');
            this.changeElementStyle(hostElement, 'opacity', opacity);
            this.changeElementStyle(hostElement, 'transform', transform);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(hostElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        });
        // Wait for all animation to finish, then destroy their elements
        this.hideMiniFab = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs).subscribe(() => (this.miniFabVisible = false));
    }
    getTranslateFunction(value) {
        const dir = this._parent.direction;
        const translateFn = dir === 'up' || dir === 'down' ? 'translateY' : 'translateX';
        const sign = dir === 'down' || dir === 'right' ? '-' : '';
        return translateFn + '(' + sign + value + ')';
    }
    changeElementStyle(elem, style, value) {
        // FIXME - Find a way to create a "wrapper" around the action button(s) provided by the user, so we don't change it's style tag
        this.renderer.setStyle(elem, style, value);
    }
}
EcoFabSpeedDialActionsComponent.ɵfac = function EcoFabSpeedDialActionsComponent_Factory(t) { return new (t || EcoFabSpeedDialActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
EcoFabSpeedDialActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcoFabSpeedDialActionsComponent, selectors: [["eco-fab-speed-dial-actions"]], contentQueries: function EcoFabSpeedDialActionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttons = _t);
    } }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function EcoFabSpeedDialActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EcoFabSpeedDialActionsComponent_ng_content_0_Template, 1, 0, "ng-content", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.miniFabVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
EcoFabSpeedDialActionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
EcoFabSpeedDialActionsComponent.propDecorators = {
    _buttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoFabSpeedDialActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eco-fab-speed-dial-actions',
                template: ` <ng-content select="[mat-mini-fab]" *ngIf="miniFabVisible"></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { _buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]]
        }] }); })();
/** @dynamic @see https://github.com/angular/angular/issues/20351#issuecomment-344009887 */
class EcoFabSpeedDialComponent {
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
     */
    get fixed() {
        return this._fixed;
    }
    set fixed(fixed) {
        this._fixed = fixed;
        this._processOutsideClickState();
    }
    /**
     * Whether this speed dial is opened
     */
    get open() {
        return this._open;
    }
    set open(open) {
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
     */
    get direction() {
        return this._direction;
    }
    set direction(direction) {
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
     */
    get animationMode() {
        return this._animationMode;
    }
    set animationMode(animationMode) {
        const previousAnimationMode = this._animationMode;
        this._animationMode = animationMode;
        if (previousAnimationMode !== this._animationMode) {
            this._setElementClass(previousAnimationMode, false);
            this._setElementClass(this.animationMode, true);
            if (this.isInitialized) {
                // To start another detect lifecycle and force the "close" on the action buttons
                Promise.resolve(null).then(() => (this.open = false));
            }
        }
    }
    ngAfterContentInit() {
        this.isInitialized = true;
        this.setActionsVisibility();
        this._setElementClass(this.direction, true);
        this._setElementClass(this.animationMode, true);
    }
    ngOnDestroy() {
        this._unsetDocumentClickListener();
    }
    /**
     * Toggle the open state of this speed dial
     */
    toggle() {
        this.open = !this.open;
    }
    _onClick() {
        if (!this.fixed && this.open) {
            this.open = false;
        }
    }
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
    _setElementClass(elemClass, isAdd) {
        const finalClass = `eco-${elemClass}`;
        if (isAdd) {
            this.renderer.addClass(this.elementRef.nativeElement, finalClass);
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, finalClass);
        }
    }
    _processOutsideClickState() {
        if (!this.fixed && this.open) {
            this._setDocumentClickListener();
        }
        else {
            this._unsetDocumentClickListener();
        }
    }
    _setDocumentClickListener() {
        if (!this._documentClickUnlistener) {
            this._documentClickUnlistener = this.renderer.listen(this.document, 'click', () => {
                this.open = false;
            });
        }
    }
    _unsetDocumentClickListener() {
        if (this._documentClickUnlistener) {
            this._documentClickUnlistener();
            this._documentClickUnlistener = null;
        }
    }
}
EcoFabSpeedDialComponent.ɵfac = function EcoFabSpeedDialComponent_Factory(t) { return new (t || EcoFabSpeedDialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
EcoFabSpeedDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcoFabSpeedDialComponent, selectors: [["eco-fab-speed-dial"]], contentQueries: function EcoFabSpeedDialComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, EcoFabSpeedDialActionsComponent, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._childActions = _t.first);
    } }, hostVars: 2, hostBindings: function EcoFabSpeedDialComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcoFabSpeedDialComponent_click_HostBindingHandler() { return ctx._onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("eco-opened", ctx.open);
    } }, inputs: { fixed: "fixed", open: "open", direction: "direction", animationMode: "animationMode" }, outputs: { openChange: "openChange" }, ngContentSelectors: _c3, decls: 3, vars: 0, consts: [[1, "eco-fab-speed-dial-container"]], template: function EcoFabSpeedDialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(1turn)}eco-fab-speed-dial .eco-fab-speed-dial-container{align-items:center;display:flex;position:relative;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;height:0;position:absolute;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{left:7px;top:2px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{left:2px;top:7px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{right:2px;top:7px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}"], encapsulation: 2 });
EcoFabSpeedDialComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
EcoFabSpeedDialComponent.propDecorators = {
    fixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.eco-opened',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _childActions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [EcoFabSpeedDialActionsComponent,] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoFabSpeedDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eco-fab-speed-dial',
                template: `
        <div class="eco-fab-speed-dial-container">
            <ng-content select="eco-fab-speed-dial-trigger"></ng-content>
            <ng-content select="eco-fab-speed-dial-actions"></ng-content>
        </div>
    `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: ["eco-fab-speed-dial{display:inline-block}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180{transform:rotate(180deg)}eco-fab-speed-dial.eco-opened .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transform:rotate(1turn)}eco-fab-speed-dial .eco-fab-speed-dial-container{align-items:center;display:flex;position:relative;z-index:20}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{pointer-events:auto;z-index:24}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin180,eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-trigger.eco-spin .spin360{transition:all .6s cubic-bezier(.4,0,.2,1)}eco-fab-speed-dial .eco-fab-speed-dial-container eco-fab-speed-dial-actions{display:flex;height:0;position:absolute;width:0}eco-fab-speed-dial.eco-fling .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{display:block;opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2)}eco-fab-speed-dial.eco-scale .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{transform:scale(0);transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.14286s}eco-fab-speed-dial.eco-down eco-fab-speed-dial-actions{bottom:2px;left:7px}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column;order:2}eco-fab-speed-dial.eco-down .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-top:10px}eco-fab-speed-dial.eco-up eco-fab-speed-dial-actions{left:7px;top:2px}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container{flex-direction:column}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:column-reverse;order:1}eco-fab-speed-dial.eco-up .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-bottom:10px}eco-fab-speed-dial.eco-left eco-fab-speed-dial-actions{left:2px;top:7px}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:2}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row-reverse;order:1}eco-fab-speed-dial.eco-left .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-right:10px}eco-fab-speed-dial.eco-right eco-fab-speed-dial-actions{right:2px;top:7px}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container{flex-direction:row}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-trigger{order:1}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions{flex-direction:row;order:2}eco-fab-speed-dial.eco-right .eco-fab-speed-dial-container eco-fab-speed-dial-actions .eco-fab-action-item{margin-left:10px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.eco-opened']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animationMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], _childActions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [EcoFabSpeedDialActionsComponent]
        }] }); })();
class EcoFabSpeedDialTriggerComponent {
    constructor(injector) {
        this.spin = false;
        this._parent = injector.get(EcoFabSpeedDialComponent);
    }
    /**
     * Whether this trigger should spin (360dg) while opening the speed dial
     */
    get sp() {
        return this.spin;
    }
    _onClick(event) {
        if (!this._parent.fixed) {
            this._parent.toggle();
            event.stopPropagation();
        }
    }
}
EcoFabSpeedDialTriggerComponent.ɵfac = function EcoFabSpeedDialTriggerComponent_Factory(t) { return new (t || EcoFabSpeedDialTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
EcoFabSpeedDialTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcoFabSpeedDialTriggerComponent, selectors: [["eco-fab-speed-dial-trigger"]], hostVars: 2, hostBindings: function EcoFabSpeedDialTriggerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcoFabSpeedDialTriggerComponent_click_HostBindingHandler($event) { return ctx._onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("eco-spin", ctx.sp);
    } }, inputs: { spin: "spin" }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function EcoFabSpeedDialTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
EcoFabSpeedDialTriggerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
EcoFabSpeedDialTriggerComponent.propDecorators = {
    sp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.eco-spin',] }],
    spin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoFabSpeedDialTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'eco-fab-speed-dial-trigger',
                template: ` <ng-content select="[mat-fab]"></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { spin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.eco-spin']
        }], _onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();

class EcoFabSpeedDialModule {
}
EcoFabSpeedDialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcoFabSpeedDialModule });
EcoFabSpeedDialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcoFabSpeedDialModule_Factory(t) { return new (t || EcoFabSpeedDialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcoFabSpeedDialModule, { declarations: function () { return [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcoFabSpeedDialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent],
                exports: [EcoFabSpeedDialActionsComponent, EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of fab-speed-dial
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ecodev-fab-speed-dial.js.map

/***/ })

}]);
//# sourceMappingURL=default~ghost-kitchen-ghost-kitchen-module~pos-pos-module~restaurante-restaurante-module-es2015.js.map