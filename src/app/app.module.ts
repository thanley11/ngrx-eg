import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { WelcomeModule } from './welcome/welcome.module';
import { CoreModule } from './core/core.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    GridModule,
    RoutingModule,
    SidebarModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
