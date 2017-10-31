import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GridComponent } from './component/grid.component';
import { GridService } from './services/grid.service';
import { AppMaterialModule } from '../core/material/material.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AppMaterialModule
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
