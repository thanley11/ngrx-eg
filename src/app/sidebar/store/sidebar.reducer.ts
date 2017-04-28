import * as sidebar from './sidebar.actions';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: sidebar.Actions): State {
  switch (action.type) {
    case sidebar.ActionTypes.TOGGLE_SIDENAV:
      return {
        showSidenav: !state.showSidenav
      };
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;

