import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { FollowUser, GetUserTeams, AddTeamMember } from 'src/app/store/actions';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/models/Team';
import { selectors as TeamsSelector } from '../../store/reducers/teams.reducer';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  @Input()
  public user:User;
  show:boolean = false;

  followSuccess$:Observable<boolean>;
  followFail$:Observable<boolean>;
  teams$:Observable<Team[]>;
  getTeamsFail$:Observable<boolean>;
  addToTeamSuccess$:Observable<boolean>;
  addToTeamFail$:Observable<boolean>;


  constructor(private store$:Store<State>, public cookieService:CookieService) { }

  ngOnInit() {
    this.followSuccess$ = this.store$.select((state:State) => state.users.followUserSucc);
    this.followFail$ = this.store$.select((state:State) => state.users.followUserFail);
    this.teams$ = this.store$.select((state:State) => TeamsSelector.selectAll(state.teams.teams));
    this.getTeamsFail$ = this.store$.select((state:State) => state.teams.getTeamsFail);
    this.addToTeamSuccess$ = this.store$.select((state:State) => state.teams.addMemberSuccess);
    this.addToTeamFail$ = this.store$.select((state:State) => state.teams.addMemberFail);

    this.getTeamsFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom citanja timova!');
    });

    this.addToTeamFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom dodavanja clana u tim!');
    });

  }

  folUser()
  {
    this.store$.dispatch(new FollowUser({
      friendid: this.user.id,
      token: this.cookieService.get('Token')
    }))
  }

  showTeams()
  {
    this.store$.dispatch(new GetUserTeams({
      id: this.cookieService.get('UserId'),
      token: this.cookieService.get('Token')
    }));
    this.show = true;
  }

  addToTeam(id)
  {
    this.store$.dispatch(new AddTeamMember({
      id: id,
      token: this.cookieService.get('Token'),
      user: {
        userid: this.user.id
      }
    }))
  }
}
