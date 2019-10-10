import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/services/users.service';
import * as UsersActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects
{
    constructor(private actions$:Actions, private usersService:UsersService) {}

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType(UsersActions.GET_DETAILS),
        map((action: UsersActions.GetDetails) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.getUser(el)
        .pipe(map(res => new UsersActions.GetDetailsSuccess(res)),
                     catchError(er => of(new UsersActions.GetDetailFail('Greska prilikom prijavljivanja!'))));
    }));

    @Effect()
    getFriendsPosts$ = this.actions$.pipe(
        ofType(UsersActions.GET_FRIENDS_POSTS),
        map((action: UsersActions.GetFriendsPosts) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.getFriendsPosts(el)
        .pipe(map(res => new UsersActions.GetFriendsPostsSuccess(res)),
                     catchError(er => of(new UsersActions.GetFriendsPostsFail('Greska!'))));
    }));

    @Effect()
    searchUsers$ = this.actions$.pipe(
        ofType(UsersActions.SEARCH_USERS),
        map((action: UsersActions.SearchUsers) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.searchUsers(el)
        .pipe(map(res => new UsersActions.SearchUsersSuccess(res)),
                     catchError(er => of(new UsersActions.SearchUsersFail('Greska!'))));
    }));

    @Effect()
    followUser$ = this.actions$.pipe(
        ofType(UsersActions.FOLLOW_USER),
        map((action: UsersActions.FollowUser) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.followUser(el)
        .pipe(map(res => new UsersActions.FollowUserSuccess(res.ok)),
                     catchError(er => of(new UsersActions.FollowUserFail('Greska!'))));
    }));

    @Effect()
    editUser$ = this.actions$.pipe(
        ofType(UsersActions.EDIT_USER),
        map((action: UsersActions.EditUser) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.editUser(el)
        .pipe(map(res => new UsersActions.EditUserSuccess(res)),
                     catchError(er => of(new UsersActions.EditUserFail('Greska!'))));
    }));

    @Effect()
    getUserMentions$ = this.actions$.pipe(
        ofType(UsersActions.GET_USER_MENTIONS),
        map((action: UsersActions.GetUserMentions) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.getUserMentions(el)
        .pipe(map(res => new UsersActions.GetUserMentionsSuccess(res)),
                     catchError(er => of(new UsersActions.GetUserMentionsFail('Greska!'))));
    }));

    @Effect()
    getUserNotifications$ = this.actions$.pipe(
        ofType(UsersActions.GET_USER_NOTIFICATIONS),
        map((action: UsersActions.GetUserNotifications) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.usersService.getUserNotifications(el)
        .pipe(map(res => new UsersActions.GetUserNotificationsSuccess(res)),
                     catchError(er => of(new UsersActions.GetUserNotificationsFail('Greska!'))));
    }));
    
}