import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor() { }

    handleError(error: Response) {
        if (error.status === 401) { // either unRegistred or Token has Expired
            localStorage.removeItem('MW-AccessToken');
            window.location.href = '/sign-in';
            return;
        }

        if (error.status === 404) {
            window.location.href = '/404';
            return;
        }

        // window.location.href = '/error';
    }
}