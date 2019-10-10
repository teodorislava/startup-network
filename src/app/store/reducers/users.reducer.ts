import { Action } from '@ngrx/store';
import * as UserActions from '../actions';
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/Post';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { Mention } from 'src/app/models/Mention';
import { Notify } from '../../models/Notify';

export interface Posts extends EntityState<Post> {};
const adapter: EntityAdapter<Post> = createEntityAdapter<Post> ({
    sortComparer:sortByTimestamp
});

export function sortByTimestamp(p1: Post, p2: Post): number {
    if(p1.timestamp === undefined || p2.timestamp === undefined)
        return 0;

    let s1 = p1.timestamp.split('-');
    let s2 = p2.timestamp.split('-');

    if(s1[0] == undefined || s2[0] == undefined ||
        s1[1] == undefined || s2[1] == undefined ||
        s1[2] == undefined || s2[2] == undefined)
        return 0;

    if(s1[1].length==1)
        s1[1]='0'+s1[1];
    if(s1[0].length==1)
        s1[0]='0'+s1[0];
    if(s2[1].length==1)
        s2[1]='0'+s2[1];
    if(s2[0].length==1)
        s2[0]='0'+s2[0];
    let d = new Date(s1[1]+'-'+s1[0]+'-'+s1[2]);
    let dd = new Date(s2[1]+'-'+s2[0]+'-'+s2[2]);

    return d.getMilliseconds() - dd.getMilliseconds();
}

const initialPosts: Posts = {
    ids:[],
    entities: {
    }
}

export interface UserState
{
    loading:boolean,
    user:User,
    getDetailsFail:boolean,
    posts: Posts, 
    getFriendsPostsFail: boolean,
    brainPostFail: boolean,
    searchUsers: User[],
    searchFail: boolean,
    followUserSucc:boolean,
    followUserFail:boolean,
    editUserFail:boolean,
    mentions: Mention[],
    notifications: Notify[],
    mentionsFail:boolean,
    notificationsFail:boolean
}

const initialState: UserState = {
    loading:true, 
    getDetailsFail: false,
    getFriendsPostsFail: false,
    posts: initialPosts,
    brainPostFail: false,
    searchUsers: [],
    searchFail: false,
    followUserFail:false, 
    followUserSucc: false,
    user: new User,
    editUserFail: false,
    mentions:[],
    notifications:[],
    mentionsFail: false,
    notificationsFail: false
}

export function userReducer(state:UserState = initialState, action: Action)
{
    switch(action.type) {
        case UserActions.POST_POST_SUCCESS: {
            const {payload} = (action as UserActions.PostPostSuccess);
            const ad =  adapter.addOne(payload, state.posts);
            return {...state, posts:ad};
        }
        case UserActions.GET_DETAILS_SUCCESS: {
            const {payload} = (action as UserActions.GetDetailsSuccess);
            return {...state, loading:false, user:payload};
        }
        case UserActions.GET_DETAILS_FAIL: {
            return {...state, getDetailsFail:true, loading:false};
        }
        case UserActions.GET_FRIENDS_POSTS_SUCCESS: {
            const {payload} = (action as UserActions.GetFriendsPostsSuccess);
            const ad = adapter.addAll(payload, state.posts);
            return {...state, posts: ad, loading: false };
        }
        case UserActions.GET_FRIENDS_POSTS_FAIL: {
            return {...state, getFriendsPostsFail: true, loading:false };
        }
        case UserActions.BRAIN_POST_SUCCESS: {
            const {payload} = (action as UserActions.BrainPost);
            const ad = adapter.updateOne({id:payload.id, changes:payload}, state.posts);
            return {...state, loading: false, posts: ad};
        }
        case UserActions.BRAIN_POST_FAIL: {
            return {...state, loading: false, brainPostFail: true};
        }
        case UserActions.SEARCH_USERS_SUCCESS: {
            const {payload} = (action as UserActions.SearchUsersSuccess);
            return {...state, loading:false, searchUsers:payload};
        }
        case UserActions.SEARCH_USERS_FAIL: {
            return {...state, loading: false, searchFail: true};
        }
        case UserActions.FOLLOW_USER_SUCCESS: {
            const {payload} = (action as UserActions.FollowUserSuccess);
            return {...state, loading:false, followUserSucc:true};
        }
        case UserActions.FOLLOW_USER_FAIL: {
            return {...state, loading: false, followUserFail: true};
        }
        case UserActions.EDIT_USER_SUCCESS: {
            const {payload} = (action as UserActions.EditUserSuccess);
            return {...state, loading:false, user:payload};
        }
        case UserActions.EDIT_USER_FAIL: {
            return {...state, loading: false, editUserFail: true};
        }
        case UserActions.GET_USER_MENTIONS_SUCCESS: {
            const {payload} = (action as UserActions.GetUserMentionsSuccess);
            return {...state, loading:false, mentions:payload};
        }
        case UserActions.GET_USER_MENTIONS_FAIL: {
            return {...state, loading: false, mentionsFail: true};
        }
        case UserActions.GET_USER_NOTIFICATIONS_SUCCESS: {
            const {payload} = (action as UserActions.GetUserNotificationsSuccess);
            return {...state, loading:false, notifications:payload};
        }
        case UserActions.GET_USER_NOTIFICATIONS_FAIL: {
            return {...state, loading: false, notificationsFail: true};
        }
        case UserActions.CLEAR_INFO: {
            return {...state, 
                followUserFail: false,
                followUserSucc: false,
                loading: true, 
                searchUsers: [],
                searchFail: false
             }
        }
        case UserActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();