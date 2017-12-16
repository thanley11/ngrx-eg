import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { SettingsComponent } from '../settings/component/settings.component';
import { WelcomeComponent } from '../welcome/component/welcome.component';
import { AdminComponent } from '../admin/component/admin.component';
import { NotAuthorizedComponent } from '../not-authorized/not-authorized.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { NotFoundPageComponent } from '../not-found/not-found.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
   {
    path: '',
    // redirectTo: '/',
    component: WelcomeComponent
  },
  // {
  //   path: 'grid',
  //   // redirectTo: '/',
  //   component: GridComponent
  // },
  {
    path: 'settings',
    // redirectTo: '/',
    component: SettingsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'notauthorized',
    component: NotAuthorizedComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
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
