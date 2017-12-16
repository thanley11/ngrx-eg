import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import * as grid from './settings.actions';
import { SettingsService } from '../services/settings.service';
import { Settings } from '../settings.model';


@Injectable()
export class SettingsEffects {
   @Effect()
  loadSettings$: Observable<Action> = this.actions$
    .ofType(grid.ActionTypes.GET_SETTINGS)
    .switchMap(() => {
        return this.settingsService.getSettings()
        .map((settings: Settings[]) => new grid.LoadSettings(settings))
        .catch(error => of(new grid.LoadFail(error)))
    }
);

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService,
  ) {}
}
