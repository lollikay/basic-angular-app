import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './actions';
import { LoadingState } from '../../../shared/models/loading-state.model';
import { initialState, UsersState } from './state';

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state): UsersState => ({
    ...state,
    users: [],
    loadingState: LoadingState.Loading,
  })),
  on(loadUsersSuccess, (state, { users }): UsersState => ({
    ...state,
    users,
    loadingState: LoadingState.Loaded,
  })),
  on(loadUsersFailure, (state, { error }): UsersState => ({
    ...state,
    error,
    loadingState: LoadingState.Error,
  }))
);