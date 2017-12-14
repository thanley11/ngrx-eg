import * as grid from './grid.actions';


export interface State {
  settings: Object[];
}

export const initialState: State = {
  settings: [],
};

export function reducer(state = initialState, action: grid.Actions): State {
  switch (action.type) {
    case grid.ActionTypes.GET_SETTINGS :
      return state; 
    default:
      return state;
  }
}

//export const getShowSidenav = (state: State) => state.showSidenav;

