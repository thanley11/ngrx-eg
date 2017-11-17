import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
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
    HttpModule,
    CoreModule,
    SharedModule,
    GridModule,
    RoutingModule,
    SidebarModule,
    WelcomeModule,
    AdminModule,
    AppMaterialModule
  ],
  providers: [
      AuthGuard,
      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
