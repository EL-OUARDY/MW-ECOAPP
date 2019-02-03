import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInUpComponent },
  { path: 'cart', component: ShoppingCartComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
