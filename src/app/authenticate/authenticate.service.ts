import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticateService {

    constructor(private router: Router) {

    }


    isAuthenticated() {
        // this.router.navigate(['/shipping']);
        return true;
    }





    logout() {

    }
}
