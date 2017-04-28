import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

//Add effects here 
@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
      ],
  providers: [
      ],
  bootstrap: [
  ],
  exports:  [ 
       CommonModule, 
       MaterialModule 
  ]
})
export class SharedModule { }

