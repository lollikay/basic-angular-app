import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './actions';
import { UsersService } from '../services/user.service';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);
  
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map(response => loadUsersSuccess({ users: response.users })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}