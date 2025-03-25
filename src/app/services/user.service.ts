import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/users';

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl);
  }

}
