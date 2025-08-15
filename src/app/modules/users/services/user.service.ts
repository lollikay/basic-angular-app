import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedUsersResponse } from '../models/users-dto.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  http = inject(HttpClient);

  baseUrl = 'https://dummyjson.com/users';

  getUsers(): Observable<PaginatedUsersResponse> {
    return this.http.get<PaginatedUsersResponse>(`${this.baseUrl}?limit=20&skip=0`);
  }
}