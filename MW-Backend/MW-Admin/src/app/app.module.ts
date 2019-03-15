import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AppErrorHandler } from './common/errors/global-error-handler';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
import { AuthInterceptor } from './common/auth-interceptor';
import { ProductHistoryComponent } from './product/product-history/product-history.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { AdminProductService } from './services/admin-product.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './order/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductHistoryComponent,

    NotFoundComponent,
    UnexpectedErrorComponent,
    SidebarComponent,
    HeaderComponent,
    OrdersComponent,
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

    // { provide: ErrorHandler, useClass: AppErrorHandler },

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
