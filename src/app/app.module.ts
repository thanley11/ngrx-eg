import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GridModule } from './grid/grid.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LayoutComponent } from './common/layout/component/layout.component';

import { metaReducer } from './common/reducer/index';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    GridModule,
    SidebarModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(metaReducer)
    //LayoutModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
