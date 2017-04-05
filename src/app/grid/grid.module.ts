import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GridComponent } from './component/grid.component';
import { GridService } from './services/grid.service';
//import { ModalModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        //ModalModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        GridService
    ],
    declarations: [
        GridComponent
    ],
    exports: [
    ]
})
export class GridModule {
    public static forRoot() {
        return {
            ngModule: GridModule,
            providers: [
                GridService
            ]
        };
    }
}

export {
    GridService
}
