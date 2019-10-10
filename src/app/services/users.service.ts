import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { API_URL } from '../config/utilities';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/Post';
import { Mention } from '../models/Mention';
import { Notify } from '../models/Notify';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(payload):Observable<User>
  {
    return this.http.get<User>(`${API_URL}Users/${payload.id}`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska prilikom pribavljanja podataka o korisniku!")));
  }

  getFriendsPosts(payload):Observable<Post[]>
  {
    return this.http.get<Post[]>(`${API_URL}Users/Friends/Posts`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));     
  }

  searchUsers(payload):Observable<User[]>
  {
    return this.http.get<User[]>(`${API_URL}Users/Search?displayname=${payload.name}`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));     
  }

  followUser(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Users/Friends/${payload.friendid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));    
  }

  editUser(payload):Observable<User>
  {
    return this.http.put<User>(`${API_URL}Users`, payload.user, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));    
  }

  getUserMentions(payload):Observable<Mention[]>
  {
    return this.http.get<Mention[]>(`${API_URL}Users/Mentions`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));    
  }

  getUserNotifications(payload):Observable<Notify[]>
  {
    return this.http.get<Notify[]>(`${API_URL}Users/Notifications`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));    
  }

}