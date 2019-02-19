import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScSummaryComponent } from './shopping-cart/sc-summary/sc-summary.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductQuantityComponent } from './product/product-quantity/product-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './sign-in-up/sign-in/sign-in.component';
import { SignUpComponent } from './sign-in-up/sign-up/sign-up.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AppErrorHandler } from './common/errors/global-error-handler';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
import { AuthInterceptor } from './common/auth-interceptor';
import { AdminProductService } from './admin/services/admin-product.service';
import { ProductHistoryComponent } from './admin/product-history/product-history.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    SignInUpComponent,
    CheckoutComponent,
    ScSummaryComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ProductDetailsComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    NotFoundComponent,
    UnexpectedErrorComponent,
    ProductFormComponent,
    ProductHistoryComponent
  ],
  imports: [
    CommonModule,
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbDropdownModule,


    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
    AdminProductService,

    ProductService,
    CartService,
    
    // { provide: ErrorHandler, useClass: AppErrorHandler },
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
