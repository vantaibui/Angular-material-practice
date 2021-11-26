import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Model
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl: string = 'https://fake-rest-api-nodejs.herokuapp.com';

  constructor(public http: HttpClient) {}

  authenticate(username: string, password: string): Observable<User> {
    const userLogin = { username: username, password: password };
    return this.http.post<User>(`${this.apiUrl}/login`, userLogin);
  }

  register(user: User): Observable<User> {
    const userRegister = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      avatar: user.avatar,
      gender: user.gender,
      phone: user.phone,
      birthday: user.birthday,
      status: true,
    };
    return this.http.post<User>(`${this.apiUrl}/register`, userRegister);
  }
}
