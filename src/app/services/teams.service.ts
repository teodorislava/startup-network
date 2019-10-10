import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/Team';
import { Observable } from 'rxjs';
import { API_URL } from '../config/utilities';
import { catchError } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getUserTeams(payload):Observable<Team[]>
  {
      return this.http.get<Team[]>(`${API_URL}Users/${payload.id}/Teams`, {
        headers: {
          'Authorization': payload.token
        }
      })
      .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  createTeam(payload):Observable<Team>
  {
    return this.http.post<Team>(`${API_URL}Team`, payload.team, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  addMemberToTeam(payload):Observable<Response>
  {
    return this.http.put<Response>(`${API_URL}Team/${payload.id}`, payload.user, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }

  leaveTeam(payload):Observable<Response>
  {
    return this.http.delete<Response>(`${API_URL}Team/${payload.id}/Users`, {
      headers: {
        'Authorization': payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }
  
  getTeamMembers(payload):Observable<User[]>
  {
    return this.http.get<User[]>(`${API_URL}Team/${payload}/Members`)
      .pipe(catchError((error:any) => Observable.throw("Greska!")));
  }
}
