import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../component/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8989/user';

  constructor(private http: HttpClient) {}

  /** Fetch all users */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }

  /** Add a new user */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add`, user);
  }

  /** Get a user by ID */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  /** Update a user by ID */
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }

  /** Optionally: Delete a user by ID */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
