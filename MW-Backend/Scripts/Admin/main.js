(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/admin-guard.guard */ "./src/app/guards/admin-guard.guard.ts");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/product/product-form/product-form.component.ts");
/* harmony import */ var _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/orders/orders.component */ "./src/app/order/orders/orders.component.ts");








var routes = [
    { path: 'admin', component: _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/add-product', component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/orders', component: _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: 'error', component: _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_5__["UnexpectedErrorComponent"] },
    { path: '', component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"tryeuiytjfg\">\n  <app-header></app-header>\n  <div class=\"divallcontent\">\n    <router-outlet></router-outlet>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MW-Admin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/auth-interceptor */ "./src/app/common/auth-interceptor.ts");
/* harmony import */ var _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product-history/product-history.component */ "./src/app/product/product-history/product-history.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/product/product-form/product-form.component.ts");
/* harmony import */ var _services_admin_product_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/admin-product.service */ "./src/app/services/admin-product.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/orders/orders.component */ "./src/app/order/orders/orders.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_15__["ProductFormComponent"],
                _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_14__["ProductHistoryComponent"],
                _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_12__["UnexpectedErrorComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_admin_product_service__WEBPACK_IMPORTED_MODULE_16__["AdminProductService"],
                // { provide: ErrorHandler, useClass: AppErrorHandler },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/auth-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/common/auth-interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (req.headers.get('NoAuth') === 'true')
            return next.handle(req.clone());
        var token = localStorage.getItem('MW-AccessToken');
        if (token != null) {
            var clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(clonedreq);
        }
        else {
            this.router.navigate(['sign-in']);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/common/errors/app-error.ts":
/*!********************************************!*\
  !*** ./src/app/common/errors/app-error.ts ***!
  \********************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/errors/http-errors.ts":
/*!**********************************************!*\
  !*** ./src/app/common/errors/http-errors.ts ***!
  \**********************************************/
/*! exports provided: NotFound, BadInput, UnAuthorized, InternalError, handleExpectedErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return NotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthorized", function() { return UnAuthorized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalError", function() { return InternalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleExpectedErrors", function() { return handleExpectedErrors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/common/errors/app-error.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NotFound = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFound;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));

var BadInput = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));

var UnAuthorized = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UnAuthorized, _super);
    function UnAuthorized() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnAuthorized;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));

var InternalError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InternalError, _super);
    function InternalError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalError;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));

function handleExpectedErrors(err) {
    if (err.status === 400) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new BadInput(err));
    }
    if (err.status === 404) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new NotFound(err));
    }
}


/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.css":
/*!***************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" text-center\" style=\"margin-top: 50px\">\n  <h1>404</h1>\n  <h6>The Page You're Looking For Is Not Found Or Has Removed !</h6>\n</div>\n"

/***/ }),

/***/ "./src/app/error-pages/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/error-pages/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/error-pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/error-pages/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/error-pages/unexpected-error/unexpected-error.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/error-pages/unexpected-error/unexpected-error.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL3VuZXhwZWN0ZWQtZXJyb3IvdW5leHBlY3RlZC1lcnJvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-pages/unexpected-error/unexpected-error.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/error-pages/unexpected-error/unexpected-error.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" text-center\" style=\"margin-top: 50px\">\n  <h1>Something Went Wrong</h1>\n  <h6>The Page You're Looking For Is Not Found Or Has Removed !</h6>\n  <a routerLink=\"/\">Go Home ..</a>\n</div>\n"

/***/ }),

/***/ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/error-pages/unexpected-error/unexpected-error.component.ts ***!
  \****************************************************************************/
/*! exports provided: UnexpectedErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedErrorComponent", function() { return UnexpectedErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnexpectedErrorComponent = /** @class */ (function () {
    function UnexpectedErrorComponent() {
    }
    UnexpectedErrorComponent.prototype.ngOnInit = function () {
    };
    UnexpectedErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unexpected-error',
            template: __webpack_require__(/*! ./unexpected-error.component.html */ "./src/app/error-pages/unexpected-error/unexpected-error.component.html"),
            styles: [__webpack_require__(/*! ./unexpected-error.component.css */ "./src/app/error-pages/unexpected-error/unexpected-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnexpectedErrorComponent);
    return UnexpectedErrorComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin-guard.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/admin-guard.guard.ts ***!
  \*********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminGuard = /** @class */ (function () {
    function AdminGuard() {
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divhearder\">\n  <div class=\"fdgsvbn\">\n    <div class=\"uoifdgcxw\">\n      <div class=\"dfsgbvcwww\">\n        <div class=\"erytltfry\">\n          <label class=\"qzlerfgqs\">Messages</label>\n        </div>\n        <div class=\"ytretere\">\n          <div class=\"notif-new-user\">\n            <label class=\"ouyizerzd\"></label>\n            <div class=\"div-new-mess\">\n              <svg class=\"svgrgygj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                <path\n                  d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhihfd\">Med Zouine</label>\n              <label class=\"rtetiyuyu\">Also be sure to check them into the repo</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"eryttfry\">\n          <label class=\"qzerfgqs\">View All</label>\n        </div>\n      </div> <span class=\"rtuyytyuj\"></span>\n      <svg class=\"rettrye\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n        x=\"0px\" y=\"0px\" viewBox=\"0 0 202.762 202.762\" style=\"enable-background:new 0 0 202.762 202.762;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M202.762,88.059c0,43.127-41.492,78.445-94.07,81.464c-31.105,20.895-77.609,26.858-77.609,26.858  s11.534-16.523,15.096-39.811C18.382,142.005,0,116.762,0,88.059C0,42.948,45.388,6.381,101.381,6.381  C157.372,6.381,202.762,42.948,202.762,88.059z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"yutbvnc\">\n      <div class=\"dfsgbvcwww\">\n        <div class=\"erytltfry\">\n          <label class=\"qzlerfgqs\">Nofications</label>\n        </div>\n        <div class=\"ytretere\">\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-user\">\n              <svg class=\"svg-notif-new-user\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M186.685,0c-53.474,0-96.978,43.505-96.978,96.979c0,53.476,43.505,96.981,96.978,96.981    c53.475,0,96.98-43.506,96.98-96.981C283.665,43.505,240.16,0,186.685,0z\">\n                </path>\n                <path\n                  d=\"M352.4,192.799c-57.585,0-108.141,30.658-136.214,76.506c-9.722-1.543-19.601-2.333-29.501-2.333    C83.747,266.972,0,350.719,0,453.657c0,8.284,6.716,15,15,15h228.177C271.75,495.516,310.185,512,352.4,512    c88.003,0,159.6-71.596,159.6-159.6S440.403,192.799,352.4,192.799z M352.4,481.998c-71.462,0-129.601-58.138-129.601-129.6    c0-71.461,58.139-129.6,129.601-129.6S482,280.938,482,352.399C482,423.862,423.862,481.998,352.4,481.998z\">\n                </path>\n                <path\n                  d=\"M400.6,337.399h-33.2v-33.2c0-8.284-6.716-15-15-15s-15,6.716-15,15v33.2h-33.2c-8.284,0-15,6.716-15,15s6.716,15,15,15    h33.2v33.2c0,8.284,6.716,15,15,15s15-6.716,15-15v-33.2h33.2c8.284,0,15-6.716,15-15S408.884,337.399,400.6,337.399z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New User registered</label>\n              <label class=\"rtetyuyu\">1 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-order\">\n              <svg class=\"svg-notif-new-order\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M458.732,422.212l-22.862-288.109c-1.419-18.563-17.124-33.098-35.737-33.098h-45.164v66.917    c0,8.287-6.708,14.995-14.995,14.995c-8.277,0-14.995-6.708-14.995-14.995v-66.917H187.028v66.917    c0,8.287-6.718,14.995-14.995,14.995c-8.287,0-14.995-6.708-14.995-14.995v-66.917h-45.164c-18.613,0-34.318,14.535-35.737,33.058    L53.265,422.252c-1.769,23.082,6.238,46.054,21.962,63.028C90.952,502.253,113.244,512,136.386,512h239.236    c23.142,0,45.434-9.747,61.159-26.721C452.505,468.305,460.512,445.333,458.732,422.212z M323.56,275.493l-77.553,77.553    c-2.929,2.929-6.768,4.398-10.606,4.398c-3.839,0-7.677-1.469-10.606-4.398l-36.347-36.347c-5.858-5.858-5.858-15.345,0-21.203    c5.858-5.858,15.355-5.858,21.203,0l25.751,25.741l66.956-66.956c5.848-5.848,15.345-5.848,21.203,0    C329.418,260.139,329.418,269.635,323.56,275.493z\">\n                </path>\n                <path\n                  d=\"M256.004,0c-54.571,0-98.965,44.404-98.965,98.975v2.029h29.99v-2.029c0-38.037,30.939-68.986,68.976-68.986    s68.976,30.949,68.976,68.986v2.029h29.989v-2.029C354.969,44.404,310.575,0,256.004,0z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Order</label>\n              <label class=\"rtetyuyu\">6 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-review\">\n              <svg class=\"svg-notif-new-review\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M114.68,20.54C51.448,20.54,0.002,72,0.002,135.27C0.002,198.53,51.448,250,114.68,250s114.678-51.47,114.678-114.73   C229.358,72,177.911,20.54,114.68,20.54z M69.7,104.84c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15v12.56   c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15V104.84z M155.271,177.92c-11.195,11.19-25.898,16.79-40.592,16.79   c-14.703,0-29.397-5.6-40.592-16.79c-5.857-5.86-5.857-15.36,0-21.22c5.857-5.85,15.353-5.85,21.21,0   c10.685,10.7,28.077,10.7,38.762,0c5.857-5.85,15.353-5.85,21.21,0C161.119,162.56,161.119,172.06,155.271,177.92z M159.659,117.4   c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15v-12.56c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15V117.4   z\">\n                </path>\n                <path\n                  d=\"M264.553,100.367h232.451c8.28,0,14.993-6.716,14.993-15s-6.713-15-14.993-15H264.553c-8.28,0-14.993,6.716-14.993,15   S256.273,100.367,264.553,100.367z\">\n                </path>\n                <path\n                  d=\"M497.005,120.367H264.553c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.451c8.28,0,14.993-6.716,14.993-15   S505.285,120.367,497.005,120.367z\">\n                </path>\n                <path\n                  d=\"M474.667,185.164c0-8.284-6.713-15-14.993-15H264.553c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.121   C467.954,200.164,474.667,193.448,474.667,185.164z\">\n                </path>\n                <path\n                  d=\"M397.322,262c-63.241,0-114.678,51.46-114.678,114.73c0,63.26,51.437,114.73,114.678,114.73   C460.553,491.46,512,439.99,512,376.73C512,313.46,460.553,262,397.322,262z M352.342,346.3c0-8.28,6.707-15,14.993-15   c8.276,0,14.993,6.72,14.993,15v12.56c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15V346.3z M437.903,431.8   c-2.919,2.93-6.757,4.4-10.595,4.4c-3.838,0-7.677-1.47-10.605-4.4c-10.685-10.69-28.077-10.69-38.772,0   c-5.847,5.86-15.343,5.86-21.2,0c-5.857-5.85-5.857-15.35,0-21.21c10.845-10.85,25.259-16.82,40.592-16.82   c15.333,0,29.747,5.97,40.582,16.82C443.761,416.45,443.761,425.95,437.903,431.8z M442.302,358.86c0,8.28-6.717,15-14.993,15   c-8.286,0-14.993-6.72-14.993-15V346.3c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15V358.86z\">\n                </path>\n                <path\n                  d=\"M247.561,411.625H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.568c8.28,0,14.993-6.716,14.993-15   S255.841,411.625,247.561,411.625z\">\n                </path>\n                <path\n                  d=\"M247.561,361.625H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.568c8.28,0,14.993-6.716,14.993-15   S255.841,361.625,247.561,361.625z\">\n                </path>\n                <path\n                  d=\"M247.561,311.828H52.323c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.237c8.28,0,14.993-6.716,14.993-15   S255.841,311.828,247.561,311.828z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Custmer Review</label>\n              <label class=\"rtetyuyu\">15 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-ticket\">\n              <svg class=\"svg-notif-new-ticket\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 455.02 455.02\"\n                style=\"enable-background:new 0 0 455.02 455.02;\" xml:space=\"preserve\">\n                <path\n                  d=\"M432.612,0H22.407c-11.046,0-20,8.954-20,20s8.954,20,20,20h21.917v410.571c0,0.984,0.61,1.865,1.53,2.212    c0.921,0.347,1.96,0.088,2.61-0.651l18.347-20.875c1.127-1.282,2.735-2.041,4.441-2.096s3.359,0.599,4.567,1.806l22.243,22.243    c2.412,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0    l22.534-22.533c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.412,2.412,6.324,2.412,8.736,0l22.534-22.533    c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.413,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0    l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0l22.188-22.188c1.216-1.216,2.885-1.87,4.603-1.805    c1.719,0.065,3.332,0.845,4.452,2.15l18.337,21.365c0.644,0.751,1.688,1.021,2.615,0.678c0.927-0.344,1.543-1.228,1.543-2.217V40    h21.918c11.046,0,20-8.954,20-20S443.658,0,432.612,0z M103.896,79.541h166.577c8.284,0,15,6.716,15,15s-6.716,15-15,15H103.896    c-8.284,0-15-6.716-15-15S95.612,79.541,103.896,79.541z M346.296,283.011H102.748c-8.284,0-15-6.716-15-15s6.716-15,15-15    h243.548c8.284,0,15,6.716,15,15S354.58,283.011,346.296,283.011z M347.444,199.148H103.896c-8.284,0-15-6.716-15-15    s6.716-15,15-15h243.548c8.284,0,15,6.716,15,15S355.728,199.148,347.444,199.148z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Ticket</label>\n              <label class=\"rtetyuyu\">26 min Ago</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"eryttfry\">\n          <label class=\"qzerfgqs\">View All</label>\n        </div>\n      </div> <span class=\"rtuyytyuj\"></span>\n      <svg class=\"ertetgds\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n        x=\"0px\" y=\"0px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n        <path\n          d=\"M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75    c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1    c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"cxvbfdgs\">\n      <div class=\"tredyryytr\">\n        <svg class=\"openprofile\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n          style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n          <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n          <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n          </path>\n        </svg>\n        <svg class=\"opensettings\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 268.765 268.765\" style=\"enable-background:new 0 0 268.765 268.765;\"\n          xml:space=\"preserve\">\n          <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n            d=\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z\">\n          </path>\n        </svg>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n          viewBox=\"0 0 14.573 14.573\" style=\"enable-background:new 0 0 14.573 14.573;\" xml:space=\"preserve\">\n          <path\n            d=\"M7.286,14.573c-1.736,0-3.368-0.676-4.596-1.903c-1.227-1.228-1.904-2.86-1.904-4.597    s0.677-3.369,1.904-4.597c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414c-0.85,0.851-1.318,1.981-1.318,3.183    s0.468,2.333,1.318,3.183s1.979,1.317,3.182,1.317s2.332-0.468,3.182-1.317c0.851-0.85,1.318-1.98,1.318-3.183    S11.318,5.74,10.469,4.89c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0c1.227,1.229,1.904,2.861,1.904,4.597    s-0.677,3.369-1.904,4.597C10.655,13.897,9.023,14.573,7.286,14.573z\">\n          </path>\n          <path d=\"M7.286,7c-0.553,0-1-0.448-1-1V1c0-0.552,0.447-1,1-1s1,0.448,1,1v5C8.286,6.552,7.84,7,7.286,7z\">\n          </path>\n        </svg>\n      </div>\n      <svg class=\"svgrggj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n        style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n        <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n        <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n        </path>\n      </svg>\n    </div>\n  </div>\n  <div class=\"divchojher\">\n    <input id=\"inputsjkaror\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n    <svg class=\"svgsellcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n      style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n      <path\n        d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n      </path>\n    </svg>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/models/adminProduct.ts":
/*!****************************************!*\
  !*** ./src/app/models/adminProduct.ts ***!
  \****************************************/
/*! exports provided: AdminProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProduct", function() { return AdminProduct; });
var AdminProduct = /** @class */ (function () {
    function AdminProduct() {
        this.Id = -1;
        this.Color = 'white';
        this.Status = 'on-sale';
        this.Name = 'Lorem Ipsum';
        this.Price = 9;
        this.Description = 'Some Dummy Text ..';
    }
    return AdminProduct;
}());



/***/ }),

/***/ "./src/app/order/orders/orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/order/orders/orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/order/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/order/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/order/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/order/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/order/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/order/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product/product-form/product-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  font-size: 20px;\r\n}\r\n\r\nlabel.radio {\r\n  font-size: 15px;\r\n}\r\n\r\n.form-control.ng-touched.ng-invalid {\r\n  border-left: 6px solid #d6d8d9;\r\n}\r\n\r\n.formData {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.browse {\r\n  border-bottom: 1px solid #ced4da;\r\n  text-align: right;\r\n  width: 100%;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.image {\r\n  display: block;\r\n  margin: 0 auto\r\n}\r\n\r\n.block {\r\n  border: 1px solid #eee;\r\n  margin: 10px auto;\r\n  padding: 10px;\r\n  height: 220px;\r\n}\r\n\r\n.scroll {\r\n  overflow-y: scroll\r\n}\r\n\r\n.small {\r\n  height: 90px;\r\n  padding: 5px 11px;\r\n  border: 1px solid #eee;\r\n  margin: 5px 8px;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.remove {\r\n  background: #dc3545;\r\n  padding: 0px 5px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: -8px;\r\n  right: -8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.color {\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  opacity: 0.7;\r\n}\r\n\r\n.color input[type=radio] {\r\n  visibility: hidden;\r\n}\r\n\r\n.color input[type=radio]:checked {\r\n  visibility: visible;\r\n}\r\n\r\ntextarea {\r\n  height: 134px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbC5yYWRpbyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjZDZkOGQ5O1xyXG59XHJcblxyXG4uZm9ybURhdGEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnJvd3NlIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlZDRkYTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG9cclxufVxyXG5cclxuLmJsb2NrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLnNjcm9sbCB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsXHJcbn1cclxuXHJcbi5zbWFsbCB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luOiA1cHggOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLThweDtcclxuICByaWdodDogLThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY29sb3IgaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbG9yIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEzNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product/product-form/product-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n  <div class=\"col-9\">\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n      <input type=\"hidden\" [(ngModel)]=\"_Product.Id\" name=\"Id\" #Id=\"ngModel\" class=\" form-control\">\n      <div class=\"row\">\n        <div class=\" form-group col-6 \">\n          <label>Name :</label>\n          <input required minlength=\"6\" type=\"text\" [(ngModel)]=\"_Product.Name\" name=\"Name\" #Name=\"ngModel\"\n            class=\" form-control\">\n          <div class=\"alert alert-dark\" *ngIf=\"Name.touched && !Name.valid\">\n            <div *ngIf=\"Name.errors.required\"> Name Is Required !</div>\n            <!-- Custom Validation => Name Must Be Unique -->\n            <div *ngIf=\"Name.errors.minlength\"> Name Must Be More Then 6 Characters </div>\n          </div>\n\n        </div>\n        <div class=\" form-group col-2\">\n          <label>Price :</label>\n          <input required maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.Price\" name=\"Price\" #Price=\"ngModel\"\n            class=\"form-control\">\n          <div class=\"alert alert-dark\" *ngIf=\"Price.touched && !Price.valid\">\n            <div *ngIf=\"Price.errors?.required\"> Price Is Required !</div>\n          </div>\n        </div>\n        <div class=\" form-group col-4\">\n          <label>Status :</label>\n          <div class=\"form-control \">\n            <label class=\"col-6 radio\">\n              <input type=\"radio\" [(ngModel)]=\"_Product.Status\" name=\"Status\" value=\"on-sale\">\n              On Sale\n            </label>\n            <label class=\"col-6 radio\">\n              <input type=\"radio\" [(ngModel)]=\"_Product.Status\" name=\"Status\" value=\"out-of-stock\">\n              Out Of Stock\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-7 form-group\">\n          <label>Description :</label>\n          <textarea required [(ngModel)]=\"_Product.Description\" name=\"Description\" #des=\"ngModel\" cols=\"30\" rows=\"8\"\n            class=\" form-control\"></textarea>\n          <div class=\"alert alert-dark\" *ngIf=\"des.touched && des.errors?.required\">Fill The Description !</div>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"form-group\">\n            <label>Category :</label>\n            <select #Category (change)=\"getSub(Category.value)\" class=\"form-control\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let item of categories\" [value]=\"item.Id\">{{item.Name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>SubCategory :</label>\n            <select name=\"SubCategoryId\" required [(ngModel)]=\"_Product.SubCategoryId\" class=\"form-control\">\n              <option *ngFor=\"let item of subCategories\" [value]=\"item.Id\">{{item.Name}}</option>\n            </select>\n          </div>\n\n          <!-- <div class=\"form-group\">\n            <label>Shipping :</label>\n            <div class=\"form-control\">\n              <label *ngFor=\"let item of shipping\" class=\"col-4 radio\">\n                <input type=\"radio\" ngModel name=\"shippingMethod\" [value]=\"item\">\n                {{item}}\n              </label>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"form-group col-2\">\n          <label>Color :</label>\n          <div>\n            <label class=\"color col-3\" *ngFor=\"let item of colors\" [ngStyle]=\"{'background': item}\">\n              <input type=\"radio\" [(ngModel)]=\"_Product.Color\" name=\"Color\" [value]=\"item\">\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"form-group col-2\">\n          <label>Main Image :</label>\n          <div class=\" form-control \">\n            <label class=\"browse\">Browse&hellip;\n              <input type=\"file\" name=\"MainImg\" ngModel (change)=\"setMainImage($event.target.files)\"\n                style=\"display: none;\">\n            </label>\n          </div>\n\n          <div class=\"block \">\n            <img *ngIf=\"imgPath\" [src]=\"imgPath\" class=\"image\">\n          </div>\n\n        </div>\n\n        <div class=\"form-group col-5\">\n          <label>Other Images :</label>\n          <div class=\"form-control\">\n            <label class=\"browse\">Browse&hellip;\n              <input type=\"file\" accept=\"image/*\" name=\"GalleryImgs\" ngModel multiple\n                (change)=\"addProductImages($event.target.files)\" style=\"display: none;\">\n            </label>\n          </div>\n          <div class=\"block row\">\n            <div *ngFor=\"let item of GalleryImgs\" class=\"small col-2\">\n              <img [src]=\"item.data\">\n              <span (click)=\"removeImage(item.name)\" class=\"remove\">X</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group col-5\">\n          <label>Description Images :</label>\n          <div class=\"form-control\">\n            <label class=\"browse\">Browse&hellip;\n              <input type=\"file\" accept=\"image/*\" name=\"DescImgs\" ngModel multiple\n                (change)=\"addDescImages($event.target.files)\" style=\"display: none;\">\n            </label>\n          </div>\n          <div class=\"block row\">\n            <div *ngFor=\"let item of DescImgs\" class=\"small col-2\">\n              <img [src]=\"item.data\">\n              <span (click)=\"removeDescImage(item.name)\" class=\"remove\">X</span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <button [disabled]=\"f.invalid\" class=\"btn btn-info\">Submit</button>\n    </form>\n\n  </div>\n  <div class=\"col-3\">\n    <product-history [Products]=\"lastProducts\"></product-history>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product-form/product-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin-product.service */ "./src/app/services/admin-product.service.ts");
/* harmony import */ var _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/adminProduct */ "./src/app/models/adminProduct.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(aps, toaster) {
        this.aps = aps;
        this.toaster = toaster;
        this.GalleryImgs = new Array();
        this.DescImgs = new Array();
        this.colors = ['white', 'red', 'pink', 'green', 'grey', 'yellow', 'blue', 'orange', 'brown', 'violet', 'black'];
        this._Product = new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]();
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aps.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
        this.aps.GetLastProducts().subscribe(function (data) {
            _this.lastProducts = data;
        });
        this.shipping = this.aps.getShippings();
    };
    // Posting The Product
    ProductFormComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.invalid || !this.MainImage || this.GalleryImgs.length === 0) {
            this.toaster.warning("You've to fill the required areas ..");
            return;
        }
        this._Product.Slug = this._Product.Name.replace(/\s+/g, '-');
        this.aps.PostProduct(this._Product).subscribe(function (ProductId) {
            _this.toaster.success('Product has been added ' + ProductId, 'Success');
            _this.uploadProductImages(ProductId);
        }, function (error) {
            if (error instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                _this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
            }
            else
                throw error;
        });
    };
    ProductFormComponent.prototype.uploadProductImages = function (ProductId) {
        var _this = this;
        var form = new FormData();
        form.append('ProductId', ProductId);
        form.append('MainImg', this.MainImage, this.MainImage.name);
        this.GalleryImgs.forEach(function (e) {
            form.append('GalleryImgs', e.img, e.img.name);
        });
        this.DescImgs.forEach(function (e) {
            form.append('DescImgs', e.img, e.img.name);
        });
        this.aps.UploadImages(form).subscribe(function (Product) {
            _this.addToHistory(Product);
            _this.toaster.success('Images Uploaded !', 'Success');
            _this.resetForm();
        }, function (err) {
            if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                _this.toaster.warning(err.originalError.error.Message); // Display the error within Form errors
            }
            else
                throw err;
        });
    };
    ProductFormComponent.prototype.resetForm = function () {
        this.ngForm.resetForm(new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]());
        this.MainImage = undefined;
        this.imgPath = undefined;
        this.GalleryImgs = new Array();
        this.DescImgs = new Array();
    };
    ProductFormComponent.prototype.addToHistory = function (data) {
        var array = this.lastProducts;
        array.pop(); // Remove The Last
        array.unshift(data); // Insert at The start
    };
    ProductFormComponent.prototype.getSub = function (c) {
        if (c)
            this.subCategories = this.categories.find(function (x) { return x.Id === Number(c); }).SubCategories;
    };
    /* Images Functions */
    ProductFormComponent.prototype.setMainImage = function (files) {
        this.MainImage = files[0];
        this.previewMainImg();
    };
    ProductFormComponent.prototype.previewMainImg = function () {
        var _this = this;
        if (this.MainImage) { // image exist
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imgPath = e.target.result.toString();
            };
            reader.readAsDataURL(this.MainImage);
        }
    };
    ProductFormComponent.prototype.addProductImages = function (files) {
        var _this = this;
        var _loop_1 = function (i) {
            var exist = (this_1.GalleryImgs.find(function (x) { return x.name === files[i].name; })) ? true : false;
            if (files[i] && !exist) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var item = {
                        img: files[i],
                        name: files[i].name,
                        data: e.target.result.toString()
                    };
                    if (_this.GalleryImgs.length < 8) {
                        _this.GalleryImgs.push(item);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    ProductFormComponent.prototype.addDescImages = function (files) {
        var _this = this;
        var _loop_2 = function (i) {
            var exist = (this_2.DescImgs.find(function (x) { return x.name === files[i].name; })) ? true : false;
            if (files[i] && !exist) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var item = {
                        img: files[i],
                        name: files[i].name,
                        data: e.target.result.toString()
                    };
                    if (_this.DescImgs.length < 8) {
                        _this.DescImgs.push(item);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        };
        var this_2 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_2(i);
        }
    };
    ProductFormComponent.prototype.removeImage = function (name) {
        var elem = this.GalleryImgs.find(function (x) { return x.name === name; });
        this.GalleryImgs.splice(this.GalleryImgs.indexOf(elem), 1);
    };
    ProductFormComponent.prototype.removeDescImage = function (name) {
        var elem = this.DescImgs.find(function (x) { return x.name === name; });
        this.DescImgs.splice(this.DescImgs.indexOf(elem), 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], ProductFormComponent.prototype, "ngForm", void 0);
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/product/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/product/product-form/product-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product/product-history/product-history.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/product/product-history/product-history.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n  text-align: center;\r\n  text-decoration: underline;\r\n  margin: 15px 0;\r\n}\r\n\r\n.table-img {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 50%;\r\n}\r\n\r\ntr td:first-of-type {\r\n  padding: 5px;\r\n  width: 52px;\r\n}\r\n\r\ntr {\r\n  text-align: left;\r\n  margin: 5px 0 10px 0;\r\n}\r\n\r\na {\r\n  color: black;\r\n  text-decoration: underline\r\n}\r\n\r\ntd.col-4 {\r\n  padding-top: 0 !important;\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.history {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 20px;\r\n  padding: 5px 22px !important;\r\n  font-size: 18px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWhpc3RvcnkvcHJvZHVjdC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QtaGlzdG9yeS9wcm9kdWN0LWhpc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi50YWJsZS1pbWcge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbnRyIHRkOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogNTJweDtcclxufVxyXG5cclxudHIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG50ZC5jb2wtNCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlzdG9yeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDIycHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE4cHhcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product/product-history/product-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product/product-history/product-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"history\">\n  <h4 *ngIf=\"Products\">Last Added Products</h4>\n  <table class=\"table table-hover text-center\">\n    <tr *ngFor=\"let p of Products\" class=\"row\">\n      <td class=\"col-3\"><img [src]=\"'/Content/Images/Products/' + p.Id + '/Main/' + p.Image\" class=\"img-responsive table-img\"></td>\n      <td class=\"col-9\"><a target=\"blank\" routerLink=\"/product/{{p.Slug}}\">{{p.Name}}</a></td>\n      <td class=\"col-4\"><a routerLink=\"/add-product\">Edit</a></td>\n      <td class=\"col-4\"><a routerLink=\"/add-product\">Copy</a></td>\n      <td class=\"col-4\"><a routerLink=\"/add-product\">Delete</a></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-history/product-history.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-history/product-history.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHistoryComponent", function() { return ProductHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin-product.service */ "./src/app/services/admin-product.service.ts");



var ProductHistoryComponent = /** @class */ (function () {
    function ProductHistoryComponent(aps) {
        this.aps = aps;
    }
    ProductHistoryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('Products'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductHistoryComponent.prototype, "Products", void 0);
    ProductHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-history',
            template: __webpack_require__(/*! ./product-history.component.html */ "./src/app/product/product-history/product-history.component.html"),
            styles: [__webpack_require__(/*! ./product-history.component.css */ "./src/app/product/product-history/product-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"]])
    ], ProductHistoryComponent);
    return ProductHistoryComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-product.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/admin-product.service.ts ***!
  \***************************************************/
/*! exports provided: AdminProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductService", function() { return AdminProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");





var AdminProductService = /** @class */ (function () {
    function AdminProductService(http) {
        this.http = http;
        this.noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'true' }); // only for testing
    }
    AdminProductService.prototype.getCategories = function () {
        return this.http.get('api/Categories', { headers: this.noAuth });
    };
    AdminProductService.prototype.getShippings = function () {
        return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
    };
    // calling the server
    AdminProductService.prototype.PostProduct = function (form) {
        return this.http.post('api/Products', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.UploadImages = function (form) {
        return this.http.post('api/upload-images', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.GetLastProducts = function () {
        return this.http.get('api/last7', { headers: this.noAuth });
    };
    AdminProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminProductService);
    return AdminProductService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divsidebar\">\n  <div class=\"ertdgdfhs\" id=\"addproduct\" routerLink=\"/admin/add-product\" routerLinkActive=\"ertdgdfhs1\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\"\n      y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936    C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208    c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8    C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32    c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64    c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"chat\"> <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 16.087 16.087\" style=\"enable-background:new 0 0 16.087 16.087;\" xml:space=\"preserve\">\n      <path\n        d=\"M6.5,3.478c-3.59,0-6.5,2.238-6.5,5c0,1.354,0.701,2.585,1.839,3.485    c-0.066,0.918-0.287,2.041-0.927,2.646c1.274,0,2.576-0.798,3.399-1.422c0.684,0.188,1.42,0.291,2.189,0.291    c3.59,0,6.5-2.237,6.5-5C13,5.716,10.09,3.478,6.5,3.478z\">\n      </path>\n      <path\n        d=\"M15.14,8.965C15.687,8.234,16,7.384,16,6.478c0-2.762-2.91-5-6.5-5    c-1.58,0-3.028,0.434-4.154,1.154C5.876,2.532,6.43,2.478,7,2.478c3.866,0,7,2.463,7,5.5c0,1.197-0.485,2.306-1.312,3.207    c0.821,0.624,2.125,1.424,3.399,1.424C15.181,11.749,15.116,9.843,15.14,8.965z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"order\" routerLink=\"/admin/orders\" routerLinkActive=\"ertdgdfhs1\">\n    <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\"\n      y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M336,32h-34.752C294.656,13.376,276.864,0,256,0s-38.656,13.376-45.28,32H176c-8.832,0-16,7.168-16,16v64    c0,8.832,7.168,16,16,16h160c8.832,0,16-7.168,16-16V48C352,39.168,344.832,32,336,32z\">\n      </path>\n      <path\n        d=\"M416,64h-32v48c0,26.464-21.536,48-48,48H176c-26.464,0-48-21.536-48-48V64H96c-17.632,0-32,14.368-32,32v384    c0,17.952,14.048,32,32,32h320c17.952,0,32-14.048,32-32V96C448,78.048,433.952,64,416,64z M251.328,347.328l-64,64    C184.192,414.432,180.096,416,176,416s-8.192-1.568-11.328-4.672l-32-32c-6.24-6.24-6.24-16.384,0-22.624s16.384-6.24,22.624,0    L176,377.376l52.672-52.672c6.24-6.24,16.384-6.24,22.624,0S257.568,341.056,251.328,347.328z M251.328,219.328l-64,64    C184.192,286.432,180.096,288,176,288s-8.192-1.568-11.328-4.672l-32-32c-6.24-6.24-6.24-16.384,0-22.624s16.384-6.24,22.624,0    L176,249.376l52.672-52.672c6.24-6.24,16.384-6.24,22.624,0C257.536,202.944,257.568,213.056,251.328,219.328z M368,384h-64    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64c8.832,0,16,7.168,16,16C384,376.832,376.832,384,368,384z M368,256h-64    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64c8.832,0,16,7.168,16,16C384,248.832,376.832,256,368,256z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"productlist\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 612.001 612.002\" style=\"enable-background:new 0 0 612.001 612.002;\" xml:space=\"preserve\">\n      <path\n        d=\"M599.293,116.954l-66.904-83.936c-6.319-7.929-15.906-12.548-26.047-12.548H160.551c-10.139,0-19.726,4.619-26.046,12.547   l-66.903,83.937c-6.989,8.769-12.708,25.118-12.708,37.46v61.482c5.314-8.36,13.081-14.635,22.395-17.845   c0.521-7.026,2.651-13.84,6.294-20.045c6.311-10.75,16.435-18.394,28.502-21.533c4.326-1.13,8.287-1.642,12.247-1.642   c15.955,0,30.413,8.116,38.879,20.866c2.521-0.439,5.065-0.667,7.619-0.667c7.834,0,15.237,2.154,21.686,5.866l37.059-9.639   c4.644-1.212,9.416-1.821,14.198-1.821c25.631,0,48.035,17.337,54.492,42.164l72.627,279.135   c3.789,14.563,1.675,29.729-5.937,42.708c-7.62,12.979-19.842,22.208-34.406,25.998l-32.413,8.431h272.229   c22.995,0,41.636-18.641,41.636-41.635L612,153.286C612,142.072,606.282,125.723,599.293,116.954z M89.465,116.244l22.156-27.797   h151.166l14.917-24.526H131.171l16.357-20.522c3.178-3.987,7.925-6.274,13.023-6.274h345.792c5.099,0,9.846,2.287,13.023,6.274   l16.357,20.522H386.58l8.327,24.526h160.366l22.155,27.797H89.465z M96.223,218.802l-9.345,2.431   c-9.953,2.59-15.923,12.758-13.334,22.711l0.095,0.364c2.59,9.954,12.758,15.923,22.712,13.334l79.252-20.618   c9.954-2.589,15.923-12.757,13.334-22.712l-0.095-0.364c-2.59-9.953-12.758-15.923-22.711-13.334l-9.345,2.431   c-4.993,1.299-10.095-1.696-11.394-6.689l-0.08-0.304c-3.017-11.596-14.862-18.551-26.458-15.534l-0.485,0.126   c-11.596,3.017-18.55,14.862-15.534,26.458l0.08,0.304C104.212,212.402,101.217,217.503,96.223,218.802z M121.768,192.721   c5.027-1.308,10.163,1.708,11.47,6.734c1.308,5.027-1.707,10.163-6.735,11.47c-5.027,1.307-10.162-1.708-11.47-6.734   C113.726,199.164,116.741,194.028,121.768,192.721z M238.566,479.806c0.872,3.352-1.138,6.775-4.489,7.647l-115.299,29.994   c-3.351,0.872-6.775-1.139-7.647-4.49l-1.579-6.067c-0.872-3.353,1.138-6.776,4.49-7.647l115.298-29.994   c3.352-0.872,6.775,1.139,7.647,4.489L238.566,479.806z M252.628,359.526l1.579,6.068c0.872,3.352-1.138,6.775-4.49,7.646   L91.941,414.287c-3.352,0.872-6.775-1.139-7.647-4.489l-1.579-6.069c-0.872-3.352,1.138-6.775,4.49-7.646l157.776-41.045   C248.333,354.165,251.756,356.174,252.628,359.526z M235.509,318.627L77.733,359.672c-3.352,0.871-6.775-1.139-7.647-4.49   l-1.579-6.068c-0.872-3.352,1.138-6.774,4.49-7.646l157.776-41.045c3.352-0.872,6.775,1.138,7.647,4.489l1.579,6.069   C240.871,314.331,238.861,317.755,235.509,318.627z M232.005,429.681l-127.435,33.152c-3.352,0.871-6.775-1.139-7.647-4.49   l-1.579-6.068c-0.872-3.352,1.138-6.775,4.49-7.647l127.434-33.15c3.352-0.873,6.775,1.138,7.647,4.489l1.579,6.068   C237.367,425.386,235.357,428.81,232.005,429.681z M346.709,497.026l-72.618-279.143c-4.359-16.757-21.478-26.807-38.235-22.448   l-37.004,9.627c0.875,1.807,1.601,3.715,2.126,5.729c4.421,16.996-5.588,34.045-22.22,38.372l-78.087,20.314   c-15.94,4.147-33.103-4.061-38.454-19.638c-1.008-2.934-1.553-5.883-1.709-8.788l-37.042,9.637   c-16.757,4.359-26.807,21.478-22.448,38.234l72.618,279.143c4.36,16.758,21.478,26.808,38.235,22.448l212.392-55.253   C341.019,530.901,351.069,513.783,346.709,497.026z M103.977,560.172L40.831,317.44l212.391-55.253l63.147,242.732L103.977,560.172   z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"userlist\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 198.145 198.145\" style=\"enable-background:new 0 0 198.145 198.145;\" xml:space=\"preserve\">\n      <path\n        d=\"M195.536,68.18c-1.895-2.079-4.578-3.265-7.392-3.265H10c-2.813,0-5.497,1.186-7.392,3.265s-2.826,4.861-2.565,7.662  l9.505,102.099c0.479,5.142,4.793,9.073,9.957,9.073h159.134c5.164,0,9.478-3.932,9.957-9.073l9.505-102.099  C198.362,73.041,197.431,70.259,195.536,68.18z M132.426,166.073c-0.007-0.001-0.013-0.001-0.02,0H65.739c-5.523,0-10-4.478-10-10  c0-13.58,11.048-24.628,24.628-24.628h7.177c-7.381-4.078-12.393-11.94-12.393-20.952c0-13.19,10.731-23.922,23.922-23.922  s23.922,10.731,23.922,23.922c0,9.012-5.012,16.874-12.393,20.952h7.177c13.303,0,24.176,10.603,24.614,23.802  c0.022,0.272,0.034,0.548,0.034,0.826C142.426,161.596,137.949,166.073,132.426,166.073z M178.906,46.298c0,4.143-3.358,7.5-7.5,7.5  H26.739c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h144.667C175.548,38.798,178.906,42.155,178.906,46.298z M159.106,18.631  c0,4.143-3.358,7.5-7.5,7.5H46.539c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h105.066  C155.748,11.131,159.106,14.488,159.106,18.631z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"coupon\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M466.07,191.766c27.604-36.851,27.575-87.714,0.375-124.769l40.996-39.164c5.944-5.768,6.09-17.253,0.352-23.196    c-5.768-5.943-15.255-6.09-21.198-0.352l-41.284,41.436c-36.559-27.249-89.877-28.163-126.134-0.876l-30.42-31.42    c-17.509-17.509-46.085-17.509-63.594,0L13.154,226.432c-17.538,17.538-17.538,46.056,0,63.594l37.096,37.125    c-13.454,37.829-4.245,80.517,24.375,109.152c28.649,28.664,71.426,37.799,109.166,24.389l37.125,38.096    c17.509,17.509,46.085,17.509,63.594,0L498.519,285.78c8.491-8.462,13.176-19.734,13.176-31.768    c0-12.005-4.685-23.336-13.176-31.827L466.07,191.766z M266.856,140.88c5.855-5.855,15.343-5.855,21.198,0l21.198,21.227    c5.855,5.855,5.855,15.343,0,21.198s-15.343,5.855-21.198,0l-21.198-21.227C261,156.221,261,146.735,266.856,140.88z     M203.261,77.286c5.855-5.855,15.343-5.855,21.198,0l21.198,21.198c5.855,5.855,5.855,15.343,0,21.198s-15.343,5.855-21.198,0    l-21.198-21.198C197.406,92.628,197.406,83.141,203.261,77.286z M180.629,181.929c17.567-17.567,46.085-17.567,63.594,0    c17.637,17.576,17.534,46.06,0,63.594c-17.509,17.509-46.085,17.509-63.594,0C163.095,227.989,162.992,199.505,180.629,181.929z     M265.421,393.908c-17.509,17.509-46.085,17.509-63.594,0c-17.538-17.538-17.538-46.056,0-63.594    c17.509-17.509,46.085-17.509,63.594,0C282.959,347.852,282.959,376.371,265.421,393.908z M320.114,292.222L129.303,313.42    c-8.675,0.867-15.696-5.354-16.572-13.234c-0.907-8.257,5.021-15.664,13.234-16.572l190.811-21.198    c8.491-0.82,15.664,5.036,16.572,13.234C334.255,283.907,328.341,291.315,320.114,292.222z M372.846,246.899    c-5.855,5.855-15.343,5.855-21.198,0l-21.198-21.198c-5.855-5.855-5.855-15.343,0-21.198c5.855-5.855,15.343-5.855,21.198,0    l21.198,21.198C378.701,231.556,378.701,241.043,372.846,246.899z M350.535,160.702c-17.538-17.538-17.538-46.056,0-63.594    c17.509-17.509,46.085-17.509,63.594,0c17.538,17.538,17.538,46.056,0,63.594C396.62,178.21,368.044,178.21,350.535,160.702z     M436.469,310.493c-5.855,5.855-15.343,5.855-21.198,0l-21.198-21.198c-5.855-5.855-5.855-15.343,0-21.198    c5.855-5.855,15.343-5.855,21.198,0l21.198,21.198C442.324,295.151,442.324,304.637,436.469,310.493z\">\n      </path>\n      <circle cx=\"233.627\" cy=\"362.109\" r=\"14.989\"></circle>\n      <circle cx=\"382.336\" cy=\"128.901\" r=\"14.989\"></circle>\n      <path\n        d=\"M223.025,203.127c-5.855-5.855-15.343-5.855-21.198,0c-5.94,5.94-5.791,15.407,0,21.198    c5.855,5.855,15.342,5.855,21.198,0C228.817,218.533,228.966,209.067,223.025,203.127z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"review\"> <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-38 -21 670 670.66592\">\n      <path\n        d=\"m344.832031 104.386719 5.734375-3.363281h-9.878906c-5.023438-.003907-9.429688-3.339844-10.796875-8.171876l-5.140625-17.980468-5.09375 17.957031c-1.367188 4.832031-5.777344 8.171875-10.800781 8.171875h-9.921875l5.691406 3.308594c4.457031 2.597656 6.570312 7.894531 5.128906 12.84375l-5.378906 18.363281 13.070312-11.089844c4.1875-3.554687 10.332032-3.554687 14.519532 0l13.066406 11.089844-5.375-18.363281c-1.394531-4.9375.734375-10.195313 5.175781-12.765625zm0 0\">\n      </path>\n      <path\n        d=\"m437.375 381.632812h-150.472656c-7.753906.167969-15.027344-3.726562-19.183594-10.269531-3.773438-6.21875-4.019531-13.957031-.648438-20.402343 1.710938-3.367188 3.140626-6.0625 3.621094-6.816407 8.222656-12.582031 18.742188-23.507812 31.003906-32.199219l9.394532-7.558593c3.660156-2.960938 7.433594-5.710938 11.226562-8.4375 35.300782-25.378907 65.539063-62.207031 65.539063-74.554688.25-7.671875-3.753907-14.855469-10.40625-18.6875-4.042969-1.695312-8.679688 0-13.707031 5-33.582032 33.554688-75.941407 53.265625-116.925782 72.324219-42.429687 19.742188-82.488281 38.375-113.757812 71.09375-5.574219 6.132812-11.667969 11.765625-18.21875 16.835938-19.191406 14.234374-40.507813 13.914062-61.003906 13.75l-43.890626-.078126c-5.007812 0-10.707031 7.464844-10.707031 14.019532v176.800781c-.007812 6.003906 4.710938 10.949219 10.707031 11.222656h61.285157c11.34375-1.277343 22.375 4.25 28.140625 14.101563.292968.53125.636718 1.035156 1.011718 1.511718 30.179688 32.96875 83.6875 29.378907 84.183594 29.320313h186.207032c9.613281-.445313 18.140624-6.324219 21.972656-15.152344 2.53125-8.171875.445312-17.070312-5.453125-23.269531-4.109375-4.15625-9.703125-6.496094-15.546875-6.511719h-25.902344c-6.199219 0-11.226562-5.023437-11.226562-11.222656s5.027343-11.226563 11.226562-11.226563h65.628906c9.480469-.128906 18.035156-5.703124 21.988282-14.320312 2.539062-8.429688.46875-17.582031-5.457032-24.101562-4.117187-4.152344-9.726562-6.480469-15.582031-6.476563h-50.890625c-6.199219 0-11.222656-5.023437-11.222656-11.222656s5.023437-11.226563 11.222656-11.226563h66.585938c9.324218.179688 17.90625-5.078125 21.976562-13.46875 2.535156-8.695312.488281-18.089844-5.445312-24.941406-4.117188-4.15625-9.730469-6.492188-15.589844-6.488281h-50.867188c-6.199218 0-11.226562-5.023438-11.226562-11.222657 0-6.199218 5.027344-11.226562 11.226562-11.226562h50.867188c1.664062.074219 3.320312.234375 4.964844.484375.78125-.25 1.589843-.410156 2.410156-.484375 9.183594.484375 17.789062-4.476562 21.976562-12.660156 2.503906-8.496094.449219-17.675782-5.441406-24.289063-3.992188-4.539062-9.570312-7.382812-15.59375-7.949219zm-393.238281 168.371094c0 6.199219-5.023438 11.222656-11.222657 11.222656-6.199218 0-11.226562-5.023437-11.226562-11.222656v-67.347656c0-6.199219 5.027344-11.226562 11.226562-11.226562 6.199219 0 11.222657 5.027343 11.222657 11.226562zm0-112.246094c0 6.199219-5.023438 11.222657-11.222657 11.222657-6.199218 0-11.226562-5.023438-11.226562-11.222657v-22.449218c0-6.199219 5.027344-11.226563 11.226562-11.226563 6.199219 0 11.222657 5.027344 11.222657 11.226563zm0 0\">\n      </path>\n      <path\n        d=\"m176.460938 160.511719 5.738281-3.367188h-9.882813c-5.015625 0-9.429687-3.339843-10.796875-8.171875l-5.140625-17.984375-5.09375 17.960938c-1.367187 4.835937-5.777344 8.167969-10.796875 8.175781h-9.925781l5.691406 3.363281c4.457032 2.59375 6.574219 7.890625 5.132813 12.839844l-5.375 18.363281 13.0625-11.089844c4.1875-3.550781 10.335937-3.550781 14.527343 0l13.058594 11.089844-5.371094-18.363281c-1.425781-4.953125.710938-10.238281 5.171876-12.816406zm0 0\">\n      </path>\n      <path\n        d=\"m513.199219 160.511719 5.734375-3.367188h-9.875c-5.023438 0-9.4375-3.339843-10.796875-8.171875l-5.144531-17.984375-5.097657 17.960938c-1.359375 4.835937-5.773437 8.167969-10.796875 8.175781h-9.917968l5.6875 3.363281c4.453124 2.59375 6.574218 7.890625 5.128906 12.839844l-5.375 18.363281 13.0625-11.089844c4.191406-3.550781 10.339844-3.550781 14.527344 0l13.066406 11.089844-5.378906-18.363281c-1.421876-4.953125.710937-10.238281 5.175781-12.816406zm0 0\">\n      </path>\n      <path\n        d=\"m526.792969 0h-404.082031c-37.183594.0390625-67.316407 30.167969-67.347657 67.347656v258.167969c0 11.863281 3.1875 23.511719 9.222657 33.726563 13 .984374 25.960937-2.292969 36.929687-9.335938 5.515625-4.320312 10.648437-9.105469 15.355469-14.292969 34.167968-35.734375 78.066406-56.121093 120.496094-75.898437 41.015624-19.082032 79.757812-37.109375 110.527343-67.839844 9.371094-11.007812 24.632813-14.957031 38.164063-9.882812 15.109375 7.261718 24.589844 22.675781 24.246094 39.433593 0 29.433594-50.511719 75.207031-74.894532 92.78125-3.464844 2.503907-6.910156 4.996094-10.21875 7.671875l-9.542968 7.660156c-10.332032 7.226563-19.199219 16.335938-26.144532 26.855469-.226562.390625-.753906 1.410157-1.4375 2.757813l57.777344.03125h91.53125c11.984375.488281 23.289062 5.707031 31.433594 14.519531 5.21875 5.359375 9.003906 11.949219 11.011718 19.15625h46.972657c37.179687-.039063 67.308593-30.164063 67.347656-67.34375v-258.167969c-.039063-37.179687-30.167969-67.3085935-67.347656-67.347656zm-297.453125 155.617188-33.988282 19.820312 13.46875 45.910156c1.386719 4.757813-.511718 9.859375-4.667968 12.554688-4.15625 2.695312-9.589844 2.347656-13.367188-.859375l-34.40625-29.195313-34.359375 29.183594c-3.777343 3.207031-9.203125 3.554688-13.363281.859375-4.160156-2.691406-6.054688-7.792969-4.671875-12.554687l13.46875-45.90625-34.035156-19.8125c-4.371094-2.550782-6.5-7.714844-5.1875-12.605469s5.742187-8.296875 10.800781-8.316407h42.972656l13.578125-47.949218c1.371094-4.828125 5.78125-8.164063 10.796875-8.164063 5.019532 0 9.433594 3.335938 10.800782 8.164063l13.582031 47.949218h42.964843c5.066407.019532 9.488282 3.425782 10.804688 8.316407 1.3125 4.890625-.816406 10.054687-5.191406 12.605469zm168.371094-56.121094-33.988282 19.820312 13.46875 45.910156c1.386719 4.753907-.511718 9.855469-4.671875 12.554688-4.15625 2.695312-9.585937 2.34375-13.367187-.859375l-34.402344-29.195313-34.359375 29.1875c-3.777344 3.199219-9.210937 3.546876-13.363281.851563-4.160156-2.691406-6.058594-7.792969-4.671875-12.554687l13.46875-45.90625-34.035157-19.808594c-4.371093-2.554688-6.5-7.71875-5.1875-12.609375s5.734376-8.296875 10.800782-8.3125h42.964844l13.585937-47.953125c1.367187-4.828125 5.78125-8.164063 10.796875-8.164063 5.019531 0 9.425781 3.335938 10.796875 8.164063l13.582031 47.953125h42.96875c5.0625.015625 9.488282 3.421875 10.800782 8.3125 1.316406 4.890625-.8125 10.054687-5.1875 12.609375zm168.367187 56.121094-33.988281 19.820312 13.472656 45.910156c1.378906 4.757813-.519531 9.859375-4.671875 12.554688-4.160156 2.695312-9.59375 2.347656-13.371094-.859375l-34.402343-29.195313-34.355469 29.183594c-3.777344 3.207031-9.210938 3.554688-13.371094.859375-4.152344-2.691406-6.050781-7.792969-4.671875-12.554687l13.472656-45.90625-34.03125-19.8125c-4.378906-2.550782-6.5-7.714844-5.195312-12.605469 1.316406-4.890625 5.742187-8.296875 10.804687-8.316407h42.96875l13.582031-47.949218c1.371094-4.828125 5.777344-8.164063 10.796876-8.164063 5.023437 0 9.429687 3.335938 10.800781 8.164063l13.582031 47.949218h42.96875c5.0625.019532 9.488281 3.425782 10.796875 8.316407 1.3125 4.890625-.808594 10.054687-5.1875 12.605469zm0 0\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"allpages\">\n\n    <svg class=\"erzstgfdgs\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n      <path\n        d=\"m432.734375 0h-353.46875c-43.707031 0-79.265625 35.558594-79.265625 79.265625v34.269531h512v-34.269531c0-43.707031-35.558594-79.265625-79.265625-79.265625zm-353.46875 71.765625c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm64.265625 0c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm64.269531 0c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm0 0\">\n      </path>\n      <path\n        d=\"m0 432.734375c0 43.707031 35.558594 79.265625 79.265625 79.265625h353.46875c43.707031 0 79.265625-35.558594 79.265625-79.265625v-289.203125h-512zm341.792969-198.261719c-5.859375-5.855468-5.859375-15.355468 0-21.210937 5.859375-5.859375 15.355469-5.859375 21.214843 0l64.265626 64.265625c5.859374 5.859375 5.859374 15.355468 0 21.214844l-64.265626 64.265624c-2.929687 2.929688-6.769531 4.394532-10.609374 4.394532-3.835938 0-7.675782-1.464844-10.605469-4.394532-5.855469-5.855468-5.855469-15.355468 0-21.210937l53.660156-53.660156zm-131.34375 111.21875 64.269531-128.535156c3.703125-7.40625 12.714844-10.410156 20.121094-6.707031 7.410156 3.703125 10.414062 12.714843 6.710937 20.125l-64.269531 128.535156c-2.625 5.253906-7.925781 8.292969-13.425781 8.292969-2.253907 0-4.542969-.507813-6.695313-1.585938-7.410156-3.703125-10.414062-12.714844-6.710937-20.125zm-125.722657-68.164062 64.265626-64.269532c5.859374-5.855468 15.355468-5.855468 21.214843 0 5.855469 5.859376 5.855469 15.355469 0 21.214844l-53.660156 53.660156 53.65625 53.660157c5.859375 5.855469 5.859375 15.355469 0 21.214843-2.925781 2.925782-6.765625 4.390626-10.605469 4.390626-3.835937 0-7.675781-1.464844-10.605468-4.390626l-64.265626-64.269531c-5.859374-5.855469-5.859374-15.351562 0-21.210937zm0 0\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"ertdgdfhs\" id=\"ticket\"> <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 455.02 455.02\" style=\"enable-background:new 0 0 455.02 455.02;\" xml:space=\"preserve\">\n      <path\n        d=\"M432.612,0H22.407c-11.046,0-20,8.954-20,20s8.954,20,20,20h21.917v410.571c0,0.984,0.61,1.865,1.53,2.212    c0.921,0.347,1.96,0.088,2.61-0.651l18.347-20.875c1.127-1.282,2.735-2.041,4.441-2.096s3.359,0.599,4.567,1.806l22.243,22.243    c2.412,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0    l22.534-22.533c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.412,2.412,6.324,2.412,8.736,0l22.534-22.533    c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.413,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0    l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0l22.188-22.188c1.216-1.216,2.885-1.87,4.603-1.805    c1.719,0.065,3.332,0.845,4.452,2.15l18.337,21.365c0.644,0.751,1.688,1.021,2.615,0.678c0.927-0.344,1.543-1.228,1.543-2.217V40    h21.918c11.046,0,20-8.954,20-20S443.658,0,432.612,0z M103.896,79.541h166.577c8.284,0,15,6.716,15,15s-6.716,15-15,15H103.896    c-8.284,0-15-6.716-15-15S95.612,79.541,103.896,79.541z M346.296,283.011H102.748c-8.284,0-15-6.716-15-15s6.716-15,15-15    h243.548c8.284,0,15,6.716,15,15S354.58,283.011,346.296,283.011z M347.444,199.148H103.896c-8.284,0-15-6.716-15-15    s6.716-15,15-15h243.548c8.284,0,15,6.716,15,15S355.728,199.148,347.444,199.148z\">\n      </path>\n    </svg>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\IMPORTANT\SourceCode\MW-Backend\MW-Backend\MW-Admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map