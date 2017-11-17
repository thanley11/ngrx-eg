import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './component/welcome.component';
import { AuthenticationService } from '../core/auth/auth.service';


@NgModule({
  imports: [
        CommonModule,
         FormsModule
    ],
  declarations: [
          WelcomeComponent
      ],
      exports:  [
          WelcomeComponent
      ],
      providers: [
          AuthenticationService
      ]
})
export class WelcomeModule { }

