import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GridComponent } from './component/grid.component';
import { SettingsService } from './services/grid.service';
import { SettingsListComponent } from './component/settings-list.component';
import { AppMaterialModule } from '../core/material/material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './store/grid.effects';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AppMaterialModule,
        EffectsModule.forFeature([SettingsEffects]),
    ],
    providers: [
        SettingsService 
    ],
    declarations: [
        GridComponent,
        SettingsListComponent
    ],
    exports: [
    ]
})
export class GridModule {
    public static forRoot() {
        return {
            ngModule: GridModule,
            providers: [
                SettingsService
            ]
        };
    }
}

export {
    SettingsService
}
