import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { SigninGuard } from './guards/signin.guard';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';
import { PaymentComponent } from './payment/payment.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInUpComponent, canActivate: [SigninGuard] },
  { path: 'sign-up', component: SignInUpComponent, canActivate: [SigninGuard] },

  { path: '404', component: NotFoundComponent },
  { path: 'error', component: UnexpectedErrorComponent },

  {
    path: '', component: NavigationComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: ShoppingCartComponent, },
      { path: 'product/:slug', component: ProductDetailsComponent },
      { path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard, UserAuthGuard] },
      { path: 'payment', component: PaymentComponent, canActivate: [CheckoutGuard, UserAuthGuard] },
      { path: 'dashboard', component: UserProfileComponent, canActivate: [UserAuthGuard] },
      { path: '**', redirectTo: '/' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
