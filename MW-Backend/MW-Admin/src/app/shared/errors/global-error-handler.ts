import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor() { }

    handleError(error: Response) {
        if (error.status === 401) { // either unRegistred or Token has Expired
            localStorage.removeItem('MW-AccessToken');
            window.location.href = '/admin/sign-in';
            return;
        }

        if (error.status === 404) {
            window.location.href = '/admin/404';
            return;
        }

        window.location.href = '/admin/error';
    }
}