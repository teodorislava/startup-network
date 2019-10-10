import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as PostsActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Injectable()
export class PostsEffects
{
    constructor(private actions$:Actions, private postsService:PostsService) {}

    @Effect()
    getComments$ = this.actions$.pipe(
        ofType(PostsActions.GET_POST_COMMENTS),
        map((action: PostsActions.GetPostComments) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.getPostComments(el)
        .pipe(map(res => new PostsActions.GetPostCommentsSuccess(res)),
                     catchError(er => of(new PostsActions.GetPostCommentsFail('Greska!'))));
    }));

    @Effect()
    postPost$ = this.actions$.pipe(
        ofType(PostsActions.POST_POST),
        map((action: PostsActions.PostPost) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.postPost(el)
        .pipe(map(res => new PostsActions.PostPostSuccess(res)),
                     catchError(er => of(new PostsActions.PostPostFail('Greska!'))));
    }));

    @Effect()
    postComment$ = this.actions$.pipe(
        ofType(PostsActions.POST_COMMENT),
        map((action: PostsActions.PostComment) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.postComment(el)
        .pipe(map(res => new PostsActions.PostCommentSuccess(res)),
                    catchError(er => of(new PostsActions.PostCommentFail('Greska!'))));
    }));

    @Effect() 
    brainPost$ = this.actions$.pipe(
        ofType(PostsActions.BRAIN_POST),
        map((action: PostsActions.BrainPost) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.brainPost(el)
        .pipe(map(res => new PostsActions.BrainPostSuccess(res)),
                    catchError(er => of(new PostsActions.BrainPostFail('Greska!'))));
    }));

    @Effect() 
    getRecommendedFriends$ = this.actions$.pipe(
        ofType(PostsActions.GET_RECOMMENDED_FRIENDS),
        map((action: PostsActions.GetReccomendedFriends) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.getRecommendedF(el)
        .pipe(map(res => new PostsActions.GetReccomendedFriendsSuccess(res)),
                    catchError(er => of(new PostsActions.GetReccomendedFriendsFail('Greska!'))));
    }));

    @Effect() 
    getRecommmendedTech$ = this.actions$.pipe(
        ofType(PostsActions.GET_RECOMMENDED_TECH),
        map((action: PostsActions.GetReccomendedTech) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.postsService.getRecommendedT(el)
        .pipe(map(res => new PostsActions.GetReccomendedTechSuccess(res)),
                    catchError(er => of(new PostsActions.GetReccomendedTechFail('Greska!'))));
    }));
}