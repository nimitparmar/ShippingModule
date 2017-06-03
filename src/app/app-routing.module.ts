import { AuthenticateService } from './authenticate/authenticate.service';
import { AuthenticateGuard } from './authenticate/authenticate-guard.service';
import { RouterStateSnapshot } from '@angular/router/src';
import { ActivatedRouteSnapshot } from '@angular/router/src';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HomeComponent } from './home.component';

import { ShippingRoutingModule } from './shipping/shipping-routing.module';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shipping', component: ShippingComponent, canActivate: [AuthenticateGuard] },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [
        {
            provide: 'AuthenticateGuard',
            useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
        }
    ]
})

export class AppRoutingModule {

}