import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { routes } from './app.routes';


@NgModule({
  imports: [
    // Router
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
