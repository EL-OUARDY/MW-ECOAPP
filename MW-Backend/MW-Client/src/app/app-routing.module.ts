import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminGuard } from './guards/admin-guard.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SignUpComponent } from './sign-in-up/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInUpComponent },
  { path: 'sign-up', component: SignInUpComponent },
  { path: 'product/:slug', component: ProductDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },

  { path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] },

  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent } // Redirect to a 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
