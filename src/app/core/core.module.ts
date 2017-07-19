import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './metaReducer/index';
import { initialState } from '../sidebar/store/sidebar.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      initialState: {
        sidebar : {
          showSidenav : false
        }
      }
    }),
    MaterialModule,
    SharedModule,
    NoopAnimationsModule
  ],
  declarations: [
      ],
  providers: [
      ],
  bootstrap: [
  ]
})
export class CoreModule { }

