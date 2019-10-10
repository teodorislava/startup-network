import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../config/utilities';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostComments(payload):Observable<Comment[]>
  {
    return this.http.get<Comment[]>(`${API_URL}Posts/${payload.id}/Comment`, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  postPost(payload): Observable<Post>
  {
    return this.http.post<Post>(`${API_URL}Posts`, payload.post , {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  postComment(payload):Observable<Comment>
  {
    return this.http.post<Comment>(`${API_URL}Posts/${payload.id}/Comment`, {content: payload.content} , {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  brainPost(payload):Observable<Post>
  {
    return this.http.put<Post>(`${API_URL}Posts/${payload.id}`, {}, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
    
  }

  getRecommendedF(payload):Observable<Post[]>
  {
    return this.http.get<Post[]>(`${API_URL}Users/PopularPosts`, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  getRecommendedT(payload):Observable<Post[]>
  {
    return this.http.get<Post[]>(`${API_URL}Users/RecommendedPosts`, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }
}
