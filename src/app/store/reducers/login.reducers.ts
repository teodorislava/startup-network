import { Action } from '@ngrx/store';
import * as LoginActions from '../actions';
import { LoginResponse, Login } from 'src/app/models/Login';

export interface LoginState
{
    loading:boolean,
    responseLoginSucces:LoginResponse,
    responseLoginFail:boolean
    registerUserSucc: boolean,
    registerUserFail: boolean
}

const initialState: LoginState = {
    loading:true, 
    responseLoginFail: false,
    responseLoginSucces: {Id: 0, UserId: 0},
    registerUserSucc: false,
    registerUserFail: false
}

export function loginReducer(state:LoginState = initialState, action: Action)
{
    switch(action.type) {
        case LoginActions.LOGIN_SUCCESS: {
            const {payload} = (action as LoginActions.LoginSuccess);
            return {...state, loading:false, responseLoginSucces:payload};
        }
        case LoginActions.LOGIN_FAIL: {
            const {payload} = (action as LoginActions.LoginFail);
            return {...state, responseLoginFail:true, loading:false};
        }
        case LoginActions.REGISTER_USER_SUCCESS: {
            return {...state, registerUserSucc: true};
        }
        case LoginActions.REGISTER_USER_FAIL: {
            return {...state, registerUserFail: true};
        }
        case LoginActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}