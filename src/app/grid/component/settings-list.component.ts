import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/grid.actions';
import * as fromRoot from '../../core/metaReducer/index';
import { Settings } from '../settings.model';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-settings-list',
  templateUrl: './settings-list.component.html',
  styles: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SettingsListComponent {
 @Input() settings: Settings;
 constructor(){}
}
