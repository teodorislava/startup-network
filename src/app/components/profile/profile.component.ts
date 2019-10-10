import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { GetDetails, EditUser, GetUserNotifications, GetUserMentions } from 'src/app/store/actions';
import { CookieService } from 'ngx-cookie-service';
import { Mention } from 'src/app/models/Mention';
import { Notify } from 'src/app/models/Notify';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$:Observable<User>;
  getUserFail$:Observable<boolean>;
  editUserFail$:Observable<boolean>;
  mentions$:Observable<Mention[]>;
  notifications$:Observable<Notify[]>;
  mentionsFail$:Observable<boolean>;
  notificationsFail$:Observable<boolean>;

  editUser:boolean = false;
  user:User;

  constructor(private store$:Store<State>, private route:ActivatedRoute, public cookieService:CookieService) { }

  ngOnInit() {
    this.user$ = this.store$.select((state:State) => state.users.user);
    this.user$.subscribe(user => this.user = user);
    this.getUserFail$ = this.store$.select((state:State) => state.users.getDetailsFail);
    this.mentionsFail$ = this.store$.select((state:State) => state.users.mentionsFail);
    this.notificationsFail$ = this.store$.select((state:State) => state.users.notificationsFail);
    this.editUserFail$ = this.store$.select((state:State) => state.users.editUserFail);
    this.mentions$ = this.store$.select((state:State) => state.users.mentions);
    this.notifications$ = this.store$.select((state:State) => state.users.notifications);

    
    this.getUserFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom pribavljanja informacija o korisniku!');
    });

    this.editUserFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom izmene podataka o korisniku!');
    });

    this.mentionsFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom pribavljanja mensonova!');
    });

    this.notificationsFail$.subscribe(f => {
      if(f)
        alert('Greska prilikom pribavljanja notifikacija!');
    });

    this.store$.dispatch(new GetDetails({
      token: this.cookieService.get('Token'),
      id: this.route.snapshot.paramMap.get('id')
    }));
    
    this.store$.dispatch(new GetUserMentions({
      token: this.cookieService.get('Token')
    }));

    this.store$.dispatch(new GetUserNotifications({
      token: this.cookieService.get('Token')
    }));
  }


  submitEditUser()
  {
    this.store$.dispatch(new EditUser({
      user:this.user,
      token: this.cookieService.get('Token')
    }));
    this.editUser = false;
  }
}