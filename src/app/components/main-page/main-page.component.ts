import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { Observable } from 'rxjs';
import { TryLogin, RegisterUser } from 'src/app/store/actions';
import { Login, LoginResponse } from '../../models/Login';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  login: boolean = false;
  register: boolean = false;
  registerUser: User = new User;
  loginUser: string = ""; 
  loginPass: string = "";
  logged_in: boolean = false;

  response$: Observable<LoginResponse>;
  logFail$: Observable<boolean>;
  regSucc$: Observable<boolean>;
  regFail$: Observable<boolean>;

  constructor(private router:Router, private cookieService: CookieService, private store$:Store<State>) { }

  ngOnInit() {
    this.response$ = this.store$.select((state: State) => state.login.responseLoginSucces);
    this.logFail$ = this.store$.select((state:State) => state.login.responseLoginFail);
    this.regSucc$ = this.store$.select((state:State) => state.login.registerUserSucc);
    this.regFail$ = this.store$.select((state:State) => state.login.registerUserFail);

    this.logFail$.subscribe(el => {
      if(el)
        alert('Greska prilikom prijavljivanja!');
    });

    this.regFail$.subscribe(el => {
      if(el)
        alert('Greska prilikom registrovanja!');
    });
  }

  openLogin() {
    this.login = !this.login;
    if(this.login)
      this.register = false;
  }
  openRegister() {
    this.register = !this.register;
    if(this.register)
      this.login = false;
  }

  tryRegister() {
    if(this.registerUser.bio === "" || this.registerUser.birthday === "" || this.registerUser.email === "" ||
      this.registerUser.hometown === "" || this.registerUser.lastplaceworked === "" || this.registerUser.livesin === "" ||
      this.registerUser.password === "" || this.registerUser.profession === "" || this.registerUser.school === "" || this.registerUser.username === "")
    {
      alert('Popunite sva polja!');
      return;
    }
    let birth = this.registerUser.birthday.split('/');
    if(birth.length !== 3 || birth[0].length === 0 || birth[1].length === 0 || birth[2].length !== 4)
    {
      alert('Unesite ispravan datum!');
      return;
    }
    this.store$.dispatch(new RegisterUser(this.registerUser));
  }

  tryLogin() {
    if(this.loginUser === "" || this.loginPass === "")
    {
      alert('Popunite sva polja!');
      return;
    }

    this.store$.dispatch(new TryLogin(new Login(this.loginUser, this.loginPass)));

    this.response$.subscribe((res:LoginResponse) => {
        if(res.Id != 0 && res.Id != undefined)
        {
          this.cookieService.set('Token', res.Id.toString());
          this.cookieService.set('UserId', res.UserId.toString());
          this.login = false;
          this.logged_in = true;
          this.router.navigate(['./home']);
        }
    });

  }
}