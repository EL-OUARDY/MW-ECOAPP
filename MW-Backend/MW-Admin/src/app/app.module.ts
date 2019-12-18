import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
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

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { AdminUploadService } from './services/admin-upload.service';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AdminAuthService } from './services/admin-auth.service';
import { AuthInterceptor } from './shared/auth-interceptor';
import { IteratePipe } from './shared/pipes/iterate.pipe';
import { TableFilterComponent } from './shared/filter-components/table-filter/table-filter.component';
import { InfosDialogComponent } from './shared/dialogs/infos/infos-dialog.component';
import { MaterialModule } from './shared/modules/material.module';
import { DataViewerComponent } from './shared/data-viewer/data-viewer.component';
import { VariantComponent } from './product/variant/variant.component';

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
    ConfirmDialogComponent,
    LayoutComponent,
    LoginComponent,
    IteratePipe,
    TableFilterComponent,
    InfosDialogComponent,
    DataViewerComponent,
    VariantComponent,
  ],
  imports: [
    CommonModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgScrollbarModule,

    MaterialModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
    AdminAuthService,
    AdminProductService,
    AdminUploadService,

    // { provide: ErrorHandler, useClass: AppErrorHandler },

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent, 
    InfosDialogComponent,
    VariantComponent
  ]
})
export class AppModule { }
