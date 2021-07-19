(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~restaurante-restaurante-module~wms-wms-module"], {
    /***/
    "1XRV":
    /*!*******************************************************************!*\
      !*** ./src/app/wms/components/produccion/produccion.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProduccionComponent */

    /***/
    function XRV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProduccionComponent", function () {
        return ProduccionComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/transformacion.service */
      "KWN0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../ingreso/form-ingreso/form-ingreso.component */
      "koTg");

      var _c0 = ["frmIngreso"];

      var ProduccionComponent = /*#__PURE__*/function () {
        function ProduccionComponent(ls, snackBar, transformacionSrvc) {
          var _this = this;

          _classCallCheck(this, ProduccionComponent);

          this.ls = ls;
          this.snackBar = snackBar;
          this.transformacionSrvc = transformacionSrvc;
          this.bloqueoBotones = false;

          this.transformar = function () {
            _this.bloqueoBotones = true;
            _this.ingreso = _this.frmIngreso.ingreso;
            _this.produccion = {
              tipo_movimiento: _this.ingreso.tipo_movimiento,
              fecha: _this.ingreso.fecha,
              proveedor: _this.ingreso.proveedor,
              bodega: _this.ingreso.bodega,
              usuario: _this.ingreso.usuario,
              bodega_origen: _this.ingreso.bodega_origen,
              comentario: _this.ingreso.comentario,
              detalle: []
            };

            _this.frmIngreso.detallesIngreso.forEach(function (di) {
              return _this.produccion.detalle.push({
                articulo: di.articulo,
                cantidad: di.cantidad,
                precio_unitario: di.precio_unitario,
                precio_total: di.precio_total,
                presentacion: di.presentacion
              });
            });

            if (!!_this.produccion && !!_this.produccion.detalle && _this.produccion.detalle.length > 0) {
              _this.transformacionSrvc.producir(_this.produccion).subscribe(function (res) {
                _this.bloqueoBotones = false;

                if (res.exito) {
                  _this.frmIngreso.resetIngreso();

                  _this.frmIngreso.detallesIngreso = [];

                  _this.snackBar.open('Producto generado con éxito...', 'Producción', {
                    duration: 5000
                  });
                } else {
                  _this.snackBar.open("ERROR: ".concat(res.mensaje), 'Producción', {
                    duration: 3000
                  });
                }
              });
            } else {
              _this.bloqueoBotones = false;

              _this.snackBar.open("Faltan datos necesario. Favor complete los datos e intente de nuevo.", 'Transformación', {
                duration: 3000
              });
            }
          };

          this.doSomething = function () {};
        }

        _createClass(ProduccionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ingreso = {
              ingreso: null,
              tipo_movimiento: null,
              fecha: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
              bodega: null,
              usuario: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr || 0,
              comentario: null,
              proveedor: null
            };
          }
        }]);

        return ProduccionComponent;
      }();

      ProduccionComponent.ɵfac = function ProduccionComponent_Factory(t) {
        return new (t || ProduccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_transformacion_service__WEBPACK_IMPORTED_MODULE_5__["TransformacionService"]));
      };

      ProduccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProduccionComponent,
        selectors: [["app-produccion"]],
        viewQuery: function ProduccionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmIngreso = _t.first);
          }
        },
        decls: 11,
        vars: 4,
        consts: [[1, "row"], [1, "col", "m12", "s12", 2, "padding-bottom", "5px !important"], ["align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [2, "font-size", "18pt"], [1, "col", "m12", "s12"], [3, "produccion", "ingreso", "saveToDB", "ingresoChange", "ingresoSavedEv"], ["frmIngreso", ""]],
        template: function ProduccionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProduccionComponent_Template_button_click_3_listener() {
              return ctx.transformar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "transform");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\xA0Producir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "app-form-ingreso", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ingresoChange", function ProduccionComponent_Template_app_form_ingreso_ingresoChange_9_listener($event) {
              return ctx.ingreso = $event;
            })("ingresoSavedEv", function ProduccionComponent_Template_app_form_ingreso_ingresoSavedEv_9_listener() {
              return ctx.doSomething();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("produccion", true)("ingreso", ctx.ingreso)("saveToDB", false);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_8__["FormIngresoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWNjaW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "3e6T":
    /*!*********************************************************!*\
      !*** ./src/app/wms/services/tipo-movimiento.service.ts ***!
      \*********************************************************/

    /*! exports provided: TipoMovimientoService */

    /***/
    function e6T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TipoMovimientoService", function () {
        return TipoMovimientoService;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! qs */
      "Qyje");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TipoMovimientoService = /*#__PURE__*/function () {
        // private usrToken: string = null;
        function TipoMovimientoService(http) {
          _classCallCheck(this, TipoMovimientoService);

          this.http = http;
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"](); // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
        }

        _createClass(TipoMovimientoService, [{
          key: "get",
          value: function get() {
            var fltr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            /* const httpOptions = {
              headers: new HttpHeaders({
                Authorization: this.usrToken
              })
            }; */
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlCatalogos, "/get_tipo_movimiento?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)) // , httpOptions
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return TipoMovimientoService;
      }();

      TipoMovimientoService.ɵfac = function TipoMovimientoService_Factory(t) {
        return new (t || TipoMovimientoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      TipoMovimientoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: TipoMovimientoService,
        factory: TipoMovimientoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "6UxG":
    /*!*****************************************************************************!*\
      !*** ./src/app/wms/components/reporte/existencias/existencias.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ExistenciasComponent */

    /***/
    function UxG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExistenciasComponent", function () {
        return ExistenciasComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../admin/services/acceso-usuario.service */
      "2qVp");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/components/rpt-botones/rpt-botones.component */
      "NU9O");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function ExistenciasComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sede_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sede_r4.sede.sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sede_r4.sede.nombre, " ");
        }
      }

      function ExistenciasComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bod_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bod_r5.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bod_r5.descripcion, " ");
        }
      }

      function ExistenciasComponent_app_cargando_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ExistenciasComponent = /*#__PURE__*/function () {
        function ExistenciasComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc) {
          var _this2 = this;

          _classCallCheck(this, ExistenciasComponent);

          this.snackBar = snackBar;
          this.pdfServicio = pdfServicio;
          this.sedeSrvc = sedeSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.bodegas = [];
          this.sedes = [];
          this.params = {};
          this.titulo = "Existencias";
          this.cargando = false;
          this.configBotones = {
            showPdf: true,
            showHtml: false,
            showExcel: true
          };

          this.getSede = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this2.sedeSrvc.getSedes(params).subscribe(function (res) {
              _this2.sedes = res;
            });
          };

          this.getBodega = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this2.bodegaSrvc.get(params).subscribe(function (res) {
              _this2.bodegas = res;
            });
          };

          this.excelClick = function () {
            _this2.params._excel = 1;
            _this2.cargando = true;

            _this2.pdfServicio.getReporteExistencia(_this2.params).subscribe(function (res) {
              _this2.cargando = false;

              if (res) {
                var blob = new Blob([res], {
                  type: 'application/vnd.ms-excel'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this2.titulo, ".xls"));
              } else {
                _this2.snackBar.open('No se pudo generar el reporte...', _this2.titulo, {
                  duration: 3000
                });
              }
            });
          };

          this.onSedesSelected = function (obj) {
            _this2.getBodega({
              sede: _this2.params.sede
            });
          };

          this.resetParams = function () {
            _this2.params = {};
            _this2.cargando = false;
          };
        }

        _createClass(ExistenciasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.params.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
            this.getSede(); //this.getBodega();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.params._excel = 0;
            this.cargando = true;
            this.pdfServicio.getReporteExistencia(this.params).subscribe(function (res) {
              _this3.cargando = false;

              if (res) {
                var blob = new Blob([res], {
                  type: 'application/pdf'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this3.titulo, ".pdf"));
              } else {
                _this3.snackBar.open('No se pudo generar el reporte...', _this3.titulo, {
                  duration: 3000
                });
              }
            });
          }
        }]);

        return ExistenciasComponent;
      }();

      ExistenciasComponent.ɵfac = function ExistenciasComponent_Factory(t) {
        return new (t || ExistenciasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__["AccesoUsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_7__["BodegaService"]));
      };

      ExistenciasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ExistenciasComponent,
        selectors: [["app-existencias"]],
        decls: 24,
        vars: 9,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmRptExistencias", "ngForm"], [1, "fullWidth"], ["name", "sede", "multiple", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "bodega", "multiple", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["align", "end"], [3, "configuracion", "excelClick", "pdfClick", "resetParamsClick"], [4, "ngIf"], [3, "value"]],
        template: function ExistenciasComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Reporte de existencias");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Sede");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_mat_select_ngModelChange_12_listener($event) {
              return ctx.params.sede = $event;
            })("selectionChange", function ExistenciasComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.onSedesSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ExistenciasComponent_mat_option_13_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Bodega");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_mat_select_ngModelChange_17_listener($event) {
              return ctx.params.bodega = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ExistenciasComponent_mat_option_18_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExistenciasComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.params.fecha = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-rpt-botones", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("excelClick", function ExistenciasComponent_Template_app_rpt_botones_excelClick_22_listener() {
              return ctx.excelClick();
            })("pdfClick", function ExistenciasComponent_Template_app_rpt_botones_pdfClick_22_listener() {
              return ctx.onSubmit();
            })("resetParamsClick", function ExistenciasComponent_Template_app_rpt_botones_resetParamsClick_22_listener() {
              return ctx.resetParams();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ExistenciasComponent_app_cargando_23_Template, 1, 0, "app-cargando", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.sede);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sedes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.bodega);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodegas);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fecha)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuracion", ctx.configBotones);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargando);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__["CargandoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGlzdGVuY2lhcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "BFdU":
    /*!********************************************************************!*\
      !*** ./src/app/wms/components/fisico/reporte/reporte.component.ts ***!
      \********************************************************************/

    /*! exports provided: ReporteComponent */

    /***/
    function BFdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReporteComponent", function () {
        return ReporteComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../admin/services/sede.service */
      "IHy4");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _services_fisico_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/fisico.service */
      "MArN");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function ReporteComponent_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReporteComponent_mat_icon_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReporteComponent_mat_card_content_12_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bod_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bod_r9.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bod_r9.descripcion, " ");
        }
      }

      function ReporteComponent_mat_card_content_12_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sede_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sede_r10.sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sede_r10.nombre, " ");
        }
      }

      function ReporteComponent_mat_card_content_12_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cat_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r11.descripcion, " ");
        }
      }

      function ReporteComponent_mat_card_content_12_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcatpadre_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", subcatpadre_r12.categoria_grupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subcatpadre_r12.descripcion, " ");
        }
      }

      function ReporteComponent_mat_card_content_12_app_cargando_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function ReporteComponent_mat_card_content_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReporteComponent_mat_card_content_12_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return _r3.form.valid && ctx_r13.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Bodega");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteComponent_mat_card_content_12_Template_mat_select_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.params.bodega = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ReporteComponent_mat_card_content_12_mat_option_7_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sede");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteComponent_mat_card_content_12_Template_mat_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.params.sede = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReporteComponent_mat_card_content_12_mat_option_12_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ReporteComponent_mat_card_content_12_Template_mat_select_selectionChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.onCategoriaSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ReporteComponent_mat_card_content_12_mat_option_17_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Sub-categor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteComponent_mat_card_content_12_Template_mat_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.params.categoria_grupo_grupo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ReporteComponent_mat_card_content_12_mat_option_22_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteComponent_mat_card_content_12_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.params.fecha = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReporteComponent_mat_card_content_12_Template_mat_checkbox_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return +(ctx_r20.params._excel = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Generar en Excel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "GENERAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ReporteComponent_mat_card_content_12_app_cargando_30_Template, 1, 0, "app-cargando", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.params.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.bodegas);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.params.sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.sedes);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.categorias);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.params.categoria_grupo_grupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.categoriasGruposPadre);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.params.fecha)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", +ctx_r2.params._excel);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r3.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.cargando);
        }
      }

      var ReporteComponent = /*#__PURE__*/function () {
        function ReporteComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc, articuloSrvc, fisicoSrvc, ls) {
          var _this4 = this;

          _classCallCheck(this, ReporteComponent);

          this.snackBar = snackBar;
          this.pdfServicio = pdfServicio;
          this.sedeSrvc = sedeSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.articuloSrvc = articuloSrvc;
          this.fisicoSrvc = fisicoSrvc;
          this.ls = ls;
          this.bodegas = [];
          this.sedes = [];
          this.params = {};
          this.categorias = [];
          this.categoriasGruposPadre = [];
          this.categoriasGrupos = [];
          this.titulo = "Fisico";
          this.cargando = false;
          this.showReporte = true;

          this.getSede = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this4.sedeSrvc.get(params).subscribe(function (res) {
              _this4.sedes = res;
            });
          };

          this.getBodega = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this4.bodegaSrvc.get(params).subscribe(function (res) {
              _this4.bodegas = res;
            });
          };

          this.loadCategorias = function () {
            _this4.articuloSrvc.getCategorias({
              sede: +_this4.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              //console.log(res);
              if (res) {
                _this4.categorias = res;
              }
            });
          };

          this.onCategoriaSelected = function (obj) {
            return _this4.loadSubCategorias(+obj.value.categoria);
          };

          this.loadSubCategorias = function (idcategoria) {
            _this4.articuloSrvc.getCategoriasGrupos({
              categoria: +idcategoria
            }).subscribe(function (res) {
              if (res) {
                _this4.categoriasGruposPadre = _this4.articuloSrvc.adaptCategoriaGrupoResponse(res);
                _this4.categoriasGrupos = _this4.categoriasGruposPadre;
              }
            });
          };

          this.onSubCategoriaPadreSelected = function (obj) {
            return _this4.loadSubCategoriasSubcategorias(+obj.value);
          };

          this.loadSubCategoriasSubcategorias = function (idsubcat) {
            _this4.articuloSrvc.getCategoriasGrupos({
              categoria_grupo_grupo: idsubcat
            }).subscribe(function (res) {
              if (res) {
                _this4.categoriasGrupos = _this4.articuloSrvc.adaptCategoriaGrupoResponse(res);
              }
            });
          };
        }

        _createClass(ReporteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSede();
            this.getBodega();
            this.loadCategorias();
            this.params.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            this.cargando = true;
            this.fisicoSrvc.generarInventarioFisico(this.params).subscribe(function (res) {
              _this5.cargando = false;
              console.log(res);

              if (res.exito) {
                _this5.pdfServicio.imprimirInventarioFisico(res.inventario, _this5.params).subscribe(function (resImp) {
                  if (_this5.params._excel) {
                    var blob = new Blob([resImp], {
                      type: 'application/vnd.ms-excel'
                    });
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this5.titulo, ".xls"));
                  } else {
                    var _blob = new Blob([resImp], {
                      type: 'application/pdf'
                    });

                    Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(_blob, "".concat(_this5.titulo, ".pdf"));
                  }
                });
              } else {
                _this5.snackBar.open('No se pudo generar el reporte... ' + res.mensaje, _this5.titulo, {
                  duration: 3000
                });
              }
            });
          }
        }]);

        return ReporteComponent;
      }();

      ReporteComponent.ɵfac = function ReporteComponent_Factory(t) {
        return new (t || ReporteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_sede_service__WEBPACK_IMPORTED_MODULE_6__["SedeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_7__["BodegaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_fisico_service__WEBPACK_IMPORTED_MODULE_9__["FisicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalstorageService"]));
      };

      ReporteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ReporteComponent,
        selectors: [["app-reporte"]],
        decls: 13,
        vars: 3,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], [1, "col"], [1, "col", 2, "float", "right"], ["mat-button", "", "type", "button", "color", "accent", 3, "click"], ["class", "iconFontSize", 4, "ngIf"], [4, "ngIf"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmFisicoReporte", "ngForm"], [1, "fullWidth"], ["name", "bodega", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sede", "required", "", 3, "ngModel", "ngModelChange"], ["name", "categoria", 3, "selectionChange"], ["name", "categoriaGrupoPadre", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Fecha", "readonly", "", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "excel", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", "color", "accent", "type", "submit", 3, "disabled"], [3, "value"]],
        template: function ReporteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Inventario F\xEDsico");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteComponent_Template_button_click_9_listener() {
              return ctx.showReporte = !ctx.showReporte;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ReporteComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReporteComponent_mat_icon_11_Template, 2, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReporteComponent_mat_card_content_12_Template, 31, 13, "mat-card-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showReporte);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showReporte);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showReporte);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_21__["CargandoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "CFi0":
    /*!******************************************************************************************************!*\
      !*** ./src/app/wms/components/producto/replicar-a-sedes-dialog/replicar-a-sedes-dialog.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ReplicarASedesDialogComponent */

    /***/
    function CFi0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplicarASedesDialogComponent", function () {
        return ReplicarASedesDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../replicar-a-sedes/replicar-a-sedes.component */
      "bRC8");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ReplicarASedesDialogComponent = /*#__PURE__*/function () {
        function ReplicarASedesDialogComponent(dialogRef, data) {
          _classCallCheck(this, ReplicarASedesDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.articulo = null;
        }

        _createClass(ReplicarASedesDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.articulo) {
              this.articulo = this.data.articulo;
            }
          }
        }]);

        return ReplicarASedesDialogComponent;
      }();

      ReplicarASedesDialogComponent.ɵfac = function ReplicarASedesDialogComponent_Factory(t) {
        return new (t || ReplicarASedesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ReplicarASedesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReplicarASedesDialogComponent,
        selectors: [["app-replicar-a-sedes-dialog"]],
        decls: 5,
        vars: 1,
        consts: [["mat-dialog-content", ""], [3, "articulo"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"]],
        template: function ReplicarASedesDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-replicar-asedes", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReplicarASedesDialogComponent_Template_button_click_3_listener() {
              return ctx.dialogRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Terminar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("articulo", ctx.articulo);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_2__["ReplicarASedesComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBsaWNhci1hLXNlZGVzLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "E6Vq":
    /*!********************************************************************************************!*\
      !*** ./src/app/wms/components/producto/lista-producto-alt/lista-producto-alt.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ListaProductoAltComponent */

    /***/
    function E6Vq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaProductoAltComponent", function () {
        return ListaProductoAltComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ListaProductoAltComponent_ng_container_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductoAltComponent_ng_container_2_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var sc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.clickOnSubCategoria(sc_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sc_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.bloqueoBotones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sc_r3.descripcion, " ");
        }
      }

      function ListaProductoAltComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductoAltComponent_ng_container_2_button_1_Template, 2, 2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var sc_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sc_r3.mostrarEnPos);
        }
      }

      function ListaProductoAltComponent_hr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function ListaProductoAltComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductoAltComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var art_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.clickOnArticulo(art_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var art_r9 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.bloqueoBotones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", art_r9.descripcion, " ");
        }
      }

      var ListaProductoAltComponent = /*#__PURE__*/function () {
        function ListaProductoAltComponent(articuloSrvc, ls) {
          var _this6 = this;

          _classCallCheck(this, ListaProductoAltComponent);

          this.articuloSrvc = articuloSrvc;
          this.ls = ls;
          this.bloqueoBotones = false;
          this.productoClickedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.categoriasFilledEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.categorias = [];
          this.subcategorias = [];
          this.articulos = [];

          this.loadArbolArticulos = function () {
            _this6.articuloSrvc.getArbolArticulos(_this6.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0).subscribe(function (res) {
              _this6.fillCategorias(res);
            });
          };

          this.fillCategorias = function (cats) {
            _this6.categorias = [];
            _this6.subcategorias = [];
            _this6.articulos = [];

            var _iterator = _createForOfIteratorHelper(cats),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cat = _step.value;

                _this6.categorias.push(cat);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this6.categoriasFilledEv.emit(_this6.categorias);
          };

          this.fillSubCategorias = function (subcats) {
            _this6.subcategorias = [];
            _this6.articulos = [];

            var _iterator2 = _createForOfIteratorHelper(subcats),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var subcat = _step2.value;

                _this6.subcategorias.push(subcat);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          };

          this.fillArticulos = function (arts) {
            _this6.articulos = [];

            var _iterator3 = _createForOfIteratorHelper(arts),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var a = _step3.value;

                _this6.articulos.push(a);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          };

          this.clickOnCategoria = function (cat) {
            if (cat.categoria_grupo.length > 0) {
              _this6.fillSubCategorias(cat.categoria_grupo);
            }
          };

          this.clickOnSubCategoria = function (scat) {
            if (scat.articulo.length > 0) {
              _this6.fillArticulos(scat.articulo);
            }
          };

          this.clickOnArticulo = function (art) {
            var obj = {
              id: +art.articulo,
              nombre: art.descripcion,
              precio: +art.precio,
              impresora: art.impresora,
              presentacion: art.presentacion,
              codigo: art.codigo,
              combo: art.combo,
              multiple: art.multiple
            }; // console.log(obj);

            _this6.productoClickedEv.emit(obj); // this.subcategorias = [];
            // this.articulos = [];

          };
        }

        _createClass(ListaProductoAltComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadArbolArticulos();
          }
        }]);

        return ListaProductoAltComponent;
      }();

      ListaProductoAltComponent.ɵfac = function ListaProductoAltComponent_Factory(t) {
        return new (t || ListaProductoAltComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_2__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]));
      };

      ListaProductoAltComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListaProductoAltComponent,
        selectors: [["app-lista-producto-alt"]],
        inputs: {
          bloqueoBotones: "bloqueoBotones"
        },
        outputs: {
          productoClickedEv: "productoClickedEv",
          categoriasFilledEv: "categoriasFilledEv"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-raised-button", "", "class", "btnAccion", "color", "warn", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "class", "btnAccion", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 1, "btnAccion", 3, "disabled", "click"]],
        template: function ListaProductoAltComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListaProductoAltComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListaProductoAltComponent_hr_3_Template, 1, 0, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListaProductoAltComponent_button_6_Template, 2, 2, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subcategorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articulos.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articulos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YS1wcm9kdWN0by1hbHQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "EZh4":
    /*!******************************************************************!*\
      !*** ./src/app/wms/components/egreso/egreso/egreso.component.ts ***!
      \******************************************************************/

    /*! exports provided: EgresoComponent */

    /***/
    function EZh4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgresoComponent", function () {
        return EgresoComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lista-egreso/lista-egreso.component */
      "m9rJ");
      /* harmony import */


      var _form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../form-egreso/form-egreso.component */
      "yRM+");

      var _c0 = ["lstEgreso"];
      var _c1 = ["frmEgreso"];

      var EgresoComponent = /*#__PURE__*/function () {
        function EgresoComponent(ls) {
          var _this7 = this;

          _classCallCheck(this, EgresoComponent);

          this.ls = ls;

          this.setEgreso = function (egr) {
            _this7.egreso = egr;

            _this7.frmEgreso.resetDetalleEgreso();

            _this7.frmEgreso.loadDetalleEgreso(+_this7.egreso.egreso);
          };

          this.refreshEgresoList = function () {
            _this7.lstEgresoComponent.loadEgresos();
          };

          this.egreso = {
            egreso: null,
            tipo_movimiento: null,
            bodega: null,
            fecha: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
            usuario: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr || 0,
            estatus_movimiento: 1,
            traslado: 0
          };
        }

        _createClass(EgresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EgresoComponent;
      }();

      EgresoComponent.ɵfac = function EgresoComponent_Factory(t) {
        return new (t || EgresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]));
      };

      EgresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EgresoComponent,
        selectors: [["app-egreso"]],
        viewQuery: function EgresoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lstEgresoComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmEgreso = _t.first);
          }
        },
        decls: 7,
        vars: 1,
        consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getEgresoEv"], ["lstEgreso", ""], [1, "col", "m7", "s12"], [3, "egreso", "egresoSavedEv"], ["frmEgreso", ""]],
        template: function EgresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-lista-egreso", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getEgresoEv", function EgresoComponent_Template_app_lista_egreso_getEgresoEv_2_listener($event) {
              return ctx.setEgreso($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-form-egreso", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("egresoSavedEv", function EgresoComponent_Template_app_form_egreso_egresoSavedEv_5_listener() {
              return ctx.refreshEgresoList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("egreso", ctx.egreso);
          }
        },
        directives: [_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_4__["ListaEgresoComponent"], _form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_5__["FormEgresoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3Jlc28uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "FHMA":
    /*!*************************************************************!*\
      !*** ./src/app/restaurante/services/reporte-pdf.service.ts ***!
      \*************************************************************/

    /*! exports provided: ReportePdfService */

    /***/
    function FHMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportePdfService", function () {
        return ReportePdfService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../admin/services/localstorage.service */
      "FY0D"); // import { Observable } from 'rxjs';


      var ReportePdfService = /*#__PURE__*/function () {
        function ReportePdfService(http, ls) {
          _classCallCheck(this, ReportePdfService);

          this.http = http;
          this.ls = ls;
          this.usrToken = null;
          this.httpOptions = {
            responseType: 'blob'
          };
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_2__["ServiceErrorHandler"]();
          this.usrToken = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar) ? this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).token : null;
          this.httpOptions['headers'] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': this.usrToken,
            'Accept': 'application/pdf'
          });
        }

        _createClass(ReportePdfService, [{
          key: "getReporteCaja",
          value: function getReporteCaja(params) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAppRestaurante, "/reporte/caja"), params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getReporteExistencia",
          value: function getReporteExistencia(params) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlWms, "/reporte/existencia"), params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getReporteValorizado",
          value: function getReporteValorizado(params) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlWms, "/reporte/valorizado"), params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "imprimirInventarioFisico",
          value: function imprimirInventarioFisico(id, params) {
            this.httpOptions['params'] = params;
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlWms, "/fisico/imprimir/").concat(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "imprimirReceta",
          value: function imprimirReceta(id) {
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlMantenimientos, "/articulo/imprimir_receta/").concat(id), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getReporteKardex",
          value: function getReporteKardex(params) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlWms, "/reporte/kardex"), params, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getReporteFactura",
          value: function getReporteFactura(params) {
            this.httpOptions['params'] = params;
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAppRestaurante, "/reporte/factura"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getReportePropina",
          value: function getReportePropina(params) {
            this.httpOptions['params'] = params;
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAppRestaurante, "/reporte/distribucion_propina"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getComanda",
          value: function getComanda(idcuenta) {
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAppRestaurante, "/comanda/imprimir/").concat(idcuenta, "/1"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return ReportePdfService;
      }();

      ReportePdfService.ɵfac = function ReportePdfService_Factory(t) {
        return new (t || ReportePdfService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]));
      };

      ReportePdfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: ReportePdfService,
        factory: ReportePdfService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "H8wP":
    /*!***************************************************************************!*\
      !*** ./src/app/wms/components/reporte/valorizado/valorizado.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ValorizadoComponent */

    /***/
    function H8wP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValorizadoComponent", function () {
        return ValorizadoComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../admin/services/acceso-usuario.service */
      "2qVp");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/components/rpt-botones/rpt-botones.component */
      "NU9O");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function ValorizadoComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sede_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sede_r4.sede.sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sede_r4.sede.nombre, " ");
        }
      }

      function ValorizadoComponent_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bod_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bod_r5.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bod_r5.descripcion, " ");
        }
      }

      function ValorizadoComponent_app_cargando_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ValorizadoComponent = /*#__PURE__*/function () {
        function ValorizadoComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc) {
          var _this8 = this;

          _classCallCheck(this, ValorizadoComponent);

          this.snackBar = snackBar;
          this.pdfServicio = pdfServicio;
          this.sedeSrvc = sedeSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.bodegas = [];
          this.sedes = [];
          this.params = {};
          this.titulo = "Valorizado";
          this.cargando = false;
          this.configBotones = {
            showPdf: true,
            showHtml: false,
            showExcel: true
          };

          this.getSede = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this8.sedeSrvc.getSedes(params).subscribe(function (res) {
              _this8.sedes = res;
            });
          };

          this.getBodega = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this8.bodegaSrvc.get(params).subscribe(function (res) {
              _this8.bodegas = res;
            });
          };

          this.excelClick = function () {
            _this8.params._excel = 1;
            _this8.cargando = true;

            _this8.pdfServicio.getReporteValorizado(_this8.params).subscribe(function (res) {
              _this8.cargando = false;

              if (res) {
                var blob = new Blob([res], {
                  type: 'application/vnd.ms-excel'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this8.titulo, ".xls"));
              } else {
                _this8.snackBar.open('No se pudo generar el reporte...', _this8.titulo, {
                  duration: 3000
                });
              }
            });
          };

          this.onSedesSelected = function (obj) {
            _this8.getBodega({
              sede: _this8.params.sede
            });
          };

          this.resetParams = function () {
            _this8.params = {};
            _this8.cargando = false;
          };
        }

        _createClass(ValorizadoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.params.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
            this.getSede();
            this.getBodega();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this9 = this;

            this.params._excel = 0;
            this.cargando = true;
            this.pdfServicio.getReporteValorizado(this.params).subscribe(function (res) {
              _this9.cargando = false;

              if (res) {
                var blob = new Blob([res], {
                  type: 'application/pdf'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this9.titulo, ".pdf"));
              } else {
                _this9.snackBar.open('No se pudo generar el reporte...', _this9.titulo, {
                  duration: 3000
                });
              }
            });
          }
        }]);

        return ValorizadoComponent;
      }();

      ValorizadoComponent.ɵfac = function ValorizadoComponent_Factory(t) {
        return new (t || ValorizadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__["AccesoUsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_7__["BodegaService"]));
      };

      ValorizadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ValorizadoComponent,
        selectors: [["app-valorizado"]],
        decls: 24,
        vars: 9,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], ["frmRptValorizado", "ngForm"], [1, "fullWidth"], ["name", "sede", "multiple", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "bodega", "multiple", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["align", "end"], [3, "configuracion", "excelClick", "pdfClick", "resetParamsClick"], [4, "ngIf"], [3, "value"]],
        template: function ValorizadoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Inventario Valorizado");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Sede");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValorizadoComponent_Template_mat_select_ngModelChange_12_listener($event) {
              return ctx.params.sede = $event;
            })("selectionChange", function ValorizadoComponent_Template_mat_select_selectionChange_12_listener($event) {
              return ctx.onSedesSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ValorizadoComponent_mat_option_13_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Bodega");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValorizadoComponent_Template_mat_select_ngModelChange_17_listener($event) {
              return ctx.params.bodega = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ValorizadoComponent_mat_option_18_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValorizadoComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.params.fecha = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-rpt-botones", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("excelClick", function ValorizadoComponent_Template_app_rpt_botones_excelClick_22_listener() {
              return ctx.excelClick();
            })("pdfClick", function ValorizadoComponent_Template_app_rpt_botones_pdfClick_22_listener() {
              return ctx.onSubmit();
            })("resetParamsClick", function ValorizadoComponent_Template_app_rpt_botones_resetParamsClick_22_listener() {
              return ctx.resetParams();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ValorizadoComponent_app_cargando_23_Template, 1, 0, "app-cargando", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.sede);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sedes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.bodega);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodegas);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fecha)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuracion", ctx.configBotones);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargando);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_14__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_16__["CargandoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxvcml6YWRvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Hwog":
    /*!************************************************!*\
      !*** ./src/app/wms/services/egreso.service.ts ***!
      \************************************************/

    /*! exports provided: EgresoService */

    /***/
    function Hwog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgresoService", function () {
        return EgresoService;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! qs */
      "Qyje");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EgresoService = /*#__PURE__*/function () {
        function EgresoService(http) {
          _classCallCheck(this, EgresoService);

          this.http = http;
          this.egresoUrl = 'egreso';
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        }

        _createClass(EgresoService, [{
          key: "get",
          value: function get() {
            var fltr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.egresoUrl, "/buscar_egreso?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "save",
          value: function save(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.egresoUrl, "/guardar").concat(+entidad.egreso > 0 ? '/' + entidad.egreso : ''), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getDetalle",
          value: function getDetalle(idegreso) {
            var fltr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.egresoUrl, "/buscar_detalle/").concat(idegreso, "?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "saveDetalle",
          value: function saveDetalle(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.egresoUrl, "/guardar_detalle/").concat(entidad.egreso).concat(+entidad.egreso_detalle > 0 ? '/' + entidad.egreso_detalle : ''), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return EgresoService;
      }();

      EgresoService.ɵfac = function EgresoService_Factory(t) {
        return new (t || EgresoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      EgresoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: EgresoService,
        factory: EgresoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c);
          }, d.onerror = function () {
            console.error("could not download file");
          }, d.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b, d, e, g) {
          if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
          var h = "application/octet-stream" === b.type,
              i = /constructor/i.test(f.HTMLElement) || f.safari,
              j = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a = k.result;
              a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
          } else {
            var l = f.URL || f.webkitURL,
                m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4E4);
          }
        });
        f.saveAs = g.saveAs = g, true && (module.exports = g);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "KWN0":
    /*!********************************************************!*\
      !*** ./src/app/wms/services/transformacion.service.ts ***!
      \********************************************************/

    /*! exports provided: TransformacionService */

    /***/
    function KWN0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransformacionService", function () {
        return TransformacionService;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TransformacionService = /*#__PURE__*/function () {
        function TransformacionService(http) {
          _classCallCheck(this, TransformacionService);

          this.http = http;
          this.conversorUrl = 'conversor';
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        }

        _createClass(TransformacionService, [{
          key: "transformar",
          value: function transformar(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.conversorUrl, "/transformar"), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "producir",
          value: function producir(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.conversorUrl, "/producir"), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return TransformacionService;
      }();

      TransformacionService.ɵfac = function TransformacionService_Factory(t) {
        return new (t || TransformacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      TransformacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: TransformacionService,
        factory: TransformacionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "L8mz":
    /*!******************************************************************!*\
      !*** ./src/app/wms/components/fisico/fisico/fisico.component.ts ***!
      \******************************************************************/

    /*! exports provided: FisicoComponent */

    /***/
    function L8mz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FisicoComponent", function () {
        return FisicoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _reporte_reporte_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../reporte/reporte.component */
      "BFdU");
      /* harmony import */


      var _form_inventario_fisico_form_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../form-inventario-fisico/form-inventario-fisico.component */
      "kp69");

      var _c0 = ["rptInventario"];
      var _c1 = ["frmInventario"];

      var FisicoComponent = /*#__PURE__*/function () {
        function FisicoComponent() {
          _classCallCheck(this, FisicoComponent);
        }

        _createClass(FisicoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FisicoComponent;
      }();

      FisicoComponent.ɵfac = function FisicoComponent_Factory(t) {
        return new (t || FisicoComponent)();
      };

      FisicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FisicoComponent,
        selectors: [["app-fisico"]],
        viewQuery: function FisicoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rptInventarioComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.frmInventarioComponent = _t.first);
          }
        },
        decls: 6,
        vars: 0,
        consts: [[1, "row"], [1, "col", "s12", "m12"]],
        template: function FisicoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-reporte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-form-inventario-fisico");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_1__["ReporteComponent"], _form_inventario_fisico_form_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_2__["FormInventarioFisicoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXNpY28uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "MArN":
    /*!************************************************!*\
      !*** ./src/app/wms/services/fisico.service.ts ***!
      \************************************************/

    /*! exports provided: FisicoService */

    /***/
    function MArN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FisicoService", function () {
        return FisicoService;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! qs */
      "Qyje");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var FisicoService = /*#__PURE__*/function () {
        // private usrToken: string = null;
        function FisicoService(http) {
          _classCallCheck(this, FisicoService);

          this.http = http;
          this.fisicoUrl = 'fisico';
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"](); // this.usrToken = this.ls.get(GLOBAL.usrTokenVar) ? this.ls.get(GLOBAL.usrTokenVar).token : null;
        }

        _createClass(FisicoService, [{
          key: "generarInventarioFisico",
          value: function generarInventarioFisico(params) {
            /* const httpOptions = {
              headers: new HttpHeaders({
                'Authorization': this.usrToken
              })
            }; */
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.fisicoUrl, "/generar"), params // , httpOptions
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "confirmar",
          value: function confirmar(entidad) {
            /* const httpOptions = {
              headers: new HttpHeaders({
                'Authorization': this.usrToken
              })
            }; */
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.fisicoUrl, "/confirmar/").concat(+entidad.inventario_fisico > 0 ? '/' + entidad.inventario_fisico : ''), {} // , httpOptions
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getDetalle",
          value: function getDetalle(idingreso) {
            var fltr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            /* const httpOptions = {
              headers: new HttpHeaders({
                'Authorization': this.usrToken
              })
            }; */
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.fisicoUrl, "/buscar_detalle/").concat(idingreso, "?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr)) // , httpOptions
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "saveDetalle",
          value: function saveDetalle(params) {
            /* const httpOptions = {
              headers: new HttpHeaders({
                'Authorization': this.usrToken
              })
            }; */
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.fisicoUrl, "/actualizar/"), params // , httpOptions
            ).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return FisicoService;
      }();

      FisicoService.ɵfac = function FisicoService_Factory(t) {
        return new (t || FisicoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      FisicoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: FisicoService,
        factory: FisicoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QXDe":
    /*!****************************************************************************************************!*\
      !*** ./src/app/wms/components/producto/sub-categoria-producto/sub-categoria-producto.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: SubCategoriaProductoComponent */

    /***/
    function QXDe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubCategoriaProductoComponent", function () {
        return SubCategoriaProductoComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");

      function SubCategoriaProductoComponent_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selCat_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", selCat_r11.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", selCat_r11.descripcion, " ");
        }
      }

      function SubCategoriaProductoComponent_input_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_input_13_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.categoriaGrupo.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matKeyboard", ctx_r2.keyboardLayout)("ngModel", ctx_r2.categoriaGrupo.descripcion);
        }
      }

      function SubCategoriaProductoComponent_input_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_input_14_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.categoriaGrupo.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.categoriaGrupo.descripcion);
        }
      }

      function SubCategoriaProductoComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var imp_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", imp_r16.impresora);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", imp_r16.nombre, " ");
        }
      }

      function SubCategoriaProductoComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bode_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bode_r17.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bode_r17.descripcion, " ");
        }
      }

      function SubCategoriaProductoComponent_input_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_input_26_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.categoriaGrupo.cuenta_contable = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matKeyboard", ctx_r6.keyboardLayout)("ngModel", ctx_r6.categoriaGrupo.cuenta_contable);
        }
      }

      function SubCategoriaProductoComponent_input_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_input_27_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.categoriaGrupo.cuenta_contable = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.categoriaGrupo.cuenta_contable);
        }
      }

      function SubCategoriaProductoComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcatpadre_r22 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", subcatpadre_r22.categoria_grupo)("disabled", +subcatpadre_r22.categoria_grupo === +ctx_r8.categoriaGrupo.categoria_grupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subcatpadre_r22.descripcion, " ");
        }
      }

      function SubCategoriaProductoComponent_mat_chip_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubCategoriaProductoComponent_mat_chip_40_Template_mat_chip_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var cat_r23 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r24.categoria = cat_r23;
            return ctx_r24.loadSubCategorias(cat_r23.categoria);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r23.descripcion, " ");
        }
      }

      function SubCategoriaProductoComponent_mat_chip_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubCategoriaProductoComponent_mat_chip_42_Template_mat_chip_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var catGrupo_r26 = ctx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.setCatGrp(catGrupo_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var catGrupo_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", catGrupo_r26.descripcion, " ");
        }
      }

      var SubCategoriaProductoComponent = /*#__PURE__*/function () {
        function SubCategoriaProductoComponent(snackBar, articuloSrvc, bodegaSrvc, ls) {
          var _this10 = this;

          _classCallCheck(this, SubCategoriaProductoComponent);

          this.snackBar = snackBar;
          this.articuloSrvc = articuloSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.ls = ls;
          this.categorias = [];
          this.impresoras = [];
          this.categoriasGruposPadre = [];
          this.categoriasGrupos = [];
          this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].IDIOMA_TECLADO;
          this.esMovil = false;
          this.bodegas = [];

          this.loadCategorias = function () {
            _this10.articuloSrvc.getCategorias({
              sede: +_this10.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              if (res) {
                _this10.categorias = res;
              }
            });
          };

          this.loadImpresoras = function () {
            _this10.articuloSrvc.getImpresoras({
              sede: +_this10.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this10.impresoras = res;
              }
            });
          };

          this.loadBodegas = function () {
            _this10.bodegaSrvc.get({
              sede: _this10.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              if (res) {
                _this10.bodegas = res;
              }
            });
          };

          this.loadSubCategorias = function (idcategoria) {
            _this10.resetCategoriaGrupo();

            _this10.categoriaGrupo.categoria = idcategoria;

            _this10.articuloSrvc.getCategoriasGrupos({
              categoria: +idcategoria
            }).subscribe(function (res) {
              if (res) {
                _this10.categoriasGruposPadre = _this10.articuloSrvc.adaptCategoriaGrupoResponse(res);
                _this10.categoriasGrupos = JSON.parse(JSON.stringify(_this10.categoriasGruposPadre)); // console.log('CG PADRE = ', this.categoriasGruposPadre);
                // console.log('CG = ', this.categoriasGrupos);
              }
            });
          };

          this.resetCategoriaGrupo = function () {
            _this10.categoriaGrupo = {
              categoria_grupo: null,
              // categoria: this.categoria?.categoria || null,
              categoria: null,
              categoria_grupo_grupo: null,
              descripcion: null,
              receta: 0,
              impresora: null,
              descuento: 0,
              antecesores: null
            };
          };

          this.onSubmitSubCategoria = function () {
            _this10.articuloSrvc.saveCategoriaGrupo(_this10.categoriaGrupo).subscribe(function (res) {
              if (res.exito) {
                _this10.loadSubCategorias(+_this10.categoriaGrupo.categoria);

                _this10.resetCategoriaGrupo();

                _this10.snackBar.open('Grabada con éxito.', 'Sub - Categoría', {
                  duration: 5000
                });
              } else {
                _this10.snackBar.open("ERROR: ".concat(res.mensaje), 'Sub - Categoría', {
                  duration: 5000
                });
              }
            });
          };

          this.setCatGrp = function (obj) {
            _this10.categoriaGrupo = obj; // console.log(obj);
            // console.log(this.categoriaGrupo);
          };

          this.resetCategoriaGrupo();
        }

        _createClass(SubCategoriaProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).enmovil || false;
            this.loadCategorias();
            this.loadImpresoras();
            this.loadBodegas();
          }
        }]);

        return SubCategoriaProductoComponent;
      }();

      SubCategoriaProductoComponent.ɵfac = function SubCategoriaProductoComponent_Factory(t) {
        return new (t || SubCategoriaProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_3__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_4__["BodegaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]));
      };

      SubCategoriaProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SubCategoriaProductoComponent,
        selectors: [["app-sub-categoria-producto"]],
        decls: 43,
        vars: 15,
        consts: [[1, "mat-elevation-z4"], ["novalidate", ""], ["frmCategoriaGrupo", "ngForm"], [1, "fullWidth"], ["name", "categoria", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la sub - categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "45", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la sub - categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "45", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "impresora", "required", "", 3, "ngModel", "ngModelChange"], ["name", "bodega", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Cuenta contable (si aplica)", "name", "cuenta_contable", "minlength", "0", "maxlength", "10", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Cuenta contable (si aplica)", "name", "cuenta_contable", "minlength", "0", "maxlength", "10", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "categoriaGrupoPadre", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], ["color", "accent", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], ["color", "warn", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la sub - categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "45", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la sub - categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "45", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Cuenta contable (si aplica)", "name", "cuenta_contable", "minlength", "0", "maxlength", "10", 3, "matKeyboard", "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Cuenta contable (si aplica)", "name", "cuenta_contable", "minlength", "0", "maxlength", "10", 3, "ngModel", "ngModelChange"], [3, "value", "disabled"], ["color", "accent", "selected", "", 3, "click"], ["color", "warn", "selected", "", 3, "click"]],
        template: function SubCategoriaProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sub - categor\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Categor\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_Template_mat_select_ngModelChange_10_listener($event) {
              return ctx.categoriaGrupo.categoria = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SubCategoriaProductoComponent_mat_option_11_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SubCategoriaProductoComponent_input_13_Template, 1, 2, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SubCategoriaProductoComponent_input_14_Template, 1, 1, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Impresora:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_Template_mat_select_ngModelChange_18_listener($event) {
              return ctx.categoriaGrupo.impresora = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SubCategoriaProductoComponent_mat_option_19_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sacar de la bodega:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_Template_mat_select_ngModelChange_23_listener($event) {
              return ctx.categoriaGrupo.bodega = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SubCategoriaProductoComponent_mat_option_24_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SubCategoriaProductoComponent_input_26_Template, 1, 2, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SubCategoriaProductoComponent_input_27_Template, 1, 1, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Anidar dentro de");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SubCategoriaProductoComponent_Template_mat_select_ngModelChange_31_listener($event) {
              return ctx.categoriaGrupo.categoria_grupo_grupo = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SubCategoriaProductoComponent_mat_option_32_Template, 2, 3, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubCategoriaProductoComponent_Template_button_click_34_listener() {
              return ctx.onSubmitSubCategoria();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubCategoriaProductoComponent_Template_button_click_36_listener() {
              return ctx.resetCategoriaGrupo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SubCategoriaProductoComponent_mat_chip_40_Template, 2, 1, "mat-chip", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, SubCategoriaProductoComponent_mat_chip_42_Template, 2, 1, "mat-chip", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categoriaGrupo.categoria);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categoriaGrupo.impresora);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.impresoras);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categoriaGrupo.bodega);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bodegas);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.categoriaGrupo.categoria_grupo_grupo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoriasGruposPadre);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoriasGrupos);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_15__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItY2F0ZWdvcmlhLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "R3J8":
    /*!*******************************************************************!*\
      !*** ./src/app/wms/components/reporte/kardex/kardex.component.ts ***!
      \*******************************************************************/

    /*! exports provided: KardexComponent */

    /***/
    function R3J8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KardexComponent", function () {
        return KardexComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../admin/services/acceso-usuario.service */
      "2qVp");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/components/rpt-botones/rpt-botones.component */
      "NU9O");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function KardexComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", a_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", a_r5.descripcion, " ");
        }
      }

      function KardexComponent_mat_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sede_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sede_r6.sede.sede);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sede_r6.sede.nombre, " ");
        }
      }

      function KardexComponent_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bod_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bod_r7.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bod_r7.descripcion, " ");
        }
      }

      function KardexComponent_app_cargando_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cargando");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var KardexComponent = /*#__PURE__*/function () {
        function KardexComponent(snackBar, pdfServicio, sedeSrvc, bodegaSrvc, articuloSrvc) {
          var _this11 = this;

          _classCallCheck(this, KardexComponent);

          this.snackBar = snackBar;
          this.pdfServicio = pdfServicio;
          this.sedeSrvc = sedeSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.articuloSrvc = articuloSrvc;
          this.bodegas = [];
          this.sedes = [];
          this.articulos = [];
          this.filteredArticulos = [];
          this.txtArticuloSelected = undefined;
          this.params = {};
          this.titulo = "Kardex";
          this.cargando = false;
          this.configBotones = {
            showPdf: true,
            showHtml: false,
            showExcel: true
          };

          this.getDescripcionArticulo = function (idarticulo) {
            return _this11.articulos.find(function (art) {
              return +art.articulo === +idarticulo;
            }).descripcion || '';
          };

          this.filtrarArticulos = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this11.filteredArticulos = _this11.articulos.filter(function (a) {
                return a.descripcion.toLowerCase().includes(filterValue);
              });
            } else {
              _this11.filteredArticulos = _this11.articulos;
            }
          };

          this.displayArticulo = function (art) {
            if (art) {
              _this11.params.articulo = art.articulo;
              return art.descripcion;
            }

            return undefined;
          };

          this.getSede = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this11.sedeSrvc.getSedes(params).subscribe(function (res) {
              _this11.sedes = res;
            });
          };

          this.getArticulo = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this11.articuloSrvc.getArticulosIngreso(params).subscribe(function (res) {
              _this11.articulos = res;
            });
          };

          this.getBodega = function () {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _this11.bodegaSrvc.get(params).subscribe(function (res) {
              _this11.bodegas = res;
            });
          };

          this.excelClick = function () {
            _this11.params._excel = 1;
            _this11.cargando = true;

            _this11.pdfServicio.getReporteKardex(_this11.params).subscribe(function (res) {
              _this11.cargando = false;

              if (res) {
                var blob = new Blob([res], {
                  type: 'application/vnd.ms-excel'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this11.titulo, ".xls"));
              } else {
                _this11.snackBar.open('No se pudo generar el reporte...', _this11.titulo, {
                  duration: 3000
                });
              }
            });
          };

          this.onSedesSelected = function (obj) {
            _this11.getBodega({
              sede: _this11.params.sede
            });
          };

          this.resetParams = function () {
            _this11.params = {};
            _this11.cargando = false;
          };
        }

        _createClass(KardexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSede(); //this.getBodega();

            this.getArticulo();
            this.txtArticuloSelected = undefined;
            this.params.fdel = moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
            this.params.fal = moment__WEBPACK_IMPORTED_MODULE_2__().format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            this.params._excel = 0;
            this.pdfServicio.getReporteKardex(this.params).subscribe(function (res) {
              if (res) {
                var blob = new Blob([res], {
                  type: 'application/pdf'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, "".concat(_this12.titulo, ".pdf"));
              } else {
                _this12.snackBar.open('No se pudo generar el reporte...', _this12.titulo, {
                  duration: 3000
                });
              }
            });
          }
        }]);

        return KardexComponent;
      }();

      KardexComponent.ɵfac = function KardexComponent_Factory(t) {
        return new (t || KardexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_5__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_admin_services_acceso_usuario_service__WEBPACK_IMPORTED_MODULE_6__["AccesoUsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_7__["BodegaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_8__["ArticuloService"]));
      };

      KardexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: KardexComponent,
        selectors: [["app-kardex"]],
        decls: 32,
        vars: 18,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", ""], [1, "fullWidth"], ["type", "text", "placeholder", "Art\xEDculo", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith"], ["autoArticulos", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "sede", "multiple", "", 3, "ngModel", "ngModelChange", "selectionChange"], ["name", "bodega", "multiple", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Del", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["align", "end"], [3, "configuracion", "excelClick", "pdfClick", "resetParamsClick"], [4, "ngIf"], [3, "value"]],
        template: function KardexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Kardex");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Art\xEDculo");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KardexComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.txtArticuloSelected = $event;
            })("keyup", function KardexComponent_Template_input_keyup_11_listener() {
              return ctx.filtrarArticulos(ctx.txtArticuloSelected);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-autocomplete", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, KardexComponent_mat_option_14_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Sede");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KardexComponent_Template_mat_select_ngModelChange_18_listener($event) {
              return ctx.params.sede = $event;
            })("selectionChange", function KardexComponent_Template_mat_select_selectionChange_18_listener($event) {
              return ctx.onSedesSelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, KardexComponent_mat_option_19_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Bodega");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KardexComponent_Template_mat_select_ngModelChange_23_listener($event) {
              return ctx.params.bodega = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, KardexComponent_mat_option_24_Template, 2, 2, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KardexComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.params.fdel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KardexComponent_Template_input_ngModelChange_28_listener($event) {
              return ctx.params.fal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "app-rpt-botones", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("excelClick", function KardexComponent_Template_app_rpt_botones_excelClick_30_listener() {
              return ctx.excelClick();
            })("pdfClick", function KardexComponent_Template_app_rpt_botones_pdfClick_30_listener() {
              return ctx.onSubmit();
            })("resetParamsClick", function KardexComponent_Template_app_rpt_botones_resetParamsClick_30_listener() {
              return ctx.resetParams();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, KardexComponent_app_cargando_31_Template, 1, 0, "app-cargando", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.txtArticuloSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0))("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.displayArticulo);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredArticulos);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.sede);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sedes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.bodega);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bodegas);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.params.fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuracion", ctx.configBotones);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargando);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _shared_components_rpt_botones_rpt_botones_component__WEBPACK_IMPORTED_MODULE_16__["RptBotonesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_18__["CargandoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYXJkZXguY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "UI5i":
    /*!*******************************************!*\
      !*** ./src/app/wms/wms-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: WmsRoutingModule */

    /***/
    function UI5i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WmsRoutingModule", function () {
        return WmsRoutingModule;
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


      var _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/ingreso/ingreso/ingreso.component */
      "uZIN");
      /* harmony import */


      var _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/egreso/egreso/egreso.component */
      "EZh4");
      /* harmony import */


      var _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/producto/producto/producto.component */
      "nahY");
      /* harmony import */


      var _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/transformacion/transformacion.component */
      "rMm0");
      /* harmony import */


      var _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/reporte/existencias/existencias.component */
      "6UxG");
      /* harmony import */


      var _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/reporte/kardex/kardex.component */
      "R3J8");
      /* harmony import */


      var _components_produccion_produccion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/produccion/produccion.component */
      "1XRV");
      /* harmony import */


      var _components_reporte_valorizado_valorizado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/reporte/valorizado/valorizado.component */
      "H8wP");
      /* harmony import */


      var _components_fisico_fisico_fisico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/fisico/fisico/fisico.component */
      "L8mz");
      /* harmony import */


      var _components_producto_replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/producto/replicar-a-sedes/replicar-a-sedes.component */
      "bRC8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'ingresos',
        component: _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_2__["IngresoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'egresos',
        component: _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_3__["EgresoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'articulos',
        component: _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_4__["ProductoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'transformaciones',
        component: _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_5__["TransformacionComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'rptexistencia',
        component: _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_6__["ExistenciasComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'rptkardex',
        component: _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_7__["KardexComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'produccion',
        component: _components_produccion_produccion_component__WEBPACK_IMPORTED_MODULE_8__["ProduccionComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'rptvalorizado',
        component: _components_reporte_valorizado_valorizado_component__WEBPACK_IMPORTED_MODULE_9__["ValorizadoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'fisico',
        component: _components_fisico_fisico_fisico_component__WEBPACK_IMPORTED_MODULE_10__["FisicoComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: 'replicar_articulos_sedes',
        component: _components_producto_replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_11__["ReplicarASedesComponent"],
        canActivate: [_admin_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthguardService"]]
      }, {
        path: '**',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }];

      var WmsRoutingModule = function WmsRoutingModule() {
        _classCallCheck(this, WmsRoutingModule);
      };

      WmsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: WmsRoutingModule
      });
      WmsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        factory: function WmsRoutingModule_Factory(t) {
          return new (t || WmsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](WmsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "XnHR":
    /*!************************************************************************************!*\
      !*** ./src/app/wms/components/producto/lista-producto/lista-producto.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ListaProductoComponent */

    /***/
    function XnHR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaProductoComponent", function () {
        return ListaProductoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ListaProductoComponent_mat_tree_node_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.nombre);
        }
      }

      function ListaProductoComponent_mat_tree_node_1_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductoComponent_mat_tree_node_1_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onProductoClicked(node_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.nombre);
        }
      }

      function ListaProductoComponent_mat_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListaProductoComponent_mat_tree_node_1_span_3_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListaProductoComponent_mat_tree_node_1_button_4_Template, 2, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tieneHijos(node_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.tieneHijos(node_r2));
        }
      }

      function ListaProductoComponent_mat_nested_tree_node_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r10.nombre);
        }
      }

      function ListaProductoComponent_mat_nested_tree_node_2_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaProductoComponent_mat_nested_tree_node_2_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.onProductoClicked(node_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r10.nombre);
        }
      }

      function ListaProductoComponent_mat_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nested-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListaProductoComponent_mat_nested_tree_node_2_span_6_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListaProductoComponent_mat_nested_tree_node_2_button_7_Template, 2, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](9, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r10 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "toggle " + node_r10.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.tieneHijos(node_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.tieneHijos(node_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r10));
        }
      }

      var ListaProductoComponent = /*#__PURE__*/function () {
        function ListaProductoComponent(ls, articuloSrvc) {
          _classCallCheck(this, ListaProductoComponent);

          this.ls = ls;
          this.articuloSrvc = articuloSrvc;
          this.treeHeight = '450px';
          this.productoClickedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["NestedTreeControl"](function (node) {
            return node.hijos;
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();

          this.hasChild = function (_, node) {
            return !!node.hijos && node.hijos.length > 0;
          };

          this.tieneHijos = function (node) {
            return !!node.hijos && node.hijos.length > 0;
          }; // this.dataSource.data = TREE_DATA;

        }

        _createClass(ListaProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadArbolArticulos();
          }
        }, {
          key: "onProductoClicked",
          value: function onProductoClicked(producto) {
            this.productoClickedEv.emit(producto);
          }
        }, {
          key: "loadArbolArticulos",
          value: function loadArbolArticulos() {
            var _this13 = this;

            this.articuloSrvc.getArbolArticulosMante(this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].usrTokenVar).sede || 0).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this13.arbol = _this13.articuloSrvc.convertToArbolNodoProducto(res); // console.log(this.arbol);

                _this13.dataSource.data = _this13.arbol;
              }
            });
          }
        }]);

        return ListaProductoComponent;
      }();

      ListaProductoComponent.ɵfac = function ListaProductoComponent_Factory(t) {
        return new (t || ListaProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_5__["ArticuloService"]));
      };

      ListaProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListaProductoComponent,
        selectors: [["app-lista-producto"]],
        inputs: {
          treeHeight: "treeHeight"
        },
        outputs: {
          productoClickedEv: "productoClickedEv"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], [4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror", 2, "font-size", "24pt !important"], ["matTreeNodeOutlet", ""]],
        template: function ListaProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaProductoComponent_mat_tree_node_1_Template, 5, 2, "mat-tree-node", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListaProductoComponent_mat_nested_tree_node_2_Template, 10, 6, "mat-nested-tree-node", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.treeHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatNestedTreeNode"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeOutlet"]],
        styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style-type: none;\n}\n\n.tabulacion[_ngcontent-%COMP%] {\n    padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoibGlzdGEtcHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZXhhbXBsZS10cmVlIHVsLCAuZXhhbXBsZS10cmVlIGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udGFidWxhY2lvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "YYA0":
    /*!********************************************************************************************!*\
      !*** ./src/app/wms/components/producto/categoria-producto/categoria-producto.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CategoriaProductoComponent */

    /***/
    function YYA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaProductoComponent", function () {
        return CategoriaProductoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");

      function CategoriaProductoComponent_input_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriaProductoComponent_input_8_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.categoria.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r1.keyboardLayout)("ngModel", ctx_r1.categoria.descripcion);
        }
      }

      function CategoriaProductoComponent_input_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriaProductoComponent_input_9_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.categoria.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.categoria.descripcion);
        }
      }

      function CategoriaProductoComponent_mat_chip_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriaProductoComponent_mat_chip_17_Template_mat_chip_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var cat_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.categoria = cat_r8;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r8.descripcion, " ");
        }
      }

      var CategoriaProductoComponent = /*#__PURE__*/function () {
        function CategoriaProductoComponent(snackBar, ls, articuloSrvc) {
          var _this14 = this;

          _classCallCheck(this, CategoriaProductoComponent);

          this.snackBar = snackBar;
          this.ls = ls;
          this.articuloSrvc = articuloSrvc;
          this.categoriaGrupoSvd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-next-line: no-output-on-prefix

          this.onChangeSubCategoriaEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.categorias = [];
          this.categoriasGruposPadre = [];
          this.categoriasGrupos = [];
          this.editCategoriaMode = false;
          this.editSubCategoriaMode = false;
          this.showCategoriasForm = true;
          this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
          this.esMovil = false;
          this.impresoras = [];

          this.resetCategoria = function () {
            _this14.categoria = {
              categoria: null,
              sede: _this14.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0,
              descripcion: null
            };

            _this14.resetCategoriaGrupo();

            _this14.editCategoriaMode = false;
          };

          this.resetCategoriaGrupo = function () {
            _this14.categoriaGrupo = {
              categoria_grupo: null,
              categoria: _this14.categoria.categoria,
              categoria_grupo_grupo: null,
              descripcion: null,
              receta: 0,
              impresora: null,
              descuento: 0,
              antecesores: null
            };
            _this14.editSubCategoriaMode = false;
          };

          this.loadCategorias = function () {
            _this14.articuloSrvc.getCategorias({
              sede: +_this14.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this14.categorias = res;
              }
            });
          };

          this.onCategoriaSelected = function (obj) {
            return _this14.loadSubCategorias(+obj.value.categoria);
          };

          this.loadSubCategorias = function (idcategoria) {
            _this14.articuloSrvc.getCategoriasGrupos({
              categoria: +idcategoria
            }).subscribe(function (res) {
              if (res) {
                _this14.categoriasGruposPadre = _this14.articuloSrvc.adaptCategoriaGrupoResponse(res);
                _this14.categoriasGrupos = _this14.categoriasGruposPadre;
              }
            });
          };

          this.loadImpresoras = function () {
            _this14.articuloSrvc.getImpresoras({
              sede: +_this14.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this14.impresoras = res;
              }
            });
          };

          this.onSubCategoriaPadreSelected = function (obj) {
            return _this14.loadSubCategoriasSubcategorias(+obj.value);
          };

          this.loadSubCategoriasSubcategorias = function (idsubcat) {
            _this14.articuloSrvc.getCategoriasGrupos({
              categoria_grupo_grupo: idsubcat
            }).subscribe(function (res) {
              if (res) {
                _this14.categoriasGrupos = _this14.articuloSrvc.adaptCategoriaGrupoResponse(res);
              }
            });
          };

          this.onSubmitCategoria = function () {
            _this14.articuloSrvc.saveCategoria(_this14.categoria).subscribe(function (res) {
              if (res.exito) {
                _this14.editCategoriaMode = false;

                _this14.resetCategoria();

                _this14.loadCategorias();

                _this14.categoriaGrupoSvd.emit();

                _this14.snackBar.open('Grabada con éxito.', 'Categoría', {
                  duration: 5000
                });
              } else {
                _this14.snackBar.open("ERROR: ".concat(res.mensaje), 'Categoría', {
                  duration: 5000
                });
              }
            });
          };

          this.onSubCategoriaSelected = function (obj) {
            return _this14.onChangeSubCategoriaEv.emit(+obj.value.categoria_grupo);
          };

          this.onSubmitSubCategoria = function () {
            _this14.articuloSrvc.saveCategoriaGrupo(_this14.categoriaGrupo).subscribe(function (res) {
              if (res.exito) {
                _this14.resetCategoriaGrupo();

                _this14.loadSubCategorias(+_this14.categoria.categoria); // this.categoriaGrupoSvd.emit();


                _this14.snackBar.open('Grabada con éxito.', 'Sub - Categoría', {
                  duration: 5000
                });
              } else {
                _this14.snackBar.open("ERROR: ".concat(res.mensaje), 'Sub - Categoría', {
                  duration: 5000
                });
              }
            });
          };
        }

        _createClass(CategoriaProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
            this.resetCategoria();
            this.loadCategorias();
            this.loadImpresoras();
          }
        }]);

        return CategoriaProductoComponent;
      }();

      CategoriaProductoComponent.ɵfac = function CategoriaProductoComponent_Factory(t) {
        return new (t || CategoriaProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_4__["ArticuloService"]));
      };

      CategoriaProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CategoriaProductoComponent,
        selectors: [["app-categoria-producto"]],
        outputs: {
          categoriaGrupoSvd: "categoriaGrupoSvd",
          onChangeSubCategoriaEv: "onChangeSubCategoriaEv"
        },
        decls: 18,
        vars: 4,
        consts: [[1, "mat-elevation-z4"], ["novalidate", ""], ["frmCategoria", "ngForm"], [1, "fullWidth"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "150", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "150", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "warn", 3, "click"], ["color", "accent", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "150", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Descripci\xF3n de la categor\xEDa", "name", "descripcion", "minlength", "1", "maxlength", "150", "required", "", 3, "ngModel", "ngModelChange"], ["color", "accent", "selected", "", 3, "click"]],
        template: function CategoriaProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categor\xEDas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoriaProductoComponent_input_8_Template, 1, 2, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoriaProductoComponent_input_9_Template, 1, 1, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriaProductoComponent_Template_button_click_11_listener() {
              return ctx.onSubmitCategoria();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriaProductoComponent_Template_button_click_13_listener() {
              return ctx.resetCategoria();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancelar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CategoriaProductoComponent_mat_chip_17_Template, 2, 1, "mat-chip", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_12__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChip"]],
        styles: [".fullWidth[_ngcontent-%COMP%] { width: 100%; }\n.iconFontSize[_ngcontent-%COMP%]{ font-size: 18pt; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWEsV0FBVyxFQUFFO0FBQzFCLGVBQWUsZUFBZSxFQUFFIiwiZmlsZSI6ImNhdGVnb3JpYS1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7IHdpZHRoOiAxMDAlOyB9XG4uaWNvbkZvbnRTaXpleyBmb250LXNpemU6IDE4cHQ7IH0iXX0= */"]
      });
      /***/
    },

    /***/
    "bRC8":
    /*!****************************************************************************************!*\
      !*** ./src/app/wms/components/producto/replicar-a-sedes/replicar-a-sedes.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ReplicarASedesComponent */

    /***/
    function bRC8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplicarASedesComponent", function () {
        return ReplicarASedesComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */
      "IJgu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_sede_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../admin/services/sede.service */
      "IHy4");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function ReplicarASedesComponent_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sede_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", sede_r3.sede)("disabled", +sede_r3.sede === +ctx_r1.miSede);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sede_r3.nombre, " ");
        }
      }

      function ReplicarASedesComponent_app_cargando_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cargando");
        }
      }

      var ReplicarASedesComponent = /*#__PURE__*/function () {
        function ReplicarASedesComponent(sedeSrvc, ls, snackBar, dialog, articuloSrvc) {
          var _this15 = this;

          _classCallCheck(this, ReplicarASedesComponent);

          this.sedeSrvc = sedeSrvc;
          this.ls = ls;
          this.snackBar = snackBar;
          this.dialog = dialog;
          this.articuloSrvc = articuloSrvc;
          this.articulo = null;
          this.cargando = false;
          this.sedes = [];
          this.params = {};
          this.miSede = 0;

          this.loadSedes = function () {
            _this15.sedeSrvc.get().subscribe(function (res) {
              if (res) {
                _this15.sedes = res;
              }
            });
          };

          this.onSubmit = function () {
            var dialogRef = _this15.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
              maxWidth: '400px',
              data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogModel"]('Replicar artículos', 'Este proceso replicará TODOS los artículos a las sedes seleccionadas. ¿Desea continuar?', 'Sí', 'No')
            });

            dialogRef.afterClosed().subscribe(function (res) {
              if (res) {
                _this15.cargando = true;
                var obj = {
                  sedes: [],
                  articulo: null
                };

                _this15.params.sede.forEach(function (s) {
                  return obj.sedes.push({
                    sede: +s
                  });
                });

                if (_this15.articulo) {
                  obj.articulo = +_this15.articulo.articulo;
                }

                _this15.articuloSrvc.replicaArticulosEnSedes(obj).subscribe(function (resReplica) {
                  if (resReplica.exito) {
                    _this15.snackBar.open(resReplica.mensaje, 'Replicar artículos', {
                      duration: 3000
                    });
                  } else {
                    _this15.snackBar.open("ERROR: ".concat(resReplica.mensaje), 'Replicar artículos', {
                      duration: 7000
                    });
                  }

                  _this15.params = {};
                  _this15.cargando = false;
                });
              }
            });
          };
        }

        _createClass(ReplicarASedesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.miSede = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0;
            this.loadSedes();
          }
        }]);

        return ReplicarASedesComponent;
      }();

      ReplicarASedesComponent.ɵfac = function ReplicarASedesComponent_Factory(t) {
        return new (t || ReplicarASedesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_sede_service__WEBPACK_IMPORTED_MODULE_3__["SedeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_7__["ArticuloService"]));
      };

      ReplicarASedesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ReplicarASedesComponent,
        selectors: [["app-replicar-asedes"]],
        inputs: {
          articulo: "articulo"
        },
        decls: 18,
        vars: 5,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], ["novalidate", "", 3, "ngSubmit"], ["frmReplicaArticulosSedes", "ngForm"], [2, "width", "90%"], ["name", "sede", "multiple", "", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], [4, "ngIf"], [3, "value", "disabled"]],
        template: function ReplicarASedesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ReplicarASedesComponent_Template_form_ngSubmit_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

              return _r0.form.valid && ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sede");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReplicarASedesComponent_Template_mat_select_ngModelChange_12_listener($event) {
              return ctx.params.sede = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ReplicarASedesComponent_mat_option_13_Template, 2, 3, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Replicar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ReplicarASedesComponent_app_cargando_17_Template, 1, 0, "app-cargando", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Replicar ", (ctx.articulo == null ? null : ctx.articulo.descripcion) || "TODOS los art\xEDculos", " a las sedes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.sede);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sedes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.cargando);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cargando);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_15__["CargandoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBsaWNhci1hLXNlZGVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "cKxi":
    /*!**********************************************************************************!*\
      !*** ./src/app/wms/components/producto/form-producto/form-producto.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: FormProductoComponent */

    /***/
    function cKxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function () {
        return FormProductoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */
      "IJgu");
      /* harmony import */


      var _replicar_a_sedes_dialog_replicar_a_sedes_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../replicar-a-sedes-dialog/replicar-a-sedes-dialog.component */
      "CFi0");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _admin_services_medida_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../admin/services/medida.service */
      "pJXi");
      /* harmony import */


      var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../admin/services/presentacion.service */
      "C5NV");
      /* harmony import */


      var _admin_services_impuesto_especial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../admin/services/impuesto-especial.service */
      "1wH6");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _shared_pipes_truncar_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../../../../shared/pipes/truncar.pipe */
      "xyQh");

      function FormProductoComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.showArticuloForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.showArticuloForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_form_8_mat_hint_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Por favor seleccione un categor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_form_8_br_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        }
      }

      function FormProductoComponent_form_8_mat_hint_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Por favor seleccione un sub-categor\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_form_8_mat_chip_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.categoria.descripcion, " ");
        }
      }

      function FormProductoComponent_form_8_mat_chip_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.subcategoria.descripcion, " ");
        }
      }

      function FormProductoComponent_form_8_input_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_9_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.articulo.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r15.keyboardLayout)("ngModel", ctx_r15.articulo.descripcion);
        }
      }

      function FormProductoComponent_form_8_input_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_10_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.articulo.descripcion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.articulo.descripcion);
        }
      }

      function FormProductoComponent_form_8_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r33.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r33.descripcion, " ");
        }
      }

      function FormProductoComponent_form_8_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r34.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r34.descripcion, " ");
        }
      }

      function FormProductoComponent_form_8_input_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_24_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.articulo.codigo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r19.keyboardLayout)("ngModel", ctx_r19.articulo.codigo);
        }
      }

      function FormProductoComponent_form_8_input_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_25_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.articulo.codigo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.articulo.codigo);
        }
      }

      function FormProductoComponent_form_8_input_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_27_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r39.articulo.shopify_id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r21.keyboardLayout)("ngModel", ctx_r21.articulo.shopify_id);
        }
      }

      function FormProductoComponent_form_8_input_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_input_28_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r41.articulo.shopify_id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.articulo.shopify_id);
        }
      }

      function FormProductoComponent_form_8_mat_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var impesp_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", impesp_r43.impuesto_especial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", impesp_r43.descripcion, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, impesp_r43.porcentaje, "1.2-2"), "%) ");
        }
      }

      function FormProductoComponent_form_8_mat_form_field_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_mat_form_field_34_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.articulo.rendimiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.articulo.rendimiento);
        }
      }

      function FormProductoComponent_form_8_mat_form_field_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_mat_form_field_35_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.articulo.cantidad_minima = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.articulo.cantidad_minima);
        }
      }

      function FormProductoComponent_form_8_mat_form_field_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_mat_form_field_36_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r48.articulo.cantidad_maxima = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.articulo.cantidad_maxima);
        }
      }

      function FormProductoComponent_form_8_button_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_form_8_button_60_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r50.replicarASedes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Replicar a sedes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_form_8_button_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_form_8_button_61_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.resetArticulo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormProductoComponent_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r9.form.valid && ctx_r54.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormProductoComponent_form_8_mat_hint_2_Template, 3, 0, "mat-hint", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormProductoComponent_form_8_br_3_Template, 1, 0, "br", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormProductoComponent_form_8_mat_hint_4_Template, 3, 0, "mat-hint", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-chip-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormProductoComponent_form_8_mat_chip_6_Template, 2, 1, "mat-chip", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormProductoComponent_form_8_mat_chip_7_Template, 2, 1, "mat-chip", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormProductoComponent_form_8_input_9_Template, 1, 2, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormProductoComponent_form_8_input_10_Template, 1, 1, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.articulo.precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Presentaci\xF3n Venta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.articulo.presentacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormProductoComponent_form_8_mat_option_17_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Presentaci\xF3n Reportes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.articulo.presentacion_reporte = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormProductoComponent_form_8_mat_option_22_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FormProductoComponent_form_8_input_24_Template, 1, 2, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormProductoComponent_form_8_input_25_Template, 1, 1, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FormProductoComponent_form_8_input_27_Template, 1, 2, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FormProductoComponent_form_8_input_28_Template, 1, 1, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Impuesto Especial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.articulo.impuesto_especial = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FormProductoComponent_form_8_mat_option_33_Template, 3, 6, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FormProductoComponent_form_8_mat_form_field_34_Template, 2, 1, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FormProductoComponent_form_8_mat_form_field_35_Template, 2, 1, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FormProductoComponent_form_8_mat_form_field_36_Template, 2, 1, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r60.articulo.produccion = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\xBFEs producci\xF3n?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r61.articulo.mostrar_pos = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mostrar en POS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-checkbox", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r62.articulo.combo = $event);
          })("change", function FormProductoComponent_form_8_Template_mat_checkbox_change_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.setOpcMultOff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Combo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-checkbox", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r64.articulo.multiple = $event);
          })("change", function FormProductoComponent_form_8_Template_mat_checkbox_change_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.setComboOff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Opci\xF3n m\xFAltiple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-checkbox", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r66.articulo.mostrar_inventario = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Mostrar en Inventario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-checkbox", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_form_8_Template_mat_checkbox_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return +(ctx_r67.articulo.esreceta = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Es receta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, FormProductoComponent_form_8_button_60_Template, 2, 0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, FormProductoComponent_form_8_button_61_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.categoria || !ctx_r2.categoria.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.categoria || !ctx_r2.categoria.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.subcategoria || !ctx_r2.subcategoria.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.subcategoria);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.articulo.precio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.articulo.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.presentaciones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.articulo.presentacion_reporte);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.presentacionesFiltered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.articulo.impuesto_especial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.impuestosEspeciales);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r2.articulo.produccion == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r2.articulo.multiple == 1 || +ctx_r2.articulo.combo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r2.articulo.multiple == 1 || +ctx_r2.articulo.combo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.produccion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.mostrar_pos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.combo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.mostrar_inventario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r2.articulo.esreceta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r9.form.valid || !ctx_r2.articulo.categoria_grupo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.articulo.articulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.articulo.articulo);
        }
      }

      function FormProductoComponent_hr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormProductoComponent_mat_card_10_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.showDetalleForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.showDetalleForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_form_8_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r84 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", a_r84.descripcion, "", a_r84.subcategoria && a_r84.subcategoria.descripcion ? " (" + a_r84.subcategoria.descripcion + ")" : "", " ");
        }
      }

      function FormProductoComponent_mat_card_10_form_8_mat_form_field_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_mat_form_field_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r85.receta.precio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r80.receta.precio);
        }
      }

      function FormProductoComponent_mat_card_10_form_8_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r87 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r87.medida);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r87.descripcion, " ");
        }
      }

      function FormProductoComponent_mat_card_10_form_8_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_form_8_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r88.resetReceta();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_form_8_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_form_8_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r90.imprimirReceta();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Imprimir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function FormProductoComponent_mat_card_10_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormProductoComponent_mat_card_10_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return _r77.form.valid && ctx_r92.onSubmitDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r94.txtArticuloSelected = $event;
          })("keyup", function FormProductoComponent_mat_card_10_form_8_Template_input_keyup_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r95.filtrarArticulos(ctx_r95.txtArticuloSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormProductoComponent_mat_card_10_form_8_mat_option_8_Template, 2, 3, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r96.receta.cantidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormProductoComponent_mat_card_10_form_8_mat_form_field_11_Template, 2, 1, "mat-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unidad de medida");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_Template_mat_select_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r97.receta.medida = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormProductoComponent_mat_card_10_form_8_mat_option_16_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-checkbox", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_Template_mat_checkbox_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return +(ctx_r98.receta.racionable = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xBFEs racionable?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormProductoComponent_mat_card_10_form_8_Template_mat_checkbox_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return +(ctx_r99.receta.precio_extra = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Precio Extra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FormProductoComponent_mat_card_10_form_8_button_27_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FormProductoComponent_mat_card_10_form_8_button_28_Template, 2, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.txtArticuloSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("matAutocomplete", _r78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r70.displayArticulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.filteredArticulos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.receta.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.receta.precio_extra && ctx_r70.receta.precio_extra > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.receta.medida);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r70.medidas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r70.receta.racionable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r70.receta.precio_extra);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r77.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.receta.articulo_detalle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r70.recetas.length > 0);
        }
      }

      function FormProductoComponent_mat_card_10_hr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormProductoComponent_mat_card_10_table_12_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r112 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r112.articulo.descripcion);
        }
      }

      function FormProductoComponent_mat_card_10_table_12_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r113 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r113.cantidad, "1.2-2"));
        }
      }

      function FormProductoComponent_mat_card_10_table_12_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unida de medida");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r114 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r114.medida.descripcion);
        }
      }

      function FormProductoComponent_mat_card_10_table_12_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Precio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r115 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r115.precio, "1.2-2"));
        }
      }

      function FormProductoComponent_mat_card_10_table_12_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_td_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_table_12_td_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var element_r116 = ctx.$implicit;

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r117.getReceta(element_r116.receta, element_r116.articulo_detalle);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormProductoComponent_mat_card_10_table_12_td_15_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var element_r116 = ctx.$implicit;

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r119.eliminaReceta(element_r116);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormProductoComponent_mat_card_10_table_12_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 80);
        }
      }

      function FormProductoComponent_mat_card_10_table_12_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 81);
        }
      }

      function FormProductoComponent_mat_card_10_table_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormProductoComponent_mat_card_10_table_12_th_2_Template, 2, 0, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormProductoComponent_mat_card_10_table_12_td_3_Template, 2, 1, "td", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormProductoComponent_mat_card_10_table_12_th_5_Template, 2, 0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormProductoComponent_mat_card_10_table_12_td_6_Template, 3, 4, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormProductoComponent_mat_card_10_table_12_th_8_Template, 2, 0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormProductoComponent_mat_card_10_table_12_td_9_Template, 2, 1, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormProductoComponent_mat_card_10_table_12_th_11_Template, 2, 0, "th", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormProductoComponent_mat_card_10_table_12_td_12_Template, 3, 4, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormProductoComponent_mat_card_10_table_12_th_14_Template, 2, 0, "th", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormProductoComponent_mat_card_10_table_12_td_15_Template, 5, 0, "td", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormProductoComponent_mat_card_10_table_12_tr_16_Template, 1, 0, "tr", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormProductoComponent_mat_card_10_table_12_tr_17_Template, 1, 0, "tr", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r72.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r72.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r72.displayedColumns);
        }
      }

      function FormProductoComponent_mat_card_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "truncar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormProductoComponent_mat_card_10_button_5_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormProductoComponent_mat_card_10_button_6_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormProductoComponent_mat_card_10_form_8_Template, 29, 15, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormProductoComponent_mat_card_10_hr_9_Template, 1, 0, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormProductoComponent_mat_card_10_Template_input_keyup_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r121.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormProductoComponent_mat_card_10_table_12_Template, 18, 3, "table", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Detalle del art\xEDculo ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r4.articulo.descripcion, 35), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.showDetalleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.recetas.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.recetas.length > 0);
        }
      }

      var FormProductoComponent = /*#__PURE__*/function () {
        function FormProductoComponent(dialog, snackBar, ls, articuloSrvc, medidaSrvc, presentacionSrvc, impuestoEspecialSrvc, rptSrvc) {
          var _this16 = this;

          _classCallCheck(this, FormProductoComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.ls = ls;
          this.articuloSrvc = articuloSrvc;
          this.medidaSrvc = medidaSrvc;
          this.presentacionSrvc = presentacionSrvc;
          this.impuestoEspecialSrvc = impuestoEspecialSrvc;
          this.rptSrvc = rptSrvc;
          this.categoria = null;
          this.subcategoria = null;
          this.articuloSvd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.titulo = 'Receta';
          this.showArticuloForm = true;
          this.medidas = [];
          this.medidasFull = [];
          this.presentaciones = [];
          this.presentacionesFiltered = [];
          this.articulos = [];
          this.filteredArticulos = [];
          this.recetas = [];
          this.impuestosEspeciales = [];
          this.showDetalleForm = true;
          this.displayedColumns = ['articulo', 'cantidad', 'medida', 'precio', 'editItem'];
          this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].IDIOMA_TECLADO;
          this.esMovil = false;
          this.txtArticuloSelected = undefined;
          this.endSubs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();

          this.resetArticulo = function () {
            _this16.articulo = {
              articulo: null,
              categoria_grupo: _this16.articulo.categoria_grupo,
              presentacion: null,
              descripcion: null,
              precio: null,
              bien_servicio: 'B',
              produccion: 0,
              mostrar_pos: 1,
              presentacion_reporte: null,
              impuesto_especial: null,
              shopify_id: null,
              multiple: 0,
              cantidad_minima: 1,
              cantidad_maxima: 1,
              combo: 0,
              rendimiento: 0.00,
              mostrar_inventario: 0
            };
            _this16.recetas = [];

            _this16.resetReceta();

            _this16.presentacionesFiltered = JSON.parse(JSON.stringify(_this16.presentaciones));
          };

          this.setArticuloCategoriaGrupo = function (idcatgrp) {
            return _this16.articulo.categoria_grupo = +idcatgrp;
          };

          this.onSubmit = function () {
            // console.log(this.articulo);
            _this16.endSubs.add(_this16.articuloSrvc.saveArticulo(_this16.articulo).subscribe(function (res) {
              // console.log(res);
              if (res.exito) {
                _this16.articuloSvd.emit();

                _this16.resetArticulo();

                _this16.articulo = res.articulo;

                _this16.loadRecetas(_this16.articulo.articulo);

                _this16.loadArticulos();

                _this16.filtrarPresentaciones(_this16.articulo);

                _this16.snackBar.open('Artículo guardado con éxito...', 'Artículo', {
                  duration: 3000
                });
              } else {
                _this16.snackBar.open("ERROR: ".concat(res.mensaje), 'Articulo', {
                  duration: 3000
                });
              }
            }));
          };

          this.loadMedidas = function () {
            _this16.endSubs.add(_this16.medidaSrvc.get().subscribe(function (res) {
              if (res) {
                _this16.medidasFull = res;
              }
            }));
          };

          this.loadPresentaciones = function () {
            _this16.endSubs.add(_this16.presentacionSrvc.get().subscribe(function (res) {
              if (res) {
                _this16.presentaciones = res;

                _this16.filtrarPresentaciones();
              }
            }));
          };

          this.filtrarPresentaciones = function () {
            var art = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (_this16.presentaciones && _this16.presentaciones.length > 0) {
              if (art === null || art === void 0 ? void 0 : art.articulo) {
                // console.log('ARTICULO = ', art);
                _this16.endSubs.add(_this16.articuloSrvc.tieneMovimientos(art.articulo).subscribe(function (res) {
                  if (res.exito) {
                    if (res.tiene_movimientos) {
                      var presReporte = _this16.presentaciones.find(function (p) {
                        return +p.presentacion === +art.presentacion_reporte;
                      }); // console.log('PRES REPORTE = ', presReporte);


                      _this16.presentacionesFiltered = _this16.presentaciones.filter(function (p) {
                        return +p.medida.medida === +presReporte.medida.medida;
                      });
                    } else {
                      _this16.presentacionesFiltered = JSON.parse(JSON.stringify(_this16.presentaciones));
                    }
                  } else {
                    _this16.snackBar.open("ERROR: ".concat(res.mensaje), 'Artículo', {
                      duration: 7000
                    });
                  }
                }));
              } else {
                _this16.presentacionesFiltered = JSON.parse(JSON.stringify(_this16.presentaciones));
              }
            }
          };

          this.loadArticulos = function () {
            _this16.endSubs.add(_this16.articuloSrvc.getArticulos().subscribe(function (res) {
              if (res) {
                _this16.articulos = res;
              }
            }));
          };

          this.loadImpuestosEspeciales = function () {
            _this16.endSubs.add(_this16.impuestoEspecialSrvc.get().subscribe(function (res) {
              if (res) {
                _this16.impuestosEspeciales = res;
              }
            }));
          };

          this.displayArticulo = function (art) {
            if (art) {
              _this16.receta.articulo = art.articulo;

              _this16.filtrarMedidas(art);

              return art.descripcion;
            }

            _this16.medidas = [];
            return undefined;
          };

          this.filtrarMedidas = function (art) {
            var pres = _this16.presentaciones.find(function (p) {
              return +p.presentacion === +art.presentacion_reporte;
            });

            if (pres) {
              _this16.medidas = _this16.medidasFull.filter(function (m) {
                return +m.medida === +pres.medida.medida;
              });
            } else {
              _this16.medidas = [];
            }
          };

          this.filtrarArticulos = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this16.filteredArticulos = _this16.articulos.filter(function (a) {
                return a.descripcion.toLowerCase().includes(filterValue);
              });
            } else {
              _this16.filteredArticulos = JSON.parse(JSON.stringify(_this16.articulos));
            } // console.log(this.filteredArticulos);

          };

          this.resetReceta = function () {
            _this16.receta = {
              articulo_detalle: null,
              receta: _this16.articulo.articulo || 0,
              racionable: 0,
              articulo: null,
              cantidad: 1.00,
              medida: null,
              anulado: 0,
              precio_extra: 0,
              precio: 0
            };
            _this16.txtArticuloSelected = undefined; // this.recetas = [];

            _this16.updateTableDataSource();
          };

          this.loadRecetas = function () {
            var idarticulo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this16.articulo.articulo;

            _this16.endSubs.add(_this16.articuloSrvc.getArticuloDetalle(+idarticulo, {
              receta: +idarticulo
            }).subscribe(function (res) {
              if (res) {
                _this16.recetas = res;

                _this16.updateTableDataSource();
              }
            }));
          };

          this.getReceta = function () {
            var idarticulo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this16.articulo.articulo;
            var iddetalle = arguments.length > 1 ? arguments[1] : undefined;

            _this16.endSubs.add(_this16.articuloSrvc.getArticuloDetalle(idarticulo, {
              articulo_detalle: iddetalle
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this16.receta = {
                  articulo_detalle: res[0].articulo_detalle,
                  receta: res[0].receta.articulo,
                  racionable: res[0].articulo.articulo,
                  articulo: res[0].articulo.articulo,
                  cantidad: +res[0].cantidad,
                  medida: res[0].medida.medida,
                  anulado: res[0].anulado || 0,
                  precio_extra: res[0].precio_extra || 0,
                  precio: +res[0].precio
                };
                _this16.txtArticuloSelected = res[0].articulo;
                _this16.showDetalleForm = true;
              }
            }));
          };

          this.eliminaReceta = function (item) {
            // console.log('ITEM A ELIMINAR = ', item);
            var confirmRef = _this16.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
              maxWidth: '400px',
              data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModel"]('Eliminar detalle', "\xBFDesea eliminar '".concat(item.cantidad, " de ").concat(item.articulo.descripcion, "' de la receta?"), 'Sí', 'No')
            });

            _this16.endSubs.add(confirmRef.afterClosed().subscribe(function (conf) {
              if (conf) {
                item.anulado = 1;
                item.articulo = item.articulo.articulo;

                _this16.endSubs.add(_this16.articuloSrvc.saveArticuloDetalle(item).subscribe(function (res) {
                  // console.log(res);
                  _this16.loadRecetas();

                  _this16.resetReceta();
                }));
              }
            }));
          };

          this.onSubmitDetail = function () {
            _this16.receta.receta = _this16.articulo.articulo; // console.log(this.articulo);
            // console.log(this.receta); return;

            _this16.endSubs.add(_this16.articuloSrvc.saveArticuloDetalle(_this16.receta).subscribe(function (res) {
              // console.log(res);
              if (res) {
                if (res.exito) {
                  _this16.loadRecetas();

                  _this16.resetReceta();
                } else {
                  _this16.snackBar.open("ERROR: ".concat(res.mensaje), 'Artículo', {
                    duration: 3000
                  });
                }
              }
            }));
          };

          this.imprimirReceta = function () {
            _this16.endSubs.add(_this16.rptSrvc.imprimirReceta(_this16.articulo.articulo).subscribe(function (res) {
              if (res) {
                var blob = new Blob([res], {
                  type: 'application/pdf'
                });
                Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, "".concat(_this16.titulo, "_").concat(_this16.articulo.descripcion, ".pdf"));
              } else {
                _this16.snackBar.open('No se pudo generar el reporte...', _this16.titulo, {
                  duration: 3000
                });
              }
            }));
          };

          this.updateTableDataSource = function () {
            _this16.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this16.recetas);

            _this16.dataSource.filterPredicate = function (data, filter) {
              return data.articulo.descripcion.toLowerCase().includes(filter);
            };
          };

          this.replicarASedes = function () {
            var replicarASedesRef = _this16.dialog.open(_replicar_a_sedes_dialog_replicar_a_sedes_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ReplicarASedesDialogComponent"], {
              width: '50%',
              data: {
                articulo: _this16.articulo
              }
            });

            _this16.endSubs.add(replicarASedesRef.afterClosed().subscribe(function (conf) {
              if (conf) {}
            }));
          };

          this.applyFilter = function (filter) {
            _this16.dataSource.filter = filter.toLocaleLowerCase();
          };

          this.setOpcMultOff = function () {
            if (+_this16.articulo.combo === 1) {
              _this16.articulo.multiple = 0;
            }
          };

          this.setComboOff = function () {
            if (+_this16.articulo.multiple === 1) {
              _this16.articulo.combo = 0;
            }
          };
        }

        _createClass(FormProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
            this.resetArticulo();
            this.loadMedidas();
            this.loadArticulos();
            this.loadPresentaciones();
            this.loadImpuestosEspeciales();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.endSubs.unsubscribe();
          }
        }]);

        return FormProductoComponent;
      }();

      FormProductoComponent.ɵfac = function FormProductoComponent_Factory(t) {
        return new (t || FormProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_10__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_medida_service__WEBPACK_IMPORTED_MODULE_11__["MedidaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__["PresentacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_impuesto_especial_service__WEBPACK_IMPORTED_MODULE_13__["ImpuestoEspecialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_14__["ReportePdfService"]));
      };

      FormProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormProductoComponent,
        selectors: [["app-form-producto"]],
        inputs: {
          articulo: "articulo",
          categoria: "categoria",
          subcategoria: "subcategoria"
        },
        outputs: {
          articuloSvd: "articuloSvd"
        },
        decls: 11,
        vars: 9,
        consts: [[1, "mat-elevation-z4", "fullWidth"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mat-elevation-z4 fullWidth", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmArticulo", "ngForm"], ["align", "start", 4, "ngIf"], ["color", "accent", "class", "catSubCat", "selected", "", 4, "ngIf"], ["color", "warn", "class", "catSubCat", "selected", "", 4, "ngIf"], [1, "fullWidth", 2, "margin-top", "10px"], ["matInput", "", "type", "text", "placeholder", "Descripci\xF3n", "name", "descripcion", "minlength", "1", "maxlength", "250", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Descripci\xF3n", "name", "descripcion", "minlength", "1", "maxlength", "250", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "fullWidth"], ["matInput", "", "type", "number", "placeholder", "Precio", "name", "precio", "required", "", 3, "ngModel", "ngModelChange"], ["name", "presentacion", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "presentacion_reporte", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "C\xF3digo", "name", "codigo", "minlength", "1", "maxlength", "25", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "C\xF3digo", "name", "codigo", "minlength", "1", "maxlength", "25", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Shopify ID", "name", "shopify_id", "minlength", "1", "maxlength", "25", 3, "matKeyboard", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Shopify ID", "name", "shopify_id", "minlength", "1", "maxlength", "25", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "impuesto_especial", 3, "ngModel", "ngModelChange"], ["class", "fullWidth", 4, "ngIf"], [1, "row"], [1, "col", "m3", "s3"], ["name", "produccion", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["name", "mostrar_pos", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["name", "combo", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["name", "multiple", 1, "example-margin", 3, "ngModel", "ngModelChange", "change"], ["name", "mostrar_inventario", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["name", "esreceta", 1, "example-margin", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["align", "start"], ["color", "accent", "selected", "", 1, "catSubCat"], ["color", "warn", "selected", "", 1, "catSubCat"], ["matInput", "", "type", "text", "placeholder", "Descripci\xF3n", "name", "descripcion", "minlength", "1", "maxlength", "250", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Descripci\xF3n", "name", "descripcion", "minlength", "1", "maxlength", "250", "required", "", 3, "ngModel", "ngModelChange"], [3, "value"], ["matInput", "", "type", "text", "placeholder", "C\xF3digo", "name", "codigo", "minlength", "1", "maxlength", "25", "required", "", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "C\xF3digo", "name", "codigo", "minlength", "1", "maxlength", "25", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Shopify ID", "name", "shopify_id", "minlength", "1", "maxlength", "25", 3, "matKeyboard", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "Shopify ID", "name", "shopify_id", "minlength", "1", "maxlength", "25", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "step", "0.05", "placeholder", "Rendimiento", "name", "rendimiento", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "step", "1", "placeholder", "Cantidad minima", "name", "minima", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "step", "1", "placeholder", "Cantidad maxima", "name", "maxima", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Buscar", 3, "keyup"], ["mat-table", "", "class", "mat-elevation-z4 full-width", 3, "dataSource", 4, "ngIf"], ["frmDetalleArticulo", "ngForm"], ["type", "text", "placeholder", "Art\xEDculo", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith"], ["autoArticulos", "matAutocomplete"], ["matInput", "", "placeholder", "Cantidad", "type", "number", "step", "0.01", "name", "cantidad", "required", "", 3, "ngModel", "ngModelChange"], ["name", "medida", "required", "", 3, "ngModel", "ngModelChange"], ["name", "racionable", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["name", "extra", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Precio", "name", "precio", "required", "", 3, "ngModel", "ngModelChange"], ["mat-table", "", 1, "mat-elevation-z4", "full-width", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-wrap", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "medida"], ["matColumnDef", "precio"], ["matColumnDef", "editItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-wrap"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function FormProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "truncar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormProductoComponent_button_5_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormProductoComponent_button_6_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormProductoComponent_form_8_Template, 62, 30, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormProductoComponent_hr_9_Template, 1, 0, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormProductoComponent_mat_card_10_Template, 13, 9, "mat-card", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Art\xEDculo ", !!ctx.articulo.articulo ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx.articulo.descripcion, 35) : "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showArticuloForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArticuloForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showArticuloForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articulo.articulo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articulo.articulo);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatHint"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChip"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_25__["MatKeyboardDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["MaxLengthValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocomplete"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_shared_pipes_truncar_pipe__WEBPACK_IMPORTED_MODULE_28__["TruncarPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DecimalPipe"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 24pt;\n}\n\n.catSubCat[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcHJvZHVjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZm9ybS1wcm9kdWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbkZvbnRTaXplIHtcbiAgICBmb250LXNpemU6IDI0cHQ7XG59XG5cbi5jYXRTdWJDYXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "hjdA":
    /*!*********************************************************************************!*\
      !*** ./src/app/wms/components/ingreso/lista-ingreso/lista-ingreso.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ListaIngresoComponent */

    /***/
    function hjdA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaIngresoComponent", function () {
        return ListaIngresoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_ingreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/ingreso.service */
      "niDi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ListaIngresoComponent_mat_list_item_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaIngresoComponent_mat_list_item_11_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var element_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.getIngreso(element_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No. ", element_r1.ingreso, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fecha: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, element_r1.fecha, "dd/MM/yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bodega: ", element_r1.bodega.descripcion, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Proveedor: ", element_r1.proveedor.razon_social, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ListaIngresoComponent = /*#__PURE__*/function () {
        function ListaIngresoComponent(ingresoSrvc) {
          var _this17 = this;

          _classCallCheck(this, ListaIngresoComponent);

          this.ingresoSrvc = ingresoSrvc;
          this.getIngresoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.length = 0;
          this.pageSize = 5;
          this.pageSizeOptions = [5, 10, 15];
          this.pageIndex = 0;
          this.txtFiltro = '';
          this.params = {
            _fdel: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat),
            _fal: moment__WEBPACK_IMPORTED_MODULE_2__().endOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat)
          };

          this.loadIngresos = function () {
            _this17.ingresoSrvc.get(_this17.params).subscribe(function (lst) {
              if (lst) {
                _this17.lstIngresos = lst;

                _this17.applyFilter();
              }
            });
          };

          this.getIngreso = function (obj) {
            _this17.getIngresoEv.emit({
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
            _this17.pageSize = e.pageSize;
            _this17.pageIndex = e.pageIndex;

            _this17.applyFilter();
          };
        }

        _createClass(ListaIngresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadIngresos();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            if (this.txtFiltro.length > 0) {
              var tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstIngresos, this.txtFiltro);
              this.length = tmpList.length;
              this.lstIngresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
            } else {
              this.length = this.lstIngresos.length;
              this.lstIngresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstIngresos, this.pageSize, this.pageIndex + 1);
            }
          }
        }]);

        return ListaIngresoComponent;
      }();

      ListaIngresoComponent.ɵfac = function ListaIngresoComponent_Factory(t) {
        return new (t || ListaIngresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ingreso_service__WEBPACK_IMPORTED_MODULE_3__["IngresoService"]));
      };

      ListaIngresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListaIngresoComponent,
        selectors: [["app-lista-ingreso"]],
        outputs: {
          getIngresoEv: "getIngresoEv"
        },
        decls: 13,
        vars: 13,
        consts: [[1, "mat-elevation-z4", "fullWidth", 2, "height", "100% important"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Del", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""]],
        template: function ListaIngresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaIngresoComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.params._fdel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaIngresoComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.params._fal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaIngresoComponent_Template_button_click_6_listener() {
              return ctx.loadIngresos();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Buscar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaIngresoComponent_Template_input_keyup_9_listener() {
              return ctx.applyFilter();
            })("ngModelChange", function ListaIngresoComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.txtFiltro = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListaIngresoComponent_mat_list_item_11_Template, 14, 7, "mat-list-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-paginator", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaIngresoComponent_Template_mat_paginator_page_12_listener($event) {
              return ctx.pageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params._fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params._fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstIngresosPaged);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatLine"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWluZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJsaXN0YS1pbmdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbFdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "koTg":
    /*!*******************************************************************************!*\
      !*** ./src/app/wms/components/ingreso/form-ingreso/form-ingreso.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: FormIngresoComponent */

    /***/
    function koTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormIngresoComponent", function () {
        return FormIngresoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */
      "IJgu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _services_ingreso_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/ingreso.service */
      "niDi");
      /* harmony import */


      var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/proveedor.service */
      "50cD");
      /* harmony import */


      var _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/tipo-movimiento.service */
      "3e6T");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../admin/services/presentacion.service */
      "C5NV");
      /* harmony import */


      var _admin_services_documento_tipo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../admin/services/documento-tipo.service */
      "yZ4O");
      /* harmony import */


      var _admin_services_tipo_compra_venta_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../admin/services/tipo-compra-venta.service */
      "DVqU");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");

      function FormIngresoComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.showIngresoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.showIngresoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_2_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tm_r18.tipo_movimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tm_r18.descripcion, " ");
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo de movimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_mat_form_field_2_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.ingreso.tipo_movimiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_form_9_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.ingreso.tipo_movimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.tiposMovimiento);
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_5_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bode_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bode_r22.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bode_r22.descripcion, " ");
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bodega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_mat_form_field_5_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.ingreso.bodega = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_form_9_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.ingreso.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.bodegas);
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_6_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bodeO_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bodeO_r27.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bodeO_r27.descripcion, " ");
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_6_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_form_9_mat_form_field_6_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r28.ingreso.bodega_origen = undefined;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bodega de origen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_mat_form_field_6_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.ingreso.bodega_origen = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_form_9_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormIngresoComponent_form_9_mat_form_field_6_button_5_Template, 3, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.ingreso.bodega_origen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.bodegas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.ingreso.bodega_origen);
        }
      }

      function FormIngresoComponent_form_9_mat_form_field_7_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prov_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prov_r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", prov_r34.nit, ") ", prov_r34.razon_social, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function FormIngresoComponent_form_9_mat_form_field_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proveedor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_mat_form_field_7_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.txtProveedorSelected = $event;
          })("keyup", function FormIngresoComponent_form_9_mat_form_field_7_Template_input_keyup_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.filtrarProveedores(ctx_r37.txtProveedorSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormIngresoComponent_form_9_mat_form_field_7_mat_option_6_Template, 2, 3, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.txtProveedorSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("matAutocomplete", _r32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r14.displayProveedor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.filteredProveedores);
        }
      }

      function FormIngresoComponent_form_9_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r10.form.valid || ctx_r15.bloqueoBotones || +ctx_r15.documento.enviado === 1);
        }
      }

      function FormIngresoComponent_form_9_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_form_9_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.resetIngreso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_form_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormIngresoComponent_form_9_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r10.form.valid && ctx_r40.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormIngresoComponent_form_9_mat_form_field_2_Template, 5, 2, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.ingreso.fecha = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormIngresoComponent_form_9_mat_form_field_5_Template, 5, 2, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormIngresoComponent_form_9_mat_form_field_6_Template, 6, 3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormIngresoComponent_form_9_mat_form_field_7_Template, 7, 6, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_form_9_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.ingreso.comentario = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormIngresoComponent_form_9_button_11_Template, 2, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormIngresoComponent_form_9_button_12_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.ingreso.fecha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.ingreso.comentario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ingreso.ingreso);
        }
      }

      function FormIngresoComponent_hr_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormIngresoComponent_mat_card_11_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r49.showDetalleIngresoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.showDetalleIngresoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r62.descripcion, " ");
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_mat_form_field_9_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r64.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r64.descripcion, " ");
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_mat_form_field_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_card_11_form_7_mat_form_field_9_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r65.detalleIngreso.presentacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_mat_card_11_form_7_mat_form_field_9_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r56.detalleIngreso.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.fltrPresentaciones);
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_mat_form_field_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_card_11_form_7_mat_form_field_10_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r67.detalleIngreso.cantidad_utilizada = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r57.detalleIngreso.cantidad_utilizada);
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_mat_form_field_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_card_11_form_7_mat_form_field_13_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r69.detalleIngreso.precio_unitario = $event;
          })("change", function FormIngresoComponent_mat_card_11_form_7_mat_form_field_13_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r71.detalleIngreso.precio_total = +ctx_r71.detalleIngreso.precio_unitario * +ctx_r71.detalleIngreso.cantidad;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r58.detalleIngreso.precio_unitario);
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_button_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r53.form.valid || ctx_r59.bloqueoBotones || +ctx_r59.documento.enviado === 1 || +ctx_r59.detalleIngreso.cantidad < 1);
        }
      }

      var _c1 = function _c1() {
        return [2, 3];
      };

      function FormIngresoComponent_mat_card_11_form_7_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_form_7_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r72.addToDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar producci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r60.detalleIngreso.articulo || !_r53.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).indexOf(+ctx_r60.ingreso.estatus_movimiento) >= 0 || +ctx_r60.detalleIngreso.cantidad < 1);
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_form_7_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r74.resetDetalleIngreso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormIngresoComponent_mat_card_11_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return _r53.form.valid && ctx_r76.onSubmitDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_card_11_form_7_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r78.txtArticuloSelected = $event;
          })("keyup", function FormIngresoComponent_mat_card_11_form_7_Template_input_keyup_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r79.filtrarArticulos(ctx_r79.txtArticuloSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function FormIngresoComponent_mat_card_11_form_7_Template_mat_autocomplete_optionSelected_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r80.setPresentaciones();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormIngresoComponent_mat_card_11_form_7_mat_option_8_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormIngresoComponent_mat_card_11_form_7_mat_form_field_9_Template, 5, 2, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormIngresoComponent_mat_card_11_form_7_mat_form_field_10_Template, 2, 1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_card_11_form_7_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r81.detalleIngreso.cantidad = $event;
          })("change", function FormIngresoComponent_mat_card_11_form_7_Template_input_change_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r82.detalleIngreso.precio_total = +ctx_r82.detalleIngreso.precio_unitario * +ctx_r82.detalleIngreso.cantidad;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormIngresoComponent_mat_card_11_form_7_mat_form_field_13_Template, 2, 1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormIngresoComponent_mat_card_11_form_7_button_15_Template, 2, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormIngresoComponent_mat_card_11_form_7_button_16_Template, 2, 2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormIngresoComponent_mat_card_11_form_7_button_17_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.txtArticuloSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("matAutocomplete", _r54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r46.displayArticulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.filteredArticulos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.detalleIngreso.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.detalleIngreso.ingreso_detalle);
        }
      }

      function FormIngresoComponent_mat_card_11_hr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r100 = ctx.$implicit;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r84.saveToDB ? element_r100.articulo.descripcion : ctx_r84.getDescripcionArticulo(element_r100.articulo), "");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r101 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r86.saveToDB ? element_r101.presentacion.descripcion : ctx_r86.getDescripcionPresentacion(element_r101.presentacion), " ");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad a Utilizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r102 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r102.cantidad_utilizada, "1.2-2"), " ");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r103 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r103.cantidad, "1.2-2"), " ");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo Unitario Con IVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r104 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r104.precio_unitario, "1.2-2"), " ");
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo Total con IVA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r105.precio_total, "1.2-2"));
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_21_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_table_11_td_21_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

            var element_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r110.getDetalleIngreso(element_r106.ingreso, element_r106.ingreso_detalle);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r107.bloqueoBotones || +ctx_r107.documento.enviado === 1);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_21_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_table_11_td_21_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

            var element_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r113.editFromDetail(element_r106.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).indexOf(+ctx_r108.ingreso.estatus_movimiento) >= 0 || ctx_r108.bloqueoBotones);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_21_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_card_11_table_11_td_21_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);

            var element_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r116.removeFromDetail(element_r106.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).indexOf(+ctx_r109.ingreso.estatus_movimiento) >= 0 || ctx_r109.bloqueoBotones);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormIngresoComponent_mat_card_11_table_11_td_21_button_1_Template, 2, 1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormIngresoComponent_mat_card_11_table_11_td_21_button_2_Template, 2, 2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormIngresoComponent_mat_card_11_table_11_td_21_button_3_Template, 2, 2, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r96.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r96.saveToDB);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 57);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 60);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 61);
        }
      }

      function FormIngresoComponent_mat_card_11_table_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormIngresoComponent_mat_card_11_table_11_th_2_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormIngresoComponent_mat_card_11_table_11_td_3_Template, 2, 1, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormIngresoComponent_mat_card_11_table_11_th_5_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormIngresoComponent_mat_card_11_table_11_td_6_Template, 2, 1, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormIngresoComponent_mat_card_11_table_11_th_8_Template, 2, 0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormIngresoComponent_mat_card_11_table_11_td_9_Template, 3, 4, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormIngresoComponent_mat_card_11_table_11_th_11_Template, 2, 0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormIngresoComponent_mat_card_11_table_11_td_12_Template, 3, 4, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormIngresoComponent_mat_card_11_table_11_th_14_Template, 2, 0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormIngresoComponent_mat_card_11_table_11_td_15_Template, 3, 4, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormIngresoComponent_mat_card_11_table_11_th_17_Template, 2, 0, "th", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormIngresoComponent_mat_card_11_table_11_td_18_Template, 3, 4, "td", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormIngresoComponent_mat_card_11_table_11_th_20_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormIngresoComponent_mat_card_11_table_11_td_21_Template, 4, 3, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormIngresoComponent_mat_card_11_table_11_td_22_Template, 1, 0, "td", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormIngresoComponent_mat_card_11_table_11_tr_23_Template, 1, 0, "tr", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FormIngresoComponent_mat_card_11_table_11_tr_24_Template, 1, 0, "tr", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r48.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r48.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r48.displayedColumns);
        }
      }

      function FormIngresoComponent_mat_card_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_mat_card_11_button_4_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormIngresoComponent_mat_card_11_button_5_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormIngresoComponent_mat_card_11_form_7_Template, 18, 13, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormIngresoComponent_mat_card_11_hr_8_Template, 1, 0, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormIngresoComponent_mat_card_11_Template_input_keyup_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r121.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormIngresoComponent_mat_card_11_table_11_Template, 25, 3, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Detalle del ingreso ", ctx_r4.saveToDB ? "No." : "", " ", ctx_r4.ingreso.ingreso, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.showDetalleIngresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleIngresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleIngresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesIngreso.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesIngreso.length > 0);
        }
      }

      function FormIngresoComponent_mat_tab_12_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_tab_12_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r126.showDocumentoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_tab_12_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_tab_12_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r129);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r128.showDocumentoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_2_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dt_r136 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dt_r136.documento_tipo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dt_r136.descripcion, " ");
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_2_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r137.documento.documento_tipo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_mat_tab_12_form_8_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r131.documento.documento_tipo)("disabled", +ctx_r131.documento.enviado === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r131.documentosTipo);
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_9_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tcv_r140 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tcv_r140.tipo_compra_venta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tcv_r140.descripcion, " ");
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo de compra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_tab_12_form_8_mat_form_field_9_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r141.documento.tipo_compra_venta = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormIngresoComponent_mat_tab_12_form_8_mat_form_field_9_mat_option_4_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r132.documento.tipo_compra_venta)("disabled", +ctx_r132.documento.enviado === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r132.tiposCompraVenta);
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar detalle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r130.form.valid || ctx_r133.bloqueoBotones || +ctx_r133.documento.enviado === 1);
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormIngresoComponent_mat_tab_12_form_8_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r143.enviarAConta();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enviar a contabilidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r130.form.valid || ctx_r134.bloqueoBotones || +ctx_r134.documento.enviado === 1);
        }
      }

      function FormIngresoComponent_mat_tab_12_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9, 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormIngresoComponent_mat_tab_12_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

            var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return _r130.form.valid && ctx_r145.submitDocumento();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormIngresoComponent_mat_tab_12_form_8_mat_form_field_2_Template, 5, 3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_tab_12_form_8_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r147.documento.serie = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_tab_12_form_8_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

            var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r148.documento.numero = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormIngresoComponent_mat_tab_12_form_8_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146);

            var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r149.documento.fecha = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormIngresoComponent_mat_tab_12_form_8_mat_form_field_9_Template, 5, 3, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormIngresoComponent_mat_tab_12_form_8_button_11_Template, 2, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormIngresoComponent_mat_tab_12_form_8_button_12_Template, 2, 1, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.documento.serie)("disabled", +ctx_r125.documento.enviado === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.documento.numero)("disabled", +ctx_r125.documento.enviado === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r125.documento.fecha)("disabled", +ctx_r125.documento.enviado === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r125.saveToDB && +ctx_r125.documento.documento > 0 && +ctx_r125.documento.enviado === 0);
        }
      }

      function FormIngresoComponent_mat_tab_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormIngresoComponent_mat_tab_12_button_5_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormIngresoComponent_mat_tab_12_button_6_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormIngresoComponent_mat_tab_12_form_8_Template, 13, 10, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Documento del ingreso", !!ctx_r5.ingreso.ingreso ? " No. " + ctx_r5.ingreso.ingreso : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.showDocumentoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showDocumentoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showDocumentoForm);
        }
      }

      var FormIngresoComponent = /*#__PURE__*/function () {
        function FormIngresoComponent(dialog, snackBar, ls, ingresoSrvc, proveedorSrvc, tipoMovimientoSrvc, bodegaSrvc, articuloSrvc, presentacinSrvc, documentoTipoSrvc, tipoCompraVentaSrvc) {
          var _this18 = this;

          _classCallCheck(this, FormIngresoComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.ls = ls;
          this.ingresoSrvc = ingresoSrvc;
          this.proveedorSrvc = proveedorSrvc;
          this.tipoMovimientoSrvc = tipoMovimientoSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.articuloSrvc = articuloSrvc;
          this.presentacinSrvc = presentacinSrvc;
          this.documentoTipoSrvc = documentoTipoSrvc;
          this.tipoCompraVentaSrvc = tipoCompraVentaSrvc;
          this.saveToDB = true;
          this.bodega = true;
          this.produccion = false;
          this.ingresoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showIngresoForm = true;
          this.showDetalleIngresoForm = true;
          this.showDocumentoForm = true;
          this.detallesIngreso = [];
          this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'costo_unitario', 'costo_total', 'deleteItem'];
          this.tiposMovimiento = [];
          this.proveedores = [];
          this.filteredProveedores = [];
          this.bodegas = [];
          this.articulos = [];
          this.filteredArticulos = [];
          this.presentaciones = [];
          this.fltrPresentaciones = [];
          this.esMovil = false;
          this.bloqueoBotones = false;
          this.txtArticuloSelected = undefined;
          this.txtProveedorSelected = undefined;
          this.documentosTipo = [];
          this.tiposCompraVenta = [];

          this.loadTiposMovimiento = function () {
            _this18.tipoMovimientoSrvc.get({
              ingreso: 1
            }).subscribe(function (res) {
              if (res) {
                _this18.tiposMovimiento = res;
              }
            });
          };

          this.loadProveedores = function () {
            _this18.proveedorSrvc.get().subscribe(function (res) {
              if (res) {
                _this18.proveedores = res;
              }
            });
          };

          this.loadBodegas = function () {
            _this18.bodegaSrvc.get({
              sede: +_this18.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              if (res) {
                _this18.bodegas = res;
              }
            });
          };

          this.loadPresentaciones = function () {
            _this18.presentacinSrvc.get().subscribe(function (res) {
              if (res) {
                _this18.presentaciones = res;
              }
            });
          };

          this.loadDocumentosTipo = function () {
            _this18.documentoTipoSrvc.get().subscribe(function (res) {
              if (res) {
                _this18.documentosTipo = res;
              }
            });
          };

          this.loadTiposCompraVenta = function () {
            _this18.tipoCompraVentaSrvc.get().subscribe(function (res) {
              if (res) {
                _this18.tiposCompraVenta = res;
              }
            });
          };

          this.removeFromDetail = function (idarticulo) {
            var idx = _this18.detallesIngreso.findIndex(function (de) {
              return +de.articulo === +idarticulo;
            });

            if (idx >= 0) {
              _this18.detallesIngreso.splice(idx, 1);

              _this18.updateTableDataSource();
            }
          };

          this.resetIngreso = function () {
            _this18.ingreso = {
              ingreso: null,
              tipo_movimiento: null,
              fecha: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat),
              bodega: null,
              usuario: _this18.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).idusr || 0,
              comentario: null,
              proveedor: null,
              estatus_movimiento: 1
            };

            _this18.resetDetalleIngreso();

            _this18.detallesIngreso = [];

            _this18.resetDocumento();

            _this18.updateTableDataSource();

            _this18.txtProveedorSelected = undefined;
          };

          this.onSubmit = function () {
            _this18.bloqueoBotones = true;

            _this18.ingresoSrvc.save(_this18.ingreso).subscribe(function (res) {
              // console.log(res);
              _this18.resetIngreso();

              if (res.exito) {
                _this18.ingreso = res.ingreso;

                _this18.setProveedor(+_this18.ingreso.proveedor);
              }

              _this18.ingresoSavedEv.emit();

              _this18.bloqueoBotones = false;
            });
          };

          this.loadArticulos = function () {
            var args = {};

            if (_this18.produccion) {
              args = {
                produccion: 1
              };
            }

            _this18.articuloSrvc.getArticulosIngreso(args).subscribe(function (res) {
              if (res) {
                _this18.articulos = res;
              }
            });
          };

          this.resetDetalleIngreso = function () {
            _this18.detalleIngreso = {
              ingreso_detalle: null,
              ingreso: !!_this18.ingreso.ingreso ? _this18.ingreso.ingreso : null,
              articulo: null,
              cantidad: null,
              precio_unitario: null,
              precio_total: null,
              presentacion: 0
            };
            _this18.txtArticuloSelected = undefined;
          };

          this.loadDetalleIngreso = function () {
            var idingreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this18.ingreso.ingreso;

            _this18.ingresoSrvc.getDetalle(idingreso, {
              ingreso: idingreso
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this18.detallesIngreso = res;

                _this18.updateTableDataSource();
              }
            });
          };

          this.getDetalleIngreso = function () {
            var idingreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this18.ingreso.ingreso;
            var iddetalle = arguments.length > 1 ? arguments[1] : undefined;

            _this18.ingresoSrvc.getDetalle(idingreso, {
              ingreso_detalle: iddetalle
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this18.detalleIngreso = {
                  ingreso_detalle: res[0].ingreso_detalle,
                  ingreso: res[0].ingreso,
                  articulo: res[0].articulo.articulo,
                  cantidad: +res[0].cantidad,
                  precio_unitario: +res[0].precio_unitario,
                  precio_total: +res[0].precio_total,
                  presentacion: res[0].presentacion.presentacion
                };

                _this18.setPresentaciones();

                _this18.txtArticuloSelected = res[0].articulo;
                _this18.showDetalleIngresoForm = true;
              }
            });
          };

          this.onSubmitDetail = function () {
            _this18.bloqueoBotones = true;
            _this18.detalleIngreso.ingreso = _this18.ingreso.ingreso;
            _this18.detalleIngreso.precio_total = +_this18.detalleIngreso.cantidad * +_this18.detalleIngreso.precio_unitario; // console.log(this.detalleIngreso);

            if (+_this18.detalleIngreso.cantidad < 1) {
              _this18.detalleIngreso.cantidad = 1;
            }

            _this18.ingresoSrvc.saveDetalle(_this18.detalleIngreso).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this18.loadDetalleIngreso();

                _this18.resetDetalleIngreso();
              }

              _this18.bloqueoBotones = false;
            });
          };

          this.agregaADetalle = function () {
            var index = _this18.detallesIngreso.findIndex(function (de) {
              return +de.articulo === +_this18.detalleIngreso.articulo;
            });

            if (index > -1) {
              _this18.detallesIngreso.splice(index, 1);
            }

            var art;
            art = _this18.articulos.filter(function (p) {
              return +p.articulo == _this18.detalleIngreso.articulo;
            });
            _this18.detalleIngreso.presentacion = art[0].presentacion_reporte;

            if (+_this18.detalleIngreso.cantidad < 1) {
              _this18.detalleIngreso.cantidad = 1;
            }

            _this18.detallesIngreso.push(_this18.detalleIngreso);

            _this18.resetDetalleIngreso();

            _this18.updateTableDataSource();
          };

          this.addToDetail = function () {
            // console.log('DETALLE INGRESO = ', this.detalleIngreso);
            // console.log('ESTOY EN PRODUCCION = ', this.produccion);
            if (_this18.detalleIngreso.cantidad > 0) {
              if (_this18.produccion) {
                _this18.agregaADetalle();
              } else {
                if (_this18.detalleIngreso.cantidad_utilizada > 0) {
                  _this18.agregaADetalle();
                } else {
                  _this18.snackBar.open("ERROR: La cantidad a utilizar debe ser mayor a 0", 'Egreso', {
                    duration: 3000
                  });
                }
              }
            } else {
              _this18.snackBar.open("ERROR: La cantidad debe ser mayor a 0", 'Egreso', {
                duration: 3000
              });
            }
          };

          this.editFromDetail = function (idarticulo) {
            var tmp = _this18.detallesIngreso.filter(function (de) {
              return +de.articulo === +idarticulo;
            })[0];

            _this18.detalleIngreso = {
              ingreso_detalle: tmp.ingreso_detalle,
              ingreso: tmp.ingreso,
              articulo: tmp.articulo,
              cantidad: +tmp.cantidad < 1 ? 1 : tmp.cantidad,
              precio_unitario: tmp.precio_unitario,
              precio_total: tmp.precio_total,
              presentacion: tmp.presentacion,
              cantidad_utilizada: tmp.cantidad_utilizada
            };

            _this18.setPresentaciones();

            _this18.txtArticuloSelected = _this18.articulos.filter(function (p) {
              return +p.articulo == _this18.detalleIngreso.articulo;
            })[0]; //this.showDetalleIngresoForm = true;
            //
          };

          this.getDescripcionArticulo = function (idarticulo) {
            return _this18.articulos.find(function (art) {
              return +art.articulo === +idarticulo;
            }).descripcion || '';
          };

          this.getDescripcionPresentacion = function (idpresentacion) {
            return _this18.presentaciones.find(function (p) {
              return +p.presentacion === +idpresentacion;
            }).descripcion || '';
          };

          this.updateTableDataSource = function () {
            _this18.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this18.detallesIngreso);

            _this18.dataSource.filterPredicate = function (data, filter) {
              return data.articulo.descripcion.toLowerCase().includes(filter);
            };
          };

          this.eliminarArticulo = function (element) {
            // const idx = this.detallesIngreso.findIndex(d => d.ingreso_detalle === element.ingreso_detalle);
            _this18.detallesIngreso.splice(_this18.detallesIngreso.findIndex(function (d) {
              return d.ingreso_detalle === element.ingreso_detalle;
            }), 1);

            _this18.updateTableDataSource();
          };

          this.filtrarArticulos = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this18.filteredArticulos = _this18.articulos.filter(function (a) {
                return a.descripcion.toLowerCase().includes(filterValue);
              });
            } else {
              _this18.filteredArticulos = _this18.articulos;
            }
          };

          this.displayArticulo = function (art) {
            if (art) {
              _this18.detalleIngreso.articulo = art.articulo;
              return art.descripcion;
            }

            return undefined;
          };

          this.filtrarProveedores = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this18.filteredProveedores = _this18.proveedores.filter(function (a) {
                return a.razon_social.toLowerCase().includes(filterValue) || a.nit.toLowerCase().includes(filterValue);
              });
            } else {
              _this18.filteredProveedores = _this18.proveedores;
            }
          };

          this.displayProveedor = function (p) {
            if (p) {
              _this18.ingreso.proveedor = p.proveedor;
              return "(".concat(p.nit, ") ").concat(p.razon_social);
            }

            return undefined;
          };

          this.setPresentaciones = function () {
            _this18.fltrPresentaciones = [];

            var idx = _this18.articulos.findIndex(function (p) {
              return +p.articulo === +_this18.detalleIngreso.articulo;
            });

            var articulo = _this18.articulos[idx];
            _this18.fltrPresentaciones = _this18.presentaciones.filter(function (p) {
              return +p.medida.medida === +articulo.presentacion.medida;
            });
          };

          this.setProveedor = function (idProveedor) {
            return _this18.txtProveedorSelected = _this18.proveedores.find(function (p) {
              return +p.proveedor === idProveedor;
            });
          };

          this.applyFilter = function (filter) {
            _this18.dataSource.filter = filter.toLocaleLowerCase();
          };

          this.resetDocumento = function () {
            return _this18.documento = {
              documento: null,
              ingreso: null,
              documento_tipo: null,
              serie: null,
              numero: null,
              fecha: null,
              tipo_compra_venta: null,
              enviado: 0
            };
          };

          this.setDocumentoIngreso = function (dc) {
            _this18.documento = {
              documento: +dc.documento,
              ingreso: +dc.ingreso,
              documento_tipo: dc.documento_tipo.documento_tipo,
              serie: dc.serie,
              numero: dc.numero,
              fecha: dc.fecha,
              tipo_compra_venta: dc.tipo_compra_venta.tipo_compra_venta,
              enviado: dc.enviado
            };
          };

          this.loadDocumento = function () {
            var idingreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this18.ingreso.ingreso || null;

            if (idingreso) {
              _this18.ingresoSrvc.getDocumento({
                ingreso: idingreso
              }).subscribe(function (doc) {
                if (doc && doc.length > 0) {
                  _this18.setDocumentoIngreso(doc[0]);
                } else {
                  _this18.resetDocumento();
                }
              });
            }
          };

          this.submitDocumento = function () {
            _this18.documento.ingreso = _this18.ingreso.ingreso;

            _this18.ingresoSrvc.saveDocumento(_this18.documento).subscribe(function (res) {
              if (res.exito) {
                _this18.setDocumentoIngreso(res.documento);

                _this18.snackBar.open('Documento guardado con éxito.', 'Ingreso', {
                  duration: 3000
                });
              } else {
                _this18.snackBar.open("ERROR: ".concat(res.mensaje), 'Ingreso', {
                  duration: 7000
                });
              }
            });
          };

          this.enviarAConta = function () {
            var _a;

            if (+((_a = _this18.documento) === null || _a === void 0 ? void 0 : _a.documento) > 0) {
              var confirmRef = _this18.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
                maxWidth: '400px',
                data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogModel"]('Envío a contabilidad', 'Una vez enviado a contabilidad no podrá modificar el ingreso ni el documento. ¿Desea continuar?', 'Sí', 'No')
              });

              confirmRef.afterClosed().subscribe(function (confirma) {
                if (confirma) {
                  _this18.ingresoSrvc.enviarDocumentoAConta(_this18.documento.documento).subscribe(function (res) {
                    if (res.exito) {
                      _this18.documento = res.documento;

                      _this18.snackBar.open('Documento enviado a contabilidad.', 'Ingreso', {
                        duration: 3000
                      });
                    } else {
                      _this18.snackBar.open("ERROR: ".concat(res.mensaje), 'Ingreso', {
                        duration: 7000
                      });
                    }
                  });
                }
              });
            }
          };
        }

        _createClass(FormIngresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
            this.resetIngreso();
            this.loadTiposMovimiento();
            this.loadProveedores();
            this.loadBodegas();
            this.loadArticulos();
            this.loadPresentaciones();
            this.loadDocumentosTipo();
            this.loadTiposCompraVenta();

            if (!this.bodega) {
              this.displayedColumns = ['cantidad_utilizada', 'articulo', 'presentacion', 'cantidad', 'deleteItem'];
            }

            if (this.produccion) {
              this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'deleteItem'];
            }
          }
        }]);

        return FormIngresoComponent;
      }();

      FormIngresoComponent.ɵfac = function FormIngresoComponent_Factory(t) {
        return new (t || FormIngresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ingreso_service__WEBPACK_IMPORTED_MODULE_8__["IngresoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proveedor_service__WEBPACK_IMPORTED_MODULE_9__["ProveedorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_10__["TipoMovimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_11__["BodegaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_12__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_13__["PresentacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_documento_tipo_service__WEBPACK_IMPORTED_MODULE_14__["DocumentoTipoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_tipo_compra_venta_service__WEBPACK_IMPORTED_MODULE_15__["TipoCompraVentaService"]));
      };

      FormIngresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormIngresoComponent,
        selectors: [["app-form-ingreso"]],
        inputs: {
          ingreso: "ingreso",
          saveToDB: "saveToDB",
          bodega: "bodega",
          produccion: "produccion"
        },
        outputs: {
          ingresoSavedEv: "ingresoSavedEv"
        },
        decls: 13,
        vars: 7,
        consts: [["label", "Ingreso"], [1, "mat-elevation-z4", "fullWidth"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mat-elevation-z4 fullWidth", 4, "ngIf"], ["label", "Documento", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmIngreso", "ngForm"], ["class", "fullWidth", 4, "ngIf"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Fecha", "name", "fecha", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Comentarios", "name", "comentario", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", "class", "btnAccion", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["name", "tipo_movimiento", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "bodega", "required", "", 3, "ngModel", "ngModelChange"], ["name", "bodega_origen", 3, "ngModel", "ngModelChange"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["type", "text", "placeholder", "Proveedor", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith"], ["autoProveedores", "matAutocomplete"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Buscar", 3, "keyup"], ["mat-table", "", "class", "mat-elevation-z4 full-width", 3, "dataSource", 4, "ngIf"], ["frmDetalleIngreso", "ngForm"], ["type", "text", "placeholder", "Art\xEDculo", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith", "optionSelected"], ["autoArticulos", "matAutocomplete"], ["matInput", "", "placeholder", "Cantidad", "name", "cantidad", "type", "number", "step", "0.01", "min", "1", "required", "", 3, "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["name", "presentacion", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Cantidad a Utilizar", "name", "cantidad_utilizada", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Costo unitario Con IVA", "name", "precio_unitario", "type", "number", "step", "0.01", "required", "", 3, "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z4", "full-width", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-wrap", 4, "matCellDef"], ["matColumnDef", "presentacion"], ["matColumnDef", "cantidad_utilizada"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "costo_unitario"], ["matColumnDef", "costo_total"], ["matColumnDef", "deleteItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-wrap"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["mat-header-row", ""], ["mat-row", ""], ["label", "Documento"], ["frmDocumento", "ngForm"], ["matInput", "", "type", "text", "placeholder", "Serie", "name", "serie", "minlength", "1", "maxlength", "50", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "type", "text", "placeholder", "N\xFAmero", "name", "numero", "minlength", "1", "maxlength", "50", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Fecha", "name", "fecha", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "disabled", "click", 4, "ngIf"], ["name", "documento_tipo", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["name", "tipo_compra_venta", "required", "", 3, "ngModel", "disabled", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"]],
        template: function FormIngresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormIngresoComponent_button_6_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormIngresoComponent_button_7_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormIngresoComponent_form_9_Template, 13, 8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormIngresoComponent_hr_10_Template, 1, 0, "hr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormIngresoComponent_mat_card_11_Template, 12, 7, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormIngresoComponent_mat_tab_12_Template, 9, 4, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ingreso", !!ctx.ingreso.ingreso ? " No. " + ctx.ingreso.ingreso : "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showIngresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIngresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIngresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ingreso.ingreso || !ctx.saveToDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ingreso.ingreso || !ctx.saveToDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx.ingreso.ingreso > 0);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NumberValueAccessor"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["MaxLengthValidator"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW5ncmVzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJmb3JtLWluZ3Jlc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb25Gb250U2l6ZSB7XG4gICAgZm9udC1zaXplOiAyNHB0O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "kp69":
    /*!**************************************************************************************************!*\
      !*** ./src/app/wms/components/fisico/form-inventario-fisico/form-inventario-fisico.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: FormInventarioFisicoComponent */

    /***/
    function kp69(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormInventarioFisicoComponent", function () {
        return FormInventarioFisicoComponent;
      });
      /* harmony import */


      var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */
      "IJgu");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../restaurante/services/reporte-pdf.service */
      "FHMA");
      /* harmony import */


      var _services_fisico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/fisico.service */
      "MArN");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/components/cargando/cargando.component */
      "TOq3");

      function FormInventarioFisicoComponent_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormInventarioFisicoComponent_mat_icon_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormInventarioFisicoComponent_mat_card_content_12_app_cargando_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cargando");
        }
      }

      function FormInventarioFisicoComponent_mat_card_content_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormInventarioFisicoComponent_mat_card_content_12_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r5.buscar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormInventarioFisicoComponent_mat_card_content_12_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r7.params.numero = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FormInventarioFisicoComponent_mat_card_content_12_app_cargando_6_Template, 1, 0, "app-cargando", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.params.numero);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.cargando);
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_tr_4_Template_input_ngModelChange_5_listener($event) {
            var art_r17 = ctx.$implicit;
            return art_r17.existencia_sistema = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_tr_4_Template_input_ngModelChange_8_listener($event) {
            var art_r17 = ctx.$implicit;
            return art_r17.existencia_fisica = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var art_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", art_r17.narticulo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", art_r17.existencia_sistema)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", art_r17.existencia_fisica)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        }
      }

      function FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_tr_4_Template, 9, 7, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var gcat_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](gcat_r15.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", gcat_r15.datos);
        }
      }

      function FormInventarioFisicoComponent_div_13_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FormInventarioFisicoComponent_div_13_ng_container_8_ng_container_5_Template, 5, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var cat_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cat_r13.descripcion);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", cat_r13.datos);
        }
      }

      function FormInventarioFisicoComponent_div_13_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormInventarioFisicoComponent_div_13_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormInventarioFisicoComponent_div_13_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r20.confirmar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function FormInventarioFisicoComponent_div_13_app_cargando_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cargando");
        }
      }

      function FormInventarioFisicoComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormInventarioFisicoComponent_div_13_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return _r8.form.valid && ctx_r22.actualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormInventarioFisicoComponent_div_13_ng_container_8_Template, 6, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormInventarioFisicoComponent_div_13_button_10_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormInventarioFisicoComponent_div_13_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r24.imprimir();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormInventarioFisicoComponent_div_13_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.imprimirXls();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormInventarioFisicoComponent_div_13_button_15_Template, 2, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormInventarioFisicoComponent_div_13_app_cargando_16_Template, 1, 0, "app-cargando", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.articulos);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.inventario.confirmado == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.inventario.confirmado == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.cargando);
        }
      }

      var FormInventarioFisicoComponent = /*#__PURE__*/function () {
        function FormInventarioFisicoComponent(snackBar, pdfServicio, fisicoSrvc, dialog) {
          var _this19 = this;

          _classCallCheck(this, FormInventarioFisicoComponent);

          this.snackBar = snackBar;
          this.pdfServicio = pdfServicio;
          this.fisicoSrvc = fisicoSrvc;
          this.dialog = dialog;
          this.showForm = true;
          this.params = {};
          this.cargando = false;
          this.articulos = [];
          this.inventario = {};
          this.titulo = "Inventario_Fisico";

          this.resetDatos = function () {
            _this19.articulos = [];
            _this19.inventario = {
              inventario_fisico: 0,
              sede: null,
              usuario: null,
              categoria_grupo: null,
              fhcreacion: null,
              fecha: null,
              notas: null,
              confirmado: 0
            };
          };

          this.buscar = function () {
            var numero = "" + _this19.params.numero;

            if (numero.length < 19) {
              _this19.resetDatos();

              _this19.fisicoSrvc.getDetalle(_this19.params.numero).subscribe(function (res) {
                if (res && res.exito) {
                  _this19.articulos = res.detalle;
                  _this19.inventario = res.inventario;
                } else {
                  _this19.snackBar.open("ERROR: ".concat(res.mensaje), 'Inventario', {
                    duration: 3000
                  });
                }
              });
            } else {
              _this19.snackBar.open("ERROR: El texto sobrepasa la longitud permitida", 'Inventario', {
                duration: 3000
              });
            }
          };

          this.actualizar = function () {
            _this19.fisicoSrvc.saveDetalle(_this19.articulos).subscribe(function (res) {
              if (res.exito) {
                _this19.snackBar.open('Datos actualizados exitosamente', 'Inventario', {
                  duration: 3000
                });
              } else {
                _this19.snackBar.open("ERROR: ".concat(res.mensaje), 'Inventario', {
                  duration: 3000
                });
              }
            });
          };

          this.confirmar = function () {
            var dialogRef = _this19.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"], {
              maxWidth: '400px',
              data: new _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogModel"]('Confirmar Inventario Fisico', 'No podrá modificar los datos ingresados. ¿Desea continuar?', 'Sí', 'No')
            });

            dialogRef.afterClosed().subscribe(function (res) {
              if (res) {
                _this19.fisicoSrvc.confirmar(_this19.inventario).subscribe(function (res) {
                  if (res.exito) {
                    _this19.inventario = res.inventario;

                    _this19.snackBar.open('Inventario confirmado exitosamente', 'Inventario', {
                      duration: 3000
                    });
                  } else {
                    _this19.snackBar.open("ERROR: ".concat(res.mensaje), 'Inventario', {
                      duration: 3000
                    });
                  }
                });
              }
            });
          };

          this.imprimir = function () {
            _this19.pdfServicio.imprimirInventarioFisico(_this19.inventario.inventario_fisico, {
              existencia_fisica: true
            }).subscribe(function (resImp) {
              var blob = new Blob([resImp], {
                type: 'application/pdf'
              });
              Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "".concat(_this19.titulo, ".pdf"));
            });
          };

          this.imprimirXls = function () {
            var params = {
              existencia_fisica: true,
              "_excel": true
            };

            _this19.pdfServicio.imprimirInventarioFisico(_this19.inventario.inventario_fisico, params).subscribe(function (resImp) {
              var blob = new Blob([resImp], {
                type: 'application/vnd.ms-excel'
              });
              Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "".concat(_this19.titulo, ".xls"));
            });
          };
        }

        _createClass(FormInventarioFisicoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetDatos();
          }
        }]);

        return FormInventarioFisicoComponent;
      }();

      FormInventarioFisicoComponent.ɵfac = function FormInventarioFisicoComponent_Factory(t) {
        return new (t || FormInventarioFisicoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_restaurante_services_reporte_pdf_service__WEBPACK_IMPORTED_MODULE_4__["ReportePdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_fisico_service__WEBPACK_IMPORTED_MODULE_5__["FisicoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      FormInventarioFisicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FormInventarioFisicoComponent,
        selectors: [["app-form-inventario-fisico"]],
        decls: 14,
        vars: 4,
        consts: [[1, "row"], [1, "col", "m12", "s12"], [1, "mat-elevation-z4", "fullWidth"], [1, "col"], [1, "col", 2, "float", "right"], ["mat-button", "", "type", "button", "color", "accent", 3, "click"], ["class", "iconFontSize", 4, "ngIf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], [1, "fullWidth"], ["matInput", "", "type", "number", "maxlength", "17", "max", "17", "placeholder", "N\xFAmero", "name", "numero", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "matSuffix", "", "color", "accent", "type", "submit"], ["novalidate", "", "autocomplete", "off", 3, "ngSubmit"], ["frmConteoFisico", "ngForm"], [1, "tbl"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "color", "accent", "type", "submit", 4, "ngIf"], ["mat-button", "", "color", "accent", "type", "button", 3, "click"], ["mat-button", "", "color", "accent", "type", "button", 3, "click", 4, "ngIf"], ["colspan", "2", 1, "brdTSingleBSingle"], ["colspan", "3", 1, "brdTSingleBSingle"], [1, "brdTSingleBSingle"], ["matInput", "", "type", "number", "step", "0.01", "placeholder", "Existencia Sistema", "disabled", "", 2, "color", "black", "-webkit-text-fill-color", "black", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "number", "step", "0.01", "placeholder", "Cantidad", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-button", "", "color", "accent", "type", "submit"]],
        template: function FormInventarioFisicoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Ingreso Inventario F\xEDsico");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormInventarioFisicoComponent_Template_button_click_9_listener() {
              return ctx.showForm = !ctx.showForm;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormInventarioFisicoComponent_mat_icon_10_Template, 2, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FormInventarioFisicoComponent_mat_icon_11_Template, 2, 0, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormInventarioFisicoComponent_mat_card_content_12_Template, 7, 2, "mat-card-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FormInventarioFisicoComponent_div_13_Template, 17, 4, "div", 8);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.articulos.length > 0);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _shared_components_cargando_cargando_component__WEBPACK_IMPORTED_MODULE_14__["CargandoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWludmVudGFyaW8tZmlzaWNvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "m9rJ":
    /*!******************************************************************************!*\
      !*** ./src/app/wms/components/egreso/lista-egreso/lista-egreso.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ListaEgresoComponent */

    /***/
    function m9rJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListaEgresoComponent", function () {
        return ListaEgresoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_egreso_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/egreso.service */
      "Hwog");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function ListaEgresoComponent_input_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ListaEgresoComponent_input_9_Template_input_input_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.applyFilter();
          })("ngModelChange", function ListaEgresoComponent_input_9_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.txtFiltro = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r0.keyboardLayout)("ngModel", ctx_r0.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      }

      function ListaEgresoComponent_input_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListaEgresoComponent_input_10_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.applyFilter();
          })("ngModelChange", function ListaEgresoComponent_input_10_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.txtFiltro = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function ListaEgresoComponent_mat_list_item_12_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comanda: #", element_r9.idcomandafox, "");
        }
      }

      function ListaEgresoComponent_mat_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaEgresoComponent_mat_list_item_12_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var element_r9 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.getEgreso(element_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "trending_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaEgresoComponent_mat_list_item_12_span_12_Template, 2, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No. ", element_r9.egreso, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Fecha: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, element_r9.fecha, "dd/MM/yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Bodega: ", element_r9.bodega.descripcion, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!element_r9.idcomandafox);
        }
      }

      var ListaEgresoComponent = /*#__PURE__*/function () {
        function ListaEgresoComponent(egresoSrvc, ls) {
          var _this20 = this;

          _classCallCheck(this, ListaEgresoComponent);

          this.egresoSrvc = egresoSrvc;
          this.ls = ls;
          this.getEgresoEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.length = 0;
          this.pageSize = 5;
          this.pageSizeOptions = [5, 10, 15];
          this.pageIndex = 0;
          this.txtFiltro = '';
          this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].IDIOMA_TECLADO;
          this.esMovil = false;
          this.params = {
            _fdel: moment__WEBPACK_IMPORTED_MODULE_2__().startOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat),
            _fal: moment__WEBPACK_IMPORTED_MODULE_2__().endOf('month').format(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].dbDateFormat)
          };

          this.loadEgresos = function () {
            _this20.egresoSrvc.get(_this20.params).subscribe(function (lst) {
              if (lst) {
                _this20.lstEgresos = lst;

                _this20.applyFilter();
              }
            });
          };

          this.getEgreso = function (obj) {
            _this20.getEgresoEv.emit({
              egreso: obj.egreso,
              tipo_movimiento: obj.tipo_movimiento.tipo_movimiento,
              bodega: obj.bodega.bodega,
              fecha: obj.fecha,
              usuario: obj.usuario.usuario,
              estatus_movimiento: obj.estatus_movimiento || 1,
              traslado: obj.traslado || 0,
              idcomandafox: obj.idcomandafox
            });
          };

          this.pageChange = function (e) {
            _this20.pageSize = e.pageSize;
            _this20.pageIndex = e.pageIndex;

            _this20.applyFilter();
          };
        }

        _createClass(ListaEgresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].usrTokenVar).enmovil || false;
            this.loadEgresos();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            if (this.txtFiltro.length > 0) {
              var tmpList = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["MultiFiltro"])(this.lstEgresos, this.txtFiltro);
              this.length = tmpList.length;
              this.lstEgresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(tmpList, this.pageSize, this.pageIndex + 1);
            } else {
              this.length = this.lstEgresos.length;
              this.lstEgresosPaged = Object(_shared_global__WEBPACK_IMPORTED_MODULE_1__["PaginarArray"])(this.lstEgresos, this.pageSize, this.pageIndex + 1);
            }
          }
        }]);

        return ListaEgresoComponent;
      }();

      ListaEgresoComponent.ɵfac = function ListaEgresoComponent_Factory(t) {
        return new (t || ListaEgresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_egreso_service__WEBPACK_IMPORTED_MODULE_3__["EgresoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]));
      };

      ListaEgresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListaEgresoComponent,
        selectors: [["app-lista-egreso"]],
        outputs: {
          getEgresoEv: "getEgresoEv"
        },
        decls: 14,
        vars: 12,
        consts: [[1, "mat-elevation-z4", "fullWidth"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Del", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Al", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Buscar...", 3, "matKeyboard", "ngModel", "ngModelOptions", "input", "ngModelChange", 4, "ngIf"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"], ["matInput", "", "placeholder", "Buscar...", 3, "matKeyboard", "ngModel", "ngModelOptions", "input", "ngModelChange"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], [3, "click"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-line", "", 4, "ngIf"]],
        template: function ListaEgresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaEgresoComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.params._fdel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListaEgresoComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.params._fal = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaEgresoComponent_Template_button_click_6_listener() {
              return ctx.loadEgresos();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Buscar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListaEgresoComponent_input_9_Template, 1, 4, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListaEgresoComponent_input_10_Template, 1, 3, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListaEgresoComponent_mat_list_item_12_Template, 13, 7, "mat-list-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-paginator", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ListaEgresoComponent_Template_mat_paginator_page_13_listener($event) {
              return ctx.pageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params._fdel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params._fal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esMovil);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lstEgresosPaged);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginator"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_13__["MatKeyboardDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [".fullWidth[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLWVncmVzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6Imxpc3RhLWVncmVzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxXaWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "nahY":
    /*!************************************************************************!*\
      !*** ./src/app/wms/components/producto/producto/producto.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductoComponent */

    /***/
    function nahY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductoComponent", function () {
        return ProductoComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../categoria-producto/categoria-producto.component */
      "YYA0");
      /* harmony import */


      var _sub_categoria_producto_sub_categoria_producto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../sub-categoria-producto/sub-categoria-producto.component */
      "QXDe");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../form-producto/form-producto.component */
      "cKxi");
      /* harmony import */


      var _shared_pipes_truncar_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/pipes/truncar.pipe */
      "xyQh");

      var _c0 = ["frmProducto"];
      var _c1 = ["frmSubcategoria"];

      function ProductoComponent_mat_chip_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoComponent_mat_chip_12_Template_mat_chip_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var cat_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return !ctx_r6.cargando && ctx_r6.selectCategoria(cat_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cat_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r5.descripcion, " ");
        }
      }

      function ProductoComponent_mat_chip_list_13_mat_chip_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoComponent_mat_chip_list_13_mat_chip_1_Template_mat_chip_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var subcat_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return !ctx_r11.cargando && ctx_r11.selectSubcat(subcat_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subcat_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subcat_r10.descripcion, " ");
        }
      }

      function ProductoComponent_mat_chip_list_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductoComponent_mat_chip_list_13_mat_chip_1_Template, 2, 1, "mat-chip", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lcg_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", lcg_r8);
        }
      }

      function ProductoComponent_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoComponent_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var producto_r13 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.setArticulo(producto_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "truncar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var producto_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, producto_r13.descripcion, 35));
        }
      }

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var ProductoComponent = /*#__PURE__*/function () {
        function ProductoComponent(articuloSrvc, ls) {
          var _this21 = this;

          _classCallCheck(this, ProductoComponent);

          this.articuloSrvc = articuloSrvc;
          this.ls = ls;
          this.categorias = [];
          this.categoriasGrupos = [];
          this.listasCategoriasGrupo = [];
          this.articulos = [];
          this.articulosFull = [];
          this.txtFiltro = '';
          this.cargando = false;
          this.endSubs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();

          this.setArticulo = function (art) {
            _this21.endSubs.add(_this21.articuloSrvc.getArticulo({
              articulo: art.articulo
            }).subscribe(function (res) {
              if (!!res && res.length > 0) {
                var obj = res[0];
                _this21.articulo = {
                  articulo: +obj.articulo,
                  categoria_grupo: +obj.categoria_grupo.categoria_grupo,
                  presentacion: obj.presentacion.presentacion,
                  descripcion: obj.descripcion,
                  precio: +obj.precio,
                  codigo: obj.codigo,
                  produccion: obj.produccion,
                  presentacion_reporte: obj.presentacion_reporte.presentacion,
                  mostrar_pos: obj.mostrar_pos,
                  impuesto_especial: obj.impuesto_especial,
                  shopify_id: obj.shopify_id,
                  multiple: obj.multiple,
                  cantidad_minima: obj.cantidad_minima,
                  cantidad_maxima: obj.cantidad_maxima,
                  combo: obj.combo,
                  rendimiento: obj.rendimiento,
                  mostrar_inventario: obj.mostrar_inventario,
                  esreceta: obj.esreceta
                };
                _this21.categoria = _this21.categorias.find(function (c) {
                  return +c.categoria === +obj.categoria_grupo.categoria;
                });
                _this21.categoriaGrupo = {
                  categoria_grupo: +obj.categoria_grupo.categoria_grupo,
                  categoria: +obj.categoria_grupo.categoria,
                  categoria_grupo_grupo: +obj.categoria_grupo.categoria_grupo_grupo,
                  descripcion: obj.categoria_grupo.descripcion,
                  receta: +obj.categoria_grupo.receta,
                  impresora: +obj.categoria_grupo.impresora,
                  descuento: +obj.categoria_grupo.descuento
                };

                _this21.frmProductoComponent.loadRecetas(+_this21.articulo.articulo);

                _this21.frmProductoComponent.resetReceta();

                _this21.frmProductoComponent.filtrarPresentaciones(_this21.articulo);
              }
            }));
          };

          this.setArticuloCategoriaGrupo = function (idcategoriagrupo) {
            _this21.articulo.categoria_grupo = +idcategoriagrupo;

            _this21.frmProductoComponent.setArticuloCategoriaGrupo(+idcategoriagrupo);
          };

          this.refreshArticuloList = function (obj) {
            _this21.loadArticulos();
          };

          this.loadCategorias = function () {
            _this21.endSubs.add(_this21.articuloSrvc.getCategorias({
              sede: +_this21.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              if (res) {
                _this21.categorias = res;
              }
            }));
          };

          this.loadSubCategorias = function (idcategoria) {
            var idsubcat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            // console.log(this.articulo);
            _this21.cargando = true;
            var fltr = {
              categoria: +idcategoria,
              categoria_grupo_grupo: null
            };

            if (idsubcat) {
              _this21.frmProductoComponent.articulo.categoria_grupo = idsubcat;
              fltr.categoria_grupo_grupo = idsubcat;
            } else {
              delete fltr.categoria_grupo_grupo;
            }

            _this21.endSubs.add(_this21.articuloSrvc.getCategoriasGrupos(fltr).subscribe(function (res) {
              if (res && res.length > 0) {
                if (!idsubcat) {
                  _this21.frmProductoComponent.articulo.categoria_grupo = null;
                  _this21.listasCategoriasGrupo = [];
                }

                _this21.listasCategoriasGrupo.push(_this21.articuloSrvc.adaptCategoriaGrupoResponse(res));
              } else {
                if (idsubcat) {
                  _this21.loadArticulos(idsubcat);
                }
              }

              _this21.cargando = false;
            }));
          };

          this.loadArticulos = function () {
            var idsubcat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var fltr = {
              categoria_grupo: null
            };

            if (idsubcat) {
              fltr.categoria_grupo = idsubcat;
            } else {
              delete fltr.categoria_grupo;
            }

            _this21.endSubs.add(_this21.articuloSrvc.getArticulos(fltr).subscribe(function (res) {
              if (res) {
                _this21.articulosFull = res;
                _this21.articulos = JSON.parse(JSON.stringify(_this21.articulosFull));

                _this21.applyFilter();
              }
            }));
          };

          this.reloadCategoriasInSubcategoriasArticulos = function () {
            _this21.loadCategorias();

            _this21.frmSubcategoria.loadCategorias();
          };

          this.verTodos = function () {
            _this21.categoria = null;
            _this21.categoriaGrupo = null;

            _this21.frmProductoComponent.resetArticulo();

            _this21.categoriasGrupos = [];
            _this21.listasCategoriasGrupo = [];

            _this21.loadArticulos();
          };

          this.selectCategoria = function (cat) {
            _this21.categoria = cat;
            _this21.categoriaGrupo = null;

            _this21.frmProductoComponent.resetArticulo();

            _this21.articulos = [];

            _this21.loadSubCategorias(cat.categoria);
          };

          this.selectSubcat = function (subcat) {
            _this21.categoriaGrupo = subcat;

            _this21.loadSubCategorias(_this21.categoria.categoria, subcat.categoria_grupo);
          };

          this.articulo = {
            articulo: null,
            categoria_grupo: null,
            presentacion: null,
            descripcion: null,
            precio: null,
            bien_servicio: 'B',
            produccion: 0,
            presentacion_reporte: null,
            mostrar_pos: 0,
            impuesto_especial: null,
            rendimiento: 1,
            mostrar_inventario: 0
          };
        }

        _createClass(ProductoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadCategorias();
            this.loadArticulos();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.endSubs.unsubscribe();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            if (this.txtFiltro.length > 0) {
              this.articulos = Object(_shared_global__WEBPACK_IMPORTED_MODULE_0__["MultiFiltro"])(this.articulosFull, this.txtFiltro);
            } else {
              this.articulos = JSON.parse(JSON.stringify(this.articulosFull));
            }
          }
        }]);

        return ProductoComponent;
      }();

      ProductoComponent.ɵfac = function ProductoComponent_Factory(t) {
        return new (t || ProductoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_3__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]));
      };

      ProductoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProductoComponent,
        selectors: [["app-producto"]],
        viewQuery: function ProductoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmProductoComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmSubcategoria = _t.first);
          }
        },
        decls: 22,
        vars: 9,
        consts: [["label", "Categor\xEDas"], [3, "categoriaGrupoSvd", "onChangeSubCategoriaEv"], ["label", "Sub-categor\xEDas"], ["frmSubcategoria", ""], ["label", "Art\xEDculos"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start start"], ["fxFlex", "100%"], ["color", "primary", "selected", "", 3, "click"], ["color", "accent", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "divSubCategorias", 4, "ngFor", "ngForOf"], ["fxFlex", "40%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxLayout", "row wrap", "fxLayoutGap", "8px grid", "fxLayoutAlign", "start start", 1, "divArticulos"], [1, "fullWidth"], ["matInput", "", "placeholder", "Buscar...", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange"], ["mat-list-item", "", "class", "accion-comanda mat-elevation-z4", 3, "click", 4, "ngFor", "ngForOf"], ["fxFlex", "60%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", 1, "divArticulos"], [3, "categoria", "subcategoria", "articulo", "articuloSvd"], ["frmProducto", ""], ["color", "accent", "selected", "", 3, "click"], [1, "divSubCategorias"], ["color", "warn", "selected", "", 3, "click", 4, "ngFor", "ngForOf"], ["color", "warn", "selected", "", 3, "click"], ["mat-list-item", "", 1, "accion-comanda", "mat-elevation-z4", 3, "click"]],
        template: function ProductoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-categoria-producto", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("categoriaGrupoSvd", function ProductoComponent_Template_app_categoria_producto_categoriaGrupoSvd_2_listener() {
              return ctx.reloadCategoriasInSubcategoriasArticulos();
            })("onChangeSubCategoriaEv", function ProductoComponent_Template_app_categoria_producto_onChangeSubCategoriaEv_2_listener($event) {
              return ctx.setArticuloCategoriaGrupo($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-sub-categoria-producto", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-chip-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-chip", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductoComponent_Template_mat_chip_click_10_listener() {
              return ctx.verTodos();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Ver todos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductoComponent_mat_chip_12_Template, 2, 1, "mat-chip", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductoComponent_mat_chip_list_13_Template, 2, 1, "mat-chip-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function ProductoComponent_Template_input_keyup_16_listener() {
              return ctx.applyFilter();
            })("ngModelChange", function ProductoComponent_Template_input_ngModelChange_16_listener($event) {
              return ctx.txtFiltro = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-action-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductoComponent_button_18_Template, 3, 4, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "app-form-producto", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("articuloSvd", function ProductoComponent_Template_app_form_producto_articuloSvd_20_listener($event) {
              return ctx.refreshArticuloList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categorias);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listasCategoriasGrupo);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.txtFiltro)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.articulos);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("categoria", ctx.categoria)("subcategoria", ctx.categoriaGrupo)("articulo", ctx.articulo);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaProductoComponent"], _sub_categoria_producto_sub_categoria_producto_component__WEBPACK_IMPORTED_MODULE_7__["SubCategoriaProductoComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_15__["FormProductoComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"]],
        pipes: [_shared_pipes_truncar_pipe__WEBPACK_IMPORTED_MODULE_16__["TruncarPipe"]],
        styles: [".divArticulos[_ngcontent-%COMP%] {\r\n    padding: 3px 8px;\r\n    overflow-y: auto;\r\n    margin: 0;\r\n    height: 85vh;\r\n}\r\n\r\n.divArticulos[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    max-height:95px;\r\n}\r\n\r\n.divSubCategorias[_ngcontent-%COMP%] {    \r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.accion-comanda[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    margin: 10px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEIiLCJmaWxlIjoicHJvZHVjdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZBcnRpY3Vsb3Mge1xyXG4gICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbn1cclxuXHJcbi5kaXZBcnRpY3Vsb3MgPiBtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0Ojk1cHg7XHJcbn1cclxuXHJcbi5kaXZTdWJDYXRlZ29yaWFzIHsgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmFjY2lvbi1jb21hbmRhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "niDi":
    /*!*************************************************!*\
      !*** ./src/app/wms/services/ingreso.service.ts ***!
      \*************************************************/

    /*! exports provided: IngresoService */

    /***/
    function niDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IngresoService", function () {
        return IngresoService;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/global */
      "sKxO");
      /* harmony import */


      var _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/error-handler */
      "R5jZ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! qs */
      "Qyje");
      /* harmony import */


      var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var IngresoService = /*#__PURE__*/function () {
        function IngresoService(http) {
          _classCallCheck(this, IngresoService);

          this.http = http;
          this.ingresoUrl = 'ingreso';
          this.documentoUrl = 'documento';
          this.srvcErrHndl = new _shared_error_handler__WEBPACK_IMPORTED_MODULE_1__["ServiceErrorHandler"]();
        }

        _createClass(IngresoService, [{
          key: "get",
          value: function get() {
            var fltr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.ingresoUrl, "/buscar_ingreso?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "save",
          value: function save(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.ingresoUrl, "/guardar").concat(+entidad.ingreso > 0 ? '/' + entidad.ingreso : ''), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getDetalle",
          value: function getDetalle(idingreso) {
            var fltr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.ingresoUrl, "/buscar_detalle/").concat(idingreso, "?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "saveDetalle",
          value: function saveDetalle(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.ingresoUrl, "/guardar_detalle/").concat(entidad.ingreso).concat(+entidad.ingreso_detalle > 0 ? '/' + entidad.ingreso_detalle : ''), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "getDocumento",
          value: function getDocumento() {
            var fltr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.documentoUrl, "/buscar?").concat(qs__WEBPACK_IMPORTED_MODULE_3__["stringify"](fltr))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "saveDocumento",
          value: function saveDocumento(entidad) {
            return this.http.post("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.documentoUrl, "/guardar").concat(+entidad.documento > 0 ? '/' + entidad.documento : ''), entidad).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }, {
          key: "enviarDocumentoAConta",
          value: function enviarDocumentoAConta(idDocumento) {
            return this.http.get("".concat(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].urlWms, "/").concat(this.documentoUrl, "/enviar/").concat(idDocumento)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].reintentos), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.srvcErrHndl.errorHandler));
          }
        }]);

        return IngresoService;
      }();

      IngresoService.ɵfac = function IngresoService_Factory(t) {
        return new (t || IngresoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      IngresoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: IngresoService,
        factory: IngresoService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "rMm0":
    /*!***************************************************************************!*\
      !*** ./src/app/wms/components/transformacion/transformacion.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TransformacionComponent */

    /***/
    function rMm0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransformacionComponent", function () {
        return TransformacionComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/transformacion.service */
      "KWN0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../egreso/form-egreso/form-egreso.component */
      "yRM+");
      /* harmony import */


      var _ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ingreso/form-ingreso/form-ingreso.component */
      "koTg");

      var _c0 = ["frmEgreso"];
      var _c1 = ["frmIngreso"];

      var TransformacionComponent = /*#__PURE__*/function () {
        function TransformacionComponent(ls, _snackBar, transformacionSrvc) {
          var _this22 = this;

          _classCallCheck(this, TransformacionComponent);

          this.ls = ls;
          this._snackBar = _snackBar;
          this.transformacionSrvc = transformacionSrvc;
          this.mermaDetalle = [];
          this.showMerma = true;
          this.bloqueoBotones = false;

          this.transformar = function () {
            _this22.bloqueoBotones = true;
            _this22.egreso = _this22.frmEgreso.egreso;
            _this22.ingreso = _this22.frmIngreso.ingreso;
            _this22.transformacion = {
              egreso: {
                tipo_movimiento: _this22.egreso.tipo_movimiento,
                fecha: _this22.egreso.fecha,
                proveedor: _this22.ingreso.proveedor,
                bodega: _this22.egreso.bodega,
                usuario: _this22.egreso.usuario,
                estatus_movimiento: _this22.egreso.estatus_movimiento,
                bodega_destino: _this22.egreso.bodega_destino,
                tipo_movimiento_destino: _this22.egreso.tipo_movimiento_destino,
                detalle: []
              },
              ingreso: {
                tipo_movimiento: _this22.ingreso.tipo_movimiento,
                fecha: _this22.ingreso.fecha,
                proveedor: _this22.ingreso.proveedor,
                bodega: _this22.ingreso.bodega,
                usuario: _this22.ingreso.usuario,
                bodega_origen: _this22.ingreso.bodega_origen,
                comentario: _this22.ingreso.comentario,
                detalle: []
              },
              merma: []
            };

            _this22.frmEgreso.detallesMerma.forEach(function (dm) {
              return _this22.transformacion.merma.push({
                articulo: dm.articulo,
                cantidad: dm.cantidad,
                precio_unitario: dm.precio_unitario,
                precio_total: dm.precio_total,
                presentacion: dm.presentacion,
                cantidad_utilizada: dm.cantidad_utilizada
              });
            });

            _this22.frmEgreso.detallesEgreso.forEach(function (de) {
              return _this22.transformacion.egreso.detalle.push({
                articulo: de.articulo,
                cantidad: de.cantidad,
                precio_unitario: de.precio_unitario,
                precio_total: de.precio_total,
                presentacion: de.presentacion
              });
            });

            _this22.frmIngreso.detallesIngreso.forEach(function (di) {
              return _this22.transformacion.ingreso.detalle.push({
                articulo: di.articulo,
                cantidad: di.cantidad,
                precio_unitario: di.precio_unitario,
                precio_total: di.precio_total,
                presentacion: di.presentacion,
                cantidad_utilizada: di.cantidad_utilizada
              });
            });

            if (!!_this22.transformacion.egreso && !!_this22.transformacion.egreso.detalle && _this22.transformacion.egreso.detalle.length > 0 && !!_this22.transformacion.ingreso && !!_this22.transformacion.ingreso.detalle && _this22.transformacion.ingreso.detalle.length > 0) {
              _this22.transformacionSrvc.transformar(_this22.transformacion).subscribe(function (res) {
                _this22.bloqueoBotones = false;

                if (res.exito) {
                  _this22.frmEgreso.resetEgreso();

                  _this22.frmEgreso.detallesEgreso = [];

                  _this22.frmEgreso.resetDetalleMerma();

                  _this22.frmEgreso.detallesMerma = [];

                  _this22.frmIngreso.resetIngreso();

                  _this22.frmIngreso.detallesIngreso = [];

                  _this22._snackBar.open('Transformación generada con éxito...', 'Transformación', {
                    duration: 5000
                  });
                } else {
                  _this22._snackBar.open("ERROR: ".concat(res.mensaje), 'Transformación', {
                    duration: 3000
                  });
                }
              });
            } else {
              _this22.bloqueoBotones = false;

              _this22._snackBar.open("Faltan datos necesario. Favor complete los datos e intente de nuevo.", 'Transformación', {
                duration: 3000
              });
            }
          };
        }

        _createClass(TransformacionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.egreso = {
              egreso: null,
              tipo_movimiento: null,
              bodega: null,
              fecha: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
              usuario: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr || 0,
              estatus_movimiento: 1,
              traslado: 0
            };
            this.ingreso = {
              ingreso: null,
              tipo_movimiento: null,
              fecha: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
              bodega: null,
              usuario: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr || 0,
              comentario: null,
              proveedor: null
            };
          }
        }, {
          key: "doSomething",
          value: function doSomething() {}
        }]);

        return TransformacionComponent;
      }();

      TransformacionComponent.ɵfac = function TransformacionComponent_Factory(t) {
        return new (t || TransformacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_transformacion_service__WEBPACK_IMPORTED_MODULE_5__["TransformacionService"]));
      };

      TransformacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TransformacionComponent,
        selectors: [["app-transformacion"]],
        viewQuery: function TransformacionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmEgreso = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmIngreso = _t.first);
          }
        },
        decls: 15,
        vars: 6,
        consts: [[1, "row"], [1, "col", "m12", "s12", 2, "padding-bottom", "5px !important"], ["align", "end"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], [2, "font-size", "18pt"], [1, "col", "m6", "s12"], [3, "egreso", "saveToDB", "egresoChange", "egresoSavedEv"], ["frmEgreso", ""], [3, "bodega", "ingreso", "saveToDB", "ingresoChange", "ingresoSavedEv"], ["frmIngreso", ""]],
        template: function TransformacionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransformacionComponent_Template_button_click_3_listener() {
              return ctx.transformar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "transform");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\xA0Transformar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "app-form-egreso", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("egresoChange", function TransformacionComponent_Template_app_form_egreso_egresoChange_9_listener($event) {
              return ctx.egreso = $event;
            })("egresoSavedEv", function TransformacionComponent_Template_app_form_egreso_egresoSavedEv_9_listener() {
              return ctx.doSomething();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-form-ingreso", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ingresoChange", function TransformacionComponent_Template_app_form_ingreso_ingresoChange_12_listener($event) {
              return ctx.ingreso = $event;
            })("ingresoSavedEv", function TransformacionComponent_Template_app_form_ingreso_ingresoSavedEv_12_listener() {
              return ctx.doSomething();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.bloqueoBotones);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("egreso", ctx.egreso)("saveToDB", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bodega", false)("ingreso", ctx.ingreso)("saveToDB", false);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_8__["FormEgresoComponent"], _ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_9__["FormIngresoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zvcm1hY2lvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "uZIN":
    /*!*********************************************************************!*\
      !*** ./src/app/wms/components/ingreso/ingreso/ingreso.component.ts ***!
      \*********************************************************************/

    /*! exports provided: IngresoComponent */

    /***/
    function uZIN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IngresoComponent", function () {
        return IngresoComponent;
      });
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lista-ingreso/lista-ingreso.component */
      "hjdA");
      /* harmony import */


      var _form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../form-ingreso/form-ingreso.component */
      "koTg");

      var _c0 = ["lstIngreso"];
      var _c1 = ["frmIngreso"];

      var IngresoComponent = /*#__PURE__*/function () {
        // public tamFila: number;
        function IngresoComponent(ls) {
          var _this23 = this;

          _classCallCheck(this, IngresoComponent);

          this.ls = ls;
          this.breakpoint = 2;

          this.onWindowResize = function (ev) {
            _this23.breakpoint = ev.target.innerWidth <= 360 ? 1 : 2; // this.tamFila = ev.target.innerHeight - 64;
            // console.log(this.tamFila);
          };

          this.setIngreso = function (ing) {
            _this23.ingreso = ing;

            _this23.frmIngreso.setProveedor(+_this23.ingreso.proveedor);

            _this23.frmIngreso.loadDetalleIngreso(+_this23.ingreso.ingreso);

            _this23.frmIngreso.resetDetalleIngreso();

            _this23.frmIngreso.loadDocumento(_this23.ingreso.ingreso);
          };

          this.refreshIngresoList = function () {
            _this23.lstIngresoComponent.loadIngresos();
          };

          this.ingreso = {
            ingreso: null,
            tipo_movimiento: null,
            fecha: moment__WEBPACK_IMPORTED_MODULE_1__().format(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].dbDateFormat),
            bodega: null,
            usuario: this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].usrTokenVar).idusr || 0,
            comentario: null,
            proveedor: null
          };
        }

        _createClass(IngresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.breakpoint = window.innerWidth <= 360 ? 1 : 2; // this.tamFila = window.innerHeight - 64;
            // console.log(this.tamFila);
          }
        }]);

        return IngresoComponent;
      }();

      IngresoComponent.ɵfac = function IngresoComponent_Factory(t) {
        return new (t || IngresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]));
      };

      IngresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: IngresoComponent,
        selectors: [["app-ingreso"]],
        viewQuery: function IngresoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lstIngresoComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.frmIngreso = _t.first);
          }
        },
        decls: 7,
        vars: 1,
        consts: [[1, "row"], [1, "col", "m5", "s12"], [3, "getIngresoEv"], ["lstIngreso", ""], [1, "col", "m7", "s12"], [3, "ingreso", "ingresoSavedEv"], ["frmIngreso", ""]],
        template: function IngresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-lista-ingreso", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getIngresoEv", function IngresoComponent_Template_app_lista_ingreso_getIngresoEv_2_listener($event) {
              return ctx.setIngreso($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-form-ingreso", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ingresoSavedEv", function IngresoComponent_Template_app_form_ingreso_ingresoSavedEv_5_listener() {
              return ctx.refreshIngresoList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ingreso", ctx.ingreso);
          }
        },
        directives: [_lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_4__["ListaIngresoComponent"], _form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_5__["FormIngresoComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7QUFDRDs7OztDQUlDO0FBQ0Q7Ozs7O0NBS0M7QUFDRDs7Ozs7Q0FLQyIsImZpbGUiOiJpbmdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuLm1hdC1ncmlkLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG4gfVxuKi9cbi8qXG4gLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gfVxuKi9cbi8qXG4gOjpuZy1kZWVwIG1kLWdyaWQtdGlsZS5tYXQtZ3JpZC10aWxlIC5tYXQtZmlndXJlIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgIFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgIFxufVxuKi9cbi8qXG5tYXQtZ3JpZC10aWxlID46Om5nLWRlZXAgLm1hdC1maWd1cmUge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4qLyJdfQ== */"]
      });
      /***/
    },

    /***/
    "vtFA":
    /*!***********************************!*\
      !*** ./src/app/wms/wms.module.ts ***!
      \***********************************/

    /*! exports provided: WmsModule */

    /***/
    function vtFA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WmsModule", function () {
        return WmsModule;
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


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");
      /* harmony import */


      var _wms_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./wms-routing.module */
      "UI5i");
      /* harmony import */


      var _components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/producto/lista-producto/lista-producto.component */
      "XnHR");
      /* harmony import */


      var _components_ingreso_lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/ingreso/lista-ingreso/lista-ingreso.component */
      "hjdA");
      /* harmony import */


      var _components_ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/ingreso/form-ingreso/form-ingreso.component */
      "koTg");
      /* harmony import */


      var _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/ingreso/ingreso/ingreso.component */
      "uZIN");
      /* harmony import */


      var _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/producto/producto/producto.component */
      "nahY");
      /* harmony import */


      var _components_producto_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/producto/form-producto/form-producto.component */
      "cKxi");
      /* harmony import */


      var _components_producto_categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/producto/categoria-producto/categoria-producto.component */
      "YYA0");
      /* harmony import */


      var _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/egreso/egreso/egreso.component */
      "EZh4");
      /* harmony import */


      var _components_egreso_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/egreso/lista-egreso/lista-egreso.component */
      "m9rJ");
      /* harmony import */


      var _components_egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/egreso/form-egreso/form-egreso.component */
      "yRM+");
      /* harmony import */


      var _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/transformacion/transformacion.component */
      "rMm0");
      /* harmony import */


      var _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/reporte/existencias/existencias.component */
      "6UxG");
      /* harmony import */


      var _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./components/reporte/kardex/kardex.component */
      "R3J8");
      /* harmony import */


      var _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/producto/lista-producto-alt/lista-producto-alt.component */
      "E6Vq");
      /* harmony import */


      var _components_produccion_produccion_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/produccion/produccion.component */
      "1XRV");
      /* harmony import */


      var _components_fisico_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./components/fisico/reporte/reporte.component */
      "BFdU");
      /* harmony import */


      var _components_reporte_valorizado_valorizado_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./components/reporte/valorizado/valorizado.component */
      "H8wP");
      /* harmony import */


      var _components_fisico_fisico_fisico_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./components/fisico/fisico/fisico.component */
      "L8mz");
      /* harmony import */


      var _components_fisico_form_inventario_fisico_form_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./components/fisico/form-inventario-fisico/form-inventario-fisico.component */
      "kp69");
      /* harmony import */


      var _components_producto_replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./components/producto/replicar-a-sedes/replicar-a-sedes.component */
      "bRC8");
      /* harmony import */


      var _components_producto_replicar_a_sedes_dialog_replicar_a_sedes_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./components/producto/replicar-a-sedes-dialog/replicar-a-sedes-dialog.component */
      "CFi0");
      /* harmony import */


      var _components_producto_sub_categoria_producto_sub_categoria_producto_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./components/producto/sub-categoria-producto/sub-categoria-producto.component */
      "QXDe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { TransformacionService } from './services/transformacion.service';


      var WmsModule = function WmsModule() {
        _classCallCheck(this, WmsModule);
      };

      WmsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({
        type: WmsModule
      });
      WmsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({
        factory: function WmsModule_Factory(t) {
          return new (t || WmsModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _wms_routing_module__WEBPACK_IMPORTED_MODULE_27__["WmsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_26__["MatKeyboardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](WmsModule, {
          declarations: [_components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__["ListaProductoComponent"], _components_ingreso_lista_ingreso_lista_ingreso_component__WEBPACK_IMPORTED_MODULE_29__["ListaIngresoComponent"], _components_ingreso_form_ingreso_form_ingreso_component__WEBPACK_IMPORTED_MODULE_30__["FormIngresoComponent"], _components_ingreso_ingreso_ingreso_component__WEBPACK_IMPORTED_MODULE_31__["IngresoComponent"], _components_producto_producto_producto_component__WEBPACK_IMPORTED_MODULE_32__["ProductoComponent"], _components_producto_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_33__["FormProductoComponent"], _components_producto_categoria_producto_categoria_producto_component__WEBPACK_IMPORTED_MODULE_34__["CategoriaProductoComponent"], _components_egreso_egreso_egreso_component__WEBPACK_IMPORTED_MODULE_35__["EgresoComponent"], _components_egreso_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_36__["ListaEgresoComponent"], _components_egreso_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_37__["FormEgresoComponent"], _components_transformacion_transformacion_component__WEBPACK_IMPORTED_MODULE_38__["TransformacionComponent"], _components_reporte_existencias_existencias_component__WEBPACK_IMPORTED_MODULE_39__["ExistenciasComponent"], _components_reporte_kardex_kardex_component__WEBPACK_IMPORTED_MODULE_40__["KardexComponent"], _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_41__["ListaProductoAltComponent"], _components_produccion_produccion_component__WEBPACK_IMPORTED_MODULE_42__["ProduccionComponent"], _components_fisico_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_43__["ReporteComponent"], _components_reporte_valorizado_valorizado_component__WEBPACK_IMPORTED_MODULE_44__["ValorizadoComponent"], _components_fisico_fisico_fisico_component__WEBPACK_IMPORTED_MODULE_45__["FisicoComponent"], _components_fisico_form_inventario_fisico_form_inventario_fisico_component__WEBPACK_IMPORTED_MODULE_46__["FormInventarioFisicoComponent"], _components_producto_replicar_a_sedes_replicar_a_sedes_component__WEBPACK_IMPORTED_MODULE_47__["ReplicarASedesComponent"], _components_producto_replicar_a_sedes_dialog_replicar_a_sedes_dialog_component__WEBPACK_IMPORTED_MODULE_48__["ReplicarASedesDialogComponent"], _components_producto_sub_categoria_producto_sub_categoria_producto_component__WEBPACK_IMPORTED_MODULE_49__["SubCategoriaProductoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _wms_routing_module__WEBPACK_IMPORTED_MODULE_27__["WmsRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_26__["MatKeyboardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"]],
          exports: [_components_producto_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_28__["ListaProductoComponent"], _components_producto_lista_producto_alt_lista_producto_alt_component__WEBPACK_IMPORTED_MODULE_41__["ListaProductoAltComponent"]]
        });
      })();
      /***/

    },

    /***/
    "yRM+":
    /*!****************************************************************************!*\
      !*** ./src/app/wms/components/egreso/form-egreso/form-egreso.component.ts ***!
      \****************************************************************************/

    /*! exports provided: FormEgresoComponent */

    /***/
    function yRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormEgresoComponent", function () {
        return FormEgresoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/global */
      "sKxO");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../admin/services/localstorage.service */
      "FY0D");
      /* harmony import */


      var _services_egreso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/egreso.service */
      "Hwog");
      /* harmony import */


      var _services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/tipo-movimiento.service */
      "3e6T");
      /* harmony import */


      var _services_bodega_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/bodega.service */
      "u5dX");
      /* harmony import */


      var _services_articulo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/articulo.service */
      "NGYs");
      /* harmony import */


      var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/proveedor.service */
      "50cD");
      /* harmony import */


      var _services_transformacion_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/transformacion.service */
      "KWN0");
      /* harmony import */


      var _admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../admin/services/presentacion.service */
      "C5NV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angular-onscreen-material-keyboard */
      "uM5D");

      function FormEgresoComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.showEgresoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.showEgresoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_2_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tm_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tm_r22.tipo_movimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tm_r22.descripcion, " ");
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo de movimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_mat_form_field_2_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.egreso.tipo_movimiento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_form_7_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.egreso.tipo_movimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.tiposMovimiento);
        }
      }

      function FormEgresoComponent_form_7_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bode_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bode_r25.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bode_r25.descripcion, " ");
        }
      }

      function FormEgresoComponent_form_7_mat_checkbox_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_mat_checkbox_10_Template_mat_checkbox_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return +(ctx_r26.egreso.traslado = $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xBFEs traslado entre bodegas de la misma sede? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", +ctx_r14.egreso.traslado);
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_11_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bodeDest_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bodeDest_r29.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bodeDest_r29.descripcion, " ");
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bodega destino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_mat_form_field_11_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r30.egreso.bodega_destino = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_form_7_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.egreso.bodega_destino)("required", +ctx_r15.egreso.traslado == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.bodegas);
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_12_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmD_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tmD_r33.tipo_movimiento);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tmD_r33.descripcion, " ");
        }
      }

      function FormEgresoComponent_form_7_mat_form_field_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tipo de movimiento destino");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_mat_form_field_12_Template_mat_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r34.egreso.tipo_movimiento_destino = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_form_7_mat_form_field_12_mat_option_4_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.egreso.tipo_movimiento_destino)("required", +ctx_r16.egreso.traslado == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.tiposMovimientoIngreso);
        }
      }

      function FormEgresoComponent_form_7_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comanda: #", ctx_r17.egreso.idcomandafox, "");
        }
      }

      var _c0 = function _c0() {
        return [2, 3];
      };

      function FormEgresoComponent_form_7_button_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r11.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r18.egreso.estatus_movimiento) >= 0 || ctx_r18.bloqueoBotones);
        }
      }

      function FormEgresoComponent_form_7_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_form_7_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.confirmarEgreso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirmar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r11.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r19.egreso.estatus_movimiento) >= 0);
        }
      }

      function FormEgresoComponent_form_7_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_form_7_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.resetEgreso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormEgresoComponent_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return _r11.form.valid && ctx_r40.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormEgresoComponent_form_7_mat_form_field_2_Template, 5, 2, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.egreso.fecha = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bodega");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_form_7_Template_mat_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.egreso.bodega = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormEgresoComponent_form_7_mat_option_9_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormEgresoComponent_form_7_mat_checkbox_10_Template, 2, 1, "mat-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormEgresoComponent_form_7_mat_form_field_11_Template, 5, 3, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormEgresoComponent_form_7_mat_form_field_12_Template, 5, 3, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormEgresoComponent_form_7_span_13_Template, 4, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormEgresoComponent_form_7_button_15_Template, 2, 2, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormEgresoComponent_form_7_button_16_Template, 2, 2, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormEgresoComponent_form_7_button_17_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.egreso.fecha);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.egreso.bodega);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.bodegas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r2.egreso.traslado == 1 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0).indexOf(+ctx_r2.egreso.estatus_movimiento) < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", +ctx_r2.egreso.traslado == 1 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0).indexOf(+ctx_r2.egreso.estatus_movimiento) < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r2.egreso.idcomandafox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.egreso.egreso && ctx_r2.detallesEgreso.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.egreso.egreso);
        }
      }

      function FormEgresoComponent_hr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormEgresoComponent_mat_card_9_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.showDetalleEgresoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.showDetalleEgresoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_form_7_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r62.descripcion, " ");
        }
      }

      function FormEgresoComponent_mat_card_9_form_7_mat_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r63.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r63.descripcion, " ");
        }
      }

      function FormEgresoComponent_mat_card_9_form_7_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r55.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r59.egreso.estatus_movimiento) >= 0 || ctx_r59.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_9_form_7_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_form_7_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r64.addToDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r60.egreso.bodega || !_r55.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r60.egreso.estatus_movimiento) >= 0);
        }
      }

      function FormEgresoComponent_mat_card_9_form_7_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_form_7_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r66.resetDetalleEgreso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nuevo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      function FormEgresoComponent_mat_card_9_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormEgresoComponent_mat_card_9_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return _r55.form.valid && ctx_r68.onSubmitDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_9_form_7_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r70.txtArticuloSelected = $event;
          })("keyup", function FormEgresoComponent_mat_card_9_form_7_Template_input_keyup_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r71.filtrarArticulos(ctx_r71.txtArticuloSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function FormEgresoComponent_mat_card_9_form_7_Template_mat_autocomplete_optionSelected_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r72.setPresentaciones();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_9_form_7_mat_option_8_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_9_form_7_Template_mat_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.detalleEgreso.presentacion = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormEgresoComponent_mat_card_9_form_7_mat_option_13_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_9_form_7_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r74.detalleEgreso.cantidad = $event;
          })("change", function FormEgresoComponent_mat_card_9_form_7_Template_input_change_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.detalleEgreso.precio_total = +ctx_r75.detalleEgreso.precio_unitario * +ctx_r75.detalleEgreso.cantidad;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormEgresoComponent_mat_card_9_form_7_button_17_Template, 2, 2, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormEgresoComponent_mat_card_9_form_7_button_18_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormEgresoComponent_mat_card_9_form_7_button_19_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.txtArticuloSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("matAutocomplete", _r56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r46.displayArticulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.filteredArticulos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.detalleEgreso.presentacion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.fltrPresentaciones);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.detalleEgreso.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r46.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.detalleEgreso.egreso_detalle);
        }
      }

      function FormEgresoComponent_mat_card_9_hr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormEgresoComponent_mat_card_9_input_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormEgresoComponent_mat_card_9_input_10_Template_input_input_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r76.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matKeyboard", ctx_r48.keyboardLayout);
        }
      }

      function FormEgresoComponent_mat_card_9_input_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FormEgresoComponent_mat_card_9_input_11_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r78.applyFilter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r94 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r81.saveToDB ? element_r94.articulo.descripcion : ctx_r81.getDescripcionArticulo(element_r94.articulo), "");
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r95 = ctx.$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r83.saveToDB ? element_r95.presentacion.descripcion : ctx_r83.getDescripcionPresentacion(element_r95.presentacion), " ");
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r96 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r96.cantidad, "1.2-2"));
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo Unitario");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r97 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r97.precio_unitario, "1.2-2"), " ");
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Costo Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r98 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r98.precio_total, "1.2-2"));
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_18_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_table_12_td_18_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

            var element_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r103.getDetalleEgreso(element_r99.egreso, element_r99.egreso_detalle);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r100.egreso.estatus_movimiento) >= 0 || ctx_r100.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_18_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_table_12_td_18_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);

            var element_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r106.editFromDetail(element_r99.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r101.egreso.estatus_movimiento) >= 0 || ctx_r101.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_18_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_9_table_12_td_18_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var element_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r109.removeFromDetail(element_r99.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r102.egreso.estatus_movimiento) >= 0 || ctx_r102.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormEgresoComponent_mat_card_9_table_12_td_18_button_1_Template, 2, 2, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormEgresoComponent_mat_card_9_table_12_td_18_button_2_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormEgresoComponent_mat_card_9_table_12_td_18_button_3_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r91.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r91.saveToDB);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
        }
      }

      function FormEgresoComponent_mat_card_9_table_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormEgresoComponent_mat_card_9_table_12_th_2_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormEgresoComponent_mat_card_9_table_12_td_3_Template, 2, 1, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormEgresoComponent_mat_card_9_table_12_th_5_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormEgresoComponent_mat_card_9_table_12_td_6_Template, 2, 1, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_9_table_12_th_8_Template, 2, 0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormEgresoComponent_mat_card_9_table_12_td_9_Template, 3, 4, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormEgresoComponent_mat_card_9_table_12_th_11_Template, 2, 0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormEgresoComponent_mat_card_9_table_12_td_12_Template, 3, 4, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormEgresoComponent_mat_card_9_table_12_th_14_Template, 2, 0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormEgresoComponent_mat_card_9_table_12_td_15_Template, 3, 4, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormEgresoComponent_mat_card_9_table_12_th_17_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormEgresoComponent_mat_card_9_table_12_td_18_Template, 4, 3, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormEgresoComponent_mat_card_9_table_12_tr_19_Template, 1, 0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormEgresoComponent_mat_card_9_table_12_tr_20_Template, 1, 0, "tr", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r50.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r50.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r50.displayedColumns);
        }
      }

      function FormEgresoComponent_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_mat_card_9_button_4_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormEgresoComponent_mat_card_9_button_5_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormEgresoComponent_mat_card_9_form_7_Template, 20, 12, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_9_hr_8_Template, 1, 0, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormEgresoComponent_mat_card_9_input_10_Template, 1, 1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormEgresoComponent_mat_card_9_input_11_Template, 1, 0, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormEgresoComponent_mat_card_9_table_12_Template, 21, 3, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Detalle del egreso ", ctx_r4.saveToDB ? "No." : "", " ", ctx_r4.egreso.egreso, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesEgreso.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.esMovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detallesEgreso.length > 0);
        }
      }

      function FormEgresoComponent_hr_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormEgresoComponent_mat_card_11_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r118.showDetalleEgresoForm = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r120.showDetalleEgresoForm = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "expand_less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_form_7_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r126 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r126.descripcion, " ");
        }
      }

      function FormEgresoComponent_mat_card_11_form_7_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_form_7_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

            var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r127.addToDetailMerma();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r125.detalleMerma.articulo || !_r122.form.valid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r125.egreso.estatus_movimiento) >= 0);
        }
      }

      function FormEgresoComponent_mat_card_11_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormEgresoComponent_mat_card_11_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return _r122.form.valid && ctx_r129.onSubmitDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_11_form_7_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r131.txtArticuloSelectedM = $event;
          })("keyup", function FormEgresoComponent_mat_card_11_form_7_Template_input_keyup_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r132.filtrarArticulos(ctx_r132.txtArticuloSelectedM);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function FormEgresoComponent_mat_card_11_form_7_Template_mat_autocomplete_optionSelected_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r133.setPresentacionesMerma();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_11_form_7_mat_option_8_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_11_form_7_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r134.detalleMerma.cantidad_utilizada = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormEgresoComponent_mat_card_11_form_7_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r135.detalleMerma.cantidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormEgresoComponent_mat_card_11_form_7_button_14_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r115.txtArticuloSelectedM)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("matAutocomplete", _r123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r115.displayArticuloMerma);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r115.filteredArticulos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r115.detalleMerma.cantidad_utilizada);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r115.detalleMerma.cantidad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r115.saveToDB);
        }
      }

      function FormEgresoComponent_mat_card_11_hr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Art\xEDculo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r148 = ctx.$implicit;

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r137.saveToDB ? element_r148.articulo.descripcion : ctx_r137.getDescripcionArticulo(element_r148.articulo), "");
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r149 = ctx.$implicit;

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r139.saveToDB ? element_r149.presentacion.descripcion : ctx_r139.getDescripcionPresentacion(element_r149.presentacion), " ");
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad a Utilizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r150 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r150.cantidad_utilizada, "1.2-2"));
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r151 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r151.cantidad, "1.2-2"));
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_15_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_table_9_td_15_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r158);

            var element_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r156.getDetalleEgreso(element_r152.egreso, element_r152.egreso_detalle);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r153.egreso.estatus_movimiento) >= 0 || ctx_r153.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_15_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_table_9_td_15_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r161);

            var element_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r159.editFromDetailMerma(element_r152.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r154.egreso.estatus_movimiento) >= 0 || ctx_r154.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_15_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormEgresoComponent_mat_card_11_table_9_td_15_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164);

            var element_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r162.removeFromDetailMerma(element_r152.articulo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).indexOf(+ctx_r155.egreso.estatus_movimiento) >= 0 || ctx_r155.bloqueoBotones);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormEgresoComponent_mat_card_11_table_9_td_15_button_1_Template, 2, 2, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormEgresoComponent_mat_card_11_table_9_td_15_button_2_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormEgresoComponent_mat_card_11_table_9_td_15_button_3_Template, 2, 2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r145.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r145.saveToDB);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r145.saveToDB);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 58);
        }
      }

      function FormEgresoComponent_mat_card_11_table_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormEgresoComponent_mat_card_11_table_9_th_2_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormEgresoComponent_mat_card_11_table_9_td_3_Template, 2, 1, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormEgresoComponent_mat_card_11_table_9_th_5_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormEgresoComponent_mat_card_11_table_9_td_6_Template, 2, 1, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_11_table_9_th_8_Template, 2, 0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormEgresoComponent_mat_card_11_table_9_td_9_Template, 3, 4, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormEgresoComponent_mat_card_11_table_9_th_11_Template, 2, 0, "th", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormEgresoComponent_mat_card_11_table_9_td_12_Template, 3, 4, "td", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormEgresoComponent_mat_card_11_table_9_th_14_Template, 2, 0, "th", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormEgresoComponent_mat_card_11_table_9_td_15_Template, 4, 3, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormEgresoComponent_mat_card_11_table_9_tr_16_Template, 1, 0, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormEgresoComponent_mat_card_11_table_9_tr_17_Template, 1, 0, "tr", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r117.dataSourceM);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r117.displayedColumnsM);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r117.displayedColumnsM);
        }
      }

      function FormEgresoComponent_mat_card_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_mat_card_11_button_4_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormEgresoComponent_mat_card_11_button_5_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormEgresoComponent_mat_card_11_form_7_Template, 15, 9, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_mat_card_11_hr_8_Template, 1, 0, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormEgresoComponent_mat_card_11_table_9_Template, 18, 3, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Merma ", ctx_r6.saveToDB ? "No." : "", " ", ctx_r6.egreso.egreso, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.showDetalleEgresoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detallesMerma.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.detallesMerma.length > 0);
        }
      } // import { PageEvent } from '@angular/material/paginator';
      // import { PaginarArray, MultiFiltro } from '../../../../shared/global';


      var FormEgresoComponent = /*#__PURE__*/function () {
        function FormEgresoComponent(snackBar, ls, egresoSrvc, tipoMovimientoSrvc, bodegaSrvc, articuloSrvc, proveedorSrvc, transformacionSrvc, presentacionSrvc) {
          var _this24 = this;

          _classCallCheck(this, FormEgresoComponent);

          this.snackBar = snackBar;
          this.ls = ls;
          this.egresoSrvc = egresoSrvc;
          this.tipoMovimientoSrvc = tipoMovimientoSrvc;
          this.bodegaSrvc = bodegaSrvc;
          this.articuloSrvc = articuloSrvc;
          this.proveedorSrvc = proveedorSrvc;
          this.transformacionSrvc = transformacionSrvc;
          this.presentacionSrvc = presentacionSrvc;
          this.saveToDB = true;
          this.egresoSavedEv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showEgresoForm = true;
          this.showDetalleEgresoForm = true;
          this.detallesEgreso = [];
          this.detallesMerma = [];
          this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'precio_unitario', 'precio_total', 'editItem'];
          this.displayedColumnsM = ['cantidad_utilizada', 'articulo', 'presentacion', 'cantidad', 'editItem'];
          this.tiposMovimiento = [];
          this.tiposMovimientoIngreso = [];
          this.bodegas = [];
          this.articulos = [];
          this.filteredArticulos = [];
          this.proveedores = [];
          this.filteredProveedores = [];
          this.presentaciones = [];
          this.fltrPresentaciones = [];
          this.fltrPresentacionesMerma = [];
          this.keyboardLayout = _shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].IDIOMA_TECLADO;
          this.esMovil = false;
          this.bloqueoBotones = false;
          this.txtArticuloSelected = undefined;
          this.txtArticuloSelectedM = undefined;
          this.txtProveedorSelected = undefined;

          this.loadTiposMovimiento = function () {
            var paraEgreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var fltr = paraEgreso ? {
              egreso: 1
            } : {
              ingreso: 1
            };

            _this24.tipoMovimientoSrvc.get(fltr).subscribe(function (res) {
              if (res) {
                if (paraEgreso) {
                  _this24.tiposMovimiento = res;
                } else {
                  _this24.tiposMovimientoIngreso = res;
                }
              }
            });
          };

          this.loadBodegas = function () {
            _this24.bodegaSrvc.get({
              sede: _this24.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).sede || 0
            }).subscribe(function (res) {
              if (res) {
                _this24.bodegas = res;
              }
            });
          };

          this.loadProveedores = function () {
            _this24.proveedorSrvc.get().subscribe(function (res) {
              if (res) {
                _this24.proveedores = res;
              }
            });
          };

          this.loadPresentaciones = function () {
            _this24.presentacionSrvc.get().subscribe(function (res) {
              if (res) {
                _this24.presentaciones = res;
              }
            });
          };

          this.resetEgreso = function () {
            _this24.egreso = {
              egreso: null,
              tipo_movimiento: null,
              bodega: null,
              fecha: moment__WEBPACK_IMPORTED_MODULE_3__().format(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].dbDateFormat),
              usuario: _this24.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).idusr || 0,
              estatus_movimiento: 1,
              traslado: 0
            };

            _this24.resetDetalleEgreso();

            _this24.updateTableDataSource();

            _this24.resetDetalleMerma();

            _this24.updateTableDataSourceM();
          };

          this.onSubmit = function () {
            _this24.bloqueoBotones = true;

            _this24.egresoSrvc.save(_this24.egreso).subscribe(function (res) {
              if (res.exito) {
                _this24.egresoSavedEv.emit();

                _this24.resetEgreso();

                _this24.egreso = {
                  egreso: res.egreso.egreso,
                  tipo_movimiento: res.egreso.tipo_movimiento,
                  fecha: res.egreso.fecha,
                  bodega: res.egreso.bodega,
                  creacion: res.egreso.creacion,
                  usuario: res.egreso.usuario,
                  estatus_movimiento: res.egreso.estatus_movimiento,
                  traslado: res.egreso.traslado
                };

                _this24.loadDetalleEgreso(_this24.egreso.egreso);
              }

              _this24.bloqueoBotones = false;
            });
          };

          this.confirmarEgreso = function () {
            _this24.egreso.estatus_movimiento = 2;

            _this24.onSubmit();
          };

          this.loadArticulos = function () {
            _this24.articuloSrvc.getArticulosIngreso().subscribe(function (res) {
              if (res) {
                _this24.articulos = res;
              }
            });
          };

          this.resetDetalleEgreso = function () {
            _this24.detalleEgreso = {
              egreso_detalle: null,
              egreso: !!_this24.egreso.egreso ? _this24.egreso.egreso : null,
              articulo: null,
              cantidad: null,
              precio_unitario: null,
              precio_total: null,
              presentacion: 0
            };
            _this24.txtArticuloSelected = undefined;
          };

          this.resetDetalleMerma = function () {
            _this24.detalleMerma = {
              egreso_detalle: null,
              egreso: !!_this24.egreso.egreso ? _this24.egreso.egreso : null,
              articulo: null,
              cantidad: null,
              precio_unitario: null,
              precio_total: null,
              presentacion: 0
            };
            _this24.txtArticuloSelectedM = undefined;
          };

          this.loadDetalleEgreso = function () {
            var idegreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this24.egreso.egreso;

            _this24.egresoSrvc.getDetalle(idegreso, {
              egreso: idegreso
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this24.detallesEgreso = res;

                _this24.updateTableDataSource();
              }
            });
          };

          this.getDetalleEgreso = function () {
            var idegreso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +_this24.egreso.egreso;
            var iddetalle = arguments.length > 1 ? arguments[1] : undefined;

            _this24.egresoSrvc.getDetalle(idegreso, {
              egreso_detalle: iddetalle
            }).subscribe(function (res) {
              // console.log(res);
              if (res) {
                _this24.detalleEgreso = {
                  egreso_detalle: res[0].egreso_detalle,
                  egreso: res[0].egreso,
                  articulo: res[0].articulo.articulo,
                  cantidad: +res[0].cantidad,
                  precio_unitario: +res[0].precio_unitario,
                  precio_total: +res[0].precio_total,
                  presentacion: res[0].presentacion.presentacion
                };

                _this24.setPresentaciones();

                if (!_this24.saveToDB) {
                  _this24.setPresentacionesMerma();
                }

                _this24.txtArticuloSelected = res[0].articulo;
                _this24.showDetalleEgresoForm = true;
              }
            });
          };

          this.onSubmitDetail = function () {
            _this24.bloqueoBotones = true;
            _this24.detalleEgreso.egreso = _this24.egreso.egreso; // console.log(this.detalleEgreso);

            _this24.egresoSrvc.saveDetalle(_this24.detalleEgreso).subscribe(function (res) {
              // console.log(res);
              if (res.exito) {
                _this24.loadDetalleEgreso();

                _this24.resetDetalleEgreso();

                _this24.snackBar.open('Egreso guardado con éxito...', 'Egreso', {
                  duration: 3000
                });
              } else {
                _this24.snackBar.open("ERROR: ".concat(res.mensaje), 'Egreso', {
                  duration: 3000
                });
              }

              _this24.bloqueoBotones = false;
            });
          };

          this.addToDetail = function () {
            if (_this24.detalleEgreso.cantidad > 0) {
              _this24.detallesEgreso.splice(_this24.detallesEgreso.findIndex(function (de) {
                return +de.articulo === +_this24.detalleEgreso.articulo;
              }), 1);

              _this24.detallesEgreso.push(_this24.detalleEgreso);

              _this24.resetDetalleEgreso();

              _this24.updateTableDataSource();
            } else {
              _this24.snackBar.open("ERROR: La cantidad debe ser mayor a 0", 'Egreso', {
                duration: 3000
              });
            }
          };

          this.addToDetailMerma = function () {
            if (_this24.detalleMerma.cantidad > 0 && _this24.detalleMerma.cantidad_utilizada > 0) {
              var index = _this24.detallesMerma.findIndex(function (de) {
                return +de.articulo === +_this24.detalleMerma.articulo;
              });

              if (index > -1) {
                _this24.detallesMerma.splice(index, 1);
              }

              var art;
              art = _this24.articulos.filter(function (p) {
                return +p.articulo == _this24.detalleMerma.articulo;
              });
              _this24.detalleMerma.presentacion = art[0].presentacion_reporte;

              _this24.detallesMerma.push(_this24.detalleMerma);

              _this24.txtArticuloSelectedM = undefined;

              _this24.resetDetalleMerma();

              _this24.updateTableDataSourceM();
            } else if (_this24.detalleMerma.cantidad <= 0) {
              _this24.snackBar.open("ERROR: La cantidad debe ser mayor a 0", 'Egreso', {
                duration: 3000
              });
            } else if (_this24.detalleMerma.cantidad_utilizada <= 0) {
              _this24.snackBar.open("ERROR: La cantidad a utilizar debe ser mayor a 0", 'Egreso', {
                duration: 3000
              });
            }
          };

          this.editFromDetail = function (idarticulo) {
            var tmp = _this24.detallesEgreso.filter(function (de) {
              return +de.articulo === +idarticulo;
            })[0];

            _this24.detalleEgreso = {
              egreso_detalle: tmp.egreso_detalle,
              egreso: tmp.egreso_detalle,
              articulo: tmp.articulo,
              cantidad: tmp.cantidad,
              precio_unitario: tmp.precio_unitario,
              precio_total: tmp.precio_unitario,
              presentacion: tmp.presentacion
            };

            _this24.setPresentaciones(true);

            _this24.txtArticuloSelected = _this24.articulos.filter(function (p) {
              return +p.articulo == _this24.detalleEgreso.articulo;
            })[0]; //this.showDetalleIngresoForm = true;
            //
          };

          this.editFromDetailMerma = function (idarticulo) {
            var tmp = _this24.detallesMerma.filter(function (de) {
              return +de.articulo === +idarticulo;
            })[0];

            _this24.detalleMerma = {
              egreso_detalle: tmp.egreso_detalle,
              egreso: tmp.egreso_detalle,
              articulo: tmp.articulo,
              cantidad: tmp.cantidad,
              precio_unitario: tmp.precio_unitario,
              precio_total: tmp.precio_unitario,
              presentacion: tmp.presentacion,
              cantidad_utilizada: tmp.cantidad_utilizada
            };

            _this24.setPresentacionesMerma();

            _this24.txtArticuloSelectedM = _this24.articulos.filter(function (p) {
              return +p.articulo == _this24.detalleMerma.articulo;
            })[0]; //this.showDetalleIngresoForm = true;
            //
          };

          this.removeFromDetailMerma = function (idarticulo) {
            return _this24.detallesMerma.splice(_this24.detallesMerma.findIndex(function (de) {
              return +de.articulo === +idarticulo;
            }), 1);
          };

          this.removeFromDetail = function (idarticulo) {
            return _this24.detallesEgreso.splice(_this24.detallesEgreso.findIndex(function (de) {
              return +de.articulo === +idarticulo;
            }), 1);
          };

          this.getDescripcionArticulo = function (idarticulo) {
            return _this24.articulos.find(function (art) {
              return +art.articulo === +idarticulo;
            }).descripcion || '';
          };

          this.getDescripcionPresentacion = function (idpresentacion) {
            return _this24.presentaciones.find(function (p) {
              return +p.presentacion === +idpresentacion;
            }).descripcion || '';
          };

          this.updateTableDataSource = function () {
            _this24.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this24.detallesEgreso);

            _this24.dataSource.filterPredicate = function (data, filter) {
              return data.articulo.descripcion.toLowerCase().includes(filter);
            };
          };

          this.updateTableDataSourceM = function () {
            _this24.dataSourceM = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this24.detallesMerma);
          };

          this.filtrarArticulos = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this24.filteredArticulos = _this24.articulos.filter(function (a) {
                return a.descripcion.toLowerCase().includes(filterValue);
              });
            } else {
              _this24.filteredArticulos = _this24.articulos;
            }
          };

          this.setPresentaciones = function () {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            _this24.fltrPresentaciones = [];

            var idx = _this24.articulos.findIndex(function (p) {
              return +p.articulo === +_this24.detalleEgreso.articulo;
            });

            var articulo = _this24.articulos[idx];
            _this24.fltrPresentaciones = _this24.presentaciones.filter(function (p) {
              return +p.medida.medida === +articulo.presentacion.medida;
            });

            if (!update) {
              _this24.detalleEgreso.presentacion = null;
            }
          };

          this.setPresentacionesMerma = function () {
            _this24.fltrPresentacionesMerma = [];

            var idx = _this24.articulos.findIndex(function (p) {
              return +p.articulo === +_this24.detalleMerma.articulo;
            });

            var articulo = _this24.articulos[idx];
            _this24.fltrPresentacionesMerma = _this24.presentaciones.filter(function (p) {
              return +p.medida.medida === +articulo.presentacion.medida;
            });
          };

          this.displayArticulo = function (art) {
            if (art) {
              _this24.detalleEgreso.articulo = art.articulo;
              return art.descripcion;
            }

            return undefined;
          };

          this.displayArticuloMerma = function (art) {
            if (art) {
              _this24.detalleMerma.articulo = art.articulo;
              return art.descripcion;
            }

            return undefined;
          };

          this.filtrarProveedores = function (value) {
            if (value && typeof value === 'string') {
              var filterValue = value.toLowerCase();
              _this24.filteredProveedores = _this24.proveedores.filter(function (a) {
                return a.razon_social.toLowerCase().includes(filterValue) || a.nit.toLowerCase().includes(filterValue);
              });
            } else {
              _this24.filteredProveedores = _this24.proveedores;
            }
          };

          this.displayProveedor = function (p) {
            if (p) {
              _this24.egreso.proveedor = p.proveedor;
              return "(".concat(p.nit, ") ").concat(p.razon_social);
            }

            return undefined;
          };

          this.applyFilter = function (filter) {
            _this24.dataSource.filter = filter;
          };
        }

        _createClass(FormEgresoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.esMovil = this.ls.get(_shared_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].usrTokenVar).enmovil || false;
            this.resetEgreso();
            this.loadTiposMovimiento();
            this.loadTiposMovimiento(false);
            this.loadBodegas();
            this.loadArticulos();
            this.loadProveedores();
            this.loadPresentaciones();

            if (!this.saveToDB) {
              this.displayedColumns = ['articulo', 'presentacion', 'cantidad', 'editItem'];
            }
          }
        }]);

        return FormEgresoComponent;
      }();

      FormEgresoComponent.ɵfac = function FormEgresoComponent_Factory(t) {
        return new (t || FormEgresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_egreso_service__WEBPACK_IMPORTED_MODULE_6__["EgresoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tipo_movimiento_service__WEBPACK_IMPORTED_MODULE_7__["TipoMovimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bodega_service__WEBPACK_IMPORTED_MODULE_8__["BodegaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_articulo_service__WEBPACK_IMPORTED_MODULE_9__["ArticuloService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_proveedor_service__WEBPACK_IMPORTED_MODULE_10__["ProveedorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transformacion_service__WEBPACK_IMPORTED_MODULE_11__["TransformacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_services_presentacion_service__WEBPACK_IMPORTED_MODULE_12__["PresentacionService"]));
      };

      FormEgresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormEgresoComponent,
        selectors: [["app-form-egreso"]],
        inputs: {
          egreso: "egreso",
          saveToDB: "saveToDB"
        },
        outputs: {
          egresoSavedEv: "egresoSavedEv"
        },
        decls: 12,
        vars: 8,
        consts: [[1, "mat-elevation-z4", "fullWidth"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "mat-elevation-z4 fullWidth", 4, "ngIf"], ["mat-icon-button", "", "type", "button", "color", "accent", 3, "click"], [1, "iconFontSize"], ["novalidate", "", 3, "ngSubmit"], ["frmEgreso", "ngForm"], ["class", "fullWidth", 4, "ngIf"], [1, "fullWidth"], ["matInput", "", "type", "date", "placeholder", "Fecha", "name", "fecha", "required", "", 3, "ngModel", "ngModelChange"], ["name", "bodega", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "traslado", "class", "fullWidth", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "type", "submit", "color", "accent", "class", "btnAccion", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", "class", "btnAccion", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["name", "tipo_movimiento", "required", "", 3, "ngModel", "ngModelChange"], [3, "value"], ["name", "traslado", 1, "fullWidth", 3, "ngModel", "ngModelChange"], ["name", "bodega_destino", 3, "ngModel", "required", "ngModelChange"], ["name", "tipo_movimiento_destino", 3, "ngModel", "required", "ngModelChange"], ["mat-raised-button", "", "type", "submit", "color", "accent", 1, "btnAccion", 3, "disabled"], ["mat-raised-button", "", "type", "button", "color", "accent", 1, "btnAccion", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["matInput", "", "placeholder", "Buscar", 3, "matKeyboard", "input", 4, "ngIf"], ["matInput", "", "placeholder", "Buscar", 3, "keyup", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z4 full-width", 3, "dataSource", 4, "ngIf"], ["frmDetalleEgreso", "ngForm"], ["type", "text", "placeholder", "Art\xEDculo", "matInput", "", "required", "", 3, "ngModel", "ngModelOptions", "matAutocomplete", "ngModelChange", "keyup"], [3, "displayWith", "optionSelected"], ["autoArticulos", "matAutocomplete"], ["name", "presentacion", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Cantidad", "name", "cantidad", "type", "number", "step", "0.01", "required", "", 3, "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["matInput", "", "placeholder", "Buscar", 3, "matKeyboard", "input"], ["matInput", "", "placeholder", "Buscar", 3, "keyup"], ["mat-table", "", 1, "mat-elevation-z4", "full-width", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-wrap", 4, "matCellDef"], ["matColumnDef", "presentacion"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "class", "text-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-right", 4, "matCellDef"], ["matColumnDef", "precio_unitario"], ["matColumnDef", "precio_total"], ["matColumnDef", "editItem"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "text-wrap"], ["mat-header-cell", "", 1, "text-right"], ["mat-cell", "", 1, "text-right"], ["mat-header-row", ""], ["mat-row", ""], ["frmMerma", "ngForm"], ["type", "number", "step", "0.01", "matInput", "", "placeholder", "Cantidad a Utilizar", "name", "cantidad_utilizar", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Cantidad", "name", "cantidad", "type", "number", "step", "0.01", "required", "", 3, "ngModel", "ngModelChange"], ["matColumnDef", "cantidad_utilizada"]],
        template: function FormEgresoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormEgresoComponent_button_4_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormEgresoComponent_button_5_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormEgresoComponent_form_7_Template, 18, 13, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormEgresoComponent_hr_8_Template, 1, 0, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormEgresoComponent_mat_card_9_Template, 13, 9, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormEgresoComponent_hr_10_Template, 1, 0, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormEgresoComponent_mat_card_11_Template, 10, 7, "mat-card", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Egreso", !!ctx.egreso.egreso ? " No. " + ctx.egreso.egreso : "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showEgresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEgresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEgresoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.egreso.egreso || !ctx.saveToDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.egreso.egreso || !ctx.saveToDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.egreso.egreso || !ctx.saveToDB);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.saveToDB);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NumberValueAccessor"], angular_onscreen_material_keyboard__WEBPACK_IMPORTED_MODULE_24__["MatKeyboardDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.iconFontSize[_ngcontent-%COMP%] {\n    font-size: 24pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tZWdyZXNvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZvcm0tZWdyZXNvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uRm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~restaurante-restaurante-module~wms-wms-module-es5.js.map