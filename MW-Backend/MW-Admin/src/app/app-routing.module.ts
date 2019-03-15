import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin-guard.guard';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { OrdersComponent } from './order/orders/orders.component';

const routes: Routes = [

  { path: 'admin', component: OrdersComponent, canActivate: [AdminGuard] },
  { path: 'admin/add-product', component: ProductFormComponent, canActivate: [AdminGuard] },
  { path: 'admin/orders', component: OrdersComponent, canActivate: [AdminGuard] },

  { path: '404', component: NotFoundComponent },
  { path: 'error', component: UnexpectedErrorComponent },
  { path: '', component: ProductFormComponent, },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
