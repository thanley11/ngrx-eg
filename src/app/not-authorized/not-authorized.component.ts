import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eg-unauth',
  template: `
   <md-card>
      <md-card-title>Not Authorized</md-card-title>
      <md-card-content>
        <p>You are not authorized to view this page</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">Take Me Home</button>
      </md-card-actions>
    </md-card>

  `
})
export class NotAuthorizedComponent {
    constructor() { }
    // onSubmit(f: NgForm) {
    //   // (ngSubmit)="f.form.valid && login()"
    //   // (ngSubmit)="onSubmit(f)"
    //   console.log(f.form.valid);  // { first: '', last: '' }
    //   console.log(f.valid);  // false
    // }
}
