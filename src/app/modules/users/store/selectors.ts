import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './state';

export const selectUsersState = createFeatureSelector<UsersState>('users');
export const selectAllUsers = createSelector(selectUsersState, state => state.users);
export const selectUsersLoadingState = createSelector(
  selectUsersState, state => state.loadingState
);
export const selectUsersError = createSelector(selectUsersState, state => state.error);
export const selectIsLoading = createSelector(
  selectUsersLoadingState,
  loadingState => loadingState === 'Loading'
);
export const selectIsLoaded = createSelector(
  selectUsersLoadingState,
  loadingState => loadingState === 'Loaded'
);