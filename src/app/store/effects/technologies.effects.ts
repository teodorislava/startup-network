import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as TechnolgiesActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Injectable()
export class TechnologiesEffects
{
    constructor(private actions$:Actions, private technologiesService:TechnologiesService) {}

    @Effect()
    getAllTechs$ = this.actions$.pipe(
        ofType(TechnolgiesActions.GET_ALL_TECHS),
        map((action: TechnolgiesActions.GetAllTechs) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.technologiesService.getAllTechs(el)
        .pipe(map(res => new TechnolgiesActions.GetAllTechsSuccess(res)),
                     catchError(er => of(new TechnolgiesActions.GetAllTechsFail('Greska!'))));
    }));

    @Effect()
    getUsetTechs$ = this.actions$.pipe(
        ofType(TechnolgiesActions.GET_USER_TECHS),
        map((action: TechnolgiesActions.GetUserTechs) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.technologiesService.getUserTechs(el)
        .pipe(map(res => new TechnolgiesActions.GetUserTechsSuccess(res)),
                     catchError(er => of(new TechnolgiesActions.GetUserTechsFail('Greska!'))));
    }));

    @Effect()
    postTech$ = this.actions$.pipe(
        ofType(TechnolgiesActions.POST_TECH),
        map((action: TechnolgiesActions.PostTech) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.technologiesService.postTech(el)
        .pipe(map(res => new TechnolgiesActions.PostTechSuccess(res)),
                     catchError(er => of(new TechnolgiesActions.PostTechFail('Greska!'))));
    }));

    @Effect()
    postUserTech$ = this.actions$.pipe(
        ofType(TechnolgiesActions.POST_USER_TECH),
        map((action: TechnolgiesActions.PostUserTech) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.technologiesService.postUserTech(el)
        .pipe(map(res => new TechnolgiesActions.PostUserTechSuccess(res)),
                     catchError(er => of(new TechnolgiesActions.PostUserTechFail('Greska!'))));
    }));
}