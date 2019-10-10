import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as ProjectsActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Injectable()
export class ProjectsEffects
{
    constructor(private actions$:Actions, private projectsService:ProjectsService) {}

    @Effect()
    postProject$ = this.actions$.pipe(
        ofType(ProjectsActions.POST_PROJECT),
        map((action: ProjectsActions.PostProject) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.postProject(el)
        .pipe(map(res => new ProjectsActions.PostProjectSuccess(res)),
                     catchError(er => of(new ProjectsActions.PostProjectFail('Greska!'))));
    }));

    @Effect()
    applyIndividual$ = this.actions$.pipe(
        ofType(ProjectsActions.APPLY_INDIVIDUAL),
        map((action: ProjectsActions.ApplyIndividual) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.applyIndividual(el)
        .pipe(map(res => new ProjectsActions.ApplyIndividualSuccess(res.ok)),
                     catchError(er => of(new ProjectsActions.ApplyIndividualFail('Greska!'))));
    }));

    @Effect()
    applyTeam$ = this.actions$.pipe(
        ofType(ProjectsActions.APPLY_TEAM),
        map((action: ProjectsActions.ApplyTeam) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.applyTeam(el)
        .pipe(map(res => new ProjectsActions.ApplyTeamSuccess(res.ok)),
                     catchError(er => of(new ProjectsActions.ApplyTeamFail('Greska!'))));
    }));

    @Effect()
    searchProjects$ = this.actions$.pipe(
        ofType(ProjectsActions.SEARCH_PROJECTS),
        map((action: ProjectsActions.SearchProjects) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.searchProjects(el)
        .pipe(map(res => new ProjectsActions.SearchProjectsSuccess(res)),
                     catchError(er => of(new ProjectsActions.SearchProjectsFail('Greska!'))));
    }));

    @Effect()
    addInvestment$ = this.actions$.pipe(
        ofType(ProjectsActions.ADD_INVESTMENT),
        map((action: ProjectsActions.AddInvestment) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.addInvestment(el)
        .pipe(map(res => new ProjectsActions.AddInvestmentSuccess(res)),
                     catchError(er => of(new ProjectsActions.AddInvestmentFail('Greska!'))));
    }));

    @Effect()
    approveApplicationIndividual$ = this.actions$.pipe(
        ofType(ProjectsActions.APPROVE_APPLICATION_INDIVIDUAL),
        map((action: ProjectsActions.ApproveApplicationInvididual) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.approveApplicationIndividual(el)
        .pipe(map(res => new ProjectsActions.ApproveApplicationInvididualSuccess(res)),
                     catchError(er => of(new ProjectsActions.ApproveApplicationInvididualFail('Greska!'))));
    }));

    @Effect()
    approveApplicationTeam$ = this.actions$.pipe(
        ofType(ProjectsActions.APPROVE_APPLICATION_TEAM),
        map((action: ProjectsActions.ApproveApplicationTeam) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.approveApplicationTeam(el)
        .pipe(map(res => new ProjectsActions.ApproveApplicationTeamSuccess(res)),
                     catchError(er => of(new ProjectsActions.ApproveApplicationTeamFail('Greska!'))));
    }));

    @Effect()
    denyApplicationIndividual$ = this.actions$.pipe(
        ofType(ProjectsActions.DENY_USER_APPLICATION),
        map((action: ProjectsActions.DenyUserApplication) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.denyApplicationIndividual(el)
        .pipe(map(res => new ProjectsActions.DenyUserApplicationSuccess(res.ok)),
                     catchError(er => of(new ProjectsActions.DenyUserApplicationFail('Greska!'))));
    }));

    @Effect()
    denyApplicationTeam$ = this.actions$.pipe(
        ofType(ProjectsActions.DENY_TEAM_APPLICATION),
        map((action: ProjectsActions.DenyTeamApplication) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.denyApplicationTeam(el)
        .pipe(map(res => new ProjectsActions.DenyTeamApplicationSuccess(res.ok)),
                     catchError(er => of(new ProjectsActions.DenyTeamApplicationFail('Greska!'))));
    }));

    @Effect()
    projectsByTechnology$ = this.actions$.pipe(
        ofType(ProjectsActions.PROJECTS_BY_TECHNOLOGY),
        map((action: ProjectsActions.ProjectsByTechnology) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.projectsByTechnology(el)
        .pipe(map(res => new ProjectsActions.ProjectsByTechnologySuccess(res)),
                     catchError(er => of(new ProjectsActions.ProjectsByTechnologyFail('Greska!'))));
    }));

    @Effect()
    hotProject$ = this.actions$.pipe(
        ofType(ProjectsActions.HOT_PROJECT),
        map((action: ProjectsActions.HotProject) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.hotProject(el)
        .pipe(map(res => new ProjectsActions.HotProjectSuccess(res)),
                     catchError(er => of(new ProjectsActions.HotProjectFail('Greska!'))));
    }));

    @Effect()
    getProjectIndividuals$ = this.actions$.pipe(
        ofType(ProjectsActions.GET_PROJECT_INDIVIDUAL),
        map((action: ProjectsActions.GetProjectIndividual) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.getProjectIndividuals(el)
        .pipe(map(res => new ProjectsActions.GetProjectIndividualSuccess(res)),
                     catchError(er => of(new ProjectsActions.GetProjectIndividualFail('Greska!'))));
    }));

    @Effect()
    getProjectTeams$ = this.actions$.pipe(
        ofType(ProjectsActions.GET_PROJECT_TEAM),
        map((action: ProjectsActions.GetProjectTeam) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.getProjectTeams(el)
        .pipe(map(res => new ProjectsActions.GetProjectTeamSuccess(res)),
                     catchError(er => of(new ProjectsActions.GetProjectTeamFail('Greska!'))));
    }));

    @Effect()
    getUserProjects$ = this.actions$.pipe(
        ofType(ProjectsActions.GET_USER_PROJECTS),
        map((action: ProjectsActions.GetUserProjects) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.projectsService.getUserProjects(el)
        .pipe(map(res => new ProjectsActions.GetUserProjectsSuccess(res)),
                     catchError(er => of(new ProjectsActions.GetUserProjectsFail('Greska!'))));
    }));

}