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
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/product/product-form/product-form.component.ts");
/* harmony import */ var _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/orders/orders.component */ "./src/app/order/orders/orders.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/users-list/users-list.component */ "./src/app/user/users-list/users-list.component.ts");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/coupon/coupon.component.ts");
/* harmony import */ var _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/reviews/reviews.component */ "./src/app/user/reviews/reviews.component.ts");
/* harmony import */ var _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages-edit/pages-edit.component */ "./src/app/pages-edit/pages-edit.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/admin-auth.guard */ "./src/app/guards/admin-auth.guard.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_not_logged_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/not-logged.guard */ "./src/app/guards/not-logged.guard.ts");





















var routes = [
    { path: "admin/login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], canActivate: [_guards_not_logged_guard__WEBPACK_IMPORTED_MODULE_20__["NotLoggedGuard"]] },
    { path: "admin/404", component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] },
    { path: "admin/error", component: _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_4__["UnexpectedErrorComponent"] },
    {
        path: "",
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_18__["LayoutComponent"], canActivate: [_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AdminAuthGuard"]],
        children: [
            { path: "", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
            { path: "admin", component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
            { path: "admin/dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
            { path: "admin/products", component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
            { path: "admin/product-form", component: _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_5__["ProductFormComponent"] },
            { path: "admin/orders", component: _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"] },
            { path: "admin/support", component: _support_support_component__WEBPACK_IMPORTED_MODULE_7__["SupportComponent"] },
            { path: "admin/users", component: _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"] },
            { path: "admin/coupons", component: _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_10__["CouponComponent"] },
            { path: "admin/user-reviews", component: _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_11__["ReviewsComponent"] },
            { path: "admin/edit-pages", component: _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_12__["PagesEditComponent"] },
            { path: "admin/tickets", component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_13__["TicketsComponent"] },
            { path: "admin/profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"] },
            { path: "admin/settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"] },
            { path: "**", redirectTo: "" }
        ]
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(adminAuth) {
        this.adminAuth = adminAuth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.adminAuth.authenticate();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuthService"]])
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
/* harmony import */ var _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-history/product-history.component */ "./src/app/product/product-history/product-history.component.ts");
/* harmony import */ var _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product-form/product-form.component */ "./src/app/product/product-form/product-form.component.ts");
/* harmony import */ var _services_admin_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/admin-product.service */ "./src/app/services/admin-product.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order/orders/orders.component */ "./src/app/order/orders/orders.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product/product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/users-list/users-list.component */ "./src/app/user/users-list/users-list.component.ts");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/coupon/coupon.component.ts");
/* harmony import */ var _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/reviews/reviews.component */ "./src/app/user/reviews/reviews.component.ts");
/* harmony import */ var _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages-edit/pages-edit.component */ "./src/app/pages-edit/pages-edit.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _services_admin_upload_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/admin-upload.service */ "./src/app/services/admin-upload.service.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/auth-interceptor */ "./src/app/shared/auth-interceptor.ts");
/* harmony import */ var _shared_pipes_iterate_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/pipes/iterate.pipe */ "./src/app/shared/pipes/iterate.pipe.ts");
/* harmony import */ var _shared_filter_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/filter-components/table-filter/table-filter.component */ "./src/app/shared/filter-components/table-filter/table-filter.component.ts");
/* harmony import */ var _shared_dialogs_infos_infos_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/dialogs/infos/infos-dialog.component */ "./src/app/shared/dialogs/infos/infos-dialog.component.ts");
/* harmony import */ var _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/modules/material.module */ "./src/app/shared/modules/material.module.ts");
/* harmony import */ var _shared_data_viewer_data_viewer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/data-viewer/data-viewer.component */ "./src/app/shared/data-viewer/data-viewer.component.ts");
/* harmony import */ var _product_variant_variant_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./product/variant/variant.component */ "./src/app/product/variant/variant.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _shared_escape_html_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/escape-html.pipe */ "./src/app/shared/escape-html.pipe.ts");











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_13__["ProductFormComponent"],
                _product_product_history_product_history_component__WEBPACK_IMPORTED_MODULE_12__["ProductHistoryComponent"],
                _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_11__["UnexpectedErrorComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _order_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__["OrdersComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_18__["SupportComponent"],
                _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductListComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _user_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_21__["UsersListComponent"],
                _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_22__["CouponComponent"],
                _user_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_23__["ReviewsComponent"],
                _pages_edit_pages_edit_component__WEBPACK_IMPORTED_MODULE_24__["PagesEditComponent"],
                _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_25__["TicketsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"],
                _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_31__["LayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
                _shared_pipes_iterate_pipe__WEBPACK_IMPORTED_MODULE_35__["IteratePipe"],
                _shared_filter_components_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_36__["TableFilterComponent"],
                _shared_dialogs_infos_infos_dialog_component__WEBPACK_IMPORTED_MODULE_37__["InfosDialogComponent"],
                _shared_data_viewer_data_viewer_component__WEBPACK_IMPORTED_MODULE_39__["DataViewerComponent"],
                _product_variant_variant_component__WEBPACK_IMPORTED_MODULE_40__["VariantComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesComponent"],
                _shared_escape_html_pipe__WEBPACK_IMPORTED_MODULE_42__["EscapeHtmlPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_28__["NgScrollbarModule"],
                _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_38__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_33__["AdminAuthService"],
                _services_admin_product_service__WEBPACK_IMPORTED_MODULE_14__["AdminProductService"],
                _services_admin_upload_service__WEBPACK_IMPORTED_MODULE_30__["AdminUploadService"],
                // { provide: ErrorHandler, useClass: AppErrorHandler },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_34__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmDialogComponent"],
                _shared_dialogs_infos_infos_dialog_component__WEBPACK_IMPORTED_MODULE_37__["InfosDialogComponent"],
                _product_variant_variant_component__WEBPACK_IMPORTED_MODULE_40__["VariantComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_41__["CategoriesComponent"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"variantsContainer\">\n  <mat-form-field style=\"color: white !important\">\n    <input matInput [(ngModel)]=\"svgValue\" (change)=\"change()\" placeholder=\"Enter Your Svg here\">\n  </mat-form-field>\n  <br>\n  <br>\n  <div [innerHTML]=\"svgValue | keepHtml\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.change = function () {
        this.checkSVG();
    };
    CategoriesComponent.prototype.checkSVG = function () {
        if (!this.svgValue.startsWith('<svg ') || !this.svgValue.endsWith('</svg>')) // SVG Not Valid
            // add error to the form
            console.log("NOT VALID");
    };
    CategoriesComponent.prototype.setSVG = function () {
        if (this.svgValue.startsWith('<svg ') && this.svgValue.endsWith('</svg>'))
            document.getElementById('svg').innerHTML = this.svgValue;
        else
            document.getElementById('svg').innerHTML = "NOT VALID";
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/coupon/coupon.component.html":
/*!**********************************************!*\
  !*** ./src/app/coupon/coupon.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouponComponent);
    return CouponComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnexpectedErrorComponent);
    return UnexpectedErrorComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin-auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/admin-auth.guard.ts ***!
  \********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");




var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(router, adminAuth) {
        this.router = router;
        this.adminAuth = adminAuth;
    }
    AdminAuthGuard.prototype.canActivate = function (next, state) {
        var admin = this.adminAuth.admin;
        var token = localStorage.getItem("MWToken");
        if (admin || token) {
            return true;
        }
        this.router.navigate(['admin/login'], { queryParams: { returnUrl: state.url } });
    };
    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/not-logged.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/not-logged.guard.ts ***!
  \********************************************/
/*! exports provided: NotLoggedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotLoggedGuard", function() { return NotLoggedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotLoggedGuard = /** @class */ (function () {
    function NotLoggedGuard(router) {
        this.router = router;
    }
    NotLoggedGuard.prototype.canActivate = function (next, state) {
        if (!localStorage.getItem('MWToken')) {
            return true;
        }
        this.router.navigate(['/']);
    };
    NotLoggedGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotLoggedGuard);
    return NotLoggedGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divhearder\">\n  <div class=\"fdgsvbn\">\n    <div class=\"uoifdgcxw\">\n      <div class=\"dfsgbvcwww\">\n        <div class=\"erytltfry\">\n          <label class=\"qzlerfgqs\">Messages</label>\n        </div>\n        <div class=\"ytretere\">\n          <div class=\"notif-new-user\">\n            <label class=\"ouyizerzd\"></label>\n            <div class=\"div-new-mess\">\n              <svg class=\"svgrgygj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n                style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n                <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n                <path\n                  d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhihfd\">Med Zouine</label>\n              <label class=\"rtetiyuyu\">Also be sure to check them into the repo</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"eryttfry\">\n          <label class=\"qzerfgqs\">View All</label>\n        </div>\n      </div> <span class=\"rtuyytyuj\"></span>\n      <svg class=\"rettrye\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n        x=\"0px\" y=\"0px\" viewBox=\"0 0 202.762 202.762\" style=\"enable-background:new 0 0 202.762 202.762;\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M202.762,88.059c0,43.127-41.492,78.445-94.07,81.464c-31.105,20.895-77.609,26.858-77.609,26.858  s11.534-16.523,15.096-39.811C18.382,142.005,0,116.762,0,88.059C0,42.948,45.388,6.381,101.381,6.381  C157.372,6.381,202.762,42.948,202.762,88.059z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"yutbvnc\">\n      <div class=\"dfsgbvcwww\">\n        <div class=\"erytltfry\">\n          <label class=\"qzlerfgqs\">Nofications</label>\n        </div>\n        <div class=\"ytretere\">\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-user\">\n              <svg class=\"svg-notif-new-user\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M186.685,0c-53.474,0-96.978,43.505-96.978,96.979c0,53.476,43.505,96.981,96.978,96.981    c53.475,0,96.98-43.506,96.98-96.981C283.665,43.505,240.16,0,186.685,0z\">\n                </path>\n                <path\n                  d=\"M352.4,192.799c-57.585,0-108.141,30.658-136.214,76.506c-9.722-1.543-19.601-2.333-29.501-2.333    C83.747,266.972,0,350.719,0,453.657c0,8.284,6.716,15,15,15h228.177C271.75,495.516,310.185,512,352.4,512    c88.003,0,159.6-71.596,159.6-159.6S440.403,192.799,352.4,192.799z M352.4,481.998c-71.462,0-129.601-58.138-129.601-129.6    c0-71.461,58.139-129.6,129.601-129.6S482,280.938,482,352.399C482,423.862,423.862,481.998,352.4,481.998z\">\n                </path>\n                <path\n                  d=\"M400.6,337.399h-33.2v-33.2c0-8.284-6.716-15-15-15s-15,6.716-15,15v33.2h-33.2c-8.284,0-15,6.716-15,15s6.716,15,15,15    h33.2v33.2c0,8.284,6.716,15,15,15s15-6.716,15-15v-33.2h33.2c8.284,0,15-6.716,15-15S408.884,337.399,400.6,337.399z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New User registered</label>\n              <label class=\"rtetyuyu\">1 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-order\">\n              <svg class=\"svg-notif-new-order\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M458.732,422.212l-22.862-288.109c-1.419-18.563-17.124-33.098-35.737-33.098h-45.164v66.917    c0,8.287-6.708,14.995-14.995,14.995c-8.277,0-14.995-6.708-14.995-14.995v-66.917H187.028v66.917    c0,8.287-6.718,14.995-14.995,14.995c-8.287,0-14.995-6.708-14.995-14.995v-66.917h-45.164c-18.613,0-34.318,14.535-35.737,33.058    L53.265,422.252c-1.769,23.082,6.238,46.054,21.962,63.028C90.952,502.253,113.244,512,136.386,512h239.236    c23.142,0,45.434-9.747,61.159-26.721C452.505,468.305,460.512,445.333,458.732,422.212z M323.56,275.493l-77.553,77.553    c-2.929,2.929-6.768,4.398-10.606,4.398c-3.839,0-7.677-1.469-10.606-4.398l-36.347-36.347c-5.858-5.858-5.858-15.345,0-21.203    c5.858-5.858,15.355-5.858,21.203,0l25.751,25.741l66.956-66.956c5.848-5.848,15.345-5.848,21.203,0    C329.418,260.139,329.418,269.635,323.56,275.493z\">\n                </path>\n                <path\n                  d=\"M256.004,0c-54.571,0-98.965,44.404-98.965,98.975v2.029h29.99v-2.029c0-38.037,30.939-68.986,68.976-68.986    s68.976,30.949,68.976,68.986v2.029h29.989v-2.029C354.969,44.404,310.575,0,256.004,0z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Order</label>\n              <label class=\"rtetyuyu\">6 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-review\">\n              <svg class=\"svg-notif-new-review\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\"\n                style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path\n                  d=\"M114.68,20.54C51.448,20.54,0.002,72,0.002,135.27C0.002,198.53,51.448,250,114.68,250s114.678-51.47,114.678-114.73   C229.358,72,177.911,20.54,114.68,20.54z M69.7,104.84c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15v12.56   c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15V104.84z M155.271,177.92c-11.195,11.19-25.898,16.79-40.592,16.79   c-14.703,0-29.397-5.6-40.592-16.79c-5.857-5.86-5.857-15.36,0-21.22c5.857-5.85,15.353-5.85,21.21,0   c10.685,10.7,28.077,10.7,38.762,0c5.857-5.85,15.353-5.85,21.21,0C161.119,162.56,161.119,172.06,155.271,177.92z M159.659,117.4   c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15v-12.56c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15V117.4   z\">\n                </path>\n                <path\n                  d=\"M264.553,100.367h232.451c8.28,0,14.993-6.716,14.993-15s-6.713-15-14.993-15H264.553c-8.28,0-14.993,6.716-14.993,15   S256.273,100.367,264.553,100.367z\">\n                </path>\n                <path\n                  d=\"M497.005,120.367H264.553c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.451c8.28,0,14.993-6.716,14.993-15   S505.285,120.367,497.005,120.367z\">\n                </path>\n                <path\n                  d=\"M474.667,185.164c0-8.284-6.713-15-14.993-15H264.553c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.121   C467.954,200.164,474.667,193.448,474.667,185.164z\">\n                </path>\n                <path\n                  d=\"M397.322,262c-63.241,0-114.678,51.46-114.678,114.73c0,63.26,51.437,114.73,114.678,114.73   C460.553,491.46,512,439.99,512,376.73C512,313.46,460.553,262,397.322,262z M352.342,346.3c0-8.28,6.707-15,14.993-15   c8.276,0,14.993,6.72,14.993,15v12.56c0,8.28-6.717,15-14.993,15c-8.286,0-14.993-6.72-14.993-15V346.3z M437.903,431.8   c-2.919,2.93-6.757,4.4-10.595,4.4c-3.838,0-7.677-1.47-10.605-4.4c-10.685-10.69-28.077-10.69-38.772,0   c-5.847,5.86-15.343,5.86-21.2,0c-5.857-5.85-5.857-15.35,0-21.21c10.845-10.85,25.259-16.82,40.592-16.82   c15.333,0,29.747,5.97,40.582,16.82C443.761,416.45,443.761,425.95,437.903,431.8z M442.302,358.86c0,8.28-6.717,15-14.993,15   c-8.286,0-14.993-6.72-14.993-15V346.3c0-8.28,6.707-15,14.993-15c8.276,0,14.993,6.72,14.993,15V358.86z\">\n                </path>\n                <path\n                  d=\"M247.561,411.625H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.568c8.28,0,14.993-6.716,14.993-15   S255.841,411.625,247.561,411.625z\">\n                </path>\n                <path\n                  d=\"M247.561,361.625H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.568c8.28,0,14.993-6.716,14.993-15   S255.841,361.625,247.561,361.625z\">\n                </path>\n                <path\n                  d=\"M247.561,311.828H52.323c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.237c8.28,0,14.993-6.716,14.993-15   S255.841,311.828,247.561,311.828z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Custmer Review</label>\n              <label class=\"rtetyuyu\">15 min Ago</label>\n            </div>\n          </div>\n          <div class=\"notif-new-user\">\n            <div class=\"div-new-ticket\">\n              <svg class=\"svg-notif-new-ticket\" xmlns=\"http://www.w3.org/2000/svg\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 455.02 455.02\"\n                style=\"enable-background:new 0 0 455.02 455.02;\" xml:space=\"preserve\">\n                <path\n                  d=\"M432.612,0H22.407c-11.046,0-20,8.954-20,20s8.954,20,20,20h21.917v410.571c0,0.984,0.61,1.865,1.53,2.212    c0.921,0.347,1.96,0.088,2.61-0.651l18.347-20.875c1.127-1.282,2.735-2.041,4.441-2.096s3.359,0.599,4.567,1.806l22.243,22.243    c2.412,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0    l22.534-22.533c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.412,2.412,6.324,2.412,8.736,0l22.534-22.533    c2.412-2.412,6.324-2.412,8.736,0l22.534,22.534c2.413,2.412,6.324,2.412,8.736,0l22.534-22.534c2.412-2.412,6.324-2.412,8.736,0    l22.534,22.533c2.412,2.412,6.323,2.412,8.736,0l22.188-22.188c1.216-1.216,2.885-1.87,4.603-1.805    c1.719,0.065,3.332,0.845,4.452,2.15l18.337,21.365c0.644,0.751,1.688,1.021,2.615,0.678c0.927-0.344,1.543-1.228,1.543-2.217V40    h21.918c11.046,0,20-8.954,20-20S443.658,0,432.612,0z M103.896,79.541h166.577c8.284,0,15,6.716,15,15s-6.716,15-15,15H103.896    c-8.284,0-15-6.716-15-15S95.612,79.541,103.896,79.541z M346.296,283.011H102.748c-8.284,0-15-6.716-15-15s6.716-15,15-15    h243.548c8.284,0,15,6.716,15,15S354.58,283.011,346.296,283.011z M347.444,199.148H103.896c-8.284,0-15-6.716-15-15    s6.716-15,15-15h243.548c8.284,0,15,6.716,15,15S355.728,199.148,347.444,199.148z\">\n                </path>\n              </svg>\n            </div>\n            <div class=\"retztrytry\">\n              <label class=\"fdghfhhfd\">New Ticket</label>\n              <label class=\"rtetyuyu\">26 min Ago</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"eryttfry\">\n          <label class=\"qzerfgqs\">View All</label>\n        </div>\n      </div> <span class=\"rtuyytyuj\"></span>\n      <svg class=\"ertetgds\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n        x=\"0px\" y=\"0px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n        <path\n          d=\"M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75    c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1    c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"cxvbfdgs\">\n      <div class=\"tredyryytr\">\n        <svg class=\"openprofile\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n          style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n          <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n          <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n          </path>\n        </svg>\n        <svg class=\"opensettings\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n          version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 268.765 268.765\" style=\"enable-background:new 0 0 268.765 268.765;\"\n          xml:space=\"preserve\">\n          <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n            d=\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z\">\n          </path>\n        </svg>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\"\n          viewBox=\"0 0 14.573 14.573\" style=\"enable-background:new 0 0 14.573 14.573;\" xml:space=\"preserve\">\n          <path\n            d=\"M7.286,14.573c-1.736,0-3.368-0.676-4.596-1.903c-1.227-1.228-1.904-2.86-1.904-4.597    s0.677-3.369,1.904-4.597c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414c-0.85,0.851-1.318,1.981-1.318,3.183    s0.468,2.333,1.318,3.183s1.979,1.317,3.182,1.317s2.332-0.468,3.182-1.317c0.851-0.85,1.318-1.98,1.318-3.183    S11.318,5.74,10.469,4.89c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0c1.227,1.229,1.904,2.861,1.904,4.597    s-0.677,3.369-1.904,4.597C10.655,13.897,9.023,14.573,7.286,14.573z\">\n          </path>\n          <path d=\"M7.286,7c-0.553,0-1-0.448-1-1V1c0-0.552,0.447-1,1-1s1,0.448,1,1v5C8.286,6.552,7.84,7,7.286,7z\">\n          </path>\n        </svg>\n      </div>\n      <svg class=\"svgrggj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\"\n        style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\n        <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\n        <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\">\n        </path>\n      </svg>\n    </div>\n  </div>\n  <div class=\"divchojher\">\n    <input id=\"inputsjkaror\" type=\"text\" name=\"\" value=\"\" placeholder=\"Search here ..\">\n    <svg class=\"svgsellcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451 451\"\n      style=\"enable-background:new 0 0 451 451;\" xml:space=\"preserve\">\n      <path\n        d=\"M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z\">\n      </path>\n    </svg>\n  </div>\n</div>"

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"tryeuiytjfg\">\n  <app-header></app-header>\n  <div class=\"divallcontent\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divprofileset divphoto\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"login()\" autocomplete=\"off\" class=\"allinformation\">\n    <div class=\"divforminfo\">\n      <svg class=\"loginSvg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 50 50\"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}</style><linearGradient id=\"linear-gradient\" x1=\"1571.13\" y1=\"657.12\" x2=\"1622.86\" y2=\"657.03\" gradientTransform=\"translate(1622 695.5) rotate(180)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#1c1d1f\"/><stop offset=\"0.38\" stop-color=\"#1c1d1f\"/><stop offset=\"0.63\" stop-color=\"#1c1d1f\"/><stop offset=\"1\" stop-color=\"#1c1d1f\"/></linearGradient><linearGradient id=\"linear-gradient-2\" x1=\"1576.79\" y1=\"678.95\" x2=\"1572.75\" y2=\"656.14\" gradientTransform=\"translate(1622 695.5) rotate(180)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#1c1d1f\"/><stop offset=\"0.44\" stop-color=\"#212225\"/><stop offset=\"1\" stop-color=\"#2f3134\"/></linearGradient><linearGradient id=\"linear-gradient-3\" x1=\"1501.14\" y1=\"578.13\" x2=\"1552.88\" y2=\"578.04\" gradientTransform=\"translate(-1502 -566.5)\" xlink:href=\"#linear-gradient\"/><linearGradient id=\"linear-gradient-4\" x1=\"1506.79\" y1=\"599.95\" x2=\"1502.75\" y2=\"577.14\" gradientTransform=\"translate(-1502 -566.5)\" xlink:href=\"#linear-gradient-2\"/></defs><title>Asset 12</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"logo\"><path class=\"cls-1\" d=\"M0,48.37V43.28a3,3,0,0,1,1.43-2.59L23.9,27.09a2.12,2.12,0,0,1,2.2,0L43.75,37.76,50,41.55v6.82a1.57,1.57,0,0,1-2.12,1.52L25,41,2.12,49.89A1.57,1.57,0,0,1,0,48.37Z\"/><path class=\"cls-2\" d=\"M43.75,37.76V17.67a3.75,3.75,0,0,1,1.83-3.25L48,13a1.36,1.36,0,0,1,2,1.23v27.3Z\"/><path class=\"cls-3\" d=\"M50,1.63V6.72a3,3,0,0,1-1.43,2.59L26.1,22.91a2.12,2.12,0,0,1-2.2,0L6.25,12.24,0,8.45V1.63A1.57,1.57,0,0,1,2.12.11L25,9,47.88.11A1.57,1.57,0,0,1,50,1.63Z\"/><path class=\"cls-4\" d=\"M6.25,12.24V32.33a3.75,3.75,0,0,1-1.83,3.25L2,37a1.36,1.36,0,0,1-2-1.23V8.45Z\"/></g></g></svg>\n      <div class=\"divemail\">\n        <input formControlName=\"Email\" placeholder=\"Admin@mw.io\" type=\"email\" class=\"loginInput inputemail\">\n      </div>\n      <div class=\"divemail\">\n        <input formControlName=\"Password\" placeholder=\"Password\" type=\"password\" class=\"loginInput inputemail\">\n      </div>\n      <div class=\"grey\">\n        <mat-checkbox formControlName=\"StayLogged\">Stay Logged ?</mat-checkbox>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"loginBtn\">Login</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_validators_product_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validators/product.validators */ "./src/app/shared/validators/product.validators.ts");
/* harmony import */ var _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
/* harmony import */ var _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(adminAuth, toaster) {
        this.adminAuth = adminAuth;
        this.toaster = toaster;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _shared_validators_product_validators__WEBPACK_IMPORTED_MODULE_5__["ProductValidators"].cannotContainSpace]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            StayLogged: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true)
        });
    }
    Object.defineProperty(LoginComponent.prototype, "StayLogged", {
        get: function () {
            return this.form.get('StayLogged').value;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.form.invalid) {
            this.toaster.warning("data isn't valid");
            return;
        }
        this.adminAuth.Login(this.form.value).subscribe(function (response) {
            if (response.role === _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_6__["ADMIN_ROLE"])
                _this.adminAuth.afterAuthentication(response, _this.StayLogged);
            else
                _this.toaster.error("You're trying to log with a user account !");
        }, function (err) {
            if (err instanceof _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_7__["BadInput"]) {
                _this.toaster.error('Email or Password is Incorect ..'); // Display the error within Form errors
            }
            else
                throw err;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/ProductFilter.ts":
/*!*****************************************!*\
  !*** ./src/app/models/ProductFilter.ts ***!
  \*****************************************/
/*! exports provided: ProductFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilter", function() { return ProductFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _QueryObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryObject */ "./src/app/models/QueryObject.ts");


var ProductFilter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductFilter, _super);
    function ProductFilter() {
        var _this = _super.call(this) || this;
        _this.OnSale = null;
        _this.Deleted = false;
        return _this;
    }
    ProductFilter.prototype.resetFields = function () {
        this.OnSale = null;
        this.CategoryId = undefined;
        this.SubCategoryId = undefined;
        this.Search = undefined;
        this.MinDate = undefined;
        this.MaxDate = undefined;
        this.Deleted = false;
    };
    return ProductFilter;
}(_QueryObject__WEBPACK_IMPORTED_MODULE_1__["QueryObject"]));



/***/ }),

/***/ "./src/app/models/QueryObject.ts":
/*!***************************************!*\
  !*** ./src/app/models/QueryObject.ts ***!
  \***************************************/
/*! exports provided: QueryObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryObject", function() { return QueryObject; });
// all filter classes will inherit from this one
var QueryObject = /** @class */ (function () {
    function QueryObject() {
        this.PageSize = 10;
        this.CurrentPage = 0;
        this.OrderBy = 'Id';
        this.IsSortAscending = false;
    }
    return QueryObject;
}());



/***/ }),

/***/ "./src/app/models/UserFilter.ts":
/*!**************************************!*\
  !*** ./src/app/models/UserFilter.ts ***!
  \**************************************/
/*! exports provided: UserFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFilter", function() { return UserFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _QueryObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryObject */ "./src/app/models/QueryObject.ts");


var UserFilter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserFilter, _super);
    function UserFilter() {
        var _this = _super.call(this) || this;
        _this.UserRole = null;
        return _this;
    }
    UserFilter.prototype.resetFields = function () {
        this.UserRole = undefined;
        this.MinDate = undefined;
        this.MaxDate = undefined;
    };
    return UserFilter;
}(_QueryObject__WEBPACK_IMPORTED_MODULE_1__["QueryObject"]));



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
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

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
        // this.ShippingMethod = 'gearbest';
        // this.Name = 'Lorem Ipsum';
        // this.Price = 17;
        // this.OldPrice = 23;
        // this.Description = 'Some Dummy Text ..';
        this.galleryImgs = [];
        this.descImgs = [];
    }
    Object.defineProperty(AdminProduct.prototype, "Last_Update_From_Now", {
        get: function () {
            return luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromJSDate(this.Last_Update).toRelative();
        },
        enumerable: true,
        configurable: true
    });
    return AdminProduct;
}());



/***/ }),

/***/ "./src/app/order/orders/orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/order/orders/orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages-edit/pages-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages-edit/pages-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesEditComponent);
    return PagesEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product-form/product-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-form/product-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divaddproduct\" id=\"my-addproduct\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" autocomplete=\"off\">\n    <input type=\"hidden\" [(ngModel)]=\"_Product.Id\" name=\"Id\" #Id=\"ngModel\">\n    <div class=\"divtitleprod\">\n\n      <label>Source</label>\n      <input id=\"inpulien\" type=\"text\" [(ngModel)]=\"_Product.Source\" #Source=\"ngModel\" name=\"Source\" placeholder=\"https://example.io\">\n\n      <label>Name</label>\n      <input id=\"inputtitle\" required minlength=\"6\" type=\"text\" [(ngModel)]=\"_Product.Name\" name=\"Name\" #Name=\"ngModel\">\n\n      <label>Price</label>\n      <input class=\"inputprice\" required maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.Price\" name=\"Price\"\n        #Price=\"ngModel\">\n\n      <svg *ngIf=\"!expand\" (click)=\"expand = true\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 286.376 286.376\"\n        style=\"enable-background:new 0 0 286.376 286.376;\" xml:space=\"preserve\">\n        <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n          d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\">\n        </path>\n      </svg>\n\n      <ng-container *ngIf=\"expand\">\n\n        <label>Old Price</label>\n        <input class=\"inputprice\" maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.OldPrice\" name=\"OldPrice\"\n          #OldPrice=\"ngModel\">\n        <svg (click)=\"expand = false\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\"\n          style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n          <polygon\n            points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n          </polygon>\n        </svg>\n\n      </ng-container>\n\n    </div>\n\n    <div class=\"divimageproduct\">\n      <!-- add images for new product  -->\n      <ng-container *ngIf=\" _formJob === 'Add' ; else editingProduct1\">\n          <div (click)=\"resetInputs();mainImg.click()\" class=\"divmainimageprod\">\n            <input #mainImg type=\"file\" name=\"MainImg\" ngModel (change)=\"setMainImage($event.target.files)\">\n            <img *ngIf=\"imgPath; else noImage \" [src]=\"imgPath\" class=\"mainimage\">\n            <ng-template #noImage>\n              <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgplusimage\" enable-background=\"new 0 0 1000 1000\"\n                version=\"1.1\" viewBox=\"0 0 1000 1000\" x=\"0px\" y=\"0px\">\n                <path _ngcontent-c3=\"\"\n                  d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n                </path>\n                <path _ngcontent-c3=\"\" d=\"M383.6,313.6\"></path>\n                <path _ngcontent-c3=\"\"\n                  d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n                </path>\n                <path _ngcontent-c3=\"\"\n                  d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n                </path>\n                <path _ngcontent-c3=\"\"\n                  d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n                </path>\n              </svg>\n            </ng-template>\n          </div>\n  \n          <div class=\"divmoreimage\">\n            <div (click)=\"resetInputs();galleryImgs.click()\" class=\"roidfudsdxv\">\n              <input [disabled]=\"(GalleryImgs.length + _Product.galleryImgs.length) === _maxG\" #galleryImgs type=\"file\" accept=\"image/*\"\n                name=\"GalleryImgs\" ngModel multiple (change)=\"addGalleryImages($event.target.files)\">\n              <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\"\n                enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n                <path\n                  d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n                </path>\n                <path d=\"M383.6,313.6\"></path>\n                <path\n                  d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n                </path>\n                <path\n                  d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n                </path>\n                <path\n                  d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n                </path>\n              </svg>\n            </div>\n  \n            <ng-container *ngFor=\"let item of GalleryImgs\">\n              <div class=\"roidfudsdxv\">\n                <div class=\"rytfhgqsfez\">\n                  <svg (click)=\"asMainImage(item.img)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 45.937 45.937\" style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                    <path\n                      d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                    </path>\n                  </svg>\n                  <svg (click)=\"removeGalleryImage(item.name)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                    <polygon\n                      points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                    </polygon>\n                  </svg>\n                </div>\n                <img class=\"otherimage\" [src]=\"item.data\">\n              </div>\n            </ng-container>\n  \n          </div>\n      </ng-container>\n      <!-- Edit existing product images -->\n      <ng-template  #editingProduct1>\n        <div (click)=\"resetInputs();mainImg.click()\" class=\"divmainimageprod\">\n          <input #mainImg type=\"file\" name=\"MainImg\" ngModel (change)=\"setMainImage($event.target.files)\">\n          <img *ngIf=\"_Product.mainImg && !imgPath && !mainImgFromCopy\" src=\"/Content/Images/Products/{{(_formJob === 'Copy') ? copyingId : _Product.Id }}/Main/{{_Product.mainImg}}\" class=\"mainimage\">\n          \n          <img *ngIf=\" imgPath && !mainImgFromCopy\" [src]=\"imgPath\" class=\"mainimage halfOpacity\">\n        \n          <img *ngIf=\" mainImgFromCopy \" \n          src=\"/Content/Images/Products/{{ copyingId }}/Gallery/{{mainImgFromCopy}}\"\n          class=\"mainimage halfOpacity\">\n\n          <!-- <ng-template #noImage>\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgplusimage\" enable-background=\"new 0 0 1000 1000\"\n              version=\"1.1\" viewBox=\"0 0 1000 1000\" x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path _ngcontent-c3=\"\" d=\"M383.6,313.6\"></path>\n              <path _ngcontent-c3=\"\"\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </ng-template> -->\n        </div>\n\n        <div class=\"divmoreimage\">\n          <div (click)=\"resetInputs();galleryImgs.click()\" class=\"roidfudsdxv\">\n            <input [disabled]=\"(GalleryImgs.length + _Product.galleryImgs.length) === _maxG\" #galleryImgs type=\"file\" accept=\"image/*\" name=\"GalleryImgs\" \n              multiple (change)=\"addGalleryImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n              xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n\n          <ng-container *ngFor=\"let item of _Product.galleryImgs\">\n            <div class=\"roidfudsdxv\">\n              <div class=\"rytfhgqsfez\">\n                <svg (click)=\"asMainImageServer(item)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.937 45.937\"\n                  style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                  </path>\n                </svg>\n                <svg (click)=\"removeGalleryImageServer(item)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\"\n                  xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimage\" src=\"/Content/Images/Products/{{(_formJob === 'Copy') ? copyingId : _Product.Id}}/Gallery/{{item}}\">\n            </div>\n          </ng-container>\n\n          <ng-container *ngFor=\"let item of GalleryImgs\">\n            <div class=\"roidfudsdxv halfOpacity\">\n              <div class=\"rytfhgqsfez\">\n                <svg (click)=\"asMainImagePlus(item.img)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.937 45.937\"\n                  style=\"enable-background:new 0 0 45.937 45.937;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M44.745,18.253L24.455,0.558c-0.852-0.743-2.121-0.743-2.973,0L1.191,18.253c-0.474,0.414-0.642,1.088-0.421,1.677    c0.221,0.589,0.784,0.99,1.413,0.99h2.45v23.458c0,0.834,0.629,1.558,1.463,1.558H39.84c0.834,0,1.428-0.724,1.428-1.558V20.92    h2.485c0.629,0,1.193-0.401,1.414-0.99S45.219,18.667,44.745,18.253z M27.257,31.398c0,0.614-0.529,1.143-1.144,1.143h-6.289    c-0.614,0-1.11-0.527-1.11-1.143v-7.109c0-2.351,1.92-4.256,4.271-4.256c2.352,0,4.271,1.906,4.271,4.256V31.398z\">\n                  </path>\n                </svg>\n                <svg (click)=\"removeGalleryImage(item.name)\" class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\"\n                  viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimage\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n\n        </div>\n      </ng-template>\n\n\n      <div class=\"divcolorproduct\">\n        <div class=\"lijksdfgdsvc\">\n\n          <mat-radio-group [(ngModel)]=\"_Product.Color\" name=\"Color\">\n            <div [ngStyle]=\"{'background': 'var(--'+ item + ')'  }\" *ngFor=\"let item of colors\" class=\"colorbox\">\n              <mat-radio-button [disabled]=\" hasNoColor \" [value]=\"item\"></mat-radio-button>\n            </div>\n          </mat-radio-group>\n          <div class=\"noColor\">\n            <mat-checkbox (change)=\"setNoColor()\" name=\"hasNoColor\" [(ngModel)]=\"hasNoColor\">No Color</mat-checkbox>\n          </div>\n          <!-- <mat-select  #colorSelect (selectionChange)=\"mixedColor(colorSelect)\" >\n              <div [ngStyle]=\"{'background': 'var(--'+ item + ')'  }\" *ngFor=\"let item of colors\" class=\"colorbox\">\n                <mat-option [value]=\"item\"></mat-option>\n              </div>\n            </mat-select> -->\n\n        </div>\n      </div>\n\n      <div class=\"divcategproduct\">\n        <div class=\"iofdgljkgfd\">\n          <div class=\"selectsubcateg1\">\n            <mat-select disableOptionCentering #Category (selectionChange)=\"getSub(Category.value, true)\"\n              name=\"CategoryId\" required [(ngModel)]=\"_Product.CategoryId\" placeholder=\"Category\"\n              panelClass=\"select-panel\">\n              <mat-option *ngFor=\"let item of categories\" [value]=\"item.Id\">{{item.Name}}</mat-option>\n            </mat-select>\n          </div>\n\n          <div class=\"selectsubcateg1\">\n            <mat-select disableOptionCentering name=\"SubCategoryId\" required [(ngModel)]=\"_Product.SubCategoryId\"\n              placeholder=\"SubCategory\" panelClass=\"select-panel\">\n              <mat-option *ngFor=\"let item of subCategories\" [value]=\"item.Id\">{{item.Name}}</mat-option>\n              <mat-option *ngIf=\"subCategories?.length === 0\" >\n                <p class=\"emptyCat\">Empty Category</p>\n              </mat-option>\n            </mat-select>\n          </div>\n\n          <div (click)=\"manageCategories()\" class=\"labplustype\">\n            <svg class=\"svgpluytrice\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 286.376 286.376\" xml:space=\"preserve\">\n              <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n                d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\">\n              </path>\n            </svg> \n            <label class=\"dfgcbxvc\">Manage</label>\n          </div>\n          <div (click)=\"refreshCat()\" class=\"labplustype refreshCat\">\n            <svg class=\"svgpluytrice\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 495.099 495.099\" xml:space=\"preserve\"><g><g id=\"XMLID_73_\">\n                <g id=\"XMLID_75_\">\n                  <path id=\"XMLID_76_\" d=\"M203.82,1.475c-1.28,1.472-1.422,3.624-0.328,5.247l28.608,42.45    C129.497,57.098,48.389,142.944,48.389,247.546c0,59.917,26.716,113.6,68.714,150.149c3.524-4.587,7.842-8.597,13.274-11.282    l34.04-16.833c-38.96-26.623-64.605-71.382-64.605-122.034c0-75.819,57.44-138.424,131.083-146.733l-27.394,40.658    c-1.096,1.625-0.962,3.774,0.327,5.249c1.289,1.473,3.405,1.891,5.154,1.028c35.723-17.665,103.131-51.013,135.047-66.803    c5.734-2.837,5.722-11.012-0.013-13.846c-92.208-45.566-75.115-37.037-135.041-66.653C207.225-0.418,205.108,0.001,203.82,1.475z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/>\n                </g>\n                <path id=\"XMLID_74_\" d=\"M446.71,247.546c0-59.758-26.582-113.314-68.403-149.856c-3.507,4.494-7.734,8.445-12.957,10.998   l-34.415,17.015c38.817,26.649,64.353,71.309,64.353,121.844c0,75.585-57.089,138.005-130.397,146.634l27.335-40.551   c1.096-1.624,0.954-3.773-0.326-5.248c-1.289-1.473-3.408-1.891-5.156-1.028c-51.816,25.61-17.87,8.829-141.178,69.776   c-1.472,0.727-2.401,2.225-2.401,3.867v0.007c0,1.65,0.929,3.139,2.401,3.858c0,0,95.723,47.322,141.169,69.794   c1.748,0.862,3.867,0.443,5.156-1.028c1.289-1.475,1.423-3.626,0.326-5.249l-28.615-42.475   C365.919,437.667,446.71,351.946,446.71,247.546z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/>\n                </g></g>\n              </svg>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n\n    <div class=\"divdecription\">\n      <div class=\"textareaWrapper\">\n        <ng-scrollbar [shown]=\"'always'\" class=\"txtareacontent\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\n          <textarea matInput cdkTextareaAutosize required [(ngModel)]=\"_Product.Description\" name=\"Description\"\n            #des=\"ngModel\"></textarea>\n        </ng-scrollbar>\n      </div>\n\n      <div class=\"divimagedescr\">\n        <!-- Adding Product images  -->\n        <ng-container *ngIf=\" _formJob === 'Add' ; else editingProduct2\">\n            <div (click)=\"resetInputs();descImgs.click()\" class=\"uopietter\">\n              <input [disabled]=\"(DescImgs.length + _Product.descImgs.length) === _maxD\" #descImgs type=\"file\" accept=\"image/*\" name=\"DescImgs\" ngModel multiple\n                (change)=\"addDescImages($event.target.files)\">\n              <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n                xml:space=\"preserve\">\n                <path\n                  d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n                </path>\n                <path d=\"M383.6,313.6\"></path>\n                <path\n                  d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n                </path>\n                <path\n                  d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n                </path>\n                <path\n                  d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n                </path>\n              </svg>\n            </div>\n            <ng-container *ngFor=\"let item of DescImgs\">\n              <div class=\"uopietter\">\n                <div (click)=\"removeDescImage(item.name)\" class=\"rytfhgqsfez\">\n                  <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                    <polygon\n                      points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                    </polygon>\n                  </svg>\n                </div>\n                <img class=\"otherimagedescr\" [src]=\"item.data\">\n              </div>\n            </ng-container>\n        </ng-container>\n\n        <!-- Edit existing images  -->\n        <ng-template #editingProduct2>\n          <div (click)=\"resetInputs();descImgs.click()\" class=\"uopietter\">\n            <input [disabled]=\"(DescImgs.length + _Product.descImgs.length) === _maxD\" #descImgs type=\"file\" accept=\"image/*\" name=\"DescImgs\"  multiple\n              (change)=\"addDescImages($event.target.files)\">\n            <svg class=\"svgplusimage\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\"\n              xml:space=\"preserve\">\n              <path\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path d=\"M383.6,313.6\"></path>\n              <path\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </div>\n\n          <ng-container *ngFor=\"let item of _Product.descImgs\">\n            <div class=\"uopietter\">\n              <div (click)=\"removeDescImageServer(item)\" class=\"rytfhgqsfez\">\n                <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimagedescr\" src=\"/Content/Images/Products/{{(_formJob === 'Copy') ? copyingId : _Product.Id}}/Desc/{{item}}\">\n            </div>\n          </ng-container>\n\n          <ng-container *ngFor=\"let item of DescImgs\">\n            <div class=\"uopietter halfOpacity\">\n              <div (click)=\"removeDescImage(item.name)\" class=\"rytfhgqsfez\">\n                <svg class=\"imgControle\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" xml:space=\"preserve\">\n                  <polygon\n                    points=\"612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397      306,341.411 576.521,611.397 612,575.997 341.459,306.011    \">\n                  </polygon>\n                </svg>\n              </div>\n              <img class=\"otherimagedescr\" [src]=\"item.data\">\n            </div>\n          </ng-container>\n          \n        </ng-template>\n\n      </div>\n\n      <div class=\"divshipping\">\n        <div class=\"uytuytyuuy\">\n          <label class=\"labshipping\">Shipping</label>\n          <mat-radio-group [(ngModel)]=\"_Product.ShippingMethod\" name=\"ShippingMethod\">\n            <div class=\"eryttyyhy\">\n              <mat-radio-button value=\"gearbest\">Gearbest</mat-radio-button>\n            </div>\n            <div class=\"eryttyyhy\">\n              <mat-radio-button value=\"aliexpress\">Aliexpress</mat-radio-button>\n            </div>\n          </mat-radio-group>\n          <div _ngcontent-c3=\"\" class=\"labplustype\">\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgpluytrice\" version=\"1.1\" viewBox=\"0 0 286.376 286.376\"\n              x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M268.477,125.29H161.086V17.899c0-9.885-8.013-17.898-17.898-17.898   s-17.898,8.013-17.898,17.898v107.39H17.9c-9.885,0-17.9,8.013-17.9,17.898c0,9.885,8.015,17.898,17.9,17.898h107.39v107.39   c0,9.885,8.013,17.898,17.898,17.898s17.898-8.013,17.898-17.898v-107.39h107.391c9.885,0,17.898-8.014,17.898-17.898   C286.376,133.303,278.362,125.29,268.477,125.29z\"\n                style=\"fill-rule:evenodd;clip-rule:evenodd;\"></path>\n            </svg>\n            <label _ngcontent-c3=\"\" class=\"dfgcbxvc\">Option</label></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"formFooter\">\n      <div class=\"divtitleprod lastdiv\">\n\n        <label>Quantity</label>\n        <input (blur)=\"QteBlured()\" min=\"0\" placeholder=\"NULL\" class=\"inputprice\" maxlength=\"7\" type=\"number\" [(ngModel)]=\"_Product.Quantity\"\n          name=\"Quantity\">\n\n        <label>On Sale</label>\n        <div class=\"switch1\" [ngClass]=\"{'switchadd1': _Product.OnSale}\">\n          <input (change)=\"OnsaleChanged()\" name=\"OnSale\" [(ngModel)]=\"_Product.OnSale\" #OnSale=\"ngModel\" id=\"checkanimat1\" type=\"checkbox\">\n          <div class=\"switch2\" [ngClass]=\"{'switchadd2': _Product.OnSale}\"></div>\n        </div>\n\n      </div>\n\n      <!-- <div class=\"bottonaddprod mgLeft\" (click)=\"onSubmit(f)\">\n        {{ (_Product.Id > 0) ? 'Update' : 'Add Product' }}\n      </div> -->\n      <div matRipple class=\"bottonaddprod mgLeft\" (click)=\"onSubmit(f)\">\n        {{ _formJob + ' Product'}}\n      </div>\n\n      <div matRipple class=\"bottonaddprod\" (click)=\"Reset()\">\n        Reset\n      </div>\n    </div>\n    <!-- <data-viewer \n      [data]=\"{ ProductMainImg: _Product.mainImg ? _Product.mainImg : 'no',\n        imgPath: imgPath ? 'yes' : 'no',\n        mainImgFromCopy: mainImgFromCopy ? mainImgFromCopy : 'no',\n        isPristine: f.pristine }\">\n    </data-viewer> -->\n\n    <!-- <data-viewer [data]=\"{job: _formJob, Id: _Product.Id, CopyId: copyingId}\" ></data-viewer> -->\n    \n    <!-- <data-viewer [data]=\"_Product\" ></data-viewer> -->\n    <!-- <data-viewer [data]=\"categories\" ></data-viewer> -->\n    \n\n  </form>\n\n  <div class=\"history\">\n    <product-history [Products]=\"lastProducts\" (delete)=\"productDeleted($event)\"></product-history>\n  </div>\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_admin_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/admin-upload.service */ "./src/app/services/admin-upload.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
/* harmony import */ var src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");












var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(productService, categoryService, uploadService, router, activeRoute, dialogService, toaster) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.uploadService = uploadService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.expand = false;
        this.hasNoColor = false;
        this._formJob = src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add; // what operation the form will achieve
        this.colors = src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["COMMUN_COLORS"];
        this._maxG = 7; // Max gallery images
        this._maxD = 5; // Max description images
        this.GalleryImgs = [];
        this.DescImgs = [];
        this.GalleryImgsDrop = []; // images names to drop from server
        this.DescImgsDrop = [];
        this._Product = new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]();
        this.copyingId = 0; // store the product id that the new product will copy from
        this.getCategories();
    }
    // implements ngOnDestroy to Remove all subscriptions
    ProductFormComponent.prototype.getCategories = function () {
        this.categories = this.categoryService.getCategoriesLocally();
        if (!this.categories)
            this.refreshCat();
    };
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParamMap.subscribe(function (p) {
            _this.resetForm(false);
            var editId = +p.get("editId");
            if (editId)
                _this.getProduct(editId, src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Update);
            var copyId = +p.get("copyId");
            if (copyId)
                _this.getProduct(copyId, src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Copy);
        });
        this.getLastAddedProducts();
    };
    ProductFormComponent.prototype.refreshCat = function () {
        var _this = this;
        this.categoryService.getCategoriesFromServer().subscribe(function (cats) {
            _this.categoryService.saveOnLocalStorage(cats);
            _this.categories = cats;
        }, function () { return _this.toaster.error("Could Not Get Categories From Server .."); });
    };
    // Posting The Product
    ProductFormComponent.prototype.onSubmit = function (f) {
        if (f.invalid) {
            this.toaster.warning("Form Is Not Valid ..");
            return;
        }
        if (this._Product.Id > 0)
            // update case
            this.updateProduct();
        else
            this.addProduct();
    };
    ProductFormComponent.prototype.checkImages = function () {
        if ((this._formJob === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add &&
            (!this.MainImage || this.GalleryImgs.length === 0)) ||
            (this._formJob !== src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add &&
                (this.GalleryImgs.length === 0 &&
                    this._Product.galleryImgs.length === 0))) {
            this.toaster.warning("Main Image and Gallery images are Mandatory");
            return false;
        }
        return true;
    };
    ProductFormComponent.prototype.addProduct = function () {
        var _this = this;
        if (!this.checkImages())
            return;
        // this._Product.Slug = this._Product.Name.replace(/\s+/g, "-"); // on server side
        this.productService.PostProduct(this._Product).subscribe(function (ProductId) {
            _this.toaster.success("Product has been added " + ProductId, "Success");
            _this.uploadProductImages(ProductId);
        }, function (error) {
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["BadInput"]) {
                console.log(error.originalError);
                _this.toaster.warning("ModelState is not valid .."); // Display the error within Form errors and Wrap it with JSON pipe
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
        if (!this.ngForm.pristine) {
            // the form has changed (dirty)
            this.productService
                .UpdateProduct(this._Product.Id, this._Product)
                .subscribe(function (ProductId) {
                _this.toaster.success("Product modified " + ProductId, "Success");
            }, function (error) {
                if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["BadInput"]) {
                    console.log(error.originalError);
                    _this.toaster.warning("ModelState is not valid .."); // Display the error within Form errors and Wrap it with JSON pipe
                }
                else if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["NotFound"]) {
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
        form.append("ProductId", ProductId);
        if (this.MainImage) {
            form.append("MainImg", this.MainImage, this.MainImage.name);
        }
        this.GalleryImgs.forEach(function (e) {
            form.append("GalleryImgs", e.img, e.img.name);
        });
        this.DescImgs.forEach(function (e) {
            form.append("DescImgs", e.img, e.img.name);
        });
        if (this._formJob === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Copy) {
            form.append("CopyingId", this.copyingId.toString());
            form.append("mainImgFromCopy", this.mainImgFromCopy);
        }
        // Updating case, or copying case
        if (this._formJob !== src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add) {
            form.append("GalleryImgsDrop", JSON.stringify(this.GalleryImgsDrop));
            form.append("DescImgsDrop", JSON.stringify(this.DescImgsDrop));
        }
        var action = this._formJob === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add
            ? this.uploadService.addProductImages(form)
            : this._formJob === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Update
                ? this.uploadService.updateProductImages(form)
                : this.uploadService.copyProductImages(form);
        action.subscribe(function (Product) {
            _this.addToHistory(Product);
            _this.toaster.success("Images Uploaded !", "Success");
            _this.resetForm();
        }, function (err) {
            if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["BadInput"]) {
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
    ProductFormComponent.prototype.productDeleted = function (productId) {
        if (productId > 0) {
            var editId = +this.activeRoute.snapshot.queryParamMap.get("editId");
            console.log(editId);
            if (productId === editId)
                this.Reset();
        }
        this.getLastAddedProducts();
    };
    ProductFormComponent.prototype.resetForm = function (redirect) {
        if (redirect === void 0) { redirect = true; }
        this.ngForm.resetForm();
        this._Product = new _models_adminProduct__WEBPACK_IMPORTED_MODULE_3__["AdminProduct"]();
        this.copyingId = 0;
        this._formJob = src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Add;
        this.freeImages();
        this.GalleryImgsDrop = [];
        this.DescImgsDrop = [];
        this.mainImgFromCopy = null;
        if (redirect)
            this.router.navigateByUrl("/admin/product-form");
    };
    ProductFormComponent.prototype.addToHistory = function (item) {
        var array = this.lastProducts;
        var ex_item = array.find(function (x) { return x.Id === item.Id; });
        if (ex_item)
            array.splice(array.indexOf(ex_item), 1);
        if (array.length >= 6)
            // Magic Number 6 => item had to display within history
            array.pop(); // Remove The Last
        array.unshift(item); // Insert at The start
    };
    ProductFormComponent.prototype.getSub = function (cat, reset) {
        try {
            if (reset)
                this._Product.SubCategoryId = null;
            if (cat) {
                this.subCategories = this.categories.find(function (x) { return x.Id === +cat; }).SubCategories;
                this._Product.SubCategoryId = +this.subCategories[0].Id;
            }
        }
        catch (e) { }
    };
    ProductFormComponent.prototype.getProduct = function (id, job) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (p) {
            _this.freeImages();
            _this._Product = p;
            _this.hasNoColor = _this._Product.Color ? false : true;
            _this.getSub(_this._Product.CategoryId, false);
            if (job === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Copy) {
                _this.copyingId = id;
                _this._Product.Id = 0;
            }
            _this._formJob = job;
        }, function (err) {
            if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["NotFound"]) {
                _this.toaster.warning("Product Not Found Or Deleted");
            }
            else {
                throw err;
            }
        });
    };
    /* Images Functions */
    ProductFormComponent.prototype.setMainImage = function (files) {
        this.MainImage = files[0];
        this.previewMainImg();
    };
    ProductFormComponent.prototype.previewMainImg = function () {
        var _this = this;
        if (this.MainImage) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imgPath = e.target.result.toString();
            };
            reader.readAsDataURL(this.MainImage);
        }
    };
    ProductFormComponent.prototype.addGalleryImages = function (files) {
        this.storeAndPreviewImages(files, this.GalleryImgs, this._Product.galleryImgs, this._maxG);
    };
    ProductFormComponent.prototype.addDescImages = function (files) {
        this.storeAndPreviewImages(files, this.DescImgs, this._Product.descImgs, this._maxD);
    };
    ProductFormComponent.prototype.storeAndPreviewImages = function (files, imagesList, productImages, maxImages) {
        var _this = this;
        var _loop_1 = function (i) {
            var exist = imagesList.find(function (x) { return x.name === files[i].name; }) ? true : false;
            if (files[i] && !exist) {
                var reader = new FileReader();
                reader.onload = function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var item, _a, _length;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {};
                                return [4 /*yield*/, files[i]];
                            case 1:
                                _a.img = _b.sent();
                                return [4 /*yield*/, files[i].name];
                            case 2:
                                _a.name = _b.sent();
                                return [4 /*yield*/, e.target.result.toString()];
                            case 3:
                                item = (_a.data = _b.sent(),
                                    _a);
                                _length = imagesList.length + productImages.length;
                                if (_length < maxImages) {
                                    imagesList.push(item);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                reader.readAsDataURL(files[i]);
            }
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        return true;
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
        // this method will call the server once it raised !
        if (this._formJob === src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_9__["FormJob"].Copy) {
            this.imgPath = this.MainImage = null;
            this.mainImgFromCopy = img;
            return;
        }
        this.uploadService.ReplaceMainImg(this._Product.Id, img).subscribe(function () {
            _this.toaster.success("main image changed", "Success");
            _this._Product.mainImg = img;
            _this.imgPath = _this.MainImage = null;
            _this.getLastAddedProducts();
        }, function (error) {
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_10__["BadInput"]) {
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
    ProductFormComponent.prototype.resetInputs = function () {
        var inputs = [this.mainImgInput, this.galleryImgsInput, this.descImgsInput];
        inputs.forEach(function (item) {
            if (item)
                item.nativeElement.value = '';
        });
    };
    ProductFormComponent.prototype.freeImages = function () {
        this.imgPath = null;
        this.MainImage = null;
        this.GalleryImgs = [];
        this.DescImgs = [];
        this.resetInputs();
    };
    ProductFormComponent.prototype.Reset = function () {
        this.resetForm();
    };
    ProductFormComponent.prototype.setNoColor = function () {
        if (this.hasNoColor)
            this._Product.Color = null;
        else
            this._Product.Color = "white";
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
    ProductFormComponent.prototype.manageCategories = function () {
        // open a dialog to manage categories
        this.dialogService.openCategoriesDialog();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProductFormComponent.prototype, "ngForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mainImg"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductFormComponent.prototype, "mainImgInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("galleryImgs"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductFormComponent.prototype, "galleryImgsInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("descImgs"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductFormComponent.prototype, "descImgsInput", void 0);
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-form",
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/product/product-form/product-form.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"],
            src_app_services_admin_upload_service__WEBPACK_IMPORTED_MODULE_7__["AdminUploadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product/product-history/product-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product/product-history/product-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngFor=\"let p of Products; trackBy: trackById\" class=\"box\">\n  <img [src]=\"'/Content/Images/Products/' + p.Id + '/Main/' + p.Image\" class=\"fadeIn\" >\n  <svg (click)=\"editProduct(p.Id)\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n    </path>\n  </svg>\n  <svg (click)=\"copyProduct(p.Id)\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\" style=\"enable-background:new 0 0 699.428 699.428;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n    </path>\n  </svg>\n  <svg (click)=\"ProductVars(p.Id)\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\" style=\"enable-background:new 0 0 54.971 54.971;\"\n    xml:space=\"preserve\">\n    <path\n      d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n    </path>\n    <path\n      d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n    </path>\n    <path\n      d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n    </path>\n    <path\n      d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n    </path>\n    <path d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n    </path>\n    <path\n      d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n    </path>\n    <path\n      d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n    </path>\n    <path d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n    </path>\n  </svg>\n  <svg (click)=\"deleteProduct(p.Id)\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"-40 0 427 427.00131\" >\n    <path\n      d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n    <path\n      d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n    <path\n      d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n    </path>\n    <path\n      d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n    </path>\n  </svg>\n</div>"

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");







var ProductHistoryComponent = /** @class */ (function () {
    function ProductHistoryComponent(aps, router, dialogService, toaster) {
        this.aps = aps;
        this.router = router;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProductHistoryComponent.prototype.editProduct = function (id) {
        this.router.navigate(['/admin/product-form'], { queryParams: { editId: id } });
    };
    ProductHistoryComponent.prototype.copyProduct = function (id) {
        this.router.navigate(['/admin/product-form'], { queryParams: { copyId: id } });
    };
    ProductHistoryComponent.prototype.ProductVars = function (id) {
        this.dialogService.openVariantsDialog(id);
    };
    ProductHistoryComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dialogService.raiseConfirmDialog().subscribe(function (res) {
            if (res) {
                _this.aps.deleteProduct(id)
                    .subscribe(function () { return _this.delete.emit(id); }, function (err) {
                    if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["BadInput"]) {
                        _this.toaster.warning('Something Went Wrong');
                        console.log(err.originalError.error.Message);
                    }
                    else if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["NotFound"]) {
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ProductHistoryComponent);
    return ProductHistoryComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divproductlist\" id=\"my-productlist\">\n  <div class=\"divlabtyporeder\">\n    <label (click)=\"onSaleChange(null)\" [class.active]=\"queryObj.OnSale === null && !queryObj.Deleted\" >All</label>\n    <label (click)=\"onSaleChange(true)\" [class.active]=\"queryObj.OnSale === true\" >On Sale</label>\n    <label (click)=\"onSaleChange(false)\" [class.active]=\"queryObj.OnSale === false\" >Out Of Stock</label>\n    <label (click)=\"BringDeleted()\" [class.active]=\"queryObj.Deleted\" >Deleted</label>\n  </div>\n\n  <table-filter [target]=\"'product'\" [queryObj]=\"queryObj\" (filter)=\"populateProducts()\"></table-filter>\n  \n  <div class=\"divallordersm\">\n    <ng-scrollbar [shown]=\"'always'\" class=\"table-wrapper\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\n      <table cdk-table [dataSource]=\"dataSource\" multiTemplateDataRows [trackBy]= \"trackById\" >\n        <ng-container cdkColumnDef=\"Select\">\n          <th cdk-header-cell *cdkHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n              [checked]=\"selection.hasValue() && isAllSelected()\"\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n              (change)=\"$event ? selection.toggle(row) : null\"\n              [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Id\">\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Id')\" class=\"sortable\"> ID \n            <ng-container *ngIf=\"queryObj.OrderBy === 'Id'\">\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                  <path d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\"></path>\n                  <path d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\"></path>\n                  <path d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\"></path>\n              </svg>\n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                <path d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\"></path>\n                <path d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\"></path>\n                <path d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\"></path>\n              </svg>\n            </ng-container>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> #{{row.Id}} </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Image\">\n          <th cdk-header-cell *cdkHeaderCellDef> Image </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <img [src]=\"'/Content/Images/Products/' + row.Id + '/Main/' + row.mainImg\" class=\"ertytrh\" >\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Name\">\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Name')\" class=\"sortable\"> Name \n            <ng-container *ngIf=\"queryObj.OrderBy === 'Name'\">    \n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n                  <path d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\"></path>\n                  <path d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\"></path>\n                  <path d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\"></path>\n              </svg>\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\n                  <path d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\"></path>\n                  <path d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\"></path>\n                  <path d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\"></path>\n              </svg>\n            </ng-container>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <a [href]=\"'/product/'+row.Slug\" target=\"_blank\" class=\"ezrergfrvsx\">{{row.Name}}</a></td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Price\">\n          <th cdk-header-cell *cdkHeaderCellDef  (click)=\"orderBy('Price')\" class=\"sortable\"> Price \n            <ng-container *ngIf=\"queryObj.OrderBy === 'Price'\">\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                  <path d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\"></path>\n                  <path d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\"></path>\n                  <path d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\"></path>\n              </svg>\n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                <path d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\"></path>\n                <path d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\"></path>\n                <path d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\"></path>\n              </svg>\n            </ng-container>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ row.Price | currency:'USD' }} </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Color\">\n          <th cdk-header-cell *cdkHeaderCellDef> Color </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <label *ngIf=\"row.Color\" [ngStyle]=\"{'background': 'var(--'+ row.Color + ')' }\" class=\"labcolorprod\"></label>\n            <svg *ngIf=\"!row.Color\" _ngcontent-c12=\"\" xml:space=\"preserve\" class=\"labcolorprod\" style=\"fill: red;\" version=\"1.1\" viewBox=\"0 0 215.455 215.455\" x=\"0px\" y=\"0px\"><path _ngcontent-c12=\"\" d=\"M107.728,0.001C48.325,0.001,0,48.329,0,107.732c0.005,59.397,48.332,107.722,107.728,107.722  c59.401,0,107.728-48.324,107.728-107.723C215.455,48.329,167.129,0.001,107.728,0.001z M107.728,15.001  c22.021,0,42.269,7.721,58.192,20.592L35.593,165.919C22.724,149.997,15.002,129.75,15,107.731  C15,56.6,56.598,15.001,107.728,15.001z M107.728,200.454c-23.718,0-45.381-8.956-61.797-23.658L176.796,45.931  c14.703,16.416,23.659,38.081,23.659,61.801C200.455,158.859,158.857,200.454,107.728,200.454z\"></path></svg>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Quantity\">\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Quantity')\" class=\"sortable\"> Quantity \n            <ng-container *ngIf=\"queryObj.OrderBy === 'Quantity'\">\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                    <path d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\"></path>\n                    <path d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\"></path>\n                    <path d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\"></path>\n                </svg>\n                <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                  <path d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\"></path>\n                  <path d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\"></path>\n                  <path d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\"></path>\n                </svg>\n            </ng-container>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            {{ (row.Quantity == null) ? 'MAX' : (row.Quantity === 0) ? 'Out' : row.Quantity+' unit' }}\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"OnSale\">\n          <th cdk-header-cell *cdkHeaderCellDef> Stock </th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <label [ngClass]=\"{'outStock': row.OnSale === false}\" class=\"labcolstock\"></label>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Source\">\n          <th cdk-header-cell *cdkHeaderCellDef> Source </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> GearBest </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Last_Update\">\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Last_Update')\" class=\"sortable\"> Last_Update \n            <ng-container *ngIf=\"queryObj.OrderBy === 'Last_Update'\">\n                <svg *ngIf=\"queryObj.IsSortAscending\"  class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                    <path d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\"></path>\n                    <path d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\"></path>\n                    <path d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\"></path>\n                </svg>\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\n                  <path d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\"></path>\n                  <path d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\"></path>\n                  <path d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\"></path>\n                </svg>\n            </ng-container>\n          </th>\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ _dateTime.fromISO(row.Last_Update).toRelative() }} </td>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"Controls\">\n          <th cdk-header-cell *cdkHeaderCellDef></th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <div class=\"PtableControls\">\n              <ng-container *ngIf=\"!row.Deleted; else deletedControls\" >\n                <svg (click)=\"editProduct(row.Id)\" class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                  style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                  </path>\n                </svg>\n                <svg (click)=\"deleteProduct(row.Id)\" class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                  width=\"427pt\">\n                  <path\n                    d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                  </path>\n                  <path\n                    d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                </svg>\n                <svg (click)=\"copyProduct(row.Id)\" class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                  style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                  </path>\n                </svg>\n                <svg (click)=\"ProductVars(row.Id)\" class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 54.971 54.971\"\n                  style=\"enable-background:new 0 0 54.971 54.971;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M51.173,3.801c-5.068-5.068-13.315-5.066-18.384,0l-9.192,9.192c-0.781,0.781-0.781,2.047,0,2.828s2.047,0.781,2.828,0   l9.192-9.192c1.691-1.69,3.951-2.622,6.363-2.622c2.413,0,4.673,0.932,6.364,2.623s2.623,3.951,2.623,6.364   c0,2.412-0.932,4.672-2.623,6.363L36.325,31.379c-3.51,3.508-9.219,3.508-12.729,0c-0.781-0.781-2.047-0.781-2.828,0   s-0.781,2.048,0,2.828c2.534,2.534,5.863,3.801,9.192,3.801s6.658-1.267,9.192-3.801l12.021-12.021   c2.447-2.446,3.795-5.711,3.795-9.192C54.968,9.512,53.62,6.248,51.173,3.801z\">\n                  </path>\n                  <path\n                    d=\"M27.132,40.57l-7.778,7.778c-1.691,1.691-3.951,2.623-6.364,2.623c-2.412,0-4.673-0.932-6.364-2.623   c-3.509-3.509-3.509-9.219,0-12.728L17.94,24.306c1.691-1.69,3.951-2.622,6.364-2.622c2.412,0,4.672,0.932,6.363,2.622   c0.781,0.781,2.047,0.781,2.828,0s0.781-2.047,0-2.828c-5.067-5.067-13.314-5.068-18.384,0L3.797,32.793   c-2.446,2.446-3.794,5.711-3.794,9.192c0,3.48,1.348,6.745,3.795,9.191c2.446,2.447,5.711,3.795,9.191,3.795   c3.481,0,6.746-1.348,9.192-3.795l7.778-7.778c0.781-0.781,0.781-2.047,0-2.828S27.913,39.789,27.132,40.57z\">\n                  </path>\n                  <path\n                    d=\"M34.003,44.007c-1.104,0-2,0.896-2,2v6c0,1.104,0.896,2,2,2s2-0.896,2-2v-6C36.003,44.902,35.108,44.007,34.003,44.007z\">\n                  </path>\n                  <path\n                    d=\"M41.175,42.593c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828l4.242,4.242c0.391,0.391,0.902,0.586,1.414,0.586   s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L41.175,42.593z\">\n                  </path>\n                  <path\n                    d=\"M45.968,36.007h-6c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2S47.073,36.007,45.968,36.007z\">\n                  </path>\n                  <path\n                    d=\"M18.003,13.007c1.104,0,2-0.896,2-2v-6c0-1.104-0.896-2-2-2s-2,0.896-2,2v6C16.003,12.111,16.899,13.007,18.003,13.007z\">\n                  </path>\n                  <path\n                    d=\"M10.589,14.421c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L9.175,7.35   c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L10.589,14.421z\">\n                  </path>\n                  <path\n                    d=\"M5.968,21.007h6c1.104,0,2-0.896,2-2s-0.896-2-2-2h-6c-1.104,0-2,0.896-2,2S4.864,21.007,5.968,21.007z\">\n                  </path>\n                </svg>\n              </ng-container>\n              <ng-template #deletedControls>\n                <svg (click)=\"editProduct(row.Id)\" class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 469.331 469.331\"\n                style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                <path\n                  d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\">\n                </path>\n                </svg>\n                <svg (click)=\"deleteProduct(row.Id, true)\" class=\"svgdeletm2\" xmlns=\"http://www.w3.org/2000/svg\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\"\n                  width=\"427pt\">\n                  <path\n                    d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                  <path\n                    d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\">\n                  </path>\n                  <path\n                    d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\">\n                  </path>\n                </svg>\n                <svg (click)=\"copyProduct(row.Id)\" class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 699.428 699.428\"\n                  style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\n                  <path\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\n                  </path>\n                </svg>\n                <svg (click)=\"restoreProducts([row.Id])\" class=\"svgdeletm2\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                  y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                  <g>\n                      <g>\n                          <g>\n                              <path d=\"M343.864,398.864c11.231-4.087,21.935-9.496,31.888-16.112l-17.696-26.656c-7.832,5.212-16.26,9.466-25.104,12.672\n                      L343.864,398.864z\" />\n                              <path d=\"M291.944,104c-83.947,0.006-151.995,68.063-151.99,152.01c0.004,63.438,39.406,120.202,98.838,142.39l11.2-29.968\n                      c-62.135-23.055-93.815-92.115-70.76-154.25s92.115-93.815,154.25-70.76c45.023,16.706,75.751,58.645,78.11,106.61\n                      l-42.784-42.784l-22.624,22.624l81.76,81.712l81.712-81.712l-22.624-22.624l-43.36,43.36\n                      C440.771,168.879,373.724,104.095,291.944,104z\" />\n                              <path d=\"M277.352,375.104l-3.856,31.792c6.224,0.736,12.8,0.992,18.832,1.104c5.625-0.002,11.245-0.328,16.832-0.976\n                      l-3.632-31.776c-4.399,0.494-8.821,0.745-13.248,0.752C287.384,375.888,282.232,375.712,277.352,375.104z\" />\n                              <path d=\"M402.344,480h-368V128h96V32h272v64h32V0H107.72L2.344,105.376V512h432V336h-32V480z M98.344,54.624V96H56.968\n                      L98.344,54.624z\" />\n                          </g>\n                      </g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                  <g>\n                  </g>\n                </svg>\n              </ng-template>\n            </div>\n          </td>\n        </ng-container>\n        <ng-container cdkColumnDef=\"Expand\">\n          <th cdk-header-cell *cdkHeaderCellDef></th>\n          <td cdk-cell *cdkCellDef=\"let row\">\n            <svg (click)=\"expandedElement = (expandedElement === row) ? null : row\" class=\"svgdowndet\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\"\n              style=\"enable-background:new 0 0 292.362 292.362;\" xml:space=\"preserve\">\n              <path\n                d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\n              </path>\n            </svg>\n          </td>\n        </ng-container>\n\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n        <ng-container cdkColumnDef=\"expandedDetail\">\n          <td cdk-cell *cdkCellDef=\"let element\" [attr.colspan]=\"columns.length\">\n            <div class=\"expanded-content\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n              <!-- Something will appear right here .. -->\n              <!-- {{expandedElement | json}} -->\n            </div>\n          </td>\n        </ng-container>\n\n        <tr stickyCssClass cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\n        <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"  ></tr>\n        <tr cdk-row *cdkRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n\n      </table>\n    </ng-scrollbar>\n  </div>\n  <div class=\"tableFooter\">\n    <div class=\"itemsToShow selectsubcateg1 contentBG\">\n        <mat-select disableOptionCentering [(ngModel)]=\"queryObj.PageSize\" (selectionChange)=\"itemsToShowChanged()\">\n            <mat-option [value]=\"2\">2 item</mat-option>\n            <mat-option [value]=\"3\">3 item</mat-option>\n            <mat-option [value]=\"5\">5 item</mat-option>\n            <mat-option [value]=\"10\">10 item</mat-option>\n            <mat-option [value]=\"20\">20 item</mat-option>\n            <!-- <mat-option [value]=\"10\">50 item</mat-option>\n            <mat-option [value]=\"10\">100 item</mat-option> -->\n         </mat-select>\n    </div>\n    <div *ngIf=\"selection.selected.length > 0\" class=\"footerControls\">\n      <svg  viewBox=\"0 0 384 384\"  class=\"\"><g><path d=\"m374 0h-99.699219c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h75.710938l-194.511719 196.375c-3.730469 3.949219-3.628906 10.148438.226562 13.972656 3.855469 3.824219 10.058594 3.867188 13.972657.105469l194.300781-196.152344v75.398438c0 5.523437 4.476562 10 10 10s10-4.476563 10-10v-99.699219c0-5.523438-4.476562-10-10-10zm0 0\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/><path d=\"m324.136719 214.492188c-5.523438 0-10 4.476562-10 10v109.507812c-.019531 16.5625-13.4375 29.980469-30 30h-234.136719c-16.5625-.019531-29.980469-13.4375-30-30v-234.136719c.019531-16.5625 13.4375-29.980469 30-30h109.507812c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-109.507812c-27.601562.03125-49.96875 22.398438-50 50v234.136719c.03125 27.601562 22.398438 49.96875 50 50h234.136719c27.601562-.03125 49.96875-22.398438 50-50v-109.507812c0-5.523438-4.476563-10-10-10zm0 0\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/></g> </svg>\n      <svg (click)=\"deleteRange(selection.selected)\" _ngcontent-c4=\"\"  viewBox=\"-40 0 427 427.00131\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-c4=\"\" d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path></svg>\n      <svg *ngIf=\"queryObj.Deleted\" (click)=\"deleteRange(selection.selected, true)\" _ngcontent-c4=\"\"  viewBox=\"-40 0 427 427.00131\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-c4=\"\" d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path></svg>\n      <svg *ngIf=\"queryObj.Deleted\" (click)=\"restoreRange(selection.selected)\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n      y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n      <g>\n          <g>\n              <g>\n                  <path d=\"M343.864,398.864c11.231-4.087,21.935-9.496,31.888-16.112l-17.696-26.656c-7.832,5.212-16.26,9.466-25.104,12.672\n          L343.864,398.864z\" />\n                  <path d=\"M291.944,104c-83.947,0.006-151.995,68.063-151.99,152.01c0.004,63.438,39.406,120.202,98.838,142.39l11.2-29.968\n          c-62.135-23.055-93.815-92.115-70.76-154.25s92.115-93.815,154.25-70.76c45.023,16.706,75.751,58.645,78.11,106.61\n          l-42.784-42.784l-22.624,22.624l81.76,81.712l81.712-81.712l-22.624-22.624l-43.36,43.36\n          C440.771,168.879,373.724,104.095,291.944,104z\" />\n                  <path d=\"M277.352,375.104l-3.856,31.792c6.224,0.736,12.8,0.992,18.832,1.104c5.625-0.002,11.245-0.328,16.832-0.976\n          l-3.632-31.776c-4.399,0.494-8.821,0.745-13.248,0.752C287.384,375.888,282.232,375.712,277.352,375.104z\" />\n                  <path d=\"M402.344,480h-368V128h96V32h272v64h32V0H107.72L2.344,105.376V512h432V336h-32V480z M98.344,54.624V96H56.968\n          L98.344,54.624z\" />\n              </g>\n          </g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      </svg>\n    </div>\n\n    <div *ngIf='availablePages !== 1' class=\"pagingControle\">\n      <div class=\"pageNumbers\">\n\n        <ng-container *ngIf='availablePages <= 5; else morePaging'>\n          <div class=\"nbpgcom\" (click)=\"prevPage()\" >&lt;</div>\n          <div *ngFor=\"let item of availablePages | iterate; let i=index\" (click)=\"goToPage(i)\"\n          [class.activePage]=\"(queryObj.CurrentPage) === i\" class=\"nbpgcom\">\n          {{i+1}}\n          </div>\n          <div class=\"nbpgcom\" (click)=\"nextPage()\" >&gt;</div>\n        </ng-container>\n\n        <ng-template #morePaging>\n          <div class=\"nbpgcom\" (click)=\"goToPage(0)\" >&lt;&lt;</div>\n          <div class=\"nbpgcom\" (click)=\"prevPage()\" >&lt;</div>\n          <div class=\"paggingInput\">\n            <input #paggingInput [(ngModel)]=\"activePage\" type=\"text\" (change)=\"paggingInputChanged(paggingInput.value)\" >\n            <span> / {{availablePages}} pages</span>\n          </div>\n          <div class=\"nbpgcom\" (click)=\"nextPage()\" >&gt;</div>\n          <div class=\"nbpgcom\" (click)=\"goToPage(availablePages-1)\" >&gt;&gt;</div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <!-- <data-viewer [data]=\"{Count: nbTotal, Query: queryObj, AvailablePages: availablePages}\"></data-viewer> -->\n  \n</div>"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");
/* harmony import */ var src_app_models_ProductFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/ProductFilter */ "./src/app/models/ProductFilter.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");












var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, router, dialogService, toaster) {
        this.productService = productService;
        this.router = router;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.columns = [
            "Select",
            "Id",
            "Image",
            "Name",
            "Price",
            "Color",
            "Quantity",
            "Source",
            "OnSale",
            "Last_Update",
            "Controls",
            "Expand"
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this._dateTime = luxon__WEBPACK_IMPORTED_MODULE_10__["DateTime"]; // luxion instance
        this.queryObj = new src_app_models_ProductFilter__WEBPACK_IMPORTED_MODULE_9__["ProductFilter"]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.populateProducts();
    };
    Object.defineProperty(ProductListComponent.prototype, "availablePages", {
        get: function () {
            var nb = Math.ceil(this.nbTotal / this.queryObj.PageSize) || 1;
            return nb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductListComponent.prototype, "activePage", {
        get: function () {
            return this.queryObj.CurrentPage + 1;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.onSaleChange = function (onSale) {
        if (this.queryObj.OnSale !== onSale) {
            this.queryObj.Deleted = false;
            this.queryObj.OnSale = onSale;
            this.resetPagging();
            this.populateProducts();
        }
    };
    ProductListComponent.prototype.resetPagging = function () {
        this.queryObj.CurrentPage = 0;
    };
    ProductListComponent.prototype.BringDeleted = function () {
        this.queryObj.OnSale = undefined;
        this.queryObj.Deleted = true;
        this.resetPagging();
        this.populateProducts();
    };
    ProductListComponent.prototype.populateProducts = function () {
        var _this = this;
        this.productService.GetProductsList(this.queryObj).subscribe(function (res) {
            _this.nbTotal = res.Count; // display the total of products somewhere
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res.Items);
            _this.selection.clear();
        });
    };
    ProductListComponent.prototype.isAllSelected = function () {
        var nbSelected = this.selection.selected.length;
        var nbRows = this.dataSource.data.length;
        return nbSelected === nbRows;
    };
    ProductListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    ProductListComponent.prototype.trackById = function (index, product) {
        return product ? product.Id : undefined;
    };
    ProductListComponent.prototype.orderBy = function (value) {
        if (this.queryObj.OrderBy === value)
            this.queryObj.IsSortAscending = !this.queryObj.IsSortAscending;
        else {
            this.queryObj.IsSortAscending = true;
            this.queryObj.OrderBy = value;
        }
        this.populateProducts();
    };
    ProductListComponent.prototype.itemsToShowChanged = function () {
        this.queryObj.CurrentPage = 0; // Might Changed later
        this.populateProducts();
    };
    ProductListComponent.prototype.paggingInputChanged = function (page) {
        if (page > 0) {
            this.queryObj.CurrentPage = page - 1;
        }
        else {
            this.queryObj.CurrentPage = 0;
        }
        this.populateProducts();
    };
    ProductListComponent.prototype.goToPage = function (page) {
        this.queryObj.CurrentPage = page;
        this.populateProducts();
    };
    ProductListComponent.prototype.nextPage = function () {
        if ((this.queryObj.CurrentPage + 1) < this.availablePages) {
            this.queryObj.CurrentPage++;
            this.populateProducts();
        }
    };
    ProductListComponent.prototype.prevPage = function () {
        if (this.queryObj.CurrentPage > 0) {
            this.queryObj.CurrentPage--;
            this.populateProducts();
        }
    };
    ProductListComponent.prototype.editProduct = function (id) {
        this.router.navigate(["/admin/product-form"], {
            queryParams: { editId: id }
        });
    };
    ProductListComponent.prototype.copyProduct = function (id) {
        this.router.navigate(["/admin/product-form"], {
            queryParams: { copyId: id }
        });
    };
    ProductListComponent.prototype.deleteProduct = function (id, permanently) {
        var _this = this;
        if (permanently === void 0) { permanently = false; }
        var message = permanently ? 'Delete this product permanently ?!' : null;
        this.dialogService.raiseConfirmDialog(message).subscribe(function (res) {
            if (res) {
                _this.productService.deleteProduct(id, permanently).subscribe(function () { return _this.populateProducts(); }, function (err) {
                    if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_8__["BadInput"]) {
                        _this.toaster.warning("Something Went Wrong");
                    }
                    else if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_8__["NotFound"]) {
                        _this.toaster.warning("Product Not Found Or Already Deleted");
                    }
                    else {
                        throw err;
                    }
                });
            }
        });
    };
    ProductListComponent.prototype.deleteRange = function (products, permanently) {
        var _this = this;
        if (permanently === void 0) { permanently = false; }
        var message = permanently ? 'Delete this product permanently ?!' : null;
        this.dialogService.raiseConfirmDialog(message).subscribe(function (res) {
            if (res) {
                var ids_1 = [];
                products.forEach(function (x) { return ids_1.push(x.Id); });
                _this.productService.deleteRange(ids_1, permanently).subscribe(function () {
                    _this.toaster.success("Deleted Successfuly");
                    _this.populateProducts();
                }, function (err) { return _this.toaster.error(err); });
            }
        });
    };
    ProductListComponent.prototype.ProductVars = function (id) {
        this.dialogService.openVariantsDialog(id);
    };
    ProductListComponent.prototype.restoreProducts = function (ids) {
        var _this = this;
        this.productService.restoreProducts(ids).subscribe(function () {
            _this.toaster.success("Product Restored");
            _this.populateProducts();
        }, function (err) {
            if (err instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_8__["NotFound"]) {
                _this.toaster.warning("Product Not Found Or Deleted Permanently !");
            }
            else {
                throw err;
            }
        });
    };
    ProductListComponent.prototype.restoreRange = function (products) {
        var ids = [];
        products.forEach(function (x) { return ids.push(x.Id); });
        this.restoreProducts(ids);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product-list",
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])("detailExpand", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: "0px", minHeight: "0", display: "none" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: "*" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_product_service__WEBPACK_IMPORTED_MODULE_2__["AdminProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/variant/Variant.ts":
/*!********************************************!*\
  !*** ./src/app/product/variant/Variant.ts ***!
  \********************************************/
/*! exports provided: Variant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
var Variant = /** @class */ (function () {
    function Variant() {
        this.Label = null;
        this.Value = null;
        this.Price_Diff = null;
        this.Quantity = null;
        this.Image = null;
    }
    return Variant;
}());



/***/ }),

/***/ "./src/app/product/variant/variant.component.html":
/*!********************************************************!*\
  !*** ./src/app/product/variant/variant.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"saveVariant()\" autocomplete=\"off\" class=\"variantsContainer\">\n  <div class=\"variantsInputs\" >\n      <div (click)=\"varImage.click()\" class=\"varImage\">\n          <input #varImage type=\"file\" (change)=\"imageChanged($event.target.files)\" style=\"display: none\" />\n          <img *ngIf=\"imgPath\" [src]=\"imgPath\" class=\"mainimage halfOpacity\" />\n          <img *ngIf=\"_variant.Image && !imgPath\" [src]=\"'/Content/Images/Products/' + _productObject.Id + '/Variants/' + _variant.Id + '/' + _variant.Image\"\n                class=\"mainimage halfOpacity\" />\n          <ng-container *ngIf=\"!imgPath && !_variant.Image\">\n            <svg _ngcontent-c3=\"\" xml:space=\"preserve\" class=\"svgplusimage\" enable-background=\"new 0 0 1000 1000\"\n              version=\"1.1\" viewBox=\"0 0 1000 1000\" x=\"0px\" y=\"0px\">\n              <path _ngcontent-c3=\"\"\n                d=\"M383.6,313.6c0-38.7-31.4-70-70.1-70c-38.7,0-70,31.4-70,70c0,38.7,31.4,70.1,70,70.1C352.3,383.6,383.6,352.3,383.6,313.6L383.6,313.6z\">\n              </path>\n              <path _ngcontent-c3=\"\" d=\"M383.6,313.6\"></path>\n              <path _ngcontent-c3=\"\"\n                d=\"M616.5,671.3h57.9v-57.9c0-42.6,25.6-79.3,62.1-95.9l-9.7-33.2V482h0.1l-63.3-191.4L442.4,576l-59.3-100.4L148,712.9h346.3h38.9C552.5,687.8,582.5,671.3,616.5,671.3z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M990,166.8C990,80.6,919.4,10,833.2,10H166.8C80.6,10,10,80.6,10,166.8v666.4C10,919.4,80.6,990,166.8,990h470.4v0c0.1,0,0.1,0,0.2,0c16.2,0,29.4-13.2,29.4-29.4c0-16.2-13.2-29.4-29.4-29.4c-0.1,0-0.1,0-0.2,0v0H166.8c-54.1,0-98-43.9-98-98V166.8c0-54.1,43.9-98,98-98h666.4c54.1,0,98,43.9,98,98v467.5c0,0.4-0.2,0.6-0.2,0.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4c0-0.1-0.1-0.2-0.1-0.4h0.3V166.8z\">\n              </path>\n              <path _ngcontent-c3=\"\"\n                d=\"M959.5,747.5H809.6V597.6c0-16.2-13.2-29.4-29.4-29.4c-16.2,0-29.4,13.2-29.4,29.4v149.9H600.9c-16.2,0-29.4,13.2-29.4,29.4c0,16.2,13.2,29.4,29.4,29.4h149.9v149.9c0,16.2,13.2,29.4,29.4,29.4c16.2,0,29.4-13.2,29.4-29.4V806.3h149.9c16.2,0,29.4-13.2,29.4-29.4C988.9,760.6,975.7,747.5,959.5,747.5z\">\n              </path>\n            </svg>\n          </ng-container>\n        </div>\n    <mat-form-field>\n      <input matInput required [(ngModel)]=\"_variant.Label\" #Label=\"ngModel\" name=\"Label\" placeholder=\"Variant\" type=\"text\" />\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput required [(ngModel)]=\"_variant.Value\" #Value=\"ngModel\" name=\"Value\" placeholder=\"Option\" type=\"text\" />\n    </mat-form-field>\n    <div style=\"display: flex\">\n      <mat-form-field class=\"price\">\n        <input matInput [(ngModel)]=\"_variant.Price_Diff\" #Price_Diff=\"ngModel\" name=\"Price_Diff\" placeholder=\"Price\" type=\"number\" />\n      </mat-form-field>\n      <mat-form-field class=\"qte\">\n        <input matInput [(ngModel)]=\"_variant.Quantity\" #Quantity=\"ngModel\" name=\"Quantity\" placeholder=\"Quantity\" type=\"number\" />\n      </mat-form-field>\n    </div>\n\n    <div class=\"formFooter\">\n      <button matRipple *ngIf=\"_variant.Id > 0\" type=\"button\" (click)=\"resetForm()\" class=\"reset\">Reset</button>\n      <button matRipple type=\"submit\" class=\"\">{{ _variant.Id > 0 ? 'Edit' : 'Add'}}</button>\n      <button matRipple *ngIf=\"_variant.Id > 0\" type=\"button\" (click)=\"deleteVariant(_variant.Id)\" class=\"delete\">Delete</button>\n    </div>\n  </div>\n  <div class=\"variantsList\">\n    <ng-scrollbar *ngIf=\"_productObject\" [shown]=\"'native'\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\n      <div class=\"v-row default\">\n        <div class=\"col-img\"><img [src]=\"'/Content/Images/Products/' + _productObject.Id + '/Main/' + _productObject.Image\"></div>\n        <div class=\"col-var\">COLOR</div>\n        <div class=\"col-val\">{{_productObject.Color | uppercase}}</div>\n        <div class=\"col-price\">{{_productObject.Price | currency:'USD'}}</div>\n        <div class=\"col-qte\">\n          {{ (_productObject.Quantity == null) ? 'MAX' : (_productObject.Quantity === 0) ? 'Out' :  _productObject.Quantity+' unit' }}\n        </div>\n        <div class=\"col-date\">{{ _dateTime.fromISO(_productObject.Last_Update).toRelative() }}</div>\n      </div>\n      <ng-container *ngIf=\"_productObject.Variants\">\n        <div matRipple *ngFor=\"let row of _productObject.Variants; trackBy: trackById\" (click)=\"fillForm(row)\" class=\"v-row\">\n          <div class=\"col-img\">\n            <img *ngIf=\"row.Image\" [src]=\"'/Content/Images/Products/' + _productObject.Id + '/Variants/' + row.Id + '/' + row.Image\">\n            <img *ngIf=\"!row.Image\" [src]=\"'/Content/Images/Products/' + _productObject.Id + '/Main/' + _productObject.Image\">\n          </div>\n          <div class=\"col-var text-truncate\">{{row.Label | uppercase}}</div>\n          <div class=\"col-val text-truncate\">{{row.Value | uppercase}}</div>\n          <div class=\"col-price\">{{ (_productObject.Price + row.Price_Diff) | currency:'USD' }}</div>\n          <div class=\"col-qte\">\n            {{ (row.Quantity == null) ? 'MAX' : (row.Quantity === 0) ? 'Out' :  row.Quantity+' unit' }}\n          </div>\n          <div class=\"col-date\">{{ _dateTime.fromISO(row.Last_Update).toRelative() }}</div>\n        </div>\n      </ng-container>\n    </ng-scrollbar>\n  </div>\n</form>\n\n<!-- <data-viewer [data]=\"_variant\"></data-viewer> -->\n<!-- <data-viewer [data]=\"_productObject?.Id\"></data-viewer> -->\n<!-- <data-viewer [data]=\"form.value\"></data-viewer> -->\n"

/***/ }),

/***/ "./src/app/product/variant/variant.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/variant/variant.component.ts ***!
  \******************************************************/
/*! exports provided: VariantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantComponent", function() { return VariantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/GlobalConstants */ "./src/app/shared/GlobalConstants.ts");
/* harmony import */ var src_app_services_product_variant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product-variant.service */ "./src/app/services/product-variant.service.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Variant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Variant */ "./src/app/product/variant/Variant.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");










var VariantComponent = /** @class */ (function () {
    function VariantComponent(data, variantService, toaster) {
        this.data = data;
        this.variantService = variantService;
        this.toaster = toaster;
        this._variant = new _Variant__WEBPACK_IMPORTED_MODULE_7__["Variant"]();
        this.fd = new FormData();
        this._dateTime = luxon__WEBPACK_IMPORTED_MODULE_5__["DateTime"];
        this.common_variants = [
            {
                "label": "color",
                "options": src_app_shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_3__["COMMUN_COLORS"]
            },
            {
                "label": "size",
                "options": ["xm", "sm", "m", "l", "xl"]
            },
            {
                "label": "storage"
            },
            {
                "label": "length"
            },
            {
                "label": "weight"
            },
            {
                "label": "width"
            }
        ];
    }
    VariantComponent.prototype.ngOnInit = function () {
        this.loadVariantsList();
    };
    VariantComponent.prototype.loadVariantsList = function () {
        var _this = this;
        this.variantService.GetProductVariants(this.data.id).subscribe(function (model) {
            _this._productObject = model;
            _this._variant.ProductId = _this._productObject.Id;
        });
    };
    VariantComponent.prototype.fillForm = function (variant) {
        this.fd = new FormData();
        this.imgPath = null;
        this._variant = variant;
    };
    VariantComponent.prototype.saveVariant = function () {
        if (this.form.invalid)
            return;
        if (this._variant.Id > 0)
            this.updateVariant();
        else
            this.addVariant();
    };
    VariantComponent.prototype.addVariant = function () {
        var _this = this;
        this.fillFormData();
        this.variantService.PostVariant(this.fd).subscribe(function (variant) {
            _this._productObject.Variants.push(variant);
            _this.toaster.success("success");
            _this.resetForm();
        }, function (error) {
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_9__["BadInput"])
                _this.toaster.error(error.originalError);
            else
                throw error;
        });
    };
    VariantComponent.prototype.updateVariant = function () {
        var _this = this;
        this.fillFormData();
        this.variantService.UpdateVariant(this._variant.Id, this.fd).subscribe(function (variant) {
            var index = _this._productObject.Variants.findIndex(function (x) { return x.Id === variant.Id; });
            _this._productObject.Variants.splice(index, 1, variant);
            _this.toaster.success("success");
            _this.resetForm();
        }, function (error) {
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_9__["BadInput"])
                _this.toaster.error(error.originalError);
            else
                throw error;
        });
    };
    VariantComponent.prototype.fillFormData = function () {
        this.fd.append('Label', this._variant.Label.toLowerCase());
        this.fd.append('Value', this._variant.Value);
        this.fd.append('ProductId', this._variant.ProductId.toString());
        if (this._variant.Price_Diff != null)
            this.fd.append('Price_Diff', this._variant.Price_Diff.toString());
        if (this._variant.Quantity != null)
            this.fd.append('Quantity', this._variant.Quantity.toString());
        if (this._variant.Id > 0)
            this.fd.append('Id', this._variant.Id.toString());
    };
    VariantComponent.prototype.deleteVariant = function (id) {
        var _this = this;
        this.variantService.DeleteVariant(id).subscribe(function () {
            var index = _this._productObject.Variants.findIndex(function (x) { return x.Id === id; });
            _this._productObject.Variants.splice(index, 1);
            _this.toaster.success("Deleted Successfuly");
            _this.resetForm();
        }, function (error) {
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_9__["NotFound"])
                _this.toaster.error("Could Not Found This Record !!");
            if (error instanceof src_app_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_9__["BadInput"])
                _this.toaster.error(error.originalError);
            else
                throw error;
        });
    };
    VariantComponent.prototype.resetForm = function () {
        this._variant = new _Variant__WEBPACK_IMPORTED_MODULE_7__["Variant"]();
        this._variant.ProductId = this._productObject.Id;
        this.fd = new FormData();
        this.imgPath = null;
        this.form.resetForm();
    };
    VariantComponent.prototype.imageChanged = function (files) {
        this.fd.delete('Image');
        this.fd.append('Image', files[0], files[0].name);
        this.previewMainImg(files[0]);
    };
    VariantComponent.prototype.previewMainImg = function (file) {
        var _this = this;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imgPath = e.target.result.toString();
            };
            reader.readAsDataURL(file);
        }
    };
    VariantComponent.prototype.trackById = function (index, variant) {
        return variant ? variant.Id : undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], VariantComponent.prototype, "form", void 0);
    VariantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-variant',
            template: __webpack_require__(/*! ./variant.component.html */ "./src/app/product/variant/variant.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_app_services_product_variant_service__WEBPACK_IMPORTED_MODULE_4__["ProductVariantService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], VariantComponent);
    return VariantComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/admin-auth.service.ts ***!
  \************************************************/
/*! exports provided: AdminAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthService", function() { return AdminAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");
/* harmony import */ var _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/GlobalConstants */ "./src/app/shared/GlobalConstants.ts");







var AdminAuthService = /** @class */ (function () {
    function AdminAuthService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'NoAuth': 'true' });
    }
    AdminAuthService.prototype.Login = function (form) {
        return this.http.post('api/Account/Login', form, { headers: this.noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_5__["handleExpectedErrors"]));
    };
    AdminAuthService.prototype.authenticate = function () {
        var _this = this;
        var Ls = localStorage.getItem('MWToken');
        if (Ls == null)
            return;
        this.http.get('/api/authenticate').subscribe(function (response) {
            if (response.role === _shared_GlobalConstants__WEBPACK_IMPORTED_MODULE_6__["ADMIN_ROLE"])
                _this.admin = JSON.parse(response.profile);
            else
                _this.authenticationFailed();
        }, function (error) {
            if (error.status === 401) // means that acctoken has expired
                _this.authenticationFailed();
            else
                throw error;
        });
    };
    AdminAuthService.prototype.authenticationFailed = function () {
        localStorage.removeItem('MWToken');
        this.admin = null;
    };
    AdminAuthService.prototype.afterAuthentication = function (response, stayLogged) {
        if (stayLogged)
            localStorage.setItem('MWToken', response.access_token);
        else
            this._TOKEN = response.access_token;
        this.admin = JSON.parse(response.profile);
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/admin';
        this.router.navigateByUrl(returnUrl); // Redirect to a return url
    };
    AdminAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminAuthService);
    return AdminAuthService;
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
/* harmony import */ var _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");





var AdminProductService = /** @class */ (function () {
    function AdminProductService(http) {
        this.http = http;
        this.END_POINT = 'api/AdminProducts/';
    }
    AdminProductService.prototype.getShippings = function () {
        return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
    };
    AdminProductService.prototype.GetProductsList = function (filter) {
        return this.http.get(this.END_POINT + '?' + this.toQueryString(filter));
    };
    AdminProductService.prototype.PostProduct = function (form) {
        return this.http.post(this.END_POINT, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.UpdateProduct = function (id, p) {
        return this.http.put('/api/UpdateProduct/' + id.toString(), p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.GetLastProducts = function () {
        return this.http.get(this.END_POINT + 'History');
    };
    AdminProductService.prototype.getProduct = function (id) {
        return this.http.get(this.END_POINT + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.deleteProduct = function (id, permanently) {
        if (permanently === void 0) { permanently = false; }
        return this.http.delete(this.END_POINT + id + "/" + permanently).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.restoreProducts = function (ids) {
        return this.http.post('api/RestoreProduct', ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminProductService.prototype.deleteRange = function (Ids, permanently) {
        if (permanently === void 0) { permanently = false; }
        return this.http.post("/api/DeleteRange/" + permanently, Ids).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    // Generate Query string from filter object
    AdminProductService.prototype.toQueryString = function (obj) {
        var parts = [];
        var filter = [];
        if (obj.OnSale != null)
            filter.push(' OnSale eq ' + obj.OnSale);
        if (obj.Deleted != null)
            filter.push(' Deleted eq ' + obj.Deleted);
        // Last_Update ge 2019-12-5 and Last_Update le 2019-12-5
        if (obj.MinDate && obj.MaxDate) {
            filter.push(" Last_Update ge " + obj.MinDate + " and Last_Update le " + obj.MaxDate + " ");
        }
        if (obj.CategoryId) {
            if (!obj.SubCategoryId || obj.SubCategoryId === 0) {
                filter.push(' CategoryId eq ' + obj.CategoryId);
            }
            else {
                filter.push(' SubCategoryId eq ' + obj.SubCategoryId);
            }
        }
        if (obj.Search) {
            if (this.isComplexSearchQuery(obj.Search)) {
                var formatted = this.formatSearchQuery(obj.Search);
                filter.push(formatted);
            }
            else
                filter.push(" contains(tolower(Name), '" + obj.Search + "')");
        }
        // append filter param to query parts
        if (filter.length > 0) {
            // console.log('Filter: ', filter.join(' and '));
            parts.push("$apply=filter(" + filter.join(' and ') + ")");
        }
        var isAsc = obj.IsSortAscending ? 'Asc' : 'Desc';
        parts.push('$orderby=' + obj.OrderBy + ' ' + isAsc);
        parts.push('$top=' + obj.PageSize);
        parts.push('$skip=' + (obj.CurrentPage * obj.PageSize));
        parts.push('$count=true');
        // console.log(parts.join('&'));
        return parts.join('&');
    };
    AdminProductService.prototype.formatSearchQuery = function (search) {
        var formatted;
        if (search.charAt(0) === '#') {
            formatted = 'Id eq ' + search.replace('#', '');
        }
        if (search.charAt(0) === '$') {
            formatted = search.replace('$', '') // how to replace all $ in string
                .replace(/>=/g, ' ge ')
                .replace(/<=/g, ' le ')
                .replace(/!=/g, ' ne ')
                .replace(/=/g, ' eq ')
                .replace(/>/g, ' gt ')
                .replace(/</g, ' lt ');
        }
        return formatted;
    };
    AdminProductService.prototype.isComplexSearchQuery = function (search) {
        if (search.charAt(0) === '$' || search.charAt(0) === '#')
            return true;
        return false;
    };
    AdminProductService.prototype.hasValue = function (value) {
        return value !== null && value !== undefined;
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
/* harmony import */ var _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");





var AdminUploadService = /** @class */ (function () {
    function AdminUploadService(http) {
        this.http = http;
        this.END_POINT = 'api/upload/';
    }
    AdminUploadService.prototype.UploadImages = function (form) {
        return this.http.post(this.END_POINT + 'productImages', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.addProductImages = function (form) {
        return this.http.post(this.END_POINT + 'addProductImages', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.updateProductImages = function (form) {
        return this.http.post(this.END_POINT + 'updateProductImages', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.copyProductImages = function (form) {
        return this.http.post(this.END_POINT + 'copyProductImages', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    AdminUploadService.prototype.ReplaceMainImg = function (id, img) {
        var data = { id: id, filename: img };
        return this.http.post(this.END_POINT + 'ReplaceMainImg', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
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

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var CategoryService = /** @class */ (function () {
    function CategoryService(http, toaster) {
        this.http = http;
        this.toaster = toaster;
    }
    // ngOnDestoy
    CategoryService.prototype.getCategoriesLocally = function () {
        return JSON.parse(localStorage.getItem("MWCategories"));
    };
    CategoryService.prototype.getCategoriesFromServer = function () {
        return this.http.get('api/adminCategories');
    };
    CategoryService.prototype.saveOnLocalStorage = function (cats) {
        localStorage.setItem("MWCategories", JSON.stringify(cats)); // Save On LS
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_variant_variant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/variant/variant.component */ "./src/app/product/variant/variant.component.ts");
/* harmony import */ var _shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/categories/categories.component.ts");






var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openVariantsDialog = function (id) {
        return this.dialog.open(_product_variant_variant_component__WEBPACK_IMPORTED_MODULE_3__["VariantComponent"], {
            data: { id: id },
            width: '950px',
            height: '470px'
        });
    };
    DialogService.prototype.openCategoriesDialog = function () {
        return this.dialog.open(_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"], {
            width: '950px',
            height: '470px'
        });
    };
    DialogService.prototype.raiseConfirmDialog = function (message) {
        return this.dialog.open(_shared_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            panelClass: 'confirm-dialog',
            data: { message: message || 'Are you sure ?!' }
        }).afterClosed();
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/product-variant.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/product-variant.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductVariantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVariantService", function() { return ProductVariantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/errors/http-errors */ "./src/app/shared/errors/http-errors.ts");





var ProductVariantService = /** @class */ (function () {
    function ProductVariantService(http) {
        this.http = http;
        this.END_POINT = "api/ProductVariants/";
    }
    ProductVariantService.prototype.GetProductVariants = function (id) {
        return this.http.get(this.END_POINT + id);
    };
    ProductVariantService.prototype.PostVariant = function (variant) {
        return this.http
            .post(this.END_POINT, variant)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    ProductVariantService.prototype.UpdateVariant = function (id, variant) {
        return this.http
            .put("" + (this.END_POINT + id), variant)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    ProductVariantService.prototype.DeleteVariant = function (id) {
        return this.http
            .delete("" + (this.END_POINT + id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_shared_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["handleExpectedErrors"]));
    };
    ProductVariantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductVariantService);
    return ProductVariantService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.END_POINT = 'api/AdminUsers/';
    }
    UserService.prototype.GetUsersList = function (filter) {
        return this.http.get(this.END_POINT + '?' + this.toQueryString(filter));
    };
    UserService.prototype.toQueryString = function (obj) {
        var parts = [];
        var filter = [];
        if (obj.MinDate && obj.MaxDate) {
            filter.push(" Last_Update ge " + obj.MinDate + " and Last_Update le " + obj.MaxDate + " ");
        }
        if (obj.Search) {
            if (this.isComplexSearchQuery(obj.Search)) {
                var formatted = this.formatSearchQuery(obj.Search);
                filter.push(formatted);
            }
            else
                filter.push(" contains(tolower(Name), '" + obj.Search + "')");
        }
        // append filter param to query parts
        if (filter.length > 0) {
            // console.log('Filter: ', filter.join(' and '));
            parts.push("$apply=filter(" + filter.join(' and ') + ")");
        }
        if (obj.UserRole != null)
            parts.push('UserRole=' + obj.UserRole);
        var isAsc = obj.IsSortAscending ? 'Asc' : 'Desc';
        parts.push('$orderby=' + obj.OrderBy + ' ' + isAsc);
        parts.push('$top=' + obj.PageSize);
        parts.push('$skip=' + (obj.CurrentPage * obj.PageSize));
        parts.push('$count=true');
        // console.log(parts.join('&'));
        return parts.join('&');
    };
    UserService.prototype.formatSearchQuery = function (search) {
        var formatted;
        if (search.charAt(0) === '#') {
            formatted = 'Id eq ' + search.replace('#', '');
        }
        if (search.charAt(0) === '$') {
            formatted = search.replace('$', '') // how to replace all $ in string
                .replace(/>=/g, ' ge ')
                .replace(/<=/g, ' le ')
                .replace(/!=/g, ' ne ')
                .replace(/=/g, ' eq ')
                .replace(/>/g, ' gt ')
                .replace(/</g, ' lt ');
        }
        return formatted;
    };
    UserService.prototype.isComplexSearchQuery = function (search) {
        if (search.charAt(0) === '$' || search.charAt(0) === '#')
            return true;
        return false;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/GlobalConstants.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/GlobalConstants.ts ***!
  \*******************************************/
/*! exports provided: FormJob, ADMIN_ROLE, COMMUN_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormJob", function() { return FormJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_ROLE", function() { return ADMIN_ROLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMUN_COLORS", function() { return COMMUN_COLORS; });
var FormJob = {
    Add: 'Add',
    Update: 'Update',
    Copy: 'Copy'
};
var ADMIN_ROLE = "ADMIN";
var COMMUN_COLORS = ["white", "red", "green", "yellow", "gray", "orange", "blue", "pink", "brown", "purple", "black"];


/***/ }),

/***/ "./src/app/shared/auth-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth-interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin-auth.service */ "./src/app/services/admin-auth.service.ts");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, adminAuth) {
        this.router = router;
        this.adminAuth = adminAuth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (req.headers.get('NoAuth') === 'true')
            return next.handle(req.clone());
        var token = localStorage.getItem('MWToken') || this.adminAuth._TOKEN;
        if (token != null) {
            var clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(clonedreq);
        }
        else {
            this.router.navigate(['admin/login']);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AdminAuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/data-viewer/data-viewer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/data-viewer/data-viewer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!closed\" (dblclick)=\"closed = true\" class=\"data-viewer\">\n  <div class=\"content\">\n    {{ data | json }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/data-viewer/data-viewer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/data-viewer/data-viewer.component.ts ***!
  \*************************************************************/
/*! exports provided: DataViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewerComponent", function() { return DataViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataViewerComponent = /** @class */ (function () {
    function DataViewerComponent() {
        this.closed = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataViewerComponent.prototype, "data", void 0);
    DataViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-viewer',
            template: __webpack_require__(/*! ./data-viewer.component.html */ "./src/app/shared/data-viewer/data-viewer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataViewerComponent);
    return DataViewerComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>{{data?.message}}</h3>\n  <div class=\"dialog-btns\">\n    <button mat-button [mat-dialog-close]=\"false\">NO</button>\n    <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        this.data = data;
    }
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/shared/dialogs/confirm-dialog/confirm-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialogs/infos/infos-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/dialogs/infos/infos-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Advanced Search :</h3>\n<p mat-dialog-content>\n  Search normaly uses product's name, you could also type an expression in the search box that can extand searching\n  to other properties like price, quantity, ..\n  to acheive this all you have to do is prefixing your searching query with \"$\" or \"#\" signs and follow it with\n  your expression <br>\n  An expression could be like what you see in the exemples below.\n</p>\n<table>\n  <tr *ngFor=\"let el of array\">\n    <td>{{el.name}}</td>\n    <td>{{el.meaning}}</td>\n  </tr>\n</table>\n\n<p mat-dialog-content>\n  NB: be aware that areas with characters value not numbers (such as: Name, Color, ..) must be delimited by single quotation marks 'string' otherwise just\n  pass the value directly<br>\n</p>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"prev()\">Prev</button>\n  <button mat-button (click)=\"next()\">Next</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/dialogs/infos/infos-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/dialogs/infos/infos-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: InfosDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosDialogComponent", function() { return InfosDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfosDialogComponent = /** @class */ (function () {
    function InfosDialogComponent() {
        this.resource = [
            { name: '#574995214', meaning: 'Will look for a product with this Id' },
            { name: '$price = value', meaning: 'Price equal a given value' },
            { name: '$price > 10 and price < 15', meaning: 'Price between 10 and 15 (Range)' },
            { name: "$color = 'pink' or color = 'green'", meaning: 'Color either pink or green' },
            { name: '$last_update=2019-6-27', meaning: 'Last_Update equal an exact date (respect the format!)' },
            { name: '$year(Last_Update) >= 2019', meaning: "Last_Update's year greater than or equal 2019" },
            { name: '$price in [5, 12, 99.9]', meaning: 'Price should have one of these values' },
            { name: "$contains(color, 'blue')", meaning: "Color contains 'blue' expression (ex: Royalblue, Skyblue)" },
            { name: "$source != null", meaning: "Source NOT equal to null (means it should have a value)" },
            { name: "$startswith(name,'B')", meaning: "Product's Name starts with letter 'b'" },
            { name: "$not endswith(name,'let')", meaning: "Product's Name NOT ends with 'let'" },
            { name: "$matchesPattern(Name,'%5EA.*e$')", meaning: "Product's Name must fit the RegEx provided" },
            { name: "$length(name) < 20", meaning: " Length of Product Name is less than 20 characters" },
            { name: '$Price add 5 = 10', meaning: 'Using Math Operators (ex: add, sub, div, mul, divby, mod)' },
            { name: '$floor(price) = 5', meaning: 'Floor of price equal 5 (ex: floor(5.8) = 5)' },
            { name: '$ceiling(price) = 5', meaning: 'Ceil of price equal 5 (ex: ceil(5.1) = 6)' },
            { name: '$round(price) > 9', meaning: 'Round of price greater than 9 (ex: round(5.2) = 5 | round(5.7) = 6)' },
        ];
        this.array = [];
        this._pageSize = 5;
        this._page = 0;
        this.fillArray();
    }
    Object.defineProperty(InfosDialogComponent.prototype, "skip", {
        get: function () {
            return this._page * this._pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfosDialogComponent.prototype, "availablePages", {
        get: function () {
            return Math.ceil(this.resource.length / this._pageSize) || 1;
        },
        enumerable: true,
        configurable: true
    });
    InfosDialogComponent.prototype.fillArray = function () {
        this.array = this.resource.slice(this.skip, (this.skip + this._pageSize));
    };
    InfosDialogComponent.prototype.next = function () {
        if ((this._page + 1) < this.availablePages) {
            this._page++;
            this.fillArray();
        }
    };
    InfosDialogComponent.prototype.prev = function () {
        if (this._page > 0) {
            this._page--;
            this.fillArray();
        }
    };
    InfosDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infos',
            template: __webpack_require__(/*! ./infos-dialog.component.html */ "./src/app/shared/dialogs/infos/infos-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfosDialogComponent);
    return InfosDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/errors/app-error.ts":
/*!********************************************!*\
  !*** ./src/app/shared/errors/app-error.ts ***!
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

/***/ "./src/app/shared/errors/http-errors.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/errors/http-errors.ts ***!
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
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/shared/errors/app-error.ts");
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

/***/ "./src/app/shared/escape-html.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/escape-html.pipe.ts ***!
  \********************************************/
/*! exports provided: EscapeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    EscapeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keepHtml',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/filter-components/table-filter/table-filter.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/filter-components/table-filter/table-filter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rqsetgertg\">\n  <form #f=\"ngForm\" autocomplete=\"off\">\n    <div class=\"divsearchorder\">\n      <input id=\"inputsearor\" [(ngModel)]=\"searchQuery\" type=\"text\" placeholder=\"{{'Search a '+ target}}\" name=\"search\" />\n      <svg *ngIf=\"searchQuery?.startsWith('#') || searchQuery?.startsWith('$')\" style=\"right: 8%\" class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 356.484 356.484\"\n        xml:space=\"preserve\">\n        <path\n          d=\"M293.984,7.23H62.5C28.037,7.23,0,35.268,0,69.731v142.78c0,34.463,28.037,62.5,62.5,62.5l147.443,0.001l70.581,70.58    c2.392,2.393,5.588,3.662,8.842,3.662c1.61,0,3.234-0.312,4.78-0.953c4.671-1.934,7.717-6.49,7.717-11.547v-62.237    c30.759-3.885,54.621-30.211,54.621-62.006V69.731C356.484,35.268,328.447,7.23,293.984,7.23z M331.484,212.512    c0,20.678-16.822,37.5-37.5,37.5h-4.621c-6.903,0-12.5,5.598-12.5,12.5v44.064l-52.903-52.903    c-2.344-2.345-5.522-3.661-8.839-3.661H62.5c-20.678,0-37.5-16.822-37.5-37.5V69.732c0-20.678,16.822-37.5,37.5-37.5h231.484    c20.678,0,37.5,16.822,37.5,37.5V212.512z\">\n        </path>\n        <path\n          d=\"M270.242,95.743h-184c-6.903,0-12.5,5.596-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    C282.742,101.339,277.146,95.743,270.242,95.743z\">\n        </path>\n        <path\n          d=\"M270.242,165.743h-184c-6.903,0-12.5,5.596-12.5,12.5s5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    S277.146,165.743,270.242,165.743z\">\n        </path>\n      </svg>\n      <svg (click)=\"advancedSearch()\" class=\"svgsearcus2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 268.765 268.765\"\n        xml:space=\"preserve\">\n        <path style=\"fill-rule:evenodd;clip-rule:evenodd;\"\n          d=\"M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z\">\n        </path>\n      </svg>\n    </div>\n    <div class=\"date-controls\">\n      <div class=\"datePickerContainer\">\n        <input matInput (change)=\"minDateInputChange()\" [matDatepicker]=\"minDatePicker\" [max]=\"maxDate || todayDate\" name=\"minDate\" [(ngModel)]=\"minDate\"  class=\"datefilt\" >\n        <svg (click)=\"minDatePicker.open()\" class=\"svgsearcus2\" focusable=\"false\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></svg>\n        <mat-datepicker #minDatePicker></mat-datepicker>\n      </div>\n      <span>~</span>\n      <div class=\"datePickerContainer\">\n        <input matInput [matDatepicker]=\"maxDatePicker\" [min]=\"minDate\" [max]=\"todayDate\" name=\"maxDate\" [(ngModel)]=\"maxDate\" class=\"datefilt\" >\n        <svg (click)=\"maxDatePicker.open()\" class=\"svgsearcus2\" focusable=\"false\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"></path></svg>\n        <mat-datepicker #maxDatePicker ></mat-datepicker>\n      </div>\n    </div>\n\n    <div class=\"category-control\">\n      <ng-container *ngIf=\"!noCategory\">\n        <mat-select class=\"selectcategorie\" disableOptionCentering #Category (selectionChange)=\"getSub(Category.value)\"\n          name=\"CategoryId\" [(ngModel)]=\"queryObj.CategoryId\" placeholder=\"Category\" panelClass=\"select-panel\">\n          <mat-option *ngFor=\"let item of categories\" [value]=\"item.Id\">{{\n            item.Name\n          }}</mat-option>\n        </mat-select>\n  \n        <mat-select class=\"selectcategorie\" disableOptionCentering name=\"SubCategoryId\"\n          [(ngModel)]=\"queryObj.SubCategoryId\" placeholder=\"SubCategory\" panelClass=\"select-panel\">\n          <mat-option *ngIf=\"subCategories?.length > 0\" [value]=\"0\">All</mat-option>\n          <mat-option *ngFor=\"let item of subCategories\" [value]=\"item.Id\">\n            {{item.Name}}\n          </mat-option>\n          <mat-option *ngIf=\"subCategories?.length === 0\">\n            <p class=\"emptyCat\">Empty Category</p>\n          </mat-option>\n        </mat-select>\n      </ng-container>\n    </div>\n\n    <div class=\"filterBtns\">\n      <button matRipple (click)=\"doFilter()\" class=\"bottonimport\">Filter</button>\n      <div matRipple (click)=\"Reset()\" class=\"bottonimport\">Reset</div>\n    </div>\n  </form>\n</div>\n\n<!-- <data-viewer [data]=\"{form: f.value, isValid: f.valid, isPristine: f.isPristine}\" ></data-viewer> -->\n<!-- <data-viewer [data]=\"categories\" ></data-viewer> -->"

/***/ }),

/***/ "./src/app/shared/filter-components/table-filter/table-filter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/filter-components/table-filter/table-filter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TableFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterComponent", function() { return TableFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _models_ProductFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/ProductFilter */ "./src/app/models/ProductFilter.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_infos_infos_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/infos/infos-dialog.component */ "./src/app/shared/dialogs/infos/infos-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_8__);









var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent(categoryService, dateAdapter, dialog, toaster) {
        this.categoryService = categoryService;
        this.dateAdapter = dateAdapter;
        this.dialog = dialog;
        this.toaster = toaster;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.todayDate = new Date();
        this.dateAdapter.setLocale("fr");
        this.getCategories();
    }
    TableFilterComponent.prototype.getCategories = function () {
        this.categories = this.categoryService.getCategoriesLocally();
        if (!this.categories)
            this.refreshCat();
    };
    TableFilterComponent.prototype.refreshCat = function () {
        var _this = this;
        this.categoryService.getCategoriesFromServer().subscribe(function (cats) {
            _this.categoryService.saveOnLocalStorage(cats);
            _this.categories = cats;
        }, function () { return _this.toaster.error("Could Not Get Categories From Server .."); });
    };
    TableFilterComponent.prototype.doFilter = function () {
        if (this.form.invalid) {
            this.toaster.warning("Filter is not valid !");
            return;
        }
        if (this.searchQuery)
            this.queryObj.Search = this.searchQuery.toLowerCase();
        else
            this.queryObj.Search = undefined;
        if (this.minDate && this.maxDate) {
            // string
            this.queryObj.MinDate = luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].fromJSDate(this.minDate).toFormat("yyyy-MM-dd");
            this.queryObj.MaxDate = luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].fromJSDate(this.maxDate).toFormat("yyyy-MM-dd");
        }
        this.filter.emit();
    };
    TableFilterComponent.prototype.advancedSearch = function () {
        this.dialog.open(_dialogs_infos_infos_dialog_component__WEBPACK_IMPORTED_MODULE_5__["InfosDialogComponent"], { panelClass: "info-dialog" });
    };
    TableFilterComponent.prototype.minDateInputChange = function () {
        if (!this.maxDate)
            this.maxDate = new Date();
        if (luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].fromJSDate(this.minDate).valueOf() >
            luxon__WEBPACK_IMPORTED_MODULE_8__["DateTime"].fromJSDate(this.maxDate).valueOf())
            this.minDate = new Date();
    };
    TableFilterComponent.prototype.Reset = function () {
        this.queryObj.resetFields();
        this.form.resetForm();
        this.doFilter();
    };
    TableFilterComponent.prototype.getSub = function (cat) {
        try {
            if (cat) {
                this.subCategories = this.categories.find(function (x) { return x.Id === +cat; }).SubCategories;
                this.queryObj.SubCategoryId = 0; // zero means all subCategories
            }
        }
        catch (e) { }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("filter"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableFilterComponent.prototype, "filter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("queryObj"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_ProductFilter__WEBPACK_IMPORTED_MODULE_3__["ProductFilter"])
    ], TableFilterComponent.prototype, "queryObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("noCategory"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableFilterComponent.prototype, "noCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("target"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableFilterComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], TableFilterComponent.prototype, "form", void 0);
    TableFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "table-filter",
            template: __webpack_require__(/*! ./table-filter.component.html */ "./src/app/shared/filter-components/table-filter/table-filter.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], TableFilterComponent);
    return TableFilterComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");




var materials = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [materials],
            exports: [materials]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/iterate.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/iterate.pipe.ts ***!
  \**********************************************/
/*! exports provided: IteratePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratePipe", function() { return IteratePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IteratePipe = /** @class */ (function () {
    function IteratePipe() {
    }
    IteratePipe.prototype.transform = function (value) {
        if (!value)
            return null;
        return (new Array(value).fill(1));
    };
    IteratePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'iterate'
        })
    ], IteratePipe);
    return IteratePipe;
}());



/***/ }),

/***/ "./src/app/shared/validators/product.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/product.validators.ts ***!
  \*********************************************************/
/*! exports provided: ProductValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductValidators", function() { return ProductValidators; });
var ProductValidators = /** @class */ (function () {
    function ProductValidators() {
    }
    ProductValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    ProductValidators.shouldBeUnique = function (control) {
        // Check if the username is already taken ..
    };
    return ProductValidators;
}());



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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/tickets/tickets.component.html":
/*!************************************************!*\
  !*** ./src/app/tickets/tickets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/user/reviews/reviews.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/reviews/reviews.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/user/users-list/users-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/users-list/users-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divproductlist\" id=\"my-productlist\">\r\n  <div class=\"divlabtyporeder\">\r\n    <label (click)=\"selectUsersType(null)\" [class.active]=\"queryObj.UserRole == null\">All</label>\r\n    <label (click)=\"selectUsersType('premium')\" [class.active]=\"queryObj.UserRole === 'premium'\">Premium</label>\r\n    <label (click)=\"selectUsersType('banned')\" [class.active]=\"queryObj.UserRole === 'banned'\">Banned</label>\r\n  </div>\r\n\r\n  <table-filter [target]=\"'user'\" [queryObj]=\"queryObj\" [noCategory]=\"true\" (filter)=\"populateUsers()\"></table-filter>\r\n\r\n  <div class=\"divallordersm\">\r\n    <ng-scrollbar [shown]=\"'always'\" class=\"table-wrapper\" barClass=\"scrollbar\" thumbClass=\"scroll-thumb\">\r\n      <table cdk-table [dataSource]=\"dataSource\" multiTemplateDataRows [trackBy]=\"trackById\">\r\n        \r\n        <ng-container cdkColumnDef=\"Select\">\r\n          <th cdk-header-cell *cdkHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n              [checked]=\"selection.isSelected(row)\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Avatar\">\r\n            <th cdk-header-cell *cdkHeaderCellDef> Avatar </th>\r\n            <td cdk-cell *cdkCellDef=\"let row\">\r\n                <img *ngIf=\"row.Avatar\" [src]=\"'/Content/Images/Users/Avatars/' + row.Avatar\" class=\"ertytrh\" >\r\n                <div *ngIf=\"!row.Avatar\" class=\"ertytrh\">\r\n                    <svg class=\"svgsigj231\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\" style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\r\n                        <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\r\n                        <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\"></path>\r\n                    </svg>\r\n                </div>\r\n            </td>\r\n            \r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"FullName\">\r\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('FullName')\" class=\"sortable\"> Full Name\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'FullName'\">\r\n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                  d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\r\n                </path>\r\n                <path\r\n                  d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\r\n                </path>\r\n              </svg>\r\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                  d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\r\n                </path>\r\n                <path\r\n                  d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\r\n                </path>\r\n              </svg>\r\n            </ng-container>\r\n          </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\">\r\n            <span class=\"ezrergfrvsx noDecoration\">{{row.FullName}}</span></td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"SignUpWith\">\r\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('SignUpWith')\" class=\"sortable\"> Signup With\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'SignUpWith'\">\r\n                <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                    d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                    d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\r\n                </path>\r\n                <path\r\n                    d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\r\n                </path>\r\n                </svg>\r\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                    d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                    d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\r\n                </path>\r\n                <path\r\n                    d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\r\n                </path>\r\n                </svg>\r\n            </ng-container>\r\n          </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ row.SignUpWith }} </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Orders\">\r\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Orders')\" class=\"sortable\"> Orders\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'Orders'\">\r\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\r\n                </path>\r\n                <path\r\n                  d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\r\n                </path>\r\n                <path\r\n                  d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\r\n                </path>\r\n              </svg>\r\n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\r\n                </path>\r\n                <path\r\n                  d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\r\n                </path>\r\n                <path\r\n                  d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\r\n                </path>\r\n              </svg>\r\n            </ng-container>\r\n          </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\"> {{row.Orders}} </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Points\">\r\n            <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Points')\" class=\"sortable\"> Points\r\n                <ng-container *ngIf=\"queryObj.OrderBy === 'Points'\">\r\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                    <path\r\n                    d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\r\n                    </path>\r\n                </svg>\r\n                <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                    <path\r\n                    d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\r\n                    </path>\r\n                </svg>\r\n                </ng-container>\r\n            </th>\r\n            <td cdk-cell *cdkCellDef=\"let row\"> {{row.Points}} </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Reviews\">\r\n            <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Reviews')\" class=\"sortable\"> Reviews\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'Reviews'\">\r\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                    <path\r\n                    d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\r\n                    </path>\r\n                </svg>\r\n                <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                    <path\r\n                    d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\r\n                    </path>\r\n                    <path\r\n                    d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\r\n                    </path>\r\n                </svg>\r\n            </ng-container>\r\n        </th>\r\n        <td cdk-cell *cdkCellDef=\"let row\"> {{row.Reviews}} </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Gender\">\r\n            <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Gender')\" class=\"sortable\"> Gender\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'Gender'\">\r\n                <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                    d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                    d=\"M428.511,479.082h-70.808c-3.997,0-6.852,0.191-8.559,0.568l-4.001,0.571v-0.571l3.142-3.142    c2.848-3.419,4.853-5.896,5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236    c3.422,0,6.283-0.288,8.555-0.855c0.572,0,1.287-0.048,2.143-0.145c0.853-0.085,1.475-0.144,1.852-0.144v0.855l-3.142,2.574    c-1.704,1.711-3.713,4.273-5.995,7.706L296.31,485.934v25.693h166.734v-66.521h-34.54v33.976H428.511z\">\r\n                </path>\r\n                <path\r\n                    d=\"M468.475,189.008L402.807,0h-46.25l-65.664,189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381    l13.415,41.112H406.25v30.264h82.228v-30.264H468.475z M354.278,116.487l20.841-62.241c0.76-2.285,1.479-5.046,2.143-8.28    c0.66-3.236,0.996-4.949,0.996-5.139l0.855-5.708h1.143c0,0.761,0.191,2.664,0.562,5.708l3.433,13.418l20.554,62.241H354.278z\">\r\n                </path>\r\n                </svg>\r\n                <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.626 511.627\" style=\"enable-background:new 0 0 511.626 511.627;\" xml:space=\"preserve\">\r\n                <path\r\n                    d=\"M215.232,401.991h-54.818V9.136c0-2.663-0.854-4.856-2.568-6.567C156.133,0.859,153.946,0,151.279,0H96.461    c-2.663,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.905-2.568,6.567v392.855H32.507c-4.184,0-7.039,1.902-8.563,5.708    c-1.525,3.621-0.856,6.95,1.997,9.996l91.361,91.365c2.096,1.707,4.281,2.562,6.567,2.562c2.474,0,4.664-0.855,6.567-2.562    l91.076-91.078c1.906-2.279,2.856-4.571,2.856-6.844c0-2.676-0.854-4.859-2.568-6.584    C220.086,402.847,217.9,401.991,215.232,401.991z\">\r\n                </path>\r\n                <path\r\n                    d=\"M468.475,481.361l-65.664-189.01h-46.25L290.9,481.364H270.92v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381    l13.415,41.11H406.25v30.266h82.228v-30.266H468.475z M354.278,408.846l20.841-62.242c0.76-2.283,1.479-5.045,2.143-8.278    c0.66-3.234,0.996-4.948,0.996-5.137l0.855-5.715h1.143c0,0.767,0.191,2.669,0.562,5.715l3.433,13.415l20.554,62.242H354.278z\">\r\n                </path>\r\n                <path\r\n                    d=\"M463.055,152.745h-34.537v33.975H357.71c-4.001,0-6.852,0.097-8.556,0.288l-4.004,0.854v-0.854l3.142-2.858    c2.851-3.422,4.853-5.896,5.996-7.421L459.632,25.41V0H297.754v65.387h34.259V32.552h66.232c3.426,0,6.283-0.288,8.56-0.859    c0.571,0,1.286-0.048,2.142-0.144c0.855-0.094,1.476-0.144,1.854-0.144v0.855l-3.141,2.568c-1.708,1.713-3.71,4.283-5.996,7.71    L296.32,193.569v25.697h166.735V152.745z\">\r\n                </path>\r\n                </svg>\r\n            </ng-container>\r\n            </th>\r\n            <td cdk-cell *cdkCellDef=\"let row\"> {{row.Gender}} </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Status\">\r\n          <th cdk-header-cell *cdkHeaderCellDef> Status </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\">\r\n            <label [ngClass]=\"{'outStock': row.Status === 'offline'}\" class=\"labcolstock\"></label>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Registration_Date\">\r\n          <th cdk-header-cell *cdkHeaderCellDef (click)=\"orderBy('Registration_Date')\" class=\"sortable\"> Registration_Date\r\n            <ng-container *ngIf=\"queryObj.OrderBy === 'Registration_Date'\">\r\n              <svg *ngIf=\"queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M240.214,401.994h-54.816V9.139c0-2.663-0.855-4.856-2.57-6.567c-1.713-1.709-3.899-2.568-6.567-2.568h-54.816    c-2.664,0-4.858,0.856-6.567,2.568c-1.711,1.714-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.903-8.566,5.709    c-1.524,3.62-0.854,6.95,1.999,9.999l91.36,91.365c2.096,1.704,4.283,2.56,6.567,2.56c2.475,0,4.665-0.855,6.567-2.56    l91.076-91.078c1.908-2.282,2.857-4.571,2.857-6.848c0-2.673-0.855-4.855-2.57-6.581    C245.068,402.85,242.881,401.994,240.214,401.994z\">\r\n                </path>\r\n                <path\r\n                  d=\"M407.804,292.369L407.804,292.369h-35.114l-54.823,52.814l23.421,24.55l17.7-16.556c3.425-3.433,5.899-6.379,7.419-8.854    l1.995-3.429h0.571v4.568c0,0.955-0.055,2.57-0.144,4.856c-0.089,2.285-0.144,4.093-0.144,5.427v123.339h-47.671v32.544h133.902    v-32.544h-47.109V292.369H407.804z\">\r\n                </path>\r\n                <path\r\n                  d=\"M440.062,26.98C424.452,8.992,404.946,0,381.532,0c-20.749,0-37.973,6.949-51.679,20.845    c-13.698,13.894-20.55,30.833-20.55,50.819c0,19.224,6.369,35.642,19.13,49.249c12.758,13.611,29.212,20.417,49.389,20.417    c8.385,0,16.427-1.334,24.133-3.999c7.7-2.667,13.562-6.189,17.56-10.566h0.571c-3.046,16.558-9.377,30.404-18.986,41.54    c-9.609,11.134-22.415,16.702-38.403,16.702c-7.228,0-14.366-1.237-21.402-3.711c-3.046-0.759-5.995-1.809-8.85-3.14    l-11.136,32.264c3.426,1.332,7.419,2.758,11.995,4.283c8.75,3.044,19.034,4.569,30.833,4.569c13.135,0,25.267-2.329,36.401-6.993    c11.137-4.665,20.513-10.9,28.12-18.702c7.618-7.806,14.089-16.892,19.418-27.264c5.328-10.373,9.229-21.223,11.703-32.548    c2.478-11.326,3.72-22.886,3.72-34.689C463.485,69,455.673,44.971,440.062,26.98z M413.516,101.929    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.891-3.617-29.845-10.85c-6.943-7.232-10.424-16.274-10.424-27.122    c0-10.85,2.95-19.794,8.85-26.836c5.896-7.043,13.798-10.566,23.698-10.566c11.229,0,21.033,5.042,29.414,15.131    c8.377,10.09,12.559,21.128,12.559,33.12C423.501,90.319,420.175,96.792,413.516,101.929z\">\r\n                </path>\r\n              </svg>\r\n              <svg *ngIf=\"!queryObj.IsSortAscending\" class=\"sortingSvg\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 511.63 511.63\" style=\"enable-background:new 0 0 511.63 511.63;\" xml:space=\"preserve\">\r\n                <path\r\n                  d=\"M240.214,401.991h-54.816V9.136c0-2.663-0.855-4.856-2.57-6.567C181.115,0.859,178.928,0,176.261,0h-54.816    c-2.664,0-4.858,0.855-6.567,2.568c-1.711,1.715-2.57,3.905-2.57,6.567v392.855H57.491c-4.186,0-7.042,1.902-8.566,5.708    c-1.524,3.621-0.854,6.95,1.999,9.996l91.36,91.365c2.096,1.707,4.283,2.562,6.567,2.562c2.475,0,4.665-0.855,6.567-2.562    l91.076-91.078c1.908-2.279,2.857-4.571,2.857-6.844c0-2.676-0.855-4.859-2.57-6.584    C245.068,402.847,242.881,401.991,240.214,401.991z\">\r\n                </path>\r\n                <path\r\n                  d=\"M440.062,319.332c-15.609-17.986-35.115-26.977-58.529-26.977c-20.749,0-37.973,6.943-51.679,20.841    c-13.698,13.894-20.55,30.834-20.55,50.819c0,19.226,6.369,35.638,19.13,49.252c12.758,13.605,29.212,20.409,49.389,20.409    c8.385,0,16.427-1.331,24.133-3.997c7.7-2.662,13.562-6.188,17.56-10.561h0.571c-3.046,16.557-9.377,30.402-18.986,41.538    s-22.415,16.7-38.403,16.7c-7.228,0-14.366-1.235-21.402-3.71c-3.046-0.76-5.995-1.807-8.85-3.142l-11.136,32.265    c3.426,1.334,7.419,2.758,11.995,4.295c8.75,3.035,19.034,4.564,30.833,4.564c13.135,0,25.267-2.33,36.401-6.994    c11.137-4.661,20.513-10.887,28.12-18.699c7.618-7.812,14.089-16.882,19.418-27.265c5.328-10.376,9.229-21.228,11.703-32.537    c2.478-11.328,3.72-22.895,3.72-34.694C463.485,361.356,455.673,337.326,440.062,319.332z M413.516,394.288    c-6.659,5.14-14.753,7.71-24.267,7.71c-12.939,0-22.895-3.617-29.845-10.849c-6.947-7.23-10.424-16.279-10.424-27.124    c0-10.841,2.95-19.79,8.85-26.833c5.899-7.046,13.798-10.571,23.698-10.571c11.229,0,21.033,5.041,29.414,15.13    c8.377,10.088,12.559,21.121,12.559,33.119C423.501,382.673,420.182,389.151,413.516,394.288z\">\r\n                </path>\r\n                <path\r\n                  d=\"M358.979,60.817c3.426-3.427,5.9-6.374,7.42-8.851l1.995-3.428h0.571v4.57c0,0.948-0.055,2.568-0.144,4.853    c-0.089,2.284-0.144,4.093-0.144,5.424v123.338h-47.671v32.548H454.91v-32.548h-47.109V0h-35.118l-54.816,52.825l23.421,24.554    L358.979,60.817z\">\r\n                </path>\r\n              </svg>\r\n            </ng-container>\r\n          </th>\r\n          <td cdk-cell *cdkCellDef=\"let row\"> {{ _dateTime.fromISO(row.Registration_Date).toRelative() }} </td>\r\n        </ng-container>\r\n\r\n        <ng-container cdkColumnDef=\"Controls\">\r\n          <th cdk-header-cell *cdkHeaderCellDef></th>\r\n          <td cdk-cell *cdkCellDef=\"let row\">\r\n            <div class=\"PtableControls\">\r\n                <svg (click)=\"startChat(row.Id)\" class=\"svgeditm2\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 356.484 356.484\" style=\"enable-background:new 0 0 356.484 356.484;\" xml:space=\"preserve\">\r\n                    <path d=\"M293.984,7.23H62.5C28.037,7.23,0,35.268,0,69.731v142.78c0,34.463,28.037,62.5,62.5,62.5l147.443,0.001l70.581,70.58    c2.392,2.393,5.588,3.662,8.842,3.662c1.61,0,3.234-0.312,4.78-0.953c4.671-1.934,7.717-6.49,7.717-11.547v-62.237    c30.759-3.885,54.621-30.211,54.621-62.006V69.731C356.484,35.268,328.447,7.23,293.984,7.23z M331.484,212.512    c0,20.678-16.822,37.5-37.5,37.5h-4.621c-6.903,0-12.5,5.598-12.5,12.5v44.064l-52.903-52.903    c-2.344-2.345-5.522-3.661-8.839-3.661H62.5c-20.678,0-37.5-16.822-37.5-37.5V69.732c0-20.678,16.822-37.5,37.5-37.5h231.484    c20.678,0,37.5,16.822,37.5,37.5V212.512z\"></path>\r\n                    <path d=\"M270.242,95.743h-184c-6.903,0-12.5,5.596-12.5,12.5c0,6.903,5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    C282.742,101.339,277.146,95.743,270.242,95.743z\"></path>\r\n                    <path d=\"M270.242,165.743h-184c-6.903,0-12.5,5.596-12.5,12.5s5.597,12.5,12.5,12.5h184c6.903,0,12.5-5.597,12.5-12.5    S277.146,165.743,270.242,165.743z\"></path>\r\n                </svg>\r\n                <svg class=\"svgdeletm2\" version=\"1.1\" x=\"0px\" y=\"0px\"\r\n                    viewBox=\"0 0 699.428 699.428\" style=\"enable-background:new 0 0 699.428 699.428;\" xml:space=\"preserve\">\r\n                    <path\r\n                    d=\"M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59     c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428     h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715     V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286     C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428     c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975     c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981     c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835     c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835     C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834     c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57     z\">\r\n                    </path>\r\n                </svg>\r\n                <svg class=\"svgdeletm2\" viewBox=\"0 0 48 48\">\r\n                  <path d=\"M24 34.54L36.36 42l-3.27-14.06L44 18.49l-14.38-1.24L24 4l-5.62 13.25L4 18.49l10.91 9.45L11.64 42z\"/>\r\n                  <path d=\"M0 0h48v48H0z\" fill=\"none\"/>\r\n                </svg>\r\n                <svg (click)=\"blockUser(row.Id)\"  class=\"svgdeletm2\" xml:space=\"preserve\" _ngcontent-c12=\"\" version=\"1.1\" viewBox=\"0 0 215.455 215.455\" x=\"0px\" y=\"0px\"><path _ngcontent-c12=\"\" d=\"M107.728,0.001C48.325,0.001,0,48.329,0,107.732c0.005,59.397,48.332,107.722,107.728,107.722  c59.401,0,107.728-48.324,107.728-107.723C215.455,48.329,167.129,0.001,107.728,0.001z M107.728,15.001  c22.021,0,42.269,7.721,58.192,20.592L35.593,165.919C22.724,149.997,15.002,129.75,15,107.731  C15,56.6,56.598,15.001,107.728,15.001z M107.728,200.454c-23.718,0-45.381-8.956-61.797-23.658L176.796,45.931  c14.703,16.416,23.659,38.081,23.659,61.801C200.455,158.859,158.857,200.454,107.728,200.454z\"></path></svg>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n        <ng-container cdkColumnDef=\"Expand\">\r\n          <th cdk-header-cell *cdkHeaderCellDef></th>\r\n          <td cdk-cell *cdkCellDef=\"let row\">\r\n            <svg (click)=\"expandedElement = (expandedElement === row) ? null : row\" class=\"svgdowndet\" version=\"1.1\"\r\n              x=\"0px\" y=\"0px\" viewBox=\"0 0 292.362 292.362\" style=\"enable-background:new 0 0 292.362 292.362;\"\r\n              xml:space=\"preserve\">\r\n              <path\r\n                d=\"M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z\">\r\n              </path>\r\n            </svg>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n        <ng-container cdkColumnDef=\"expandedDetail\">\r\n          <td cdk-cell *cdkCellDef=\"let element\" [attr.colspan]=\"columns.length\">\r\n            <div class=\"expanded-content\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                <!-- Something will appear right here .. -->\r\n                <!-- {{expandedElement | json}} -->\r\n                <!-- <div class=\"fdbvc\">\r\n                    <div class=\"bvcxbvcob\">\r\n                        <svg class=\"svgsigj23\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 258.75 258.75\" style=\"enable-background:new 0 0 258.75 258.75;\" xml:space=\"preserve\">\r\n                            <circle cx=\"129.375\" cy=\"60\" r=\"60\"></circle>\r\n                            <path d=\"M129.375,150c-60.061,0-108.75,48.689-108.75,108.75h217.5C238.125,198.689,189.436,150,129.375,150z\"></path>\r\n                        </svg>\r\n                    </div>\r\n                    <div class=\"sdffdgdfg\">\r\n                        <div class=\"labnumberadd\">Info :</div>\r\n                        <div class=\"\">medzouine@gmail.com</div>\r\n                        <table class=\"dfsvgxwfd\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Points :</td>\r\n                                    <td>\r\n                                        <label>25</label>\r\n                                        <label>/</label>\r\n                                        <label>122</label>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Date Add :</td>\r\n                                    <td>\r\n                                        <label>14 / 03 / 2018</label>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Orders :</td>\r\n                                    <td>\r\n                                        <label>3</label>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Reviews :</td>\r\n                                    <td>\r\n                                        <label>2</label>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Signup With :</td>\r\n                                    <td>\r\n                                        <label>\r\n                                            <svg class=\"svgloginwith\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 491.858 491.858\" style=\"enable-background:new 0 0 491.858 491.858;\" xml:space=\"preserve\">\r\n                                                <path d=\"M377.472,224.957H201.319v58.718H308.79c-16.032,51.048-63.714,88.077-120.055,88.077     c-69.492,0-125.823-56.335-125.823-125.824c0-69.492,56.333-125.823,125.823-125.823c34.994,0,66.645,14.289,89.452,37.346     l42.622-46.328c-34.04-33.355-80.65-53.929-132.074-53.929C84.5,57.193,0,141.693,0,245.928s84.5,188.737,188.736,188.737     c91.307,0,171.248-64.844,188.737-150.989v-58.718L377.472,224.957L377.472,224.957z\"></path>\r\n                                                <polygon points=\"491.858,224.857 455.827,224.857 455.827,188.826 424.941,188.826 424.941,224.857 388.91,224.857      388.91,255.74 424.941,255.74 424.941,291.772 455.827,291.772 455.827,255.74 491.858,255.74    \"></polygon>\r\n                                            </svg>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Open With :</td>\r\n                                    <td>\r\n                                        <label>\r\n                                            <svg class=\"svgopenwith\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 35 35\" style=\"enable-background:new 0 0 35 35;\" xml:space=\"preserve\">\r\n                                                <path d=\"M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604   c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287   c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818   c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625   H8.979V3.749h17.042V30.625z\"></path>\r\n                                            </svg>\r\n                                        </label>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"divoldaddress\">\r\n                        <div class=\"labnumberadd\">Address 1</div>\r\n                        <label class=\"laboldaddr\">medzouine@gmail.com</label>\r\n                        <label class=\"laboldaddr\">Mohamed Zouine</label>\r\n                        <label class=\"laboldaddr\">zagora hey el manssour eddehbi rue jbel azlag</label>\r\n                        <label class=\"laboldaddr\">Morocco</label>\r\n                        <label class=\"laboldaddr\">Zagora</label>\r\n                        <label class=\"laboldaddr\">451236</label>\r\n                        <label class=\"laboldaddr\">0621548798</label>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr stickyCssClass cdk-header-row *cdkHeaderRowDef=\"columns\"></tr>\r\n        <tr cdk-row *cdkRowDef=\"let row; columns: columns;\"></tr>\r\n        <tr cdk-row *cdkRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n\r\n      </table>\r\n    </ng-scrollbar>\r\n  </div>\r\n\r\n  <div class=\"tableFooter\">\r\n        <div class=\"itemsToShow selectsubcateg1 contentBG\">\r\n            <mat-select disableOptionCentering [(ngModel)]=\"queryObj.PageSize\" (selectionChange)=\"itemsToShowChanged()\">\r\n                <mat-option [value]=\"2\">2 item</mat-option>\r\n                <mat-option [value]=\"3\">3 item</mat-option>\r\n                <mat-option [value]=\"5\">5 item</mat-option>\r\n                <mat-option [value]=\"10\">10 item</mat-option>\r\n                <mat-option [value]=\"20\">20 item</mat-option>\r\n                <!-- <mat-option [value]=\"10\">50 item</mat-option>\r\n                <mat-option [value]=\"10\">100 item</mat-option> -->\r\n             </mat-select>\r\n        </div>\r\n\r\n        <div *ngIf=\"selection.selected.length > 0\" class=\"footerControls\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"512px\" viewBox=\"0 0 384 384\" width=\"512px\" class=\"\"><g><path d=\"m374 0h-99.699219c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h75.710938l-194.511719 196.375c-3.730469 3.949219-3.628906 10.148438.226562 13.972656 3.855469 3.824219 10.058594 3.867188 13.972657.105469l194.300781-196.152344v75.398438c0 5.523437 4.476562 10 10 10s10-4.476563 10-10v-99.699219c0-5.523438-4.476562-10-10-10zm0 0\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/><path d=\"m324.136719 214.492188c-5.523438 0-10 4.476562-10 10v109.507812c-.019531 16.5625-13.4375 29.980469-30 30h-234.136719c-16.5625-.019531-29.980469-13.4375-30-30v-234.136719c.019531-16.5625 13.4375-29.980469 30-30h109.507812c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10h-109.507812c-27.601562.03125-49.96875 22.398438-50 50v234.136719c.03125 27.601562 22.398438 49.96875 50 50h234.136719c27.601562-.03125 49.96875-22.398438 50-50v-109.507812c0-5.523438-4.476563-10-10-10zm0 0\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" fill=\"#FFFFFF\"/></g> </svg>\r\n          <svg (click)=\"deleteRange(selection.selected)\" _ngcontent-c4=\"\" height=\"427pt\" viewBox=\"-40 0 427 427.00131\" width=\"427pt\" xmlns=\"http://www.w3.org/2000/svg\"><path _ngcontent-c4=\"\" d=\"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0\"></path><path _ngcontent-c4=\"\" class=\"ng-tns-c4-0\" d=\"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0\"></path></svg>\r\n        </div>\r\n    \r\n        <div *ngIf='availablePages !== 1' class=\"pagingControle\">\r\n          <div class=\"pageNumbers\">\r\n    \r\n            <ng-container *ngIf='availablePages <= 5; else morePaging'>\r\n              <div class=\"nbpgcom\" (click)=\"prevPage()\" >&lt;</div>\r\n              <div *ngFor=\"let item of availablePages | iterate; let i=index\" (click)=\"goToPage(i)\"\r\n              [class.activePage]=\"(queryObj.CurrentPage) === i\" class=\"nbpgcom\">\r\n              {{i+1}}\r\n              </div>\r\n              <div class=\"nbpgcom\" (click)=\"nextPage()\" >&gt;</div>\r\n            </ng-container>\r\n    \r\n            <ng-template #morePaging>\r\n              <div class=\"nbpgcom\" (click)=\"goToPage(0)\" >&lt;&lt;</div>\r\n              <div class=\"nbpgcom\" (click)=\"prevPage()\" >&lt;</div>\r\n              <div class=\"paggingInput\">\r\n                <input #paggingInput [(ngModel)]=\"activePage\" type=\"text\" (change)=\"paggingInputChanged(paggingInput.value)\" >\r\n                <span> / {{availablePages}} pages</span>\r\n              </div>\r\n              <div class=\"nbpgcom\" (click)=\"nextPage()\" >&gt;</div>\r\n              <div class=\"nbpgcom\" (click)=\"goToPage(availablePages-1)\" >&gt;&gt;</div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <!-- <data-viewer [data]=\"{Count: nbTotal, Query: queryObj, AvailablePages: availablePages}\"></data-viewer> -->\r\n      \r\n</div>\r\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var src_app_models_UserFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/UserFilter */ "./src/app/models/UserFilter.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(userService, toaster) {
        this.userService = userService;
        this.toaster = toaster;
        this.columns = [
            "Select",
            "Avatar",
            "FullName",
            "Gender",
            "Orders",
            "Points",
            "Reviews",
            "SignUpWith",
            "Status",
            "Registration_Date",
            "Controls",
            "Expand"
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this._dateTime = luxon__WEBPACK_IMPORTED_MODULE_7__["DateTime"]; // luxion instance
        this.queryObj = new src_app_models_UserFilter__WEBPACK_IMPORTED_MODULE_5__["UserFilter"]();
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.populateUsers();
    };
    Object.defineProperty(UsersListComponent.prototype, "availablePages", {
        get: function () {
            var nb = Math.ceil(this.nbTotal / this.queryObj.PageSize) || 1;
            return nb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersListComponent.prototype, "activePage", {
        get: function () {
            return this.queryObj.CurrentPage + 1;
        },
        enumerable: true,
        configurable: true
    });
    UsersListComponent.prototype.selectUsersType = function (usersType) {
        if (this.queryObj.UserRole !== usersType) {
            this.queryObj.UserRole = usersType;
            this.populateUsers();
        }
    };
    UsersListComponent.prototype.populateUsers = function () {
        var _this = this;
        this.userService.GetUsersList(this.queryObj).subscribe(function (res) {
            _this.nbTotal = res.Count; // display the total of products somewhere
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](res.Items);
            _this.selection.clear();
        });
    };
    UsersListComponent.prototype.isAllSelected = function () {
        var nbSelected = this.selection.selected.length;
        var nbRows = this.dataSource.data.length;
        return nbSelected === nbRows;
    };
    UsersListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UsersListComponent.prototype.trackById = function (index, product) {
        return product ? product.Id : undefined;
    };
    UsersListComponent.prototype.orderBy = function (value) {
        if (this.queryObj.OrderBy === value)
            this.queryObj.IsSortAscending = !this.queryObj.IsSortAscending;
        else {
            this.queryObj.IsSortAscending = true;
            this.queryObj.OrderBy = value;
        }
        this.populateUsers();
    };
    UsersListComponent.prototype.itemsToShowChanged = function () {
        this.queryObj.CurrentPage = 0; // Might Changed later
        this.populateUsers();
    };
    UsersListComponent.prototype.paggingInputChanged = function (page) {
        if (page > 0) {
            this.queryObj.CurrentPage = page - 1;
        }
        else {
            this.queryObj.CurrentPage = 0;
        }
        this.populateUsers();
    };
    UsersListComponent.prototype.goToPage = function (page) {
        this.queryObj.CurrentPage = page;
        this.populateUsers();
    };
    UsersListComponent.prototype.nextPage = function () {
        if ((this.queryObj.CurrentPage + 1) < this.availablePages) {
            this.queryObj.CurrentPage++;
            this.populateUsers();
        }
    };
    UsersListComponent.prototype.prevPage = function () {
        if (this.queryObj.CurrentPage > 0) {
            this.queryObj.CurrentPage--;
            this.populateUsers();
        }
    };
    UsersListComponent.prototype.startChat = function (id) {
    };
    UsersListComponent.prototype.blockUser = function (id) {
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/user/users-list/users-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("detailExpand", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: "0px", minHeight: "0", display: "none" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: "*" })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
                ])
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
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