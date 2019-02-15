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
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { SigninGuard } from './guards/signin.guard';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { UnexpectedErrorComponent } from './error-pages/unexpected-error/unexpected-error.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInUpComponent, canActivate: [SigninGuard]  },
  { path: 'sign-up', component: SignInUpComponent, canActivate: [SigninGuard]  },
  { path: 'product/:slug', component: ProductDetailsComponent},
  { path: 'cart', component: ShoppingCartComponent },

  { path: 'dashboard', component: UserProfileComponent, canActivate: [UserAuthGuard] },

  { path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] },

  { path: '404', component: NotFoundComponent },
  { path: 'error', component: UnexpectedErrorComponent },

  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent } // Redirect to a 404 custom page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
