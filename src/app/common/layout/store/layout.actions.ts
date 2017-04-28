import { Action } from '@ngrx/store';
import { type } from '../../utils/typeCheck';

export const ActionTypes = {
  TOGGLE_SIDENAV:  type('[Layout] Toggle Sidenav')
};

export class ToggleSidenavAction implements Action {
  type = ActionTypes.TOGGLE_SIDENAV;
}

export type Actions
  = ToggleSidenavAction;
