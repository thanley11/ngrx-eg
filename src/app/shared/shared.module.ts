import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../core/material/material.module';


//Add effects here
@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
      ],
  providers: [
      ],
  bootstrap: [
  ],
  exports:  [
       CommonModule
  ]
})
export class SharedModule { }

