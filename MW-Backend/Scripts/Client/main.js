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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_in_up_sign_in_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in-up/sign-in-up.component */ "./src/app/sign-in-up/sign-in-up.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/checkout.guard */ "./src/app/guards/checkout.guard.ts");
/* harmony import */ var _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product-details/product-details.component */ "./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/user-auth.guard */ "./src/app/guards/user-auth.guard.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _guards_signin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/signin.guard */ "./src/app/guards/signin.guard.ts");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
















var routes = [
    { path: 'sign-in', component: _sign_in_up_sign_in_up_component__WEBPACK_IMPORTED_MODULE_4__["SignInUpComponent"], canActivate: [_guards_signin_guard__WEBPACK_IMPORTED_MODULE_11__["SigninGuard"]] },
    { path: 'sign-up', component: _sign_in_up_sign_in_up_component__WEBPACK_IMPORTED_MODULE_4__["SignInUpComponent"], canActivate: [_guards_signin_guard__WEBPACK_IMPORTED_MODULE_11__["SigninGuard"]] },
    { path: '404', component: _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: 'error', component: _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_13__["UnexpectedErrorComponent"] },
    {
        path: '', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_15__["NavigationComponent"],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"], },
            { path: 'product/:slug', component: _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"] },
            { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"], canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_7__["CheckoutGuard"], _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_9__["UserAuthGuard"]] },
            { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"], canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_7__["CheckoutGuard"], _guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_9__["UserAuthGuard"]] },
            { path: 'dashboard', component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], canActivate: [_guards_user_auth_guard__WEBPACK_IMPORTED_MODULE_9__["UserAuthGuard"]] },
            { path: '**', redirectTo: '/' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* router-outlet {\r\n    display: none;\r\n} */\r\n\r\n#content {\r\n    width: 1070px;\r\n    margin: 25px auto;\r\n    padding-top: 10px;\r\n    position: relative;\r\n}\r\n\r\n#content>* {\r\n    display: block\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    font-size: 80px;\r\n    opacity: 0.8;\r\n    letter-spacing: 5.5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiByb3V0ZXItb3V0bGV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDcwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY29udGVudD4qIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDUuNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet #myOutlet=\"outlet\"></router-outlet>\n"

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
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user-auth.service */ "./src/app/services/user-auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(cartService, userAuth) {
        this.cartService = cartService;
        this.userAuth = userAuth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userAuth.getProfile();
        this.cartService.loadCart();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]])
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _sign_in_up_sign_in_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in-up/sign-in-up.component */ "./src/app/sign-in-up/sign-in-up.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _shopping_cart_sc_summary_sc_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-cart/sc-summary/sc-summary.component */ "./src/app/shopping-cart/sc-summary/sc-summary.component.ts");
/* harmony import */ var _product_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product-card/product-card.component */ "./src/app/product/product-card/product-card.component.ts");
/* harmony import */ var _product_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-quantity/product-quantity.component */ "./src/app/product/product-quantity/product-quantity.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/product-details/product-details.component */ "./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _sign_in_up_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sign-in-up/sign-in/sign-in.component */ "./src/app/sign-in-up/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_in_up_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-in-up/sign-up/sign-up.component */ "./src/app/sign-in-up/sign-up/sign-up.component.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user-profile/user-profile.component */ "./src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error-pages/not-found/not-found.component */ "./src/app/error-pages/not-found/not-found.component.ts");
/* harmony import */ var _common_errors_global_error_handler__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./common/errors/global-error-handler */ "./src/app/common/errors/global-error-handler.ts");
/* harmony import */ var _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error-pages/unexpected-error/unexpected-error.component */ "./src/app/error-pages/unexpected-error/unexpected-error.component.ts");
/* harmony import */ var _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./common/auth-interceptor */ "./src/app/common/auth-interceptor.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./coupon/coupon.component */ "./src/app/coupon/coupon.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
                _sign_in_up_sign_in_up_component__WEBPACK_IMPORTED_MODULE_8__["SignInUpComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"],
                _shopping_cart_sc_summary_sc_summary_component__WEBPACK_IMPORTED_MODULE_10__["ScSummaryComponent"],
                _product_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"],
                _product_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_12__["ProductQuantityComponent"],
                _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailsComponent"],
                _sign_in_up_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_22__["SignInComponent"],
                _sign_in_up_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
                _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__["UserProfileComponent"],
                _error_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_25__["NotFoundComponent"],
                _error_pages_unexpected_error_unexpected_error_component__WEBPACK_IMPORTED_MODULE_27__["UnexpectedErrorComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_29__["PaymentComponent"],
                _coupon_coupon_component__WEBPACK_IMPORTED_MODULE_30__["CouponComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_31__["NavigationComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_19__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"],
                _services_cart_service__WEBPACK_IMPORTED_MODULE_16__["CartService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _common_errors_global_error_handler__WEBPACK_IMPORTED_MODULE_26__["AppErrorHandler"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], useClass: _common_auth_interceptor__WEBPACK_IMPORTED_MODULE_28__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Shipping Adress :</h2>\n  <div class=\"row\">\n    <div class=\"col-5\">\n      <form #f=\"ngForm\" (ngSubmit)=\"Proceed(f)\">\n        <div class=\"form-group\">\n          <label for=\"\">FullName</label>\n          <input #FullName=\"ngModel\" ngModel name=\"FullName\" type=\"text\" class=\"form-control\" required>\n          <div class=\"alert alert-dark\" *ngIf=\"FullName.touched && FullName.invalid\">\n            <div *ngIf=\"FullName.errors.required\">FullName is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Phone</label>\n          <input #Phone=\"ngModel\" ngModel name=\"Phone\" type=\"text\" class=\"form-control\" required>\n          <div class=\"alert alert-dark\" *ngIf=\"Phone.touched && Phone.invalid\">\n            <div *ngIf=\"Phone.errors.required\">Phone is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"\">Addresses</label>\n          <input #Line1=\"ngModel\" ngModel name=\"Line1\" type=\"text\" class=\"form-control\" placeholder=\"Line 1\" required>\n          <div class=\"alert alert-dark\" *ngIf=\"Line1.touched && Line1.invalid\">\n            <div *ngIf=\"Line1.errors.required\">Address Line 1 is required.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input #Line2=\"ngModel\" ngModel name=\"Line2\" type=\"text\" class=\"form-control\" placeholder=\"Line 2 (Optional)\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-6\">\n            <label for=\"\">Country</label>\n            <select name=\"Country\" required ngModel class=\"form-control\">\n              <option value=\"USA\">United States</option>\n              <option value=\"Canada\">Canada</option>\n              <option value=\"Morocco\">Morocco</option>\n            </select>\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"\">State</label>\n            <input #State=\"ngModel\" ngModel name=\"State\" type=\"text\" class=\"form-control\">\n            <div class=\"alert alert-dark\" *ngIf=\"State.touched && State.invalid\">\n              <div *ngIf=\"State.errors.required\">State is required.</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-6\">\n            <label for=\"\">City</label>\n            <input #City=\"ngModel\" ngModel name=\"City\" type=\"text\" class=\"form-control\" required>\n            <div class=\"alert alert-dark\" *ngIf=\"City.touched && City.invalid\">\n              <div *ngIf=\"City.errors.required\">City is required.</div>\n            </div>\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"\">Zip</label>\n            <input #Zip=\"ngModel\" ngModel name=\"Zip\" type=\"text\" class=\"form-control\">\n            <div class=\"alert alert-dark\" *ngIf=\"Zip.touched && Zip.invalid\">\n              <div *ngIf=\"Zip.errors.required\">Zip is required.</div>\n            </div>\n          </div>\n        </div>\n\n        <button [disabled]=\"f.invalid\" class=\"btn btn-info\">Procecced</button>\n      </form>\n    </div>\n    <div class=\" offset-2 col-5\">\n      <coupon></coupon>\n      <sc-summary [cart]=\"shoppingCart\"></sc-summary>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartService, router, userService) {
        this.cartService = cartService;
        this.router = router;
        this.userService = userService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.shoppingCart = this.cartService.Cart;
    };
    CheckoutComponent.prototype.Proceed = function (f) {
        this.userService.adress = f.value;
        this.router.navigate(['/payment']);
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
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

/***/ "./src/app/common/errors/global-error-handler.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/errors/global-error-handler.ts ***!
  \*******************************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        if (error.status === 401) { // either unRegistred or Token has Expired
            localStorage.removeItem('MW-AccessToken');
            window.location.href = '/sign-in';
            return;
        }
        if (error.status === 404) {
            window.location.href = '/404';
            return;
        }
        window.location.href = '/error';
    };
    AppErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppErrorHandler);
    return AppErrorHandler;
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

/***/ "./src/app/common/validators/product.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/validators/product.validators.ts ***!
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

module.exports = "<div class=\"form-group\">\n  <label for=\"\">Coupon</label>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <input #c=\"ngModel\" name=\"c\" [(ngModel)]=\"coupon\" type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"col-4\">\n      <input class=\"btn btn-info form-control\" type=\"button\" value=\"REDEEM\">\n    </div>\n  </div>\n  <div class=\"alert alert-dark\" *ngIf=\"c.touched && c.invalid\">\n    <!-- <div *ngIf=\"coupon.errors.CouponValidator\"> Invalid Format </div> -->\n  </div>\n</div>\n"

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
            selector: 'coupon',
            template: __webpack_require__(/*! ./coupon.component.html */ "./src/app/coupon/coupon.component.html"),
            styles: [__webpack_require__(/*! ./coupon.component.css */ "./src/app/coupon/coupon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouponComponent);
    return CouponComponent;
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

/***/ "./src/app/guards/checkout.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/checkout.guard.ts ***!
  \******************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");




var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(cartService, router) {
        this.cartService = cartService;
        this.router = router;
    }
    CheckoutGuard.prototype.canActivate = function (next, state) {
        if (this.cartService.Cart.totalCartItems > 0) {
            return true;
        }
        this.router.navigate(['/']);
    };
    CheckoutGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutGuard);
    return CheckoutGuard;
}());



/***/ }),

/***/ "./src/app/guards/signin.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/signin.guard.ts ***!
  \****************************************/
/*! exports provided: SigninGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninGuard", function() { return SigninGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");




var SigninGuard = /** @class */ (function () {
    function SigninGuard(userAuth, router) {
        this.userAuth = userAuth;
        this.router = router;
    }
    SigninGuard.prototype.canActivate = function (next, state) {
        if (!localStorage.getItem('MW-AccessToken')) {
            return true;
        }
        this.router.navigate(['/']);
    };
    SigninGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninGuard);
    return SigninGuard;
}());



/***/ }),

/***/ "./src/app/guards/user-auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/user-auth.guard.ts ***!
  \*******************************************/
/*! exports provided: UserAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuard", function() { return UserAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserAuthGuard = /** @class */ (function () {
    function UserAuthGuard(router) {
        this.router = router;
    }
    UserAuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('MW-AccessToken')) {
            return true;
        }
        this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
    };
    UserAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserAuthGuard);
    return UserAuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  background: #6c757d;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 999;\r\n}\r\n\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #eee !important\r\n}\r\n\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n\r\nli {\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}\r\n\r\n\r\nnav {\r\n    text-align: right;\r\n    padding: 8px 0;\r\n    width: 1070px;\r\n    font-size: 20px;\r\n    margin: 0 auto\r\n}\r\n\r\n\r\nspan {\r\n    float: left;\r\n    color: #eee;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n.dropdown-item {\r\n    color: black !important\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFlBQVk7QUFDZDs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjs7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2Y7QUFDSjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNlZWUgIWltcG9ydGFudFxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgd2lkdGg6IDEwNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvXHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav>\n    <a routerLink=\"/\"><span>You-Better</span></a>\n    <ul>\n      <li>\n        <a href=\"admin\">GoAdmin</a>\n      </li>\n      <li>\n        <a routerLink=\"/cart\">Cart ({{cartCount}})\n        </a>\n      </li>\n      <li *ngIf=\" user ; else anonumousUser\" ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle class=\"dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">{{ user.FullName }}</a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" routerLink=\"/dashboard\">My Profile</a>\n          <a class=\"dropdown-item\" routerLink=\"/\">My Orders</a>\n          <a class=\"dropdown-item\" (click)=\"Logout()\">Log Out</a>\n        </div>\n      </li>\n      <ng-template #anonumousUser>\n        <li>\n          <a routerLink=\"/sign-in\">Login</a>\n        </li>\n      </ng-template>\n    </ul>\n  </nav>\n</header>"

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
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-auth.service */ "./src/app/services/user-auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cartService, userAuth) {
        this.cartService = cartService;
        this.userAuth = userAuth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeaderComponent.prototype, "user", {
        get: function () {
            return this.userAuth.user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "cartCount", {
        get: function () {
            return this.cartService.Cart.totalCartItems;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.Logout = function () {
        this.userAuth.Logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_user_auth_service__WEBPACK_IMPORTED_MODULE_3__["UserAuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-3 {\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"products row \">\n    <div *ngFor=\"let p of products$ | async\" class=\"col-3\">\n      <product-card [product]=\"p\"></product-card>\n      <div class=\" alert alert-info justForTesting \">\n        {{ p | json }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService, toaster) {
        this.productService = productService;
        this.toaster = toaster;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProductList();
    };
    HomeComponent.prototype.n = function () {
        this.toaster.success('You did it', 'Success');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/cartItem.ts":
/*!************************************!*\
  !*** ./src/app/models/cartItem.ts ***!
  \************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/models/shoppingCart.ts":
/*!****************************************!*\
  !*** ./src/app/models/shoppingCart.ts ***!
  \****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    Object.defineProperty(ShoppingCart.prototype, "totalCartItems", {
        get: function () {
            var count = 0;
            this.items.forEach(function (x) { return count += x.quantity; });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "grandPrice", {
        get: function () {
            var sum = 0;
            this.items.forEach(function (x) { return sum += (x.product.Price * x.quantity); });
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerBlock {\r\n  margin: 30px auto;\r\n}\r\n\r\np {\r\n  font-size: 16px\r\n}\r\n\r\n.or {\r\n  background: #17caed;\r\n  border-radius: 50%;\r\n  padding: 10px 13px;\r\n  display: block;\r\n  width: 50%;\r\n  margin: 40px auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJCbG9jayB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4ub3Ige1xyXG4gIGJhY2tncm91bmQ6ICMxN2NhZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTNweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\" user_adress \" class=\" alert alert-info justForTesting \">\n    <u>Ship To :</u> {{ user_adress | json }}\n  </div>\n  <br>\n  <u>\n    <h3 class=\"text-center\">Choose Your Favourite Payment Method:</h3>\n  </u>\n  <div class=\"row col-10 centerBlock\">\n    <div class=\"col-5\">\n      <form>\n        <div class=\" form-group\">\n          <label for=\"\">Card Number</label>\n          <input type=\"text\" name=\"cardNumber\" class=\"form-control\">\n        </div>\n        <div class=\"row\">\n          <div class=\" form-group col-8\">\n            <label for=\"\">Expiration Date</label>\n            <input type=\"text\" name=\"expDate\" class=\"form-control\">\n          </div>\n          <div class=\" form-group col-4\">\n            <label for=\"\">CSC</label>\n            <input type=\"text\" name=\"csc\" class=\"form-control\">\n          </div>\n        </div>\n        <button type=\"submit\" class=\"col-4 btn btn-info\">Place Order</button>\n      </form>\n    </div>\n    <div class=\"col-2 text-center\"><span class=\"or\">Or</span></div>\n    <div class=\"col-5\">\n      <div for=\"\">Safer & Faster</div>\n      <p>\n        NB: By clicking the button below you will redirct to your PayPal account to complete the order\n      </p>\n      <div class=\"text-center\"><button type=\"button\" (click)=\"PayPal()\" class=\"btn btn-info\">Pay With PayPal</button>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(userService, cartService) {
        this.userService = userService;
        this.cartService = cartService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PaymentComponent.prototype, "user_adress", {
        get: function () {
            return this.userService.adress;
        },
        enumerable: true,
        configurable: true
    });
    PaymentComponent.prototype.PayPal = function () {
        this.cartService.postCart();
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/product/product-card/product-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-card/product-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card img {\r\n    height: 150px;\r\n    padding: 14px 64px;\r\n}\r\n\r\n.btn-secondary {\r\n    color: white !important\r\n}\r\n\r\n.qteText {\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n\r\n.card-body {\r\n    padding: 8px;\r\n}\r\n\r\n.card-title, .card-text {\r\n    margin-bottom: 5px;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.card-text {\r\n    text-decoration: underline;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 0;\r\n}\r\n\r\na{\r\n    color: black !important\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDE0cHggNjRweDtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnF0ZVRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUsIC5jYXJkLXRleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-card/product-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-card/product-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card \">\n  <img class=\"card-img-top\" [src]=\"'/Content/Images/Products/' + product.Id + '/Main/' + product.Image\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\"><a routerLink=\"/product/{{product.Slug}}\">{{product.Name}}</a></h5>\n    <p class=\"card-text\">{{product.Price | currency: 'USD':'symbol'}}</p>\n  </div>\n  <div class=\"card-footer\">\n    <a *ngIf=\"getQuantity() === 0; else updateQte\" (click)=\"addToCart(product)\" class=\"btn btn-secondary btn-block\">\n      Add To Cart</a>\n    <ng-template #updateQte>\n      <product-quantity [product]=\"product\"></product-quantity>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product-card/product-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-card/product-card.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductCardComponent.prototype.getQuantity = function () {
        var _this = this;
        var item = this.cartService.Cart.items.find(function (x) { return x.product.Id === _this.product.Id; });
        return item ? item.quantity : 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/product/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/product/product-card/product-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/product/product-details/product-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<p class=\"formData alert alert-success justForTesting\">\n  {{ product | json }}\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var slug = this.route.snapshot.params['slug'];
        this.productService.getProduct(slug).subscribe(function (res) {
            _this.product = res;
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/product-quantity/product-quantity.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/product/product-quantity/product-quantity.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-secondary {\r\n    color: white !important\r\n}\r\n\r\n.qteText {\r\n    text-align: center;\r\n    font-size: 22px;\r\n    line-height: 38px;\r\n}\r\n\r\na {\r\n    margin: 2px 0;\r\n    font-weight: bold\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LXF1YW50aXR5L3Byb2R1Y3QtcXVhbnRpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LXF1YW50aXR5L3Byb2R1Y3QtcXVhbnRpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5xdGVUZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/product/product-quantity/product-quantity.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/product/product-quantity/product-quantity.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters \">\n  <a (click)=\"removeFromCart()\" class=\"col-2 btn btn-default border btn-block\">-</a>\n  <div class=\"col-8 qteText\">{{getQuantity()}} in cart</div>\n  <a (click)=\"addToCart()\" class=\"col-2 btn btn-default border btn-block\">+</a>\n</div>"

/***/ }),

/***/ "./src/app/product/product-quantity/product-quantity.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product/product-quantity/product-quantity.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");



var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    ProductQuantityComponent.prototype.getQuantity = function () {
        var _this = this;
        var item = this.cartService.Cart.items.find(function (x) { return x.product.Id === _this.product.Id; });
        return item ? item.quantity : 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    ProductQuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/product/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/product/product-quantity/product-quantity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shoppingCart */ "./src/app/models/shoppingCart.ts");
/* harmony import */ var _models_cartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/cartItem */ "./src/app/models/cartItem.ts");




var CartService = /** @class */ (function () {
    function CartService() {
        this.Cart = new _models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]();
    }
    CartService.prototype.addToCart = function (p) {
        var item = this.Cart.items.find(function (x) { return x.product.Id === p.Id; });
        if (item) {
            item.quantity++;
            this.saveCart();
            return;
        }
        var newItem = new _models_cartItem__WEBPACK_IMPORTED_MODULE_3__["CartItem"](p, 1);
        this.Cart.items.push(newItem);
        this.saveCart();
    };
    CartService.prototype.removeCompleteItem = function (id) {
        var item = this.Cart.items.find(function (x) { return x.product.Id === id; });
        if (item) {
            this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
            this.saveCart();
        }
    };
    CartService.prototype.removeFromCart = function (p) {
        var item = this.Cart.items.find(function (x) { return x.product.Id === p.Id; });
        if (item && item.quantity > 1) {
            item.quantity--;
            this.saveCart();
            return;
        }
        else if (item && item.quantity === 1) {
            this.Cart.items.splice(this.Cart.items.indexOf(item), 1);
            this.saveCart();
        }
    };
    CartService.prototype.clearCart = function () {
        this.Cart.items = [];
        this.saveCart();
    };
    CartService.prototype.saveCart = function () {
        localStorage.setItem('MW-shoppingCart', JSON.stringify(this.Cart.items));
    };
    CartService.prototype.loadCart = function () {
        var c = localStorage.getItem('MW-shoppingCart');
        if (c != null) {
            this.Cart.items = JSON.parse(c);
        }
    };
    CartService.prototype.postCart = function () {
        console.log(JSON.stringify(this.Cart.items));
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'true' });
    }
    ProductService.prototype.getProductList = function () {
        return this.http.get('/api/products', { headers: this.noAuth });
    };
    ProductService.prototype.getProduct = function (slug) {
        return this.http.get('/api/products/' + slug, { headers: this.noAuth });
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user-auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-auth.service.ts ***!
  \***********************************************/
/*! exports provided: UserAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthService", function() { return UserAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");







var UserAuthService = /** @class */ (function () {
    function UserAuthService(http, toaster, router) {
        this.http = http;
        this.toaster = toaster;
        this.router = router;
    }
    UserAuthService.prototype.Register = function (f) {
        var noAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'NoAuth': 'true' });
        return this.http.post('api/Account/Register', f, { headers: noAuth }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_6__["handleExpectedErrors"]));
    };
    UserAuthService.prototype.Login = function (f) {
        var data = 'username=' + f.Email + '&password=' + f.Password + '&grant_type=password';
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'NoAuth': 'true' });
        return this.http.post('login', data, { headers: reqHeader }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_6__["handleExpectedErrors"]));
    };
    UserAuthService.prototype.getProfile = function () {
        var _this = this;
        var Ls = localStorage.getItem('MW-AccessToken');
        if (Ls == null) {
            return;
        }
        this.http.get('/api/UserIdentity').subscribe(function (userProfile) {
            _this.user = userProfile;
        }, function (error) {
            if (error.status === 401) { // means that acctoken has expired
                localStorage.removeItem('MW-AccessToken');
                _this.user = null;
            }
            else
                throw error;
        });
    };
    UserAuthService.prototype.Logout = function () {
        localStorage.removeItem('MW-AccessToken');
        this.user = null;
        this.router.navigate(['/']);
    };
    UserAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserAuthService);
    return UserAuthService;
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


var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.ngOnInit = function () {
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/sc-summary/sc-summary.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shopping-cart/sc-summary/sc-summary.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2Mtc3VtbWFyeS9zYy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shopping-cart/sc-summary/sc-summary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shopping-cart/sc-summary/sc-summary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Order Summary</h4>\n    <p class=\"card-text\">You have {{ cart.totalCartItems }} items in your shopping cart.</p>\n    <ul class=\"list-group list-group-flush\">\n      <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n        {{ item.quantity }} x {{ item.product.Name }}\n        <div class=\"float-right\">\n          {{ item.totalPrice | currency:'USD':'symbol' }}\n        </div>\n      </li>\n      <li class=\"list-group-item font-weight-bold\">\n        Total\n        <div class=\"float-right\">\n          {{ cart.grandPrice | currency:'USD':'symbol' }}\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping-cart/sc-summary/sc-summary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shopping-cart/sc-summary/sc-summary.component.ts ***!
  \******************************************************************/
/*! exports provided: ScSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScSummaryComponent", function() { return ScSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/shoppingCart */ "./src/app/models/shoppingCart.ts");



var ScSummaryComponent = /** @class */ (function () {
    function ScSummaryComponent() {
    }
    ScSummaryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_shoppingCart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ScSummaryComponent.prototype, "cart", void 0);
    ScSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sc-summary',
            template: __webpack_require__(/*! ./sc-summary.component.html */ "./src/app/shopping-cart/sc-summary/sc-summary.component.html"),
            styles: [__webpack_require__(/*! ./sc-summary.component.css */ "./src/app/shopping-cart/sc-summary/sc-summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScSummaryComponent);
    return ScSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-img {\r\n    height: 45px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.table td, .table th {\r\n    font-size: 24px;\r\n}\r\n\r\n.table a {\r\n    padding: 2px 10px;\r\n    color: white;\r\n    width: 100%;\r\n}\r\n\r\n.empty-cart {\r\n    width: 50vw;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-weight: 300;\r\n}\r\n\r\nsvg {\r\n    max-width: 60%;\r\n    padding: 1rem 5rem;\r\n}\r\n\r\nsvg #oval, svg #plus, svg #diamond, svg #bubble-rounded {\r\n    -webkit-animation: plopp 4s ease-out infinite;\r\n    animation: plopp 4s ease-out infinite;\r\n}\r\n\r\nsvg #oval:nth-child(1), svg #plus:nth-child(1), svg #diamond:nth-child(1), svg #bubble-rounded:nth-child(1) {\r\n    -webkit-animation-delay: -240ms;\r\n    animation-delay: -240ms;\r\n}\r\n\r\nsvg #oval:nth-child(2), svg #plus:nth-child(2), svg #diamond:nth-child(2), svg #bubble-rounded:nth-child(2) {\r\n    -webkit-animation-delay: -480ms;\r\n    animation-delay: -480ms;\r\n}\r\n\r\nsvg #oval:nth-child(3), svg #plus:nth-child(3), svg #diamond:nth-child(3), svg #bubble-rounded:nth-child(3) {\r\n    -webkit-animation-delay: -720ms;\r\n    animation-delay: -720ms;\r\n}\r\n\r\nsvg #oval:nth-child(4), svg #plus:nth-child(4), svg #diamond:nth-child(4), svg #bubble-rounded:nth-child(4) {\r\n    -webkit-animation-delay: -960ms;\r\n    animation-delay: -960ms;\r\n}\r\n\r\nsvg #oval:nth-child(5), svg #plus:nth-child(5), svg #diamond:nth-child(5), svg #bubble-rounded:nth-child(5) {\r\n    -webkit-animation-delay: -1200ms;\r\n    animation-delay: -1200ms;\r\n}\r\n\r\nsvg #oval:nth-child(6), svg #plus:nth-child(6), svg #diamond:nth-child(6), svg #bubble-rounded:nth-child(6) {\r\n    -webkit-animation-delay: -1440ms;\r\n    animation-delay: -1440ms;\r\n}\r\n\r\nsvg #oval:nth-child(7), svg #plus:nth-child(7), svg #diamond:nth-child(7), svg #bubble-rounded:nth-child(7) {\r\n    -webkit-animation-delay: -1680ms;\r\n    animation-delay: -1680ms;\r\n}\r\n\r\nsvg #oval:nth-child(8), svg #plus:nth-child(8), svg #diamond:nth-child(8), svg #bubble-rounded:nth-child(8) {\r\n    -webkit-animation-delay: -1920ms;\r\n    animation-delay: -1920ms;\r\n}\r\n\r\nsvg #oval:nth-child(9), svg #plus:nth-child(9), svg #diamond:nth-child(9), svg #bubble-rounded:nth-child(9) {\r\n    -webkit-animation-delay: -2160ms;\r\n    animation-delay: -2160ms;\r\n}\r\n\r\nsvg #oval:nth-child(10), svg #plus:nth-child(10), svg #diamond:nth-child(10), svg #bubble-rounded:nth-child(10) {\r\n    -webkit-animation-delay: -2400ms;\r\n    animation-delay: -2400ms;\r\n}\r\n\r\nsvg #oval:nth-child(11), svg #plus:nth-child(11), svg #diamond:nth-child(11), svg #bubble-rounded:nth-child(11) {\r\n    -webkit-animation-delay: -2640ms;\r\n    animation-delay: -2640ms;\r\n}\r\n\r\nsvg #oval:nth-child(12), svg #plus:nth-child(12), svg #diamond:nth-child(12), svg #bubble-rounded:nth-child(12) {\r\n    -webkit-animation-delay: -2880ms;\r\n    animation-delay: -2880ms;\r\n}\r\n\r\nsvg #oval:nth-child(13), svg #plus:nth-child(13), svg #diamond:nth-child(13), svg #bubble-rounded:nth-child(13) {\r\n    -webkit-animation-delay: -3120ms;\r\n    animation-delay: -3120ms;\r\n}\r\n\r\nsvg #oval:nth-child(14), svg #plus:nth-child(14), svg #diamond:nth-child(14), svg #bubble-rounded:nth-child(14) {\r\n    -webkit-animation-delay: -3360ms;\r\n    animation-delay: -3360ms;\r\n}\r\n\r\nsvg #oval:nth-child(15), svg #plus:nth-child(15), svg #diamond:nth-child(15), svg #bubble-rounded:nth-child(15) {\r\n    -webkit-animation-delay: -3600ms;\r\n    animation-delay: -3600ms;\r\n}\r\n\r\nsvg #oval:nth-child(16), svg #plus:nth-child(16), svg #diamond:nth-child(16), svg #bubble-rounded:nth-child(16) {\r\n    -webkit-animation-delay: -3840ms;\r\n    animation-delay: -3840ms;\r\n}\r\n\r\nsvg #bg-line:nth-child(2) {\r\n    fill-opacity: 0.3;\r\n}\r\n\r\nsvg #bg-line:nth-child(3) {\r\n    fill-opacity: 0.4;\r\n}\r\n\r\nh3 {\r\n    color: rgba(0, 0, 0, 0.5);\r\n    font-size: 24px;\r\n    line-height: 16px;\r\n    max-width: 80%;\r\n    margin: 1.25rem auto 0 auto;\r\n}\r\n\r\n@-webkit-keyframes plopp {\r\n    0% {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        -webkit-transform: translate(0, -10px);\r\n        transform: translate(0, -10px);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes plopp {\r\n    0% {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        -webkit-transform: translate(0, -10px);\r\n        transform: translate(0, -10px);\r\n        opacity: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGtDQUFrQztRQUNsQywwQkFBMEI7UUFDMUIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxzQ0FBc0M7UUFDdEMsOEJBQThCO1FBQzlCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEMsMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksc0NBQXNDO1FBQ3RDLDhCQUE4QjtRQUM5QixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWltZyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udGFibGUgYSB7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZW1wdHktY2FydCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMXJlbSA1cmVtO1xyXG59XHJcblxyXG5zdmcgI292YWwsIHN2ZyAjcGx1cywgc3ZnICNkaWFtb25kLCBzdmcgI2J1YmJsZS1yb3VuZGVkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwbG9wcCA0cyBlYXNlLW91dCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogcGxvcHAgNHMgZWFzZS1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoMSksIHN2ZyAjcGx1czpudGgtY2hpbGQoMSksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoMSksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMjQwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0yNDBtcztcclxufVxyXG5cclxuc3ZnICNvdmFsOm50aC1jaGlsZCgyKSwgc3ZnICNwbHVzOm50aC1jaGlsZCgyKSwgc3ZnICNkaWFtb25kOm50aC1jaGlsZCgyKSwgc3ZnICNidWJibGUtcm91bmRlZDpudGgtY2hpbGQoMikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC00ODBtcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTQ4MG1zO1xyXG59XHJcblxyXG5zdmcgI292YWw6bnRoLWNoaWxkKDMpLCBzdmcgI3BsdXM6bnRoLWNoaWxkKDMpLCBzdmcgI2RpYW1vbmQ6bnRoLWNoaWxkKDMpLCBzdmcgI2J1YmJsZS1yb3VuZGVkOm50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTcyMG1zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtNzIwbXM7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoNCksIHN2ZyAjcGx1czpudGgtY2hpbGQoNCksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoNCksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtOTYwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC05NjBtcztcclxufVxyXG5cclxuc3ZnICNvdmFsOm50aC1jaGlsZCg1KSwgc3ZnICNwbHVzOm50aC1jaGlsZCg1KSwgc3ZnICNkaWFtb25kOm50aC1jaGlsZCg1KSwgc3ZnICNidWJibGUtcm91bmRlZDpudGgtY2hpbGQoNSkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xMjAwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xMjAwbXM7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoNiksIHN2ZyAjcGx1czpudGgtY2hpbGQoNiksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoNiksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDYpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMTQ0MG1zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMTQ0MG1zO1xyXG59XHJcblxyXG5zdmcgI292YWw6bnRoLWNoaWxkKDcpLCBzdmcgI3BsdXM6bnRoLWNoaWxkKDcpLCBzdmcgI2RpYW1vbmQ6bnRoLWNoaWxkKDcpLCBzdmcgI2J1YmJsZS1yb3VuZGVkOm50aC1jaGlsZCg3KSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTE2ODBtcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTE2ODBtcztcclxufVxyXG5cclxuc3ZnICNvdmFsOm50aC1jaGlsZCg4KSwgc3ZnICNwbHVzOm50aC1jaGlsZCg4KSwgc3ZnICNkaWFtb25kOm50aC1jaGlsZCg4KSwgc3ZnICNidWJibGUtcm91bmRlZDpudGgtY2hpbGQoOCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xOTIwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xOTIwbXM7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoOSksIHN2ZyAjcGx1czpudGgtY2hpbGQoOSksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoOSksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDkpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMjE2MG1zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMjE2MG1zO1xyXG59XHJcblxyXG5zdmcgI292YWw6bnRoLWNoaWxkKDEwKSwgc3ZnICNwbHVzOm50aC1jaGlsZCgxMCksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoMTApLCBzdmcgI2J1YmJsZS1yb3VuZGVkOm50aC1jaGlsZCgxMCkge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0yNDAwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0yNDAwbXM7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoMTEpLCBzdmcgI3BsdXM6bnRoLWNoaWxkKDExKSwgc3ZnICNkaWFtb25kOm50aC1jaGlsZCgxMSksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDExKSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTI2NDBtcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTI2NDBtcztcclxufVxyXG5cclxuc3ZnICNvdmFsOm50aC1jaGlsZCgxMiksIHN2ZyAjcGx1czpudGgtY2hpbGQoMTIpLCBzdmcgI2RpYW1vbmQ6bnRoLWNoaWxkKDEyKSwgc3ZnICNidWJibGUtcm91bmRlZDpudGgtY2hpbGQoMTIpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMjg4MG1zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMjg4MG1zO1xyXG59XHJcblxyXG5zdmcgI292YWw6bnRoLWNoaWxkKDEzKSwgc3ZnICNwbHVzOm50aC1jaGlsZCgxMyksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoMTMpLCBzdmcgI2J1YmJsZS1yb3VuZGVkOm50aC1jaGlsZCgxMykge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0zMTIwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0zMTIwbXM7XHJcbn1cclxuXHJcbnN2ZyAjb3ZhbDpudGgtY2hpbGQoMTQpLCBzdmcgI3BsdXM6bnRoLWNoaWxkKDE0KSwgc3ZnICNkaWFtb25kOm50aC1jaGlsZCgxNCksIHN2ZyAjYnViYmxlLXJvdW5kZWQ6bnRoLWNoaWxkKDE0KSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTMzNjBtcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTMzNjBtcztcclxufVxyXG5cclxuc3ZnICNvdmFsOm50aC1jaGlsZCgxNSksIHN2ZyAjcGx1czpudGgtY2hpbGQoMTUpLCBzdmcgI2RpYW1vbmQ6bnRoLWNoaWxkKDE1KSwgc3ZnICNidWJibGUtcm91bmRlZDpudGgtY2hpbGQoMTUpIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMzYwMG1zO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMzYwMG1zO1xyXG59XHJcblxyXG5zdmcgI292YWw6bnRoLWNoaWxkKDE2KSwgc3ZnICNwbHVzOm50aC1jaGlsZCgxNiksIHN2ZyAjZGlhbW9uZDpudGgtY2hpbGQoMTYpLCBzdmcgI2J1YmJsZS1yb3VuZGVkOm50aC1jaGlsZCgxNikge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0zODQwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0zODQwbXM7XHJcbn1cclxuXHJcbnN2ZyAjYmctbGluZTpudGgtY2hpbGQoMikge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbnN2ZyAjYmctbGluZTpudGgtY2hpbGQoMykge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxLjI1cmVtIGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxvcHAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBsb3BwIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<ng-container *ngIf=\"cart.totalCartItems > 0; else cartEmpty\">\n  <h2>Shopping Cart</h2>\n  <p>\n    You have {{cart.totalCartItems}} item(s) in your shopping cart !\n  </p>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Title</th>\n        <th>Price</th>\n        <th class=\"text-center\">Quantity</th>\n        <th class=\"text-center\">Total</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <th><img [src]=\"'/Content/Images/Products/' + item.product.Id + '/Main/' + item.product.Image\" class=\" img-responsive table-img\"></th>\n        <td>{{item.product.Name}}</td>\n        <td>{{item.product.Price | currency: 'USD':'symbol'}}</td>\n        <td style=\"width: 200px;\">\n          <product-quantity [product]=\"item.product\"></product-quantity>\n        </td>\n        <td class=\"text-center\">{{(item.quantity * item.product.Price) | currency: 'USD':'symbol'}}</td>\n        <td>\n          <a (click)=\"removeCompleteItem(item.product.Id)\" class=\"btn btn-secondary\">Remove</a>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th><a (click)=\"clearCart()\" class=\"btn btn-danger\">Clear All</a></th>\n        <th></th>\n        <th></th>\n        <th class=\"text-right\">Grand Price:</th>\n        <th class=\"text-center\">{{cart.grandPrice | currency: 'USD':'symbol'}}</th>\n        <th><a routerLink=\"/checkout\" class=\"btn btn-primary\">Checkout</a></th>\n      </tr>\n    </tfoot>\n  </table>\n  <div class=\"alert alert-success \"> {{cart | json}} </div>\n</ng-container>\n<ng-template #cartEmpty>\n  <div class=\"empty-cart\">\n    <svg viewBox=\"656 573 264 182\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <rect id=\"bg-line\" stroke=\"none\" fill-opacity=\"0.2\" fill=\"#FFE100\" fill-rule=\"evenodd\" x=\"656\" y=\"624\" width=\"206\"\n        height=\"38\" rx=\"19\"></rect>\n      <rect id=\"bg-line\" stroke=\"none\" fill-opacity=\"0.2\" fill=\"#FFE100\" fill-rule=\"evenodd\" x=\"692\" y=\"665\" width=\"192\"\n        height=\"29\" rx=\"14.5\"></rect>\n      <rect id=\"bg-line\" stroke=\"none\" fill-opacity=\"0.2\" fill=\"#FFE100\" fill-rule=\"evenodd\" x=\"678\" y=\"696\" width=\"192\"\n        height=\"33\" rx=\"16.5\"></rect>\n      <g id=\"shopping-bag\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(721.000000, 630.000000)\">\n        <polygon id=\"Fill-10\" fill=\"#FFA800\" points=\"4 29 120 29 120 0 4 0\"></polygon>\n        <polygon id=\"Fill-14\" fill=\"#FFE100\" points=\"120 29 120 0 115.75 0 103 12.4285714 115.75 29\"></polygon>\n        <polygon id=\"Fill-15\" fill=\"#FFE100\" points=\"4 29 4 0 8.25 0 21 12.4285714 8.25 29\"></polygon>\n        <polygon id=\"Fill-33\" fill=\"#FFA800\" points=\"110 112 121.573723 109.059187 122 29 110 29\"></polygon>\n        <polygon id=\"Fill-35\" fill-opacity=\"0.5\" fill=\"#FFFFFF\" points=\"2 107.846154 10 112 10 31 2 31\"></polygon>\n        <path d=\"M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112\"\n          id=\"Fill-36\" fill=\"#FFE100\"></path>\n        <path d=\"M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58\"\n          id=\"Stroke-4916\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <polyline id=\"Stroke-4917\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n          points=\"2 41.5 2 29 122 29 122 79\"></polyline>\n        <path d=\"M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50\"\n          id=\"Fill-4918\" fill=\"#000000\"></path>\n        <path d=\"M122,87 L122,89\" id=\"Stroke-4919\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <polygon id=\"Stroke-4922\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n          points=\"4 29 120 29 120 0 4 0\"></polygon>\n        <path d=\"M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46\" id=\"Stroke-4923\"\n          stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45\" id=\"Stroke-4924\" stroke=\"#000000\"\n          stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45\" id=\"Stroke-4925\" stroke=\"#000000\"\n          stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M8,0 L20,12\" id=\"Stroke-4928\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M20,12 L8,29\" id=\"Stroke-4929\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M20,12 L20,29\" id=\"Stroke-4930\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M115,0 L103,12\" id=\"Stroke-4931\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M103,12 L115,29\" id=\"Stroke-4932\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n        <path d=\"M103,12 L103,29\" id=\"Stroke-4933\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n      </g>\n      <g id=\"glow\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(768.000000, 615.000000)\">\n        <rect id=\"Rectangle-2\" fill=\"#000000\" x=\"14\" y=\"0\" width=\"2\" height=\"9\" rx=\"1\"></rect>\n        <rect fill=\"#000000\" transform=\"translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) \"\n          x=\"6.60188267\" y=\"3.14235449\" width=\"2\" height=\"6\" rx=\"1\"></rect>\n        <rect fill=\"#000000\" transform=\"translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) \"\n          x=\"0.54023518\" y=\"6.28207994\" width=\"2\" height=\"3\" rx=\"1\"></rect>\n        <rect fill=\"#000000\" transform=\"translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) \"\n          x=\"28.5402352\" y=\"6.28207994\" width=\"2\" height=\"3\" rx=\"1\"></rect>\n        <rect fill=\"#000000\" transform=\"translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) \"\n          x=\"21.6018827\" y=\"3.14235449\" width=\"2\" height=\"6\" rx=\"1\"></rect>\n      </g>\n      <polygon id=\"plus\" stroke=\"none\" fill=\"#7DBFEB\" fill-rule=\"evenodd\" points=\"689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697\"></polygon>\n      <polygon id=\"plus\" stroke=\"none\" fill=\"#EEE332\" fill-rule=\"evenodd\" points=\"913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961\"></polygon>\n      <polygon id=\"plus\" stroke=\"none\" fill=\"#FFA800\" fill-rule=\"evenodd\" points=\"662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961\"></polygon>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#A5D6D3\" fill-rule=\"evenodd\" cx=\"699.5\" cy=\"579.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#CFC94E\" fill-rule=\"evenodd\" cx=\"712.5\" cy=\"617.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#8CC8C8\" fill-rule=\"evenodd\" cx=\"692.5\" cy=\"738.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#3EC08D\" fill-rule=\"evenodd\" cx=\"884.5\" cy=\"657.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#66739F\" fill-rule=\"evenodd\" cx=\"918.5\" cy=\"681.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#C48C47\" fill-rule=\"evenodd\" cx=\"903.5\" cy=\"723.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"none\" fill=\"#A24C65\" fill-rule=\"evenodd\" cx=\"760.5\" cy=\"587.5\" r=\"1.5\"></circle>\n      <circle id=\"oval\" stroke=\"#66739F\" stroke-width=\"2\" fill=\"none\" cx=\"745\" cy=\"603\" r=\"3\"></circle>\n      <circle id=\"oval\" stroke=\"#EFB549\" stroke-width=\"2\" fill=\"none\" cx=\"716\" cy=\"597\" r=\"3\"></circle>\n      <circle id=\"oval\" stroke=\"#FFE100\" stroke-width=\"2\" fill=\"none\" cx=\"681\" cy=\"751\" r=\"3\"></circle>\n      <circle id=\"oval\" stroke=\"#3CBC83\" stroke-width=\"2\" fill=\"none\" cx=\"896\" cy=\"680\" r=\"3\"></circle>\n      <polygon id=\"diamond\" stroke=\"#C46F82\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"\n        points=\"886 705 889 708 886 711 883 708\"></polygon>\n      <path d=\"M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z\"\n        id=\"bubble-rounded\" stroke=\"#3CBC83\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path>\n    </svg>\n\n    <h3>Your Cart Is Empty ..</h3>\n    <h3><a routerLink=\"/\">Go Shop ..</a></h3>\n  </div>\n</ng-template>\n</div>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService) {
        this.cartService = cartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.Cart;
    };
    ShoppingCartComponent.prototype.removeCompleteItem = function (id) {
        this.cartService.removeCompleteItem(id);
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        this.cartService.clearCart();
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-up/sign-in-up.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sign-in-up/sign-in-up.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tdXAvc2lnbi1pbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-in-up/sign-in-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/sign-in-up/sign-in-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 30px;\">\r\n    <div class=\"col-6\">\r\n      <sign-in></sign-in>\r\n    </div>\r\n\r\n    <div class=\"col-6\">\r\n      <sign-up></sign-up>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sign-in-up/sign-in-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sign-in-up/sign-in-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignInUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInUpComponent", function() { return SignInUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignInUpComponent = /** @class */ (function () {
    function SignInUpComponent() {
    }
    SignInUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sign-in-up',
            template: __webpack_require__(/*! ./sign-in-up.component.html */ "./src/app/sign-in-up/sign-in-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-up.component.css */ "./src/app/sign-in-up/sign-in-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignInUpComponent);
    return SignInUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-up/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-up/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin: 10px auto;\r\n}\r\n\r\n.alert {\r\n    padding: 5px;\r\n    margin-top: 2px;\r\n    font-size: 20px;\r\n}\r\n\r\nlabel {\r\n    font-size: 22px;\r\n}\r\n\r\nimg {\r\n    height: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi11cC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi11cC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in-up/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/sign-in-up/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=login() class=\"col-8\">\n  <div class=\"form-group\">\n    <label for=\"Email\">Email :</label>\n    <input formControlName=\"Email\" type=\"text\" class=\"form-control\">\n    <ng-container *ngIf=\"Email.touched && Email.invalid\">\n      <div *ngIf=\"Email.errors.required\" class=\"alert alert-dark text-center\">this field is\n        required !</div>\n      <div *ngIf=\" Email.errors.cannotContainSpace\" class=\"alert alert-dark text-center\">This field cannot contain\n        spaces ..\n\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Password\">Password :</label>\n    <input formControlName=\"Password\" type=\"Password\" class=\"form-control\">\n    <div *ngIf=\"Password.touched && Password.invalid\" class=\" alert alert-dark text-center\">this field is required !\n    </div>\n  </div>\n  <button class=\"btn btn-primary col-4\" type=\"submit\">Sign In</button>\n  <div class=\"btn offset-2 col-2 \" (click)='facebookLogin()'><img src=\"Content/Images/Other/f.png\"></div>\n  <div class=\"btn col-2 \" (click)='googleLogin()'><img src=\"Content/Images/Other/g.png\"></div>\n  <div class=\"btn col-2 \" (click)='twitterLogin()'><img src=\"/Content/Images/Other/t.png\"></div>\n</form>\n<br>\n<div>\n  <div class=\"alert alert-warning\" *ngIf=\"serverError\">\n    {{serverError}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign-in-up/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sign-in-up/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_common_validators_product_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/validators/product.validators */ "./src/app/common/validators/product.validators.ts");
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user-auth.service */ "./src/app/services/user-auth.service.ts");







var SignInComponent = /** @class */ (function () {
    function SignInComponent(userAuth, route, router) {
        this.userAuth = userAuth;
        this.route = route;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_common_validators_product_validators__WEBPACK_IMPORTED_MODULE_3__["ProductValidators"].cannotContainSpace]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    Object.defineProperty(SignInComponent.prototype, "Email", {
        get: function () {
            return this.form.get('Email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignInComponent.prototype, "Password", {
        get: function () {
            return this.form.get('Password');
        },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.googleLogin = function () {
    };
    SignInComponent.prototype.facebookLogin = function () {
    };
    SignInComponent.prototype.twitterLogin = function () {
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        if (this.form.invalid) {
            this.serverError = 'Fill all fields with valid data';
            return;
        }
        this.userAuth.Login(this.form.value).subscribe(function (response) {
            localStorage.setItem('MW-AccessToken', response.access_token);
            _this.userAuth.getProfile();
            var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl') || '/';
            _this.router.navigateByUrl(returnUrl); // Redirect to a return url
        }, function (err) {
            if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_4__["BadInput"]) {
                _this.serverError = 'Email or Password is Incorect ..'; // Display the error within Form errors
            }
            else
                throw err;
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in-up/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in-up/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_6__["UserAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-up/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-up/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n  margin: 10px auto;\r\n}\r\n\r\n.alert {\r\n  padding: 5px;\r\n  margin-top: 2px;\r\n  font-size: 20px;\r\n}\r\n\r\nlabel {\r\n  font-size: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi11cC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluLXVwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in-up/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/sign-in-up/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=Register(f) class=\"col-8\">\n  <div class=\"form-group\">\n    <label for=\"FullName\">Full Name :</label>\n    <input name=\"FullName\" ngModel #FullName=\"ngModel\" type=\"text\" class=\"form-control\" required minlength=\"2\"\n      maxlength=\"30\">\n    <div class=\"alert alert-dark\" *ngIf=\"FullName.touched && !FullName.valid\">\n      <div *ngIf=\"FullName.errors.required\"> FullName Is Required !</div>\n      <div *ngIf=\"FullName.errors.minlength || FullName.errors.maxlength\"> FullName must be between 2 and 30 characters\n        !</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Email\">Email :</label>\n    <input name=\"Email\" ngModel #Email=\"ngModel\" type=\"text\" class=\"form-control\" required>\n    <div class=\"alert alert-dark\" *ngIf=\"Email.touched && !Email.valid\">\n      <div *ngIf=\"Email.errors.required\"> Email Is Required !</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Password\">Password :</label>\n    <input name=\"Password\" ngModel #Password=\"ngModel\" type=\"password\" required minlength=\"6\" class=\"form-control\">\n    <div class=\"alert alert-dark\" *ngIf=\"Password.touched && !Password.valid\">\n      <div *ngIf=\"Password.errors.required\"> Password Is Required !</div>\n      <div *ngIf=\"Password.errors.minlength\"> At least 6 characters !</div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary col-4\" type=\"submit\">Register</button>\n</form>\n\n<div class=\"alert alert-warning\" *ngIf=\"serverError\">\n  {{serverError}}\n</div>"

/***/ }),

/***/ "./src/app/sign-in-up/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sign-in-up/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/errors/http-errors */ "./src/app/common/errors/http-errors.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-auth.service */ "./src/app/services/user-auth.service.ts");





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userAuth, router) {
        this.userAuth = userAuth;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.Register = function (form) {
        var _this = this;
        if (form.invalid) {
            this.serverError = 'Fill all fields with valid data';
            return;
        }
        this.userAuth.Register(form.value).subscribe(function () {
            _this.userAuth.Login(form.value).subscribe(function (res) {
                localStorage.setItem('MW-AccessToken', res.access_token);
                _this.userAuth.getProfile();
                _this.router.navigate(['/']); // Redirect to a return url
            });
        }, function (err) {
            if (err instanceof src_app_common_errors_http_errors__WEBPACK_IMPORTED_MODULE_2__["BadInput"]) {
                _this.serverError = err.originalError.error.Message; // Display the error within Form errors
            }
            else
                throw err;
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-in-up/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-in-up/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_4__["UserAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"formData alert alert-success justForTesting\">\n    {{ user_profile | json }}\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/user/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-auth.service */ "./src/app/services/user-auth.service.ts");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userAuth) {
        this.userAuth = userAuth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(UserProfileComponent.prototype, "user_profile", {
        get: function () {
            return this.userAuth.user;
        },
        enumerable: true,
        configurable: true
    });
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_auth_service__WEBPACK_IMPORTED_MODULE_2__["UserAuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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

module.exports = __webpack_require__(/*! D:\IMPORTANT\SourceCode\MW-Backend\MW-Backend\MW-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map