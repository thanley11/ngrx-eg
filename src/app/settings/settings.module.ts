import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SettingsComponent } from './component/settings.component';
import { SettingsService } from './services/settings.service';
import { SettingsListComponent } from './component/settings-list.component';
import { AppMaterialModule } from '../core/material/material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './store/settings.effects';

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
        SettingsComponent,
        SettingsListComponent
    ],
    exports: [
    ]
})
export class SettingsModule {
    public static forRoot() {
        return {
            ngModule: SettingsModule,
            providers: [
                SettingsService
            ]
        };
    }
}

export {
    SettingsService
}
