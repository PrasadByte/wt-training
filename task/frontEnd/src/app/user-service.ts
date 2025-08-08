import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
     private url = 'http://localhost:8989/user';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/all`);
  }
addEmployee(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/add`, user);
  }
  
}