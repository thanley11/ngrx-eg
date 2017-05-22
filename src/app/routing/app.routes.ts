import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { GridComponent } from '../grid/component/grid.component';
import { WelcomeComponent } from '../welcome/component/welcome.component';
//import { AuthGuard } from '../core/services';

export const routes: Routes = [
   {
    path: '',
    // redirectTo: '/',
    component: WelcomeComponent
  },
  {
    path: 'grid',
    // redirectTo: '/',
    component: GridComponent
  },
 {
    path: 'admin',
    component: AdminComponent
  },
  //{
    //path: 'my-questions',
    //loadChildren: 'app/myQuestions/my-questions.module#MyQuestionsModule',
    //canActivate: [AuthGuard]
  //},
  //{
    //path: 'admin',
    //loadChildren: 'app/admin/admin.module#AdminModule',
    //canActivate: [AuthGuard],
    //canLoad: [AuthGuard]
  //}
];
