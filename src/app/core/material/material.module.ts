import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule
  ]
})

export class AppMaterialModule { }