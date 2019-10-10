import { Action } from '@ngrx/store';
import * as TechnologiesActions from '../actions';
import { Technology } from 'src/app/models/Technology';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export interface Technologies extends EntityState<Technology> {};
const adapter: EntityAdapter<Technology> = createEntityAdapter<Technology>();

const initialTechnologies: Technologies = {
    ids:[],
    entities: {
    }
}

export interface TechnologiesState
{
    loading:boolean,
    technologies: Technologies,
    searchedTechs: Technology[],
    searchedTechsFail: boolean,
    postUserTechFail: boolean,
    postTechSuccess: boolean,
    postTechFail: boolean,
    technologiesFail: boolean
}

const initialState: TechnologiesState = {
    loading:true,
    technologies: initialTechnologies,
    technologiesFail:false,
    searchedTechs: [],
    searchedTechsFail: false,
    postUserTechFail: false,
    postTechSuccess: false, 
    postTechFail: false
}

export function technologiesReducer(state:TechnologiesState = initialState, action: Action)
{
    switch(action.type) {
        case TechnologiesActions.GET_ALL_TECHS_SUCCESS: {
            const {payload} = (action as TechnologiesActions.GetAllTechsSuccess);
            return {...state, loading: false, searchedTechs: payload};
        }
        case TechnologiesActions.GET_ALL_TECHS_FAIL: {
            return {...state, loading: false, searchedTechsFail: true};
        }
        case TechnologiesActions.GET_USER_TECHS_SUCCESS: {
            const {payload} = (action as TechnologiesActions.GetUserTechsSuccess);
            const ad = adapter.addAll(payload, state.technologies);
            return {...state, loading: false, technologies: ad};
        }
        case TechnologiesActions.GET_USER_TECHS_FAIL: {
            return {...state, loading: false, technologiesFail: true};
        }
        case TechnologiesActions.POST_USER_TECH_SUCCESS: {
            const {payload} = (action as TechnologiesActions.PostUserTechSuccess);
            const ad = adapter.addOne(payload, state.technologies);
            return {...state, loading: false, technologies: ad};
        }
        case TechnologiesActions.POST_USER_TECH_FAIL: {
            return {...state, loading: false, postUserTechFail:true};
        }
        case TechnologiesActions.POST_TECH_SUCCESS: {
            const {payload} = (action as TechnologiesActions.PostTechSuccess);
            return {...state, loading:false, postTechSuccess: true};
        }
        case TechnologiesActions.POST_TECH_FAIL: {
            return {...state, loading: false, postTechFail:true};
        }
        case TechnologiesActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();