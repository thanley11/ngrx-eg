import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eg-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomeComponent {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private auth: AuthenticationService) { }

    login() {
        this.loading = true;
        this.auth.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/admin']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
    
    loggedIn() {
        return this.auth.loggedIn();
    }
}
