import { Component } from '@angular/core';
import { AuthenticateService } from './../authenticate/authenticate.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private authenticateService: AuthenticateService) {

    }

    // onLogOff() {
    //     this.authenticateService.logout();
    // }
}