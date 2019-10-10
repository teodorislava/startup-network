import { Action } from '@ngrx/store';
import * as MessageActions from '../actions';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { Message } from 'src/app/models/Message';

  
export interface Messages extends EntityState<Message> {};
const adapter: EntityAdapter<Message> = createEntityAdapter<Message> ();

const initialMessages: Messages = {
    ids:[],
    entities: {
    }
}

export interface MessagesState
{
    loading: boolean,
    messages: Messages,
    postMessageFail: boolean,
    getMessagesFail: boolean
}

const initialState: MessagesState = {
    loading: true,
    messages: initialMessages,
    postMessageFail: false,
    getMessagesFail: false
}

export function messagesReducer(state:MessagesState = initialState, action: Action)
{
    switch(action.type) {
        case MessageActions.POST_MESSAGE_SUCCESS: {
            const {payload} = (action as MessageActions.PostMessageSuccess);
            const ad = adapter.addOne(payload, state.messages);
            return {...state, loading: false, messages: ad};
        }
        case MessageActions.POST_MESSAGE_FAIL: {
            return {...state, loading: false, postMessageFail: true}
        }
        case MessageActions.GET_MESSAGES_SUCCESS: {
            const {payload} = (action as MessageActions.GetMessagesSuccess);
            const ad = adapter.addAll(payload, state.messages);
            return {...state, loading:false, messages: ad};
        }
        case MessageActions.GET_MESSAGES_FAIL: {
            return {...state, loading: false, getMessagesFail: true};
        }
        case MessageActions.RECEIVE_MESSAGE: {
            const {payload} = (action as MessageActions.ReceiveMessage);
            const ad = adapter.addOne(payload, state.messages);
            return {...state, loading:false, messages: ad};
        }
        case MessageActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();