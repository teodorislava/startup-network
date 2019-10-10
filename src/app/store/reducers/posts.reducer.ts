import { Action } from '@ngrx/store';
import * as PostActions from '../actions';
import { Comment } from 'src/app/models/Comment';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { Post } from 'src/app/models/Post';


export function sortByTimestamp(c1: Comment, c2: Comment): number {
    return c1.timestamp.localeCompare(c2.timestamp);
}
  
export interface Comments extends EntityState<Comment> {};
const adapter: EntityAdapter<Comment> = createEntityAdapter<Comment> ({
    sortComparer:sortByTimestamp
});

const initialComments: Comments = {
    ids:[],
    entities: {
    }
}

export interface PostState
{
    loading:boolean,
    getCommentsFail:boolean,
    comments: Comments, 
    postCommentFail: boolean,
    postedComment:Comment,
    postPostFail: boolean, 
    recommendedF: Post[], 
    recommendedTech:Post[], 
    reFriendsFail:boolean, 
    reTechFail: boolean
}

const initialState: PostState = {
    loading:true,
    getCommentsFail:false,
    comments: initialComments, 
    postCommentFail: false,
    postedComment: new Comment("", 0, "", ""),
    postPostFail: false,
    recommendedF: [], 
    recommendedTech:[], 
    reFriendsFail: false,
    reTechFail: false
}

export function postsReducer(state:PostState = initialState, action: Action)
{
    switch(action.type) {
        case PostActions.POST_POST_FAIL: {
            return {...state, loading: false, postPostFail: true};
        }
        case PostActions.POST_COMMENT_SUCCESS: {
            const {payload} = (action as PostActions.PostCommentSuccess);
            const ad = adapter.addOne(payload, state.comments);
            return {...state, loading: false, comments: ad};
        }
        case PostActions.POST_COMMENT_FAIL: {
            return {...state, loading: false, postCommentFail: true}
        }
        case PostActions.GET_POST_COMMENTS_SUCCESS: {
            const {payload} = (action as PostActions.GetPostCommentsSuccess);
            const ad = adapter.addAll(payload, state.comments);
            return {...state, comments: ad};
        }
        case PostActions.GET_POST_COMMENTS_FAIL: {
            return {...state, loading: false, getCommentsFail: true};
        }
        case PostActions.GET_RECOMMENDED_FRIENDS_SUCCESS: {
            const {payload} = (action as PostActions.GetReccomendedFriendsSuccess);
            return {...state, recommendedF: payload, loading: false};
        }
        case PostActions.GET_RECOMMENDED_FRIENDS_FAIL: {
            return {...state, loading:false, reFriendsFail: true};
        }
        case PostActions.GET_RECOMMENDED_TECH: {
            return {...state, loading:true};
        }
        case PostActions.GET_RECOMMENDED_TECH_SUCCESS: {
            const {payload} = (action as PostActions.GetReccomendedTechSuccess);
            return {...state, recommendedTech: payload, loading: false};
        }
        case PostActions.GET_RECOMMENDED_TECH_FAIL: {
            return {...state, loading:false, reTechFail: true};
        }
        case PostActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();