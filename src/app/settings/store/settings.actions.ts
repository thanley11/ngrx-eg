import { Action } from '@ngrx/store';
import { type } from '../../shared/utils/typeCheck';
import { Settings } from '../settings.model'

export const ActionTypes = {
  GET_SETTINGS:  type('[Grid] Get Settings'),
  LOAD_SUCCESS:  type('[Grid] Load Settings Sucess'),
  LOAD_FAIL:  type('[Grid] Load Settings Fail')
};

export class GetSettings implements Action {
  type = ActionTypes.GET_SETTINGS;
  constructor(public payload: any = null) { }
}

export class LoadSettings implements Action {
  type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: Settings[]) {}
}
export class LoadFail implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) {}
}

export type Actions
  = GetSettings |
    LoadSettings | 
    LoadFail
