import { HttpClient, HttpResponse } from '@angular/common/http';

const BASE_URL = 'https://fake-rest-api-nodejs.herokuapp.com';

const token = localStorage.getItem('token');

export class APIClient {
  constructor(public configs: any) {}

  handleResponse(response: any): void {}

  handleError(error: any): void {}
}
