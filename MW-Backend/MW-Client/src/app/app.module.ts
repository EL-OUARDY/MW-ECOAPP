import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ScSummaryComponent } from './shopping-cart/sc-summary/sc-summary.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductQuantityComponent } from './product/product-quantity/product-quantity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminProductService } from './services/admin/product/admin-product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    SignInUpComponent,
    CheckoutComponent,
    ScSummaryComponent,
    AddProductComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    NgbDropdownModule,

  ],
  providers: [
    AdminProductService,

    ProductService,
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
