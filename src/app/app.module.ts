import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShippingSearchComponent } from './shipping/shipping-search/shipping-search.component';
import { ShippingListComponent } from './shipping/shipping-list/shipping-list.component';
import { LoginComponent } from './login/login.component';
import { AuthenticateService } from './authenticate/authenticate.service';
import { AuthenticateGuard } from './authenticate/authenticate-guard.service';

@NgModule({
    declarations: [AppComponent, HomeComponent, ShippingComponent, LoginComponent, ShippingSearchComponent, ShippingListComponent, HeaderComponent],
    providers: [AuthenticateService, AuthenticateGuard],
    imports: [AppRoutingModule, BrowserModule],
    bootstrap: [AppComponent]
})


export class AppModule {

}