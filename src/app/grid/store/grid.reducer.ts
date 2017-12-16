import * as grid from './grid.actions';
import { Settings } from '../settings.model';

export interface State {
  settings: Settings[];
}

export const initialState: State = {
  settings: [],
};

export function reducer(state = initialState, action: grid.Actions): State {
  switch (action.type) {
    case grid.ActionTypes.LOAD_SUCCESS :
      return {
        settings : action.payload
      }
    default:
      return state;
  }
}

//export const getShowSidenav = (state: State) => state.showSidenav;

