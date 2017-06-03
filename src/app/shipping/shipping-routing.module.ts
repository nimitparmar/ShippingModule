
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShippingComponent } from './shipping.component';
import { ShippingSearchComponent } from './shipping-search/shipping-search.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '/shipping', component: ShippingComponent }//,
            //{ path: '/shippingsearch', component: ShippingSearchComponent }
        ])
    ],
    exports: [RouterModule]
})

export class ShippingRoutingModule {

}