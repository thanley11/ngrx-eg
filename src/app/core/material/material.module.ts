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
  MdToolbarModule,
  MatCardModule
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
    MdToolbarModule,
    MatCardModule
  ]
})

export class AppMaterialModule { }
