import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin-guard.guard';
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

const routes: Routes = [

  { path: 'admin', component: ProductFormComponent , canActivate: [AdminGuard] },
  { path: 'admin/products', component: ProductListComponent, canActivate: [AdminGuard] },
  { path: 'admin/add-product', component: ProductFormComponent, canActivate: [AdminGuard] },
  { path: 'admin/orders', component: OrdersComponent, canActivate: [AdminGuard] },
  { path: 'admin/support', component: SupportComponent, canActivate: [AdminGuard] },
  { path: 'admin/users', component: UsersListComponent, canActivate: [AdminGuard] },
  { path: 'admin/coupons', component: CouponComponent, canActivate: [AdminGuard] },
  { path: 'admin/user-reviews', component: ReviewsComponent, canActivate: [AdminGuard] },
  { path: 'admin/edit-pages', component: PagesEditComponent, canActivate: [AdminGuard] },
  { path: 'admin/tickets', component: TicketsComponent, canActivate: [AdminGuard] },
  { path: 'admin/profile', component: ProfileComponent, canActivate: [AdminGuard] },
  { path: 'admin/settings', component: SettingsComponent, canActivate: [AdminGuard] },

  { path: '404', component: NotFoundComponent },
  { path: 'error', component: UnexpectedErrorComponent },
  { path: '', component: DashboardComponent },
  // { path: '**', redirectTo: 'admin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
