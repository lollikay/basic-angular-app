import { routerReducer } from "@ngrx/router-store";
import { usersReducer } from "../modules/users/store/reducers";

export const appReducers = {
  router: routerReducer,
  users: usersReducer,
}