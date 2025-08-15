import { LoadingState } from "../../../shared/models/loading-state.model";
import { User } from "../models/user.model";

export interface UsersState {
  users: User[];
  loadingState: LoadingState;
  error: string | null;
}

export const initialState: UsersState = {
  users: [],
  loadingState: LoadingState.Init,
  error: null,
};