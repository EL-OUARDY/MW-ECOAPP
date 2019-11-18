import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private adminAuth: AdminAuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('NoAuth') === 'true')
            return next.handle(req.clone());

        const token = localStorage.getItem('MWToken') || this.adminAuth._TOKEN ;
        
        if ( token != null) {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token) 
            });
            return next.handle(clonedreq);
        } else {
            this.router.navigate(['admin/login']);
        }
    }
}