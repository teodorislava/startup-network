import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as MessagesActions from '../actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class MessagesEffects
{
    constructor(private actions$: Actions, private messageService:MessageService) {}

    @Effect()
    getMessages$ = this.actions$.pipe(
        ofType(MessagesActions.GET_MESSAGES),
        map((action: MessagesActions.GetMessages) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.messageService.getTeamMessages(el)
        .pipe(map(res => new MessagesActions.GetMessagesSuccess(res)),
                     catchError(er => of(new MessagesActions.GetMessagesFail('Greska!'))));
    }));

    @Effect()
    postMessage$ = this.actions$.pipe(
        ofType(MessagesActions.POST_MESSAGE),
        map((action: MessagesActions.PostMessage) => action.payload)
    )
    .pipe(switchMap((el) => {
        return this.messageService.postMessage(el)
        .pipe(map(res => new MessagesActions.PostMessageSuccess(res)),
                     catchError(er => of(new MessagesActions.PostMessageFail('Greska!'))));
    }));
}