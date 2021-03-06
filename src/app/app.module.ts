import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { MockBackend } from '@angular/http/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { SettingsModule } from './settings/settings.module';
import { WelcomeModule } from './welcome/welcome.module';
import { CoreModule } from './core/core.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NotFoundPageComponent} from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './core/guards/auth.guard';
import { fakeBackendProvider } from './core/helpers/fake-backend';
import { AppMaterialModule } from './core/material/material.module';
import { ErrorInterceptor } from './core/errorhandler/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NotAuthorizedComponent,
    NotFoundPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    SettingsModule,
    RoutingModule,
    SidebarModule,
    WelcomeModule,
    AdminModule,
    AppMaterialModule,
    EffectsModule.forRoot([]),
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
      AuthGuard,
      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true,
      }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }