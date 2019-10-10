import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../models/Technology';
import { API_URL } from '../config/utilities';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private http:HttpClient) { }

  getAllTechs(payload):Observable<Technology[]>
  {
    return this.http.get<Technology[]>(`${API_URL}Technology/Search?techname=${payload}`)
      .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  getUserTechs(payload):Observable<Technology[]>
  {
    return this.http.get<Technology[]>(`${API_URL}Users/${payload.id}/Technologies`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  postTech(payload):Observable<Technology>
  {
    return this.http.post<Technology>(`${API_URL}Technology`, payload.technology, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  postUserTech(payload):Observable<Technology>
  {
    return this.http.post<Technology>(`${API_URL}Users/Technologies`, payload.technology, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }
  
}