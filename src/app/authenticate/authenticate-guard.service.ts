import { AuthenticateService } from './authenticate.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticateGuard implements CanActivate {

    constructor(private authenticateService: AuthenticateService) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authenticateService.isAuthenticated();
    }

}