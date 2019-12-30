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
import { NotLoggedGuard } from './guards/not-logged.guard';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: "admin/login", component: LoginComponent, canActivate: [NotLoggedGuard]},
  { path: "admin/404", component: NotFoundComponent },
  { path: "admin/error", component: UnexpectedErrorComponent },

  {
    path: "",
    component: LayoutComponent, canActivate: [AdminAuthGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "admin", component: CategoriesComponent }, // HOME
      { path: "admin/dashboard", component: DashboardComponent },
      { path: "admin/products", component: ProductListComponent },
      { path: "admin/product-form", component: ProductFormComponent },
      { path: "admin/orders", component: OrdersComponent },
      { path: "admin/support", component: SupportComponent },
      { path: "admin/users", component: UsersListComponent },
      { path: "admin/coupons", component: CouponComponent },
      { path: "admin/user-reviews", component: ReviewsComponent },
      { path: "admin/edit-pages", component: PagesEditComponent },
      { path: "admin/tickets", component: TicketsComponent },
      { path: "admin/profile", component: ProfileComponent },
      { path: "admin/settings", component: SettingsComponent },
      { path: "**", redirectTo: "" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
