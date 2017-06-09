import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eg-unauth',
  template: `
  <div class="container">
    <h2>Not authorized</h2>
    <div>You are not authorized to view this page</div>
    </div>

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
