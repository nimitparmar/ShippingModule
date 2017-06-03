
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    ngOnInit() {

    }

    allowLogin = false;

    constructor(private router: Router) {

    }

    onUserNameEntered(event) {
        //login button enable disable
        if (event.target.value != undefined && event.target.value != null && event.target.value != '') {
            this.allowLogin = true;
        }
        else {
            this.allowLogin = false;
        }
    }

    onClickLoadSearch() {
        //Login check login and if true then load search page.
        this.router.navigate(['shipping']);
    }
}