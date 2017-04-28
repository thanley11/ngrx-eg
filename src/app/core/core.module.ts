import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@angular/material';
import { SharedModule } from  '../shared/shared.module';
import { metaReducer } from './metaReducer/index';

//Add effects here 
@NgModule({
  imports: [
    StoreModule.provideStore(metaReducer),
    MaterialModule.forRoot(),
    SharedModule
  ],
  declarations: [
      ],
  providers: [
      ],
  bootstrap: [
  ]
})
export class CoreModule { }

