import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config/utilities';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private htpp:HttpClient) { }

  postMessage(payload):Observable<Message>
  {
    return this.htpp.post<Message>(`${API_URL}Team/${payload.id}/Messages`, payload.message, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  getTeamMessages(payload):Observable<Message[]>
  {
    return this.htpp.get<Message[]>(`${API_URL}Team/${payload.teamid}/Messages?pagenr=${payload.pagenr}&pagesize=${payload.pagesize}`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }
}