import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { compose, createSelector } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import * as fromSidebar from '../../sidebar/store/sidebar.reducer';
import * as fromSettings from '../../settings/store/settings.reducer';

export interface AppState {
  sidebar: fromSidebar.State;
  settings: fromSettings.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<AppState> = {
  sidebar: fromSidebar.reducer,
  settings: fromSettings.reducer
};

// const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export const metaReducer: MetaReducer<AppState>[] = !environment.production
? [storeFreeze]
: [];

// export function metaReducer(state: any, action: any) {
//   if (environment.production) {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }


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
export const getSettingsState = (state: AppState) => state.settings;

export const getShowSidenav = createSelector(getSidebarState, fromSidebar.getShowSidenav);

export const getSettings = createSelector(getSettingsState, fromSettings.getSettings);