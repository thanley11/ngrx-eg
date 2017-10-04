import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdToolbarModule
  ]
})

export class AppMaterialModule { }