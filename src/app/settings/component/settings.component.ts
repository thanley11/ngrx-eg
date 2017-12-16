import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/settings.actions';
import * as fromRoot from '../../core/metaReducer/index';
import { Settings } from '../settings.model';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-grid',
  template:`
  <eg-settings-list
    [settings]="settings$ | async">
  </eg-settings-list>
 `,
  styles: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
  settings$: Observable<Settings>;
  constructor(private store: Store<fromRoot.AppState>) { 
    this.settings$ = store.select(fromRoot.getSettings);
  }

  ngOnInit() {
    this.store.dispatch(new gridActions.GetSettings());
  }
}
