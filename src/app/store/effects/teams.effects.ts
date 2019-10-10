import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TeamsActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { TeamsService } from 'src/app/services/teams.service';

@Injectable()
export class TeamsEffect
{
    constructor(private actions$:Actions, private teamsService:TeamsService) {}

    @Effect()
    getUserTeams$ = this.actions$.pipe(
        ofType(TeamsActions.GET_USER_TEAMS),
        map((action: TeamsActions.GetUserTeams) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.teamsService.getUserTeams(el)
        .pipe(map(res => new TeamsActions.GetUserTeamsSuccess(res)),
                     catchError(er => of(new TeamsActions.GetUserTeamsFail('Greska!'))));
    }));

    @Effect()
    createTeam$ = this.actions$.pipe(
        ofType(TeamsActions.CREATE_TEAM),
        map((action: TeamsActions.CreateTeam) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.teamsService.createTeam(el)
        .pipe(map(res => new TeamsActions.CreateTeamSuccess(res)),
                     catchError(er => of(new TeamsActions.CreateTeamFail('Greska!'))));
    }));

    @Effect()
    addMemberToTeam$ = this.actions$.pipe(
        ofType(TeamsActions.ADD_TEAM_MEMBER),
        map((action: TeamsActions.AddTeamMember) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.teamsService.addMemberToTeam(el)
        .pipe(map(res => new TeamsActions.AddTeamMemberSuccess(res.ok)),
                     catchError(er => of(new TeamsActions.AddTeamMemberFail('Greska!'))));
    }));

    @Effect()
    leaveTeam$ = this.actions$.pipe(
        ofType(TeamsActions.REMOVE_TEAM_MEMBER),
        map((action: TeamsActions.RemoveTeamMember) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.teamsService.leaveTeam(el)
        .pipe(map(res => new TeamsActions.RemoveTeamMemberSuccess(res.ok)),
                     catchError(er => of(new TeamsActions.RemoveTeamMemberFail('Greska!'))));
    }));

    @Effect()
    getTeamMembers$ = this.actions$.pipe(
        ofType(TeamsActions.GET_TEAM_MEMBERS),
        map((action: TeamsActions.GetTeamMembers) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.teamsService.getTeamMembers(el)
        .pipe(map(res => new TeamsActions.GetTeamMembersSuccess(res)),
                     catchError(er => of(new TeamsActions.GetTeamMembersFail('Greska!'))));
    }));
    
}