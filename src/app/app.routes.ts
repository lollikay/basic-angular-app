import { Routes } from '@angular/router';
import { UsersPage } from './modules/users/pages/users/users';

export const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    children: [],
  }
];
