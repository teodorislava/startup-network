import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/utilities';
import { catchError } from 'rxjs/operators';
import { LoginResponse } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  tryLogin(payload):Observable<LoginResponse>
  {
      return this.http.post<LoginResponse>(`${API_URL}Login`, payload)
        .pipe(catchError((error:any) => Observable.throw("Greska prilikom logovanja!")));
  }

  registerUser(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Register`, payload)
    .pipe(catchError((error:any) => Observable.throw("Greska prilikom registrovanja!")));
  }
}
