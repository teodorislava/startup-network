import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { CreateTeam, GetUserTeams, GetTeamMembers, RemoveTeamMember, GetMessages, PostMessage, ReceiveMessage } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { selectors as teamsSelectors } from '../../store/reducers/teams.reducer';
import { User } from 'src/app/models/User';
import { SignalR, SignalRConnection } from 'ng2-signalr';
import { selectors as messageSelectors } from '../../store/reducers/messages.reducer';

import 'expose-loader?jQuery!jquery';
import 'd:/nodejs/nbp/node_modules/signalr/jquery.signalR.js';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team:Team = new Team("", "", 0);
  teamId: number = -1;
  teamMessagesId:number = -1;
  teamName:string = "";
  teamNameMessage:string = "";
  message:Message = new Message(0, "", 0, "", "");

  userId:number = Number(this.cookieService.get('UserId'));
  private connection: SignalRConnection;

  teams$:Observable<Team[]>;
  createTeamFail$:Observable<boolean>;
  getTeamsFail$:Observable<boolean>;
  teamMembers$:Observable<User[]>;
  teamMembersFail$:Observable<boolean>;
  removeFromTeam$:Observable<boolean>;
  removeFromTeamFail$:Observable<boolean>;
  messages$:Observable<Message[]>
  messagesFail$:Observable<boolean>;

  constructor(private cookieService:CookieService, private store$:Store<State>, private signalR:SignalR, public route:ActivatedRoute) { }

  ngOnInit() {

    this.connection = this.route.snapshot.data['connection'];
    let receiveMessage$ = this.connection.listenFor('addMessage');
    receiveMessage$.subscribe((m:Message) => {
      this.store$.dispatch(new ReceiveMessage(m));
    });

    this.getTeamsFail$ = this.store$.select((state:State) => state.teams.getTeamsFail);
    this.createTeamFail$ = this.store$.select((state:State) => state.teams.createTeamFail);
    this.teams$ = this.store$.select((state:State) => teamsSelectors.selectAll(state.teams.teams));
    this.teamMembers$ = this.store$.select((state:State) => state.teams.teamMembers);
    this.teamMembersFail$ = this.store$.select((state:State) => state.teams.teamMembersFail);
    this.removeFromTeam$ = this.store$.select(state => state.teams.removeMemberSuccess);
    this.removeFromTeamFail$ = this.store$.select(state => state.teams.removeMemberFail);
    this.messages$ = this.store$.select( state => messageSelectors.selectAll(state.messages.messages));
    this.messagesFail$ = this.store$.select(state => state.messages.getMessagesFail);


    this.createTeamFail$.subscribe(res => {
      if(res)
        alert('Doslo je do greske prilikom kreiranja tima!');
    });

    this.messagesFail$.subscribe(res => {
      if(res)
        alert('Doslo je do greske prilikom pribavljanja poruka!');
    });

    this.removeFromTeamFail$.subscribe(res => {
      if(res)
        alert('Doslo je do greske prilikom brisanja clana tima!');
    });

    this.getTeamsFail$.subscribe(res => {
      if(res)
        alert('Doslo je do greske prilikom citanja timova!');
    });

    this.teamMembersFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom pribavljanja clanova tima!');
    });

    this.store$.dispatch(new GetUserTeams({
       id: this.cookieService.get('UserId'),
       token: this.cookieService.get('Token')
   }));
  }

  createTeam()
  {
    if(this.team.name === "" || this.team.description === "")
    {
      alert('Popunite sva polja!');
      return;
    }
    this.store$.dispatch(new CreateTeam({
      token: this.cookieService.get('Token'),
      team: this.team
    }));
  }

  showMessages(id, name)
  {
    this.teamMessagesId = id;
    this.teamNameMessage = name;
    this.teamName = "";
    this.teamId = -1;
    this.connection.invoke('RegisterToTeam', id);
    this.store$.dispatch(new GetMessages({
      token: this.cookieService.get('Token'),
      pagenr: 0,
      pagesize: 10,
      teamid: id
    }));
  }

  showMembers(id, name)
  {
    this.teamName = name;
    this.teamNameMessage = "";
    this.store$.dispatch(new GetTeamMembers(id));
    this.teamId = id;
    this.teamMessagesId = -1;
  } 

  leaveYourTeam()
  {
    this.store$.dispatch(new RemoveTeamMember({
      id: this.teamId,
      token: this.cookieService.get('Token')
    }));
  }

  sendMessage()
  {
    if(this.message.content === "")
    {
      alert('Unesite vasu poruku!');
      return;
    }
    this.store$.dispatch(new PostMessage({
      id: this.teamMessagesId,
      message: this.message,
      token: this.cookieService.get('Token')
    }))
    this.message.content="";
  }

  checkKey(event)
  {
    if(event.key === "Enter")
      this.sendMessage();
  }
}
