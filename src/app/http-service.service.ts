import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const APIURL = 'http://127.0.0.1:3000';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {}

  public do(type: string, endpoint: string, body?: any) {

    const headers = {};

    if (localStorage.getItem('token') != null || undefined) {
      headers['token'] = localStorage.getItem('token');
    }

    return this.http.request(type, APIURL + endpoint, {body: body, observe: 'response', headers: headers}).toPromise();
  }
}
