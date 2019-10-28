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
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/users-list/users-list.component */ "./src/app/user/users-list/users-list.component.ts");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/coupon/coupon.component.ts");
/* harmony import */ var _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/reviews/reviews.component */ "./src/app/user/reviews/reviews.component.ts");
/* harmony import */ var _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages-edit/pages-edit.component */ "./src/app/pages-edit/pages-edit.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");


















var routes = [
    { path: 'admin', component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/products', component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/product-form', component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    // { path: 'admin/product-form/:editId', component: ProductFormComponent, canActivate: [AdminGuard] },
    // { path: 'admin/product-form/:copyId', component: ProductFormComponent, canActivate: [AdminGuard] },
    { path: 'admin/orders', component: _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_8__["SupportComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/users', component: _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/coupons', component: _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_11__["CouponComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/user-reviews', component: _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_12__["ReviewsComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/edit-pages', component: _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_13__["PagesEditComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_14__["TicketsComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'admin/settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"], canActivate: [_guards_admin_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
    { path: 'error', component: _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_5__["UnexpectedErrorComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"] },
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

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"tryeuiytjfg\">\n  <app-header></app-header>\n  <div class=\"divallcontent\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/auth-interceptor */ "./src/app/common/auth-interceptor.ts");
/* harmony import */ var _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product-history/product-history.component */ "./src/app/product/product-history/product-history.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/product/product-form/product-form.component.ts");
/* harmony import */ var _services_admin_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/admin-product.service */ "./src/app/services/admin-product.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/orders/orders.component */ "./src/app/order/orders/orders.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/users-list/users-list.component */ "./src/app/user/users-list/users-list.component.ts");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/coupon/coupon.component.ts");
/* harmony import */ var _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/reviews/reviews.component */ "./src/app/user/reviews/reviews.component.ts");
/* harmony import */ var _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages-edit/pages-edit.component */ "./src/app/pages-edit/pages-edit.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _services_admin_upload_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/admin-upload.service */ "./src/app/services/admin-upload.service.ts");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__["ProductFormComponent"],
                _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_13__["ProductHistoryComponent"],
                _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_11__["UnexpectedErrorComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_18__["OrdersComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_19__["SupportComponent"],
                _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__["ProductListComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
                _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_22__["UsersListComponent"],
                _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_23__["CouponComponent"],
                _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_24__["ReviewsComponent"],
                _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_25__["PagesEditComponent"],
                _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_26__["TicketsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_28__["SettingsComponent"],
                _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmDialogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_31__["NgScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_30__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_admin_product_service__WEBPACK_IMPORTED_MODULE_15__["AdminProductService"],
                _services_admin_upload_service__WEBPACK_IMPORTED_MODULE_33__["AdminUploadService"],
                // { provide: ErrorHandler, useClass: AppErrorHandler },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/GlobalConstants.ts":
/*!*******************************************!*\
  !*** ./src/app/common/GlobalConstants.ts ***!
  \*******************************************/
/*! exports provided: FormJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormJob", function() { return FormJob; });
var FormJob = {
    Add: 'Add',
    Update: 'Update',
    Copy: 'Copy'
};


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

/***/ "./src/app/coupon/coupon.component.css":
/*!*********************************************!*\
  !*** ./src/app/coupon/coupon.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXBvbi9jb3Vwb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/coupon/coupon.component.html":
/*!**********************************************!*\
  !*** ./src/app/coupon/coupon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divcoupons\" id=\"my-coupon\">\n  <div class=\"divlabtyporeder\">\n    <label>All Coupons</label>\n    <label class=\"labdeferorder\">Active</label>\n    <label>Not Active</label>\n  </div>\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport addcoupons\">Add Coupon</label>\n    <label class=\"bottonimport\">Filter</label>\n  </div>\n\n\n  <div class=\"divaddcoupon\">\n    <div class=\"uytifsdv\">\n      <svg class=\"closeordghpaid\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n        <polygon\n          points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n        </polygon>\n      </svg>\n      <div class=\"cxbvbxvcbcv\">\n        <input class=\"uyoieztr\" type=\"date\" name=\"\" value=\"\">\n        <label>~</label>\n        <input class=\"uyoieztra\" type=\"date\" name=\"\" value=\"\">\n        <label>Percentage</label>\n        <input class=\"inputcoupon2\" type=\"text\" name=\"\" value=\"\">\n        <label class=\"fdgytre\">Limits</label>\n        <input class=\"inputcoupon\" type=\"text\" name=\"\" value=\"\">\n      </div>\n      <div class=\"fdgsgbxcb\">\n        <select class=\"selectcategorie\" name=\"\">\n          <option value=\"\">PHONE</option>\n          <option value=\"\">PC</option>\n          <option value=\"\">BABY</option>\n          <option value=\"\">HOUSE GARIENT</option>\n          <option value=\"\">CAR MOTO</option>\n        </select>\n        <select class=\"selectsubcateg\" name=\"\">\n          <option value=\"\">PHONE</option>\n          <option value=\"\">PC</option>\n          <option value=\"\">BABY</option>\n          <option value=\"\">HOUSE GARIENT</option>\n          <option value=\"\">CAR MOTO</option>\n        </select>\n        <label class=\"dsvfesfez\">Id Product</label>\n        <input class=\"inputidprodcou\" type=\"text\" name=\"\" value=\"\"> <span class=\"ezftzerfd\">Create</span>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"ytytytbv\">\n    <div class=\"checkboxtb\">\n      <label class=\"forhjqsd2\" for=\"check2\"></label>\n      <input type=\"checkbox\" id=\"check2\" required=\"\">\n      <label class=\"forhjqsd\"></label>\n    </div>\n    <div class=\"fdfdghfgh\">ID\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdfouiouu\">Coupon\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.627 511.627\"\n        style=\"enable-background:new 0 0 511.627 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M260.494,219.271H388.4c2.666,0,4.855-0.855,6.563-2.57c1.715-1.713,2.573-3.9,2.573-6.567v-54.816    c0-2.667-0.858-4.854-2.573-6.567c-1.708-1.711-3.897-2.57-6.563-2.57H260.494c-2.666,0-4.853,0.855-6.567,2.57    c-1.71,1.713-2.568,3.9-2.568,6.567v54.816c0,2.667,0.855,4.854,2.568,6.567C255.641,218.413,257.828,219.271,260.494,219.271z\">\n        </path>\n        <path\n          d=\"M260.497,73.089h73.087c2.666,0,4.856-0.855,6.563-2.568c1.718-1.714,2.563-3.901,2.563-6.567V9.136    c0-2.663-0.846-4.853-2.563-6.567C338.44,0.859,336.25,0,333.584,0h-73.087c-2.666,0-4.853,0.855-6.567,2.568    c-1.709,1.715-2.568,3.905-2.568,6.567v54.818c0,2.666,0.855,4.853,2.568,6.567C255.645,72.23,257.831,73.089,260.497,73.089z\">\n        </path>\n        <path\n          d=\"M196.54,401.991h-54.817V9.136c0-2.663-0.854-4.856-2.568-6.567C137.441,0.859,135.254,0,132.587,0H77.769    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H13.816c-4.184,0-7.04,1.902-8.564,5.708    c-1.525,3.621-0.855,6.95,1.997,9.996l91.361,91.365c2.094,1.707,4.281,2.562,6.567,2.562c2.474,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.859-4.859-2.568-6.584    C201.395,402.847,199.208,401.991,196.54,401.991z\">\n        </path>\n        <path\n          d=\"M504.604,441.109c-1.715-1.718-3.901-2.573-6.567-2.573H260.497c-2.666,0-4.853,0.855-6.567,2.573    c-1.709,1.711-2.568,3.901-2.568,6.564v54.815c0,2.673,0.855,4.853,2.568,6.571c1.715,1.711,3.901,2.566,6.567,2.566h237.539    c2.666,0,4.853-0.855,6.567-2.566c1.711-1.719,2.566-3.898,2.566-6.571v-54.815C507.173,445.011,506.314,442.82,504.604,441.109z\">\n        </path>\n        <path\n          d=\"M260.494,365.445H443.22c2.663,0,4.853-0.855,6.57-2.566c1.708-1.711,2.563-3.901,2.563-6.563v-54.823    c0-2.662-0.855-4.853-2.563-6.563c-1.718-1.711-3.907-2.566-6.57-2.566H260.494c-2.666,0-4.853,0.855-6.567,2.566    c-1.71,1.711-2.568,3.901-2.568,6.563v54.823c0,2.662,0.855,4.853,2.568,6.563C255.641,364.59,257.828,365.445,260.494,365.445z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.627 511.627\"\n        style=\"enable-background:new 0 0 511.627 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M333.584,438.536h-73.087c-2.666,0-4.853,0.855-6.567,2.573c-1.709,1.711-2.568,3.901-2.568,6.564v54.815    c0,2.673,0.855,4.853,2.568,6.571c1.715,1.711,3.901,2.566,6.567,2.566h73.087c2.666,0,4.856-0.855,6.563-2.566    c1.718-1.719,2.563-3.898,2.563-6.571v-54.815c0-2.663-0.846-4.854-2.563-6.564C338.44,439.392,336.25,438.536,333.584,438.536z\">\n        </path>\n        <path\n          d=\"M196.54,401.991h-54.817V9.136c0-2.663-0.854-4.856-2.568-6.567C137.441,0.859,135.254,0,132.587,0H77.769    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H13.816c-4.184,0-7.04,1.902-8.564,5.708    c-1.525,3.621-0.855,6.95,1.997,9.996l91.361,91.365c2.094,1.707,4.281,2.562,6.567,2.562c2.474,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.859-4.859-2.568-6.584    C201.395,402.847,199.208,401.991,196.54,401.991z\">\n        </path>\n        <path\n          d=\"M388.4,292.362H260.494c-2.666,0-4.853,0.855-6.567,2.566c-1.71,1.711-2.568,3.901-2.568,6.563v54.823    c0,2.662,0.855,4.853,2.568,6.563c1.714,1.711,3.901,2.566,6.567,2.566H388.4c2.666,0,4.855-0.855,6.563-2.566    c1.715-1.711,2.573-3.901,2.573-6.563v-54.823c0-2.662-0.858-4.853-2.573-6.563C393.256,293.218,391.066,292.362,388.4,292.362z\">\n        </path>\n        <path\n          d=\"M504.604,2.568C502.889,0.859,500.702,0,498.036,0H260.497c-2.666,0-4.853,0.855-6.567,2.568    c-1.709,1.715-2.568,3.905-2.568,6.567v54.818c0,2.666,0.855,4.853,2.568,6.567c1.715,1.709,3.901,2.568,6.567,2.568h237.539    c2.666,0,4.853-0.855,6.567-2.568c1.711-1.714,2.566-3.901,2.566-6.567V9.136C507.173,6.473,506.314,4.279,504.604,2.568z\">\n        </path>\n        <path\n          d=\"M443.22,146.181H260.494c-2.666,0-4.853,0.855-6.567,2.57c-1.71,1.713-2.568,3.9-2.568,6.567v54.816    c0,2.667,0.855,4.854,2.568,6.567c1.714,1.711,3.901,2.57,6.567,2.57H443.22c2.663,0,4.853-0.855,6.57-2.57    c1.708-1.713,2.563-3.9,2.563-6.567v-54.816c0-2.667-0.855-4.858-2.563-6.567C448.069,147.04,445.879,146.181,443.22,146.181z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdufooiuio\">Star Time\n      <svg class=\"svgatoz\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\n        </path>\n        <path\n          d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\n        </path>\n      </svg>\n      <svg class=\"svgztoa\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\n        </path>\n        <path\n          d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"uiojhljjklnb\">End Time\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdrthcxvwb\">Used</div>\n    <div class=\"drtfbbvcx\">Statue</div>\n    <div class=\"tddeytails\">Product</div>\n    <div class=\"tddefgdhils\">\n      <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n        <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n      </svg>\n    </div>\n  </div>\n  <div class=\"divallordersm\">\n    <div class=\"jklhmhgfsi\">\n\n      <table class=\"divstatueoreder\">\n        <tbody class=\"\">\n          <tr class=\"trorders\">\n            <td class=\"checkboxtb2\">\n              <label class=\"forhjqsd2\" for=\"check3\"></label>\n              <input type=\"checkbox\" id=\"check3\" required=\"\">\n              <label class=\"forhjqsd\"></label>\n            </td>\n            <td class=\"labnumorder\">44</td>\n            <td class=\"fgdercxbvf\">RING20</td>\n            <td class=\"gdfytscxbv\">02/12/2018</td>\n            <td class=\"eqrecxvcx\">08/12/2018</td>\n            <td class=\"tdmetpaiment\">25</td>\n            <td class=\"labstatueorderc\">\n              <div class=\"shipcombobox\">\n                <span class=\"medclass\">\n                  <svg class=\"svgdown\" aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"chevron-down\" role=\"img\"\n                    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" style=\"color: rgb(0, 188, 212);\">\n                    <path fill=\"currentColor\"\n                      d=\"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z\"\n                      class=\"\"></path>\n                  </svg>\n                  <span class=\"divselectship\">\n                    <div class=\"standarship\">\n                      <label class=\"typeship\">Active</label>\n                    </div>\n                  </span>\n                </span>\n                <div class=\"standarship\">\n                  <label class=\"typeship\">Active</label>\n                </div>\n                <div class=\"periotyship\">\n                  <label class=\"typeship\">Finished</label>\n                </div>\n              </div>\n            </td>\n            <td class=\"tdsvgdown\">Ring</td>\n            <td class=\"tddefgdhils\">\n              <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n                style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n                <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n              </svg>\n              <div class=\"refgdfdbfg\">\n                <svg class=\"svgdehletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                  style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                  </path>\n                </svg>\n                <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 339.75 339.75\"\n                  style=\"enable-background:new 0 0 339.75 339.75;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M215.875,169.75l114,114c13,13,13,33,0,46c-6,6-15,10-23,10s-17-4-23-10l-114-114l-114,114    c-6,6-15,10-23,10s-17-4-23-10c-13-13-13-33,0-46l114-114l-114-114c-13-13-13-33,0-46s33-13,46,0l114,114l114-114    c13-13,33-13,46,0s13,33,0,46L215.875,169.75z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/coupon/coupon.component.ts":
/*!********************************************!*\
  !*** ./src/app/coupon/coupon.component.ts ***!
  \********************************************/
/*! exports provided: CouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return CouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CouponComponent = /** @class */ (function () {
    function CouponComponent() {
    }
    CouponComponent.prototype.ngOnInit = function () {
    };
    CouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupon',
            template: __webpack_require__(/*! ./coupon.component.html */ "./src/app/coupon/coupon.component.html"),
            styles: [__webpack_require__(/*! ./coupon.component.css */ "./src/app/coupon/coupon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouponComponent);
    return CouponComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<button mat-button (click)=\"openSnackBar()\">Show snack-bar</button>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(snackbar) {
        this.snackbar = snackbar;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.openSnackBar = function () {
        this.snackbar.open('Hello Snackbar', 'Ok');
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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
    // get Qte() {
    //     if (!this.OnSale) {
    //         return 0;
    //     }
    //     return this.Quantity;
    // }
    // set Qte(value: number) {
    //     if (value === 0) {
    //         this.OnSale = false;
    //     } else this.OnSale = true;
    //     this.Quantity = value;
    // }
    function AdminProduct() {
        this.Id = 0;
        this.Color = 'white';
        this.OnSale = true;
        this.ShippingMethod = 'gearbest';
        this.Name = 'Lorem Ipsum';
        this.Price = 17;
        this.OldPrice = 23;
        this.Description = 'Some Dummy Text ..';
        this.galleryImgs = [];
        this.descImgs = [];
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

module.exports = "<div class=\"divorders\" id=\"my-order\">\n  <div class=\"divlabtyporeder\">\n    <label class=\"labdeferorder\">All Orders</label>\n    <label>Complet</label>\n    <label>Accept</label>\n    <label>Unpaid</label>\n    <label>Pending</label>\n    <label>Refunded</label>\n  </div>\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport\">Import</label>\n    <label class=\"bottonimport\">Filter</label>\n  </div>\n  <div class=\"ytytytbv\">\n    <div class=\"checkboxtb\">\n      <label class=\"forhjqsd2\" for=\"check2\"></label>\n      <input type=\"checkbox\" id=\"check2\" required=\"\">\n      <label class=\"forhjqsd\"></label>\n    </div>\n    <div class=\"fdfdghfgh\">Num\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdfouioaa\">Time\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.627 511.627\"\n        style=\"enable-background:new 0 0 511.627 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M260.494,219.271H388.4c2.666,0,4.855-0.855,6.563-2.57c1.715-1.713,2.573-3.9,2.573-6.567v-54.816    c0-2.667-0.858-4.854-2.573-6.567c-1.708-1.711-3.897-2.57-6.563-2.57H260.494c-2.666,0-4.853,0.855-6.567,2.57    c-1.71,1.713-2.568,3.9-2.568,6.567v54.816c0,2.667,0.855,4.854,2.568,6.567C255.641,218.413,257.828,219.271,260.494,219.271z\">\n        </path>\n        <path\n          d=\"M260.497,73.089h73.087c2.666,0,4.856-0.855,6.563-2.568c1.718-1.714,2.563-3.901,2.563-6.567V9.136    c0-2.663-0.846-4.853-2.563-6.567C338.44,0.859,336.25,0,333.584,0h-73.087c-2.666,0-4.853,0.855-6.567,2.568    c-1.709,1.715-2.568,3.905-2.568,6.567v54.818c0,2.666,0.855,4.853,2.568,6.567C255.645,72.23,257.831,73.089,260.497,73.089z\">\n        </path>\n        <path\n          d=\"M196.54,401.991h-54.817V9.136c0-2.663-0.854-4.856-2.568-6.567C137.441,0.859,135.254,0,132.587,0H77.769    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H13.816c-4.184,0-7.04,1.902-8.564,5.708    c-1.525,3.621-0.855,6.95,1.997,9.996l91.361,91.365c2.094,1.707,4.281,2.562,6.567,2.562c2.474,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.859-4.859-2.568-6.584    C201.395,402.847,199.208,401.991,196.54,401.991z\">\n        </path>\n        <path\n          d=\"M504.604,441.109c-1.715-1.718-3.901-2.573-6.567-2.573H260.497c-2.666,0-4.853,0.855-6.567,2.573    c-1.709,1.711-2.568,3.901-2.568,6.564v54.815c0,2.673,0.855,4.853,2.568,6.571c1.715,1.711,3.901,2.566,6.567,2.566h237.539    c2.666,0,4.853-0.855,6.567-2.566c1.711-1.719,2.566-3.898,2.566-6.571v-54.815C507.173,445.011,506.314,442.82,504.604,441.109z\">\n        </path>\n        <path\n          d=\"M260.494,365.445H443.22c2.663,0,4.853-0.855,6.57-2.566c1.708-1.711,2.563-3.901,2.563-6.563v-54.823    c0-2.662-0.855-4.853-2.563-6.563c-1.718-1.711-3.907-2.566-6.57-2.566H260.494c-2.666,0-4.853,0.855-6.567,2.566    c-1.71,1.711-2.568,3.901-2.568,6.563v54.823c0,2.662,0.855,4.853,2.568,6.563C255.641,364.59,257.828,365.445,260.494,365.445z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.627 511.627\"\n        style=\"enable-background:new 0 0 511.627 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M333.584,438.536h-73.087c-2.666,0-4.853,0.855-6.567,2.573c-1.709,1.711-2.568,3.901-2.568,6.564v54.815    c0,2.673,0.855,4.853,2.568,6.571c1.715,1.711,3.901,2.566,6.567,2.566h73.087c2.666,0,4.856-0.855,6.563-2.566    c1.718-1.719,2.563-3.898,2.563-6.571v-54.815c0-2.663-0.846-4.854-2.563-6.564C338.44,439.392,336.25,438.536,333.584,438.536z\">\n        </path>\n        <path\n          d=\"M196.54,401.991h-54.817V9.136c0-2.663-0.854-4.856-2.568-6.567C137.441,0.859,135.254,0,132.587,0H77.769    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H13.816c-4.184,0-7.04,1.902-8.564,5.708    c-1.525,3.621-0.855,6.95,1.997,9.996l91.361,91.365c2.094,1.707,4.281,2.562,6.567,2.562c2.474,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.859-4.859-2.568-6.584    C201.395,402.847,199.208,401.991,196.54,401.991z\">\n        </path>\n        <path\n          d=\"M388.4,292.362H260.494c-2.666,0-4.853,0.855-6.567,2.566c-1.71,1.711-2.568,3.901-2.568,6.563v54.823    c0,2.662,0.855,4.853,2.568,6.563c1.714,1.711,3.901,2.566,6.567,2.566H388.4c2.666,0,4.855-0.855,6.563-2.566    c1.715-1.711,2.573-3.901,2.573-6.563v-54.823c0-2.662-0.858-4.853-2.573-6.563C393.256,293.218,391.066,292.362,388.4,292.362z\">\n        </path>\n        <path\n          d=\"M504.604,2.568C502.889,0.859,500.702,0,498.036,0H260.497c-2.666,0-4.853,0.855-6.567,2.568    c-1.709,1.715-2.568,3.905-2.568,6.567v54.818c0,2.666,0.855,4.853,2.568,6.567c1.715,1.709,3.901,2.568,6.567,2.568h237.539    c2.666,0,4.853-0.855,6.567-2.568c1.711-1.714,2.566-3.901,2.566-6.567V9.136C507.173,6.473,506.314,4.279,504.604,2.568z\">\n        </path>\n        <path\n          d=\"M443.22,146.181H260.494c-2.666,0-4.853,0.855-6.567,2.57c-1.71,1.713-2.568,3.9-2.568,6.567v54.816    c0,2.667,0.855,4.854,2.568,6.567c1.714,1.711,3.901,2.57,6.567,2.57H443.22c2.663,0,4.853-0.855,6.57-2.57    c1.708-1.713,2.563-3.9,2.563-6.567v-54.816c0-2.667-0.855-4.858-2.563-6.567C448.069,147.04,445.879,146.181,443.22,146.181z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdfooiuio\">Customer\n      <svg class=\"svgatoz\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\n        </path>\n        <path\n          d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\n        </path>\n      </svg>\n      <svg class=\"svgztoa\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\n        </path>\n        <path\n          d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"uiojhljjklnb\">Total\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdrthcxvwb\">Paiment</div>\n    <div class=\"drtfbbvcx\">Statue</div>\n    <div class=\"tddetails\">Details\n    </div>\n  </div>\n  <div class=\"divallordersm\">\n    <div class=\"jklhmhgfsi\">\n      <table class=\"divstatueoreder\">\n        <tbody class=\"fjhfjjfg\">\n          <tr class=\"trorders\">\n            <td class=\"checkboxtb2\">\n              <label class=\"forhjqsd2\" for=\"check3\"></label>\n              <input type=\"checkbox\" id=\"check3\" required=\"\">\n              <label class=\"forhjqsd\"></label>\n            </td>\n            <td class=\"labnumorder\">44</td>\n            <td class=\"fgdercxbvf\">2 min ago</td>\n            <td class=\"gdfscxbv\">Med Zouine</td>\n            <td class=\"eqrecxvcx\">\n              <label class=\"labtotal\">162.45</label>\n            </td>\n            <td class=\"tdmetpaiment\">\n              <svg class=\"peorgosdfdfg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 548.176 548.176\"\n                style=\"enable-background:new 0 0 548.176 548.176;\" xml:space=\"preserve\">\n                <path\n                  d=\"M534.754,68.238c-8.945-8.945-19.698-13.417-32.258-13.417H45.681c-12.562,0-23.313,4.471-32.264,13.417    C4.471,77.185,0,87.936,0,100.499v347.173c0,12.566,4.471,23.318,13.417,32.264c8.951,8.946,19.702,13.419,32.264,13.419h456.815    c12.56,0,23.312-4.473,32.258-13.419c8.945-8.945,13.422-19.697,13.422-32.264V100.499    C548.176,87.936,543.699,77.185,534.754,68.238z M511.627,447.679c0,2.478-0.903,4.613-2.711,6.427    c-1.807,1.8-3.949,2.703-6.42,2.703H45.681c-2.473,0-4.615-0.903-6.423-2.71c-1.807-1.813-2.712-3.949-2.712-6.427V274.088    h475.082V447.679z M511.627,164.449H36.545v-63.954c0-2.474,0.902-4.611,2.712-6.423c1.809-1.803,3.951-2.708,6.423-2.708h456.815    c2.471,0,4.613,0.901,6.42,2.708c1.808,1.812,2.711,3.949,2.711,6.423V164.449L511.627,164.449z\">\n                </path>\n                <rect x=\"73.092\" y=\"383.719\" width=\"73.089\" height=\"36.548\"></rect>\n                <rect x=\"182.728\" y=\"383.719\" width=\"109.634\" height=\"36.548\"></rect>\n              </svg>\n            </td>\n            <td class=\"labstatueorderc\">\n              <div class=\"shipcombobox\">\n                <span class=\"medclass\">\n                  <svg class=\"svgdown\" aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"chevron-down\" role=\"img\"\n                    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n                    <path fill=\"currentColor\"\n                      d=\"M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z\"\n                      class=\"\"></path>\n                  </svg>\n                  <span class=\"divselectship\">\n                    <div class=\"standarship\">\n                      <label class=\"typeship\">Complet</label>\n                    </div>\n                  </span>\n                </span>\n                <div class=\"standarship\">\n                  <label class=\"typeship\">Complet</label>\n                </div>\n                <div class=\"periotyship\">\n                  <label class=\"typeship\">Pending</label>\n                </div>\n                <div class=\"fastship\">\n                  <label class=\"typeship\">Refund</label>\n                </div>\n                <div class=\"uytrty\">\n                  <label class=\"fjghjhgj\">Unpaid</label>\n                </div>\n              </div>\n            </td>\n            <td class=\"tdsvgdown\">\n              <svg class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n                style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n                <path\n                  d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n                </path>\n              </svg>\n            </td>\n          </tr>\n          <tr class=\"etrbcvfb\">\n            <td class=\"dsfgfcxvw\" colspan=\"8\">\n              <div class=\"sdfgdfgdfg\">\n                <table class=\"tabledetails\">\n                  <tbody class=\"tbodydetails\">\n                    <tr>\n                      <td class=\"dsgffdsbbvc\">IMG</td>\n                      <td class=\"dgfgcxv\">ID</td>\n                      <td class=\"tyytouiezcb\">Name</td>\n                      <td class=\"gsdfbcx\">Price</td>\n                      <td class=\"fdsgfdgxc\">Qty</td>\n                      <td class=\"dfrgsfg\">Color</td>\n                      <td class=\"dfrgsfddfg\">shipping</td>\n                      <td class=\"dfgbvcerez\">Disc</td>\n                      <td class=\"gfxwxcer\">Total</td>\n                    </tr>\n                    <tr>\n                      <td class=\"fxsdrerg\">\n                        <img class=\"imgproddet\" src=\"/Content/Images/spa1.jpg\" alt=\"\">\n                      </td>\n                      <td class=\"hjksdfqg\">454</td>\n                      <td class=\"sfdgfdghv\">\n                        <label class=\"ezrergfrvsx\">Spikes Running Shoes To Shopping Shoes</label>\n                      </td>\n                      <td class=\"fdgrefdgs\">12.54</td>\n                      <td class=\"sdfdfsgbcv\">2</td>\n                      <td class=\"sdfsqbcdv\">\n                        <div class=\"divcolortd\"></div>\n                      </td>\n                      <td class=\"cxdsgvbcv\">\n                        <label>Free</label>\n                        <label>0</label>\n                      </td>\n                      <td class=\"cxvbcv\">14</td>\n                      <td class=\"cxtredhg\">24.99</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"divtotal\">\n                  <label>Subtotal <span class=\"nbritems\">(2 items)</span>\n                  </label>\n                  <label class=\"cossubco\">56.81</label>\n                  <br>\n                  <br>\n                  <label>Shipping</label>\n                  <label class=\"shipsubcost\">0</label>\n                  <br>\n                  <br>\n                  <label>Total</label>\n                  <label class=\"tottotcost\">56.81</label>\n                </div>\n              </div>\n              <div class=\"divmoreinfoor\">\n                <label class=\"fhdgtrhyez\">02/12/2018 12:12:25</label>\n                <br>\n                <label class=\"fkdsfzze\">More Details</label>\n                <div class=\"ergsdcxv\">\n                  <div class=\"divoldaddress\">\n                    <div class=\"labnumberadd\">Address 1</div>\n                    <label class=\"laboldaddr\">medzouine@gmail.com</label>\n                    <label class=\"laboldaddr\">Mohamed Zouine</label>\n                    <label class=\"laboldaddr\">zagora hey el manssour eddehbi rue jbel azlag</label>\n                    <label class=\"laboldaddr\">Morocco</label>\n                    <label class=\"laboldaddr\">Zagora</label>\n                    <label class=\"laboldaddr\">451236</label>\n                    <label class=\"laboldaddr\">0621548798</label>\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/pages-edit/pages-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages-edit/pages-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLWVkaXQvcGFnZXMtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages-edit/pages-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages-edit/pages-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divallpages\" id=\"my-allpages\">\n  <div class=\"ytytytbv\">\n    <div class=\"fdgdfouio\">Image</div>\n    <div class=\"fdgvbcooiuio\">Page\n      <svg class=\"svgatoz\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\n        </path>\n        <path\n          d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\n        </path>\n      </svg>\n      <svg class=\"svgztoa\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\n        </path>\n        <path\n          d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"dfghhvqsdf\">Last Modify</div>\n    <div class=\"fdrhhthcxvwb\">Views\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdrthchhxvwb\">Size\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"tddefgdhfils\">\n      <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n        <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n      </svg>\n    </div>\n    <div class=\"tddetails\">Details</div>\n  </div>\n  <div class=\"divallordersm2\">\n    <div class=\"jklhmhgfsi\">\n      <table class=\"divstatueoreder\">\n        <tbody class=\"\">\n          <tr class=\"trorders\">\n            <td class=\"fgderfcxbvf\">\n              <svg class=\"fileallp\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\"\n                xml:space=\"preserve\">\n                <path\n                  d=\"M14,23.5c-0.254,0-0.479,0.172-0.545,0.417L2,52.5v1c0,0.734-0.047,1,0.565,1h44.759c1.156,0,2.174-0.779,2.45-1.813   L60,24.5c0,0,0-0.625,0-1H14z\">\n                </path>\n                <path\n                  d=\"M12.731,21.5H53h1v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v41.796   l10.282-26.717C10.557,22.279,11.575,21.5,12.731,21.5z\">\n                </path>\n              </svg>\n            </td>\n            <td class=\"gdfscdxbtv\">Home</td>\n            <td class=\"dfgvxwqsdf\">23/01/2019</td>\n            <td class=\"gdfsgcxthbv\">1503</td>\n            <td class=\"tdmeviewyent\">56</td>\n            <td class=\"tddefgdhfhils\">\n              <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n                style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n                <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n              </svg>\n              <div class=\"refgdfdbfg\">\n                <svg class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                  style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                  width=\"427pt\">\n                  <path\n                    d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                  </path>\n                  <path\n                    d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                  style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\"\n                  style=\"enable-background:new 0 0 54.971 54.971;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n                  </path>\n                  <path\n                    d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n                  </path>\n                  <path\n                    d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n                  </path>\n                  <path\n                    d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n                  </path>\n                  <path\n                    d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n                  </path>\n                  <path\n                    d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n                  </path>\n                  <path\n                    d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n                  </path>\n                  <path\n                    d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"tdsvgdown\">\n              <svg class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n                style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n                <path\n                  d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n                </path>\n              </svg>\n            </td>\n          </tr>\n          <tr class=\"etrbcvfb moredetails\">\n            <td class=\"ezrfsddqs\" colspan=\"7\">\n              <div class=\"uytroiuy\">\n                <table class=\"fdgsggfdre\">\n                  <tbody class=\"dfgsdfg\">\n                    <tr class=\"dfsgdfgfdg\">\n                      <td class=\"hfdghhvcf\">\n                        <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\"\n                          xml:space=\"preserve\">\n                          <path\n                            d=\"M50.949,12.187l-1.361-1.361l-9.504-9.505c-0.001-0.001-0.001-0.001-0.001-0.001l-0.771-0.771   C38.957,0.195,38.486,0,37.985,0H8.963C7.776,0,6.5,0.916,6.5,2.926V39v16.537V56c0,0.837,0.841,1.652,1.836,1.909   c0.051,0.014,0.1,0.033,0.152,0.043C8.644,57.983,8.803,58,8.963,58h40.074c0.16,0,0.319-0.017,0.475-0.048   c0.052-0.01,0.101-0.029,0.152-0.043C50.659,57.652,51.5,56.837,51.5,56v-0.463V39V13.978C51.5,13.211,51.407,12.644,50.949,12.187   z M39.5,3.565L47.935,12H39.5V3.565z M8.963,56c-0.071,0-0.135-0.025-0.198-0.049C8.61,55.877,8.5,55.721,8.5,55.537V41h41v14.537   c0,0.184-0.11,0.34-0.265,0.414C49.172,55.975,49.108,56,49.037,56H8.963z M8.5,39V2.926C8.5,2.709,8.533,2,8.963,2h28.595   C37.525,2.126,37.5,2.256,37.5,2.391V14h11.608c0.135,0,0.265-0.025,0.391-0.058c0,0.015,0.001,0.021,0.001,0.036V39H8.5z\">\n                          </path>\n                          <polygon\n                            points=\"16.814,48.34 12.453,48.34 12.453,43.924 10.785,43.924 10.785,54 12.453,54 12.453,49.461 16.814,49.461    16.814,54 18.455,54 18.455,43.924 16.814,43.924  \">\n                          </polygon>\n                          <polygon\n                            points=\"20.438,45.045 23.445,45.045 23.445,54 25.1,54 25.1,45.045 28.107,45.045 28.107,43.924 20.438,43.924  \">\n                          </polygon>\n                          <polygon\n                            points=\"34.725,50.814 31.73,43.924 30.063,43.924 30.063,54 31.73,54 31.73,47.068 34,52.674 35.449,52.674    37.705,47.068 37.705,54 39.373,54 39.373,43.924 37.705,43.924  \">\n                          </polygon>\n                          <polygon points=\"43.57,43.924 41.902,43.924 41.902,54 48.205,54 48.205,52.756 43.57,52.756  \">\n                          </polygon>\n                          <path\n                            d=\"M24.207,17.293c-0.391-0.391-1.023-0.391-1.414,0l-6,6c-0.391,0.391-0.391,1.023,0,1.414l6,6   C22.988,30.902,23.244,31,23.5,31s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L18.914,24l5.293-5.293   C24.598,18.316,24.598,17.684,24.207,17.293z\">\n                          </path>\n                          <path\n                            d=\"M36.207,17.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L40.086,24l-5.293,5.293   c-0.391,0.391-0.391,1.023,0,1.414C34.988,30.902,35.244,31,35.5,31s0.512-0.098,0.707-0.293l6-6c0.391-0.391,0.391-1.023,0-1.414   L36.207,17.293z\">\n                          </path>\n                        </svg>\n                      </td>\n                      <td class=\"hfdghfcf\">Home.html</td>\n                      <td class=\"hfdgghcf\">25/05/2019</td>\n                      <td class=\"hfdcdxghcf\">12</td>\n                    </tr>\n                    <tr class=\"dfsgdfgfdg\">\n                      <td class=\"hfdghhvcf\">\n                        <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\"\n                          xml:space=\"preserve\">\n                          <path\n                            d=\"M50.949,12.187l-1.361-1.361l-9.504-9.505c-0.001-0.001-0.001-0.001-0.002-0.001l-0.77-0.771   C38.957,0.195,38.486,0,37.985,0H8.963C7.776,0,6.5,0.916,6.5,2.926V39v16.537V56c0,0.837,0.841,1.652,1.836,1.909   c0.051,0.014,0.1,0.033,0.152,0.043C8.644,57.983,8.803,58,8.963,58h40.074c0.16,0,0.319-0.017,0.475-0.048   c0.052-0.01,0.101-0.029,0.152-0.043C50.659,57.652,51.5,56.837,51.5,56v-0.463V39V13.978C51.5,13.211,51.407,12.644,50.949,12.187   z M39.5,3.565L47.935,12H39.5V3.565z M8.963,56c-0.071,0-0.135-0.025-0.198-0.049C8.61,55.877,8.5,55.721,8.5,55.537V41h41v14.537   c0,0.184-0.11,0.34-0.265,0.414C49.172,55.975,49.108,56,49.037,56H8.963z M8.5,39V2.926C8.5,2.709,8.533,2,8.963,2h28.595   C37.525,2.126,37.5,2.256,37.5,2.391V13.78c-0.532-0.48-1.229-0.78-2-0.78c-0.553,0-1,0.448-1,1s0.447,1,1,1c0.552,0,1,0.449,1,1v4   c0,1.2,0.542,2.266,1.382,3c-0.84,0.734-1.382,1.8-1.382,3v4c0,0.551-0.448,1-1,1c-0.553,0-1,0.448-1,1s0.447,1,1,1   c1.654,0,3-1.346,3-3v-4c0-1.103,0.897-2,2-2c0.553,0,1-0.448,1-1s-0.447-1-1-1c-1.103,0-2-0.897-2-2v-4   c0-0.771-0.301-1.468-0.78-2h11.389c0.135,0,0.265-0.025,0.391-0.058c0,0.015,0.001,0.021,0.001,0.036V39H8.5z\">\n                          </path>\n                          <path\n                            d=\"M20.034,45.954c0.241-0.306,0.515-0.521,0.82-0.649s0.627-0.191,0.964-0.191c0.301,0,0.59,0.06,0.868,0.178   s0.531,0.31,0.759,0.574l1.135-1.012c-0.374-0.364-0.798-0.638-1.271-0.82s-0.984-0.273-1.531-0.273   c-0.593,0-1.144,0.111-1.654,0.335s-0.955,0.549-1.333,0.978s-0.675,0.964-0.889,1.606c-0.214,0.643-0.321,1.388-0.321,2.235   s0.107,1.595,0.321,2.242c0.214,0.647,0.511,1.185,0.889,1.613s0.82,0.752,1.326,0.971s1.06,0.328,1.661,0.328   c0.547,0,1.058-0.091,1.531-0.273s0.897-0.456,1.271-0.82l-1.135-0.998c-0.237,0.265-0.499,0.456-0.786,0.574   s-0.595,0.178-0.923,0.178s-0.641-0.07-0.937-0.212s-0.561-0.364-0.793-0.67s-0.415-0.699-0.547-1.183s-0.203-1.066-0.212-1.75   c0.009-0.702,0.082-1.294,0.219-1.777S19.793,46.26,20.034,45.954z\">\n                          </path>\n                          <path\n                            d=\"M31.532,49.064c-0.314-0.228-0.654-0.422-1.019-0.581s-0.702-0.323-1.012-0.492s-0.569-0.364-0.779-0.588   s-0.314-0.518-0.314-0.882c0-0.146,0.036-0.299,0.109-0.458s0.173-0.303,0.301-0.431s0.273-0.234,0.438-0.321   s0.337-0.139,0.52-0.157c0.328-0.027,0.597-0.032,0.807-0.014s0.378,0.05,0.506,0.096s0.226,0.091,0.294,0.137   s0.13,0.082,0.185,0.109c0.009-0.009,0.036-0.055,0.082-0.137s0.101-0.185,0.164-0.308c0.064-0.123,0.132-0.255,0.205-0.396   s0.137-0.271,0.191-0.39c-0.265-0.173-0.61-0.299-1.039-0.376s-0.853-0.116-1.271-0.116c-0.41,0-0.8,0.063-1.169,0.191   s-0.692,0.313-0.971,0.554s-0.499,0.535-0.663,0.882s-0.246,0.743-0.246,1.189c0,0.492,0.104,0.902,0.314,1.23   s0.474,0.613,0.793,0.854s0.661,0.451,1.025,0.629s0.704,0.355,1.019,0.533s0.576,0.376,0.786,0.595s0.314,0.483,0.314,0.793   c0,0.511-0.148,0.896-0.444,1.155s-0.723,0.39-1.278,0.39c-0.183,0-0.378-0.019-0.588-0.055s-0.419-0.084-0.629-0.144   s-0.412-0.123-0.608-0.191s-0.357-0.139-0.485-0.212l-0.287,1.176c0.155,0.137,0.34,0.253,0.554,0.349s0.439,0.171,0.677,0.226   s0.472,0.094,0.704,0.116s0.458,0.034,0.677,0.034c0.511,0,0.966-0.077,1.367-0.232s0.738-0.362,1.012-0.622   s0.485-0.561,0.636-0.902s0.226-0.695,0.226-1.06c0-0.538-0.104-0.978-0.314-1.319S31.847,49.292,31.532,49.064z\">\n                          </path>\n                          <path\n                            d=\"M38.942,49.064c-0.314-0.228-0.654-0.422-1.019-0.581s-0.702-0.323-1.012-0.492s-0.569-0.364-0.779-0.588   s-0.314-0.518-0.314-0.882c0-0.146,0.036-0.299,0.109-0.458s0.173-0.303,0.301-0.431s0.273-0.234,0.438-0.321   s0.337-0.139,0.52-0.157c0.328-0.027,0.597-0.032,0.807-0.014s0.378,0.05,0.506,0.096s0.226,0.091,0.294,0.137   s0.13,0.082,0.185,0.109c0.009-0.009,0.036-0.055,0.082-0.137s0.101-0.185,0.164-0.308s0.132-0.255,0.205-0.396   s0.137-0.271,0.191-0.39c-0.265-0.173-0.61-0.299-1.039-0.376s-0.853-0.116-1.271-0.116c-0.41,0-0.8,0.063-1.169,0.191   s-0.692,0.313-0.971,0.554s-0.499,0.535-0.663,0.882s-0.246,0.743-0.246,1.189c0,0.492,0.104,0.902,0.314,1.23   s0.474,0.613,0.793,0.854s0.661,0.451,1.025,0.629s0.704,0.355,1.019,0.533s0.576,0.376,0.786,0.595s0.314,0.483,0.314,0.793   c0,0.511-0.148,0.896-0.444,1.155s-0.723,0.39-1.278,0.39c-0.183,0-0.378-0.019-0.588-0.055s-0.419-0.084-0.629-0.144   s-0.412-0.123-0.608-0.191s-0.357-0.139-0.485-0.212l-0.287,1.176c0.155,0.137,0.34,0.253,0.554,0.349s0.439,0.171,0.677,0.226   s0.472,0.094,0.704,0.116s0.458,0.034,0.677,0.034c0.511,0,0.966-0.077,1.367-0.232s0.738-0.362,1.012-0.622   s0.485-0.561,0.636-0.902s0.226-0.695,0.226-1.06c0-0.538-0.104-0.978-0.314-1.319S39.257,49.292,38.942,49.064z\">\n                          </path>\n                          <path\n                            d=\"M20.5,20v-4c0-0.551,0.448-1,1-1c0.553,0,1-0.448,1-1s-0.447-1-1-1c-1.654,0-3,1.346-3,3v4c0,1.103-0.897,2-2,2   c-0.553,0-1,0.448-1,1s0.447,1,1,1c1.103,0,2,0.897,2,2v4c0,1.654,1.346,3,3,3c0.553,0,1-0.448,1-1s-0.447-1-1-1   c-0.552,0-1-0.449-1-1v-4c0-1.2-0.542-2.266-1.382-3C19.958,22.266,20.5,21.2,20.5,20z\">\n                          </path>\n                        </svg>\n                      </td>\n                      <td class=\"hfdghfcf\">Home.css</td>\n                      <td class=\"hfdgghcf\">02/11/2019</td>\n                      <td class=\"hfdcdxghcf\">43</td>\n                    </tr>\n                    <tr class=\"dfsgdfgfdg\">\n                      <td class=\"hfdghhvcf\">\n                        <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\"\n                          xml:space=\"preserve\">\n                          <path\n                            d=\"M50.949,12.187l-1.361-1.361l-9.504-9.505c-0.001-0.001-0.001-0.001-0.001-0.001l-0.771-0.771   C38.957,0.195,38.486,0,37.985,0H8.963C7.776,0,6.5,0.916,6.5,2.926V39v16.537V56c0,0.837,0.841,1.652,1.836,1.909   c0.051,0.014,0.1,0.033,0.152,0.043C8.644,57.983,8.803,58,8.963,58h40.074c0.16,0,0.319-0.017,0.475-0.048   c0.052-0.01,0.101-0.029,0.152-0.043C50.659,57.652,51.5,56.837,51.5,56v-0.463V39V13.978C51.5,13.211,51.407,12.644,50.949,12.187   z M39.5,3.565L47.935,12H39.5V3.565z M8.963,56c-0.071,0-0.135-0.025-0.198-0.049C8.61,55.877,8.5,55.721,8.5,55.537V41h41v14.537   c0,0.184-0.11,0.34-0.265,0.414C49.172,55.975,49.108,56,49.037,56H8.963z M8.5,39V2.926C8.5,2.709,8.533,2,8.963,2h28.595   C37.525,2.126,37.5,2.256,37.5,2.391V13.78c-0.532-0.48-1.229-0.78-2-0.78c-0.553,0-1,0.448-1,1s0.447,1,1,1c0.552,0,1,0.449,1,1v4   c0,1.2,0.542,2.266,1.382,3c-0.84,0.734-1.382,1.8-1.382,3v4c0,0.551-0.448,1-1,1c-0.553,0-1,0.448-1,1s0.447,1,1,1   c1.654,0,3-1.346,3-3v-4c0-1.103,0.897-2,2-2c0.553,0,1-0.448,1-1s-0.447-1-1-1c-1.103,0-2-0.897-2-2v-4   c0-0.771-0.301-1.468-0.78-2h11.389c0.135,0,0.265-0.025,0.391-0.058c0,0.015,0.001,0.021,0.001,0.036V39H8.5z\">\n                          </path>\n                          <path\n                            d=\"M25.354,51.43c-0.019,0.446-0.171,0.764-0.458,0.95s-0.673,0.28-1.155,0.28c-0.191,0-0.396-0.022-0.615-0.068   s-0.429-0.098-0.629-0.157c-0.201-0.06-0.385-0.123-0.554-0.191s-0.299-0.135-0.39-0.198l-0.697,1.107   c0.182,0.137,0.405,0.26,0.67,0.369c0.264,0.109,0.54,0.207,0.827,0.294s0.565,0.15,0.834,0.191s0.503,0.062,0.704,0.062   c0.4,0,0.791-0.039,1.169-0.116s0.713-0.214,1.005-0.41c0.291-0.196,0.523-0.456,0.697-0.779c0.173-0.323,0.26-0.723,0.26-1.196   v-7.848h-1.668V51.43z\">\n                          </path>\n                          <path\n                            d=\"M34.083,49.064c-0.314-0.228-0.654-0.422-1.019-0.581c-0.365-0.159-0.702-0.323-1.012-0.492   c-0.311-0.169-0.57-0.364-0.779-0.588c-0.21-0.224-0.314-0.518-0.314-0.882c0-0.146,0.036-0.299,0.109-0.458   c0.072-0.159,0.173-0.303,0.301-0.431c0.127-0.128,0.273-0.234,0.438-0.321s0.337-0.139,0.52-0.157   c0.328-0.027,0.597-0.032,0.807-0.014c0.209,0.019,0.378,0.05,0.506,0.096c0.127,0.046,0.226,0.091,0.294,0.137   s0.13,0.082,0.185,0.109c0.009-0.009,0.036-0.055,0.082-0.137c0.045-0.082,0.1-0.185,0.164-0.308   c0.063-0.123,0.132-0.255,0.205-0.396c0.072-0.142,0.137-0.271,0.191-0.39c-0.265-0.173-0.611-0.299-1.039-0.376   c-0.429-0.077-0.853-0.116-1.271-0.116c-0.41,0-0.8,0.063-1.169,0.191s-0.692,0.313-0.971,0.554s-0.499,0.535-0.663,0.882   S29.4,46.13,29.4,46.576c0,0.492,0.104,0.902,0.314,1.23c0.209,0.328,0.474,0.613,0.793,0.854c0.318,0.241,0.66,0.451,1.025,0.629   c0.364,0.178,0.704,0.355,1.019,0.533s0.576,0.376,0.786,0.595c0.209,0.219,0.314,0.483,0.314,0.793   c0,0.511-0.148,0.896-0.444,1.155s-0.723,0.39-1.278,0.39c-0.183,0-0.379-0.019-0.588-0.055c-0.21-0.036-0.42-0.084-0.629-0.144   c-0.21-0.06-0.412-0.123-0.608-0.191s-0.358-0.139-0.485-0.212l-0.287,1.176c0.154,0.137,0.34,0.253,0.554,0.349   s0.439,0.171,0.677,0.226c0.236,0.055,0.472,0.094,0.704,0.116s0.458,0.034,0.677,0.034c0.51,0,0.966-0.077,1.367-0.232   c0.4-0.155,0.738-0.362,1.012-0.622s0.485-0.561,0.636-0.902s0.226-0.695,0.226-1.06c0-0.538-0.105-0.978-0.314-1.319   C34.659,49.577,34.397,49.292,34.083,49.064z\">\n                          </path>\n                          <path\n                            d=\"M20.5,20v-4c0-0.551,0.448-1,1-1c0.553,0,1-0.448,1-1s-0.447-1-1-1c-1.654,0-3,1.346-3,3v4c0,1.103-0.897,2-2,2   c-0.553,0-1,0.448-1,1s0.447,1,1,1c1.103,0,2,0.897,2,2v4c0,1.654,1.346,3,3,3c0.553,0,1-0.448,1-1s-0.447-1-1-1   c-0.552,0-1-0.449-1-1v-4c0-1.2-0.542-2.266-1.382-3C19.958,22.266,20.5,21.2,20.5,20z\">\n                          </path>\n                          <circle cx=\"28.5\" cy=\"19.5\" r=\"1.5\"></circle>\n                          <path\n                            d=\"M28.5,25c-0.553,0-1,0.448-1,1v3c0,0.552,0.447,1,1,1s1-0.448,1-1v-3C29.5,25.448,29.053,25,28.5,25z\">\n                          </path>\n                        </svg>\n                      </td>\n                      <td class=\"hfdghfcf\">Home.js</td>\n                      <td class=\"hfdgghcf\">15/04/2019</td>\n                      <td class=\"hfdcdxghcf\">4</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages-edit/pages-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages-edit/pages-edit.component.ts ***!
  \****************************************************/
/*! exports provided: PagesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesEditComponent", function() { return PagesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesEditComponent = /** @class */ (function () {
    function PagesEditComponent() {
    }
    PagesEditComponent.prototype.ngOnInit = function () {
    };
    PagesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages-edit',
            template: __webpack_require__(/*! ./pages-edit.component.html */ "./src/app/pages-edit/pages-edit.component.html"),
            styles: [__webpack_require__(/*! ./pages-edit.component.css */ "./src/app/pages-edit/pages-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesEditComponent);
    return PagesEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-form/product-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1mb3JtL3Byb2R1Y3QtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-form/product-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divaddproduct\" id=\"my-addproduct\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n    <input type=\"hidden\" [(ngModel)]=\"_Product.Id\" name=\"Id\" #Id=\"ngModel\">\n    <div class=\"divtitleprod\">\n\n      <label>Source</label>\n      <input id=\"inpulien\" required minlength=\"6\" type=\"text\" name=\"SourceLink\" placeholder=\"https://example.io\">\n\n      <label>Name</label>\n      <input id=\"inputtitle\" required minlength=\"6\" type=\"text\" [(ngModel)]=\"_Product.Name\" name=\"Name\" #Name=\"ngModel\">\n\n      <label>Price</label>\n      <input class=\"inputprice\" required maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.Price\" name=\"Price\"\n        #Price=\"ngModel\">\n\n      <svg *ngIf=\"!expand\" (click)=\"expand = true\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 286.376 286.376\"\n        style=\"enable-background:new 0 0 286.376 286.376;\" xml:space=\"preserve\">\n        <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n          d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\">\n        </path>\n      </svg>\n\n      <ng-container *ngIf=\"expand\">\n\n        <label>Old Price</label>\n        <input class=\"inputprice\" maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.OldPrice\" name=\"OldPrice\"\n          #OldPrice=\"ngModel\">\n        <svg (click)=\"expand = false\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\"\n          style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n          <polygon\n            points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n          </polygon>\n        </svg>\n\n      </ng-container>\n\n    </div>\n\n    <div class=\"divimageproduct\">\n      <!-- Edit existing product images -->\n      <ng-container *ngIf=\"_Product.Id > 0 || copyingId > 0 ; else addingProduct1\">\n        <div (click)=\"mainImg.click()\" class=\"divmainimageprod\">\n          <input #mainImg type=\"file\" name=\"MainImg\" ngModel (change)=\"setMainImage($event.target.files)\">\n          <img *ngIf=\"_Product.mainImg && !imgPath && !mainImgFromCopy\" src=\"/Content/Images/Products/{{(_Product.Id > 0) ? _Product.Id : copyingId }}/Main/{{_Product.mainImg}}\" class=\"mainimage\">\n          \n          <img *ngIf=\" imgPath && !mainImgFromCopy\" [src]=\"imgPath\" class=\"mainimage halfOpacity\">\n        \n          <img *ngIf=\" mainImgFromCopy \" \n          src=\"/Content/Images/Products/{{ copyingId }}/Gallery/{{mainImgFromCopy}}\"\n          class=\"mainimage halfOpacity\">\n\n          <!-- <ng-template #noImage>\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgplusimage\" enable-background=\"new 0 0 1000 1000\"\n              version=\"1.1\" viewBox=\"0 0 1000 1000\" x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path _ngcontent-c3=\"\" d=\"M383.6,313.6\"></path>\n              <path _ngcontent-c3=\"\"\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </ng-template> -->\n        </div>\n\n        <div class=\"divmoreimage\">\n          <div (click)=\"galleryImgs.click()\" class=\"roidfudsdxv\">\n            <input [disabled]=\"(GalleryImgs.length + _Product.galleryImgs.length) === _maxG\" #galleryImgs type=\"file\" accept=\"image/*\" name=\"GalleryImgs\" \n              multiple (change)=\"addGalleryImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n              xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n\n          <ng-container *ngFor=\"let item of _Product.galleryImgs\">\n            <div class=\"roidfudsdxv\">\n              <div class=\"rytfhgqsfez\">\n                <svg (click)=\"asMainImageServer(item)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.937 45.937\"\n                  style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                  </path>\n                </svg>\n                <svg (click)=\"removeGalleryImageServer(item)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\"\n                  xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimage\" src=\"/Content/Images/Products/{{(_Product.Id > 0) ? _Product.Id : copyingId}}/Gallery/{{item}}\">\n            </div>\n          </ng-container>\n\n          <ng-container *ngFor=\"let item of GalleryImgs\">\n            <div class=\"roidfudsdxv halfOpacity\">\n              <div class=\"rytfhgqsfez\">\n                <svg (click)=\"asMainImagePlus(item.img)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.937 45.937\"\n                  style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                  </path>\n                </svg>\n                <svg (click)=\"removeGalleryImage(item.name)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                  viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimage\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n\n        </div>\n      </ng-container>\n      <!-- add images for new product  -->\n      <ng-template #addingProduct1>\n        <div (click)=\"mainImg.click()\" class=\"divmainimageprod\">\n          <input #mainImg type=\"file\" name=\"MainImg\" ngModel (change)=\"setMainImage($event.target.files)\">\n          <img *ngIf=\"imgPath; else noImage \" [src]=\"imgPath\" class=\"mainimage\">\n          <ng-template #noImage>\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgplusimage\" enable-background=\"new 0 0 1000 1000\"\n              version=\"1.1\" viewBox=\"0 0 1000 1000\" x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path _ngcontent-c3=\"\" d=\"M383.6,313.6\"></path>\n              <path _ngcontent-c3=\"\"\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </ng-template>\n        </div>\n\n        <div class=\"divmoreimage\">\n          <div (click)=\"galleryImgs.click()\" class=\"roidfudsdxv\">\n            <input [disabled]=\"(GalleryImgs.length + _Product.galleryImgs.length) === _maxG\" #galleryImgs type=\"file\" accept=\"image/*\"\n              name=\"GalleryImgs\" ngModel multiple (change)=\"addGalleryImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\"\n              enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n\n          <ng-container *ngFor=\"let item of GalleryImgs\">\n            <div class=\"roidfudsdxv\">\n              <div class=\"rytfhgqsfez\">\n                <svg (click)=\"asMainImage(item.img)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                  viewBox=\"0 0 45.937 45.937\" style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                  </path>\n                </svg>\n                <svg (click)=\"removeGalleryImage(item.name)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                  viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimage\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n\n        </div>\n      </ng-template>\n\n      <div class=\"divcolorproduct\">\n        <div class=\"lijksdfgdsvc\">\n\n          <mat-radio-group [(ngModel)]=\"_Product.Color\" name=\"Color\">\n            <div [ngStyle]=\"{'background': 'var(--'+ item + ')'  }\" *ngFor=\"let item of colors\" class=\"colorbox\">\n              <mat-radio-button [disabled]=\" hasNoColor \" [value]=\"item\"></mat-radio-button>\n            </div>\n          </mat-radio-group>\n          <div class=\"noColor\">\n            <mat-checkbox (change)=\"setNoColor()\" name=\"hasNoColor\" [(ngModel)]=\"hasNoColor\">No Color</mat-checkbox>\n          </div>\n          <!-- <mat-select  #colorSelect (selectionChange)=\"mixedColor(colorSelect)\" >\n              <div [ngStyle]=\"{'background': 'var(--'+ item + ')'  }\" *ngFor=\"let item of colors\" class=\"colorbox\">\n                <mat-option [value]=\"item\"></mat-option>\n              </div>\n            </mat-select> -->\n\n        </div>\n      </div>\n\n      <div class=\"divcategproduct\">\n        <div class=\"iofdgljkgfd\">\n\n          <div class=\"selectsubcateg1\">\n            <mat-select disableOptionCentering #Category (selectionChange)=\"getSub(Category.value, true)\"\n              name=\"CategoryId\" required [(ngModel)]=\"_Product.CategoryId\" placeholder=\"Category\"\n              panelClass=\"select-panel\">\n              <mat-option *ngFor=\"let item of categories\" [value]=\"item.Id\">{{item.Name}}</mat-option>\n            </mat-select>\n          </div>\n\n          <div class=\"selectsubcateg1\">\n            <mat-select disableOptionCentering name=\"SubCategoryId\" required [(ngModel)]=\"_Product.SubCategoryId\"\n              placeholder=\"SubCategory\" panelClass=\"select-panel\">\n              <mat-option *ngFor=\"let item of subCategories\" [value]=\"item.Id\">{{item.Name}}</mat-option>\n            </mat-select>\n          </div>\n\n\n          <div class=\"labplustype\">\n            <svg class=\"svgpluytrice\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 286.376 286.376\" xml:space=\"preserve\">\n              <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n                d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\">\n              </path>\n            </svg>\n            <label class=\"dfgcbxvc\">Option</label>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"divdecription\">\n      <div class=\"textareaWrapper\">\n        <ng-scrollbar [shown]=\"'always'\" class=\"txtareacontent\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\n          <textarea matInput cdkTextareaAutosize required [(ngModel)]=\"_Product.Description\" name=\"Description\"\n            #des=\"ngModel\"></textarea>\n        </ng-scrollbar>\n      </div>\n\n      <div class=\"divimagedescr\">\n        <!-- Edit existing images  -->\n        <ng-container *ngIf=\"_Product.Id > 0 || copyingId; else addingProduct2\">\n          <div (click)=\"descImgs.click()\" class=\"uopietter\">\n            <input [disabled]=\"(DescImgs.length + _Product.descImgs.length) === _maxD\" #descImgs type=\"file\" accept=\"image/*\" name=\"DescImgs\"  multiple\n              (change)=\"addDescImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n              xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n\n          <ng-container *ngFor=\"let item of _Product.descImgs\">\n            <div class=\"uopietter\">\n              <div (click)=\"removeDescImageServer(item)\" class=\"rytfhgqsfez\">\n                <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimagedescr\" src=\"/Content/Images/Products/{{(_Product.Id > 0) ? _Product.Id : copyingId}}/Desc/{{item}}\">\n            </div>\n          </ng-container>\n\n          <ng-container *ngFor=\"let item of DescImgs\">\n            <div class=\"uopietter halfOpacity\">\n              <div (click)=\"removeDescImage(item.name)\" class=\"rytfhgqsfez\">\n                <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimagedescr\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n          \n        </ng-container>\n\n        <!-- Adding Product images  -->\n        <ng-template #addingProduct2>\n          <div (click)=\"descImgs.click()\" class=\"uopietter\">\n            <input [disabled]=\"(DescImgs.length + _Product.descImgs.length) === _maxD\" #descImgs type=\"file\" accept=\"image/*\" name=\"DescImgs\" ngModel multiple\n              (change)=\"addDescImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n              xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n          <ng-container *ngFor=\"let item of DescImgs\">\n            <div class=\"uopietter\">\n              <div (click)=\"removeDescImage(item.name)\" class=\"rytfhgqsfez\">\n                <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimagedescr\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n        </ng-template>\n\n        \n      </div>\n\n      <div class=\"divshipping\">\n        <div class=\"uytuytyuuy\">\n          <label class=\"labshipping\">Shipping</label>\n          <mat-radio-group [(ngModel)]=\"_Product.ShippingMethod\" name=\"ShippingMethod\">\n            <div class=\"eryttyyhy\">\n              <mat-radio-button value=\"gearbest\">Gearbest</mat-radio-button>\n            </div>\n            <div class=\"eryttyyhy\">\n              <mat-radio-button value=\"aliexpress\">Aliexpress</mat-radio-button>\n            </div>\n          </mat-radio-group>\n          <div _ngcontent-c3=\"\" class=\"labplustype\">\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgpluytrice\" version=\"1.1\" viewBox=\"0 0 286.376 286.376\"\n              x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\"\n                style=\"fill-rule:evenodd;clip-rule:evenodd;\"></path>\n            </svg>\n            <label _ngcontent-c3=\"\" class=\"dfgcbxvc\">Option</label></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"formFooter\">\n      <div class=\"divtitleprod lastdiv\">\n\n        <label>Quantity</label>\n        <input (blur)=\"QteBlured()\" min=\"0\" placeholder=\"NULL\" class=\"inputprice\" maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.Quantity\"\n          name=\"Quantity\">\n\n        <label>On Sale</label>\n        <div class=\"switch1\" [ngClass]=\"{'switchadd1': _Product.OnSale}\">\n          <input (change)=\"OnsaleChanged()\" name=\"OnSale\" [(ngModel)]=\"_Product.OnSale\" #OnSale=\"ngModel\" id=\"checkanimat1\" type=\"checkbox\">\n          <div class=\"switch2\" [ngClass]=\"{'switchadd2': _Product.OnSale}\"></div>\n        </div>\n\n      </div>\n\n      <!-- <div class=\"bottonaddprod mgLeft\" (click)=\"onSubmit(f)\">\n        {{ (_Product.Id > 0) ? 'Update' : 'Add Product' }}\n      </div> -->\n      <div class=\"bottonaddprod mgLeft\" (click)=\"onSubmit(f)\">\n        {{ _formJob + ' Product'}}\n      </div>\n\n      <div class=\"bottonaddprod\" (click)=\"Reset()\">\n        Reset\n      </div>\n    </div>\n    <div class=\"alert\">\n      _Product.mainImg: {{ _Product.mainImg ?_Product.mainImg: \"no\"}} / \n      imgPath: {{ imgPath ? \"yes\" : \"no\"}} / \n      mainImgFromCopy: {{ mainImgFromCopy ? mainImgFromCopy : \"no\"}} /\n      isPristine : {{f.pristine}}\n    </div>\n    <!-- <div class=\"alert\">\n      Job: {{ _formJob}} / \n      Id: {{ _Product.Id}} / \n      CopyId: {{ copyingId}}\n    </div> -->\n    <div class=\"alert\">\n      {{ _Product | json }}\n    </div>\n  </form>\n\n  <div class=\"history\">\n    <product-history [Products]=\"lastProducts\" (delete)=\"getLastAddedProducts()\"></product-history>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/GlobalConstants */ "./src/app/common/GlobalConstants.ts");
/* harmony import */ var src_app_services_admin_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/admin-upload.service */ "./src/app/services/admin-upload.service.ts");










var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(productService, uploadService, router, activeRoute, toaster) {
        var _this = this;
        this.productService = productService;
        this.uploadService = uploadService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.toaster = toaster;
        this.expand = false;
        this.hasNoColor = false;
        this._formJob = src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add; // what operation the form will achieve adding, editing ..
        this.colors = ['white', 'red', 'green', 'yellow', 'gray', 'orange', 'blue', 'pink', 'brown', 'purple', 'black'];
        this._maxG = 7; // Max gallery images
        this._maxD = 5; // Max description images
        this.GalleryImgs = [];
        this.DescImgs = [];
        this.GalleryImgsDrop = []; // images names to drop from server
        this.DescImgsDrop = [];
        this._Product = new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]();
        this.copyingId = 0; // store the product id that the new product will copy from
        this.productService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    }
    // implements ngOnDestroy to Remove all subscriptions
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParamMap.subscribe(function (p) {
            var editId = +p.get('editId');
            if (editId) {
                _this._formJob = src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Update;
                _this.getProduct(editId, src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Update);
            }
            var copyId = +p.get('copyId');
            if (copyId) {
                _this._formJob = src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Copy;
                _this.getProduct(copyId, src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Copy);
            }
            _this.mainImgFromCopy = null;
            _this.ngForm.resetForm();
        });
        this.getLastAddedProducts();
        // this.shipping = this.aps.getShippings();
    };
    // Posting The Product
    ProductFormComponent.prototype.onSubmit = function (f) {
        if (f.invalid) {
            this.toaster.warning("Form Is Not Valid ..");
            return;
        }
        if (this._Product.Id > 0) // update case
            this.updateProduct();
        else
            this.addProduct();
    };
    ProductFormComponent.prototype.checkImages = function () {
        if ((this._formJob === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add && (!this.MainImage || this.GalleryImgs.length === 0)) ||
            (this._formJob !== src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add &&
                (this.GalleryImgs.length === 0 && this._Product.galleryImgs.length === 0))) {
            this.toaster.warning("Main Image and Gallery images are Mandatory");
            return false;
        }
        return true;
    };
    ProductFormComponent.prototype.addProduct = function () {
        var _this = this;
        if (!this.checkImages())
            return;
        this._Product.Slug = this._Product.Name.replace(/\s+/g, '-'); // on server side
        this.productService.PostProduct(this._Product).subscribe(function (ProductId) {
            _this.toaster.success('Product has been added ' + ProductId, 'Success');
            _this.uploadProductImages(ProductId);
        }, function (error) {
            if (error instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                console.log(error.originalError);
                _this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
            }
            else {
                throw error;
            }
        });
    };
    ProductFormComponent.prototype.updateProduct = function () {
        var _this = this;
        if (!this.checkImages())
            return;
        if (!this.ngForm.pristine) { // the form has changed (dirty)
            this.productService.UpdateProduct(this._Product.Id, this._Product).subscribe(function (ProductId) {
                _this.toaster.success('Product modified ' + ProductId, 'Success');
            }, function (error) {
                if (error instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                    console.log(error.originalError);
                    _this.toaster.warning('ModelState is not valid ..'); // Display the error within Form errors and Wrap it with JSON pipe
                }
                else if (error instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["NotFound"]) {
                    console.log(error.originalError);
                    _this.toaster.warning("Can't update a none existing product !!");
                    _this.resetForm();
                }
                else {
                    throw error;
                }
            });
        }
        if (this.MainImage || // the cases when we have to call upload method ..
            this.GalleryImgs.length > 0 ||
            this.DescImgs.length > 0 ||
            this.GalleryImgsDrop.length > 0 ||
            this.DescImgsDrop.length > 0) {
            this.uploadProductImages(this._Product.Id.toString());
        }
        this.resetForm(); // just reset the form !
    };
    //////////////////////
    ProductFormComponent.prototype.uploadProductImages = function (ProductId) {
        var _this = this;
        var form = new FormData();
        form.append('ProductId', ProductId);
        if (this.MainImage) {
            form.append('MainImg', this.MainImage, this.MainImage.name);
        }
        this.GalleryImgs.forEach(function (e) {
            form.append('GalleryImgs', e.img, e.img.name);
        });
        this.DescImgs.forEach(function (e) {
            form.append('DescImgs', e.img, e.img.name);
        });
        if (this._formJob === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Copy) {
            form.append('CopyingId', this.copyingId.toString());
            form.append('mainImgFromCopy', this.mainImgFromCopy);
        }
        // Updating case, or copying case
        if (this._formJob !== src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add) {
            form.append('GalleryImgsDrop', JSON.stringify(this.GalleryImgsDrop));
            form.append('DescImgsDrop', JSON.stringify(this.DescImgsDrop));
        }
        var action = (this._formJob === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add) ? this.uploadService.addProductImages(form)
            : (this._formJob === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Update) ? this.uploadService.updateProductImages(form)
                : this.uploadService.copyProductImages(form);
        action.subscribe(function (Product) {
            _this.addToHistory(Product);
            _this.toaster.success('Images Uploaded !', 'Success');
            _this.resetForm();
        }, function (err) {
            if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                _this.toaster.warning(err.originalError.error.Message); // Display the error within Form errors
            }
            else {
                throw err;
            }
        });
    };
    ProductFormComponent.prototype.getLastAddedProducts = function () {
        var _this = this;
        this.productService.GetLastProducts().subscribe(function (data) {
            _this.lastProducts = data;
        });
    };
    ProductFormComponent.prototype.resetForm = function () {
        this.ngForm.resetForm();
        this._Product = new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]();
        this.copyingId = 0;
        this._formJob = src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Add;
        this.freeImages();
        this.GalleryImgsDrop = [];
        this.DescImgsDrop = [];
        this.mainImgFromCopy = null;
        this.router.navigateByUrl('/admin/product-form');
    };
    ProductFormComponent.prototype.addToHistory = function (item) {
        var array = this.lastProducts;
        var ex_item = array.find(function (x) { return x.Id === item.Id; });
        if (ex_item)
            array.splice(array.indexOf(ex_item), 1);
        if (array.length >= 6) // Magic Number 6 => item had to display within history
            array.pop(); // Remove The Last
        array.unshift(item); // Insert at The start
    };
    ProductFormComponent.prototype.getSub = function (cat, reset) {
        try {
            if (cat)
                this.subCategories = this.categories.find(function (x) { return x.Id === Number(cat); }).SubCategories;
            if (reset)
                this._Product.SubCategoryId = null;
        }
        catch (e) { }
    };
    ProductFormComponent.prototype.getProduct = function (id, mode) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (p) {
            _this.freeImages();
            _this._Product = p;
            _this.hasNoColor = _this._Product.Color ? false : true;
            _this.getSub(_this._Product.CategoryId, false);
            if (mode === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Copy) {
                _this.copyingId = id;
                _this._Product.Id = 0;
            }
        }, function (err) {
            if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["NotFound"]) {
                _this.toaster.warning('Product Not Found Or Deleted');
            }
            else {
                throw err;
            }
        });
    };
    ProductFormComponent.prototype.freeImages = function () {
        this.imgPath = null;
        this.MainImage = null;
        this.GalleryImgs = [];
        this.DescImgs = [];
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
    ProductFormComponent.prototype.addGalleryImages = function (files) {
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
                    var _length = (_this.GalleryImgs.length + _this._Product.galleryImgs.length);
                    if (_length < _this._maxG) {
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
                    var _length = (_this.DescImgs.length + _this._Product.descImgs.length);
                    if (_length < _this._maxD) {
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
    ProductFormComponent.prototype.asMainImage = function (img) {
        this.mainImgFromCopy = null;
        this.MainImage = img;
        this.previewMainImg();
    };
    ProductFormComponent.prototype.asMainImagePlus = function (img) {
        this._Product.mainImg = null;
        this.asMainImage(img);
    };
    ProductFormComponent.prototype.asMainImageServer = function (img) {
        var _this = this;
        if (this._formJob === src_app_common_GlobalConstants__WEBPACK_IMPORTED_MODULE_8__["FormJob"].Copy) {
            this.imgPath = this.MainImage = null;
            this.mainImgFromCopy = img;
            return;
        }
        this.uploadService.ReplaceMainImg(this._Product.Id, img).subscribe(function () {
            _this.toaster.success('main image changed', 'Success');
            _this._Product.mainImg = img;
            _this.imgPath = _this.MainImage = null;
            _this.getLastAddedProducts();
        }, function (error) {
            if (error instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                console.log(error.originalError);
                _this.toaster.warning("Something's Wrong ..");
            }
            else {
                throw error;
            }
        });
    };
    ProductFormComponent.prototype.removeGalleryImage = function (name) {
        var elem = this.GalleryImgs.find(function (x) { return x.name === name; });
        this.GalleryImgs.splice(this.GalleryImgs.indexOf(elem), 1);
    };
    ProductFormComponent.prototype.removeGalleryImageServer = function (name) {
        var elem = this._Product.galleryImgs.find(function (x) { return x === name; });
        this._Product.galleryImgs.splice(this._Product.galleryImgs.indexOf(elem), 1);
        this.GalleryImgsDrop.push(name);
    };
    ProductFormComponent.prototype.removeDescImage = function (name) {
        var elem = this.DescImgs.find(function (x) { return x.name === name; });
        this.DescImgs.splice(this.DescImgs.indexOf(elem), 1);
    };
    ProductFormComponent.prototype.removeDescImageServer = function (name) {
        var elem = this._Product.descImgs.find(function (x) { return x === name; });
        this._Product.descImgs.splice(this._Product.descImgs.indexOf(elem), 1);
        this.DescImgsDrop.push(name);
    };
    ProductFormComponent.prototype.Reset = function () {
        this.resetForm();
    };
    ProductFormComponent.prototype.setNoColor = function () {
        if (this.hasNoColor)
            this._Product.Color = null;
        else
            this._Product.Color = 'white';
    };
    ProductFormComponent.prototype.OnsaleChanged = function () {
        if (this._Product.OnSale === false)
            this._Product.Quantity = 0;
        else
            this._Product.Quantity = null;
    };
    ProductFormComponent.prototype.QteBlured = function () {
        if (this._Product.Quantity === 0)
            this._Product.OnSale = false;
        else
            this._Product.OnSale = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"],
            src_app_services_admin_upload_service__WEBPACK_IMPORTED_MODULE_9__["AdminUploadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1oaXN0b3J5L3Byb2R1Y3QtaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-history/product-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product/product-history/product-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngFor=\"let p of Products; trackBy: trackById\" class=\"box\">\n  <img [src]=\"'/Content/Images/Products/' + p.Id + '/Main/' + p.Image\" class=\"fadeIn\" >\n  <svg (click)=\"editProduct(p)\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n    </path>\n  </svg>\n  <svg (click)=\"copyProduct(p)\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\" style=\"enable-background:new 0 0 699.428 699.428;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n    </path>\n  </svg>\n  <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\" style=\"enable-background:new 0 0 54.971 54.971;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n    </path>\n    <path\n      d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n    </path>\n    <path\n      d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n    </path>\n    <path\n      d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n    </path>\n    <path d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n    </path>\n    <path\n      d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n    </path>\n    <path\n      d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n    </path>\n    <path d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n    </path>\n  </svg>\n  <svg (click)=\"deleteProduct(p)\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"-40 0 427 427.00131\" >\n    <path\n      d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n    <path\n      d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n    <path\n      d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n    </path>\n    <path\n      d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n  </svg>\n</div>"

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
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductHistoryComponent = /** @class */ (function () {
    function ProductHistoryComponent(aps, toaster, router) {
        this.aps = aps;
        this.toaster = toaster;
        this.router = router;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductHistoryComponent.prototype.ngOnInit = function () {
    };
    ProductHistoryComponent.prototype.editProduct = function (p) {
        // this.router.navigateByUrl('/admin/product-form/' + p.Id.toString());
        this.router.navigate(['/admin/product-form'], { queryParams: { editId: p.Id } });
    };
    ProductHistoryComponent.prototype.copyProduct = function (p) {
        this.router.navigate(['/admin/product-form'], { queryParams: { copyId: p.Id } });
    };
    ProductHistoryComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.aps.raiseConfirmDialog().subscribe(function (res) {
            if (res) {
                _this.aps.deleteProduct(product.Id)
                    .subscribe(function () { return _this.delete.emit(); }, function (err) {
                    if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_3__["BadInput"]) {
                        _this.toaster.warning('Something Went Wrong');
                        console.log(err.originalError.error.Message);
                    }
                    else if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_3__["NotFound"]) {
                        _this.toaster.warning('Product Not Found Or Already Deleted');
                    }
                    else {
                        throw err;
                    }
                });
            }
        });
    };
    ProductHistoryComponent.prototype.trackById = function (index, product) {
        return product ? product.Id : undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('Products'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductHistoryComponent.prototype, "Products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductHistoryComponent.prototype, "delete", void 0);
    ProductHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-history',
            template: __webpack_require__(/*! ./product-history.component.html */ "./src/app/product/product-history/product-history.component.html"),
            styles: [__webpack_require__(/*! ./product-history.component.css */ "./src/app/product/product-history/product-history.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProductHistoryComponent);
    return ProductHistoryComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divproductlist\" id=\"my-productlist\">\n  <div class=\"divlabtyporeder\">\n    <label routerLink=\"/admin/products\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" >All</label>\n    <label routerLink=\"/admin/products\" [queryParams]=\"{stock: 'in'}\" routerLinkActive=\"active\">On Sale</label>\n    <label routerLink=\"/admin/products\" [queryParams]=\"{stock: 'out'}\" routerLinkActive=\"active\" >Out Of Stock</label>\n  </div>\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport\">Import</label>\n    <label class=\"bottonimport\">Filter</label>\n    <select class=\"selectcategorie\" name=\"\">\n      <option value=\"\">PHONE</option>\n      <option value=\"\">PC</option>\n      <option value=\"\">BABY</option>\n      <option value=\"\">HOUSE GARIENT</option>\n      <option value=\"\">CAR MOTO</option>\n    </select>\n    <select class=\"selectsubcateg\" name=\"\">\n      <option value=\"\">PHONE</option>\n      <option value=\"\">PC</option>\n      <option value=\"\">BABY</option>\n      <option value=\"\">HOUSE GARIENT</option>\n      <option value=\"\">CAR MOTO</option>\n    </select>\n  </div>\n  <div class=\"divallordersm\">\n\n    <ng-scrollbar [shown]=\"'always'\" class=\"table-wrapper\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\n      <table cdk-table [dataSource]=\"dataSource\" multiTemplateDataRows [trackBy]= \"trackById\" >\n        <ng-container cdkColumnDef=\"Select\">\n          <th cdk-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n              [checked]=\"selection.hasValue() && isAllSelected()\"\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n              (change)=\"$event ? selection.toggle(row) : null\"\n              [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Id\">\n          <th cdk-header-cell *cdkHeaderCellDef> ID </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> #{{row.Id}} </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Image\">\n          <th cdk-header-cell *cdkHeaderCellDef> Image </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <img [src]=\"'/Content/Images/Products/' + row.Id + '/Main/' + row.mainImg\" class=\"ertytrh\" >\n            <!-- <svg class=\"svgsigj231\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                <path\n                  d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                </path>\n              </svg> -->\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Name\">\n          <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <a [href]=\"'/product/'+row.Slug\" target=\"_blank\" class=\"ezrergfrvsx\">{{row.Name}}</a></td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Price\">\n          <th cdk-header-cell *cdkHeaderCellDef> Price </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ row.Price | currency:'USD' }} </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Color\">\n          <th cdk-header-cell *cdkHeaderCellDef> Color </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <label [ngStyle]=\"{'background': 'var(--'+ row.Color + ')' }\" class=\"labcolorprod\"></label>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Quantity\">\n          <th cdk-header-cell *cdkHeaderCellDef> Quantity </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> {{row.Quantity}} </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"OnSale\">\n          <th cdk-header-cell *cdkHeaderCellDef> Stock </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <label [ngClass]=\"{'outStock': row.OnSale === false}\" class=\"labcolstock\"></label>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Source\">\n          <th cdk-header-cell *cdkHeaderCellDef> Source </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> GearBest </td>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"Date_Created\">\n          <th cdk-header-cell *cdkHeaderCellDef> Date_Created </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ row.Date_Added | date:shortDate }} </td>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"Controls\">\n          <th cdk-header-cell *cdkHeaderCellDef></th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <div class=\"PtableControls\">\n              <svg class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                <path\n                  d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                </path>\n              </svg>\n              <svg class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                width=\"427pt\">\n                <path\n                  d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n                <path\n                  d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n                <path\n                  d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                </path>\n                <path\n                  d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n              </svg>\n              <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                <path\n                  d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                </path>\n              </svg>\n              <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\"\n                style=\"enable-background:new 0 0 54.971 54.971;\" xml:space=\"preserve\">\n                <path\n                  d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n                </path>\n                <path\n                  d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n                </path>\n                <path\n                  d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n                </path>\n                <path\n                  d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n                </path>\n                <path\n                  d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n                </path>\n                <path\n                  d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n                </path>\n                <path\n                  d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n                </path>\n                <path\n                  d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n                </path>\n              </svg>\n            </div>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Expand\">\n          <th cdk-header-cell *cdkHeaderCellDef></th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <svg (click)=\"expandedElement = (expandedElement === row) ? null : row\" class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n              style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n              <path\n                d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n              </path>\n            </svg>\n          </td>\n        </ng-container>\n\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n        <ng-container cdkColumnDef=\"expandedDetail\">\n          <td cdk-cell *cdkCellDef=\"let element\" [attr.colspan]=\"columns.length\">\n            <div class=\"expanded-content\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n              <!-- Something will appear right here .. -->\n            </div>\n          </td>\n        </ng-container>\n\n        <tr stickyCssClass cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n        <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"  ></tr>\n        <tr cdk-row *cdkRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n\n\n      </table>\n    </ng-scrollbar>\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n\n  <!-- <div class=\"alert\">\n  {{ products$ | async | json }}\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin-product.service */ "./src/app/services/admin-product.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(aps, activeRoute) {
        this.aps = aps;
        this.activeRoute = activeRoute;
        this.columns = ['Select', 'Id', 'Image', 'Name', 'Price', 'Color', 'Quantity', 'Source', 'Date_Created', 'OnSale', 'Controls', 'Expand'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParamMap.subscribe(function (params) {
            _this.productsToShow = params.get('stock') || 'all';
            _this.aps.GetProductsList(_this.productsToShow)
                .subscribe(function (data) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                _this.selection.clear();
            });
        });
    };
    ProductListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    ProductListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ProductListComponent.prototype.trackById = function (index, product) {
        return product ? product.Id : undefined;
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divprofileset\">\n  <div class=\"divphoto\">\n    <div class=\"photoprof\">\n      <label class=\"changepho\">Change Your Photo</label>\n      <div class=\"commentrev\">\n        <div class=\"avatarrev\">\n          <svg class=\"svgsig223\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n            style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n            <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n            <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n            </path>\n          </svg>\n          <svg class=\"iconplusaddav\" aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"plus\" role=\"img\"\n            xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\">\n            <path fill=\"currentColor\"\n              d=\"M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z\"\n              class=\"\"></path>\n          </svg>\n        </div> <span class=\"nameavatar\">Mohamed Zouine</span>\n      </div>\n      <div class=\"fdgbxyrte\">\n        <label class=\"dsfvcx\">Theme :</label>\n        <div class=\"fhgnbbvn\">\n          <label for=\"radgear\" class=\"labtypeshipb\"></label>\n          <input id=\"radgear\" type=\"radio\" name=\"shipping\" value=\"Gearbest\">\n          <label for=\"radgear\" class=\"labtypeshipbb\"></label>\n          <label for=\"radgear\" class=\"labtypeship\">1</label>\n        </div>\n        <div class=\"fhgnbbvn\">\n          <label for=\"radgear2\" class=\"labtypeshipb\"></label>\n          <input id=\"radgear2\" type=\"radio\" name=\"shipping\" value=\"Gearbest\">\n          <label for=\"radgear2\" class=\"labtypeshipbb\"></label>\n          <label for=\"radgear2\" class=\"labtypeship\">2</label>\n        </div>\n      </div>\n    </div>\n    <form class=\"allinformation allinformationp1\">\n      <div class=\"divforminfo\">\n        <div class=\"divstate\">\n          <label class=\"labstate\">First Name</label>\n          <input id=\"inputstate\" placeholder=\"Your First Name\" type=\"text\" name=\"\" value=\"\" maxlength=\"60\" required=\"\">\n        </div>\n        <div class=\"divmobile\">\n          <label class=\"labmobile\">Last Name</label>\n          <input id=\"inputmobile\" placeholder=\"Your Last Name\" type=\"text\" name=\"\" value=\"\" maxlength=\"20\" required=\"\">\n        </div>\n        <div class=\"divemail\">\n          <label class=\"labemail\">Email</label>\n          <input id=\"inputemail\" placeholder=\"Email Contact\" type=\"email\" name=\"\" value=\"\" maxlength=\"100\" required=\"\">\n        </div> <span class=\"labchangepass\">Change Password ?</span>\n        <div class=\"divpassword\">\n          <label class=\"labemail\">Write Password Now</label>\n          <input placeholder=\"Password Now\" type=\"password\" name=\"\" value=\"\" maxlength=\"100\" required=\"\">\n          <label class=\"labemail\">New Password</label>\n          <input placeholder=\"Write New Password\" type=\"password\" name=\"\" value=\"\" maxlength=\"100\" required=\"\">\n          <label class=\"labemail\">Confirmed New Password</label>\n          <input placeholder=\"Confirmed New Password\" type=\"password\" name=\"\" value=\"\" maxlength=\"100\" required=\"\">\n        </div>\n      </div>\n      <button id=\"contbottom\" type=\"button\" name=\"button\">SAVE</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");







var AdminProductService = /** @class */ (function () {
    function AdminProductService(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.END_POINT = 'api/AdminProducts/';
        this.noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'true' }); // only for testing
    }
    AdminProductService.prototype.getCategories = function () {
        return this.http.get('api/Categories', { headers: this.noAuth });
    };
    AdminProductService.prototype.getShippings = function () {
        return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
    };
    // calling the server
    AdminProductService.prototype.GetProductsList = function (stock) {
        return this.http.get(this.END_POINT + '?stock=' + stock, { headers: this.noAuth });
    };
    AdminProductService.prototype.PostProduct = function (form) {
        return this.http.post(this.END_POINT, form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.UpdateProduct = function (id, p) {
        return this.http.put('/api/UpdateProducts/' + id.toString(), p, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.GetLastProducts = function () {
        return this.http.get(this.END_POINT + 'History', { headers: this.noAuth });
    };
    AdminProductService.prototype.getProduct = function (id) {
        return this.http.get(this.END_POINT + id, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.END_POINT + id, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    // Shared Functions
    AdminProductService.prototype.raiseConfirmDialog = function () {
        return this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog-container',
        }).afterClosed();
    };
    AdminProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AdminProductService);
    return AdminProductService;
}());



/***/ }),

/***/ "./src/app/services/admin-upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/admin-upload.service.ts ***!
  \**************************************************/
/*! exports provided: AdminUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUploadService", function() { return AdminUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");





var AdminUploadService = /** @class */ (function () {
    function AdminUploadService(http) {
        this.http = http;
        this.END_POINT = 'api/upload/';
        this.noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'true' }); // only for testing
    }
    AdminUploadService.prototype.UploadImages = function (form) {
        return this.http.post(this.END_POINT + 'productImages', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.addProductImages = function (form) {
        return this.http.post(this.END_POINT + 'addProductImages', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.updateProductImages = function (form) {
        return this.http.post(this.END_POINT + 'updateProductImages', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.copyProductImages = function (form) {
        return this.http.post(this.END_POINT + 'copyProductImages', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.ReplaceMainImg = function (id, img) {
        var data = { id: id, filename: img };
        return this.http.post(this.END_POINT + 'ReplaceMainImg', data, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminUploadService);
    return AdminUploadService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divsettingsnot\">\n  <div class=\"ytruyissu\">\n    <label class=\"redgdfs\">Settings Notification :</label>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">New User registered</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">New Custmer Review</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">Messages</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">Ticket</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">Orders</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n    <div class=\"tuyiyyoiuo\">\n      <label class=\"regdsgf\">Offline</label>\n      <div class=\"switch1\">\n        <input id=\"checkanimat1\" type=\"checkbox\" name=\"\" value=\"\">\n        <div class=\"switch2\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Are you sure ?!</h3>\n  <div>\n    <button mat-button [mat-dialog-close]=\"false\">NO</button>\n    <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent() {
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/shared/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/shared/confirm-dialog/confirm-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
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

module.exports = "<div class=\"divsidebar\">\n  <div class=\"box\" id=\"addproduct\" routerLink=\"/admin/product-form\" routerLinkActive=\"active\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\"\n      y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M443.209,442.24l-27.296-299.68c-0.736-8.256-7.648-14.56-15.936-14.56h-48V96c0-25.728-9.984-49.856-28.064-67.936    C306.121,10.24,281.353,0,255.977,0c-52.928,0-96,43.072-96,96v32h-48c-8.288,0-15.2,6.304-15.936,14.56L68.809,442.208    c-1.632,17.888,4.384,35.712,16.48,48.96S114.601,512,132.553,512h246.88c17.92,0,35.136-7.584,47.232-20.8    C438.793,477.952,444.777,460.096,443.209,442.24z M303.977,368h-32v32c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-32h-32    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h32v-32c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v32h32    c8.832,0,16,7.168,16,16C319.977,360.832,312.809,368,303.977,368z M319.977,128h-128V96c0-35.296,28.704-64,64-64    c16.96,0,33.472,6.784,45.312,18.656C313.353,62.72,319.977,78.816,319.977,96V128z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"chat\" routerLink=\"/admin/support\" routerLinkActive=\"active\"> <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 16.087 16.087\" style=\"enable-background:new 0 0 16.087 16.087;\" xml:space=\"preserve\">\n      <path\n        d=\"M6.5,3.478c-3.59,0-6.5,2.238-6.5,5c0,1.354,0.701,2.585,1.839,3.485    c-0.066,0.918-0.287,2.041-0.927,2.646c1.274,0,2.576-0.798,3.399-1.422c0.684,0.188,1.42,0.291,2.189,0.291    c3.59,0,6.5-2.237,6.5-5C13,5.716,10.09,3.478,6.5,3.478z\">\n      </path>\n      <path\n        d=\"M15.14,8.965C15.687,8.234,16,7.384,16,6.478c0-2.762-2.91-5-6.5-5    c-1.58,0-3.028,0.434-4.154,1.154C5.876,2.532,6.43,2.478,7,2.478c3.866,0,7,2.463,7,5.5c0,1.197-0.485,2.306-1.312,3.207    c0.821,0.624,2.125,1.424,3.399,1.424C15.181,11.749,15.116,9.843,15.14,8.965z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"order\" routerLink=\"/admin/orders\" routerLinkActive=\"active\">\n    <span class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\"\n      y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M336,32h-34.752C294.656,13.376,276.864,0,256,0s-38.656,13.376-45.28,32H176c-8.832,0-16,7.168-16,16v64    c0,8.832,7.168,16,16,16h160c8.832,0,16-7.168,16-16V48C352,39.168,344.832,32,336,32z\">\n      </path>\n      <path\n        d=\"M416,64h-32v48c0,26.464-21.536,48-48,48H176c-26.464,0-48-21.536-48-48V64H96c-17.632,0-32,14.368-32,32v384    c0,17.952,14.048,32,32,32h320c17.952,0,32-14.048,32-32V96C448,78.048,433.952,64,416,64z M251.328,347.328l-64,64    C184.192,414.432,180.096,416,176,416s-8.192-1.568-11.328-4.672l-32-32c-6.24-6.24-6.24-16.384,0-22.624s16.384-6.24,22.624,0    L176,377.376l52.672-52.672c6.24-6.24,16.384-6.24,22.624,0S257.568,341.056,251.328,347.328z M251.328,219.328l-64,64    C184.192,286.432,180.096,288,176,288s-8.192-1.568-11.328-4.672l-32-32c-6.24-6.24-6.24-16.384,0-22.624s16.384-6.24,22.624,0    L176,249.376l52.672-52.672c6.24-6.24,16.384-6.24,22.624,0C257.536,202.944,257.568,213.056,251.328,219.328z M368,384h-64    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64c8.832,0,16,7.168,16,16C384,376.832,376.832,384,368,384z M368,256h-64    c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64c8.832,0,16,7.168,16,16C384,248.832,376.832,256,368,256z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"productlist\" routerLink=\"/admin/products\" routerLinkActive=\"active\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 612.001 612.002\" style=\"enable-background:new 0 0 612.001 612.002;\" xml:space=\"preserve\">\n      <path\n        d=\"M599.293,116.954l-66.904-83.936c-6.319-7.929-15.906-12.548-26.047-12.548H160.551c-10.139,0-19.726,4.619-26.046,12.547   l-66.903,83.937c-6.989,8.769-12.708,25.118-12.708,37.46v61.482c5.314-8.36,13.081-14.635,22.395-17.845   c0.521-7.026,2.651-13.84,6.294-20.045c6.311-10.75,16.435-18.394,28.502-21.533c4.326-1.13,8.287-1.642,12.247-1.642   c15.955,0,30.413,8.116,38.879,20.866c2.521-0.439,5.065-0.667,7.619-0.667c7.834,0,15.237,2.154,21.686,5.866l37.059-9.639   c4.644-1.212,9.416-1.821,14.198-1.821c25.631,0,48.035,17.337,54.492,42.164l72.627,279.135   c3.789,14.563,1.675,29.729-5.937,42.708c-7.62,12.979-19.842,22.208-34.406,25.998l-32.413,8.431h272.229   c22.995,0,41.636-18.641,41.636-41.635L612,153.286C612,142.072,606.282,125.723,599.293,116.954z M89.465,116.244l22.156-27.797   h151.166l14.917-24.526H131.171l16.357-20.522c3.178-3.987,7.925-6.274,13.023-6.274h345.792c5.099,0,9.846,2.287,13.023,6.274   l16.357,20.522H386.58l8.327,24.526h160.366l22.155,27.797H89.465z M96.223,218.802l-9.345,2.431   c-9.953,2.59-15.923,12.758-13.334,22.711l0.095,0.364c2.59,9.954,12.758,15.923,22.712,13.334l79.252-20.618   c9.954-2.589,15.923-12.757,13.334-22.712l-0.095-0.364c-2.59-9.953-12.758-15.923-22.711-13.334l-9.345,2.431   c-4.993,1.299-10.095-1.696-11.394-6.689l-0.08-0.304c-3.017-11.596-14.862-18.551-26.458-15.534l-0.485,0.126   c-11.596,3.017-18.55,14.862-15.534,26.458l0.08,0.304C104.212,212.402,101.217,217.503,96.223,218.802z M121.768,192.721   c5.027-1.308,10.163,1.708,11.47,6.734c1.308,5.027-1.707,10.163-6.735,11.47c-5.027,1.307-10.162-1.708-11.47-6.734   C113.726,199.164,116.741,194.028,121.768,192.721z M238.566,479.806c0.872,3.352-1.138,6.775-4.489,7.647l-115.299,29.994   c-3.351,0.872-6.775-1.139-7.647-4.49l-1.579-6.067c-0.872-3.353,1.138-6.776,4.49-7.647l115.298-29.994   c3.352-0.872,6.775,1.139,7.647,4.489L238.566,479.806z M252.628,359.526l1.579,6.068c0.872,3.352-1.138,6.775-4.49,7.646   L91.941,414.287c-3.352,0.872-6.775-1.139-7.647-4.489l-1.579-6.069c-0.872-3.352,1.138-6.775,4.49-7.646l157.776-41.045   C248.333,354.165,251.756,356.174,252.628,359.526z M235.509,318.627L77.733,359.672c-3.352,0.871-6.775-1.139-7.647-4.49   l-1.579-6.068c-0.872-3.352,1.138-6.774,4.49-7.646l157.776-41.045c3.352-0.872,6.775,1.138,7.647,4.489l1.579,6.069   C240.871,314.331,238.861,317.755,235.509,318.627z M232.005,429.681l-127.435,33.152c-3.352,0.871-6.775-1.139-7.647-4.49   l-1.579-6.068c-0.872-3.352,1.138-6.775,4.49-7.647l127.434-33.15c3.352-0.873,6.775,1.138,7.647,4.489l1.579,6.068   C237.367,425.386,235.357,428.81,232.005,429.681z M346.709,497.026l-72.618-279.143c-4.359-16.757-21.478-26.807-38.235-22.448   l-37.004,9.627c0.875,1.807,1.601,3.715,2.126,5.729c4.421,16.996-5.588,34.045-22.22,38.372l-78.087,20.314   c-15.94,4.147-33.103-4.061-38.454-19.638c-1.008-2.934-1.553-5.883-1.709-8.788l-37.042,9.637   c-16.757,4.359-26.807,21.478-22.448,38.234l72.618,279.143c4.36,16.758,21.478,26.808,38.235,22.448l212.392-55.253   C341.019,530.901,351.069,513.783,346.709,497.026z M103.977,560.172L40.831,317.44l212.391-55.253l63.147,242.732L103.977,560.172   z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"userlist\" routerLink=\"/admin/users\" routerLinkActive=\"active\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 198.145 198.145\" style=\"enable-background:new 0 0 198.145 198.145;\" xml:space=\"preserve\">\n      <path\n        d=\"M195.536,68.18c-1.895-2.079-4.578-3.265-7.392-3.265H10c-2.813,0-5.497,1.186-7.392,3.265s-2.826,4.861-2.565,7.662  l9.505,102.099c0.479,5.142,4.793,9.073,9.957,9.073h159.134c5.164,0,9.478-3.932,9.957-9.073l9.505-102.099  C198.362,73.041,197.431,70.259,195.536,68.18z M132.426,166.073c-0.007-0.001-0.013-0.001-0.02,0H65.739c-5.523,0-10-4.478-10-10  c0-13.58,11.048-24.628,24.628-24.628h7.177c-7.381-4.078-12.393-11.94-12.393-20.952c0-13.19,10.731-23.922,23.922-23.922  s23.922,10.731,23.922,23.922c0,9.012-5.012,16.874-12.393,20.952h7.177c13.303,0,24.176,10.603,24.614,23.802  c0.022,0.272,0.034,0.548,0.034,0.826C142.426,161.596,137.949,166.073,132.426,166.073z M178.906,46.298c0,4.143-3.358,7.5-7.5,7.5  H26.739c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h144.667C175.548,38.798,178.906,42.155,178.906,46.298z M159.106,18.631  c0,4.143-3.358,7.5-7.5,7.5H46.539c-4.142,0-7.5-3.357-7.5-7.5s3.358-7.5,7.5-7.5h105.066  C155.748,11.131,159.106,14.488,159.106,18.631z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"coupon\" routerLink=\"/admin/coupons\" routerLinkActive=\"active\">\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <path\n        d=\"M466.07,191.766c27.604-36.851,27.575-87.714,0.375-124.769l40.996-39.164c5.944-5.768,6.09-17.253,0.352-23.196    c-5.768-5.943-15.255-6.09-21.198-0.352l-41.284,41.436c-36.559-27.249-89.877-28.163-126.134-0.876l-30.42-31.42    c-17.509-17.509-46.085-17.509-63.594,0L13.154,226.432c-17.538,17.538-17.538,46.056,0,63.594l37.096,37.125    c-13.454,37.829-4.245,80.517,24.375,109.152c28.649,28.664,71.426,37.799,109.166,24.389l37.125,38.096    c17.509,17.509,46.085,17.509,63.594,0L498.519,285.78c8.491-8.462,13.176-19.734,13.176-31.768    c0-12.005-4.685-23.336-13.176-31.827L466.07,191.766z M266.856,140.88c5.855-5.855,15.343-5.855,21.198,0l21.198,21.227    c5.855,5.855,5.855,15.343,0,21.198s-15.343,5.855-21.198,0l-21.198-21.227C261,156.221,261,146.735,266.856,140.88z     M203.261,77.286c5.855-5.855,15.343-5.855,21.198,0l21.198,21.198c5.855,5.855,5.855,15.343,0,21.198s-15.343,5.855-21.198,0    l-21.198-21.198C197.406,92.628,197.406,83.141,203.261,77.286z M180.629,181.929c17.567-17.567,46.085-17.567,63.594,0    c17.637,17.576,17.534,46.06,0,63.594c-17.509,17.509-46.085,17.509-63.594,0C163.095,227.989,162.992,199.505,180.629,181.929z     M265.421,393.908c-17.509,17.509-46.085,17.509-63.594,0c-17.538-17.538-17.538-46.056,0-63.594    c17.509-17.509,46.085-17.509,63.594,0C282.959,347.852,282.959,376.371,265.421,393.908z M320.114,292.222L129.303,313.42    c-8.675,0.867-15.696-5.354-16.572-13.234c-0.907-8.257,5.021-15.664,13.234-16.572l190.811-21.198    c8.491-0.82,15.664,5.036,16.572,13.234C334.255,283.907,328.341,291.315,320.114,292.222z M372.846,246.899    c-5.855,5.855-15.343,5.855-21.198,0l-21.198-21.198c-5.855-5.855-5.855-15.343,0-21.198c5.855-5.855,15.343-5.855,21.198,0    l21.198,21.198C378.701,231.556,378.701,241.043,372.846,246.899z M350.535,160.702c-17.538-17.538-17.538-46.056,0-63.594    c17.509-17.509,46.085-17.509,63.594,0c17.538,17.538,17.538,46.056,0,63.594C396.62,178.21,368.044,178.21,350.535,160.702z     M436.469,310.493c-5.855,5.855-15.343,5.855-21.198,0l-21.198-21.198c-5.855-5.855-5.855-15.343,0-21.198    c5.855-5.855,15.343-5.855,21.198,0l21.198,21.198C442.324,295.151,442.324,304.637,436.469,310.493z\">\n      </path>\n      <circle cx=\"233.627\" cy=\"362.109\" r=\"14.989\"></circle>\n      <circle cx=\"382.336\" cy=\"128.901\" r=\"14.989\"></circle>\n      <path\n        d=\"M223.025,203.127c-5.855-5.855-15.343-5.855-21.198,0c-5.94,5.94-5.791,15.407,0,21.198    c5.855,5.855,15.342,5.855,21.198,0C228.817,218.533,228.966,209.067,223.025,203.127z\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"review\" routerLink=\"/admin/user-reviews\" routerLinkActive=\"active\"> <span\n      class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-38 -21 670 670.66592\">\n      <path\n        d=\"m344.832031 104.386719 5.734375-3.363281h-9.878906c-5.023438-.003907-9.429688-3.339844-10.796875-8.171876l-5.140625-17.980468-5.09375 17.957031c-1.367188 4.832031-5.777344 8.171875-10.800781 8.171875h-9.921875l5.691406 3.308594c4.457031 2.597656 6.570312 7.894531 5.128906 12.84375l-5.378906 18.363281 13.070312-11.089844c4.1875-3.554687 10.332032-3.554687 14.519532 0l13.066406 11.089844-5.375-18.363281c-1.394531-4.9375.734375-10.195313 5.175781-12.765625zm0 0\">\n      </path>\n      <path\n        d=\"m437.375 381.632812h-150.472656c-7.753906.167969-15.027344-3.726562-19.183594-10.269531-3.773438-6.21875-4.019531-13.957031-.648438-20.402343 1.710938-3.367188 3.140626-6.0625 3.621094-6.816407 8.222656-12.582031 18.742188-23.507812 31.003906-32.199219l9.394532-7.558593c3.660156-2.960938 7.433594-5.710938 11.226562-8.4375 35.300782-25.378907 65.539063-62.207031 65.539063-74.554688.25-7.671875-3.753907-14.855469-10.40625-18.6875-4.042969-1.695312-8.679688 0-13.707031 5-33.582032 33.554688-75.941407 53.265625-116.925782 72.324219-42.429687 19.742188-82.488281 38.375-113.757812 71.09375-5.574219 6.132812-11.667969 11.765625-18.21875 16.835938-19.191406 14.234374-40.507813 13.914062-61.003906 13.75l-43.890626-.078126c-5.007812 0-10.707031 7.464844-10.707031 14.019532v176.800781c-.007812 6.003906 4.710938 10.949219 10.707031 11.222656h61.285157c11.34375-1.277343 22.375 4.25 28.140625 14.101563.292968.53125.636718 1.035156 1.011718 1.511718 30.179688 32.96875 83.6875 29.378907 84.183594 29.320313h186.207032c9.613281-.445313 18.140624-6.324219 21.972656-15.152344 2.53125-8.171875.445312-17.070312-5.453125-23.269531-4.109375-4.15625-9.703125-6.496094-15.546875-6.511719h-25.902344c-6.199219 0-11.226562-5.023437-11.226562-11.222656s5.027343-11.226563 11.226562-11.226563h65.628906c9.480469-.128906 18.035156-5.703124 21.988282-14.320312 2.539062-8.429688.46875-17.582031-5.457032-24.101562-4.117187-4.152344-9.726562-6.480469-15.582031-6.476563h-50.890625c-6.199219 0-11.222656-5.023437-11.222656-11.222656s5.023437-11.226563 11.222656-11.226563h66.585938c9.324218.179688 17.90625-5.078125 21.976562-13.46875 2.535156-8.695312.488281-18.089844-5.445312-24.941406-4.117188-4.15625-9.730469-6.492188-15.589844-6.488281h-50.867188c-6.199218 0-11.226562-5.023438-11.226562-11.222657 0-6.199218 5.027344-11.226562 11.226562-11.226562h50.867188c1.664062.074219 3.320312.234375 4.964844.484375.78125-.25 1.589843-.410156 2.410156-.484375 9.183594.484375 17.789062-4.476562 21.976562-12.660156 2.503906-8.496094.449219-17.675782-5.441406-24.289063-3.992188-4.539062-9.570312-7.382812-15.59375-7.949219zm-393.238281 168.371094c0 6.199219-5.023438 11.222656-11.222657 11.222656-6.199218 0-11.226562-5.023437-11.226562-11.222656v-67.347656c0-6.199219 5.027344-11.226562 11.226562-11.226562 6.199219 0 11.222657 5.027343 11.222657 11.226562zm0-112.246094c0 6.199219-5.023438 11.222657-11.222657 11.222657-6.199218 0-11.226562-5.023438-11.226562-11.222657v-22.449218c0-6.199219 5.027344-11.226563 11.226562-11.226563 6.199219 0 11.222657 5.027344 11.222657 11.226563zm0 0\">\n      </path>\n      <path\n        d=\"m176.460938 160.511719 5.738281-3.367188h-9.882813c-5.015625 0-9.429687-3.339843-10.796875-8.171875l-5.140625-17.984375-5.09375 17.960938c-1.367187 4.835937-5.777344 8.167969-10.796875 8.175781h-9.925781l5.691406 3.363281c4.457032 2.59375 6.574219 7.890625 5.132813 12.839844l-5.375 18.363281 13.0625-11.089844c4.1875-3.550781 10.335937-3.550781 14.527343 0l13.058594 11.089844-5.371094-18.363281c-1.425781-4.953125.710938-10.238281 5.171876-12.816406zm0 0\">\n      </path>\n      <path\n        d=\"m513.199219 160.511719 5.734375-3.367188h-9.875c-5.023438 0-9.4375-3.339843-10.796875-8.171875l-5.144531-17.984375-5.097657 17.960938c-1.359375 4.835937-5.773437 8.167969-10.796875 8.175781h-9.917968l5.6875 3.363281c4.453124 2.59375 6.574218 7.890625 5.128906 12.839844l-5.375 18.363281 13.0625-11.089844c4.191406-3.550781 10.339844-3.550781 14.527344 0l13.066406 11.089844-5.378906-18.363281c-1.421876-4.953125.710937-10.238281 5.175781-12.816406zm0 0\">\n      </path>\n      <path\n        d=\"m526.792969 0h-404.082031c-37.183594.0390625-67.316407 30.167969-67.347657 67.347656v258.167969c0 11.863281 3.1875 23.511719 9.222657 33.726563 13 .984374 25.960937-2.292969 36.929687-9.335938 5.515625-4.320312 10.648437-9.105469 15.355469-14.292969 34.167968-35.734375 78.066406-56.121093 120.496094-75.898437 41.015624-19.082032 79.757812-37.109375 110.527343-67.839844 9.371094-11.007812 24.632813-14.957031 38.164063-9.882812 15.109375 7.261718 24.589844 22.675781 24.246094 39.433593 0 29.433594-50.511719 75.207031-74.894532 92.78125-3.464844 2.503907-6.910156 4.996094-10.21875 7.671875l-9.542968 7.660156c-10.332032 7.226563-19.199219 16.335938-26.144532 26.855469-.226562.390625-.753906 1.410157-1.4375 2.757813l57.777344.03125h91.53125c11.984375.488281 23.289062 5.707031 31.433594 14.519531 5.21875 5.359375 9.003906 11.949219 11.011718 19.15625h46.972657c37.179687-.039063 67.308593-30.164063 67.347656-67.34375v-258.167969c-.039063-37.179687-30.167969-67.3085935-67.347656-67.347656zm-297.453125 155.617188-33.988282 19.820312 13.46875 45.910156c1.386719 4.757813-.511718 9.859375-4.667968 12.554688-4.15625 2.695312-9.589844 2.347656-13.367188-.859375l-34.40625-29.195313-34.359375 29.183594c-3.777343 3.207031-9.203125 3.554688-13.363281.859375-4.160156-2.691406-6.054688-7.792969-4.671875-12.554687l13.46875-45.90625-34.035156-19.8125c-4.371094-2.550782-6.5-7.714844-5.1875-12.605469s5.742187-8.296875 10.800781-8.316407h42.972656l13.578125-47.949218c1.371094-4.828125 5.78125-8.164063 10.796875-8.164063 5.019532 0 9.433594 3.335938 10.800782 8.164063l13.582031 47.949218h42.964843c5.066407.019532 9.488282 3.425782 10.804688 8.316407 1.3125 4.890625-.816406 10.054687-5.191406 12.605469zm168.371094-56.121094-33.988282 19.820312 13.46875 45.910156c1.386719 4.753907-.511718 9.855469-4.671875 12.554688-4.15625 2.695312-9.585937 2.34375-13.367187-.859375l-34.402344-29.195313-34.359375 29.1875c-3.777344 3.199219-9.210937 3.546876-13.363281.851563-4.160156-2.691406-6.058594-7.792969-4.671875-12.554687l13.46875-45.90625-34.035157-19.808594c-4.371093-2.554688-6.5-7.71875-5.1875-12.609375s5.734376-8.296875 10.800782-8.3125h42.964844l13.585937-47.953125c1.367187-4.828125 5.78125-8.164063 10.796875-8.164063 5.019531 0 9.425781 3.335938 10.796875 8.164063l13.582031 47.953125h42.96875c5.0625.015625 9.488282 3.421875 10.800782 8.3125 1.316406 4.890625-.8125 10.054687-5.1875 12.609375zm168.367187 56.121094-33.988281 19.820312 13.472656 45.910156c1.378906 4.757813-.519531 9.859375-4.671875 12.554688-4.160156 2.695312-9.59375 2.347656-13.371094-.859375l-34.402343-29.195313-34.355469 29.183594c-3.777344 3.207031-9.210938 3.554688-13.371094.859375-4.152344-2.691406-6.050781-7.792969-4.671875-12.554687l13.472656-45.90625-34.03125-19.8125c-4.378906-2.550782-6.5-7.714844-5.195312-12.605469 1.316406-4.890625 5.742187-8.296875 10.804687-8.316407h42.96875l13.582031-47.949218c1.371094-4.828125 5.777344-8.164063 10.796876-8.164063 5.023437 0 9.429687 3.335938 10.800781 8.164063l13.582031 47.949218h42.96875c5.0625.019532 9.488281 3.425782 10.796875 8.316407 1.3125 4.890625-.808594 10.054687-5.1875 12.605469zm0 0\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"allpages\" routerLink=\"/admin/edit-pages\" routerLinkActive=\"active\">\n\n    <svg class=\"erzstgfdgs\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n      <path\n        d=\"m432.734375 0h-353.46875c-43.707031 0-79.265625 35.558594-79.265625 79.265625v34.269531h512v-34.269531c0-43.707031-35.558594-79.265625-79.265625-79.265625zm-353.46875 71.765625c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm64.265625 0c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm64.269531 0c-8.25 0-15-6.71875-15-15 0-8.277344 6.75-15 15-15s15 6.722656 15 15c0 8.28125-6.75 15-15 15zm0 0\">\n      </path>\n      <path\n        d=\"m0 432.734375c0 43.707031 35.558594 79.265625 79.265625 79.265625h353.46875c43.707031 0 79.265625-35.558594 79.265625-79.265625v-289.203125h-512zm341.792969-198.261719c-5.859375-5.855468-5.859375-15.355468 0-21.210937 5.859375-5.859375 15.355469-5.859375 21.214843 0l64.265626 64.265625c5.859374 5.859375 5.859374 15.355468 0 21.214844l-64.265626 64.265624c-2.929687 2.929688-6.769531 4.394532-10.609374 4.394532-3.835938 0-7.675782-1.464844-10.605469-4.394532-5.855469-5.855468-5.855469-15.355468 0-21.210937l53.660156-53.660156zm-131.34375 111.21875 64.269531-128.535156c3.703125-7.40625 12.714844-10.410156 20.121094-6.707031 7.410156 3.703125 10.414062 12.714843 6.710937 20.125l-64.269531 128.535156c-2.625 5.253906-7.925781 8.292969-13.425781 8.292969-2.253907 0-4.542969-.507813-6.695313-1.585938-7.410156-3.703125-10.414062-12.714844-6.710937-20.125zm-125.722657-68.164062 64.265626-64.269532c5.859374-5.855468 15.355468-5.855468 21.214843 0 5.855469 5.859376 5.855469 15.355469 0 21.214844l-53.660156 53.660156 53.65625 53.660157c5.859375 5.855469 5.859375 15.355469 0 21.214843-2.925781 2.925782-6.765625 4.390626-10.605469 4.390626-3.835937 0-7.675781-1.464844-10.605468-4.390626l-64.265626-64.269531c-5.859374-5.855469-5.859374-15.351562 0-21.210937zm0 0\">\n      </path>\n    </svg>\n\n  </div>\n  <div class=\"box\" id=\"ticket\" routerLink=\"/admin/tickets\" routerLinkActive=\"active\"> <span\n      class=\"fsezdqcx\"></span>\n\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n      viewBox=\"0 0 455.02 455.02\" style=\"enable-background:new 0 0 455.02 455.02;\" xml:space=\"preserve\">\n      <path\n        d=\"M432.612,0H22.407c-11.046,0-20,8.954-20,20s8.954,20,20,20h21.917v410.571c0,0.984,0.61,1.865,1.53,2.212    c0.921,0.347,1.96,0.088,2.61-0.651l18.347-20.875c1.127-1.282,2.735-2.041,4.441-2.096s3.359,0.599,4.567,1.806l22.243,22.243    c2.412,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0    l22.534-22.533c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.412,2.412,6.324,2.412,8.736,0l22.534-22.533    c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.413,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0    l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0l22.188-22.188c1.216-1.216,2.885-1.87,4.603-1.805    c1.719,0.065,3.332,0.845,4.452,2.15l18.337,21.365c0.644,0.751,1.688,1.021,2.615,0.678c0.927-0.344,1.543-1.228,1.543-2.217V40    h21.918c11.046,0,20-8.954,20-20S443.658,0,432.612,0z M103.896,79.541h166.577c8.284,0,15,6.716,15,15s-6.716,15-15,15H103.896    c-8.284,0-15-6.716-15-15S95.612,79.541,103.896,79.541z M346.296,283.011H102.748c-8.284,0-15-6.716-15-15s6.716-15,15-15    h243.548c8.284,0,15,6.716,15,15S354.58,283.011,346.296,283.011z M347.444,199.148H103.896c-8.284,0-15-6.716-15-15    s6.716-15,15-15h243.548c8.284,0,15,6.716,15,15S355.728,199.148,347.444,199.148z\">\n      </path>\n    </svg>\n\n  </div>\n</div>"

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

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divchatadmin\" id=\"my-chat\">\n  <div class=\"divmessenger\">\n    <div class=\"divsearchcus\">\n      <input id=\"inputsearcus\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Custmer\">\n      <svg class=\"svgsearcus\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n      <svg class=\"svgaddcust\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n        style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n        <path\n          d=\"M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"divstatuecus\">\n      <label class=\"ytreutuy\">All</label>\n      <label class=\"fghdhfgcc\">Online</label>\n      <label>Offline</label>\n    </div>\n    <div class=\"divalluserchat\">\n\n      <div class=\"divperchat divperchatp\">\n        <div class=\"contermess\">3</div>\n        <div class=\"divavatarprof1\">\n          <svg class=\"svgsig21\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n            style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n            <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n            <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n            </path>\n          </svg>\n          <div class=\"divstatue1\"></div>\n        </div>\n        <label class=\"labnameper\">Med Zouine</label>\n        <br>\n        <div class=\"divdevicepay\">\n          <svg class=\"svgphone\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"100 0 512 512\"\n            style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n            <path\n              d=\"M384,0H128c-14.138,0-25.6,11.461-25.6,25.6v460.8c0,14.138,11.461,25.6,25.6,25.6h256c14.138,0,25.6-11.461,25.6-25.6     V25.6C409.6,11.461,398.138,0,384,0z M392.533,68.267H196.267c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h196.267     v332.8h-25.6c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h25.6v51.2c0,4.713-3.82,8.533-8.533,8.533H128     c-4.713,0-8.533-3.82-8.533-8.533v-51.2h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H119.467v-332.8h25.6     c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533h-25.6V25.6c0-4.713,3.82-8.533,8.533-8.533h256     c4.713,0,8.533,3.82,8.533,8.533V68.267z\">\n            </path>\n            <path\n              d=\"M264.533,460.8h-17.067c-4.713,0-8.533,3.82-8.533,8.533s3.82,8.533,8.533,8.533h17.067c4.713,0,8.533-3.82,8.533-8.533     S269.246,460.8,264.533,460.8z\">\n            </path>\n          </svg>\n          <label class=\"labelpay\">U.S.A</label>\n        </div>\n      </div>\n      <div class=\"divperchat\">\n        <div class=\"divavatarprof1\">\n          <svg class=\"svgsig21\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n            style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n            <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n            <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n            </path>\n          </svg>\n          <div class=\"divstatue1\"></div>\n        </div>\n        <label class=\"labnameper\">Med Zouine</label>\n        <br>\n        <div class=\"divdevicepay\">\n          <svg class=\"svgphone\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\"\n            style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\">\n            <path\n              d=\"M29,4H3C1.346,4,0,5.346,0,7v13c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V7C32,5.346,30.654,4,29,4z M30,20     c0,0.551-0.448,1-1,1H3c-0.552,0-1-0.449-1-1V7c0-0.551,0.448-1,1-1h26c0.552,0,1,0.449,1,1V20z M30.5,25H20c0,0.552-0.447,1-1,1     h-6c-0.553,0-1-0.448-1-1H1.5C0.672,25,0,25.672,0,26.5S0.672,28,1.5,28h29c0.828,0,1.5-0.672,1.5-1.5S31.328,25,30.5,25z\">\n            </path>\n          </svg>\n          <label class=\"labelpay\">U.S.A</label>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"chatdiv\">\n    <div class=\"divsearshchat\">\n      <div class=\"divpercfhat \">\n        <div class=\"divavatarhprof1\">\n          <svg class=\"svgsihg21\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n            style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n            <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n            <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n            </path>\n          </svg>\n          <div class=\"divstatue12\"></div>\n        </div>\n        <label class=\"labnahmeper\">Med Zouine</label>\n        <br>\n        <label class=\"labelhstatue\">Active Now</label>\n      </div>\n      <div class=\"divsitlklq321\">\n        <svg class=\"svgblockus\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 215.455 215.455\"\n          style=\"enable-background:new 0 0 215.455 215.455;\" xml:space=\"preserve\">\n          <path\n            d=\"M107.728,0.001C48.325,0.001,0,48.329,0,107.732c0.005,59.397,48.332,107.722,107.728,107.722  c59.401,0,107.728-48.324,107.728-107.723C215.455,48.329,167.129,0.001,107.728,0.001z M107.728,15.001  c22.021,0,42.269,7.721,58.192,20.592L35.593,165.919C22.724,149.997,15.002,129.75,15,107.731  C15,56.6,56.598,15.001,107.728,15.001z M107.728,200.454c-23.718,0-45.381-8.956-61.797-23.658L176.796,45.931  c14.703,16.416,23.659,38.081,23.659,61.801C200.455,158.859,158.857,200.454,107.728,200.454z\">\n          </path>\n        </svg>\n      </div>\n      <div class=\"svgsittingchat\">\n        <svg class=\"\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 384 384\" style=\"enable-background:new 0 0 384 384;\"\n          xml:space=\"preserve\">\n          <circle cx=\"192\" cy=\"42.667\" r=\"42.667\"></circle>\n          <circle cx=\"192\" cy=\"192\" r=\"42.667\"></circle>\n          <circle cx=\"192\" cy=\"341.333\" r=\"42.667\"></circle>\n        </svg>\n      </div>\n      <div class=\"svgsittingchat1\">\n        <svg class=\"\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n          x=\"0px\" y=\"0px\" viewBox=\"0 0 438.529 438.529\" style=\"enable-background:new 0 0 438.529 438.529;\"\n          xml:space=\"preserve\">\n          <path\n            d=\"M180.156,225.828c-1.903-1.902-4.093-2.854-6.567-2.854c-2.475,0-4.665,0.951-6.567,2.854l-94.787,94.787l-41.112-41.117    c-3.617-3.61-7.895-5.421-12.847-5.421c-4.952,0-9.235,1.811-12.851,5.421c-3.617,3.621-5.424,7.905-5.424,12.854v127.907    c0,4.948,1.807,9.229,5.424,12.847c3.619,3.613,7.902,5.424,12.851,5.424h127.906c4.949,0,9.23-1.811,12.847-5.424    c3.615-3.617,5.424-7.898,5.424-12.847s-1.809-9.233-5.424-12.854l-41.112-41.104l94.787-94.793    c1.902-1.903,2.853-4.086,2.853-6.564c0-2.478-0.953-4.66-2.853-6.57L180.156,225.828z\">\n          </path>\n          <path\n            d=\"M433.11,5.424C429.496,1.807,425.212,0,420.263,0H292.356c-4.948,0-9.227,1.807-12.847,5.424    c-3.614,3.615-5.421,7.898-5.421,12.847s1.807,9.233,5.421,12.847l41.106,41.112l-94.786,94.787    c-1.901,1.906-2.854,4.093-2.854,6.567s0.953,4.665,2.854,6.567l32.552,32.548c1.902,1.903,4.086,2.853,6.563,2.853    s4.661-0.95,6.563-2.853l94.794-94.787l41.104,41.109c3.62,3.616,7.905,5.428,12.854,5.428s9.229-1.812,12.847-5.428    c3.614-3.614,5.421-7.898,5.421-12.847V18.268C438.53,13.315,436.734,9.04,433.11,5.424z\">\n          </path>\n        </svg>\n      </div>\n      <div class=\"search1\">\n        <input class=\"insear\" maxlength=\"100\" type=\"search\" name=\"\" value=\"\" placeholder=\"Search Message\">\n        <div class=\"logosear\">\n          <svg aria-hidden=\"true\" data-prefix=\"fal\" data-icon=\"search\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"0 0 512 512\" class=\"svg-inline--fa fa-search fa-w-16 fa-2x\">\n            <path fill=\"currentColor\"\n              d=\"M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z\">\n            </path>\n          </svg>\n        </div>\n      </div>\n    </div>\n    <div class=\"chatboxcont\">\n      <div class=\"chatbox1\">\n        <div class=\"sendmessage1\">\n          <div class=\"avatrmess\">\n            <svg class=\"svgsig2m\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n              style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n              <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n              <path\n                d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n              </path>\n            </svg>\n          </div>\n          <div class=\"divcontmessag\">\n            <label class=\"messagcont1\">If you did not log in you should change your CoinPayments</label>\n            <div class=\"divupimgchat\">\n              <img class=\"imagecatup123 imagecatup4\" src=\"/Content/Images/spa2.jpg\" alt=\"\">\n              <img class=\"imagecatup123\" src=\"/Content/Images/spa1.jpg\" alt=\"\">\n              <img class=\"imagecatup123\" src=\"/Content/Images/spa3.jpg\" alt=\"\">\n              <div class=\"divupbefore123\">+4</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"sendmessage1\">\n          <label class=\"messagcont2\">If you did not log in you should change your CoinPayments</label>\n          <div class=\"divsiitingmess\">\n            <svg class=\"svgsittingmess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 384 384\"\n              style=\"enable-background:new 0 0 384 384;\" xml:space=\"preserve\">\n              <circle cx=\"192\" cy=\"42.667\" r=\"42.667\"></circle>\n              <circle cx=\"192\" cy=\"192\" r=\"42.667\"></circle>\n              <circle cx=\"192\" cy=\"341.333\" r=\"42.667\"></circle>\n            </svg>\n            <div class=\"divsitlklq\">\n              <svg class=\"svgdeletm\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                width=\"427pt\">\n                <path\n                  d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n                <path\n                  d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n                <path\n                  d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                </path>\n                <path\n                  d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                </path>\n              </svg>\n              <svg class=\"svgeditm\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                <path\n                  d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                </path>\n              </svg>\n              <svg class=\"svgredirectm\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 490.094 490.094\"\n                style=\"enable-background:new 0 0 490.094 490.094;\" xml:space=\"preserve\">\n                <path\n                  d=\"M260.148,15.1c-68.436,0-129.865,29.913-171.981,77.364c-3.254,2.074-27.849,40.455-18.931,49.37    c8.919,8.92,55.231-28.185,55.231-28.185c34.334-35.449,82.432-57.487,135.681-57.487c104.319,0,188.885,84.565,188.885,188.884    c0,104.318-84.567,188.885-188.885,188.885c-98.783,0-179.841-75.836-188.165-172.46h34.582c3.183,0,5.761-2.58,5.761-5.761    c0,0-47.522-89.284-51.842-93.606c-4.321-4.321-8.64,0-8.64,0L0,255.711c0,3.182,2.578,5.761,5.759,5.761H30.79    C39.214,380.8,138.675,474.994,260.148,474.994c126.996,0,229.946-102.951,229.946-229.948S387.144,15.1,260.148,15.1z\">\n                </path>\n              </svg>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"senddiv\">\n      <textarea id=\"inputchat\" placeholder=\"Write Message Here\"></textarea>\n      <div class=\"iconsendm\">\n        <svg class=\"\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 535.5 535.5\"\n          style=\"enable-background:new 0 0 535.5 535.5;\" xml:space=\"preserve\">\n          <polygon points=\"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75   \"></polygon>\n        </svg>\n      </div>\n      <div class=\"iconimageup\">\n        <svg class=\"\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 504 504\" style=\"enable-background:new 0 0 504 504;\"\n          xml:space=\"preserve\">\n          <path\n            d=\"M311.3,108.74c-15.304,0-27.752,12.444-27.752,27.752c0.004,15.3,12.452,27.744,27.752,27.744s27.752-12.44,27.752-27.744    C339.052,121.188,326.604,108.74,311.3,108.74z\">\n          </path>\n          <path\n            d=\"M252.164,286.1c-49.992,0-90.508,40.52-90.508,90.5c0,49.984,40.516,90.508,90.508,90.508s90.512-40.524,90.512-90.508    C342.676,326.62,302.156,286.1,252.164,286.1z M303.148,387.328h-39.336v40.344c0,6.476-5.336,11.744-11.812,11.744    s-11.812-5.264-11.812-11.744v-40.344h-39.172c-6.476,0-11.748-5.336-11.748-11.812s5.268-11.812,11.748-11.812h39.172v-38.168    c0-6.472,5.336-11.744,11.812-11.744s11.812,5.268,11.812,11.744v38.168h39.336c6.476,0,11.748,5.336,11.748,11.812    S309.624,387.328,303.148,387.328z\">\n          </path>\n          <path\n            d=\"M484.356,36.892H19.976C9.12,36.892,0,46.56,0,57.416v299.496c0,10.86,9.12,18.6,19.976,18.6h118.056    c0-63,51.2-114.124,114.132-114.124c62.936,0,114.136,51.124,114.136,114.124h118.056c10.856,0,19.644-7.744,19.644-18.6V57.416    C504,46.56,495.212,36.892,484.356,36.892z M391.5,172.552l-74.456,74.472L203.712,133.708c-1.54-1.54-4.024-1.54-5.564,0    l-71.884,71.88l-32.816-32.812c-1.536-1.54-4.172-1.54-5.708,0l-52.304,52.16V72.328H468.56v171.748l-71.5-71.524    C395.52,171.012,393.04,171.012,391.5,172.552z\">\n          </path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  <div class=\"divchatprofile\">\n    <div class=\"divtreuyrc\">\n      <svg class=\"svgverefied\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32.229 32.229\"\n        style=\"enable-background:new 0 0 32.229 32.229;\" xml:space=\"preserve\">\n        <path\n          d=\"M31.496,9.374L14.477,26.391c-0.469,0.471-1.104,0.732-1.768,0.732c-0.664,0-1.299-0.263-1.768-0.732L0.733,16.183   c-0.978-0.976-0.978-2.559,0-3.534c0.977-0.977,2.559-0.977,3.535,0l8.44,8.439l15.25-15.25c0.977-0.977,2.559-0.977,3.534,0   C32.473,6.815,32.473,8.398,31.496,9.374z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"divavatarprof\">\n      <svg class=\"svgsig2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n        style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n        <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n        <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n        </path>\n      </svg>\n      <div class=\"divstatue\"></div>\n    </div>\n    <label class=\"labname\">Med Zouine</label>\n    <div class=\"divlevpay\">\n      <div class=\"divlevelchat\">\n        <svg class=\"svgmedallev\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 504.492 504.492\"\n          style=\"enable-background:new 0 0 504.492 504.492;\" xml:space=\"preserve\">\n          <g>\n            <path style=\"fill:#00BCD4\"\n              d=\"M308.567,161.452l-152.025,68.923l122.88,270.966l66.166-55.926l85.465-12.603  C431.053,432.812,308.567,161.452,308.567,161.452z\"\n              data-original=\"#2B414D\" class=\"\" data-old_color=\"#00bcd4\"></path>\n            <path style=\"fill:#eee\"\n              d=\"M195.927,164.209l152.025,68.923l-122.88,271.36l-66.166-56.32l-85.858-12.603  C73.047,435.569,195.927,164.209,195.927,164.209z\"\n              data-original=\"#475F6C\" class=\"active-path\" data-old_color=\"#00BCD4\"></path>\n            <path style=\"fill: #905a28;\"\n              d=\"M449.17,197.292c0,14.572-20.874,26.782-24.025,40.566c-3.151,14.178,10.634,34.265,4.726,47.262  c-6.302,12.997-30.326,14.572-38.991,25.6s-4.726,35.446-15.754,44.505s-33.083-0.394-45.686,5.908s-19.298,29.932-33.083,33.083  c-13.391,3.151-29.538-14.966-43.717-14.966c-14.178,0-30.326,18.117-43.717,14.966c-13.785-3.151-20.48-26.782-33.083-33.083  c-12.603-6.302-35.052,3.151-45.686-5.908c-11.028-9.058-7.089-33.477-15.754-44.505s-32.689-12.603-38.991-25.6  c-5.908-12.603,7.877-33.083,4.726-47.262c-3.938-13.785-24.812-25.994-24.812-40.566s20.874-26.782,24.025-40.566  c3.151-14.178-10.634-34.265-4.726-47.262c6.302-12.997,30.326-14.572,38.991-25.6s4.726-35.446,15.754-44.505  s33.083,0.394,45.686-5.908c12.603-6.302,19.298-29.932,33.083-33.083c13.391-3.151,29.538,14.966,43.717,14.966  c14.178,0,30.326-18.117,43.717-14.966c13.785,3.151,20.48,26.782,33.083,33.083c12.603,6.302,35.052-3.151,45.686,5.908  c11.028,9.058,7.089,33.477,15.754,44.505s32.689,12.603,38.991,25.6c5.908,12.603-7.877,33.083-4.726,47.262  C428.296,170.511,449.17,182.72,449.17,197.292z\"\n              data-original=\"#EFC75E\" class=\"\"></path>\n            <path style=\"fill: #c9803c;\"\n              d=\"M252.247,118.523c-43.717,0-78.769,35.446-78.769,78.769s35.446,78.769,78.769,78.769  c43.717,0,78.769-35.446,78.769-78.769S295.963,118.523,252.247,118.523z M252.247,232.738c-19.692,0-35.446-15.754-35.446-35.446  s15.754-35.446,35.446-35.446s35.446,15.754,35.446,35.446S271.939,232.738,252.247,232.738z M252.247,55.507  c-78.375,0-141.785,63.409-141.785,141.785s63.409,141.785,141.785,141.785s141.784-63.41,141.784-141.785  S330.622,55.507,252.247,55.507z M252.247,315.446c-65.378,0-118.154-52.775-118.154-118.154S186.868,79.138,252.247,79.138  s118.154,52.775,118.154,118.154S317.625,315.446,252.247,315.446z\"\n              data-original=\"#eee\" class=\"\"></path>\n          </g>\n        </svg>\n        <label class=\"lablevel\">Level 1</label>\n      </div>\n      <div class=\"divpaychat\">\n        <svg class=\"svgpay\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 58 58\" style=\"enable-background:new 0 0 58 58;\"\n          xml:space=\"preserve\">\n          <path\n            d=\"M41.676,5.324L41.676,5.324c-7.098-7.098-18.607-7.098-25.706,0h0  C9.574,11.72,8.855,23.763,14.282,31l14.541,21l14.541-21C48.792,23.763,48.072,11.72,41.676,5.324z M29,24c-3.314,0-6-2.686-6-6  s2.686-6,6-6s6,2.686,6,6S32.314,24,29,24z\">\n          </path>\n        </svg>\n        <label class=\"labpay\">U.S.A</label>\n      </div>\n    </div>\n    <div class=\"ezsrtyghsfd\">\n      <div class=\"labpointsch\">\n        <svg class=\"svgprofchat\" xmlns=\"http://www.w3.org/2000/svg\" height=\"512pt\" viewBox=\"0 -46 512 512\"\n          width=\"512pt\">\n          <path\n            d=\"m501.980469 200.390625h-9.019531v-150.292969c0-27.625-22.472657-50.097656-50.097657-50.097656h-392.765625c-27.625 0-50.097656 22.472656-50.097656 50.097656v320.625c0 27.625 22.472656 50.097656 50.097656 50.097656h392.765625c27.625 0 50.097657-22.472656 50.097657-50.097656v-70.136718h9.019531c5.535156 0 10.019531-4.484376 10.019531-10.019532v-80.15625c0-5.53125-4.484375-10.019531-10.019531-10.019531zm-80.15625 60.117187h70.136719v20.039063h-120.09375l-30.058594-30.058594 30.058594-30.058593h120.09375v20.039062h-70.136719c-5.519531 0-10.019531 4.5-10.019531 10.019531 0 5.523438 4.5 10.019531 10.019531 10.019531zm-401.785157-210.410156c0-16.574218 13.484376-30.058594 30.058594-30.058594h392.765625c16.574219 0 30.058594 13.484376 30.058594 30.058594v.027344c-8.378906-6.304688-18.789063-10.046875-30.058594-10.046875h-392.765625c-11.269531 0-21.679687 3.742187-30.058594 10.046875zm0 40.078125c0-16.574219 13.484376-30.058593 30.058594-30.058593h392.765625c16.574219 0 30.058594 13.484374 30.058594 30.058593v.027344c-8.378906-6.304687-18.789063-10.046875-30.058594-10.046875h-392.765625c-11.269531 0-21.679687 3.742188-30.058594 10.046875zm452.882813 280.546875c0 16.574219-13.484375 30.058594-30.058594 30.058594h-392.765625c-16.574218 0-30.058594-13.484375-30.058594-30.058594v-240.46875c0-16.574218 13.484376-30.058594 30.058594-30.058594h392.765625c16.574219 0 30.058594 13.484376 30.058594 30.058594v70.136719h-105.203125c-2.65625 0-5.207031 1.058594-7.085938 2.933594l-40.078124 40.082031c-3.914063 3.910156-3.914063 10.253906 0 14.167969l40.078124 40.078125c1.878907 1.878906 4.429688 2.9375 7.085938 2.9375h105.203125zm0 0\">\n          </path>\n          <path\n            d=\"m381.746094 240.46875c-5.519532 0-10.019532 4.5-10.019532 10.019531 0 5.523438 4.5 10.019531 10.019532 10.019531 5.519531 0 10.019531-4.496093 10.019531-10.019531 0-5.519531-4.5-10.019531-10.019531-10.019531zm0 0\">\n          </path>\n          <path\n            d=\"m123.457031 232.511719c-24.269531 0-44.015625-19.5625-44.015625-43.613281 0-24.046876 19.746094-43.613282 44.015625-43.613282 24.265625 0 44.011719 19.5625 44.011719 43.613282 0 24.046874-19.742188 43.613281-44.011719 43.613281zm0-67.1875c-13.222656 0-23.976562 10.574219-23.976562 23.574219s10.753906 23.574218 23.976562 23.574218c13.21875 0 23.972657-10.574218 23.972657-23.574218s-10.753907-23.574219-23.972657-23.574219zm0 0\">\n          </path>\n          <path\n            d=\"m239.039062 355.695312c-24.269531 0-44.015624-19.566406-44.015624-43.613281 0-24.050781 19.746093-43.617187 44.015624-43.617187 24.269532 0 44.015626 19.566406 44.015626 43.617187 0 24.046875-19.746094 43.613281-44.015626 43.613281zm0-67.191406c-13.222656 0-23.976562 10.578125-23.976562 23.574219 0 13 10.753906 23.578125 23.976562 23.578125 13.21875 0 23.976563-10.578125 23.976563-23.578125 0-12.996094-10.757813-23.574219-23.976563-23.574219zm0 0\">\n          </path>\n          <path\n            d=\"m82.660156 355.695312c-2.5625 0-5.128906-.980468-7.082031-2.933593-3.914063-3.914063-3.914063-10.257813 0-14.171875l190.371094-190.371094c3.910156-3.914062 10.257812-3.914062 14.167969 0 3.914062 3.910156 3.914062 10.253906 0 14.167969l-190.371094 190.375c-1.957032 1.953125-4.519532 2.933593-7.085938 2.933593zm0 0\">\n          </path>\n        </svg>\n        <label class=\"labjfqsd\">Points</label>\n        <label class=\"laboleptrert laboleptrert3\">90</label>\n      </div>\n      <div class=\"labordereh\">\n        <svg class=\"svgprofchat\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 421.021 421.021\"\n          style=\"enable-background:new 0 0 421.021 421.021;\" xml:space=\"preserve\">\n          <rect x=\"178.902\" y=\"110.08\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"178.902\" y=\"147.596\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"178.902\" y=\"222.628\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"177.862\" y=\"297.661\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"177.862\" y=\"260.145\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"177.862\" y=\"185.112\" width=\"116.533\" height=\"15\"></rect>\n          <rect x=\"178.902\" y=\"335.177\" width=\"116.533\" height=\"15\"></rect>\n          <path\n            d=\"M285.325,27.235V0h-149.63v27.235H57.156v393.786h306.709V27.235H285.325z M285.325,89.063V75.978h31.43v296.302H104.266   V75.978h31.43v13.085H285.325z M150.695,15h119.63v59.063h-119.63V15z M348.865,406.021H72.156V42.235h63.539v18.742h-46.43   v326.302h242.489V60.978h-46.43V42.235h63.54V406.021z\">\n          </path>\n          <rect x=\"174.047\" y=\"37.031\" width=\"72.928\" height=\"15\"></rect>\n          <polygon\n            points=\"112.97,129.99 137.365,154.386 169.539,122.212 158.932,111.606 137.365,133.172 123.577,119.384  \">\n          </polygon>\n          <polygon\n            points=\"137.365,228.672 123.577,214.884 112.97,225.49 137.365,249.886 169.539,217.712 158.932,207.106  \">\n          </polygon>\n          <polygon\n            points=\"156.104,297.289 141.254,312.138 126.405,297.289 115.799,307.895 130.648,322.745 115.799,337.594 126.405,348.2    141.254,333.351 156.104,348.2 166.71,337.594 151.861,322.745 166.71,307.895  \">\n          </polygon>\n        </svg>\n        <label class=\"labjfqsd\">Orders</label>\n        <label class=\"laboleptrert \">4</label>\n      </div>\n      <div class=\"labadress\">\n        <svg class=\"svgprofchat\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.757 54.757\"\n          style=\"enable-background:new 0 0 54.757 54.757;\" xml:space=\"preserve\">\n          <path\n            d=\"M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5   s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z\">\n          </path>\n          <path\n            d=\"M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952   L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4   C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031   C45.576,13.08,46.321,24.468,41.099,31.431z\">\n          </path>\n        </svg>\n        <label class=\"labjfqsd\">Address</label>\n        <label class=\"laboleptrert \">1</label>\n      </div>\n    </div>\n    <div class=\"divallordercart\">\n      <label>Cart (6)</label>\n      <label class=\"labviewall\">View All</label>\n      <div class=\"divcartprod\">\n        <img class=\"imagecatup imagecatup4\" src=\"/Content/Images/spa2.jpg\" alt=\"\">\n        <img class=\"imagecatup\" src=\"/Content/Images/spa1.jpg\" alt=\"\">\n        <img class=\"imagecatup\" src=\"/Content/Images/spa1.jpg\" alt=\"\">\n        <img class=\"imagecatup\" src=\"/Content/Images/spa3.jpg\" alt=\"\">\n        <img class=\"imagecatup\" src=\"/Content/Images/spa3.jpg\" alt=\"\">\n        <div class=\"divupbefore\">+2</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/tickets/tickets.component.css":
/*!***********************************************!*\
  !*** ./src/app/tickets/tickets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tickets/tickets.component.html":
/*!************************************************!*\
  !*** ./src/app/tickets/tickets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divticket\" id=\"my-ticket\">\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport\">Filter</label>\n  </div>\n  <div class=\"ytytytbv\">\n    <div class=\"checkboxtb\">\n      <label class=\"forhjqsd2\" for=\"check2\"></label>\n      <input type=\"checkbox\" id=\"check2\" required=\"\">\n      <label class=\"forhjqsd\"></label>\n    </div>\n    <div class=\"fdfdghfgh\">ID\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgzeaeuio\">Email</div>\n    <div class=\"fdgtryoiuio\">Content</div>\n    <div class=\"fdrthcxvwb\">Date\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"tddefgdhils\">\n      <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n        <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n      </svg>\n    </div>\n    <div class=\"tddetails\">Details</div>\n  </div>\n\n  <div class=\"divallordersm3\">\n    <div class=\"jklhmhgfsi\">\n      <table class=\"divstatueoreder\">\n        <tbody class=\"\">\n          <tr class=\"trorders\">\n            <td class=\"checkboxtb2\">\n              <label class=\"forhjqsd2\" for=\"check3\"></label>\n              <input type=\"checkbox\" id=\"check3\" required=\"\">\n              <label class=\"forhjqsd\"></label>\n            </td>\n            <td class=\"labnumorder\">44</td>\n            <td class=\"fdgdzeazreio\">medzouien@gmail.com</td>\n            <td class=\"gdfscdjbvdd\">\n              <label class=\"ezrgkrgfrvsx\">Spikes Running Shoes To Shopping Shoes</label>\n            </td>\n            <td class=\"gdfscxgthbv\">14/03/2019</td>\n            <td class=\"tddefgdhils\">\n              <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n                style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n                <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n              </svg>\n              <div class=\"refgdfdbfg\">\n                <svg class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                  width=\"427pt\">\n                  <path\n                    d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                  </path>\n                  <path\n                    d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm22\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                  version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 34.816 34.816\"\n                  style=\"enable-background:new 0 0 34.816 34.816;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M34.816,19.783v11.604c0-6.117-4.961-11.078-11.08-11.078H11.871v6.859L0,15.297L11.871,3.43v5.272h11.865   C29.855,8.703,34.816,13.666,34.816,19.783z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"tdsvgdown\">\n              <svg class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n                style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n                <path\n                  d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n                </path>\n              </svg>\n            </td>\n          </tr>\n          <tr class=\"etrbcvfb moredetails\">\n            <td class=\"ezrfsddqs\" colspan=\"7\">\n              <div class=\"ytrtry\">\n                <div class=\"fduioyuhvc\">medzouien@gmail.com</div>\n                <div class=\"fdgnbhhvc\">Hello everyone! Drew this pic recently for the Contact Us page, and also made an\n                  imaginary logo (maybe it already exists, bc it took me like 5 seconds to make it, so I probably saw it\n                  before, hope I wont be sued for that 😰). Full size illustration is in the attachments. Thanks for\n                  your attention, hope you'll like these ladies!</div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tickets/tickets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TicketsComponent = /** @class */ (function () {
    function TicketsComponent() {
    }
    TicketsComponent.prototype.ngOnInit = function () {
    };
    TicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.css */ "./src/app/tickets/tickets.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/user/reviews/reviews.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/reviews/reviews.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/reviews/reviews.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/reviews/reviews.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divallreview\" id=\"my-review\" style=\"display: flow-root;\">\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport\">Import</label>\n    <label class=\"bottonimport\">Filter</label>\n    <select class=\"selectcategorie\" name=\"\">\n      <option value=\"\">PHONE</option>\n      <option value=\"\">PC</option>\n      <option value=\"\">BABY</option>\n      <option value=\"\">HOUSE GARIENT</option>\n      <option value=\"\">CAR MOTO</option>\n    </select>\n    <select class=\"selectsubcateg\" name=\"\">\n      <option value=\"\">PHONE</option>\n      <option value=\"\">PC</option>\n      <option value=\"\">BABY</option>\n      <option value=\"\">HOUSE GARIENT</option>\n      <option value=\"\">CAR MOTO</option>\n    </select>\n\n  </div>\n  <div class=\"ytytytbv\">\n    <div class=\"checkboxtb\">\n      <label class=\"forhjqsd2\" for=\"check2\"></label>\n      <input type=\"checkbox\" id=\"check2\" required=\"\">\n      <label class=\"forhjqsd\"></label>\n    </div>\n    <div class=\"fdfdghfgh\">ID\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdhfouio\">Image</div>\n    <div class=\"fdgdhgfouio\">Custmer</div>\n    <div class=\"fdgdooiuio\">Content</div>\n    <div class=\"fdrthcxvwb\">Date\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"drtfbbvcx21\">Stock</div>\n    <div class=\"tddefgdhils\">\n      <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n        <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n      </svg>\n    </div>\n    <div class=\"tddetails\">Details</div>\n  </div>\n  <div class=\"divallordersm1\">\n    <div class=\"jklhmhgfsi\">\n      <table class=\"divstatueoreder\">\n        <tbody class=\"\">\n          <tr class=\"trorders\">\n            <td class=\"checkboxtb2\">\n              <label class=\"forhjqsd2\" for=\"check3\"></label>\n              <input type=\"checkbox\" id=\"check3\" required=\"\">\n              <label class=\"forhjqsd\"></label>\n            </td>\n            <td class=\"labnumorder\">44</td>\n            <td class=\"fgdercxbvfa\">\n              <div class=\"ertytrh\">\n                <svg class=\"svgsigj231\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                  style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                  <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                  <path\n                    d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"fdgdfouiyuio\">Med Zouine</td>\n            <td class=\"gdfscdxbvdd\">\n              <label class=\"ezrergfrvsx\">Spikes Running Shoes To Shopping Shoes</label>\n            </td>\n            <td class=\"gdfscxgthbv\">14/03/2019</td>\n            <td class=\"labstatueordevrc\">\n              <label class=\"labcolstock\"></label>\n            </td>\n            <td class=\"tddefgdhils\">\n              <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n                style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n                <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n              </svg>\n              <div class=\"refgdfdbfg\">\n                <svg class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                  style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                  width=\"427pt\">\n                  <path\n                    d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                  </path>\n                  <path\n                    d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                  style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                  </path>\n                </svg>\n                <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\"\n                  style=\"enable-background:new 0 0 54.971 54.971;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n                  </path>\n                  <path\n                    d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n                  </path>\n                  <path\n                    d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n                  </path>\n                  <path\n                    d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n                  </path>\n                  <path\n                    d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n                  </path>\n                  <path\n                    d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n                  </path>\n                  <path\n                    d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n                  </path>\n                  <path\n                    d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"tdsvgdown\">\n              <svg class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n                style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n                <path\n                  d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n                </path>\n              </svg>\n            </td>\n          </tr>\n          <tr class=\"etrbcvfb moredetails\">\n            <td class=\"ezrfsddqs\" colspan=\"9\">\n              <div class=\"gfhdvbngxw\">\n                <div class=\"commentrev\">\n                  <div class=\"avatarrev425\">\n                    <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                      style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                      <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                      <path\n                        d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                      </path>\n                    </svg>\n                  </div>\n                  <div class=\"tryrrtyy\">\n                    <span class=\"nameavatar1223\">Med Zouine</span>\n                    <span class=\"dateavatar1223\">20/04/2018</span>\n                    <div class=\"starrev23\">\n                      <span>★</span>\n                      <span>★</span>\n                      <span>★</span>\n                      <span>★</span>\n                      <span>★</span>\n                    </div>\n                  </div>\n                  <div class=\"imgcomment\">\n                    <img src=\"/Content/Images/spa2.jpg\" alt=\"\">\n                    <img src=\"/Content/Images/spa1.jpg\" alt=\"\">\n                    <img src=\"/Content/Images/spa4.jpg\" alt=\"\">\n                  </div>\n                  <label class=\"yourcomment\">\n                    I love the new wave cuff! Im Getting ready to order another!I love the new wave cuff! Im Getting\n                    ready to order another!\n                    I love the new wave cuff! Im Getting ready to order another!\n                  </label>\n                </div>\n                <table class=\"tabljedetails\">\n                  <tbody class=\"tbodydetails\">\n                    <tr>\n                      <td class=\"dsgffsfdsbbvc\">IMG</td>\n                      <td class=\"dsgffsbbvc\">Color</td>\n                      <td class=\"dgfghfgcxv\">ID</td>\n                      <td class=\"tyytosduiezcb\">Name</td>\n                    </tr>\n                    <tr>\n                      <td class=\"fxsdreghrg\">\n                        <img class=\"imgproddet\" src=\"/Content/Images/spa1.jpg\" alt=\"\">\n                      </td>\n                      <td class=\"hjksghgf\">\n                        <label class=\"bxcerfdf\"></label>\n                      </td>\n                      <td class=\"hjksdfqghgf\">454</td>\n                      <td class=\"sfdgfddsdghv\">\n                        <label class=\"ezrergfrvsx\">Spikes Running Shoes To Shopping Shoes</label>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/reviews/reviews.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/reviews/reviews.component.ts ***!
  \***************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/user/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/user/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/user/users-list/users-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/users-list/users-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/users-list/users-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/users-list/users-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divusers\" id=\"my-userlist\">\n  <div class=\"rqsetgertg\">\n    <input class=\"datefilt1\" type=\"date\" name=\"\" value=\"\">\n    <label>~</label>\n    <input class=\"datefilt2\" type=\"date\" name=\"\" value=\"\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search Order\">\n      <svg class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n        style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n        <path\n          d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n        </path>\n      </svg>\n    </div>\n    <label class=\"bottonimport\">Import</label>\n    <label class=\"bottonimport\">Filter</label>\n  </div>\n  <div class=\"ytytytbv\">\n    <div class=\"checkboxtb\">\n      <label class=\"forhjqsd2\" for=\"check2\"></label>\n      <input type=\"checkbox\" id=\"check2\" required=\"\">\n      <label class=\"forhjqsd\"></label>\n    </div>\n    <div class=\"fdfdghfgh\">ID\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdgdfsouio\">Image</div>\n    <div class=\"fdgdfooiuioi\">Name\n      <svg class=\"svgatoz\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\n        </path>\n        <path\n          d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\n        </path>\n      </svg>\n      <svg class=\"svgztoa\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\"\n        style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n        <path\n          d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\n        </path>\n        <path\n          d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\n        </path>\n        <path\n          d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"uiojhljjklnb\">Country\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"fdrthcxvwba\">Points\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"drtfbbsvcx\">Orders\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\n        </path>\n        <path\n          d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\n        </path>\n        <path\n          d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\n        </path>\n      </svg>\n      <svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\n        </path>\n        <path\n          d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\n        </path>\n        <path\n          d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"tddetailsgg\">Statue</div>\n    <div class=\"tddefgdhils\">\n      <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n        style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n        <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n        <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n      </svg>\n    </div>\n    <div class=\"tddetddails\">Details</div>\n  </div>\n  <div class=\"divallordersm4\">\n    <div class=\"jklhmhgfsi\">\n      <table class=\"divstatueoreder\">\n        <tbody class=\"\">\n          <tr class=\"trorders\">\n            <td class=\"checkboxtb2\">\n              <label class=\"forhjqsd2\" for=\"check3\"></label>\n              <input type=\"checkbox\" id=\"check3\" required=\"\">\n              <label class=\"forhjqsd\"></label>\n            </td>\n            <td class=\"labnumorder\">44</td>\n            <td class=\"fgdercxbvfgg\">\n              <div class=\"ertytrh\">\n                <svg class=\"svgsigj231\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                  style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                  <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                  <path\n                    d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"gdfscxbvo\">Med Zouine</td>\n            <td class=\"eqrecxvcx\">Qatar</td>\n            <td class=\"tdmetpaiment\">35</td>\n            <td class=\"labstatueorderc\">2</td>\n            <td class=\"tdsvgdown\">\n              <label class=\"gdcfsfdgds\"></label>\n            </td>\n            <td class=\"tddefgdhils\">\n              <svg class=\"svgsitgfess\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 426.667 426.667\"\n                style=\"enable-background:new 0 0 426.667 426.667;\" xml:space=\"preserve\">\n                <circle cx=\"42.667\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"213.333\" cy=\"213.333\" r=\"42.667\"></circle>\n                <circle cx=\"384\" cy=\"213.333\" r=\"42.667\"></circle>\n              </svg>\n              <div class=\"refgdfdbfg\">\n                <svg class=\"svgblockus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\"\n                  style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M306,0C136.992,0,0,136.992,0,306c0,168.988,136.992,306,306,306s306-137.012,306-306C612,136.992,475.008,0,306,0z       M306,535.5C179.45,535.5,76.5,432.55,76.5,306c0-49.515,15.912-95.281,42.687-132.804l319.636,319.636      C401.281,519.588,355.515,535.5,306,535.5z M492.832,438.804L173.196,119.187C210.719,92.412,256.485,76.5,306,76.5      c126.55,0,229.5,102.95,229.5,229.5C535.5,355.515,519.588,401.281,492.832,438.804z\">\n                  </path>\n                </svg>\n                <svg class=\"svgsendus\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 356.484 356.484\"\n                  style=\"enable-background:new 0 0 356.484 356.484;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M293.984,7.23H62.5C28.037,7.23,0,35.268,0,69.731v142.78c0,34.463,28.037,62.5,62.5,62.5l147.443,0.001l70.581,70.58    c2.392,2.393,5.588,3.662,8.842,3.662c1.61,0,3.234-0.312,4.78-0.953c4.671-1.934,7.717-6.49,7.717-11.547v-62.237    c30.759-3.885,54.621-30.211,54.621-62.006V69.731C356.484,35.268,328.447,7.23,293.984,7.23z M331.484,212.512    c0,20.678-16.822,37.5-37.5,37.5h-4.621c-6.903,0-12.5,5.598-12.5,12.5v44.064l-52.903-52.903    c-2.344-2.345-5.522-3.661-8.839-3.661H62.5c-20.678,0-37.5-16.822-37.5-37.5V69.732c0-20.678,16.822-37.5,37.5-37.5h231.484    c20.678,0,37.5,16.822,37.5,37.5V212.512z\">\n                  </path>\n                  <path\n                    d=\"M270.242,95.743h-184c-6.903,0-12.5,5.596-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    C282.742,101.339,277.146,95.743,270.242,95.743z\">\n                  </path>\n                  <path\n                    d=\"M270.242,165.743h-184c-6.903,0-12.5,5.596-12.5,12.5s5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    S277.146,165.743,270.242,165.743z\">\n                  </path>\n                </svg>\n              </div>\n            </td>\n            <td class=\"tdsvgdowngg tdsvgdown\">\n              <svg class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n                style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n                <path\n                  d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n                </path>\n              </svg>\n            </td>\n          </tr>\n          <tr class=\"etrbcvfb\">\n            <td class=\"ezrfsddqs\" colspan=\"10\">\n              <div class=\"fdbvc\">\n                <div class=\"bvcxbvcob\">\n                  <svg class=\"svgsigj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                    style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                    <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                    <path\n                      d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                    </path>\n                  </svg>\n                </div>\n                <div class=\"sdffdgdfg\">\n                  <div class=\"labnumberadd\">Info :</div>\n                  <div class=\"\">medzouine@gmail.com</div>\n                  <table class=\"dfsvgxwfd\">\n                    <tbody>\n                      <tr>\n                        <td>Points :</td>\n                        <td>\n                          <label>25</label>\n                          <label>/</label>\n                          <label>122</label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Date Add :</td>\n                        <td>\n                          <label>14 / 03 / 2018</label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Orders :</td>\n                        <td>\n                          <label>3</label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Reviews :</td>\n                        <td>\n                          <label>2</label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Signup With :</td>\n                        <td>\n                          <label>\n                            <svg class=\"svgloginwith\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 491.858 491.858\"\n                              style=\"enable-background:new 0 0 491.858 491.858;\" xml:space=\"preserve\">\n                              <path\n                                d=\"M377.472,224.957H201.319v58.718H308.79c-16.032,51.048-63.714,88.077-120.055,88.077     c-69.492,0-125.823-56.335-125.823-125.824c0-69.492,56.333-125.823,125.823-125.823c34.994,0,66.645,14.289,89.452,37.346     l42.622-46.328c-34.04-33.355-80.65-53.929-132.074-53.929C84.5,57.193,0,141.693,0,245.928s84.5,188.737,188.736,188.737     c91.307,0,171.248-64.844,188.737-150.989v-58.718L377.472,224.957L377.472,224.957z\">\n                              </path>\n                              <polygon\n                                points=\"491.858,224.857 455.827,224.857 455.827,188.826 424.941,188.826 424.941,224.857 388.91,224.857      388.91,255.74 424.941,255.74 424.941,291.772 455.827,291.772 455.827,255.74 491.858,255.74    \">\n                              </polygon>\n                            </svg>\n                          </label>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Open With :</td>\n                        <td>\n                          <label>\n                            <svg class=\"svgopenwith\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 35 35\"\n                              style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\n                              <path\n                                d=\"M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604   c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287   c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818   c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625   H8.979V3.749h17.042V30.625z\">\n                              </path>\n                            </svg>\n                          </label>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"divoldaddress\">\n                  <div class=\"labnumberadd\">Address 1</div>\n                  <label class=\"laboldaddr\">medzouine@gmail.com</label>\n                  <label class=\"laboldaddr\">Mohamed Zouine</label>\n                  <label class=\"laboldaddr\">zagora hey el manssour eddehbi rue jbel azlag</label>\n                  <label class=\"laboldaddr\">Morocco</label>\n                  <label class=\"laboldaddr\">Zagora</label>\n                  <label class=\"laboldaddr\">451236</label>\n                  <label class=\"laboldaddr\">0621548798</label>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"dfsfhgbcv\">\n    <label>Show</label>\n    <select class=\"selectshow\" name=\"\">\n      <option>10</option>\n      <option>20</option>\n      <option>50</option>\n      <option>100</option>\n    </select>\n    <div class=\"nbpagerevcom\">\n      <div class=\"nbpgcom\">&lt;</div>\n      <div class=\"nbpgcom\">1</div>\n      <div class=\"nbpgcom dnbpgcomd\">2</div>\n      <div class=\"nbpgcom\">3</div>\n      <div class=\"nbpgcom\">4</div>\n      <div class=\"nbpgcom\">&gt;</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/users-list/users-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/users-list/users-list.component.ts ***!
  \*********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/user/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/user/users-list/users-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
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