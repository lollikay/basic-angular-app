import { UsersState } from "../modules/users/store/state";
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState,
  users: UsersState;
}