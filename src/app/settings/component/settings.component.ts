import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/settings.actions';
import * as fromRoot from '../../core/metaReducer/index';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-grid',
  template:`
  <eg-settings-list
    [settings]="settings">
  </eg-settings-list>
 `,
  styles: ['./grid.component.css']
})
export class SettingsComponent implements OnInit {
  public settings;
  constructor(private store: Store<fromRoot.AppState>) { 
    this.settings = store.select('settings'); 
  }

  ngOnInit() {
    this.store.dispatch(new gridActions.GetSettings());
  }
}
