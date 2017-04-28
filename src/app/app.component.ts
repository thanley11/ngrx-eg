import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './core/metaReducer/index';
import * as sidebarActions from './sidebar/store/sidebar.actions';


@Component({
  selector: 'eg-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',

})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.showSidenav$ = store.select(fromRoot.getShowSidenav);
  }

  toggleSidenav() {
    this.store.dispatch(new sidebarActions.ToggleSidenavAction());
  }
}

