import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { JwtModule   } from '@auth0/angular-jwt';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
  JwtModule.forRoot({
    config: {
      tokenGetter: () => {
        return localStorage.getItem('accessToken');
      },
      whitelistedDomains: ['localhost:80']
    }
  })
],
providers: [
  AuthGuard
]
})
export class AuthModule {}