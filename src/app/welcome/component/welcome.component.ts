import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eg-welcome',
  template: `
  <div class="container">
    <div class="alert alert-info">
        Username: test<br />
        Password: test
    </div>
    <h2>Login</h2>
    <form name="form" (ngSubmit)="f.form.valid && login()"  #f="ngForm" novalidate>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !username.valid }">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />
        </div>
        <div class="form-group" [ngClass]="{ 'has-error': f.submitted && !password.valid }">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />
        </div>
        <div class="form-group">
            <button [disabled]="loading" class="btn btn-primary">Login</button>
        </div>
        <div *ngIf="error" class="alert alert-danger">{{error}}</div>
    </form>
</div>

  `
})
export class WelcomeComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();
    }

    // onSubmit(f: NgForm) {
    //   // (ngSubmit)="f.form.valid && login()"
    //   // (ngSubmit)="onSubmit(f)"
    //   console.log(f.form.valid);  // { first: '', last: '' }
    //   console.log(f.valid);  // false
    // }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/admin']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
