import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './common/reducer/index';
import * as layout from './common/layout/store/layout.actions';


@Component({
  selector: 'eg-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',

})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = store.select(fromRoot.getShowSidenav);
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSidenavAction());
  }
}

