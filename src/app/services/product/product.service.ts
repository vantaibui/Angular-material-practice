import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ',
    }),
  };
  public apiUrl: string = 'https://fake-rest-api-nodejs.herokuapp.com';

  constructor(public http: HttpClient) {}

  getAllTodo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/products');
  }
}
