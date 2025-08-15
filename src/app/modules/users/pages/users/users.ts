import { AppState } from './../../../../ngrx/state';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-page',
  imports: [
    CommonModule,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class UsersPage {
  store = inject(Store<AppState>);

  users = this.store.selectSignal(selectAllUsers);
}
