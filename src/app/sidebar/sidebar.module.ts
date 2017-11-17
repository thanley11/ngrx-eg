import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from '../routing/routing.module';

import { SidebarComponent } from './component/sidebar.component';
import { SidebarService } from './services/sidebar.service';
import { AppMaterialModule } from '../core/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    providers: [
        SidebarService
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {
    public static forRoot() {
        return {
            ngModule: SidebarModule,
            providers: [
                SidebarService
            ]
        };
    }
}

export {
    SidebarService
}
