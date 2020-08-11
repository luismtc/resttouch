(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurante-restaurante-module"],{

/***/ "./node_modules/@angular/cdk/esm2015/drag-drop.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/drag-drop.js ***!
  \********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = (/** @type {?} */ (source[key]));
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    const userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    const computedStyle = getComputedStyle(element);
    /** @type {?} */
    const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    const property = transitionedProperties.find((/**
     * @param {?} prop
     * @return {?}
     */
    prop => prop === 'transform' || prop === 'all'));
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    const propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    const value = computedStyle.getPropertyValue(name);
    return value.split(',').map((/**
     * @param {?} part
     * @return {?}
     */
    part => part.trim()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
const activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
class DragRef {
    /**
     * @param {?} element
     * @param {?} _config
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being scrolled.
         */
        this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the viewport being resized.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents.asObservable();
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                /** @type {?} */
                const targetHandle = this._handles.find((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => {
                    /** @type {?} */
                    const target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                }));
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        });
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this._hasStartedDragging) {
                /** @type {?} */
                const pointerPosition = this._getPointerPositionOnPage(event);
                /** @type {?} */
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                /** @type {?} */
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                /** @type {?} */
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    /** @type {?} */
                    const isDelayElapsed = Date.now() >= this._dragStartTime + (this.dragStartDelay || 0);
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!this._dropContainer || !this._dropContainer.isDragging()) {
                        this._hasStartedDragging = true;
                        this._ngZone.run((/**
                         * @return {?}
                         */
                        () => this._startDragSequence(event)));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            const constrainedPointerPosition = this._getConstrainedPointerPosition(event);
            this._hasMoved = true;
            event.preventDefault();
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                }));
            }
        });
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._endDragSequence(event);
        });
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    withHandles(handles) {
        (/** @type {?} */ (this))._handles = handles.map((/**
         * @param {?} handle
         * @return {?}
         */
        handle => Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle)));
        (/** @type {?} */ (this))._handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => toggleNativeDragInteractions(handle, false)));
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    withPreviewTemplate(template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    withPlaceholderTemplate(template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    withRootElement(rootElement) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    withBoundaryElement(boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        (/** @type {?} */ (this))._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            (/** @type {?} */ (this))._resizeSubscription = (/** @type {?} */ (this))._viewportRuler
                .change(10)
                .subscribe((/**
             * @return {?}
             */
            () => (/** @type {?} */ (this))._containInsideBoundaryOnResize()));
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    }
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    disableHandle(handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    enableHandle(handle) {
        this._disabledHandles.delete(handle);
    }
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        /** @type {?} */
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @template THIS
     * @this {THIS}
     * @param {?} value New position to be set.
     * @return {THIS}
     */
    setFreeDragPosition(value) {
        (/** @type {?} */ (this))._activeTransform = { x: 0, y: 0 };
        (/** @type {?} */ (this))._passiveTransform.x = value.x;
        (/** @type {?} */ (this))._passiveTransform.y = value.y;
        if (!(/** @type {?} */ (this))._dropContainer) {
            (/** @type {?} */ (this))._applyRootElementTransform(value.x, value.y);
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Updates the item's sort order based on the last-known pointer position.
     * @return {?}
     */
    _sortFromLastPointerPosition() {
        /** @type {?} */
        const position = this._pointerPositionAtLastDirectionChange;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(position);
        }
    }
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPreview() {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    }
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @private
     * @param {?} event Browser event object that ended the sequence.
     * @return {?}
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then((/**
             * @return {?}
             */
            () => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            }));
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            }));
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    _startDragSequence(event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        if (this._dropContainer) {
            /** @type {?} */
            const element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            const preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            const placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document).appendChild(preview);
            this._dropContainer.start();
        }
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    _initializeDragSequence(referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        const isDragging = this.isDragging();
        /** @type {?} */
        const isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        const isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        const rootElement = this._rootElement;
        /** @type {?} */
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        () => {
            this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        }));
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        const pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this._initialContainer.element).appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const container = (/** @type {?} */ (this._dropContainer));
            /** @type {?} */
            const currentIndex = container.getItemIndex(this);
            /** @type {?} */
            const pointerPosition = this._getPointerPositionOnPage(event);
            /** @type {?} */
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            /** @type {?} */
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialContainer.getItemIndex(this),
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialContainer, isPointerOverContainer, distance);
            this._dropContainer = this._initialContainer;
        }));
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    _updateActiveDropContainer({ x, y }) {
        // Drop container that draggable has been moved into.
        /** @type {?} */
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: (/** @type {?} */ (this._dropContainer)) });
                (/** @type {?} */ (this._dropContainer)).exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = (/** @type {?} */ (newContainer));
                this._dropContainer.enter(this, x, y);
                this.entered.next({
                    item: this,
                    container: (/** @type {?} */ (newContainer)),
                    currentIndex: (/** @type {?} */ (newContainer)).getItemIndex(this)
                });
            }));
        }
        (/** @type {?} */ (this._dropContainer))._startScrollingIfNecessary(x, y);
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    _createPreviewElement() {
        /** @type {?} */
        const previewConfig = this._previewTemplate;
        /** @type {?} */
        const previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        let preview;
        if (previewTemplate) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            const element = this._rootElement;
            /** @type {?} */
            const elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = `${elementRect.width}px`;
            preview.style.height = `${elementRect.height}px`;
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                /** @type {?} */
                const handler = (/** @type {?} */ (((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                }))));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                const timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            }));
        }));
    }
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    _createPlaceholderElement() {
        /** @type {?} */
        const placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    _getPointerPositionInElement(referenceElement, event) {
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        const x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        const y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    }
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    _getConstrainedPointerPosition(event) {
        /** @type {?} */
        const point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        const constrainedPoint = this.constrainPosition ? this.constrainPosition(point, this) : point;
        /** @type {?} */
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            constrainedPoint.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            constrainedPoint.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            /** @type {?} */
            const boundaryRect = this._boundaryRect;
            /** @type {?} */
            const previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            const minY = boundaryRect.top + pickupY;
            /** @type {?} */
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            const minX = boundaryRect.left + pickupX;
            /** @type {?} */
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            constrainedPoint.x = clamp(constrainedPoint.x, minX, maxX);
            constrainedPoint.y = clamp(constrainedPoint.y, minY, maxY);
        }
        return constrainedPoint;
    }
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        /** @type {?} */
        const delta = this._pointerDirectionDelta;
        /** @type {?} */
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        const changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @private
     * @param {?} x New transform value along the X axis.
     * @param {?} y New transform value along the Y axis.
     * @return {?}
     */
    _applyRootElementTransform(x, y) {
        /** @type {?} */
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @private
     * @param {?} currentPosition Current position of the user's pointer.
     * @return {?}
     */
    _getDragDistance(currentPosition) {
        /** @type {?} */
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /**
     * Cleans up any cached element dimensions that we don't need after dragging has stopped.
     * @private
     * @return {?}
     */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     * @private
     * @return {?}
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        /** @type {?} */
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        /** @type {?} */
        const elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        const leftOverflow = boundaryRect.left - elementRect.left;
        /** @type {?} */
        const rightOverflow = elementRect.right - boundaryRect.right;
        /** @type {?} */
        const topOverflow = boundaryRect.top - elementRect.top;
        /** @type {?} */
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    const clone = (/** @type {?} */ (node.cloneNode(true)));
    /** @type {?} */
    const descendantsWithId = clone.querySelectorAll('[id]');
    /** @type {?} */
    const descendantCanvases = node.querySelectorAll('canvas');
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    for (let i = 0; i < descendantsWithId.length; i++) {
        descendantsWithId[i].removeAttribute('id');
    }
    // `cloneNode` won't transfer the content of `canvas` elements so we have to do it ourselves.
    // We match up the cloned canvas to their sources using their index in the DOM.
    if (descendantCanvases.length) {
        /** @type {?} */
        const cloneCanvases = clone.querySelectorAll('canvas');
        for (let i = 0; i < descendantCanvases.length; i++) {
            /** @type {?} */
            const correspondingCloneContext = cloneCanvases[i].getContext('2d');
            if (correspondingCloneContext) {
                correspondingCloneContext.drawImage(descendantCanvases[i], 0, 0);
            }
        }
    }
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/**
 * Gets the element into which the drag preview should be inserted.
 * @param {?} documentRef
 * @return {?}
 */
function getPreviewInsertionPoint(documentRef) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 * @param {?} viewRef
 * @param {?} _document
 * @return {?}
 */
function getRootNode(viewRef, _document) {
    /** @type {?} */
    const rootNode = viewRef.rootNodes[0];
    if (rootNode.nodeType !== _document.ELEMENT_NODE) {
        /** @type {?} */
        const wrapper = _document.createElement('div');
        wrapper.appendChild(rootNode);
        return wrapper;
    }
    return (/** @type {?} */ (rootNode));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    const from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    const to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    const target = array[from];
    /** @type {?} */
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    const to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Number of pixels to scroll for each frame when auto-scrolling an element.
 * The value comes from trying it out manually until it feels right.
 * @type {?}
 */
const AUTO_SCROLL_STEP = 2;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
class DropListRef {
    /**
     * @param {?} element
     * @param {?} _dragDropRegistry
     * @param {?} _document
     * @param {?=} _ngZone
     * @param {?=} _viewportRuler
     */
    constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
        this._dragDropRegistry = _dragDropRegistry;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = `cdk-drop-list-ref-${_uniqueIdCounter++}`;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Whether sorting items within the list is disabled.
         */
        this.sortingDisabled = false;
        /**
         * Whether auto-scrolling the view when the user
         * moves their pointer close to the edges is disabled.
         */
        this.autoScrollDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the container's scroll position.
         */
        this._scrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the scroll position of the viewport.
         */
        this._viewportScrollPosition = { top: 0, left: 0 };
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        /**
         * Subscription to the window being scrolled.
         */
        this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Vertical direction in which the list is currently scrolling.
         */
        this._verticalScrollDirection = 0 /* NONE */;
        /**
         * Horizontal direction in which the list is currently scrolling.
         */
        this._horizontalScrollDirection = 0 /* NONE */;
        /**
         * Used to signal to the current auto-scroll sequence when to stop.
         */
        this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Handles the container being scrolled. Has to be an arrow function to preserve the context.
         */
        this._handleScroll = (/**
         * @return {?}
         */
        () => {
            if (!this.isDragging()) {
                return;
            }
            /** @type {?} */
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            this._updateAfterScroll(this._scrollPosition, element.scrollTop, element.scrollLeft);
        });
        /**
         * Starts the interval that'll auto-scroll the element.
         */
        this._startScrollInterval = (/**
         * @return {?}
         */
        () => {
            this._stopScrolling();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._stopScrollTimers))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const node = this._scrollNode;
                if (this._verticalScrollDirection === 1 /* UP */) {
                    incrementVerticalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._verticalScrollDirection === 2 /* DOWN */) {
                    incrementVerticalScroll(node, AUTO_SCROLL_STEP);
                }
                if (this._horizontalScrollDirection === 1 /* LEFT */) {
                    incrementHorizontalScroll(node, -AUTO_SCROLL_STEP);
                }
                else if (this._horizontalScrollDirection === 2 /* RIGHT */) {
                    incrementHorizontalScroll(node, AUTO_SCROLL_STEP);
                }
            }));
        });
        /** @type {?} */
        const nativeNode = this.element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(element);
        this._shadowRoot = getShadowRoot(nativeNode) || _document;
        _dragDropRegistry.registerDropContainer(this);
    }
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    dispose() {
        this._stopScrolling();
        this._stopScrollTimers.complete();
        this._removeListeners();
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._scrollNode = (/** @type {?} */ (null));
        this._dragDropRegistry.removeDropContainer(this);
    }
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    isDragging() {
        return this._isDragging;
    }
    /**
     * Starts dragging an item.
     * @return {?}
     */
    start() {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this.beforeStarted.next();
        this._isDragging = true;
        this._cacheItems();
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._startReceiving(this)));
        this._removeListeners();
        // @breaking-change 9.0.0 Remove check for _ngZone once it's marked as a required param.
        if (this._ngZone) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => element.addEventListener('scroll', this._handleScroll)));
        }
        else {
            element.addEventListener('scroll', this._handleScroll);
        }
        // @breaking-change 9.0.0 Remove check for _viewportRuler once it's marked as a required param.
        if (this._viewportRuler) {
            this._listenToScrollEvents();
        }
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    enter(item, pointerX, pointerY) {
        this.start();
        // If sorting is disabled, we want the item to return to its starting
        // position if the user is returning it to its initial container.
        /** @type {?} */
        let newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;
        if (newIndex === -1) {
            // We use the coordinates of where the item entered the drop
            // zone to figure out at which index it should be inserted.
            newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        }
        /** @type {?} */
        const activeDraggables = this._activeDraggables;
        /** @type {?} */
        const currentIndex = activeDraggables.indexOf(item);
        /** @type {?} */
        const placeholder = item.getPlaceholderElement();
        /** @type {?} */
        let newPositionReference = activeDraggables[newIndex];
        // If the item at the new position is the same as the item that is being dragged,
        // it means that we're trying to restore the item to its initial position. In this
        // case we should use the next item from the list as the reference.
        if (newPositionReference === item) {
            newPositionReference = activeDraggables[newIndex + 1];
        }
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            const element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            activeDraggables.splice(newIndex, 0, item);
        }
        else {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).appendChild(placeholder);
            activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
        this.entered.next({ item, container: this, currentIndex: this.getItemIndex(item) });
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._reset();
        this.exited.next({ item, container: this });
    }
    /**
     * Drops an item into this container.
     * \@breaking-change 9.0.0 `distance` parameter to become required.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @param {?=} distance Distance the user has dragged since the start of the dragging sequence.
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer, distance = { x: 0, y: 0 }) {
        this._reset();
        this.dropped.next({
            item,
            currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer,
            isPointerOverContainer,
            distance
        });
    }
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    withItems(items) {
        (/** @type {?} */ (this))._draggables = items;
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item._withDropContainer((/** @type {?} */ (this)))));
        if ((/** @type {?} */ (this)).isDragging()) {
            (/** @type {?} */ (this))._cacheItems();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    withDirection(direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    connectedTo(connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    }
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    withOrientation(orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    }
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        const items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
    }
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    isReceiving() {
        return this._activeSiblings.size > 0;
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if sorting is disabled or it's out of range.
        if (this.sortingDisabled || !this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        const siblings = this._itemPositions;
        /** @type {?} */
        const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentIndex = findIndex(siblings, (/**
         * @param {?} currentItem
         * @return {?}
         */
        currentItem => currentItem.drag === item));
        /** @type {?} */
        const siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        const delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        const oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item
        });
        siblings.forEach((/**
         * @param {?} sibling
         * @param {?} index
         * @return {?}
         */
        (sibling, index) => {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            const isDraggedItem = sibling.drag === item;
            /** @type {?} */
            const offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            const elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = `translate3d(${Math.round(sibling.offset)}px, 0, 0)`;
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = `translate3d(0, ${Math.round(sibling.offset)}px, 0)`;
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        }));
    }
    /**
     * Checks whether the user's pointer is close to the edges of either the
     * viewport or the drop list and starts the auto-scroll sequence.
     * @param {?} pointerX User's pointer position along the x axis.
     * @param {?} pointerY User's pointer position along the y axis.
     * @return {?}
     */
    _startScrollingIfNecessary(pointerX, pointerY) {
        if (this.autoScrollDisabled) {
            return;
        }
        /** @type {?} */
        let scrollNode;
        /** @type {?} */
        let verticalScrollDirection = 0 /* NONE */;
        /** @type {?} */
        let horizontalScrollDirection = 0 /* NONE */;
        // Check whether we should start scrolling the container.
        if (this._isPointerNearDropContainer(pointerX, pointerY)) {
            /** @type {?} */
            const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
            [verticalScrollDirection, horizontalScrollDirection] =
                getElementScrollDirections(element, this._clientRect, pointerX, pointerY);
            if (verticalScrollDirection || horizontalScrollDirection) {
                scrollNode = element;
            }
        }
        // @breaking-change 9.0.0 Remove null check for _viewportRuler once it's a required parameter.
        // Otherwise check if we can start scrolling the viewport.
        if (this._viewportRuler && !verticalScrollDirection && !horizontalScrollDirection) {
            const { width, height } = this._viewportRuler.getViewportSize();
            /** @type {?} */
            const clientRect = { width, height, top: 0, right: width, bottom: height, left: 0 };
            verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
            horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
            scrollNode = window;
        }
        if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection ||
            horizontalScrollDirection !== this._horizontalScrollDirection ||
            scrollNode !== this._scrollNode)) {
            this._verticalScrollDirection = verticalScrollDirection;
            this._horizontalScrollDirection = horizontalScrollDirection;
            this._scrollNode = scrollNode;
            if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
                // @breaking-change 9.0.0 Remove null check for `_ngZone` once it is made required.
                if (this._ngZone) {
                    this._ngZone.runOutsideAngular(this._startScrollInterval);
                }
                else {
                    this._startScrollInterval();
                }
            }
            else {
                this._stopScrolling();
            }
        }
    }
    /**
     * Stops any currently-running auto-scroll sequences.
     * @return {?}
     */
    _stopScrolling() {
        this._stopScrollTimers.next();
    }
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    _cacheOwnPosition() {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        this._clientRect = getMutableClientRect(element);
        this._scrollPosition = { top: element.scrollTop, left: element.scrollLeft };
    }
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    _cacheItemPositions() {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map((/**
         * @param {?} drag
         * @return {?}
         */
        drag => {
            /** @type {?} */
            const elementToMeasure = this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            return { drag, offset: 0, clientRect: getMutableClientRect(elementToMeasure) };
        })).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        }));
    }
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    _reset() {
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.getRootElement().style.transform = ''));
        this._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._stopReceiving(this)));
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
        this._stopScrolling();
        this._removeListeners();
    }
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getSiblingOffsetPx(currentIndex, siblings, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        const currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        const immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            const start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            const end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    }
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    _isPointerNearDropContainer(pointerX, pointerY) {
        const { top, right, bottom, left, width, height } = this._clientRect;
        /** @type {?} */
        const xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        const yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    }
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    _getItemOffsetPx(currentPosition, newPosition, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        let itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    }
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
        /** @type {?} */
        const isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, (/**
         * @param {?} __0
         * @param {?} _
         * @param {?} array
         * @return {?}
         */
        ({ drag, clientRect }, _, array) => {
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                const direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === this._previousSwap.drag && direction === this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        }));
    }
    /**
     * Caches the current items in the list and their positions.
     * @private
     * @return {?}
     */
    _cacheItems() {
        this._activeDraggables = this._draggables.slice();
        this._cacheItemPositions();
        this._cacheOwnPosition();
    }
    /**
     * Updates the internal state of the container after a scroll event has happened.
     * @private
     * @param {?} scrollPosition Object that is keeping track of the scroll position.
     * @param {?} newTop New top scroll position.
     * @param {?} newLeft New left scroll position.
     * @param {?=} extraClientRect Extra `ClientRect` object that should be updated, in addition to the
     *  ones of the drag items. Useful when the viewport has been scrolled and we also need to update
     *  the `ClientRect` of the list.
     * @return {?}
     */
    _updateAfterScroll(scrollPosition, newTop, newLeft, extraClientRect) {
        /** @type {?} */
        const topDifference = scrollPosition.top - newTop;
        /** @type {?} */
        const leftDifference = scrollPosition.left - newLeft;
        if (extraClientRect) {
            adjustClientRect(extraClientRect, topDifference, leftDifference);
        }
        // Since we know the amount that the user has scrolled we can shift all of the client rectangles
        // ourselves. This is cheaper than re-measuring everything and we can avoid inconsistent
        // behavior where we might be measuring the element before its position has changed.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ clientRect }) => {
            adjustClientRect(clientRect, topDifference, leftDifference);
        }));
        // We need two loops for this, because we want all of the cached
        // positions to be up-to-date before we re-sort the item.
        this._itemPositions.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ drag }) => {
            if (this._dragDropRegistry.isDragging(drag)) {
                // We need to re-sort the item manually, because the pointer move
                // events won't be dispatched while the user is scrolling.
                drag._sortFromLastPointerPosition();
            }
        }));
        scrollPosition.top = newTop;
        scrollPosition.left = newLeft;
    }
    /**
     * Removes the event listeners associated with this drop list.
     * @private
     * @return {?}
     */
    _removeListeners() {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element).removeEventListener('scroll', this._handleScroll);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    _isOverContainer(x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _getSiblingContainerFromPosition(item, x, y) {
        return this._siblings.find((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => sibling._canReceive(item, x, y)));
    }
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _canReceive(item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        const elementFromPoint = (/** @type {?} */ (this._shadowRoot.elementFromPoint(x, y)));
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.element);
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
    }
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    _startReceiving(sibling) {
        /** @type {?} */
        const activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
            this._listenToScrollEvents();
        }
    }
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    _stopReceiving(sibling) {
        this._activeSiblings.delete(sibling);
        this._viewportScrollSubscription.unsubscribe();
    }
    /**
     * Starts listening to scroll events on the viewport.
     * Used for updating the internal state of the list.
     * @private
     * @return {?}
     */
    _listenToScrollEvents() {
        this._viewportScrollPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
        this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe((/**
         * @return {?}
         */
        () => {
            if (this.isDragging()) {
                /** @type {?} */
                const newPosition = (/** @type {?} */ (this._viewportRuler)).getViewportScrollPosition();
                this._updateAfterScroll(this._viewportScrollPosition, newPosition.top, newPosition.left, this._clientRect);
            }
            else if (this.isReceiving()) {
                this._cacheOwnPosition();
            }
        }));
    }
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.findIndex` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    const { top, bottom, left, right } = clientRect;
    return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Gets a mutable version of an element's bounding `ClientRect`.
 * @param {?} element
 * @return {?}
 */
function getMutableClientRect(element) {
    /** @type {?} */
    const clientRect = element.getBoundingClientRect();
    // We need to clone the `clientRect` here, because all the values on it are readonly
    // and we need to be able to update them. Also we can't use a spread here, because
    // the values on a `ClientRect` aren't own properties. See:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
    return {
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left,
        width: clientRect.width,
        height: clientRect.height
    };
}
/**
 * Increments the vertical scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementVerticalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(0, amount);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollTop += amount;
    }
}
/**
 * Increments the horizontal scroll position of a node.
 * @param {?} node Node whose scroll position should change.
 * @param {?} amount Amount of pixels that the `node` should be scrolled.
 * @return {?}
 */
function incrementHorizontalScroll(node, amount) {
    if (node === window) {
        ((/** @type {?} */ (node))).scrollBy(amount, 0);
    }
    else {
        // Ideally we could use `Element.scrollBy` here as well, but IE and Edge don't support it.
        ((/** @type {?} */ (node))).scrollLeft += amount;
    }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getVerticalScrollDirection(clientRect, pointerY) {
    const { top, bottom, height } = clientRect;
    /** @type {?} */
    const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
        return 1 /* UP */;
    }
    else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
        return 2 /* DOWN */;
    }
    return 0 /* NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param {?} clientRect Dimensions of the node.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @return {?}
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
    const { left, right, width } = clientRect;
    /** @type {?} */
    const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
    if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
        return 1 /* LEFT */;
    }
    else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
        return 2 /* RIGHT */;
    }
    return 0 /* NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param {?} element Element for which we should calculate the scroll direction.
 * @param {?} clientRect Bounding client rectangle of the element.
 * @param {?} pointerX Position of the user's pointer along the x axis.
 * @param {?} pointerY Position of the user's pointer along the y axis.
 * @return {?}
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
    /** @type {?} */
    const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
    /** @type {?} */
    const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
    /** @type {?} */
    let verticalScrollDirection = 0 /* NONE */;
    /** @type {?} */
    let horizontalScrollDirection = 0 /* NONE */;
    // Note that we here we do some extra checks for whether the element is actually scrollable in
    // a certain direction and we only assign the scroll direction if it is. We do this so that we
    // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
    // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
    if (computedVertical) {
        /** @type {?} */
        const scrollTop = element.scrollTop;
        if (computedVertical === 1 /* UP */) {
            if (scrollTop > 0) {
                verticalScrollDirection = 1 /* UP */;
            }
        }
        else if (element.scrollHeight - scrollTop > element.clientHeight) {
            verticalScrollDirection = 2 /* DOWN */;
        }
    }
    if (computedHorizontal) {
        /** @type {?} */
        const scrollLeft = element.scrollLeft;
        if (computedHorizontal === 1 /* LEFT */) {
            if (scrollLeft > 0) {
                horizontalScrollDirection = 1 /* LEFT */;
            }
        }
        else if (element.scrollWidth - scrollLeft > element.clientWidth) {
            horizontalScrollDirection = 2 /* RIGHT */;
        }
    }
    return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * Gets the shadow root of an element, if any.
 * @param {?} element
 * @return {?}
 */
function getShadowRoot(element) {
    if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["_supportsShadowDom"])()) {
        /** @type {?} */
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        if (rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
const activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
    /**
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_ngZone, _document) {
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the viewport has been scrolled while the user is dragging an item.
         */
        this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this._activeDragInstances.size) {
                event.preventDefault();
            }
        });
        this._document = _document;
    }
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    registerDropContainer(drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error(`Drop instance with id "${drop.id}" has already been registered.`);
            }
            this._dropInstances.add(drop);
        }
    }
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    registerDragItem(drag) {
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                this._document.addEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
            }));
        }
    }
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    removeDropContainer(drop) {
        this._dropInstances.delete(drop);
    }
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    removeDragItem(drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    }
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    startDragging(drag, event) {
        // Do not process the same drag twice to avoid memory leaks and redundant listeners
        if (this._activeDragInstances.has(drag)) {
            return;
        }
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            const isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            const moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            const upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerMove.next((/** @type {?} */ (e)))),
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.pointerUp.next((/** @type {?} */ (e)))),
                options: true
            })
                .set('scroll', {
                handler: (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.scroll.next(e)),
                // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
                // the document. See https://github.com/angular/components/issues/17144.
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._globalListeners.forEach((/**
                 * @param {?} config
                 * @param {?} name
                 * @return {?}
                 */
                (config, name) => {
                    this._document.addEventListener(name, config.handler, config.options);
                }));
            }));
        }
    }
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    stopDragging(drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    }
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    isDragging(drag) {
        return this._activeDragInstances.has(drag);
    }
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    getDropContainer(id) {
        return Array.from(this._dropInstances).find((/**
         * @param {?} instance
         * @return {?}
         */
        instance => instance.id === id));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._dragInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDragItem(instance)));
        this._dropInstances.forEach((/**
         * @param {?} instance
         * @return {?}
         */
        instance => this.removeDropContainer(instance)));
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    }
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    _clearGlobalListeners() {
        this._globalListeners.forEach((/**
         * @param {?} config
         * @param {?} name
         * @return {?}
         */
        (config, name) => {
            this._document.removeEventListener(name, config.handler, config.options);
        }));
        this._globalListeners.clear();
    }
}
DragDropRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
DragDropRegistry.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
/** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
    /**
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"] },
    { type: DragDropRegistry }
];
/** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
const CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
class CdkDragHandle {
    /**
     * @param {?} element
     * @param {?=} parentDrag
     */
    constructor(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    /**
     * Whether starting to drag through this handle is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        this._stateChanges.next(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
}
CdkDragHandle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: '[cdkDragHandle]',
                host: {
                    'class': 'cdk-drag-handle'
                }
            },] },
];
/** @nocollapse */
CdkDragHandle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
CdkDragHandle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragHandleDisabled',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
class CdkDragPlaceholder {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPlaceholder.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'ng-template[cdkDragPlaceholder]'
            },] },
];
/** @nocollapse */
CdkDragPlaceholder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
];
CdkDragPlaceholder.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
class CdkDragPreview {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkDragPreview.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'ng-template[cdkDragPreview]'
            },] },
];
/** @nocollapse */
CdkDragPreview.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
];
CdkDragPreview.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
class CdkDrag {
    /**
     * @param {?} element
     * @param {?} dropContainer
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewContainerRef
     * @param {?} config
     * @param {?} _dir
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     */
    constructor(element, dropContainer, _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const subscription = this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} movedEvent
             * @return {?}
             */
            movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            })))).subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
            });
        }));
        this._dragRef = dragDrop.createDrag(element, config);
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /**
     * Selector that will be used to determine the element to which the draggable's position will
     * be constrained. Matching starts from the element's parent and goes up the DOM until a matching
     * element has been found
     * @deprecated Use `boundaryElement` instead.
     * \@breaking-change 9.0.0
     * @return {?}
     */
    get boundaryElementSelector() {
        return typeof this.boundaryElement === 'string' ? this.boundaryElement : (/** @type {?} */ (undefined));
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    set boundaryElementSelector(selector) {
        this.boundaryElement = selector;
    }
    /**
     * Whether starting to drag this element is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     * @return {?}
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                /** @type {?} */
                const childHandleElements = handles
                    .filter((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle._parentDrag === this))
                    .map((/**
                 * @param {?} handle
                 * @return {?}
                 */
                handle => handle.element));
                this._dragRef.withHandles(childHandleElements);
            })), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
             * @param {?} handles
             * @return {?}
             */
            (handles) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...handles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item._stateChanges)));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe((/**
             * @param {?} handleInstance
             * @return {?}
             */
            handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                const dragRef = this._dragRef;
                /** @type {?} */
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            }));
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const rootSelectorChange = changes['rootElementSelector'];
        /** @type {?} */
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    _updateRootElement() {
        /** @type {?} */
        const element = this.element.nativeElement;
        /** @type {?} */
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error(`cdkDrag must be attached to an element node. ` +
                `Currently attached to "${rootElement.nodeName}".`);
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /**
     * Gets the boundary element, based on the `boundaryElement` value.
     * @private
     * @return {?}
     */
    _getBoundaryElement() {
        /** @type {?} */
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundary);
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["isDevMode"])() && !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            if (!ref.isDragging()) {
                /** @type {?} */
                const dir = this._dir;
                /** @type {?} */
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                /** @type {?} */
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(this.dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        }));
    }
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.started.subscribe((/**
         * @return {?}
         */
        () => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.released.subscribe((/**
         * @return {?}
         */
        () => {
            this.released.emit({ source: this });
        }));
        ref.ended.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        }));
    }
}
CdkDrag.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': 'cdk-drag',
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            },] },
];
/** @nocollapse */
CdkDrag.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
    _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPreview, { static: false },] }],
    _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [CdkDragPlaceholder, { static: false },] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragData',] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDragConstrainPosition',] }],
    started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragStarted',] }],
    released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragReleased',] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEnded',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragExited',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragDropped',] }],
    moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDragMoved',] }]
};
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    let currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
class CdkDropListGroup {
    constructor() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    /**
     * Whether starting a dragging sequence from inside this group is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._items.clear();
    }
}
CdkDropListGroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: '[cdkDropListGroup]',
                exportAs: 'cdkDropListGroup',
            },] },
];
CdkDropListGroup.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListGroupDisabled',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
let _uniqueIdCounter$1 = 0;
const ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
class CdkDropList {
    /**
     * @param {?} element
     * @param {?} dragDrop
     * @param {?} _changeDetectorRef
     * @param {?=} _dir
     * @param {?=} _group
     */
    constructor(element, dragDrop, _changeDetectorRef, _dir, _group) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter$1++}`;
        this._disabled = false;
        this._sortingDisabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = (/**
         * @return {?}
         */
        () => true);
        /**
         * Whether to auto-scroll the view when the user moves their pointer close to the edges.
         */
        this.autoScrollDisabled = false;
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = (/**
         * @param {?} drag
         * @param {?} drop
         * @return {?}
         */
        (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        });
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /**
     * Whether starting a dragging sequence from this container is disabled.
     * @return {?}
     */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /**
     * Whether sorting within this drop list is disabled.
     * @return {?}
     */
    get sortingDisabled() { return this._sortingDisabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortingDisabled(value) {
        this._sortingDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this._dropListRef.withItems(items.map((/**
             * @param {?} drag
             * @return {?}
             */
            drag => drag._dragRef)));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Starts dragging an item.
     * @return {?}
     */
    start() {
        this._dropListRef.start();
    }
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    drop(item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    }
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    enter(item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    }
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    exit(item) {
        this._dropListRef.exit(item._dragRef);
    }
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    getItemIndex(item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    }
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    _sortItem(item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    }
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    _getSiblingContainerFromPosition(item, x, y) {
        /** @type {?} */
        const result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    }
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    _isOverContainer(x, y) {
        return this._dropListRef._isOverContainer(x, y);
    }
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _syncInputs(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            value => ref.withDirection(value)));
        }
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(this.connectedTo).map((/**
             * @param {?} drop
             * @return {?}
             */
            drop => {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find((/**
                     * @param {?} list
                     * @return {?}
                     */
                    list => list.id === drop)))) : drop;
            }));
            if (this._group) {
                this._group._items.forEach((/**
                 * @param {?} drop
                 * @return {?}
                 */
                drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                }));
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = this.sortingDisabled;
            ref.autoScrollDisabled = this.autoScrollDisabled;
            ref
                .connectedTo(siblings.filter((/**
             * @param {?} drop
             * @return {?}
             */
            drop => drop && drop !== this)).map((/**
             * @param {?} list
             * @return {?}
             */
            list => list._dropListRef)))
                .withOrientation(this.orientation);
        }));
    }
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
        ref.entered.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        }));
        ref.exited.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        }));
        ref.sorted.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        }));
        ref.dropped.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        }));
    }
}
/**
 * Keeps track of the drop lists that are currently on the page.
 */
CdkDropList._dropLists = [];
CdkDropList.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CdkDropListGroup, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                }
            },] },
];
/** @nocollapse */
CdkDropList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: DragDrop },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
];
CdkDropList.propDecorators = {
    _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                 * @return {?}
                 */
                () => CdkDrag)), {
                    // Explicitly set to false since some of the logic below makes assumptions about it.
                    // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                    descendants: false
                },] }],
    connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListConnectedTo',] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListData',] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListOrientation',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListEnterPredicate',] }],
    autoScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['cdkDropListAutoScrollDisabled',] }],
    dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListDropped',] }],
    entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListEntered',] }],
    exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListExited',] }],
    sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['cdkDropListSorted',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDropModule {
}
DragDropModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Abrir mesa</h1>\n<mat-dialog-content>\n    <form #frmAbrirMesa=\"ngForm\" (ngSubmit)=\"frmAbrirMesa.form.valid\" novalidate>\n            <mat-form-field class=\"separatorMargin\">\n            <mat-label>Mesero</mat-label>\n            <mat-select name=\"mesero\" [(ngModel)]=\"data.mesero\">\n                <mat-option *ngFor=\"let usr of lstMeseros\" [value]=\"usr.usuario.usuario\">\n                    {{usr.usuario.nombres}} {{usr.usuario.apellidos}}\n                </mat-option>\n            </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"separatorMargin\" *ngIf=\"!esMovil\">\n            <input type=\"text\" matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"numeric\"\n                ng-virtual-keyboard-placeholder=\"# Comensales\" placeholder=\"# Comensales\" name=\"comensales\"\n                [(ngModel)]=\"data.comensales\" required>\n            </mat-form-field>\n                    <mat-form-field class=\"separatorMargin\" *ngIf=\"esMovil\">\n                <input type=\"text\" matInput placeholder=\"# Comensales\" name=\"comensales\" [(ngModel)]=\"data.comensales\"\n                    required>\n            </mat-form-field>\n            <mat-checkbox name=\"esEvento\" class=\"separatorMargin\" [(ngModel)]=\"+data.esEvento\">¿Es evento?</mat-checkbox>\n            <mat-checkbox name=\"dividirCuentasPorSillas\" class=\"separatorMargin\" [(ngModel)]=\"+data.dividirCuentasPorSillas\" [disabled]=\"+data.comensales <= 1\">¿Dividir cuentas?</mat-checkbox>\n    </form>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n    <button mat-raised-button (click)=\"terminar()\" color=\"secondary\" class=\"btnAccion\">\n        Cancelar\n    </button>\n    <button mat-raised-button (click)=\"terminar(data)\" [disabled]=\"!frmAbrirMesa.form.valid\" color=\"accent\">\n        Abrir mesa\n    </button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area-designer/area-designer.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area-designer/area-designer.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"diseniador\">\n    <div style=\"height: 50px;\" align=\"center\">\n        <button mat-flat-button type=\"button\" color=\"accent\" (click)=\"addTable()\">\n            Agregar mesa\n        </button>\n        <button mat-flat-button type=\"button\" color=\"accent\" (click)=\"terminar()\">\n            Terminar\n        </button>\n    </div>\n    <div id=\"divAreaPosicionamiento\" class=\"areaPosicionamiento\">\n        <app-mesa *ngFor=\"let m of mesas\" [configuracion]=\"m\" (onClickMesa)=\"onClickMesa($event)\" [dontAllowDrag]=\"false\"></app-mesa>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area/area.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area/area.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-area #listaAreas (getEntidadEv)=\"setArea($event)\"></app-lista-area>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-area [entidad]=\"area\" (entidadSavedEv)=\"refreshAreaList()\"></app-form-area>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/form-area/form-area.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/form-area/form-area.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>Área</h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmEntidad=\"ngForm\" (ngSubmit)=\"frmEntidad.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                <input type=\"text\" matInput placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"entidad.nombre\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                <input type=\"text\" matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                    ng-virtual-keyboard-placeholder=\"Nombre\" placeholder=\"Nombre\" name=\"nombre\"\n                    [(ngModel)]=\"entidad.nombre\" required>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Área padre</mat-label>\n                <mat-select name=\"area_padre\" [(ngModel)]=\"entidad.area_padre\">\n                    <mat-option *ngFor=\"let ar of lstAreas\" [value]=\"ar.area\">\n                        {{ar.nombre}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <h5>Mesas en el área: {{entidad.mesas.length}}</h5>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmEntidad.form.valid\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" (click)=\"openDesigner()\" *ngIf=\"entidad.area\">\n                    Diseñar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetEntidad()\" *ngIf=\"entidad.area\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/lista-area/lista-area.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/lista-area/lista-area.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\">\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item matRipple *ngFor=\"let element of lstEntidadesPaged\" (click)=\"getEntidad(element.area)\">\n                <mat-icon mat-list-icon>settings</mat-icon>\n                <h5 mat-line>{{element.nombre}}</h5>\n            </mat-list-item>            \n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n  <mat-card-title>\n    <h5>Corte de caja</h5>\n  </mat-card-title>\n  <mat-card-content>\n    <form #frmcc=\"ngForm\" (ngSubmit)=\"frmcc.form.valid && guardar()\" novalidate>\n      <mat-form-field class=\"fullWidth\">\n        <mat-label>Tipo de Corte</mat-label>\n        <mat-select name=\"tipo\" [(ngModel)]=\"ccorte.caja_corte_tipo\" (selectionChange)=\"setNameTipo()\" required>\n          <mat-option *ngFor=\"let m of ccorteTipo\" [value]=\"m.caja_corte_tipo\">\n            {{m.descripcion}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <p>Agregar nominaciones</p>\n      <div class=\"example-container\">\n        <mat-form-field>\n          <mat-label>Nominación:</mat-label>\n          <mat-select name=\"nominacion\" [(ngModel)]=\"detalle.caja_corte_nominacion\" (selectionChange)=\"setNamenomi()\">\n            <mat-option *ngFor=\"let m of ccorteNomi\" [value]=\"m.caja_corte_nominacion\">\n              {{m.nombre}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>Cantidad:</mat-label>\n          <input matInput type=\"number\" step=\"0.01\" name=\"cantidad\" [(ngModel)]=\"detalle.cantidad\" (blur)=\"setTotal()\">\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>Total:</mat-label>\n          <input matInput type=\"number\" step=\"0.01\" name=\"total\" [(ngModel)]=\"detalle.total\" readonly>\n        </mat-form-field>\n        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"agregarDetalle()\" title=\"Agregar el detalle\">\n          <mat-icon>add</mat-icon>\n        </button>\n      </div>\n      <mat-grid-list cols=\"4\" rowHeight=\"7:1\">\n        <mat-grid-tile><b>Nominación</b></mat-grid-tile>\n        <mat-grid-tile><b>Cantidad</b></mat-grid-tile>\n        <mat-grid-tile><b>Total</b></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n      </mat-grid-list>\n\n      <mat-grid-list *ngFor=\"let m of ccorte.detalle\" cols=\"4\" rowHeight=\"7:1\">\n        <mat-grid-tile>{{ m.nombre }}</mat-grid-tile>\n        <mat-grid-tile>{{ m.cantidad }}</mat-grid-tile>\n        <mat-grid-tile>{{ m.total }}</mat-grid-tile>\n        <mat-grid-tile>\n          <mat-icon class=\"anulacion\" (click)=\"anularCajaDetalle(m)\" mat-list-icon>close</mat-icon>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <hr>\n      <div align=\"end\">\n        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"reseteGeneral()\" *ngIf=\"ccorte.caja_corte\">\n          <mat-icon>add</mat-icon>\n        </button>\n        <button mat-icon-button type=\"submit\" color=\"accent\" [disabled]=\"!frmcc.form.valid\" title=\"Guardar corte de caja\">\n          <mat-icon>save</mat-icon>\n        </button>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n  <mat-card-content>\n    <mat-form-field>\n\t    <input matInput (keyup)=\"filtrar($event.target.value)\" placeholder=\"Buscar...\">\n\t</mat-form-field>\n\t<table mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"ccGeneral\">\n            <td mat-cell *matCellDef=\"let element\">\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon class=\"anulaicon\" (click)=\"anularCaja(element)\" mat-list-icon>close</mat-icon>\n                        <h5 mat-line>{{ element.descripcion }}</h5>\n                        <span mat-line>{{ element.creacion }}</span>\n                        <span mat-line>Total: {{ element.total }}</span>\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"getCajacorte(element)\">\n                            <mat-icon>arrow_right_alt</mat-icon>\n                        </button>\n                    </mat-list-item>\n                </mat-list>\n            </td>\n        </ng-container>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m5 s12\">\n    <app-cajacorte-lista  #lstCortecaja (getCajacorteEv)=\"editarCajaCorte($event)\"></app-cajacorte-lista>\n  </div>\n  <div class=\"col m7 s12\">\n    <app-cajacorte-form #frmCortecaja [ccorte]=\"ccorte\" (cajacorteSavedEv)=\"actualizaLista()\"></app-cajacorte-form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"comanda\">\n                <th mat-header-cell *matHeaderCellDef>No.</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.comanda}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"orden\">\n                <th mat-header-cell *matHeaderCellDef>Orden</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.origen_datos.numero_orden || ''}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"nombre\">\n                <th mat-header-cell *matHeaderCellDef>Cliente</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.cuentas[0].nombre}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"total\">\n                <th mat-header-cell *matHeaderCellDef>Total</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.total | number: '1.2-2'}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"pdf\">\n                <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\">PDF</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"tamanioAmigable\" style=\"width: 10%;\">\n                    <button mat-flat-button type=\"button\" class=\"btnCelSize\" color=\"accent\" (click)=\"getPdf(element)\">\n                        PDF\n                    </button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"imprimir\">\n                <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\">Imprimir</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"tamanioAmigable\" style=\"width: 10%;\">\n                    <button mat-flat-button type=\"button\" class=\"btnCelSize\" color=\"accent\" (click)=\"imprimir(element)\">\n                        Imprimir\n                    </button>\n                </td>\n            </ng-container>\n            <ng-container matColumnDef=\"facturar\">\n                <th mat-header-cell *matHeaderCellDef style=\"width: 10%;\">Facturar</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"tamanioAmigable\" style=\"width: 10%;\">\n                    <button mat-flat-button type=\"button\" class=\"btnCelSize\" color=\"accent\" (click)=\"firmar(element)\">\n                        Facturar\n                    </button>\n                </td>\n            </ng-container>\n\n            <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n            <ng-container matColumnDef=\"expandedDetail\">\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n                    <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                        <table style=\"width: 50%; background-color:#f5f5f5;\">\n                            <caption>\n                                <h5>Detalle del pedido #{{element.comanda}}</h5>\n                                <h6 *ngIf=\"element.origen_datos.numero_orden\">Orden #{{element.origen_datos.numero_orden}}</h6>\n                            </caption>\n                            <thead>\n                                <th>Producto</th>\n                                <th class=\"rtxt\">Precio</th>\n                                <th class=\"rtxt\">Total</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let det of element.cuentas[0].productos\">\n                                    <td>{{det.cantidad}} {{det.articulo.descripcion}}</td>\n                                    <td class=\"rtxt\">{{det.precio | number: '1.2-2'}}</td>\n                                    <td class=\"rtxt\">{{det.total | number: '1.2-2'}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n                [class.example-expanded-row]=\"expandedElement === element\"\n                (click)=\"expandedElement = expandedElement === element ? null : element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list class=\"fullWidth\" [style.height]=\"listHeight\">\n    <mat-list-item *ngFor=\"let p of listaProductos; let i = index;\" [ngClass]=\"{'noImpreso': +p.impreso === 0}\" [style.height]=\"p.itemListHeight\">\n        <div matLine class=\"fullWidth\" *ngIf=\"+p.cantidad > 0\">\n            <div class=\"row\">\n                <div class=\"col m6 s12\">\n                    <span>{{p.cantidad}}&nbsp;{{p.nombre}}</span>\n                </div>\n                <div class=\"col m6 s12\" align=\"end\">\n                    <!--<span class=\"spacer\"></span>-->\n                    <span>{{(p.cantidad * p.precio) | number: '1.2-2'}}</span>&nbsp;\n                    <eco-fab-speed-dial direction=\"left\" *ngIf=\"+p.impreso === 0\">\n                        <eco-fab-speed-dial-trigger>\n                            <button mat-fab>\n                                <mat-icon style=\"font-size: 18pt !important;\">keyboard_arrow_left</mat-icon>\n                            </button>\n                        </eco-fab-speed-dial-trigger>\n                        <eco-fab-speed-dial-actions>\n                            <button mat-mini-fab (click)=\"deleteProductoFromList(p, i)\" color=\"warn\">\n                                <mat-icon style=\"font-size: 16pt !important;\">delete_forever</mat-icon>\n                            </button>\n                            <button mat-mini-fab (click)=\"removeProducto(p, i)\" color=\"warn\">\n                                <mat-icon style=\"font-size: 16pt !important;\">remove_circle</mat-icon>\n                            </button>\n                            <button mat-mini-fab (click)=\"toggleShowInputNotas(p)\" color=\"accent\">\n                                <mat-icon style=\"font-size: 16pt !important;\">notes</mat-icon>\n                            </button>\n                        </eco-fab-speed-dial-actions>\n                    </eco-fab-speed-dial>\n                    <eco-fab-speed-dial direction=\"left\" *ngIf=\"+p.impreso === 1\">\n                        <eco-fab-speed-dial-trigger>\n                            <button mat-fab>\n                                <mat-icon style=\"font-size: 18pt !important;\">keyboard_arrow_left</mat-icon>\n                            </button>\n                        </eco-fab-speed-dial-trigger>\n                        <eco-fab-speed-dial-actions>\n                            <button mat-mini-fab (click)=\"deleteProductoFromListAfterPrinted(p, i)\" color=\"warn\">\n                                <mat-icon style=\"font-size: 16pt !important;\">delete_forever</mat-icon>\n                            </button>\n                        </eco-fab-speed-dial-actions>\n                    </eco-fab-speed-dial>\n                </div>\n            </div>\n        </div>\n        <div matLine class=\"fullWidth\" *ngIf=\"+p.cantidad > 0\">\n            <mat-form-field class=\"fullWidth\" *ngIf=\"p.showInputNotas && esMovil\">\n                <input matInput placeholder=\"Notas de producto\" [(ngModel)]=\"p.notas\"\n                    (keyup.enter)=\"toggleShowInputNotas(p)\">\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\" *ngIf=\"p.showInputNotas && !esMovil\">\n                <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\"\n                    ng-virtual-keyboard-placeholder=\"Notas de producto\" placeholder=\"Notas de producto\"\n                    [(ngModel)]=\"p.notas\" (keyup.enter)=\"toggleShowInputNotas(p)\">\n            </mat-form-field>\n        </div>\n    </mat-list-item>\n</mat-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/mesa/mesa.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/mesa/mesa.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #divMesa cdkDrag (cdkDragEnded)=\"dragEnded($event)\" cdkDragBoundary=\".areaPosicionamiento\" [cdkDragDisabled]=\"dontAllowDrag\" class=\"divMesa mat-elevation-z6\" \n    [ngClass]=\"{'disponible': +configuracion.estatus == 1, 'ocupada': +configuracion.estatus == 2}\"\n    (click)=\"clickMesa()\"\n    [style.width.px]=\"configuracion.tamanio\" \n    [style.height.px]=\"configuracion.tamanio\" \n    [style.left.%]=\"configuracion.posx\" \n    [style.top.%]=\"configuracion.posy\">\n    <span>{{configuracion.numero}}</span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Ingreso de datos de cuentas</h1>\n<div mat-dialog-content>\n    <table #tblCuentas mat-table [dataSource]=\"dataSource\" class=\"fullWidth\">\n        <ng-container matColumnDef=\"numero\">\n            <th mat-header-cell *matHeaderCellDef>No.</th>\n            <td mat-cell *matCellDef=\"let element\">\n                <span>{{element.numero}}</span>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nombre\">\n            <th mat-header-cell *matHeaderCellDef>Nombre</th>\n            <td mat-cell *matCellDef=\"let element\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input type=\"text\" matInput name=\"nombre\" [(ngModel)]=\"element.nombre\" required>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input type=\"text\" matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"alphanumeric\" ng-virtual-keyboard-placeholder=\"Nombre\" name=\"nombre\" [(ngModel)]=\"element.nombre\" required>\n                </mat-form-field>\n            </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n<div mat-dialog-actions class=\"d-flex justify-content-end\">\n    <button mat-icon-button (click)=\"agregarFila()\" color=\"accent\">\n        <mat-icon>add</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"terminar(data)\" color=\"accent\">\n        <mat-icon>check_circle</mat-icon>\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/form-propina/form-propina.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/form-propina/form-propina.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmPropina=\"ngForm\" (ngSubmit)=\"frmPropina.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <mat-label>Tipo Usuario</mat-label>\n                <mat-select name=\"usuario\" [(ngModel)]=\"propina.usuario_tipo\" required>\n                    <mat-option *ngFor=\"let m of usuarios\" [value]=\"m.usuario_tipo\">\n                        {{m.descripcion}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\">\n                <input matInput type=\"number\" step=\"0.01\" placeholder=\"Porcentaje\" name=\"porcentaje\" [(ngModel)]=\"propina.porcentaje\" required>\n            </mat-form-field>\n            <mat-checkbox name=\"anulado\" class=\"fullWidth\" [(ngModel)]=\"+propina.anulado\">Anulado</mat-checkbox>\n            <div align=\"end\">\n                <button mat-icon-button type=\"submit\" color=\"accent\" [disabled]=\"!frmPropina.form.valid\">\n                    <mat-icon>save</mat-icon>\n                </button>\n                <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"resetPropina()\" *ngIf=\"propina.propina_distribucion\">\n                    <mat-icon>add</mat-icon>\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/lista-propina/lista-propina.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/lista-propina/lista-propina.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar...\">\n        </mat-form-field>\n        <table mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"propina\">\n                <!--<th mat-header-cell *matHeaderCellDef> No. </th>-->\n                <td mat-cell *matCellDef=\"let element\" (click)=\"getPropina(element)\">\n                    <mat-list>\n                        <mat-list-item>\n                            <mat-icon mat-list-icon>line_weight</mat-icon>\n                            <h5 mat-line>{{element.porcentaje}}%</h5>\n                            <span mat-line>{{element.usuario_tipo.descripcion}}</span>\n                            <button mat-icon-button type=\"button\" color=\"accent\">\n                                <mat-icon>arrow_right_alt</mat-icon>\n                            </button>\n                        </mat-list-item>\n                    </mat-list>\n                </td>\n            </ng-container>\n            <!--<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>-->\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/propina/propina.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/propina/propina.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-propina #lstPropina (getPropinaEv)=\"setPropina($event)\"></app-lista-propina>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-propina #frmPropina [propina]=\"propina\" (propinaSavedEv)=\"refreshPropinaList()\"></app-form-propina>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <mat-card class=\"mat-elevation-z4 fullWidth\">\n            <mat-card-title>\n                <h4>Autoconsulta</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <form #frmEntidad=\"ngForm\" (ngSubmit)=\"frmEntidad.form.valid && onSubmit()\" novalidate>\n                    <mat-form-field class=\"fullWidth\">\n                        <mat-label>Campos</mat-label>\n                        <mat-select name=\"campos\" [(ngModel)]=\"params.campos\" multiple=\"multiple\" required>\n                            <mat-option *ngFor=\"let campo of campos\" [value]=\"campo.tabla_campo\">\n                                {{campo.descripcion}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <input type=\"date\" matInput placeholder=\"Del\" name=\"fdel\" [(ngModel)]=\"params.fdel\" required>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <input type=\"date\" matInput placeholder=\"Al\" name=\"fal\" [(ngModel)]=\"params.fal\" required>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <mat-label>Filtrar Por</mat-label>\n                        <mat-select name=\"campos\" [(ngModel)]=\"params.fecha\" required>\n                            <mat-option *ngFor=\"let campo of fechas\" [value]=\"campo.tabla_campo\">\n                                {{campo.descripcion}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <mat-label>Ordenar Por</mat-label>\n                        <mat-select name=\"campos\" [(ngModel)]=\"params.orden\">\n                            <mat-option *ngFor=\"let campo of orden\" [value]=\"campo.tabla_campo\">\n                                {{campo.descripcion}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <div align=\"end\">\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"getReporte()\" [disabled]=\"!frmEntidad.form.valid\">\n                            <mat-icon>library_books</mat-icon>\n                        </button>                    \n                    </div>\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/caja/caja.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/caja/caja.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m12 s12\">\n    <mat-card class=\"mat-elevation-z4 fullWidth\">\n      <mat-card-title>\n        <h4>Reporte de caja</h4>\n      </mat-card-title>\n      <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" novalidate>\n          <mat-form-field class=\"fullWidth\">\n              <mat-label>Tipo de turno</mat-label>\n              <mat-select name=\"turno_tipo\" [(ngModel)]=\"params.turno_tipo\">\n                  <mat-option *ngFor=\"let tt of tiposTurno\" [value]=\"tt.turno_tipo\">\n                      {{tt.descripcion}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Del\" [(ngModel)]=\"params.fdel\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Al\" [(ngModel)]=\"params.fal\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-checkbox name=\"traslado\" class=\"fullWidth\" [(ngModel)]=\"+params._detalle\">Mostrar Detalle</mat-checkbox>\n          <div align=\"end\">\n            <button mat-button color=\"accent\" type=\"submit\">GENERAR</button>\n          </div>\n        </form>        \n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/factura/factura.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/factura/factura.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m12 s12\">\n    <mat-card class=\"mat-elevation-z4 fullWidth\">\n      <mat-card-title>\n        <h4>Reporte de facturas</h4>\n      </mat-card-title>\n      <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" novalidate>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Del\" [(ngModel)]=\"params.fdel\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Al\" [(ngModel)]=\"params.fal\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-checkbox name=\"traslado\" class=\"fullWidth\" [(ngModel)]=\"+params._detalle\">Mostrar Detalle</mat-checkbox>\n          <div align=\"end\">\n            <button mat-button color=\"accent\" type=\"submit\">GENERAR</button>\n          </div>\n        </form>        \n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/propinas/propinas.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/propinas/propinas.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col m12 s12\">\n    <mat-card class=\"mat-elevation-z4 fullWidth\">\n      <mat-card-title>\n        <h4>Reporte de propinas</h4>\n      </mat-card-title>\n      <mat-card-content>\n        <form (ngSubmit)=\"onSubmit()\" novalidate>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Del\" [(ngModel)]=\"params.fdel\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <mat-form-field class=\"fullWidth\">            \n            <input matInput type=\"date\" placeholder=\"Al\" [(ngModel)]=\"params.fal\" [ngModelOptions]=\"{standalone: true}\" required>\n          </mat-form-field>\n          <div align=\"end\">\n            <button mat-button color=\"accent\" type=\"submit\">GENERAR</button>\n          </div>\n        </form>        \n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-header>\n        <mat-card-title>Reporte de ventas</mat-card-title>\n        <mat-card-subtitle>\n            Por artículo<br />\n            Del {{params.fdel | date:'dd/MM/yyyy'}} al {{params.fal | date:'dd/MM/yyyy'}}\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <table class=\"tbl\">\n            <thead>\n                <tr>\n                    <th class=\"brdTSingleBSingle\">Descripción</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Cantidad</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Total</th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let art of data\">\n                    <tr>\n                        <td class=\"doubleTab brdBSingle\">{{art.articulo.descripcion}}</td>\n                        <td class=\"rtxt numWidth brdBSingle\">{{art.cantidad | number:'1.2-2'}}</td>\n                        <td class=\"rtxt numWidth brdBSingle\">{{art.total | number:'1.2-2'}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </mat-card-content>\n    <!--\n    <mat-card-footer>\n    </mat-card-footer>\n    -->\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-header>\n        <mat-card-title>Reporte de ventas</mat-card-title>\n        <mat-card-subtitle>\n            Por categoría<br />\n            Del {{params.fdel | date:'dd/MM/yyyy'}} al {{params.fal | date:'dd/MM/yyyy'}}\n        </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <table class=\"tbl\">\n            <thead>\n                <tr>\n                    <th class=\"brdTSingleBSingle\">Descripción</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Cantidad</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Porcentaje</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Precio unitario</th>\n                    <th class=\"rtxt numWidth brdTSingleBSingle\">Total</th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let cat of data\">\n                    <ng-container *ngIf=\"cat.subcategoria.length > 0\">\n                        <tr>\n                            <th colspan=\"5\">{{cat.descripcion}}</th>\n                        </tr>\n                        <!-- Inicio de contenedor de subcategorias -->\n                        <ng-container *ngFor=\"let subcat of cat.subcategoria\">\n                            <ng-container *ngIf=\"subcat.articulos.length > 0\">\n                                <tr>\n                                    <th class=\"tab\" colspan=\"5\">{{subcat.descripcion}}</th>\n                                </tr>\n                                <!-- Inicio de contenedor de artículos -->\n                                <ng-container *ngFor=\"let art of subcat.articulos\">\n                                    <tr>\n                                        <td class=\"doubleTab brdBSingle\">{{art.descripcion}}</td>\n                                        <td class=\"rtxt numWidth brdBSingle\">{{art.cantidad | number:'1.2-2'}}</td>\n                                        <td class=\"rtxt numWidth brdBSingle\">{{art.porcentaje | number:'1.2-2'}}</td>\n                                        <td class=\"rtxt numWidth brdBSingle\">{{art.precio_unitario | number:'1.2-2'}}</td>\n                                        <td class=\"rtxt numWidth brdBSingle\">{{art.total | number:'1.2-2'}}</td>\n                                    </tr>\n                                </ng-container>\n                                <!-- Fin de contenedor de artículos -->\n                                <tr>\n                                    <th class=\"rtxt\" colspan=\"4\">Total de subcategoría:</th>\n                                    <th class=\"rtxt brdTSingleBDouble numWidth\">{{subcat.total | number:'1.2-2'}}</th>\n                                </tr>\n                            </ng-container>\n                        </ng-container>\n                        <!-- Fin de contenedor de subcategorias -->\n                    </ng-container>\n                </ng-container>\n            </tbody>\n        </table>\n    </mat-card-content>\n    <!--\n    <mat-card-footer>\n    </mat-card-footer>\n    -->\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <mat-card class=\"mat-elevation-z4 fullWidth\">\n            <mat-card-title>\n                <h4>Reporte de ventas</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <form #frmEntidad=\"ngForm\" (ngSubmit)=\"frmEntidad.form.valid && onSubmit()\" novalidate>\n                    <mat-form-field class=\"fullWidth\">\n                        <mat-label>Tipo</mat-label>\n                        <mat-select name=\"tipo_reporte\" [(ngModel)]=\"params.tipo_reporte\" required>\n                            <mat-option *ngFor=\"let tr of tiposReporte\" [value]=\"tr.tipo_reporte\">\n                                {{tr.descripcion}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                      <mat-label>Tipo de turno</mat-label>\n                      <mat-select name=\"turno_tipo\" [(ngModel)]=\"params.turno_tipo\">\n                          <mat-option *ngFor=\"let tt of tiposTurno\" [value]=\"tt.turno_tipo\">\n                              {{tt.descripcion}}\n                          </mat-option>\n                      </mat-select>\n                  </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <input type=\"date\" matInput placeholder=\"Del\" name=\"fdel\" [(ngModel)]=\"params.fdel\" required>\n                    </mat-form-field>\n                    <mat-form-field class=\"fullWidth\">\n                        <input type=\"date\" matInput placeholder=\"Al\" name=\"fal\" [(ngModel)]=\"params.fal\" required>\n                    </mat-form-field>\n                    <div align=\"end\">\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"getReporte(1)\" [disabled]=\"!frmEntidad.form.valid\">\n                            <mat-icon>code</mat-icon>\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"getReporte(2)\" [disabled]=\"!frmEntidad.form.valid\">\n                            <mat-icon>picture_as_pdf</mat-icon>\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"getReporte(3)\" [disabled]=\"!frmEntidad.form.valid\">\n                            <mat-icon>library_books</mat-icon>\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"resetParams()\">\n                            <mat-icon>restore</mat-icon>\n                        </button>\n                    </div>\n                </form>\n            </mat-card-content>\n            <!--\n            <mat-card-footer>\n                <div align=\"center\" *ngIf=\"!!msgGenerandoReporte\">\n                    <h2>{{msgGenerandoReporte}}</h2>\n                    <h4>{{params | json}}</h4>\n                </div>\n            </mat-card-footer>\n            -->\n        </mat-card>\n    </div>\n</div>\n<div class=\"row\" *ngIf=\"params.tipo_reporte === 1 && porCategoria.length > 0\">\n    <div class=\"col m12 s12\">\n        <app-por-categoria [params]=\"params\" [data]=\"porCategoria\"></app-por-categoria>\n    </div>\n</div>\n<div class=\"row\" *ngIf=\"params.tipo_reporte === 2 && porArticulo.length > 0\">\n    <div class=\"col m12 s12\">\n        <app-por-articulo [params]=\"params\" [data]=\"porArticulo\"></app-por-articulo>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/turnos/turnos.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/turnos/turnos.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m12 s12\">\n        <mat-card class=\"mat-elevation-z4 fullWidth\">\n            <mat-card-title>\n                <h4>Reporte de Turnos</h4>\n            </mat-card-title>\n            <mat-card-content>\n                <form #frmEntidad=\"ngForm\" novalidate>\n                    <app-rpt-fechas [(fdel)]=\"params.fdel\" [(fal)]=\"params.fal\" [configuracion]=\"configParams\"></app-rpt-fechas>\n                    <app-rpt-botones\n                        [configuracion]=\"configBotones\"\n                        (htmlClick)=\"getReporte()\"\n                        (pdfClick)=\"getReporte()\"\n                        (excelClick)=\"getReporte()\"\n                        (resetParamsClick)=\"resetParams()\">\n                    </app-rpt-botones>\n                </form>\n            </mat-card-content>\n        </mat-card>                \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-areas/tran-areas.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-areas/tran-areas.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"matSideNavContainer\">\n    <mat-sidenav #rightSidenav mode=\"over\" [(opened)]=\"openedRightPanel\" (closedStart)=\"cerrandoRightSideNav()\" position=\"end\">\n        <app-tran-comanda #snTranComanda [mesaEnUso]=\"mesaSeleccionada\"></app-tran-comanda>        \n        <button mat-raised-button type=\"button\" color=\"accent\" style=\"margin-left: 8px;\" (click)=\"toggleRightSidenav()\">\n            Cerrar\n        </button>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-tab-group dynamicHeight backgroundColor=\"primary\">\n            <mat-tab #tabArea *ngFor=\"let tabA of lstTabsAreas\" label=\"{{tabA.nombre}}\">\n                <div #matTabArea class=\"divAreaMesa\" (window:resize)=\"onResize($event)\">\n                    <app-mesa *ngFor=\"let m of tabA.mesas\" [configuracion]=\"m\" (onClickMesa)=\"onClickMesa($event)\"></app-mesa>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-comanda/tran-comanda.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-comanda/tran-comanda.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"divFullSize\">\n    <div class=\"row\">\n        <div class=\"col m12 s12\" align=\"center\">\n            <span class=\"bld\" style=\"font-size: 14pt;\">{{mesaEnUso.mesa.area.nombre}} - Mesa #{{mesaEnUso.mesa.numero}}</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col m12 s12\" align=\"center\" style=\"padding: 0 !important;\">\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion\" *ngFor=\"let cta of mesaEnUso.cuentas\" [disabled]=\"+cta.cerrada == 1\"\n                (click)=\"setSelectedCuenta(cta.numero)\">\n                {{cta.nombre}}\n            </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col m6 s12\" align=\"center\" style=\"padding: 0 !important;\">\n            <span class=\"bld\">Productos</span>\n        </div>\n        <div class=\"col m6 s12\" align=\"center\" style=\"padding: 0 !important;\">\n            <span class=\"bld\" *ngIf=\"cuentaActiva.nombre\">Cuenta de {{cuentaActiva.nombre}}</span>\n            <span class=\"bld\" *ngIf=\"!cuentaActiva.nombre\">Por favor seleccione una cuenta. Gracias.</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col m6 s12 mat-elevation-z3\" style=\"overflow-y: auto;\">\n            <app-lista-producto (productoClickedEv)=\"addProductoSelected($event)\"></app-lista-producto>\n            <!--<app-lista-producto-alt (productoClickedEv)=\"addProductoSelected($event)\"></app-lista-producto-alt>-->            \n        </div>\n        <div class=\"col m6 s12 mat-elevation-z3\" style=\"overflow-y: auto;\">\n            <app-lista-productos-comanda [listaProductos]=\"lstProductosDeCuenta\" [noCuenta]=\"+cuentaActiva.numero\" [IdComanda]=\"mesaEnUso.comanda\" [IdCuenta]=\"cuentaActiva.cuenta\"\n                (productoRemovedEv)=\"updProductosCuenta($event)\"></app-lista-productos-comanda>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col m12 s12\" align=\"center\">\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion btnAccionComanda\" (click)=\"printComanda()\" [disabled]=\"!cuentaActiva.nombre\">\n                Comanda\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion btnAccionComanda\" (click)=\"printComanda(true)\" [disabled]=\"!cuentaActiva.nombre\">\n                Comanda (PDF)\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion btnAccionComanda\" (click)=\"printCuenta()\" [disabled]=\"!cuentaActiva.nombre\">\n                Cuenta\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion btnAccionComanda\" (click)=\"unirCuentas()\" [disabled]=\"mesaEnUso.cuentas.length < 2\">\n                Unir cuentas\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccion btnAccionComanda\" (click)=\"cobrarCuenta()\" \n                    [disabled]=\"!cuentaActiva.nombre || (esCajero(mesaEnUso.turno_rol) < 0)\">\n                Cobrar cuenta\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" class=\"btnAccionComanda\" (click)=\"cerrarMesa()\" *ngIf=\"lstProductosDeCuenta.length <= 0\">\n                Cerrar Mesa\n            </button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Tipo de Turno {{!!turno.turno_tipo ? turno.descripcion : ''}}\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmTurno=\"ngForm\" (ngSubmit)=\"frmTurno.form.valid && onSubmit()\" novalidate>\n            <mat-form-field class=\"fullWidth\">\n                <input matInput type=\"text\" placeholder=\"Descripción\" name=\"descripcion\" [(ngModel)]=\"turno.descripcion\" required>\n            </mat-form-field>\n            <mat-checkbox name=\"activo\" class=\"fullWidth\" [(ngModel)]=\"+turno.activo\">Activo</mat-checkbox>\n            <div align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmTurno.form.valid\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetTurno()\" *ngIf=\"turno.turno_tipo\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\">\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\"  [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstTurnosPaged\" (click)=\"getTurno(element)\">\n                <mat-icon mat-list-icon>line_weight</mat-icon>\n                <h5 mat-line>{{element.descripcion}}</h5>                \n            </mat-list-item>\n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/turno/turno.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/turno/turno.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-turno-tipo #lstTurno (getTurnoEv)=\"setTurno($event)\"></app-lista-turno-tipo>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-turno-tipo #frmTurno [turno]=\"turno\" (turnoSavedEv)=\"refreshTurnoList()\"></app-form-turno-tipo>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/form-turno/form-turno.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/form-turno/form-turno.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-title>\n        <h4>\n            Turno {{!!turno.turno ? (turno.inicio | date:'dd/MM/yyyy HH:mm:ss') : ''}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showTurnoForm = true;\" *ngIf=\"!showTurnoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showTurnoForm = false;\" *ngIf=\"showTurnoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmTurno=\"ngForm\" *ngIf=\"showTurnoForm\" (ngSubmit)=\"frmTurno.form.valid && onSubmit()\" novalidate>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Tipo de turno</mat-label>\n                    <mat-select name=\"turno_tipo\" [(ngModel)]=\"turno.turno_tipo\" required>\n                        <mat-option *ngFor=\"let tt of tiposTurno\" [value]=\"tt.turno_tipo\">\n                            {{tt.descripcion}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput type=\"datetime-locale\" placeholder=\"Inicio\" name=\"inicio\" [(ngModel)]=\"turno.inicio\" required>\n                    <button type=\"button\" *ngIf=\"!turno.inicio\" mat-button matSuffix mat-icon-button (click)=\"turno.inicio=getNow()\">\n                        <mat-icon class=\"iconFontSize\">query_builder</mat-icon>\n                    </button>\n                    <button type=\"button\" mat-button *ngIf=\"turno.inicio\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"turno.inicio=null\">\n                        <mat-icon class=\"iconFontSize\">close</mat-icon>\n                    </button>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"phone\" ng-virtual-keyboard-placeholder=\"Inicio\" type=\"datetime-locale\" placeholder=\"Inicio\" name=\"inicio\" [(ngModel)]=\"turno.inicio\" required>\n                    <button type=\"button\" *ngIf=\"!turno.inicio\" mat-button matSuffix mat-icon-button (click)=\"turno.inicio=getNow()\">\n                        <mat-icon class=\"iconFontSize\">query_builder</mat-icon>\n                    </button>\n                    <button type=\"button\" mat-button *ngIf=\"turno.inicio\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"turno.inicio=null\">\n                        <mat-icon class=\"iconFontSize\">close</mat-icon>\n                    </button>                    \n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\" *ngIf=\"esMovil\">\n                    <input matInput type=\"datetime-locale\" placeholder=\"Fin\" name=\"fin\" [(ngModel)]=\"turno.fin\">\n                    <button type=\"button\" *ngIf=\"!turno.fin\" mat-button matSuffix mat-icon-button (click)=\"turno.fin=getNow()\">\n                        <mat-icon class=\"iconFontSize\">query_builder</mat-icon>\n                    </button>\n                    <button type=\"button\" mat-button *ngIf=\"turno.fin\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"turno.fin=null\">\n                        <mat-icon class=\"iconFontSize\">close</mat-icon>\n                    </button>\n                </mat-form-field>\n                <mat-form-field class=\"fullWidth\" *ngIf=\"!esMovil\">\n                    <input matInput ng-virtual-keyboard ng-virtual-keyboard-layout=\"phone\" ng-virtual-keyboard-placeholder=\"Fin\" type=\"datetime-locale\" placeholder=\"Fin\" name=\"fin\" [(ngModel)]=\"turno.fin\">\n                    <button type=\"button\" *ngIf=\"!turno.fin\" mat-button matSuffix mat-icon-button (click)=\"turno.fin=getNow()\">\n                        <mat-icon class=\"iconFontSize\">query_builder</mat-icon>\n                    </button>\n                    <button type=\"button\" mat-button *ngIf=\"turno.fin\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"turno.fin=null\">\n                        <mat-icon class=\"iconFontSize\">close</mat-icon>\n                    </button>                    \n                </mat-form-field>\n            </div>\n            <div role=\"group\" align=\"end\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmTurno.form.valid\">\n                    Guardar\n                </button>\n                <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"resetTurno()\" *ngIf=\"turno.turno\">\n                    Nuevo\n                </button>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>\n<hr *ngIf=\"turno.turno\" />\n<mat-card class=\"mat-elevation-z4 fullWidth\" *ngIf=\"turno.turno\">\n    <mat-card-title>\n        <h4>\n            Detalle del turno {{turno.inicio | date:'dd/MM/yyyy HH:mm:ss'}}\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleTurnoForm = true;\" *ngIf=\"!showDetalleTurnoForm\">\n                <mat-icon class=\"iconFontSize\">expand_more</mat-icon>\n            </button>\n            <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"showDetalleTurnoForm = false;\" *ngIf=\"showDetalleTurnoForm\">\n                <mat-icon class=\"iconFontSize\">expand_less</mat-icon>\n            </button>\n        </h4>\n    </mat-card-title>\n    <mat-card-content>\n        <form #frmDetalleTurno=\"ngForm\" *ngIf=\"showDetalleTurnoForm\" (ngSubmit)=\"frmDetalleTurno.form.valid && onSubmitDetail()\" novalidate>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Tipo</mat-label>\n                    <mat-select name=\"usuario_tipo\" [(ngModel)]=\"detalleTurno.usuario_tipo\" required>\n                        <mat-option *ngFor=\"let tu of tiposUsuario\" [value]=\"tu.usuario_tipo\">\n                            {{tu.descripcion}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"fullWidth\">\n                    <mat-label>Usuario</mat-label>\n                    <mat-select name=\"usuario\" [(ngModel)]=\"detalleTurno.usuario\" required>\n                        <mat-option *ngFor=\"let u of usuarios\" [value]=\"u.usuario\">\n                            {{u.nombres}} {{u.apellidos}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div class=\"btn-group d-flex justify-content-end\" role=\"group\">\n                <button mat-raised-button type=\"submit\" color=\"accent\" class=\"btnAccion\" [disabled]=\"!frmDetalleTurno.form.valid || !!turno.fin\">\n                    Guardar\n                </button>\n                <!--\n                <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"resetDetalleIngreso()\"\n                    *ngIf=\"detalleTurno.ingreso_detalle\">\n                    <mat-icon>add</mat-icon>\n                </button>\n                -->\n            </div>\n        </form>\n        <hr *ngIf=\"detallesTurno.length > 0\"/>\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z4 full-width\" *ngIf=\"detallesTurno.length > 0\">\n            <ng-container matColumnDef=\"usuario_tipo\">\n                <th mat-header-cell *matHeaderCellDef>Tipo</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">{{element.usuario_tipo.descripcion}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"usuario\">\n                <th mat-header-cell *matHeaderCellDef class=\"text-right\">Usuario</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-right\">{{element.usuario.nombres}} {{element.usuario.apellidos}}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"editItem\">\n                <th mat-header-cell *matHeaderCellDef>&nbsp;</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"text-wrap\">\n                    <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"anularDetalleTurno(element)\" [disabled]=\"!!turno.fin\">\n                        Anular\n                    </button>\n                </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n        </table>\n    </mat-card-content>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/lista-turno/lista-turno.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/lista-turno/lista-turno.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z4 fullWidth\">\n    <mat-card-content>\n        <mat-form-field class=\"fullWidth\">\n            <input matInput (keyup)=\"applyFilter()\" placeholder=\"Buscar...\" [(ngModel)]=\"txtFiltro\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <mat-nav-list>\n            <mat-list-item *ngFor=\"let element of lstTurnosPaged\" (click)=\"getTurno(element)\">\n                <mat-icon mat-list-icon>schedule</mat-icon>\n                <h5 mat-line>Inicio: {{element.inicio | date: 'dd/MM/yyyy HH:mm:ss'}}</h5><br/>\n                <p mat-line>\n                    Fin: {{element.fin | date: 'dd/MM/yyyy'}}\n                </p>\n            </mat-list-item>            \n        </mat-nav-list>\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageChange($event)\" showFirstLastButtons>\n        </mat-paginator>\n    </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/turno/turno.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/turno/turno.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col m5 s12\">\n        <app-lista-turno #lstTurno (getTurnoEv)=\"setTurno($event)\"></app-lista-turno>\n    </div>\n    <div class=\"col m7 s12\">\n        <app-form-turno #frmTurno [turno]=\"turno\" (turnoSavedEv)=\"refreshTurnoList()\"></app-form-turno>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Unir cuentas</h1>\n<div mat-dialog-content>\n    <form #frmUnirCuenta=\"ngForm\" novalidate>\n        <mat-form-field>\n            <mat-label>Unir cuenta de</mat-label>\n            <mat-select name=\"cuentaDe\" [(ngModel)]=\"cuentaDe\" required>\n                <mat-option *ngFor=\"let ctaDe of data.mesaEnUso.cuentas\" [value]=\"ctaDe.numero\">\n                    {{ctaDe.nombre}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-label>con la cuenta de</mat-label>\n            <mat-select name=\"cuentaA\" [(ngModel)]=\"cuentaA\"  required>\n                <mat-option *ngFor=\"let ctaA of data.mesaEnUso.cuentas\" [value]=\"ctaA.numero\">\n                    {{ctaA.nombre}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <div class=\"d-flex justify-content-end\" style=\"width: 100%;\">\n            <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"unirCuentas(cuentaDe, cuentaA)\" [disabled]=\"!frmUnirCuenta.form.valid || +cuentaDe === +cuentaA\">\n                Unir cuentas\n            </button>\n            <button mat-raised-button type=\"button\" color=\"accent\" (click)=\"unirTodas()\">\n                Unir todas en una sola\n            </button>\n        </div>\n    </form>\n</div>\n<div mat-dialog-actions class=\"d-flex justify-content-end\">\n    <button mat-icon-button (click)=\"cancelar()\" color=\"warn\">\n        <mat-icon>cancel_presentation</mat-icon>\n    </button>\n    <!--\n    <button mat-icon-button [mat-dialog-close]=\"data\" [disabled]=\"!frmUnirCuenta.form.valid\" color=\"accent\">\n        <mat-icon>check_circle</mat-icon>\n    </button>\n    -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Contraseña del gerente de turno</h1>\n<mat-dialog-content>\n    <form #frmValidarPwdGerenteTurno=\"ngForm\" (ngSubmit)=\"frmValidarPwdGerenteTurno.form.valid\" novalidate>\n        <mat-form-field class=\"fullWidth\">\n            <input type=\"password\" matInput placeholder=\"Contraseña del gerente de turno\" name=\"pwd\" [(ngModel)]=\"data.pwd\" required>\n        </mat-form-field>\n    </form>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n    <button mat-raised-button (click)=\"cancelar()\" color=\"secondary\" class=\"btnAccion\">\n        Cancelar\n    </button>\n    <button mat-raised-button (click)=\"terminar()\" [disabled]=\"!frmValidarPwdGerenteTurno.form.valid\" color=\"accent\">\n        Eliminar producto\n    </button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/admin/services/usuario-tipo.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/services/usuario-tipo.service.ts ***!
  \********************************************************/
/*! exports provided: UsuarioTipoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioTipoService", function() { return UsuarioTipoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let UsuarioTipoService = class UsuarioTipoService {
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_tipo_usuario?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
UsuarioTipoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
UsuarioTipoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioTipoService);



/***/ }),

/***/ "./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenido {\r\n    height: 50% !important;\r\n}\r\n\r\n.separatorMargin {\r\n    margin-right: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hYnJpci1tZXNhL2FicmlyLW1lc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvYWJyaXItbWVzYS9hYnJpci1tZXNhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuaWRvIHtcclxuICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3JNYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.ts ***!
  \***************************************************************************/
/*! exports provided: AbrirMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirMesaComponent", function() { return AbrirMesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pide-datos-cuentas/pide-datos-cuentas.component */ "./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.ts");
/* harmony import */ var _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/services/usuario.service */ "./src/app/admin/services/usuario.service.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");







let AbrirMesaComponent = class AbrirMesaComponent {
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
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].usrTokenVar).enmovil || false;
        this.loadMeseros();
    }
    pedirDatosDeCuentas(obj) {
        const pideDatosCuentasRef = this.dialogDatosCuentas.open(_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_3__["PideDatosCuentasComponent"], {
            width: '50%',
            disableClose: true,
            data: obj.cuentas
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
};
AbrirMesaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
AbrirMesaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-abrir-mesa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./abrir-mesa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./abrir-mesa.component.css */ "./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AbrirMesaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/area/area-designer/area-designer.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/area/area-designer/area-designer.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".diseniador {\n    width: 750px;\n    height: 650px;\n    overflow: hidden !important;\n    padding: 0 !important;\n    /*border: dashed 1px #c7c7c749;*/\n}\n\n.areaPosicionamiento {\n    width: 100%;\n    height: 600px;\n    overflow: hidden !important;\n    background-color: #c7c7c749;\n    padding: 0 !important;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hcmVhL2FyZWEtZGVzaWduZXIvYXJlYS1kZXNpZ25lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hcmVhL2FyZWEtZGVzaWduZXIvYXJlYS1kZXNpZ25lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2VuaWFkb3Ige1xuICAgIHdpZHRoOiA3NTBweDtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLypib3JkZXI6IGRhc2hlZCAxcHggI2M3YzdjNzQ5OyovXG59XG5cbi5hcmVhUG9zaWNpb25hbWllbnRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3NDk7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/restaurante/components/area/area-designer/area-designer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurante/components/area/area-designer/area-designer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AreaDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaDesignerComponent", function() { return AreaDesignerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/mesa.service */ "./src/app/restaurante/services/mesa.service.ts");





let AreaDesignerComponent = class AreaDesignerComponent {
    constructor(snackBar, mesaSrvc, dialogRef, data) {
        this.snackBar = snackBar;
        this.mesaSrvc = mesaSrvc;
        this.dialogRef = dialogRef;
        this.data = data;
        this.mesas = [];
        this.getNextTableNumber = () => this.mesas.length > 0 ?
            (this.mesas.reduce((max, p) => +p.numero > max ? +p.numero : max, (!!this.mesas[0].numero ? +this.mesas[0].numero : 0)) + 1) :
            1;
        this.addTable = () => {
            this.mesas.push({
                mesa: null,
                area: this.data.area,
                numero: this.getNextTableNumber(),
                posx: 1,
                posy: 1,
                tamanio: 72,
                estatus: 1
            });
            this.saveNewMesa(this.mesas[this.mesas.length - 1], this.mesas.length - 1);
        };
        this.saveNewMesa = (mesa, pos) => {
            this.mesaSrvc.save(mesa).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    if (!!res.mesa) {
                        this.mesas[pos] = res.mesa;
                    }
                }
            });
        };
        this.onClickMesa = (obj) => { };
        this.terminar = () => {
            // console.log(this.mesas);
            this.dialogRef.close(this.mesas);
        };
    }
    ngOnInit() {
        // console.log(this.data);
        this.mesas = this.data.mesas;
        // console.log(this.mesas);
    }
};
AreaDesignerComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _services_mesa_service__WEBPACK_IMPORTED_MODULE_4__["MesaService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AreaDesignerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area-designer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area-designer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area-designer/area-designer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area-designer.component.css */ "./src/app/restaurante/components/area/area-designer/area-designer.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AreaDesignerComponent);



/***/ }),

/***/ "./src/app/restaurante/components/area/area/area.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurante/components/area/area/area.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvYXJlYS9hcmVhL2FyZWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/area/area/area.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurante/components/area/area/area.component.ts ***!
  \********************************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AreaComponent = class AreaComponent {
    constructor() {
        this.setArea = (obj) => this.area = obj;
        this.refreshAreaList = () => {
            this.lstAreasComponent.loadEntidades();
        };
        this.area = { area: null, sede: null, nombre: null };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('listaAreas', { static: false })
], AreaComponent.prototype, "lstAreasComponent", void 0);
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/area/area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area.component.css */ "./src/app/restaurante/components/area/area/area.component.css")).default]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/area/form-area/form-area.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurante/components/area/form-area/form-area.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hcmVhL2Zvcm0tYXJlYS9mb3JtLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvYXJlYS9mb3JtLWFyZWEvZm9ybS1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/restaurante/components/area/form-area/form-area.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/area/form-area/form-area.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAreaComponent", function() { return FormAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../area-designer/area-designer.component */ "./src/app/restaurante/components/area/area-designer/area-designer.component.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/area.service */ "./src/app/restaurante/services/area.service.ts");








let FormAreaComponent = class FormAreaComponent {
    constructor(_snackBar, dialog, entidadSrvc, ls) {
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.entidadSrvc = entidadSrvc;
        this.ls = ls;
        this.entidadSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sedeUsr = 0;
        this.lstAreas = [];
        this.esMovil = false;
        this.loadAreas = () => this.entidadSrvc.get({ sede: this.sedeUsr }).subscribe(res => this.lstAreas = res);
        this.resetEntidad = () => this.entidad = { area: null, sede: this.sedeUsr, nombre: null, mesas: [] };
        this.onSubmit = () => {
            // console.log(this.entidad); return;
            this.entidadSrvc.save(this.entidad).subscribe(res => {
                if (res.exito) {
                    this._snackBar.open(`${res.mensaje}`, 'Área', { duration: 3000 });
                    this.resetEntidad();
                    this.loadAreas();
                    this.entidadSavedEv.emit();
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Área', { duration: 3000 });
                }
            });
        };
        this.openDesigner = () => {
            const areaDesignerRef = this.dialog.open(_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_6__["AreaDesignerComponent"], {
                width: '800px',
                disableClose: false,
                data: { area: +this.entidad.area, mesas: this.entidad.mesas || [] }
            });
            areaDesignerRef.afterClosed().subscribe((result) => {
                if (result) {
                    // console.log(result);
                    this.entidadSavedEv.emit();
                    this.entidadSrvc.get({ area: +this.entidad.area }).subscribe(res => {
                        if (res && res.length > 0) {
                            this.entidad = res[0];
                        }
                    });
                }
            });
        };
    }
    ngOnInit() {
        this.sedeUsr = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0;
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
        this.resetEntidad();
        this.loadAreas();
    }
};
FormAreaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormAreaComponent.prototype, "entidad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormAreaComponent.prototype, "entidadSavedEv", void 0);
FormAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/form-area/form-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-area.component.css */ "./src/app/restaurante/components/area/form-area/form-area.component.css")).default]
    })
], FormAreaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/area/lista-area/lista-area.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurante/components/area/lista-area/lista-area.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hcmVhL2xpc3RhLWFyZWEvbGlzdGEtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9hcmVhL2xpc3RhLWFyZWEvbGlzdGEtYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/restaurante/components/area/lista-area/lista-area.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurante/components/area/lista-area/lista-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListaAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAreaComponent", function() { return ListaAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/area.service */ "./src/app/restaurante/services/area.service.ts");





let ListaAreaComponent = class ListaAreaComponent {
    constructor(areaSrvc, ls) {
        this.areaSrvc = areaSrvc;
        this.ls = ls;
        this.getEntidadEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadEntidades = () => {
            this.areaSrvc.get({ sede: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe((lst) => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstEntidades = lst;
                        this.applyFilter();
                    }
                }
            });
        };
        this.getEntidad = (id) => {
            this.areaSrvc.get({ area: id }).subscribe((lst) => {
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
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["MultiFiltro"])(this.lstEntidades, this.txtFiltro);
            this.length = tmpList.length;
            this.lstEntidadesPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstEntidades.length;
            this.lstEntidadesPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_3__["PaginarArray"])(this.lstEntidades, this.pageSize, this.pageIndex + 1);
        }
    }
};
ListaAreaComponent.ctorParameters = () => [
    { type: _services_area_service__WEBPACK_IMPORTED_MODULE_4__["AreaService"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaAreaComponent.prototype, "getEntidadEv", void 0);
ListaAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/area/lista-area/lista-area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-area.component.css */ "./src/app/restaurante/components/area/lista-area/lista-area.component.css")).default]
    })
], ListaAreaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\nmat-grid-tile {\n  text-align: left;\n}\n\n.anulacion {\n\tcursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9jYWphLWNvcnRlL2NhamFjb3J0ZS1mb3JtL2NhamFjb3J0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9jYWphLWNvcnRlL2NhamFjb3J0ZS1mb3JtL2NhamFjb3J0ZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxubWF0LWdyaWQtdGlsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hbnVsYWNpb24ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CajacorteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteFormComponent", function() { return CajacorteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/cajacorte.service */ "./src/app/restaurante/services/cajacorte.service.ts");




let CajacorteFormComponent = class CajacorteFormComponent {
    constructor(_snackBar, cajacorteSrvc) {
        this._snackBar = _snackBar;
        this.cajacorteSrvc = cajacorteSrvc;
        this.cajacorteSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
};
CajacorteFormComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_3__["CajacorteService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CajacorteFormComponent.prototype, "ccorte", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CajacorteFormComponent.prototype, "cajacorteSavedEv", void 0);
CajacorteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cajacorte-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cajacorte-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cajacorte-form.component.css */ "./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.css")).default]
    })
], CajacorteFormComponent);



/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".anulaicon {\n\tcursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9jYWphLWNvcnRlL2NhamFjb3J0ZS1saXN0YS9jYWphY29ydGUtbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50ZS9jb21wb25lbnRzL2NhamEtY29ydGUvY2FqYWNvcnRlLWxpc3RhL2NhamFjb3J0ZS1saXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudWxhaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CajacorteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteListaComponent", function() { return CajacorteListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/cajacorte.service */ "./src/app/restaurante/services/cajacorte.service.ts");






let CajacorteListaComponent = class CajacorteListaComponent {
    constructor(ccorteSrvc, _snackBar) {
        this.ccorteSrvc = ccorteSrvc;
        this._snackBar = _snackBar;
        this.displayedColumns = ['ccGeneral'];
        this.getCajacorteEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getCajascortes = () => {
            this.ccorteSrvc.buscar().subscribe(lst => {
                this.listacc = lst;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.listacc);
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
};
CajacorteListaComponent.ctorParameters = () => [
    { type: _services_cajacorte_service__WEBPACK_IMPORTED_MODULE_5__["CajacorteService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CajacorteListaComponent.prototype, "getCajacorteEv", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], CajacorteListaComponent.prototype, "paginator", void 0);
CajacorteListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cajacorte-lista',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cajacorte-lista.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cajacorte-lista.component.css */ "./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.css")).default]
    })
], CajacorteListaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvY2FqYS1jb3J0ZS9jYWphY29ydGUvY2FqYWNvcnRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.ts ***!
  \************************************************************************************/
/*! exports provided: CajacorteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteComponent", function() { return CajacorteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CajacorteComponent = class CajacorteComponent {
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstCortecaja', { static: false })
], CajacorteComponent.prototype, "lstCajacorteComponent", void 0);
CajacorteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cajacorte',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cajacorte.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cajacorte.component.css */ "./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.css")).default]
    })
], CajacorteComponent);



/***/ }),

/***/ "./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n    height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n}\r\n\r\n.tamanioAmigable {\r\n  padding: 5px;\r\n  width: 10% !important;  \r\n  min-height: 55px;  \r\n}\r\n\r\n.btnCelSize { \r\n    min-width: 55px;   \r\n    width: 100%;\r\n}\r\n\r\n.example-element-row td {\r\n    border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n    /*\r\n    border-radius: 10px;\r\n    border: solid 1px lightgray;\r\n    */\r\n}\r\n\r\n.example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n    padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n    opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9jb21hbmRhLWVuLWxpbmVhL2NvbWFuZGEtZW4tbGluZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7OztLQUdDO0FBQ0w7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9jb21hbmRhLWVuLWxpbmVhL2NvbWFuZGEtZW4tbGluZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi50YW1hbmlvQW1pZ2FibGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7ICBcclxuICBtaW4taGVpZ2h0OiA1NXB4OyAgXHJcbn1cclxuXHJcbi5idG5DZWxTaXplIHsgXHJcbiAgICBtaW4td2lkdGg6IDU1cHg7ICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKlxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JheTtcclxuICAgICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComandaEnLineaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandaEnLineaComponent", function() { return ComandaEnLineaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/desktop-notification.service */ "./src/app/shared/services/desktop-notification.service.ts");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/comanda.service */ "./src/app/restaurante/services/comanda.service.ts");
/* harmony import */ var _pos_services_factura_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pos/services/factura.service */ "./src/app/pos/services/factura.service.ts");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");














let ComandaEnLineaComponent = class ComandaEnLineaComponent {
    // public intervalId: any;
    constructor(dialog, snackBar, socket, ls, comandaSrvc, facturaSrvc, dns, pdfServicio) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.socket = socket;
        this.ls = ls;
        this.comandaSrvc = comandaSrvc;
        this.facturaSrvc = facturaSrvc;
        this.dns = dns;
        this.pdfServicio = pdfServicio;
        this.dataSource = [];
        this.columnsToDisplay = ['comanda', 'orden', 'nombre', 'total', 'pdf', 'imprimir', 'facturar'];
        this.comandasEnLinea = [];
        this.notificarUsuario = () => {
            const opciones = {
                icon: 'assets/img/minilogo.png',
                body: `Se recibió una nueva orden a las ${moment__WEBPACK_IMPORTED_MODULE_8__().format(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].dateTimeFormat)}.`,
                dir: 'auto'
            };
            this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
        };
        this.loadComandasEnLinea = () => {
            this.comandaSrvc.getComandasOnLIne().subscribe((res) => {
                this.comandasEnLinea = res;
                // console.log(this.comandasEnLinea);
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
                    }
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
        this.imprimir = (obj) => {
            // console.log(obj); // return;
            const listaProductos = this.setToPrint(obj.cuentas[0].productos);
            const AImpresoraNormal = listaProductos.filter(p => +p.impresora.bluetooth === 0);
            const AImpresoraBT = listaProductos.filter(p => +p.impresora.bluetooth === 1);
            let objToPrint = {};
            if (AImpresoraNormal.length > 0) {
                // console.log(AImpresoraNormal);
                objToPrint = {
                    Tipo: 'Comanda',
                    Nombre: obj.cuentas[0].nombre,
                    Numero: obj.comanda,
                    NoOrdenEnLinea: obj.origen_datos.numero_orden,
                    DireccionEntrega: obj.origen_datos.direccion_entrega,
                    DetalleCuenta: AImpresoraNormal,
                    Total: 0.00
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
                    const confirmRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogComponent"], {
                        maxWidth: '400px',
                        data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModel"]('Imprimir factura', '¿Desea imprimir la factura?', 'Sí', 'No')
                    });
                    confirmRef.afterClosed().subscribe((confirma) => {
                        if (confirma) {
                            this.printFactura(res.factura, obj.origen_datos);
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
                Fecha: moment__WEBPACK_IMPORTED_MODULE_8__(fact.fecha_factura).format(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].dateFormat),
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
                FormaDePago: datosOrigen.metodo_pago.join(', '),
                DetalleFactura: []
            };
            for (const det of fact.detalle) {
                dataToPrint.DetalleFactura.push({
                    Cantidad: det.cantidad,
                    Descripcion: det.articulo.descripcion,
                    Total: parseFloat(det.total)
                });
                dataToPrint.Total += parseFloat(det.total);
            }
            this.socket.emit('print:factura', JSON.stringify(dataToPrint));
        };
    }
    ngOnInit() {
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).sede_uuid);
            this.socket.on('shopify:updlist', () => {
                this.loadComandasEnLinea();
                this.notificarUsuario();
            });
            this.socket.on('shopify:error', (mensaje) => {
                this.loadComandasEnLinea();
                this.snackBar.open(`ERROR: ${mensaje}`, 'Firmar', { duration: 10000 });
            });
        }
        this.loadComandasEnLinea();
    }
    ngOnDestroy() { }
};
ComandaEnLineaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"] },
    { type: _services_comanda_service__WEBPACK_IMPORTED_MODULE_11__["ComandaService"] },
    { type: _pos_services_factura_service__WEBPACK_IMPORTED_MODULE_12__["FacturaService"] },
    { type: _shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_10__["DesktopNotificationService"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_13__["ReportePdfService"] }
];
ComandaEnLineaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comanda-en-linea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comanda-en-linea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comanda-en-linea.component.css */ "./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.css")).default]
    })
], ComandaEnLineaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\n.spacer {\n    flex: 1 1 auto !important;\n}\n\n.noImpreso {\n    background-color: #c7c7c7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9saXN0YS1wcm9kdWN0b3MtY29tYW5kYS9saXN0YS1wcm9kdWN0b3MtY29tYW5kYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9saXN0YS1wcm9kdWN0b3MtY29tYW5kYS9saXN0YS1wcm9kdWN0b3MtY29tYW5kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm5vSW1wcmVzbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjNztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListaProductosComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductosComandaComponent", function() { return ListaProductosComandaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../valida-pwd-gerente-turno/valida-pwd-gerente-turno.component */ "./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.ts");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/comanda.service */ "./src/app/restaurante/services/comanda.service.ts");








let ListaProductosComandaComponent = class ListaProductosComandaComponent {
    constructor(snackBar, ls, comandaSrvc, dialog) {
        this.snackBar = snackBar;
        this.ls = ls;
        this.comandaSrvc = comandaSrvc;
        this.dialog = dialog;
        this.listaProductos = [];
        this.noCuenta = null;
        this.listHeight = '450px';
        this.IdComanda = 0;
        this.IdCuenta = 0;
        this.productoRemovedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.esMovil = false;
        this.removeProducto = (p, idx) => {
            this.detalleComanda = {
                detalle_cuenta: p.detalle_cuenta,
                detalle_comanda: p.detalle_comanda,
                articulo: p.id,
                cantidad: +p.cantidad > 1 ? (+p.cantidad) - 1 : 0,
                precio: +p.precio,
                total: +p.cantidad > 1 ? ((+p.cantidad) - 1) * (+p.precio) : 0,
                notas: p.notas
            };
            this.comandaSrvc.saveDetalle(this.IdComanda, this.IdCuenta, this.detalleComanda).subscribe(res => {
                if (res.exito) {
                    p.cantidad = this.detalleComanda.cantidad;
                    this.productoRemovedEv.emit({ listaProductos: this.listaProductos, comanda: res.comanda });
                }
                else {
                    this.snackBar.open(`ERROR: ${res.mensaje}`, 'Comanda', { duration: 3000 });
                }
            });
        };
        this.deleteProductoFromList = (p, idx) => {
            p.cantidad = 0;
            p.notas = '';
            this.removeProducto(p, idx);
        };
        this.deleteProductoFromListAfterPrinted = (p, idx) => {
            const dialogoRef = this.dialog.open(_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_6__["ValidaPwdGerenteTurnoComponent"], {
                width: '20%', disableClose: true
            });
            dialogoRef.afterClosed().subscribe(res => {
                // console.log(res);
                if (res) {
                    this.deleteProductoFromList(p, idx);
                    this.snackBar.open('Se eliminará el producto seleccionado.', 'Comanda', { duration: 5000 });
                }
                else {
                    this.snackBar.open('La contraseña no es correcta', 'Comanda', { duration: 5000 });
                }
            });
        };
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).enmovil || false;
    }
    ngDoCheck() {
        // console.log('Desde lista productos comanda = ', this.listaProductos);
    }
    toggleShowInputNotas(p) {
        p.showInputNotas = !p.showInputNotas;
        if (p.showInputNotas) {
            p.itemListHeight = '140px';
        }
        else {
            p.itemListHeight = '70px';
        }
    }
    doAction(ev) {
        console.log(ev);
    }
};
ListaProductosComandaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] },
    { type: _services_comanda_service__WEBPACK_IMPORTED_MODULE_7__["ComandaService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListaProductosComandaComponent.prototype, "listaProductos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListaProductosComandaComponent.prototype, "noCuenta", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListaProductosComandaComponent.prototype, "listHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListaProductosComandaComponent.prototype, "IdComanda", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListaProductosComandaComponent.prototype, "IdCuenta", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaProductosComandaComponent.prototype, "productoRemovedEv", void 0);
ListaProductosComandaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-productos-comanda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-productos-comanda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-productos-comanda.component.css */ "./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.css")).default]
    })
], ListaProductosComandaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/mesa/mesa.component.css":
/*!****************************************************************!*\
  !*** ./src/app/restaurante/components/mesa/mesa.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divMesa {\n    background-image: url('/assets/img/mesas/table_02.svg');\n    position: absolute;\n    text-align: right;\n    padding-top: 0;\n}\n\nspan {\n    font-size: 12pt;\n    font-weight: bold;\n}\n\n.disponible {\n    background-color: lightgreen;\n}\n\n.ocupada {    \n    background-color: #da332d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9tZXNhL21lc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVEQUF1RDtJQUN2RCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9tZXNhL21lc2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZNZXNhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL21lc2FzL3RhYmxlXzAyLnN2ZycpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGlzcG9uaWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLm9jdXBhZGEgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGEzMzJkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/mesa/mesa.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/restaurante/components/mesa/mesa.component.ts ***!
  \***************************************************************/
/*! exports provided: MesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaComponent", function() { return MesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_mesa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mesa.service */ "./src/app/restaurante/services/mesa.service.ts");




let MesaComponent = class MesaComponent {
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
            estatus: 1
        };
        this.dontAllowDrag = true;
        this.onClickMesa = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnded = (obj) => {
            console.log('Drag ended = ', obj);
            const item = obj.source.element.nativeElement;
            const parentSize = { x: item.offsetParent.scrollWidth, y: item.offsetParent.scrollHeight };
            console.log(`x = ${this.objMesa.offsetLeft}\ny = ${this.objMesa.offsetTop}`);
            console.log('Parent Size = ', parentSize);
            const distancia = obj.distance;
            console.log('Distancia = ', distancia);
            const updMesa = {
                mesa: this.configuracion.mesa,
                area: this.configuracion.area,
                numero: this.configuracion.numero,
                posx: (item.offsetLeft + distancia.x) * 100 / parentSize.x,
                posy: (item.offsetTop + distancia.y) * 100 / parentSize.y,
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
            });
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.objMesa = this.divMesa.nativeElement;
    }
    clickMesa() {
        this.onClickMesa.emit({ mesaSelected: this.configuracion });
    }
};
MesaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_mesa_service__WEBPACK_IMPORTED_MODULE_3__["MesaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MesaComponent.prototype, "configuracion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MesaComponent.prototype, "dontAllowDrag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MesaComponent.prototype, "onClickMesa", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divMesa', { static: false })
], MesaComponent.prototype, "divMesa", void 0);
MesaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mesa',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mesa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/mesa/mesa.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mesa.component.css */ "./src/app/restaurante/components/mesa/mesa.component.css")).default]
    })
], MesaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth { width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9waWRlLWRhdG9zLWN1ZW50YXMvcGlkZS1kYXRvcy1jdWVudGFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxXQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50ZS9jb21wb25lbnRzL3BpZGUtZGF0b3MtY3VlbnRhcy9waWRlLWRhdG9zLWN1ZW50YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsV2lkdGggeyB3aWR0aDogMTAwJTsgfSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PideDatosCuentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PideDatosCuentasComponent", function() { return PideDatosCuentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");







/*
interface ICuenta {
  numero: number;
  nombre: string;
  productos: any[];
}
*/
let PideDatosCuentasComponent = class PideDatosCuentasComponent {
    constructor(dialogRef, data, _snackBar, ls) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._snackBar = _snackBar;
        this.ls = ls;
        this.displayedColumns = ['numero', 'nombre'];
        this.esMovil = false;
        this.terminar = (obj) => {
            const tcn = this.todosConNombre(obj);
            if (tcn < 0) {
                this.dialogRef.close(obj);
            }
            else {
                this._snackBar.open(`Favor ingresar nombre a la cuenta #${obj[tcn].cuenta}...`, 'Cuentas', { duration: 5000 });
            }
        };
        this.setTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.data);
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].usrTokenVar).enmovil || false;
        this.setTableDataSource();
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
        this.data.push({
            cuenta: 0,
            numero: this.data.length + 1,
            nombre: null,
            productos: []
        });
        this.dataSource.data = this.data;
    }
};
PideDatosCuentasComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
PideDatosCuentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pide-datos-cuentas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pide-datos-cuentas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pide-datos-cuentas.component.css */ "./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PideDatosCuentasComponent);



/***/ }),

/***/ "./src/app/restaurante/components/propina/form-propina/form-propina.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/form-propina/form-propina.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcHJvcGluYS9mb3JtLXByb3BpbmEvZm9ybS1wcm9waW5hLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/propina/form-propina/form-propina.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/form-propina/form-propina.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FormPropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropinaComponent", function() { return FormPropinaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_propina_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/propina.service */ "./src/app/restaurante/services/propina.service.ts");
/* harmony import */ var _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/usuario-tipo.service */ "./src/app/admin/services/usuario-tipo.service.ts");





let FormPropinaComponent = class FormPropinaComponent {
    constructor(_snackBar, propinaSrvc, usuarioSrvc) {
        this._snackBar = _snackBar;
        this.propinaSrvc = propinaSrvc;
        this.usuarioSrvc = usuarioSrvc;
        this.propinaSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.usuarios = [];
        this.loadUsuario = () => {
            this.usuarioSrvc.get().subscribe(res => {
                this.usuarios = res;
            });
        };
        this.resetPropina = () => this.propina = {
            propina_distribucion: null, usuario_tipo: null, porcentaje: null, anulado: null
        };
        this.onSubmit = () => {
            this.propinaSrvc.save(this.propina).subscribe(res => {
                //console.log(res);
                if (res.exito) {
                    this.propinaSavedEv.emit();
                    this.resetPropina();
                    this._snackBar.open('Propina agregada...', 'Distribucion de propinas', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Distribucion de propinas', { duration: 3000 });
                }
            });
        };
    }
    ngOnInit() {
        this.loadUsuario();
    }
};
FormPropinaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_propina_service__WEBPACK_IMPORTED_MODULE_3__["PropinaService"] },
    { type: _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioTipoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormPropinaComponent.prototype, "propina", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormPropinaComponent.prototype, "propinaSavedEv", void 0);
FormPropinaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-propina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-propina.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/form-propina/form-propina.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-propina.component.css */ "./src/app/restaurante/components/propina/form-propina/form-propina.component.css")).default]
    })
], FormPropinaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/propina/lista-propina/lista-propina.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/lista-propina/lista-propina.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcHJvcGluYS9saXN0YS1wcm9waW5hL2xpc3RhLXByb3BpbmEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/propina/lista-propina/lista-propina.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/lista-propina/lista-propina.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListaPropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPropinaComponent", function() { return ListaPropinaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _services_propina_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/propina.service */ "./src/app/restaurante/services/propina.service.ts");





let ListaPropinaComponent = class ListaPropinaComponent {
    constructor(propinaSrvc) {
        this.propinaSrvc = propinaSrvc;
        this.displayedColumns = ['propina'];
        this.getPropinaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadPropinas = () => {
            this.propinaSrvc.get().subscribe(lst => {
                if (lst) {
                    if (lst.length > 0) {
                        this.lstPropinas = lst;
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.lstPropinas);
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
};
ListaPropinaComponent.ctorParameters = () => [
    { type: _services_propina_service__WEBPACK_IMPORTED_MODULE_4__["PropinaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaPropinaComponent.prototype, "getPropinaEv", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], ListaPropinaComponent.prototype, "paginator", void 0);
ListaPropinaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-propina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-propina.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/lista-propina/lista-propina.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-propina.component.css */ "./src/app/restaurante/components/propina/lista-propina/lista-propina.component.css")).default]
    })
], ListaPropinaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/propina/propina/propina.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/propina/propina.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcHJvcGluYS9wcm9waW5hL3Byb3BpbmEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/propina/propina/propina.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/propina/propina/propina.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PropinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaComponent", function() { return PropinaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropinaComponent = class PropinaComponent {
    constructor() {
        this.setPropina = (pres) => this.propina = {
            propina_distribucion: pres.propina_distribucion,
            usuario_tipo: pres.usuario_tipo.usuario_tipo,
            porcentaje: pres.porcentaje,
            anulado: pres.anulado
        };
        this.refreshPropinaList = () => this.lstPropinaComponent.loadPropinas();
        this.propina = {
            propina_distribucion: null, usuario_tipo: null, porcentaje: null, anulado: null
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstPropina', { static: false })
], PropinaComponent.prototype, "lstPropinaComponent", void 0);
PropinaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propina',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propina.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/propina/propina/propina.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propina.component.css */ "./src/app/restaurante/components/propina/propina/propina.component.css")).default]
    })
], PropinaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvYXV0b2NvbnN1bHRhL2F1dG9jb25zdWx0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AutoconsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoconsultaComponent", function() { return AutoconsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
/* harmony import */ var _services_autoconsulta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/autoconsulta.service */ "./src/app/restaurante/services/autoconsulta.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let AutoconsultaComponent = class AutoconsultaComponent {
    constructor(snackBar, pdfServicio, autoconsultaSrvc) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.autoconsultaSrvc = autoconsultaSrvc;
        this.params = { campos: [], datos: [] };
        this.titulo = 'Autoconsulta';
        this.campos = [];
        this.fechas = [];
        this.orden = [];
        this.getReporte = () => {
            for (var key in this.params.campos) {
                this.params.datos.push(this.params.campos[key]);
            }
            this.autoconsultaSrvc.getReporte(this.params).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/vnd.ms-excel' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, `${this.titulo}.xls`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
                }
            });
        };
        this.getCampos = (params = {}, tipo = 1) => {
            this.autoconsultaSrvc.getCampos(params).subscribe(res => {
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
};
AutoconsultaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] },
    { type: _services_autoconsulta_service__WEBPACK_IMPORTED_MODULE_4__["AutoconsultaService"] }
];
AutoconsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autoconsulta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autoconsulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autoconsulta.component.css */ "./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.css")).default]
    })
], AutoconsultaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/caja/caja.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/caja/caja.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvY2FqYS9jYWphLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/caja/caja.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/caja/caja.component.ts ***!
  \************************************************************************/
/*! exports provided: CajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajaComponent", function() { return CajaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "./src/app/restaurante/services/tipo-turno.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);






let CajaComponent = class CajaComponent {
    constructor(snackBar, pdfServicio, tipoTurnoSrvc) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.params = {};
        this.titulo = 'Resumen de caja';
        this.tiposTurno = [];
        this.loadTiposTurno = () => {
            this.tipoTurnoSrvc.get().subscribe(res => {
                if (res) {
                    this.tiposTurno = res;
                }
            });
        };
    }
    ngOnInit() {
        this.loadTiposTurno();
    }
    onSubmit() {
        this.pdfServicio.getReporteCaja(this.params).subscribe(res => {
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
};
CajaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] },
    { type: _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_4__["TipoTurnoService"] }
];
CajaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-caja',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./caja.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/caja/caja.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./caja.component.css */ "./src/app/restaurante/components/reportes/caja/caja.component.css")).default]
    })
], CajaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/factura/factura.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/factura/factura.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvZmFjdHVyYS9mYWN0dXJhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/factura/factura.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/factura/factura.component.ts ***!
  \******************************************************************************/
/*! exports provided: FacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function() { return FacturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);





let FacturaComponent = class FacturaComponent {
    constructor(snackBar, pdfServicio) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.params = {};
        this.titulo = 'Facturas';
    }
    ngOnInit() { }
    onSubmit() {
        this.pdfServicio.getReporteFactura(this.params).subscribe(res => {
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
};
FacturaComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] }
];
FacturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-factura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./factura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/factura/factura.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./factura.component.css */ "./src/app/restaurante/components/reportes/factura/factura.component.css")).default]
    })
], FacturaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/propinas/propinas.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/propinas/propinas.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvcHJvcGluYXMvcHJvcGluYXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/propinas/propinas.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/propinas/propinas.component.ts ***!
  \********************************************************************************/
/*! exports provided: PropinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinasComponent", function() { return PropinasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);





let PropinasComponent = class PropinasComponent {
    constructor(snackBar, pdfServicio) {
        this.snackBar = snackBar;
        this.pdfServicio = pdfServicio;
        this.params = {};
        this.titulo = 'Propinas';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.pdfServicio.getReportePropina(this.params).subscribe(res => {
            if (res) {
                const blob = new Blob([res], { type: 'application/pdf' });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, `${this.titulo}.pdf`);
            }
            else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }
        });
    }
};
PropinasComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ReportePdfService"] }
];
PropinasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-propinas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./propinas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/propinas/propinas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./propinas.component.css */ "./src/app/restaurante/components/reportes/propinas/propinas.component.css")).default]
    })
], PropinasComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".numWidth {\r\n    width: 10%;\r\n}\r\n\r\ntr {\r\n    border: none;\r\n}\r\n\r\nth, td {\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9yZXBvcnRlcy9ycHQtdmVudGFzL3Bvci1hcnRpY3Vsby9wb3ItYXJ0aWN1bG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9yZXBvcnRlcy9ycHQtdmVudGFzL3Bvci1hcnRpY3Vsby9wb3ItYXJ0aWN1bG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1XaWR0aCB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PorArticuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorArticuloComponent", function() { return PorArticuloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PorArticuloComponent = class PorArticuloComponent {
    constructor() {
        this.params = {};
        this.data = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorArticuloComponent.prototype, "params", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorArticuloComponent.prototype, "data", void 0);
PorArticuloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-por-articulo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./por-articulo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./por-articulo.component.css */ "./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.css")).default]
    })
], PorArticuloComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".numWidth {\r\n    width: 10%;\r\n}\r\n\r\ntr {\r\n    border: none;\r\n}\r\n\r\nth, td {\r\n    padding-top: 0.25em;\r\n    padding-bottom: 0.25em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy9yZXBvcnRlcy9ycHQtdmVudGFzL3Bvci1jYXRlZ29yaWEvcG9yLWNhdGVnb3JpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9yZXN0YXVyYW50ZS9jb21wb25lbnRzL3JlcG9ydGVzL3JwdC12ZW50YXMvcG9yLWNhdGVnb3JpYS9wb3ItY2F0ZWdvcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtV2lkdGgge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxudHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PorCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PorCategoriaComponent", function() { return PorCategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PorCategoriaComponent = class PorCategoriaComponent {
    constructor() {
        this.params = {};
        this.data = [];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCategoriaComponent.prototype, "params", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PorCategoriaComponent.prototype, "data", void 0);
PorCategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-por-categoria',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./por-categoria.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./por-categoria.component.css */ "./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.css")).default]
    })
], PorCategoriaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvcnB0LXZlbnRhcy9ycHQtdmVudGFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.ts ***!
  \************************************************************************************/
/*! exports provided: RptVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RptVentasComponent", function() { return RptVentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_reporte_ventas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/reporte-ventas.service */ "./src/app/restaurante/services/reporte-ventas.service.ts");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "./src/app/restaurante/services/tipo-turno.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);








let RptVentasComponent = class RptVentasComponent {
    constructor(snackBar, rptVentasSrvc, tipoTurnoSrvc) {
        this.snackBar = snackBar;
        this.rptVentasSrvc = rptVentasSrvc;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.tiposReporte = [];
        this.params = {};
        this.paramsToSend = {};
        this.msgGenerandoReporte = null;
        this.porCategoria = [];
        this.porArticulo = [];
        this.tiposTurno = [];
        this.tituloCategoria = "Ventas por categoria";
        this.tituloArticulo = "Ventas por articulo";
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
                fdel: moment__WEBPACK_IMPORTED_MODULE_4__().startOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].dbDateFormat),
                fal: moment__WEBPACK_IMPORTED_MODULE_4__().endOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].dbDateFormat)
            };
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
                    this.msgGenerandoReporte += 'EXCEL.';
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
        this.getPorCategoriaPdf = () => {
            this.cleanParams();
            this.rptVentasSrvc.porCategoriaPdf(this.paramsToSend).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, `${this.tituloCategoria}.pdf`);
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', this.tituloCategoria, { duration: 3000 });
                }
            });
        };
        this.getPorArticuloPdf = () => {
            this.cleanParams();
            this.rptVentasSrvc.porArticuloPdf(this.paramsToSend).subscribe(res => {
                if (res) {
                    const blob = new Blob([res], { type: 'application/pdf' });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, `${this.tituloArticulo}.pdf`);
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
            this.cleanParams();
            this.rptVentasSrvc.porCategoria(this.paramsToSend).subscribe(res => {
                if (res) {
                    this.porCategoria = res;
                }
                else {
                    this.snackBar.open('No se pudo generar el reporte...', 'Ventas por categoría', { duration: 3000 });
                }
            });
        };
        this.getPorArticuloEnPantalla = () => {
            this.cleanParams();
            this.rptVentasSrvc.porArticulo(this.paramsToSend).subscribe(res => {
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
    }
};
RptVentasComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_reporte_ventas_service__WEBPACK_IMPORTED_MODULE_5__["ReporteVentasService"] },
    { type: _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_6__["TipoTurnoService"] }
];
RptVentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rpt-ventas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rpt-ventas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rpt-ventas.component.css */ "./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.css")).default]
    })
], RptVentasComponent);



/***/ }),

/***/ "./src/app/restaurante/components/reportes/turnos/turnos.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/turnos/turnos.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvcmVwb3J0ZXMvdHVybm9zL3R1cm5vcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurante/components/reportes/turnos/turnos.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/reportes/turnos/turnos.component.ts ***!
  \****************************************************************************/
/*! exports provided: TurnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnosComponent", function() { return TurnosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




let TurnosComponent = class TurnosComponent {
    constructor() {
        this.params = {};
        this.configParams = {
            isRequiredFDel: true, isRequiredFAl: true
        };
        this.configBotones = {
            isHtmlDisabled: false, isPdfDisabled: false, isExcelDisabled: false
        };
        this.resetParams = () => {
            this.params = {
                fdel: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat),
                fal: moment__WEBPACK_IMPORTED_MODULE_3__().endOf('week').format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat)
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
};
TurnosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-turnos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./turnos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/reportes/turnos/turnos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./turnos.component.css */ "./src/app/restaurante/components/reportes/turnos/turnos.component.css")).default]
    })
], TurnosComponent);



/***/ }),

/***/ "./src/app/restaurante/components/tran-areas/tran-areas.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-areas/tran-areas.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divAreaMesa {\n    width: 100%;\n    height: 700px;\n    background-color: #c7c7c749;\n}\n\nmat-sidenav {\n    width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90cmFuLWFyZWFzL3RyYW4tYXJlYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90cmFuLWFyZWFzL3RyYW4tYXJlYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZBcmVhTWVzYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjN2M3NDk7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogNzUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/tran-areas/tran-areas.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-areas/tran-areas.component.ts ***!
  \***************************************************************************/
/*! exports provided: TranAreasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranAreasComponent", function() { return TranAreasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abrir-mesa/abrir-mesa.component */ "./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.ts");
/* harmony import */ var _services_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/area.service */ "./src/app/restaurante/services/area.service.ts");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/comanda.service */ "./src/app/restaurante/services/comanda.service.ts");









let TranAreasComponent = class TranAreasComponent {
    constructor(dialog, _snackBar, ls, areaSrvc, comandaSrvc) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.ls = ls;
        this.areaSrvc = areaSrvc;
        this.comandaSrvc = comandaSrvc;
        this.divSize = { h: 0, w: 0 };
        this.lstTabsAreas = [];
        this.resetMesaSeleccionada = () => this.mesaSeleccionada = {
            comanda: null, usuario: null, sede: null, estatus: null,
            mesa: {
                mesa: null,
                area: { area: null, sede: null, area_padre: null, nombre: null },
                numero: null, posx: null, posy: null, tamanio: null, estatus: null
            },
            cuentas: []
        };
        this.loadAreas = () => {
            this.areaSrvc.get({ sede: (+this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe((res) => {
                this.lstTabsAreas = res;
            });
        };
        this.onResize = (event) => this.setDivSize();
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
        this.toggleRightSidenav = () => this.rightSidenav.toggle();
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
            this.loadComandaMesa(this.mesaSeleccionada.mesa, false);
        };
        this.checkEstatusMesa = () => {
            // console.log('MESA = ', this.mesaSeleccionada);
            if (!!this.mesaSeleccionada && !!this.mesaSeleccionada.cuentas && this.mesaSeleccionada.cuentas.length > 0) {
                const abiertas = this.mesaSeleccionada.cuentas.filter(cta => +cta.cerrada === 0).length || 0;
                // console.log(`ABIERTAS = ${abiertas}`);
                if (abiertas === 0) {
                    this.setEstatusMesa({
                        area: this.mesaSeleccionada.mesa.area.area,
                        mesa: this.mesaSeleccionada.mesa.mesa
                    }, 1);
                }
            }
        };
        this.loadComandaMesa = (obj, shouldToggle = true) => {
            // console.log(obj);
            this.comandaSrvc.getComandaDeMesa(obj.mesa).subscribe((res) => {
                // console.log(res); return;
                if (res) {
                    if (!Array.isArray(res)) {
                        this.mesaSeleccionada = res;
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
                    }
                    // console.log('MESA SELECTED = ', this.mesaSeleccionada);
                    this.checkEstatusMesa();
                    if (shouldToggle) {
                        const cuentas = this.mesaSeleccionada.cuentas;
                        this.snTrancomanda.llenaProductosSeleccionados(this.mesaSeleccionada);
                        this.toggleRightSidenav();
                        if (cuentas.length === 1) {
                            this.snTrancomanda.setSelectedCuenta(cuentas[0].numero);
                        }
                    }
                }
                else {
                    this._snackBar.open(`Problema al mostrar la comanda de la mesa #${obj.numero}`, 'ERROR', { duration: 5000 });
                }
            });
        };
    }
    ngOnInit() {
        this.loadAreas();
        this.resetMesaSeleccionada();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setDivSize();
            this.snTrancomanda.resetMesaEnUso();
        }, 600);
    }
    setDivSize() {
        this.divSize.w = this.pestania.nativeElement.offsetWidth;
        this.divSize.h = this.pestania.nativeElement.offsetHeight;
    }
    onClickMesa(m) {
        // console.log(m.mesaSelected); return;
        switch (+m.mesaSelected.estatus) {
            case 1:
                this.openAbrirMesaDialog(m.mesaSelected);
                break;
            case 2:
                this.loadComandaMesa(m.mesaSelected);
                break;
        }
    }
    openAbrirMesaDialog(m) {
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
            cuentas: [
                {
                    numero: 1,
                    nombre: 'Única',
                    productos: []
                }
            ]
        };
        const abrirMesaRef = this.dialog.open(_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_6__["AbrirMesaComponent"], {
            width: '50%',
            height: 'auto',
            disableClose: true,
            data: this.mesaSeleccionadaToOpen
        });
        abrirMesaRef.afterClosed().subscribe((result) => {
            if (result) {
                this.mesaSeleccionadaToOpen = result;
                // console.log(JSON.stringify(this.mesaSeleccionada));
                this.comandaSrvc.save(this.mesaSeleccionadaToOpen).subscribe(res => {
                    // console.log(res);
                    if (res.exito) {
                        this.mesaSeleccionada = res.comanda;
                        // console.log('m', m);
                        this.setEstatusMesa(m, +res.comanda.mesa.estatus);
                        this.toggleRightSidenav();
                    }
                    else {
                        this._snackBar.open(`${res.mensaje}`, 'ERROR', { duration: 5000 });
                    }
                });
            }
        });
    }
};
TranAreasComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] },
    { type: _services_area_service__WEBPACK_IMPORTED_MODULE_7__["AreaService"] },
    { type: _services_comanda_service__WEBPACK_IMPORTED_MODULE_8__["ComandaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matTabArea', { static: false })
], TranAreasComponent.prototype, "pestania", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rightSidenav', { static: false })
], TranAreasComponent.prototype, "rightSidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabArea', { static: false })
], TranAreasComponent.prototype, "tabArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('snTranComanda', { static: false })
], TranAreasComponent.prototype, "snTrancomanda", void 0);
TranAreasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tran-areas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tran-areas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-areas/tran-areas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tran-areas.component.css */ "./src/app/restaurante/components/tran-areas/tran-areas.component.css")).default]
    })
], TranAreasComponent);



/***/ }),

/***/ "./src/app/restaurante/components/tran-comanda/tran-comanda.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-comanda/tran-comanda.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matSideNavContainer {\n    height: 100%;\n}\n\n.divFullSize {\n    width: 100%;\n    height: 650px;\n}\n\n.col {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n\n.btnAccionComanda {\n    width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90cmFuLWNvbWFuZGEvdHJhbi1jb21hbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHJhbi1jb21hbmRhL3RyYW4tY29tYW5kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdFNpZGVOYXZDb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRpdkZ1bGxTaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY1MHB4O1xufVxuXG4uY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi5idG5BY2Npb25Db21hbmRhIHtcbiAgICB3aWR0aDogMTI1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/restaurante/components/tran-comanda/tran-comanda.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurante/components/tran-comanda/tran-comanda.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TranComandaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranComandaComponent", function() { return TranComandaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unir-cuenta/unir-cuenta.component */ "./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.ts");
/* harmony import */ var _pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pos/components/cobrar-pedido/cobrar-pedido.component */ "./src/app/pos/components/cobrar-pedido/cobrar-pedido.component.ts");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/comanda.service */ "./src/app/restaurante/services/comanda.service.ts");
/* harmony import */ var _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/reporte-pdf.service */ "./src/app/restaurante/services/reporte-pdf.service.ts");






// import { SignalRService } from '../../../shared/services/signal-r.service';






let TranComandaComponent = class TranComandaComponent {
    constructor(router, dialog, _snackBar, comandaSrvc, socket, 
    // private signalRSrvc: SignalRService
    ls, pdfServicio) {
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.comandaSrvc = comandaSrvc;
        this.socket = socket;
        this.ls = ls;
        this.pdfServicio = pdfServicio;
        // public noCuentaSeleccionada: number = null;
        this.showPortalComanda = false;
        this.showPortalCuenta = false;
        this.noComanda = 0;
        this.sumCuenta = 0;
        this.resetMesaEnUso = () => this.mesaEnUso = {
            comanda: null, usuario: null, sede: null, estatus: null,
            mesa: {
                mesa: null,
                area: { area: null, sede: null, area_padre: null, nombre: null },
                numero: null, posx: null, posy: null, tamanio: null, estatus: null
            },
            cuentas: []
        };
        this.resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
        this.resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];
        this.resetCuentaActiva = () => this.cuentaActiva = { cuenta: null, numero: null, nombre: null, productos: [] };
        this.llenaProductosSeleccionados = (conQueMesa = this.mesaEnUso) => {
            if (this.mesaEnUso.comanda == null) {
                this.mesaEnUso = conQueMesa;
            }
            this.lstProductosSeleccionados = [];
            for (let i = 0; i < conQueMesa.cuentas.length; i++) {
                const cta = conQueMesa.cuentas[i];
                for (let j = 0; j < cta.productos.length; j++) {
                    const p = cta.productos[j];
                    // console.log(p);
                    this.lstProductosSeleccionados.push({
                        id: +p.articulo.articulo,
                        nombre: p.articulo.descripcion,
                        cuenta: +p.numero_cuenta || 1,
                        cantidad: +p.cantidad,
                        impreso: +p.impreso,
                        precio: parseFloat(p.precio) || 10.00,
                        total: parseFloat(p.total) || (parseFloat(p.cantidad) * parseFloat(p.precio)),
                        notas: p.notas || '',
                        showInputNotas: false,
                        itemListHeight: '70px',
                        detalle_comanda: +p.detalle_comanda,
                        detalle_cuenta: +p.detalle_cuenta,
                        impresora: p.articulo.impresora
                    });
                }
            }
            // console.log('SELECCIONADOS = ', this.lstProductosSeleccionados);
        };
        this.cerrarMesa = () => {
            this.comandaSrvc.cerrarMesa(this.mesaEnUso.mesa.mesa).subscribe(res => {
                this._snackBar.open(res.mensaje, 'Comanda', { duration: 3000 });
            });
        };
        this.printToBT = (msgToPrint = '') => {
            const AppHref = `com.restouch.impresion://impresion/${msgToPrint}`;
            const wref = window.open(AppHref, 'PrntBT', 'height=200,width=200,menubar=no,location=no,resizable=no,scrollbars=no,status=no');
            setTimeout(() => wref.close(), 1000);
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
                    this._snackBar.open('No se pudo generar la comanda...', 'Comanda', { duration: 3000 });
                }
            });
        };
        this.sumaDetalle = (detalle) => {
            let total = 0.00;
            for (let i = 0; i < detalle.length; i++) {
                total += detalle[i].total || 0.00;
            }
            return total;
        };
        this.cambiarEstatusCuenta = (obj) => {
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +obj.cuenta);
            this.mesaEnUso.cuentas[idxCta].cerrada = +obj.cerrada;
        };
        this.esCajero = (roles = []) => roles.find(r => r.trim().toLocaleLowerCase() === 'cajero');
    }
    ngOnInit() {
        this.resetMesaEnUso();
        this.resetLstProductosSeleccionados();
        this.resetLstProductosDeCuenta();
        this.resetCuentaActiva();
        this.noComanda = this.mesaEnUso.comanda || 0;
        this.llenaProductosSeleccionados();
        // this.signalRSrvc.startConnection(`restaurante_01`);
        // this.signalRSrvc.addBroadcastDataListener();
        if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).sede_uuid) {
            this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).sede_uuid);
        }
        // console.log('MESA EN USO = ', this.mesaEnUso);
    }
    setSelectedCuenta(noCuenta) {
        this.cuentaActiva = this.mesaEnUso.cuentas.find((c) => +c.numero === +noCuenta);
        this.setLstProductosDeCuenta();
    }
    setSumaCuenta(lista) {
        let suma = 0.00;
        for (let i = 0; i < lista.length; i++) {
            suma += (lista[i].precio * lista[i].cantidad);
        }
        this.sumCuenta = suma;
    }
    setLstProductosDeCuenta() {
        this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => p.cuenta == +this.cuentaActiva.numero);
        // console.log(this.lstProductosDeCuenta);
    }
    addProductoSelected(producto) {
        // console.log(producto); return;
        if (+this.cuentaActiva.numero) {
            const idx = this.lstProductosSeleccionados
                .findIndex(p => p.id == producto.id && p.cuenta == +this.cuentaActiva.numero && +p.impreso === 0);
            if (idx < 0) {
                this.detalleComanda = {
                    articulo: producto.id, cantidad: 1, precio: producto.precio, total: 1 * producto.precio, notas: ''
                };
                this.comandaSrvc.saveDetalle(this.mesaEnUso.comanda, this.cuentaActiva.cuenta, this.detalleComanda).subscribe(res => {
                    //console.log('DETALLE COMANDA = ', res);
                    if (res.exito) {
                        /*
                        this.lstProductosSeleccionados.push({
                          id: producto.id, nombre: producto.nombre, cuenta: +this.cuentaActiva.numero, cantidad: 1, impreso: 0,
                          precio: producto.precio, notas: '', showInputNotas: false, itemListHeight: '70px', total: 1 * producto.precio,
                          impresora: producto.impresora
                        });
                        */
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this._snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
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
                        /*
                        this.lstProductosSeleccionados[idx].cantidad++;
                        this.lstProductosSeleccionados[idx].total =
                          this.lstProductosSeleccionados[idx].cantidad * this.lstProductosSeleccionados[idx].precio;
                        */
                        this.mesaEnUso = res.comanda;
                        this.llenaProductosSeleccionados(this.mesaEnUso);
                        this.setSelectedCuenta(+this.cuentaActiva.numero);
                    }
                    else {
                        this._snackBar.open(`ERROR:${res.mensaje}`, 'Comanda', { duration: 3000 });
                    }
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
        let tmp = [];
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
    printComanda(toPdf = false) {
        this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => +p.impreso === 0 && +p.cantidad > 0);
        // console.log('Productos a imprimir = ', this.lstProductosAImprimir);
        if (this.lstProductosAImprimir.length > 0) {
            this.lstProductosDeCuenta.map(p => p.impreso = 1);
            this.noComanda = this.mesaEnUso.comanda;
            /*this.windowConfig =
            { width: 325, height: 550, left: 200, top: 200, menubar: 'no', resizable: 'no', titlebar: 'no', toolbar: 'no' };
            */
            // this.showPortalComanda = true;
            this.cuentaActiva.productos = this.prepProductosComanda(this.lstProductosDeCuenta);
            const idxCta = this.mesaEnUso.cuentas.findIndex(c => +c.cuenta === +this.cuentaActiva.cuenta);
            if (idxCta > -1) {
                this.mesaEnUso.cuentas[idxCta] = this.cuentaActiva;
                const objCmd = {
                    area: this.mesaEnUso.mesa.area.area,
                    mesa: this.mesaEnUso.mesa.mesa,
                    mesero: this.mesaEnUso.usuario,
                    comanda: this.mesaEnUso.comanda,
                    cuentas: this.mesaEnUso.cuentas
                };
                // console.log('Comanda a guardar = ', objCmd);
                this.comandaSrvc.save(objCmd).subscribe((res) => {
                    // console.log('Respuesta del save = ', res);
                    if (res.exito) {
                        this.comandaSrvc.setProductoImpreso(this.cuentaActiva.cuenta).subscribe(resImp => {
                            // console.log('Respuesta de poner impreso = ', resImp);
                            this.llenaProductosSeleccionados(resImp.comanda);
                            this.setSelectedCuenta(this.cuentaActiva.numero);
                            this._snackBar.open('Cuenta actualizada', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                        });
                    }
                    else {
                        this._snackBar.open(`ERROR: ${res.mensaje}`, `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
                    }
                });
            }
            const AImpresoraNormal = this.lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 0);
            const AImpresoraBT = this.lstProductosAImprimir.filter(p => +p.impresora.bluetooth === 1);
            if (!toPdf) {
                if (AImpresoraNormal.length > 0) {
                    this.socket.emit('print:comanda', `${JSON.stringify({
                        Tipo: 'Comanda',
                        Nombre: this.cuentaActiva.nombre,
                        Numero: this.noComanda,
                        DetalleCuenta: AImpresoraNormal,
                        Total: null
                    })}`);
                }
                if (AImpresoraBT.length > 0) {
                    this.printToBT(JSON.stringify({
                        Tipo: 'Comanda',
                        Nombre: this.cuentaActiva.nombre,
                        Numero: this.noComanda,
                        DetalleCuenta: AImpresoraBT,
                        Total: null
                    }));
                }
            }
            else {
                this.printComandaPDF();
            }
        }
        else {
            this._snackBar.open('Nada para enviar...', `Cuenta #${this.cuentaActiva.numero}`, { duration: 3000 });
        }
    }
    printCuenta() {
        this.lstProductosAImprimir = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
        this.setSumaCuenta(this.lstProductosAImprimir);
        /*
        const msgToSocket = JSON.stringify({
          Tipo: 'Cuenta',
          Nombre: this.cuentaActiva.nombre,
          Numero: null,
          DetalleCuenta: this.lstProductosAImprimir,
          Total: this.sumaDetalle(this.lstProductosAImprimir)
        });
        console.log('MENSAJE = ', msgToSocket);
        */
        const totalCuenta = this.sumaDetalle(this.lstProductosAImprimir);
        this.socket.emit(`print:cuenta`, `${JSON.stringify({
            Tipo: 'Cuenta',
            Nombre: this.cuentaActiva.nombre,
            Numero: null,
            DetalleCuenta: this.lstProductosAImprimir,
            Total: totalCuenta,
            Empresa: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).empresa,
            Restaurante: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].usrTokenVar).restaurante,
            PropinaSugerida: (totalCuenta * 0.10).toFixed(2)
        })}`);
    }
    unirCuentas() {
        const unirCuentaRef = this.dialog.open(_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_8__["UnirCuentaComponent"], {
            width: '55%',
            data: { lstProductosSeleccionados: this.lstProductosSeleccionados, mesaEnUso: this.mesaEnUso }
        });
        unirCuentaRef.afterClosed().subscribe(result => {
            if (result) {
                this.lstProductosSeleccionados = result;
                this.setLstProductosDeCuenta();
            }
        });
    }
    cobrarCuenta() {
        const productosACobrar = this.lstProductosDeCuenta.filter(p => +p.impreso === 1);
        if (productosACobrar.length > 0) {
            const cobrarCtaRef = this.dialog.open(_pos_components_cobrar_pedido_cobrar_pedido_component__WEBPACK_IMPORTED_MODULE_9__["CobrarPedidoComponent"], {
                width: '95%',
                data: {
                    cuenta: this.cuentaActiva.nombre,
                    idcuenta: this.cuentaActiva.cuenta,
                    productosACobrar,
                    porcentajePropina: 0.00
                }
            });
            cobrarCtaRef.afterClosed().subscribe(res => {
                if (res) {
                    // console.log(res);
                    this.cambiarEstatusCuenta(res);
                    // this.socket.emit('print:doccontable', JSON.stringify(res));
                }
            });
        }
        else {
            this._snackBar.open('Cobro', 'Sin productos a cobrar.', { duration: 3000 });
        }
    }
};
TranComandaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _services_comanda_service__WEBPACK_IMPORTED_MODULE_10__["ComandaService"] },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"] },
    { type: _services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_11__["ReportePdfService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TranComandaComponent.prototype, "mesaEnUso", void 0);
TranComandaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tran-comanda',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tran-comanda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/tran-comanda/tran-comanda.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tran-comanda.component.css */ "./src/app/restaurante/components/tran-comanda/tran-comanda.component.css")).default]
    })
], TranComandaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHVybm8tdGlwby9mb3JtLXR1cm5vL2Zvcm0tdHVybm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FormTurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTurnoTipoComponent", function() { return FormTurnoTipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "./src/app/restaurante/services/tipo-turno.service.ts");




let FormTurnoTipoComponent = class FormTurnoTipoComponent {
    constructor(_snackBar, turnoSrvc) {
        this._snackBar = _snackBar;
        this.turnoSrvc = turnoSrvc;
        this.turnoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
};
FormTurnoTipoComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_3__["TipoTurnoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormTurnoTipoComponent.prototype, "turno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormTurnoTipoComponent.prototype, "turnoSavedEv", void 0);
FormTurnoTipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-turno-tipo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-turno.component.css */ "./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.css")).default]
    })
], FormTurnoTipoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHVybm8tdGlwby9saXN0YS10dXJuby9saXN0YS10dXJuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListaTurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTurnoTipoComponent", function() { return ListaTurnoTipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "./src/app/restaurante/services/tipo-turno.service.ts");




let ListaTurnoTipoComponent = class ListaTurnoTipoComponent {
    constructor(turnoSrvc) {
        this.turnoSrvc = turnoSrvc;
        this.getTurnoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["MultiFiltro"])(this.lstTurnos, this.txtFiltro);
            this.length = tmpList.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstTurnos.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(this.lstTurnos, this.pageSize, this.pageIndex + 1);
        }
    }
};
ListaTurnoTipoComponent.ctorParameters = () => [
    { type: _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_3__["TipoTurnoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaTurnoTipoComponent.prototype, "getTurnoEv", void 0);
ListaTurnoTipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-turno-tipo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-turno.component.css */ "./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.css")).default]
    })
], ListaTurnoTipoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/turno/turno.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/turno/turno.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHVybm8tdGlwby90dXJuby90dXJuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurante/components/turno-tipo/turno/turno.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurante/components/turno-tipo/turno/turno.component.ts ***!
  \****************************************************************************/
/*! exports provided: TurnoTipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoTipoComponent", function() { return TurnoTipoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TurnoTipoComponent = class TurnoTipoComponent {
    constructor() {
        this.setTurno = (cli) => this.turno = cli;
        this.refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();
        this.turno = {
            turno_tipo: null, descripcion: null, activo: 1
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstTurno', { static: false })
], TurnoTipoComponent.prototype, "lstTurnoComponent", void 0);
TurnoTipoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-turno-tipo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno-tipo/turno/turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./turno.component.css */ "./src/app/restaurante/components/turno-tipo/turno/turno.component.css")).default]
    })
], TurnoTipoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno/form-turno/form-turno.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/form-turno/form-turno.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-width {\n    width: 100%;\n}\n\n.iconFontSize {\n    font-size: 34pt !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90dXJuby9mb3JtLXR1cm5vL2Zvcm0tdHVybm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHVybm8vZm9ybS10dXJuby9mb3JtLXR1cm5vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMzRwdCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/restaurante/components/turno/form-turno/form-turno.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/form-turno/form-turno.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTurnoComponent", function() { return FormTurnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/tipo-turno.service */ "./src/app/restaurante/services/tipo-turno.service.ts");
/* harmony import */ var _services_turno_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/turno.service */ "./src/app/restaurante/services/turno.service.ts");
/* harmony import */ var _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../admin/services/usuario-tipo.service */ "./src/app/admin/services/usuario-tipo.service.ts");
/* harmony import */ var _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../admin/services/usuario.service */ "./src/app/admin/services/usuario.service.ts");













let FormTurnoComponent = class FormTurnoComponent {
    constructor(_snackBar, ls, tipoTurnoSrvc, turnoSrvc, usuarioTipoSrvc, usuarioSrvc, dialog) {
        this._snackBar = _snackBar;
        this.ls = ls;
        this.tipoTurnoSrvc = tipoTurnoSrvc;
        this.turnoSrvc = turnoSrvc;
        this.usuarioTipoSrvc = usuarioTipoSrvc;
        this.usuarioSrvc = usuarioSrvc;
        this.dialog = dialog;
        this.turnoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showTurnoForm = true;
        this.showDetalleTurnoForm = true;
        this.detallesTurno = [];
        this.displayedColumns = ['usuario_tipo', 'usuario', 'editItem'];
        this.tiposTurno = [];
        this.tiposUsuario = [];
        this.usuarios = [];
        this.esMovil = false;
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
            this.usuarioSrvc.get({ sede: (this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(res => {
                if (res) {
                    this.usuarios = res;
                }
            });
        };
        this.resetTurno = () => {
            this.turno = {
                turno: null, turno_tipo: null, inicio: moment__WEBPACK_IMPORTED_MODULE_8__().format(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].dbDateTimeFormat), fin: null
            };
            this.resetDetalleTurno();
        };
        this.saveInfoTurno = () => {
            this.turnoSrvc.save(this.turno).subscribe(res => {
                if (res.exito) {
                    this.turnoSavedEv.emit();
                    this.resetTurno();
                    this.turno = res.turno;
                    this._snackBar.open('Turno modificado con éxito...', 'Turno', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.onSubmit = () => {
            if (moment__WEBPACK_IMPORTED_MODULE_8__(this.turno.fin).isValid()) {
                const dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                    maxWidth: "400px",
                    data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModel"]('Cerrar turno', 'La fecha de finalización cerrará el turno. ¿Desea continuar?', 'Sí', 'No')
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
                //console.log(res);
                if (res) {
                    this.detallesTurno = res;
                    this.updateTableDataSource();
                }
            });
        };
        this.onSubmitDetail = () => {
            this.detalleTurno.turno = this.turno.turno;
            //console.log(this.detalleTurno); return;
            this.turnoSrvc.saveDetalle(this.detalleTurno).subscribe(res => {
                //console.log(res);
                if (res.exito) {
                    this.loadDetalleTurno();
                    this.resetDetalleTurno();
                    this._snackBar.open('Usuario agregado al turno...', 'Turno', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.anularDetalleTurno = (obj) => {
            // console.log(obj);
            this.turnoSrvc.anularDetalle({ turno: obj.turno, usuario: obj.usuario.usuario, usuario_tipo: obj.usuario_tipo.usuario_tipo }).subscribe(res => {
                // console.log(res);
                if (res.exito) {
                    this.loadDetalleTurno();
                    this.resetDetalleTurno();
                    this._snackBar.open('Se quitó al usuario del turno...', 'Turno', { duration: 3000 });
                }
                else {
                    this._snackBar.open(`ERROR: ${res.mensaje}`, 'Turno', { duration: 3000 });
                }
            });
        };
        this.updateTableDataSource = () => this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.detallesTurno);
        this.getNow = () => moment__WEBPACK_IMPORTED_MODULE_8__().format(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].dbDateTimeFormat);
    }
    ngOnInit() {
        this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].usrTokenVar).enmovil || false;
        this.resetTurno();
        this.loadTiposTurno();
        this.loadTiposUsuario();
        this.loadUsuarios();
    }
};
FormTurnoComponent.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] },
    { type: _services_tipo_turno_service__WEBPACK_IMPORTED_MODULE_9__["TipoTurnoService"] },
    { type: _services_turno_service__WEBPACK_IMPORTED_MODULE_10__["TurnoService"] },
    { type: _admin_services_usuario_tipo_service__WEBPACK_IMPORTED_MODULE_11__["UsuarioTipoService"] },
    { type: _admin_services_usuario_service__WEBPACK_IMPORTED_MODULE_12__["UsuarioService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FormTurnoComponent.prototype, "turno", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FormTurnoComponent.prototype, "turnoSavedEv", void 0);
FormTurnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-turno',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/form-turno/form-turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-turno.component.css */ "./src/app/restaurante/components/turno/form-turno/form-turno.component.css")).default]
    })
], FormTurnoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno/lista-turno/lista-turno.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/lista-turno/lista-turno.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullWidth {\n    width: 100% !important;\n}\n\ntable {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90dXJuby9saXN0YS10dXJuby9saXN0YS10dXJuby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcmVzdGF1cmFudGUvY29tcG9uZW50cy90dXJuby9saXN0YS10dXJuby9saXN0YS10dXJuby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/restaurante/components/turno/lista-turno/lista-turno.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/lista-turno/lista-turno.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaTurnoComponent", function() { return ListaTurnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var _services_turno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/turno.service */ "./src/app/restaurante/services/turno.service.ts");





let ListaTurnoComponent = class ListaTurnoComponent {
    constructor(ls, turnoSrvc) {
        this.ls = ls;
        this.turnoSrvc = turnoSrvc;
        this.getTurnoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 15];
        this.pageIndex = 0;
        this.txtFiltro = '';
        this.loadTurnos = () => {
            this.turnoSrvc.get({ sede: (+this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede || 0) }).subscribe(lst => {
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
            const tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["MultiFiltro"])(this.lstTurnos, this.txtFiltro);
            this.length = tmpList.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
        }
        else {
            this.length = this.lstTurnos.length;
            this.lstTurnosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_2__["PaginarArray"])(this.lstTurnos, this.pageSize, this.pageIndex + 1);
        }
    }
};
ListaTurnoComponent.ctorParameters = () => [
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] },
    { type: _services_turno_service__WEBPACK_IMPORTED_MODULE_4__["TurnoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListaTurnoComponent.prototype, "getTurnoEv", void 0);
ListaTurnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-turno',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lista-turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/lista-turno/lista-turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lista-turno.component.css */ "./src/app/restaurante/components/turno/lista-turno/lista-turno.component.css")).default]
    })
], ListaTurnoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/turno/turno/turno.component.css":
/*!************************************************************************!*\
  !*** ./src/app/restaurante/components/turno/turno/turno.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdHVybm8vdHVybm8vdHVybm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/turno/turno/turno.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/restaurante/components/turno/turno/turno.component.ts ***!
  \***********************************************************************/
/*! exports provided: TurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoComponent", function() { return TurnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


//import { LocalstorageService } from '../../../../admin/services/localstorage.service';


let TurnoComponent = class TurnoComponent {
    constructor(
    //private ls: LocalstorageService
    ) {
        this.setTurno = (trn) => {
            //console.log(trn); 
            this.turno = trn;
            this.frmTurno.loadDetalleTurno(+this.turno.turno);
        };
        this.refreshTurnoList = () => this.lstTurnoComponent.loadTurnos();
        this.turno = {
            turno: null, turno_tipo: null, inicio: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateTimeFormat), fin: null
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lstTurno', { static: false })
], TurnoComponent.prototype, "lstTurnoComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('frmTurno', { static: false })
], TurnoComponent.prototype, "frmTurno", void 0);
TurnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-turno',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/turno/turno/turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./turno.component.css */ "./src/app/restaurante/components/turno/turno/turno.component.css")).default]
    })
], TurnoComponent);



/***/ }),

/***/ "./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdW5pci1jdWVudGEvdW5pci1jdWVudGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UnirCuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnirCuentaComponent", function() { return UnirCuentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let UnirCuentaComponent = class UnirCuentaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.cuentaDe = null;
        this.cuentaA = null;
    }
    ngOnInit() {
        console.log('Productos enviados = ', this.data.lstProductosSeleccionados);
    }
    cancelar() {
        this.dialogRef.close();
    }
    unirCuentas(deCuenta = 1, aCuenta = 1) {
        console.log(`De cuenta = ${deCuenta} a cuenta ${aCuenta}`);
        if (+deCuenta !== +aCuenta) {
            console.log('deCuenta y aCuenta son diferentes');
            console.log('Productos seleccionados (Antes) = ', this.data.lstProductosSeleccionados);
            this.data.lstProductosSeleccionados.map((p) => {
                if (+p.cuenta === +deCuenta) {
                    p.cuenta = aCuenta;
                }
            });
            console.log('Productos seleccionados (Después) = ', this.data.lstProductosSeleccionados);
        }
        else {
            this.data.lstProductosSeleccionados.map(p => p.cuenta = +deCuenta);
        }
        this.dialogRef.close(this.data.lstProductosSeleccionados);
    }
    unirTodas() {
        this.unirCuentas();
    }
};
UnirCuentaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UnirCuentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unir-cuenta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unir-cuenta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unir-cuenta.component.css */ "./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UnirCuentaComponent);



/***/ }),

/***/ "./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRlL2NvbXBvbmVudHMvdmFsaWRhLXB3ZC1nZXJlbnRlLXR1cm5vL3ZhbGlkYS1wd2QtZ2VyZW50ZS10dXJuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ValidaPwdGerenteTurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidaPwdGerenteTurnoComponent", function() { return ValidaPwdGerenteTurnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _services_comanda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comanda.service */ "./src/app/restaurante/services/comanda.service.ts");




let ValidaPwdGerenteTurnoComponent = class ValidaPwdGerenteTurnoComponent {
    constructor(dialogRef, comandaSrvc) {
        this.dialogRef = dialogRef;
        this.comandaSrvc = comandaSrvc;
        this.data = { pwd: undefined };
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
    }
};
ValidaPwdGerenteTurnoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _services_comanda_service__WEBPACK_IMPORTED_MODULE_3__["ComandaService"] }
];
ValidaPwdGerenteTurnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-valida-pwd-gerente-turno',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./valida-pwd-gerente-turno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./valida-pwd-gerente-turno.component.css */ "./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.css")).default]
    })
], ValidaPwdGerenteTurnoComponent);



/***/ }),

/***/ "./src/app/restaurante/restaurante-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/restaurante/restaurante-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RestauranteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestauranteRoutingModule", function() { return RestauranteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/services/authguard.service */ "./src/app/admin/services/authguard.service.ts");
/* harmony import */ var _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/area/area/area.component */ "./src/app/restaurante/components/area/area/area.component.ts");
/* harmony import */ var _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tran-areas/tran-areas.component */ "./src/app/restaurante/components/tran-areas/tran-areas.component.ts");
/* harmony import */ var _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/turno/turno/turno.component */ "./src/app/restaurante/components/turno/turno/turno.component.ts");
/* harmony import */ var _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/rpt-ventas.component */ "./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.ts");
/* harmony import */ var _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reportes/turnos/turnos.component */ "./src/app/restaurante/components/reportes/turnos/turnos.component.ts");
/* harmony import */ var _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reportes/propinas/propinas.component */ "./src/app/restaurante/components/reportes/propinas/propinas.component.ts");
/* harmony import */ var _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/comanda-en-linea/comanda-en-linea.component */ "./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.ts");
/* harmony import */ var _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reportes/caja/caja.component */ "./src/app/restaurante/components/reportes/caja/caja.component.ts");
/* harmony import */ var _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reportes/factura/factura.component */ "./src/app/restaurante/components/reportes/factura/factura.component.ts");
/* harmony import */ var _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/turno-tipo/turno/turno.component */ "./src/app/restaurante/components/turno-tipo/turno/turno.component.ts");
/* harmony import */ var _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/propina/propina/propina.component */ "./src/app/restaurante/components/propina/propina/propina.component.ts");
/* harmony import */ var _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/reportes/autoconsulta/autoconsulta.component */ "./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.ts");
/* harmony import */ var _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/caja-corte/cajacorte/cajacorte.component */ "./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.ts");

















const routes = [
    { path: 'mantareas', component: _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'tranareas', component: _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_5__["TranAreasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'turno', component: _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_6__["TurnoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'rptvtascat', component: _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_7__["RptVentasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'rptturnos', component: _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_8__["TurnosComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'rptpropinas', component: _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_9__["PropinasComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'rptcaja', component: _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_11__["CajaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'rptfactura', component: _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_12__["FacturaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'cmdonline', component: _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_10__["ComandaEnLineaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'tipoturno', component: _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_13__["TurnoTipoComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'propina', component: _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_14__["PropinaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'autoconsulta', component: _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_15__["AutoconsultaComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'cajacorte', component: _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_16__["CajacorteComponent"], canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];
let RestauranteRoutingModule = class RestauranteRoutingModule {
};
RestauranteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RestauranteRoutingModule);



/***/ }),

/***/ "./src/app/restaurante/restaurante.module.ts":
/*!***************************************************!*\
  !*** ./src/app/restaurante/restaurante.module.ts ***!
  \***************************************************/
/*! exports provided: RestauranteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestauranteModule", function() { return RestauranteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _wms_wms_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wms/wms.module */ "./src/app/wms/wms.module.ts");
/* harmony import */ var _pos_pos_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pos/pos.module */ "./src/app/pos/pos.module.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-material-keyboard/core */ "./node_modules/@ngx-material-keyboard/core/esm2015/ngx-material-keyboard-core.js");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "./node_modules/@ecodev/fab-speed-dial/fesm2015/ecodev-fab-speed-dial.js");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @protacon/ng-virtual-keyboard */ "./node_modules/@protacon/ng-virtual-keyboard/dist/index.js");
/* harmony import */ var _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _restaurante_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./restaurante-routing.module */ "./src/app/restaurante/restaurante-routing.module.ts");
/* harmony import */ var _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/tran-areas/tran-areas.component */ "./src/app/restaurante/components/tran-areas/tran-areas.component.ts");
/* harmony import */ var _components_mesa_mesa_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/mesa/mesa.component */ "./src/app/restaurante/components/mesa/mesa.component.ts");
/* harmony import */ var _components_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/abrir-mesa/abrir-mesa.component */ "./src/app/restaurante/components/abrir-mesa/abrir-mesa.component.ts");
/* harmony import */ var _components_tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/tran-comanda/tran-comanda.component */ "./src/app/restaurante/components/tran-comanda/tran-comanda.component.ts");
/* harmony import */ var _components_lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/lista-productos-comanda/lista-productos-comanda.component */ "./src/app/restaurante/components/lista-productos-comanda/lista-productos-comanda.component.ts");
/* harmony import */ var _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/unir-cuenta/unir-cuenta.component */ "./src/app/restaurante/components/unir-cuenta/unir-cuenta.component.ts");
/* harmony import */ var _components_area_lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/area/lista-area/lista-area.component */ "./src/app/restaurante/components/area/lista-area/lista-area.component.ts");
/* harmony import */ var _components_area_form_area_form_area_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/area/form-area/form-area.component */ "./src/app/restaurante/components/area/form-area/form-area.component.ts");
/* harmony import */ var _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/area/area/area.component */ "./src/app/restaurante/components/area/area/area.component.ts");
/* harmony import */ var _components_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/pide-datos-cuentas/pide-datos-cuentas.component */ "./src/app/restaurante/components/pide-datos-cuentas/pide-datos-cuentas.component.ts");
/* harmony import */ var _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/turno/turno/turno.component */ "./src/app/restaurante/components/turno/turno/turno.component.ts");
/* harmony import */ var _components_turno_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/turno/lista-turno/lista-turno.component */ "./src/app/restaurante/components/turno/lista-turno/lista-turno.component.ts");
/* harmony import */ var _components_turno_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/turno/form-turno/form-turno.component */ "./src/app/restaurante/components/turno/form-turno/form-turno.component.ts");
/* harmony import */ var _components_area_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/area/area-designer/area-designer.component */ "./src/app/restaurante/components/area/area-designer/area-designer.component.ts");
/* harmony import */ var _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/rpt-ventas.component */ "./src/app/restaurante/components/reportes/rpt-ventas/rpt-ventas.component.ts");
/* harmony import */ var _components_reportes_rpt_ventas_por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/por-categoria/por-categoria.component */ "./src/app/restaurante/components/reportes/rpt-ventas/por-categoria/por-categoria.component.ts");
/* harmony import */ var _components_reportes_rpt_ventas_por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/reportes/rpt-ventas/por-articulo/por-articulo.component */ "./src/app/restaurante/components/reportes/rpt-ventas/por-articulo/por-articulo.component.ts");
/* harmony import */ var _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/reportes/turnos/turnos.component */ "./src/app/restaurante/components/reportes/turnos/turnos.component.ts");
/* harmony import */ var _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/reportes/propinas/propinas.component */ "./src/app/restaurante/components/reportes/propinas/propinas.component.ts");
/* harmony import */ var _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/comanda-en-linea/comanda-en-linea.component */ "./src/app/restaurante/components/comanda-en-linea/comanda-en-linea.component.ts");
/* harmony import */ var _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/reportes/caja/caja.component */ "./src/app/restaurante/components/reportes/caja/caja.component.ts");
/* harmony import */ var _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/reportes/factura/factura.component */ "./src/app/restaurante/components/reportes/factura/factura.component.ts");
/* harmony import */ var _components_turno_tipo_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/turno-tipo/lista-turno/lista-turno.component */ "./src/app/restaurante/components/turno-tipo/lista-turno/lista-turno.component.ts");
/* harmony import */ var _components_turno_tipo_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/turno-tipo/form-turno/form-turno.component */ "./src/app/restaurante/components/turno-tipo/form-turno/form-turno.component.ts");
/* harmony import */ var _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/turno-tipo/turno/turno.component */ "./src/app/restaurante/components/turno-tipo/turno/turno.component.ts");
/* harmony import */ var _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/propina/propina/propina.component */ "./src/app/restaurante/components/propina/propina/propina.component.ts");
/* harmony import */ var _components_propina_form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/propina/form-propina/form-propina.component */ "./src/app/restaurante/components/propina/form-propina/form-propina.component.ts");
/* harmony import */ var _components_propina_lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/propina/lista-propina/lista-propina.component */ "./src/app/restaurante/components/propina/lista-propina/lista-propina.component.ts");
/* harmony import */ var _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/reportes/autoconsulta/autoconsulta.component */ "./src/app/restaurante/components/reportes/autoconsulta/autoconsulta.component.ts");
/* harmony import */ var _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/caja-corte/cajacorte/cajacorte.component */ "./src/app/restaurante/components/caja-corte/cajacorte/cajacorte.component.ts");
/* harmony import */ var _components_caja_corte_cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/caja-corte/cajacorte-lista/cajacorte-lista.component */ "./src/app/restaurante/components/caja-corte/cajacorte-lista/cajacorte-lista.component.ts");
/* harmony import */ var _components_caja_corte_cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/caja-corte/cajacorte-form/cajacorte-form.component */ "./src/app/restaurante/components/caja-corte/cajacorte-form/cajacorte-form.component.ts");
/* harmony import */ var _components_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component */ "./src/app/restaurante/components/valida-pwd-gerente-turno/valida-pwd-gerente-turno.component.ts");








// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


























































// const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
let RestauranteModule = class RestauranteModule {
};
RestauranteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_tran_areas_tran_areas_component__WEBPACK_IMPORTED_MODULE_33__["TranAreasComponent"], _components_mesa_mesa_component__WEBPACK_IMPORTED_MODULE_34__["MesaComponent"], _components_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_35__["AbrirMesaComponent"], _components_tran_comanda_tran_comanda_component__WEBPACK_IMPORTED_MODULE_36__["TranComandaComponent"], _components_lista_productos_comanda_lista_productos_comanda_component__WEBPACK_IMPORTED_MODULE_37__["ListaProductosComandaComponent"], _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_38__["UnirCuentaComponent"],
            _components_area_lista_area_lista_area_component__WEBPACK_IMPORTED_MODULE_39__["ListaAreaComponent"], _components_area_form_area_form_area_component__WEBPACK_IMPORTED_MODULE_40__["FormAreaComponent"], _components_area_area_area_component__WEBPACK_IMPORTED_MODULE_41__["AreaComponent"], _components_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_42__["PideDatosCuentasComponent"], _components_turno_turno_turno_component__WEBPACK_IMPORTED_MODULE_43__["TurnoComponent"], _components_turno_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_44__["ListaTurnoComponent"],
            _components_turno_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_45__["FormTurnoComponent"], _components_area_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_46__["AreaDesignerComponent"], _components_reportes_rpt_ventas_rpt_ventas_component__WEBPACK_IMPORTED_MODULE_47__["RptVentasComponent"], _components_reportes_rpt_ventas_por_categoria_por_categoria_component__WEBPACK_IMPORTED_MODULE_48__["PorCategoriaComponent"], _components_reportes_rpt_ventas_por_articulo_por_articulo_component__WEBPACK_IMPORTED_MODULE_49__["PorArticuloComponent"], _components_reportes_turnos_turnos_component__WEBPACK_IMPORTED_MODULE_50__["TurnosComponent"],
            _components_reportes_propinas_propinas_component__WEBPACK_IMPORTED_MODULE_51__["PropinasComponent"], _components_comanda_en_linea_comanda_en_linea_component__WEBPACK_IMPORTED_MODULE_52__["ComandaEnLineaComponent"], _components_reportes_caja_caja_component__WEBPACK_IMPORTED_MODULE_53__["CajaComponent"], _components_reportes_factura_factura_component__WEBPACK_IMPORTED_MODULE_54__["FacturaComponent"], _components_turno_tipo_lista_turno_lista_turno_component__WEBPACK_IMPORTED_MODULE_55__["ListaTurnoTipoComponent"], _components_turno_tipo_form_turno_form_turno_component__WEBPACK_IMPORTED_MODULE_56__["FormTurnoTipoComponent"],
            _components_turno_tipo_turno_turno_component__WEBPACK_IMPORTED_MODULE_57__["TurnoTipoComponent"], _components_propina_propina_propina_component__WEBPACK_IMPORTED_MODULE_58__["PropinaComponent"], _components_propina_form_propina_form_propina_component__WEBPACK_IMPORTED_MODULE_59__["FormPropinaComponent"], _components_propina_lista_propina_lista_propina_component__WEBPACK_IMPORTED_MODULE_60__["ListaPropinaComponent"], _components_reportes_autoconsulta_autoconsulta_component__WEBPACK_IMPORTED_MODULE_61__["AutoconsultaComponent"],
            _components_caja_corte_cajacorte_cajacorte_component__WEBPACK_IMPORTED_MODULE_62__["CajacorteComponent"], _components_caja_corte_cajacorte_lista_cajacorte_lista_component__WEBPACK_IMPORTED_MODULE_63__["CajacorteListaComponent"], _components_caja_corte_cajacorte_form_cajacorte_form_component__WEBPACK_IMPORTED_MODULE_64__["CajacorteFormComponent"], _components_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_65__["ValidaPwdGerenteTurnoComponent"]
        ],
        entryComponents: [
            _components_abrir_mesa_abrir_mesa_component__WEBPACK_IMPORTED_MODULE_35__["AbrirMesaComponent"], _components_unir_cuenta_unir_cuenta_component__WEBPACK_IMPORTED_MODULE_38__["UnirCuentaComponent"], _components_pide_datos_cuentas_pide_datos_cuentas_component__WEBPACK_IMPORTED_MODULE_42__["PideDatosCuentasComponent"], _components_area_area_designer_area_designer_component__WEBPACK_IMPORTED_MODULE_46__["AreaDesignerComponent"], _components_valida_pwd_gerente_turno_valida_pwd_gerente_turno_component__WEBPACK_IMPORTED_MODULE_65__["ValidaPwdGerenteTurnoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _restaurante_routing_module__WEBPACK_IMPORTED_MODULE_32__["RestauranteRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _wms_wms_module__WEBPACK_IMPORTED_MODULE_6__["WmsModule"],
            _pos_pos_module__WEBPACK_IMPORTED_MODULE_7__["PosModule"],
            // SocketIoModule.forRoot(config),
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
            _ngx_material_keyboard_core__WEBPACK_IMPORTED_MODULE_29__["MatKeyboardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_30__["EcoFabSpeedDialModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_28__["DragDropModule"],
            _protacon_ng_virtual_keyboard__WEBPACK_IMPORTED_MODULE_31__["NgVirtualKeyboardModule"]
        ],
        providers: [
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"]
        ]
    })
], RestauranteModule);



/***/ }),

/***/ "./src/app/restaurante/services/area.service.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurante/services/area.service.ts ***!
  \******************************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let AreaService = class AreaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'mante/area';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/${this.moduleUrl}/get_areas?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url}/${this.moduleUrl}/guardar${entidad.area ? ('/' + entidad.area) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
AreaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AreaService);



/***/ }),

/***/ "./src/app/restaurante/services/autoconsulta.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurante/services/autoconsulta.service.ts ***!
  \**************************************************************/
/*! exports provided: AutoconsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoconsultaService", function() { return AutoconsultaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let AutoconsultaService = class AutoconsultaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    getCampos(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_campos?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getReporte(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken,
                'Accept': 'application/vnd.ms-excel'
            }),
            responseType: 'blob'
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/reporte/autoconsulta`, fltr, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
AutoconsultaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
AutoconsultaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutoconsultaService);



/***/ }),

/***/ "./src/app/restaurante/services/cajacorte.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/restaurante/services/cajacorte.service.ts ***!
  \***********************************************************/
/*! exports provided: CajacorteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajacorteService", function() { return CajacorteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let CajacorteService = class CajacorteService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'cajacorte';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    buscar(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getCajaCorteTipo(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_caja_corte_tipo?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getCajaCorteNominacion(fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlCatalogos}/get_caja_corte_nominacion?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    guardar(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularCorte(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/anular_caja`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularDetalle(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/anular_caja_detalle`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
CajacorteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
CajacorteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CajacorteService);



/***/ }),

/***/ "./src/app/restaurante/services/comanda.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/restaurante/services/comanda.service.ts ***!
  \*********************************************************/
/*! exports provided: ComandaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandaService", function() { return ComandaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let ComandaService = class ComandaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'comanda';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getComandaDeMesa(idmesa) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/get_comanda/${idmesa}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar${entidad.comanda ? ('/' + entidad.comanda) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    saveDetalle(idcomanda, idcuenta, detalle) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        // const urlComplement = detalle.detalle_comanda && detalle.detalle_cuenta  ? `/${detalle.detalle_cuenta}` : '';
        return this.http
            .post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar_detalle/${idcomanda}/${idcuenta}`, detalle, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    setProductoImpreso(idcuenta = 0) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/imprimir/${idcuenta}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getComandasOnLine_Test() {
        const comandasOnLine = [
            {
                comanda: 37,
                total: 8,
                usuario: 6,
                sede: 1,
                estatus: 1,
                turno: 2,
                mesa: {
                    mesa: 1,
                    area: {
                        area: 1,
                        sede: 1,
                        area_padre: null,
                        nombre: 'Bar'
                    },
                    numero: 1,
                    posx: 23.8667,
                    posy: 18.8333,
                    tamanio: 72.0000,
                    estatus: 2
                },
                cuentas: [
                    {
                        cuenta: 31,
                        comanda: 37,
                        nombre: 'Única',
                        numero: 1,
                        propina_monto: 0.80,
                        propina_porcentaje: 10.00,
                        cerrada: 1,
                        productos: [
                            {
                                detalle_cuenta: 75,
                                cuenta_cuenta: 31,
                                detalle_comanda: 79,
                                comanda: 37,
                                articulo: {
                                    articulo: 1,
                                    categoria_grupo: 21,
                                    presentacion: null,
                                    descripcion: 'Original',
                                    precio: 8.00,
                                    bien_servicio: 'B',
                                    existencias: 969.00,
                                    impresora: {
                                        impresora: 1,
                                        sede: 1,
                                        nombre: 'EPSON L120 Series',
                                        direccion_ip: null,
                                        ubicacion: null,
                                        bluetooth: 0
                                    }
                                },
                                cantidad: 1,
                                precio: 8.00,
                                impreso: 1,
                                total: 8.00,
                                notas: '',
                                numero_cuenta: 1
                            }
                        ]
                    }
                ]
            },
            {
                comanda: 45,
                total: 76,
                usuario: 2,
                sede: 1,
                estatus: 1,
                turno: 2,
                mesa: {
                    mesa: 3,
                    area: {
                        area: 1,
                        sede: 1,
                        area_padre: null,
                        nombre: 'Bar'
                    },
                    numero: 3,
                    posx: 11.0667,
                    posy: 41.5000,
                    tamanio: 72.0000,
                    estatus: 2
                },
                cuentas: [
                    {
                        cuenta: 39,
                        comanda: 45,
                        nombre: 'uno',
                        numero: 1,
                        propina_monto: 0.80,
                        propina_porcentaje: 10.00,
                        cerrada: 1,
                        productos: [
                            {
                                detalle_cuenta: 84,
                                cuenta_cuenta: 39,
                                detalle_comanda: 88,
                                comanda: 45,
                                articulo: {
                                    articulo: 1,
                                    categoria_grupo: 21,
                                    presentacion: null,
                                    descripcion: 'Original',
                                    precio: 8.00,
                                    bien_servicio: 'B',
                                    existencias: 969.00,
                                    impresora: {
                                        impresora: 1,
                                        sede: 1,
                                        nombre: 'EPSON L120 Series',
                                        direccion_ip: null,
                                        ubicacion: null,
                                        bluetooth: 0
                                    }
                                },
                                cantidad: 1,
                                precio: 8.00,
                                impreso: 1,
                                total: 8.00,
                                notas: '',
                                numero_cuenta: 1
                            },
                            {
                                detalle_cuenta: 85,
                                cuenta_cuenta: 40,
                                detalle_comanda: 89,
                                comanda: 45,
                                articulo: {
                                    articulo: 2,
                                    categoria_grupo: 21,
                                    presentacion: null,
                                    descripcion: 'Zero',
                                    precio: 8.00,
                                    bien_servicio: 'B',
                                    existencias: 984.00,
                                    impresora: {
                                        impresora: 1,
                                        sede: 1,
                                        nombre: 'EPSON L120 Series',
                                        direccion_ip: null,
                                        ubicacion: null,
                                        bluetooth: 0
                                    }
                                },
                                cantidad: 1,
                                precio: 8.00,
                                impreso: 1,
                                total: 8.00,
                                notas: '',
                                numero_cuenta: 1
                            },
                            {
                                detalle_cuenta: 86,
                                cuenta_cuenta: 40,
                                detalle_comanda: 90,
                                comanda: 45,
                                articulo: {
                                    articulo: 6,
                                    categoria_grupo: 23,
                                    presentacion: null,
                                    descripcion: 'Fettuccine',
                                    precio: 60.00,
                                    bien_servicio: 'B',
                                    existencias: 995.00,
                                    impresora: {
                                        impresora: 2,
                                        sede: 1,
                                        nombre: 'EPSON L120 Series',
                                        direccion_ip: null,
                                        ubicacion: null,
                                        bluetooth: 0
                                    }
                                },
                                cantidad: 1,
                                precio: 60.00,
                                impreso: 1,
                                total: 60.00,
                                notas: '',
                                numero_cuenta: 1
                            }
                        ]
                    }
                ]
            }
        ];
        return comandasOnLine;
    }
    cerrarMesa(idMesa) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/cerrar_mesa/${idMesa}`, null, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getComandasOnLIne() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/get_comanda`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    validaPwdGerenteTurno(pwd) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/validapwdgerenteturno`, { pwd }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
ComandaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
ComandaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComandaService);



/***/ }),

/***/ "./src/app/restaurante/services/mesa.service.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurante/services/mesa.service.ts ***!
  \******************************************************/
/*! exports provided: MesaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaService", function() { return MesaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let MesaService = class MesaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'mesa';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/mesa/guardar${entidad.mesa ? ('/' + entidad.mesa) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
MesaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
MesaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MesaService);



/***/ }),

/***/ "./src/app/restaurante/services/propina.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/restaurante/services/propina.service.ts ***!
  \*********************************************************/
/*! exports provided: PropinaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaService", function() { return PropinaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let PropinaService = class PropinaService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'propina';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlAppRestaurante}/${this.moduleUrl}/guardar${!!entidad.propina_distribucion ? ('/' + entidad.propina_distribucion) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
PropinaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
PropinaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PropinaService);



/***/ }),

/***/ "./src/app/restaurante/services/reporte-ventas.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/restaurante/services/reporte-ventas.service.ts ***!
  \****************************************************************/
/*! exports provided: ReporteVentasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteVentasService", function() { return ReporteVentasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let ReporteVentasService = class ReporteVentasService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'reporte/venta';
        this.usrToken = null;
        this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__["ServiceErrorHandler"]();
        this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).token : null;
    }
    porCategoria(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/categoria?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porArticulo(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/articulo?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porCategoriaPdf(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken,
                'Accept': 'application/pdf'
            }),
            responseType: 'blob'
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/categoriapdf/1?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    porArticuloPdf(params) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken,
                'Accept': 'application/pdf'
            }),
            responseType: 'blob'
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlFacturacion}/${this.moduleUrl}/articulopdf/1?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](params)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
ReporteVentasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
ReporteVentasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReporteVentasService);



/***/ }),

/***/ "./src/app/restaurante/services/tipo-turno.service.ts":
/*!************************************************************!*\
  !*** ./src/app/restaurante/services/tipo-turno.service.ts ***!
  \************************************************************/
/*! exports provided: TipoTurnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoTurnoService", function() { return TipoTurnoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let TipoTurnoService = class TipoTurnoService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'turno';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/get_turno_tipo?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/guardar_turno_tipo${entidad.turno_tipo ? ('/' + entidad.turno_tipo) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
TipoTurnoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
TipoTurnoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TipoTurnoService);



/***/ }),

/***/ "./src/app/restaurante/services/turno.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/restaurante/services/turno.service.ts ***!
  \*******************************************************/
/*! exports provided: TurnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoService", function() { return TurnoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
/* harmony import */ var _shared_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/error-handler */ "./src/app/shared/error-handler.ts");
/* harmony import */ var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/services/localstorage.service */ "./src/app/admin/services/localstorage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_7__);








let TurnoService = class TurnoService {
    constructor(http, ls) {
        this.http = http;
        this.ls = ls;
        this.moduleUrl = 'turno';
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
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    save(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/guardar${entidad.turno ? ('/' + entidad.turno) : ''}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    getDetalle(idturno, fltr = {}) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.get(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/buscar_usuario/${idturno}?${qs__WEBPACK_IMPORTED_MODULE_7__["stringify"](fltr)}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    saveDetalle(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/agregar_usuario/${entidad.turno}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
    anularDetalle(entidad) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.usrToken
            })
        };
        return this.http.post(`${_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlMantenimientos}/${this.moduleUrl}/anular_usuario/${entidad.turno}`, entidad, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.srvcErrHndl.errorHandler));
    }
};
TurnoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }
];
TurnoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TurnoService);



/***/ })

}]);
//# sourceMappingURL=restaurante-restaurante-module-es2015.js.map