import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { OrdersComponent } from './order/orders/orders.component';
import { SupportComponent } from './support/support.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { CouponComponent } from './coupon/coupon.component';
import { ReviewsComponent } from './user/reviews/reviews.component';
import { PagesEditComponent } from './pages-edit/pages-edit.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/404', component: NotFoundComponent },
  { path: 'admin/error', component: UnexpectedErrorComponent },

  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent , canActivate: [AdminAuthGuard] },
      { path: 'admin', component: ProductFormComponent , canActivate: [AdminAuthGuard] },
      { path: 'admin/products', component: ProductListComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/product-form', component: ProductFormComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/orders', component: OrdersComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/support', component: SupportComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/users', component: UsersListComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/coupons', component: CouponComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/user-reviews', component: ReviewsComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/edit-pages', component: PagesEditComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/tickets', component: TicketsComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/profile', component: ProfileComponent, canActivate: [AdminAuthGuard] },
      { path: 'admin/settings', component: SettingsComponent, canActivate: [AdminAuthGuard] },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
