import { ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { compose, createSelector } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import * as fromSidebar from '../../sidebar/store/sidebar.reducer';

export interface AppState {
  sidebar: fromSidebar.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  sidebar: fromSidebar.reducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function metaReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}


/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *     constructor(state$: Observable<State>) {
 *       this.booksState$ = state$.select(getBooksState);
 *     }
 * }
 * ```
 */

/**
 * Layout Reducers
 */
export const getSidebarState = (state: AppState) => state.sidebar;

export const getShowSidenav = createSelector(getSidebarState, fromSidebar.getShowSidenav);

