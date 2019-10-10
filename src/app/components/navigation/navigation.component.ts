import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { LogOut } from 'src/app/store/actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  id: number = Number(this.cookieService.get('UserId'));
  
  constructor(private store$:Store<State>, public cookieService:CookieService, private router:Router) { }

  ngOnInit() {
  }

  logout() 
  {
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
    this.store$.dispatch(new LogOut());
  }
}
