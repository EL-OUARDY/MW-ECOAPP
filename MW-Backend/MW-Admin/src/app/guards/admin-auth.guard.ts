import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private adminAuth: AdminAuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const admin = this.adminAuth.admin;
    const token = localStorage.getItem("MWToken");
    if (admin || token) {
      return true;
    }
    this.router.navigate(['admin/login'], { queryParams: { returnUrl: state.url } });
  }
}
