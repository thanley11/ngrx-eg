import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eg-unauth',
  template: `
   <mat-card>
      <mat-card-title>Not Authorized</mat-card-title>
      <mat-card-content>
        <p>You are not authorized to view this page</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">Take Me Home</button>
      </mat-card-actions>
    </mat-card>

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
