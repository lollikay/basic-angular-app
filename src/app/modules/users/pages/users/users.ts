import { AppState } from './../../../../ngrx/state';
import { Component, inject, model, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { loadUsers } from '../../store/actions';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'users-page',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class UsersPage implements OnInit {
  store = inject(Store<AppState>);

  users = this.store.selectSignal(selectAllUsers);
  searchTerm = model<string>('');

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  searchUsers() {

  }
}
