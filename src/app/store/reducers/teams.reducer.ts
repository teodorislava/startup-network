import { Action } from '@ngrx/store';
import * as TeamsActions from '../actions';
import { Team } from 'src/app/models/Team';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { User } from 'src/app/models/User';

export interface Teams extends EntityState<Team> {};
const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

const initialTeams: Teams = {
    ids:[],
    entities: {
    }
}

export interface TeamsState
{
    loading:boolean,
    teams: Teams, 
    getTeamsFail:boolean,
    createTeamFail:boolean,
    addMemberSuccess: boolean,
    addMemberFail:boolean,
    removeMemberFail: boolean, 
    removeMemberSuccess:boolean,
    teamMembers: User[],
    teamMembersFail: boolean
}

const initialState: TeamsState = {
    loading:true,
    teams: initialTeams,
    getTeamsFail: false,
    createTeamFail: false,
    addMemberSuccess: false,
    addMemberFail: false, 
    removeMemberFail: false, 
    removeMemberSuccess: false,
    teamMembers: [],
    teamMembersFail: false
}

export function teamsReducer(state:TeamsState = initialState, action: Action)
{
    switch(action.type) {
        case TeamsActions.CREATE_TEAM_SUCCESS: {
            const {payload} = (action as TeamsActions.CreateTeamSuccess);
            const ad = adapter.addOne(payload, state.teams);
            return {...state, loading: false, teams: ad};
        }
        case TeamsActions.CREATE_TEAM_FAIL: {
            return {...state, loading: false, createTeamFail: true};
        }
        case TeamsActions.GET_USER_TEAMS_SUCCESS: {
            const {payload} = (action as TeamsActions.GetUserTeamsSuccess);
            const ad = adapter.addAll(payload, state.teams);
            return {...state, loading:false, teams: ad};
        }
        case TeamsActions.GET_USER_TEAMS_FAIL: {
            return {...state, loading: false, getTeamsFail: true};
        }
        case TeamsActions.ADD_TEAM_MEMBER_SUCCESS: {
            const {payload} = (action as TeamsActions.AddTeamMemberSuccess);
            return {...state, loading:false, addMemberSuccess: true};
        }
        case TeamsActions.ADD_TEAM_MEMBER_FAIL: {
            return {...state, loading:false, addMemberFail: true};
        }
        case TeamsActions.REMOVE_TEAM_MEMBER_SUCCESS: {
            const {payload} = (action as TeamsActions.RemoveTeamMemberSuccess);
            return {...state, loading:false, removeMemberSuccess: true};
        }
        case TeamsActions.REMOVE_TEAM_MEMBER_FAIL: {
            return {...state, loading:false, removeMemberFail: true};
        }
        case TeamsActions.GET_TEAM_MEMBERS_SUCCESS: {
            const {payload} = (action as TeamsActions.GetTeamMembersSuccess);
             return {...state, loading:false, teamMembers: payload};
        }
        case TeamsActions.GET_TEAM_MEMBERS_FAIL: {
            return {...state, loading:false, teamMembersFail: true};
        }
        case TeamsActions.CLEAR_INFO: {
            return {...state, loading: true, teams:initialTeams};
        }
        case TeamsActions.LOG_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}

export const selectors = adapter.getSelectors();