(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ghost-kitchen-ghost-kitchen-module"], {
    /***/
    "+d8q":
    /*!*******************************************************************************!*\
      !*** ./src/app/ghost-kitchen/components/seguimiento/seguimiento.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SeguimientoComponent */

    /***/
    function d8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeguimientoComponent", function () {
        return SeguimientoComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/confirm-dialog/confirm-dialog.component */
      "IJgu");
      /* harmony import */


      var _admin_components_formaPagoComandaOrigen_forma_pago_comanda_origen_dialog_forma_pago_comanda_origen_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../admin/components/formaPagoComandaOrigen/forma-pago-comanda-origen-dialog/forma-pago-comanda-origen-dialog.component */
      "XI5Z");
      /* harmony import */


      var _admin_components_vendor_tercero_form_sede_vendor_tercero_dialog_form_sede_vendor_tercero_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../admin/components/vendor-tercero/form-sede-vendor-tercero-dialog/form-sede-vendor-tercero-dialog.component */
      "7QeG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_orden_gk_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/orden-gk.service */
      "u0wK");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/services/desktop-notification.service */
      "+iZS");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ecodev/fab-speed-dial */
      "JbvS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["tblOrdenesGk"];

      function SeguimientoComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", element_r21.orden_gk, " ");
        }
      }

      function SeguimientoComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Origen");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r22.comanda_origen.descripcion || "");
        }
      }

      function SeguimientoComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Fecha/Hora");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r23.fhcreacion, "dd/MM/yyyy HH:mm:ss") || "");
        }
      }

      function SeguimientoComponent_th_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Pedido");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r24.numero_orden);
        }
      }

      function SeguimientoComponent_th_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Estatus");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r25.estatus_orden_gk.descripcion);
        }
      }

      function SeguimientoComponent_th_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r26.orden_rt.total_orden, "1.2-2"));
        }
      }

      function SeguimientoComponent_th_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function SeguimientoComponent_td_37_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_td_37_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var element_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r29.openFormaPagoComandaOrigen(element_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r28.cargando);
        }
      }

      function SeguimientoComponent_td_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "eco-fab-speed-dial", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "eco-fab-speed-dial-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "eco-fab-speed-dial-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_td_37_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);

            var element_r27 = ctx.$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r32.cancelarOrden(element_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "block");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_td_37_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);

            var element_r27 = ctx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r34.enviarVendors(element_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "send");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SeguimientoComponent_td_37_button_13_Template, 3, 1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r15.cargando || +element_r27.estatus_orden_gk.estatus_orden_gk !== 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r15.cargando || +element_r27.estatus_orden_gk.estatus_orden_gk > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", +element_r27.estatus_orden_gk.estatus_orden_gk === 3);
        }
      }

      function SeguimientoComponent_td_39_h6_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r35.orden_rt.pendiente, " ");
        }
      }

      function SeguimientoComponent_td_39_ng_container_21_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_td_39_ng_container_21_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);

            var det_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r42.openSedeVendorTercero(det_r39.vendor, element_r35.orden_gk);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "store");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r40.cargando);
        }
      }

      function SeguimientoComponent_td_39_ng_container_21_small_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var det_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](det_r39.estatus_sede.descripcion);
        }
      }

      function SeguimientoComponent_td_39_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SeguimientoComponent_td_39_ng_container_21_button_4_Template, 3, 1, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SeguimientoComponent_td_39_ng_container_21_small_5_Template, 4, 1, "small", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var det_r39 = ctx.$implicit;

          var element_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", det_r39.estatus_sede == null ? null : det_r39.estatus_sede.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", det_r39.atiende && det_r39.atiende.nombre ? det_r39.atiende.nombre : "NO EXISTE", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", +element_r35.estatus_orden_gk.estatus_orden_gk === 3 && !(det_r39.atiende && det_r39.atiende.nombre));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", det_r39.estatus_sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](det_r39.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](det_r39.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 10, det_r39.precio, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 13, det_r39.descuento, "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](18, 16, det_r39.total, "1.2-2"));
        }
      }

      function SeguimientoComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "table", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "caption");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SeguimientoComponent_td_39_h6_6_Template, 3, 1, "h6", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Atiende");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Descuento");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SeguimientoComponent_td_39_ng_container_21_Template, 19, 19, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", ctx_r16.columnsToDisplay.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@detailExpand", element_r35 == ctx_r16.expandedElement ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Detalle del pedido #", element_r35.numero_orden, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !element_r35.orden_rt.completa);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", element_r35.orden_rt.articulos);
        }
      }

      function SeguimientoComponent_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 55);
        }
      }

      function SeguimientoComponent_tr_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_tr_41_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);

            var element_r48 = ctx.$implicit;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r49.expandedElement = ctx_r49.expandedElement === element_r48 ? null : element_r48;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r48 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", element_r48.estatus_orden_gk.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("example-expanded-row", ctx_r18.expandedElement === element_r48);
        }
      }

      function SeguimientoComponent_tr_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 57);
        }
      }

      function SeguimientoComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No hay pedidos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", ctx_r20.columnsToDisplay.length);
        }
      }

      var _c1 = function _c1() {
        return ["expandedDetail"];
      };

      var SeguimientoComponent = /*#__PURE__*/function () {
        function SeguimientoComponent(ordengkSrvc, socket, ls, snackBar, dns, dialog) {
          var _this = this;

          _classCallCheck(this, SeguimientoComponent);

          this.ordengkSrvc = ordengkSrvc;
          this.socket = socket;
          this.ls = ls;
          this.snackBar = snackBar;
          this.dns = dns;
          this.dialog = dialog;
          this.ordenesgk = [];
          this.ordenesgkFiltered = [];
          this.columnsToDisplay = ['orden_gk', 'comanda_origen', 'fhcreacion', 'numero_orden', 'estatus_orden_gk', 'total', 'acciones'];
          this.cargando = false;

          this.notificarUsuario = function () {
            var opciones = {
              icon: 'assets/img/minilogo.png',
              body: "Se recibi\xF3 una nueva orden a las ".concat(moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dateTimeFormat), "."),
              dir: 'auto'
            };

            _this.dns.createNotification('Rest-Touch Pro', 10000, opciones);
          };

          this.loadOrdenesGK = function () {
            var estatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            _this.cargando = true;
            var fltr = {
              estatus_orden_gk: estatus
            };

            if (+estatus === 0) {
              delete fltr.estatus_orden_gk;
            }

            _this.ordengkSrvc.seguimiento(fltr).subscribe(function (res) {
              if (res) {
                _this.ordenesgk = res;
                _this.ordenesgkFiltered = JSON.parse(JSON.stringify(_this.ordenesgk));
              }

              _this.cargando = false;
            });
          };

          this.cancelarOrden = function (ord) {
            _this.cargando = true;

            var dialogRef = _this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
              maxWidth: '400px',
              data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Anular pedido', 'Si anula el pedido, será necesario volver a ingresarlo. ¿Desea continuar?', 'Sí', 'No', {
                input: [{
                  select: false,
                  label: 'Comentario',
                  valor: null,
                  id: 'comentario',
                  requerido: false
                }]
              })
            });

            dialogRef.afterClosed().subscribe(function (res) {
              if (res.resultado) {
                var params = {
                  orden_gk: ord.orden_gk,
                  origen: ord.comanda_origen.descripcion
                };

                var _iterator = _createForOfIteratorHelper(res.config.input),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var input = _step.value;
                    params[input.id] = input.valor;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _this.ordengkSrvc.anular(params).subscribe(function (resAnula) {
                  if (resAnula.exito) {
                    _this.snackBar.open(resAnula.mensaje, 'Anular pedido', {
                      duration: 5000
                    });

                    if (resAnula.estatus_orden_gk) {
                      _this.updateEstatusOrden(ord.orden_gk, resAnula.estatus_orden_gk);
                    } else {
                      _this.loadOrdenesGK();
                    }
                  } else {
                    _this.snackBar.open("ERROR: ".concat(resAnula.mensaje), 'Anular pedido', {
                      duration: 5000
                    });
                  }

                  _this.cargando = false;
                });
              } else {
                _this.cargando = false;
              }
            });
          };

          this.enviarVendors = function (ord) {
            _this.cargando = true;

            var dialogRef = _this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
              maxWidth: '400px',
              data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogModel"]('Enviar a vendors', 'Esto enviará los pedidos a sus respectivas cocinas. ¿Desea continuar?', 'Sí', 'No')
            });

            dialogRef.afterClosed().subscribe(function (res) {
              if (res) {
                _this.snackBar.open("Enviando orden #".concat(ord.numero_orden, " de ").concat(ord.comanda_origen.descripcion), 'Envío a vendors', {
                  duration: 5000
                });

                _this.ordengkSrvc.enviarVendors({
                  orden_gk: ord.orden_gk
                }).subscribe(function (resEnvio) {
                  if (resEnvio.exito) {
                    _this.updateEstatusOrden(ord.orden_gk, resEnvio.estatus_orden_gk);

                    _this.snackBar.open("".concat(resEnvio.mensaje), 'Envío a vendors', {
                      duration: 7000
                    });
                  } else {
                    _this.snackBar.open("ERROR: ".concat(resEnvio.mensaje), 'Envío a vendors', {
                      duration: 10000
                    });
                  }

                  _this.cargando = false;
                });
              } else {
                _this.cargando = false;
              }
            });
          };

          this.updateEstatusOrden = function (idordengk, estatus) {
            _this.ordengkSrvc.cambiarEstatusSede(idordengk).subscribe(function (res) {
              if (res.exito && res.orden) {
                _this.updateRegistroOrden(res.orden);
              }

              var idx = _this.ordenesgk.findIndex(function (o) {
                return +o.orden_gk === +idordengk;
              });

              if (idx > -1) {
                _this.ordenesgk[idx].estatus_orden_gk = estatus;
              }

              idx = _this.ordenesgkFiltered.findIndex(function (o) {
                return +o.orden_gk === +idordengk;
              });

              if (idx > -1) {
                _this.ordenesgkFiltered[idx].estatus_orden_gk = estatus;
              }
            });
          };

          this.updateRegistroOrden = function (ord) {
            var idx = _this.ordenesgk.findIndex(function (o) {
              return +o.orden_gk === +ord.orden_gk;
            });

            if (idx > -1) {
              _this.ordenesgk[idx] = ord;
            }

            idx = _this.ordenesgkFiltered.findIndex(function (o) {
              return +o.orden_gk === +ord.orden_gk;
            });

            if (idx > -1) {
              _this.ordenesgkFiltered[idx] = ord;

              _this.tblOrdenesGk.renderRows();
            }
          };

          this.openFormaPagoComandaOrigen = function (ord) {
            _this.cargando = true;

            var dialogRef = _this.dialog.open(_admin_components_formaPagoComandaOrigen_forma_pago_comanda_origen_dialog_forma_pago_comanda_origen_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FormaPagoComandaOrigenDialogComponent"], {
              maxWidth: '100vw',
              width: '90vw',
              height: '80vh',
              disableClose: true,
              data: {
                comanda_origen: +ord.comanda_origen.comanda_origen
              }
            });

            dialogRef.afterClosed().subscribe(function () {
              _this.ordengkSrvc.regeneraOrdenRT(ord.orden_gk).subscribe(function (res) {
                if (res.exito) {
                  _this.updateRegistroOrden(res.orden);

                  _this.snackBar.open(res.mensaje, 'Formas de pago por origen.', {
                    duration: 7000
                  });
                } else {
                  _this.snackBar.open("ERROR: ".concat(res.mensaje), 'Formas de pago por origen.', {
                    duration: 7000
                  });
                }

                _this.cargando = false;
              });
            });
          };

          this.openSedeVendorTercero = function (vt, idOrdenGk) {
            console.log(vt);
            _this.cargando = true;

            var dialogRef = _this.dialog.open(_admin_components_vendor_tercero_form_sede_vendor_tercero_dialog_form_sede_vendor_tercero_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FormSedeVendorTerceroDialogComponent"], {
              maxWidth: '100vw',
              width: '50vw',
              height: '40vh',
              disableClose: true,
              data: {
                vendor_tercero: vt.vendor_tercero,
                nombre_vendor_tercero: vt.nombre
              }
            });

            dialogRef.afterClosed().subscribe(function () {
              _this.ordengkSrvc.regeneraOrdenRT(idOrdenGk).subscribe(function (res) {
                if (res.exito) {
                  _this.updateRegistroOrden(res.orden);

                  _this.snackBar.open(res.mensaje, 'Sede para vendor.', {
                    duration: 7000
                  });
                } else {
                  _this.snackBar.open("ERROR: ".concat(res.mensaje), 'Sede para vendor.', {
                    duration: 7000
                  });
                }

                _this.cargando = false;
              });
            });
          };
        }

        _createClass(SeguimientoComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            if (!!this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid) {
              this.socket.emit('joinRestaurant', this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
              this.socket.on('gk:updlista', function (obj) {
                if (_this2.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid.indexOf(obj.corporacion) > -1) {
                  _this2.loadOrdenesGK();

                  _this2.notificarUsuario();
                }
              });
              this.socket.on('gk:updEstatusOrden', function (msg) {
                var obj = JSON.parse(msg);
                var corporacion = obj.sede_uuid.substring(0, 36);

                if (_this2.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid.indexOf(corporacion) > -1) {
                  if (obj.orden_gk && obj.estatus_orden_gk) {
                    _this2.updateEstatusOrden(obj.orden_gk, obj.estatus_orden_gk);
                  }
                }
              });
              this.socket.on('reconnect', function () {
                return _this2.socket.emit('joinRestaurant', _this2.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede_uuid);
              });
              this.socket.on('connect_timeout', function () {
                var msg = 'DESCONECTADO DEL SERVIDOR (TIMEOUT)';

                _this2.snackBar.open(msg, 'ERROR', {
                  duration: 5000
                });
              });
              this.socket.on('reconnect_attempt', function (attempt) {
                return _this2.snackBar.open("INTENTO DE RECONEXI\xD3N #".concat(attempt), 'ERROR', {
                  duration: 10000
                });
              });
            }

            this.loadOrdenesGK();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            console.log(filterValue);

            if (filterValue.length > 0) {
              this.ordenesgkFiltered = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.ordenesgk, filterValue);
            } else {
              this.ordenesgkFiltered = JSON.parse(JSON.stringify(this.ordenesgk));
            }
          }
        }]);

        return SeguimientoComponent;
      }();

      SeguimientoComponent.ɵfac = function SeguimientoComponent_Factory(t) {
        return new (t || SeguimientoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_orden_gk_service__WEBPACK_IMPORTED_MODULE_7__["OrdenGkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_desktop_notification_service__WEBPACK_IMPORTED_MODULE_11__["DesktopNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]));
      };

      SeguimientoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: SeguimientoComponent,
        selectors: [["app-seguimiento"]],
        viewQuery: function SeguimientoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tblOrdenesGk = _t.first);
          }
        },
        decls: 44,
        vars: 5,
        consts: [[1, "fullWidth", "margenes"], ["matInput", "", "placeholder", "Buscar pedido...", 3, "keyup"], ["input", ""], ["name", "estatusOrden", "aria-label", "Filtro por esatus", 1, "margenes"], ["value", "", 3, "click"], ["value", "3", 3, "click"], ["value", "6", 3, "click"], ["value", "2", 3, "click"], [1, "mat-elevation-z8", "margenes"], ["mat-table", "", "multiTemplateDataRows", "", 3, "dataSource"], ["tblOrdenesGk", ""], ["matColumnDef", "orden_gk"], ["mat-header-cell", "", "style", "text-align: center !important;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "ctxt", 4, "matCellDef"], ["matColumnDef", "comanda_origen"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fhcreacion"], ["matColumnDef", "numero_orden"], ["matColumnDef", "estatus_orden_gk"], ["matColumnDef", "total"], ["mat-header-cell", "", "style", "text-align: right !important;", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "rtxt", 4, "matCellDef"], ["matColumnDef", "acciones"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "backgroundColor", "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", "", 2, "text-align", "center !important"], ["mat-cell", "", 1, "ctxt"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 2, "text-align", "right !important"], ["mat-cell", "", 1, "rtxt"], ["direction", "left"], ["mat-fab", ""], [2, "font-size", "18pt !important"], ["mat-mini-fab", "", "color", "warn", 3, "disabled", "click"], [2, "font-size", "16pt !important"], ["mat-mini-fab", "", "color", "accent", 3, "disabled", "click"], ["mat-mini-fab", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], [1, "example-element-detail"], [2, "width", "100%", "background-color", "#f5f5f5", "table-layout", "fixed"], [4, "ngIf"], [1, "ltxt", "atiende-style"], [1, "ctxt", "num-width"], [1, "ltxt", "articulo-style"], [1, "rtxt", "num-width"], [4, "ngFor", "ngForOf"], [1, "pendientes"], [1, "atiende-style"], ["mat-button", "", "color", "accent", 3, "disabled", "click", 4, "ngIf"], [1, "articulo-style"], ["mat-button", "", "color", "accent", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [1, "mat-row"], [1, "mat-cell"]],
        template: function SeguimientoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SeguimientoComponent_Template_input_keyup_3_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-button-toggle-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_Template_mat_button_toggle_click_6_listener() {
              return ctx.loadOrdenesGK();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "En proceso");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-button-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_Template_mat_button_toggle_click_8_listener() {
              return ctx.loadOrdenesGK(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Incompletas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-button-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_Template_mat_button_toggle_click_10_listener() {
              return ctx.loadOrdenesGK(6);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Terminadas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-button-toggle", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SeguimientoComponent_Template_mat_button_toggle_click_12_listener() {
              return ctx.loadOrdenesGK(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Canceladas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "table", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SeguimientoComponent_th_18_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SeguimientoComponent_td_19_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SeguimientoComponent_th_21_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SeguimientoComponent_td_22_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SeguimientoComponent_th_24_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SeguimientoComponent_td_25_Template, 3, 4, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, SeguimientoComponent_th_27_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SeguimientoComponent_td_28_Template, 2, 1, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SeguimientoComponent_th_30_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SeguimientoComponent_td_31_Template, 2, 1, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SeguimientoComponent_th_33_Template, 2, 0, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SeguimientoComponent_td_34_Template, 3, 4, "td", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SeguimientoComponent_th_36_Template, 2, 0, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SeguimientoComponent_td_37_Template, 14, 3, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SeguimientoComponent_td_39_Template, 22, 5, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SeguimientoComponent_tr_40_Template, 1, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, SeguimientoComponent_tr_41_Template, 1, 4, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, SeguimientoComponent_tr_42_Template, 1, 0, "tr", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, SeguimientoComponent_tr_43_Template, 3, 1, "tr", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.ordenesgkFiltered);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_17__["EcoFabSpeedDialComponent"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_17__["EcoFabSpeedDialTriggerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_17__["EcoFabSpeedDialActionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n    height: 0;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n    background: #777;\r\n}\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n}\r\n\r\n.tamanioAmigable[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  width: 10% !important;  \r\n  min-height: 55px;  \r\n}\r\n\r\n.btnCelSize[_ngcontent-%COMP%] { \r\n    min-width: 55px;   \r\n    width: 100%;\r\n}\r\n\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n}\r\n\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n}\r\n\r\n.example-element-description[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n}\r\n\r\n.long-notes[_ngcontent-%COMP%] {\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.num-width[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n}\r\n\r\n.atiende-style[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n}\r\n\r\n.articulo-style[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n}\r\n\r\n.margenes[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.pendientes[_ngcontent-%COMP%] {\r\n    background-color: #f7dc6f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ3VpbWllbnRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiOzs7S0FHQztBQUNMOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNlZ3VpbWllbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4udGFtYW5pb0FtaWdhYmxlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50OyAgXHJcbiAgbWluLWhlaWdodDogNTVweDsgIFxyXG59XHJcblxyXG4uYnRuQ2VsU2l6ZSB7IFxyXG4gICAgbWluLXdpZHRoOiA1NXB4OyAgIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLypcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyYXk7XHJcbiAgICAqL1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5sb25nLW5vdGVzIHtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5udW0td2lkdGgge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLmF0aWVuZGUtc3R5bGUge1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmFydGljdWxvLXN0eWxlIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5tYXJnZW5lcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5wZW5kaWVudGVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2RjNmY7XHJcbn0iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px',
            minHeight: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }
      });
      /***/
    },

    /***/
    "7adW":
    /*!***************************************************************!*\
      !*** ./src/app/ghost-kitchen/ghost-kitchen-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: GhostKitchenRoutingModule */

    /***/
    function adW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GhostKitchenRoutingModule", function () {
        return GhostKitchenRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../admin/services/authguard.service */
      "0T/Q");
      /* harmony import */


      var _components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/seguimiento/seguimiento.component */
      "+d8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'seguimiento',
        component: _components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_2__["SeguimientoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }];

      var GhostKitchenRoutingModule = function GhostKitchenRoutingModule() {
        _classCallCheck(this, GhostKitchenRoutingModule);
      };

      GhostKitchenRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: GhostKitchenRoutingModule
      });
      GhostKitchenRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function GhostKitchenRoutingModule_Factory(t) {
          return new (t || GhostKitchenRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GhostKitchenRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "jaxi":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js ***!
      \*******************************************************************************/

    /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule */

    /***/
    function jaxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
        return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP", function () {
        return MAT_BUTTON_TOGGLE_GROUP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
        return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
        return MatButtonToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
        return MatButtonToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
        return MatButtonToggleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
        return MatButtonToggleModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to configure the
       * default options for all button toggles within an app.
       */


      var _c0 = ["button"];
      var _c1 = ["*"];
      var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
       * It serves as alternative token to the actual `MatButtonToggleGroup` class which
       * could cause unnecessary retention of the class and its component metadata.
       */

      var MAT_BUTTON_TOGGLE_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatButtonToggleGroup');
      /**
       * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * @docs-private
       */

      var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
          return MatButtonToggleGroup;
        }),
        multi: true
      };
      var _uniqueIdCounter = 0;
      /** Change event object emitted by MatButtonToggle. */

      var MatButtonToggleChange = function MatButtonToggleChange(
      /** The MatButtonToggle that emits the event. */
      source,
      /** The value assigned to the MatButtonToggle. */
      value) {
        _classCallCheck(this, MatButtonToggleChange);

        this.source = source;
        this.value = value;
      };
      /** Exclusive selection button toggle group that behaves like a radio-button group. */


      var MatButtonToggleGroup = /*#__PURE__*/function () {
        function MatButtonToggleGroup(_changeDetector, defaultOptions) {
          _classCallCheck(this, MatButtonToggleGroup);

          this._changeDetector = _changeDetector;
          this._vertical = false;
          this._multiple = false;
          this._disabled = false;
          /**
           * The method to be called in order to update ngModel.
           * Now `ngModel` binding is not supported in multiple selection mode.
           */

          this._controlValueAccessorChangeFn = function () {};
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */


          this._onTouched = function () {};

          this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
          /**
           * Event that emits whenever the value of the group changes.
           * Used to facilitate two-way data binding.
           * @docs-private
           */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /** Event emitted when the group's value changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        }
        /** `name` attribute for the underlying `input` element. */


        _createClass(MatButtonToggleGroup, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this$_selectionModel;

            (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(function (toggle) {
              return toggle.checked;
            })));
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value Value to be set to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /** Dispatch change event with current selection and group value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            var selected = this.selected;
            var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
            var event = new MatButtonToggleChange(source, this.value);

            this._controlValueAccessorChangeFn(event.value);

            this.change.emit(event);
          }
          /**
           * Syncs a button toggle's selected state with the model value.
           * @param toggle Toggle to be synced.
           * @param select Whether the toggle should be selected.
           * @param isUserInput Whether the change was a result of a user interaction.
           * @param deferEvents Whether to defer emitting the change events.
           */

        }, {
          key: "_syncButtonToggle",
          value: function _syncButtonToggle(toggle, select) {
            var _this3 = this;

            var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            // Deselect the currently-selected toggle, if we're in single-selection
            // mode and the button being toggled isn't selected at the moment.
            if (!this.multiple && this.selected && !toggle.checked) {
              this.selected.checked = false;
            }

            if (this._selectionModel) {
              if (select) {
                this._selectionModel.select(toggle);
              } else {
                this._selectionModel.deselect(toggle);
              }
            } else {
              deferEvents = true;
            } // We need to defer in some cases in order to avoid "changed after checked errors", however
            // the side-effect is that we may end up updating the model value out of sequence in others
            // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


            if (deferEvents) {
              Promise.resolve().then(function () {
                return _this3._updateModelValue(isUserInput);
              });
            } else {
              this._updateModelValue(isUserInput);
            }
          }
          /** Checks whether a button toggle is selected. */

        }, {
          key: "_isSelected",
          value: function _isSelected(toggle) {
            return this._selectionModel && this._selectionModel.isSelected(toggle);
          }
          /** Determines whether a button toggle should be checked on init. */

        }, {
          key: "_isPrechecked",
          value: function _isPrechecked(toggle) {
            if (typeof this._rawValue === 'undefined') {
              return false;
            }

            if (this.multiple && Array.isArray(this._rawValue)) {
              return this._rawValue.some(function (value) {
                return toggle.value != null && value === toggle.value;
              });
            }

            return toggle.value === this._rawValue;
          }
          /** Updates the selection state of the toggles in the group based on a value. */

        }, {
          key: "_setSelectionByValue",
          value: function _setSelectionByValue(value) {
            var _this4 = this;

            this._rawValue = value;

            if (!this._buttonToggles) {
              return;
            }

            if (this.multiple && value) {
              if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Value must be an array in multiple-selection mode.');
              }

              this._clearSelection();

              value.forEach(function (currentValue) {
                return _this4._selectValue(currentValue);
              });
            } else {
              this._clearSelection();

              this._selectValue(value);
            }
          }
          /** Clears the selected toggles. */

        }, {
          key: "_clearSelection",
          value: function _clearSelection() {
            this._selectionModel.clear();

            this._buttonToggles.forEach(function (toggle) {
              return toggle.checked = false;
            });
          }
          /** Selects a value if there's a toggle that corresponds to it. */

        }, {
          key: "_selectValue",
          value: function _selectValue(value) {
            var correspondingOption = this._buttonToggles.find(function (toggle) {
              return toggle.value != null && toggle.value === value;
            });

            if (correspondingOption) {
              correspondingOption.checked = true;

              this._selectionModel.select(correspondingOption);
            }
          }
          /** Syncs up the group's value with the model and emits the change event. */

        }, {
          key: "_updateModelValue",
          value: function _updateModelValue(isUserInput) {
            // Only emit the change event for user input.
            if (isUserInput) {
              this._emitChangeEvent();
            } // Note: we emit this one no matter whether it was a user interaction, because
            // it is used by Angular to sync up the two-way data binding.


            this.valueChange.emit(this.value);
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            var _this5 = this;

            this._name = value;

            if (this._buttonToggles) {
              this._buttonToggles.forEach(function (toggle) {
                toggle.name = _this5._name;

                toggle._markForCheck();
              });
            }
          }
          /** Whether the toggle group is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Value of the toggle group. */

        }, {
          key: "value",
          get: function get() {
            var selected = this._selectionModel ? this._selectionModel.selected : [];

            if (this.multiple) {
              return selected.map(function (toggle) {
                return toggle.value;
              });
            }

            return selected[0] ? selected[0].value : undefined;
          },
          set: function set(newValue) {
            this._setSelectionByValue(newValue);

            this.valueChange.emit(this.value);
          }
          /** Selected button toggles in the group. */

        }, {
          key: "selected",
          get: function get() {
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : selected[0] || null;
          }
          /** Whether multiple button toggles can be selected. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
          /** Whether multiple button toggle group is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (this._buttonToggles) {
              this._buttonToggles.forEach(function (toggle) {
                return toggle._markForCheck();
              });
            }
          }
        }]);

        return MatButtonToggleGroup;
      }();

      MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) {
        return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
      };

      MatButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: MatButtonToggleGroup,
        selectors: [["mat-button-toggle-group"]],
        contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
        hostVars: 5,
        hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          appearance: "appearance",
          name: "name",
          vertical: "vertical",
          value: "value",
          multiple: "multiple",
          disabled: "disabled"
        },
        outputs: {
          valueChange: "valueChange",
          change: "change"
        },
        exportAs: ["matButtonToggleGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
          provide: MAT_BUTTON_TOGGLE_GROUP,
          useExisting: MatButtonToggleGroup
        }])]
      });

      MatButtonToggleGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
            return MatButtonToggle;
          }), {
            // Note that this would technically pick up toggles
            // from nested groups, but that's not a case that we support.
            descendants: true
          }]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mat-button-toggle-group',
            providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
              provide: MAT_BUTTON_TOGGLE_GROUP,
              useExisting: MatButtonToggleGroup
            }],
            host: {
              'role': 'group',
              'class': 'mat-button-toggle-group',
              '[attr.aria-disabled]': 'disabled',
              '[class.mat-button-toggle-vertical]': 'vertical',
              '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
            },
            exportAs: 'matButtonToggleGroup'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          _buttonToggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
              return MatButtonToggle;
            }), {
              // Note that this would technically pick up toggles
              // from nested groups, but that's not a case that we support.
              descendants: true
            }]
          }]
        });
      })(); // Boilerplate for applying mixins to the MatButtonToggle class.

      /** @docs-private */


      var MatButtonToggleBase = function MatButtonToggleBase() {
        _classCallCheck(this, MatButtonToggleBase);
      };

      var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
      /** Single button inside of a toggle group. */


      var MatButtonToggle = /*#__PURE__*/function (_MatButtonToggleMixin) {
        _inherits(MatButtonToggle, _MatButtonToggleMixin);

        var _super = _createSuper(MatButtonToggle);

        function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
          var _this6;

          _classCallCheck(this, MatButtonToggle);

          _this6 = _super.call(this);
          _this6._changeDetectorRef = _changeDetectorRef;
          _this6._elementRef = _elementRef;
          _this6._focusMonitor = _focusMonitor;
          _this6._isSingleSelector = false;
          _this6._checked = false;
          /**
           * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
           */

          _this6.ariaLabelledby = null;
          _this6._disabled = false;
          /** Event emitted when the group value changes. */

          _this6.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          var parsedTabIndex = Number(defaultTabIndex);
          _this6.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
          _this6.buttonToggleGroup = toggleGroup;
          _this6.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
          return _this6;
        }
        /** Unique ID for the underlying `button` element. */


        _createClass(MatButtonToggle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var group = this.buttonToggleGroup;
            this._isSingleSelector = group && !group.multiple;
            this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

            if (this._isSingleSelector) {
              this.name = group.name;
            }

            if (group) {
              if (group._isPrechecked(this)) {
                this.checked = true;
              } else if (group._isSelected(this) !== this._checked) {
                // As as side effect of the circular dependency between the toggle group and the button,
                // we may end up in a state where the button is supposed to be checked on init, but it
                // isn't, because the checked value was assigned too early. This can happen when Ivy
                // assigns the static input value before the `ngOnInit` has run.
                group._syncButtonToggle(this, this._checked);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var group = this.buttonToggleGroup;

            this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
            // on the next tick in order to avoid "changed after checked" errors.


            if (group && group._isSelected(this)) {
              group._syncButtonToggle(this, false, false, true);
            }
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._buttonElement.nativeElement.focus(options);
          }
          /** Checks the button toggle due to an interaction with the underlying native button. */

        }, {
          key: "_onButtonClick",
          value: function _onButtonClick() {
            var newChecked = this._isSingleSelector ? true : !this._checked;

            if (newChecked !== this._checked) {
              this._checked = newChecked;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

                this.buttonToggleGroup._onTouched();
              }
            } // Emit a change event when it's the single selector


            this.change.emit(new MatButtonToggleChange(this, this.value));
          }
          /**
           * Marks the button toggle as needing checking for change detection.
           * This method is exposed because the parent button toggle group will directly
           * update bound properties of the radio button.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            // When the group value changes, the button will not be notified.
            // Use `markForCheck` to explicit update button toggle's status.
            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "buttonId",
          get: function get() {
            return "".concat(this.id, "-button");
          }
          /** The appearance style of the button. */

        }, {
          key: "appearance",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
          },
          set: function set(value) {
            this._appearance = value;
          }
          /** Whether the button is checked. */

        }, {
          key: "checked",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (newValue !== this._checked) {
              this._checked = newValue;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked);
              }

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the button is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }]);

        return MatButtonToggle;
      }(_MatButtonToggleMixinBase);

      MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) {
        return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
      };

      MatButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MatButtonToggle,
        selectors: [["mat-button-toggle"]],
        viewQuery: function MatButtonToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
          }
        },
        hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
        hostVars: 12,
        hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
              return ctx.focus();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          tabIndex: "tabIndex",
          appearance: "appearance",
          checked: "checked",
          disabled: "disabled",
          id: "id",
          name: "name",
          ariaLabel: ["aria-label", "ariaLabel"],
          value: "value"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["matButtonToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 9,
        consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
        template: function MatButtonToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
              return ctx._onButtonClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]],
        styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatButtonToggle.ctorParameters = function () {
        return [{
          type: MatButtonToggleGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_GROUP]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatButtonToggle.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        _buttonElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['button']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mat-button-toggle',
            template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <span class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </span>\n</button>\n\n<span class=\"mat-button-toggle-focus-overlay\"></span>\n<span class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            exportAs: 'matButtonToggle',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            inputs: ['disableRipple'],
            host: {
              '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
              '[class.mat-button-toggle-checked]': 'checked',
              '[class.mat-button-toggle-disabled]': 'disabled',
              '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
              'class': 'mat-button-toggle',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[attr.id]': 'id',
              '[attr.name]': 'null',
              '(focus)': 'focus()',
              'role': 'presentation'
            },
            styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
          }]
        }], function () {
          return [{
            type: MatButtonToggleGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_GROUP]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
          }],
          _buttonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['button']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatButtonToggleModule = function MatButtonToggleModule() {
        _classCallCheck(this, MatButtonToggleModule);
      };

      MatButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: MatButtonToggleModule
      });
      MatButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function MatButtonToggleModule_Factory(t) {
          return new (t || MatButtonToggleModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatButtonToggleModule, {
          declarations: function declarations() {
            return [MatButtonToggleGroup, MatButtonToggle];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
            declarations: [MatButtonToggleGroup, MatButtonToggle]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=button-toggle.js.map

      /***/

    },

    /***/
    "xu/a":
    /*!*******************************************************!*\
      !*** ./src/app/ghost-kitchen/ghost-kitchen.module.ts ***!
      \*******************************************************/

    /*! exports provided: GhostKitchenModule */

    /***/
    function xuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GhostKitchenModule", function () {
        return GhostKitchenModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../admin/admin.module */
      "jkDv");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");
      /* harmony import */


      var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @ecodev/fab-speed-dial */
      "JbvS");
      /* harmony import */


      var _ghost_kitchen_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./ghost-kitchen-routing.module */
      "7adW");
      /* harmony import */


      var _components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/seguimiento/seguimiento.component */
      "+d8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GhostKitchenModule = function GhostKitchenModule() {
        _classCallCheck(this, GhostKitchenModule);
      };

      GhostKitchenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({
        type: GhostKitchenModule
      });
      GhostKitchenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({
        factory: function GhostKitchenModule_Factory(t) {
          return new (t || GhostKitchenModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ghost_kitchen_routing_module__WEBPACK_IMPORTED_MODULE_33__["GhostKitchenRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_32__["EcoFabSpeedDialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_31__["MatKeyboardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](GhostKitchenModule, {
          declarations: [_components_seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_34__["SeguimientoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ghost_kitchen_routing_module__WEBPACK_IMPORTED_MODULE_33__["GhostKitchenRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_32__["EcoFabSpeedDialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_28__["MatBadgeModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_31__["MatKeyboardModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=ghost-kitchen-ghost-kitchen-module-es5.js.map