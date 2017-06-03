import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';
import { ShippingSearchComponent } from './shipping-search/shipping-search.component';
import { ShippingListComponent } from './shipping-list/shipping-list.component';

@NgModule({
    declarations: [ShippingComponent, ShippingListComponent, ShippingSearchComponent],
    imports: [CommonModule, ShippingRoutingModule],
})

export class ShippingModule {

}