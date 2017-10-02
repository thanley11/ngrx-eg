import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { reducers } from './metaReducer/index';
import { initialState } from '../sidebar/store/sidebar.reducer';
import { AppMaterialModule } from '../core/material/material.module';


@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      initialState: {
        sidebar : {
          showSidenav : false
        }
      }
    }),
    SharedModule,
    NoopAnimationsModule,
    AppMaterialModule
  ],
  declarations: [
      ],
  providers: [
      ],
  bootstrap: [
  ]
})
export class CoreModule { }

