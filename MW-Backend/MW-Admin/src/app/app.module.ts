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
import { SupportComponent } from './support/support.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { CouponComponent } from './coupon/coupon.component';
import { ReviewsComponent } from './user/reviews/reviews.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

import { MatSelectModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatDialogModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

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
    SupportComponent,
    ProductListComponent,
    DashboardComponent,
    UsersListComponent,
    CouponComponent,
    ReviewsComponent,
    PagesEditComponent,
    TicketsComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    CdkTableModule,
    
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
