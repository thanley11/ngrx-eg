import { NgModule, } from '@angular/core';
import { WelcomeComponent } from './component/welcome.component';

//Add effects here
@NgModule({
  declarations: [
      WelcomeComponent
      ],
  exports:  [
       WelcomeComponent
  ]
})
export class WelcomeModule { }

