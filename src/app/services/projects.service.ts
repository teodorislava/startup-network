import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { API_URL } from '../config/utilities';
import { catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  postProject(payload):Observable<Project>
  {
    return this.http.post<Project>(`${API_URL}Projects`, payload.project, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  applyIndividual(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Projects/Solo/${payload.projectid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }
  
  applyTeam(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Projects/Team/${payload.projectid}`, { teamid: payload.teamid }, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  searchProjects(payload):Observable<Project[]>
  {
    return this.http.get<Project[]>(`${API_URL}Projects/Search?name=${payload.name}&technology=${payload.tech}`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  addInvestment(payload):Observable<Project>
  {
    return this.http.post<Project>(`${API_URL}Projects/Investements/${payload.projectid}`, payload.investment, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  approveApplicationIndividual(payload):Observable<User>
  {
    return this.http.post<User>(`${API_URL}Projects/${payload.projectid}/AcceptUser/${payload.userid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  approveApplicationTeam(payload):Observable<Team>
  {
    return this.http.post<Team>(`${API_URL}Projects/${payload.projectid}/AcceptTeam/${payload.teamid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  denyApplicationIndividual(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Projects/${payload.projectid}/DenyUser/${payload.userid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  denyApplicationTeam(payload):Observable<Response>
  {
    return this.http.post<Response>(`${API_URL}Projects/${payload.projectid}/DenyTeam/${payload.teamid}`, {}, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  projectsByTechnology(payload):Observable<Project[]>
  {
    return this.http.get<Project[]>(`${API_URL}Projects/Tech/Search`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  hotProject(payload):Observable<Project>
  {
    return this.http.get<Project>(`${API_URL}Projects/Hot`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  getProjectIndividuals(payload):Observable<User[]>
  {
    return this.http.get<User[]>(`${API_URL}Projects/${payload.projectid}/Users`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  getProjectTeams(payload):Observable<Team[]>
  {
    return this.http.get<Team[]>(`${API_URL}Projects/${payload.projectid}/Teams`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }

  getUserProjects(payload):Observable<Project[]>
  {
    return this.http.get<Project[]>(`${API_URL}Users/${payload.id}/Projects`, {
      headers: {
        'Authorization':payload.token
      }
    })
    .pipe(catchError((error:any) => Observable.throw("Greska!"))); 
  }
}
