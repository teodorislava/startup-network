import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginService } from 'src/app/services/login.service';
import * as LoginActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects
{
    constructor(private actions$:Actions, private loginService:LoginService) {}

    @Effect()
    tryLogin$ = this.actions$.pipe(
        ofType(LoginActions.LOGIN),
        map((action: LoginActions.TryLogin) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.loginService.tryLogin(el)
        .pipe(map(res => new LoginActions.LoginSuccess(res)),
                     catchError(er => of(new LoginActions.LoginFail('Greska prilikom prijavljivanja!'))));
    }));

    @Effect()
    registerUser$ = this.actions$.pipe(
        ofType(LoginActions.REGISTER_USER),
        map((action: LoginActions.RegisterUser) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.loginService.registerUser(el)
        .pipe(map(res => new LoginActions.RegisterUserSuccess(res.ok)),
                     catchError(er => of(new LoginActions.RegisterUserFail('Greska prilikom registrovanja!'))));
    }));
}