import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { ModalModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SidebarComponent } from './component/sidebar.component';
import { SidebarService } from './services/sidebar.service';

@NgModule({
    imports: [
        CommonModule,
        //ModalModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        SidebarService
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
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
