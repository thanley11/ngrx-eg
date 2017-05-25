import { NgModule, } from '@angular/core';
import { AdminComponent } from './component/admin.component';

@NgModule({
  declarations: [
      AdminComponent
      ],
  exports:  [
       AdminComponent
  ]
})
export class AdminModule { }

