import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as gridActions from '../store/grid.actions';
import * as fromRoot from '../../core/metaReducer/index';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-grid',
  templateUrl: './grid.component.html',
  styles: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Output() closeDownload= new EventEmitter<Array<string>>();
  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new gridActions.GetSettings());
  }
}
